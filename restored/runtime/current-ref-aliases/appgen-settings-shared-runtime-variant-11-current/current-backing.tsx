// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~appgen-settings-p~dl1mfg21-CewNvCnh.js
// Flat generated current-build implementation used by the positional adapter.
import {
  createLazyEsmInitializer,
  toEsm,
  createLazyCommonJsModule,
} from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasUpperE,
  currentReactAliasLoweruLowern,
  currentReactAliasLowervLowert,
  currentReactAliasLowerx,
  currentReactAliasLowery,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasLowerb,
  currentQueryRpcAliasUpperBLowerl,
  currentQueryRpcAliasUpperC,
  currentQueryRpcAliasLowerd,
  currentQueryRpcAliasUpperFLowerl,
  currentQueryRpcAliasUpperLLowerl,
  currentQueryRpcAliasLowern,
  currentQueryRpcAliasUpperNLowerl,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasUpperOLowers,
  currentQueryRpcAliasUpperPLowers,
  currentQueryRpcAliasUpperS,
  currentQueryRpcAliasUpperTLowerl,
  currentQueryRpcAliasLoweru,
  currentQueryRpcAliasLowerx,
  currentQueryRpcAliasLowerxLowerl,
} from "../app-initial-query-rpc-runtime";
import {
  currentHostServicesAliasUpperD,
  currentHostServicesAliasUpperO,
} from "../app-initial-host-services-runtime";
import {
  windowContinuationTimeoutMs,
  localHostKind,
  threadRuntimeFunction0483,
  mcpListToolsResultSchema,
  lodashMatchesProperty,
  windowContinuationWarningMessage,
  initRemoteConnectionSignalsRuntime,
} from "../current-app-shared-current";
import {
  businessCheckoutSharedRuntimeVariant5Member0026,
  businessCheckoutSharedRuntimeVariant5Member0036,
} from "../business-checkout-shared-runtime-variant-5";
import {
  settingsCommandSharedRuntimeMember0042,
  settingsCommandSharedRuntimeMember0057,
} from "../settings-command-shared-runtime-current";
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21C(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param11,
  { includeActions = false, includeLogo = false } = {},
) {
  return {
    queryKey: [
      ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value4,
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param11,
      includeActions,
      includeLogo,
    ],
    staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
    queryFn: async () =>
      windowContinuationTimeoutMs.safeGet("/aip/connectors/{connector_id}", {
        parameters: {
          path: {
            connector_id:
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param11,
          },
          query: {
            include_logo: includeLogo,
            include_actions: includeActions,
          },
        },
        additionalHeaders: {
          [appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value1]:
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value2,
        },
      }),
  };
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21O(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param61,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value218 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param61.installUrl?.trim();
  if (
    !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value218
  )
    return null;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value219 =
    new URL(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value218,
    );
  return (
    (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value219.hash =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper9(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param61.id,
      )),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value219.toString()
  );
}
async function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21A({
  app,
  callbackMode = "native",
  connector,
  openInBrowser,
  queryClient,
}) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86 =
    connector;
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86 ==
    null
  )
    try {
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86 =
        await queryClient.fetchQuery(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21C(
            app.id,
          ),
        );
    } catch (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value167) {
      return (
        currentQueryRpcAliasLowerx.error("Failed to resolve app connect flow", {
          safe: {
            appId: app.id,
          },
          sensitive: {
            error:
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value167,
          },
        }),
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper10(
          {
            app,
            openInBrowser,
          },
        )
          ? {
              kind: "browser-fallback",
            }
          : {
              kind: "failed",
            }
      );
    }
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86 ==
    null
  )
    return {
      kind: "failed",
    };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value87 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper3(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86,
    );
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper2(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86,
    ) ||
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value87 ===
      "UNSUPPORTED"
  )
    return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper10(
      {
        app,
        openInBrowser,
      },
    )
      ? {
          kind: "browser-fallback",
        }
      : {
          kind: "failed",
        };
  try {
    if (
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value87 ===
      "NONE"
    )
      return (
        await windowContinuationTimeoutMs.safePost(
          "/aip/connectors/links/noauth",
          {
            requestBody: {
              connector_id:
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86.id,
              name: appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86.name,
              action_names: [],
            },
            additionalHeaders: {
              [appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value1]:
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value2,
            },
          },
        ),
        {
          kind: "connected-directly",
        }
      );
    let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value103 =
        callbackMode === "browser"
          ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper5(
              app,
            )
          : await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper4(),
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value104 =
        (
          await windowContinuationTimeoutMs.safePost(
            "/aip/connectors/links/oauth",
            {
              requestBody: {
                connector_id:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86.id,
                name: appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value86.name,
                action_names: null,
                callback_url:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value103,
                post_auth_url:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper6(
                    app,
                  ),
              },
              additionalHeaders: {
                [appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value1]:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value2,
              },
            },
          )
        ).redirect_url?.trim();
    if (
      !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value104
    )
      throw Error("OAuth redirect URL missing in connector response.");
    return (
      openInBrowser(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value104,
      ),
      {
        kind: "oauth-started",
        redirectUrl:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value104,
      }
    );
  } catch (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value177) {
    return (
      currentQueryRpcAliasLowerx.error("Failed to connect app {}", {
        safe: {
          templateArgs: [app.id],
        },
        sensitive: {
          error:
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value177,
        },
      }),
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper10(
        {
          app,
          openInBrowser,
        },
      )
        ? {
            kind: "browser-fallback",
          }
        : {
            kind: "failed",
          }
    );
  }
}
export async function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21J({
  app,
  authReason,
  fallbackUrl,
  linkId,
  openInBrowser,
  queryClient,
  requestedScopes,
}) {
  if (authReason === "missing_link")
    return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21A(
      {
        app,
        openInBrowser,
        queryClient,
      },
    );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value101 =
    linkId?.trim();
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value101
  )
    try {
      let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value129 =
        (
          await windowContinuationTimeoutMs.safePost(
            "/aip/connectors/links/oauth/reauth",
            {
              requestBody: {
                callback_url:
                  await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper4(),
                link_id:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value101,
                post_auth_url:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper6(
                    app,
                  ),
                requested_scopes: requestedScopes,
              },
              additionalHeaders: {
                [appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value1]:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value2,
              },
            },
          )
        ).redirect_url?.trim();
      if (
        !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value129
      )
        throw Error("OAuth redirect URL missing in connector response.");
      return (
        openInBrowser(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value129,
        ),
        {
          kind: "oauth-started",
          redirectUrl:
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value129,
        }
      );
    } catch (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value210) {
      currentQueryRpcAliasLowerx.error("Failed to reauthenticate app {}", {
        safe: {
          templateArgs: [app.id],
        },
        sensitive: {
          error:
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value210,
        },
      });
    }
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value102 =
    fallbackUrl.trim();
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value102
    ? (openInBrowser(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value102,
      ),
      {
        kind: "browser-fallback",
      })
    : {
        kind: "failed",
      };
}
export function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21T({
  intl,
}) {
  return intl.formatMessage({
    id: "settings.mcp.appConnectModal.oauthStartedElectron",
    defaultMessage: "Finish connecting in your browser.",
    description:
      "Toast shown after starting OAuth from MCP settings app connect modal",
  });
}
export function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21E({
  appName,
  intl,
}) {
  return intl.formatMessage(
    {
      id: "settings.mcp.appConnectModal.connected",
      defaultMessage: "{appName} is now connected.",
      description:
        "Toast shown when a no-auth app is connected directly from MCP settings",
    },
    {
      appName,
    },
  );
}
export function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21W(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param35,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param35.formatMessage(
    {
      id: "settings.mcp.appConnectModal.connectFailed",
      defaultMessage: "Failed to connect app.",
      description: "Toast shown when starting an app connection fails",
    },
  );
}
export function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21D(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param19,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param19.formatMessage(
    {
      id: "settings.mcp.appConnectModal.installUrlMissing",
      defaultMessage:
        "This app does not provide a browser setup URL right now.",
      description:
        "Toast shown when app connect fallback is attempted but no install URL is available",
    },
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper1(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param30,
) {
  if (
    typeof appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param30 !=
      "object" ||
    !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param30
  )
    return false;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value184 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param30,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value185 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value184.properties;
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value185 &&
    typeof appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value185 ==
      "object"
  )
    return (
      Object.keys(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value185,
      ).length > 0
    );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value186 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value184.required;
  return !!(
    Array.isArray(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value186,
    ) &&
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value186.length >
      0
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper2(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param88,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper1(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param88.link_params_schema,
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper3(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param41,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param41.supported_auth.some(
    (item) => item.type === "OAUTH",
  )
    ? "OAUTH"
    : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param41.supported_auth.some(
          (item) => item.type === "NONE",
        )
      ? "NONE"
      : "UNSUPPORTED";
}
async function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper4() {
  let { callbackUrl } = await currentQueryRpcAliasLowern(
    "app-connect-oauth-callback-url",
  );
  return callbackUrl;
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper5(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param80,
) {
  return (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper8(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param80,
    ) + "/connector_platform_oauth_redirect"
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper6(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param58,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value212 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21O(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param58,
    );
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value212 !=
    null
  )
    return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value212;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value213 =
    new URL(
      "/gpts/editor",
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper8(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param58,
      ),
    );
  return (
    (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value213.hash =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper9(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param58.id,
      )),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value213.toString()
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper7(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param50,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value203 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param50.installUrl?.trim();
  if (
    !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value203
  )
    return null;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value204 =
    new URL(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value203,
    );
  return (
    (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value204.hash =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper9(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param50.id,
        {
          addConnectorLink: true,
        },
      )),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value204.toString()
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper8(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param72,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value225 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param72.installUrl?.trim();
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value225
    ? new URL(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value225,
      ).origin
    : "https://chatgpt.com";
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper9(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param27,
  { addConnectorLink = false } = {},
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value182 =
    new URLSearchParams([
      [
        "connector",
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param27,
      ],
    ]);
  return (
    addConnectorLink &&
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value182.set(
        "add-connector-link",
        "true",
      ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value182.set(
      "product-sku",
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value2,
    ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value182.set(
      "referrer",
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value3,
    ),
    `settings/Connectors?${appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value182.toString()}`
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper10({
  app,
  openInBrowser,
}) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value226 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper7(
      app,
    );
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value226 ==
    null
    ? false
    : (openInBrowser(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value226,
      ),
      true);
}
var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value1,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value2,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value3,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value4,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21K =
    createLazyEsmInitializer(() => {
      currentQueryRpcAliasLowerb();
      currentQueryRpcAliasUpperC();
      threadRuntimeFunction0483();
      currentQueryRpcAliasLowero();
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value1 =
        "OAI-Product-Sku";
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value2 =
        "CODEX";
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value3 =
        "codex";
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value4 =
        ["mcp-settings", "app-connect"];
    }),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value5 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param36,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param37,
      ) => {
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper34(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param46,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param47,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param48,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param49,
        ) {
          var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value201 =
              -1,
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value202 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param46 ==
              null
                ? 0
                : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param46.length;
          for (
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param49 &&
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value202 &&
            (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param48 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param46[
                ++appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value201
              ]);
            ++appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value201 <
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value202;
          )
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param48 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param47(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param48,
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param46[
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value201
                ],
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value201,
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param46,
              );
          return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param48;
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param37.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper34;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value6 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param67,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param68,
      ) => {
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper40(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param76,
        ) {
          return function (
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param95,
          ) {
            return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param76?.[
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param95
            ];
          };
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param68.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper40;
      },
    ),
  _e = createLazyCommonJsModule(
    (
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param1,
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param2,
    ) => {
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param2.exports =
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value6()(
          {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s",
          },
        );
    },
  ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value7 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param20,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param21,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value168 =
            _e(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value169 =
            currentQueryRpcAliasUpperPLowers(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value170 =
            /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value171 =
            RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper31(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param75,
        ) {
          return (
            (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param75 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value169(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param75,
              )),
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param75 &&
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param75
                .replace(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value170,
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value168,
                )
                .replace(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value171,
                  "",
                )
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param21.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper31;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value8 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param56,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param57,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value211 =
          /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper38(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param89,
        ) {
          return (
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param89.match(
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value211,
            ) || []
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param57.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper38;
      },
    ),
  be = createLazyCommonJsModule(
    (
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param44,
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param45,
    ) => {
      var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value198 =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper37(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param96,
      ) {
        return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value198.test(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param96,
        );
      }
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param45.exports =
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper37;
    },
  ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value9 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param3,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param4,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value60 =
            "(?:\\u200d(?:" +
            [
              "[^\\ud800-\\udfff]",
              "(?:\\ud83c[\\udde6-\\uddff]){2}",
              "[\\ud800-\\udbff][\\udc00-\\udfff]",
            ].join("|") +
            ")" +
            "[\\ufe0e\\ufe0f]?" +
            "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
            ")*",
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value63 =
            "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value60,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value64 =
            "(?:" +
            [
              "[\\u2700-\\u27bf]",
              "(?:\\ud83c[\\udde6-\\uddff]){2}",
              "[\\ud800-\\udbff][\\udc00-\\udfff]",
            ].join("|") +
            ")" +
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value63,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value65 =
            RegExp(
              [
                "[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                  [
                    "[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]",
                    "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    "$",
                  ].join("|") +
                  ")",
                "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                  [
                    "[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]",
                    "[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])",
                    "$",
                  ].join("|") +
                  ")",
                "[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?",
                "[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?",
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value64,
              ].join("|"),
              "g",
            );
        function __appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21C(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param90,
        ) {
          return (
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param90.match(
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value65,
            ) || []
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param4.exports =
          __appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21C;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value10 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param25,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param26,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value178 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value8(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value179 =
            be(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value180 =
            currentQueryRpcAliasUpperPLowers(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value181 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value9();
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper32(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param51,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param52,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param53,
        ) {
          return (
            (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param51 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value180(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param51,
              )),
            (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param52 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param53
                ? undefined
                : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param52),
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param52 ===
            undefined
              ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value179(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param51,
                )
                ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value181(
                    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param51,
                  )
                : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value178(
                    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param51,
                  )
              : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param51.match(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param52,
                ) || []
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param26.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper32;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21S =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param32,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param33,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value187 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value5(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value188 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value7(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value189 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value10(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value190 =
            RegExp("['’]", "g");
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper33(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param71,
        ) {
          return function (
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param81,
          ) {
            return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value187(
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value189(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value188(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param81,
                ).replace(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value190,
                  "",
                ),
              ),
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param71,
              "",
            );
          };
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param33.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper33;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value11 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param42,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param43,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value197 =
          currentQueryRpcAliasUpperOLowers();
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper36(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param64,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param65,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param66,
        ) {
          var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value223 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param64.length;
          return (
            (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param66 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param66 ===
              undefined
                ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value223
                : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param66),
            !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param65 &&
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param66 >=
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value223
              ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param64
              : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value197(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param64,
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param65,
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param66,
                )
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param43.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper36;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value12 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param38,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param39,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value192 =
          RegExp(
            "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
          );
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper35(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param97,
        ) {
          return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value192.test(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param97,
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param39.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper35;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value13 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param73,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param74,
      ) => {
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper42(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param94,
        ) {
          return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param94.split(
            "",
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param74.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper42;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value14 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param7,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param8,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value118 =
            "(?:\\u200d(?:" +
            [
              "[^\\ud800-\\udfff]",
              "(?:\\ud83c[\\udde6-\\uddff]){2}",
              "[\\ud800-\\udbff][\\udc00-\\udfff]",
            ].join("|") +
            ")" +
            "[\\ufe0e\\ufe0f]?" +
            "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
            ")*",
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value119 =
            "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value118,
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value120 =
            "(?:" +
            [
              "[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?",
              "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
              "(?:\\ud83c[\\udde6-\\uddff]){2}",
              "[\\ud800-\\udbff][\\udc00-\\udfff]",
              "[\\ud800-\\udfff]",
            ].join("|") +
            ")",
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value121 =
            RegExp(
              "\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" +
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value120 +
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value119,
              "g",
            );
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper29(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param91,
        ) {
          return (
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param91.match(
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value121,
            ) || []
          );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param8.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper29;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value15 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param59,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param60,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value215 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value13(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value216 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value12(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value217 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value14();
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper39(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param87,
        ) {
          return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value216(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param87,
          )
            ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value217(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param87,
              )
            : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value215(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param87,
              );
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param60.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper39;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value16 =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param14,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param15,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value150 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value11(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value151 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value12(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value152 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value15(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value153 =
            currentQueryRpcAliasUpperPLowers();
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper30(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param31,
        ) {
          return function (
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param40,
          ) {
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param40 =
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value153(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param40,
              );
            var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value194 =
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value151(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param40,
                )
                  ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value152(
                      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param40,
                    )
                  : undefined,
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value195 =
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value194
                  ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value194[0]
                  : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param40.charAt(
                      0,
                    ),
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value196 =
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value194
                  ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value150(
                      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value194,
                      1,
                    ).join("")
                  : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param40.slice(
                      1,
                    );
            return (
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value195[
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param31
              ]() +
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value196
            );
          };
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param15.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper30;
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21X =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param92,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param93,
      ) => {
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param93.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value16()(
            "toUpperCase",
          );
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21B =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param62,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param63,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value220 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21S(),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value221 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21X();
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param63.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value220(
            function (
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param82,
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param83,
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param84,
            ) {
              return (
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param82 +
                (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param84
                  ? " "
                  : "") +
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value221(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param83,
                )
              );
            },
          );
      },
    ),
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Y =
    createLazyCommonJsModule(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param69,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param70,
      ) => {
        var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value224 =
          localHostKind();
        function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper41(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param85,
        ) {
          return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param85 &&
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param85.length
            ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value224(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param85,
              )
            : [];
        }
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param70.exports =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper41;
      },
    );
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper11({
  actions,
}) {
  return actions
    .filter(
      (item) =>
        item.is_enabled !== false ||
        item.disabled_reason === "disabled_by_admin",
    )
    .map((item) => ({
      accessBadges:
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper12(
          item,
        ),
      description: item.description,
      disabledReason: item.disabled_reason ?? null,
      name: item.name,
      visibility:
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper14(
          item.visibility,
        ),
    }))
    .sort(
      (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param98,
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param99,
      ) =>
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param98.name.localeCompare(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param99.name,
        ),
    );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper12(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param29,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value18
    .default([
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param29.is_read_only ===
      true
        ? "READ"
        : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper13(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param29.visibility,
          ),
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param29.is_open_world ===
      true
        ? "OPEN WORLD"
        : null,
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param29.is_destructive ===
      true
        ? "DESTRUCTIVE"
        : null,
    ])
    .flatMap((item) => (item == null ? [] : [item]));
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper13(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param77,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value227 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper14(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param77,
    );
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value227 ==
    null
    ? "WRITE"
    : `${appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value227} WRITE`;
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper14(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param55,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value209 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param55?.trim();
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value209 ==
    null ||
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value209.length ===
      0
    ? null
    : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value17
        .default(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value209.replace(
            /[:/_.-]+/g,
            " ",
          ),
        )
        .toUpperCase();
}
var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value17,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value18,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value19 =
    createLazyEsmInitializer(() => {
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value17 =
        toEsm(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21B(),
          1,
        );
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value18 =
        toEsm(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Y(),
          1,
        );
    });
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Underscore(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param13,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value146 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param13?.trim();
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value146 ==
      null ||
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value146.length ===
      0 ||
    !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value146.startsWith(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value20,
    )
  )
    return null;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value147 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value146.slice(
        13,
      ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value148 =
      (
        (
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value147.split(
            /[?#]/u,
          )[0] ?? ""
        ).split("/")[0] ?? ""
      ).trim();
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value148.length ===
    0
  )
    return null;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value149 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value147
      .split("?")[1]
      ?.split("#")[0] ?? "";
  return {
    connectorId:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value148,
    theme:
      new URLSearchParams(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value149,
      )
        .get("theme")
        ?.toLowerCase() ===
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value22
        ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value22
        : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value21,
  };
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper15({
  connectorId,
  theme,
}) {
  return `${connectorId}:${theme}`;
}
async function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper16({
  connectorId,
  theme,
}) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value154 =
    await currentQueryRpcAliasLoweru
      .getInstance()
      .get(
        `/aip/connectors/${encodeURIComponent(connectorId)}/logo?theme=${theme}`,
        initRemoteConnectionSignalsRuntime(),
      );
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value154.body.contentType
    .toLowerCase()
    .startsWith("text/plain")
    ? mcpListToolsResultSchema(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value154
          .body.base64,
      ).trim()
    : `data:${appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value154.body.contentType};base64,${appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value154.body.base64}`;
}
var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value20,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value21,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value22,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21V =
    createLazyEsmInitializer(() => {
      lodashMatchesProperty();
      threadRuntimeFunction0483();
      currentQueryRpcAliasLowerd();
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value20 =
        "connectors://";
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value21 =
        "light";
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value22 =
        "dark";
    });
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21G(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param17,
) {
  let { hostId } =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param17,
    { data = [] } = currentReactAliasUpperE(
      settingsCommandSharedRuntimeMember0057,
      hostId,
    );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value161 =
    data;
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value161.some(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper17,
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper17(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param86,
) {
  return (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param86.name ===
      "apps" &&
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param86.enabled
  );
}
var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value23,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21H =
    createLazyEsmInitializer(() => {
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value23 =
        currentReactAliasLoweruLowern();
      currentReactAliasLowerx();
      settingsCommandSharedRuntimeMember0042();
    });
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21R(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param22,
) {
  return currentQueryRpcAliasUpperNLowerl({
    queryKey:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21N(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param22,
      ),
    queryFn: async () =>
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper22(
        {
          forceRefetch: false,
          hostId:
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param22,
        },
      ),
    notifyOnChangeProps: [
      "data",
      "dataUpdatedAt",
      "error",
      "fetchStatus",
      "status",
    ],
    retry: false,
    staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
  });
}
async function _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21O({
  hostId,
  queryClient,
}) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value214 =
    await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper22(
      {
        forceRefetch: true,
        hostId,
      },
    );
  return (
    queryClient.setQueryData(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21N(
        hostId,
      ),
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value214,
    ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value214
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21U(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param5,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value67 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param5 ===
    undefined
      ? {}
      : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param5;
  let { enabled = true, hostId = "local" } =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value67,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value70 =
      businessCheckoutSharedRuntimeVariant5Member0036(),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value71 =
      {
        hostId: hostId,
      };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value72 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21G(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value71,
      ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value73 =
      currentQueryRpcAliasUpperBLowerl(),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value74 =
      !appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value70.isLoading &&
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value70.userId !=
        null,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value75 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21R(
        hostId,
      );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value76 =
      enabled &&
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value72 &&
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value74,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value77 =
      {
        ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value75,
        enabled:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value76,
        staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
      };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value78 =
      currentQueryRpcAliasUpperFLowerl(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value77,
      ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value79 =
      {
        retry: false,
        onMutate: async () => {
          await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value73.cancelQueries(
            {
              queryKey:
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21N(
                  hostId,
                ),
            },
          );
        },
        mutationFn: async () =>
          _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21O(
            {
              hostId: hostId,
              queryClient:
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value73,
            },
          ),
      };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value80 =
      currentQueryRpcAliasUpperTLowerl(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value79,
      ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value81 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value80.error !=
        null &&
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value80.submittedAt >
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value78.dataUpdatedAt
        ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value80.error
        : null,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value82 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value72
        ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value78.data
        : [];
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value83 =
    async () =>
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value80.mutateAsync();
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value84 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value81 ??
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value78.error ??
    null;
  return {
    ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value78,
    data: appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value82,
    hardRefetchAppsList:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value83,
    isHardRefetchingAppsList:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value80.isPending,
    loadError:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value84,
  };
}
function _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21D(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param6,
) {
  let { apps, enabled = true } =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param6,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value90 =
      currentQueryRpcAliasUpperBLowerl(),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value91 =
      enabled ? apps : undefined,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value92 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value91 ==
      null
        ? undefined
        : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper24(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value91,
          );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value93 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value92,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value94 =
      [
        ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value28,
        ...(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value93 ??
          []
        ).map(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper18,
        ),
      ];
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value95 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value94,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value96 =
      async () => {
        if (
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value93 ==
          null
        )
          throw Error("connector logo requests are required");
        return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper25(
          {
            queryClient:
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value90,
            requests:
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value93,
          },
        );
      };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value97 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value93 !=
        null &&
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value93.length >
        0,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value98 =
      {
        queryKey:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value95,
        queryFn:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value96,
        enabled:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value97,
        staleTime: currentQueryRpcAliasUpperS.INFINITE,
      };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value99 =
      currentQueryRpcAliasUpperFLowerl(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value98,
      ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value100;
  bb0: {
    if (
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value91 ==
      null
    ) {
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value100 =
        undefined;
      break bb0;
    }
    let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value172;
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value172 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21I(
        {
          apps: appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value91,
          connectorLogoSrcByCacheKey:
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value99.data,
        },
      );
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value100 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value172;
  }
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value100;
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper18(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param101,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper15(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param101,
  );
}
export function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21F(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param54,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value208 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper23(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param54,
    );
  let { data } = currentQueryRpcAliasUpperFLowerl(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value208,
  );
  return data ?? undefined;
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21P(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param10,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value131 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param10 ===
    undefined
      ? {}
      : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param10;
  let { hostId } =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value131,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value132 =
      {
        hostId,
      };
  let { data = [] } =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21U(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value132,
    );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value134 =
    data;
  return _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21A(
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value134,
  );
}
export function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21M(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param18,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value164 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param18 ===
    undefined
      ? {}
      : appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param18;
  let { hostId } =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value164,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value165 =
      {
        hostId,
      };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value166 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21P(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value165,
    );
  return (
    _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21D(
      {
        apps: appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value166,
      },
    ) ??
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value166
  );
}
export function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21L(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param12,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value140 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param12 ??
      "",
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value141 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21C(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value140,
        {
          includeActions: true,
        },
      );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value142 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param12 !=
      null,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value143;
  return (
    (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value143 =
      {
        ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value141,
        enabled:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value142,
        staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
        select:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper19,
      }),
    currentQueryRpcAliasUpperFLowerl(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value143,
    )
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper19(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param79,
) {
  let { actions } =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param79;
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper11(
    {
      actions,
    },
  );
}
export function _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21C(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param9,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value125 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param9.map(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper20,
    );
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value126 =
    {
      queries:
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value125,
    };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value127 =
      currentQueryRpcAliasUpperLLowerl(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value126,
      ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value128;
  return (
    (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value128 =
      new Map()),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value127.forEach(
      (item, index) => {
        let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value222 =
          item.data?.owner_profile?.email?.trim();
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value222 ==
          null ||
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value222.length ===
            0 ||
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value128.set(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param9[
              index
            ],
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value222,
          );
      },
    ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value128
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper20(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param23,
) {
  return {
    queryKey: [
      ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value27,
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param23,
    ],
    queryFn: async () =>
      (
        await windowContinuationTimeoutMs.safeGet(
          "/aip/connectors/{connector_id}/link",
          {
            parameters: {
              path: {
                connector_id:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param23,
              },
            },
          },
        )
      ).link,
    retry: false,
    staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
  };
}
function _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21A(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param78,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param78.filter(
    (item) => item.isAccessible && item.isEnabled,
  );
}
async function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper21({
  forceRefetch,
  hostId,
}) {
  try {
    let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value155 =
      async (
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param28,
      ) => {
        let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value183 =
          await currentHostServicesAliasUpperO("list-apps", {
            hostId,
            cursor:
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param28,
            limit:
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value25,
            forceRefetch,
          });
        return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value183.nextCursor ==
          null
          ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value183.data
          : [
              ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value183.data,
              ...(await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value155(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value183.nextCursor,
              )),
            ];
      };
    return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21I(
      {
        apps: await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value155(
          null,
        ),
      },
    );
  } catch (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value193) {
    throw (
      currentQueryRpcAliasLowerx.error("Failed to load apps list", {
        safe: {
          error: String(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value193,
          ),
        },
        sensitive: {},
      }),
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value193 instanceof
      Error
        ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value193
        : Error(
            String(
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value193,
            ),
          )
    );
  }
}
async function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper22({
  forceRefetch,
  hostId,
}) {
  try {
    return await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper21(
      {
        forceRefetch,
        hostId,
      },
    );
  } catch {
    return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper21(
      {
        forceRefetch,
        hostId,
      },
    );
  }
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21N(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param100,
) {
  return [
    ...appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value29,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param100,
  ];
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper23(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param34,
) {
  return {
    queryKey: [
      ..._t,
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper15(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param34,
      ),
    ],
    queryFn: async () => {
      try {
        return await appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper16(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param34,
        );
      } catch {
        return null;
      }
    },
    retry: false,
    staleTime: currentQueryRpcAliasUpperS.INFINITE,
  };
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper24(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param24,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value176 =
    new Map();
  return (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param24.forEach(
      (item) => {
        let { logoUrl, logoUrlDark } =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper26(
              item,
            ),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value199 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Underscore(
              logoUrl,
            );
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value199 !=
          null &&
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value176.set(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper15(
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value199,
            ),
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value199,
          );
        let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value200 =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Underscore(
            logoUrlDark,
          );
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value200 !=
          null &&
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value176.set(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper15(
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value200,
            ),
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value200,
          );
      },
    ),
    Array.from(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value176.values(),
    )
  );
}
async function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper25({
  queryClient,
  requests,
}) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value144 =
      new Map(),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value145 = 0;
  return (
    await Promise.all(
      Array.from(
        {
          length: Math.min(
            requests.length,
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value26,
          ),
        },
        async () => {
          for (;;) {
            let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value205 =
              requests[
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value145
              ];
            if (
              ((appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value145 += 1),
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value205 ==
                null)
            )
              return;
            let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value206 =
              await queryClient.fetchQuery(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper23(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value205,
                ),
              );
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value206 !=
              null &&
              appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value144.set(
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper15(
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value205,
                ),
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value206,
              );
          }
        },
      ),
    ),
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value144
  );
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21I({
  apps,
  connectorLogoSrcByCacheKey,
}) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value122 = false,
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value123 =
      apps.map((item) => {
        let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value136 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper26(
              item,
            ),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value137 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper27(
              {
                logoUrl:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value136.logoUrl,
                installUrl: item.installUrl,
                connectorLogoSrcByCacheKey,
              },
            ),
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value138 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper27(
              {
                logoUrl:
                  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value136.logoUrlDark,
                installUrl: item.installUrl,
                connectorLogoSrcByCacheKey,
              },
            );
        return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value137 ===
          item.logoUrl &&
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value138 ===
            item.logoUrlDark
          ? item
          : ((appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value122 = true),
            {
              ...item,
              logoUrl:
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value137,
              logoUrlDark:
                appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value138,
            });
      });
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value122
    ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value123
    : apps;
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper26(
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16,
) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value156 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16
        .iconAssets?.["256_square"],
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value157 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16
        .iconDarkAssets?.["256_square"];
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value156 ==
      null &&
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value157 ==
      null
  )
    return {
      logoUrl:
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16.logoUrl,
      logoUrlDark:
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16.logoUrlDark,
    };
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value158 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value156 ??
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16.logoUrl ??
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value157 ??
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16.logoUrlDark;
  return {
    logoUrl:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value158,
    logoUrlDark:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value157 ??
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param16.logoUrlDark ??
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value156 ??
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value158,
  };
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper27({
  logoUrl,
  installUrl,
  connectorLogoSrcByCacheKey,
}) {
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value173 =
    logoUrl?.trim();
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value173 ==
      null ||
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value173.length ===
      0
  )
    return null;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value174 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper28(
      {
        logoUrl:
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value173,
        installUrl,
      },
    );
  if (connectorLogoSrcByCacheKey == null)
    return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value174;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value175 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Underscore(
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value174,
    );
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value175 ==
    null
    ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value174
    : (connectorLogoSrcByCacheKey.get(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper15(
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value175,
        ),
      ) ??
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value174);
}
function appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Helper28({
  logoUrl,
  installUrl,
}) {
  if (!logoUrl.startsWith("/")) return logoUrl;
  let appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value191 =
    installUrl?.trim();
  if (
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value191 ==
      null ||
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value191.length ===
      0
  )
    return logoUrl;
  try {
    return new URL(
      logoUrl,
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value191,
    ).toString();
  } catch {
    return logoUrl;
  }
}
var appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value24,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value25,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value26,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value27,
  _t,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value28,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value29,
  _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21T;
export const _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21S =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value24 =
      currentReactAliasLoweruLowern();
    currentQueryRpcAliasLowerxLowerl();
    currentReactAliasLowerx();
    currentHostServicesAliasUpperD();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21K();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value19();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21V();
    businessCheckoutSharedRuntimeVariant5Member0026();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21H();
    currentReactAliasLowerb();
    windowContinuationWarningMessage();
    currentQueryRpcAliasLowerb();
    currentQueryRpcAliasUpperC();
    threadRuntimeFunction0483();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value25 = 1e3;
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value26 = 8;
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value27 =
      ["apps", "link"];
    _t = ["connector-logo-src"];
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value28 =
      ["connector-logos"];
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Value29 =
      ["apps", "list"];
    _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21T =
      currentReactAliasLowervLowert(
        currentReactAliasLowery,
        (
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param102,
        ) =>
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21R(
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Param102,
          ),
      );
  });
export {
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21A,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21C,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21O,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21S,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Underscore,
  _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21A,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21B,
  _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21D,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21G,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21H,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21I,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21K,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21N,
  _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21O,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21P,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21R,
  _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21T,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21U,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21V,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21X,
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPDl1mfg21Y,
};
