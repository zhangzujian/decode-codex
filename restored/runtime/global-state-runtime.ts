// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Global-state query helpers backed by the current app-main runtime aliases.
import { globalSettingKeys as GLOBAL_STATE_KEYS } from "../boundaries/src-l0hb-mz-p";
import {
  Dd as initGlobalStateQueryRuntimeRaw,
  Ed as globalStateQuerySignalRaw,
  Od as setGlobalStateValueRaw,
  Td as globalStateQueryRequestSignalRaw,
  wd as getGlobalStateValueRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import { useScopedValue } from "./app-scope-hooks";

export { GLOBAL_STATE_KEYS };

export const globalStateQuerySignal = globalStateQuerySignalRaw as unknown;
export const globalStateQueryRequestSignal =
  globalStateQueryRequestSignalRaw as unknown;

export type GlobalStateQueryResult<TData = unknown> = {
  data?: TData;
  error?: unknown;
  isFetching?: boolean;
  isLoading?: boolean;
};

export function initGlobalStateQueryRuntime(): void {
  initGlobalStateQueryRuntimeRaw();
}

export function getGlobalStateValue<TData = unknown>(
  get: unknown,
  key: unknown,
): TData | undefined {
  return getGlobalStateValueRaw(get, key) as TData | undefined;
}

export async function setGlobalStateValue(
  scope: unknown,
  key: unknown,
  value: unknown,
  options?: unknown,
): Promise<void> {
  await setGlobalStateValueRaw(scope, key, value, options);
}

export function useGlobalStateQuery<TData = unknown>(
  key: unknown,
  options?: unknown,
): GlobalStateQueryResult<TData> {
  void options;
  return useScopedValue<GlobalStateQueryResult<TData>>(
    globalStateQuerySignal,
    key,
  );
}
