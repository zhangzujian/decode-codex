// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation title formatting and id normalization helpers.
import {
  iO as formatConversationTitleTextRaw,
  pz as toConversationIdRaw,
  rO as initConversationTitleFormatterRaw,
} from "../vendor/appg-thread-shared-runtime";

export function initConversationTitleRuntime(): void {
  initConversationTitleFormatterRaw();
}

export function formatConversationTitleText(title: string): string {
  return formatConversationTitleTextRaw(title);
}

export function toConversationId(value: string): string {
  return toConversationIdRaw(value);
}
