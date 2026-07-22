// Restored from ref/webview/assets/codex-micro-layout-DsdS0fjo.js
// codex-micro-layout-DsdS0fjo chunk restored from the Codex webview bundle.
export type CodexMicroSlotId =
  "ACT06" | "ACT07" | "ACT08" | "ACT09" | "ACT10_ACT11" | "ACT12";
export type CodexMicroPhysicalSlotId =
  "ACT06" | "ACT07" | "ACT08" | "ACT09" | "ACT10" | "ACT11" | "ACT12";
export type CodexMicroKeycapSize = "single" | "double";
export type CodexMicroKeycapAction =
  | {
      type: "command";
      command: string;
    }
  | {
      type: "composer-text";
      label: string;
      text: string;
    }
  | {
      type: "external-url";
      label: string;
      url: string;
    }
  | {
      type: "custom-shortcut";
    }
  | {
      type: "named";
      label: string;
    };
export interface CodexMicroKeycapDefinition {
  id: string;
  icon: string;
  size: CodexMicroKeycapSize;
  action: CodexMicroKeycapAction;
}
export interface CodexMicroLayoutSlot {
  keycapId: string;
  commandId?: string | null;
  [key: string]: unknown;
}
export interface CodexMicroLayout {
  slots: Record<CodexMicroSlotId, CodexMicroLayoutSlot>;
  analogStick: Record<string, unknown>;
  [key: string]: unknown;
}
export type CodexMicroResolvedAction =
  | {
      type: "command";
      command: string;
    }
  | {
      type: "composer-text";
      label: string;
      text: string;
    }
  | {
      type: "external-url";
      label: string;
      url: string;
    }
  | {
      type: "push-to-talk";
    };
