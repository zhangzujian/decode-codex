// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Dynamic import preloader used by lazily loaded conversation UI modules.
import {
  Jn as initModulePreloadRuntimeRaw,
  qn as preloadDynamicImportRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";

export function initDynamicModulePreloadRuntime(): void {
  initModulePreloadRuntimeRaw();
}

export function preloadDynamicImport<TModule>(
  loader: () => Promise<TModule>,
  dependencies: readonly string[],
  importerUrl: string,
): Promise<TModule> {
  return preloadDynamicImportRaw(
    loader,
    dependencies,
    importerUrl,
  ) as Promise<TModule>;
}
