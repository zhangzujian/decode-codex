// Restored from ref/webview/assets/hotkey-window-home-page-HuAbYFeH.js
import type React from "react";
import { once as runOnce } from "../../runtime/commonjs-interop";
import { currentAppInitialSharedCompatSlotLowerGLowerC } from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  initFloatingWindowPointerInteractivityChunk,
  useFloatingWindowPointerInteractivity,
} from "../../utils/use-floating-window-pointer-interactivity";

let pointerFloatingSelectors: string[];
export const initPointerInteractivityAdapterChunk = runOnce(() => {
  currentAppInitialSharedCompatSlotLowerGLowerC();
  initFloatingWindowPointerInteractivityChunk();
  pointerFloatingSelectors = [
    "[data-composer-overlay-floating-ui]",
    "[data-above-composer-portal] > *",
    "[data-radix-popper-content-wrapper] > *",
  ];
});

export function useHotkeyHomePointerInteractivity({
  activationNonce,
  interactiveRegionRef,
  onInteractiveChange,
}: {
  activationNonce: unknown;
  interactiveRegionRef: React.RefObject<HTMLElement | null>;
  onInteractiveChange: (isInteractive: boolean) => void;
}) {
  return useFloatingWindowPointerInteractivity({
    activationNonce,
    floatingElementSelectors: pointerFloatingSelectors,
    includeInteractiveRegion: true,
    interactiveRegionRef,
    onInteractiveChange,
  });
}

export let hotkeyHomeClassNames: {
  home: string;
  homeShell: string;
  shellUnderlay: string;
  composerSurface: string;
};

export const initHotkeyHomeStylesChunk = runOnce(() => {
  hotkeyHomeClassNames = {
    home: "_home_reiaa_1",
    homeShell: "_homeShell_reiaa_20",
    shellUnderlay: "_shellUnderlay_reiaa_21",
    composerSurface: "_composerSurface_reiaa_22",
  };
});

export function parseCssPixelValue(cssPixelValue: string): number {
  return Number.parseFloat(cssPixelValue) || 0;
}
