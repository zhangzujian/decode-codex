// Restored from ref/webview/assets/hotkey-window-home-page-HuAbYFeH.js
import type { ReactNode } from "react";
import { once as runOnce } from "../../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperO,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerQ,
  worktreeNewThreadOrchestratorCompatSlotUpperB,
  worktreeNewThreadOrchestratorCompatSlotUpperK,
  worktreeNewThreadOrchestratorCompatSlotUpperV,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  currentAppInitialSharedFunction0375,
  intlFormatDateTimeRuntime,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initComposerSlashCommandRegistryRuntime,
  registerComposerSlashCommand,
} from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import type { ComposerMode } from "./composer-mode-dropdown";

export const initComposerModeSlashCommandRuntime = runOnce(() => {
  currentAppInitialSharedCompatSlotUpperO();
});

export function ComposerModeSlashCommandRegistrar({
  composerMode,
  enabled,
  setComposerMode,
  showWorktree,
}: {
  composerMode: ComposerMode;
  enabled: boolean;
  setComposerMode: (mode: ComposerMode) => void;
  showWorktree: boolean;
}): ReactNode {
  const intl = currentAppInitialSharedFunction0375();
  registerComposerSlashCommand({
    id: "local",
    title: intl.formatMessage({
      id: "composer.mode.local",
      defaultMessage: "Work locally",
      description: "Local mode label",
    }),
    description: intl.formatMessage({
      id: "composer.mode.localSlashCommand.description",
      defaultMessage: "Run this chat locally",
      description: "Description for the local mode slash command",
    }),
    requiresEmptyComposer: false,
    Icon: worktreeNewThreadOrchestratorCompatSlotUpperB,
    enabled: enabled && composerMode !== "local",
    onSelect: async () => setComposerMode("local"),
  });
  registerComposerSlashCommand({
    id: "worktree",
    title: intl.formatMessage({
      id: "composer.mode.worktree",
      defaultMessage: "New worktree",
      description: "Worktree mode label",
    }),
    description: intl.formatMessage({
      id: "composer.mode.worktreeSlashCommand.description",
      defaultMessage: "Run this chat in a new worktree",
      description: "Description for the worktree mode slash command",
    }),
    requiresEmptyComposer: false,
    Icon: worktreeNewThreadOrchestratorCompatSlotUpperK,
    enabled: enabled && showWorktree && composerMode !== "worktree",
    onSelect: async () => setComposerMode("worktree"),
  });
  return null;
}

export const initComposerModeSlashCommandRegistrarChunk = runOnce(() => {
  currentAppInitialSharedCompatSlotLowerGLowerC();
  intlFormatDateTimeRuntime();
  initComposerSlashCommandRegistryRuntime();
  worktreeNewThreadOrchestratorCompatSlotUpperV();
  worktreeNewThreadOrchestratorCompatSlotLowerQ();
});
