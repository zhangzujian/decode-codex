// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Background terminal state helpers for local conversation terminal summaries.

interface ComparableBackgroundTerminal {
  command: string;
  cwd: string | null | undefined;
  id: string;
  turnId?: string | null;
}

interface BackgroundTerminalProcessSnapshot {
  command: string;
  cwd: string | null | undefined;
  itemId: string;
  processId: string;
  startedAtMs: number;
  turnId?: string | null;
}

export type BackgroundTerminalStatus =
  | "running"
  | "not-found"
  | "starting"
  | "stopped"
  | "stopping";

export interface BackgroundTerminalSnapshot
  extends ComparableBackgroundTerminal {
  processId: string;
  startedAtMs: number;
}

interface BackgroundTerminalActionState {
  status: BackgroundTerminalStatus;
}

interface BackgroundTerminalStatusRow {
  metrics?: unknown | null;
}

export interface BackgroundTerminalRow<
  Terminal extends ComparableBackgroundTerminal = ComparableBackgroundTerminal,
> {
  terminal: Terminal;
}

export interface BackgroundTerminalProcessRecord {
  chatTitle: null;
  command: string;
  conversationId: string;
  cwd: string | null | undefined;
  hostId: string;
  id: string;
  itemId: string;
  osPid: null;
  processId: string;
  source: "background-terminal";
  startedAtMs: number;
  stopAction: "kill-child-process";
  turnId?: string | null;
}

export function hasBackgroundTerminalRow(
  row: unknown,
): row is BackgroundTerminalRow {
  return typeof row === "object" && row !== null && "terminal" in row;
}

export function hasMatchingBackgroundTerminal<
  Terminal extends ComparableBackgroundTerminal,
>(
  backgroundTerminals: Terminal[],
  candidateTerminal: ComparableBackgroundTerminal,
): boolean {
  return backgroundTerminals.some(
    (backgroundTerminal) =>
      backgroundTerminal.id === candidateTerminal.id ||
      (backgroundTerminal.command === candidateTerminal.command &&
        backgroundTerminal.cwd === candidateTerminal.cwd &&
        backgroundTerminal.turnId === candidateTerminal.turnId),
  );
}

export function createBackgroundTerminalSnapshot(
  process: BackgroundTerminalProcessSnapshot,
): BackgroundTerminalSnapshot {
  return {
    command: process.command,
    cwd: process.cwd,
    id: process.itemId,
    processId: process.processId,
    startedAtMs: process.startedAtMs,
    turnId: process.turnId,
  };
}

export function resolveBackgroundTerminalStatus(
  row: BackgroundTerminalStatusRow,
  actionState: BackgroundTerminalActionState | null | undefined,
  hasChildProcesses: boolean,
): BackgroundTerminalStatus {
  return actionState == null
    ? !hasChildProcesses || row.metrics != null
      ? "running"
      : "not-found"
    : actionState.status;
}

export function createBackgroundTerminalProcessRecord({
  conversationId,
  hostId,
  terminal,
}: {
  conversationId: string;
  hostId: string;
  terminal: BackgroundTerminalSnapshot;
}): BackgroundTerminalProcessRecord {
  return {
    chatTitle: null,
    command: terminal.command,
    conversationId,
    cwd: terminal.cwd,
    hostId,
    id: `${conversationId}:${terminal.turnId ?? "unknown"}:${terminal.id}`,
    itemId: terminal.id,
    osPid: null,
    processId: terminal.processId,
    source: "background-terminal",
    startedAtMs: terminal.startedAtMs,
    stopAction: "kill-child-process",
    turnId: terminal.turnId,
  };
}
