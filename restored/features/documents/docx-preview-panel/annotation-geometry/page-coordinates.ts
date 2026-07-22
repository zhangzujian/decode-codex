// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// Conversion between client coordinates and DOCX page coordinates.

import type {
  Point,
  Rect,
  Size,
} from "../../../../image-side-panel/paged-annotation-overlays";
import { clamp } from "../../../../image-side-panel/paged-annotation-overlay-geometry";
import { boundingClientRect } from "./client-rects";
import type { ClientRectLike } from "./types";

export function pagePointFromPointerEvent(
  event: Pick<PointerEvent, "clientX" | "clientY" | "currentTarget">,
  pageSize: Size,
): Point | null {
  const target =
    event.currentTarget instanceof Element ? event.currentTarget : null;
  if (target == null) return null;
  const bounds = target.getBoundingClientRect();
  return bounds.width <= 0 || bounds.height <= 0
    ? null
    : {
        x: clamp(
          ((event.clientX - bounds.left) / bounds.width) * pageSize.width,
          0,
          pageSize.width,
        ),
        y: clamp(
          ((event.clientY - bounds.top) / bounds.height) * pageSize.height,
          0,
          pageSize.height,
        ),
      };
}

export function rectFromClientRects({
  clientRects,
  pageElement,
  pageSize,
}: {
  clientRects: readonly ClientRectLike[];
  pageElement: Element;
  pageSize: Size;
}): Rect | null {
  const pageBounds = pageElement.getBoundingClientRect();
  if (pageBounds.width <= 0 || pageBounds.height <= 0) return null;
  const bounds = boundingClientRect(clientRects);
  if (bounds == null) return null;

  const x = clamp(
    ((bounds.left - pageBounds.left) / pageBounds.width) * pageSize.width,
    0,
    pageSize.width,
  );
  const y = clamp(
    ((bounds.top - pageBounds.top) / pageBounds.height) * pageSize.height,
    0,
    pageSize.height,
  );
  const right = clamp(
    ((bounds.right - pageBounds.left) / pageBounds.width) * pageSize.width,
    0,
    pageSize.width,
  );
  const bottom = clamp(
    ((bounds.bottom - pageBounds.top) / pageBounds.height) * pageSize.height,
    0,
    pageSize.height,
  );

  return right <= x || bottom <= y
    ? null
    : { x, y, width: right - x, height: bottom - y };
}

export function pagePointFromClientCoordinates({
  clientX,
  clientY,
  pageElement,
  pageSize,
}: {
  clientX: number;
  clientY: number;
  pageElement: Element;
  pageSize: Size;
}): Point {
  const bounds = pageElement.getBoundingClientRect();
  return {
    x: clamp(
      ((clientX - bounds.left) / bounds.width) * pageSize.width,
      0,
      pageSize.width,
    ),
    y: clamp(
      ((clientY - bounds.top) / bounds.height) * pageSize.height,
      0,
      pageSize.height,
    ),
  };
}
