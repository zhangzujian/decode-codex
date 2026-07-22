// Restored from ref/webview/assets/codex-micro-layout-DsdS0fjo.js
// codex-micro-layout-DsdS0fjo chunk restored from the Codex webview bundle.
import type { CodexMicroKeycapDefinition } from "./types";
export const codexMicroKeycapDefinitions: CodexMicroKeycapDefinition[] = [
  {
    id: "FAST",
    icon: "lightning-outline",
    size: "single",
    action: {
      type: "command",
      command: "composer.toggleFastMode",
    },
  },
  {
    id: "APPR",
    icon: "check-circle",
    size: "single",
    action: {
      type: "command",
      command: "approval.approve",
    },
  },
  {
    id: "REJ",
    icon: "x-circle",
    size: "single",
    action: {
      type: "command",
      command: "approval.decline",
    },
  },
  {
    id: "SPLIT",
    icon: "branch",
    size: "single",
    action: {
      type: "command",
      command: "forkThread",
    },
  },
  {
    id: "MIC",
    icon: "mic",
    size: "double",
    action: {
      type: "named",
      label: "Push to talk",
    },
  },
  {
    id: "CODEX",
    icon: "codex",
    size: "single",
    action: {
      type: "command",
      command: "composer.submit",
    },
  },
  {
    id: "BUG",
    icon: "bug",
    size: "single",
    action: {
      type: "command",
      command: "feedback",
    },
  },
  {
    id: "OAI",
    icon: "openai",
    size: "single",
    action: {
      type: "external-url",
      label: "Open OpenAI docs",
      url: "https://developers.openai.com",
    },
  },
  {
    id: "TERM",
    icon: "terminal",
    size: "single",
    action: {
      type: "command",
      command: "toggleTerminal",
    },
  },
  {
    id: "DWN",
    icon: "download",
    size: "single",
    action: {
      type: "command",
      command: "copyConversationMarkdown",
    },
  },
  {
    id: "DEL",
    icon: "trash",
    size: "single",
    action: {
      type: "command",
      command: "archiveThread",
    },
  },
  {
    id: "NEW",
    icon: "compose",
    size: "single",
    action: {
      type: "command",
      command: "newTask",
    },
  },
  {
    id: "NAV",
    icon: "pointer-outline",
    size: "single",
    action: {
      type: "command",
      command: "openBrowserTab",
    },
  },
  {
    id: "MAGIC",
    icon: "star",
    size: "single",
    action: {
      type: "command",
      command: "toggleThreadPin",
    },
  },
  {
    id: "DIFF",
    icon: "diff",
    size: "single",
    action: {
      type: "command",
      command: "toggleReviewTab",
    },
  },
  {
    id: "PLAY",
    icon: "play-outline",
    size: "single",
    action: {
      type: "command",
      command: "environmentAction1",
    },
  },
  {
    id: "GIT",
    icon: "diff",
    size: "single",
    action: {
      type: "command",
      command: "git.commit",
    },
  },
  {
    id: "BRCH",
    icon: "pull-request-draft",
    size: "single",
    action: {
      type: "command",
      command: "toggleReviewTab",
    },
  },
  {
    id: "MRG",
    icon: "pull-request-merged",
    size: "single",
    action: {
      type: "command",
      command: "toggleReviewTab",
    },
  },
  {
    id: "PR",
    icon: "pull-request",
    size: "single",
    action: {
      type: "command",
      command: "git.createPullRequest",
    },
  },
  {
    id: "PAINT",
    icon: "paint",
    size: "single",
    action: {
      type: "command",
      command: "composer.addPhotos",
    },
  },
  {
    id: "LAB",
    icon: "flask",
    size: "single",
    action: {
      type: "command",
      command: "settings",
    },
  },
  {
    id: "PARTY",
    icon: "confetti",
    size: "single",
    action: {
      type: "command",
      command: "openSideChat",
    },
  },
  {
    id: "TIME",
    icon: "clock",
    size: "single",
    action: {
      type: "command",
      command: "manageTasks",
    },
  },
  {
    id: "MIND+",
    icon: "brain-medium",
    size: "single",
    action: {
      type: "command",
      command: "composer.increaseReasoningEffort",
    },
  },
  {
    id: "MIND-",
    icon: "brain-outline",
    size: "single",
    action: {
      type: "command",
      command: "composer.decreaseReasoningEffort",
    },
  },
  {
    id: "EMPT1",
    icon: "empty",
    size: "single",
    action: {
      type: "custom-shortcut",
    },
  },
  {
    id: "EMPT2",
    icon: "empty",
    size: "single",
    action: {
      type: "custom-shortcut",
    },
  },
  {
    id: "EMPT3",
    icon: "empty",
    size: "single",
    action: {
      type: "custom-shortcut",
    },
  },
  {
    id: "EMPT4",
    icon: "empty",
    size: "single",
    action: {
      type: "custom-shortcut",
    },
  },
  {
    id: "SETUP",
    icon: "settings",
    size: "single",
    action: {
      type: "command",
      command: "settings",
    },
  },
  {
    id: "FOLD",
    icon: "folder-plus",
    size: "single",
    action: {
      type: "command",
      command: "openFolder",
    },
  },
  {
    id: "UPL",
    icon: "cloud-upload",
    size: "single",
    action: {
      type: "command",
      command: "composer.addFiles",
    },
  },
  {
    id: "APPS",
    icon: "all-products",
    size: "single",
    action: {
      type: "command",
      command: "openSkills",
    },
  },
  {
    id: "YOLO",
    icon: "empty",
    size: "single",
    action: {
      type: "composer-text",
      label: "Write :yolo: in the composer",
      text: ":yolo:",
    },
  },
  {
    id: "YEET",
    icon: "empty",
    size: "single",
    action: {
      type: "composer-text",
      label: "Write :yeet: in the composer",
      text: ":yeet:",
    },
  },
  {
    id: "EMPT5",
    icon: "empty",
    size: "double",
    action: {
      type: "custom-shortcut",
    },
  },
];
