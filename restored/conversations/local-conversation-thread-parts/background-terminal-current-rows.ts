// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Current background terminal row helpers for local conversation panels.

import {
  createBackgroundTerminalProcessRecord,
  type BackgroundTerminalProcessRecord,
  type BackgroundTerminalSnapshot,
} from "./background-terminal-state";

interface BackgroundTerminalCurrentRow<
  Terminal extends BackgroundTerminalSnapshot,
  Metrics,
> {
  metrics: Metrics | null;
  process: BackgroundTerminalProcessRecord;
  terminal: Terminal;
}

export function createBackgroundTerminalCurrentRows<
  Terminal extends BackgroundTerminalSnapshot,
  Metrics,
  ChildProcess,
>({
  backgroundTerminals,
  childProcesses,
  conversationId,
  hostId,
  processSnapshotTimeMs,
  resolveProcessMetrics,
}: {
  backgroundTerminals: Terminal[];
  childProcesses: ChildProcess[] | undefined;
  conversationId: string | null | undefined;
  hostId: string;
  processSnapshotTimeMs: number;
  resolveProcessMetrics: (
    process: BackgroundTerminalProcessRecord,
    childProcesses: ChildProcess[] | undefined,
    processSnapshotTimeMs: number,
  ) => Metrics | null;
}): Array<BackgroundTerminalCurrentRow<Terminal, Metrics>> {
  if (conversationId == null) {
    return [];
  }

  return backgroundTerminals.map((terminal) => {
    let process = createBackgroundTerminalProcessRecord({
      conversationId,
      hostId,
      terminal,
    });
    return {
      metrics: resolveProcessMetrics(
        process,
        childProcesses,
        processSnapshotTimeMs,
      ),
      process,
      terminal,
    };
  });
}
