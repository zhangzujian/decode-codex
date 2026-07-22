// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~elr7dp2m-DG_7tMKE.js
// React DOM and Radix primitive adapter backed by the corresponding npm packages.
import { composeRefs, useComposedRefs } from "@radix-ui/react-compose-refs";
import { createContext, createContextScope } from "@radix-ui/react-context";
import {
  dispatchDiscreteCustomEvent,
  Primitive,
} from "@radix-ui/react-primitive";
import { Presence } from "@radix-ui/react-presence";
import { Slot } from "@radix-ui/react-slot";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useLayoutEffect } from "@radix-ui/react-use-layout-effect";
type PreventableEvent = {
  defaultPrevented: boolean;
};
function initRadixContextRuntime(): void {}
function initRadixLayoutEffectRuntime(): void {}
function initReactDomRuntime(): void {}
function initRadixSlotRuntime(): void {}
function initRadixPresenceRuntime(): void {}
function initRadixPrimitiveRuntime(): void {}
function initComposeRefsRuntime(): void {}
function initControllableStateRuntime(): void {}
function initBrowserRuntime(): void {}
function composeEventHandlers<TEvent extends PreventableEvent>(
  originalHandler?: (event: TEvent) => void,
  nextHandler?: (event: TEvent) => void,
  {
    checkForDefaultPrevented = true,
  }: {
    checkForDefaultPrevented?: boolean;
  } = {},
): (event: TEvent) => void {
  return (event) => {
    originalHandler?.(event);
    if (!checkForDefaultPrevented || !event.defaultPrevented) {
      nextHandler?.(event);
    }
  };
}
export {
  initRadixContextRuntime,
  initRadixLayoutEffectRuntime,
  initReactDomRuntime,
  dispatchDiscreteCustomEvent,
  initRadixSlotRuntime,
  composeRefs,
  createContextScope,
  createContext,
  initRadixPresenceRuntime,
  initRadixPrimitiveRuntime,
  useComposedRefs,
  useControllableState,
  useLayoutEffect,
  initComposeRefsRuntime,
  Presence,
  Primitive,
  initControllableStateRuntime,
  Slot,
  composeEventHandlers,
  initBrowserRuntime,
};
