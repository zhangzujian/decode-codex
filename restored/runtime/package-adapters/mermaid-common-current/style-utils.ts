// Restored from ref/webview/assets/chunk-X2U36JSP-B_hQhnS7.js
// Style conversion and rough-drawing options for current Mermaid renderers.
import { getConfig } from "./index";
type StyledNode = {
  cssCompiledStyles?: string[];
  cssStyles?: string[];
  labelStyle?: string[];
};
type MermaidConfig = {
  handDrawnSeed?: number;
  themeVariables?: {
    mainBkg?: string;
    nodeBorder?: string;
  };
};
export function stylesToString(node: StyledNode): {
  backgroundStyles: string[];
  borderStyles: string[];
  labelStyles: string;
  nodeStyles: string;
  stylesArray: Map<string, string>;
} {
  const { stylesArray } = compileStyles(node);
  const labelStyles: string[] = [];
  const nodeStyles: string[] = [];
  const borderStyles: string[] = [];
  const backgroundStyles: string[] = [];
  for (const [property, value] of stylesArray) {
    const style = `${property}:${value} !important`;
    if (isLabelStyle(property)) labelStyles.push(style);
    else {
      nodeStyles.push(style);
      if (property.includes("stroke")) borderStyles.push(style);
      if (property === "fill") backgroundStyles.push(style);
    }
  }
  return {
    backgroundStyles,
    borderStyles,
    labelStyles: labelStyles.join(";"),
    nodeStyles: nodeStyles.join(";"),
    stylesArray,
  };
}
export function solidStateFill(color: string): Record<string, unknown> {
  const { handDrawnSeed: seed } = getConfig() as MermaidConfig;
  return {
    fill: color,
    fillWeight: 2,
    hachureAngle: 120,
    hachureGap: 4,
    roughness: 0.7,
    seed,
    stroke: color,
  };
}
export function initCurrentMermaidStyleUtils(): void {}
export function userNodeOverrides(
  node: StyledNode,
  overrides: Record<string, unknown>,
): Record<string, unknown> {
  const { handDrawnSeed: seed, themeVariables = {} } =
    getConfig() as MermaidConfig;
  const { stylesMap } = compileStyles(node);
  return Object.assign(
    {
      fill: stylesMap.get("fill") || themeVariables.mainBkg,
      fillLineDash: [0, 0],
      fillStyle: "hachure",
      fillWeight: 4,
      hachureGap: 5.2,
      roughness: 0.7,
      seed,
      stroke: stylesMap.get("stroke") || themeVariables.nodeBorder,
      strokeLineDash: getStrokeDashArray(stylesMap.get("stroke-dasharray")),
      strokeWidth: stylesMap.get("stroke-width")?.replace("px", "") || 1.3,
    },
    overrides,
  );
}
export function isLabelStyle(property: string): boolean {
  return labelStyleProperties.has(property);
}
export function compileStyles(node: StyledNode): {
  stylesArray: Map<string, string>;
  stylesMap: Map<string, string>;
} {
  const stylesMap = stylesToMap([
    ...(node.cssCompiledStyles ?? []),
    ...(node.cssStyles ?? []),
    ...(node.labelStyle ?? []),
  ]);
  return {
    stylesArray: new Map(stylesMap),
    stylesMap,
  };
}
const labelStyleProperties = new Set([
  "color",
  "font-family",
  "font-size",
  "font-style",
  "font-weight",
  "hyphens",
  "letter-spacing",
  "line-height",
  "overflow-wrap",
  "text-align",
  "text-decoration",
  "text-overflow",
  "text-shadow",
  "text-transform",
  "white-space",
  "word-break",
  "word-spacing",
  "word-wrap",
]);
function stylesToMap(styles: string[]): Map<string, string> {
  const result = new Map<string, string>();
  for (const style of styles) {
    const [property, value] = style.split(":");
    result.set(property.trim(), value?.trim());
  }
  return result;
}
function getStrokeDashArray(value?: string): [number, number] {
  if (!value) return [0, 0];
  const parts = value.trim().split(/\s+/).map(Number);
  const first = Number.isNaN(parts[0]) ? 0 : parts[0];
  if (parts.length === 1) return [first, first];
  return [first, Number.isNaN(parts[1]) ? 0 : parts[1]];
}
