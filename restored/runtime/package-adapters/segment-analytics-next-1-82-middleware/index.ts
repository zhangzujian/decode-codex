// Restored from ref/webview/assets/middleware-EWnVNm-R.js
// Exact npm-backed Segment Analytics Next 1.82.0 middleware runtime.
import * as segmentFacadeClasses from "@segment/facade";
import { Context as AnalyticsEvent } from "segment-analytics-next-1-82";
import { SEGMENT_API_HOST as analyticsApiHost } from "segment-analytics-next-1-82/dist/pkg/core/constants/index.js";
import { Stats as RemoteMetricsStore } from "segment-analytics-next-1-82/dist/pkg/core/stats/index.js";
import { version as analyticsVersion } from "segment-analytics-next-1-82/dist/pkg/generated/version.js";
import { fetch as segmentFetch } from "segment-analytics-next-1-82/dist/pkg/lib/fetch.js";
import { getGlobal as getGlobalScope } from "segment-analytics-next-1-82/dist/pkg/lib/get-global.js";
import { toFacade as createSegmentFacade } from "segment-analytics-next-1-82/dist/pkg/lib/to-facade.js";
import { getVersionType as getAnalyticsPackageType } from "segment-analytics-next-1-82/dist/pkg/lib/version-type.js";
import {
  applyDestinationMiddleware,
  sourceMiddlewarePlugin,
} from "segment-analytics-next-1-82/dist/pkg/plugins/middleware/index.js";
function initGlobalScopeResolver(): void {}
function initAnalyticsEventClass(): void {}
function initAnalyticsApiHost(): void {}
function initAnalyticsVersion(): void {}
function initFacadeClasses(): void {}
function initAnalyticsPackageType(): void {}
function initSegmentMiddlewareChunk(): void {}
function initRemoteMetricsClass(): void {}
function initFetchWrapper(): void {}
export {
  segmentFetch,
  createSegmentFacade,
  initGlobalScopeResolver,
  initAnalyticsEventClass,
  analyticsApiHost,
  initAnalyticsApiHost,
  analyticsVersion,
  initAnalyticsVersion,
  initFacadeClasses,
  RemoteMetricsStore,
  initAnalyticsPackageType,
  initSegmentMiddlewareChunk,
  segmentFacadeClasses,
  getAnalyticsPackageType,
  sourceMiddlewarePlugin,
  AnalyticsEvent,
  applyDestinationMiddleware,
  initRemoteMetricsClass,
  initFetchWrapper,
  getGlobalScope,
};
