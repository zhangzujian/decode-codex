// Restored from ref/webview/assets/codex-micro-commands-CIuhuKZZ.js
import {
  CODEX_COMMANDS,
  initElectronMenuShortcuts,
  isCommandAvailableInHost,
} from "./current-runtime";
type CodexMicroCommand = (typeof CODEX_COMMANDS)[number];
const codexMicroCommands: CodexMicroCommand[] = CODEX_COMMANDS.filter(
  (command) =>
    command.kind === "webview" && isCommandAvailableInHost(command, "electron"),
);
function getCodexMicroCommand(commandId: string): CodexMicroCommand | null {
  const normalizedCommandId = commandId === "newThread" ? "newTask" : commandId;
  return (
    codexMicroCommands.find((command) => command.id === normalizedCommandId) ??
    null
  );
}
function initCodexMicroCommands(): void {
  initElectronMenuShortcuts();
}
export { getCodexMicroCommand, initCodexMicroCommands, codexMicroCommands };
