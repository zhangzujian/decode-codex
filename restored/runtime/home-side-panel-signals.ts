// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Boolean layout/feature signals that drive the home side-panel composer layout.
// Both are writable app-scope atoms (default false) in the kg2pu5rs new-thread
// chunk. When pull-request sync is enabled AND the side panel is expanded, the
// home composer collapses into the side-panel footer slot.
import {
  Qp as isPullRequestSyncEnabledSignalRef,
  hm as isHomeSidePanelExpandedSignalRef,
} from "../vendor/worktree-new-thread-orchestrator-current-bundle";

/** Signal: whether the home side panel is currently expanded. */
export const isHomeSidePanelExpandedSignal = isHomeSidePanelExpandedSignalRef;

/** Signal: whether pull-request sync is enabled for the current session. */
export const isPullRequestSyncEnabledSignal = isPullRequestSyncEnabledSignalRef;
