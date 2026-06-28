// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Conversation artifact rendering and output collection runtime helpers.
import {
  Hg as collectEndResourcePathsRaw,
  Nv as initConversationArtifactRuntimeRaw,
  Pv as renderConversationTurnForArtifactsRaw,
  Ug as collectAssistantOutputArtifactsRaw,
  Wg as initMarkdownResourceHelpersRaw,
} from "../../boundaries/current-ref/appg-thread-shared-producer";

type RenderConversationTurnOptions = {
  isBackgroundSubagentsEnabled?: boolean;
  preserveServerUserMessages?: boolean;
};

type AssistantOutputArtifactsOptions = {
  assistantContent: string | null;
  isAppgenEndCardEnabled?: boolean;
  projectlessOutputDirectory?: string | null;
  turn: unknown;
};

export function renderLocalConversationTurnForArtifacts<TTurn = unknown>(
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

export function collectLocalAssistantOutputArtifacts<TArtifact = unknown>(
  options: AssistantOutputArtifactsOptions,
): TArtifact[] {
  return collectAssistantOutputArtifactsRaw(options) as TArtifact[];
}

export function collectLocalConversationEndResourcePaths(
  artifacts: readonly unknown[],
): string[] {
  return collectEndResourcePathsRaw(artifacts) as string[];
}

export function initLocalConversationArtifactRuntime(): void {
  initConversationArtifactRuntimeRaw();
}

export function initLocalConversationMarkdownResourceRuntime(): void {
  initMarkdownResourceHelpersRaw();
}
