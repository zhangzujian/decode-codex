// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Route-scoped thread context signals backed by the current projects app bundle.
import { zl as activeThreadHostIdSignal } from "../vendor/projects-app-shared-runtime";

type ThreadRouteScope = {
  get<TValue>(state: unknown, key?: unknown): TValue;
};

export function getActiveThreadHostId(
  scope: ThreadRouteScope,
): string | null | undefined {
  return scope.get<string | null | undefined>(activeThreadHostIdSignal);
}
