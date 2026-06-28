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
var appShellStateState8 = `app-shell:right-panel-width:v2`,
  appShellStateState9 = 352;
function appShellStateLtState(appShellStateInput124) {
  return `${appShellStateState8}:${appShellStateInput124}`;
}
function appShellStateHelper23(
  appShellStateInput49,
  appShellStateInput50,
  appShellStateInput51 = `regular`,
) {
  let appShellStateState95 = Number.isFinite(appShellStateInput49)
      ? appShellStateInput49
      : 600,
    appShellStateState96 = appShellStateHelper24(
      appShellStateInput50,
      appShellStateInput51,
    );
  return Math.max(
    Math.min(320, appShellStateState96),
    Math.min(appShellStateState95, appShellStateState96),
  );
}
function appShellStateUtState({
  defaultWidth: defaultWidth,
  mainContentWidth: mainContentWidth,
  storageKey: storageKey,
  widthMode: widthMode,
}: any): number {
  let appShellStateState87 = persistedAtomStoreA(storageKey, null);
  return appShellStateState87 == null || !Number.isFinite(appShellStateState87)
    ? appShellStateFtState(defaultWidth, mainContentWidth, widthMode)
    : appShellStateState87 <= 1
      ? appShellStateHelper26(appShellStateState87)
      : appShellStateFtState(appShellStateState87, mainContentWidth, widthMode);
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
  appShellStateInput54: number,
  appShellStateInput55: number,
  appShellStateInput56: string = `regular`,
): number {
  let appShellStateState99 = appShellStateHelper25(
      appShellStateInput55,
      appShellStateInput56,
    ),
    appShellStateState100 =
      appShellStateState99.maximum - appShellStateState99.minimum;
  return appShellStateState100 === 0
    ? 0
    : appShellStateHelper26(
        (appShellStateHelper23(
          appShellStateInput54,
          appShellStateInput55,
          appShellStateInput56,
        ) -
          appShellStateState99.minimum) /
          appShellStateState100,
      );
}
function appShellStateDtState(
  appShellStateInput64: number,
  appShellStateInput65: number,
  appShellStateInput66: string = `regular`,
): number {
  let appShellStateState103 = appShellStateHelper25(
    appShellStateInput65,
    appShellStateInput66,
  );
  return appShellStateHelper23(
    appShellStateState103.minimum +
      appShellStateHelper26(appShellStateInput64) *
        (appShellStateState103.maximum - appShellStateState103.minimum),
    appShellStateInput65,
    appShellStateInput66,
  );
}
function appShellStateHelper24(appShellStateInput79, appShellStateInput80) {
  return appShellStateInput80 === `full`
    ? Math.max(320, appShellStateInput79)
    : Math.max(320, appShellStateInput79 - appShellStateState9);
}
function appShellStateHelper25(appShellStateInput75, appShellStateInput76) {
  let appShellStateState109 = appShellStateHelper24(
    appShellStateInput75,
    appShellStateInput76,
  );
  return {
    maximum: appShellStateState109,
    minimum: Math.min(320, appShellStateState109),
  };
}
function appShellStateHelper26(appShellStateInput109) {
  return Math.max(0, Math.min(1, appShellStateInput109));
}
var appShellStateItState = {
    type: `spring`,
    duration: 0.5,
    bounce: 0.1,
  },
  appShellStateState11 = 0.5;
function appShellStateStState(appShellStateInput131: number): number {
  return appShellStateInput131 * appShellStateState11;
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
var appShellStateAtState = (0, React.createContext)(null);
function appShellStateCtState(): any {
  let appShellStateState101 = (0, React.useContext)(appShellStateAtState);
  if (appShellStateState101 == null)
    throw Error(`AppShellLayoutMotionContext is missing`);
  return appShellStateState101;
}
var appShellStateState12 = `main`,
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
const appShellStateAState = appScopeG(persistedSignalG, appShellStateState12);
const appShellStateDollarState = appScopeC(
  persistedSignalF,
  ({ get: get, scope: scope }) =>
    get(appShellStateEtState) ?? {
      defaultWidth: 600,
      storageKey: appShellStateLtState(scope.value.routeTemplate),
    },
);
function appShellStateTtState(
  appShellStateInput110: any,
  appShellStateInput111: any,
): void {
  appShellStateInput110.get(_appShellStateJState) !== appShellStateInput111 &&
    appShellStateInput110.set(_appShellStateJState, appShellStateInput111);
}
function appShellStateRtState(
  appShellStateInput112: any,
  appShellStateInput113: boolean,
): void {
  appShellStateInput112.get(appShellStateNState) !== appShellStateInput113 &&
    appShellStateInput112.set(appShellStateNState, appShellStateInput113);
}
function appShellStateNtState(
  appShellStateInput114: any,
  appShellStateInput115: any,
): void {
  appShellStateInput114.get(appShellStateMState) !== appShellStateInput115 &&
    appShellStateInput114.set(appShellStateMState, appShellStateInput115);
}
function appShellStateHelper27() {
  let appShellStateState69 = appScopeG(persistedSignalF, []),
    appShellStateState70 = appScopeUnderscore(
      persistedSignalF,
      (appShellStateInput135) => null,
    );
  return {
    entries$: appScopeC(persistedSignalF, ({ get: get }) =>
      get(appShellStateState69)
        .map((item) => ({
          action: get(appShellStateState70, item),
          actionId: item,
        }))
        .filter((item) => item.action != null)
        .sort(
          (appShellStateInput125, appShellStateInput126) =>
            appShellStateInput125.action.order -
            appShellStateInput126.action.order,
        )
        .map(({ action: action, actionId: actionId }) => ({
          align: action.align,
          actionId: actionId,
          node: action.node,
          order: action.order,
        })),
    ),
    byId: appShellStateState70,
    ids$: appShellStateState69,
  };
}
function appShellStateHelper28() {
  let appShellStateState83 = appScopeG(persistedSignalF, []),
    appShellStateState84 = appScopeUnderscore(
      persistedSignalF,
      (appShellStateInput136) => null,
    );
  return {
    byId: appShellStateState84,
    entries$: appScopeC(persistedSignalF, ({ get: get }) =>
      get(appShellStateState83).flatMap((item) => {
        let appShellStateState110 = get(appShellStateState84, item);
        return appShellStateState110 == null ? [] : [appShellStateState110];
      }),
    ),
    ids$: appShellStateState83,
  };
}
var appShellStateState13 = appShellStateHelper27(),
  appShellStateState14 = appShellStateHelper27(),
  appShellStateState15 = appShellStateHelper27(),
  appShellStateVState = appShellStateHelper28(),
  appShellStateState16 = 520,
  appShellStateState17 = `sidebar-width`;
const _appShellStateZState = {
  center: appShellStateState13,
  left: appShellStateState14,
  right: appShellStateState15,
};
const appShellStateWState = appShellStateState15.entries$;
const appShellStateUState = appShellStateState14.entries$;
const appShellStateHState = appShellStateVState.entries$;
const appShellStateBState = appShellStateState13.entries$;
function appShellStateEState() {
  return appShellStateDState(persistedAtomStoreA(appShellStateState17, 300));
}
function appShellStateOState(appShellStateInput132: number): void {
  persistedAtomStoreL(
    appShellStateState17,
    appShellStateDState(appShellStateInput132),
  );
}
function appShellStateDState(appShellStateInput81) {
  return Number.isFinite(appShellStateInput81)
    ? Math.min(Math.max(appShellStateInput81, 240), appShellStateState16)
    : 300;
}
var appShellStateState18 = `app-shell-bottom-panel-launcher-visible`,
  appShellStateState19 = 100,
  _appShellStateUState = appScopeG(appScopeT, !0),
  _appShellStateFState = appScopeG(appScopeT, !1),
  _appShellStateLState = appScopeG(appScopeT, !1),
  appShellStateSState = appScopeG(appScopeT, !1),
  appShellStateState20 = appScopeG(appScopeT, 0),
  appShellStateCState = appScopeG(appScopeT, () => new MotionValue(1)),
  _appShellStateNState = persistedSignalT(appShellStateState18, !0),
  _appShellStateRState = appScopeG(persistedSignalG, !1),
  appShellStateTState = appScopeG(persistedSignalG, () => new MotionValue(0)),
  _appShellStateAState = appScopeG(persistedSignalG, !1),
  _appShellStateIState = appScopeG(persistedSignalG, () => new MotionValue(0)),
  _appShellStateOState = appScopeG(persistedSignalG, !1),
  appShellStateState21 = appScopeG(persistedSignalG, !1),
  reviewFileTreeOpenSignal = appScopeG(appScopeT, !1),
  reviewFileTreeOpenAnimationSignal = appScopeG(
    appScopeT,
    () => new MotionValue(0),
  );
const _appShellStatePState = appScopeG(appScopeT, appShellStateEState);
const _appShellStateMState = appScopeG(appScopeT, !1, {
  onMount: (appShellStateInput17, appShellStateInput18) => {
    let appShellStateState71 = null,
      appShellStateState72 = () => {
        appShellStateState71 != null &&
          (window.clearTimeout(appShellStateState71),
          (appShellStateState71 = null));
      },
      appShellStateState73 = appShellStateInput18.watch(({ get: get }) => {
        if (get(_appShellStateUState) || !get(_appShellStateFState)) {
          (appShellStateState72(), appShellStateInput17(!1));
          return;
        }
        appShellStateState71 ??= window.setTimeout(() => {
          ((appShellStateState71 = null), appShellStateInput17(!0));
        }, appShellStateState19);
      });
    return () => {
      (appShellStateState72(), appShellStateState73());
    };
  },
});
const _appShellStateDState = appScopeG(appScopeT, !1);
const appShellStateUnderscoreState = appScopeG(appScopeT, 250);
const _appShellStateTState = appScopeG(appScopeT, !0);
function _appShellStateCState(
  appShellStateInput13: any,
  appShellStateInput14: boolean,
  appShellStateInput15: any = {},
): void {
  let appShellStateState58 = appShellStateInput13.get(appShellStateCState),
    appShellStateState59 = appShellStateInput14 ? 1 : 0,
    appShellStateState60 =
      !appShellStateInput14 && appShellStateInput15.suppressHoverOpen !== !1;
  if (
    appShellStateInput13.get(_appShellStateUState) === appShellStateInput14 &&
    appShellStateState58.get() === appShellStateState59
  ) {
    (appShellStateInput13.set(_appShellStateFState, !1),
      appShellStateInput13.set(_appShellStateLState, appShellStateState60),
      appShellStateInput13.set(appShellStateSState, !1));
    return;
  }
  let appShellStateState61 =
      appShellStateInput15.animate !== !1 &&
      !appShellStateInput13.get(reducedMotionPreferenceR),
    appShellStateState62 = appShellStateInput13.get(appShellStateState20) + 1;
  if (
    (appShellStateInput13.set(appShellStateState20, appShellStateState62),
    appShellStateInput13.set(_appShellStateFState, !1),
    appShellStateInput13.set(_appShellStateLState, appShellStateState60),
    appShellStateInput13.set(appShellStateSState, appShellStateState61),
    appShellStateInput13.set(_appShellStateUState, appShellStateInput14),
    appShellStateState58.stop(),
    !appShellStateState61)
  ) {
    appShellStateState58.set(appShellStateState59);
    return;
  }
  let appShellStateState63 = appShellStateMtState(
      appShellStateState58,
      appShellStateState59,
      appShellStateItState,
    ),
    appShellStateState64 = () => {
      appShellStateInput13.get(appShellStateState20) === appShellStateState62 &&
        appShellStateInput13.set(appShellStateSState, !1);
    };
  appShellStateState63.then(appShellStateState64, appShellStateState64);
}
function _appShellStateYState(
  appShellStateInput129: any,
  appShellStateInput130: boolean,
): void {
  appShellStateInput129.set(_appShellStateNState, appShellStateInput130);
}
function _appShellStateVState(): void {
  persistedAtomStoreA(`app-shell-bottom-panel-launcher-visible`, void 0) ??
    persistedAtomStoreL(appShellStateState18, !1);
}
function _appShellStateBState(
  appShellStateInput98: any,
  appShellStateInput99: boolean,
): void {
  (appShellStateInput98.set(_appShellStateRState, appShellStateInput99),
    appShellStateHelper30(
      appShellStateInput98.get(appShellStateTState),
      appShellStateInput99,
      appShellStateInput98.get(reducedMotionPreferenceR),
    ));
}
function _appShellStateXState(
  appShellStateInput27: any,
  appShellStateInput28: boolean,
  appShellStateInput29: any = {},
): void {
  appShellStateInput27.set(_appShellStateAState, appShellStateInput28);
  let appShellStateState82 = appShellStateInput27.get(_appShellStateIState);
  if (
    (appShellStateState82.stop(),
    appShellStateHelper30(
      appShellStateState82,
      appShellStateInput28,
      appShellStateInput27.get(reducedMotionPreferenceR),
    ),
    appShellStateInput28)
  ) {
    appShellStateInput27.get(appShellStateState21) &&
      (appShellStateInput27.set(appShellStateGState, !0),
      appShellStateInput27.set(appShellStateState21, !1));
    return;
  }
  (appShellStateInput27.set(_appShellStateOState, !1),
    appShellStateInput27.set(
      appShellStateState21,
      appShellStateInput29.restoreFullWidthOnNextOpen === !0 &&
        appShellStateInput27.get(appShellStateGState),
    ),
    appShellStateInput27.set(appShellStateGState, !1));
}
function _appShellStateSState(
  appShellStateInput77: any,
  appShellStateInput78: boolean,
): void {
  if (appShellStateInput78) {
    (appShellStateInput77.set(_appShellStateOState, !0),
      _appShellStateXState(appShellStateInput77, !0));
    return;
  }
  _appShellStateXState(appShellStateInput77, !1);
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
function appShellStateHelper30(
  appShellStateInput68,
  appShellStateInput69,
  appShellStateInput70,
) {
  let appShellStateState106 = appShellStateInput69 ? 1 : 0;
  if (appShellStateInput70) {
    appShellStateInput68.set(appShellStateState106);
    return;
  }
  appShellStateMtState(
    appShellStateInput68,
    appShellStateState106,
    appShellStateItState,
  );
}
export {
  appShellStateDollarState,
  appShellStateAState,
  appShellStateBState,
  appShellStateCState,
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
  appShellStateSState,
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
  reviewFileTreeOpenSignal,
  reviewFileTreeOpenAnimationSignal,
  setReviewFileTreeOpen,
};
