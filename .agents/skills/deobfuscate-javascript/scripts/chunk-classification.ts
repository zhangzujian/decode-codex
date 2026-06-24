export type ChunkClassificationHint = {
  restored?: string;
  vendor?: string;
  note?: string;
  boundary?: boolean;
  dependencyBoundary?: string;
};

/**
 * JavaScript built-in globals a generated name must not collide with. Used both
 * to keep the renamer from emitting `_Array`/`__Array` (a stem that pascal-cases
 * onto a global gets underscore-prefixed by the collision-safe applier) and to
 * let the quality gate flag any `_Global` that still slipped through.
 */
export const JS_GLOBALS: ReadonlySet<string> = new Set([
  "Array",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Symbol",
  "BigInt",
  "Function",
  "Promise",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
  "Date",
  "RegExp",
  "Error",
  "TypeError",
  "RangeError",
  "JSON",
  "Math",
  "Reflect",
  "Proxy",
  "Iterator",
  "ArrayBuffer",
  "DataView",
  "Int8Array",
  "Uint8Array",
  "Float32Array",
  "Float64Array",
]);

export type VendorDataMatch = {
  /** npm package the bundled data belongs to. */
  package: string;
  /** Bare import specifier consumers should point at instead of the hash chunk. */
  specifier: string;
  /** Why we matched — for manifest notes / debugging. */
  reason: "shiki-grammar" | "shiki-theme" | "data-lib";
};

// Standalone data libraries that ship as one big single-export chunk. Keep this
// conservative — only well-known, unambiguously-vendored stems belong here.
const DATA_LIB_STEMS: Record<string, string> = {
  "3dmol": "3dmol",
  "3Dmol": "3dmol",
};

// These chunks ship as `JSON.parse(`{"scopeName":...}`)`, so keys are quoted
// (`"scopeName":`). Match the JSON-key form as well as a bare object-literal key
// (`scopeName:`) so both bundler shapes are recognised.
const SHIKI_GRAMMAR_SCOPE_RE = /(?:"scopeName"|\bscopeName)\s*:/;
const SHIKI_GRAMMAR_BODY_RE = /(?:"(?:patterns|repository)"|\b(?:patterns|repository))\s*:/;
const SHIKI_THEME_TOKENCOLORS_RE = /(?:"tokenColors"|\btokenColors)\s*:/;
const SHIKI_THEME_TYPE_RE = /(?:"type"|\btype)\s*:\s*["'](?:light|dark)["']/;
const SHIKI_THEME_COLORS_RE = /(?:"colors"|\bcolors)\s*:/;

/**
 * Recognise a chunk whose *content* is bundled vendor data rather than app code:
 * a Shiki TextMate language grammar, a Shiki/VSCode color theme, or a known
 * standalone data library. These are deliberately NOT restored as app code —
 * `build-import-graph.ts` marks them terminal `npm-leaf` and consumers import the
 * bare specifier (`@shikijs/langs/<id>`, `@shikijs/themes/<id>`, `3dmol`).
 *
 * `source` is the chunk's (minified) body. The grammar/theme fingerprints survive
 * minification because they are string object keys. The id half of the specifier
 * comes from the chunk stem (`rust-A1b2c3` → `rust`), which the bundler names
 * after the source module.
 */
export function classifyVendorDataChunk(
  basename: string,
  source: string,
): VendorDataMatch | null {
  const stem = stripHashSuffix(basename);
  const libPackage = DATA_LIB_STEMS[stem] ?? DATA_LIB_STEMS[stem.toLowerCase()];
  if (libPackage) {
    return { package: libPackage, specifier: libPackage, reason: "data-lib" };
  }
  if (
    SHIKI_GRAMMAR_SCOPE_RE.test(source) &&
    SHIKI_GRAMMAR_BODY_RE.test(source)
  ) {
    return {
      package: "@shikijs/langs",
      specifier: `@shikijs/langs/${stem}`,
      reason: "shiki-grammar",
    };
  }
  if (
    SHIKI_THEME_TOKENCOLORS_RE.test(source) ||
    (SHIKI_THEME_COLORS_RE.test(source) && SHIKI_THEME_TYPE_RE.test(source))
  ) {
    return {
      package: "@shikijs/themes",
      specifier: `@shikijs/themes/${stem}`,
      reason: "shiki-theme",
    };
  }
  return null;
}

function stripHashSuffix(basename: string): string {
  // Anchor to Vite/Rolldown's 8-char hash first so multi-word stems survive
  // (`github-dark-Gg77Hh88` → `github-dark`); fall back to 10–12-char hashes.
  const stripped = basename.replace(/-[A-Za-z0-9_-]{8}$/u, "");
  if (stripped !== basename) return stripped;
  return basename.replace(/-[A-Za-z0-9_-]{10,12}$/u, "");
}

const APP_PREFIXES = [
  "app-main",
  "app-shell",
  "app-prefetch",
  "app-preloader",
  "app-root",
  "app-server",
  "appgen",
  "automation",
  "automations",
  "browser-sidebar",
  "browser-use",
  "composer",
  "conversation",
  "local-conversation",
  "mcp",
  "native-app",
  "native-apps",
  "pets-settings",
  "plugin",
  "plugins",
  "project",
  "projects",
  "review",
  "settings",
  "thread",
];

const APP_SEGMENT_RE = /(?:^|[-_])(?:page|panel|view|dialog)(?:[-_]|$)/;

const VENDOR_PREFIXES = [
  "app-scope",
  "src",
  "statsig",
  "vscode-api",
  "zod",
];

/**
 * Heuristic: does this chunk basename look like project/app code that deep/full
 * restoration must recursively restore rather than face as a dependency wall?
 *
 * Keep this conservative and product-biased. The explicit vendor prefixes below
 * are excluded first so runtime chunks such as `app-scope-*` do not get caught by
 * broad `app-*` matching.
 */
export function isLikelyAppChunk(basename: string): boolean {
  const normalized = basename.toLowerCase();
  if (VENDOR_PREFIXES.some((prefix) => hasChunkPrefix(normalized, prefix))) {
    return false;
  }
  return (
    APP_PREFIXES.some((prefix) => hasChunkPrefix(normalized, prefix)) ||
    APP_SEGMENT_RE.test(normalized)
  );
}

export function isKnownTerminalBoundaryChunk(
  basename: string,
  hint: ChunkClassificationHint = {},
): boolean {
  const normalized = basename.toLowerCase();
  const vendor = (hint.vendor ?? "").toLowerCase();
  const note = (hint.note ?? "").toLowerCase();
  const restored = (hint.restored ?? "").toLowerCase();
  const boundary = (hint.dependencyBoundary ?? "").toLowerCase();
  const text = `${vendor} ${note} ${restored} ${boundary}`;

  if (hasChunkPrefix(normalized, "app-scope")) return true;
  if (hasChunkPrefix(normalized, "src")) return true;
  if (hasChunkPrefix(normalized, "statsig")) return true;
  if (hasChunkPrefix(normalized, "vscode-api")) return true;
  if (text.includes("@pierre/")) return true;
  if (text.includes("codemirror")) return true;
  if (text.includes("prosemirror")) return true;
  if (text.includes("react-dom runtime")) return true;
  if (text.includes("rrule")) return true;
  if (text.includes("xterm")) return true;
  if (text.includes("zod")) return true;
  if (text.includes("statsig")) return true;
  if (text.includes("vscode") || text.includes("webview bridge")) return true;
  if (text.includes("dotlottie") || text.includes("@lottiefiles")) return true;
  if (restored.endsWith("assets/browser.ts") && vendor === "npm") return true;
  if (restored.includes("processbrowsershim")) return true;
  if (note.includes("bundler runtime") || note.includes("vite bundler")) {
    return true;
  }

  return false;
}

function hasChunkPrefix(basename: string, prefix: string): boolean {
  return basename === prefix || basename.startsWith(`${prefix}-`);
}
