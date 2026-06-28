// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-scope signal holding the most recent request to open the process manager
// for a given chat process (set by the inline PID badge, read by the host).
import { createAppScopeSignal } from "../boundaries/app-scope";
import { processManagerScope } from "../boundaries/onboarding-commons-externals.facade";

export interface ProcessManagerRequest {
  processId: string;
  requestId: number;
}

export const processManagerRequestSignal =
  createAppScopeSignal<ProcessManagerRequest | null>(
    processManagerScope,
    () => null,
  );
