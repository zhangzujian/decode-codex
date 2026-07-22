// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import type { QuestionOption, WaitingRequestAction } from "./types";

export function mapQuestionOptionToAction(
  option: QuestionOption,
  index: number,
): WaitingRequestAction {
  return {
    intent: "open",
    label: option.label,
    tone: index === 0 ? "primary" : "secondary",
    questionOption: option,
  };
}
