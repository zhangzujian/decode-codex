// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Snapshot sizing and window-title normalization helpers.

export const SCREENSHOT_WIDTH = 232;
export const THREAD_SCREENSHOT_HEIGHT = 140;

export function initAppshotAttachmentChunk(): void {}

export function initAppshotAttachmentRuntimeChunk(): void {}

export function computeComposerSnapshotHeight(height?: number | null): number {
  return (height ?? THREAD_SCREENSHOT_HEIGHT) + 8;
}

export function stripTrailingPageRangeFromTitle(
  title: string,
  enabled: boolean,
): string {
  return enabled
    ? title.replace(/(?:\s+\(\s*\d+(?:-\d+)?\s*\)|\s+\d+(?:-\d+)?)(\s*)$/, "")
    : title;
}
