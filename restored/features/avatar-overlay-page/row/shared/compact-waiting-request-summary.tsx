// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import { worktreeNewThreadQueryCompatSlotLowerMLowerH } from "../../../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import type { CompactWaitingRequestSummaryProps } from "./types";

export function CompactWaitingRequestSummary(
  avatarOverlayOperand17: CompactWaitingRequestSummaryProps,
) {
  let { isExpanded, text } = avatarOverlayOperand17,
    avatarOverlayBinding329 = isExpanded
      ? "break-words whitespace-pre-wrap"
      : "truncate whitespace-nowrap",
    avatarOverlayBinding330 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
      "min-w-0 text-token-text-secondary",
      avatarOverlayBinding329,
    );
  return (
    <div
      className={avatarOverlayBinding330}
      data-avatar-overlay-compact-waiting-summary-text="true"
    >
      {text}
    </div>
  );
}
