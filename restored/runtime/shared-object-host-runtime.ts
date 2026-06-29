// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js
// Shared-object host state and remote host config helpers for the current app-main runtime.
import {
  _ as initSharedObjectAppScopeRootRaw,
  a as useSharedObjectHostConfigByIdRaw,
  c as initLocalHostKindRuntimeRaw,
  d as initSharedObjectStateRuntimeRaw,
  f as useSharedObjectStateRaw,
  g as sharedObjectAppScopeRootRaw,
  h as updateSharedObjectValueRaw,
  i as initRemoteHostConfigRuntimeRaw,
  l as initRemoteConnectionListRuntimeRaw,
  m as initSharedObjectSignalFamilyRuntimeRaw,
  n as isCurrentHostLocalRaw,
  o as localHostKindRaw,
  p as readSharedObjectValueWithReaderRaw,
  r as findRemoteHostConfigByIdRaw,
  s as localHostKindAliasRaw,
  t as initSharedObjectHostRuntimeRaw,
  u as useRemoteHostConfigsRaw,
} from "../../ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js";

export type SharedObjectScope = {
  get<TValue = unknown>(signal: unknown, key: string): TValue | undefined;
  set<TValue = unknown>(signal: unknown, key: string, value: TValue): void;
};

export type SharedObjectUpdate<TValue> =
  | TValue
  | ((currentValue: TValue | undefined) => TValue);

export type SharedObjectState<TValue> = readonly [
  TValue | undefined,
  (nextValue: SharedObjectUpdate<TValue>) => void,
];

export type SharedObjectValueReader<TValue = unknown> = (
  signal: unknown,
  key: string,
) => TValue;

export type RemoteHostConfig = {
  hostId?: string;
  id?: string;
  display_name?: string;
  kind?: string;
} & Record<string, unknown>;

export type RemoteHostConfigOptions = {
  waitForRemoteSshConnections?: boolean;
};

export {
  localHostKindAliasRaw as localHostKindAlias,
  localHostKindRaw as localHostKind,
  sharedObjectAppScopeRootRaw as appScopeRoot,
  sharedObjectAppScopeRootRaw as sharedObjectAppScopeRoot,
};

export function initSharedObjectAppScopeRoot(): void {
  initSharedObjectAppScopeRootRaw();
}

export function initLocalHostKindRuntime(): void {
  initLocalHostKindRuntimeRaw();
}

export function initSharedObjectStateRuntime(): void {
  initSharedObjectStateRuntimeRaw();
}

export function initSharedObjectSignalFamilyRuntime(): void {
  initSharedObjectSignalFamilyRuntimeRaw();
}

export function initRemoteConnectionListRuntime(): void {
  initRemoteConnectionListRuntimeRaw();
}

export function initRemoteHostConfigRuntime(): void {
  initRemoteHostConfigRuntimeRaw();
}

export function initSharedObjectHostRuntime(): void {
  initSharedObjectHostRuntimeRaw();
}

export function updateSharedObjectValue<TValue>(
  scope: SharedObjectScope,
  key: string,
  nextValue: SharedObjectUpdate<TValue>,
): void {
  updateSharedObjectValueRaw(scope, key, nextValue);
}

export function readSharedObjectValueWithReader<TValue = unknown>(
  reader: SharedObjectValueReader<TValue>,
  key: string,
): TValue {
  return readSharedObjectValueWithReaderRaw(reader, key) as TValue;
}

export function useSharedObjectState<TValue = unknown>(
  key: string,
): SharedObjectState<TValue> {
  return useSharedObjectStateRaw(key) as SharedObjectState<TValue>;
}

export function useRemoteHostConfigs(
  options?: RemoteHostConfigOptions,
): RemoteHostConfig[] | undefined {
  return useRemoteHostConfigsRaw(options) as RemoteHostConfig[] | undefined;
}

export function useSharedObjectHostConfigById<
  THostConfig extends RemoteHostConfig = RemoteHostConfig,
>(hostId: string): THostConfig {
  return useSharedObjectHostConfigByIdRaw(hostId) as THostConfig;
}

export function findRemoteHostConfigById<
  THostConfig extends RemoteHostConfig = RemoteHostConfig,
>(
  hostId: string,
  remoteHostConfigs: RemoteHostConfig[] | undefined,
): THostConfig {
  return findRemoteHostConfigByIdRaw(hostId, remoteHostConfigs) as THostConfig;
}

export function isCurrentHostLocal(hostId: string): boolean {
  return isCurrentHostLocalRaw(hostId);
}
