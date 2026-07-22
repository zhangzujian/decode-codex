// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Common result wrapping, target resolution, and model validation helpers.

import { getBackgroundProjects } from "../../boundaries/onboarding-commons-externals.facade";
import type {
  AppScope,
  AvailableModel,
  BackgroundProject,
  CreateThreadTarget,
  ResolvedCreateThreadTarget,
  ToolResult,
} from "./types";

export const DEFAULT_CREATE_THREAD_MODEL_FOR_VALIDATION = "gpt-5.5";

export function toToolResult(payload: unknown): ToolResult {
  return {
    contentItems: [
      { type: "inputText", text: JSON.stringify(payload ?? null) },
    ],
    success: true,
  };
}

export function resolveCreateThreadTarget(
  scope: AppScope,
  target: CreateThreadTarget,
): ResolvedCreateThreadTarget {
  if (target.type === "projectless") return target;
  const project = (getBackgroundProjects(scope) as BackgroundProject[]).find(
    (candidate) => candidate.projectId === target.projectId,
  );
  if (project == null) {
    throw Error(
      `Unknown projectId: ${target.projectId}. Call list_projects to find available projects.`,
    );
  }
  return project.projectKind === "remote"
    ? {
        type: "remoteProject",
        projectId: project.projectId,
        hostId: project.hostId,
        path: project.path,
        environment: target.environment,
      }
    : {
        type: "project",
        projectId: project.projectId,
        environment: target.environment,
      };
}

export function validateReasoningEffortForModel(
  toolName: string,
  model: string,
  reasoningEffort: string,
  availableModels: AvailableModel[],
): string | null {
  const matchedModel = availableModels.find(
    (candidate) => candidate.model === model,
  );
  if (matchedModel == null) {
    return `${toolName} could not validate reasoning effort "${reasoningEffort}" for model "${model}". Use a model and reasoning combination listed in the tool description, or omit thinking.`;
  }

  const supportedEfforts = matchedModel.supportedReasoningEfforts.map(
    ({ reasoningEffort }) => reasoningEffort,
  );
  if (supportedEfforts.includes(reasoningEffort)) return null;

  const supportedMessage =
    supportedEfforts.length === 0
      ? "This model supports no reasoning effort overrides."
      : `Supported reasoning efforts: ${supportedEfforts.join(", ")}.`;
  return `${toolName} rejected unsupported model/reasoning combination: "${matchedModel.model}" does not support "${reasoningEffort}". ${supportedMessage}`;
}
