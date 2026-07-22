// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Behavior acceptance coverage for sent-comment attachment normalization.

import assert from "node:assert/strict";

import {
  commentAttachmentToComment,
  getCommentAttachmentIcon,
} from "./sent-comment-attachment-helpers";

const designTweak = commentAttachmentToComment({
  body: "Adjust spacing",
  localBrowserDesignChange: {},
  position: { path: "index.html", side: "right" },
});

assert.equal(designTweak.designTweak, true);
assert.equal(designTweak.icon, "design-tweak");
assert.equal(getCommentAttachmentIcon([designTweak]), "design-tweak");
assert.equal(
  getCommentAttachmentIcon([{ ...designTweak, icon: "browser" }]),
  "browser",
);

console.log("verified sent comment attachment icon normalization");
