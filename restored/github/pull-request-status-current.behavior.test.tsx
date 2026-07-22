// Restored from ref/webview/assets/app-initial~app-main~pull-request-route~pull-request-code-review~onboarding-page~projects-i~gmpr6uvf-BlGBmQRu.js
// Behavior acceptance coverage for current pull-request status rendering.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const runtimePath = new URL(
  "./pull-request-status-current/index.tsx",
  import.meta.url,
);
assert.ok(
  fs.existsSync(runtimePath),
  "current pull request status runtime must be promoted",
);

const runtime = await import("./pull-request-status-current");

assert.equal(
  runtime.derivePullRequestDisplayStatus({
    hasOpenPr: true,
    isDraft: true,
    state: "open",
    url: "https://github.com/openai/codex/pull/1",
  }),
  "draft",
);
assert.equal(
  runtime.derivePullRequestDisplayStatus({
    hasOpenPr: false,
    isDraft: false,
    state: "closed",
    url: "https://github.com/openai/codex/pull/1",
  }),
  "merged",
);
assert.equal(
  runtime.derivePullRequestDisplayStatus({
    hasOpenPr: false,
    isDraft: false,
    state: "closed",
    url: null,
  }),
  null,
);

assert.equal(
  runtime.derivePullRequestMergeReadiness({
    canMerge: false,
    ciStatus: "passing",
    status: "open",
  }),
  "successful",
);
assert.equal(
  runtime.derivePullRequestMergeReadiness({
    canMerge: true,
    ciStatus: "passing",
    status: "open",
  }),
  "ready",
);
assert.equal(
  runtime.derivePullRequestMergeReadiness({
    canMerge: true,
    ciStatus: "passing",
    hasMergeConflicts: true,
    status: "open",
  }),
  "failing",
);

const statusIcon = renderToStaticMarkup(
  <runtime.PullRequestStatusIcon status="merged" />,
);
assert.match(statusIcon, /text-token-charts-purple/);

const reviewIcon = renderToStaticMarkup(
  <runtime.ReviewTabIcon className="size-4" />,
);
assert.match(reviewIcon, /viewBox="0 0 20 20"/);

const planeIcon = renderToStaticMarkup(
  <runtime.PaperPlaneOutlineIcon className="size-4" />,
);
assert.match(planeIcon, /viewBox="0 0 24 24"/);
assert.match(planeIcon, /stroke="currentColor"/);

console.log("verified current pull request status runtime");
