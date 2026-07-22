// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import { type ReactNode } from "react";

export function renderActiveLabelActionShimmer(content: ReactNode): ReactNode {
  return (
    <span key="action" className="shrink-0 whitespace-nowrap">
      {content}
    </span>
  );
}
