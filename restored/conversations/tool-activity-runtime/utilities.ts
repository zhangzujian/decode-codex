// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type {
  AnyToolActivityRecord,
  ToolActivitySummaryContext,
} from "./types";

export function collectApprovalReviewFailures(
  item: AnyToolActivityRecord,
): AnyToolActivityRecord[] {
  const reviews =
    item.automaticApprovalReviewFailures ?? item.automaticApprovalReviews ?? [];
  return Array.isArray(reviews)
    ? reviews.filter(
        (review) =>
          review?.status === "denied" || review?.status === "timedOut",
      )
    : [];
}

export function isItemInProgress(
  item: AnyToolActivityRecord,
  context: ToolActivitySummaryContext,
): boolean {
  if (context.isTurnCancelled) return false;
  if (item.completed === false) return true;
  if (item.type === "exec") return item.output?.exitCode === undefined;
  if (item.type === "patch") return item.success == null;
  if (item.result == null && item.completed !== true) return true;
  return false;
}

export function countPatchChangeLines(change: AnyToolActivityRecord): {
  additions: number;
  changed: number;
} {
  if (change.type === "add") {
    const additions = String(change.content ?? "")
      .split(/\r?\n/u)
      .filter(
        (line, index, lines) => line.length > 0 || index < lines.length - 1,
      ).length;
    return { additions, changed: additions };
  }
  if (change.type === "delete") return { additions: 0, changed: 0 };
  const diff = String(change.unified_diff ?? change.unifiedDiff ?? "");
  let additions = 0;
  let deletions = 0;
  for (const line of diff.split(/\r?\n/u)) {
    if (line.startsWith("+++") || line.startsWith("---")) continue;
    if (line.startsWith("+")) additions += 1;
    if (line.startsWith("-")) deletions += 1;
  }
  return { additions, changed: additions + deletions };
}

export function getToolArguments(
  item: AnyToolActivityRecord,
): AnyToolActivityRecord {
  return item.arguments ?? item.invocation?.arguments ?? {};
}

export function isLikelyToolDefinitionPath(path: string): boolean {
  return /(^|\/)(SKILL|AGENTS)\.md$/i.test(path);
}

export function stringOrNull(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}
