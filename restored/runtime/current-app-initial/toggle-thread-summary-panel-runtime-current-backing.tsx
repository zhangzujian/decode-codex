// Restored from ref/webview/assets/toggle-thread-summary-panel-Dv6tUEah.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// ToggleThreadSummaryPanel chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  settingsCommandSharedRuntimeVariant4Member0003 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iB,
  settingsCommandSharedRuntimeVariant4Member0007 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iF,
  settingsCommandSharedRuntimeVariant4Member0013 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iL,
  settingsCommandSharedRuntimeVariant4Member0060 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iZ,
} from "../current-ref-aliases/settings-command-shared-runtime-variant-4/index";
import {
  settingsCommandSharedRuntimeMember0061 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKtg7n5fhK,
  settingsCommandSharedRuntimeMember0090 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKtg7n5fhZ,
} from "../current-ref-aliases/settings-command-shared-runtime/index";
import {
  useThreadSummaryPanelRuntimeMember0001 as useThreadSummaryPanelA,
  useThreadSummaryPanelRuntimeMember0003 as useThreadSummaryPanelI,
} from "../current-ref-aliases/use-thread-summary-panel-runtime/index";
export function toggleThreadSummaryPanelR(toggleThreadSummaryPanelParam1) {
  let { children, isOpen, onOpenChange, trigger } =
      toggleThreadSummaryPanelParam1,
    toggleThreadSummaryPanelValue4 = toggleThreadSummaryPanelValue2.jsx(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iZ,
      {
        asChild: true,
        children: trigger,
      },
    );
  let toggleThreadSummaryPanelValue5 = {
    maxHeight: "none",
    maxWidth: "none",
  };
  let _toggleThreadSummaryPanelR = isOpen ? children : null,
    _toggleThreadSummaryPanelI = toggleThreadSummaryPanelValue2.jsx(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iL,
      {
        align: "end",
        side: "bottom",
        sideOffset: 8,
        className:
          "!w-auto !overflow-visible !rounded-3xl !bg-transparent !p-0 !shadow-none !ring-0 !backdrop-blur-none",
        onFocusOutside: toggleThreadSummaryPanelHelper2,
        onPointerDownOutside: toggleThreadSummaryPanelHelper1,
        style: toggleThreadSummaryPanelValue5,
        children: _toggleThreadSummaryPanelR,
      },
    );
  return toggleThreadSummaryPanelValue2.jsxs(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iF,
    {
      open: isOpen,
      onOpenChange,
      children: [toggleThreadSummaryPanelValue4, _toggleThreadSummaryPanelI],
    },
  );
}
function toggleThreadSummaryPanelHelper1(event) {
  event.target instanceof Element &&
    event.target.closest('[data-app-shell-tab-strip-controller="right"]') !=
      null &&
    event.preventDefault();
}
function toggleThreadSummaryPanelHelper2(event) {
  event.target instanceof Element &&
    event.target.matches(
      '[role="tabpanel"][data-app-shell-tab-panel-controller="right"]',
    ) &&
    event.preventDefault();
}
var toggleThreadSummaryPanelValue1, toggleThreadSummaryPanelValue2;
export const toggleThreadSummaryPanelI = rolldownRuntimeN(() => {
  toggleThreadSummaryPanelValue1 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iB();
  toggleThreadSummaryPanelValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
});
export function toggleThreadSummaryPanelN(toggleThreadSummaryPanelParam2) {
  let toggleThreadSummaryPanelValue6 = toggleThreadSummaryPanelParam2.get(
    useThreadSummaryPanelA,
  );
  if (toggleThreadSummaryPanelValue6.displayMode !== "overlay") {
    toggleThreadSummaryPanelParam2.set(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKtg7n5fhZ,
      (toggleThreadSummaryPanelParam3) => !toggleThreadSummaryPanelParam3,
    );
    return;
  }
  toggleThreadSummaryPanelParam2.set(useThreadSummaryPanelA, {
    ...toggleThreadSummaryPanelValue6,
    isPopoverOpen: !toggleThreadSummaryPanelValue6.isPopoverOpen,
  });
}
export const toggleThreadSummaryPanelT = rolldownRuntimeN(() => {
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKtg7n5fhK();
  useThreadSummaryPanelI();
});
