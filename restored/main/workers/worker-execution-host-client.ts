// Restored from ref/.vite/build/worker.js
// Worker-side execution-host client backed by main-process RPC.

import { randomUUID } from "node:crypto";
import { posix, win32 } from "node:path";
import { ReadableStream, WritableStream } from "node:stream/web";
import type { WorkerMainRpcRequester } from "./worker-main-rpc-client";

export type WorkerExecutionHostConfig = Record<string, unknown> & {
  id: string;
  kind?: string;
};

export type WorkerExecutionHostProcess = {
  stdin: WritableStream<unknown>;
  stdout: ReadableStream<unknown>;
  stderr: ReadableStream<unknown>;
  kill(): void;
  resize(size: unknown): Promise<void>;
  wait(): Promise<unknown>;
};

export type WorkerExecutionHostWatch = {
  path: string;
  closed: Promise<{ reason: string; error?: unknown }>;
  dispose(): Promise<void>;
};

type Deferred<T> = {
  promise: Promise<T>;
  resolve(value: T): void;
  reject(error: unknown): void;
};

type ControlledReadableStream = {
  stream: ReadableStream<unknown>;
  close(): void;
  enqueue(chunk: unknown): void;
  error(error: unknown): void;
};

export function isRemoteExecutionHostConfig(
  hostConfig: unknown,
): hostConfig is WorkerExecutionHostConfig {
  return (
    isRecord(hostConfig) &&
    typeof hostConfig.id === "string" &&
    (hostConfig.kind === "ssh" ||
      hostConfig.kind === "wsl" ||
      hostConfig.kind === "remote-control")
  );
}

export class WorkerRemoteExecutionHostClient {
  readonly id: string;
  readonly isLocal = false;
  readonly hostConfig: WorkerExecutionHostConfig;

  constructor(
    private readonly mainRpcClient: WorkerMainRpcRequester,
    hostConfig: WorkerExecutionHostConfig,
  ) {
    this.hostConfig = hostConfig;
    this.id = hostConfig.id;
  }

  spawn(
    options: Record<string, unknown> & { signal?: AbortSignal },
  ): Promise<WorkerExecutionHostProcess> {
    const processHandle = `process:${randomUUID()}`;
    const stdout = createControlledReadableStream();
    const stderr = createControlledReadableStream();
    let exited = false;
    let killed = false;
    let removeAbortListener = (): void => {};
    const unsubscribeOutput = this.mainRpcClient.subscribe(
      "process-output-delta",
      (event) => {
        if (!isRecord(event)) return;
        if (event.processHandle !== processHandle) return;
        (event.stream === "stdout" ? stdout : stderr).enqueue(event.chunk);
      },
    );
    const { signal, ...spawnOptions } = options;
    const waitPromise = this.mainRpcClient
      .request("process-start", {
        hostId: this.id,
        processHandle,
        ...spawnOptions,
      })
      .then(
        (value) => {
          exited = true;
          stdout.close();
          stderr.close();
          return value;
        },
        (error) => {
          stdout.error(error);
          stderr.error(error);
          throw error;
        },
      );
    const cleanup = (): void => {
      unsubscribeOutput();
      removeAbortListener();
    };
    waitPromise.then(cleanup, cleanup);
    waitPromise.catch(() => {});

    const kill = (): void => {
      if (exited || killed) return;
      killed = true;
      this.mainRpcClient
        .request("process-terminate", { processHandle })
        .catch(() => {});
    };
    if (signal != null) {
      const abort = (): void => kill();
      signal.addEventListener("abort", abort);
      removeAbortListener = () => signal.removeEventListener("abort", abort);
      if (signal.aborted) abort();
    }

    return Promise.resolve({
      stdin: new WritableStream({
        write: async (delta) => {
          await this.mainRpcClient.request("process-write", {
            processHandle,
            delta,
          });
        },
        close: async () => {
          await this.mainRpcClient.request("process-write", {
            processHandle,
            closeStdin: true,
          });
        },
        abort: kill,
      }),
      stdout: stdout.stream,
      stderr: stderr.stream,
      kill,
      resize: async (size) => {
        await this.mainRpcClient.request("process-resize", {
          processHandle,
          size,
        });
      },
      wait: () => waitPromise,
    });
  }

  async readFile(path: string): Promise<ReadableStream<Uint8Array>> {
    return readableStreamFromBytes(
      await this.mainRpcClient.request("fs-read-file", {
        hostId: this.id,
        path,
      }),
    );
  }

  async writeFile(
    path: string,
    contents: BodyInit | ReadableStream<unknown> | Uint8Array,
    options: { signal?: AbortSignal } = {},
  ): Promise<void> {
    options.signal?.throwIfAborted();
    await this.mainRpcClient.request("fs-write-file", {
      hostId: this.id,
      path,
      contents: await readBodyToUint8Array(toReadableBody(contents)),
    });
    options.signal?.throwIfAborted();
  }

  async createDirectory(
    path: string,
    options: { recursive?: unknown } = {},
  ): Promise<void> {
    await this.mainRpcClient.request("fs-create-directory", {
      hostId: this.id,
      path,
      recursive: options.recursive,
    });
  }

  async stat(
    path: string,
    options: { bypassCache?: unknown; followSymlinks?: unknown } = {},
  ): Promise<Record<string, unknown>> {
    return serializeRemoteMetadata(
      await this.mainRpcClient.request("fs-get-metadata", {
        hostId: this.id,
        path,
        bypassCache: options.bypassCache,
        followSymlinks: options.followSymlinks,
      }),
    );
  }

  async readDirectory(path: string): Promise<Array<Record<string, unknown>>> {
    const entries = await this.mainRpcClient.request("fs-read-directory", {
      hostId: this.id,
      path,
    });
    return Array.isArray(entries)
      ? entries.map(serializeRemoteDirectoryEntry)
      : [];
  }

  async remove(
    path: string,
    options: Record<string, unknown> = {},
  ): Promise<void> {
    await this.mainRpcClient.request("fs-remove", {
      hostId: this.id,
      path,
      ...options,
    });
  }

  async copyFile(
    sourcePath: string,
    destinationPath: string,
    options: { exclusive?: boolean } = {},
  ): Promise<void> {
    if (options.exclusive) {
      throw Error("Exclusive copy is unsupported across worker RPC");
    }
    await this.copy(sourcePath, destinationPath);
  }

  async copy(
    sourcePath: string,
    destinationPath: string,
    options: { recursive?: unknown } = {},
  ): Promise<void> {
    await this.mainRpcClient.request("fs-copy", {
      hostId: this.id,
      sourcePath,
      destinationPath,
      recursive: options.recursive,
    });
  }

  codexHome(): Promise<unknown> {
    return this.mainRpcClient.request("codex-home", { hostId: this.id });
  }

  platformFamily(): Promise<unknown> {
    return this.mainRpcClient.request("platform-family", { hostId: this.id });
  }

  platformOs(): Promise<unknown> {
    return this.mainRpcClient.request("platform-os", { hostId: this.id });
  }

  async platformPath(): Promise<typeof posix | typeof win32> {
    return (await this.platformFamily()) === "windows" ? win32 : posix;
  }

  async startFileWatch(options: {
    path: string;
    recursive?: unknown;
    watchId: string;
    onChange(event: { changedPaths: unknown }): void;
  }): Promise<WorkerExecutionHostWatch> {
    let closed = false;
    const closedDeferred = createDeferred<{
      reason: string;
      error?: unknown;
    }>();
    let unsubscribeChanged = (): void => {};
    let unsubscribeClosed = (): void => {};
    const close = (event: { reason: string; error?: unknown }): void => {
      if (closed) return;
      closed = true;
      unsubscribeChanged();
      unsubscribeClosed();
      closedDeferred.resolve(event);
    };
    unsubscribeChanged = this.mainRpcClient.subscribe(
      "fs-watch-changed",
      (event) => {
        if (!isRecord(event)) return;
        if (
          !closed &&
          event.hostId === this.id &&
          event.watchId === options.watchId
        ) {
          options.onChange({ changedPaths: event.changedPaths });
        }
      },
    );
    unsubscribeClosed = this.mainRpcClient.subscribe(
      "fs-watch-closed",
      (event) => {
        if (!isRecord(event)) return;
        if (event.hostId !== this.id || event.watchId !== options.watchId)
          return;
        close(
          event.reason === "watch-error"
            ? { reason: String(event.reason), error: event.error }
            : { reason: String(event.reason) },
        );
      },
    );
    try {
      const result = await this.mainRpcClient.request("fs-watch", {
        hostId: this.id,
        path: options.path,
        recursive: options.recursive,
        watchId: options.watchId,
      });
      return {
        path:
          isRecord(result) && typeof result.path === "string"
            ? result.path
            : options.path,
        closed: closedDeferred.promise,
        dispose: async () => {
          if (closed) return;
          close({ reason: "disposed" });
          await this.mainRpcClient.request("fs-unwatch", {
            hostId: this.id,
            watchId: options.watchId,
          });
        },
      };
    } catch (error) {
      close({ reason: "watch-error", error });
      throw error;
    }
  }
}

function createDeferred<T>(): Deferred<T> {
  let resolve: (value: T) => void = () => {};
  let reject: (error: unknown) => void = () => {};
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });
  return { promise, resolve, reject };
}

function createControlledReadableStream(): ControlledReadableStream {
  let controller: ReadableStreamDefaultController<unknown> | null = null;
  let closed = false;
  return {
    stream: new ReadableStream({
      start(streamController) {
        controller = streamController;
      },
      cancel() {
        closed = true;
      },
    }),
    close() {
      if (closed) return;
      closed = true;
      controller?.close();
    },
    enqueue(chunk) {
      if (!closed) controller?.enqueue(chunk);
    },
    error(error) {
      if (closed) return;
      closed = true;
      controller?.error(error);
    },
  };
}

function toReadableBody(
  contents: BodyInit | ReadableStream<unknown> | Uint8Array,
): BodyInit | ReadableStream<Uint8Array> {
  if (contents instanceof ReadableStream) {
    return contents as ReadableStream<Uint8Array>;
  }
  if (typeof Blob !== "undefined" && contents instanceof Blob) {
    return contents.stream();
  }
  if (typeof contents === "string") return contents;
  return readableStreamFromBytes(contents);
}

async function readBodyToUint8Array(
  body: BodyInit | ReadableStream<Uint8Array>,
): Promise<Uint8Array> {
  return new Uint8Array(await new Response(body).arrayBuffer());
}

function readableStreamFromBytes(bytes: unknown): ReadableStream<Uint8Array> {
  const data =
    bytes instanceof Uint8Array
      ? bytes
      : Array.isArray(bytes)
        ? new Uint8Array(bytes)
        : new Uint8Array();
  return new ReadableStream({
    start(controller) {
      controller.enqueue(data);
      controller.close();
    },
  });
}

function serializeRemoteMetadata(value: unknown): Record<string, unknown> {
  if (!isRecord(value)) return {};
  return {
    birthtimeMs: value.birthtimeMs,
    ctimeMs: value.ctimeMs,
    ino: value.ino,
    isDirectory: () => value.isDirectory === true,
    isFile: () => value.isFile === true,
    isSymbolicLink: () => value.isSymbolicLink === true,
    mtimeMs: value.mtimeMs,
    size: value.size,
  };
}

function serializeRemoteDirectoryEntry(
  value: unknown,
): Record<string, unknown> {
  if (!isRecord(value)) {
    return {
      name: "",
      isDirectory: () => false,
      isFile: () => false,
      isSymbolicLink: () => false,
    };
  }
  return {
    name: typeof value.name === "string" ? value.name : "",
    isDirectory: () => value.isDirectory === true,
    isFile: () => value.isFile === true,
    isSymbolicLink: () => value.isSymbolicLink === true,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
