// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Overlay primitives for the paged-annotation editor: ask-for-edit button,
// highlight/selection rectangles, comment preview bubble, plus the geometry
// helpers that position them over a scaled page layer.
import { useState } from "react";
import type { CSSProperties, MouseEvent, PointerEvent } from "react";
import {
  svgToDataUri,
  parseCommentBody,
  annotationViewportBaseHeight,
} from "../boundaries/onboarding-commons-externals.facade";

const EPSILON = 2.220446049250313e-16;
const ACCENT_COLOR = "#2563eb";
const RECT_GAP = 8;
const PREVIEW_HEIGHT = 32;
const PREVIEW_MAX_WIDTH = 294;
const MARKER_SIZE = 30;

const ACCENT_BORDER_COLOR = `var(--color-text-accent, var(--color-accent-blue, ${ACCENT_COLOR}))`;
const ACCENT_FILL_COLOR = `color-mix(in srgb, var(--color-text-accent, var(--color-accent-blue, ${ACCENT_COLOR})) 20%, transparent)`;
const HIGHLIGHT_TRANSITION =
  "top 0.2s cubic-bezier(0.165, 0.88, 0.44, 1), left 0.2s cubic-bezier(0.165, 0.88, 0.44, 1), width 0.2s cubic-bezier(0.165, 0.88, 0.44, 1), height 0.2s cubic-bezier(0.165, 0.88, 0.44, 1)";
const FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif';

const PREVIEW_BACKGROUND =
  "var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))";
const PREVIEW_FOREGROUND =
  "var(--color-token-foreground, var(--color-token-text-primary, rgb(38, 38, 38)))";
const PREVIEW_BORDER =
  "var(--color-token-border-default, var(--color-token-border-light, rgba(13, 13, 13, 0.08)))";

const CURSOR_SVG = `<svg
  width="26"
  height="25"
  viewBox="0 0 26 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z"
    fill="currentColor"
    stroke="white"
    stroke-width="1.65"
  />
</svg>
`;

const CURSOR_DATA_URI = svgToDataUri(
  CURSOR_SVG.replace("currentColor", ACCENT_COLOR),
);

export const ANNOTATION_CROSSHAIR_CURSOR = `url("${CURSOR_DATA_URI}") 13 12, crosshair`;
export const ANNOTATION_EDITOR_ENTER_CLASS =
  "pointer-events-none absolute z-50 cursor-auto paged-annotation-editor-enter";

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect extends Point, Size {}

export type AskForEditAlignment = "start" | "center" | "end";

export interface AskForEditAnchor {
  placement: "above" | "below";
  point: Point;
  alignment?: AskForEditAlignment;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function isToggleImageCommentShortcut(
  event:
    | KeyboardEvent
    | {
        key: string;
        metaKey: boolean;
        ctrlKey: boolean;
        altKey: boolean;
        shiftKey: boolean;
      },
): boolean {
  return (
    event.key.toLowerCase() === "i" &&
    (event.metaKey || event.ctrlKey) &&
    !event.altKey &&
    !event.shiftKey
  );
}

export function topRightCorner(rect: Rect): Point {
  return { x: rect.x + rect.width, y: rect.y };
}

function topCenterPoint(rect: Rect): Point {
  return { x: rect.x + rect.width / 2, y: rect.y };
}

function defaultAskForEditAnchor(rect: Rect): AskForEditAnchor {
  return { placement: "above", point: topCenterPoint(rect) };
}

function measureElement(element: HTMLElement): Size {
  const bounds = element.getBoundingClientRect();
  return {
    height: element.offsetHeight || bounds.height,
    width: element.offsetWidth || bounds.width,
  };
}

export function applyAbsolutePosition(
  element: HTMLElement | null,
  position: Point,
): void {
  if (element != null) {
    element.style.left = `${position.x}px`;
    element.style.top = `${position.y}px`;
  }
}

function maxButtonX(layerWidth: number, scale: number): number {
  return Math.max(16, layerWidth - PREVIEW_MAX_WIDTH * scale - 16);
}

function maxButtonY(layerHeight: number, scale: number): number {
  return Math.max(16, layerHeight - 120 * scale - 16);
}

function adjustButtonY(value: number, scale: number): number {
  const lift = (annotationViewportBaseHeight - 120) * scale;
  return value - Math.min(lift, Math.max(value - 16, 0));
}

export interface ComputeAskForEditPositionArgs {
  editorScale?: number;
  layer: HTMLElement | null;
  markerPoint: Point;
  pageSize: Size;
}

export function computeAskForEditButtonPosition({
  editorScale = 1,
  layer,
  markerPoint,
  pageSize,
}: ComputeAskForEditPositionArgs): Point | null {
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const layerSize = measureElement(layer);
  if (layerSize.width <= 0 || layerSize.height <= 0) return null;

  const anchorX = (markerPoint.x / pageSize.width) * layerSize.width;
  const anchorY = (markerPoint.y / pageSize.height) * layerSize.height;
  const scale = Math.max(editorScale, EPSILON);
  const boundX = maxButtonX(layerSize.width, scale);
  const boundY = maxButtonY(layerSize.height, scale);
  const clampedY = clamp(anchorY - (44 * scale) / 2, 16, boundY);
  const rightX = anchorX + 27;
  const leftX = anchorX - 27 - PREVIEW_MAX_WIDTH * scale;

  for (const candidateX of [rightX, leftX]) {
    if (candidateX >= 16 && candidateX <= boundX) {
      return { x: candidateX, y: adjustButtonY(clampedY, scale) };
    }
  }

  const centeredX = clamp(
    anchorX - (PREVIEW_MAX_WIDTH * scale) / 2,
    16,
    boundX,
  );
  const belowY = anchorY + 27;
  return belowY <= boundY
    ? { x: centeredX, y: adjustButtonY(belowY, scale) }
    : {
        x: centeredX,
        y: adjustButtonY(clamp(anchorY - 27 - 120 * scale, 16, boundY), scale),
      };
}

export interface ComputeRectAskForEditPositionArgs {
  editorScale?: number;
  layer: HTMLElement | null;
  pageSize: Size;
  rect: Rect;
}

export function computeRectAskForEditPosition({
  editorScale = 1,
  layer,
  pageSize,
  rect,
}: ComputeRectAskForEditPositionArgs): Point | null {
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const layerSize = measureElement(layer);
  if (layerSize.width <= 0 || layerSize.height <= 0) return null;

  const topY = (rect.y / pageSize.height) * layerSize.height;
  const rightX = ((rect.x + rect.width) / pageSize.width) * layerSize.width;
  const bottomY = ((rect.y + rect.height) / pageSize.height) * layerSize.height;
  const scale = Math.max(editorScale, EPSILON);
  const boundX = maxButtonX(layerSize.width, scale);
  const boundY = maxButtonY(layerSize.height, scale);
  const belowRect = bottomY + RECT_GAP;
  const aboveRect = topY - RECT_GAP - 120 * scale;
  const positionY =
    belowRect <= boundY ? belowRect : clamp(aboveRect, 16, boundY);

  return {
    x: clamp(rightX - PREVIEW_MAX_WIDTH * scale, 16, boundX),
    y: adjustButtonY(positionY, scale),
  };
}

function suppressPointerDown(event: PointerEvent<HTMLElement>): void {
  event.preventDefault();
  event.stopPropagation();
}

export interface AskForEditButtonProps {
  anchor?: AskForEditAnchor;
  label: string;
  onClick: () => void;
  pageSize: Size;
  rect: Rect;
  testId?: string;
  zoomScale?: number;
}

export function AskForEditButton({
  anchor,
  label,
  onClick,
  pageSize,
  rect,
  testId,
  zoomScale = 1,
}: AskForEditButtonProps) {
  const resolvedAnchor = anchor ?? defaultAskForEditAnchor(rect);
  const horizontalPercent = (resolvedAnchor.point.x / pageSize.width) * 100;
  const alignment: AskForEditAlignment =
    resolvedAnchor.alignment ??
    (horizontalPercent < 20
      ? "start"
      : horizontalPercent > 80
        ? "end"
        : "center");

  let originX = "center";
  let translateX = "-50%";
  if (alignment === "start") {
    originX = "left";
    translateX = "0";
  } else if (alignment === "end") {
    originX = "right";
    translateX = "-100%";
  }

  const inverseZoom = 1 / Math.max(zoomScale, EPSILON);
  const offset = 6 * inverseZoom;
  const scaleSuffix = inverseZoom === 1 ? "" : ` scale(${inverseZoom})`;
  const left = `${horizontalPercent}%`;
  const top = `${(resolvedAnchor.point.y / pageSize.height) * 100}%`;
  const transform =
    resolvedAnchor.placement === "above"
      ? `translate(${translateX}, calc(-100% - ${offset}px))${scaleSuffix}`
      : `translate(${translateX}, ${offset}px)${scaleSuffix}`;
  const transformOrigin = `${originX} ${resolvedAnchor.placement === "above" ? "bottom" : "top"}`;
  const style: CSSProperties = {
    fontFamily: FONT_FAMILY,
    left,
    top,
    transform,
    transformOrigin,
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };

  return (
    <button
      type="button"
      aria-label={label}
      className="pointer-events-auto absolute z-40 inline-flex h-6 min-w-max cursor-interaction items-center gap-2 rounded-full border-0 bg-white py-[3px] pr-[3px] pl-2 text-[12px] leading-[18px] font-normal tracking-[-0.3px] whitespace-nowrap text-black shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-black/10 hover:bg-[color-mix(in_srgb,white_92%,var(--color-token-foreground)_8%)]"
      data-paged-annotation-ask-for-edit="true"
      data-testid={testId}
      style={style}
      onPointerDown={suppressPointerDown}
      onClick={handleClick}
    >
      <span
        className="inline-flex h-[18px] items-center text-[12px] leading-[18px] font-[400] tracking-[-0.3px]"
        data-paged-annotation-ask-for-edit-label="true"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-[18px] items-center rounded-full bg-[#efefef] px-[6px] text-[12px] leading-[18px] font-[500] tracking-[-0.3px] text-[#6b6b6b]"
        data-paged-annotation-ask-for-edit-shortcut="true"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {getShortcutLabel()}
      </span>
    </button>
  );
}

export interface AnnotationHighlightRectProps {
  bordered?: boolean;
  borderWidth?: number;
  paddingPx?: number;
  paddingX?: number;
  paddingY?: number;
  pageSize: Size;
  rect: Rect;
  testId?: string;
}

export function AnnotationHighlightRect({
  bordered,
  borderWidth,
  paddingPx = 0,
  paddingX,
  paddingY,
  pageSize,
  rect,
  testId,
}: AnnotationHighlightRectProps) {
  const resolvedBorderWidth =
    borderWidth === undefined ? (bordered ? 1 : 0) : borderWidth;
  const horizontalPadding = paddingX === undefined ? paddingPx : paddingX;
  const verticalPadding = paddingY === undefined ? paddingPx : paddingY;

  const heightPercent = (rect.height / pageSize.height) * 100;
  const leftPercent = (rect.x / pageSize.width) * 100;
  const topPercent = (rect.y / pageSize.height) * 100;
  const widthPercent = (rect.width / pageSize.width) * 100;

  const style: CSSProperties = {
    backgroundColor: ACCENT_FILL_COLOR,
    borderColor: ACCENT_BORDER_COLOR,
    borderStyle: "dashed",
    borderWidth: resolvedBorderWidth,
    height:
      verticalPadding === 0
        ? `${heightPercent}%`
        : `calc(${heightPercent}% + ${verticalPadding * 2}px)`,
    left:
      horizontalPadding === 0
        ? `${leftPercent}%`
        : `calc(${leftPercent}% - ${horizontalPadding}px)`,
    top:
      verticalPadding === 0
        ? `${topPercent}%`
        : `calc(${topPercent}% - ${verticalPadding}px)`,
    transition: HIGHLIGHT_TRANSITION,
    width:
      horizontalPadding === 0
        ? `${widthPercent}%`
        : `calc(${widthPercent}% + ${horizontalPadding * 2}px)`,
  };

  return (
    <div
      className="pointer-events-none absolute box-border rounded-[4px]"
      data-testid={testId}
      style={style}
    />
  );
}

export interface AnnotationSelectionRectProps {
  pageSize: Size;
  rect: Rect;
  testId?: string;
}

export function AnnotationSelectionRect({
  pageSize,
  rect,
  testId,
}: AnnotationSelectionRectProps) {
  const style: CSSProperties = {
    backgroundColor: ACCENT_FILL_COLOR,
    borderColor: ACCENT_BORDER_COLOR,
    borderStyle: "dashed",
    borderWidth: 2,
    height: `${(rect.height / pageSize.height) * 100}%`,
    left: `${(rect.x / pageSize.width) * 100}%`,
    top: `${(rect.y / pageSize.height) * 100}%`,
    width: `${(rect.width / pageSize.width) * 100}%`,
  };

  return (
    <div
      className="pointer-events-none absolute box-border shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]"
      data-testid={testId}
      style={style}
    />
  );
}

interface CommentPreviewPositionArgs {
  layer: HTMLElement | null;
  pageSize: Size;
  point: Point;
  previewWidth: number;
}

function computeCommentPreviewPosition({
  layer,
  pageSize,
  point,
  previewWidth,
}: CommentPreviewPositionArgs): CSSProperties | null {
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const { height, width } = measureElement(layer);
  const anchorX = (point.x / pageSize.width) * width;
  const anchorY = (point.y / pageSize.height) * height;
  const maxWidth = Math.min(PREVIEW_MAX_WIDTH, Math.max(1, width - 32));
  const verticalGap = MARKER_SIZE / 2 + 12;
  const halfWidth =
    (previewWidth === 0 ? maxWidth : Math.min(previewWidth, maxWidth)) / 2;
  const left = clamp(
    anchorX,
    16 + halfWidth,
    Math.max(16 + halfWidth, width - 16 - halfWidth),
  );
  const aboveTop = anchorY - verticalGap - PREVIEW_HEIGHT;

  if (aboveTop >= 16) {
    return { left, maxWidth, top: aboveTop, transform: "translateX(-50%)" };
  }

  const belowTop = anchorY + verticalGap;
  return belowTop + PREVIEW_HEIGHT <= height - 16
    ? { left, maxWidth, top: belowTop, transform: "translateX(-50%)" }
    : {
        left,
        maxWidth,
        top: clamp(aboveTop, 16, Math.max(16, height - PREVIEW_HEIGHT - 16)),
        transform: "translateX(-50%)",
      };
}

function renderCommentPreviewBody(body: string) {
  return parseCommentBody(body).map(
    (
      segment: { type: string; text?: string; label?: string },
      index: number,
    ) => {
      switch (segment.type) {
        case "text":
          return segment.text;
        case "mention":
          return (
            <strong
              key={`paged-annotation-comment-preview-mention-${index}`}
              className="font-semibold"
            >
              {segment.label}
            </strong>
          );
        default:
          return null;
      }
    },
  );
}

function getShortcutLabel(): string {
  return typeof navigator !== "undefined" &&
    /Win|Linux/.test(navigator.platform)
    ? "Ctrl I"
    : "⌘I";
}

export interface CommentPreviewProps {
  body: string;
  layer: HTMLElement | null;
  pageSize: Size;
  point: Point;
  testId?: string;
}

export function CommentPreview({
  body,
  layer,
  pageSize,
  point,
  testId,
}: CommentPreviewProps) {
  const [previewWidth, setPreviewWidth] = useState(0);
  const measureRef = (element: HTMLDivElement | null) => {
    if (element == null) return;
    const nextWidth = element.offsetWidth;
    setPreviewWidth((current) => (current === nextWidth ? current : nextWidth));
  };

  const position = computeCommentPreviewPosition({
    layer,
    pageSize,
    point,
    previewWidth,
  });
  if (position == null) return null;

  const style: CSSProperties = {
    ...position,
    backgroundColor: PREVIEW_BACKGROUND,
    borderColor: PREVIEW_BORDER,
    color: PREVIEW_FOREGROUND,
    height: PREVIEW_HEIGHT,
    width: "fit-content",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  return (
    <div
      ref={measureRef}
      className="pointer-events-none absolute z-[5] flex items-center overflow-hidden rounded-lg border px-2 py-1 font-sans text-sm shadow-lg select-none"
      data-testid={testId}
      style={style}
    >
      <div className="min-w-0 overflow-hidden leading-5 text-ellipsis whitespace-nowrap text-inherit">
        {renderCommentPreviewBody(body)}
      </div>
    </div>
  );
}
