// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import { type ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  ConversationActivitySpacer,
  defaultLayoutTransition,
  resolveTurnRenderUnits,
  getRenderUnitKey,
  shouldShowThinkingFallbackForUnit,
} from "../../../boundaries/onboarding-commons-externals.facade";

import { ConversationTurnRenderUnit } from "./conversation-turn-render-unit";

import {
  TOOL_ASSISTANT_GAP,
  hasRunningProcessExec,
  isFollowableRenderUnit,
} from "./shared";
import type { RenderedConversationTurnProps } from "./types";

export function RenderedConversationTurn(
  props: RenderedConversationTurnProps,
): ReactNode {
  const {
    entries,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isTurnCancelled = false,
    isActivitySliceClosed,
    cwd,
    resolvedApps,
    renderMcpApps,
    mcpServerStatuses,
    shouldAutoExpandMcpApps,
    collapseMixedDynamicToolActivity,
    toolActivityTurnKey,
    modelProvider,
    hideCommandDetails,
    compactUserMessageActions,
    allowAddSelectedTextToChat,
    hookStats,
    wrapSearchableContent,
    previousTurnNumber,
    totalTurnCount,
    latestTurnFollowContentRef,
    contentAfterWorkedFor,
    showThinkingFallback,
    thinkingFallbackMessage,
    thinkingFallbackAction,
    isEverydayWorkMode,
    subagentActivityContentByItemId,
  } = props;
  const apps = resolvedApps === undefined ? [] : resolvedApps;
  const renderMcp = renderMcpApps === undefined ? true : renderMcpApps;
  const autoExpandMcp =
    shouldAutoExpandMcpApps === undefined ? false : shouldAutoExpandMcpApps;
  const collapseMixed =
    collapseMixedDynamicToolActivity === undefined
      ? false
      : collapseMixedDynamicToolActivity;
  const hideCommands =
    hideCommandDetails === undefined ? false : hideCommandDetails;
  const compactUserActions =
    compactUserMessageActions === undefined ? false : compactUserMessageActions;
  const allowThinkingFallback =
    showThinkingFallback === undefined ? false : showThinkingFallback;
  const renderedNodes: ReactNode[] = [];
  const renderUnits = resolveTurnRenderUnits({
    entries,
    conversationDetailLevel,
    isTurnInProgress,
    isActivitySliceClosed,
    mcpServerStatuses,
    resolvedApps: apps,
    shouldAutoExpandMcpApps: autoExpandMcp,
    modelProvider,
    isTurnCancelled,
    collapseMixedDynamicToolActivity: collapseMixed && false,
  });
  const showProcessBadges =
    conversationDetailLevel !== "STEPS_PROSE" &&
    entries.some(hasRunningProcessExec);
  for (const [unitIndex, unit] of renderUnits.entries()) {
    const renderKey = getRenderUnitKey(unit, unitIndex);
    const isLatestRenderUnit = unitIndex === renderUnits.length - 1;
    const isFollowTarget =
      latestTurnFollowContentRef != null && isFollowableRenderUnit(unit);
    const renderUnitNode = (
      <ConversationTurnRenderUnit
        key={renderKey}
        unit={unit}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={conversationDetailLevel}
        isTurnInProgress={isTurnInProgress}
        isActivitySliceClosed={isActivitySliceClosed}
        isTurnCancelled={isTurnCancelled}
        hasFollowingRenderUnit={unitIndex < renderUnits.length - 1}
        renderIndex={unitIndex}
        isLatestRenderUnit={isLatestRenderUnit}
        renderKey={renderKey}
        cwd={cwd}
        resolvedApps={apps}
        renderMcpApps={renderMcp}
        shouldAutoExpandMcpApps={autoExpandMcp}
        toolActivityTurnKey={toolActivityTurnKey}
        hideCommandDetails={hideCommands}
        compactUserMessageActions={compactUserActions}
        allowAddSelectedTextToChat={allowAddSelectedTextToChat}
        hookStats={hookStats}
        wrapSearchableContent={wrapSearchableContent}
        previousTurnNumber={previousTurnNumber}
        totalTurnCount={totalTurnCount}
        enableTimelineTargets={false}
        showProcessBadges={showProcessBadges}
        showAssistantTimestampWithoutActions={false}
        showThinkingFallback={
          allowThinkingFallback &&
          isLatestRenderUnit &&
          shouldShowThinkingFallbackForUnit(unit)
        }
        thinkingFallbackMessage={thinkingFallbackMessage}
        thinkingFallbackAction={thinkingFallbackAction}
        isEverydayWorkMode={isEverydayWorkMode}
        subagentActivityContentByItemId={subagentActivityContentByItemId}
      />
    );
    if (
      unit.kind === "pending-mcp-tool-calls" ||
      unit.kind === "dynamic-tool-call-group"
    ) {
      renderedNodes.push(
        isFollowTarget ? (
          <div key={renderKey} ref={latestTurnFollowContentRef}>
            {renderUnitNode}
          </div>
        ) : (
          renderUnitNode
        ),
      );
      continue;
    }
    const isSubagentActivity =
      unit.kind === "entry" &&
      (
        unit as {
          entry?: {
            kind?: string;
            item?: {
              type?: string;
            };
          };
        }
      ).entry?.kind === "item" &&
      (
        unit as {
          entry?: {
            item?: {
              type?: string;
            };
          };
        }
      ).entry?.item?.type === "subagent-activity";
    renderedNodes.push(
      <motion.div
        key={renderKey}
        className={isSubagentActivity ? "-mx-1.5 px-1.5" : undefined}
        ref={isFollowTarget ? latestTurnFollowContentRef : undefined}
        exit={{
          opacity: 0,
          height: 0,
        }}
        transition={defaultLayoutTransition}
        style={{
          overflow: "hidden",
        }}
      >
        {renderUnitNode}
      </motion.div>,
    );
    const isWorkedForEntry =
      unit.kind === "entry" &&
      (
        unit as {
          entry?: {
            kind?: string;
            item?: {
              type?: string;
            };
          };
        }
      ).entry?.kind === "item" &&
      (
        unit as {
          entry?: {
            item?: {
              type?: string;
            };
          };
        }
      ).entry?.item?.type === "worked-for";
    if (contentAfterWorkedFor != null && isWorkedForEntry) {
      renderedNodes.push(
        <div key="content-after-worked-for">
          <ConversationActivitySpacer size={TOOL_ASSISTANT_GAP} />
          {contentAfterWorkedFor}
        </div>,
      );
    }
  }
  return (
    <div className="flex flex-col space-y-0">
      <AnimatePresence initial={false}>{renderedNodes}</AnimatePresence>
    </div>
  );
}
