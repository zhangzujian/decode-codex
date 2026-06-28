// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js
// Semantic wrappers for app-shell tab actions still backed by the shared producer.
import {
  Ds as openTerminalPanelTab,
  Ts as isTerminalPanelTabAvailable,
  _c as getSidePanelController,
  ac as getBrowserPanelTabFromProducer,
  dl as setReviewBaseBranchForThread,
  hc as activatePanelTabFromProducer,
  js as defaultTerminalPanelPlacementSignal,
  ko as focusReviewFilePath,
  mc as sidePanelPlacements,
  oc as getBrowserPanelTabsForThreadFromProducer,
  vc as getPanelTabPlacementFromProducer,
  vl as setReviewPanelView,
  zl as activeThreadHostIdSignal,
} from "../boundaries/current-ref/projects-app-shared-producer";

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
  return getBrowserPanelTabsForThreadFromProducer(scope, threadId);
}

export function getBrowserPanelTabForThread(
  scope: AppShellActionScope,
  threadId: string,
  browserTabId: string,
): BrowserPanelTabMatch | null {
  return getBrowserPanelTabFromProducer(scope, threadId, browserTabId) ?? null;
}

export function getDefaultTerminalPanelPlacement(
  scope: AppShellActionScope,
): WindowsTabsOpenPlacement {
  return scope.get<WindowsTabsOpenPlacement>(defaultTerminalPanelPlacementSignal);
}

export function getExistingTerminalTabIds(
  scope: AppShellActionScope,
): string[] {
  return (sidePanelPlacements as readonly WindowsTabsOpenPlacement[]).flatMap(
    (panel) => scope.get<string[]>(getSidePanelController(panel).tabIds$),
  );
}

export function getPanelPlacementForTab(
  scope: AppShellActionScope,
  tabId: string,
): WindowsTabsOpenPlacement | null {
  return getPanelTabPlacementFromProducer(scope, tabId) ?? null;
}

export function activateExistingPanelTab(
  scope: AppShellActionScope,
  placement: WindowsTabsOpenPlacement,
  tabId: string,
): boolean {
  return activatePanelTabFromProducer(scope, placement, tabId);
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
