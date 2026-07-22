// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import type { RenderUnit } from "../types";

export function isExecEntryUnit(unit: RenderUnit): boolean {
  const entry = (
    unit as {
      entry?: {
        kind?: string;
        item?: {
          type?: string;
        };
      };
    }
  ).entry;
  return (
    unit.kind === "entry" &&
    entry?.kind === "item" &&
    entry.item?.type === "exec"
  );
}
