// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Runtime helpers for resuming local conversations.
import {
  ho as resolveConversationServiceTierRaw,
  mo as initProjectsAppSharedProducerRaw,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  initThreadFindNavigationRail as initProfilePageProducerRaw,
  Nf as useProfileConversationAgentModeRaw,
} from "../boundaries/current-ref/profile-page-producer";

export type ProfileConversationAgentModeState = {
  activeMode?: {
    settings: {
      model?: unknown | null;
    };
  } | null;
};

export function useProfileConversationAgentMode(
  conversationId: string | null | undefined,
): ProfileConversationAgentModeState {
  return useProfileConversationAgentModeRaw(
    conversationId,
  ) as ProfileConversationAgentModeState;
}

export function resolveConversationServiceTier(
  scope: unknown,
  hostId: unknown,
  model: unknown,
): Promise<unknown> {
  return resolveConversationServiceTierRaw(scope, hostId, model) as Promise<unknown>;
}

export function initConversationResumeRuntime(): void {
  initProjectsAppSharedProducerRaw();
  initProfilePageProducerRaw();
}
