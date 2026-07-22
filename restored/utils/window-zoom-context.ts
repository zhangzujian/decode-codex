// Restored from ref/webview/assets/window-zoom-context-BgIKnR06.js
// window-zoom-context-BgIKnR06 chunk restored from the Codex webview bundle.
import React from "react";
import { createPersistedSignal } from "../runtime/persisted-signal";
export const windowZoomContext = React.createContext(1);
export const WindowZoomContext = windowZoomContext;
export const windowZoomPersistedAtom = createPersistedSignal(
  "electron:window-zoom",
  1,
);

export function initWindowZoomContext(): void {}

export function useWindowZoom(): number {
  return React.useContext(windowZoomContext);
}

export function getZoomScaleRatio(value: number, scale: number): number {
  return value / scale;
}
