// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders an OpenAI MCP "capability" view (an embedded MCP app surface) inside a
// review/file pane: it loads the tool render data + result, proxies MCP protocol
// requests (tools/resources/prompts) back to the host, and mounts the sandboxed
// MCP app frame.
//
// NOTE: Most dependencies below are intra-chunk helpers of sibling modules in the
// same Rolldown commons chunk (queries, schemas, host-request helpers, MCP frame
// components). They are imported from the chunk boundary facade with readable
// aliases until their dedicated modules are promoted into restored/. Wiring is
// therefore provisional.
import {
  Fo as useStore,
  Ms as routeAtom,
  g as mcpQueryClientAtom,
  Fs as getThreadId,
  Po as useHostQuery,
  oS as useStableEventCallback,
  Wi as toConversationId,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
// Provisional: intra-chunk locals (no facade alias) — render-mode resolver, render
// data transform, MCP request/connector helpers, schemas, telemetry, classNames.
import {
  aI as toRenderData,
  oI as resolveMcpRenderMode,
  tqe as resolveConnectorId,
  rqe as resolveCallTarget,
  iqe as listConnectorTools,
  _ie as sendMcpToolCall,
  Lie as readMcpResource,
  aqe as reportMcpResourceMiss,
  xr as McpRequestEnvelopeSchema,
  XJe as McpToolsCallParamsSchema,
  YJe as McpToolArgumentsSchema,
  ZJe as McpResourcesReadParamsSchema,
  QN as deriveStableMcpInstanceId,
  oqe as resolveSandboxOriginScope,
  tYe as mcpRenderDataQuery,
  nYe as mcpToolResultQuery,
  $ as classNames,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
// MCP app frame components + the experiment hook.
import {
  aJe as McpAppExpandToggle,
  oJe as McpAppFrame,
  sJe as McpAppFallbackFrame,
  cJe as McpAppPortalSlot,
  ea as useExperiment,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";

const EMPTY_TOOL_ARGUMENTS: Record<string, never> = {};

interface McpServerView {
  hostId: string;
  resourceUri: string;
  server: unknown;
  serverTools: unknown;
  title: string;
  tool: { name: string };
}

export interface OpenAiMcpCapabilityViewProps {
  className?: string;
  instanceId?: string | null;
  readHostResource?: (params: { uri: string }) => Promise<unknown> | unknown;
  toolArguments?: Record<string, unknown>;
  view: McpServerView;
}

export function OpenAiMcpCapabilityView({
  className,
  instanceId,
  readHostResource,
  toolArguments,
  view,
}: OpenAiMcpCapabilityViewProps) {
  const resolvedToolArguments = toolArguments ?? EMPTY_TOOL_ARGUMENTS;
  const mcpClient = useStore(mcpQueryClientAtom);
  const route = useStore(routeAtom);
  const isThreadRoute =
    route.value.routeKind === "local-thread" ||
    route.value.routeKind === "remote-thread";
  const threadId = isThreadRoute ? getThreadId(route.value) : null;

  const {
    data: renderDataResult,
    error: renderDataError,
    isLoading: isRenderDataLoading,
  } = useHostQuery(mcpRenderDataQuery, {
    threadId: threadId ?? undefined,
    view,
  });

  const {
    data: toolResult = null,
    error: toolResultError,
    isLoading: isToolResultLoading,
  } = useHostQuery(mcpToolResultQuery, {
    threadId: threadId ?? undefined,
    toolArguments: resolvedToolArguments,
    view,
  });

  const renderData = toRenderData(renderDataResult);
  useExperiment("2957382457");

  const renderMode = resolveMcpRenderMode({
    hasResourceError: renderDataError != null,
    isDilEnabled: false,
    isResourceLoading: isRenderDataLoading,
    renderData,
    resourceUri: view.resourceUri,
    shouldRenderMcpApp: true,
  });
  const htmlRender = renderMode.kind === "html" ? renderMode.renderData : null;
  const connectorId = resolveConnectorId({
    server: view.server,
    tool: view.tool,
  });

  const handleMcpRequest = async (rawRequest: string) => {
    const request = McpRequestEnvelopeSchema.parse(rawRequest);
    switch (request.method) {
      case "tools/call": {
        const params = McpToolsCallParamsSchema.parse(request.params);
        const target = resolveCallTarget({
          connectorId,
          server: view.server,
          toolName: params.name,
          tools: view.serverTools,
        });
        return sendMcpToolCall(
          mcpClient,
          view.hostId,
          view.server,
          target.name,
          McpToolArgumentsSchema.parse(params.arguments ?? {}),
          threadId ?? undefined,
        );
      }
      case "resources/read": {
        const params = McpResourcesReadParamsSchema.parse(request.params);
        const hostResource = await readHostResource?.(params);
        if (hostResource == null) {
          reportMcpResourceMiss({
            mcpAppScope: { originResourceUri: view.resourceUri },
            server: view.server,
            uri: params.uri,
          });
          return readMcpResource(
            mcpClient,
            view.hostId,
            view.server,
            params.uri,
            threadId ?? undefined,
          );
        }
        return { contents: [{ ...hostResource, uri: params.uri }] };
      }
      case "tools/list":
        return {
          tools: listConnectorTools({
            connectorId,
            server: view.server,
            tools: view.serverTools,
          }),
        };
      case "resources/list":
        return { resources: [] };
      case "resources/templates/list":
        return { resourceTemplates: [] };
      case "prompts/list":
        return { prompts: [] };
      default:
        throw new Error(
          `Unsupported OpenAI MCP capability request: ${request.method}`,
        );
    }
  };

  const overrideMcpRequest = useStableEventCallback(handleMcpRequest);

  const instanceIdSuffix = instanceId == null ? [] : [instanceId];
  const mcpAppId = deriveStableMcpInstanceId(
    [
      "openai-mcp-capability",
      view.hostId,
      view.server,
      view.tool.name,
      ...instanceIdSuffix,
    ].join(":"),
  );
  const conversationId = toConversationId(threadId ?? mcpAppId);
  const sandboxOriginScope = resolveSandboxOriginScope({
    connectorId,
    instanceFallbackId: mcpAppId,
    server: view.server,
  });

  const containerClassName = classNames("h-full min-h-0", className);
  const combinedError = renderDataError ?? toolResultError;
  const isLoading = isRenderDataLoading || isToolResultLoading;
  const mcpAppScope = {
    originResourceUri: view.resourceUri,
    originTool: view.tool.name,
  };

  return (
    <div data-mcp-app-portal-target="true" className={containerClassName}>
      <McpAppExpandToggle isInlineExpanded={true} mcpAppId={mcpAppId} />
      <McpAppFrame
        conversationId={conversationId}
        csp={htmlRender?.csp ?? null}
        error={combinedError}
        fullSurface={true}
        hostId={view.hostId}
        hostedInThreadScrollLayout={false}
        html={htmlRender?.html ?? null}
        isLoading={isLoading}
        mcpAppId={mcpAppId}
        mcpAppScope={mcpAppScope}
        mcpServerStatuses={undefined}
        prefersBorder={htmlRender?.prefersBorder ?? false}
        overrideMcpRequest={overrideMcpRequest}
        sandboxOriginScope={sandboxOriginScope}
        server={view.server}
        sidePanelIcon={null}
        sidePanelTitle={view.title}
        title={view.title}
        toolArguments={resolvedToolArguments}
        toolResult={toolResult}
        widgetDomain={htmlRender?.widgetDomain ?? null}
      />
      <McpAppFallbackFrame
        error={combinedError}
        fullSurface={true}
        heightHint={htmlRender?.heightHint ?? null}
        html={htmlRender?.html ?? null}
        isLoading={isLoading}
        mcpAppId={mcpAppId}
        minFrameHeight={htmlRender?.minFrameHeight ?? null}
      />
      {isThreadRoute ? null : <McpAppPortalSlot mcpAppId={mcpAppId} />}
    </div>
  );
}
