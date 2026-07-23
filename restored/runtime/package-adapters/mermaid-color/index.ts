// Restored from ref/webview/assets/dist-CKldyVGb.js
// Compatibility surface for Mermaid's bundled color helpers.
import {
  adjust as adjustColor,
  channel as colorChannel,
  darken,
  invert as invertColorBase,
  isDark,
  lighten,
  rgba,
  transparentize,
} from "khroma";
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
export function initMermaidColorUtils(): void {}
export function initLighten(): void {}
