// Restored from ref/webview/assets/chunk-EDXVE4YY-CTb4qBXR.js
// SVG viewport sizing helpers used by current Mermaid renderers.
type Bounds = {
  height: number;
  width: number;
  x: number;
  y: number;
};
type SvgSelection = {
  attr(name: string, value: number | string): SvgSelection;
  node(): {
    getBBox(): Bounds;
  } | null;
};
export function setupViewPortForSvg(
  svg: SvgSelection,
  padding: number,
  className: string,
  useMaxWidth: boolean,
): void {
  svg.attr("class", className);
  const { height, width, x, y } = calculateDimensionsWithPadding(svg, padding);
  configureSvgSize(svg, height, width, useMaxWidth);
  svg.attr("viewBox", createViewBox(x, y, width, height, padding));
}
export function initSvgViewportHelpers(): void {}
function calculateDimensionsWithPadding(
  svg: SvgSelection,
  padding: number,
): Bounds {
  const bounds = svg.node()?.getBBox() ?? {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  };
  return {
    height: bounds.height + padding * 2,
    width: bounds.width + padding * 2,
    x: bounds.x,
    y: bounds.y,
  };
}
function configureSvgSize(
  svg: SvgSelection,
  height: number,
  width: number,
  useMaxWidth: boolean,
): void {
  if (useMaxWidth) {
    svg.attr("height", "100%").attr("style", `max-width: ${width}px;`);
  } else {
    svg.attr("height", height).attr("width", width);
  }
}
function createViewBox(
  x: number,
  y: number,
  width: number,
  height: number,
  padding: number,
): string {
  return `${x - padding} ${y - padding} ${width} ${height}`;
}
