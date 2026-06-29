// Restored from ref/.vite/build/worker.js
// Worker telemetry helpers for user propagation and log-sink failure reports.

type WorkerTelemetryInitOptions = {
  appVersion?: string;
  buildFlavor?: string;
  buildNumber?: string | null;
  codexAppSessionId?: string;
};

type WorkerTelemetryUserMessage = {
  authMethod: string | null;
  userId?: string | null;
  accountId?: string | null;
};

type WorkerTelemetryUserInfo = {
  authMethod: string;
  id?: string;
};

type DatadogLogSinkFailure = {
  reason?: string;
  type?: string;
  [key: string]: unknown;
};

type WorkerTelemetryErrorReporter = {
  reportNonFatal(message: string, details: Record<string, unknown>): void;
};

type WorkerTelemetrySinks = {
  datadog?: {
    setUserInfo(user: WorkerTelemetryUserInfo | null): void;
  };
  errorReporter?: WorkerTelemetryErrorReporter;
  sentry?: {
    setUser(
      authMethod: string | null,
      userId?: string | null,
      accountId?: string | null,
    ): void;
  };
};

type WorkerTelemetryOptions = {
  maxLogLevel?: string;
  sentryInitOptions: WorkerTelemetryInitOptions;
  sentryRewriteFramesRoot?: string;
  sinks?: WorkerTelemetrySinks;
  workerId: string;
};

export type WorkerTelemetryController = {
  readonly initMetadata: {
    buildInfo: {
      buildNumber?: string | null;
      version?: string;
    };
    codexAppSessionId?: string;
    env?: string;
    maxLogLevel?: string;
    platform: NodeJS.Platform;
    rewriteFramesRoot?: string;
    source: "codex-desktop";
    workerId: string;
  };
  getCurrentUser(): WorkerTelemetryUserInfo | null;
  reportDatadogLogSinkFailure(failure: DatadogLogSinkFailure): void;
  updateUser(
    message: WorkerTelemetryUserMessage,
  ): WorkerTelemetryUserInfo | null;
};

export function createWorkerTelemetryController({
  maxLogLevel,
  sentryInitOptions,
  sentryRewriteFramesRoot,
  sinks = {},
  workerId,
}: WorkerTelemetryOptions): WorkerTelemetryController {
  let currentUser: WorkerTelemetryUserInfo | null = null;

  return {
    initMetadata: {
      source: "codex-desktop",
      env: sentryInitOptions.buildFlavor,
      codexAppSessionId: sentryInitOptions.codexAppSessionId,
      platform: process.platform,
      buildInfo: {
        version: sentryInitOptions.appVersion,
        buildNumber: sentryInitOptions.buildNumber,
      },
      maxLogLevel,
      rewriteFramesRoot: sentryRewriteFramesRoot,
      workerId,
    },
    getCurrentUser() {
      return currentUser;
    },
    reportDatadogLogSinkFailure(failure) {
      sinks.errorReporter?.reportNonFatal("Datadog log sink failure", {
        kind: "datadog-log-sink-failure",
        tags: {
          failureType: failure.type,
          reason: failure.reason,
          workerId,
        },
        extra: { failure },
      });
    },
    updateUser(message) {
      sinks.sentry?.setUser(
        message.authMethod,
        message.userId,
        message.accountId,
      );
      currentUser = createWorkerTelemetryUserInfo(message);
      sinks.datadog?.setUserInfo(currentUser);
      return currentUser;
    },
  };
}

function createWorkerTelemetryUserInfo(
  message: WorkerTelemetryUserMessage,
): WorkerTelemetryUserInfo | null {
  if (message.authMethod == null) return null;
  return {
    id: message.userId ?? undefined,
    authMethod: message.authMethod,
  };
}
