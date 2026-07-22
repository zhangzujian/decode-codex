// Restored from ref/webview/assets/codex-micro-layout-DsdS0fjo.js
// codex-micro-layout-DsdS0fjo chunk restored from the Codex webview bundle.
import { getCodexMicroCommand } from "../../../utils/electron-menu-shortcuts/codex-micro-commands";
import { findCodexMicroKeycapDefinition } from "./keycaps";
import type { CodexMicroLayoutSlot, CodexMicroResolvedAction } from "./types";
export function resolveCodexMicroAction(
  slot: CodexMicroLayoutSlot,
): CodexMicroResolvedAction | null {
  const keycap = findCodexMicroKeycapDefinition(slot.keycapId);
  if (slot.commandId != null) {
    const command = getCodexMicroCommand(slot.commandId);
    if (command != null)
      return {
        type: "command",
        command: command.id,
      };
    if (keycap.action.type === "custom-shortcut") return null;
  }
  if (keycap.id === "MIC")
    return {
      type: "push-to-talk",
    };
  switch (keycap.action.type) {
    case "command":
    case "composer-text":
    case "external-url":
      return keycap.action;
    case "custom-shortcut":
    case "named":
      return null;
  }
}
