// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~cx4spki5-kI1PDVf7.js
// Behavior acceptance coverage for the current Radix Popper adapter.

import assert from "node:assert/strict";
import fs from "node:fs";

const adapterPath = new URL("./radix-popper-current/index.ts", import.meta.url);
assert.ok(
  fs.existsSync(adapterPath),
  "current Radix Popper adapter must be promoted",
);

const [adapter, popper, collection, direction, useSize] = await Promise.all([
  import("./radix-popper-current"),
  import("@radix-ui/react-popper"),
  import("@radix-ui/react-collection"),
  import("@radix-ui/react-direction"),
  import("@radix-ui/react-use-size"),
]);

assert.equal(adapter.createPopperScope, popper.createPopperScope);
assert.equal(adapter.PopperRoot, popper.Root);
assert.equal(adapter.PopperAnchor, popper.Anchor);
assert.equal(adapter.PopperContent, popper.Content);
assert.equal(adapter.PopperArrow, popper.Arrow);
assert.equal(adapter.createCollection, collection.createCollection);
assert.equal(adapter.useDirection, direction.useDirection);
assert.equal(adapter.useSize, useSize.useSize);

console.log("verified current Radix Popper package adapter");
