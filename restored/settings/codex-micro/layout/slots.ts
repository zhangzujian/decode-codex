// Restored from ref/webview/assets/codex-micro-layout-DsdS0fjo.js
// codex-micro-layout-DsdS0fjo chunk restored from the Codex webview bundle.
import type { CodexMicroPhysicalSlotId, CodexMicroSlotId } from "./types";
export function normalizeCodexMicroSlotId(
  slotId: CodexMicroPhysicalSlotId,
): CodexMicroSlotId | null {
  switch (slotId) {
    case "ACT06":
    case "ACT07":
    case "ACT08":
    case "ACT09":
    case "ACT12":
      return slotId;
    case "ACT10":
    case "ACT11":
      return "ACT10_ACT11";
    default:
      return null;
  }
}
