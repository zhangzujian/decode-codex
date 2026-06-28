// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Dynamic import preloader used by lazily loaded conversation UI modules.
import {
  AL as preloadDynamicImportRaw,
  jL as initModulePreloadRuntimeRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export function initDynamicModulePreloadRuntime(): void {
  initModulePreloadRuntimeRaw();
}

export function preloadDynamicImport<TModule>(
  loader: () => Promise<TModule>,
  dependencies: readonly string[],
  importerUrl: string,
): Promise<TModule> {
  return preloadDynamicImportRaw(loader, dependencies, importerUrl) as Promise<TModule>;
}
