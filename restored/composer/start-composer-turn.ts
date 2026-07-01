// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Core turn lifecycle for the composer: decide whether to start a fresh turn or
// steer the in-progress one, send the host request, and fall back when steering
// races with a turn that already ended.
import { buildImageInputItems } from "./build-image-input-items";
import { createRestoreMessage } from "./restore-message";
import { isSteerTurnInactiveError } from "./steer-turn-inactive-error";
import {
  LOCAL_HOST_ID,
  CLOSED_AGENT_ERROR_MESSAGE,
  MULTI_AGENT_MODE,
  sendHostRequest,
  buildAttachmentsPayload,
  buildThreadPermissions,
  serializePermissionPolicy,
  resolveRuntimeWorkspaceRoots,
  getPermissionOverrides,
  prepareConversationForTurn,
  toImageAttachmentInputs,
  mergeFileAttachments,
  getComposerPromptText,
  resumableConversationAtom,
  conversationTurnsAtom,
  parentConversationAtom,
} from "../boundaries/onboarding-commons-externals.facade";

const EMPTY_WORKSPACE_ROOTS: string[] = [];

interface ComposerScope {
  get(atom: unknown, key?: unknown): any;
}

interface ConversationManager {
  getHostId(): string;
  requestClient: unknown;
}

export interface StartComposerTurnArgs {
  scope: ComposerScope;
  manager: ConversationManager;
  hostId: string;
  context: any;
  targetConversationId: string;
  cwd: string;
  agentMode: unknown;
  permissionProfileId: string | null;
  serviceTier: unknown;
  shouldSendPermissionOverrides: boolean;
  activeCollaborationMode: unknown;
  restoreMessage?: any;
}

export interface SendRestoreMessageArgs
  extends Omit<StartComposerTurnArgs, "context" | "cwd" | "restoreMessage"> {
  restoreMessage: { cwd: string; context: any };
}

function isClosedAgentConversation(
  scope: ComposerScope,
  conversationId: string,
): boolean {
  const parentConversationId = scope.get(
    parentConversationAtom,
    conversationId,
  );
  if (parentConversationId == null) return false;
  const turns = scope.get(conversationTurnsAtom, parentConversationId);
  if (turns == null) return false;

  let isClosed = false;
  for (const turn of turns) {
    if (turn.items == null) continue;
    for (const item of turn.items) {
      if (
        item.type === "collabAgentToolCall" &&
        item.receiverThreadIds.includes(conversationId) &&
        item.tool !== "wait"
      ) {
        isClosed = item.tool === "closeAgent";
      }
    }
  }
  return isClosed;
}

export function startComposerTurn(
  args: StartComposerTurnArgs,
): Promise<string> {
  return startTurn(args);
}

export function sendRestoreMessage(
  args: SendRestoreMessageArgs,
): Promise<string> {
  return steerTurn(args);
}

async function startTurn(
  {
    scope,
    manager,
    hostId,
    context,
    targetConversationId,
    cwd,
    agentMode,
    permissionProfileId,
    serviceTier,
    shouldSendPermissionOverrides,
    activeCollaborationMode,
    restoreMessage,
  }: StartComposerTurnArgs,
  forceStart = false,
): Promise<string> {
  const isRemoteHost = hostId !== LOCAL_HOST_ID;
  if (isClosedAgentConversation(scope, targetConversationId)) {
    throw Error(CLOSED_AGENT_ERROR_MESSAGE);
  }

  let activeTurnId: string | null = null;
  if (
    !forceStart &&
    scope.get(resumableConversationAtom, targetConversationId) &&
    (activeTurnId = (
      await sendHostRequest("maybe-resume-conversation", {
        hostId: manager.getHostId(),
        conversationId: targetConversationId,
        model: null,
        serviceTier,
        reasoningEffort: null,
        workspaceRoots: context.workspaceRoots ?? [cwd],
        collaborationMode: context.collaborationMode ?? activeCollaborationMode,
      })
    ).activeTurnId) != null
  ) {
    // resume side effect captured above
  }

  if (
    !forceStart &&
    (activeTurnId != null ||
      scope.get(conversationTurnsAtom, targetConversationId)?.at(-1)?.status ===
        "inProgress")
  ) {
    return steerTurn({
      scope,
      manager,
      hostId,
      targetConversationId,
      agentMode,
      permissionProfileId,
      serviceTier,
      shouldSendPermissionOverrides,
      activeCollaborationMode,
      restoreMessage: restoreMessage ?? createRestoreMessage({ context, cwd }),
    });
  }

  await prepareConversationForTurn(scope, {
    conversationId: targetConversationId,
    cwd,
    hostId,
  });

  const imageInputs = toImageAttachmentInputs(context.imageAttachments);
  const input = [
    { type: "text", text: getComposerPromptText(context), text_elements: [] },
    ...buildImageInputItems(context, isRemoteHost, {
      shouldRestrictRemoteHostImageSize: false,
    }),
  ];
  const attachments = buildAttachmentsPayload([
    ...mergeFileAttachments(
      context.fileAttachments,
      context.pastedTextAttachments,
    ),
    ...context.addedFiles,
    ...imageInputs,
  ]);
  const permissionOverrides = shouldSendPermissionOverrides
    ? await getPermissionOverrides(manager.requestClient, cwd)
    : null;
  const permissions =
    permissionOverrides == null
      ? null
      : buildThreadPermissions(
          agentMode,
          context.workspaceRoots ?? EMPTY_WORKSPACE_ROOTS,
          permissionOverrides,
        );

  if (permissions != null && permissionProfileId != null) {
    permissions.activePermissionProfile = {
      id: permissionProfileId,
      extends: null,
    };
    permissions.runtimeWorkspaceRoots =
      context.workspaceRoots ?? EMPTY_WORKSPACE_ROOTS;
  }

  return (
    await sendHostRequest("start-turn-for-host", {
      hostId: manager.getHostId(),
      conversationId: targetConversationId,
      params: {
        input,
        commentAttachments: context.commentAttachments,
        cwd,
        model: null,
        effort: null,
        multiAgentMode: MULTI_AGENT_MODE,
        serviceTier,
        ...(permissions == null
          ? {}
          : {
              approvalPolicy: permissions.approvalPolicy,
              approvalsReviewer: permissions.approvalsReviewer,
              ...serializePermissionPolicy(permissions),
              ...(permissions.activePermissionProfile == null
                ? {}
                : {
                    runtimeWorkspaceRoots:
                      resolveRuntimeWorkspaceRoots(permissions),
                  }),
            }),
        ...(shouldSendPermissionOverrides
          ? {}
          : { useAppServerPermissionDefault: true }),
        attachments,
        collaborationMode: context.collaborationMode ?? activeCollaborationMode,
      },
    })
  ).turn.id;
}

async function steerTurn({
  scope,
  manager,
  hostId,
  targetConversationId,
  agentMode,
  permissionProfileId,
  serviceTier,
  shouldSendPermissionOverrides,
  activeCollaborationMode,
  restoreMessage,
}: SendRestoreMessageArgs): Promise<string> {
  const isRemoteHost = hostId !== LOCAL_HOST_ID;
  const { cwd, context } = restoreMessage;
  if (isClosedAgentConversation(scope, targetConversationId)) {
    throw Error(CLOSED_AGENT_ERROR_MESSAGE);
  }

  if (scope.get(resumableConversationAtom, targetConversationId)) {
    await sendHostRequest("maybe-resume-conversation", {
      hostId: manager.getHostId(),
      conversationId: targetConversationId,
      model: null,
      serviceTier,
      reasoningEffort: null,
      workspaceRoots: context.workspaceRoots ?? [cwd],
      collaborationMode: context.collaborationMode ?? activeCollaborationMode,
    });
  }

  const imageInputs = toImageAttachmentInputs(context.imageAttachments);
  const input = [
    { type: "text", text: getComposerPromptText(context), text_elements: [] },
    ...buildImageInputItems(context, isRemoteHost, {
      shouldRestrictRemoteHostImageSize: false,
    }),
  ];
  const attachments = buildAttachmentsPayload([
    ...mergeFileAttachments(
      context.fileAttachments,
      context.pastedTextAttachments,
    ),
    ...context.addedFiles,
    ...imageInputs,
  ]);

  try {
    return (
      await sendHostRequest("steer-turn-for-host", {
        hostId: manager.getHostId(),
        conversationId: targetConversationId,
        input,
        restoreMessage,
        serviceTier,
        attachments,
      })
    ).turnId;
  } catch (error) {
    if (!isSteerTurnInactiveError(error)) throw error;
    return startTurn(
      {
        scope,
        manager,
        hostId,
        context,
        targetConversationId,
        cwd,
        agentMode,
        permissionProfileId,
        serviceTier,
        shouldSendPermissionOverrides,
        activeCollaborationMode,
        restoreMessage,
      },
      false,
    );
  }
}
