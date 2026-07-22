// Restored from ref/webview/assets/onboarding-banner-pS4BNYsY.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// OnboardingBanner chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  Button as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
  initButtonRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V,
} from "./persisted-ui-runtime";
import {
  notebookPreviewRuntimeVariant3Member0007 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewIaq4jiqvG,
  notebookPreviewRuntimeVariant3Member0011 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewIaq4jiqvK,
} from "../current-ref-aliases/notebook-preview-runtime-variant-3/index";
import {
  pluginDRuntimeMember0024 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slN,
  pluginDRuntimeMember0029 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slT,
} from "../current-ref-aliases/plugin-d-runtime/index";
function onboardingBannerHelper1(onboardingBannerParam2) {
  let { action, buttonRef, kind } = onboardingBannerParam2,
    onboardingBannerValue22 = action.icon,
    onboardingBannerValue23 =
      onboardingBannerValue22 != null && action.label == null,
    onboardingBannerValue24 = onboardingBannerValue23
      ? "border-transparent text-token-description-foreground hover:text-token-foreground"
      : "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
    onboardingBannerValue25 = kind === "primary" ? "primary" : "ghost",
    onboardingBannerValue26 = onboardingBannerValue22
      ? onboardingBannerValue2.jsx(onboardingBannerValue22, {
          className: "icon-xs",
        })
      : null;
  return onboardingBannerValue2.jsxs(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
    {
      ref: buttonRef,
      "aria-label": action.ariaLabel,
      className: onboardingBannerValue24,
      color: onboardingBannerValue25,
      disabled: action.disabled,
      loading: action.loading,
      onClick: action.onClick,
      size: "composerSm",
      uniform: onboardingBannerValue23,
      children: [onboardingBannerValue26, action.label],
    },
  );
}
export function onboardingBannerT(onboardingBannerParam1) {
  let {
      actionsPlacement = "aside",
      additionalActions,
      badge,
      description,
      dismissAction,
      leadingVisual,
      primaryAction: _onboardingBannerT,
      primaryActionRef: _onboardingBannerN,
      secondaryAction,
      title: onboardingBannerValue4,
    } = onboardingBannerParam1,
    onboardingBannerValue6 =
      additionalActions != null ||
      _onboardingBannerT != null ||
      secondaryAction != null ||
      dismissAction != null,
    onboardingBannerValue7,
    onboardingBannerValue8,
    onboardingBannerValue9,
    onboardingBannerValue10;
  {
    let onboardingBannerValue28 = {
        aside:
          "self-center max-[400px]:w-full max-[400px]:justify-center max-[400px]:self-stretch",
        body: "mt-3 w-full justify-end",
        bodyOnNarrow: "mt-3 justify-start",
      }[actionsPlacement],
      onboardingBannerValue29 = (onboardingBannerParam3) => (
        <div
          className={appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
            "flex items-center gap-2",
            onboardingBannerValue28,
            onboardingBannerParam3,
          )}
        >
          {secondaryAction
            ? onboardingBannerValue2.jsx(onboardingBannerHelper1, {
                action: secondaryAction,
                kind: "secondary",
              })
            : null}
          {_onboardingBannerT
            ? onboardingBannerValue2.jsx(onboardingBannerHelper1, {
                action: _onboardingBannerT,
                buttonRef: _onboardingBannerN,
                kind: "primary",
              })
            : null}
          {dismissAction
            ? onboardingBannerValue2.jsx(onboardingBannerHelper1, {
                action: dismissAction,
                kind: "dismiss",
              })
            : null}
          {additionalActions}
        </div>
      );
    onboardingBannerValue8 =
      onboardingBannerValue6 && actionsPlacement === "body"
        ? onboardingBannerValue29()
        : null;
    onboardingBannerValue9 =
      onboardingBannerValue6 && actionsPlacement === "bodyOnNarrow"
        ? onboardingBannerValue29("hidden max-[400px]:flex")
        : null;
    onboardingBannerValue7 =
      onboardingBannerValue6 && actionsPlacement === "aside"
        ? onboardingBannerValue29()
        : null;
    onboardingBannerValue10 =
      onboardingBannerValue6 && actionsPlacement === "bodyOnNarrow"
        ? onboardingBannerValue29("max-[400px]:hidden")
        : null;
  }
  let onboardingBannerValue11 = onboardingBannerValue10,
    onboardingBannerValue12 = leadingVisual ? (
      <div className="flex size-8 shrink-0 items-center justify-center self-center text-token-text-secondary">
        {leadingVisual}
      </div>
    ) : null;
  let onboardingBannerValue13 = (
    <div className="min-w-0 text-base font-medium text-token-text-primary">
      {onboardingBannerValue4}
    </div>
  );
  let onboardingBannerValue14 = badge
    ? onboardingBannerValue2.jsx(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewIaq4jiqvG,
        {
          className:
            "border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary",
          children: badge,
        },
      )
    : null;
  let onboardingBannerValue15 = (
    <div className="flex flex-wrap items-center gap-2">
      {onboardingBannerValue13}
      {onboardingBannerValue14}
    </div>
  );
  let onboardingBannerValue16 = (
    <div className="text-base leading-normal text-pretty text-token-text-secondary">
      {description}
    </div>
  );
  let onboardingBannerValue17 = (
    <div className="min-w-0 flex-1">
      {onboardingBannerValue15}
      {onboardingBannerValue16}
      {onboardingBannerValue8}
      {onboardingBannerValue9}
    </div>
  );
  let onboardingBannerValue18 = (
    <div className="flex min-w-0 items-center gap-2 max-[400px]:items-start">
      {onboardingBannerValue12}
      {onboardingBannerValue17}
    </div>
  );
  let onboardingBannerValue19 =
    onboardingBannerValue7 ?? onboardingBannerValue11 ?? undefined;
  return onboardingBannerValue2.jsx(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slT,
    {
      stackOnNarrow: true,
      content: onboardingBannerValue18,
      customCtas: onboardingBannerValue19,
    },
  );
}
var onboardingBannerValue1, onboardingBannerValue2;
export const onboardingBannerN = rolldownRuntimeN(() => {
  onboardingBannerValue1 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewIaq4jiqvK();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slN();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V();
  onboardingBannerValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
});
