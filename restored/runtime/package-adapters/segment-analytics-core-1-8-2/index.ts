// Restored from ref/webview/assets/esm-DwzQHiEm.js
// Exact npm-backed Segment Analytics Core 1.8.2 runtime.
import { v4 as createMessageId } from "@lukeed/uuid";
import { createDeferred, Emitter } from "@segment/analytics-generic-utils";
import {
  attempt,
  ContextCancelation,
  CoreContext,
  CoreEventFactory,
  CoreEventQueue,
  CoreStats,
  dispatch,
  isFunction,
  isNumber,
  isPlainObject,
  isString,
  PriorityQueue,
  pTimeout,
} from "segment-analytics-core-1-8-2";
function initValidationRuntime(): void {}
function initCallbackRuntime(): void {}
function initCoreEventFactory(): void {}
function initDeferredEmitterRuntime(): void {}
function initCoreEventQueue(): void {}
function initCoreStats(): void {}
function initPriorityQueue(): void {}
function initUuidRuntime(): void {}
function initDispatchRuntime(): void {}
function initPluginRuntime(): void {}
function initSegmentAnalyticsCore(): void {}
function initCoreContext(): void {}
function initCreateDeferred(): void {}
function initEmitter(): void {}
export {
  isString,
  pTimeout,
  isFunction,
  initValidationRuntime,
  isNumber,
  initCallbackRuntime,
  initCoreEventFactory,
  initDeferredEmitterRuntime,
  initCoreEventQueue,
  createDeferred,
  ContextCancelation,
  CoreStats,
  initCoreStats,
  initPriorityQueue,
  PriorityQueue,
  CoreEventQueue,
  isPlainObject,
  CoreContext,
  createMessageId,
  dispatch,
  attempt,
  initUuidRuntime,
  initDispatchRuntime,
  initPluginRuntime,
  initSegmentAnalyticsCore,
  initCoreContext,
  Emitter,
  CoreEventFactory,
  initCreateDeferred,
  initEmitter,
};
