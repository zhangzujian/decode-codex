// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import type { RenderUnit } from "../types";

export function hasRunningProcessExec(unit: RenderUnit): boolean {
  const item = (
    unit as {
      item?: {
        type?: string;
        processId?: unknown;
      };
    }
  ).item;
  return (
    unit.kind === "item" && item?.type === "exec" && item.processId != null
  );
}
