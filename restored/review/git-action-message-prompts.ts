// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds the LLM prompts used to generate commit messages and pull request
// title/body for the local conversation git actions, including the helpers that
// read the current diff over RPC and parse its size.

import {
  getRpcClient,
  readHostConfigValue,
  SettingKeys,
  pushStatusAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  commitMessageDraftAtom,
  includeUnstagedChangesAtom,
} from "./local-git-actions-scope";

export const GIT_ACTION_OPERATION_SOURCE = "local_conversation_git_actions";
const TESTING_NOTE =
  "Testing note: If you mention tests, include unit tests or UI testing frameworks only. Skip lint/tsc since CI runs those.";
const UNTRACKED_CHANGES_NOTE = "Untracked changes are not included.";
const OVERSIZED_DIFF_LINE_LIMIT = 1000;
const PULL_REQUEST_DIFF_LINE_LIMIT = 1000;
const PULL_REQUEST_FILE_LIST_LIMIT = 100;

interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
}

interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
}

export interface OversizedDiffSummary {
  filesChanged: number;
  linesAdded: number;
  linesRemoved: number;
}

interface DiffError {
  type: string;
}

export function buildCommitMessagePrompt({
  commitInstructions,
  diffError = null,
  draftMessage,
  oversizedDiffSummary = null,
  uncommittedDiff,
}: {
  commitInstructions?: string | null;
  diffError?: DiffError | null;
  draftMessage: string;
  oversizedDiffSummary?: OversizedDiffSummary | null;
  uncommittedDiff: string | null;
}): string {
  const sections: string[] = [];
  const trimmedDraft = draftMessage.trim();
  if (trimmedDraft.length > 0) {
    sections.push(`Draft message:\n${trimmedDraft}`);
  }
  const diffSection = buildCommitDiffSection({
    diffError,
    oversizedDiffSummary,
    uncommittedDiff,
  });
  if (diffSection != null) {
    sections.push(diffSection);
  }
  if (sections.length > 0) {
    sections.push(TESTING_NOTE);
  }
  const trimmedInstructions = commitInstructions?.trim() ?? "";
  if (trimmedInstructions.length > 0) {
    sections.push(
      `Custom commit instructions (apply these to the commit message text only; do not change the required output format):\n${trimmedInstructions}`,
    );
  }
  return sections.join("\n\n");
}

export function buildCommitDiffSection({
  diffError,
  oversizedDiffSummary,
  uncommittedDiff,
}: {
  diffError: DiffError | null;
  oversizedDiffSummary: OversizedDiffSummary | null;
  uncommittedDiff: string | null;
}): string | null {
  if (oversizedDiffSummary != null) {
    return [
      "Changes:",
      "Diff too large to include inline.",
      `Summary: ${oversizedDiffSummary.filesChanged} changed files, +${oversizedDiffSummary.linesAdded}/-${oversizedDiffSummary.linesRemoved} lines.`,
      "",
      UNTRACKED_CHANGES_NOTE,
    ].join("\n");
  }
  if (diffError?.type === "diff-too-large") {
    return [
      "Changes:",
      "Diff too large to include inline.",
      "",
      UNTRACKED_CHANGES_NOTE,
    ].join("\n");
  }
  if (!uncommittedDiff || uncommittedDiff.trim().length === 0) {
    return null;
  }
  return ["Changes:", uncommittedDiff, UNTRACKED_CHANGES_NOTE].join("\n");
}

export function extractUnifiedDiff(
  result: { type: string; unifiedDiff?: string } | null | undefined,
): string | null {
  return !result || result.type !== "success"
    ? null
    : (result.unifiedDiff ?? null);
}

export function summarizeUnifiedDiff(
  diff: string | null,
): OversizedDiffSummary | null {
  if (diff == null || diff.trim().length === 0) {
    return null;
  }
  let filesChanged = 0;
  let linesAdded = 0;
  let linesRemoved = 0;
  let inHunk = false;
  for (const line of diff.split(/\r?\n/)) {
    if (line.startsWith("diff --git ")) {
      filesChanged += 1;
      inHunk = false;
      continue;
    }
    if (line.startsWith("@@")) {
      inHunk = true;
      continue;
    }
    if (inHunk) {
      if (line.startsWith("+")) {
        linesAdded += 1;
        continue;
      }
      if (line.startsWith("-")) {
        linesRemoved += 1;
      }
    }
  }
  return { filesChanged, linesAdded, linesRemoved };
}

export function buildPullRequestPrompt({
  pullRequestInstructions,
  uncommittedDiff,
  filePaths,
  baseBranch,
  headBranch,
}: {
  pullRequestInstructions?: string | null;
  uncommittedDiff: string | null;
  filePaths: string[];
  baseBranch?: string | null;
  headBranch?: string | null;
}): string {
  const sections: string[] = [];
  if (baseBranch || headBranch) {
    sections.push(
      [
        "Branches:",
        `- Head: ${headBranch ?? "-"}`,
        `- Base: ${baseBranch ?? "-"}`,
      ].join("\n"),
    );
  }
  const trimmedInstructions = pullRequestInstructions?.trim() ?? "";
  if (trimmedInstructions.length > 0) {
    sections.push(
      `Pull request instructions (apply these to the title/body content only):\n${balanceCodeFences(
        trimmedInstructions,
      )}`,
    );
  }
  sections.push(buildPullRequestChangesSection({ uncommittedDiff, filePaths }));
  return sections.join("\n\n");
}

export function buildPullRequestChangesSection({
  uncommittedDiff,
  filePaths,
}: {
  uncommittedDiff: string | null;
  filePaths: string[];
}): string {
  const trimmedDiff = uncommittedDiff?.trim() ?? "";
  const isOversized =
    (trimmedDiff.length > 0 ? countDiffLines(trimmedDiff) : 0) >
    PULL_REQUEST_DIFF_LINE_LIMIT;
  const lines = ["Changes:"];
  if (trimmedDiff.length === 0 || isOversized) {
    lines.push(formatFilePathList(filePaths));
    return lines.join("\n");
  }
  lines.push(trimmedDiff);
  return lines.join("\n");
}

export function countDiffLines(diff: string): number {
  return diff.split(/\r?\n/).length;
}

export function formatFilePathList(filePaths: string[]): string {
  if (filePaths.length === 0) {
    return "- (no files listed)";
  }
  const visiblePaths = filePaths.slice(0, PULL_REQUEST_FILE_LIST_LIMIT);
  const remaining = filePaths.length - visiblePaths.length;
  const lines = visiblePaths.map((path) => `- ${path}`);
  if (remaining > 0) {
    lines.push(`…and ${remaining} more`);
  }
  return lines.join("\n");
}

export function balanceCodeFences(text: string): string {
  const fenceMatches = text.match(/```/g);
  return fenceMatches == null || fenceMatches.length % 2 === 0
    ? text
    : `${text}\n\`\`\``;
}

export async function buildPullRequestPromptFromGit(
  scope: ScopedStore,
  context: GitActionContext,
  { headBranch, signal }: { headBranch?: string; signal?: AbortSignal } = {},
): Promise<string> {
  const [reviewPatch, branchMetadata, reviewSummary] = await Promise.all([
    getRpcClient("git").request({
      method: "review-patch",
      params: {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: GIT_ACTION_OPERATION_SOURCE,
        source: "branch",
      },
      signal,
    }),
    getRpcClient("git").request({
      method: "branch-metadata",
      params: {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: GIT_ACTION_OPERATION_SOURCE,
      },
      signal,
    }),
    getRpcClient("git").request({
      method: "review-summary",
      params: {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: GIT_ACTION_OPERATION_SOURCE,
        source: "branch",
      },
      signal,
    }),
  ]);
  const pushStatusResult = scope.get<{
    type: string;
    data?: { defaultBranch?: string | null; branch?: string | null };
  }>(pushStatusAtom, {
    cwd: context.cwd,
    hostConfig: context.hostConfig,
    operationSource: GIT_ACTION_OPERATION_SOURCE,
  });
  const pushStatus =
    pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
  return buildPullRequestPrompt({
    pullRequestInstructions:
      readHostConfigValue(scope.get, SettingKeys.pullRequestInstructions) ??
      null,
    uncommittedDiff:
      reviewPatch.diff.type === "success" ? reviewPatch.diff.unifiedDiff : null,
    filePaths:
      reviewSummary.type === "success"
        ? reviewSummary.files.map((file: { path: string }) => file.path)
        : [],
    baseBranch: branchMetadata.baseBranch ?? pushStatus?.defaultBranch ?? null,
    headBranch:
      headBranch ?? branchMetadata.branch ?? pushStatus?.branch ?? null,
  });
}

export async function buildCommitPromptFromGit(
  scope: ScopedStore,
  context: GitActionContext,
  draftMessage: string,
  signal?: AbortSignal,
): Promise<string> {
  const includeUnstaged = scope.get<boolean>(includeUnstagedChangesAtom);
  const diffResult = await getRpcClient("git").request({
    method: "commit-message-diff",
    params: {
      cwd: context.cwd,
      hostConfig: context.hostConfig,
      includeUnstaged,
      operationSource: GIT_ACTION_OPERATION_SOURCE,
    },
    signal,
  });
  const unifiedDiff = extractUnifiedDiff(diffResult);
  const diffError = diffResult.type === "error" ? diffResult.error : null;
  const diffSummary = summarizeUnifiedDiff(unifiedDiff);
  const linesAdded = diffSummary?.linesAdded ?? 0;
  const linesRemoved = diffSummary?.linesRemoved ?? 0;
  const oversizedDiffSummary =
    linesAdded + linesRemoved > OVERSIZED_DIFF_LINE_LIMIT
      ? {
          filesChanged: diffSummary?.filesChanged ?? 0,
          linesAdded,
          linesRemoved,
        }
      : null;
  return buildCommitMessagePrompt({
    commitInstructions:
      readHostConfigValue(scope.get, SettingKeys.commitInstructions) ?? null,
    diffError,
    draftMessage,
    oversizedDiffSummary,
    uncommittedDiff: oversizedDiffSummary == null ? unifiedDiff : null,
  });
}

export function seedCommitDraftMessage(
  scope: ScopedStore,
  hostScope: { cwd: string; hostId: string },
  previousMessage: string,
  nextMessage: string,
): void {
  const currentDraft = scope.get<string>(commitMessageDraftAtom, hostScope);
  if (currentDraft.trim().length === 0 || currentDraft === previousMessage) {
    scope.set(commitMessageDraftAtom, hostScope, nextMessage);
  }
}
