// Restored from ref/webview/assets/workbook-from-markdown-uSruyn_C.js
// Converts the first GitHub-flavored Markdown table into workbook cell values.
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmTableFromMarkdown } from "mdast-util-gfm-table";
import { toString } from "mdast-util-to-string";
import { gfmTable } from "micromark-extension-gfm-table";
const DEFAULT_SHEET_NAME = "Markdown table";
const MAX_SHEET_NAME_LENGTH = 31;
const INVALID_SHEET_NAME_CHARACTERS = /\\|\/|\?|\*|\[|\]|:/g;
const HTML_BREAK = /<br\s*\/?>/gi;
const BREAK_PLACEHOLDER = "BPS_TABLE_BR_PLACEHOLDER";
const CONTENT_REFERENCE = /:{1,3}contentReference\[[^\]]+\](?:\{[^}]*\})?/g;
export function sanitizeSheetName(name?: string): string {
  return (
    (name ?? DEFAULT_SHEET_NAME)
      .trim()
      .replace(INVALID_SHEET_NAME_CHARACTERS, "")
      .trim() || DEFAULT_SHEET_NAME
  ).slice(0, MAX_SHEET_NAME_LENGTH);
}
function cleanCell(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replaceAll(BREAK_PLACEHOLDER, "\n")
    .replace(/\u200b/g, "")
    .replace(CONTENT_REFERENCE, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}
export function buildTableValuesFromMarkdown(markdown: string): string[][] {
  const tree = fromMarkdown(markdown.replace(HTML_BREAK, BREAK_PLACEHOLDER), {
    extensions: [gfmTable()],
    mdastExtensions: [gfmTableFromMarkdown()],
  });
  const table = tree.children.find((node) => node.type === "table");
  if (!table || table.type !== "table") {
    throw new Error("Unable to build workbook: no markdown table rows found.");
  }
  const rows: string[][] = [];
  for (const row of table.children) {
    const values = row.children.map((cell) => cleanCell(toString(cell)));
    if (!values.every((value) => value.length === 0)) rows.push(values);
  }
  return rows;
}
