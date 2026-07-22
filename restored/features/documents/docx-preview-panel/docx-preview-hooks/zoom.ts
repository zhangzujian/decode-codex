// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import React from "react";

import {
  centeredDocxPageElement,
  DEFAULT_DOCX_ZOOM_PERCENT,
  fitDocxPreviewToWidth,
} from "../docx-preview-rendering";
import type {
  DocxPreviewZoomMode,
  DocxPreviewZoomState,
  DocxResizeObserverEntry,
  UseDocxPreviewZoomOptions,
} from "./types";

interface ActivePinchZoom {
  distance: number;
  zoomPercent: number;
}

export function useDocxPreviewZoom({
  bodyContainerElementRef,
  computePinchZoomPercent,
  computeWheelZoomPercent,
  defaultZoomPercent = DEFAULT_DOCX_ZOOM_PERCENT,
  measureTouchDistance,
  normalizeZoomPercent,
  useResizeObserverRef,
}: UseDocxPreviewZoomOptions): DocxPreviewZoomState {
  const activePinchRef = React.useRef<ActivePinchZoom | null>(null);
  const [bodyContainerWidth, setBodyContainerWidth] = React.useState<
    number | null
  >(null);
  const [zoomMode, setZoomMode] = React.useState<DocxPreviewZoomMode>({
    kind: "fit-width",
  });
  const zoomPercent =
    zoomMode.kind === "fit-width"
      ? (fitDocxPreviewToWidth({
          bodyContainer: bodyContainerElementRef.current,
          bodyContainerWidth,
          normalizeZoomPercent,
          zoomPercent: defaultZoomPercent,
        }) ?? defaultZoomPercent)
      : zoomMode.zoomPercent;

  const resizeRef = useResizeObserverRef(
    React.useCallback((entry: DocxResizeObserverEntry): void => {
      const nextWidth = Math.floor(entry.contentRect.width);
      setBodyContainerWidth((previousWidth) =>
        previousWidth === nextWidth ? previousWidth : nextWidth,
      );
    }, []),
  );
  const clearActivePinch = React.useCallback((): void => {
    activePinchRef.current = null;
  }, []);
  const setZoomPercent = React.useCallback(
    (nextZoomPercent: number): void => {
      setZoomMode({
        kind: "percentage",
        zoomPercent: normalizeZoomPercent(nextZoomPercent),
      });
    },
    [normalizeZoomPercent],
  );
  const fitToWidth = React.useCallback((): void => {
    const centeredPage =
      zoomMode.kind === "fit-width"
        ? null
        : centeredDocxPageElement(bodyContainerElementRef.current);
    const nextZoomPercent = fitDocxPreviewToWidth({
      bodyContainer: bodyContainerElementRef.current,
      bodyContainerWidth,
      normalizeZoomPercent,
      zoomPercent,
    });
    if (nextZoomPercent == null) return;
    setZoomMode({ kind: "fit-width" });
    if (centeredPage != null) {
      window.requestAnimationFrame(() => {
        centeredPage.scrollIntoView({ block: "center", inline: "center" });
      });
    }
  }, [
    bodyContainerElementRef,
    bodyContainerWidth,
    normalizeZoomPercent,
    zoomMode.kind,
    zoomPercent,
  ]);
  const handleTouchMove = React.useCallback<
    React.TouchEventHandler<HTMLElement>
  >(
    (event) => {
      const activePinch = activePinchRef.current;
      if (event.touches.length !== 2 || activePinch == null) return;
      event.preventDefault();
      const nextDistance = measureTouchDistance(
        event.touches[0].clientX,
        event.touches[0].clientY,
        event.touches[1].clientX,
        event.touches[1].clientY,
      );
      if (nextDistance <= 0 || activePinch.distance <= 0) return;
      setZoomMode({
        kind: "percentage",
        zoomPercent: computePinchZoomPercent({
          initialDistance: activePinch.distance,
          initialZoomPercent: activePinch.zoomPercent,
          nextDistance,
        }),
      });
    },
    [computePinchZoomPercent, measureTouchDistance],
  );
  const handleTouchStart = React.useCallback<
    React.TouchEventHandler<HTMLElement>
  >(
    (event) => {
      if (event.touches.length !== 2) {
        clearActivePinch();
        return;
      }
      event.preventDefault();
      activePinchRef.current = {
        distance: measureTouchDistance(
          event.touches[0].clientX,
          event.touches[0].clientY,
          event.touches[1].clientX,
          event.touches[1].clientY,
        ),
        zoomPercent,
      };
    },
    [clearActivePinch, measureTouchDistance, zoomPercent],
  );
  const handleWheel = React.useCallback<React.WheelEventHandler<HTMLElement>>(
    (event) => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      setZoomMode((currentMode) => ({
        kind: "percentage",
        zoomPercent: computeWheelZoomPercent(
          currentMode.kind === "percentage"
            ? currentMode.zoomPercent
            : zoomPercent,
          event.deltaY,
        ),
      }));
    },
    [computeWheelZoomPercent, zoomPercent],
  );
  const previewStyle = React.useMemo<
    DocxPreviewZoomState["previewStyle"]
  >(() => {
    return { "--codex-docx-preview-zoom": `${zoomPercent / 100}` };
  }, [zoomPercent]);

  return {
    fitToWidth,
    handleTouchCancel: clearActivePinch,
    handleTouchEnd: clearActivePinch,
    handleTouchMove,
    handleTouchStart,
    handleWheel,
    isZoomToFitSelected: zoomMode.kind === "fit-width",
    previewStyle,
    resizeRef,
    setZoomPercent,
    zoomPercent,
  };
}
