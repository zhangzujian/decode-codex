// Restored from ref/.vite/build/worker.js
// App worker shell: main-RPC client, worker message routing, and OpenIn target discovery.
import { randomUUID } from "node:crypto";
import { existsSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";
import {
  basename,
  delimiter,
  dirname,
  extname,
  join,
  posix,
  win32,
} from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { parentPort, workerData } from "node:worker_threads";

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
type RpcResult =
  | { type: "ok"; value?: unknown }
  | { type: "error"; error: { message: string; code?: string } };
type WorkerMainRpcMethod =
  | "worktree-cleanup-inputs"
  | "computer-use-invalidate-service-pid"
  | "computer-use-service-pid"
  | "codex-home"
  | "read-shortcut-link"
  | "platform-family"
  | "platform-os"
  | "process-start"
  | "process-write"
  | "process-resize"
  | "process-terminate"
  | "fs-read-file"
  | "fs-write-file"
  | "fs-create-directory"
  | "fs-get-metadata"
  | "fs-read-directory"
  | "fs-remove"
  | "fs-copy"
  | "fs-watch"
  | "fs-unwatch"
  | "worker-exit";
type WorkerMainRpcEventMethod =
  | "process-output-delta"
  | "fs-watch-changed"
  | "fs-watch-closed";
type WorkerMainRpcRequest = {
  type: "worker-main-rpc-request";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  params: unknown;
};
type WorkerMainRpcResponse = {
  type: "worker-main-rpc-response";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  result: RpcResult;
};
type WorkerMainRpcEvent = {
  type: "worker-main-rpc-event";
  workerId: string;
  method: WorkerMainRpcEventMethod;
  params: unknown;
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
type ShortcutLink = {
  target?: string | null;
  icon?: string | null;
};
type OpenInCustomTarget = {
  command?: string | null;
  icon?: string | null;
};
type OpenInTargetRequestParams = {
  target?: string | null;
  command?: string | null;
  customTarget?: OpenInCustomTarget | null;
};
type OpenInPlatformName = "darwin" | "linux" | "win32";
type OpenInTargetKind = "editor" | "fileManager" | "systemDefault" | "terminal";
type OpenInShortcutResolver = (path: string) => Promise<ShortcutLink>;
type OpenInPlatformTarget = {
  label: string;
  icon: string;
  kind: OpenInTargetKind;
  hidden?: boolean;
  detect(
    readShortcutLink: OpenInShortcutResolver,
  ): string | null | Promise<string | null>;
  iconPath?(command: string): string | null;
};
type OpenInTargetDefinition = {
  id: string;
  platforms: Partial<Record<OpenInPlatformName, OpenInPlatformTarget>>;
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

class WorkerMainRpcClient {
  private readonly pending = new Map<
    string,
    {
      method: WorkerMainRpcMethod;
      resolve(value: unknown): void;
      reject(error: Error): void;
    }
  >();
  private readonly eventListeners = new Map<
    WorkerMainRpcEventMethod,
    Set<(params: unknown) => void>
  >();

  constructor(
    private readonly workerId: string,
    private readonly port: { postMessage(message: WorkerMainRpcRequest): void },
  ) {}

  request(method: WorkerMainRpcMethod, params: unknown): Promise<unknown> {
    const requestId = randomUUID();
    const message: WorkerMainRpcRequest = {
      type: "worker-main-rpc-request",
      workerId: this.workerId,
      requestId,
      method,
      params,
    };
    const response = new Promise<unknown>((resolve, reject) => {
      this.pending.set(requestId, { method, resolve, reject });
    });
    try {
      this.port.postMessage(message);
    } catch (error) {
      this.pending.delete(requestId);
      return Promise.reject(
        error instanceof Error
          ? error
          : Error(`Failed to send main RPC request: ${String(error)}`),
      );
    }
    return response;
  }

  requestWithScopedEvents({
    events,
    method,
    params,
  }: {
    events: Array<{
      method: WorkerMainRpcEventMethod;
      listener(params: unknown): void;
    }>;
    method: WorkerMainRpcMethod;
    params: unknown;
  }): Promise<unknown> {
    const unsubscribe = events.map((event) =>
      this.subscribe(event.method, event.listener),
    );
    const result = this.request(method, params);
    result.finally(() => {
      for (const dispose of unsubscribe) dispose();
    });
    return result;
  }

  subscribe(
    method: WorkerMainRpcEventMethod,
    listener: (params: unknown) => void,
  ): () => void {
    const listeners = this.eventListeners.get(method) ?? new Set();
    listeners.add(listener);
    this.eventListeners.set(method, listeners);
    return () => {
      const current = this.eventListeners.get(method);
      if (!current) return;
      current.delete(listener);
      if (current.size === 0) this.eventListeners.delete(method);
    };
  }

  handleMessage(message: unknown): boolean {
    if (isWorkerMainRpcEvent(message)) {
      if (message.workerId !== this.workerId) return false;
      const listeners = this.eventListeners.get(message.method);
      if (!listeners || listeners.size === 0) return true;
      for (const listener of listeners) listener(message.params);
      return true;
    }

    if (
      !isWorkerMainRpcResponse(message) ||
      message.workerId !== this.workerId
    ) {
      return false;
    }
    const pending = this.pending.get(message.requestId);
    if (!pending) return true;
    this.pending.delete(message.requestId);
    if (pending.method !== message.method) {
      pending.reject(Error("Mismatched main RPC response method"));
      return true;
    }
    if (message.result.type === "ok") {
      pending.resolve(message.result.value);
    } else {
      pending.reject(
        message.result.error.code == null
          ? Error(message.result.error.message)
          : Object.assign(Error(message.result.error.message), {
              code: message.result.error.code,
            }),
      );
    }
    return true;
  }

  dispose(): void {
    const error = Error("Worker main RPC client disposed");
    for (const pending of this.pending.values()) pending.reject(error);
    this.pending.clear();
    this.eventListeners.clear();
  }
}

class WorkerAppEventBus {
  private readonly latestEventAt = new Map<string, number | undefined>();

  emit(type: string, at: number | undefined): void {
    this.latestEventAt.set(type, at);
  }

  getLastEventAt(type: string): number | undefined {
    return this.latestEventAt.get(type);
  }
}

class SimpleSemaphore {
  private permits: number;
  private readonly waiters: Array<() => void> = [];

  constructor(permits: number) {
    this.permits = permits;
  }

  acquire(): Promise<void> {
    if (this.permits > 0) {
      this.permits -= 1;
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      this.waiters.push(() => {
        this.permits -= 1;
        resolve();
      });
    });
  }

  release(): void {
    this.permits += 1;
    const next = this.waiters.shift();
    if (next) next();
  }
}

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
  ) {}

  handleRequest(request: WorkerRequest): void {
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
  switch (workerId) {
    case "open-in":
      return new OpenInWorkerRequestDispatcher(workerId, postMessage, {
        readShortcutLink: async (path) =>
          normalizeShortcutLink(
            await mainRpcClient.request("read-shortcut-link", { path }),
          ),
      });
    default:
      return new OpenBoundaryWorkerRequestDispatcher(workerId, postMessage);
  }
}

const USER_APPLICATIONS_DIR = join(homedir(), "Applications");
const MAC_APPLICATION_ROOTS = ["/Applications", USER_APPLICATIONS_DIR];
const WINDOWS_LOCAL_APPDATA =
  process.env.LOCALAPPDATA ?? join(homedir(), "AppData", "Local");
const WINDOWS_PROGRAM_ROOTS = [
  join(WINDOWS_LOCAL_APPDATA, "Programs"),
  process.env.ProgramFiles,
  process.env["ProgramFiles(x86)"],
].flatMap((entry) => (entry ? [entry] : []));
const WINDOWS_APPS_DIR = join(
  WINDOWS_LOCAL_APPDATA,
  "Microsoft",
  "WindowsApps",
);
const WINDOWS_START_MENU_ROOTS = [
  process.env.APPDATA
    ? join(
        process.env.APPDATA,
        "Microsoft",
        "Windows",
        "Start Menu",
        "Programs",
      )
    : null,
  process.env.ProgramData
    ? join(
        process.env.ProgramData,
        "Microsoft",
        "Windows",
        "Start Menu",
        "Programs",
      )
    : null,
].flatMap((entry) => (entry ? [entry] : []));
const WINDOWS_JETBRAINS_ROOTS = [
  process.env.ProgramFiles,
  process.env["ProgramFiles(x86)"],
].flatMap((entry) => (entry ? [join(entry, "JetBrains")] : []));
const JETBRAINS_TOOLBOX_ROOT = join(
  homedir(),
  "Library",
  "Application Support",
  "JetBrains",
  "Toolbox",
  "apps",
);
const WINDOWS_TERMINAL_SHORTCUT_NAMES = [
  "Terminal.lnk",
  "Windows Terminal.lnk",
];
const JETBRAINS_BUNDLE_HINTS = [
  {
    target: "androidStudio",
    bundlePrefixes: ["android studio"],
    executable: "studio",
  },
  { target: "intellij", bundlePrefixes: ["intellij idea"], executable: "idea" },
  { target: "rider", bundlePrefixes: ["rider"], executable: "rider" },
  { target: "goland", bundlePrefixes: ["goland"], executable: "goland" },
  {
    target: "rustrover",
    bundlePrefixes: ["rustrover"],
    executable: "rustrover",
  },
  { target: "pycharm", bundlePrefixes: ["pycharm"], executable: "pycharm" },
  { target: "webstorm", bundlePrefixes: ["webstorm"], executable: "webstorm" },
  { target: "phpstorm", bundlePrefixes: ["phpstorm"], executable: "phpstorm" },
] as const;
let jetBrainsToolboxCache: Map<string, string> | null = null;

const OPEN_IN_TARGET_DEFINITIONS: OpenInTargetDefinition[] = [
  createCodeFamilyOpenInTarget({
    id: "vscode",
    label: "VS Code",
    icon: "apps/vscode.png",
    darwinCliPaths: [
      "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code",
      "/Applications/Code.app/Contents/Resources/app/bin/code",
    ],
    windowsPathCommand: "code",
    windowsExecutableName: "Code.exe",
    windowsInstallDirName: "Microsoft VS Code",
  }),
  createCodeFamilyOpenInTarget({
    id: "vscodeInsiders",
    label: "VS Code Insiders",
    icon: "apps/vscode-insiders.png",
    darwinCliPaths: [
      "/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/bin/code",
      "/Applications/Code - Insiders.app/Contents/Resources/app/bin/code",
    ],
    windowsPathCommand: "code-insiders",
    windowsExecutableName: "Code - Insiders.exe",
    windowsInstallDirName: "Microsoft VS Code Insiders",
  }),
  createCodeFamilyOpenInTarget({
    id: "antigravity",
    label: "Antigravity",
    icon: "apps/antigravity.png",
    darwinCliPaths: [
      "/Applications/Antigravity.app/Contents/Resources/app/bin/antigravity",
    ],
    windowsPathCommands: ["antigravity.exe", "antigravity.cmd", "antigravity"],
    windowsFallbackPaths: [
      ["Antigravity", "Antigravity.exe"],
      ["antigravity", "Antigravity.exe"],
      ["Antigravity", "bin", "antigravity.cmd"],
      ["antigravity", "bin", "antigravity.cmd"],
      ["Antigravity", "resources", "app", "bin", "antigravity.cmd"],
      ["antigravity", "resources", "app", "bin", "antigravity.cmd"],
    ],
  }),
  createCursorOpenInTarget(),
  {
    id: "visualStudio",
    platforms: {
      win32: {
        label: "Visual Studio",
        icon: "apps/vscode.png",
        kind: "editor",
        detect: detectVisualStudio,
      },
    },
  },
  createDarwinLaunchServicesTarget({
    id: "bbedit",
    label: "BBEdit",
    icon: "apps/bbedit.png",
    kind: "editor",
    appName: "BBEdit",
    explicitAppPaths: ["/Applications/BBEdit.app"],
  }),
  createDarwinLaunchServicesTarget({
    id: "emacs",
    label: "Emacs",
    icon: "apps/emacs.png",
    kind: "editor",
    appName: "Emacs",
    explicitAppPaths: ["/Applications/Emacs.app"],
  }),
  createSublimeTextTarget(),
  createZedOpenInTarget(),
  {
    id: "windsurf",
    platforms: {
      darwin: {
        label: "Windsurf",
        icon: "apps/windsurf.png",
        kind: "editor",
        detect: () =>
          findExistingMacPath([
            "/Applications/Windsurf.app/Contents/Resources/app/bin/windsurf",
          ]),
      },
    },
  },
  {
    id: "githubDesktop",
    platforms: {
      win32: {
        label: "GitHub Desktop",
        icon: "apps/vscode.png",
        kind: "editor",
        detect: detectGitHubDesktop,
      },
    },
  },
  {
    id: "systemDefault",
    platforms: {
      darwin: {
        label: "Default app",
        icon: "apps/file-explorer.png",
        kind: "systemDefault",
        hidden: true,
        detect: () => "system-default",
        iconPath: () => null,
      },
      win32: {
        label: "Default app",
        icon: "apps/file-explorer.png",
        kind: "systemDefault",
        hidden: true,
        detect: () => "system-default",
        iconPath: () => null,
      },
      linux: {
        label: "Default app",
        icon: "apps/file-explorer.png",
        kind: "systemDefault",
        hidden: true,
        detect: () => "system-default",
        iconPath: () => null,
      },
    },
  },
  {
    id: "fileManager",
    platforms: {
      darwin: {
        label: "Finder",
        icon: "apps/finder.png",
        kind: "fileManager",
        detect: () => "open",
      },
      win32: {
        label: "File Explorer",
        icon: "apps/file-explorer.png",
        kind: "fileManager",
        detect: detectWindowsExplorer,
      },
    },
  },
  createTerminalTarget(),
  createGitBashTarget(),
  createCmderTarget(),
  createDarwinTerminalTarget({
    id: "iterm2",
    label: "iTerm2",
    icon: "apps/iterm2.png",
    appPaths: ["/Applications/iTerm.app", "/Applications/iTerm2.app"],
  }),
  createDarwinTerminalTarget({
    id: "ghostty",
    label: "Ghostty",
    icon: "apps/ghostty.png",
    appPaths: ["/Applications/Ghostty.app"],
  }),
  createDarwinTerminalTarget({
    id: "warp",
    label: "Warp",
    icon: "apps/warp.png",
    appPaths: ["/Applications/Warp.app"],
  }),
  createWslTarget(),
  createXcodeTarget(),
  createJetBrainsTarget({
    id: "androidStudio",
    label: "Android Studio",
    icon: "apps/android-studio.png",
    toolboxTarget: "androidStudio",
    macExecutable: "studio",
    windowsPathCommands: ["studio64.exe", "studio.exe", "studio"],
    windowsInstallDirPrefixes: ["android studio"],
    windowsInstallExecutables: ["studio64.exe", "studio.exe"],
    windowsFallbackPaths: [
      ["Android", "Android Studio", "bin", "studio64.exe"],
      ["Android", "Android Studio", "bin", "studio.exe"],
    ],
  }),
  createJetBrainsTarget({
    id: "intellij",
    label: "IntelliJ IDEA",
    icon: "apps/intellij.png",
    toolboxTarget: "intellij",
    macExecutable: "idea",
    windowsPathCommands: ["idea64.exe", "idea.exe", "idea"],
    windowsInstallDirPrefixes: ["intellij idea", "idea"],
    windowsInstallExecutables: ["idea64.exe", "idea.exe"],
  }),
  createJetBrainsTarget({
    id: "rider",
    label: "Rider",
    icon: "apps/rider.png",
    toolboxTarget: "rider",
    macExecutable: "rider",
    windowsPathCommands: ["rider64.exe", "rider.exe", "rider"],
    windowsInstallDirPrefixes: ["rider"],
    windowsInstallExecutables: ["rider64.exe", "rider.exe"],
  }),
  createJetBrainsTarget({
    id: "goland",
    label: "GoLand",
    icon: "apps/goland.png",
    toolboxTarget: "goland",
    macExecutable: "goland",
  }),
  createJetBrainsTarget({
    id: "rustrover",
    label: "RustRover",
    icon: "apps/rustrover.png",
    toolboxTarget: "rustrover",
    macExecutable: "rustrover",
  }),
  createJetBrainsTarget({
    id: "pycharm",
    label: "PyCharm",
    icon: "apps/pycharm.png",
    toolboxTarget: "pycharm",
    macExecutable: "pycharm",
    windowsPathCommands: ["pycharm64.exe", "pycharm.exe", "pycharm"],
    windowsInstallDirPrefixes: ["pycharm"],
    windowsInstallExecutables: ["pycharm64.exe", "pycharm.exe"],
  }),
  createJetBrainsTarget({
    id: "webstorm",
    label: "WebStorm",
    icon: "apps/webstorm.svg",
    toolboxTarget: "webstorm",
    macExecutable: "webstorm",
    windowsPathCommands: ["webstorm64.exe", "webstorm.exe", "webstorm"],
    windowsInstallDirPrefixes: ["webstorm"],
    windowsInstallExecutables: ["webstorm64.exe", "webstorm.exe"],
  }),
  createJetBrainsTarget({
    id: "phpstorm",
    label: "PhpStorm",
    icon: "apps/phpstorm.png",
    toolboxTarget: "phpstorm",
    macExecutable: "phpstorm",
    windowsPathCommands: ["phpstorm64.exe", "phpstorm.exe", "phpstorm"],
    windowsInstallDirPrefixes: ["phpstorm"],
    windowsInstallExecutables: ["phpstorm64.exe", "phpstorm.exe"],
  }),
  createTextMateTarget(),
];
const OPEN_IN_TARGETS_BY_ID = new Map(
  OPEN_IN_TARGET_DEFINITIONS.map((definition) => [definition.id, definition]),
);

function getOpenInPlatformTarget(
  targetId: string | null | undefined,
): OpenInPlatformTarget {
  if (!targetId) throw Error("Open target is required.");
  const definition = OPEN_IN_TARGETS_BY_ID.get(targetId);
  const platform = currentOpenInPlatform();
  const platformTarget =
    platform == null ? undefined : definition?.platforms[platform];
  if (definition == null || platformTarget == null) {
    throw Error(`Unknown open target "${targetId}"`);
  }
  return platformTarget;
}

function currentOpenInPlatform(): OpenInPlatformName | null {
  switch (process.platform) {
    case "darwin":
    case "linux":
    case "win32":
      return process.platform;
    default:
      return null;
  }
}

function createCodeFamilyOpenInTarget({
  id,
  label,
  icon,
  darwinCliPaths,
  windowsPathCommand,
  windowsPathCommands,
  windowsExecutableName,
  windowsInstallDirName,
  windowsFallbackPaths,
}: {
  id: string;
  label: string;
  icon: string;
  darwinCliPaths: string[];
  windowsPathCommand?: string;
  windowsPathCommands?: string[];
  windowsExecutableName?: string;
  windowsInstallDirName?: string;
  windowsFallbackPaths?: string[][];
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind: "editor",
        detect: () => findExistingMacPath(darwinCliPaths),
      },
      win32: {
        label,
        icon,
        kind: "editor",
        detect: () => {
          if (
            windowsPathCommand &&
            windowsExecutableName &&
            windowsInstallDirName
          ) {
            return detectWindowsCommandApplication({
              pathCommand: windowsPathCommand,
              executableName: windowsExecutableName,
              installDirName: windowsInstallDirName,
            });
          }
          return (
            findWindowsPathCommand(windowsPathCommands ?? []) ??
            (windowsFallbackPaths
              ? findWindowsProgramPath(windowsFallbackPaths)
              : null)
          );
        },
      },
    },
  };
}

function createCursorOpenInTarget(): OpenInTargetDefinition {
  return {
    id: "cursor",
    platforms: {
      darwin: {
        label: "Cursor",
        icon: "apps/cursor.png",
        kind: "editor",
        detect: () => detectCursorDarwin()?.electronBin ?? null,
      },
      win32: {
        label: "Cursor",
        icon: "apps/cursor.png",
        kind: "editor",
        detect: detectCursorWin32,
      },
    },
  };
}

function createDarwinLaunchServicesTarget({
  id,
  label,
  icon,
  kind,
  appName,
  explicitAppPaths,
}: {
  id: string;
  label: string;
  icon: string;
  kind: OpenInTargetKind;
  appName: string;
  explicitAppPaths: string[];
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind,
        detect: () =>
          findMacApplicationByName(appName) ||
          findExistingMacPath(explicitAppPaths)
            ? "open"
            : null,
      },
    },
  };
}

function createDarwinTerminalTarget({
  id,
  label,
  icon,
  appPaths,
}: {
  id: string;
  label: string;
  icon: string;
  appPaths: string[];
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind: "terminal",
        detect: () => (findExistingMacPath(appPaths) ? "open" : null),
      },
    },
  };
}

function createSublimeTextTarget(): OpenInTargetDefinition {
  return {
    id: "sublimeText",
    platforms: {
      darwin: {
        label: "Sublime Text",
        icon: "apps/sublime-text.png",
        kind: "editor",
        detect: detectSublimeTextDarwin,
      },
      win32: {
        label: "Sublime Text",
        icon: "apps/sublime-text.png",
        kind: "editor",
        detect: detectSublimeTextWin32,
      },
    },
  };
}

function createZedOpenInTarget(): OpenInTargetDefinition {
  return {
    id: "zed",
    platforms: {
      darwin: {
        label: "Zed",
        icon: "apps/zed.png",
        kind: "editor",
        detect: detectZedDarwin,
      },
      win32: {
        label: "Zed",
        icon: "apps/zed.png",
        kind: "editor",
        detect: detectZedWin32,
      },
    },
  };
}

function createTerminalTarget(): OpenInTargetDefinition {
  return {
    id: "terminal",
    platforms: {
      darwin: {
        label: "Terminal",
        icon: "apps/terminal.png",
        kind: "terminal",
        detect: () =>
          findExistingMacPath(["/System/Applications/Utilities/Terminal.app"])
            ? "open"
            : null,
      },
      win32: {
        label: "Terminal",
        icon: "apps/microsoft-terminal.png",
        kind: "terminal",
        detect: detectWindowsTerminal,
        iconPath: () => null,
      },
    },
  };
}

function createGitBashTarget(): OpenInTargetDefinition {
  return {
    id: "gitBash",
    platforms: {
      win32: {
        label: "Git Bash",
        icon: "apps/vscode.png",
        kind: "terminal",
        detect: detectGitBash,
        iconPath: getGitBashIconPath,
      },
    },
  };
}

function createCmderTarget(): OpenInTargetDefinition {
  return {
    id: "cmder",
    platforms: {
      win32: {
        label: "Cmder",
        icon: "apps/cmder.png",
        kind: "terminal",
        detect: detectCmder,
      },
    },
  };
}

function createWslTarget(): OpenInTargetDefinition {
  return {
    id: "wsl",
    platforms: {
      win32: {
        label: "WSL",
        icon: "apps/terminal.png",
        kind: "terminal",
        detect: async (readShortcutLink) =>
          hasWslDistribution() ? detectWindowsTerminal(readShortcutLink) : null,
        iconPath: () =>
          findWindowsStartMenuShortcut(["WSL.lnk"]) ??
          resolveWindowsAppsExecutionAlias("wsl.exe"),
      },
    },
  };
}

function createXcodeTarget(): OpenInTargetDefinition {
  return {
    id: "xcode",
    platforms: {
      darwin: {
        label: "Xcode",
        icon: "apps/xcode.png",
        kind: "editor",
        detect: () => {
          const xcode = detectXcodeDarwin();
          return xcode?.xedPath ?? xcode?.appPath ?? null;
        },
      },
    },
  };
}

function createJetBrainsTarget({
  id,
  label,
  icon,
  toolboxTarget,
  macExecutable,
  windowsPathCommands,
  windowsInstallDirPrefixes,
  windowsInstallExecutables,
  windowsFallbackPaths,
}: {
  id: string;
  label: string;
  icon: string;
  toolboxTarget: string;
  macExecutable: string;
  windowsPathCommands?: string[];
  windowsInstallDirPrefixes?: string[];
  windowsInstallExecutables?: string[];
  windowsFallbackPaths?: string[][];
}): OpenInTargetDefinition {
  return {
    id,
    platforms: {
      darwin: {
        label,
        icon,
        kind: "editor",
        detect: () =>
          findExistingMacPath([
            `/Applications/${label}.app/Contents/MacOS/${macExecutable}`,
          ]) ??
          getJetBrainsToolboxInstallations().get(toolboxTarget) ??
          findMacExecutableByAppPrefix(label, macExecutable),
      },
      win32:
        windowsPathCommands &&
        windowsInstallDirPrefixes &&
        windowsInstallExecutables
          ? {
              label,
              icon,
              kind: "editor",
              detect: () =>
                detectJetBrainsWin32({
                  pathCommands: windowsPathCommands,
                  installDirPrefixes: windowsInstallDirPrefixes,
                  installExecutables: windowsInstallExecutables,
                  fallbackPaths: windowsFallbackPaths,
                }),
            }
          : undefined,
    },
  };
}

function createTextMateTarget(): OpenInTargetDefinition {
  return createDarwinLaunchServicesTarget({
    id: "textmate",
    label: "TextMate",
    icon: "apps/textmate.png",
    kind: "editor",
    appName: "TextMate",
    explicitAppPaths: ["/Applications/TextMate.app"],
  });
}

function findExistingMacPath(paths: string[]): string | null {
  if (process.platform !== "darwin") return null;
  for (const path of paths) {
    for (const candidate of expandMacApplicationPath(path)) {
      if (existsSync(candidate)) return candidate;
    }
  }
  return null;
}

function expandMacApplicationPath(path: string): string[] {
  return path.startsWith("/Applications/")
    ? [path, join(USER_APPLICATIONS_DIR, path.slice("/Applications/".length))]
    : [path];
}

function findMacApplicationByName(appName: string): string | null {
  if (process.platform !== "darwin") return null;
  const lowerName = appName.toLowerCase();
  for (const root of MAC_APPLICATION_ROOTS) {
    let entries: string[];
    try {
      entries = readdirSync(root);
    } catch {
      continue;
    }
    for (const entry of entries) {
      const lowerEntry = entry.toLowerCase();
      if (!lowerEntry.startsWith(lowerName) || !lowerEntry.endsWith(".app")) {
        continue;
      }
      const appPath = join(root, entry);
      if (existsSync(appPath)) return appPath;
    }
  }
  return null;
}

function findMacExecutableByAppPrefix(
  appName: string,
  executable: string,
): string | null {
  const lowerName = appName.toLowerCase();
  for (const root of MAC_APPLICATION_ROOTS) {
    let entries: string[];
    try {
      entries = readdirSync(root);
    } catch {
      continue;
    }
    for (const entry of entries) {
      const lowerEntry = entry.toLowerCase();
      if (!lowerEntry.startsWith(lowerName) || !lowerEntry.endsWith(".app")) {
        continue;
      }
      const executablePath = join(root, entry, "Contents", "MacOS", executable);
      if (existsSync(executablePath)) return executablePath;
    }
  }
  return null;
}

function findWindowsPathCommand(commands: string[]): string | null {
  for (const command of commands) {
    const resolved =
      resolveExecutableFromPath(command) ?? resolveWindowsWhere(command);
    if (resolved != null) return resolveWindowsExecutableCandidate(resolved);
  }
  return null;
}

function findWindowsProgramPath(fallbackPaths: string[][]): string | null {
  for (const root of WINDOWS_PROGRAM_ROOTS) {
    for (const fallbackPath of fallbackPaths) {
      const candidate = join(root, ...fallbackPath);
      if (existsSync(candidate)) return candidate;
    }
  }
  return null;
}

function resolveWindowsExecutableCandidate(candidate: string): string | null {
  if (!existsSync(candidate)) return null;
  if (extname(candidate)) return candidate;
  for (const extension of [".cmd", ".bat", ".exe"]) {
    const withExtension = `${candidate}${extension}`;
    if (existsSync(withExtension)) return withExtension;
  }
  return candidate;
}

function findAdjacentWindowsExecutable(
  executablePath: string,
  executableName: string,
): string | null {
  const executableDirectory = dirname(executablePath);
  if (basename(executableDirectory).toLowerCase() === "bin") {
    const adjacentToBin = join(dirname(executableDirectory), executableName);
    if (existsSync(adjacentToBin)) return adjacentToBin;
  }
  const adjacent = join(executableDirectory, executableName);
  return existsSync(adjacent) ? adjacent : null;
}

function detectWindowsCommandApplication({
  pathCommand,
  executableName,
  installDirName,
}: {
  pathCommand: string;
  executableName: string;
  installDirName: string;
}): string | null {
  const commandPath =
    resolveExecutableFromPath(pathCommand) ?? resolveWindowsWhere(pathCommand);
  if (commandPath != null) {
    const executablePath = resolveWindowsExecutableCandidate(commandPath);
    if (executablePath != null) {
      return (
        findAdjacentWindowsExecutable(executablePath, executableName) ??
        (basename(executablePath).toLowerCase() === executableName.toLowerCase()
          ? executablePath
          : null)
      );
    }
  }
  return findWindowsProgramPath([[installDirName, executableName]]);
}

function resolveWindowsAppsExecutionAlias(alias: string): string | null {
  return resolveWindowsExecutableCandidate(join(WINDOWS_APPS_DIR, alias));
}

function resolveWindowsWhere(command: string): string | null {
  if (process.platform !== "win32") return null;
  const result = spawnSync("where.exe", [command], {
    windowsHide: true,
    encoding: "utf8",
  });
  if (result.status !== 0 || typeof result.stdout !== "string") return null;
  return (
    result.stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.length > 0) ?? null
  );
}

function findWindowsStartMenuShortcut(shortcutNames: string[]): string | null {
  const lowerNames = new Set(shortcutNames.map((name) => name.toLowerCase()));
  for (const root of WINDOWS_START_MENU_ROOTS) {
    const shortcut = findWindowsStartMenuShortcutInDirectory(root, lowerNames);
    if (shortcut != null) return shortcut;
  }
  return null;
}

function findWindowsStartMenuShortcutInDirectory(
  directory: string,
  lowerNames: Set<string>,
): string | null {
  if (!existsSync(directory)) return null;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);
    if (entry.isFile() && lowerNames.has(entry.name.toLowerCase())) {
      return entryPath;
    }
    if (!entry.isDirectory()) continue;
    const nested = findWindowsStartMenuShortcutInDirectory(
      entryPath,
      lowerNames,
    );
    if (nested != null) return nested;
  }
  return null;
}

async function detectWindowsTerminal(
  readShortcutLink: OpenInShortcutResolver,
): Promise<string | null> {
  const terminalPath =
    resolveExecutableFromPath("wt.exe") ??
    resolveWindowsAppsExecutionAlias("wt.exe");
  if (terminalPath != null) return terminalPath;
  const shortcutPath = findWindowsStartMenuShortcut(
    WINDOWS_TERMINAL_SHORTCUT_NAMES,
  );
  if (shortcutPath == null) return null;
  const shortcut = await readShortcutLink(shortcutPath);
  return (
    resolveWindowsExecutableCandidate(
      stripWindowsIconResourceSuffix(shortcut.target) ?? "",
    ) ?? "wt.exe"
  );
}

function detectWindowsExplorer(): string {
  const systemRoot = process.env.SystemRoot ?? process.env.windir;
  if (systemRoot != null) {
    const explorerPath = join(systemRoot, "explorer.exe");
    if (existsSync(explorerPath)) return explorerPath;
  }
  return "explorer.exe";
}

function detectGitBash(): string | null {
  const pathCommand = findWindowsPathCommand(["git-bash.exe", "git-bash"]);
  if (pathCommand != null) {
    return (
      findAdjacentWindowsExecutable(pathCommand, "git-bash.exe") ?? pathCommand
    );
  }
  return findWindowsProgramPath([
    ["Git", "git-bash.exe"],
    ["Git", "bin", "bash.exe"],
  ]);
}

function getGitBashIconPath(command: string): string | null {
  return (
    findWindowsStartMenuShortcut(["Git Bash.lnk"]) ??
    findWindowsProgramPath([["Git", "git-bash.exe"]]) ??
    findAdjacentWindowsExecutable(command, "git-bash.exe") ??
    command
  );
}

async function detectCmder(
  readShortcutLink: OpenInShortcutResolver,
): Promise<string | null> {
  const cmderRoot = process.env.CMDER_ROOT?.trim();
  if (cmderRoot) {
    const cmderPath = join(cmderRoot, "Cmder.exe");
    if (existsSync(cmderPath)) return cmderPath;
  }
  const pathCommand = findWindowsPathCommand(["cmder.exe", "cmder"]);
  if (pathCommand != null) return pathCommand;
  const shortcutPath = findWindowsStartMenuShortcut(["Cmder.lnk"]);
  if (shortcutPath == null) return null;
  const shortcut = await readShortcutLink(shortcutPath);
  return resolveWindowsExecutableCandidate(
    stripWindowsIconResourceSuffix(shortcut.target) ?? "",
  );
}

function detectCursorDarwin(): { electronBin: string; cliJs: string } | null {
  if (process.platform !== "darwin") return null;
  const appPaths = [
    "/Applications/Cursor.app",
    "/Applications/Cursor Preview.app",
    "/Applications/Cursor Nightly.app",
  ];
  const discoveredCursorApp = findMacApplicationByName("Cursor");
  if (discoveredCursorApp != null) appPaths.push(discoveredCursorApp);
  for (const appPath of appPaths) {
    for (const candidate of expandMacApplicationPath(appPath)) {
      const electronBin = join(candidate, "Contents", "MacOS", "Cursor");
      const cliJs = join(
        candidate,
        "Contents",
        "Resources",
        "app",
        "out",
        "cli.js",
      );
      if (existsSync(electronBin) && existsSync(cliJs)) {
        return { electronBin, cliJs };
      }
    }
  }
  return null;
}

function detectCursorWin32(): string | null {
  const cursorCommand =
    resolveExecutableFromPath("cursor") ?? resolveWindowsWhere("cursor");
  if (cursorCommand != null) {
    const executablePath = resolveWindowsExecutableCandidate(cursorCommand);
    if (executablePath != null) {
      if (basename(executablePath).toLowerCase() === "cursor.exe") {
        return executablePath;
      }
      const binDirectory = dirname(executablePath);
      if (basename(binDirectory).toLowerCase() === "bin") {
        const appDirectory = dirname(binDirectory);
        if (basename(appDirectory).toLowerCase() === "app") {
          const resourcesDirectory = dirname(appDirectory);
          if (basename(resourcesDirectory).toLowerCase() === "resources") {
            const cursorExe = join(dirname(resourcesDirectory), "Cursor.exe");
            if (existsSync(cursorExe)) return cursorExe;
          }
        }
      }
    }
  }
  return findWindowsProgramPath([["Cursor", "Cursor.exe"]]);
}

function detectSublimeTextDarwin(): string | null {
  const pathCommand = resolveExecutableFromPath("subl");
  if (pathCommand != null) return pathCommand;
  const appPath = findMacApplicationByName("Sublime Text");
  if (appPath != null) {
    const cliPath = join(appPath, "Contents", "SharedSupport", "bin", "subl");
    if (existsSync(cliPath)) return cliPath;
  }
  return findExistingMacPath([
    "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
  ]);
}

function detectSublimeTextWin32(): string | null {
  const pathCommand = findWindowsPathCommand(["subl.exe", "subl"]);
  if (pathCommand != null) {
    return (
      findAdjacentWindowsExecutable(pathCommand, "sublime_text.exe") ??
      pathCommand
    );
  }
  return findWindowsProgramPath([
    ["Sublime Text", "sublime_text.exe"],
    ["Sublime Text", "subl.exe"],
  ]);
}

function detectZedDarwin(): string | null {
  return (
    resolveExecutableFromPath("zed") ??
    findExistingMacPath([
      "/Applications/Zed.app/Contents/MacOS/zed",
      "/Applications/Zed Preview.app/Contents/MacOS/zed",
      "/Applications/Zed Nightly.app/Contents/MacOS/zed",
    ]) ??
    findMacExecutableByAppPrefix("Zed", "zed")
  );
}

function detectZedWin32(): string | null {
  const pathCommand = findWindowsPathCommand(["zed.exe", "zed"]);
  return pathCommand ?? findWindowsProgramPath([["Zed", "Zed.exe"]]);
}

function detectGitHubDesktop(): string | null {
  const pathCommand = findWindowsPathCommand(["github.exe", "github"]);
  if (pathCommand != null) {
    return (
      findAdjacentWindowsExecutable(pathCommand, "GitHubDesktop.exe") ??
      pathCommand
    );
  }
  for (const fallbackPath of [
    ["GitHubDesktop", "GitHubDesktop.exe"],
    ["GitHub Desktop", "GitHubDesktop.exe"],
  ]) {
    const candidate = join(WINDOWS_LOCAL_APPDATA, ...fallbackPath);
    if (existsSync(candidate)) return candidate;
  }
  return findWindowsProgramPath([
    ["GitHub Desktop", "GitHubDesktop.exe"],
    ["GitHubDesktop", "GitHubDesktop.exe"],
  ]);
}

function detectVisualStudio(): string | null {
  const pathCommand = findWindowsPathCommand(["devenv.exe", "devenv"]);
  return (
    pathCommand ??
    findWindowsProgramPath(
      ["2022", "2019", "2017"].flatMap((version) =>
        [
          "Community",
          "Professional",
          "Enterprise",
          "Preview",
          "BuildTools",
        ].map((edition) => [
          "Microsoft Visual Studio",
          version,
          edition,
          "Common7",
          "IDE",
          "devenv.exe",
        ]),
      ),
    ) ??
    findVisualStudioWithVswhere("**\\Common7\\IDE\\devenv.exe")
  );
}

function findVisualStudioWithVswhere(pattern: string): string | null {
  const vswhereCandidates = [
    process.env["ProgramFiles(x86)"],
    process.env.ProgramFiles,
  ].flatMap((root) =>
    root
      ? [join(root, "Microsoft Visual Studio", "Installer", "vswhere.exe")]
      : [],
  );
  const vswhere = vswhereCandidates.find((candidate) => existsSync(candidate));
  if (vswhere == null) return null;
  const result = spawnSync(
    vswhere,
    [
      "-products",
      "*",
      "-all",
      "-find",
      pattern,
      "-utf8",
      "-nologo",
      "-prerelease",
    ],
    { windowsHide: true, encoding: "utf8" },
  );
  if (result.status !== 0 || typeof result.stdout !== "string") return null;
  return (
    result.stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.length > 0 && existsSync(line)) ?? null
  );
}

function hasWslDistribution(): boolean {
  return (
    resolveWindowsAppsExecutionAlias("wsl.exe") != null ||
    resolveExecutableFromPath("wsl.exe") != null
  );
}

function detectXcodeDarwin(): {
  appPath: string | null;
  xedPath: string | null;
} | null {
  if (process.platform !== "darwin") return null;
  const appPath =
    findMacApplicationByName("Xcode") ??
    findExistingMacPath(["/Applications/Xcode.app"]);
  let xedPath: string | null = null;
  try {
    const result = spawnSync("xcode-select", ["-p"], {
      encoding: "utf8",
      timeout: 1000,
    });
    const developerPath = result.status === 0 ? result.stdout?.trim() : "";
    if (developerPath) {
      const selectedXed = join(developerPath, "usr", "bin", "xed");
      if (existsSync(selectedXed)) xedPath = selectedXed;
    }
  } catch {}
  if (xedPath == null && appPath != null) {
    const appXed = join(appPath, "Contents", "Developer", "usr", "bin", "xed");
    if (existsSync(appXed)) xedPath = appXed;
  }
  return appPath == null && xedPath == null ? null : { appPath, xedPath };
}

function getJetBrainsToolboxInstallations(): Map<string, string> {
  if (jetBrainsToolboxCache != null) return jetBrainsToolboxCache;
  jetBrainsToolboxCache = new Map();
  collectJetBrainsToolboxInstallations(
    JETBRAINS_TOOLBOX_ROOT,
    0,
    jetBrainsToolboxCache,
  );
  return jetBrainsToolboxCache;
}

function collectJetBrainsToolboxInstallations(
  directory: string,
  depth: number,
  found: Map<string, string>,
): void {
  if (process.platform !== "darwin" || depth > 6 || !existsSync(directory)) {
    return;
  }
  let entries: string[];
  try {
    entries = readdirSync(directory);
  } catch {
    return;
  }
  for (const entry of entries.sort((left, right) =>
    right.localeCompare(left),
  )) {
    const entryPath = join(directory, entry);
    const lowerEntry = entry.toLowerCase();
    if (lowerEntry.endsWith(".app")) {
      for (const hint of JETBRAINS_BUNDLE_HINTS) {
        if (
          found.has(hint.target) ||
          !hint.bundlePrefixes.some((prefix) => lowerEntry.startsWith(prefix))
        ) {
          continue;
        }
        const executablePath = join(
          entryPath,
          "Contents",
          "MacOS",
          hint.executable,
        );
        if (existsSync(executablePath)) found.set(hint.target, executablePath);
      }
      continue;
    }
    try {
      if (statSync(entryPath).isDirectory()) {
        collectJetBrainsToolboxInstallations(entryPath, depth + 1, found);
      }
    } catch {}
  }
}

function detectJetBrainsWin32({
  pathCommands,
  installDirPrefixes,
  installExecutables,
  fallbackPaths,
}: {
  pathCommands: string[];
  installDirPrefixes: string[];
  installExecutables: string[];
  fallbackPaths?: string[][];
}): string | null {
  const pathCommand = findWindowsPathCommand(pathCommands);
  if (pathCommand != null) return pathCommand;
  const installPrefixSet = installDirPrefixes.map((prefix) =>
    prefix.toLowerCase(),
  );
  for (const root of WINDOWS_JETBRAINS_ROOTS) {
    let entries: string[];
    try {
      entries = readdirSync(root).sort((left, right) =>
        right.localeCompare(left),
      );
    } catch {
      continue;
    }
    for (const entry of entries) {
      const lowerEntry = entry.toLowerCase();
      if (!installPrefixSet.some((prefix) => lowerEntry.startsWith(prefix))) {
        continue;
      }
      for (const executableName of installExecutables) {
        const executablePath = join(root, entry, "bin", executableName);
        if (existsSync(executablePath)) return executablePath;
      }
    }
  }
  return fallbackPaths ? findWindowsProgramPath(fallbackPaths) : null;
}

async function resolveWindowsShortcutIconPath(
  shortcutPath: string,
  readShortcutLink: OpenInShortcutResolver,
): Promise<string | null> {
  const shortcut = await readShortcutLink(shortcutPath);
  return (
    stripWindowsIconResourceSuffix(shortcut.icon) ??
    stripWindowsIconResourceSuffix(shortcut.target)
  );
}

function stripWindowsIconResourceSuffix(
  value: string | null | undefined,
): string | null {
  if (value == null) return null;
  const trimmed = value.trim().replace(/^"(.*)"$/, "$1");
  const commaIndex = trimmed.lastIndexOf(",");
  if (commaIndex < 0) return trimmed || null;
  const resourceIndex = Number(trimmed.slice(commaIndex + 1));
  return Number.isInteger(resourceIndex)
    ? trimmed.slice(0, commaIndex) || null
    : trimmed || null;
}

async function detectOpenInTarget(
  params: OpenInTargetRequestParams,
  readShortcutLink: (path: string) => Promise<ShortcutLink>,
): Promise<string | null> {
  if (params.customTarget != null) {
    return resolveCustomOpenInCommand(
      params.customTarget.command,
      readShortcutLink,
    );
  }
  return getOpenInPlatformTarget(params.target).detect(readShortcutLink);
}

async function resolveCustomOpenInCommand(
  command: string | null | undefined,
  readShortcutLink: (path: string) => Promise<ShortcutLink>,
): Promise<string | null> {
  if (command == null || command.trim() === "") return null;
  const trimmedCommand = command.trim();
  if (isPlatformAbsolutePath(trimmedCommand)) {
    return existsSync(trimmedCommand) ? trimmedCommand : null;
  }
  const resolvedFromPath = resolveExecutableFromPath(trimmedCommand);
  if (resolvedFromPath != null) return resolvedFromPath;
  if (
    process.platform === "win32" &&
    trimmedCommand.toLowerCase().endsWith(".lnk")
  ) {
    const shortcut = await readShortcutLink(trimmedCommand);
    return shortcut.target ?? null;
  }
  return null;
}

async function getOpenInTargetIcon({
  command,
  params,
  readShortcutLink,
}: {
  command: string | null;
  params: OpenInTargetRequestParams;
  readShortcutLink(path: string): Promise<ShortcutLink>;
}): Promise<string> {
  if (params.customTarget != null) {
    return normalizeOpenInIconSpecifier(params.customTarget.icon);
  }
  if (process.platform === "win32" && command?.toLowerCase().endsWith(".lnk")) {
    const shortcut = await readShortcutLink(command);
    return normalizeOpenInIconSpecifier(shortcut.icon ?? shortcut.target);
  }
  const platformTarget = getOpenInPlatformTarget(params.target);
  if (process.platform !== "win32" || command == null) {
    return platformTarget.icon;
  }
  const iconPath = platformTarget.iconPath
    ? platformTarget.iconPath(command)
    : command;
  const resolvedIconPath =
    iconPath?.toLowerCase().endsWith(".lnk") === true
      ? await resolveWindowsShortcutIconPath(iconPath, readShortcutLink)
      : iconPath;
  return resolvedIconPath == null
    ? platformTarget.icon
    : normalizeOpenInIconSpecifier(
        stripWindowsIconResourceSuffix(resolvedIconPath),
      );
}

function parseOpenInTargetRequestParams(
  value: unknown,
): OpenInTargetRequestParams {
  if (!isRecord(value)) return {};
  const customTarget = isRecord(value.customTarget)
    ? {
        command:
          typeof value.customTarget.command === "string"
            ? value.customTarget.command
            : null,
        icon:
          typeof value.customTarget.icon === "string"
            ? value.customTarget.icon
            : null,
      }
    : null;
  return {
    target: typeof value.target === "string" ? value.target : null,
    command: typeof value.command === "string" ? value.command : null,
    customTarget,
  };
}

function normalizeOpenInIconSpecifier(icon: string | null | undefined): string {
  if (icon == null || icon.trim() === "") return "apps/vscode.png";
  const trimmedIcon = icon.trim();
  if (isBundledAppIconPath(trimmedIcon) || isDataImageUrl(trimmedIcon)) {
    return trimmedIcon;
  }
  const filePath = parseLocalIconPath(trimmedIcon);
  return filePath == null ? "apps/vscode.png" : toAppFileUrl(filePath);
}

function parseLocalIconPath(icon: string): string | null {
  if (icon.startsWith("file:")) {
    try {
      return fileURLToPath(icon);
    } catch {
      return null;
    }
  }
  if (!isPlatformAbsolutePath(icon)) return null;
  if (process.platform !== "win32" && !existsSync(icon)) return null;
  return icon;
}

function toAppFileUrl(filePath: string): string {
  let normalizedPath = filePath.replaceAll("\\", "/");
  if (!normalizedPath.startsWith("/")) normalizedPath = `/${normalizedPath}`;
  return `app://fs/@fs${encodeURI(normalizedPath).replaceAll("#", "%23").replaceAll("?", "%3F")}`;
}

function isBundledAppIconPath(icon: string): boolean {
  const withoutLeadingSlash = icon.startsWith("/") ? icon.slice(1) : icon;
  return (
    withoutLeadingSlash.startsWith("apps/") &&
    !withoutLeadingSlash.split("/").includes("..")
  );
}

function isDataImageUrl(icon: string): boolean {
  return /^data:image\/(?:png|jpe?g|gif|webp|bmp|x-icon|vnd\.microsoft\.icon);base64,/i.test(
    icon,
  );
}

function isPlatformAbsolutePath(
  candidate: string,
  platform = process.platform,
): boolean {
  if (platform !== "win32") return posix.isAbsolute(candidate);
  const parsedRoot = win32.parse(candidate).root;
  return (
    win32.isAbsolute(candidate) &&
    (parsedRoot.includes(":") || parsedRoot.startsWith("\\\\"))
  );
}

function resolveExecutableFromPath(command: string): string | null {
  const pathEntries = (process.env.PATH ?? "")
    .split(delimiter)
    .filter((entry) => entry.length > 0);
  const extensions =
    process.platform === "win32"
      ? (process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM")
          .split(";")
          .filter((entry) => entry.length > 0)
      : [""];
  const commandCandidates =
    process.platform === "win32" && /\.[A-Za-z0-9]+$/.test(command)
      ? [command]
      : extensions.map((extension) => `${command}${extension}`);
  for (const pathEntry of pathEntries) {
    for (const candidate of commandCandidates) {
      const fullPath =
        process.platform === "win32"
          ? win32.join(pathEntry, candidate)
          : posix.join(pathEntry, candidate);
      if (existsSync(fullPath)) return fullPath;
    }
  }
  return null;
}

function normalizeShortcutLink(value: unknown): ShortcutLink {
  if (!isRecord(value)) return {};
  return {
    target: typeof value.target === "string" ? value.target : null,
    icon: typeof value.icon === "string" ? value.icon : null,
  };
}

function toRpcError(error: unknown): RpcResult {
  return {
    type: "error",
    error: {
      message: error instanceof Error ? error.message : String(error),
      code:
        error instanceof Error &&
        "code" in error &&
        typeof error.code === "string"
          ? error.code
          : "OPEN_RESTORATION_BOUNDARY",
    },
  };
}

function isWorkerMainRpcResponse(
  message: unknown,
): message is WorkerMainRpcResponse {
  if (!isRecord(message)) return false;
  return (
    message.type === "worker-main-rpc-response" &&
    typeof message.workerId === "string" &&
    typeof message.requestId === "string" &&
    isWorkerMainRpcMethod(message.method) &&
    isRecord(message.result) &&
    (message.result.type === "ok" || message.result.type === "error")
  );
}

function isWorkerMainRpcEvent(message: unknown): message is WorkerMainRpcEvent {
  if (!isRecord(message)) return false;
  return (
    message.type === "worker-main-rpc-event" &&
    typeof message.workerId === "string" &&
    isWorkerMainRpcEventMethod(message.method) &&
    isRecord(message.params)
  );
}

function isWorkerMainRpcMethod(method: unknown): method is WorkerMainRpcMethod {
  return (
    method === "worktree-cleanup-inputs" ||
    method === "computer-use-invalidate-service-pid" ||
    method === "computer-use-service-pid" ||
    method === "codex-home" ||
    method === "read-shortcut-link" ||
    method === "platform-family" ||
    method === "platform-os" ||
    method === "process-start" ||
    method === "process-write" ||
    method === "process-resize" ||
    method === "process-terminate" ||
    method === "fs-read-file" ||
    method === "fs-write-file" ||
    method === "fs-create-directory" ||
    method === "fs-get-metadata" ||
    method === "fs-read-directory" ||
    method === "fs-remove" ||
    method === "fs-copy" ||
    method === "fs-watch" ||
    method === "fs-unwatch" ||
    method === "worker-exit"
  );
}

function isWorkerMainRpcEventMethod(
  method: unknown,
): method is WorkerMainRpcEventMethod {
  return (
    method === "process-output-delta" ||
    method === "fs-watch-changed" ||
    method === "fs-watch-closed"
  );
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
