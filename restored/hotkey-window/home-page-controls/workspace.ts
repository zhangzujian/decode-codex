// Restored from ref/webview/assets/hotkey-window-home-page-HuAbYFeH.js
export function resolveInitialComposerWorkspaceRoot({
  activeWorkspaceRoot,
  defaultToProjectless,
  prefillCwd,
}: {
  activeWorkspaceRoot: string | null;
  defaultToProjectless: boolean;
  prefillCwd?: string | null;
}): string | null {
  return prefillCwd ?? (defaultToProjectless ? "~" : activeWorkspaceRoot);
}

export function resolveComposerConversationCwd({
  composerWorkspaceRoot,
  selectedRemoteProjectPath,
}: {
  composerWorkspaceRoot: string | null;
  selectedRemoteProjectPath?: string | null;
}): string | null {
  return (
    selectedRemoteProjectPath ??
    (composerWorkspaceRoot === "~" ? null : composerWorkspaceRoot)
  );
}
