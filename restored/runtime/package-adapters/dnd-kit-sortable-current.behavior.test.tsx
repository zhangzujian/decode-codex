// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~appgen-settings-page~page~pull-request-r~jkcpinc3-2ucBAJaN.js
// Behavior acceptance coverage for the current sortable DnD adapter.

import assert from "node:assert/strict";
import fs from "node:fs";
import * as sortable from "@dnd-kit/sortable";
import { renderToStaticMarkup } from "react-dom/server";

const adapterPath = new URL(
  "./dnd-kit-sortable-current/index.tsx",
  import.meta.url,
);
assert.ok(
  fs.existsSync(adapterPath),
  "current DnD Kit sortable adapter must be promoted",
);

const adapter = await import("./dnd-kit-sortable-current");

assert.equal(adapter.arrayMove, sortable.arrayMove);
assert.equal(adapter.useSortable, sortable.useSortable);
assert.equal(adapter.SortableContext, sortable.SortableContext);
assert.equal(
  adapter.horizontalListSortingStrategy,
  sortable.horizontalListSortingStrategy,
);
assert.equal(
  adapter.verticalListSortingStrategy,
  sortable.verticalListSortingStrategy,
);
assert.equal(
  adapter.sortableKeyboardCoordinates,
  sortable.sortableKeyboardCoordinates,
);

const icon = renderToStaticMarkup(<adapter.ExpandIcon className="icon-2xs" />);
assert.match(icon, /viewBox="0 0 20 20"/);
assert.match(icon, /class="icon-2xs"/);

console.log("verified current DnD Kit sortable package adapter");
