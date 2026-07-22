// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~cc80cam6-BCKQAAO_.js
// Behavior acceptance coverage for the current persisted UI runtime.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const runtimePath = new URL("./persisted-ui-runtime.tsx", import.meta.url);
assert.ok(
  fs.existsSync(runtimePath),
  "current persisted UI runtime must be promoted",
);

const runtime = await import("./persisted-ui-runtime");

const expectedExports = [
  "Button",
  "CloseIcon",
  "DISMISS_TOOLTIPS_EVENT",
  "PERSISTED_ATOM_LOCAL_STORAGE_PREFIX",
  "Spinner",
  "SpinnerIcon",
  "WindowZoomContext",
  "buttonRadiusClasses",
  "clearPersistedAtomLocalStorage",
  "clearPersistedAtomPrefix",
  "clearPersistedAtomStore",
  "createPersistedAtomRegistryEntry",
  "createPersistedAtomSignal",
  "createPersistedAtomStore",
  "dismissTooltips",
  "flushPendingPersistedAtoms",
  "flushPersistedAtomKey",
  "getPersistedAtomValue",
  "getZoomScaleRatio",
  "initializePersistedAtomStore",
  "markPersistedAtomsSynced",
  "persistedAtomRegistrySelector",
  "persistedAtomsRegistrySignal",
  "readPersistedAtomLocalStorage",
  "schedulePersistedAtomWrite",
  "setPersistedAtomItem",
  "setPersistedAtomValueInMemory",
  "subscribePersistedAtomRegistry",
  "subscribePersistedAtomValue",
  "useWindowZoom",
  "windowZoomPersistedAtom",
] as const;

for (const name of expectedExports) {
  assert.ok(name in runtime, `missing current runtime export: ${name}`);
}

assert.equal(runtime.getZoomScaleRatio(3, 2), 1.5);
assert.equal(runtime.DISMISS_TOOLTIPS_EVENT, "codex:dismiss-tooltips");

const button = renderToStaticMarkup(
  <runtime.Button
    color="accent"
    contentLayout="balanced"
    radius="large"
    size="toolbarLabel"
  >
    Save
  </runtime.Button>,
);
assert.match(button, /grid grid-cols-\[1fr_auto_1fr\]/);
assert.match(button, /rounded-lg/);
assert.match(button, /bg-token-text-link-foreground/);
assert.match(button, /px-2\.5/);

const closeIcon = renderToStaticMarkup(
  <runtime.CloseIcon className="icon-sm" />,
);
assert.match(closeIcon, /viewBox="0 0 21 21"/);
assert.match(closeIcon, /class="icon-sm"/);

console.log("verified current persisted UI runtime");
