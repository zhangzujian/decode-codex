// Restored from ref/webview/assets/home-composer-mode-toggle-CcQKoq4K.js
// Behavior acceptance coverage for the Home composer mode toggle.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { IntlProvider } from "react-intl";

const runtimePath = new URL("./home-composer-mode-toggle.tsx", import.meta.url);
assert.ok(
  fs.existsSync(runtimePath),
  "home composer mode toggle must be promoted",
);

const { HomeComposerModeToggle } = await import("./home-composer-mode-toggle");

const markup = renderToStaticMarkup(
  <IntlProvider locale="en">
    <HomeComposerModeToggle value="chat" onValueChange={() => {}} />
  </IntlProvider>,
);

assert.match(markup, /aria-label="Composer mode"/);
assert.match(markup, /aria-pressed="true"[^>]*>Chat/);
assert.match(markup, /aria-pressed="false"[^>]*>Work/);
assert.match(markup, /bg-token-input-background\/90/);

console.log("verified home composer mode toggle");
