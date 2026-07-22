// Restored from ref/webview/assets/codex-app-home-beacon-debug-state-BSLFTifq.js
// Debug channel and persisted enablement signal for the Codex home beacon.
import { once } from "../runtime/commonjs-interop";
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
} from "../runtime/shared-utility-runtime";
export function isCodexAppHomeBeaconDebugChannel(channel: string): boolean {
  return channel === CODEX_APP_HOME_BEACON_DEBUG_CHANNEL;
}
export let codexAppHomeBeaconDebugEnabledSignal: unknown;
export const initCodexAppHomeBeaconDebugStateChunk = once(() => {
  initPersistentSignalRuntime();
  codexAppHomeBeaconDebugEnabledSignal = createPersistentSignal(
    "electron:codex-app-home-beacon-debug-enabled",
    false,
  );
});
export const CODEX_APP_HOME_BEACON_DEBUG_CHANNEL =
  "codex_app_home_beacon_debug";
