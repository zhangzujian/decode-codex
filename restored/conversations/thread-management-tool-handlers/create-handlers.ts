// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Fork and create handlers for Codex background threads.

import {
  CREATE_THREAD_TOOL_NAME,
  FORK_THREAD_TOOL_NAME,
} from "../codex-app-tool-names";
import {
  createThreadParamsSchema,
  forkThreadParamsSchema,
  INVALID_TOOL_ARGUMENTS_MESSAGE,
} from "../thread-management-tool-params";
import {
  buildToolErrorResult,
  createBackgroundThread,
  forkConversation,
  LOCAL_HOST_ID,
} from "../../boundaries/onboarding-commons-externals.facade";
import {
  DEFAULT_CREATE_THREAD_MODEL_FOR_VALIDATION,
  resolveCreateThreadTarget,
  toToolResult,
  validateReasoningEffortForModel,
} from "./shared";
import type {
  AppScope,
  CreateThreadTarget,
  GetAvailableModels,
  ToolResult,
} from "./types";

export async function handleForkThread({
  scope,
  argumentsValue,
  sourceThreadId,
}: {
  scope: AppScope;
  argumentsValue: unknown;
  sourceThreadId: string | null;
}): Promise<ToolResult> {
  if (sourceThreadId == null) {
    return buildToolErrorResult(
      `${FORK_THREAD_TOOL_NAME} missing calling thread id.`,
    );
  }
  const parsed = forkThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${FORK_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await forkConversation({
        scope,
        sourceThreadId,
        targetThreadId: parsed.data.threadId,
        environment: parsed.data.environment ?? { type: "same-directory" },
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function handleCreateThread({
  argumentsValue,
  getAvailableModels,
  scope,
  sourceThreadId,
}: {
  argumentsValue: unknown;
  getAvailableModels?: GetAvailableModels;
  scope: AppScope;
  sourceThreadId: string | null;
}): Promise<ToolResult> {
  const parsed = createThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${CREATE_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    const target = resolveCreateThreadTarget(
      scope,
      parsed.data.target as CreateThreadTarget,
    );
    if (parsed.data.thinking != null) {
      const hostId =
        target.type === "remoteProject" ? target.hostId : LOCAL_HOST_ID;
      const availableModels =
        getAvailableModels == null ? [] : await getAvailableModels(hostId);
      const validationError = validateReasoningEffortForModel(
        CREATE_THREAD_TOOL_NAME,
        parsed.data.model ?? DEFAULT_CREATE_THREAD_MODEL_FOR_VALIDATION,
        parsed.data.thinking,
        availableModels,
      );
      if (validationError != null) {
        return buildToolErrorResult(validationError);
      }
    }
    return toToolResult(
      await createBackgroundThread({
        model: parsed.data.model,
        prompt: parsed.data.prompt,
        scope,
        sourceThreadId,
        target,
        thinking: parsed.data.thinking,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}
