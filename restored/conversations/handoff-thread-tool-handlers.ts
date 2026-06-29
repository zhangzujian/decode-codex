// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Backend handlers and git-orchestration internals for the handoff_thread and
// get_handoff_status MCP tools: load a source thread's handoff context, plan a
// local / cross-host move, drive the git move worker while streaming progress,
// archive the source thread, and transfer browser state (localConversation
// domain).
import { z } from "zod";
import {
  HANDOFF_THREAD_TOOL_NAME,
  GET_HANDOFF_STATUS_TOOL_NAME,
} from "./codex-app-tool-names";
import { MAX_HANDOFF_STATUS_WAIT_MS } from "./thread-handoff-tool-definitions";
import { getAvailableHandoffHosts } from "./available-handoff-hosts";
import type { HandoffHostConfig } from "./available-handoff-hosts";
import { interruptSourceThreadIfRunning } from "./interrupt-source-thread";
import {
  getHandoffOperationStatus,
  setHandoffOperationStatus,
  waitForHandoffOperationStatus,
} from "./handoff-operation-status-store";
import {
  buildInitialHandoffProgress,
  buildPendingSteps,
  resolveHandoffBranchName,
  setHandoffDestinationCwd,
  setHandoffDestinationThreadId,
  setHandoffError,
  setHandoffStatus,
  setHandoffWarning,
  toHandoffStatusPayload,
  updateHandoffStep,
  wrapHandoffToolResult,
} from "./thread-handoff-progress";
import { moveThreadToLocal } from "./move-thread-to-local";
import { moveThreadToWorktree } from "./move-thread-to-worktree";
import { moveThreadToHostWorktree } from "./move-thread-to-host-worktree";
import { serviceClientForHost } from "../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { callCodexVscodeApi } from "../boundaries/vscode-api";
import {
  canonicalizeRootPath,
  evaluateFeatureGate,
  hostMessageBridge,
  intlAtom,
  isPathWithin,
  normalizeThreadId,
  // Routed through the boundary facade (reported under facadeNeeded):
  buildToolErrorResult,
  composerPendingEditCountAtom,
  isConversationRunning,
  matchSavedProjectForHandoff,
  readSharedValue,
  selectLocalCheckoutsForWorktree,
  sendMessageToBackgroundThread,
  setSharedObjectValue,
  sharedStateKeys,
  toWorkspaceRootPath,
} from "../boundaries/onboarding-commons-externals.facade";
import { appLogger as logger, serializeError } from "../runtime/app-logger";

const CROSS_HOST_HANDOFF_FEATURE_GATE = "2256010998";
const HANDOFF_OPERATION_SOURCE = "local_remote_dropdown";

export const handoffThreadParamsSchema = z.object({
  threadId: z.string().min(1),
  destinationHostId: z.string().min(1).optional(),
  followUpPrompt: z.string().trim().min(1).optional(),
});

export const getHandoffStatusParamsSchema = z.object({
  operationId: z.string().min(1),
  afterRevision: z.number().int().min(0).optional(),
  waitMs: z.number().int().min(0).max(MAX_HANDOFF_STATUS_WAIT_MS).optional(),
});

type AppScope = {
  get: (...args: unknown[]) => any;
  set: (...args: unknown[]) => void;
};

type AppServerConversation = {
  cwd?: string | null;
  title?: string | null;
  rolloutPath: string;
  [key: string]: unknown;
};

type AppServerManager = {
  getHostId(): string;
  getConversation(conversationId: string): AppServerConversation | null;
};

type AppServerRegistry = {
  getMaybeForConversationId(conversationId: string): AppServerManager | null;
  getDefault(): AppServerManager;
};

type ToolResult = {
  contentItems: { type: string; text: string }[];
  success: boolean;
};

type HandoffContext = {
  operationId: string;
  scope: AppScope;
  queryClient: unknown;
  threadId: string;
  threadTitle: string;
  conversation: AppServerConversation;
  manager: AppServerManager;
  hostConfig: HandoffHostConfig;
  cwd: string;
  gitRoot: string;
  currentBranch: string | null;
};

type MoveThreadResult =
  | { status: "success"; conversationId: string }
  | { status: "error"; message: string; execOutput?: unknown };

type HandoffPlan = {
  destinationHostId: string;
  progress: ReturnType<typeof buildInitialHandoffProgress>;
  run: () => Promise<MoveThreadResult>;
};

type HandleHandoffThreadOptions = {
  scope: AppScope;
  appServerRegistry: AppServerRegistry;
  argumentsValue: unknown;
  callId: string;
  callingThreadId: string | null;
  crossHostHandoffEnabled?: boolean;
  queryClient: unknown;
};

export async function handleHandoffThread({
  scope,
  appServerRegistry,
  argumentsValue,
  callId,
  callingThreadId,
  crossHostHandoffEnabled = evaluateFeatureGate(
    scope,
    CROSS_HOST_HANDOFF_FEATURE_GATE,
  ),
  queryClient,
}: HandleHandoffThreadOptions): Promise<ToolResult> {
  const parsed = handoffThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${HANDOFF_THREAD_TOOL_NAME} received invalid arguments.`,
    );
  }
  const targetThreadId = normalizeThreadId(parsed.data.threadId);
  if (targetThreadId === callingThreadId) {
    return buildToolErrorResult(
      "A thread cannot hand itself off. Choose another thread.",
    );
  }
  try {
    const operationId = callId;
    const existingStatus = getHandoffOperationStatus(scope, operationId);
    if (existingStatus != null) {
      return wrapHandoffToolResult(toHandoffStatusPayload(existingStatus));
    }
    const hosts = getAvailableHandoffHosts(scope);
    const context = await loadHandoffContext({
      scope,
      appServerRegistry,
      operationId,
      hosts,
      queryClient,
      threadId: targetThreadId,
    });
    const destinationHost =
      parsed.data.destinationHostId == null
        ? context.hostConfig
        : hosts.find((host) => host.id === parsed.data.destinationHostId);
    if (destinationHost == null) {
      throw Error(
        `Host ${parsed.data.destinationHostId} is not available for thread handoff.`,
      );
    }
    if (
      destinationHost.id !== context.hostConfig.id &&
      !crossHostHandoffEnabled
    ) {
      throw Error("Cross-host thread handoff is not enabled.");
    }
    await interruptSourceThreadIfRunning({
      conversationId: targetThreadId,
      sourceThreadRunning: isConversationRunning(context.conversation),
    });
    const plan =
      destinationHost.id === context.hostConfig.id
        ? await planLocalHandoff(context)
        : await planCrossHostHandoff(context, destinationHost);
    setHandoffOperationStatus(scope, operationId, plan.progress);
    startHandoff({
      callingThreadId,
      context,
      destinationHostId: plan.destinationHostId,
      followUpPrompt: parsed.data.followUpPrompt,
      run: plan.run,
    });
    return wrapHandoffToolResult(
      toHandoffStatusPayload(
        getHandoffOperationStatus(scope, operationId) ?? plan.progress,
      ),
    );
  } catch (error) {
    logger.warning("Thread handoff dynamic tool failed: {}", {
      sensitive: { error: serializeError(error) },
      safe: { threadId: targetThreadId },
    });
    return buildToolErrorResult(
      error instanceof Error ? error.message : "Thread handoff failed.",
    );
  }
}

export async function handleGetHandoffStatus({
  scope,
  argumentsValue,
}: {
  scope: AppScope;
  argumentsValue: unknown;
}): Promise<ToolResult> {
  const parsed = getHandoffStatusParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${GET_HANDOFF_STATUS_TOOL_NAME} received invalid arguments.`,
    );
  }
  const state = await waitForHandoffOperationStatus({
    afterRevision: parsed.data.afterRevision ?? null,
    scope,
    operationId: parsed.data.operationId,
    waitMs: parsed.data.waitMs ?? 0,
  });
  return state == null
    ? buildToolErrorResult(
        `No thread handoff operation found for operationId ${parsed.data.operationId}.`,
      )
    : wrapHandoffToolResult(toHandoffStatusPayload(state));
}

type LoadHandoffContextOptions = {
  scope: AppScope;
  appServerRegistry: AppServerRegistry;
  operationId: string;
  hosts: HandoffHostConfig[];
  queryClient: unknown;
  threadId: string;
};

async function loadHandoffContext({
  scope,
  appServerRegistry,
  operationId,
  hosts,
  queryClient,
  threadId,
}: LoadHandoffContextOptions): Promise<HandoffContext> {
  const manager =
    appServerRegistry.getMaybeForConversationId(threadId) ??
    appServerRegistry.getDefault();
  await sendAppServerRequest("maybe-resume-conversation", {
    hostId: manager.getHostId(),
    conversationId: threadId,
    model: null,
    serviceTier: null,
    reasoningEffort: null,
    workspaceRoots: ["/"],
    collaborationMode: null,
    showThreadGoalResumeConfirmation: false,
  });
  const conversation = manager.getConversation(threadId);
  if (conversation == null) {
    throw Error(`Thread ${threadId} could not be loaded for handoff.`);
  }
  const queuedFollowUps = readSharedValue(
    scope.get,
    sharedStateKeys.QUEUED_FOLLOW_UPS,
  );
  if (
    scope.get(composerPendingEditCountAtom, threadId) > 0 ||
    (queuedFollowUps?.[threadId]?.length ?? 0) > 0
  ) {
    throw Error(
      `Thread ${threadId} has pending composer state. Send or remove it before handing the thread off.`,
    );
  }
  const cwd = conversation.cwd?.trim() ?? "";
  if (cwd.length === 0) {
    throw Error(`Thread ${threadId} does not have a workspace to hand off.`);
  }
  const hostConfig = hosts.find((host) => host.id === manager.getHostId());
  if (hostConfig == null) {
    throw Error(`The source host for thread ${threadId} is not available.`);
  }
  const workspaceRoot = toWorkspaceRootPath(cwd);
  const gitMetadata = await serviceClientForHost("git").request({
    method: "stable-metadata",
    params: {
      cwd: workspaceRoot,
      hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  if (gitMetadata == null) {
    throw Error("The source thread workspace is not a git repository.");
  }
  const { branch } = await serviceClientForHost("git").request({
    method: "current-branch",
    params: {
      root: gitMetadata.root,
      hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  const title = conversation.title?.trim() ?? "";
  return {
    operationId,
    scope,
    queryClient,
    threadId,
    threadTitle: title.length > 0 ? title : threadId,
    conversation,
    manager,
    hostConfig,
    cwd: workspaceRoot,
    gitRoot: gitMetadata.root,
    currentBranch: branch,
  };
}

async function planLocalHandoff(context: HandoffContext): Promise<HandoffPlan> {
  const { codexHome } = await callCodexVscodeApi("codex-home", {
    params: { hostId: context.hostConfig.id },
  });
  if (isPathWithin(context.cwd, codexHome)) {
    const localCheckout = await findLocalCheckout(context, codexHome);
    const localBranch = resolveHandoffBranchName(
      context,
      context.currentBranch,
    );
    return {
      destinationHostId: context.hostConfig.id,
      progress: buildInitialHandoffProgress(context, {
        destinationHostDisplayName: context.hostConfig.display_name,
        destinationHostId: context.hostConfig.id,
        destinationCwd: toWorkspaceRootPath(localCheckout.workspaceRoot),
        direction: "to-local",
        localBranch,
        sourceBranch: localBranch,
        steps: buildPendingSteps([
          "stash-source-changes",
          "detach-worktree-branch",
          "checkout-local-branch",
          "apply-changes-to-local",
          "switching-thread",
        ]),
        worktreeBranch: null,
      }),
      run: () =>
        moveThreadToLocal({
          conversationId: context.threadId,
          currentBranch: localBranch,
          cwd: context.cwd,
          localGitRoot: localCheckout.gitRoot,
          localWorkspaceRoot: localCheckout.workspaceRoot,
          worktreeRoot: context.gitRoot,
          branchCheckedOutElsewhere: false,
          intl: context.scope.get(intlAtom),
          appServerManager: context.manager,
          transferBrowserState,
          setDiffComments: (updater) =>
            setSharedObjectValue(context.scope, "diff_comments", updater),
          hostConfig: context.hostConfig,
          operationId: context.operationId,
          onSwitchingThreadStart: () =>
            updateHandoffStep(context, "switching-thread", "running"),
          onSwitchingThreadDone: () =>
            updateHandoffStep(context, "switching-thread", "done"),
          onSwitchingThreadFailed: () =>
            updateHandoffStep(context, "switching-thread", "failed"),
          onTargetConversationId: (conversationId) =>
            setHandoffDestinationThreadId(context, conversationId),
          onTargetCwd: (cwd) => setHandoffDestinationCwd(context, cwd),
        }),
    };
  }
  const currentBranch = context.currentBranch?.trim() ?? "";
  if (currentBranch.length === 0) {
    throw Error(
      "The source checkout is detached. Check out a branch before handing it off to a worktree.",
    );
  }
  const { branch: defaultBranch } = await serviceClientForHost("git").request({
    method: "default-branch",
    params: {
      root: context.gitRoot,
      hostConfig: context.hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  const worktreeCheckoutBranch =
    currentBranch === defaultBranch
      ? resolveHandoffBranchName(context, null)
      : currentBranch;
  const selectedLocalCheckoutBranch =
    currentBranch === defaultBranch
      ? null
      : await findAlternateBranch(context, currentBranch, defaultBranch);
  return {
    destinationHostId: context.hostConfig.id,
    progress: buildInitialHandoffProgress(context, {
      destinationHostDisplayName: context.hostConfig.display_name,
      destinationHostId: context.hostConfig.id,
      destinationCwd: null,
      direction: "to-worktree",
      localBranch: selectedLocalCheckoutBranch,
      sourceBranch: currentBranch,
      steps: buildPendingSteps([
        "stash-source-changes",
        "checkout-local-branch",
        "stash-target-worktree-changes",
        "checkout-worktree-branch",
        "apply-changes-to-worktree",
        "switching-thread",
      ]),
      worktreeBranch: worktreeCheckoutBranch,
    }),
    run: () =>
      moveThreadToWorktree({
        conversationId: context.threadId,
        currentBranch,
        cwd: context.cwd,
        worktreeCheckoutBranch,
        selectedLocalCheckoutBranch,
        intl: context.scope.get(intlAtom),
        appServerManager: context.manager,
        defaultBranch,
        transferBrowserState,
        setDiffComments: (updater) =>
          setSharedObjectValue(context.scope, "diff_comments", updater),
        hostConfig: context.hostConfig,
        queryClient: context.queryClient,
        operationId: context.operationId,
        onStepStatus: (step, status) =>
          updateHandoffStep(context, step, status),
        onTargetConversationId: (conversationId) =>
          setHandoffDestinationThreadId(context, conversationId),
        onTargetCwd: (cwd) => setHandoffDestinationCwd(context, cwd),
      }),
  };
}

async function planCrossHostHandoff(
  context: HandoffContext,
  destinationHost: HandoffHostConfig,
): Promise<HandoffPlan> {
  if (context.conversation.rolloutPath.trim().length === 0) {
    throw Error("This chat does not have a rollout file to move");
  }
  const sourceBranch = resolveHandoffBranchName(context, context.currentBranch);
  const [{ roots: destinationWorkspaceRoots }, { origins: sourceGitOrigins }] =
    await Promise.all([
      callCodexVscodeApi("workspace-root-options", {
        params: { hostId: destinationHost.id },
      }),
      callCodexVscodeApi("git-origins", {
        params: { hostId: context.hostConfig.id, dirs: [context.cwd] },
        source: HANDOFF_OPERATION_SOURCE,
      }),
    ]);
  const { origins: destinationGitOrigins } = await callCodexVscodeApi(
    "git-origins",
    {
      params: { hostId: destinationHost.id, dirs: destinationWorkspaceRoots },
      source: HANDOFF_OPERATION_SOURCE,
    },
  );
  const destinationWorkspaceRoot = matchSavedProjectForHandoff({
    sourceWorkspaceRoot: context.cwd,
    sourceGitRoot: context.gitRoot,
    sourceGitOrigins,
    destinationWorkspaceRoots,
    destinationGitOrigins,
  });
  if (destinationWorkspaceRoot == null) {
    throw Error(
      `No matching saved project was found on ${destinationHost.display_name}.`,
    );
  }
  return {
    destinationHostId: destinationHost.id,
    progress: buildInitialHandoffProgress(context, {
      destinationHostDisplayName: destinationHost.display_name,
      destinationHostId: destinationHost.id,
      destinationCwd: toWorkspaceRootPath(destinationWorkspaceRoot),
      direction: "to-host-worktree",
      localBranch: null,
      sourceBranch,
      steps: buildPendingSteps([
        "prepare-host-transfer",
        "transfer-host-artifacts",
        "apply-changes-to-worktree",
        "switching-thread",
      ]),
      worktreeBranch: null,
    }),
    run: () =>
      moveThreadToHostWorktree({
        conversationId: context.threadId,
        sourceBranch,
        cwd: context.cwd,
        destinationWorkspaceRoot: toWorkspaceRootPath(destinationWorkspaceRoot),
        intl: context.scope.get(intlAtom),
        appServerManager: context.manager,
        sourceHostConfig: context.hostConfig,
        destinationHostConfig: destinationHost,
        transferBrowserState,
        setDiffComments: (updater) =>
          setSharedObjectValue(context.scope, "diff_comments", updater),
        queryClient: context.queryClient,
        operationId: context.operationId,
        onSwitchingThreadStart: () =>
          updateHandoffStep(context, "switching-thread", "running"),
        onSwitchingThreadDone: () =>
          updateHandoffStep(context, "switching-thread", "done"),
        onSwitchingThreadFailed: () =>
          updateHandoffStep(context, "switching-thread", "failed"),
        onTargetConversationId: (conversationId) =>
          setHandoffDestinationThreadId(context, conversationId),
        onTargetCwd: (cwd) => setHandoffDestinationCwd(context, cwd),
        onStepStatus: (step, status) =>
          updateHandoffStep(context, step, status),
      }),
  };
}

type RunHandoffOptions = {
  callingThreadId: string | null;
  context: HandoffContext;
  destinationHostId: string;
  followUpPrompt: string | undefined;
  run: () => Promise<MoveThreadResult>;
};

function startHandoff(options: RunHandoffOptions): void {
  void runHandoff(options);
}

async function runHandoff({
  callingThreadId,
  context,
  destinationHostId,
  followUpPrompt,
  run,
}: RunHandoffOptions): Promise<void> {
  const unsubscribe = serviceClientForHost("git").subscribe(
    "thread-handoff-progress",
    (event: { operationId: string; step: string; status: string }) => {
      if (event.operationId !== context.operationId) return;
      let stepStatus: "done" | "running" | "failed" | undefined;
      switch (event.status) {
        case "completed":
        case "skipped":
          stepStatus = "done";
          break;
        case "started":
          stepStatus = "running";
          break;
        case "failed":
          stepStatus = "failed";
          break;
      }
      if (stepStatus != null)
        updateHandoffStep(context, event.step, stepStatus);
    },
  );
  try {
    setHandoffStatus(context, "running");
    const result = await run();
    if (result.status === "error") {
      setHandoffError(context, result.message);
      return;
    }
    if (result.conversationId === context.threadId) {
      setHandoffWarning(
        context,
        "Git handoff completed, but the destination thread could not be created.",
      );
      return;
    }
    setHandoffDestinationThreadId(context, result.conversationId);
    archiveSourceThread(context);
    if (followUpPrompt != null) {
      await sendMessageToBackgroundThread({
        hostId: destinationHostId,
        model: undefined,
        prompt: followUpPrompt,
        scope: context.scope,
        sourceThreadId: callingThreadId,
        threadId: result.conversationId,
        thinking: undefined,
      });
    }
    setHandoffStatus(context, "success");
  } catch (error) {
    logger.warning("Thread handoff failed unexpectedly: {}", {
      sensitive: { error: serializeError(error) },
      safe: { operationId: context.operationId },
    });
    setHandoffError(
      context,
      error instanceof Error ? error.message : "Thread handoff failed.",
    );
  } finally {
    unsubscribe();
  }
}

function archiveSourceThread(context: HandoffContext): void {
  sendAppServerRequest("archive-conversation", {
    conversationId: context.threadId,
    cleanupWorktree: false,
    source: "thread_handoff",
  }).catch((error: unknown) => {
    logger.warning("Thread handoff succeeded, but source archive failed: {}", {
      sensitive: { error: serializeError(error) },
      safe: { threadId: context.threadId },
    });
  });
}

type LocalCheckout = { workspaceRoot: string; gitRoot: string };

async function findLocalCheckout(
  context: HandoffContext,
  codexHome: string,
): Promise<LocalCheckout> {
  const [{ worktrees: repoWorktrees }, { worktrees: codexWorktrees }] =
    await Promise.all([
      serviceClientForHost("git").request({
        method: "list-worktrees",
        params: {
          cwd: context.cwd,
          hostConfig: context.hostConfig,
          operationSource: HANDOFF_OPERATION_SOURCE,
        },
      }),
      serviceClientForHost("git").request({
        method: "codex-worktrees",
        params: {
          hostConfig: context.hostConfig,
          operationSource: HANDOFF_OPERATION_SOURCE,
        },
      }),
    ]);
  const codexWorktreeDirs = new Set(
    codexWorktrees.map(({ dir }: { dir: string }) => canonicalizeRootPath(dir)),
  );
  const checkout = selectLocalCheckoutsForWorktree({
    cwd: context.cwd,
    sourceWorktreeRoot: toWorkspaceRootPath(context.gitRoot),
    repoWorktreeEntries: repoWorktrees.filter(
      ({ root }: { root: string }) =>
        !codexWorktreeDirs.has(canonicalizeRootPath(root)) &&
        !isPathWithin(root, codexHome),
    ),
  })[0];
  if (checkout == null) {
    throw Error("No checkout was found for the source worktree.");
  }
  return checkout;
}

async function findAlternateBranch(
  context: HandoffContext,
  currentBranch: string,
  defaultBranch: string,
): Promise<string> {
  const { branches } = await serviceClientForHost("git").request({
    method: "recent-branches",
    params: {
      root: context.gitRoot,
      hostConfig: context.hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  const alternateBranch = [defaultBranch, ...branches].find(
    (candidate: string | null) =>
      candidate != null && candidate !== currentBranch,
  );
  if (alternateBranch == null) {
    throw Error(
      "No other checkout branch is available before handing this thread off to a worktree.",
    );
  }
  return alternateBranch;
}

export function transferBrowserState(
  sourceConversationId: string,
  targetConversationId: string,
): void {
  hostMessageBridge.dispatchMessage("browser-sidebar-command", {
    conversationId: sourceConversationId,
    command: { type: "transfer-conversation", targetConversationId },
  });
}
