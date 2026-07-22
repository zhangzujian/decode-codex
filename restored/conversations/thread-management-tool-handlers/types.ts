// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for Codex thread-management tool handlers.

export type AppScope = {
  get: (...args: unknown[]) => any;
  set: (...args: unknown[]) => void;
};

export type ToolResult = {
  contentItems: { type: string; text: string }[];
  success: boolean;
};

export type CreateThreadTarget =
  | { type: "projectless"; directoryName?: string }
  | { type: "project"; projectId: string; environment?: unknown };

export type ResolvedCreateThreadTarget =
  | { type: "projectless"; directoryName?: string }
  | { type: "project"; projectId: string; environment?: unknown }
  | {
      type: "remoteProject";
      projectId: string;
      hostId: string;
      path: string;
      environment?: unknown;
    };

export type BackgroundProject = {
  projectId: string;
  projectKind: "local" | "remote";
  hostId: string;
  path: string;
};

export type AvailableModel = {
  model: string;
  description?: string;
  supportedReasoningEfforts: Array<{ reasoningEffort: string }>;
};

export type GetAvailableModels = (
  hostId: string,
) => Promise<AvailableModel[]> | AvailableModel[];
