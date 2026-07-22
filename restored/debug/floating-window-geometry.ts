// Restored from ref/webview/assets/debug-floating-window-geometry-DwKaNL6x.js
// Geometry helpers for sizing, clamping, and resizing the debug floating window.
const MIN_VISIBLE_WIDTH_PX = 96;
const MIN_VISIBLE_HEIGHT_PX = 40;
const MIN_WINDOW_WIDTH_PX = 480;
const MIN_WINDOW_HEIGHT_PX = 320;
export type FloatingWindowBounds = {
  height: number;
  width: number;
  x: number;
  y: number;
};
export type FloatingWindowViewport = {
  height: number;
  topInset?: number;
  width: number;
};
export type FloatingWindowSizeLimits = {
  minHeight?: number;
  minWidth?: number;
};
export type FloatingWindowResizeDelta = {
  x: number;
  y: number;
};
export function initDebugFloatingWindowGeometryChunk(): void {}
export function getDefaultDebugFloatingWindowBounds({
  height,
  topInset = 0,
  width,
}: FloatingWindowViewport): FloatingWindowBounds {
  const windowWidth = Math.min(920, width - 32);
  const availableHeight = height - topInset;
  const windowHeight = Math.min(840, availableHeight - 32);
  return {
    height: Math.max(MIN_WINDOW_HEIGHT_PX, windowHeight),
    width: Math.max(MIN_WINDOW_WIDTH_PX, windowWidth),
    x: Math.round((width - windowWidth) / 2),
    y: topInset + Math.round((availableHeight - windowHeight) / 2),
  };
}
export function clampDebugFloatingWindowBounds(
  bounds: FloatingWindowBounds,
  viewport: FloatingWindowViewport,
  limits: FloatingWindowSizeLimits = {},
): FloatingWindowBounds {
  const topInset = viewport.topInset ?? 0;
  const availableHeight = viewport.height - topInset;
  const minWidth = limits.minWidth ?? MIN_WINDOW_WIDTH_PX;
  const minHeight = limits.minHeight ?? MIN_WINDOW_HEIGHT_PX;
  const width = Math.max(minWidth, Math.min(bounds.width, viewport.width));
  return {
    height: Math.max(minHeight, Math.min(bounds.height, availableHeight)),
    width,
    x: Math.min(
      viewport.width - MIN_VISIBLE_WIDTH_PX,
      Math.max(MIN_VISIBLE_WIDTH_PX - width, bounds.x),
    ),
    y: Math.min(
      viewport.height - MIN_VISIBLE_HEIGHT_PX,
      Math.max(topInset, bounds.y),
    ),
  };
}
export function resizeDebugFloatingWindowBounds(
  bounds: FloatingWindowBounds,
  delta: FloatingWindowResizeDelta,
  viewport: FloatingWindowViewport,
  limits: FloatingWindowSizeLimits = {},
): FloatingWindowBounds {
  return clampDebugFloatingWindowBounds(
    {
      ...bounds,
      height: bounds.height + delta.y,
      width: bounds.width + delta.x,
    },
    viewport,
    limits,
  );
}
