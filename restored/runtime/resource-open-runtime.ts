// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Browser/file URL open helpers for conversation output resources.
import {
  En as toAppFsUrlRaw,
  La as initExternalUrlHelpers,
  On as initAppFsUrlHelpers,
  a_ as initFileTypeDetectionHelpers,
  ms as resolveInlineableLocalImagePathRaw,
  r_ as getImagePreviewDisplayModeRaw,
  za as openInBrowserFromEventRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type OpenInBrowserFromEventOptions = {
  event: unknown;
  href: string;
  initiator?: string;
  originHostId?: string;
};

export function initResourceOpenRuntime(): void {
  initExternalUrlHelpers();
  initAppFsUrlHelpers();
  initFileTypeDetectionHelpers();
}

export function toAppFsUrl(path: string): string {
  return toAppFsUrlRaw(path);
}

export function resolveInlineableLocalImagePath(path: string): string | null {
  return resolveInlineableLocalImagePathRaw(path) ?? null;
}

export function getImagePreviewDisplayMode(path: string): string {
  return getImagePreviewDisplayModeRaw(path);
}

export function openInBrowserFromEvent(
  options: OpenInBrowserFromEventOptions,
): void {
  openInBrowserFromEventRaw(options);
}
