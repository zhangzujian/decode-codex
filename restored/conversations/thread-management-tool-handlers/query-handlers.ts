// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Project and thread query handlers.

import {
  LIST_PROJECTS_TOOL_NAME,
  LIST_THREADS_TOOL_NAME,
  READ_THREAD_TOOL_NAME,
} from "../codex-app-tool-names";
import {
  DEFAULT_LIST_THREADS_LIMIT,
  DEFAULT_READ_THREAD_MAX_OUTPUT_CHARS,
  DEFAULT_READ_THREAD_TURN_LIMIT,
  INVALID_TOOL_ARGUMENTS_MESSAGE,
  listProjectsParamsSchema,
  listThreadsParamsSchema,
  readThreadParamsSchema,
} from "../thread-management-tool-params";
import {
  buildToolErrorResult,
  listBackgroundProjects,
  listBackgroundThreads,
  readBackgroundThread,
} from "../../boundaries/onboarding-commons-externals.facade";
import { toToolResult } from "./shared";
import type { AppScope, ToolResult } from "./types";

export async function handleListProjects({
  scope,
  argumentsValue,
}: {
  scope: AppScope;
  argumentsValue: unknown;
}): Promise<ToolResult> {
  if (!listProjectsParamsSchema.safeParse(argumentsValue).success) {
    return buildToolErrorResult(
      `${LIST_PROJECTS_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(await listBackgroundProjects({ scope }));
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function handleListThreads({
  scope,
  argumentsValue,
}: {
  scope: AppScope;
  argumentsValue: unknown;
}): Promise<ToolResult> {
  const parsed = listThreadsParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${LIST_THREADS_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await listBackgroundThreads({
        scope,
        limit: parsed.data.limit ?? DEFAULT_LIST_THREADS_LIMIT,
        query: parsed.data.query,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function handleReadThread({
  scope,
  argumentsValue,
  sourceHostId,
}: {
  scope: AppScope;
  argumentsValue: unknown;
  sourceHostId?: string;
}): Promise<ToolResult> {
  const parsed = readThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${READ_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await readBackgroundThread({
        scope,
        cursor: parsed.data.cursor,
        hostId: parsed.data.hostId ?? sourceHostId,
        includeOutputs: parsed.data.includeOutputs ?? false,
        maxOutputCharsPerItem:
          parsed.data.maxOutputCharsPerItem ??
          DEFAULT_READ_THREAD_MAX_OUTPUT_CHARS,
        threadId: parsed.data.threadId,
        turnLimit: parsed.data.turnLimit ?? DEFAULT_READ_THREAD_TURN_LIMIT,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}
