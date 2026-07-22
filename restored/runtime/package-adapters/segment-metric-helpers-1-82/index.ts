// Restored from ref/webview/assets/metric-helpers-D9MkUavA.js
// Exact npm-backed Segment Analytics Next 1.82.0 metric/runtime helpers.
import {
  isOffline,
  isOnline,
} from "segment-analytics-next-1-82/dist/pkg/core/connection/index.js";
import { recordIntegrationMetric } from "segment-analytics-next-1-82/dist/pkg/core/stats/metric-helpers.js";
import { mergedOptions } from "segment-analytics-next-1-82/dist/pkg/lib/merged-options.js";
import { pWhile } from "segment-analytics-next-1-82/dist/pkg/lib/p-while.js";
import { PersistedPriorityQueue } from "segment-analytics-next-1-82/dist/pkg/lib/priority-queue/persisted.js";
function initPWhile(): void {}
function initPersistedPriorityQueue(): void {}
function initAnalyticsCoreRuntime(): void {}
function initMergedOptions(): void {}
function initMetricHelpers(): void {}
function initConnectionRuntime(): void {}
export {
  initPWhile,
  initPersistedPriorityQueue,
  isOffline,
  isOnline,
  mergedOptions,
  initAnalyticsCoreRuntime,
  recordIntegrationMetric,
  pWhile,
  initMergedOptions,
  PersistedPriorityQueue,
  initMetricHelpers,
  initConnectionRuntime,
};
