// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// Selection rectangles and ask-for-edit anchor placement.

import type {
  Point,
  Rect,
  Size,
} from "../../../../image-side-panel/paged-annotation-overlays";
import {
  boundingClientRect,
  mergeClientRectsByLine,
  selectionIsForward,
} from "./client-rects";
import {
  pagePointFromClientCoordinates,
  rectFromClientRects,
} from "./page-coordinates";
import type { ClientRectLike } from "./types";

export function rectsFromSelectionClientRects({
  clientRects,
  pageElement,
  pageSize,
}: {
  clientRects: readonly ClientRectLike[];
  pageElement: Element;
  pageSize: Size;
}): Rect[] {
  const rects: Rect[] = [];
  for (const lineRect of mergeClientRectsByLine(clientRects)) {
    const pageRect = rectFromClientRects({
      clientRects: [lineRect],
      pageElement,
      pageSize,
    });
    if (pageRect != null) rects.push(pageRect);
  }
  return rects;
}

export function selectionAskForEditAnchor({
  clientRects,
  pageElement,
  pageSize,
  selection,
}: {
  clientRects: readonly ClientRectLike[];
  pageElement: Element;
  pageSize: Size;
  selection: Selection;
}): { placement: "above" | "below"; point: Point } | null {
  const pageBounds = pageElement.getBoundingClientRect();
  if (
    pageBounds.width <= 0 ||
    pageBounds.height <= 0 ||
    clientRects.length === 0
  ) {
    return null;
  }
  const bounds = boundingClientRect(clientRects);
  if (bounds == null) return null;

  const forward = selectionIsForward(selection);
  const terminalRect = forward
    ? clientRects[clientRects.length - 1]
    : clientRects[0];
  if (terminalRect == null) return null;

  const terminalCenterY = terminalRect.top + terminalRect.height / 2;
  const selectionCenterY = bounds.top + bounds.height / 2;
  const hasRoomAbove = terminalRect.top - 6 - 28 >= pageBounds.top;
  const hasRoomBelow = terminalRect.bottom + 6 + 28 <= pageBounds.bottom;
  const placement =
    terminalCenterY > selectionCenterY && hasRoomBelow
      ? "below"
      : hasRoomAbove
        ? "above"
        : "below";

  return {
    placement,
    point: pagePointFromClientCoordinates({
      clientX: forward ? terminalRect.right : terminalRect.left,
      clientY: placement === "above" ? terminalRect.top : terminalRect.bottom,
      pageElement,
      pageSize,
    }),
  };
}
