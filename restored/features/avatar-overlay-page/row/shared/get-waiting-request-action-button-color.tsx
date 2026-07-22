// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import type { WaitingRequestAction } from "./types";

export function getWaitingRequestActionButtonColor(
  tone: WaitingRequestAction["tone"],
): "secondary" | "danger" {
  switch (tone) {
    case "primary":
      return "secondary";
    case "danger":
      return "danger";
    case "secondary":
      return "secondary";
  }
}
