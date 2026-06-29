// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derived atoms that drive the local conversation git actions: review/status summary
// queries keyed by cwd, the selection summary, and the per-action blocked reasons
// combined into the next workflow step + the single blocked step to surface.

import {
  appStoreScope,
  createComputedQueryAtom,
  createGitQueryOptions,
  createParametricAtom,
  DURATIONS,
  getHostKey,
  gitCliAvailabilityQueryAtom,
  gitMetadataFromCwdQuery,
  hasOpenPullRequestAtom,
  mapPendingQueryState,
  pullRequestStatusAtom,
  pushStatusAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { aggregateChangedFileSummary } from "./diff-selection-summary";
import {
  buildGitActionOperationParams,
  buildPullRequestStatusParams,
  computeCommitBlockedReason,
  computeCreatePullRequestBlockedReason,
  computePushBlockedReason,
  computeWorkflowCapabilities,
  resolveBlockedStep,
  resolveWorkflowNextStep,
  type CommitBlockedReason,
  type GhCliAvailability,
  type GitActionBlockedStep,
  type GitActionNextStep,
  type PushBlockedReason,
  type PushStatus,
} from "./git-action-blocked-reasons";

type Getter = <TValue>(atom: unknown, params?: unknown) => TValue;

interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
}

interface SummarySource extends GitActionContext {
  commonDir: string;
  root: string;
  source: "staged" | "unstaged";
}

export const reviewSummaryQueryFamily = createComputedQueryAtom(
  appStoreScope,
  (source: SummarySource) =>
    createGitQueryOptions(
      "review-summary",
      { commonDir: source.commonDir, root: source.root },
      source.source === "staged"
        ? {
            cwd: source.cwd,
            includeUntrackedFiles: false,
            operationSource: "local_conversation_git_actions",
            source: "staged",
          }
        : {
            cwd: source.cwd,
            operationSource: "local_conversation_git_actions",
            source: "unstaged",
          },
      getHostKey(source.hostConfig),
      source.hostConfig,
      { staleTime: DURATIONS.FIVE_SECONDS },
    ),
);

export const statusSummaryQueryFamily = createComputedQueryAtom(
  appStoreScope,
  (source: { commonDir: string; root: string } & GitActionContext) =>
    createGitQueryOptions(
      "status-summary",
      { commonDir: source.commonDir, root: source.root },
      {
        cwd: source.cwd,
        operationSource: "local_conversation_git_actions",
      },
      getHostKey(source.hostConfig),
      source.hostConfig,
      { staleTime: DURATIONS.FIVE_SECONDS },
    ),
);

export const gitActionMetadataAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(gitMetadataFromCwdQuery, {
      cwd: params.cwd,
      enabled: true,
      hostConfig: params.hostConfig,
      operationSource: "local_conversation_git_actions",
      watchForGitInit: false,
    }),
);

export const gitActionReviewSummaryAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { source: "staged" | "unstaged" },
    { get }: { get: Getter },
  ) => {
    const metadata = get<{ data?: { commonDir: string; root: string } | null }>(
      gitActionMetadataAtom,
      params,
    );
    const gitRoot = metadata.data ?? null;
    return gitRoot == null
      ? mapPendingQueryState(metadata)
      : get(reviewSummaryQueryFamily, {
          commonDir: gitRoot.commonDir,
          cwd: params.cwd,
          hostConfig: params.hostConfig,
          root: gitRoot.root,
          source: params.source,
        });
  },
);

export const gitActionStatusSummaryAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) => {
    const metadata = get<{ data?: { commonDir: string; root: string } | null }>(
      gitActionMetadataAtom,
      params,
    );
    const gitRoot = metadata.data ?? null;
    return gitRoot == null
      ? mapPendingQueryState(metadata)
      : get(statusSummaryQueryFamily, {
          commonDir: gitRoot.commonDir,
          cwd: params.cwd,
          hostConfig: params.hostConfig,
          root: gitRoot.root,
        });
  },
);

interface SummaryQueryState {
  data?: { type: "success" | "error" } | unknown;
  isFetching: boolean;
  isLoading: boolean;
}

export const gitActionSelectionSummaryAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { includeUnstaged?: boolean },
    { get }: { get: Getter },
  ) => {
    const stagedSummary = get<SummaryQueryState>(gitActionReviewSummaryAtom, {
      cwd: params.cwd,
      hostConfig: params.hostConfig,
      source: "staged",
    });
    const unstagedSummary = params.includeUnstaged
      ? get<SummaryQueryState>(gitActionReviewSummaryAtom, {
          cwd: params.cwd,
          hostConfig: params.hostConfig,
          source: "unstaged",
        })
      : null;
    const selectionSummary = aggregateChangedFileSummary(
      unstagedSummary == null
        ? [stagedSummary.data as never]
        : [stagedSummary.data as never, unstagedSummary.data as never],
    );
    return {
      hasSelectedChanges: (selectionSummary?.files.length ?? 0) > 0,
      isFetching:
        stagedSummary.isFetching || (unstagedSummary?.isFetching ?? false),
      isLoading:
        stagedSummary.isLoading || (unstagedSummary?.isLoading ?? false),
      isUnavailable:
        (stagedSummary.data as { type?: string })?.type === "error" ||
        (unstagedSummary?.data as { type?: string })?.type === "error",
      selectionSummary,
    };
  },
);

export const commitBlockedReasonAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { includeUnstaged?: boolean },
    { get }: { get: Getter },
  ): CommitBlockedReason | null => {
    const statusSummary = get<{
      data?: {
        type: "success" | "error";
        stagedCount?: number;
        unstagedCount?: number;
        untrackedCount?: number;
      };
      isLoading: boolean;
    }>(gitActionStatusSummaryAtom, params);
    const statusData = statusSummary.data;
    if (statusData?.type === "error") {
      const selection = get<{
        hasSelectedChanges: boolean;
        isLoading: boolean;
        isUnavailable: boolean;
      }>(gitActionSelectionSummaryAtom, params);
      return computeCommitBlockedReason({
        hasSomeUncommittedChanges: selection.hasSelectedChanges,
        isChangesLoading: selection.isLoading,
        isChangesUnavailable: selection.isUnavailable,
      });
    }
    return computeCommitBlockedReason({
      hasSomeUncommittedChanges:
        statusData?.type === "success" &&
        (statusData.stagedCount ?? 0) +
          (params.includeUnstaged
            ? (statusData.unstagedCount ?? 0) + (statusData.untrackedCount ?? 0)
            : 0) >
          0,
      isChangesLoading: statusSummary.isLoading,
      isChangesUnavailable: false,
    });
  },
);

interface PushStatusQueryState {
  type: "success" | "error";
  data?: PushStatus;
}

export const pushBlockedReasonAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext,
    { get }: { get: Getter },
  ): PushBlockedReason | null => {
    const pushStatusResult = get<PushStatusQueryState>(
      pushStatusAtom,
      buildGitActionOperationParams(params),
    );
    return computePushBlockedReason({
      pushStatus:
        pushStatusResult.type === "success" ? pushStatusResult.data : undefined,
    });
  },
);

export const pushAfterCommitBlockedReasonAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext,
    { get }: { get: Getter },
  ): PushBlockedReason | null => {
    const pushStatusResult = get<PushStatusQueryState>(
      pushStatusAtom,
      buildGitActionOperationParams(params),
    );
    return computePushBlockedReason({
      pushStatus:
        pushStatusResult.type === "success" ? pushStatusResult.data : undefined,
      ignoreNothingToPush: true,
    });
  },
);

export interface GitActionNextStepResult {
  blockedStep: GitActionBlockedStep | null;
  nextStep: GitActionNextStep;
}

export const gitActionNextStepAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & {
      createsBranch: boolean;
      includeLocalChanges: boolean;
    },
    { get }: { get: Getter },
  ): GitActionNextStepResult => {
    const pushStatusResult = get<PushStatusQueryState>(
      pushStatusAtom,
      buildGitActionOperationParams(params),
    );
    const pushStatus =
      pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
    const commitBlockedReason = get<CommitBlockedReason | null>(
      commitBlockedReasonAtom,
      { ...params, includeUnstaged: params.includeLocalChanges },
    );
    const pushBlockedReason = get<PushBlockedReason | null>(
      pushBlockedReasonAtom,
      params,
    );
    const pushAfterCommitBlockedReason = get<PushBlockedReason | null>(
      pushAfterCommitBlockedReasonAtom,
      params,
    );
    const pullRequestStatusParams = buildPullRequestStatusParams(
      params,
      pushStatus?.branch ?? "",
    );
    const pullRequestStatusQuery = get<{ isLoading: boolean }>(
      pullRequestStatusAtom,
      pullRequestStatusParams,
    );
    const ghCliAvailability = get<GhCliAvailability>(
      gitCliAvailabilityQueryAtom,
      params.hostConfig.id,
    );
    const hasOpenPr = get<boolean>(
      hasOpenPullRequestAtom,
      pullRequestStatusParams,
    );
    const createPullRequestBlockedReason =
      computeCreatePullRequestBlockedReason({
        ghCliAvailability,
        hasOpenPr,
        isLoadingPRStatus: pullRequestStatusQuery.isLoading,
        pushStatus,
      });
    const createPullRequestAfterPushBlockedReason =
      computeCreatePullRequestBlockedReason({
        allowMissingUpstream: true,
        ghCliAvailability,
        hasOpenPr,
        isLoadingPRStatus: pullRequestStatusQuery.isLoading,
        pushStatus,
      });
    const capabilities = computeWorkflowCapabilities({
      commitsAhead: pushStatus?.commitsAhead ?? 0,
      commitBlockedReason,
      createPullRequestAfterPushBlockedReason,
      createPullRequestBlockedReason,
      createsBranch: params.createsBranch,
      pushAfterCommitBlockedReason,
      pushBlockedReason,
    });
    const nextStep = resolveWorkflowNextStep({
      ...capabilities,
      createsBranch: params.createsBranch,
      includeLocalChanges: params.includeLocalChanges,
    });
    return {
      blockedStep: resolveBlockedStep({
        ...capabilities,
        commitBlockedReason,
        createPullRequestAfterPushBlockedReason,
        createPullRequestBlockedReason,
        nextStep,
        pushAfterCommitBlockedReason,
        pushBlockedReason,
      }),
      nextStep,
    };
  },
);
