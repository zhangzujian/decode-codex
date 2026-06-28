// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js
// Thread terminal side-panel helpers backed by the current projects app bundle.
import {
  Ds as openTerminalPanelTab,
  Ts as isTerminalPanelTabAvailable,
  js as defaultTerminalPanelPlacementSignal,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  getThreadPanelController,
  THREAD_PANEL_IDS,
} from "./thread-panel-state";

export type ThreadTerminalPanelPlacement = "right" | "bottom";

type ThreadTerminalScope = {
  get<TValue>(state: unknown, key?: unknown): TValue;
};

const THREAD_TERMINAL_TAB_PREFIX = "terminal:";

export function getDefaultThreadTerminalPanelPlacement(
  scope: ThreadTerminalScope,
): ThreadTerminalPanelPlacement {
  return scope.get<ThreadTerminalPanelPlacement>(
    defaultTerminalPanelPlacementSignal,
  );
}

export function getThreadTerminalPanelTabId(sessionId: string): string {
  return `${THREAD_TERMINAL_TAB_PREFIX}${sessionId}`;
}

export function getOpenThreadTerminalPanelTabIds(
  scope: ThreadTerminalScope,
): string[] {
  return THREAD_PANEL_IDS.flatMap((panelId) =>
    scope.get<string[]>(getThreadPanelController(panelId).tabIds$),
  ).filter(isThreadTerminalPanelTabId);
}

export function isThreadTerminalPanelTabAvailable(
  scope: ThreadTerminalScope,
): boolean {
  return isTerminalPanelTabAvailable(scope);
}

export function openThreadTerminalPanelTab(
  scope: ThreadTerminalScope,
  sessionId: string | undefined,
  placement: ThreadTerminalPanelPlacement,
): string | null {
  return openTerminalPanelTab(scope, sessionId, placement);
}

function isThreadTerminalPanelTabId(tabId: string): boolean {
  return tabId.startsWith(THREAD_TERMINAL_TAB_PREFIX);
}
