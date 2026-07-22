// Restored from ref/webview/assets/skills-page-zCIrhInI.js
// Skills settings page and current-ref export surface.

import { restoreHeaderDivider } from "./restore-header-divider";

export function hideHeaderDividerEffect() {
  return (
    (document.documentElement.dataset.hideHeaderDivider = "true"),
    restoreHeaderDivider
  );
}
