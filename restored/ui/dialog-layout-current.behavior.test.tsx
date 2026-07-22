// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~h49w84u1-C22DF0k3.js
// Behavior acceptance coverage for the current dialog layout runtime.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { Button } from "./button";

const runtimePath = new URL(
  "./dialog-layout-current/index.tsx",
  import.meta.url,
);
assert.ok(
  fs.existsSync(runtimePath),
  "current dialog layout runtime must be promoted",
);

const runtime = await import("./dialog-layout-current");

assert.equal(
  renderToStaticMarkup(<runtime.ElectronOnly>hidden</runtime.ElectronOnly>),
  "",
);
assert.equal(
  renderToStaticMarkup(
    <runtime.ElectronOnly electron>visible</runtime.ElectronOnly>,
  ),
  "visible",
);

const footer = renderToStaticMarkup(
  <runtime.DialogFooter>
    <Button>Continue</Button>
  </runtime.DialogFooter>,
);
assert.equal((footer.match(/Continue/g) ?? []).length, 1);
assert.match(footer, /w-full justify-center/);

assert.equal(runtime.DIALOG_FOOTER_BUTTON_CLASS, "w-auto gap-2");
assert.match(runtime.DIALOG_OVERLAY_CLASS_NAME, /codex-dialog-overlay/);
assert.equal(typeof runtime.Dialog, "function");
assert.equal(typeof runtime.DialogRoot, "function");

console.log("verified current dialog layout runtime");
