// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import {
  CREATE_THREAD_TOOL_NAME,
  FORK_THREAD_TOOL_NAME,
  LIST_THREADS_TOOL_NAME,
  READ_THREAD_TOOL_NAME,
  SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  SET_THREAD_ARCHIVED_TOOL_NAME,
  SET_THREAD_PINNED_TOOL_NAME,
  SET_THREAD_TITLE_TOOL_NAME,
} from "../codex-app-tool-names";
import type { AnyToolActivityRecord } from "./types";
import { getToolArguments } from "./utilities";

export const codexAppToolNamespace = "codex_app";
export const threadsForkTool = FORK_THREAD_TOOL_NAME;
export const threadsForkInWorktreeTool = FORK_THREAD_TOOL_NAME;
export const threadsReadTool = READ_THREAD_TOOL_NAME;
export const threadsListTool = LIST_THREADS_TOOL_NAME;
export const threadsCreateTool = CREATE_THREAD_TOOL_NAME;
export const threadsCreateInWorktreeTool = CREATE_THREAD_TOOL_NAME;
export const threadsSendMessageTool = SEND_MESSAGE_TO_THREAD_TOOL_NAME;
export const threadsSetArchivedTool = SET_THREAD_ARCHIVED_TOOL_NAME;
export const threadsSetPinnedTool = SET_THREAD_PINNED_TOOL_NAME;
export const threadsSetTitleTool = SET_THREAD_TITLE_TOOL_NAME;
export const coreToolActivityDescriptors: any[] = [];
export const subagentToolActivityDescriptors: any[] = [];

export function assertUnreachableToolActivity(_unit: never): { type: "other" } {
  return { type: "other" };
}

export function getThreadsForkSummaryPartKey(
  item: AnyToolActivityRecord,
): string {
  const args = getToolArguments(item);
  return args.environment?.type === "worktree" ? "worktree" : "same-directory";
}

export function getThreadsReadSummaryPartKey(
  item: AnyToolActivityRecord,
): string {
  const args = getToolArguments(item);
  return String(args.threadId ?? args.cursor ?? "");
}

export function getThreadsListSummaryPartKey(
  item: AnyToolActivityRecord,
): string {
  const args = getToolArguments(item);
  return String(args.query ?? args.limit ?? "");
}

export function getMultiAgentToolGroupKey({
  item,
}: {
  item: AnyToolActivityRecord;
}): { groupKey: string } | null {
  const action =
    item.action ??
    item.arguments?.action ??
    item.invocation?.arguments?.action ??
    item.invocation?.tool;
  const agentId =
    item.agentId ??
    item.arguments?.agentId ??
    item.invocation?.arguments?.agentId ??
    item.invocation?.arguments?.threadId;
  if (typeof action !== "string" || typeof agentId !== "string") return null;
  if (
    !["spawnAgent", "sendInput", "resumeAgent", "closeAgent"].includes(action)
  ) {
    return null;
  }
  return { groupKey: `multi-agent:${action}:${agentId}` };
}
