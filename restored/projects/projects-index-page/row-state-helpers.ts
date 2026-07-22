// Restored from ref/webview/assets/projects-index-page-DUsbWnIu.js
// Project row state helpers recovered from the current Codex webview chunk.

import { parseWorkspaceRootPathList } from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";

type ProjectGroup = Parameters<typeof parseWorkspaceRootPathList>[0] & {
  projectId: string;
  projectKind: "local" | "remote";
};

interface PendingWorktreeState {
  needsAttention: boolean;
  phase: string;
}

type ThreadEntry =
  | { kind: "local"; pendingWorktree?: PendingWorktreeState | null }
  | {
      kind: "remote";
      task: {
        has_unread_turn: boolean;
        task_status_display?: {
          latest_turn_status_display?: { turn_status?: string };
        };
      };
    };

interface ThreadStatusInput {
  entry?: ThreadEntry;
  localHasUnreadTurn?: boolean;
  localStatusType?: string | null;
  localUnreadMessageCount?: number | null;
}

export class ProjectIndexRowStateHelpers {
  static getThreadStatusState({
    entry,
    localHasUnreadTurn,
    localStatusType,
    localUnreadMessageCount,
  }: ThreadStatusInput) {
    if (entry?.kind === "local") {
      return entry.pendingWorktree == null
        ? {
            type: localStatusType ?? "idle",
            unread: localHasUnreadTurn === true,
            unreadCount: localUnreadMessageCount ?? 0,
          }
        : {
            type:
              entry.pendingWorktree.phase === "queued" ||
              entry.pendingWorktree.phase === "creating"
                ? "loading"
                : entry.pendingWorktree.phase === "failed"
                  ? "error"
                  : "idle",
            unread: entry.pendingWorktree.needsAttention,
          };
    }
    if (entry?.kind === "remote") {
      const status =
        entry.task.task_status_display?.latest_turn_status_display?.turn_status;
      return {
        type:
          status === "in_progress" || status === "pending"
            ? "loading"
            : status === "failed"
              ? "error"
              : "idle",
        unread: entry.task.has_unread_turn,
      };
    }
    return null;
  }

  static togglePinnedProjectId(
    projectIds: readonly string[] | null | undefined,
    projectId: string,
  ): string[] {
    return projectIds?.includes(projectId)
      ? projectIds.filter((candidate) => candidate !== projectId)
      : [...(projectIds ?? []), projectId];
  }

  static getEditableProjectDescriptor(project: ProjectGroup) {
    return {
      projectId: project.projectId,
      ...(project.projectKind === "local"
        ? { rootPaths: parseWorkspaceRootPathList(project) }
        : {}),
    };
  }
}
