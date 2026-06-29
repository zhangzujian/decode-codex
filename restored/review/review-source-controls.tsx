// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Left-hand section of the review header: diff-filter dropdown, commit submenu, branch-range
// label, base-branch picker, line-stats and the refreshing indicator.
import type { ReactNode } from "react";
import { classNames } from "../utils/class-names";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { DropdownMenu, MenuChrome } from "../ui/dropdown";
import { Spinner } from "../ui/spinner";
import { Badge } from "../utils/badge";
import { BranchSearchList } from "./branch-search-list";
import type { ReviewDiffFilter } from "./review-diff-model";
import {
  useStore,
  useAtomValue,
  routeAtom,
  CheckmarkIcon,
  ChevronDownIcon,
  DiffLineStats as DiffLineStatsDisplay,
  RelativeTimeLabel,
  TruncatedBranchName,
  isReviewRefreshingAtom,
  reviewBranchCommitsQueryAtom,
  reviewCommitShaAtom,
  selectReviewCommit,
} from "../boundaries/onboarding-commons-externals.facade";

export type ReviewSource = "cloud" | "local";

export interface SnapshotMetrics {
  additions: number;
  deletions: number;
}

export function isNonNullable<Value>(
  value: Value | null | undefined,
): value is Value {
  return value != null;
}

export function renderDiffFilterLabelWithCount(
  label: ReactNode,
  count: number | null | undefined,
): ReactNode {
  if (count == null || count <= 0) return label;
  return (
    <span className="flex items-center gap-1.5">
      <span>{label}</span>
      <Badge className="disambiguated-digits px-1.5 py-0.5 text-xs font-medium">
        {count}
      </Badge>
    </span>
  );
}

export interface DiffLineStatsProps {
  additions: number;
  deletions: number;
}

export function DiffLineStats({ additions, deletions }: DiffLineStatsProps) {
  if (additions === 0 && deletions === 0) return null;
  return (
    <DiffLineStatsDisplay
      className="text-size-chat mr-1 shrink-0 select-none"
      linesAdded={additions}
      linesRemoved={deletions}
    />
  );
}

export function ReviewRefreshingIndicator() {
  const intl = useIntl();
  const isRefreshing = useAtomValue(isReviewRefreshingAtom);
  const label = intl.formatMessage({
    id: "codex.review.refreshGitQueries.inProgress",
    defaultMessage: "Refreshing changes",
    description: "Accessible status shown while review git data is refreshed",
  });
  if (!isRefreshing) return null;
  return (
    <span
      aria-label={label}
      className="mr-1 flex shrink-0 items-center text-token-description-foreground"
      role="status"
    >
      <Spinner className="icon-xs" />
    </span>
  );
}

export function CommitSubjectLabel() {
  const commitsQuery = useAtomValue(reviewBranchCommitsQueryAtom);
  const commitSha = useAtomValue(reviewCommitShaAtom);
  const subject =
    commitsQuery.data?.commits.find(
      (commit: { sha: string; subject: string }) => commit.sha === commitSha,
    )?.subject ?? null;
  if (subject == null) return null;
  return (
    <Tooltip tooltipContent={subject} tooltipBodyClassName="break-words">
      <span className="max-w-[320px] truncate text-token-description-foreground">
        {subject}
      </span>
    </Tooltip>
  );
}

export interface CommitFilterSubmenuContentProps {
  diffFilter?: ReviewDiffFilter;
}

export function CommitFilterSubmenuContent({
  diffFilter,
}: CommitFilterSubmenuContentProps) {
  const store = useStore(routeAtom);
  const commitsQuery = useAtomValue(reviewBranchCommitsQueryAtom);
  const commitSha = useAtomValue(reviewCommitShaAtom);
  const commits = commitsQuery.data?.commits;
  return (
    <>
      {commitsQuery.isPending ? (
        <MenuChrome.Message>
          <FormattedMessage
            id="codex.review.source.local.commit.loading"
            defaultMessage="Loading commits…"
            description="Loading label shown while branch commits are fetched for the review source menu."
          />
        </MenuChrome.Message>
      ) : commitsQuery.isError ? (
        <>
          <MenuChrome.Message>
            <FormattedMessage
              id="codex.review.source.local.commit.error"
              defaultMessage="Unable to load commits"
              description="Error label shown when branch commits cannot be fetched for the review source menu."
            />
          </MenuChrome.Message>
          <MenuChrome.Item
            onSelect={() => {
              commitsQuery.refetch();
            }}
          >
            <FormattedMessage
              id="codex.review.source.local.commit.retry"
              defaultMessage="Retry"
              description="Retry action shown when branch commits fail to load for the review source menu."
            />
          </MenuChrome.Item>
        </>
      ) : commits == null || commits.length === 0 ? (
        <MenuChrome.Message>
          <FormattedMessage
            id="codex.review.source.local.commit.empty"
            defaultMessage="No commits on branch"
            description="Empty label shown when there are no branch commits to review."
          />
        </MenuChrome.Message>
      ) : (
        <div className="max-h-80 overflow-y-auto">
          {commits.map(
            (commit: { sha: string; subject: string; committedAt: string }) => (
              <MenuChrome.Item
                key={commit.sha}
                onSelect={() => selectReviewCommit(store, commit.sha)}
                RightIcon={
                  diffFilter === "commit" && commitSha === commit.sha
                    ? CheckmarkIcon
                    : undefined
                }
                tooltipText={commit.subject}
              >
                <span className="flex min-w-0 items-center justify-between gap-3">
                  <span className="truncate">{commit.subject}</span>
                  <span className="shrink-0 text-xs text-token-description-foreground">
                    <RelativeTimeLabel dateString={commit.committedAt} />
                    <span className="ms-1">
                      <FormattedMessage
                        id="codex.review.source.local.commit.relativeTimeAgo"
                        defaultMessage="ago"
                        description="Relative time suffix shown after a commit timestamp in the review source menu"
                      />
                    </span>
                  </span>
                </span>
              </MenuChrome.Item>
            ),
          )}
        </div>
      )}
    </>
  );
}

export interface CommitFilterSubmenuProps {
  children: ReactNode;
  diffFilter?: ReviewDiffFilter;
}

export function CommitFilterSubmenu({
  children,
  diffFilter,
}: CommitFilterSubmenuProps) {
  const store = useStore(routeAtom);
  const handleOpenChange = (open: boolean) => {
    if (open) store.get(reviewBranchCommitsQueryAtom).refetch();
  };
  return (
    <MenuChrome.FlyoutSubmenuItem
      label={children}
      onOpenChange={handleOpenChange}
    >
      <CommitFilterSubmenuContent diffFilter={diffFilter} />
    </MenuChrome.FlyoutSubmenuItem>
  );
}

interface DiffFilterOption {
  id: ReviewDiffFilter;
  renderedLabel: ReactNode;
}

export interface DiffFilterDropdownProps {
  availableDiffFilters?: ReviewDiffFilter[];
  diffFilter?: ReviewDiffFilter;
  onSelectDiffFilter?: (filter: ReviewDiffFilter) => void;
  source: ReviewSource;
  stagedFileCount?: number;
  unstagedFileCount?: number;
}

export function DiffFilterDropdown({
  availableDiffFilters,
  diffFilter,
  onSelectDiffFilter,
  source,
  stagedFileCount,
  unstagedFileCount,
}: DiffFilterDropdownProps) {
  if (source === "cloud") {
    return (
      <span className="text-token-foreground">
        <FormattedMessage
          id="codex.review.source.cloud"
          defaultMessage="Cloud changes"
          description="Label for cloud task reviews"
        />
      </span>
    );
  }

  const options: DiffFilterOption[] = (
    [
      {
        id: "unstaged",
        renderedLabel: renderDiffFilterLabelWithCount(
          <FormattedMessage
            id="codex.review.stageFilter.unstaged"
            defaultMessage="Unstaged"
            description="Show unstaged changes when there are none"
          />,
          unstagedFileCount,
        ),
      },
      {
        id: "staged",
        renderedLabel: renderDiffFilterLabelWithCount(
          <FormattedMessage
            id="codex.review.stageFilter.staged"
            defaultMessage="Staged"
            description="Show staged changes when there are none"
          />,
          stagedFileCount,
        ),
      },
      {
        id: "commit",
        renderedLabel: (
          <FormattedMessage
            id="codex.review.source.local.commit"
            defaultMessage="Commit"
            description="Dropdown label in the Codex review header for viewing one commit's changes. Keep it short for a compact menu item."
          />
        ),
      },
      {
        id: "branch",
        renderedLabel: (
          <FormattedMessage
            id="codex.review.source.local.all"
            defaultMessage="Branch"
            description="Dropdown label in the Codex review header for viewing branch changes. Keep it short for a compact menu item."
          />
        ),
      },
      {
        id: "last-turn",
        renderedLabel: (
          <FormattedMessage
            id="codex.review.source.local.lastTurn"
            defaultMessage="Last turn"
            description="Dropdown label in the Codex review header for showing only the most recent assistant turn's diff. Keep it short for a compact menu item."
          />
        ),
      },
    ] satisfies DiffFilterOption[]
  ).filter((option) => availableDiffFilters?.includes(option.id) ?? true);

  const selectedOption =
    options.find((option) => option.id === diffFilter) ?? options[0];
  if (selectedOption == null) return <></>;

  if (!diffFilter || !onSelectDiffFilter || options.length === 1) {
    return (
      <span className="text-token-foreground">
        {selectedOption.renderedLabel}
      </span>
    );
  }

  const triggerButton = (
    <Button
      color="ghostActive"
      size="toolbar"
      className="w-fit max-w-[320px] shrink-0 border-transparent px-1.5"
    >
      <span className="flex max-w-full min-w-0 items-center gap-1.5 truncate">
        {selectedOption.renderedLabel}
      </span>
      <ChevronDownIcon className="icon-2xs" />
    </Button>
  );

  const items = options.map((option) =>
    option.id === "commit" ? (
      <CommitFilterSubmenu key={option.id} diffFilter={diffFilter}>
        {option.renderedLabel}
      </CommitFilterSubmenu>
    ) : (
      <MenuChrome.Item
        key={option.id}
        onSelect={() => onSelectDiffFilter(option.id)}
        RightIcon={selectedOption.id === option.id ? CheckmarkIcon : undefined}
      >
        {option.renderedLabel}
      </MenuChrome.Item>
    ),
  );

  return (
    <DropdownMenu triggerButton={triggerButton} contentWidth="menuBounded">
      {items}
    </DropdownMenu>
  );
}

export interface BranchRangeLabelProps {
  className?: string;
  currentBranch: string;
  targetBranch: string;
}

export function BranchRangeLabel({
  className,
  currentBranch,
  targetBranch,
}: BranchRangeLabelProps) {
  return (
    <span
      className={classNames(
        "flex min-w-0 items-center gap-1 truncate text-base font-normal text-token-description-foreground select-none",
        className,
      )}
    >
      <span className="min-w-0 select-text">
        <TruncatedBranchName
          branchName={currentBranch}
          suffixCharacterCount={18}
        />
      </span>
      <span aria-hidden={true} className="shrink-0">
        <FormattedMessage
          id="codex.review.source.local.branchRangeSeparator"
          defaultMessage="→"
          description="Arrow separator shown between the current branch and base branch in the review header"
        />
      </span>
      <span className="shrink-0">{targetBranch}</span>
    </span>
  );
}

export interface BaseBranchPickerProps {
  baseBranchOptions: string[] | null | undefined;
  className?: string;
  currentBranch?: string;
  defaultTargetBranch: string | null | undefined;
  isBaseBranchOptionsError?: boolean;
  isBaseBranchOptionsLoading?: boolean;
  onRefetchBaseBranchOptions?: () => void;
  onSelectBaseBranch: (branch: string) => void;
  targetBranch: string | null | undefined;
}

export function BaseBranchPicker({
  baseBranchOptions,
  className,
  currentBranch = "HEAD",
  defaultTargetBranch,
  isBaseBranchOptionsError,
  isBaseBranchOptionsLoading,
  onRefetchBaseBranchOptions,
  onSelectBaseBranch,
  targetBranch,
}: BaseBranchPickerProps) {
  const selectedBaseBranch = targetBranch ?? defaultTargetBranch;
  if (
    selectedBaseBranch == null &&
    !isBaseBranchOptionsLoading &&
    !isBaseBranchOptionsError &&
    (baseBranchOptions == null || baseBranchOptions.length === 0)
  ) {
    return null;
  }

  const branchOptions =
    baseBranchOptions == null
      ? undefined
      : Array.from(
          new Set([
            selectedBaseBranch,
            defaultTargetBranch,
            ...baseBranchOptions,
          ]),
        ).filter(isNonNullable);

  const currentBranchLabel = (
    <Tooltip
      tooltipContent={currentBranch}
      tooltipBodyClassName="break-all"
      tooltipMaxWidth="min(520px, 80vw)"
      openWhen="trigger-overflows"
    >
      <span className="flex h-token-button-composer min-w-0 flex-[0_2_auto] items-center px-1.5 text-base font-normal select-text">
        <TruncatedBranchName
          branchName={currentBranch}
          suffixCharacterCount={18}
        />
      </span>
    </Tooltip>
  );

  const separator = (
    <span
      aria-hidden={true}
      className="flex-shrink-0 text-sm text-token-description-foreground"
    >
      <FormattedMessage
        id="codex.review.source.local.branchRangeSeparator"
        defaultMessage="→"
        description="Arrow separator shown between the current branch and base branch in the review header"
      />
    </span>
  );

  const baseBranchTriggerLabel = (
    <span className="min-w-0">
      {selectedBaseBranch == null ? (
        <FormattedMessage
          id="codex.review.source.local.selectBaseBranch"
          defaultMessage="Select branch"
          description="Placeholder shown in the review header base branch picker when no base branch is selected"
        />
      ) : (
        <TruncatedBranchName
          branchName={selectedBaseBranch}
          suffixCharacterCount={28}
        />
      )}
    </span>
  );

  const baseBranchTrigger = (
    <Tooltip
      tooltipContent={selectedBaseBranch ?? false}
      tooltipBodyClassName="break-all"
      tooltipMaxWidth="min(520px, 80vw)"
      openWhen="trigger-overflows"
    >
      <Button
        color="ghostMuted"
        size="toolbar"
        className="max-w-full min-w-0 overflow-hidden px-1.5 font-normal"
      >
        <span className="flex max-w-full min-w-0 items-center gap-1">
          {baseBranchTriggerLabel}
          <ChevronDownIcon className="icon-2xs shrink-0 text-token-description-foreground" />
        </span>
      </Button>
    </Tooltip>
  );

  const dropdown = (
    <DropdownMenu triggerButton={baseBranchTrigger} contentWidth="menuBounded">
      <BranchSearchList
        branches={branchOptions}
        selectedBranch={selectedBaseBranch}
        isError={isBaseBranchOptionsError}
        isLoading={isBaseBranchOptionsLoading}
        onRetry={onRefetchBaseBranchOptions}
        onSelectBranch={onSelectBaseBranch}
      />
    </DropdownMenu>
  );

  return (
    <div
      className={classNames(
        "flex min-w-0 flex-1 items-center gap-1 overflow-hidden text-token-description-foreground select-none",
        className,
      )}
    >
      {currentBranchLabel}
      {separator}
      {dropdown}
    </div>
  );
}

export interface ReviewSourceControlsProps {
  availableDiffFilters?: ReviewDiffFilter[];
  baseBranchOptions: string[] | null | undefined;
  currentBranch: string | null;
  defaultTargetBranch?: string | null;
  diffFilter?: ReviewDiffFilter;
  isBaseBranchOptionsError?: boolean;
  isBaseBranchOptionsLoading?: boolean;
  isReviewExpanded: boolean;
  onRefetchBaseBranchOptions?: () => void;
  onSelectBaseBranch?: (branch: string) => void;
  onSelectDiffFilter?: (filter: ReviewDiffFilter) => void;
  reviewSource: ReviewSource;
  snapshotMetrics: SnapshotMetrics;
  stagedFileCount?: number;
  targetBranch: string | null | undefined;
  unstagedFileCount?: number;
}

export function ReviewSourceControls({
  availableDiffFilters,
  baseBranchOptions,
  currentBranch,
  defaultTargetBranch = null,
  diffFilter,
  isBaseBranchOptionsError = false,
  isBaseBranchOptionsLoading = false,
  isReviewExpanded,
  onRefetchBaseBranchOptions,
  onSelectBaseBranch,
  onSelectDiffFilter,
  reviewSource,
  stagedFileCount,
  targetBranch,
  unstagedFileCount,
  snapshotMetrics,
}: ReviewSourceControlsProps) {
  const isBranchDiff = reviewSource !== "cloud" && diffFilter === "branch";
  const showStaticBranchRange =
    isReviewExpanded &&
    isBranchDiff &&
    currentBranch != null &&
    onSelectBaseBranch == null;
  const showBaseBranchPicker =
    isReviewExpanded && isBranchDiff && onSelectBaseBranch != null;

  const filterDropdown = (
    <DiffFilterDropdown
      diffFilter={diffFilter}
      availableDiffFilters={availableDiffFilters}
      onSelectDiffFilter={onSelectDiffFilter}
      source={reviewSource}
      stagedFileCount={stagedFileCount}
      unstagedFileCount={unstagedFileCount}
    />
  );
  const commitSubject = diffFilter === "commit" ? <CommitSubjectLabel /> : null;
  const lineStats = (
    <DiffLineStats
      additions={snapshotMetrics.additions}
      deletions={snapshotMetrics.deletions}
    />
  );
  const refreshingIndicator = <ReviewRefreshingIndicator />;
  const baseBranchPicker = showBaseBranchPicker ? (
    <BaseBranchPicker
      baseBranchOptions={baseBranchOptions}
      currentBranch={currentBranch ?? "HEAD"}
      defaultTargetBranch={defaultTargetBranch}
      isBaseBranchOptionsError={isBaseBranchOptionsError}
      isBaseBranchOptionsLoading={isBaseBranchOptionsLoading}
      onRefetchBaseBranchOptions={onRefetchBaseBranchOptions}
      onSelectBaseBranch={onSelectBaseBranch}
      targetBranch={targetBranch}
    />
  ) : null;
  const branchRange = showStaticBranchRange ? (
    <BranchRangeLabel
      className="max-[1024px]:hidden"
      currentBranch={currentBranch as string}
      targetBranch={targetBranch ?? defaultTargetBranch ?? "main"}
    />
  ) : null;

  return (
    <div className="flex w-full min-w-0 flex-col overflow-hidden text-base">
      <div className="flex min-w-0 items-center gap-1 overflow-hidden">
        {filterDropdown}
        {commitSubject}
        {lineStats}
        {refreshingIndicator}
        {baseBranchPicker}
        {branchRange}
      </div>
    </div>
  );
}
