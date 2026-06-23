export type ChunkClassificationHint = {
  restored?: string;
  vendor?: string;
  note?: string;
  boundary?: boolean;
  dependencyBoundary?: string;
};

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
