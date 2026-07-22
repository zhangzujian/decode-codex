// Restored from ref/webview/assets/chat-home-hero-n7KRk-DH.js
// Behavior acceptance coverage for the animated chat home hero.

import assert from "node:assert/strict";
import fs from "node:fs";
import { IntlProvider } from "react-intl";
import { renderToStaticMarkup } from "react-dom/server";

const componentPath = new URL("./chat-home-hero.tsx", import.meta.url);
assert.ok(
  fs.existsSync(componentPath),
  "chat home hero must be promoted as TSX",
);

const { ChatHomeHero } = await import("./chat-home-hero");

function renderHero(isTemporaryChat: boolean, locationKey: string): string {
  return renderToStaticMarkup(
    <IntlProvider locale="en">
      <ChatHomeHero
        isTemporaryChat={isTemporaryChat}
        locationKey={locationKey}
      />
    </IntlProvider>,
  );
}

const temporaryChat = renderHero(true, "temporary");
assert.match(temporaryChat, /Temporary Chat/);
assert.match(
  temporaryChat,
  /This chat won&#x27;t appear in your conversation history/,
);

const firstHeadline = renderHero(false, "first-location");
assert.match(firstHeadline, /Ready when you are\./);

const repeatedHeadline = renderHero(false, "first-location");
assert.match(repeatedHeadline, /Ready when you are\./);

const nextHeadline = renderHero(false, "second-location");
assert.match(nextHeadline, /What’s on your mind today\?/);

console.log("verified chat home hero headline behavior");
