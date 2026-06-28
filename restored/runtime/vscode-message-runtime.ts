// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// VS Code message bridge facade.
import {
  cP as initVscodeMessageBridgeRaw,
  lP as vscodeMessageBridge,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type VscodeMessageBridge = {
  dispatchMessage(type: string, payload?: unknown): void;
};

export { vscodeMessageBridge };

export function initVscodeMessageRuntime(): void {
  initVscodeMessageBridgeRaw();
}
