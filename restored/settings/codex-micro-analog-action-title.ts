// Restored from ref/webview/assets/codex-micro-analog-action-title-8fJCUsfC.js
// Human-readable titles for Codex Micro command and skill analog actions.
import { getSkillDisplayName } from "../plugins/skill-utils";
import {
  commandMenuTitleMessages,
  commandTitleMessages,
} from "../features/keyboard-shortcuts/messages";
import type { IntlFormatter } from "../features/keyboard-shortcuts/types";
import {
  getCodexMicroCommand,
  initCodexMicroCommands,
} from "../utils/electron-menu-shortcuts/codex-micro-commands";
export function initCodexMicroAnalogActionTitleChunk(): void {
  initCodexMicroCommands();
}
export type CodexMicroAnalogAction =
  | {
      commandId: string;
      type: "command";
    }
  | {
      skillName: string;
      skillPath: string;
      type: "skill";
    };
export type CodexMicroSkill = {
  interface?: {
    displayName?: string | null;
  } | null;
  name: string;
  path?: string | null;
};
export function formatCodexMicroAnalogActionTitle(
  action: CodexMicroAnalogAction,
  skills: CodexMicroSkill[],
  intl: IntlFormatter,
): string {
  if (action.type === "command") {
    const command = getCodexMicroCommand(action.commandId);
    if (command == null) return action.commandId;
    if (command.id === "composer.captureAppshot") {
      return intl.formatMessage({
        id: "codex.command.composer.captureAppshot",
        defaultMessage: "Capture appshot",
        description: "Codex Micro action for capturing an appshot",
      });
    }
    if ("titleIntlId" in command) {
      const messageId = command.titleIntlId;
      return typeof messageId === "string" &&
        Object.hasOwn(commandTitleMessages, messageId)
        ? intl.formatMessage(commandTitleMessages[messageId]!)
        : "";
    }
    const messageId = command.electron?.menuTitleIntlId;
    return typeof messageId === "string" &&
      Object.hasOwn(commandMenuTitleMessages, messageId)
      ? intl.formatMessage(commandMenuTitleMessages[messageId]!)
      : "";
  }
  const skill = skills.find(
    (candidate) =>
      candidate.name === action.skillName &&
      candidate.path === action.skillPath,
  );
  return `$${skill == null ? action.skillName : getSkillDisplayName(skill)}`;
}
