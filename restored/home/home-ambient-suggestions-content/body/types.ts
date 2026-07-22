// Restored from ref/webview/assets/home-ambient-suggestions-content-QPiHWv2t.js
// Typed public inputs for the split ambient suggestion body and actions.

import type { ReactNode } from "react";

export interface HomeAmbientSuggestionsBodyProps {
  domain: string;
  generatedSuggestionsEnabled: boolean;
  hostId: string | null;
  onLocalConversationCreated: (conversation: unknown) => void | Promise<void>;
  projectRoot: string | null;
  selectedModel: unknown;
  selectedModelDisplayName: string | null;
}

export interface ConnectAppsLeadingCardOptions {
  dismissAction?: unknown;
  label?: ReactNode;
  navigate: (path: string) => void;
}

export interface InstallablePlugin {
  displayName?: string | null;
  marketplaceDisplayName?: string | null;
  marketplaceName: string;
  plugin: {
    enabled: boolean;
    id: string;
    installed: boolean;
    name?: string | null;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface FindInstallablePluginOptions {
  pluginName: string | null;
  plugins: InstallablePlugin[];
  refetchPlugins: () => Promise<{ availablePlugins: InstallablePlugin[] }>;
}

export interface InstallAmbientSuggestionPluginOptions {
  forceReloadPlugins: () => Promise<unknown>;
  hostId: string | null;
  invalidateSkills: () => void;
  plugin: InstallablePlugin | null;
}

export interface AppendSkillMentionOptions {
  hostId: string | null;
  prompt: string;
  skillName: string | null;
  skillsResponse?: any;
}

export interface StartAmbientSuggestionConversationOptions {
  agentMode: unknown;
  collaborationMode: unknown;
  hostId: string | null;
  onLocalConversationCreated: (conversation: unknown) => void | Promise<void>;
  permissionProfileId: string | null;
  projectRoot: string;
  serviceTier: unknown;
  shouldSendPermissionOverrides: boolean;
  prompt: string;
}

export interface AmbientSuggestionAnalyticsSource {
  analyticsType?: string | null;
  source: string;
}
