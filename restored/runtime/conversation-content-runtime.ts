// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation rendering/search helpers shared by local conversation thread modules.
import type { ComponentType } from "react";
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
import {
  P as recordForkedConversationSourceRaw,
  cs as focusThreadSourceFrameRaw,
  ho as resolveServiceTierForModelRaw,
  qo as diffSourceSignal,
  u as localConversationMessages,
  un as waitForThreadLayoutTickRaw,
  Bo as conversationSearchResultSignal,
  Cs as setContentSearchMatchIdAttributeRaw,
  Di as groupConversationSearchMatchesByContentUnitKeyRaw,
  Ho as activeConversationSearchMatchSignal,
  Oi as initContentSearchMatchAttributeRuntimeRaw,
  Ss as initContentSearchRuntimeRaw,
  _s as activeContentSearchMatchClassName,
  ts as initConversationSearchSignalsRaw,
  vs as clearContentSearchHighlightsRaw,
  ws as shouldRefreshSearchHighlightMutationsRaw,
  xs as highlightContentSearchMatchesRaw,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  Mt as registerContentSearchRevealHandlerRaw,
  Nt as scrollContentSearchItemIntoViewRaw,
  Pt as revealContentSearchItemElementRaw,
  ct as updateCollapsedTurnsByConversationRaw,
} from "../boundaries/current-ref/profile-page-producer";
import {
  Dr as createLazyNavigationRailComponentRaw,
  Er as initLazyNavigationRailRuntimeRaw,
} from "../boundaries/current-ref/appgen-library-hot-producer";

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

export type ForkedConversationSource = {
  sourceConversationId: string;
  targetConversationId: string;
};

export type CollapsedTurnsUpdate = {
  collapsed: boolean;
  conversationId: string;
  current: unknown;
  turnId: string;
};

export type ContentSearchRevealRequest = {
  conversationId: string;
  itemId: string;
  turnKey: string;
};

export type ContentSearchRevealHandler = {
  revealItem(request: ContentSearchRevealRequest): Promise<void> | void;
};

export type ContentSearchMatch = {
  id: string;
};

export type ContentSearchHighlightResult = {
  matches: Element[];
};

export {
  activeContentSearchMatchClassName,
  activeConversationSearchMatchSignal,
  conversationSearchResultSignal,
  diffSourceSignal,
  localConversationMessages,
};

export function initThreadFindPreviewRuntime(): void {
  initConversationPromptContextRuntime();
  initGitActionDirectiveRuntime();
  initThreadFindResourcePreviewRuntime();
}

export function initConversationContentSearchRuntime(): void {
  initContentSearchRuntimeRaw();
  initConversationSearchSignalsRaw();
  initContentSearchMatchAttributeRuntimeRaw();
}

export function initLazyNavigationRailRuntime(): void {
  initLazyNavigationRailRuntimeRaw();
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

export function recordForkedConversationSource(
  scope: unknown,
  source: ForkedConversationSource,
): void {
  recordForkedConversationSourceRaw(scope, source);
}

export function focusThreadSourceFrame(
  scope: unknown,
  frameId: string,
  contextId: string,
): void {
  focusThreadSourceFrameRaw(scope, frameId, contextId);
}

export function resolveServiceTierForModel(
  scope: unknown,
  hostId: string,
  model: unknown,
): Promise<unknown> {
  return resolveServiceTierForModelRaw(scope, hostId, model) as Promise<unknown>;
}

export function waitForThreadLayoutTick(): Promise<void> {
  return waitForThreadLayoutTickRaw() as Promise<void>;
}

export function registerContentSearchRevealHandler(
  scope: unknown,
  conversationId: string,
  handler: ContentSearchRevealHandler,
): () => void {
  return registerContentSearchRevealHandlerRaw(
    scope,
    conversationId,
    handler,
  ) as () => void;
}

export function scrollContentSearchItemIntoView(
  itemId: string,
  behavior: ScrollBehavior,
): boolean {
  return scrollContentSearchItemIntoViewRaw(itemId, behavior);
}

export function revealContentSearchItemElement(
  itemId: string,
  behavior: ScrollBehavior,
): Promise<void> | void {
  return revealContentSearchItemElementRaw(itemId, behavior) as
    | Promise<void>
    | void;
}

export function updateCollapsedTurnsByConversation(
  update: CollapsedTurnsUpdate,
): unknown {
  return updateCollapsedTurnsByConversationRaw(update);
}

export function clearContentSearchHighlights(
  target: Element,
  options: { includeShadowRoots: boolean },
): void {
  clearContentSearchHighlightsRaw(target, options);
}

export function groupConversationSearchMatchesByContentUnitKey(
  matches: readonly ContentSearchMatch[],
): Map<string, ContentSearchMatch[]> {
  return groupConversationSearchMatchesByContentUnitKeyRaw(matches) as Map<
    string,
    ContentSearchMatch[]
  >;
}

export function highlightContentSearchMatches(options: {
  includeShadowRoots: boolean;
  maxMatches: number;
  query: string;
  target: Element;
}): ContentSearchHighlightResult {
  return highlightContentSearchMatchesRaw(options) as ContentSearchHighlightResult;
}

export function setContentSearchMatchIdAttribute(options: {
  element: Element;
  matchId: string;
}): void {
  setContentSearchMatchIdAttributeRaw(options);
}

export function shouldRefreshSearchHighlightMutations(
  mutationRecords: readonly MutationRecord[],
): boolean {
  return shouldRefreshSearchHighlightMutationsRaw(mutationRecords);
}

export function createLazyNavigationRailComponent<TProps>(
  loader: () => Promise<ComponentType<TProps>>,
): ComponentType<TProps> {
  return createLazyNavigationRailComponentRaw(loader) as ComponentType<TProps>;
}
