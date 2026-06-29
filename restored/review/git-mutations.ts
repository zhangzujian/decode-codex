// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Low-level scoped mutation atoms for the local conversation git actions: commit,
// create pull request (gh CLI), push, and create-and-checkout branch, plus helpers
// that optimistically adjust the cached branch-ahead-count after commit / push.

import {
  appStoreScope,
  buildBranchAheadCountQueryKey,
  buildGitMetadataQueryOptions,
  buildQueryKey,
  buildReviewSummaryQueryKey,
  codexAnalyticsConfigAtom,
  createScopedMutationAtom,
  dispatchHostRequest,
  getHostKey,
  getRpcClient,
  invalidateBranchMetadataQueries,
  invalidatePullRequestStatus,
  pullRequestStatusAtom,
  recordProductEvent,
  refetchReviewGitChanges,
  setConversationBranch,
  branchPushedProductEvent,
  gitCommittedProductEvent,
  pullRequestCreatedProductEvent,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  commitMessageDraftAtom,
  includeUnstagedChangesAtom,
} from "./local-git-actions-scope";

interface QueryClient {
  getQueryData(queryKey: unknown): unknown;
  setQueryData(queryKey: unknown, updater: unknown): void;
  invalidateQueries(filters: { queryKey: unknown }): Promise<void> | void;
}

interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
  query: { snapshot(atom: unknown, params: unknown): QuerySnapshot };
  queryClient: QueryClient;
}

interface QuerySnapshot {
  cancel(): Promise<void>;
  setData(data: unknown): void;
}

interface GitMetadata {
  root: string;
  commonDir: string;
}

export const commitMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (
    context: { cwd: string; hostConfig: { id: string } },
    { queryClient, scope }: { queryClient: QueryClient; scope: ScopedStore },
  ) => {
    const hostKey = getHostKey(context.hostConfig);
    return {
      mutationKey: ["git", "commit", context.cwd],
      mutationFn: (variables: {
        signal?: AbortSignal;
        message: string;
        commitAttribution?: string | null;
        operationSource: string;
      }) =>
        getRpcClient("git").request({
          method: "commit",
          signal: variables.signal,
          params: {
            cwd: context.cwd,
            hostConfig: context.hostConfig,
            message: variables.message,
            includeUnstaged: scope.get(includeUnstagedChangesAtom),
            commitAttribution: variables.commitAttribution,
            operationSource: variables.operationSource,
          },
        }),
      onSuccess: async (
        result: { status: string },
        variables: { operationSource: string },
      ) => {
        if (result.status !== "success") {
          return;
        }
        recordProductEvent(scope, gitCommittedProductEvent, {});
        const metadata = queryClient.getQueryData(
          buildGitMetadataQueryOptions(
            context.cwd,
            hostKey,
            context.hostConfig,
            variables.operationSource,
          ).queryKey,
        ) as GitMetadata | null;
        incrementBranchAheadCount(
          queryClient,
          metadata,
          hostKey,
          variables.operationSource,
        );
        refetchReviewGitChanges();
        scope.set(
          commitMessageDraftAtom,
          { cwd: context.cwd, hostId: context.hostConfig.id },
          "",
        );
        if (metadata != null) {
          await queryClient.invalidateQueries({
            queryKey: buildReviewSummaryQueryKey(
              metadata.commonDir,
              metadata.root,
              hostKey,
            ),
          });
        }
      },
    };
  },
  { excludeFieldsFromKey: ["operationSource"] },
);

export const createPullRequestMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (
    context: { cwd: string; hostId: string },
    { scope }: { scope: ScopedStore },
  ) => ({
    mutationKey: ["vscode", "gh-pr-create", context.cwd, context.hostId],
    mutationFn: (variables: {
      cwd: string;
      headBranch: string;
      baseBranch: string;
      isDraft?: boolean;
      openInBrowser?: boolean;
      titleOverride?: string | null;
      bodyOverride?: string | null;
      signal?: AbortSignal;
      operationSource: string;
    }) =>
      dispatchHostRequest("gh-pr-create", {
        params: {
          cwd: variables.cwd,
          headBranch: variables.headBranch,
          baseBranch: variables.baseBranch,
          hostId: context.hostId,
          isDraft: variables.isDraft,
          openInBrowser: variables.openInBrowser,
          titleOverride: variables.titleOverride,
          bodyOverride: variables.bodyOverride,
        },
        signal: variables.signal,
        source: variables.operationSource,
      }),
    onSuccess: async (
      result: { status: string; number?: number; url?: string },
      variables: {
        openInBrowser?: boolean;
        cwd: string;
        headBranch: string;
        operationSource: string;
        isDraft?: boolean;
        titleOverride?: string | null;
        bodyOverride?: string | null;
        conversationId?: string | null;
      },
    ) => {
      if (result.status !== "success") {
        invalidatePullRequestStatus(scope, context.hostId);
        return;
      }
      if (variables.openInBrowser === true) {
        return;
      }
      recordProductEvent(scope, pullRequestCreatedProductEvent, {});
      const snapshot = scope.query.snapshot(pullRequestStatusAtom, {
        cwd: variables.cwd,
        headBranch: variables.headBranch,
        hostId: context.hostId,
        operationSource: variables.operationSource,
      });
      await snapshot.cancel();
      snapshot.setData({
        activityItems: [],
        boardItem: null,
        body: variables.bodyOverride?.trim() || "",
        canMerge: false,
        checks: [],
        ciStatus: "pending",
        commentAttachments: [],
        hasOpenPr: true,
        isDraft: variables.isDraft ?? false,
        mergeBlocker: "unknown",
        number: result.number,
        repo: null,
        reviewers: {
          approved: [],
          commentCounts: [],
          commented: [],
          changesRequested: [],
          requested: [],
          requestedTeams: [],
          unresolvedCommentCount: 0,
        },
        reviewStatus: "none",
        status: "success",
        title: variables.titleOverride?.trim() || null,
        url: result.url,
      });
      if (
        variables.conversationId != null &&
        variables.headBranch.trim().length > 0
      ) {
        setConversationBranch(variables.conversationId, variables.headBranch);
      }
    },
    onSettled: (
      _result: unknown,
      _error: unknown,
      variables: {
        signal?: AbortSignal;
        openInBrowser?: boolean;
        cwd: string;
        headBranch: string;
      },
    ) => {
      if (variables.signal?.aborted && variables.openInBrowser !== true) {
        scope.queryClient.invalidateQueries({
          queryKey: buildQueryKey("gh-pr-status", {
            cwd: variables.cwd,
            headBranch: variables.headBranch,
            hostId: context.hostId,
          }),
        });
      }
    },
    networkMode: "always",
  }),
  { excludeFieldsFromKey: ["operationSource"] },
);

export const pushMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (
    context: { cwd: string; hostConfig: { id: string } },
    { queryClient, scope }: { queryClient: QueryClient; scope: ScopedStore },
  ) => {
    const hostKey = getHostKey(context.hostConfig);
    return {
      mutationKey: ["vscode", "git-push", context.cwd, context.hostConfig.id],
      mutationFn: (variables: {
        cwd: string;
        force?: boolean;
        refspec?: string;
        setUpstream?: boolean;
        signal?: AbortSignal;
        operationSource: string;
      }) =>
        dispatchHostRequest("git-push", {
          params: {
            cwd: variables.cwd,
            force: variables.force,
            hostId: context.hostConfig.id,
            refspec: variables.refspec,
            setUpstream: variables.setUpstream,
          },
          signal: variables.signal,
          source: variables.operationSource,
        }),
      onSuccess: (
        result: { status: string },
        variables: {
          force?: boolean;
          analyticsAttribution?: Record<string, unknown> | null;
          operationSource: string;
        },
      ) => {
        if (result.status !== "success") {
          return;
        }
        recordProductEvent(scope, branchPushedProductEvent, {
          forced: variables.force ?? false,
        });
        if (variables.analyticsAttribution != null) {
          scope
            .get<{
              submitCodexAnalyticsEvent?: (
                event: Record<string, unknown>,
              ) => void;
            }>(codexAnalyticsConfigAtom)
            .submitCodexAnalyticsEvent?.({
              ...variables.analyticsAttribution,
              action: "push",
              eventKind: "action",
              metadata: { forced: variables.force ?? false },
            });
        }
        resetBranchAheadCount(
          queryClient,
          queryClient.getQueryData(
            buildGitMetadataQueryOptions(
              context.cwd,
              hostKey,
              context.hostConfig,
              variables.operationSource,
            ).queryKey,
          ) as GitMetadata | null,
          hostKey,
          variables.operationSource,
        );
      },
      networkMode: "always",
    };
  },
  { excludeFieldsFromKey: ["operationSource"] },
);

export const createAndCheckoutBranchMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (
    context: {
      cwd: string;
      hostConfig: { id: string };
      operationSource: string;
    },
    { queryClient }: { queryClient: QueryClient },
  ) => {
    const hostKey = getHostKey(context.hostConfig);
    return {
      mutationKey: [
        "vscode",
        "git-create-and-checkout-branch",
        context.cwd,
        context.hostConfig.id,
        context.operationSource,
      ],
      mutationFn: async ({
        signal,
        ...rest
      }: {
        signal?: AbortSignal;
        branch: string;
        failIfExists?: boolean;
        mode?: "synced" | "worktree";
      }) => {
        const createResult = await dispatchHostRequest("git-create-branch", {
          params: {
            ...rest,
            cwd: context.cwd,
            hostId: context.hostConfig.id,
          },
          signal,
          source: context.operationSource,
        });
        if (createResult.status === "error") {
          return {
            status: "create-error",
            error: createResult.error,
            execOutput: createResult.execOutput,
          };
        }
        const checkoutResult = await dispatchHostRequest(
          "git-checkout-branch",
          {
            params: {
              branch: rest.branch,
              cwd: context.cwd,
              hostId: context.hostConfig.id,
            },
            signal,
            source: context.operationSource,
          },
        );
        return checkoutResult.status === "error"
          ? {
              status: "checkout-error",
              error: checkoutResult.error,
              errorType: checkoutResult.errorType,
              conflictedPaths: checkoutResult.conflictedPaths,
              execOutput: checkoutResult.execOutput,
            }
          : { status: "success", branch: checkoutResult.branch };
      },
      onSettled: (
        result: { status: string } | undefined,
        _error: unknown,
        variables: { mode?: "synced" | "worktree" },
      ) => {
        const metadata = queryClient.getQueryData(
          buildGitMetadataQueryOptions(
            context.cwd,
            hostKey,
            context.hostConfig,
            context.operationSource,
          ).queryKey,
        ) as GitMetadata | null;
        if (metadata != null) {
          invalidateBranchMetadataQueries(queryClient, metadata, {
            changeType: variables.mode === "synced" ? "synced-branch" : "head",
            hostKey,
          });
          if (result?.status === "success" && variables.mode === "synced") {
            invalidateBranchMetadataQueries(queryClient, metadata, {
              changeType: "head",
              hostKey,
            });
          }
        }
      },
      networkMode: "always",
    };
  },
);

function adjustBranchAheadCount(
  queryClient: QueryClient,
  metadata: GitMetadata | null,
  hostKey: unknown,
  operationSource: string,
  updateCount: (count: number) => number,
): void {
  if (!metadata) {
    return;
  }
  const queryKey = buildBranchAheadCountQueryKey({
    metadata,
    method: "branch-ahead-count",
    params: { operationSource, root: metadata.root },
    hostKey,
  });
  queryClient.setQueryData(
    queryKey,
    (current: { commitsAhead: number } | undefined) =>
      current && {
        ...current,
        commitsAhead: updateCount(current.commitsAhead),
      },
  );
  queryClient.invalidateQueries({ queryKey });
}

export function incrementBranchAheadCount(
  queryClient: QueryClient,
  metadata: GitMetadata | null,
  hostKey: unknown,
  operationSource: string,
): void {
  adjustBranchAheadCount(
    queryClient,
    metadata,
    hostKey,
    operationSource,
    (count) => count + 1,
  );
}

export function resetBranchAheadCount(
  queryClient: QueryClient,
  metadata: GitMetadata | null,
  hostKey: unknown,
  operationSource: string,
): void {
  adjustBranchAheadCount(
    queryClient,
    metadata,
    hostKey,
    operationSource,
    () => 0,
  );
}
