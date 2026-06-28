// Restored from ref/.vite/build/comment-preload.js
// Frame-path and nested iframe helpers for browser sidebar anchors.

import type { BrowserSidebarPoint } from "./geometry";

export const BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX = "shadow:";
export const BROWSER_SIDEBAR_SHADOW_FRAME_PATH_SEPARATOR = ">>>";

export function getBrowserSidebarFrameWindow(
  framePath: readonly string[],
  rootWindow: Window = window,
): Window | null {
  let currentWindow = rootWindow;
  let currentDocument = rootWindow.document;

  for (const frameSelector of framePath) {
    const frameElement = resolveBrowserSidebarFrameElement(
      currentDocument,
      frameSelector,
    );
    if (frameElement == null) return null;

    const childWindow = getFrameElementContentWindow(frameElement);
    if (childWindow == null) return null;

    currentWindow = childWindow;
    currentDocument = childWindow.document;
  }

  return currentWindow;
}

export function getBrowserSidebarFrameDocument(
  framePath: readonly string[],
  rootWindow: Window = window,
): Document | null {
  return getBrowserSidebarFrameWindow(framePath, rootWindow)?.document ?? null;
}

export function resolveBrowserSidebarFrameElement(
  root: Document | ShadowRoot,
  frameSelector: string,
): HTMLIFrameElement | null {
  const selectorPath = frameSelector.startsWith(
    BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX,
  )
    ? frameSelector
        .slice(BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX.length)
        .split(BROWSER_SIDEBAR_SHADOW_FRAME_PATH_SEPARATOR)
    : [frameSelector];
  let currentRoot: Document | ShadowRoot = root;

  for (const [index, selector] of selectorPath.entries()) {
    const element = currentRoot.querySelector(selector);
    if (index === selectorPath.length - 1) {
      return isBrowserSidebarFrameElement(element) ? element : null;
    }
    if (!isElementWithShadowRoot(element)) return null;
    currentRoot = element.shadowRoot;
  }

  return null;
}

export function getBrowserSidebarWindowFrameOffset(
  frameWindow: Window,
  rootWindow: Window = window,
): BrowserSidebarPoint {
  if (frameWindow === rootWindow) return { x: 0, y: 0 };

  const frameElement = getFrameElement(frameWindow);
  if (!isBrowserSidebarFrameElement(frameElement)) return { x: 0, y: 0 };

  const parentWindow = frameElement.ownerDocument.defaultView;
  if (parentWindow == null) return { x: 0, y: 0 };

  const parentFrameOffset = getBrowserSidebarWindowFrameOffset(
    parentWindow,
    rootWindow,
  );
  const frameRect = frameElement.getBoundingClientRect();
  return {
    x: parentFrameOffset.x + frameRect.left,
    y: parentFrameOffset.y + frameRect.top,
  };
}

export function getFrameElementContentWindow(
  frameElement: HTMLIFrameElement,
): Window | null {
  try {
    return frameElement.contentWindow == null ||
      frameElement.contentWindow.document == null
      ? null
      : frameElement.contentWindow;
  } catch {
    return null;
  }
}

function getFrameElement(frameWindow: Window): Element | null {
  try {
    return frameWindow.frameElement;
  } catch {
    return null;
  }
}

function isElementWithShadowRoot(
  value: Element | null,
): value is Element & { shadowRoot: ShadowRoot } {
  return value != null && value.shadowRoot != null;
}

function isBrowserSidebarFrameElement(
  value: unknown,
): value is HTMLIFrameElement {
  if (typeof value !== "object" || value == null) return false;

  const element = value as Partial<HTMLIFrameElement>;
  const IFrameCtor =
    element.ownerDocument?.defaultView?.HTMLIFrameElement ??
    (typeof HTMLIFrameElement === "undefined" ? null : HTMLIFrameElement);

  return IFrameCtor != null && value instanceof IFrameCtor
    ? true
    : element.tagName?.toLowerCase() === "iframe" && "contentWindow" in element;
}
