// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Local conversation composer bridge and host connection signals.
import {
  UE as LOCAL_HOST_ID,
  tp as hostConnectionStatusSignal,
  wP as initLocalConversationComposerBridge,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export { hostConnectionStatusSignal, LOCAL_HOST_ID };

export function initLocalConversationComposerRuntime(): void {
  initLocalConversationComposerBridge();
}
