// Restored from ref/webview/assets/file-diff-KtBt16gK.js
// Current Codex builds fold the file-diff renderer into the shared pull-request
// runtime chunk instead of shipping a standalone file-diff chunk.
// @ts-nocheck
// Vendored @pierre/diffs fork boundary.
//
// Codex bundles this renderer with local settings/theme integration
// (diff marker style, resolved code themes, and Codex surface CSS), so this is
// not a clean bare re-export of the published @pierre/diffs package.

export { fo as parseDiffFromFiles } from "../../../ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js";

// The FileDiff custom element class is now internal to the folded renderer
// cluster; keep the historical export present without mapping it to the current
// chunk's unrelated short-name exports.
export const FileDiff = undefined;
