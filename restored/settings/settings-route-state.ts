// Restored from ref/webview/assets/settings-route-state-BtPsWPDu.js
// Settings-route state validation and experimental-feature visibility helpers.
import { isExperimentalFeatureVisible } from "../features/experimental-features/visibility";
export { isExperimentalFeatureVisible };
export function initSettingsRouteDependenciesChunk(): void {}
export type SettingsWorkspaceRootState = {
  hasValue: boolean;
  workspaceRoot: string | null;
};
export function getSettingsWorkspaceRootState(
  value: unknown,
): SettingsWorkspaceRootState {
  const state = parseSettingsRouteState(value);
  if (state == null || !Object.hasOwn(state, "workspaceRoot")) {
    return {
      hasValue: false,
      workspaceRoot: null,
    };
  }
  return {
    hasValue: true,
    workspaceRoot: state.workspaceRoot ?? null,
  };
}
export function initSettingsRouteStateChunk(): void {}
export function hasReturnToPreviousHistoryEntry(value: unknown): boolean {
  return parseSettingsRouteState(value)?.returnToPreviousHistoryEntry === true;
}
type SettingsRouteState = {
  returnToPreviousHistoryEntry?: boolean;
  workspaceRoot?: string | null;
};
function parseSettingsRouteState(value: unknown): SettingsRouteState | null {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  const state = value as Record<string, unknown>;
  const returnToPreviousHistoryEntry = state.returnToPreviousHistoryEntry;
  if (
    returnToPreviousHistoryEntry !== undefined &&
    typeof returnToPreviousHistoryEntry !== "boolean"
  ) {
    return null;
  }
  const workspaceRoot = state.workspaceRoot;
  if (
    workspaceRoot !== undefined &&
    workspaceRoot !== null &&
    (typeof workspaceRoot !== "string" || workspaceRoot.length === 0)
  ) {
    return null;
  }
  return state as SettingsRouteState;
}
