// Restored from ref/webview/assets/persisted-atom-store-CN8swCI1.js
// Behavior acceptance coverage for persisted atom storage helpers.

import assert from "node:assert/strict";

const store = await import("./persisted-atom-store");
const writes: Array<[string, unknown | undefined]> = [];

assert.equal(
  typeof store.schedulePersistedAtomWrite,
  "function",
  "current persisted atom store must expose debounced writes",
);
assert.equal(typeof store.flushPersistedAtomKey, "function");
assert.equal(typeof store.flushPendingPersistedAtoms, "function");
assert.equal(typeof store.clearPersistedAtomPrefix, "function");

store.initializePersistedAtomStore({}, (key, value) => {
  writes.push([key, value]);
});

store.schedulePersistedAtomWrite("draft", "next", 60_000);
assert.equal(store.getPersistedAtomValue("draft", null), "next");
assert.deepEqual(writes, []);

store.flushPersistedAtomKey("draft");
assert.deepEqual(writes, [["draft", "next"]]);

writes.length = 0;
store.schedulePersistedAtomWrite("draft", "discarded", 60_000, {
  shouldPublish: () => false,
});
store.flushPendingPersistedAtoms();
assert.equal(store.getPersistedAtomValue("draft", null), "next");
assert.deepEqual(writes, []);

store.setPersistedAtomItem("thread:one", 1);
store.schedulePersistedAtomWrite("thread:two", 2, 60_000);
store.setPersistedAtomItem("other", 3);
writes.length = 0;
store.clearPersistedAtomPrefix("thread:");
assert.equal(store.getPersistedAtomValue("thread:one", null), null);
assert.equal(store.getPersistedAtomValue("thread:two", null), null);
assert.equal(store.getPersistedAtomValue("other", null), 3);
assert.deepEqual(writes, [
  ["thread:one", undefined],
  ["thread:two", undefined],
]);

store.clearPersistedAtomStore();

console.log("verified current persisted atom store behavior");
