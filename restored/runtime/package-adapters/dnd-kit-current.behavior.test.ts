// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~appgen-settings-page~page~pull-request-r~i9veoilb-D02S5oqQ.js
// Behavior acceptance coverage for the current DnD Kit adapter.

import assert from "node:assert/strict";
import fs from "node:fs";
import * as dndCore from "@dnd-kit/core";
import * as dndUtilities from "@dnd-kit/utilities";

const adapterPath = new URL("./dnd-kit-current/index.ts", import.meta.url);
assert.ok(
  fs.existsSync(adapterPath),
  "current DnD Kit adapter must be promoted",
);

const adapter = await import("./dnd-kit-current");

assert.equal(adapter.DndContext, dndCore.DndContext);
assert.equal(adapter.PointerSensor, dndCore.PointerSensor);
assert.equal(adapter.useDroppable, dndCore.useDroppable);
assert.equal(adapter.CSS, dndUtilities.CSS);
assert.equal(adapter.subtract, dndUtilities.subtract);

console.log("verified current DnD Kit package adapter");
