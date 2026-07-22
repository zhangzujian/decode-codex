// Restored from ref/webview/assets/detail-section-8pmh4WsR.js
// Behavior acceptance coverage for detail-section primitives.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const runtimePath = new URL("./detail-section.tsx", import.meta.url);
assert.ok(
  fs.existsSync(runtimePath),
  "detail section runtime must be promoted",
);

const runtime = await import("./detail-section");

const content = renderToStaticMarkup(
  <runtime.DetailPageContent>Content</runtime.DetailPageContent>,
);
assert.match(content, /--detail-page-section-gap/);

const section = renderToStaticMarkup(
  <runtime.DetailSection collapsible count={2} title="Files">
    Rows
  </runtime.DetailSection>,
);
assert.match(section, /^<details open=""/);
assert.match(section, /<summary/);
assert.match(section, />2</);
assert.match(section, /Rows/);

console.log("verified detail section runtime");
