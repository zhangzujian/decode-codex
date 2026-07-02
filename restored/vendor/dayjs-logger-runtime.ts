// Restored from ref/webview/assets/chunk-AGHRB4JF-DVNPU_Qo.js
// Shared semantic implementation for the Day.js core + Mermaid logger wrapper.

import dayjs from "dayjs";

export type DayjsCommonJsModule = typeof dayjs;
export type NamedTarget = object;
export type GetterMap = Record<string, () => unknown>;
export type MermaidLogLevelName =
  | "trace"
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";
export type MermaidLogLevel = MermaidLogLevelName | number;
export type MermaidLogger = Record<
  MermaidLogLevelName,
  (...args: unknown[]) => void
>;

const logLevelPriority: Record<MermaidLogLevelName, number> = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5,
};

export function loadDayjsCommonJsModule(): DayjsCommonJsModule {
  return dayjs;
}

export function defineName<TTarget extends NamedTarget>(
  target: TTarget,
  name: string,
): TTarget {
  return Object.defineProperty(target, "name", {
    value: name,
    configurable: true,
  });
}

export function defineExportGetters(
  target: Record<PropertyKey, unknown>,
  getters: GetterMap,
): void {
  for (const key in getters) {
    Object.defineProperty(target, key, {
      get: getters[key],
      enumerable: true,
    });
  }
}

const noop = (name: MermaidLogLevelName) =>
  defineName((..._args: unknown[]) => {}, name);

export const mermaidLogger: MermaidLogger = {
  trace: noop("trace"),
  debug: noop("debug"),
  info: noop("info"),
  warn: noop("warn"),
  error: noop("error"),
  fatal: noop("fatal"),
};

const formatLogPrefix = defineName(
  (level: string): string => `%c${dayjs().format("ss.SSS")} : ${level} : `,
  "format",
);

function resolveLogLevel(level: MermaidLogLevel = "fatal"): number {
  if (typeof level === "number") return level;

  const normalizedLevel = level.toLowerCase() as MermaidLogLevelName;
  return logLevelPriority[normalizedLevel] ?? logLevelPriority.fatal;
}

function bindConsoleMethod(
  method: "debug" | "error" | "info" | "log" | "warn",
  level: string,
  cssColor: string,
  terminalColor: string,
): (...args: unknown[]) => void {
  const consoleMethod = console[method] ?? console.log;
  return consoleMethod
    ? consoleMethod.bind(console, formatLogPrefix(level), cssColor)
    : console.log.bind(console, terminalColor, formatLogPrefix(level));
}

export const setMermaidLogLevel = defineName(
  (level: MermaidLogLevel = "fatal"): void => {
    const priority = resolveLogLevel(level);

    mermaidLogger.trace = () => {};
    mermaidLogger.debug = () => {};
    mermaidLogger.info = () => {};
    mermaidLogger.warn = () => {};
    mermaidLogger.error = () => {};
    mermaidLogger.fatal = () => {};

    if (priority <= logLevelPriority.fatal) {
      mermaidLogger.fatal = bindConsoleMethod(
        "error",
        "FATAL",
        "color: orange",
        "\x1B[35m",
      );
    }
    if (priority <= logLevelPriority.error) {
      mermaidLogger.error = bindConsoleMethod(
        "error",
        "ERROR",
        "color: orange",
        "\x1B[31m",
      );
    }
    if (priority <= logLevelPriority.warn) {
      mermaidLogger.warn = bindConsoleMethod(
        "warn",
        "WARN",
        "color: orange",
        "\x1B[33m",
      );
    }
    if (priority <= logLevelPriority.info) {
      mermaidLogger.info = bindConsoleMethod(
        "info",
        "INFO",
        "color: lightblue",
        "\x1B[34m",
      );
    }
    if (priority <= logLevelPriority.debug) {
      mermaidLogger.debug = bindConsoleMethod(
        "debug",
        "DEBUG",
        "color: lightgreen",
        "\x1B[32m",
      );
    }
    if (priority <= logLevelPriority.trace) {
      mermaidLogger.trace = bindConsoleMethod(
        "debug",
        "TRACE",
        "color: lightgreen",
        "\x1B[32m",
      );
    }
  },
  "setLogLevel",
);

export function initDayjsLoggerRuntime(): void {}
