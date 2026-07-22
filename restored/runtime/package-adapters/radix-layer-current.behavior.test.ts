// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~gqsmt9fs-BhD5q2rc.js
// Behavior acceptance coverage for the current Radix layer adapter.

import assert from "node:assert/strict";
import fs from "node:fs";
import { hideOthers } from "aria-hidden";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { useId } from "@radix-ui/react-id";
import { Portal } from "@radix-ui/react-portal";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { RemoveScroll } from "react-remove-scroll";

const adapterPath = new URL("./radix-layer-current/index.ts", import.meta.url);
assert.ok(
  fs.existsSync(adapterPath),
  "current Radix layer adapter must be promoted",
);

const adapter = await import("./radix-layer-current");

assert.equal(adapter.hideOthers, hideOthers);
assert.equal(adapter.DismissableLayer, DismissableLayer);
assert.equal(adapter.FocusScope, FocusScope);
assert.equal(adapter.useId, useId);
assert.equal(adapter.Portal, Portal);
assert.equal(adapter.useCallbackRef, useCallbackRef);
assert.equal(adapter.RemoveScroll, RemoveScroll);

console.log("verified current Radix layer package adapter");
