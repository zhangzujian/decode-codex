// Restored from ref/webview/assets/plugin-detail-page-DTIBS5HD.js
// Behavior acceptance coverage for the current plugin detail route aliases.

import assert from "node:assert/strict";
import fs from "node:fs";

const routePath = new URL(
  "./plugin-detail-page-route/index.ts",
  import.meta.url,
);
assert.ok(
  fs.existsSync(routePath),
  "current plugin detail route must be promoted",
);

const source = fs.readFileSync(routePath, "utf8");

assert.match(source, /_pluginDetailPageN as PluginDetailPage/);
assert.match(source, /PluginDetailPage as ManagePluginDetailPage/);
assert.match(source, /initPluginDetailPageRuntime\(\)/);

console.log("verified current plugin detail route bindings");
