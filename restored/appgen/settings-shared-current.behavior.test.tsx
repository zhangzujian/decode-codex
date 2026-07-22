// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~appgen-settings-p~fdh9zbdm-D8bu_Ji3.js
// Behavior acceptance coverage for the current AppGen settings helpers.

import assert from "node:assert/strict";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

const runtimePath = new URL("./settings-shared-current.tsx", import.meta.url);
assert.ok(
  fs.existsSync(runtimePath),
  "current appgen settings helpers must be promoted",
);

const runtime = await import("./settings-shared-current");

assert.equal(
  runtime.parseDomain("https://docs.example.co.uk/path").domain,
  "example.co.uk",
);
assert.equal(runtime.getPublicSuffix("docs.example.co.uk"), "co.uk");
assert.equal(
  runtime.formatRepoSkillScopeLabel({
    fallbackLabel: "Team",
    roots: ["/repo", "/repo/.agents/skills"],
    skillPath: "/repo/.agents/skills/example/SKILL.md",
  }),
  "skills",
);

const app = { name: "Google Drive", pluginDisplayNames: ["drive"] };
const plugin = { name: "google-drive", interface: { displayName: "Drive" } };
assert.equal(runtime.doesAppMatchPlugin(app, plugin), true);
assert.equal(runtime.findUniqueAppForPlugin([app], plugin), app);
assert.equal(
  runtime.findUniqueAppForPlugin(
    [app, { name: "Drive", pluginDisplayNames: ["drive"] }],
    plugin,
  ),
  null,
);

assert.match(
  renderToStaticMarkup(<runtime.ChatsIcon />),
  /viewBox="0 0 14 12"/,
);
assert.match(renderToStaticMarkup(<runtime.EditIcon />), /viewBox="0 0 20 21"/);
assert.match(renderToStaticMarkup(<runtime.LinkIcon />), /viewBox="0 0 24 24"/);

console.log("verified current appgen settings shared runtime");
