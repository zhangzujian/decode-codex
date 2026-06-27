// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Chat attachment and prompt helpers for pull request merge conflicts.
import { once } from "../../runtime/commonjs-interop";
import {
  AO as PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  kO as MY_REQUEST_PROMPT_HEADER,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  _o as initPullRequestPromptActionsChunk,
  ho as focusComposerAfterPullRequestPrompt,
  ls as submitPullRequestPrompt,
  ns as initPullRequestComposerContextChunk,
  us as updatePullRequestChatContext,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";

type PullRequestMergeConflict = {
  baseBranch: string;
  headBranch: string;
  number: number;
  repo?: string | null;
  url: string;
};

function buildPullRequestMergeConflictFixPrompt({
  baseBranch,
  headBranch,
  number,
}: {
  baseBranch: string;
  headBranch: string;
  number: number;
}) {
  return [
    PULL_REQUEST_FIX_PROMPT_PREAMBLE,
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and resolve the attached merge conflict blocker with the smallest safe changes.`,
    "Start from the attached merge conflict context. Then use `gh pr view` and local git state to confirm the current merge blocker before changing code.",
    "Fetch the latest base branch, merge or rebase as appropriate for this repository, resolve the conflicts, and avoid unrelated refactors.",
    "After resolving conflicts, run the narrowest relevant verification, commit and push the resolution, and summarize the conflict and result.",
    MY_REQUEST_PROMPT_HEADER,
    "Resolve the PR merge conflicts, then commit and push the fix.",
  ].join("\n");
}

export function attachPullRequestMergeConflictAndPromptFix(
  scope: unknown,
  mergeConflict?: PullRequestMergeConflict | null,
) {
  return mergeConflict == null
    ? false
    : (submitPullRequestPrompt(
        scope,
        buildPullRequestMergeConflictFixPrompt({
          baseBranch: mergeConflict.baseBranch,
          headBranch: mergeConflict.headBranch,
          number: mergeConflict.number,
        }),
      ),
      setPullRequestMergeConflictAttachment(scope, mergeConflict),
      focusComposerAfterPullRequestPrompt(),
      true);
}

export function setPullRequestMergeConflictAttachment(
  scope: unknown,
  mergeConflict?: PullRequestMergeConflict | null,
) {
  updatePullRequestChatContext(scope, (pullRequestContext: any) => {
    pullRequestContext.pullRequestMergeConflict = mergeConflict;
  });
}

export const initPullRequestFixActionHelpersChunk = once(() => {
  initPullRequestComposerContextChunk();
  initPullRequestPromptActionsChunk();
});
