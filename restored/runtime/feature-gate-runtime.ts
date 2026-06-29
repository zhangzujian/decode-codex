// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Statsig feature-gate signal and hook facade for restored conversation modules.
import {
  Ax as initStatsigFeatureGateHooks,
  Fx as useStatsigLayerRaw,
  Mx as useStatsigGateRaw,
  zx as featureGateSignal,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
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
