// Restored from ref/webview/assets/use-add-marketplace-rsVHMQrF.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
import {
  createLazyEsmInitializer as rolldownRuntimeN,
  toEsm as rolldownRuntimeS,
} from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyD as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyD,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzB,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzX,
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
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9D,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O,
} from "./shared-host-services-runtime";
import {
  toastApiSignal as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eBi,
  lodashMemoize as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eCi,
} from "../current-ref-aliases/current-app-shared/index";
import {
  handleExternalLink as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutC1u3yp5sA,
  initOpenInBrowserRuntime as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutC1u3yp5sR,
} from "../current-ref-aliases/react-router-host-shared/index";
import {
  DialogSection as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1A,
  initDialogLayoutSectionsRuntime as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1C,
  DialogTitle as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1F,
  DialogHeader as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1I,
  DialogBody as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1N,
  initDialogLayoutRuntime as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1P,
  DialogFooter as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1R,
  Dialog as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1U,
} from "../../ui/dialog-layout-current/index";
import {
  useForm as esmR,
  initReactFormRuntime as esmT,
} from "../package-adapters/tanstack-react-form-current/index";
function useAddMarketplaceHelper1(useAddMarketplaceParam10) {
  let useAddMarketplaceValue28 = useAddMarketplaceParam10.source.trim();
  if (useAddMarketplaceValue28.length === 0) return null;
  let useAddMarketplaceValue29 = useAddMarketplaceParam10.refName.trim(),
    useAddMarketplaceValue30 = useAddMarketplaceParam10.sparsePaths
      .split(/[\n,]+/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  return {
    source: useAddMarketplaceValue28,
    refName:
      useAddMarketplaceValue29.length > 0 ? useAddMarketplaceValue29 : null,
    sparsePaths:
      useAddMarketplaceValue30.length > 0 ? useAddMarketplaceValue30 : null,
  };
}
async function useAddMarketplaceHelper2({
  forceReloadPlugins,
  onReloadError,
  params,
  sendAddMarketplace,
}) {
  let useAddMarketplaceValue27 = await sendAddMarketplace(params);
  try {
    await forceReloadPlugins();
  } catch (useAddMarketplaceValue31) {
    return (
      onReloadError(useAddMarketplaceValue31),
      {
        kind: "reload-failed",
        marketplaceName: useAddMarketplaceValue27.marketplaceName,
      }
    );
  }
  return {
    alreadyAdded: useAddMarketplaceValue27.alreadyAdded,
    kind: "added",
    marketplaceName: useAddMarketplaceValue27.marketplaceName,
  };
}
var useAddMarketplaceValue1 = rolldownRuntimeN(() => {});
export function useAddMarketplaceR(useAddMarketplaceParam1) {
  let { onAddMarketplace, onOpenChange, open } = useAddMarketplaceParam1,
    useAddMarketplaceValue9 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G(),
    [useAddMarketplaceValue10, useAddMarketplaceValue11] =
      useAddMarketplaceValue3.useState(null),
    useAddMarketplaceValue12 = {
      source: "",
      refName: "",
      sparsePaths: "",
    };
  let useAddMarketplaceValue13 = {
    onSubmit: (useAddMarketplaceParam9) => {
      let { value } = useAddMarketplaceParam9;
      if (!(value.source.trim().length > 0))
        return {
          fields: {
            source: useAddMarketplaceValue9.formatMessage({
              id: "skills.appsPage.addMarketplace.sourceRequired",
              defaultMessage: "Enter a marketplace source",
              description:
                "Validation message shown when adding a marketplace without a source",
            }),
          },
        };
    },
  };
  let useAddMarketplaceValue14 = esmR({
      defaultValues: useAddMarketplaceValue12,
      validators: useAddMarketplaceValue13,
      onSubmit: async (useAddMarketplaceParam8) => {
        let { value } = useAddMarketplaceParam8,
          useAddMarketplaceValue24 = useAddMarketplaceHelper1(value);
        if (useAddMarketplaceValue24 != null) {
          useAddMarketplaceValue11(null);
          try {
            await onAddMarketplace(useAddMarketplaceValue24);
            useAddMarketplaceValue14.reset();
            onOpenChange(false);
          } catch (useAddMarketplaceValue25) {
            let useAddMarketplaceValue26 = useAddMarketplaceValue25;
            useAddMarketplaceValue11(
              useAddMarketplaceValue26 instanceof Error
                ? useAddMarketplaceValue26.message
                : useAddMarketplaceValue9.formatMessage({
                    id: "skills.appsPage.addMarketplace.failed",
                    defaultMessage: "Failed to add marketplace",
                    description:
                      "Fallback error shown when adding a plugin marketplace fails",
                  }),
            );
          }
        }
      },
    }),
    useAddMarketplaceValue15 = (useAddMarketplaceParam2) => {
      let { source, isSubmitting, submissionAttempts } =
          useAddMarketplaceParam2,
        useAddMarketplaceValue17 = (useAddMarketplaceParam15) => {
          isSubmitting ||
            (useAddMarketplaceParam15 ||
              (useAddMarketplaceValue14.reset(),
              useAddMarketplaceValue11(null)),
            onOpenChange(useAddMarketplaceParam15));
        };
      return useAddMarketplaceValue4.jsx(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1U,
        {
          open,
          contentProps: {
            "aria-describedby": undefined,
          },
          onOpenChange: useAddMarketplaceValue17,
          shouldIgnoreClickOutside: isSubmitting,
          showDialogClose: !isSubmitting,
          size: "wide",
          children: useAddMarketplaceValue4.jsxs(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1N,
            {
              as: "form",
              className: "gap-4",
              onSubmit: (event) => {
                event.preventDefault();
                useAddMarketplaceValue14.handleSubmit();
              },
              children: [
                useAddMarketplaceValue4.jsx(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1F,
                  {
                    className: "sr-only",
                    children: useAddMarketplaceValue4.jsx(
                      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                      {
                        id: "skills.appsPage.addMarketplace.title",
                        defaultMessage: "Add plugin marketplace",
                        description:
                          "Dialog title for adding a plugin marketplace",
                      },
                    ),
                  },
                ),
                useAddMarketplaceValue4.jsx(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1A,
                  {
                    children: useAddMarketplaceValue4.jsx(
                      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1I,
                      {
                        title: useAddMarketplaceValue4.jsx(
                          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                          {
                            id: "skills.appsPage.addMarketplace.header",
                            defaultMessage: "Add plugin marketplace",
                            description:
                              "Header for adding a plugin marketplace",
                          },
                        ),
                        subtitle: useAddMarketplaceValue4.jsx(
                          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                          {
                            id: "skills.appsPage.addMarketplace.subtitle",
                            defaultMessage:
                              "Add from a GitHub repo, Git URL, or local folder. <link>Learn more</link>",
                            description:
                              "Short description in the add marketplace dialog",
                            values: {
                              link: useAddMarketplaceHelper4,
                            },
                          },
                        ),
                      },
                    ),
                  },
                ),
                useAddMarketplaceValue4.jsxs(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1A,
                  {
                    className: "gap-3",
                    children: [
                      useAddMarketplaceValue4.jsx(
                        useAddMarketplaceValue14.Field,
                        {
                          name: "source",
                          children: (useAddMarketplaceParam3) => {
                            let useAddMarketplaceValue18 =
                              submissionAttempts > 0 ||
                              useAddMarketplaceParam3.state.meta.isBlurred
                                ? (useAddMarketplaceParam3.state.meta.errors.find(
                                    useAddMarketplaceHelper3,
                                  ) ?? null)
                                : null;
                            return (
                              <label
                                className={useAddMarketplaceValue5}
                                htmlFor="plugin-marketplace-source"
                              >
                                {useAddMarketplaceValue4.jsx(
                                  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                                  {
                                    id: "skills.appsPage.addMarketplace.sourceLabel",
                                    defaultMessage: "Source",
                                    description:
                                      "Label for the marketplace source field",
                                  },
                                )}
                                <input
                                  id="plugin-marketplace-source"
                                  aria-describedby={
                                    useAddMarketplaceValue18 == null
                                      ? undefined
                                      : "plugin-marketplace-source-error"
                                  }
                                  aria-invalid={
                                    useAddMarketplaceValue18 != null
                                  }
                                  autoFocus={true}
                                  className={useAddMarketplaceValue6}
                                  disabled={isSubmitting}
                                  onBlur={useAddMarketplaceParam3.handleBlur}
                                  onChange={(event) => {
                                    useAddMarketplaceParam3.handleChange(
                                      event.target.value,
                                    );
                                  }}
                                  placeholder={useAddMarketplaceValue9.formatMessage(
                                    {
                                      id: "skills.appsPage.addMarketplace.sourcePlaceholder",
                                      defaultMessage:
                                        "openai/plugins or git@github.com:org/repo.git",
                                      description:
                                        "Placeholder for the marketplace source field",
                                    },
                                  )}
                                  type="text"
                                  value={useAddMarketplaceParam3.state.value}
                                />
                                {useAddMarketplaceValue18 == null ? null : (
                                  <span
                                    id="plugin-marketplace-source-error"
                                    className="text-token-error-foreground"
                                  >
                                    {useAddMarketplaceValue18}
                                  </span>
                                )}
                              </label>
                            );
                          },
                        },
                      ),
                      useAddMarketplaceValue4.jsx(
                        useAddMarketplaceValue14.Field,
                        {
                          name: "refName",
                          children: (useAddMarketplaceParam7) => (
                            <label
                              className={useAddMarketplaceValue5}
                              htmlFor="plugin-marketplace-ref"
                            >
                              {useAddMarketplaceValue4.jsx(
                                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                                {
                                  id: "skills.appsPage.addMarketplace.refLabel",
                                  defaultMessage: "Git ref",
                                  description:
                                    "Label for the optional marketplace git ref field",
                                },
                              )}
                              <input
                                id="plugin-marketplace-ref"
                                className={useAddMarketplaceValue6}
                                disabled={isSubmitting}
                                onBlur={useAddMarketplaceParam7.handleBlur}
                                onChange={(event) => {
                                  useAddMarketplaceParam7.handleChange(
                                    event.target.value,
                                  );
                                }}
                                placeholder={useAddMarketplaceValue9.formatMessage(
                                  {
                                    id: "skills.appsPage.addMarketplace.refPlaceholder",
                                    defaultMessage: "main",
                                    description:
                                      "Placeholder for the optional marketplace git ref field",
                                  },
                                )}
                                type="text"
                                value={useAddMarketplaceParam7.state.value}
                              />
                            </label>
                          ),
                        },
                      ),
                      useAddMarketplaceValue4.jsx(
                        useAddMarketplaceValue14.Field,
                        {
                          name: "sparsePaths",
                          children: (useAddMarketplaceParam6) => (
                            <label
                              className={useAddMarketplaceValue5}
                              htmlFor="plugin-marketplace-sparse-paths"
                            >
                              {useAddMarketplaceValue4.jsx(
                                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                                {
                                  id: "skills.appsPage.addMarketplace.sparsePathsLabel",
                                  defaultMessage: "Sparse paths",
                                  description:
                                    "Label for the optional marketplace sparse paths field",
                                },
                              )}
                              <textarea
                                id="plugin-marketplace-sparse-paths"
                                className={appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUnderscore(
                                  useAddMarketplaceValue6,
                                  "min-h-20 resize-y",
                                )}
                                disabled={isSubmitting}
                                onBlur={useAddMarketplaceParam6.handleBlur}
                                onChange={(event) => {
                                  useAddMarketplaceParam6.handleChange(
                                    event.target.value,
                                  );
                                }}
                                placeholder={useAddMarketplaceValue9.formatMessage(
                                  {
                                    id: "skills.appsPage.addMarketplace.sparsePathsPlaceholder",
                                    defaultMessage: "plugins/codex",
                                    description:
                                      "Placeholder for the optional marketplace sparse paths field",
                                  },
                                )}
                                value={useAddMarketplaceParam6.state.value}
                              />
                            </label>
                          ),
                        },
                      ),
                      useAddMarketplaceValue10 == null ? null : (
                        <div
                          className="text-sm text-token-error-foreground"
                          role="alert"
                        >
                          {useAddMarketplaceValue10}
                        </div>
                      ),
                    ],
                  },
                ),
                useAddMarketplaceValue4.jsx(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1A,
                  {
                    children: useAddMarketplaceValue4.jsxs(
                      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1R,
                      {
                        children: [
                          useAddMarketplaceValue4.jsx(
                            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
                            {
                              color: "outline",
                              disabled: isSubmitting,
                              onClick: () => {
                                useAddMarketplaceValue17(false);
                              },
                              children: useAddMarketplaceValue4.jsx(
                                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                                {
                                  id: "skills.appsPage.addMarketplace.cancel",
                                  defaultMessage: "Cancel",
                                  description:
                                    "Cancel button in the add marketplace dialog",
                                },
                              ),
                            },
                          ),
                          useAddMarketplaceValue4.jsx(
                            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
                            {
                              disabled:
                                source.trim().length === 0 || isSubmitting,
                              loading: isSubmitting,
                              type: "submit",
                              children: useAddMarketplaceValue4.jsx(
                                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4D,
                                {
                                  id: "skills.appsPage.addMarketplace.submit",
                                  defaultMessage: "Add marketplace",
                                  description:
                                    "Submit button in the add marketplace dialog",
                                },
                              ),
                            },
                          ),
                        ],
                      },
                    ),
                  },
                ),
              ],
            },
          ),
        },
      );
    };
  return useAddMarketplaceValue4.jsx(useAddMarketplaceValue14.Subscribe, {
    selector: useAddMarketplaceHelper6,
    children: useAddMarketplaceValue15,
  });
}
function useAddMarketplaceHelper3(useAddMarketplaceParam17) {
  return typeof useAddMarketplaceParam17 == "string";
}
function useAddMarketplaceHelper4(useAddMarketplaceParam11) {
  return (
    <a
      className="cursor-interaction text-token-link underline-offset-2 hover:underline"
      href="https://developers.openai.com/codex/plugins/build"
      onClick={useAddMarketplaceHelper5}
    >
      {useAddMarketplaceParam11}
    </a>
  );
}
function useAddMarketplaceHelper5(useAddMarketplaceParam12) {
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutC1u3yp5sA(
    {
      event: useAddMarketplaceParam12,
      href: "https://developers.openai.com/codex/plugins/build",
      initiator: "open_in_browser_bridge",
    },
  );
}
function useAddMarketplaceHelper6(useAddMarketplaceParam13) {
  return {
    source: useAddMarketplaceParam13.values.source,
    isSubmitting: useAddMarketplaceParam13.isSubmitting,
    submissionAttempts: useAddMarketplaceParam13.submissionAttempts,
  };
}
var useAddMarketplaceValue2,
  useAddMarketplaceValue3,
  useAddMarketplaceValue4,
  useAddMarketplaceValue5,
  useAddMarketplaceValue6;
export const useAddMarketplaceI = rolldownRuntimeN(() => {
  useAddMarketplaceValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  esmT();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyV();
  useAddMarketplaceValue3 = rolldownRuntimeS(
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn(),
    1,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1P();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutH49w84u1C();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutC1u3yp5sR();
  useAddMarketplaceValue1();
  useAddMarketplaceValue4 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
  useAddMarketplaceValue5 =
    "flex flex-col gap-1.5 text-sm text-token-description-foreground";
  useAddMarketplaceValue6 =
    "w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border";
});
export function useAddMarketplaceN(useAddMarketplaceParam4) {
  let { forceReloadPlugins, hostId } = useAddMarketplaceParam4,
    useAddMarketplaceValue20 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyD(
        appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      ),
    useAddMarketplaceValue21 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4G();
  return async (useAddMarketplaceParam5) => {
    let useAddMarketplaceValue23 = await useAddMarketplaceHelper2({
      forceReloadPlugins,
      onReloadError: useAddMarketplaceHelper7,
      params: useAddMarketplaceParam5,
      sendAddMarketplace: (useAddMarketplaceParam16) =>
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O(
          "add-marketplace",
          {
            hostId,
            ...useAddMarketplaceParam16,
          },
        ),
    });
    if (useAddMarketplaceValue23.kind === "reload-failed") {
      useAddMarketplaceValue20
        .get(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eCi,
        )
        .warning(
          useAddMarketplaceValue21.formatMessage(
            {
              id: "skills.appsPage.addMarketplace.refreshFailed",
              defaultMessage:
                "{marketplaceName} marketplace is configured, but failed to refresh the plugin list",
              description:
                "Toast shown after a marketplace add request succeeds but refreshing the plugin list fails",
            },
            {
              marketplaceName: useAddMarketplaceValue23.marketplaceName,
            },
          ),
        );
      return;
    }
    useAddMarketplaceValue20
      .get(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eCi,
      )
      .success(
        useAddMarketplaceValue23.alreadyAdded
          ? useAddMarketplaceValue21.formatMessage(
              {
                id: "skills.appsPage.addMarketplace.alreadyAdded",
                defaultMessage: "{marketplaceName} is already added",
                description:
                  "Toast shown after adding a marketplace that was already configured",
              },
              {
                marketplaceName: useAddMarketplaceValue23.marketplaceName,
              },
            )
          : useAddMarketplaceValue21.formatMessage(
              {
                id: "skills.appsPage.addMarketplace.success",
                defaultMessage: "{marketplaceName} marketplace added",
                description:
                  "Toast shown after successfully adding a plugin marketplace",
              },
              {
                marketplaceName: useAddMarketplaceValue23.marketplaceName,
              },
            ),
      );
  };
}
function useAddMarketplaceHelper7(useAddMarketplaceParam14) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzX.error(
    "Failed to refresh plugins after adding marketplace",
    {
      safe: {},
      sensitive: {
        error: useAddMarketplaceParam14,
      },
    },
  );
}
var useAddMarketplaceValue7;
export const useAddMarketplaceT = rolldownRuntimeN(() => {
  useAddMarketplaceValue7 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9D();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eBi();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzB();
  useAddMarketplaceValue1();
});
