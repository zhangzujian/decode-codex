// Restored from ref/webview/assets/persisted-atom-store-CN8swCI1.js
import { initializePersistedAtomStore, persistedAtomValues } from "./core";
import type { PersistedAtomStorage, PersistedAtomStorageWriter } from "./types";

export const PERSISTED_ATOM_LOCAL_STORAGE_PREFIX = "codex:persisted-atom:";

export function clearPersistedAtomLocalStorage() {
  if (typeof window > "u" || !window.localStorage) return;
  const keys: string[] = [];
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (key?.startsWith(PERSISTED_ATOM_LOCAL_STORAGE_PREFIX)) keys.push(key);
  }
  keys.forEach((key) => window.localStorage.removeItem(key));
}

export function readPersistedAtomLocalStorage(prefix: string) {
  if (typeof window > "u" || !window.localStorage) return {};
  const storage: PersistedAtomStorage = {};
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (!key || !key.startsWith(prefix)) continue;
    const value = window.localStorage.getItem(key);
    if (value != null) {
      try {
        storage[key.replace(prefix, "")] = JSON.parse(value);
      } catch {
        window.localStorage.removeItem(key);
      }
    }
  }
  return storage;
}

export function readPersistedRecord<TRecord extends Record<string, unknown>>(
  key: string,
  fallback: TRecord,
): TRecord {
  const value = persistedAtomValues.has(key)
    ? persistedAtomValues.get(key)
    : readPersistedAtomLocalStorage(PERSISTED_ATOM_LOCAL_STORAGE_PREFIX)[key];
  return value != null && typeof value === "object"
    ? (value as TRecord)
    : fallback;
}

export function readPersistedAtomsSnapshot(
  _registry: unknown,
): PersistedAtomStorage {
  return {
    ...readPersistedAtomLocalStorage(PERSISTED_ATOM_LOCAL_STORAGE_PREFIX),
    ...Object.fromEntries(persistedAtomValues),
  };
}

export function hydratePersistedAtoms(
  state: PersistedAtomStorage,
  writer: PersistedAtomStorageWriter,
): void {
  initializePersistedAtomStore(state, writer);
}
