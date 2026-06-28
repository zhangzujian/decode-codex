// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Host Codex-home and managed worktree path helpers for local conversation surfaces.
import {
  Mu as initHostCodexHomeQuery,
  Nu as getHostCodexHome,
  pI as isPathInCodexWorktree,
} from "../vendor/appg-thread-shared-runtime";

export { getHostCodexHome, isPathInCodexWorktree };

export function initHostWorktreeContextRuntime(): void {
  initHostCodexHomeQuery();
}
