// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Thread summary panel animation config and route-scoped signal helpers.
import {
  $i as initSummaryPanelAnimationConfig,
  NM as createPersistedScopedSignalRaw,
  Qi as threadSummaryPanelSectionTransition,
  bV as createScopedSignalRaw,
  jM as initScopedSignalRuntime,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  Cd as pinnedSummaryPanelSpringTransition,
  Fr as installedMcpAppIdsSignal,
  Il as initRightPanelTabSignalsRaw,
  Jl as initInstalledMcpAppSignalsRaw,
  nu as initThreadSummaryPanelSignalsRuntimeRaw,
  id as rightPanelStateSignal,
  md as pinnedSummaryPanelPinnedSignal,
  nd as leftPanelStateSignal,
  Rl as hostConfigSignal,
  Wl as initConversationDisplayTitleSignalsRaw,
  wd as threadLayoutContext,
  yu as initWorkspaceRouteStateSignalsRaw,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  At as initRestoredProcessRowsCollectorDependenciesRaw,
  cs as backgroundAgentsSignal,
  kt as formatCommandExecutionItemCommand,
  ls as initSummaryPanelSourceHelpersRaw,
} from "../boundaries/current-ref/profile-page-producer";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "./local-conversation-route-runtime";

export {
  backgroundAgentsSignal,
  formatCommandExecutionItemCommand,
  hostConfigSignal,
  leftPanelStateSignal,
  installedMcpAppIdsSignal,
  pinnedSummaryPanelPinnedSignal,
  pinnedSummaryPanelSpringTransition,
  rightPanelStateSignal,
  threadLayoutContext,
  threadSummaryPanelSectionTransition,
};

export type ScopedSignalInitializer<TKey, TValue> = (key: TKey) => TValue;

export function createPersistedScopedSignal<TKey, TValue>(
  keyFactory: (key: TKey) => string,
  defaultValue: TValue,
): unknown {
  return createPersistedScopedSignalRaw(keyFactory, defaultValue);
}

export function createLocalConversationRouteScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalRaw(localConversationRouteScope, initializer);
}

export function initThreadSummaryPanelSectionRuntime(): void {
  initLocalConversationRouteRuntime();
  initSummaryPanelAnimationConfig();
  initScopedSignalRuntime();
}

export function initThreadSummaryPanelModelRuntime(): void {
  initThreadSummaryPanelSignalsRuntimeRaw();
  initWorkspaceRouteStateSignalsRaw();
  initInstalledMcpAppSignalsRaw();
  initConversationDisplayTitleSignalsRaw();
  initRightPanelTabSignalsRaw();
  initSummaryPanelSourceHelpersRaw();
  initRestoredProcessRowsCollectorDependenciesRaw();
}
