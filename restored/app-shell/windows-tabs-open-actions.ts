// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js
// Semantic wrappers for app-shell tab actions still backed by the shared producer.
import {
  Ds as openTerminalPanelTab,
  Ts as isTerminalPanelTabAvailable,
  dl as setReviewBaseBranchForThread,
  js as defaultTerminalPanelPlacementSignal,
  ko as focusReviewFilePath,
  vl as setReviewPanelView,
  zl as activeThreadHostIdSignal,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  findBrowserPanelTab,
  getBrowserPanelTabs,
} from "../runtime/thread-browser-panel-tabs";
import {
  activateThreadPanelTab,
  findPanelForTab,
  getThreadPanelController,
  THREAD_PANEL_IDS,
} from "../runtime/thread-panel-state";
import type { AppShellStore } from "../runtime/app-shell-tab-controller/types";

export type WindowsTabsOpenPlacement = "right" | "bottom";
export type WindowsTabsOpenReviewView =
  | "last-turn"
  | "branch"
  | "unstaged"
  | "staged";

type AppShellActionScope = {
  get: <TValue>(state: unknown, key?: unknown) => TValue;
};

type BrowserPanelTabMatch = {
  browserTabId: string;
  target: WindowsTabsOpenPlacement;
};

export function getActiveThreadHostId(
  scope: AppShellActionScope,
): string | null | undefined {
  return scope.get<string | null | undefined>(activeThreadHostIdSignal);
}

export function getBrowserPanelTabsForThread(
  scope: AppShellActionScope,
  threadId: string,
): BrowserPanelTabMatch[] {
  return getBrowserPanelTabs(asAppShellStore(scope), threadId).map(
    ({ browserTabId, target }) => ({
      browserTabId,
      target,
    }),
  );
}

export function getBrowserPanelTabForThread(
  scope: AppShellActionScope,
  threadId: string,
  browserTabId: string,
): BrowserPanelTabMatch | null {
  let browserPanelTab = findBrowserPanelTab(
    asAppShellStore(scope),
    threadId,
    browserTabId,
  );
  return browserPanelTab == null
    ? null
    : {
        browserTabId: browserPanelTab.browserTabId,
        target: browserPanelTab.target,
      };
}

export function getDefaultTerminalPanelPlacement(
  scope: AppShellActionScope,
): WindowsTabsOpenPlacement {
  return scope.get<WindowsTabsOpenPlacement>(
    defaultTerminalPanelPlacementSignal,
  );
}

export function getExistingTerminalTabIds(
  scope: AppShellActionScope,
): string[] {
  return THREAD_PANEL_IDS.flatMap((panel) =>
    scope.get<string[]>(getThreadPanelController(panel).tabIds$),
  );
}

export function getPanelPlacementForTab(
  scope: AppShellActionScope,
  tabId: string,
): WindowsTabsOpenPlacement | null {
  return findPanelForTab(asAppShellStore(scope), tabId);
}

export function activateExistingPanelTab(
  scope: AppShellActionScope,
  placement: WindowsTabsOpenPlacement,
  tabId: string,
): boolean {
  return activateThreadPanelTab(asAppShellStore(scope), placement, tabId);
}

export function isTerminalTabAvailableForThread(
  scope: AppShellActionScope,
): boolean {
  return isTerminalPanelTabAvailable(scope);
}

export function openTerminalTabForThread(
  scope: AppShellActionScope,
  sessionId: string | undefined,
  placement: WindowsTabsOpenPlacement,
): string | null {
  return openTerminalPanelTab(scope, sessionId, placement);
}

export function selectReviewBaseBranch(
  scope: AppShellActionScope,
  threadId: string | null,
  baseBranch: string,
): void {
  setReviewBaseBranchForThread(scope, threadId, baseBranch);
}

export function selectReviewView(
  scope: AppShellActionScope,
  view: WindowsTabsOpenReviewView,
): void {
  setReviewPanelView(scope, view);
}

export function focusReviewPath(
  scope: AppShellActionScope,
  path: string,
): void {
  focusReviewFilePath(scope, path);
}

function asAppShellStore(scope: AppShellActionScope): AppShellStore {
  return scope as AppShellStore;
}
