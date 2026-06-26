// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Stable fallback key helper for local conversation turns without turn ids.

export function getLocalConversationTurnSearchKey(
  turnId: string | null | undefined,
  turnIndex: number,
): string {
  return turnId ?? `turn-index-${turnIndex}`;
}
