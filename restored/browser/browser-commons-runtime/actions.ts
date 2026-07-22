// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser panel actions and comment-to-attachment conversion helpers.

import { browserProfileImportDialogOpenAtom } from "../browser-profile-import-dialog-state";
import {
  activeBrowserFindTargetAtom,
  activeBrowserTabSignal,
  activeSidePanelKindAtom,
  browserFindFocusRequestAtom,
  browserFindStateAtom,
  isSidePanelVisibleAtom,
} from "./state";

type StoreLike = {
  get<TValue = unknown>(atom: unknown, key?: unknown): TValue;
  set(atom: unknown, keyOrValue: unknown, value?: unknown): void;
};

type BrowserCommentLike = Record<string, unknown>;

export function clearBrowserFindFocus(store: StoreLike): void {
  store.set(browserFindFocusRequestAtom, null);
}

export function clearBrowserPendingNavigation(): void {}

export function clearBrowserPendingOpen(): void {}

export function getPendingBrowserAddressOverride(): string | null {
  return null;
}

export function getPendingBrowserOpenReason(): string | null {
  return null;
}

export function getPendingBrowserOpenSource(): string | null {
  return null;
}

export function importBrowserProfiles(
  store: StoreLike,
  _browserProfileImportService: unknown,
): boolean {
  store.set(browserProfileImportDialogOpenAtom, true);
  return true;
}

function readBrowserTabId(comment: BrowserCommentLike): string | null {
  const direct = comment.browserTabId ?? comment.browser_tab_id;
  if (direct != null) return String(direct);
  const metadata = comment.metadata;
  if (metadata != null && typeof metadata === "object") {
    const tabId = (metadata as Record<string, unknown>).browserTabId;
    if (tabId != null) return String(tabId);
  }
  return null;
}

export function extractBrowserComments(
  comments: unknown,
  _includeDesignTweaks: boolean,
): BrowserCommentLike[] {
  return Array.isArray(comments)
    ? comments.filter(
        (comment): comment is BrowserCommentLike =>
          comment != null && typeof comment === "object",
      )
    : [];
}

export function isCommentForBrowserTab(
  comment: unknown,
  browserTabId: string,
): boolean {
  return (
    comment != null &&
    typeof comment === "object" &&
    readBrowserTabId(comment as BrowserCommentLike) === browserTabId
  );
}

export function markBrowserTabVisited(
  store: StoreLike,
  browserTabId: string,
): void {
  store.set(activeBrowserTabSignal, { tabId: browserTabId });
}

export function openBrowserFind(store: StoreLike): void {
  store.set(activeSidePanelKindAtom, "browser");
}

export function openBrowserPanelForTab(
  _conversationId: string,
  _browserTabId: string,
  _options?: { initiator?: string; source?: string },
): void {}

export function setActiveBrowserFindTarget(
  store: StoreLike,
  target: unknown,
): void {
  store.set(activeBrowserFindTargetAtom, target);
}

export function setActiveSidePanelKind(store: StoreLike, kind: string): void {
  store.set(activeSidePanelKindAtom, kind);
}

export function setBrowserFindState(store: StoreLike, state: unknown): void {
  store.set(browserFindStateAtom, state);
}

export function toBrowserCommentAttachment(
  comment: BrowserCommentLike,
  index: number,
  browserTabId: string,
): BrowserCommentLike {
  return {
    ...comment,
    browserTabId,
    id: comment.id ?? `browser-comment-${browserTabId}-${index}`,
    metadata: {
      ...(comment.metadata != null && typeof comment.metadata === "object"
        ? (comment.metadata as Record<string, unknown>)
        : {}),
      browserTabId,
    },
  };
}

export function syncBrowserOpenState(
  store: StoreLike,
  _conversationId: string,
  browserTabId: string,
  options: { isOpen: boolean; url?: string | null },
): void {
  if (options.isOpen) {
    store.set(activeBrowserTabSignal, {
      tabId: browserTabId,
      url: options.url,
    });
  }
  store.set(isSidePanelVisibleAtom, options.isOpen);
}
