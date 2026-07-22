// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// Client-rectangle merging, bounds, and DOM selection direction helpers.

import type { ClientRectLike } from "./types";

export function mergeClientRectsByLine(
  clientRects: readonly ClientRectLike[],
): ClientRectLike[] {
  const mergedRects: ClientRectLike[] = [];
  const sortedRects = clientRects
    .filter((rect) => rect.width > 0 && rect.height > 0)
    .sort((left, right) => left.top - right.top || left.left - right.left);

  for (const rect of sortedRects) {
    const target = mergedRects.find((lineRect) =>
      clientRectsShareLine(lineRect, rect),
    );
    if (target == null) {
      mergedRects.push({ ...rect });
      continue;
    }
    target.left = Math.min(target.left, rect.left);
    target.top = Math.min(target.top, rect.top);
    target.right = Math.max(target.right, rect.right);
    target.bottom = Math.max(target.bottom, rect.bottom);
    target.width = target.right - target.left;
    target.height = target.bottom - target.top;
  }

  return mergedRects;
}

export function clientRectsShareLine(
  left: ClientRectLike,
  right: ClientRectLike,
): boolean {
  return (
    Math.min(left.bottom, right.bottom) - Math.max(left.top, right.top) >=
    Math.min(left.height, right.height) * 0.5
  );
}

export function boundingClientRect(
  clientRects: readonly ClientRectLike[],
): ClientRectLike | null {
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;

  for (const rect of clientRects) {
    if (rect.width <= 0 || rect.height <= 0) continue;
    left = Math.min(left, rect.left);
    top = Math.min(top, rect.top);
    right = Math.max(right, rect.right);
    bottom = Math.max(bottom, rect.bottom);
  }

  return !Number.isFinite(left) ||
    !Number.isFinite(top) ||
    !Number.isFinite(right) ||
    !Number.isFinite(bottom)
    ? null
    : { bottom, height: bottom - top, left, right, top, width: right - left };
}

export function selectionIsForward(selection: Selection): boolean {
  if (selection.anchorNode == null || selection.focusNode == null) return true;
  if (selection.anchorNode === selection.focusNode) {
    return selection.focusOffset >= selection.anchorOffset;
  }
  const relation = selection.anchorNode.compareDocumentPosition(
    selection.focusNode,
  );
  return relation === Node.DOCUMENT_POSITION_FOLLOWING
    ? true
    : relation !== Node.DOCUMENT_POSITION_PRECEDING;
}
