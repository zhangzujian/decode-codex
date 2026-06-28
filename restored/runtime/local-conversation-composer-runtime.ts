// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Local conversation composer bridge and host connection signals.
import {
  UE as LOCAL_HOST_ID,
  tp as hostConnectionStatusSignal,
  wP as initLocalConversationComposerBridge,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  Vn as localWorkspaceMaterializationSignal,
  cs as backgroundAgentsSignal,
} from "../boundaries/current-ref/profile-page-producer";
import {
  initThreadComposerFooterChunk,
  threadComposerContext,
  ThreadComposerFooter,
} from "../composer/thread-composer-footer";
export type {
  ThreadComposerFooterProps,
  ThreadComposerFooterSideConversationRequest,
} from "../composer/thread-composer-footer";

export {
  backgroundAgentsSignal,
  hostConnectionStatusSignal,
  LOCAL_HOST_ID,
  localWorkspaceMaterializationSignal,
  threadComposerContext,
  ThreadComposerFooter,
};

export function initLocalConversationComposerRuntime(): void {
  initLocalConversationComposerBridge();
}

export function initThreadComposerFooterRuntime(): void {
  initThreadComposerFooterChunk();
}
