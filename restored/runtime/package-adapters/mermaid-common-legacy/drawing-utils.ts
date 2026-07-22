// Restored from ref/webview/assets/chunk-TZMSLE5B-T-7HFZzw.js
// Basic SVG drawing helpers shared by legacy Mermaid diagrams.
import { sanitizeUrl } from "@braintree/sanitize-url";
type SvgSelection = {
  append(tagName: string): SvgSelection;
  attr(name: string, value: number | string): SvgSelection;
  lower(): SvgSelection;
  style(name: string, value: string): SvgSelection;
  text(value: string): SvgSelection;
};
type RectOptions = {
  attrs?: Record<string, number | string>;
  class?: string;
  fill: string;
  height: number;
  name?: string;
  rx?: number;
  ry?: number;
  stroke: string;
  width: number;
  x: number;
  y: number;
};
type TextOptions = {
  anchor: string;
  class?: string;
  text: string;
  textMargin: number;
  x: number;
  y: number;
};
export function drawText(
  parent: SvgSelection,
  options: TextOptions,
): SvgSelection {
  const text = parent
    .append("text")
    .attr("x", options.x)
    .attr("y", options.y)
    .attr("class", "legend")
    .style("text-anchor", options.anchor);
  if (options.class) text.attr("class", options.class);
  text
    .append("tspan")
    .attr("x", options.x + options.textMargin * 2)
    .text(options.text.replace(/<br\s*\/?>/gi, " "));
  return text;
}
export function initLegacyMermaidDrawingHelpers(): void {}
export function drawRect(
  parent: SvgSelection,
  options: RectOptions,
): SvgSelection {
  const rect = parent
    .append("rect")
    .attr("x", options.x)
    .attr("y", options.y)
    .attr("fill", options.fill)
    .attr("stroke", options.stroke)
    .attr("width", options.width)
    .attr("height", options.height);
  if (options.name) rect.attr("name", options.name);
  if (options.rx) rect.attr("rx", options.rx);
  if (options.ry) rect.attr("ry", options.ry);
  for (const [name, value] of Object.entries(options.attrs ?? {})) {
    rect.attr(name, value);
  }
  if (options.class) rect.attr("class", options.class);
  return rect;
}
export function drawEmbeddedImage(
  parent: SvgSelection,
  x: number,
  y: number,
  url: string,
): void {
  parent
    .append("use")
    .attr("x", x)
    .attr("y", y)
    .attr("xlink:href", `#${sanitizeUrl(url)}`);
}
export function getNoteRect(): RectOptions {
  return {
    anchor: "start",
    fill: "#EDF2AE",
    height: 100,
    rx: 0,
    ry: 0,
    stroke: "#666",
    width: 100,
    x: 0,
    y: 0,
  } as RectOptions;
}
export function drawImage(
  parent: SvgSelection,
  x: number,
  y: number,
  url: string,
): void {
  parent
    .append("image")
    .attr("x", x)
    .attr("y", y)
    .attr("xlink:href", sanitizeUrl(url));
}
export function getTextObject(): TextOptions & Record<string, unknown> {
  return {
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0,
    style: "#666",
    text: "",
    textMargin: 0,
    tspan: true,
    width: 100,
    x: 0,
    y: 0,
  };
}
export function drawBackgroundRect(
  parent: SvgSelection,
  options: {
    fill: string;
    startx: number;
    starty: number;
    stopx: number;
    stopy: number;
    stroke: string;
  },
): void {
  drawRect(parent, {
    class: "rect",
    fill: options.fill,
    height: options.stopy - options.starty,
    stroke: options.stroke,
    width: options.stopx - options.startx,
    x: options.startx,
    y: options.starty,
  }).lower();
}
