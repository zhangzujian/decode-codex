// Restored from ref/webview/assets/app-initial~app-main~pull-request-route~pull-request-code-review~onboarding-page~projects-i~gmpr6uvf-BlGBmQRu.js
// Current pull-request status icons, labels, and display-state derivation helpers.
import { PaperPlaneOutlineIcon } from "../../icons/paper-plane-send-icon";
import {
  ReviewTabIcon,
  initReviewTabIconChunk as initReviewTabIconRuntime,
} from "../../icons/review-tab-icon";
import {
  PullRequestButtonLabel,
  PullRequestCheckStatusIcon,
  PullRequestDraftIcon,
  PullRequestMergedIcon,
  PullRequestReadyIcon,
  PullRequestStatusIcon,
} from "../pull-request-status";
type PullRequestDisplayStatus = "closed" | "draft" | "merged" | "open";
type PullRequestMergeReadiness =
  "draft" | "failing" | "in_progress" | "merged" | "ready" | "successful";
function derivePullRequestDisplayStatus({
  hasOpenPr,
  isDraft,
  state,
  url,
}: {
  hasOpenPr: boolean;
  isDraft: boolean;
  state: string;
  url: string | null;
}): PullRequestDisplayStatus | null {
  return state === "merged"
    ? "merged"
    : hasOpenPr
      ? isDraft
        ? "draft"
        : "open"
      : url == null
        ? null
        : "merged";
}
function derivePullRequestMergeReadiness({
  canMerge,
  ciStatus,
  hasMergeConflicts = false,
  status,
}: {
  canMerge: boolean;
  ciStatus: string;
  hasMergeConflicts?: boolean;
  status: PullRequestDisplayStatus;
}): PullRequestMergeReadiness {
  return status === "merged"
    ? "merged"
    : status === "draft"
      ? "draft"
      : hasMergeConflicts || ciStatus === "failing"
        ? "failing"
        : ciStatus === "passing" && !canMerge
          ? "successful"
          : canMerge
            ? "ready"
            : "in_progress";
}
function initPullRequestMergedIconRuntime(): void {}
function initPullRequestReadyIconRuntime(): void {}
function initPaperPlaneOutlineIconRuntime(): void {}
function initPullRequestDraftIconRuntime(): void {}
function initPullRequestStatusHelpers(): void {}
function initPullRequestStatusRuntime(): void {}
export {
  initReviewTabIconRuntime,
  PullRequestStatusIcon,
  PullRequestReadyIcon,
  initPullRequestMergedIconRuntime,
  PullRequestDraftIcon,
  ReviewTabIcon,
  initPaperPlaneOutlineIconRuntime,
  PullRequestButtonLabel,
  initPullRequestReadyIconRuntime,
  PaperPlaneOutlineIcon,
  derivePullRequestMergeReadiness,
  PullRequestCheckStatusIcon,
  initPullRequestDraftIconRuntime,
  initPullRequestStatusHelpers,
  initPullRequestStatusRuntime,
  derivePullRequestDisplayStatus,
  PullRequestMergedIcon,
};
