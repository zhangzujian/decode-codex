// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pull-request side-panel positioning and description markdown runtime helpers.
import {
  Cl as pullRequestCurrentBranchSignal,
  _c as threadSidePanelPositionControllers,
  bc as activateThreadSidePanelPosition,
  tc as initThreadSidePanelRuntimeChunkRaw,
  vc as getExistingThreadSidePanelPosition,
  xl as initPullRequestCurrentBranchSignalChunkRaw,
  yc as initThreadSidePanelPositioningChunkRaw,
} from "../vendor/projects-app-shared-runtime";
import {
  initPullRequestDescriptionMarkdownRendererChunk as initPullRequestDescriptionMarkdownRendererChunkRaw,
  initPullRequestDescriptionMarkdownParserChunk as initPullRequestDescriptionMarkdownParserChunkRaw,
  parsePullRequestDescriptionMarkdown,
  PullRequestDescriptionMarkdown,
} from "../boundaries/current-ref/pull-request-description-markdown-producer";

export {
  activateThreadSidePanelPosition,
  getExistingThreadSidePanelPosition,
  parsePullRequestDescriptionMarkdown,
  PullRequestDescriptionMarkdown,
  pullRequestCurrentBranchSignal,
  threadSidePanelPositionControllers,
};

export function initPullRequestCurrentBranchRuntime(): void {
  initPullRequestCurrentBranchSignalChunkRaw();
}

export function initPullRequestDescriptionMarkdownRuntime(): void {
  initPullRequestDescriptionMarkdownRendererChunkRaw();
  initPullRequestDescriptionMarkdownParserChunkRaw();
}

export function initPullRequestSidePanelPositionRuntime(): void {
  initThreadSidePanelRuntimeChunkRaw();
  initThreadSidePanelPositioningChunkRaw();
}
