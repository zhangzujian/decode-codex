// Restored from ref/webview/assets/composer-action-bar-run-location-dropdown-DYMtDJ0d.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// ComposerActionBarRunLocationDropdown chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
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
  CheckmarkIcon as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDg0b1kwsC,
  initCheckmarkIconRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDg0b1kwsL,
} from "../../ui/menu-current/index";
import {
  initTooltipRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeR,
  Tooltip as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeT,
} from "../../ui/tooltip-current/index";
import {
  Dropdown as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cR,
  initDropdownRuntime as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cS,
  DropdownMenu as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cT,
} from "../package-adapters/dropdown-current/index";
import {
  settingsCommandSharedRuntimeVariant18Member0003 as appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneD,
  settingsCommandSharedRuntimeVariant18Member0004 as appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneE,
  settingsCommandSharedRuntimeVariant18Member0006 as appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneO,
  settingsCommandSharedRuntimeVariant18Member0008 as appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneT,
} from "../current-ref-aliases/settings-command-shared-runtime-variant-18/index";
export function ComposerActionBarRunLocationDropdown(
  composerActionBarRunLocationDropdownParam1,
) {
  let {
      cloudUsesLocalExecutor,
      isLocalExecutorStarting,
      runLocation,
      onRunLocationChange,
    } = composerActionBarRunLocationDropdownParam1,
    composerActionBarRunLocationDropdownValue4 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G(),
    composerActionBarRunLocationDropdownValue5 = isLocalExecutorStarting
      ? composerActionBarRunLocationDropdownValue4.formatMessage({
          id: "composer.runLocation.triggerLabel.localExecutorStarting",
          defaultMessage:
            "Choose where to run this task. Local execution is starting…",
          description:
            "Accessible label for the run location menu while local execution starts",
        })
      : composerActionBarRunLocationDropdownValue4.formatMessage({
          id: "composer.runLocation.triggerLabel",
          defaultMessage: "Choose where to run this chat",
          description: "Accessible label and tooltip for the run location menu",
        });
  let composerActionBarRunLocationDropdownValue6 =
      composerActionBarRunLocationDropdownValue5,
    composerActionBarRunLocationDropdownValue7 = isLocalExecutorStarting
      ? composerActionBarRunLocationDropdownValue4.formatMessage({
          id: "composer.runLocation.triggerTooltip.localExecutorStarting",
          defaultMessage: "Local execution is starting…",
          description:
            "Tooltip on the composer run-location button shown while Desktop starts local execution for a Cloud Work task",
        })
      : composerActionBarRunLocationDropdownValue6;
  let composerActionBarRunLocationDropdownValue8 =
      composerActionBarRunLocationDropdownValue7,
    _ComposerActionBarRunLocationDropdown =
      runLocation === "cloud"
        ? composerActionBarRunLocationDropdownValue2.jsx(
            appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneD,
            {
              className:
                appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
                  "icon-xs",
                  isLocalExecutorStarting && "motion-safe:animate-pulse",
                ),
            },
          )
        : composerActionBarRunLocationDropdownValue2.jsx(
            appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneT,
            {
              className: "icon-xs",
            },
          );
  let composerActionBarRunLocationDropdownValue9 =
    composerActionBarRunLocationDropdownValue2.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
      {
        "aria-busy": isLocalExecutorStarting,
        "aria-label": composerActionBarRunLocationDropdownValue6,
        "data-composer-navigation-target": "run-location",
        color: "ghost",
        size: "composerSm",
        uniform: true,
        children: _ComposerActionBarRunLocationDropdown,
      },
    );
  let composerActionBarRunLocationDropdownValue10 =
    composerActionBarRunLocationDropdownValue2.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeT,
      {
        tooltipContent: composerActionBarRunLocationDropdownValue8,
        children: composerActionBarRunLocationDropdownValue9,
      },
    );
  let composerActionBarRunLocationDropdownValue11 =
    composerActionBarRunLocationDropdownValue2.jsx(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cR.Title,
      {
        children: composerActionBarRunLocationDropdownValue2.jsx(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
          {
            id: "composer.runLocation.title",
            defaultMessage: "Run this chat",
            description:
              "Header above the run location options in the composer action bar",
          },
        ),
      },
    );
  let composerActionBarRunLocationDropdownValue12 =
      runLocation === "local"
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDg0b1kwsC
        : undefined,
    composerActionBarRunLocationDropdownValue13 = () =>
      onRunLocationChange("local");
  let composerActionBarRunLocationDropdownValue14 =
    composerActionBarRunLocationDropdownValue4.formatMessage({
      id: "composer.runLocation.local.tooltip",
      defaultMessage:
        "ChatGPT works locally on your computer and can read and edit this project's contents",
      description:
        "Tooltip explaining file access when a task runs on the user's computer",
    });
  let composerActionBarRunLocationDropdownValue15 =
    composerActionBarRunLocationDropdownValue2.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
      {
        id: "composer.runLocation.local",
        defaultMessage: "On my computer",
        description: "Option to run a task on the user's computer",
      },
    );
  let composerActionBarRunLocationDropdownValue16 =
    composerActionBarRunLocationDropdownValue2.jsx(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cR.Item,
      {
        LeftIcon:
          appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneT,
        RightIcon: composerActionBarRunLocationDropdownValue12,
        onClick: composerActionBarRunLocationDropdownValue13,
        tooltipText: composerActionBarRunLocationDropdownValue14,
        children: composerActionBarRunLocationDropdownValue15,
      },
    );
  let composerActionBarRunLocationDropdownValue17 =
      runLocation === "cloud"
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDg0b1kwsC
        : undefined,
    composerActionBarRunLocationDropdownValue18 = () =>
      onRunLocationChange("cloud");
  let composerActionBarRunLocationDropdownValue19 = cloudUsesLocalExecutor
    ? composerActionBarRunLocationDropdownValue4.formatMessage({
        id: "composer.runLocation.cloud.tooltip.localExecutor",
        defaultMessage:
          "ChatGPT runs in the cloud and still has access to files on your computer",
        description:
          "Tooltip for the Cloud run location when local execution is enabled. Explains that ChatGPT runs in the cloud while retaining access to files on the user's computer.",
      })
    : composerActionBarRunLocationDropdownValue4.formatMessage({
        id: "composer.runLocation.cloud.tooltip",
        defaultMessage:
          "ChatGPT won't be able to access files on your computer unless you add them to your conversation",
        description:
          "Tooltip explaining file access limitations when a task runs in the cloud",
      });
  let composerActionBarRunLocationDropdownValue20 =
    composerActionBarRunLocationDropdownValue2.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
      {
        id: "composer.runLocation.cloud",
        defaultMessage: "In the cloud",
        description: "Option to run a task in the cloud",
      },
    );
  let composerActionBarRunLocationDropdownValue21 =
    composerActionBarRunLocationDropdownValue2.jsx(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cR.Item,
      {
        LeftIcon:
          appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneD,
        RightIcon: composerActionBarRunLocationDropdownValue17,
        onClick: composerActionBarRunLocationDropdownValue18,
        tooltipText: composerActionBarRunLocationDropdownValue19,
        children: composerActionBarRunLocationDropdownValue20,
      },
    );
  return composerActionBarRunLocationDropdownValue2.jsxs(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cT,
    {
      align: "end",
      side: "top",
      contentWidth: "sm",
      triggerButton: composerActionBarRunLocationDropdownValue10,
      children: [
        composerActionBarRunLocationDropdownValue11,
        composerActionBarRunLocationDropdownValue16,
        composerActionBarRunLocationDropdownValue21,
      ],
    },
  );
}
var composerActionBarRunLocationDropdownValue1,
  composerActionBarRunLocationDropdownValue2;
rolldownRuntimeN(() => {
  composerActionBarRunLocationDropdownValue1 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPEvbmo86cS();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewKr7rxhqeR();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDg0b1kwsL();
  appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneO();
  appInitialArtifactTabContentElectronAppMainSettingsCommandMenuSectionItemsPullOlm3nzneE();
  composerActionBarRunLocationDropdownValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
})();
