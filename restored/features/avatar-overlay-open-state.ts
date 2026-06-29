// Restored from ref/webview/assets/app-initial~app-main~pets-settings-eXPTB2Dp.js
// Shared state for whether the avatar overlay is open.
import {
  createAppScopedSignal,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";

export const avatarOverlayOpenSignal = createAppScopedSignal<boolean>(false);

export function initAvatarOverlayOpenStateChunk(): void {
  initAppScopeSignalRuntime();
}
