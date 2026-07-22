// Restored from ref/webview/assets/home-ambient-suggestions-content-QPiHWv2t.js
// Typed inputs for ambient plugin tiles and mail-provider suggestions.

import type { ReactNode } from "react";

import type { InstallablePlugin } from "../body/types";

export interface AmbientPluginSuggestion {
  analyticsType?: string | null;
  description: string;
  homeAction: { plugin: InstallablePlugin };
  id: string;
  prompt: string;
  source: string;
  title: string;
}

export interface AmbientSuggestionPluginTilesProps {
  appByAmbientSuggestionAppId?: ReadonlyMap<string, unknown> | null;
  composerMode: unknown;
  disabled?: boolean;
  dismissAction: {
    ariaLabel: string;
    disabled?: boolean;
    onClick: () => void;
  };
  hostId: string | null;
  leadingCard?: ReactNode;
  suggestions: AmbientPluginSuggestion[];
}

export type MailProvider = "google" | "microsoft" | "other";

export interface IntlShapeLike {
  formatMessage(message: any, values?: Record<string, unknown>): string;
}

export interface BuildMailProviderSuggestionGroupsOptions {
  intl: IntlShapeLike;
  mailProvider?: MailProvider;
  plugins: InstallablePlugin[];
}
