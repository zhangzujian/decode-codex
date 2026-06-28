// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host config helper initialization.
import {
  GE as initLocalHostConstantsRaw,
  HE as useHostConfigByIdRaw,
  VE as initHostConfigHelpersRaw,
} from "../vendor/appg-thread-shared-runtime";
import { $h as getHostConfigKeyRaw } from "../vendor/projects-app-shared-runtime";

export type HostConfigRecord = {
  id: string;
  kind?: string;
} & Record<string, unknown>;

export function initHostConfigRuntime(): void {
  initHostConfigHelpersRaw();
}

export function initLocalHostConstantsRuntime(): void {
  initLocalHostConstantsRaw();
}

export function getHostConfigKey(hostConfig: HostConfigRecord): string {
  return getHostConfigKeyRaw(hostConfig);
}

export function useHostConfigById<THostConfig extends HostConfigRecord>(
  hostId: string,
): THostConfig {
  return useHostConfigByIdRaw(hostId) as THostConfig;
}
