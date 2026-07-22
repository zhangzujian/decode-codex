// Restored from ref/webview/assets/thread-side-panel-tabs-DDAJVj-n.js
// Semantic side-panel tab barrel for the updated Codex webview bundle.
import {
  openBrowserTab as openThreadBrowserSidePanelTab,
  openOrCreateBrowserTab as openThreadBrowserSidePanelTabWithPendingState,
} from "../browser/side-panel-browser-tab-commands";
import { openExistingBrowserTab as openThreadBrowserSidePanelTabWithoutAnimation } from "../browser/side-panel-browser-tab-open-existing";
import { resolveSidePanelBrowserTabId as getBrowserTabIdForSidePanelOpen } from "../browser/browser-tab-id-resolution";
import {
  openBrowserRouteSidePanelTabUnavailable as openThreadTimelineSidePanel,
  openExistingBrowserRouteSidePanelTabUnavailable as openSessionSandboxSidePanel,
} from "../browser/browser-route-side-panel-stubs";
import {
  closeMcpAppTab as closeThreadMcpAppSidePanelTab,
  mcpAppTabId as getThreadMcpAppSidePanelTabId,
  openMcpAppTab as openThreadMcpAppSidePanelTab,
} from "../plugins/mcp-app-tab";
import {
  openBranchReviewTab as openThreadBranchReviewSidePanelTab,
  openReviewTab as openThreadReviewSidePanelTab,
  openReviewTabForConversation as openThreadLastTurnReviewSidePanelTab,
} from "../review/review-side-panel-tab-commands";
import { rightPanelExpandedSignal } from "./app-shell-state";
import { rightAppShellTabController } from "./app-shell-tab-controller";
import type {
  AppShellStore,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";
import { SidePanelTabKind } from "./side-panel-runtime";
import { transferForkedConversationBrowserTabs as primeBrowserTabTransfers } from "./thread-browser-panel-tabs";
import { setThreadSidePanelExpanded } from "./thread-side-panel-visibility";

const toggleThreadSidePanel = setThreadSidePanelExpanded;

const THREAD_SIDE_PANEL_TAB = {
  BROWSER: "browser",
  DIFF: "diff",
  MCP_APP: "mcp-app",
  PLAN: "plan",
  SANDBOX: "sandbox",
  TIMELINE: "timeline",
} as const;

function toggleThreadReviewSidePanelTab(store: AppShellStore): boolean {
  const activeTab = store.get<AppShellTabRecord | null>(
    rightAppShellTabController.activeTab$,
  );
  if (
    store.get<boolean>(rightPanelExpandedSignal) &&
    activeTab?.tabId === SidePanelTabKind.DIFF
  ) {
    setThreadSidePanelExpanded(store, false);
    return true;
  }
  return openThreadReviewSidePanelTab(store);
}

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
  toggleThreadReviewSidePanelTab,
  toggleThreadSidePanel,
};
