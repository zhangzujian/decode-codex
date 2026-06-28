// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Composer scope initialization and scope token for local conversation panels.

import {
  Al as initComposerScope,
  wl as composerScope,
} from "../vendor/pull-request-thread-actions-runtime";
import { initScopeRuntime } from "../runtime/app-scope-runtime";

export { composerScope };

export function initComposerScopeRuntime(): void {
  initScopeRuntime();
  initComposerScope();
}
