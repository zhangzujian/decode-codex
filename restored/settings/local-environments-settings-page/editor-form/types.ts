// Restored from ref/webview/assets/local-environments-settings-page-q1SLOHGN.js
// Typed inputs for the local environment editor form.

export interface LocalEnvironmentEditorFormProps {
  configExists: boolean;
  configPath: string;
  hostId: string | null;
  initialEnvironment: any;
  onSaved: (...args: any[]) => void;
  parseErrorMessage?: string | null;
  readErrorMessage?: string | null;
  workspaceGroup?: { isCodexWorktree?: boolean } | null;
  workspaceRoot: string;
}
