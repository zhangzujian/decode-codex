// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~gsbyx6su-EGL8CaU9.js
// Behavior acceptance coverage for the current React DOM client adapter.

import assert from "node:assert/strict";
import fs from "node:fs";
import * as reactDomClient from "react-dom/client";

const adapterPath = new URL(
  "./react-dom-client-current/index.ts",
  import.meta.url,
);
assert.ok(
  fs.existsSync(adapterPath),
  "current React DOM client adapter must be promoted",
);

const adapter = await import("./react-dom-client-current");

assert.equal(adapter.loadReactDomClient(), reactDomClient);
assert.equal(
  adapter.loadReactDomClient().createRoot,
  reactDomClient.createRoot,
);

console.log("verified current React DOM client package adapter");
