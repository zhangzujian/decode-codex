// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review file-entry atoms: convert review summaries or pasted/cloud diffs into the
// ordered file models consumed by the review diff list.

import nodePath from "node:path";
import {
  createComputedAtom,
  createParametricAtom,
  isAbsolutePath,
  normalizePath,
  threadAtomScope,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  toAbsoluteGitPath,
  toRepoRelativeDisplayPath,
} from "../utils/git-relative-display-path";
import { reviewCwdAtom } from "./thread-review-context";
import { reviewGitMetadataQueryAtom } from "./review-git-metadata";
import { reviewSummaryAtom } from "./review-summary-query-atoms";
import {
  reviewDiffTargetParsedAtom,
  reviewFileDiffQueryFamily,
} from "./review-file-diff-query";
import {
  isReviewDiffEnabledAtom,
  reviewLocationKindAtom,
  reviewRootAtom,
} from "./review-diff-mode-atoms";
import { reviewDiffFilterAtom } from "./review-diff-model";
import { reviewDiffTargetPathAtom } from "./review-diff-target-state";
import { parseReviewDiff } from "./review-diff-store-helpers";
import type { ComputedAtomContext } from "./review-diff-store-types";
import { orderReviewFileEntries } from "./review-file-entry-order";

export type ReviewDiffLoadStatus = "loading" | "loaded" | "error";

export interface ReviewSummaryFile {
  path: string;
  revision?: string | null;
  additions?: number;
  deletions?: number;
  changeKind?: string;
  previousPath?: string | null;
  [key: string]: unknown;
}

export interface ReviewSummarySuccess {
  type: "success";
  files: ReviewSummaryFile[];
}

export interface ParsedReviewDiffMetadata {
  name: string;
  prevName?: string;
  type?: string;
  [key: string]: unknown;
}

export interface ParsedReviewDiffFile {
  metadata: ParsedReviewDiffMetadata;
  oldPath: string;
  newPath: string;
  additions?: number;
  deletions?: number;
  changedBytes?: number;
  [key: string]: unknown;
}

export interface ReviewFileEntry {
  canApplyPatchActions: boolean;
  displayPath: string;
  diff: ParsedReviewDiffFile | null;
  diffRevision: string | null;
  diffLoadStatus: ReviewDiffLoadStatus;
  gitPath: string;
  path: string;
  summary: ReviewSummaryFile | null;
}

interface ReviewDiffQuerySuccess {
  type: "success";
  diff: string;
}

interface ReviewDiffQueryError {
  type: "error";
}

type ReviewDiffQueryData = ReviewDiffQuerySuccess | ReviewDiffQueryError;

interface ReviewDiffQueryResult {
  data?: ReviewDiffQueryData;
  error?: unknown;
  isError?: boolean;
  isFetching: boolean;
  isPlaceholderData?: boolean;
}

export const reviewFileEntriesAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): ReviewFileEntry[] => {
    if (get(isReviewDiffEnabledAtom)) {
      return buildReviewEntriesFromSummary({
        cwd: get(reviewCwdAtom),
        gitRoot: get(reviewGitMetadataQueryAtom).data?.root ?? null,
        reviewSummary: get(reviewSummaryAtom).data,
      });
    }

    const useTargetRoot =
      get(reviewLocationKindAtom) === "cloud" ||
      get(reviewDiffFilterAtom) === "last-turn";
    const gitRoot = useTargetRoot
      ? get(reviewRootAtom)
      : (get(reviewGitMetadataQueryAtom).data?.root ?? null);
    const cwd = useTargetRoot
      ? (get(reviewDiffTargetPathAtom) ?? get(reviewCwdAtom))
      : get(reviewCwdAtom);

    return buildReviewEntriesFromParsedDiff({
      cwd: cwd == null ? null : normalizePath(cwd),
      gitRoot,
      parsedDiffs: get(reviewDiffTargetParsedAtom).diff,
    });
  },
);

export const reviewFileDiffModelAtom = createParametricAtom(
  threadAtomScope,
  (path: string, { get }: { get: (atom: unknown, arg?: unknown) => any }) => {
    if (get(isReviewDiffEnabledAtom)) {
      const gitRoot = get(reviewGitMetadataQueryAtom).data?.root ?? null;
      const reviewFile =
        findReviewSummaryFileByPath(
          get(reviewSummaryAtom).data,
          path,
          gitRoot,
        ) ?? null;
      if (reviewFile == null) return null;
      const query = get(
        reviewFileDiffQueryFamily,
        path,
      ) as ReviewDiffQueryResult;
      return buildReviewFileEntry({
        cwd: get(reviewCwdAtom),
        gitRoot,
        reviewDiffEntry: query.data,
        reviewDiffError: query.isError ? query.error : null,
        reviewDiffIsFetching: query.isFetching,
        reviewDiffIsPlaceholderData: query.isPlaceholderData,
        reviewFile,
      });
    }

    const relativeGitPath = resolvePathRelativeToCwd(path, get(reviewCwdAtom));
    return (
      (get(reviewFileEntriesAtom) as ReviewFileEntry[]).find(
        (entry) => entry.path === path || entry.gitPath === relativeGitPath,
      ) ?? null
    );
  },
);

export function buildReviewEntriesFromSummary({
  cwd,
  gitRoot,
  reviewSummary,
}: {
  cwd: string | null;
  gitRoot: string | null;
  reviewSummary: unknown;
}): ReviewFileEntry[] {
  return isReviewSummarySuccess(reviewSummary)
    ? orderReviewFileEntries(
        reviewSummary.files.map((reviewFile) =>
          buildReviewFileEntry({
            cwd,
            gitRoot,
            reviewDiffIsFetching: true,
            reviewFile,
          }),
        ),
      )
    : [];
}

export function buildReviewEntriesFromParsedDiff({
  cwd,
  gitRoot,
  parsedDiffs,
}: {
  cwd: string | null;
  gitRoot: string | null;
  parsedDiffs: unknown;
}): ReviewFileEntry[] {
  return orderReviewFileEntries(
    asParsedReviewDiffFiles(parsedDiffs).map((diff) => {
      const normalizedDiff = normalizeParsedDiffPaths(diff, gitRoot);
      const gitPath = normalizePath(normalizedDiff.metadata.name);
      const path = toAbsoluteGitPath({ gitRoot, gitPath });
      return {
        canApplyPatchActions: true,
        displayPath:
          cwd == null ? gitPath : toRepoRelativeDisplayPath({ cwd, path }),
        diff: normalizedDiff,
        diffRevision: null,
        diffLoadStatus: "loaded",
        gitPath,
        path,
        summary: null,
      };
    }),
  );
}

function buildReviewFileEntry({
  cwd,
  gitRoot,
  reviewDiffEntry,
  reviewDiffError = null,
  reviewDiffIsFetching,
  reviewDiffIsPlaceholderData = false,
  reviewFile,
}: {
  cwd: string | null;
  gitRoot: string | null;
  reviewDiffEntry?: ReviewDiffQueryData;
  reviewDiffError?: unknown;
  reviewDiffIsFetching: boolean;
  reviewDiffIsPlaceholderData?: boolean;
  reviewFile: ReviewSummaryFile;
}): ReviewFileEntry {
  const gitPath = normalizePath(reviewFile.path);
  const path = toAbsoluteGitPath({ gitRoot, gitPath });
  const diffText =
    reviewDiffEntry?.type === "success" ? reviewDiffEntry.diff : "";
  const hasDiffText = diffText.trim().length > 0;
  const parsedDiff = hasDiffText ? parseFirstReviewDiff(diffText) : null;
  let diffLoadStatus: ReviewDiffLoadStatus = "loading";

  if (parsedDiff == null) {
    if (reviewDiffEntry?.type === "success") {
      diffLoadStatus = "loaded";
    } else if (
      !reviewDiffIsFetching &&
      (reviewDiffError != null ||
        reviewDiffEntry?.type === "error" ||
        hasDiffText)
    ) {
      diffLoadStatus = "error";
    }
  } else {
    diffLoadStatus = "loaded";
  }

  return {
    canApplyPatchActions:
      !reviewDiffIsFetching && reviewDiffEntry?.type === "success",
    displayPath: toRepoRelativeDisplayPath({ cwd, path }),
    diff: parsedDiff,
    diffRevision:
      reviewDiffEntry?.type === "success" && !reviewDiffIsPlaceholderData
        ? (reviewFile.revision ?? null)
        : null,
    diffLoadStatus,
    gitPath,
    path,
    summary: reviewFile,
  };
}

function isReviewSummarySuccess(value: unknown): value is ReviewSummarySuccess {
  return (
    value != null &&
    typeof value === "object" &&
    (value as { type?: unknown }).type === "success" &&
    Array.isArray((value as { files?: unknown }).files)
  );
}

function findReviewSummaryFileByPath(
  reviewSummary: unknown,
  path: string,
  gitRoot: string | null,
): ReviewSummaryFile | null {
  if (!isReviewSummarySuccess(reviewSummary)) return null;
  for (const reviewFile of reviewSummary.files) {
    const absolutePath = toAbsoluteGitPath({
      gitRoot,
      gitPath: reviewFile.path,
    });
    if (absolutePath === path) return reviewFile;
  }
  return null;
}

function parseFirstReviewDiff(diffText: string): ParsedReviewDiffFile | null {
  return asParsedReviewDiffFiles(parseReviewDiff(diffText).diff)[0] ?? null;
}

function asParsedReviewDiffFiles(value: unknown): ParsedReviewDiffFile[] {
  return Array.isArray(value) ? (value as ParsedReviewDiffFile[]) : [];
}

function normalizeParsedDiffPaths(
  diff: ParsedReviewDiffFile,
  gitRoot: string | null,
): ParsedReviewDiffFile {
  if (gitRoot == null) return diff;

  const toGitPath = (path: string): string =>
    path === "/dev/null" || !isAbsolutePath(path)
      ? normalizePath(path)
      : normalizePath(nodePath.relative(normalizePath(gitRoot), path));

  return {
    ...diff,
    metadata: {
      ...diff.metadata,
      name: toGitPath(diff.metadata.name),
      prevName:
        diff.metadata.prevName == null
          ? undefined
          : toGitPath(diff.metadata.prevName),
    },
    newPath: toGitPath(diff.newPath),
    oldPath: toGitPath(diff.oldPath),
  };
}

function resolvePathRelativeToCwd(path: string, cwd: string | null): string {
  return normalizePath(
    cwd != null && isAbsolutePath(path)
      ? nodePath.relative(normalizePath(cwd), path)
      : path,
  );
}
