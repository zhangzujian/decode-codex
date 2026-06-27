// Restored from ref/webview/assets/thread-side-panel-tabs-_WbpVYWU.js
// Semantic side-panel tab barrel for the updated Codex webview bundle.
import { A_ as THREAD_SIDE_PANEL_TAB } from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  Br as openThreadMcpAppSidePanelTab,
  Lr as closeThreadMcpAppSidePanelTab,
  Rr as getThreadMcpAppSidePanelTabId,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  $c as openThreadBrowserSidePanelTab,
  Qc as openThreadBranchReviewSidePanelTab,
  Xc as initEmptyPageStateChunk,
  Yc as getBrowserTabIdForSidePanelOpen,
  Zc as openSessionSandboxSidePanel,
  al as primeBrowserTabTransfers,
  el as openThreadBrowserSidePanelTabWithPendingState,
  il as openThreadTimelineSidePanel,
  nl as openThreadLastTurnReviewSidePanelTab,
  ol as toggleThreadSidePanel,
  rl as openThreadReviewSidePanelTab,
  tl as openThreadBrowserSidePanelTabWithoutAnimation,
} from "../boundaries/current-ref/profile-page-producer";

initEmptyPageStateChunk();

export {
  THREAD_SIDE_PANEL_TAB,
  closeThreadMcpAppSidePanelTab,
  getBrowserTabIdForSidePanelOpen,
  getThreadMcpAppSidePanelTabId,
  openSessionSandboxSidePanel,
  openThreadBranchReviewSidePanelTab,
  openThreadBrowserSidePanelTab,
  openThreadBrowserSidePanelTabWithPendingState,
  openThreadBrowserSidePanelTabWithoutAnimation,
  openThreadLastTurnReviewSidePanelTab,
  openThreadMcpAppSidePanelTab,
  openThreadReviewSidePanelTab,
  openThreadTimelineSidePanel,
  primeBrowserTabTransfers,
  toggleThreadSidePanel,
};
