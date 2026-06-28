// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Pull-request prompt copy and review-comment helper facade.
import {
  AO as PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  HO as getReviewCommentAttachmentKeyValue,
  YO as initPullRequestReviewCommentHelpers,
  kO as MY_REQUEST_PROMPT_HEADER,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export {
  getReviewCommentAttachmentKeyValue,
  MY_REQUEST_PROMPT_HEADER,
  PULL_REQUEST_FIX_PROMPT_PREAMBLE,
};

export function initPullRequestReviewCommentRuntime(): void {
  initPullRequestReviewCommentHelpers();
}
