// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// The local conversation git actions scope: draft state atoms, the message-generation
// abort-controller registry, the default-branch query, branch-mismatch derivation,
// and the scoped derived atoms (current branch, availability, blocked step, etc.).

import {
  appStoreScope,
  createCwdQueryAtomFamily,
  createParametricAtom,
  createParametricStateAtom,
  createPersistedToggleAtom,
  createScopedAtom,
  createScopedStateAtom,
  currentBranchQueryAtom,
  defineScope,
  gitActionsParentScope,
  hostConfigByIdAtom,
  hasOpenPullRequestAtom,
  pullRequestStatusForBranchAtom,
  pushStatusAtom,
  storedThreadBranchAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  buildPullRequestStatusParams,
  type GitActionBlockedStep,
  type PushBlockedReason,
} from "./git-action-blocked-reasons";
import {
  commitBlockedReasonAtom,
  gitActionNextStepAtom,
  pushAfterCommitBlockedReasonAtom,
  pushBlockedReasonAtom,
} from "./git-action-availability-atoms";

const GIT_ACTION_OPERATION_SOURCE = "local_conversation_git_actions";

type Getter = <TValue>(atom: unknown, params?: unknown) => TValue;

interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
}

interface HostScope {
  cwd: string;
  hostId: string;
}

export type GitActionStep = "commit" | "create-pr";
export type ActiveGitWorkflow = {
  workflow: "commit" | "create-pr";
  phase: string;
} | null;

// --- Draft / workflow state atoms ------------------------------------------

export const activeGitWorkflowAtom = createParametricStateAtom(
  appStoreScope,
  (): ActiveGitWorkflow => null,
);

export const commitMessageDraftAtom = createParametricStateAtom(
  appStoreScope,
  (): string => "",
);

export const includeUnstagedChangesAtom = createPersistedToggleAtom(
  "git-action-include-unstaged-changes",
  true,
);

export const createPullRequestTitleDraftAtom = createParametricStateAtom(
  appStoreScope,
  (): string => "",
);

export const createPullRequestBodyDraftAtom = createParametricStateAtom(
  appStoreScope,
  (): string => "",
);

export const createPullRequestIncludeLocalChangesAtom =
  createParametricStateAtom(appStoreScope, (): boolean => true);

export function resetCreatePullRequestDrafts(
  scope: ScopedStore,
  hostScope: HostScope,
): void {
  scope.set(createPullRequestTitleDraftAtom, hostScope, "");
  scope.set(createPullRequestBodyDraftAtom, hostScope, "");
  scope.set(createPullRequestIncludeLocalChangesAtom, hostScope, true);
}

// --- Message generation abort-controller registry --------------------------

export const gitActionMessageGenerationControllers = new Map<
  string,
  AbortController
>();

export function getGitActionMessageGenerationKey(target: HostScope): string {
  return JSON.stringify([target.hostId, target.cwd]);
}

export function createGitWorkflowAbortSignal(target: HostScope): AbortSignal {
  const controller = new AbortController();
  gitActionMessageGenerationControllers.set(
    getGitActionMessageGenerationKey(target),
    controller,
  );
  return controller.signal;
}

export function cancelGitWorkflowAbortSignal(target: HostScope): void {
  gitActionMessageGenerationControllers
    .get(getGitActionMessageGenerationKey(target))
    ?.abort();
}

export function cleanupGitWorkflowAbortSignal(
  target: HostScope,
  signal: AbortSignal,
): void {
  const key = getGitActionMessageGenerationKey(target);
  if (gitActionMessageGenerationControllers.get(key)?.signal === signal) {
    gitActionMessageGenerationControllers.delete(key);
  }
}

// --- Default branch query --------------------------------------------------

export const defaultBranchFromCwdQueryFamily = createCwdQueryAtomFamily({
  method: "default-branch",
  getParams: (params: { operationSource: string; root: string }) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: (params: {
    refetchOnWindowFocus?: boolean | "always";
    staleTime?: number | null;
  }) => ({
    refetchOnWindowFocus: params.refetchOnWindowFocus,
    select: (response: { branch: string | null }) => response.branch,
    ...(params.staleTime == null ? {} : { staleTime: params.staleTime }),
  }),
});

export const conversationDefaultBranchAtom =
  defaultBranchFromCwdQueryFamily.fromCwd$;

// --- Branch mismatch derivation --------------------------------------------

export function computeBranchMismatch({
  currentBranch,
  storedThreadBranch,
}: {
  currentBranch?: string | null;
  storedThreadBranch?: string | null;
}): {
  currentBranchName: string;
  hasThreadBranchMismatch: boolean;
  storedThreadBranchName: string;
} {
  const currentBranchName = currentBranch?.trim() ?? "";
  const storedThreadBranchName = storedThreadBranch?.trim() ?? "";
  return {
    currentBranchName,
    hasThreadBranchMismatch:
      currentBranchName.length > 0 &&
      storedThreadBranchName.length > 0 &&
      currentBranchName !== storedThreadBranchName,
    storedThreadBranchName,
  };
}

// --- Scope -----------------------------------------------------------------

interface GitActionsScopeValue {
  cwd: string;
  hostId: string;
  conversationId?: string | null;
  codexWorktree?: boolean;
}

export const localConversationGitActionsScope = defineScope(
  "LocalGitActionsScope",
  {
    key: ({ cwd, hostId }: GitActionsScopeValue) =>
      JSON.stringify([hostId, cwd]),
    parent: gitActionsParentScope,
  },
);

// --- Scoped workflow-step setters ------------------------------------------

export const nextGitActionStepAtom = createScopedStateAtom<
  "commit" | "create-pr" | "worktree-branch-setup" | null
>(localConversationGitActionsScope, null);

export const pendingGitActionStepAtom =
  createScopedStateAtom<GitActionStep | null>(
    localConversationGitActionsScope,
    null,
  );

export function startCommitGitAction(scope: ScopedStore): void {
  if (scope.get(canCreateWorktreeBranchAtom)) {
    scope.set(pendingGitActionStepAtom, undefined, "commit");
    scope.set(nextGitActionStepAtom, undefined, "worktree-branch-setup");
    return;
  }
  scope.set(nextGitActionStepAtom, undefined, "commit");
}

export function startCreatePullRequestGitAction(scope: ScopedStore): void {
  if (scope.get(shouldOfferWorktreeBranchSetupAtom)) {
    scope.set(pendingGitActionStepAtom, undefined, "create-pr");
    scope.set(nextGitActionStepAtom, undefined, "worktree-branch-setup");
    return;
  }
  scope.set(nextGitActionStepAtom, undefined, "create-pr");
}

export function cancelGitActionBranchSetup(scope: ScopedStore): void {
  scope.set(pendingGitActionStepAtom, undefined, null);
  scope.set(nextGitActionStepAtom, undefined, "worktree-branch-setup");
}

export function resumeGitActionAfterBranchSetup(scope: ScopedStore): void {
  const pendingStep =
    scope.get<GitActionStep | null>(pendingGitActionStepAtom) ?? "commit";
  scope.set(pendingGitActionStepAtom, undefined, null);
  scope.set(nextGitActionStepAtom, undefined, pendingStep);
}

interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
  conversationId?: string | null;
  codexWorktree?: boolean;
}

// --- Scoped derived atoms --------------------------------------------------

export const gitActionCurrentBranchQueryAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(currentBranchQueryAtom, {
      cwd: params.cwd,
      enabled: true,
      hostConfig: params.hostConfig,
      operationSource: GIT_ACTION_OPERATION_SOURCE,
      refetchOnWindowFocus: "always",
      staleTime: null,
    }),
);

export const gitActionDefaultBranchQueryAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(conversationDefaultBranchAtom, {
      cwd: params.cwd,
      enabled: true,
      hostConfig: params.hostConfig,
      operationSource: GIT_ACTION_OPERATION_SOURCE,
      refetchOnWindowFocus: true,
      staleTime: 3e4,
    }),
);

export const conversationHeadBranchAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { conversationId?: string | null },
    { get }: { get: Getter },
  ): string => {
    const currentBranchQuery = get<{ data?: string | null }>(
      gitActionCurrentBranchQueryAtom,
      params,
    );
    const pushStatusResult = get<{
      type: string;
      data?: { branch?: string | null };
    }>(pushStatusAtom, {
      cwd: params.cwd,
      hostConfig: params.hostConfig,
      operationSource: GIT_ACTION_OPERATION_SOURCE,
    });
    return computeBranchMismatch({
      currentBranch:
        currentBranchQuery.data ??
        (pushStatusResult.type === "success"
          ? (pushStatusResult.data?.branch ?? null)
          : null),
      storedThreadBranch: get(storedThreadBranchAtom, params.conversationId),
    }).currentBranchName;
  },
);

export const pullRequestStatusForHeadAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(
      pullRequestStatusForBranchAtom,
      buildPullRequestStatusParams(
        params,
        get(conversationHeadBranchAtom, params),
      ),
    ),
);

export const hasOpenPullRequestForHeadAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(
      hasOpenPullRequestAtom,
      buildPullRequestStatusParams(
        params,
        get(conversationHeadBranchAtom, params),
      ),
    ),
);

export const shouldRecordConversationBranchAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { conversationId?: string | null },
    { get }: { get: Getter },
  ): boolean =>
    computeBranchMismatch({
      currentBranch: get(conversationHeadBranchAtom, params),
      storedThreadBranch: get(storedThreadBranchAtom, params.conversationId),
    }).hasThreadBranchMismatch,
);

export const conversationIsDetachedHeadAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }): boolean => {
    const currentBranchQuery = get<{
      isSuccess: boolean;
      data?: string | null;
    }>(gitActionCurrentBranchQueryAtom, params);
    return currentBranchQuery.isSuccess && currentBranchQuery.data == null;
  },
);

export const gitActionsContextAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({
    get,
    scope,
  }: {
    get: Getter;
    scope: { value: GitActionsScopeValue };
  }): GitActionContext => ({
    codexWorktree: scope.value.codexWorktree,
    conversationId: scope.value.conversationId,
    cwd: scope.value.cwd,
    hostConfig: get(hostConfigByIdAtom, scope.value.hostId),
  }),
);

export const activeGitWorkflowForScopeAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({
    get,
    scope,
  }: {
    get: Getter;
    scope: { value: GitActionsScopeValue };
  }): ActiveGitWorkflow =>
    get(activeGitWorkflowAtom, {
      cwd: scope.value.cwd,
      hostId: scope.value.hostId,
    }),
);

export const scopedCommitBlockedReasonAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }) =>
    get(commitBlockedReasonAtom, {
      ...get<GitActionContext>(gitActionsContextAtom),
      includeUnstaged: true,
    }),
);

export type GitActionAvailability = "hidden" | "enabled" | "disabled";

export const gitActionAvailabilityAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext,
    { get }: { get: Getter },
  ): GitActionAvailability => {
    const currentBranchQuery = get<{
      isSuccess: boolean;
      data?: string | null;
    }>(gitActionCurrentBranchQueryAtom, params);
    if (!currentBranchQuery.isSuccess) {
      return "hidden";
    }
    const currentBranch = currentBranchQuery.data?.trim() ?? "";
    const createsBranch = currentBranch.length === 0;
    if (createsBranch) {
      const pushStatusResult = get<{
        type: string;
        data?: { commitsAhead?: number };
      }>(pushStatusAtom, {
        cwd: params.cwd,
        hostConfig: params.hostConfig,
        operationSource: GIT_ACTION_OPERATION_SOURCE,
      });
      const pushStatus =
        pushStatusResult.type === "success" ? pushStatusResult.data : null;
      if (
        get(commitBlockedReasonAtom, { ...params, includeUnstaged: true }) !=
          null &&
        (pushStatus?.commitsAhead ?? 0) === 0
      ) {
        return "hidden";
      }
    } else {
      const defaultBranch = get<{ data?: string | null }>(
        gitActionDefaultBranchQueryAtom,
        params,
      ).data;
      if (defaultBranch == null || currentBranch === defaultBranch) {
        return "hidden";
      }
    }
    return get<{ blockedStep: GitActionBlockedStep | null }>(
      gitActionNextStepAtom,
      {
        cwd: params.cwd,
        hostConfig: params.hostConfig,
        createsBranch,
        includeLocalChanges: get(createPullRequestIncludeLocalChangesAtom, {
          cwd: params.cwd,
          hostId: params.hostConfig.id,
        }),
      },
    ).blockedStep == null
      ? "enabled"
      : "disabled";
  },
);

export const scopedGitActionAvailabilityAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): GitActionAvailability =>
    get(gitActionAvailabilityAtom, get(gitActionsContextAtom)),
);

export const canCreateWorktreeBranchAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): boolean => {
    const context = get<GitActionContext>(gitActionsContextAtom);
    const pushStatusResult = get<{
      type: string;
      data?: { branch?: string | null; defaultBranch?: string | null };
    }>(pushStatusAtom, {
      cwd: context.cwd,
      hostConfig: context.hostConfig,
      operationSource: GIT_ACTION_OPERATION_SOURCE,
    });
    const pushStatus =
      pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
    const currentBranchQuery = get<{
      isSuccess: boolean;
      data?: string | null;
    }>(gitActionCurrentBranchQueryAtom, context);
    const currentBranch = currentBranchQuery.isSuccess
      ? currentBranchQuery.data
      : pushStatus?.branch;
    return (
      Boolean(context.codexWorktree) &&
      pushStatus != null &&
      (!currentBranch || currentBranch === pushStatus.defaultBranch)
    );
  },
);

export const shouldOfferWorktreeBranchSetupAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): boolean =>
    get(canCreateWorktreeBranchAtom) &&
    !get(conversationIsDetachedHeadAtom, get(gitActionsContextAtom)),
);

export const scopedPushBlockedReasonAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): PushBlockedReason | null => {
    const context = get<GitActionContext>(gitActionsContextAtom);
    const scopedCommitBlockedReason = get(scopedCommitBlockedReasonAtom);
    const pushBlockedReason = get<PushBlockedReason | null>(
      pushBlockedReasonAtom,
      context,
    );
    const pushAfterCommitBlockedReason = get<PushBlockedReason | null>(
      pushAfterCommitBlockedReasonAtom,
      context,
    );
    return pushBlockedReason == null ||
      (scopedCommitBlockedReason == null &&
        pushAfterCommitBlockedReason == null) ||
      (get(canCreateWorktreeBranchAtom) && scopedCommitBlockedReason == null)
      ? null
      : pushBlockedReason;
  },
);

export const scopedGitActionBlockedStepAtom = createScopedAtom(
  localConversationGitActionsScope,
  ({ get }: { get: Getter }): GitActionBlockedStep | null => {
    const context = get<GitActionContext>(gitActionsContextAtom);
    return get<{ blockedStep: GitActionBlockedStep | null }>(
      gitActionNextStepAtom,
      {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        createsBranch:
          get(canCreateWorktreeBranchAtom) ||
          get(conversationIsDetachedHeadAtom, context),
        includeLocalChanges: get(createPullRequestIncludeLocalChangesAtom, {
          cwd: context.cwd,
          hostId: context.hostConfig.id,
        }),
      },
    ).blockedStep;
  },
);
