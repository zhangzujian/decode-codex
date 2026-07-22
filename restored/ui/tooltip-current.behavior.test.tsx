// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~kr7rxhqe-CJsmIbPx.js
// Behavior acceptance coverage for the current tooltip runtime.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const runtimePath = new URL("./tooltip-current/index.tsx", import.meta.url);
assert.ok(
  fs.existsSync(runtimePath),
  "current tooltip runtime must be promoted",
);

const runtime = await import("./tooltip-current");

const shortcut = renderToStaticMarkup(
  <runtime.TooltipShortcut keysLabel="⌘K" variant="button" />,
);
assert.match(shortcut, /<kbd/);
assert.match(shortcut, /min-w-4/);
assert.match(shortcut, /⌘K/);

const disabledTooltip = renderToStaticMarkup(
  <runtime.Tooltip disabled tooltipContent="hidden">
    <button type="button">Open</button>
  </runtime.Tooltip>,
);
assert.match(disabledTooltip, /<button type="button">Open<\/button>/);
assert.equal(typeof runtime.TooltipProvider, "function");
assert.equal(typeof runtime.useStableCallback, "function");

console.log("verified current tooltip runtime");
