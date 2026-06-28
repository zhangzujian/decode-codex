// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Local conversation composer bridge and host connection signals.
import {
  UE as LOCAL_HOST_ID,
  tp as hostConnectionStatusSignal,
  wP as initLocalConversationComposerBridge,
} from "../vendor/appg-thread-shared-runtime";
import {
  Vn as localWorkspaceMaterializationSignal,
  cs as backgroundAgentsSignal,
} from "../vendor/profile-page-runtime";

import {
  initThreadComposerFooterChunk,
  threadComposerContext,
  ThreadComposerFooter,
} from "./thread-composer-footer";
export type {
  ThreadComposerFooterProps,
  ThreadComposerFooterSideConversationRequest,
} from "./thread-composer-footer";

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

