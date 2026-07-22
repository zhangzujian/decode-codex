// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// DOCX annotation marker placement and pointer-drag anchor construction.

import {
  computeAskForEditButtonPosition,
  computeRectAskForEditPosition,
  topRightCorner,
  type Point,
  type Rect,
  type Size,
} from "../../../../image-side-panel/paged-annotation-overlays";
import { clamp } from "../../../../image-side-panel/paged-annotation-overlay-geometry";
import type { DocxAnnotationAnchor } from "../annotation-types";
import type { PointerDragState } from "./types";

export function computeDocxAskForEditPosition({
  anchor,
  editorScale,
  layer,
  pageSize,
}: {
  anchor: DocxAnnotationAnchor;
  editorScale: number;
  layer: HTMLElement | null;
  pageSize: Size;
}): Point | null {
  return anchor.kind === "region" && anchor.selectionKind != null
    ? computeRectAskForEditPosition({
        editorScale,
        layer,
        pageSize,
        rect: anchor.rect,
      })
    : computeAskForEditButtonPosition({
        editorScale,
        layer,
        markerPoint:
          anchor.kind === "region" ? topRightCorner(anchor.rect) : anchor.point,
        pageSize,
      });
}

export function annotationMarkerPoint(anchor: DocxAnnotationAnchor): Point {
  return anchor.kind === "region"
    ? (anchor.askForEditAnchor?.point ?? topCenterPoint(anchor.rect))
    : anchor.point;
}

export function pointerDragMoved(dragState: PointerDragState): boolean {
  return (
    Math.abs(dragState.clientCurrent.x - dragState.clientStart.x) >= 3 ||
    Math.abs(dragState.clientCurrent.y - dragState.clientStart.y) >= 3
  );
}

export function anchorFromPointerDrag(
  dragState: Pick<PointerDragState, "start" | "current">,
  forceRegion: boolean = false,
): DocxAnnotationAnchor {
  const rect = rectFromPoints(dragState.start, dragState.current);
  return !forceRegion && rect.width < 8 && rect.height < 8
    ? { kind: "point", point: dragState.current }
    : { kind: "region", rect };
}

export function rectFromPoints(start: Point, current: Point): Rect {
  return {
    x: Math.min(start.x, current.x),
    y: Math.min(start.y, current.y),
    width: Math.abs(start.x - current.x),
    height: Math.abs(start.y - current.y),
  };
}

export function clampToRange(value: number, min: number, max: number): number {
  return clamp(value, min, max);
}

export function topCenterPoint(rect: Rect): Point {
  return { x: rect.x + rect.width / 2, y: rect.y };
}
