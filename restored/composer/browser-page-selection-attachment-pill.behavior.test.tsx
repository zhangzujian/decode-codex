// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Behavior acceptance coverage for the browser selection attachment pill.

import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { IntlProvider } from "react-intl";

import { BrowserPageSelectionAttachmentPill } from "./browser-page-selection-attachment-pill";

const markup = renderToStaticMarkup(
  <IntlProvider locale="en">
    <BrowserPageSelectionAttachmentPill
      selectedText="Selected browser text"
      onRemove={() => {}}
    />
  </IntlProvider>,
);

assert.match(markup, />1 selection</);
assert.match(markup, /viewBox="0 0 20 20"/);
assert.match(markup, /aria-label="Remove selected text attachment"/);

console.log("verified browser page selection attachment pill");
