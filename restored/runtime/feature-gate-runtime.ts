// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Statsig feature-gate signal and hook facade for restored conversation modules.
import {
  $j as initStatsigGateSignals,
  Gj as initStatsigFeatureGateHooks,
  eM as featureGateSignal,
  qj as useStatsigGateRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export { featureGateSignal };

export function initFeatureGateSignalRuntime(): void {
  initStatsigGateSignals();
}

export function initStatsigFeatureGateRuntime(): void {
  initStatsigFeatureGateHooks();
}

export function useStatsigGate(gateName: string): boolean {
  return useStatsigGateRaw(gateName);
}
