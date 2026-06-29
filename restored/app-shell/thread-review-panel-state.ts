// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Thread review panel selection helpers backed by the current projects app bundle.
import {
  dl as setReviewBaseBranchForThread,
  ko as focusReviewFilePath,
  vl as setReviewPanelView,
} from "../vendor/projects-app-shared-runtime";

type ThreadReviewPanelScope = unknown;

export type ThreadReviewPanelView =
  | "last-turn"
  | "branch"
  | "unstaged"
  | "staged";

export const THREAD_REVIEW_PANEL_TAB_ID = "diff";

export function selectThreadReviewBaseBranch(
  scope: ThreadReviewPanelScope,
  threadId: string | null,
  baseBranch: string,
): void {
  setReviewBaseBranchForThread(scope, threadId, baseBranch);
}

export function selectThreadReviewView(
  scope: ThreadReviewPanelScope,
  view: ThreadReviewPanelView,
): void {
  setReviewPanelView(scope, view);
}

export function focusThreadReviewPath(
  scope: ThreadReviewPanelScope,
  path: string,
): void {
  focusReviewFilePath(scope, path);
}
