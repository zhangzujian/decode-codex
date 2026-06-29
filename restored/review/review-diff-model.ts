// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review diff navigation model: diff-filter state, refresh orchestration, branch-ref formatting,
// and the git-metadata-keyed query family used by review/diff queries.

import {
  createScopedAtom,
  createScopedQueryAtom,
  createParametricAtom,
  appAtomScope,
  threadAtomScope,
  reviewMetadataScope,
  reviewGitMetadataQueryAtom,
  isReviewDiffEnabledAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
  reviewDiffSourceAtom,
  reviewBaseBranchQueryAtom,
  reviewBaseBranchAtom,
  reviewCommitShaAtom,
  reviewCwdAtom,
  hideWhitespaceAtom,
  reviewSummaryQueryAtom,
  isReviewRefreshingAtom,
  reviewBaseBranchOverrideAtom,
  clearGitStatusCache,
  invalidateReviewDiffQueries,
  invalidateGitQueries,
  RequestAbortedError,
  disabledQueryResult,
  pendingQueryResult,
  createGitQueryOptions,
  getHostKey,
  gitMetadataReadinessAtom,
  gitMetadataFromCwdQuery,
} from "../boundaries/onboarding-commons-externals.facade";

export type ReviewDiffFilter =
  | "staged"
  | "unstaged"
  | "branch"
  | "commit"
  | "last-turn";

export interface BranchRef {
  local: string | null;
  remote: string | null;
}

interface GitMetadata {
  commonDir: string;
  root: string;
}

interface ReviewStore {
  get(atom: unknown, ...args: unknown[]): any;
  set(atom: unknown, ...args: unknown[]): void;
  query: { snapshot(atom: unknown, params: unknown): any };
  queryClient: unknown;
}

interface ReviewSummaryParams {
  baseBranch: string | null;
  commitSha: string | null;
  cwd: string | null;
  enabled: boolean;
  hideWhitespace: boolean;
  hostConfig: unknown;
  metadata: GitMetadata | null;
  source: ReviewDiffFilter | null;
}

// Selected diff filter for the review panel (defaults to unstaged changes).
export const reviewDiffFilterAtom = createScopedAtom(appAtomScope, "unstaged");

// Transient review-diff selection, cleared whenever the diff filter changes.
export const reviewDiffSelectionAtom = createScopedAtom(threadAtomScope, null);

export function setReviewDiffFilter(
  store: ReviewStore,
  filter: ReviewDiffFilter,
): void {
  store.set(reviewDiffSelectionAtom, null);
  store.set(reviewDiffFilterAtom, filter);
}

export function setReviewBaseBranchOverride(
  store: ReviewStore,
  key: unknown,
  value: string | null,
): void {
  store.set(reviewBaseBranchOverrideAtom, key, value);
}

export function formatBranchRef(
  ref: BranchRef | null | undefined,
): string | null {
  if (ref?.local == null) return null;
  return ref.remote == null ? ref.local : `${ref.remote}/${ref.local}`;
}

function buildReviewSummaryParams({
  baseBranch,
  commitSha,
  cwd,
  enabled,
  hideWhitespace,
  hostConfig,
  metadata,
  source,
}: ReviewSummaryParams) {
  return metadata == null || cwd == null || source == null
    ? null
    : {
        baseBranch,
        commitSha,
        commonDir: metadata.commonDir,
        cwd,
        enabled,
        hideWhitespace,
        hostConfig,
        root: metadata.root,
        source,
      };
}

function resolveReviewSummaryQuery(
  store: ReviewStore,
  source: ReviewDiffFilter | null = store.get(reviewDiffSourceAtom),
) {
  const baseBranchQuery = store.get(reviewBaseBranchQueryAtom);
  const waitingForBaseBranch =
    source === "branch" &&
    baseBranchQuery.data == null &&
    baseBranchQuery.isFetching;
  const params = buildReviewSummaryParams({
    baseBranch: store.get(reviewBaseBranchAtom),
    commitSha: store.get(reviewCommitShaAtom),
    cwd: store.get(reviewCwdAtom),
    enabled: store.get(isReviewDiffEnabledAtom) && !waitingForBaseBranch,
    hideWhitespace: store.get(hideWhitespaceAtom),
    hostConfig: store.get(reviewHostConfigAtom),
    metadata: store.get(reviewGitMetadataQueryAtom).data ?? null,
    source,
  });
  return params == null
    ? null
    : store.query.snapshot(reviewSummaryQueryAtom, params);
}

async function refetchReviewSummaryQuery(store: ReviewStore): Promise<void> {
  const query = resolveReviewSummaryQuery(store);
  if (query == null || query.getOptions().enabled === false) return;
  await query.getOrFetch();
}

async function invalidateAndRefetchReviewDiff(
  store: ReviewStore,
  metadata: GitMetadata,
): Promise<void> {
  try {
    await Promise.all([
      invalidateReviewDiffQueries(store.queryClient, metadata, {
        hostKey: store.get(reviewHostKeyAtom),
      }),
      refetchReviewSummaryQuery(store),
    ]);
  } catch (error) {
    if (!(error instanceof RequestAbortedError)) throw error;
  }
}

async function runReviewSummaryRefresh(
  store: ReviewStore,
  metadata: GitMetadata,
): Promise<void> {
  store.set(isReviewRefreshingAtom, true);
  try {
    try {
      await clearGitStatusCache({
        clearUntrackedPathsCache: true,
        hostConfig: store.get(reviewHostConfigAtom),
        operationSource: "review_model",
        root: metadata.root,
      });
    } catch {}
    await Promise.all([
      invalidateGitQueries(store.queryClient, metadata.commonDir, {
        hostKey: store.get(reviewHostKeyAtom),
      }),
      refetchReviewSummaryQuery(store),
    ]);
  } finally {
    store.set(isReviewRefreshingAtom, false);
  }
}

export async function refreshReviewDiff(store: ReviewStore): Promise<void> {
  const metadata: GitMetadata | undefined = store.get(
    reviewGitMetadataQueryAtom,
  ).data;
  if (store.get(isReviewDiffEnabledAtom) && metadata != null) {
    try {
      await clearGitStatusCache({
        clearUntrackedPathsCache: true,
        hostConfig: store.get(reviewHostConfigAtom),
        operationSource: "review_model",
        root: metadata.root,
      });
    } catch {}
    await invalidateAndRefetchReviewDiff(store, metadata);
  }
}

const pendingReviewSummaryRefreshes = new WeakMap<ReviewStore, Promise<void>>();

export async function refreshReviewSummary(
  store: ReviewStore,
  { queueIfRefreshing = false }: { queueIfRefreshing?: boolean } = {},
): Promise<void> {
  const metadata: GitMetadata | undefined = store.get(
    reviewGitMetadataQueryAtom,
  ).data;
  const pending = pendingReviewSummaryRefreshes.get(store);
  if (metadata == null) return;
  if (pending != null) {
    if (!queueIfRefreshing) return;
    try {
      await pending;
    } catch {}
  }
  const refresh = runReviewSummaryRefresh(store, metadata);
  pendingReviewSummaryRefreshes.set(store, refresh);
  try {
    await refresh;
  } catch (error) {
    if (!(error instanceof RequestAbortedError)) throw error;
  } finally {
    if (pendingReviewSummaryRefreshes.get(store) === refresh)
      pendingReviewSummaryRefreshes.delete(store);
  }
}

interface GitMetadataQueryConfig {
  method: string;
  getParams: (metadata: any) => unknown;
  getOptions?: (metadata: any) => Record<string, unknown>;
}

// Builds a trio of scoped query atoms for a git operation keyed by repo metadata:
//   queryByMetadata$ — keyed directly by {commonDir, root}
//   fromMetadata$    — gated on git-metadata readiness before delegating to queryByMetadata$
//   fromCwd$         — resolves repo metadata from a cwd first, then delegates to fromMetadata$
export function createGitMetadataQueryFamily({
  method,
  getParams,
  getOptions,
}: GitMetadataQueryConfig) {
  const queryByMetadata = createScopedQueryAtom(
    reviewMetadataScope,
    (metadata: any) =>
      createGitQueryOptions(
        method,
        { commonDir: metadata.commonDir, root: metadata.root },
        getParams(metadata),
        getHostKey(metadata.hostConfig),
        metadata.hostConfig,
        { enabled: metadata.enabled, ...getOptions?.(metadata) },
      ),
    { excludeFieldsFromKey: ["operationSource"] },
  );

  const fromMetadata = createParametricAtom(
    reviewMetadataScope,
    (params: any, { get }: { get: (atom: unknown, arg?: unknown) => any }) => (
      get(
        get(gitMetadataReadinessAtom, {
          commonDir: params.commonDir,
          enabled: params.enabled,
          hostConfig: params.hostConfig,
          operationSource: params.operationSource,
          root: params.root,
        }),
      ),
      get(queryByMetadata, params)
    ),
    { excludeFieldsFromKey: ["operationSource"] },
  );

  return {
    fromCwd$: createParametricAtom(
      reviewMetadataScope,
      (
        params: any,
        { get }: { get: (atom: unknown, arg?: unknown) => any },
      ) => {
        if (!params.enabled || params.cwd == null) return disabledQueryResult();
        const cwdMetadataQuery = get(gitMetadataFromCwdQuery, {
          cwd: params.cwd,
          enabled: params.enabled,
          hostConfig: params.hostConfig,
          operationSource: params.operationSource,
          watchForGitInit: false,
        });
        const cwdMetadata = cwdMetadataQuery.data ?? null;
        if (cwdMetadata == null) return pendingQueryResult(cwdMetadataQuery);
        const { cwd, ...rest } = params;
        return get(fromMetadata, {
          ...rest,
          commonDir: cwdMetadata.commonDir,
          root: cwdMetadata.root,
        });
      },
      { excludeFieldsFromKey: ["operationSource"] },
    ),
    fromMetadata$: fromMetadata,
    queryByMetadata$: queryByMetadata,
  };
}
