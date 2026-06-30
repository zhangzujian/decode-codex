// Restored from ref/webview/assets/dist-CD74BDfk.js
// CommonJS-compatible URL sanitizer used by Mermaid diagram renderers.
import { createCommonJsModule } from "../runtime/commonjs-interop";
type SanitizedUrlModule = {
  __esModule?: true;
  sanitizeUrl?: (input: string | null | undefined) => string;
};
const INVALID_PROTOCOL_PATTERN = /^([^\w]*)(javascript|data|vbscript)/im;
const HTML_ENTITY_PATTERN = /&#(\w+)(^\w|;)?/g;
const HTML_CONTROL_ENTITY_PATTERN = /&(newline|tab);/gi;
const CONTROL_CHARACTER_PATTERN =
  /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
const URL_SCHEME_PATTERN = /^.+(:|&colon;)/gim;
const WHITESPACE_ESCAPE_PATTERN = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
const RELATIVE_URL_PREFIXES = [".", "/"];
const BLANK_URL = "about:blank";
function startsLikeRelativeUrl(value: string): boolean {
  return RELATIVE_URL_PREFIXES.includes(value[0] ?? "");
}
function decodeHtmlEntities(value: string): string {
  return value
    .replace(CONTROL_CHARACTER_PATTERN, "")
    .replace(HTML_ENTITY_PATTERN, (_match, entityCode: string) =>
      String.fromCharCode(Number(entityCode)),
    );
}
function canParseUrl(value: string): boolean {
  return URL.canParse(value);
}
function decodeUriComponentSafely(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
function sanitizeUrl(input: string | null | undefined): string {
  if (!input) return BLANK_URL;
  let sanitized = decodeUriComponentSafely(input.trim());
  let unsafeMatch: RegExpMatchArray | null;
  do {
    sanitized = decodeHtmlEntities(sanitized)
      .replace(HTML_CONTROL_ENTITY_PATTERN, "")
      .replace(CONTROL_CHARACTER_PATTERN, "")
      .replace(WHITESPACE_ESCAPE_PATTERN, "")
      .trim();
    sanitized = decodeUriComponentSafely(sanitized);
    unsafeMatch =
      sanitized.match(CONTROL_CHARACTER_PATTERN) ||
      sanitized.match(HTML_ENTITY_PATTERN) ||
      sanitized.match(HTML_CONTROL_ENTITY_PATTERN) ||
      sanitized.match(WHITESPACE_ESCAPE_PATTERN);
  } while (unsafeMatch && unsafeMatch.length > 0);
  if (!sanitized) return BLANK_URL;
  if (startsLikeRelativeUrl(sanitized)) return sanitized;
  const schemeMatch = sanitized.trimStart().match(URL_SCHEME_PATTERN);
  if (!schemeMatch) return sanitized;
  const normalizedProtocol = schemeMatch[0].toLowerCase().trim();
  if (INVALID_PROTOCOL_PATTERN.test(normalizedProtocol)) return BLANK_URL;
  const normalizedUrl = sanitized.trimStart().replace(/\\/g, "/");
  if (normalizedProtocol === "mailto:" || normalizedProtocol.includes("://")) {
    return normalizedUrl;
  }
  if (normalizedProtocol === "http:" || normalizedProtocol === "https:") {
    if (!canParseUrl(normalizedUrl)) return BLANK_URL;
    const parsedUrl = new URL(normalizedUrl);
    parsedUrl.protocol = parsedUrl.protocol.toLowerCase();
    parsedUrl.hostname = parsedUrl.hostname.toLowerCase();
    return parsedUrl.toString();
  }
  return normalizedUrl;
}
export const dist = createCommonJsModule((exports) => {
  const moduleExports = exports as SanitizedUrlModule;
  Object.defineProperty(moduleExports, "__esModule", {
    value: true,
  });
  moduleExports.sanitizeUrl = sanitizeUrl;
});
