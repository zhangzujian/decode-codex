// Restored from ref/webview/assets/artifact-creation-prompts-QBjusO5e.js
// Composer prompts for starting a document, presentation, site, or spreadsheet.
import { createPluginMentionHref } from "../composer/mention-item/mention-item-impl";
import { formatDirectiveMention } from "../utils/parse-directives";
export type ArtifactCreationKind =
  "document" | "presentation" | "site" | "spreadsheet";
export type ArtifactCreationMessageDescriptor = {
  defaultMessage: string;
  description: string;
  id: string;
};
type ArtifactCreationPrompt = {
  artifact: {
    label: string;
    pluginId: string;
  };
  prompt: ArtifactCreationMessageDescriptor;
};
type ArtifactCreationPromptFormatter = {
  formatMessage(
    descriptor: ArtifactCreationMessageDescriptor,
    values: {
      artifact: string;
    },
  ): string;
};
export const artifactCreationPrompts: Record<
  ArtifactCreationKind,
  ArtifactCreationPrompt
> = {
  document: {
    artifact: {
      label: "Documents",
      pluginId: "documents@openai-primary-runtime",
    },
    prompt: {
      id: "home.newChatPageSuggestions.createDocument.prompt.v5",
      defaultMessage:
        "Create a new document with {artifact}. Start by asking me what it should be about.",
      description: "Composer prefill for creating a document",
    },
  },
  presentation: {
    artifact: {
      label: "Presentations",
      pluginId: "presentations@openai-primary-runtime",
    },
    prompt: {
      id: "home.newChatPageSuggestions.createPresentation.prompt.v5",
      defaultMessage:
        "Create a new presentation with {artifact}. Start by asking me what it should be about.",
      description: "Composer prefill for creating a presentation",
    },
  },
  site: {
    artifact: {
      label: "Sites",
      pluginId: "sites@openai-bundled",
    },
    prompt: {
      id: "home.newChatPageSuggestions.createSite.prompt.v5",
      defaultMessage:
        "Create a new site with {artifact}. Start by asking me what it should be about.",
      description: "Composer prefill for creating a site",
    },
  },
  spreadsheet: {
    artifact: {
      label: "Spreadsheets",
      pluginId: "spreadsheets@openai-primary-runtime",
    },
    prompt: {
      id: "home.newChatPageSuggestions.createSpreadsheet.prompt.v5",
      defaultMessage:
        "Create a new spreadsheet with {artifact}. Start by asking me what it should be about.",
      description: "Composer prefill for creating a spreadsheet",
    },
  },
};
export function formatArtifactCreationPrompt(
  intl: ArtifactCreationPromptFormatter,
  kind: ArtifactCreationKind,
): string {
  const { artifact, prompt } = artifactCreationPrompts[kind];
  return intl.formatMessage(prompt, {
    artifact: formatDirectiveMention(
      `@${artifact.label}`,
      createPluginMentionHref(artifact.pluginId),
    ),
  });
}
export function initArtifactCreationPromptsChunk(): void {}
