// Restored from ref/webview/assets/appgen-settings-dialog-DRz8pPGC.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// AppgenSettingsDialog chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  FormattedMessage as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
  useIntl as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G,
  initReactIntlRuntimeChunk as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O,
} from "../package-adapters/react-intl-current/index";
import {
  initDialogLayoutSectionsRuntime as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1C,
  DialogTitle as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1F,
  DialogHeader as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1I,
  DialogBody as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1N,
  initDialogLayoutRuntime as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1P,
  Dialog as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1U,
} from "../../ui/dialog-layout-current/index";
import {
  appgenSettingsSharedRuntimeVariant12Member0002 as appgenSettingsPageR,
  appgenSettingsSharedRuntimeVariant12Member0003 as appgenSettingsPageT,
} from "../current-ref-aliases/appgen-settings-shared-runtime-variant-12/index";
export function AppgenSettingsDialog(appgenSettingsDialogParam1) {
  let { onClose, projectId } = appgenSettingsDialogParam1,
    appgenSettingsDialogValue4 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G(),
    appgenSettingsDialogValue5 = appgenSettingsDialogValue2.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
      {
        id: "appgenSettings.dialog.title",
        defaultMessage: "Site settings",
        description: "Title for the Site settings dialog",
      },
    );
  let appgenSettingsDialogValue6 = appgenSettingsDialogValue5,
    _AppgenSettingsDialog = {
      "aria-describedby": undefined,
    };
  let appgenSettingsDialogValue7 = appgenSettingsDialogValue4.formatMessage({
    id: "appgenSettings.dialog.close",
    defaultMessage: "Close Site settings",
    description: "Accessible label for closing the Site settings dialog",
  });
  let appgenSettingsDialogValue8 = (appgenSettingsDialogParam2) => {
    appgenSettingsDialogParam2 || onClose();
  };
  let appgenSettingsDialogValue9 = (
    <div className="flex w-full flex-col px-4 pt-3">
      {appgenSettingsDialogValue2.jsx(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1F,
        {
          className: "sr-only",
          children: appgenSettingsDialogValue6,
        },
      )}
      {appgenSettingsDialogValue2.jsx(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1I,
        {
          title: appgenSettingsDialogValue6,
          titleClassName: "truncate pr-8",
        },
      )}
    </div>
  );
  let appgenSettingsDialogValue10 = appgenSettingsDialogValue2.jsxs(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1N,
    {
      className: "!px-1 !py-1",
      size: "full",
      children: [
        appgenSettingsDialogValue9,
        appgenSettingsDialogValue2.jsx(appgenSettingsPageT, {
          projectId,
          showHeader: false,
          onDeleted: onClose,
        }),
      ],
    },
  );
  return appgenSettingsDialogValue2.jsx(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1U,
    {
      open: true,
      contentClassName: "h-[720px] max-h-[92vh]",
      contentProps: _AppgenSettingsDialog,
      dialogCloseLabel: appgenSettingsDialogValue7,
      size: "xwide",
      onOpenChange: appgenSettingsDialogValue8,
      children: appgenSettingsDialogValue10,
    },
  );
}
var appgenSettingsDialogValue1, appgenSettingsDialogValue2;
rolldownRuntimeN(() => {
  appgenSettingsDialogValue1 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1P();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1C();
  appgenSettingsPageR();
  appgenSettingsDialogValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
})();
