// Restored from ref/webview/assets/esm-CuAuNray.js
// Thin compatibility shim backed by @iconify/utils.
import {
  getIconData,
  iconToSVG,
  replaceIDs,
  stringToIcon,
} from "@iconify/utils";
export * from "@iconify/utils";

export const parseIconName = stringToIcon;
export const resolveIconData = getIconData;
export const iconToSvg = iconToSVG;
export const replaceIconIds = replaceIDs;
export function initIconifyCoreRuntimeChunk(): void {}
export function initIconifyCoreChunk(): void {}

export function wrapSvgContent(
  body: string,
  attributes: Record<string, string>,
): string {
  let attributeText = body.includes("xlink:")
    ? ' xmlns:xlink="http://www.w3.org/1999/xlink"'
    : "";
  for (const [name, value] of Object.entries(attributes)) {
    attributeText += ` ${name}="${value}"`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg"${attributeText}>${body}</svg>`;
}

export function dedentTemplate(
  strings: TemplateStringsArray | string | string[],
  ...values: unknown[]
): string {
  const segments = Array.from(
    typeof strings === "string" ? [strings] : strings,
  );
  segments[segments.length - 1] = segments
    .at(-1)!
    .replace(/\r?\n([\t ]*)$/, "");
  const indentation = segments.flatMap((segment) =>
    [...segment.matchAll(/\n([\t ]+|(?!\s).)/g)].map(
      (match) => match[0].match(/[\t ]/g)?.length ?? 0,
    ),
  );
  if (indentation.length) {
    const trimPattern = new RegExp(`\n[\t ]{${Math.min(...indentation)}}`, "g");
    segments.forEach((segment, index) => {
      segments[index] = segment.replace(trimPattern, "\n");
    });
  }
  let result = segments[0].replace(/^\r?\n/, "");
  values.forEach((value, index) => {
    const indent = result.match(/(?:^|\n)( *)$/)?.[1] ?? "";
    const resolved =
      typeof value === "string"
        ? value.replace(/\n/g, `\n${indent}`)
        : String(value);
    result += resolved + segments[index + 1];
  });
  return result;
}
