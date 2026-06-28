// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Local conversation title/source context signals backed by the projects app bundle.
import {
  Kl as conversationTitleSignal,
  cs as setConversationSourceContext,
  un as refreshConversationHistorySignals,
} from "../boundaries/current-ref/projects-app-shared-producer";

type ConversationSourceScope = unknown;

export { conversationTitleSignal, refreshConversationHistorySignals };

export function setActiveConversationSourceContext(
  scope: ConversationSourceScope,
  conversationId: string,
): void {
  setConversationSourceContext(
    scope,
    "conversation",
    `conversation:${conversationId}`,
  );
}
