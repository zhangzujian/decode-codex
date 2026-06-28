// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Browser-use summary model glue for the local conversation summary panel.
import { once } from "../../runtime/commonjs-interop";
import {
  G_ as multiBrowserTabsEnabledSignal,
  IB as useSignalValue,
  T_ as getRouteConversationId,
  Ts as initBrowserFeatureAvailabilitySignals,
  uz as NEW_TAB_TITLE,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  bottomPanelTabsStore,
  rightPanelTabsStore,
} from "../../runtime/thread-panel-tabs-store";
import type { BrowserUseSummary } from "./browser-use-summary";
import { useBrowserUseSummaries } from "./browser-use-summary-store";

type LocalConversationRouteScopeSnapshot = unknown;

export function useThreadSummaryBrowserUseSummaries(
  routeScopeSnapshot: LocalConversationRouteScopeSnapshot,
): BrowserUseSummary[] {
  let conversationId = getRouteConversationId(routeScopeSnapshot),
    isMultiBrowserTabsGateEnabled = useSignalValue(
      multiBrowserTabsEnabledSignal,
    ),
    rightPanelTabs = useSignalValue(rightPanelTabsStore.tabs$),
    bottomPanelTabs = useSignalValue(bottomPanelTabsStore.tabs$);

  return useBrowserUseSummaries({
    blankTitle: NEW_TAB_TITLE,
    bottomPanelTabs,
    conversationId,
    isMultiBrowserTabsGateEnabled,
    rightPanelTabs,
  });
}

export const initThreadSummaryBrowserUseModelChunk = once(() => {
  initBrowserFeatureAvailabilitySignals();
});
