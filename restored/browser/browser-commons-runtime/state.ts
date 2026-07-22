// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared browser sidebar and annotation state atoms.

import { appScopeRoot, appScopeUnderscore } from "../../boundaries/app-scope";
import { createParametricAtom } from "../../runtime/onboarding-scope-runtime";
import { emptyBrowserFindState } from "./constants";

export const activeBrowserFindTargetAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const activeBrowserTabSignal = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const activeBrowserTabIdQuery = createParametricAtom(
  appScopeRoot,
  (_conversationId: string, { get }) => {
    const activeTab = get<{ tabId?: string | null } | null>(
      activeBrowserTabSignal,
    );
    return activeTab?.tabId ?? null;
  },
);
export const activeSidePanelKindAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const annotationAddModifierPressedAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const browserDeviceToolbarLayoutAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const browserDeviceToolbarBackgroundColor = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const browserFindFocusRequestAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const browserFindStateAtom = appScopeUnderscore(
  appScopeRoot,
  () => emptyBrowserFindState,
);
export const designModifierPressedAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const isSidePanelVisibleAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
