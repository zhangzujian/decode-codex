// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation artifact renderers and markdown-resource helpers.
import {
  Hg as collectEndResourcePathsRaw,
  Nv as initConversationArtifactRuntimeRaw,
  Pv as renderConversationTurnForArtifactsRaw,
  Ug as collectAssistantOutputArtifactsRaw,
  Wg as initMarkdownResourceHelpersRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type RenderConversationTurnOptions = {
  isBackgroundSubagentsEnabled?: boolean;
  preserveServerUserMessages?: boolean;
};

export type AssistantOutputArtifactsOptions = {
  assistantContent: string | null;
  isAppgenEndCardEnabled?: boolean;
  projectlessOutputDirectory?: string | null;
  turn: unknown;
};

export function renderConversationTurnForArtifacts<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return (
    options === undefined
      ? renderConversationTurnForArtifactsRaw(turn, requests)
      : renderConversationTurnForArtifactsRaw(turn, requests, options)
  ) as TTurn;
}

export function collectAssistantOutputArtifacts<TArtifact = unknown>(
  options: AssistantOutputArtifactsOptions,
): TArtifact[] {
  return collectAssistantOutputArtifactsRaw(options) as TArtifact[];
}

export function collectConversationEndResourcePaths(
  artifacts: readonly unknown[],
): string[] {
  return collectEndResourcePathsRaw(artifacts) as string[];
}

export function initConversationArtifactRuntime(): void {
  initConversationArtifactRuntimeRaw();
}

export function initMarkdownResourceRuntime(): void {
  initMarkdownResourceHelpersRaw();
}
