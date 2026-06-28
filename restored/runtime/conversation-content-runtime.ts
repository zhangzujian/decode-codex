// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation rendering/search helpers shared by local conversation thread modules.
import {
  Mv as isRenderableConversationTurnRaw,
  Sk as normalizeMarkdownPlainTextRaw,
  UR as isAbsoluteOrWindowsPathRaw,
  Sj as getPathBasenameRaw,
  bF as initConversationPromptContextRuntime,
  fh as initGitActionDirectiveRuntime,
  ph as parseGitActionDirectivesRaw,
  wj as initThreadFindResourcePreviewRuntime,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type RenderableConversationTurnOptions = {
  isBackgroundSubagentsEnabled?: boolean;
};

export type GitActionDirective = {
  branch?: string;
  cwd?: string;
  isDraft?: boolean;
  type: "commit" | "create-branch" | "create-pr" | "push" | "stage";
  url?: string;
};

export function initThreadFindPreviewRuntime(): void {
  initConversationPromptContextRuntime();
  initGitActionDirectiveRuntime();
  initThreadFindResourcePreviewRuntime();
}

export function isRenderableConversationTurn(
  turn: unknown,
  requests: readonly unknown[],
  options: RenderableConversationTurnOptions,
): boolean {
  return isRenderableConversationTurnRaw(turn, requests, options);
}

export function normalizeMarkdownPlainText(text: string): string {
  return normalizeMarkdownPlainTextRaw(text);
}

export function getPathBasename(path: string): string {
  return getPathBasenameRaw(path);
}

export function isAbsoluteOrWindowsPath(path: string): boolean {
  return isAbsoluteOrWindowsPathRaw(path);
}

export function parseGitActionDirectives(
  assistantContent: string | null,
): GitActionDirective[] {
  return parseGitActionDirectivesRaw(
    assistantContent ?? "",
  ) as GitActionDirective[];
}
