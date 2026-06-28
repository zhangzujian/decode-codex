// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js
// Route-scoped thread context signals backed by the current projects app bundle.
import { zl as activeThreadHostIdSignal } from "../boundaries/current-ref/projects-app-shared-producer";

type ThreadRouteScope = {
  get<TValue>(state: unknown, key?: unknown): TValue;
};

export function getActiveThreadHostId(
  scope: ThreadRouteScope,
): string | null | undefined {
  return scope.get<string | null | undefined>(activeThreadHostIdSignal);
}
