// Restored from ref/webview/assets/hotkey-setter-if_emc3f.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// HotkeySetter chunk restored from the Codex webview bundle.
import {
  createLazyEsmInitializer as rolldownRuntimeN,
  toEsm as rolldownRuntimeS,
} from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  $n as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzN,
  $o as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzO,
} from "./shared-query-rpc-runtime";
import {
  FormattedMessage as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
  useIntl as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G,
  initReactIntlRuntimeChunk as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O,
} from "../package-adapters/react-intl-current/index";
import {
  Button as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
  initButtonRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V,
} from "./persisted-ui-runtime";
import {
  initTooltipShortcutRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeA,
  TooltipShortcut as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeI,
  initTooltipRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeR,
  Tooltip as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeT,
} from "../../ui/tooltip-current/index";
import {
  appgenSRuntimeMember0036 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainAppgenSJ5d6n91gAt,
  appgenSRuntimeMember0061 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainAppgenSJ5d6n91gOt,
} from "../current-ref-aliases/appgen-s-runtime/index";
import {
  settingsCommandSharedRuntimeVariant4Member0025 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iX,
  settingsCommandSharedRuntimeVariant4Member0026 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iY,
} from "../current-ref-aliases/settings-command-shared-runtime-variant-4/index";
import {
  appgenSettingsSharedRuntimeVariant10Member0002 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdC,
  appgenSettingsSharedRuntimeVariant10Member0004 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdL,
  appgenSettingsSharedRuntimeVariant10Member0005 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdN,
  appgenSettingsSharedRuntimeVariant10Member0009 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdT,
} from "../current-ref-aliases/appgen-settings-shared-runtime-variant-10/index";
import {
  KEYBINDING_LABEL_DEBOUNCE_MS as appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eI,
  formatAccelerator as appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eN,
  initKeybindingLabelDebounce as appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eO,
  initKeyboardShortcutFormatting as appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eR,
} from "../../utils/electron-menu-shortcuts/current-runtime";
import {
  pullRequestCodeReviewNewThreadPaneRuntimeVariant8Member0003 as appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneHrquzmi2I,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant8Member0007 as appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneHrquzmi2R,
} from "../current-ref-aliases/pull-request-code-review-new-thread-pane-runtime-variant-8/index";
function hotkeySetterR(event) {
  let hotkeySetterValue73 = hotkeySetterHelper4(event);
  if (hotkeySetterValue73 == null) return null;
  let hotkeySetterValue74 = [];
  return (
    event.ctrlKey && hotkeySetterValue74.push("Ctrl"),
    event.metaKey && hotkeySetterValue74.push("Command"),
    event.altKey && hotkeySetterValue74.push("Alt"),
    event.shiftKey && hotkeySetterValue74.push("Shift"),
    hotkeySetterValue74.push(hotkeySetterValue73),
    hotkeySetterValue74.join("+")
  );
}
function hotkeySetterHelper1(hotkeySetterParam8) {
  return hotkeySetterHelper3(hotkeySetterParam8, "pressed");
}
function hotkeySetterHelper2(hotkeySetterParam7) {
  return hotkeySetterHelper3(hotkeySetterParam7, "released");
}
function hotkeySetterHelper3(event, hotkeySetterParam2) {
  if (event.key.toLowerCase() === "fn") return "Fn";
  let hotkeySetterValue66 =
    event.location === hotkeySetterValue2
      ? "Left"
      : event.location === hotkeySetterValue3
        ? "Right"
        : null;
  if (hotkeySetterValue66 == null) return null;
  switch (event.key) {
    case "Alt":
      return hotkeySetterParam2 === "released" ||
        (event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey)
        ? `${hotkeySetterValue66}Option`
        : null;
    case "Meta":
      return hotkeySetterParam2 === "released" ||
        (event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey)
        ? `${hotkeySetterValue66}Command`
        : null;
    case "Control":
      return hotkeySetterValue66 === "Left" &&
        (hotkeySetterParam2 === "released" ||
          (event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey))
        ? "LeftControl"
        : null;
    default:
      return null;
  }
}
function hotkeySetterHelper4(event) {
  let hotkeySetterValue72 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainAppgenSJ5d6n91gAt(
      event,
    );
  return hotkeySetterValue1.has(hotkeySetterValue72)
    ? null
    : hotkeySetterValue72 === " "
      ? "Space"
      : hotkeySetterValue72 === "+"
        ? "Plus"
        : (hotkeySetterValue4.get(hotkeySetterValue72) ??
          (/^f\d{1,2}$/i.test(hotkeySetterValue72)
            ? hotkeySetterValue72.toUpperCase()
            : hotkeySetterValue72.toLowerCase() === "fn"
              ? "Fn"
              : hotkeySetterValue72.length === 1
                ? hotkeySetterValue72.toUpperCase()
                : (hotkeySetterHelper5(event.code) ?? hotkeySetterValue72)));
}
function hotkeySetterHelper5(hotkeySetterParam4) {
  return hotkeySetterParam4 == null
    ? null
    : /^Key[A-Z]$/.test(hotkeySetterParam4)
      ? hotkeySetterParam4.slice(3)
      : /^Digit[0-9]$/.test(hotkeySetterParam4)
        ? hotkeySetterParam4.slice(5)
        : hotkeySetterParam4 === "Space"
          ? "Space"
          : null;
}
var hotkeySetterValue1,
  hotkeySetterValue2,
  hotkeySetterValue3,
  hotkeySetterValue4,
  hotkeySetterI = rolldownRuntimeN(() => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainAppgenSJ5d6n91gOt();
    hotkeySetterValue1 = new Set([
      "Meta",
      "Control",
      "Alt",
      "AltGraph",
      "Shift",
    ]);
    hotkeySetterValue2 = 1;
    hotkeySetterValue3 = 2;
    hotkeySetterValue4 = new Map([
      ["Escape", "Esc"],
      ["ArrowUp", "Up"],
      ["ArrowDown", "Down"],
      ["ArrowLeft", "Left"],
      ["ArrowRight", "Right"],
    ]);
  });
export function hotkeySetterT(hotkeySetterParam1) {
  let {
      accelerator,
      acceleratorLabel,
      allowsBareModifiers = false,
      allowsSequences = false,
      ariaLabelledBy,
      canAppend = false,
      captureAriaLabel,
      className,
      conflict = null,
      disabled = false,
      emptyLabel,
      hotkeyName,
      isCapturing,
      valueLabelId: hotkeySetterValue9,
      onCancelCapture,
      onCapture,
      onClear,
      onReset,
      onStartCapture,
    } = hotkeySetterParam1,
    _hotkeySetterI =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G(),
    { platform: _hotkeySetterT } =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iX(),
    _hotkeySetterN = hotkeySetterValue6.useId(),
    hotkeySetterValue15 = hotkeySetterValue6.useRef(0),
    hotkeySetterValue16 = hotkeySetterValue6.useRef(null),
    hotkeySetterValue17 = hotkeySetterValue6.useRef(null),
    hotkeySetterValue18 = hotkeySetterValue6.useRef(null),
    [_e, hotkeySetterValue19] = hotkeySetterValue6.useState(false),
    [hotkeySetterValue20, be] = hotkeySetterValue6.useState(null),
    hotkeySetterValue21 = function () {
      hotkeySetterValue18.current != null &&
        (clearTimeout(hotkeySetterValue18.current),
        (hotkeySetterValue18.current = null));
      hotkeySetterValue17.current = null;
      be(null);
    };
  let hotkeySetterValue22 = hotkeySetterValue21,
    hotkeySetterValue23 = function (hotkeySetterParam6) {
      hotkeySetterValue15.current += 1;
      hotkeySetterValue16.current = null;
      hotkeySetterValue22();
      onCapture(hotkeySetterParam6);
    };
  let hotkeySetterValue24 = hotkeySetterValue23,
    hotkeySetterValue25 = function () {
      hotkeySetterValue15.current += 1;
      hotkeySetterValue16.current = null;
      hotkeySetterValue22();
      onCancelCapture();
    };
  let hotkeySetterValue26 = hotkeySetterValue25,
    hotkeySetterValue27 = function (hotkeySetterParam3) {
      let hotkeySetterValue71 = hotkeySetterValue17.current;
      if (hotkeySetterValue71 != null) {
        hotkeySetterValue24(`${hotkeySetterValue71} ${hotkeySetterParam3}`);
        return;
      }
      if (!allowsSequences || hotkeySetterParam3.includes("+")) {
        hotkeySetterValue24(hotkeySetterParam3);
        return;
      }
      hotkeySetterValue17.current = hotkeySetterParam3;
      be(
        `${appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eN(hotkeySetterParam3, _hotkeySetterT === "macOS", _hotkeySetterT === "linux")} …`,
      );
      hotkeySetterValue18.current = setTimeout(() => {
        hotkeySetterValue17.current === hotkeySetterParam3 &&
          hotkeySetterValue24(hotkeySetterParam3);
      }, appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eI);
    };
  let hotkeySetterValue28 = hotkeySetterValue27,
    hotkeySetterValue29 = async (hotkeySetterParam5) => {
      try {
        let { hotkey } =
          await appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzN(
            "global-dictation-capture-fn-hotkey",
          );
        hotkey != null &&
          hotkeySetterValue15.current === hotkeySetterParam5 &&
          hotkeySetterValue24(hotkey);
      } catch {}
    };
  let hotkeySetterValue30 =
      hotkeySetterValue6.useEffectEvent(hotkeySetterValue29),
    hotkeySetterValue31 = () => (
      (hotkeySetterValue15.current += 1),
      isCapturing &&
        allowsBareModifiers &&
        _hotkeySetterT === "macOS" &&
        hotkeySetterValue30(hotkeySetterValue15.current),
      () => {
        hotkeySetterValue15.current += 1;
        hotkeySetterValue16.current = null;
        hotkeySetterValue17.current = null;
        hotkeySetterValue18.current != null &&
          clearTimeout(hotkeySetterValue18.current);
      }
    );
  let hotkeySetterValue32;
  if (
    ((hotkeySetterValue32 = [allowsBareModifiers, isCapturing, _hotkeySetterT]),
    hotkeySetterValue6.useEffect(hotkeySetterValue31, hotkeySetterValue32),
    isCapturing)
  ) {
    let hotkeySetterValue54 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "flex w-full flex-col items-start gap-1",
        className,
      );
    let hotkeySetterValue55 = conflict == null ? undefined : _hotkeySetterN,
      hotkeySetterValue56 = conflict == null ? undefined : true,
      hotkeySetterValue57 =
        hotkeySetterValue20 ??
        _hotkeySetterI.formatMessage({
          id: "settings.hotkeySetter.capturePrompt",
          defaultMessage: "Press shortcut",
          description: "Prompt shown while capturing a settings hotkey",
        });
    let hotkeySetterValue58 = (event) => {
      if (event.repeat) return;
      if (
        (event.preventDefault(),
        event.stopPropagation(),
        event.key === "Escape")
      ) {
        hotkeySetterValue26();
        return;
      }
      if (allowsBareModifiers) {
        let hotkeySetterValue76 = hotkeySetterHelper1(event.nativeEvent);
        if (hotkeySetterValue76 != null) {
          hotkeySetterValue16.current = hotkeySetterValue76;
          return;
        }
      }
      let hotkeySetterValue70 = hotkeySetterR(event.nativeEvent);
      hotkeySetterValue70 != null && hotkeySetterValue28(hotkeySetterValue70);
    };
    let hotkeySetterValue59 = (event) => {
      if (
        (event.preventDefault(), event.stopPropagation(), !allowsBareModifiers)
      )
        return;
      let hotkeySetterValue75 = hotkeySetterHelper2(event.nativeEvent);
      hotkeySetterValue75 != null &&
        hotkeySetterValue16.current === hotkeySetterValue75 &&
        hotkeySetterValue24(hotkeySetterValue75);
    };
    let hotkeySetterValue60 = (
      <input
        data-codex-shortcut-capture={true}
        autoFocus={true}
        readOnly={true}
        aria-describedby={hotkeySetterValue55}
        aria-invalid={hotkeySetterValue56}
        aria-label={captureAriaLabel}
        className="h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none focus:border-token-focus-border"
        value={hotkeySetterValue57}
        onBlur={hotkeySetterValue26}
        onKeyDown={hotkeySetterValue58}
        onKeyUp={hotkeySetterValue59}
      />
    );
    let hotkeySetterValue61 = hotkeySetterValue7.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
      {
        id: "settings.hotkeySetter.cancel",
        defaultMessage: "Cancel",
        description: "Button label to cancel settings hotkey capture",
      },
    );
    let hotkeySetterValue62 = hotkeySetterValue7.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
      {
        color: "ghost",
        size: "toolbar",
        onMouseDown: hotkeySetterHelper6,
        onClick: hotkeySetterValue26,
        children: hotkeySetterValue61,
      },
    );
    let hotkeySetterValue63 = (
      <div className="flex items-center gap-2">
        {hotkeySetterValue60}
        {hotkeySetterValue62}
      </div>
    );
    let hotkeySetterValue64 =
      conflict == null ? null : (
        <span
          id={_hotkeySetterN}
          className="text-xs text-token-editor-warning-foreground"
        >
          {hotkeySetterValue7.jsx(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
            {
              id: "settings.hotkeySetter.conflict",
              defaultMessage: "Used by {hotkeyName}",
              description:
                "Warning shown while capturing a hotkey already used by another action",
              values: {
                hotkeyName: conflict,
              },
            },
          )}
        </span>
      );
    let hotkeySetterValue65;
    return (
      <div className={hotkeySetterValue54}>
        {hotkeySetterValue63}
        {hotkeySetterValue64}
      </div>
    );
  }
  let hotkeySetterValue33 = accelerator != null,
    hotkeySetterValue34;
  if (!hotkeySetterValue33) {
    let hotkeySetterValue69;
    hotkeySetterValue69 = _hotkeySetterI.formatMessage(
      {
        id: "settings.hotkeySetter.setAriaLabel",
        defaultMessage: "Set shortcut for {hotkeyName}",
        description: "Aria label for setting a settings hotkey",
      },
      {
        hotkeyName,
      },
    );
    hotkeySetterValue34 = hotkeySetterValue69;
  } else if (_e) {
    let hotkeySetterValue67;
    hotkeySetterValue67 = _hotkeySetterI.formatMessage(
      {
        id: "settings.hotkeySetter.createAriaLabel",
        defaultMessage: "Create new shortcut for {hotkeyName}",
        description: "Aria label for adding another settings hotkey",
      },
      {
        hotkeyName,
      },
    );
    hotkeySetterValue34 = hotkeySetterValue67;
  } else {
    let hotkeySetterValue68;
    hotkeySetterValue68 = _hotkeySetterI.formatMessage(
      {
        id: "settings.hotkeySetter.changeAriaLabel",
        defaultMessage: "Change shortcut for {hotkeyName}",
        description: "Aria label for changing a settings hotkey",
      },
      {
        hotkeyName,
      },
    );
    hotkeySetterValue34 = hotkeySetterValue68;
  }
  let hotkeySetterValue35 = _hotkeySetterI.formatMessage(
    {
      id: "settings.hotkeySetter.clearAriaLabel",
      defaultMessage: "Clear shortcut for {hotkeyName}",
      description: "Aria label for clearing a settings hotkey",
    },
    {
      hotkeyName,
    },
  );
  let hotkeySetterValue36 = hotkeySetterValue35,
    hotkeySetterValue37 = _hotkeySetterI.formatMessage(
      {
        id: "settings.hotkeySetter.resetAriaLabel",
        defaultMessage: "Reset shortcut for {hotkeyName}",
        description: "Aria label for resetting a settings hotkey",
      },
      {
        hotkeyName,
      },
    );
  let hotkeySetterValue38 = hotkeySetterValue37,
    hotkeySetterValue39 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
        "group flex min-h-8 items-center",
        className,
      );
  let hotkeySetterValue40 = ariaLabelledBy == null ? undefined : "group",
    hotkeySetterValue41 =
      acceleratorLabel == null
        ? (emptyLabel ??
          hotkeySetterValue7.jsx(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
            {
              id: "settings.hotkeySetter.unassigned",
              defaultMessage: "Unassigned",
              description: "Label shown when a settings hotkey is unassigned",
            },
          ))
        : hotkeySetterValue7.jsx(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeI,
            {
              className: "!px-2 !py-1 !text-sm",
              keysLabel: acceleratorLabel,
            },
          );
  let hotkeySetterValue42 = (
    <span
      id={hotkeySetterValue9}
      className="flex min-h-8 items-center gap-1 text-sm text-token-text-secondary"
    >
      {hotkeySetterValue41}
    </span>
  );
  let hotkeySetterValue43, hotkeySetterValue44;
  hotkeySetterValue43 = (event) => {
    hotkeySetterValue19(canAppend && hotkeySetterValue33 && event.shiftKey);
  };
  hotkeySetterValue44 = (event) => {
    hotkeySetterValue19(canAppend && hotkeySetterValue33 && event.shiftKey);
  };
  let hotkeySetterValue45 = () => {
    hotkeySetterValue19(false);
  };
  let hotkeySetterValue46 = (event) => {
    hotkeySetterValue33
      ? canAppend && event.shiftKey
        ? onStartCapture("append")
        : onStartCapture("replace")
      : onStartCapture("set");
  };
  let hotkeySetterValue47 = hotkeySetterValue7.jsx(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdC,
    {
      className: "icon-xs",
    },
  );
  let hotkeySetterValue48 = hotkeySetterValue7.jsx(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
    {
      "aria-label": hotkeySetterValue34,
      color: "ghost",
      disabled: disabled,
      size: "toolbar",
      uniform: true,
      onMouseEnter: hotkeySetterValue43,
      onMouseMove: hotkeySetterValue44,
      onMouseLeave: hotkeySetterValue45,
      onClick: hotkeySetterValue46,
      children: hotkeySetterValue47,
    },
  );
  let hotkeySetterValue49 = hotkeySetterValue7.jsx(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeT,
    {
      tooltipContent: hotkeySetterValue34,
      children: hotkeySetterValue48,
    },
  );
  let hotkeySetterValue50 = (
    <div className="flex min-w-0 flex-1 items-center gap-1">
      {hotkeySetterValue42}
      {hotkeySetterValue49}
    </div>
  );
  let hotkeySetterValue51 = hotkeySetterValue33
    ? hotkeySetterValue7.jsx(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeT,
        {
          tooltipContent: hotkeySetterValue36,
          children: hotkeySetterValue7.jsx(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
            {
              "aria-label": hotkeySetterValue36,
              color: "ghost",
              disabled: disabled,
              size: "toolbar",
              uniform: true,
              onClick: onClear,
              children: hotkeySetterValue7.jsx(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdT,
                {
                  className: "icon-xs",
                },
              ),
            },
          ),
        },
      )
    : null;
  let hotkeySetterValue52 =
    onReset == null
      ? null
      : hotkeySetterValue7.jsx(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeT,
          {
            tooltipContent: hotkeySetterValue38,
            children: hotkeySetterValue7.jsx(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
              {
                "aria-label": hotkeySetterValue38,
                color: "ghost",
                disabled: disabled,
                size: "toolbar",
                uniform: true,
                onClick: onReset,
                children: hotkeySetterValue7.jsx(
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneHrquzmi2R,
                  {
                    className: "icon-xs",
                  },
                ),
              },
            ),
          },
        );
  let $ = (
    <div className="ml-2 flex shrink-0 items-center justify-end gap-1">
      {hotkeySetterValue51}
      {hotkeySetterValue52}
    </div>
  );
  return (
    <div
      aria-labelledby={ariaLabelledBy}
      className={hotkeySetterValue39}
      role={hotkeySetterValue40}
    >
      {hotkeySetterValue50}
      {$}
    </div>
  );
}
function hotkeySetterHelper6(event) {
  event.preventDefault();
}
var hotkeySetterValue5, hotkeySetterValue6, hotkeySetterValue7;
export const hotkeySetterN = rolldownRuntimeN(() => {
  hotkeySetterValue5 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV();
  hotkeySetterValue6 = rolldownRuntimeS(
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn(),
    1,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeA();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeR();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iY();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdL();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPB4s0c4vdN();
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneHrquzmi2I();
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eR();
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePagePullRequestRLl1u4x0eO();
  hotkeySetterI();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzO();
  hotkeySetterValue7 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
});
export { hotkeySetterI, hotkeySetterR };
