// Restored from ref/webview/assets/hotkey-window-state-5mYLM9i4.js
// hotkey-window-state-5mYLM9i4 chunk restored from the Codex webview bundle.
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu-Dg7uZJVh.js.
import {
  _appScopeM as createQuerySignal,
  appScopeRoot,
} from "../boundaries/app-scope";
import { appServices } from "../boundaries/rpc.facade";
export type LauncherHotkeyState = {
  supported: boolean;
  configuredHotkey: string | null;
  isGateEnabled: boolean;
  isDevMode: boolean;
  isDevOverrideEnabled: boolean;
  isActive: boolean;
};
const DEFAULT_LAUNCHER_HOTKEY_STATE: LauncherHotkeyState = {
  supported: false,
  configuredHotkey: null,
  isGateEnabled: false,
  isDevMode: false,
  isDevOverrideEnabled: false,
  isActive: false,
};
const launcherHotkeyStateQueryKey = ["hotkey-window-hotkey-state"];
export const launcherHotkeyStateQuery = createQuerySignal(appScopeRoot, () => ({
  queryKey: launcherHotkeyStateQueryKey,
  queryFn: async () =>
    appServices.hotkeyWindowHotkeys?.getState() ??
    DEFAULT_LAUNCHER_HOTKEY_STATE,
}));
export function initLauncherHotkeyStateChunk(): void {}

export { launcherHotkeyStateQueryKey };
