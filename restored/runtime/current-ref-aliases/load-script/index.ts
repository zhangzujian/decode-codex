// Restored from ref/webview/assets/load-script-Cltl04TI.js
// Current-build entry backed by the published Segment runtime.
import {
  getGlobalAnalytics as loadScriptO,
  setGlobalAnalytics as loadScriptS,
  setGlobalAnalyticsKey as loadScriptC,
} from "segment-analytics-next-1-82/dist/pkg/lib/global-analytics-helper.js";
import {
  loadScript as loadScriptT,
  unloadScript as loadScriptN,
} from "segment-analytics-next-1-82/dist/pkg/lib/load-script.js";
import {
  getCDN as loadScriptR,
  getNextIntegrationsURL as loadScriptI,
  setGlobalCDNUrl as loadScriptA,
} from "segment-analytics-next-1-82/dist/pkg/lib/parse-cdn.js";
const loadScriptF = (): void => {};
const loadScriptNamespaceInit = loadScriptF;
const loadScriptCdnInit = loadScriptF;
const loadScriptEntryInit = loadScriptF;
const loadScriptL = (): boolean => typeof window !== "undefined";
const loadScriptU = (): boolean => !loadScriptL();
export {
  loadScriptI,
  loadScriptO,
  loadScriptC,
  loadScriptF,
  loadScriptR,
  loadScriptNamespaceInit,
  loadScriptU,
  loadScriptT,
  loadScriptCdnInit,
  loadScriptL,
  loadScriptN,
  loadScriptA,
  loadScriptEntryInit,
  loadScriptS,
};
