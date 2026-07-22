// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import React from "react";

import { scrollToDocxPage } from "../docx-preview-rendering";
import type { DocxPageNavigation, UseDocxPageNavigationOptions } from "./types";

export function useDocxPageNavigation({
  bodyContainerElementRef: providedBodyContainerElementRef,
  zoomScale,
}: UseDocxPageNavigationOptions): DocxPageNavigation {
  const ownedBodyContainerElementRef = React.useRef<HTMLElement | null>(null);
  const bodyContainerElementRef =
    providedBodyContainerElementRef ?? ownedBodyContainerElementRef;
  const pendingPageNumberRef = React.useRef<number | null>(null);
  const scrollAnimationFrameRef = React.useRef<number | null>(null);

  const cancelPageScroll = React.useCallback((): void => {
    if (scrollAnimationFrameRef.current == null) return;
    window.cancelAnimationFrame(scrollAnimationFrameRef.current);
    scrollAnimationFrameRef.current = null;
  }, []);

  const navigateToPage = React.useCallback(
    (pageNumber: number): void => {
      const bodyContainer = bodyContainerElementRef.current;
      if (
        bodyContainer == null ||
        !scrollToDocxPage({
          animationFrameRef: scrollAnimationFrameRef,
          container: bodyContainer,
          pageNumber,
          zoomScale,
        })
      ) {
        pendingPageNumberRef.current = pageNumber;
        return;
      }
      pendingPageNumberRef.current = null;
    },
    [bodyContainerElementRef, zoomScale],
  );

  const flushPendingPageScroll = React.useCallback(
    (bodyContainer: HTMLElement): void => {
      const pendingPageNumber = pendingPageNumberRef.current;
      if (pendingPageNumber == null) return;
      if (
        scrollToDocxPage({
          animationFrameRef: scrollAnimationFrameRef,
          container: bodyContainer,
          pageNumber: pendingPageNumber,
          zoomScale,
        })
      ) {
        pendingPageNumberRef.current = null;
      }
    },
    [zoomScale],
  );

  return {
    bodyContainerElementRef,
    cancelPageScroll,
    flushPendingPageScroll,
    navigateToPage,
  };
}
