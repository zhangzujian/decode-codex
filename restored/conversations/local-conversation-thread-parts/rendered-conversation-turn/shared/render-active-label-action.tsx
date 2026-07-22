// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import { type ReactNode } from "react";

import { ShimmerText } from "../../boundaries/onboarding-commons-externals.facade";

export function renderActiveLabelAction(content: ReactNode): ReactNode {
  return (
    <ShimmerText key="action" className="shrink-0 whitespace-nowrap">
      {content}
    </ShimmerText>
  );
}
