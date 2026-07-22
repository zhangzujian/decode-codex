// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Message, pin, archive, and title mutation handlers.

import {
  SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  SET_THREAD_ARCHIVED_TOOL_NAME,
  SET_THREAD_PINNED_TOOL_NAME,
  SET_THREAD_TITLE_TOOL_NAME,
} from "../codex-app-tool-names";
import {
  INVALID_TOOL_ARGUMENTS_MESSAGE,
  sendMessageToThreadParamsSchema,
  setThreadArchivedParamsSchema,
  setThreadPinnedParamsSchema,
  setThreadTitleParamsSchema,
} from "../thread-management-tool-params";
import {
  buildToolErrorResult,
  sendMessageToBackgroundThread,
  setBackgroundThreadArchived,
  setBackgroundThreadPinned,
  setBackgroundThreadTitle,
} from "../../boundaries/onboarding-commons-externals.facade";
import { toToolResult } from "./shared";
import type { AppScope, ToolResult } from "./types";

export async function handleSendMessageToThread({
  argumentsValue,
  scope,
  sourceHostId,
  sourceThreadId,
}: {
  argumentsValue: unknown;
  scope: AppScope;
  sourceHostId?: string;
  sourceThreadId: string | null;
}): Promise<ToolResult> {
  const parsed = sendMessageToThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SEND_MESSAGE_TO_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await sendMessageToBackgroundThread({
        hostId: parsed.data.hostId,
        model: parsed.data.model,
        preferredHostId: sourceHostId,
        prompt: parsed.data.prompt,
        scope,
        sourceThreadId,
        threadId: parsed.data.threadId,
        thinking: parsed.data.thinking,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function handleSetThreadPinned({
  argumentsValue,
}: {
  argumentsValue: unknown;
}): Promise<ToolResult> {
  const parsed = setThreadPinnedParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SET_THREAD_PINNED_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(await setBackgroundThreadPinned(parsed.data));
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function handleSetThreadArchived({
  argumentsValue,
  sourceThreadId,
  scope,
}: {
  argumentsValue: unknown;
  sourceThreadId: string | null;
  scope: AppScope;
}): Promise<ToolResult> {
  const parsed = setThreadArchivedParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SET_THREAD_ARCHIVED_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  const threadId = parsed.data.threadId ?? sourceThreadId;
  if (threadId == null) {
    return buildToolErrorResult(
      `${SET_THREAD_ARCHIVED_TOOL_NAME} missing calling thread id.`,
    );
  }
  try {
    return toToolResult(
      await setBackgroundThreadArchived({ ...parsed.data, threadId, scope }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function handleSetThreadTitle({
  argumentsValue,
  scope,
}: {
  argumentsValue: unknown;
  scope: AppScope;
}): Promise<ToolResult> {
  const parsed = setThreadTitleParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SET_THREAD_TITLE_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await setBackgroundThreadTitle({ ...parsed.data, scope }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}
