// Restored from ref/webview/assets/browser-sidebar-comment-mode-coachmark-state-B5FxFSFk.js
// browser-sidebar-comment-mode-coachmark-state-B5FxFSFk chunk restored from the Codex webview bundle.
import { filterImportableBrowserProfiles } from "../browser/browser-profile-import-query";
import { createPersistedSignal } from "../runtime/persisted-signal";
import { persistedAtom } from "../utils/persisted-atom";
import { setPersistedAtomItem } from "../utils/persisted-atom-store";
type BrowserImportProfile = {
  hasCookies?: boolean;
  hasPasswords?: boolean;
  [key: string]: unknown;
};
type BrowserSidebarCoachmarkInput = {
  baseGateEnabled: boolean;
  hasSeen: boolean;
  hasSettledOpen: boolean;
  isVisible: boolean;
  profiles: BrowserImportProfile[] | null | undefined;
  profilesQuerySucceeded: boolean;
  serviceAvailable: boolean;
};
const browserSidebarCommentModeCoachmarkStateAState =
  "has-seen-browser-profile-import-nux-v1";
export const browserSidebarCommentModeCoachmarkStateRState =
  createPersistedSignal(browserSidebarCommentModeCoachmarkStateAState, false);
export function browserSidebarCommentModeCoachmarkStateIState({
  baseGateEnabled,
  hasSeen,
  hasSettledOpen,
  isVisible,
  profiles,
  profilesQuerySucceeded,
  serviceAvailable,
}: BrowserSidebarCoachmarkInput): boolean {
  return (
    isVisible &&
    hasSettledOpen &&
    baseGateEnabled &&
    serviceAvailable &&
    profilesQuerySucceeded &&
    profiles != null &&
    filterImportableBrowserProfiles(profiles).length > 0 &&
    hasSeen === false
  );
}
const browserSidebarCommentModeCoachmarkDismissedKey =
  "browser-sidebar-comment-mode-coachmark-dismissed";
export const browserSidebarCommentModeCoachmarkStateTState = persistedAtom(
  browserSidebarCommentModeCoachmarkDismissedKey,
  false,
);
export function browserSidebarCommentModeCoachmarkStateNState(): void {
  setPersistedAtomItem(browserSidebarCommentModeCoachmarkDismissedKey, true);
}
export { browserSidebarCommentModeCoachmarkStateAState };
