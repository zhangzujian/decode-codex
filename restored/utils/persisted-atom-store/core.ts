// Restored from ref/webview/assets/persisted-atom-store-CN8swCI1.js
import { clearPersistedAtomLocalStorage } from "./local-storage";
import type {
  PendingPersistedAtomWrite,
  PersistedAtomStorage,
  PersistedAtomStorageWriter,
  PersistedAtomSubscription,
  SchedulePersistedAtomWriteOptions,
} from "./types";

export const persistedAtomValues = new Map<string, unknown>();
const persistedAtomSubscriptions = new Map<
  string,
  Set<PersistedAtomSubscription>
>();
const pendingPersistedAtomWrites = new Map<string, PendingPersistedAtomWrite>();
let persistedAtomStorageWriter: PersistedAtomStorageWriter | null = null;
let persistedAtomStoreRevision = 0;
let resolvePersistedAtomsSynced: (() => void) | null = null;
void new Promise<void>((resolve) => {
  resolvePersistedAtomsSynced = resolve;
});

function requirePersistedAtomStorageWriter() {
  const writer = persistedAtomStorageWriter;
  if (writer) return writer;
  throw Error("Persisted atom store accessed before initialization");
}

function notifyPersistedAtomSubscribers(key: string) {
  const subscriptions = persistedAtomSubscriptions.get(key);
  if (!subscriptions) return;
  const hasValue = persistedAtomValues.has(key);
  const value = hasValue ? persistedAtomValues.get(key) : undefined;
  subscriptions.forEach((subscription) => {
    subscription.callback(hasValue ? value : subscription.fallback);
  });
}

function setPersistedAtomValue(
  key: string,
  value: unknown | undefined,
  shouldPersist: boolean,
) {
  const writer = requirePersistedAtomStorageWriter();
  if (value === undefined) persistedAtomValues.delete(key);
  else persistedAtomValues.set(key, value);
  if (shouldPersist) writer(key, value);
  notifyPersistedAtomSubscribers(key);
}

function cancelPendingPersistedAtomWrite(key: string): void {
  const pendingWrite = pendingPersistedAtomWrites.get(key);
  if (pendingWrite == null) return;
  clearTimeout(pendingWrite.timeoutId);
  pendingPersistedAtomWrites.delete(key);
}

function cancelPendingPersistedAtomWrites(): void {
  pendingPersistedAtomWrites.forEach(({ timeoutId }) =>
    clearTimeout(timeoutId),
  );
  pendingPersistedAtomWrites.clear();
}

function publishPendingPersistedAtomWrite(key: string, token: symbol): void {
  const pendingWrite = pendingPersistedAtomWrites.get(key);
  if (
    pendingWrite == null ||
    pendingWrite.token !== token ||
    pendingWrite.storeRevision !== persistedAtomStoreRevision
  ) {
    return;
  }
  clearTimeout(pendingWrite.timeoutId);
  pendingPersistedAtomWrites.delete(key);
  if (pendingWrite.shouldPublish?.() === false) {
    setPersistedAtomValue(key, pendingWrite.baseValue, false);
    return;
  }
  requirePersistedAtomStorageWriter()(key, pendingWrite.value);
}

export function clearPersistedAtomStore() {
  requirePersistedAtomStorageWriter();
  const keys = Array.from(
    new Set([
      ...persistedAtomValues.keys(),
      ...pendingPersistedAtomWrites.keys(),
    ]),
  );
  cancelPendingPersistedAtomWrites();
  persistedAtomStoreRevision += 1;
  persistedAtomValues.clear();
  const writer = persistedAtomStorageWriter;
  if (writer) keys.forEach((key) => writer(key, undefined));
  keys.forEach((key) => notifyPersistedAtomSubscribers(key));
  clearPersistedAtomLocalStorage();
}

export function createPersistedAtomStore() {
  return {
    getItem: (key: string, fallback: unknown) => {
      requirePersistedAtomStorageWriter();
      return persistedAtomValues.has(key)
        ? persistedAtomValues.get(key)
        : fallback;
    },
    setItem: (key: string, value: unknown | undefined) => {
      requirePersistedAtomStorageWriter();
      cancelPendingPersistedAtomWrite(key);
      setPersistedAtomValue(key, value, true);
    },
    removeItem: (key: string) => {
      requirePersistedAtomStorageWriter();
      cancelPendingPersistedAtomWrite(key);
      setPersistedAtomValue(key, undefined, true);
    },
    subscribe: (
      key: string,
      callback: (value: unknown) => void,
      fallback: unknown,
    ) => {
      requirePersistedAtomStorageWriter();
      const subscription = { callback, fallback };
      const subscriptions =
        persistedAtomSubscriptions.get(key) ??
        new Set<PersistedAtomSubscription>();
      subscriptions.add(subscription);
      persistedAtomSubscriptions.set(key, subscriptions);
      return () => {
        const currentSubscriptions = persistedAtomSubscriptions.get(key);
        currentSubscriptions?.delete(subscription);
        if (currentSubscriptions?.size === 0) {
          persistedAtomSubscriptions.delete(key);
        }
      };
    },
  };
}

export function getPersistedAtomValue(key: string, fallback: unknown) {
  return createPersistedAtomStore().getItem(key, fallback);
}

export function setPersistedAtomItem(key: string, value: unknown | undefined) {
  createPersistedAtomStore().setItem(key, value);
}

export function setPersistedAtomValueInMemory(
  key: string,
  value: unknown | undefined,
) {
  requirePersistedAtomStorageWriter();
  const pendingWrite = pendingPersistedAtomWrites.get(key);
  if (pendingWrite != null && Object.is(value, pendingWrite.baseValue)) return;
  cancelPendingPersistedAtomWrite(key);
  setPersistedAtomValue(key, value, false);
}

export function schedulePersistedAtomWrite(
  key: string,
  value: unknown,
  delayMs: number,
  options?: SchedulePersistedAtomWriteOptions,
): void {
  requirePersistedAtomStorageWriter();
  if (Object.is(persistedAtomValues.get(key), value)) return;
  const pendingWrite = pendingPersistedAtomWrites.get(key);
  const baseValue = pendingWrite?.baseValue ?? persistedAtomValues.get(key);
  cancelPendingPersistedAtomWrite(key);
  const token = Symbol();
  const timeoutId = setTimeout(() => {
    publishPendingPersistedAtomWrite(key, token);
  }, delayMs);
  pendingPersistedAtomWrites.set(key, {
    baseValue,
    shouldPublish: options?.shouldPublish,
    storeRevision: persistedAtomStoreRevision,
    timeoutId,
    token,
    value,
  });
  setPersistedAtomValue(key, value, false);
}

export function flushPersistedAtomKey(key: string): void {
  const pendingWrite = pendingPersistedAtomWrites.get(key);
  if (pendingWrite != null) {
    publishPendingPersistedAtomWrite(key, pendingWrite.token);
  }
}

export function flushPendingPersistedAtoms(): void {
  Array.from(pendingPersistedAtomWrites.keys()).forEach(flushPersistedAtomKey);
}

export function clearPersistedAtomPrefix(prefix: string): void {
  requirePersistedAtomStorageWriter();
  new Set([
    ...persistedAtomValues.keys(),
    ...pendingPersistedAtomWrites.keys(),
  ]).forEach((key) => {
    if (!key.startsWith(prefix)) return;
    cancelPendingPersistedAtomWrite(key);
    setPersistedAtomValue(key, undefined, true);
  });
}

export function initializePersistedAtomStore(
  storage: PersistedAtomStorage,
  writer: PersistedAtomStorageWriter,
) {
  cancelPendingPersistedAtomWrites();
  persistedAtomStoreRevision += 1;
  const changedKeys = new Set([
    ...persistedAtomValues.keys(),
    ...Object.keys(storage),
  ]);
  persistedAtomValues.clear();
  Object.entries(storage).forEach(([key, value]) => {
    if (value !== undefined) persistedAtomValues.set(key, value);
  });
  persistedAtomStorageWriter = writer;
  changedKeys.forEach((key) => notifyPersistedAtomSubscribers(key));
}

export function markPersistedAtomsSynced(): void {
  resolvePersistedAtomsSynced?.();
  resolvePersistedAtomsSynced = null;
}

export const persistedAtomsRegistry = {};

export function subscribePersistedAtomValue(
  key: string,
  fallback: unknown,
  callback: (value: unknown) => void,
) {
  const unsubscribe = createPersistedAtomStore().subscribe(
    key,
    callback,
    fallback,
  );
  return () => unsubscribe?.();
}
