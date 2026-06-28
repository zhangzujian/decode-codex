// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Path, markdown-resource, and output-artifact helpers for conversation summaries.
import {
  Aj as resolveWorkspacePathFromCwdRaw,
  DL as normalizeWorkspacePathRaw,
  Hv as collectTurnFileArtifactsRaw,
  Kg as initNormalizedPathUtilities,
  Oj as normalizeArtifactPathKeyRaw,
  Qg as initArtifactPathDetectionHelpers,
  Uv as initMarkdownArtifactHelpers,
  bF as initConversationPromptContextRuntime,
  bR as isFileUrlLikeTargetRaw,
  e_ as isFileReferencePathRaw,
  lD as initMarkdownArtifactRenderingHelpers,
  qg as isResourcePathInsideProjectlessOutputRaw,
  uD as mapTurnStatusToOutputStatusRaw,
  vR as normalizeHrefRaw,
  wj as initArtifactPreviewRuntime,
} from "../vendor/appg-thread-shared-runtime";

export type ProjectlessResourcePathOptions = {
  cwd: string | null;
  projectlessOutputDirectory: string | null;
  resourcePath: string;
};

export function initOutputArtifactRuntime(): void {
  initConversationPromptContextRuntime();
  initArtifactPathDetectionHelpers();
  initMarkdownArtifactHelpers();
  initMarkdownArtifactRenderingHelpers();
  initNormalizedPathUtilities();
  initArtifactPreviewRuntime();
}

export function resolveWorkspacePathFromCwd(
  cwd: string,
  path: string,
): string {
  return resolveWorkspacePathFromCwdRaw(cwd, path);
}

export function normalizeWorkspacePath(path: string): string {
  return normalizeWorkspacePathRaw(path);
}

export function collectTurnFileArtifacts<TArtifacts = unknown>(
  turn: unknown,
): TArtifacts {
  return collectTurnFileArtifactsRaw(turn) as TArtifacts;
}

export function normalizeArtifactPathKey(path: string): string {
  return normalizeArtifactPathKeyRaw(path);
}

export function isFileUrlLikeTarget(target: string): boolean {
  return isFileUrlLikeTargetRaw(target);
}

export function isFileReferencePath(path: string): boolean {
  return isFileReferencePathRaw(path);
}

export function isResourcePathInsideProjectlessOutput(
  options: ProjectlessResourcePathOptions,
): boolean {
  return isResourcePathInsideProjectlessOutputRaw(options);
}

export function mapTurnStatusToOutputStatus(status: string): string {
  return mapTurnStatusToOutputStatusRaw(status);
}

export function normalizeHref(href: string): string {
  return normalizeHrefRaw(href);
}
