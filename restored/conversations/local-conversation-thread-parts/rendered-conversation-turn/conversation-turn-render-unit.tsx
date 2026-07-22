// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import { type ReactNode } from "react";

import { WebSearchActivityAccordion } from "../web-search-activity-accordion";

import {
  ConversationActivitySpacer,
  ConversationEntryRenderer,
  DynamicToolCallGroup,
  ExplorationActivity,
  MultiAgentGroup,
  PendingMcpToolCalls,
  TodoListActivity,
  getTimelineTargetProps,
} from "../../../boundaries/onboarding-commons-externals.facade";

import { CollapsedToolActivityRenderUnit, TOOL_ASSISTANT_GAP } from "./shared";
import type { ConversationTurnRenderUnitProps } from "./types";

export function ConversationTurnRenderUnit(
  props: ConversationTurnRenderUnitProps,
): ReactNode {
  const {
    unit,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isActivitySliceClosed,
    isTurnCancelled,
    hasFollowingRenderUnit,
    renderIndex,
    isLatestRenderUnit,
    renderKey,
    cwd,
    resolvedApps = [],
    renderMcpApps = true,
    shouldAutoExpandMcpApps = false,
    toolActivityTurnKey,
    execSummaryTone = "default",
    showExecSummaryIcon = true,
    hideCommandDetails = false,
    compactUserMessageActions = false,
    allowAddSelectedTextToChat,
    hookStats,
    wrapSearchableContent,
    previousTurnNumber,
    totalTurnCount,
    enableTimelineTargets,
    showProcessBadges,
    showAssistantTimestampWithoutActions,
    showThinkingFallback = false,
    thinkingFallbackMessage,
    thinkingFallbackAction,
    isEverydayWorkMode,
    subagentActivityContentByItemId,
  } = props;
  const apps = resolvedApps;
  let renderedContent: ReactNode;
  if (unit.kind === "collapsed-tool-activity") {
    renderedContent = (
      <CollapsedToolActivityRenderUnit
        unit={unit}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={conversationDetailLevel}
        isTurnInProgress={isTurnInProgress}
        isActivitySliceClosed={isActivitySliceClosed}
        isTurnCancelled={isTurnCancelled}
        isLatestRenderUnit={isLatestRenderUnit}
        cwd={cwd}
        resolvedApps={apps}
        renderMcpApps={renderMcpApps}
        shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
        toolActivityTurnKey={toolActivityTurnKey}
        hideCommandDetails={hideCommandDetails}
        allowAddSelectedTextToChat={allowAddSelectedTextToChat}
        previousTurnNumber={previousTurnNumber}
        totalTurnCount={totalTurnCount}
        showAssistantTimestampWithoutActions={
          showAssistantTimestampWithoutActions
        }
        showThinkingFallback={showThinkingFallback}
        thinkingFallbackMessage={thinkingFallbackMessage}
        isEverydayWorkMode={isEverydayWorkMode}
      />
    );
  } else if (unit.kind === "pending-mcp-tool-calls") {
    renderedContent = (
      <PendingMcpToolCalls
        items={
          (
            unit as {
              items: readonly unknown[];
            }
          ).items
        }
        conversationId={conversationId}
        hostId={hostId}
        hasFollowingRenderUnit={hasFollowingRenderUnit}
        isTurnInProgress={isTurnInProgress}
        renderMcpApps={renderMcpApps}
        resolvedApps={apps}
        shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
        toolActivityTurnKey={toolActivityTurnKey}
        showThinkingHeader={showThinkingFallback}
        thinkingMessage={thinkingFallbackMessage}
      />
    );
  } else if (unit.kind === "dynamic-tool-call-group") {
    const isActive =
      isTurnInProgress && !isActivitySliceClosed && isLatestRenderUnit;
    renderedContent = (
      <DynamicToolCallGroup
        conversationId={conversationId}
        enableTimelineTargets={enableTimelineTargets}
        items={
          (
            unit as {
              items: readonly unknown[];
            }
          ).items
        }
        isActive={isActive}
        showThinkingFallback={showThinkingFallback}
        thinkingFallbackMessage={thinkingFallbackMessage}
      />
    );
  } else if (unit.kind === "multi-agent-group") {
    renderedContent = (
      <MultiAgentGroup
        conversationId={conversationId}
        items={
          (
            unit as {
              items: readonly unknown[];
            }
          ).items
        }
      />
    );
  } else if (unit.kind === "web-search-group") {
    const isActive = isTurnInProgress && isLatestRenderUnit;
    renderedContent = (
      <WebSearchActivityAccordion
        items={
          (
            unit as {
              items: readonly unknown[];
            }
          ).items
        }
        isActive={isActive}
      />
    );
  } else if (
    (
      unit as {
        entry?: {
          kind?: string;
        };
      }
    ).entry?.kind === "exploration"
  ) {
    const entry = (
      unit as {
        entry: {
          items: readonly unknown[];
          status: unknown;
        };
      }
    ).entry;
    renderedContent = (
      <ExplorationActivity
        items={entry.items}
        status={entry.status}
        threadDetailLevel={conversationDetailLevel}
      />
    );
  } else {
    const item = (
      unit as {
        entry: {
          item: {
            type: string;
            id: string;
            hookFeedback?: boolean;
          };
        };
      }
    ).entry.item;
    if (item.type === "subagent-activity") {
      renderedContent = subagentActivityContentByItemId?.get(item.id) ?? null;
    } else if (item.type === "todo-list") {
      renderedContent = <TodoListActivity item={item} />;
    } else if (item.type === "reasoning") {
      renderedContent = null;
    } else {
      const itemHookStats =
        item.type === "user-message" && item.hookFeedback === true
          ? hookStats
          : null;
      const entryContent = (
        <ConversationEntryRenderer
          item={item}
          conversationId={conversationId}
          hostId={hostId}
          conversationDetailLevel={conversationDetailLevel}
          isTurnInProgress={isTurnInProgress}
          isTurnCancelled={isTurnCancelled}
          cwd={cwd}
          reportEntityType="thread"
          resolvedApps={apps}
          renderMcpApps={renderMcpApps}
          shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
          toolActivityTurnKey={toolActivityTurnKey}
          execSummaryTone={execSummaryTone}
          showExecSummaryIcon={showExecSummaryIcon}
          compactUserMessageActions={compactUserMessageActions}
          showAssistantMessageActionRow={false}
          allowAddSelectedTextToChat={allowAddSelectedTextToChat}
          hookStats={itemHookStats}
          previousTurnNumber={previousTurnNumber}
          enableTimelineTargets={enableTimelineTargets}
          showProcessBadges={showProcessBadges}
          showAssistantTimestampWithoutActions={
            showAssistantTimestampWithoutActions
          }
        />
      );
      renderedContent =
        wrapSearchableContent == null
          ? entryContent
          : wrapSearchableContent({
              item,
              content: entryContent,
            });
    }
  }
  const contentWithThinkingAction =
    showThinkingFallback &&
    thinkingFallbackAction != null &&
    renderedContent != null ? (
      <div className="group/thread-details flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">{renderedContent}</div>
        {thinkingFallbackAction}
      </div>
    ) : (
      renderedContent
    );
  const leadingGap = renderIndex !== 0 && renderedContent && (
    <ConversationActivitySpacer
      key={`agent-gap-${renderKey}`}
      size={TOOL_ASSISTANT_GAP}
    />
  );
  const unitOutput = (
    <>
      {leadingGap}
      {contentWithThinkingAction}
    </>
  );
  if (enableTimelineTargets && renderedContent != null) {
    const timelineTargetProps = getTimelineTargetProps(unit);
    if (timelineTargetProps != null) {
      return (
        <div {...timelineTargetProps} className="outline-none" tabIndex={-1}>
          {unitOutput}
        </div>
      );
    }
  }
  return unitOutput;
}
