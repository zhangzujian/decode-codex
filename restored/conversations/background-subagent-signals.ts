// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// App-scope signals that expose background subagent summaries.
import { once } from "../runtime/commonjs-interop";
import {
  createAppScopedDerivedSignalFamily,
  initAppScopeSignalRuntime,
  type ScopedSignalGetter,
} from "../runtime/app-scope-runtime";
import {
  conversationAppServerManagerSignal,
  conversationMetaEventSignal,
  conversationTurnsSignal,
  initConversationStateRuntime,
  threadSourceSignal,
} from "../runtime/conversation-state-runtime";
import { buildBackgroundAgents } from "./background-subagents-runtime";
import {
  createSourceLinkedSubagentThreadsSignal,
  type SourceLinkedSubagentThreadsSignal,
} from "./background-subagent-linked-threads";
import type {
  BackgroundAgentSummary,
  CachedConversation,
  ConversationTurn,
  SourceLinkedThread,
} from "./background-agent-types";

export type OpaqueSignalFamily<TKey, TValue> = {
  readonly __signalFamilyKey?: TKey;
  readonly __signalFamilyValue?: TValue;
};

export type BackgroundAgentsSignal = OpaqueSignalFamily<
  string | null,
  BackgroundAgentSummary[]
>;

type ConversationAppServerManager = {
  getCachedConversations(): readonly CachedConversation[];
};
type BuildBackgroundAgentsForParentOptions = {
  requireAppServerManager: boolean;
};

const emptyCachedConversations: readonly CachedConversation[] = [];
const emptyConversationTurns: readonly ConversationTurn[] = [];

let sourceLinkedSubagentThreadsSignal: SourceLinkedSubagentThreadsSignal;

export let backgroundAgentsSignal: BackgroundAgentsSignal;
export let summaryPanelBackgroundAgentsSignal: BackgroundAgentsSignal;

export const initBackgroundSubagentsRuntimeChunk = once(() => {
  initAppScopeSignalRuntime();
  initConversationStateRuntime();

  sourceLinkedSubagentThreadsSignal = createSourceLinkedSubagentThreadsSignal();

  backgroundAgentsSignal = createAppScopedDerivedSignalFamily<
    string | null,
    BackgroundAgentSummary[]
  >((parentConversationId, { get }) => {
    return buildBackgroundAgentsForParent(parentConversationId, get, {
      requireAppServerManager: false,
    });
  }) as BackgroundAgentsSignal;

  summaryPanelBackgroundAgentsSignal = createAppScopedDerivedSignalFamily<
    string | null,
    BackgroundAgentSummary[]
  >((parentConversationId, { get }) => {
    return buildBackgroundAgentsForParent(parentConversationId, get, {
      requireAppServerManager: true,
    });
  }) as BackgroundAgentsSignal;
});

function buildBackgroundAgentsForParent(
  parentConversationId: string | null,
  get: ScopedSignalGetter["get"],
  { requireAppServerManager }: BuildBackgroundAgentsForParentOptions,
): BackgroundAgentSummary[] {
  if (parentConversationId == null) return [];

  const conversationTurns =
    (get(conversationTurnsSignal, parentConversationId) as
      | readonly ConversationTurn[]
      | null
      | undefined) ?? emptyConversationTurns;
  if (conversationTurns.length === 0) return [];

  get(conversationMetaEventSignal);
  const appServerManager = get<ConversationAppServerManager | null>(
    conversationAppServerManagerSignal,
    parentConversationId,
  );
  if (appServerManager == null && requireAppServerManager) return [];

  return buildBackgroundAgents({
    cachedConversations:
      appServerManager?.getCachedConversations() ?? emptyCachedConversations,
    conversationTurns,
    getChildSource: (conversationId) => get(threadSourceSignal, conversationId),
    getChildTurns: (conversationId) =>
      get(conversationTurnsSignal, conversationId) as
        | readonly ConversationTurn[]
        | null
        | undefined,
    parentConversationId,
    sourceLinkedThreads: get(
      sourceLinkedSubagentThreadsSignal,
      parentConversationId,
    ) as readonly SourceLinkedThread[] | null | undefined,
  });
}

function mountSourceLinkedSubagentThreadsSignal(
  setValue: (value: readonly SourceLinkedThread[] | null) => void,
  context: ScopedSignalMountContext<string | null>,
): void | (() => void) {
  const parentConversationId = context.key;
  if (parentConversationId == null) return;

  const watch = (context as WatchableSignalMountContext<string | null>).watch;
  if (typeof watch !== "function") return;

  let activeRequestVersion = 0;
  let isLoading = false;
  let pendingLoad:
    | (() => Promise<readonly SourceLinkedThread[] | null>)
    | null = null;
  let previousAppServerManager: ConversationAppServerManager | null = null;
  let previousParentCreatedAtMs: number | null = null;

  const flushPendingLoad = async (): Promise<void> => {
    if (isLoading) return;
    isLoading = true;

    try {
      while (pendingLoad != null) {
        const load = pendingLoad;
        const requestVersion = activeRequestVersion;
        pendingLoad = null;

        let threads: readonly SourceLinkedThread[] | null;
        try {
          threads = await load();
        } catch {
          threads = null;
        }

        if (activeRequestVersion === requestVersion) setValue(threads);
      }
    } finally {
      isLoading = false;
      if (pendingLoad != null) void flushPendingLoad();
    }
  };

  return watch(({ get }) => {
    const appServerManager = get<ConversationAppServerManager | null>(
      conversationAppServerManagerSignal,
      parentConversationId,
    );
    const parentCreatedAtMs = readFiniteNumber(
      get(conversationCreatedAtSignal, parentConversationId),
    );
    const metaEvent = get<{ hostId?: string | null } | null>(
      conversationMetaEventSignal,
    );
    const requestChanged =
      appServerManager !== previousAppServerManager ||
      parentCreatedAtMs !== previousParentCreatedAtMs;

    previousAppServerManager = appServerManager;
    previousParentCreatedAtMs = parentCreatedAtMs;

    if (appServerManager == null || parentCreatedAtMs == null) {
      activeRequestVersion += 1;
      pendingLoad = null;
      setValue(null);
      return;
    }

    if (!requestChanged && metaEvent?.hostId !== appServerManager.getHostId()) {
      return;
    }

    const requestVersion = activeRequestVersion + 1;
    activeRequestVersion = requestVersion;
    pendingLoad = () =>
      loadSourceLinkedSubagentThreads({
        appServerManager,
        parentConversationId,
        parentCreatedAtMs,
        shouldContinue: () => activeRequestVersion === requestVersion,
      });
    void flushPendingLoad();
  });
}

async function loadSourceLinkedSubagentThreads({
  appServerManager,
  parentConversationId,
  parentCreatedAtMs,
  shouldContinue,
}: {
  appServerManager: ConversationAppServerManager;
  parentConversationId: string;
  parentCreatedAtMs: number;
  shouldContinue: () => boolean;
}): Promise<readonly SourceLinkedThread[]> {
  const sourceLinkedThreads: SourceLinkedThread[] = [];
  const parentQueue = [parentConversationId];
  const seenConversationIds = new Set(parentQueue);
  const parentCreatedAtSeconds = Math.floor(parentCreatedAtMs / 1000);

  for (const currentParentConversationId of parentQueue) {
    let cursor: string | null = null;

    for (;;) {
      if (!shouldContinue()) return sourceLinkedThreads;

      const response = await appServerManager.sendRequest("thread/list", {
        archived: false,
        cursor,
        limit: 200,
        modelProviders: null,
        parentThreadId: currentParentConversationId,
        sortDirection: "desc",
        sortKey: "created_at",
        sourceKinds: ["subAgentThreadSpawn"],
        useStateDbOnly: true,
      });
      const threads = Array.isArray(response.data) ? response.data : [];

      for (const thread of threads) {
        const threadParentConversationId = readSourceThreadParentId(thread);
        const conversationId = normalizeConversationIdValue(thread.id);

        if (
          threadParentConversationId === currentParentConversationId &&
          !seenConversationIds.has(conversationId)
        ) {
          sourceLinkedThreads.push(thread);
          seenConversationIds.add(conversationId);
          parentQueue.push(conversationId);
        }
      }

      if (
        response.nextCursor == null ||
        threads.some(
          (thread) =>
            readThreadCreatedAtSeconds(thread) < parentCreatedAtSeconds,
        )
      ) {
        break;
      }

      cursor = response.nextCursor;
    }
  }

  return sourceLinkedThreads;
}

function readSourceThreadParentId(thread: SourceLinkedThread): string | null {
  const parentThreadId = readString(
    (thread as SourceLinkedThread & { parentThreadId?: unknown })
      .parentThreadId,
  );
  return parentThreadId == null
    ? (getSubagentSourceMetadata(thread.source)?.parentThreadId ?? null)
    : normalizeConversationIdValue(parentThreadId);
}

function readThreadCreatedAtSeconds(thread: SourceLinkedThread): number {
  const createdAt = Number(thread.createdAt);
  return Number.isFinite(createdAt) ? createdAt : Number.POSITIVE_INFINITY;
}

function readFiniteNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function readString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}
