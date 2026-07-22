// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~b6mb9dk4-gMHmseWC.js
// Current bundle adapter for the restored query matcher.
import { initScoreQueryMatchRuntime, scoreQueryMatch } from "./index";
const createScoreQueryMatcher =
  (query: string) =>
  (candidate: string): number =>
    scoreQueryMatch(candidate, query);
export { initScoreQueryMatchRuntime, scoreQueryMatch, createScoreQueryMatcher };
