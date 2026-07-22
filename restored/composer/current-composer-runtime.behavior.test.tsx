// Restored from ref/webview/assets/app-initial~app-main~settings-command-menu-section-items~pull-request-route~new-thread-pane~fnoshreu-B6KT1ybi.js
// Behavior acceptance coverage for the current composer runtime.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const runtimePath = new URL("./current-composer-runtime.tsx", import.meta.url);
assert.ok(
  fs.existsSync(runtimePath),
  "current composer runtime must be promoted",
);

const runtime = await import("./current-composer-runtime");

assert.equal(typeof runtime.Composer, "function");
assert.equal(typeof runtime.Composer.Footer, "function");
assert.match(
  renderToStaticMarkup(<runtime.CheckCircleIcon />),
  /viewBox="0 0 20 21"/,
);
assert.match(
  renderToStaticMarkup(<runtime.ShieldCodeIcon />),
  /viewBox="0 0 20 20"/,
);
assert.match(
  renderToStaticMarkup(<runtime.AvatarIcon />),
  /viewBox="0 0 20 20"/,
);
assert.match(
  renderToStaticMarkup(<runtime.CursorIcon />),
  /viewBox="0 0 21 20"/,
);

console.log("verified current composer runtime");
