// Restored from ref/webview/assets/codex-micro-layout-DsdS0fjo.js
// codex-micro-layout-DsdS0fjo chunk restored from the Codex webview bundle.
import {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAc as defaultCodexMicroLayout,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzNc as codexMicroLayoutSchema,
} from "../../../runtime/current-app-initial/shared-query-rpc-runtime";
import type {
  CodexMicroLayout,
  CodexMicroLayoutSlot,
  CodexMicroSlotId,
} from "./types";
const layoutSlotIds: CodexMicroSlotId[] = [
  "ACT06",
  "ACT07",
  "ACT08",
  "ACT09",
  "ACT10_ACT11",
  "ACT12",
];
export function swapCodexMicroLayoutSlot<T extends CodexMicroLayout>(
  layout: T,
  slotId: CodexMicroSlotId,
  nextSlot: CodexMicroLayoutSlot,
): T {
  const slots = {
    ...layout.slots,
  };
  const previousSlot = slots[slotId];
  const duplicateSlotId = layoutSlotIds.find(
    (candidate) =>
      candidate !== slotId && slots[candidate].keycapId === nextSlot.keycapId,
  );
  slots[slotId] = nextSlot;
  if (duplicateSlotId != null) slots[duplicateSlotId] = previousSlot;
  return {
    ...layout,
    slots,
  };
}
export function parseCodexMicroLayout(input: unknown): CodexMicroLayout {
  return (
    (
      codexMicroLayoutSchema as {
        safeParse(value: unknown): {
          data?: CodexMicroLayout;
        };
      }
    ).safeParse(input).data ?? (defaultCodexMicroLayout as CodexMicroLayout)
  );
}
export function updateCodexMicroAnalogStick<T extends CodexMicroLayout>(
  layout: T,
  direction: string,
  action: unknown,
): T {
  return {
    ...layout,
    analogStick: {
      ...layout.analogStick,
      [direction]: action,
    },
  };
}
