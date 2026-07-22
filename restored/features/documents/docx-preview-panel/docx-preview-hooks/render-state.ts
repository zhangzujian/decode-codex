// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import React from "react";
import type { RefCallback } from "react";

import {
  clearDocxPreviewContainers,
  docxPageElements,
  renderDocxPreview,
} from "../docx-preview-rendering";
import type {
  DocxPreviewLoadState,
  DocxPreviewRenderState,
  UseDocxPreviewRenderStateOptions,
} from "./types";

export function useDocxPreviewRenderState({
  bodyContainerElementRef: providedBodyContainerElementRef,
  bytes,
  onPagesRendered,
  renderAsync,
  styleText,
}: UseDocxPreviewRenderStateOptions): DocxPreviewRenderState {
  const ownedBodyContainerElementRef = React.useRef<HTMLElement | null>(null);
  const bodyContainerElementRef =
    providedBodyContainerElementRef ?? ownedBodyContainerElementRef;
  const styleContainerElementRef = React.useRef<HTMLElement | null>(null);
  const renderGenerationRef = React.useRef(0);
  const isRenderingRef = React.useRef(false);
  const [loadState, setLoadState] = React.useState<DocxPreviewLoadState>(
    renderAsync == null ? "error" : "loading",
  );
  const [pageElements, setPageElements] = React.useState<HTMLElement[]>(
    () => [],
  );
  const [totalPages, setTotalPages] = React.useState(0);

  const clearPreview = React.useCallback((): void => {
    const bodyContainer = bodyContainerElementRef.current;
    const styleContainer = styleContainerElementRef.current;
    if (bodyContainer == null || styleContainer == null) return;
    clearDocxPreviewContainers({ bodyContainer, styleContainer });
    setPageElements([]);
    setTotalPages(0);
  }, [bodyContainerElementRef]);

  const renderPreview = React.useCallback((): void => {
    const bodyContainer = bodyContainerElementRef.current;
    const styleContainer = styleContainerElementRef.current;
    if (
      bodyContainer == null ||
      styleContainer == null ||
      isRenderingRef.current
    ) {
      return;
    }
    isRenderingRef.current = true;
    clearPreview();
    if (renderAsync == null) {
      setLoadState("error");
      return;
    }
    const generation = renderGenerationRef.current + 1;
    renderGenerationRef.current = generation;
    setLoadState("loading");
    void renderDocxPreview({
      bytes,
      bodyContainer,
      renderAsync,
      styleContainer,
      styleText,
    }).then((didRender) => {
      if (renderGenerationRef.current !== generation) return;
      if (!didRender) {
        clearDocxPreviewContainers({ bodyContainer, styleContainer });
        setLoadState("error");
        return;
      }
      const nextPageElements = docxPageElements(bodyContainer);
      setPageElements(nextPageElements);
      setTotalPages(Math.max(nextPageElements.length, 1));
      setLoadState("ready");
      onPagesRendered(bodyContainer);
    });
  }, [
    bodyContainerElementRef,
    bytes,
    clearPreview,
    onPagesRendered,
    renderAsync,
    styleText,
  ]);

  const resetRender = React.useCallback((): void => {
    renderGenerationRef.current += 1;
    isRenderingRef.current = false;
    clearPreview();
  }, [clearPreview]);

  const bodyContainerRef = React.useCallback<RefCallback<HTMLElement>>(
    (bodyContainer) => {
      if (bodyContainer == null) {
        resetRender();
        bodyContainerElementRef.current = null;
        return;
      }
      bodyContainerElementRef.current = bodyContainer;
      renderPreview();
    },
    [bodyContainerElementRef, renderPreview, resetRender],
  );

  const styleContainerRef = React.useCallback<RefCallback<HTMLElement>>(
    (styleContainer) => {
      if (styleContainer == null) {
        resetRender();
        styleContainerElementRef.current = null;
        return;
      }
      styleContainerElementRef.current = styleContainer;
      renderPreview();
    },
    [renderPreview, resetRender],
  );

  return {
    bodyContainerElementRef,
    bodyContainerRef,
    loadState,
    pageElements,
    styleContainerRef,
    totalPages,
  };
}
