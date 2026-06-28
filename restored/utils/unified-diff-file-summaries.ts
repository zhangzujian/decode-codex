// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-DxRnxRkd.js
// Local conversation helper for summarizing files in a unified diff.

import { parseDiff } from "./parse-diff";
import type { ParsedDiffFile, ParseDiffOptions } from "./parse-diff/types";

export function parseUnifiedDiffFileSummaries(
  diffText: string,
  options: ParseDiffOptions = {},
): ParsedDiffFile[] {
  return parseDiff(diffText, options);
}

export function initUnifiedDiffFileSummariesChunk(): void {}
