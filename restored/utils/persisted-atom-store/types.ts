export type PersistedAtomStorage = Record<string, unknown>;
export type PersistedAtomStorageWriter = (
  key: string,
  value: unknown | undefined,
) => void;
export type PersistedAtomSubscription = {
  callback: (value: unknown) => void;
  fallback: unknown;
};
export type PendingPersistedAtomWrite = {
  baseValue: unknown;
  shouldPublish?: () => boolean;
  storeRevision: number;
  timeoutId: ReturnType<typeof setTimeout>;
  token: symbol;
  value: unknown;
};
export type SchedulePersistedAtomWriteOptions = {
  shouldPublish?: () => boolean;
};
