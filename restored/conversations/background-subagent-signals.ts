// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// App-scope signals that expose background subagent summaries.
import { once } from "../runtime/commonjs-interop";
import {
  createAppScopedDerivedSignalFamily,
  createAppScopedSignalFamily,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";
import {
  conversationTurnsSignal,
  initConversationStateRuntime,
  threadSourceSignal,
} from "../runtime/conversation-state-runtime";
import { buildBackgroundAgents } from "./background-subagents-runtime";
import type {
  BackgroundAgentSummary,
  CachedConversation,
  ConversationTurn,
  SourceLinkedThread,
} from "./background-agent-types";

const emptyCachedConversations: readonly CachedConversation[] = [];
const emptyConversationTurns: readonly ConversationTurn[] = [];

let sourceLinkedSubagentThreadsSignal: unknown;

export let backgroundAgentsSignal: unknown;

export const initBackgroundSubagentsRuntimeChunk = once(() => {
  initAppScopeSignalRuntime();
  initConversationStateRuntime();

  sourceLinkedSubagentThreadsSignal = createAppScopedSignalFamily<
    string | null,
    readonly SourceLinkedThread[] | null
  >(() => null);

  backgroundAgentsSignal = createAppScopedDerivedSignalFamily<
    string | null,
    BackgroundAgentSummary[]
  >((parentConversationId, { get }) => {
    if (parentConversationId == null) return [];

    const conversationTurns =
      (get(
        conversationTurnsSignal,
        parentConversationId,
      ) as readonly ConversationTurn[] | null | undefined) ??
      emptyConversationTurns;
    if (conversationTurns.length === 0) return [];

    return buildBackgroundAgents({
      cachedConversations: emptyCachedConversations,
      conversationTurns,
      getChildSource: (conversationId) => get(threadSourceSignal, conversationId),
      getChildTurns: (conversationId) =>
        get(
          conversationTurnsSignal,
          conversationId,
        ) as readonly ConversationTurn[] | null | undefined,
      parentConversationId,
      sourceLinkedThreads: get(
        sourceLinkedSubagentThreadsSignal,
        parentConversationId,
      ) as readonly SourceLinkedThread[] | null | undefined,
    });
  });
});
