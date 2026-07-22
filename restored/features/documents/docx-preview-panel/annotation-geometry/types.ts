// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// Client rectangle and pointer-drag shapes used by DOCX annotations.

import type { Point } from "../../../../image-side-panel/paged-annotation-overlays";

export type ClientRectLike = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

export type PointerDragState = {
  pointerId: number;
  start: Point;
  current: Point;
  clientStart: Point;
  clientCurrent: Point;
};
