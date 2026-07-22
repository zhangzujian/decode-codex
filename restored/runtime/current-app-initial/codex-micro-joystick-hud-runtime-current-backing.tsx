// Restored from ref/webview/assets/codex-micro-joystick-hud-BhboNLbC.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// CodexMicroJoystickHud chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyO,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  defineMessages as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4A,
  FormattedMessage as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
  useIntl as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G,
  initReactIntlRuntimeChunk as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O,
} from "../package-adapters/react-intl-current/index";
import {
  notebookPreviewRuntimeMember0076 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMlij0y86N,
  notebookPreviewRuntimeMember0083 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMlij0y86R,
} from "../current-ref-aliases/notebook-preview-runtime/index";
import {
  firstRuRuntimeMember0003 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainFirstRuIo63sqtcB,
  firstRuRuntimeMember0020 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainFirstRuIo63sqtcX,
} from "../current-ref-aliases/first-ru-runtime/index";
import {
  settingsCommandSharedRuntimeVariant9Member0078 as appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldKt,
  settingsCommandSharedRuntimeVariant9Member0102 as appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldWt,
} from "../current-ref-aliases/settings-command-shared-runtime-variant-9/index";
import {
  appgenLibraryPageHotkeyWiRuntimeMember0001 as appInitialAppMainPullRequestRouteNewThreadPanelPageAppgenLibraryPageHotkeyWiL9h1w628A,
  appgenLibraryPageHotkeyWiRuntimeMember0006 as appInitialAppMainPullRequestRouteNewThreadPanelPageAppgenLibraryPageHotkeyWiL9h1w628O,
} from "../current-ref-aliases/appgen-library-page-hotkey-wi-runtime/index";
import {
  codexMicroJoystickFeedbackRuntimeMember0005 as codexMicroJoystickFeedbackR,
  codexMicroJoystickFeedbackRuntimeMember0006 as codexMicroJoystickFeedbackT,
} from "../current-ref-aliases/codex-micro-joystick-feedback-runtime/index";
import {
  initCodexMicroAnalogActionTitleChunk as codexMicroAnalogActionTitleN,
  formatCodexMicroAnalogActionTitle as codexMicroAnalogActionTitleT,
} from "../../settings/codex-micro-analog-action-title";
export function CodexMicroJoystickHud() {
  let codexMicroJoystickHudValue57 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyO(
        codexMicroJoystickFeedbackT,
      ),
    codexMicroJoystickHudValue58 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyO(
        appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldWt,
      ),
    { skills } =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMlij0y86R();
  return codexMicroJoystickHudValue2.jsx(codexMicroJoystickHudHelper1, {
    feedback: codexMicroJoystickHudValue57,
    isMappingEditorOpen: codexMicroJoystickHudValue58,
    skills,
  });
}
function codexMicroJoystickHudHelper1(codexMicroJoystickHudParam1) {
  let { feedback, isMappingEditorOpen, skills } = codexMicroJoystickHudParam1,
    codexMicroJoystickHudValue7 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G(),
    codexMicroJoystickHudValue8 = feedback.visible && !isMappingEditorOpen,
    codexMicroJoystickHudValue9 = feedback.event.angle * Math.PI * 2,
    codexMicroJoystickHudValue10 = Math.min(feedback.event.distance, 1) * 13,
    codexMicroJoystickHudValue11 = feedback.status === "game-gesture",
    codexMicroJoystickHudValue12 = codexMicroJoystickHudValue11
      ? (feedback.gameActivationProgress ?? 0)
      : Math.min(feedback.event.distance / 0.5, 1),
    codexMicroJoystickHudValue13 = codexMicroJoystickHudValue11
      ? codexMicroJoystickHudValue2.jsx(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
          {
            ...codexMicroJoystickHudValue5.miniGameTitle,
          },
        )
      : feedback.action == null
        ? codexMicroJoystickHudValue2.jsx(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
            {
              id: "codexMicro.joystickFeedback.unassignedTitle",
              defaultMessage: "Unassigned",
              description:
                "Action title shown for an unassigned Codex Micro joystick direction",
            },
          )
        : codexMicroAnalogActionTitleT(
            feedback.action,
            skills,
            codexMicroJoystickHudValue7,
          );
  let codexMicroJoystickHudValue14 = codexMicroJoystickHudValue13,
    codexMicroJoystickHudValue15 = codexMicroJoystickHudValue5[feedback.status];
  feedback.status === "tracking" &&
    feedback.action == null &&
    (codexMicroJoystickHudValue15 =
      codexMicroJoystickHudValue5.unassignedTracking);
  let codexMicroJoystickHudValue16 = feedback.status === "triggered",
    codexMicroJoystickHudValue17 = feedback.status === "unavailable",
    codexMicroJoystickHudValue18 =
      codexMicroJoystickHudValue16 || codexMicroJoystickHudValue11,
    _CodexMicroJoystickHud = !codexMicroJoystickHudValue8,
    codexMicroJoystickHudValue19 = codexMicroJoystickHudValue8
      ? "translate-y-0 opacity-100"
      : "-translate-y-1 opacity-0",
    codexMicroJoystickHudValue20 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "pointer-events-none absolute top-14 left-1/2 z-[55] w-[min(19rem,calc(100%_-_2rem))] -translate-x-1/2 transition-[opacity,transform] duration-basic ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity",
        codexMicroJoystickHudValue19,
      );
  let codexMicroJoystickHudValue21 = feedback.status,
    codexMicroJoystickHudValue22 =
      codexMicroJoystickHudValue18 &&
      "border-token-text-link-foreground/35 shadow-[0_10px_30px_rgba(30,88,190,0.18)]",
    codexMicroJoystickHudValue23 =
      codexMicroJoystickHudValue17 &&
      "border-token-editor-warning-foreground/35",
    codexMicroJoystickHudValue24 =
      !codexMicroJoystickHudValue18 &&
      !codexMicroJoystickHudValue17 &&
      "border-token-border",
    codexMicroJoystickHudValue25 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "flex items-center gap-3 rounded-2xl border bg-token-dropdown-background/95 p-2.5 shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-basic ease-out",
        codexMicroJoystickHudValue22,
        codexMicroJoystickHudValue23,
        codexMicroJoystickHudValue24,
      );
  let codexMicroJoystickHudValue26 = codexMicroJoystickHudValue18
      ? "border-token-text-link-foreground/45 shadow-[inset_0_0_0_1px_rgba(141,181,255,0.12),0_0_14px_rgba(91,141,235,0.18)]"
      : "border-token-border",
    codexMicroJoystickHudValue27 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "relative size-14 shrink-0 overflow-hidden rounded-full border bg-token-main-surface-secondary shadow-inner transition-[border-color,box-shadow] duration-basic ease-out",
        codexMicroJoystickHudValue26,
      );
  let codexMicroJoystickHudValue28,
    codexMicroJoystickHudValue29,
    codexMicroJoystickHudValue30;
  codexMicroJoystickHudValue28 = (
    <div className="absolute inset-[1.15rem] rounded-full border border-token-border/70" />
  );
  codexMicroJoystickHudValue29 = (
    <div className="absolute top-1/2 right-2 left-2 h-px -translate-y-1/2 bg-token-border/45" />
  );
  codexMicroJoystickHudValue30 = (
    <div className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-token-border/45" />
  );
  let codexMicroJoystickHudValue31 =
      codexMicroJoystickHudValue18 &&
      "bg-token-text-link-foreground shadow-[0_0_9px_rgba(91,141,235,0.72)]",
    codexMicroJoystickHudValue32 =
      codexMicroJoystickHudValue17 && "bg-token-editor-warning-foreground",
    codexMicroJoystickHudValue33 =
      !codexMicroJoystickHudValue18 &&
      !codexMicroJoystickHudValue17 &&
      "bg-token-foreground",
    codexMicroJoystickHudValue34 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "absolute inset-0 m-auto size-2.5 rounded-full shadow-sm transition-[background-color,box-shadow,transform] duration-75 ease-out motion-reduce:transition-none",
        codexMicroJoystickHudValue31,
        codexMicroJoystickHudValue32,
        codexMicroJoystickHudValue33,
      );
  let codexMicroJoystickHudValue35 = `translate(${Math.cos(codexMicroJoystickHudValue9) * codexMicroJoystickHudValue10}px, ${Math.sin(codexMicroJoystickHudValue9) * codexMicroJoystickHudValue10}px)`,
    codexMicroJoystickHudValue36 = {
      transform: codexMicroJoystickHudValue35,
    };
  let codexMicroJoystickHudValue37 = (
    <div
      className={codexMicroJoystickHudValue34}
      style={codexMicroJoystickHudValue36}
    />
  );
  let codexMicroJoystickHudValue38 = (
    <div className={codexMicroJoystickHudValue27}>
      {codexMicroJoystickHudValue28}
      {codexMicroJoystickHudValue29}
      {codexMicroJoystickHudValue30}
      {codexMicroJoystickHudValue37}
    </div>
  );
  let codexMicroJoystickHudValue39 = (
    <div className="flex items-center gap-1.5 text-[11px] font-medium text-token-text-tertiary">
      {codexMicroJoystickHudValue11 ? (
        codexMicroJoystickHudValue2.jsx(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
          {
            ...codexMicroJoystickHudValue5.gameGesture,
          },
        )
      ) : (
        <>
          {codexMicroJoystickHudValue2.jsx(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainFirstRuIo63sqtcB,
            {
              className:
                appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
                  "size-3 shrink-0",
                  codexMicroJoystickHudValue3[feedback.direction],
                ),
            },
          )}
          <span>
            {codexMicroJoystickHudValue2.jsx(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
              {
                ...codexMicroJoystickHudValue5[feedback.direction],
              },
            )}
          </span>
        </>
      )}
    </div>
  );
  let codexMicroJoystickHudValue40 = (
    <div className="line-clamp-2 text-sm leading-4 font-medium text-token-text-primary">
      {codexMicroJoystickHudValue14}
    </div>
  );
  let codexMicroJoystickHudValue41 =
      codexMicroJoystickHudValue4[feedback.status],
    codexMicroJoystickHudValue42 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "flex min-h-4 items-center gap-1.5 text-xs",
        codexMicroJoystickHudValue41,
      );
  let codexMicroJoystickHudValue43 = codexMicroJoystickHudValue16 ? (
    codexMicroJoystickHudValue2.jsx(
      appInitialAppMainPullRequestRouteNewThreadPanelPageAppgenLibraryPageHotkeyWiL9h1w628A,
      {
        className: "size-3 shrink-0",
      },
    )
  ) : (
    <span className="size-1.5 shrink-0 rounded-full bg-current opacity-70" />
  );
  let codexMicroJoystickHudValue44 = codexMicroJoystickHudValue11
    ? {
        progress: codexMicroJoystickHudValue7.formatNumber(
          codexMicroJoystickHudValue12,
          {
            style: "percent",
          },
        ),
      }
    : undefined;
  let codexMicroJoystickHudValue45 = codexMicroJoystickHudValue2.jsx(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
    {
      ...codexMicroJoystickHudValue15,
      values: codexMicroJoystickHudValue44,
    },
  );
  let codexMicroJoystickHudValue46 = (
    <div
      aria-atomic="true"
      aria-live="polite"
      className={codexMicroJoystickHudValue42}
    >
      {codexMicroJoystickHudValue43}
      {codexMicroJoystickHudValue45}
    </div>
  );
  let codexMicroJoystickHudValue47 =
      codexMicroJoystickHudValue18 && "bg-token-text-link-foreground",
    codexMicroJoystickHudValue48 =
      codexMicroJoystickHudValue17 && "bg-token-editor-warning-foreground",
    codexMicroJoystickHudValue49 =
      !codexMicroJoystickHudValue18 &&
      !codexMicroJoystickHudValue17 &&
      "bg-token-text-tertiary/55",
    codexMicroJoystickHudValue50 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "h-full origin-left rounded-full transition-[background-color,transform] duration-75 ease-out motion-reduce:transition-none",
        codexMicroJoystickHudValue47,
        codexMicroJoystickHudValue48,
        codexMicroJoystickHudValue49,
      );
  let codexMicroJoystickHudValue51 = `scaleX(${codexMicroJoystickHudValue12})`,
    codexMicroJoystickHudValue52 = {
      transform: codexMicroJoystickHudValue51,
    };
  let codexMicroJoystickHudValue53 = (
    <div className="bg-token-main-surface-secondary h-0.5 overflow-hidden rounded-full">
      <div
        className={codexMicroJoystickHudValue50}
        style={codexMicroJoystickHudValue52}
      />
    </div>
  );
  let codexMicroJoystickHudValue54 = (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
      {codexMicroJoystickHudValue39}
      {codexMicroJoystickHudValue40}
      {codexMicroJoystickHudValue46}
      {codexMicroJoystickHudValue53}
    </div>
  );
  let codexMicroJoystickHudValue55 = (
    <div className={codexMicroJoystickHudValue25}>
      {codexMicroJoystickHudValue38}
      {codexMicroJoystickHudValue54}
    </div>
  );
  return (
    <div
      aria-hidden={_CodexMicroJoystickHud}
      className={codexMicroJoystickHudValue20}
      data-status={codexMicroJoystickHudValue21}
      data-visible={codexMicroJoystickHudValue8}
    >
      {codexMicroJoystickHudValue55}
    </div>
  );
}
var codexMicroJoystickHudValue1,
  codexMicroJoystickHudValue2,
  codexMicroJoystickHudValue3,
  codexMicroJoystickHudValue4,
  codexMicroJoystickHudValue5;
rolldownRuntimeN(() => {
  codexMicroJoystickHudValue1 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  appInitialAppMainSettingsCommandMenuSectionItemsNewThreadPanelPageSettingsPagBzu8y8ldKt();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainFirstRuIo63sqtcX();
  appInitialAppMainPullRequestRouteNewThreadPanelPageAppgenLibraryPageHotkeyWiL9h1w628O();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMlij0y86N();
  codexMicroAnalogActionTitleN();
  codexMicroJoystickFeedbackR();
  codexMicroJoystickHudValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
  codexMicroJoystickHudValue3 = {
    up: "",
    right: "rotate-90",
    down: "rotate-180",
    left: "-rotate-90",
  };
  codexMicroJoystickHudValue4 = {
    "game-gesture": "text-token-text-link-foreground",
    tracking: "text-token-text-secondary",
    triggered: "text-token-text-link-foreground",
    unassigned: "text-token-text-secondary",
    unavailable: "text-token-editor-warning-foreground",
  };
  codexMicroJoystickHudValue5 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4A(
      {
        miniGameTitle: {
          id: "codexMicro.joystickFeedback.miniGameTitle",
          defaultMessage: "Mini-game",
          description:
            "Title shown while the Codex Micro mini-game activation gesture is in progress",
        },
        gameGesture: {
          id: "codexMicro.joystickFeedback.gameGesture",
          defaultMessage: "Secret game",
          description:
            "Category label shown while the Codex Micro mini-game activation gesture is in progress",
        },
        "game-gesture": {
          id: "codexMicro.joystickFeedback.gameGestureProgress",
          defaultMessage: "Keep circling · {progress}",
          description:
            "Progress shown while circling the Codex Micro joystick to activate a mini-game",
        },
        up: {
          id: "codexMicro.joystickFeedback.up",
          defaultMessage: "Up",
          description: "Up direction in the Codex Micro joystick feedback HUD",
        },
        right: {
          id: "codexMicro.joystickFeedback.right",
          defaultMessage: "Right",
          description:
            "Right direction in the Codex Micro joystick feedback HUD",
        },
        down: {
          id: "codexMicro.joystickFeedback.down",
          defaultMessage: "Down",
          description:
            "Down direction in the Codex Micro joystick feedback HUD",
        },
        left: {
          id: "codexMicro.joystickFeedback.left",
          defaultMessage: "Left",
          description:
            "Left direction in the Codex Micro joystick feedback HUD",
        },
        tracking: {
          id: "codexMicro.joystickFeedback.tracking",
          defaultMessage: "Move farther to trigger",
          description:
            "Feedback shown while moving the Codex Micro joystick toward an assigned action",
        },
        triggered: {
          id: "codexMicro.joystickFeedback.triggered",
          defaultMessage: "Triggered",
          description:
            "Feedback shown when a Codex Micro joystick action has been dispatched",
        },
        unassigned: {
          id: "codexMicro.joystickFeedback.unassigned",
          defaultMessage: "Direction reached",
          description:
            "Feedback shown when the Codex Micro joystick reaches an unassigned direction",
        },
        unavailable: {
          id: "codexMicro.joystickFeedback.unavailable",
          defaultMessage: "Shortcut unavailable",
          description:
            "Feedback shown when a Codex Micro joystick action cannot be dispatched",
        },
        unassignedTracking: {
          id: "codexMicro.joystickFeedback.unassignedTracking",
          defaultMessage: "No shortcut configured",
          description:
            "Feedback shown while moving the Codex Micro joystick toward an unassigned direction",
        },
      },
    );
})();
