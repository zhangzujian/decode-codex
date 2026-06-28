// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Conversation artifact rendering and output collection runtime helpers.
import {
  collectAssistantOutputArtifacts,
  collectConversationEndResourcePaths,
  initConversationArtifactRuntime as initConversationArtifactRuntimeRaw,
  initMarkdownResourceRuntime,
  renderConversationTurnForArtifacts as renderConversationTurnForArtifactsRaw,
  type AssistantOutputArtifactsOptions,
  type RenderConversationTurnOptions,
} from "../../runtime/conversation-artifact-runtime";

export function renderLocalConversationTurn<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return renderConversationTurnForArtifactsRaw<TTurn>(turn, requests, options);
}

export function renderLocalConversationTurnForArtifacts<TTurn = unknown>(
  turn: unknown,
  requests: readonly unknown[] = [],
  options?: RenderConversationTurnOptions,
): TTurn {
  return renderLocalConversationTurn<TTurn>(turn, requests, options);
}

export function collectLocalAssistantOutputArtifacts<TArtifact = unknown>(
  options: AssistantOutputArtifactsOptions,
): TArtifact[] {
  return collectAssistantOutputArtifacts<TArtifact>(options);
}

export function collectLocalConversationEndResourcePaths(
  artifacts: readonly unknown[],
): string[] {
  return collectConversationEndResourcePaths(artifacts);
}

export function initLocalConversationArtifactRuntime(): void {
  initConversationArtifactRuntimeRaw();
}

export function initLocalConversationMarkdownResourceRuntime(): void {
  initMarkdownResourceRuntime();
}
