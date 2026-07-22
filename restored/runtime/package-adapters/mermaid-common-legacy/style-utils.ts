// Restored from ref/webview/assets/chunk-ATLVNIR6-Dsj5_EhJ.js
// Style conversion and rough-drawing options for legacy Mermaid renderers.
import {
  compileStyles,
  isLabelStyle,
  stylesToString,
} from "../mermaid-common-current/style-utils";
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
export { stylesToString };
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
export function initLegacyMermaidStyleUtils(): void {}
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
export { isLabelStyle, compileStyles };
function getStrokeDashArray(value?: string): [number, number] {
  if (!value) return [0, 0];
  const parts = value.trim().split(/\s+/).map(Number);
  const first = Number.isNaN(parts[0]) ? 0 : parts[0];
  if (parts.length === 1) return [first, first];
  return [first, Number.isNaN(parts[1]) ? 0 : parts[1]];
}
