// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~mfl5y5w0-EMlrcfp2.js
// Behavior acceptance coverage for the current Framer Motion adapter.

import assert from "node:assert/strict";
import fs from "node:fs";
import * as framerMotion from "framer-motion";

const adapterPath = new URL(
  "./framer-motion-current/index.ts",
  import.meta.url,
);
assert.ok(
  fs.existsSync(adapterPath),
  "current Framer Motion adapter must be promoted",
);

const adapter = await import("./framer-motion-current");

assert.equal(adapter.AnimatePresence, framerMotion.AnimatePresence);
assert.equal(adapter.MotionValue, framerMotion.MotionValue);
assert.equal(adapter.animate, framerMotion.animate);
assert.equal(adapter.motion, framerMotion.motion);
assert.equal(adapter.motion.div, framerMotion.motion.div);
assert.equal(adapter.useMotionTemplate, framerMotion.useMotionTemplate);
assert.equal(adapter.useDragControls, framerMotion.useDragControls);
assert.equal(adapter.useReducedMotion, framerMotion.useReducedMotion);
assert.equal(adapter.useSpring, framerMotion.useSpring);
assert.equal(adapter.useTransform, framerMotion.useTransform);

console.log("verified current Framer Motion package adapter");
