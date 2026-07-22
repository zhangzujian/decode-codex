// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~dg0b1kws-BsrA2AI_.js
// Behavior acceptance coverage for the current menu runtime.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const runtimePath = new URL("./menu-current/index.tsx", import.meta.url);
assert.ok(fs.existsSync(runtimePath), "current menu runtime must be promoted");

const runtime = await import("./menu-current");

assert.equal(typeof runtime.createMenuScope, "function");
assert.equal(typeof runtime.Menu, "function");
assert.equal(typeof runtime.MenuItem, "object");
assert.deepEqual(runtime.MENU_EASING_CURVE, [0.23, 1, 0.32, 1]);
assert.deepEqual(runtime.MENU_TRANSITION, {
  duration: 0.3,
  ease: [0.19, 1, 0.22, 1],
});

assert.match(
  renderToStaticMarkup(<runtime.ChevronDownIcon />),
  /viewBox="0 0 20 21"/,
);
assert.match(
  renderToStaticMarkup(<runtime.CheckmarkIcon />),
  /viewBox="0 0 17 17"/,
);
assert.match(
  renderToStaticMarkup(<runtime.ChevronRightIcon />),
  /viewBox="0 0 20 20"/,
);
assert.match(
  renderToStaticMarkup(<runtime.MenuSearchIcon />),
  /viewBox="0 0 16 16"/,
);

console.log("verified current menu runtime");
