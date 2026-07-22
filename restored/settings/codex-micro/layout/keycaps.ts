// Restored from ref/webview/assets/codex-micro-layout-DsdS0fjo.js
// codex-micro-layout-DsdS0fjo chunk restored from the Codex webview bundle.
import { codexMicroKeycapDefinitions } from "./keycap-data";
import type {
  CodexMicroKeycapDefinition,
  CodexMicroKeycapSize,
  CodexMicroSlotId,
} from "./types";
let keycapDefinitions: CodexMicroKeycapDefinition[] = [];
export function initCodexMicroKeycaps(): void {
  keycapDefinitions = codexMicroKeycapDefinitions;
}
export function listCompatibleCodexMicroKeycaps(
  slotId: CodexMicroSlotId,
): CodexMicroKeycapDefinition[] {
  const size: CodexMicroKeycapSize =
    slotId === "ACT10_ACT11" ? "double" : "single";
  return keycapDefinitions.filter((keycap) => keycap.size === size);
}
export function findCodexMicroKeycapDefinition(
  keycapId: string,
): CodexMicroKeycapDefinition {
  return (
    keycapDefinitions.find((keycap) => keycap.id === keycapId) ??
    keycapDefinitions[0]!
  );
}
