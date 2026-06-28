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
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "./local-conversation-route-runtime";

export { threadSummaryPanelSectionTransition };

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
