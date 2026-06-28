// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Host Codex-home and managed worktree path helpers for local conversation surfaces.
import { pI as isPathInCodexWorktree } from "../vendor/appg-thread-shared-runtime";
import {
  Mu as initHostCodexHomeQuery,
  Nu as getHostCodexHome,
} from "../vendor/projects-app-shared-runtime";

export { getHostCodexHome, isPathInCodexWorktree };

export function initHostWorktreeContextRuntime(): void {
  initHostCodexHomeQuery();
}
