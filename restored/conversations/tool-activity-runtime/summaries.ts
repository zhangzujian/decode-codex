// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { resolveAppForToolCall } from "./mcp";
import type {
  AnyToolActivityRecord,
  ToolActivitySummaryContext,
} from "./types";
import {
  collectApprovalReviewFailures,
  countPatchChangeLines,
  isItemInProgress,
  isLikelyToolDefinitionPath,
  stringOrNull,
} from "./utilities";

export function toToolActivitySummaryUnit(
  unit: AnyToolActivityRecord,
  context: ToolActivitySummaryContext = {},
): AnyToolActivityRecord {
  if (unit.kind === "web-search-group") {
    const items = Array.isArray(unit.items) ? unit.items : [];
    return {
      type: "web-search",
      count: items.length,
      runningCount: items.filter((item) => isItemInProgress(item, context))
        .length,
    };
  }
  if (unit.kind !== "entry") return { type: "other" };
  const entry = unit.entry;
  if (entry?.kind === "exploration") {
    return summarizeExplorationEntry(entry, context);
  }
  if (entry?.kind !== "item") return { type: "other" };
  const item = entry.item;
  switch (item?.type) {
    case "automatic-approval-review":
      return {
        type: "automatic-approval-review",
        id: String(item.id ?? item.targetItemId ?? ""),
        status: item.status,
      };
    case "exec":
      return summarizeExecItem(item, context);
    case "mcp-tool-call":
      return summarizeMcpToolCall(item, context);
    case "patch":
      return summarizePatchItem(item, context);
    case "web-search":
      return {
        type: "web-search",
        count: 1,
        runningCount: isItemInProgress(item, context) ? 1 : 0,
      };
    default:
      return { type: "other" };
  }
}

function summarizeExplorationEntry(
  entry: AnyToolActivityRecord,
  context: ToolActivitySummaryContext,
): AnyToolActivityRecord {
  const readPaths = new Set<string>();
  const runningReadPaths = new Set<string>();
  const loadedToolPaths = new Set<string>();
  const runningLoadedToolPaths = new Set<string>();
  let searchCount = 0;
  let runningSearchCount = 0;
  let listCount = 0;
  let runningListCount = 0;
  const items = Array.isArray(entry.items) ? entry.items : [];
  const activeIndex = entry.status === "exploring" ? items.length - 1 : -1;
  for (const [index, item] of items.entries()) {
    if (item?.type !== "exec") continue;
    const parsed = item.parsedCmd;
    const running = index === activeIndex && !context.isTurnCancelled;
    switch (parsed?.type) {
      case "read": {
        const path = stringOrNull(parsed.path ?? parsed.name);
        if (path != null) {
          readPaths.add(path);
          if (running) runningReadPaths.add(path);
          if (isLikelyToolDefinitionPath(path)) {
            loadedToolPaths.add(path);
            if (running) runningLoadedToolPaths.add(path);
          }
        }
        break;
      }
      case "search":
        searchCount += 1;
        if (running) runningSearchCount += 1;
        break;
      case "list_files":
        listCount += 1;
        if (running) runningListCount += 1;
        break;
    }
  }
  return {
    type: "exploration",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(entry),
    readPaths: [...readPaths],
    runningReadPaths: [...runningReadPaths],
    loadedToolPaths: [...loadedToolPaths],
    runningLoadedToolPaths: [...runningLoadedToolPaths],
    searchCount,
    runningSearchCount,
    listCount,
    runningListCount,
  };
}

function summarizeExecItem(
  item: AnyToolActivityRecord,
  context: ToolActivitySummaryContext,
): AnyToolActivityRecord {
  const parsed = item.parsedCmd ?? {};
  return {
    type: "exec",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(item),
    isInProgress: isItemInProgress(item, context),
    createsFolder:
      parsed.type === "mkdir" ||
      /(?:^|\s)(?:mkdir|install|create)\b/i.test(String(item.cmd ?? "")),
    searchesWeb:
      parsed.type === "web_search" ||
      /(?:curl|wget|web_search|search web)/i.test(String(item.cmd ?? "")),
  };
}

function summarizeMcpToolCall(
  item: AnyToolActivityRecord,
  context: ToolActivitySummaryContext,
): AnyToolActivityRecord {
  const app = resolveAppForToolCall({
    apps: context.resolvedApps,
    functionName: item.functionName,
    serverName: item.invocation?.server,
    toolName: item.invocation?.tool,
  });
  return {
    type: "mcp-tool-call",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(item),
    isInProgress: isItemInProgress(item, context),
    source:
      app == null
        ? null
        : {
            key: `app:${app.id ?? app.name}`,
            logoUrl: app.logoUrl ?? null,
            logoUrlDark: app.logoUrlDark ?? null,
            name: app.name ?? app.id ?? null,
            nativeAppReference: app.nativeAppReference ?? null,
          },
  };
}

function summarizePatchItem(
  item: AnyToolActivityRecord,
  context: ToolActivitySummaryContext,
): AnyToolActivityRecord {
  const createdPaths = new Set<string>();
  const runningCreatedPaths = new Set<string>();
  const stoppedCreatedPaths = new Set<string>();
  const editedPaths = new Set<string>();
  const runningEditedPaths = new Set<string>();
  const deletedPaths = new Set<string>();
  const runningDeletedPaths = new Set<string>();
  const isInProgress = isItemInProgress(item, context);
  let runningCreatedLineCount = 0;
  let changedLineCount = 0;
  for (const [path, change] of Object.entries(item.changes ?? {})) {
    const record = change as AnyToolActivityRecord;
    const stats = countPatchChangeLines(record);
    changedLineCount += stats.changed;
    switch (record.type) {
      case "add":
        createdPaths.add(path);
        if (isInProgress) {
          runningCreatedPaths.add(path);
          runningCreatedLineCount += stats.additions;
        }
        if (item.success === false || context.isTurnCancelled) {
          stoppedCreatedPaths.add(path);
        }
        break;
      case "delete":
        deletedPaths.add(path);
        if (isInProgress) runningDeletedPaths.add(path);
        break;
      default:
        editedPaths.add(path);
        if (isInProgress) runningEditedPaths.add(path);
        break;
    }
  }
  return {
    type: "patch",
    automaticApprovalReviewFailures: collectApprovalReviewFailures(item),
    createdPaths: [...createdPaths],
    runningCreatedPaths: [...runningCreatedPaths],
    stoppedCreatedPaths: [...stoppedCreatedPaths],
    runningCreatedLineCount,
    changedLineCount,
    editedPaths: [...editedPaths],
    runningEditedPaths: [...runningEditedPaths],
    deletedPaths: [...deletedPaths],
    runningDeletedPaths: [...runningDeletedPaths],
    visualizationActivity: null,
  };
}
