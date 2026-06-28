// Restored from ref/.vite/build/worker.js
// App worker shell: worker message routing and OpenIn target discovery.
import { parentPort, workerData } from "node:worker_threads";
import {
  detectOpenInTarget,
  getOpenInTargetIcon,
  normalizeShortcutLink,
  parseOpenInTargetRequestParams,
  type OpenInTargetRequestParams,
  type ShortcutLink,
} from "./worker-open-in-targets/index";
import {
  ComputerUseCaptureWorkerRequestDispatcher,
  createWorkerFeatureContext,
  type WorkerFeatureContext,
} from "./worker-feature-context";
import {
  WorkerMainRpcClient,
  type RpcResult,
  type WorkerMainRpcEvent,
  type WorkerMainRpcRequest,
  type WorkerMainRpcResponse,
} from "./worker-main-rpc-client";
import {
  SimpleSemaphore,
  WorkerAppEventBus,
  toRpcError,
} from "./worker-runtime-utils";

type WorkerInitOptions = {
  appVersion?: string;
  buildFlavor?: string;
  buildNumber?: string | null;
  codexAppSessionId?: string;
};
type WorkerThreadData = {
  workerId: string;
  sentryInitOptions: WorkerInitOptions;
  sentryRewriteFramesRoot?: string;
  maxLogLevel?: string;
  spawnInsideWsl?: boolean;
};
type WorkerRequest = {
  id: string;
  method: string;
  params?: unknown;
};
type WorkerRequestMessage = {
  type: "worker-request";
  workerId: string;
  id?: string;
  request: WorkerRequest;
};
type WorkerCancelMessage = {
  type: "worker-request-cancel";
  workerId: string;
  id: string;
};
type WorkerSentryUserMessage = {
  type: "worker-sentry-user-update";
  authMethod: string | null;
  userId?: string | null;
  accountId?: string | null;
};
type WorkerAppEventMessage = {
  type: "worker-app-event";
  event: { type: string; at?: number };
};
type WorkerInboundMessage =
  | WorkerMainRpcResponse
  | WorkerMainRpcEvent
  | WorkerRequestMessage
  | WorkerCancelMessage
  | WorkerSentryUserMessage
  | WorkerAppEventMessage;
type WorkerOutboundMessage =
  | {
      type: "worker-response";
      workerId: string;
      response: { id: string; method: string; result: RpcResult };
    }
  | { type: "worker-event"; workerId: string; event: unknown }
  | WorkerMainRpcRequest;
type WorkerRequestDispatcher = {
  handleRequest(request: WorkerRequest): void;
  handleCancel(requestId: string): void;
};
const workerConfig = parseWorkerData(workerData);
const port = parentPort;
if (port == null) throw Error("worker-entry must be run in a worker thread");

initializeWorkerTelemetry(workerConfig);

const mainRpcClient = new WorkerMainRpcClient(workerConfig.workerId, {
  postMessage(message) {
    port.postMessage(message);
  },
});
const appEventBus = new WorkerAppEventBus();
const requestDispatcher = createWorkerRequestDispatcher(
  workerConfig.workerId,
  (message) => port.postMessage(message),
  mainRpcClient,
);

port.on("message", (message: WorkerInboundMessage) => {
  if (mainRpcClient.handleMessage(message)) return;

  if (message.type === "worker-sentry-user-update") {
    updateWorkerTelemetryUser(message);
    return;
  }
  if (message.type === "worker-app-event") {
    appEventBus.emit(message.event.type, message.event.at);
    return;
  }
  if (message.workerId !== workerConfig.workerId) return;

  switch (message.type) {
    case "worker-request":
      requestDispatcher.handleRequest(message.request);
      return;
    case "worker-request-cancel":
      requestDispatcher.handleCancel(message.id);
      return;
    case "worker-main-rpc-response":
    case "worker-main-rpc-event":
      return;
  }
});

class OpenInWorkerRequestDispatcher implements WorkerRequestDispatcher {
  private readonly iconSemaphore = new SimpleSemaphore(1);
  private readonly commandPromises = new Map<string, Promise<string | null>>();

  constructor(
    private readonly workerId: string,
    private readonly postMessage: (message: WorkerOutboundMessage) => void,
    private readonly dependencies: {
      readShortcutLink(path: string): Promise<ShortcutLink>;
    },
  ) {}

  handleRequest(request: WorkerRequest): void {
    void this.handleRequestAsync(request);
  }

  handleCancel(): void {}

  private async handleRequestAsync(request: WorkerRequest): Promise<void> {
    try {
      switch (request.method) {
        case "load-target-icon": {
          const params = parseOpenInTargetRequestParams(request.params);
          const command = await this.getTargetCommand(params);
          await this.iconSemaphore.acquire();
          try {
            this.postResponse(request, {
              type: "ok",
              value: {
                icon: await getOpenInTargetIcon({
                  command,
                  params,
                  readShortcutLink: this.dependencies.readShortcutLink,
                }),
              },
            });
          } finally {
            this.iconSemaphore.release();
          }
          return;
        }
        case "get-target-command": {
          const params = parseOpenInTargetRequestParams(request.params);
          this.postResponse(request, {
            type: "ok",
            value: { command: await this.getTargetCommand(params) },
          });
          return;
        }
      }
      throw Error(
        `Open-in worker method '${request.method}' remains an open restoration boundary.`,
      );
    } catch (error) {
      this.postResponse(request, toRpcError(error));
    }
  }

  private getTargetCommand(
    params: OpenInTargetRequestParams,
  ): Promise<string | null> {
    const cacheKey = JSON.stringify([
      params.target ?? null,
      params.customTarget?.command ?? null,
    ]);
    const cached = this.commandPromises.get(cacheKey);
    if (cached != null) return cached;
    const command = detectOpenInTarget(
      params,
      this.dependencies.readShortcutLink,
    );
    this.commandPromises.set(cacheKey, command);
    command.catch(() => this.commandPromises.delete(cacheKey));
    return command;
  }

  private postResponse(request: WorkerRequest, result: RpcResult): void {
    this.postMessage({
      type: "worker-response",
      workerId: this.workerId,
      response: { id: request.id, method: request.method, result },
    });
  }
}

class OpenBoundaryWorkerRequestDispatcher {
  private readonly activeRequests = new Set<string>();

  constructor(
    private readonly workerId: string,
    private readonly postMessage: (message: WorkerOutboundMessage) => void,
    private readonly featureContext: WorkerFeatureContext | null = null,
  ) {}

  handleRequest(request: WorkerRequest): void {
    void this.featureContext;
    this.activeRequests.add(request.id);
    this.postMessage({
      type: "worker-response",
      workerId: this.workerId,
      response: {
        id: request.id,
        method: request.method,
        result: {
          type: "error",
          error: {
            message: `Worker request '${request.method}' remains an open restoration boundary.`,
            code: "OPEN_RESTORATION_BOUNDARY",
          },
        },
      },
    });
    this.activeRequests.delete(request.id);
  }

  handleCancel(requestId: string): void {
    this.activeRequests.delete(requestId);
  }
}

function createWorkerRequestDispatcher(
  workerId: string,
  postMessage: (message: WorkerOutboundMessage) => void,
  mainRpcClient: WorkerMainRpcClient,
): WorkerRequestDispatcher {
  const featureContext = createWorkerFeatureContext(
    workerId,
    mainRpcClient,
    normalizeShortcutLink,
  );
  switch (workerId) {
    case "open-in":
      return new OpenInWorkerRequestDispatcher(workerId, postMessage, {
        readShortcutLink:
          featureContext.openIn?.readShortcutLink ??
          (async (path) =>
            normalizeShortcutLink(
              await mainRpcClient.request("read-shortcut-link", { path }),
            )),
      });
    case "computer-use-capture":
      return new ComputerUseCaptureWorkerRequestDispatcher(
        workerId,
        postMessage,
        featureContext.computerUseCapture,
      );
    case "git":
      return new OpenBoundaryWorkerRequestDispatcher(
        workerId,
        postMessage,
        featureContext,
      );
    default:
      return new OpenBoundaryWorkerRequestDispatcher(
        workerId,
        postMessage,
        featureContext,
      );
  }
}

function parseWorkerData(value: unknown): WorkerThreadData {
  if (!isRecord(value)) throw Error("worker-entry requires workerData");
  if (typeof value.workerId !== "string" || value.workerId.length === 0) {
    throw Error("worker-entry requires workerData.workerId");
  }
  return {
    workerId: value.workerId,
    sentryInitOptions: isRecord(value.sentryInitOptions)
      ? (value.sentryInitOptions as WorkerInitOptions)
      : {},
    sentryRewriteFramesRoot:
      typeof value.sentryRewriteFramesRoot === "string"
        ? value.sentryRewriteFramesRoot
        : undefined,
    maxLogLevel:
      typeof value.maxLogLevel === "string" ? value.maxLogLevel : undefined,
    spawnInsideWsl: value.spawnInsideWsl === true,
  };
}

function initializeWorkerTelemetry(config: WorkerThreadData): void {
  void config;
}

function updateWorkerTelemetryUser(message: WorkerSentryUserMessage): void {
  void message;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
