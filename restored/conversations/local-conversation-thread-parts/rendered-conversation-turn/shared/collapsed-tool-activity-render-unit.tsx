// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import React, { type ReactNode } from "react";

import { FormattedMessage, useIntl } from "../../../../vendor/react-intl";

import {
  ConversationActivitySpacer,
  CollapsedToolActivityCard,
  ShimmerText,
  codexAnalyticsConfigAtom,
  useAtomValue,
  getRenderUnitKey,
  resolveActiveCommandLabel,
  resolveCollapsedActivitySourceSummary,
  buildToolActivityDetailLines,
  canExpandCollapsedActivity,
  STEPS_DETAIL_LEVEL,
  codexPreviousTurnExpandedEvent,
  productEventTargets,
} from "../../../../boundaries/onboarding-commons-externals.facade";

import { ActiveToolActivityLabel } from "./active-tool-activity-label";

import { CollapsedToolActivityChildRenderUnit } from "./collapsed-tool-activity-child-render-unit";

import { isExecEntryUnit } from "./is-exec-entry-unit";

import { PATCH_FILE_GAP } from "./patch-file-gap";
import type { CollapsedToolActivityRenderUnitProps } from "../types";

export function CollapsedToolActivityRenderUnit(
  props: CollapsedToolActivityRenderUnitProps,
): ReactNode {
  const {
    unit,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isActivitySliceClosed,
    isTurnCancelled,
    isLatestRenderUnit,
    cwd,
    resolvedApps,
    renderMcpApps,
    shouldAutoExpandMcpApps,
    toolActivityTurnKey,
    hideCommandDetails,
    allowAddSelectedTextToChat,
    previousTurnNumber,
    totalTurnCount,
    showAssistantTimestampWithoutActions,
    showThinkingFallback,
    thinkingFallbackMessage,
    isEverydayWorkMode,
  } = props;
  const intl = useIntl();
  const analyticsConfig = useAtomValue(codexAnalyticsConfigAtom);
  const effectiveDetailLevel = isEverydayWorkMode
    ? STEPS_DETAIL_LEVEL
    : conversationDetailLevel;
  const isActiveToolActivity =
    isTurnInProgress && !isActivitySliceClosed && isLatestRenderUnit;
  const summary = unit.summary;
  const formatSearchQueryTermList = (terms: readonly string[]) =>
    intl.formatList(terms, {
      type: "conjunction",
    });
  const showGenericCommandDetails = !hideCommandDetails;
  const activeCommandLabel = resolveActiveCommandLabel({
    units: unit.units,
    threadDetailLevel: effectiveDetailLevel,
    formatSearchQueryTermList,
    preferRunningCommandLabel: isActiveToolActivity,
    showGenericCommandDetails,
  });
  const isPatchFileLabel =
    isEverydayWorkMode && activeCommandLabel?.patchFile != null;
  const showThinkingHeader =
    !isPatchFileLabel &&
    showThinkingFallback &&
    !(
      isActiveToolActivity &&
      activeCommandLabel?.icon === "run-command" &&
      summary.runningCommandCount > 0
    );
  let activeSummaryContent: ReactNode = null;
  let activeSummaryKey: string | undefined;
  if (showThinkingHeader) {
    const thinkingMessage = thinkingFallbackMessage ?? (
      <FormattedMessage
        id="thinkingShimmer.default"
        defaultMessage="Thinking"
        description="Default placeholder shown while the assistant is thinking"
      />
    );
    activeSummaryContent = (
      <span className="inline-flex max-w-full min-w-0 items-center overflow-hidden">
        <span aria-hidden={true} className="h-4 w-0 shrink-0" />
        <ShimmerText className="min-w-0 flex-1 truncate">
          {thinkingMessage}
        </ShimmerText>
      </span>
    );
    activeSummaryKey = "thinking";
  } else if (
    !isPatchFileLabel &&
    activeCommandLabel != null &&
    isActiveToolActivity
  ) {
    activeSummaryContent = (
      <ActiveToolActivityLabel
        label={activeCommandLabel}
        cwd={cwd}
        hostId={hostId}
      />
    );
    activeSummaryKey = activeCommandLabel.activityKey;
  }
  const sourceSummary =
    activeSummaryContent == null
      ? resolveCollapsedActivitySourceSummary({
          units: unit.units,
          resolvedApps,
        })
      : null;
  const hasRunningWebSearch = summary.runningWebSearchCount > 0;
  const hasDetailLines =
    buildToolActivityDetailLines(summary, intl, {
      showRunningCommandSummary: effectiveDetailLevel === STEPS_DETAIL_LEVEL,
      isWebSearchInProgress: hasRunningWebSearch,
    }).length > 0;
  if (
    hideCommandDetails &&
    activeSummaryContent == null &&
    sourceSummary == null &&
    !hasDetailLines
  ) {
    return null;
  }
  const hasSourceSummary = sourceSummary != null;
  const canExpand = canExpandCollapsedActivity({
    conversationDetailLevel: effectiveDetailLevel,
    units: unit.units,
    summary,
    hasSourceSummary,
    isActiveToolActivity,
  });
  const onExpand =
    previousTurnNumber != null &&
    totalTurnCount != null &&
    summary.mcpToolCallCount > 0
      ? () => {
          analyticsConfig.logProductEvent(codexPreviousTurnExpandedEvent, {
            target:
              productEventTargets.CODEX_PREVIOUS_TURN_EXPANDED_TARGET_TOOL_CALL,
            turnNumber: previousTurnNumber,
            totalTurnCount,
          });
        }
      : undefined;
  const childUnits = unit.units.map((childUnit, childIndex) => {
    const childKey = getRenderUnitKey(childUnit, childIndex);
    if (effectiveDetailLevel === "STEPS_PROSE" && isExecEntryUnit(childUnit)) {
      return null;
    }
    return (
      <div key={childKey}>
        <ConversationActivitySpacer size={PATCH_FILE_GAP} />
        <CollapsedToolActivityChildRenderUnit
          unit={childUnit}
          conversationId={conversationId}
          hostId={hostId}
          conversationDetailLevel={effectiveDetailLevel}
          isTurnInProgress={isTurnInProgress}
          isTurnCancelled={isTurnCancelled}
          cwd={cwd}
          resolvedApps={resolvedApps}
          renderMcpApps={renderMcpApps}
          shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
          toolActivityTurnKey={toolActivityTurnKey}
          allowAddSelectedTextToChat={allowAddSelectedTextToChat}
          showAssistantTimestampWithoutActions={
            showAssistantTimestampWithoutActions
          }
        />
      </div>
    );
  });
  return (
    <CollapsedToolActivityCard
      summary={summary}
      activeSummary={activeSummaryContent}
      activeSummaryKey={activeSummaryKey}
      icon={activeCommandLabel?.icon}
      sourceSummary={sourceSummary}
      isTurnInProgress={isTurnInProgress}
      showRunningCommandSummary={effectiveDetailLevel === STEPS_DETAIL_LEVEL}
      shouldAnimateSummaryChanges={isActiveToolActivity}
      showFileChangeLineCount={isEverydayWorkMode}
      canExpand={canExpand}
      onExpand={onExpand}
    >
      <div
        className="flex flex-col"
        style={
          {
            "--conversation-patch-file-gap": PATCH_FILE_GAP,
          } as React.CSSProperties
        }
      >
        {childUnits}
      </div>
    </CollapsedToolActivityCard>
  );
}
