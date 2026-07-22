// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import { AvatarOverlaySharedModule } from "../../shared";

export function hasHorizontallyOverflowingContent(
  element: HTMLElement,
): boolean {
  return [
    element,
    ...Array.from(element.querySelectorAll<HTMLElement>("*")),
  ].some(
    (item) =>
      item.clientWidth > 0 &&
      item.scrollWidth >
        item.clientWidth + AvatarOverlaySharedModule.avatarOverlayBinding11,
  );
}
