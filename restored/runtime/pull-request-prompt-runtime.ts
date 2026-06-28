// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Pull-request prompt copy and review-comment helper facade.
import {
  AO as PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  HO as getReviewCommentAttachmentKeyValue,
  YO as initPullRequestReviewCommentHelpers,
  kO as MY_REQUEST_PROMPT_HEADER,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  Ba as pullRequestReviewCommentAttachmentsSignal,
  Ha as updatePullRequestReviewCommentAttachmentsRaw,
  Va as initPullRequestReviewCommentAttachmentStateChunkRaw,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  $ as initPullRequestCommentCardPrimitivesChunkRaw,
  a as PullRequestCommentCard,
  o as initPullRequestCommentCardChunkRaw,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  Qc as openPullRequestReviewCommentInReviewPanel,
  eu as getThreadBranchMismatchState,
  tu as initThreadBranchComparisonChunkRaw,
  yc as initPullRequestReviewCommentNavigationChunkRaw,
  Xc as initPullRequestCommentCardSupportChunkRaw,
} from "../boundaries/current-ref/profile-page-producer";

export {
  getThreadBranchMismatchState,
  getReviewCommentAttachmentKeyValue,
  MY_REQUEST_PROMPT_HEADER,
  openPullRequestReviewCommentInReviewPanel,
  PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  PullRequestCommentCard,
  pullRequestReviewCommentAttachmentsSignal,
};

export type PullRequestReviewCommentAttachmentUpdater<TAttachment> = (
  currentAttachments: TAttachment[],
) => TAttachment[];

export function updatePullRequestReviewCommentAttachments<TAttachment>(
  scope: unknown,
  conversationId: string,
  updater: PullRequestReviewCommentAttachmentUpdater<TAttachment>,
): void {
  updatePullRequestReviewCommentAttachmentsRaw(scope, conversationId, updater);
}

export function initPullRequestReviewCommentRuntime(): void {
  initPullRequestReviewCommentHelpers();
}

export function initPullRequestReviewCommentAttachmentStateRuntime(): void {
  initPullRequestReviewCommentAttachmentStateChunkRaw();
}

export function initPullRequestCommentCardRuntime(): void {
  initPullRequestCommentCardPrimitivesChunkRaw();
  initPullRequestCommentCardChunkRaw();
  initPullRequestCommentCardSupportChunkRaw();
}

export function initPullRequestReviewCommentNavigationRuntime(): void {
  initPullRequestReviewCommentNavigationChunkRaw();
}

export function initThreadBranchComparisonRuntime(): void {
  initThreadBranchComparisonChunkRaw();
}
