// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import { type ReactNode } from "react";

import { WebSearchActivityAccordion } from "../../web-search-activity-accordion";

import {
  ExplorationActivity,
  getRenderUnitKey,
} from "../../../../boundaries/onboarding-commons-externals.facade";

import { ConversationTurnRenderUnit } from "../conversation-turn-render-unit";
import type { CollapsedToolActivityChildRenderUnitProps } from "../types";

export function CollapsedToolActivityChildRenderUnit(
  props: CollapsedToolActivityChildRenderUnitProps,
): ReactNode {
  const {
    unit,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isTurnCancelled,
    cwd,
    resolvedApps = [],
    renderMcpApps = true,
    shouldAutoExpandMcpApps = false,
    toolActivityTurnKey,
    allowAddSelectedTextToChat,
    showAssistantTimestampWithoutActions,
  } = props;
  const entry = (
    unit as {
      entry?: {
        kind?: string;
        items?: readonly unknown[];
        status?: unknown;
        item?: {
          type?: string;
        };
      };
    }
  ).entry;
  if (unit.kind === "entry" && entry?.kind === "exploration") {
    return (
      <ExplorationActivity
        items={entry.items}
        status={entry.status}
        threadDetailLevel={conversationDetailLevel}
        hideHeader={true}
      />
    );
  }
  if (unit.kind === "web-search-group") {
    return (
      <WebSearchActivityAccordion
        items={
          (
            unit as {
              items: readonly unknown[];
            }
          ).items
        }
        hideHeader={true}
      />
    );
  }
  if (
    conversationDetailLevel === "STEPS_PROSE" &&
    unit.kind === "entry" &&
    entry?.kind === "item" &&
    entry.item?.type === "exec"
  ) {
    return null;
  }
  const renderKey = getRenderUnitKey(unit, 0);
  return (
    <ConversationTurnRenderUnit
      unit={unit}
      conversationId={conversationId}
      hostId={hostId}
      conversationDetailLevel={conversationDetailLevel}
      isTurnInProgress={isTurnInProgress}
      isActivitySliceClosed={true}
      isTurnCancelled={isTurnCancelled}
      hasFollowingRenderUnit={false}
      renderIndex={0}
      isLatestRenderUnit={false}
      renderKey={renderKey}
      cwd={cwd}
      resolvedApps={resolvedApps}
      renderMcpApps={renderMcpApps}
      shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
      toolActivityTurnKey={toolActivityTurnKey}
      execSummaryTone="muted"
      showExecSummaryIcon={false}
      allowAddSelectedTextToChat={allowAddSelectedTextToChat}
      enableTimelineTargets={false}
      showProcessBadges={false}
      isEverydayWorkMode={false}
      showAssistantTimestampWithoutActions={
        showAssistantTimestampWithoutActions
      }
    />
  );
}
