// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { AnyToolActivityRecord } from "./types";

export function resolveAppForToolCall({
  apps,
  functionName,
  serverName,
  toolName,
}: {
  apps: unknown;
  functionName?: string | null;
  serverName?: string | null;
  toolName?: string | null;
}): AnyToolActivityRecord | null {
  const candidates = Array.isArray(apps)
    ? apps
    : Array.isArray((apps as AnyToolActivityRecord | null)?.data)
      ? (apps as AnyToolActivityRecord).data
      : [];
  for (const app of candidates) {
    if (!app || typeof app !== "object") continue;
    const record = app as AnyToolActivityRecord;
    if (matchesAppTool(record, { functionName, serverName, toolName })) {
      return record;
    }
  }
  return null;
}

export const findMatchingMcpApp = resolveAppForToolCall;

export function shouldHideMcpToolCall({
  item,
  mcpServerStatuses,
}: {
  item: AnyToolActivityRecord;
  mcpServerStatuses: unknown;
}): boolean {
  const status = findMcpToolStatus(item, mcpServerStatuses);
  return Boolean(
    status?.hidden ??
    status?.isHidden ??
    status?.hideInConversation ??
    status?.disabled,
  );
}

export function shouldAutoExpandMcpToolCall({
  item,
  mcpServerStatuses,
}: {
  item: AnyToolActivityRecord;
  mcpServerStatuses: unknown;
}): boolean {
  const status = findMcpToolStatus(item, mcpServerStatuses);
  return Boolean(
    status?.autoExpand ??
    status?.auto_expand ??
    status?.openByDefault ??
    status?.expandByDefault,
  );
}

function matchesAppTool(
  app: AnyToolActivityRecord,
  tool: {
    functionName?: string | null;
    serverName?: string | null;
    toolName?: string | null;
  },
): boolean {
  const serverNames = [
    app.serverName,
    app.server_name,
    app.mcpServerName,
    app.mcp_server_name,
    app.connectorId,
    app.connector_id,
    app.id,
  ].filter(Boolean);
  const tools = [
    ...(Array.isArray(app.tools) ? app.tools : []),
    ...(Array.isArray(app.mcpTools) ? app.mcpTools : []),
  ];
  const serverMatches =
    tool.serverName == null || serverNames.includes(tool.serverName);
  if (serverMatches && tools.length === 0) return false;
  return tools.some((candidate) => {
    const record = candidate as AnyToolActivityRecord;
    const names = [
      record.name,
      record.tool,
      record.toolName,
      record.functionName,
    ];
    return names.includes(tool.toolName) || names.includes(tool.functionName);
  });
}

function findMcpToolStatus(
  item: AnyToolActivityRecord,
  statuses: unknown,
): AnyToolActivityRecord | null {
  const server = item.invocation?.server;
  const tool = item.invocation?.tool;
  const candidates = Array.isArray(statuses)
    ? statuses
    : Array.isArray((statuses as AnyToolActivityRecord | null)?.data)
      ? (statuses as AnyToolActivityRecord).data
      : Object.values((statuses as AnyToolActivityRecord | null) ?? {});
  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") continue;
    const record = candidate as AnyToolActivityRecord;
    if (
      [record.server, record.serverName, record.name].includes(server) &&
      Array.isArray(record.tools)
    ) {
      const toolStatus = record.tools.find(
        (toolRecord: AnyToolActivityRecord) =>
          [toolRecord.name, toolRecord.tool, toolRecord.toolName].includes(
            tool,
          ),
      );
      if (toolStatus != null) return toolStatus;
    }
    if (
      [record.server, record.serverName].includes(server) &&
      [record.tool, record.toolName, record.name].includes(tool)
    ) {
      return record;
    }
  }
  return null;
}
