export type AnyToolActivityRecord = Record<string, any>;

export type ToolActivitySummaryContext = {
  isTurnCancelled?: boolean;
  mcpServerStatuses?: unknown;
  modelProvider?: unknown;
  resolvedApps?: unknown;
  shouldKeepMcpAppToolCallsExpandedByDefault?: boolean;
};
