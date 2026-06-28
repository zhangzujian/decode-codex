// Restored from ref/.vite/build/worker.js
// Shared OpenIn target protocol types.

export type ShortcutLink = {
  target?: string | null;
  icon?: string | null;
};
export type OpenInCustomTarget = {
  command?: string | null;
  icon?: string | null;
};
export type OpenInTargetRequestParams = {
  target?: string | null;
  command?: string | null;
  customTarget?: OpenInCustomTarget | null;
};
export type OpenInPlatformName = "darwin" | "linux" | "win32";
export type OpenInTargetKind =
  | "editor"
  | "fileManager"
  | "systemDefault"
  | "terminal";
export type OpenInShortcutResolver = (path: string) => Promise<ShortcutLink>;
export type OpenInPlatformTarget = {
  label: string;
  icon: string;
  kind: OpenInTargetKind;
  hidden?: boolean;
  detect(
    readShortcutLink: OpenInShortcutResolver,
  ): string | null | Promise<string | null>;
  iconPath?(command: string): string | null;
};
export type OpenInTargetDefinition = {
  id: string;
  platforms: Partial<Record<OpenInPlatformName, OpenInPlatformTarget>>;
};
