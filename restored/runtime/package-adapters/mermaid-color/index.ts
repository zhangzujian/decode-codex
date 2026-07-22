// Restored from ref/webview/assets/dist-CKldyVGb.js
// Compatibility surface for Mermaid's bundled color helpers.
import {
  adjustColor,
  colorChannel,
  darken,
  initMermaidColorUtils,
  invertColor as invertColorBase,
  isDark,
  lighten,
  rgba,
  transparentize,
} from "../../../vendor/mermaid-color-utils";
export {
  adjustColor,
  colorChannel,
  darken,
  isDark,
  lighten,
  rgba,
  transparentize,
};
export function invertColor(color: string, weight: number = 100): string {
  return invertColorBase(color, weight).replace(/^rgba\((.*), 1\)$/, "rgb($1)");
}
export function initAdjustColor(): void {}
export function initIsDark(): void {}
export function initRgba(): void {}
export function initColorChannel(): void {}
export function initDarken(): void {}
export function initInvertColor(): void {}
export function initTransparentize(): void {}
export { initMermaidColorUtils };
export function initLighten(): void {}
