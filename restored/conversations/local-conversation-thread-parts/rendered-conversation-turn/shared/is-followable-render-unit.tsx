// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import type { RenderUnit } from "../types";

export function isFollowableRenderUnit(unit: RenderUnit): boolean {
  if (unit.kind !== "entry") {
    return true;
  }
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
  return entry?.kind !== "item" || entry.item?.type !== "user-message";
}
