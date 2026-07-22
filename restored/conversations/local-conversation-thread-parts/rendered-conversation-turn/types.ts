import type React from "react";
import type { ReactNode } from "react";

export type RenderUnit = {
  kind: string;
  [key: string]: unknown;
};

export type RenderedConversationTurnProps = {
  entries: readonly RenderUnit[];
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isTurnCancelled?: boolean;
  isActivitySliceClosed: boolean;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  mcpServerStatuses?: unknown;
  shouldAutoExpandMcpApps?: boolean;
  collapseMixedDynamicToolActivity?: boolean;
  toolActivityTurnKey?: string;
  modelProvider?: string;
  hideCommandDetails?: boolean;
  compactUserMessageActions?: boolean;
  allowAddSelectedTextToChat?: boolean;
  hookStats?: unknown;
  wrapSearchableContent?: (input: {
    item: unknown;
    content: ReactNode;
  }) => ReactNode;
  previousTurnNumber?: number;
  totalTurnCount?: number;
  latestTurnFollowContentRef?: React.Ref<HTMLDivElement>;
  contentAfterWorkedFor?: ReactNode;
  showThinkingFallback?: boolean;
  thinkingFallbackMessage?: ReactNode;
  thinkingFallbackAction?: ReactNode;
  isEverydayWorkMode?: boolean;
  subagentActivityContentByItemId?: Map<string, ReactNode>;
};

export type ConversationTurnRenderUnitProps = {
  unit: RenderUnit;
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isActivitySliceClosed: boolean;
  isTurnCancelled: boolean;
  hasFollowingRenderUnit: boolean;
  renderIndex: number;
  isLatestRenderUnit: boolean;
  renderKey: string;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApps?: boolean;
  toolActivityTurnKey?: string;
  execSummaryTone?: string;
  showExecSummaryIcon?: boolean;
  hideCommandDetails?: boolean;
  compactUserMessageActions?: boolean;
  allowAddSelectedTextToChat?: boolean;
  hookStats?: unknown;
  wrapSearchableContent?: (input: {
    item: unknown;
    content: ReactNode;
  }) => ReactNode;
  previousTurnNumber?: number;
  totalTurnCount?: number;
  enableTimelineTargets?: boolean;
  showProcessBadges?: boolean;
  showAssistantTimestampWithoutActions?: boolean;
  showThinkingFallback?: boolean;
  thinkingFallbackMessage?: ReactNode;
  thinkingFallbackAction?: ReactNode;
  isEverydayWorkMode?: boolean;
  subagentActivityContentByItemId?: Map<string, ReactNode>;
};

export type CollapsedToolActivityRenderUnitProps = {
  unit: RenderUnit & { summary: any; units: readonly RenderUnit[] };
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isActivitySliceClosed: boolean;
  isTurnCancelled: boolean;
  isLatestRenderUnit: boolean;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApps?: boolean;
  toolActivityTurnKey?: string;
  hideCommandDetails?: boolean;
  allowAddSelectedTextToChat?: boolean;
  previousTurnNumber?: number;
  totalTurnCount?: number;
  showAssistantTimestampWithoutActions?: boolean;
  showThinkingFallback?: boolean;
  thinkingFallbackMessage?: ReactNode;
  isEverydayWorkMode?: boolean;
};

export type CollapsedToolActivityChildRenderUnitProps = {
  unit: RenderUnit;
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isTurnCancelled: boolean;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApps?: boolean;
  toolActivityTurnKey?: string;
  allowAddSelectedTextToChat?: boolean;
  showAssistantTimestampWithoutActions?: boolean;
};

export type ActiveCommandLabel = {
  patchFile?: {
    path: string;
    grantRoot?: string | null;
    diffStats?: { linesAdded: number; linesRemoved: number } | null;
  } | null;
  message: { id: string; defaultMessage: string; description?: string };
  values?: Record<string, unknown>;
  faviconUrl?: string | null;
  icon?: string;
  activityKey?: string;
};
