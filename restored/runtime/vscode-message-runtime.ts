// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// VS Code message bridge facade.
import { lP as vscodeMessageBridge } from "../vendor/appg-thread-shared-runtime";
import { initAppgThreadActionAndMessageRuntime } from "./appg-shared-runtime-initializers";

export type VscodeMessageBridge = {
  dispatchMessage(type: string, payload?: unknown): void;
};

export { vscodeMessageBridge };

export function initVscodeMessageRuntime(): void {
  initAppgThreadActionAndMessageRuntime();
}
