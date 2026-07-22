import type React from "react";
import type { CSSProperties, RefCallback } from "react";

import type { DocxRenderAsync } from "../docx-preview-rendering";

export type DocxPreviewLoadState = "loading" | "ready" | "error";

export interface UseDocxPreviewRenderStateOptions {
  bodyContainerElementRef?: React.MutableRefObject<HTMLElement | null>;
  bytes: Blob | BufferSource;
  onPagesRendered: (bodyContainer: HTMLElement) => void;
  renderAsync: DocxRenderAsync | null;
  styleText: string;
}

export interface DocxPreviewRenderState {
  bodyContainerElementRef: React.MutableRefObject<HTMLElement | null>;
  bodyContainerRef: RefCallback<HTMLElement>;
  loadState: DocxPreviewLoadState;
  pageElements: HTMLElement[];
  styleContainerRef: RefCallback<HTMLElement>;
  totalPages: number;
}

export type DocxPreviewZoomMode =
  { kind: "fit-width" } | { kind: "percentage"; zoomPercent: number };

export interface DocxResizeObserverEntry {
  contentRect: { width: number };
}

export type UseDocxResizeObserverRef = (
  onResize: (entry: DocxResizeObserverEntry) => void,
) => RefCallback<HTMLElement>;

export type NormalizeZoomPercent = (zoomPercent: number) => number;

export interface DocxPinchZoomInput {
  initialDistance: number;
  initialZoomPercent: number;
  nextDistance: number;
}

export type ComputePinchZoomPercent = (input: DocxPinchZoomInput) => number;
export type ComputeWheelZoomPercent = (
  currentZoomPercent: number,
  deltaY: number,
) => number;
export type MeasureTouchDistance = (
  startClientX: number,
  startClientY: number,
  endClientX: number,
  endClientY: number,
) => number;

export interface UseDocxPreviewZoomOptions {
  bodyContainerElementRef: React.MutableRefObject<HTMLElement | null>;
  computePinchZoomPercent: ComputePinchZoomPercent;
  computeWheelZoomPercent: ComputeWheelZoomPercent;
  defaultZoomPercent?: number;
  measureTouchDistance: MeasureTouchDistance;
  normalizeZoomPercent: NormalizeZoomPercent;
  useResizeObserverRef: UseDocxResizeObserverRef;
}

export interface DocxPreviewZoomState {
  fitToWidth: () => void;
  handleTouchCancel: () => void;
  handleTouchEnd: () => void;
  handleTouchMove: React.TouchEventHandler<HTMLElement>;
  handleTouchStart: React.TouchEventHandler<HTMLElement>;
  handleWheel: React.WheelEventHandler<HTMLElement>;
  isZoomToFitSelected: boolean;
  previewStyle: CSSProperties & { "--codex-docx-preview-zoom": string };
  resizeRef: RefCallback<HTMLElement>;
  setZoomPercent: (zoomPercent: number) => void;
  zoomPercent: number;
}

export interface UseDocxPageNavigationOptions {
  bodyContainerElementRef?: React.MutableRefObject<HTMLElement | null>;
  zoomScale: number;
}

export interface DocxPageNavigation {
  bodyContainerElementRef: React.MutableRefObject<HTMLElement | null>;
  cancelPageScroll: () => void;
  flushPendingPageScroll: (bodyContainer: HTMLElement) => void;
  navigateToPage: (pageNumber: number) => void;
}
