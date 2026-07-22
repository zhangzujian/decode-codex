// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~o47g1ejz-BwoUnIhP.js
// Behavior acceptance coverage for the current Floating UI adapter.

import assert from "node:assert/strict";
import fs from "node:fs";
import * as floatingUi from "@floating-ui/react-dom";

const adapterPath = new URL("./floating-ui-current/index.ts", import.meta.url);
assert.ok(
  fs.existsSync(adapterPath),
  "current Floating UI adapter must be promoted",
);

const adapter = await import("./floating-ui-current");

assert.equal(adapter.computePosition, floatingUi.computePosition);
assert.equal(adapter.useFloating, floatingUi.useFloating);
assert.equal(adapter.autoUpdate, floatingUi.autoUpdate);
assert.equal(adapter.arrow, floatingUi.arrow);
assert.equal(adapter.limitShift, floatingUi.limitShift);

console.log("verified current Floating UI package adapter");
