// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Local environment config-path normalization helpers.
import {
  kj as normalizeConfigPathRaw,
  wj as initConfigPathHelpers,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export function initConfigPathRuntime(): void {
  initConfigPathHelpers();
}

export function normalizeConfigPath(path: string): string {
  return normalizeConfigPathRaw(path);
}
