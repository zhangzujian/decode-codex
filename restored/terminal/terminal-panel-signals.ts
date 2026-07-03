// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derived signals for terminal side-panel tab state.
import { _appScopeC as createComputedSignal } from "../boundaries/app-scope";
import { rightPanelOpenSignal } from "../app-shell/app-shell-state";
import { rightAppShellTabController } from "../app-shell/app-shell-tab-controller";
import type {
  AppShellStore,
  AppShellTabRecord,
} from "../app-shell/app-shell-tab-controller/types";
import { routeScope } from "../runtime/persisted-signal";

const TERMINAL_TAB_ID_PREFIX = "terminal:";

export function isTerminalPanelTab(
  tab: Pick<AppShellTabRecord, "tabId"> | null | undefined,
): boolean {
  return typeof tab?.tabId === "string"
    ? tab.tabId.startsWith(TERMINAL_TAB_ID_PREFIX)
    : false;
}

export const rightTerminalPanelOpenSignal = createComputedSignal(
  routeScope,
  ({ get }: { get: AppShellStore["get"] }) =>
    get<boolean>(rightPanelOpenSignal) &&
    isTerminalPanelTab(
      get<Pick<AppShellTabRecord, "tabId"> | null>(
        rightAppShellTabController.activeTab$,
      ),
    ),
);

export function initTerminalPanelSignalsChunk(): void {
  void rightTerminalPanelOpenSignal;
}
