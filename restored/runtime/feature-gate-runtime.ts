// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Statsig feature-gate signal and hook facade for restored conversation modules.
import {
  Gj as initStatsigFeatureGateHooks,
  Xj as useStatsigLayerRaw,
  eM as featureGateSignal,
  qj as useStatsigGateRaw,
} from "../vendor/appg-thread-shared-runtime";
import { initAppgFeatureGateAndSideConversationRuntime } from "./appg-shared-runtime-initializers";

export { featureGateSignal };

export type StatsigLayer = {
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

export function initFeatureGateSignalRuntime(): void {
  initAppgFeatureGateAndSideConversationRuntime();
}

export function initStatsigFeatureGateRuntime(): void {
  initStatsigFeatureGateHooks();
}

export function useStatsigGate(gateName: string): boolean {
  return useStatsigGateRaw(gateName);
}

export function useStatsigLayer(layerName: string): StatsigLayer {
  return useStatsigLayerRaw(layerName) as StatsigLayer;
}
