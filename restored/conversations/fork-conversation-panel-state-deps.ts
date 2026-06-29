// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Panel tab snapshot helpers used when moving or forking conversations.
export {
  bottomPanelOpenStateKey,
  bottomPanelTabsDescriptor,
  browserTabIdForConversation,
  browserTabSnapshotStore,
  deriveBrowserConversationId,
  focusAreaStateKey,
  getActiveBrowserTabId,
  getAllBrowserTabIdsForConversation,
  getBrowserTabIdForPanelTab,
  getConversationPanelLayoutSnapshot,
  isUncPath,
  isWindowsStyleAbsolutePath,
  isWorkspaceFilePath,
  normalizeFilesystemPath,
  rightPanelFullWidthStateKey,
  rightPanelOpenStateKey,
  rightPanelTabsDescriptor,
  terminalSessionSnapshotStore,
} from "../vendor/app-main-current-runtime";

export function terminalTabIdForSession(sessionId: unknown): string {
  return `terminal:${String(sessionId)}`;
}
