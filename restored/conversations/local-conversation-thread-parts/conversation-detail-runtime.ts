// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation detail-mode setting helpers used by the local thread summary panel.
import {
  isThreadDetailLevelProseFromSetting,
  THREAD_DETAIL_LEVEL_PROSE,
  useThreadDetailLevel,
} from "../../utils/thread-detail-level";

export const CONVERSATION_DETAIL_STEPS_PROSE = THREAD_DETAIL_LEVEL_PROSE;

export function initConversationDetailModeRuntime(): void {}

export function isConversationDetailModeProse(
  getSetting: (setting: unknown) => unknown,
): boolean {
  return isThreadDetailLevelProseFromSetting(getSetting);
}

export function useConversationDetailMode(): string {
  return useThreadDetailLevel();
}
