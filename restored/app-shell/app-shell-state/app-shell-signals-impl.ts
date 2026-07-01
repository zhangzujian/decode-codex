// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// App shell signal state, panel sizing, and motion flags.
// Semantic implementation for app shell state signals.
import React from "react";
import {
  _appScopeC as appScopeC,
  appScopeRoot as appScopeT,
  appScopeUnderscore,
  createAppScopeSignal as appScopeG,
} from "../../boundaries/app-scope";
import {
  createPersistedSignal as persistedSignalT,
  routeScope as persistedSignalF,
  threadScope as persistedSignalG,
} from "../../runtime/persisted-signal";
import {
  getPersistedAtomValue as persistedAtomStoreA,
  setPersistedAtomItem as persistedAtomStoreL,
} from "../../utils/persisted-atom-store";
import { shouldReduceMotionSignal as reducedMotionPreferenceR } from "../../utils/reduced-motion-preference";
import * as motionRuntime from "../../vendor/framer-motion-single-value";
const MotionValue = motionRuntime["singleValueK"];
import { appShellStateMtState } from "./motion-sequence-impl";
var rightPanelWidthStorageKeyPrefix = `app-shell:right-panel-width:v2`,
  rightPanelReservedWidth = 352;
function appShellStateLtState(routeTemplate) {
  return `${rightPanelWidthStorageKeyPrefix}:${routeTemplate}`;
}
function clampRightPanelWidth(
  rawWidth,
  mainContentWidth,
  widthMode = `regular`,
) {
  let resolvedWidth = Number.isFinite(rawWidth) ? rawWidth : 600,
    availableWidth = getAvailableRightPanelWidth(mainContentWidth, widthMode);
  return Math.max(
    Math.min(320, availableWidth),
    Math.min(resolvedWidth, availableWidth),
  );
}
function appShellStateUtState({
  defaultWidth: defaultWidth,
  mainContentWidth: mainContentWidth,
  storageKey: storageKey,
  widthMode: widthMode,
}: any): number {
  let storedWidthOrRatio = persistedAtomStoreA(storageKey, null);
  return storedWidthOrRatio == null || !Number.isFinite(storedWidthOrRatio)
    ? appShellStateFtState(defaultWidth, mainContentWidth, widthMode)
    : storedWidthOrRatio <= 1
      ? clamp01(storedWidthOrRatio)
      : appShellStateFtState(storedWidthOrRatio, mainContentWidth, widthMode);
}
function appShellStatePtState({
  mainContentWidth: mainContentWidth,
  storageKey: storageKey,
  width: width,
  widthMode: widthMode,
}: any): void {
  persistedAtomStoreL(
    storageKey,
    appShellStateFtState(width, mainContentWidth, widthMode),
  );
}
function appShellStateFtState(
  width: number,
  mainContentWidth: number,
  widthMode: string = `regular`,
): number {
  let widthRange = getRightPanelWidthRange(mainContentWidth, widthMode),
    rangeSpan = widthRange.maximum - widthRange.minimum;
  return rangeSpan === 0
    ? 0
    : clamp01(
        (clampRightPanelWidth(width, mainContentWidth, widthMode) -
          widthRange.minimum) /
          rangeSpan,
      );
}
function appShellStateDtState(
  ratio: number,
  mainContentWidth: number,
  widthMode: string = `regular`,
): number {
  let widthRange = getRightPanelWidthRange(mainContentWidth, widthMode);
  return clampRightPanelWidth(
    widthRange.minimum +
      clamp01(ratio) * (widthRange.maximum - widthRange.minimum),
    mainContentWidth,
    widthMode,
  );
}
function getAvailableRightPanelWidth(mainContentWidth, widthMode) {
  return widthMode === `full`
    ? Math.max(320, mainContentWidth)
    : Math.max(320, mainContentWidth - rightPanelReservedWidth);
}
function getRightPanelWidthRange(mainContentWidth, widthMode) {
  let availableWidth = getAvailableRightPanelWidth(mainContentWidth, widthMode);
  return {
    maximum: availableWidth,
    minimum: Math.min(320, availableWidth),
  };
}
function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}
var appShellStateItState = {
    type: `spring`,
    duration: 0.5,
    bounce: 0.1,
  },
  sidebarWidthScaleFactor = 0.5;
function appShellStateStState(value: number): number {
  return value * sidebarWidthScaleFactor;
}
function appShellStateOtState({
  isRightPanelOpen: isRightPanelOpen,
  mainContentWidth: mainContentWidth,
  rightPanelWidthMode: rightPanelWidthMode,
  rightPanelWidthRatio: rightPanelWidthRatio,
}: any): number {
  return isRightPanelOpen
    ? Math.max(
        0,
        mainContentWidth -
          appShellStateDtState(
            rightPanelWidthRatio,
            mainContentWidth,
            rightPanelWidthMode,
          ),
      )
    : mainContentWidth;
}
var appShellStateAtState = React.createContext(null);
function appShellStateCtState(): any {
  let motionContext = React.useContext(appShellStateAtState);
  if (motionContext == null)
    throw Error(`AppShellLayoutMotionContext is missing`);
  return motionContext;
}
var defaultAppShellFocusArea = `main`,
  appShellStateGState = appScopeG(persistedSignalG, !1),
  appShellStateEtState = appScopeG(persistedSignalF, null),
  _appShellStateJState = appScopeG(persistedSignalG, `main`),
  appShellStateNState = appScopeG(persistedSignalG, !1),
  appShellStateMState = appScopeG(persistedSignalG, null);
const appShellStateQState = appScopeG(persistedSignalF, null);
const appShellStateKState = `data-app-shell-focus-area`;
const appShellStateZState = appScopeG(persistedSignalF, null);
const appShellStateYState = appScopeG(persistedSignalF, null);
const appShellStateXState = appScopeG(persistedSignalF, null);
const appShellStateRState = appScopeG(persistedSignalF, null);
const _appShellStateQState = appScopeG(persistedSignalF, null);
const appShellStatePState = appScopeG(persistedSignalF, null);
const appShellStateLState = appScopeG(persistedSignalF, null);
const _appShellStateKState = appScopeG(persistedSignalF, `default`);
const appShellStateJState = appScopeG(persistedSignalF, null);
const appShellStateIState = appScopeG(persistedSignalF, null);
const appShellStateFState = appScopeG(persistedSignalF, null);
const appShellStateAState = appScopeG(
  persistedSignalG,
  defaultAppShellFocusArea,
);
const appShellStateDollarState = appScopeC(
  persistedSignalF,
  ({ get: get, scope: scope }) =>
    get(appShellStateEtState) ?? {
      defaultWidth: 600,
      storageKey: appShellStateLtState(scope.value.routeTemplate),
    },
);
function appShellStateTtState(appScope: any, focusArea: any): void {
  appScope.get(_appShellStateJState) !== focusArea &&
    appScope.set(_appShellStateJState, focusArea);
}
function appShellStateRtState(appScope: any, isEnabled: boolean): void {
  appScope.get(appShellStateNState) !== isEnabled &&
    appScope.set(appShellStateNState, isEnabled);
}
function appShellStateNtState(appScope: any, value: any): void {
  appScope.get(appShellStateMState) !== value &&
    appScope.set(appShellStateMState, value);
}
function createOrderedActionRegistry() {
  let actionIds = appScopeG(persistedSignalF, []),
    actionById = appScopeUnderscore(persistedSignalF, (actionId) => null);
  return {
    entries$: appScopeC(persistedSignalF, ({ get: get }) =>
      get(actionIds)
        .map((item) => ({
          action: get(actionById, item),
          actionId: item,
        }))
        .filter((item) => item.action != null)
        .sort((entryA, entryB) => entryA.action.order - entryB.action.order)
        .map(({ action: action, actionId: actionId }) => ({
          align: action.align,
          actionId: actionId,
          node: action.node,
          order: action.order,
        })),
    ),
    byId: actionById,
    ids$: actionIds,
  };
}
function createActionListRegistry() {
  let actionIds = appScopeG(persistedSignalF, []),
    actionById = appScopeUnderscore(persistedSignalF, (actionId) => null);
  return {
    byId: actionById,
    entries$: appScopeC(persistedSignalF, ({ get: get }) =>
      get(actionIds).flatMap((item) => {
        let action = get(actionById, item);
        return action == null ? [] : [action];
      }),
    ),
    ids$: actionIds,
  };
}
var centerActionRegistry = createOrderedActionRegistry(),
  leftActionRegistry = createOrderedActionRegistry(),
  rightActionRegistry = createOrderedActionRegistry(),
  appShellStateVState = createActionListRegistry(),
  maxSidebarWidth = 520,
  sidebarWidthStorageKey = `sidebar-width`;
const _appShellStateZState = {
  center: centerActionRegistry,
  left: leftActionRegistry,
  right: rightActionRegistry,
};
const appShellStateWState = rightActionRegistry.entries$;
const appShellStateUState = leftActionRegistry.entries$;
const appShellStateHState = appShellStateVState.entries$;
const appShellStateBState = centerActionRegistry.entries$;
function appShellStateEState() {
  return appShellStateDState(persistedAtomStoreA(sidebarWidthStorageKey, 300));
}
function appShellStateOState(width: number): void {
  persistedAtomStoreL(sidebarWidthStorageKey, appShellStateDState(width));
}
function appShellStateDState(width) {
  return Number.isFinite(width)
    ? Math.min(Math.max(width, 240), maxSidebarWidth)
    : 300;
}
var bottomPanelLauncherVisibleStorageKey = `app-shell-bottom-panel-launcher-visible`,
  sidebarHoverLauncherDelayMs = 100,
  sidebarOpenSignal = appScopeG(appScopeT, !0),
  sidebarHoverSignal = appScopeG(appScopeT, !1),
  sidebarHoverOpenSuppressedSignal = appScopeG(appScopeT, !1),
  sidebarAnimatingSignal = appScopeG(appScopeT, !1),
  sidebarAnimationSequenceSignal = appScopeG(appScopeT, 0),
  sidebarOpenAnimationSignal = appScopeG(appScopeT, () => new MotionValue(1)),
  _appShellStateNState = persistedSignalT(
    bottomPanelLauncherVisibleStorageKey,
    !0,
  ),
  _appShellStateRState = appScopeG(persistedSignalG, !1),
  appShellStateTState = appScopeG(persistedSignalG, () => new MotionValue(0)),
  _appShellStateAState = appScopeG(persistedSignalG, !1),
  _appShellStateIState = appScopeG(persistedSignalG, () => new MotionValue(0)),
  _appShellStateOState = appScopeG(persistedSignalG, !1),
  pendingRestoreRightPanelFullWidthSignal = appScopeG(persistedSignalG, !1),
  reviewFileTreeOpenSignal = appScopeG(appScopeT, !1),
  reviewFileTreeOpenAnimationSignal = appScopeG(
    appScopeT,
    () => new MotionValue(0),
  );
const _appShellStatePState = appScopeG(appScopeT, appShellStateEState);
const sidebarHoverLauncherVisibleSignal = appScopeG(appScopeT, !1, {
  onMount: (setHoverLauncherVisible, sidebarScope) => {
    let hoverLauncherTimerId: ReturnType<typeof window.setTimeout> | null =
        null,
      clearHoverLauncherTimer = () => {
        hoverLauncherTimerId != null &&
          (window.clearTimeout(hoverLauncherTimerId),
          (hoverLauncherTimerId = null));
      },
      unsubscribe = sidebarScope.watch(({ get: get }) => {
        if (get(sidebarOpenSignal) || !get(sidebarHoverSignal)) {
          (clearHoverLauncherTimer(), setHoverLauncherVisible(!1));
          return;
        }
        hoverLauncherTimerId ??= window.setTimeout(() => {
          ((hoverLauncherTimerId = null), setHoverLauncherVisible(!0));
        }, sidebarHoverLauncherDelayMs);
      });
    return () => {
      (clearHoverLauncherTimer(), unsubscribe());
    };
  },
});
const _appShellStateDState = appScopeG(appScopeT, !1);
const appShellStateUnderscoreState = appScopeG(appScopeT, 250);
const _appShellStateTState = appScopeG(appScopeT, !0);
function setSidebarOpen(
  appScope: any,
  isOpen: boolean,
  options: any = {},
): void {
  let openMotionValue = appScope.get(sidebarOpenAnimationSignal),
    targetValue = isOpen ? 1 : 0,
    shouldSuppressHoverOpen = !isOpen && options.suppressHoverOpen !== !1;
  if (
    appScope.get(sidebarOpenSignal) === isOpen &&
    openMotionValue.get() === targetValue
  ) {
    (appScope.set(sidebarHoverSignal, !1),
      appScope.set(sidebarHoverOpenSuppressedSignal, shouldSuppressHoverOpen),
      appScope.set(sidebarAnimatingSignal, !1));
    return;
  }
  let shouldAnimate =
      options.animate !== !1 && !appScope.get(reducedMotionPreferenceR),
    animationSequence = appScope.get(sidebarAnimationSequenceSignal) + 1;
  if (
    (appScope.set(sidebarAnimationSequenceSignal, animationSequence),
    appScope.set(sidebarHoverSignal, !1),
    appScope.set(sidebarHoverOpenSuppressedSignal, shouldSuppressHoverOpen),
    appScope.set(sidebarAnimatingSignal, shouldAnimate),
    appScope.set(sidebarOpenSignal, isOpen),
    openMotionValue.stop(),
    !shouldAnimate)
  ) {
    openMotionValue.set(targetValue);
    return;
  }
  let openAnimation = appShellStateMtState(
      openMotionValue,
      targetValue,
      appShellStateItState,
    ),
    clearAnimatingIfCurrent = () => {
      appScope.get(sidebarAnimationSequenceSignal) === animationSequence &&
        appScope.set(sidebarAnimatingSignal, !1);
    };
  openAnimation.then(clearAnimatingIfCurrent, clearAnimatingIfCurrent);
}
function _appShellStateYState(appScope: any, isVisible: boolean): void {
  appScope.set(_appShellStateNState, isVisible);
}
function _appShellStateVState(): void {
  persistedAtomStoreA(`app-shell-bottom-panel-launcher-visible`, void 0) ??
    persistedAtomStoreL(bottomPanelLauncherVisibleStorageKey, !1);
}
function _appShellStateBState(appScope: any, isOpen: boolean): void {
  (appScope.set(_appShellStateRState, isOpen),
    setOrAnimateBooleanMotionValue(
      appScope.get(appShellStateTState),
      isOpen,
      appScope.get(reducedMotionPreferenceR),
    ));
}
function _appShellStateXState(
  appScope: any,
  isOpen: boolean,
  options: any = {},
): void {
  appScope.set(_appShellStateAState, isOpen);
  let rightPanelMotionValue = appScope.get(_appShellStateIState);
  if (
    (rightPanelMotionValue.stop(),
    setOrAnimateBooleanMotionValue(
      rightPanelMotionValue,
      isOpen,
      appScope.get(reducedMotionPreferenceR),
    ),
    isOpen)
  ) {
    appScope.get(pendingRestoreRightPanelFullWidthSignal) &&
      (appScope.set(appShellStateGState, !0),
      appScope.set(pendingRestoreRightPanelFullWidthSignal, !1));
    return;
  }
  (appScope.set(_appShellStateOState, !1),
    appScope.set(
      pendingRestoreRightPanelFullWidthSignal,
      options.restoreFullWidthOnNextOpen === !0 &&
        appScope.get(appShellStateGState),
    ),
    appScope.set(appShellStateGState, !1));
}
function _appShellStateSState(appScope: any, isOpen: boolean): void {
  if (isOpen) {
    (appScope.set(_appShellStateOState, !0),
      _appShellStateXState(appScope, !0));
    return;
  }
  _appShellStateXState(appScope, !1);
}
function setReviewFileTreeOpen(
  appScope: any,
  isOpen: boolean,
  options: any = {},
): void {
  (appScope.set(reviewFileTreeOpenSignal, isOpen),
    animateBooleanMotionValue(
      appScope.get(reviewFileTreeOpenAnimationSignal),
      isOpen,
      appScope.get(reducedMotionPreferenceR),
      options,
    ));
}
function animateBooleanMotionValue(
  motionValue,
  enabled,
  shouldReduceMotion,
  options,
) {
  if ((motionValue.stop(), options.animate === !1 || shouldReduceMotion)) {
    motionValue.set(enabled ? 1 : 0);
    return;
  }
  appShellStateMtState(motionValue, enabled ? 1 : 0, appShellStateItState);
}
function setOrAnimateBooleanMotionValue(
  motionValue,
  enabled,
  shouldReduceMotion,
) {
  let targetValue = enabled ? 1 : 0;
  if (shouldReduceMotion) {
    motionValue.set(targetValue);
    return;
  }
  appShellStateMtState(motionValue, targetValue, appShellStateItState);
}
export {
  appShellStateDollarState,
  appShellStateAState,
  appShellStateBState,
  sidebarOpenAnimationSignal as appShellStateCState,
  appShellStateDState,
  appShellStateEState,
  appShellStateFState,
  appShellStateGState,
  appShellStateHState,
  appShellStateIState,
  appShellStateJState,
  appShellStateKState,
  appShellStateLState,
  appShellStateMState,
  appShellStateNState,
  appShellStateOState,
  appShellStatePState,
  appShellStateQState,
  appShellStateRState,
  sidebarAnimatingSignal as appShellStateSState,
  appShellStateTState,
  appShellStateUState,
  appShellStateVState,
  appShellStateWState,
  appShellStateXState,
  appShellStateYState,
  appShellStateZState,
  appShellStateUnderscoreState,
  appShellStateAtState as appShellLayoutMotionContext,
  appShellStateCtState,
  appShellStateDtState,
  appShellStateEtState,
  appShellStateFtState,
  appShellStateItState,
  appShellStateLtState,
  appShellStateNtState,
  appShellStateOtState,
  appShellStatePtState,
  appShellStateRtState,
  appShellStateStState,
  appShellStateTtState,
  appShellStateUtState,
  _appShellStateBState as setBottomPanelOpen,
  _appShellStateRState as bottomPanelOpenSignal,
  _appShellStateSState as setRightPanelOpen,
  _appShellStateOState as rightPanelOpenSignal,
  _appShellStateJState as activeAppShellFocusAreaSignal,
  _appShellStateXState as setRightPanelOpenWithOptions,
  _appShellStateAState as rightPanelExpandedSignal,
  setSidebarOpen,
  sidebarOpenSignal,
  sidebarOpenAnimationSignal,
  sidebarHoverSignal,
  sidebarHoverOpenSuppressedSignal,
  sidebarHoverLauncherVisibleSignal,
  sidebarAnimatingSignal,
  reviewFileTreeOpenSignal,
  reviewFileTreeOpenAnimationSignal,
  setReviewFileTreeOpen,
};
