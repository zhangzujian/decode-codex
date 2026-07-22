// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
import type { PdfObjectReference } from "./types";

export function isPdfObjectReference(
  value: unknown,
): value is PdfObjectReference {
  return (
    typeof value === "object" &&
    value != null &&
    "num" in value &&
    typeof value.num === "number" &&
    "gen" in value &&
    typeof value.gen === "number"
  );
}
