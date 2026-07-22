// Restored from ref/webview/assets/codex-micro-joystick-feedback-Dn3_VLEx.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// CodexMicroJoystickFeedback chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyXt,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
} from "./shared-react-runtime";
import {
  settingsCommandSharedRuntimeVariant9Member0014 as appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldFt,
  settingsCommandSharedRuntimeVariant9Member0034 as appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldPt,
} from "../current-ref-aliases/settings-command-shared-runtime-variant-9/index";
function codexMicroJoystickFeedbackHelper1(
  codexMicroJoystickFeedbackParam1,
  {
    activeDirection,
    enabled,
    event,
    executionStatus,
    mapping,
    previousActiveDirection,
  },
) {
  if (!enabled)
    return codexMicroJoystickFeedbackHelper3(codexMicroJoystickFeedbackParam1);
  if (event.distance < codexMicroJoystickFeedbackValue1)
    return codexMicroJoystickFeedbackParam1.visible
      ? {
          ...codexMicroJoystickFeedbackParam1,
          event,
        }
      : codexMicroJoystickFeedbackParam1;
  let codexMicroJoystickFeedbackValue3 =
    appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldPt(
      event,
      codexMicroJoystickFeedbackValue1,
    );
  if (codexMicroJoystickFeedbackValue3 == null)
    return codexMicroJoystickFeedbackParam1;
  let _codexMicroJoystickFeedbackA = mapping[codexMicroJoystickFeedbackValue3];
  return activeDirection === codexMicroJoystickFeedbackValue3 &&
    previousActiveDirection !== codexMicroJoystickFeedbackValue3
    ? {
        action: _codexMicroJoystickFeedbackA,
        direction: codexMicroJoystickFeedbackValue3,
        event,
        status:
          _codexMicroJoystickFeedbackA == null
            ? "unassigned"
            : (executionStatus ?? "unavailable"),
        visible: true,
      }
    : {
        action: _codexMicroJoystickFeedbackA,
        direction: codexMicroJoystickFeedbackValue3,
        event,
        status:
          codexMicroJoystickFeedbackParam1.visible &&
          codexMicroJoystickFeedbackParam1.direction ===
            codexMicroJoystickFeedbackValue3 &&
          activeDirection === codexMicroJoystickFeedbackValue3 &&
          previousActiveDirection === codexMicroJoystickFeedbackValue3 &&
          codexMicroJoystickFeedbackParam1.status !== "tracking"
            ? codexMicroJoystickFeedbackParam1.status
            : "tracking",
        visible: true,
      };
}
function codexMicroJoystickFeedbackHelper2(
  codexMicroJoystickFeedbackParam2,
  codexMicroJoystickFeedbackParam3,
  codexMicroJoystickFeedbackParam4,
) {
  return {
    action: null,
    direction:
      appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldPt(
        codexMicroJoystickFeedbackParam3,
        codexMicroJoystickFeedbackValue1,
      ) ?? codexMicroJoystickFeedbackParam2.direction,
    event: codexMicroJoystickFeedbackParam3,
    gameActivationProgress: Math.min(
      Math.max(codexMicroJoystickFeedbackParam4, 0),
      1,
    ),
    status: "game-gesture",
    visible: true,
  };
}
function codexMicroJoystickFeedbackHelper3(codexMicroJoystickFeedbackParam7) {
  return codexMicroJoystickFeedbackParam7.visible
    ? {
        ...codexMicroJoystickFeedbackParam7,
        visible: false,
      }
    : codexMicroJoystickFeedbackParam7;
}
export function codexMicroJoystickFeedbackA(
  codexMicroJoystickFeedbackParam5,
  codexMicroJoystickFeedbackParam6,
) {
  let codexMicroJoystickFeedbackValue4 = codexMicroJoystickFeedbackHelper1(
    codexMicroJoystickFeedbackParam5.get(codexMicroJoystickFeedbackT),
    codexMicroJoystickFeedbackParam6,
  );
  return (
    codexMicroJoystickFeedbackParam5.set(
      codexMicroJoystickFeedbackT,
      codexMicroJoystickFeedbackValue4,
    ),
    codexMicroJoystickFeedbackValue4
  );
}
export function codexMicroJoystickFeedbackO(
  codexMicroJoystickFeedbackParam8,
  codexMicroJoystickFeedbackParam9,
  codexMicroJoystickFeedbackParam10,
) {
  codexMicroJoystickFeedbackParam8.set(
    codexMicroJoystickFeedbackT,
    codexMicroJoystickFeedbackHelper2(
      codexMicroJoystickFeedbackParam8.get(codexMicroJoystickFeedbackT),
      codexMicroJoystickFeedbackParam9,
      codexMicroJoystickFeedbackParam10,
    ),
  );
}
export function codexMicroJoystickFeedbackN(codexMicroJoystickFeedbackParam11) {
  codexMicroJoystickFeedbackParam11.set(
    codexMicroJoystickFeedbackT,
    codexMicroJoystickFeedbackHelper3,
  );
}
export function codexMicroJoystickFeedbackI(codexMicroJoystickFeedbackParam12) {
  codexMicroJoystickFeedbackParam12.set(
    codexMicroJoystickFeedbackT,
    codexMicroJoystickFeedbackValue2,
  );
}
var codexMicroJoystickFeedbackValue1,
  codexMicroJoystickFeedbackValue2,
  codexMicroJoystickFeedbackT;
export const codexMicroJoystickFeedbackR = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX();
  appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldFt();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB();
  codexMicroJoystickFeedbackValue1 = 0.1;
  codexMicroJoystickFeedbackValue2 = {
    action: null,
    direction: "right",
    event: {
      angle: 0,
      distance: 0,
    },
    status: "tracking",
    visible: false,
  };
  codexMicroJoystickFeedbackT =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyXt(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      codexMicroJoystickFeedbackValue2,
    );
});
export { codexMicroJoystickFeedbackT };
