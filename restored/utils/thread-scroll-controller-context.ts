// Restored from ref/webview/assets/thread-scroll-controller-context-value-7UJOrKol.js
// thread-scroll-controller-context-value-7UJOrKol chunk restored from the Codex webview bundle.
import React from "react";

export type ThreadScrollController = unknown;
export const threadScrollControllerContext =
  React.createContext<ThreadScrollController | null>(null);

export function initThreadScrollControllerContextChunk() {}

export function useThreadScrollController(): ThreadScrollController {
  const controller = React.use(threadScrollControllerContext);
  if (controller == null) {
    throw new Error(
      "useThreadScrollController must be used within ThreadScrollLayout",
    );
  }
  return controller;
}
