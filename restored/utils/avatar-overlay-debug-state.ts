// Restored from ref/webview/assets/avatar-overlay-debug-state-EKY3POgm.js
// Persistent debug controls for the avatar overlay renderer and window chrome.
import { once } from "../runtime/commonjs-interop";
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
} from "../runtime/shared-utility-runtime";
let avatarOverlayResizeButtonHiddenSignal: unknown;
let avatarOverlayDebugWindowBorderVisibleSignal: unknown;
let avatarOverlayForceNonNativeRenderingSignal: unknown;
const initAvatarOverlayDebugStateChunk = once(() => {
  initPersistentSignalRuntime();
  avatarOverlayResizeButtonHiddenSignal = createPersistentSignal(
    "avatar-overlay-resize-button-hidden",
    false,
  );
  avatarOverlayDebugWindowBorderVisibleSignal = createPersistentSignal(
    "avatar-overlay-debug-window-border-visible",
    false,
  );
  avatarOverlayForceNonNativeRenderingSignal = createPersistentSignal(
    "avatar-overlay-force-non-native-rendering",
    false,
  );
});
export {
  initAvatarOverlayDebugStateChunk,
  avatarOverlayForceNonNativeRenderingSignal,
  avatarOverlayResizeButtonHiddenSignal,
  avatarOverlayDebugWindowBorderVisibleSignal,
};
