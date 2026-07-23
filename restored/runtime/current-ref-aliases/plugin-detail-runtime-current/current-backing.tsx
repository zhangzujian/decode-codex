// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~app-main~plugin-d~kw7nl1sl-CSfXbWX3.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer, toEsm } from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasLowerc,
  currentReactAliasLowerdLowern,
  currentReactAliasLowerdLowert,
  currentReactAliasUpperE,
  currentReactAliasLowerf,
  currentReactAliasLowerk,
  currentReactAliasLowerl,
  currentReactAliasLowerm,
  currentReactAliasUpperO,
  currentReactAliasLoweruLowern,
  currentReactAliasUnderscore,
  currentReactAliasLowerv,
  currentReactAliasLowervLowert,
  currentReactAliasLowerx,
  currentReactAliasLowerxLowert,
  currentReactAliasLowery,
  currentReactAliasLowerzLowert,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasLowera,
  currentQueryRpcAliasLowerbLowert,
  currentQueryRpcAliasUpperC,
  currentQueryRpcAliasLowerhLowero,
  currentQueryRpcAliasUpperJLowerc,
  currentQueryRpcAliasUpperKLowerc,
  currentQueryRpcAliasLowerlLowerl,
  currentQueryRpcAliasUpperNLowerl,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasUpperRLowerc,
  currentQueryRpcAliasUpperS,
  currentQueryRpcAliasUnderscoreLowert,
  currentQueryRpcAliasLowerw,
  currentQueryRpcAliasLowerxLowerl,
} from "../app-initial-query-rpc-runtime";
import {
  defineMessages,
  FormattedMessage,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  Button,
  initButtonRuntime,
} from "../../current-app-initial/persisted-ui-runtime-entry";
import {
  currentHostServicesAliasUpperD,
  currentHostServicesAliasLowern,
  currentHostServicesAliasUpperO,
  currentHostServicesAliasLowert,
} from "../app-initial-host-services-runtime";
import { windowContinuationWarningMessage } from "../current-app-shared-current";
import {
  initCodexStatsigRuntime,
  statsigGateValueStore,
  initStatsigGateStore,
  useStatsigDynamicConfig,
} from "../../package-adapters/statsig-current/entry";
import {
  businessCheckoutSharedInitializer0501,
  businessCheckoutSharedInitializer0506,
  businessCheckoutSharedMember0084,
  businessCheckoutSharedFunction0149,
  schemaFunction0521,
} from "../business-checkout-shared-current";
import {
  fetchConfigForHost,
  initConfigQueryRuntime,
} from "../business-checkout-config/entry";
import {
  businessCheckoutSharedRuntimeVariant5Member0026,
  businessCheckoutSharedRuntimeVariant5Member0028,
} from "../business-checkout-shared-runtime-variant-5";
import {
  pullRequestRoutRuntimeVariant12Member0007,
  pullRequestRoutRuntimeVariant12Member0010,
  pullRequestRoutRuntimeVariant12Member0020,
  pullRequestRoutRuntimeVariant12Member0047,
} from "../pull-request-rout-runtime-variant-12-current";
import {
  settingsCommandSharedRuntimeVariant4Member0030,
  settingsCommandSharedRuntimeVariant4Member0047,
} from "../settings-command-shared-runtime-variant-4-current";
import {
  settingsCommandSharedRuntimeVariant11Member0001,
  settingsCommandSharedRuntimeVariant11Member0017,
} from "../settings-command-shared-runtime-variant-11-current";
import {
  pullRequestRoutRuntimeVariant2Member0009,
  pullRequestRoutRuntimeVariant2Member0021,
} from "../pull-request-rout-runtime-variant-2-current";
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue1,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slN;
export const appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slP =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerdLowern();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue1 =
      currentReactAliasLowerzLowert();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slN =
      (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam8,
      ) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          viewBox="0 0 20 20"
          {...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam8}
        >
          <path d="M9.995 12.315c.489 0 .875.37.875.842 0 .473-.386.843-.875.843-.488 0-.875-.37-.875-.843 0-.472.387-.842.875-.842ZM10.001 6c.478 0 .778.295.778.79 0 .042 0 .107-.006.16l-.08 3.716c-.016.456-.252.725-.698.725-.445 0-.681-.269-.692-.725L9.217 6.95c0-.053-.006-.118-.006-.16 0-.495.307-.79.79-.79Z" />
          <path
            fillRule="evenodd"
            d="M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Zm0 1.33a6.585 6.585 0 1 0 0 13.17 6.585 6.585 0 0 0 0-13.17Z"
            clipRule="evenodd"
          />
        </svg>
      );
  });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slJ({
  queryClient,
  hostId,
  cwd,
  enabled,
}) {
  return currentQueryRpcAliasUpperNLowerl({
    enabled,
    queryFn: async () => {
      try {
        return schemaFunction0521(
          (await fetchConfigForHost(queryClient, hostId, cwd, false)).config,
        );
      } catch {
        return null;
      }
    },
    queryKey: [
      ...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slK,
      hostId,
      cwd,
    ],
    staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
  });
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slK,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slA,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slM =
    createLazyEsmInitializer(() => {
      currentQueryRpcAliasLowerxLowerl();
      currentReactAliasLowerx();
      businessCheckoutSharedFunction0149();
      businessCheckoutSharedInitializer0506();
      initConfigQueryRuntime();
      currentReactAliasLowerb();
      currentQueryRpcAliasUpperC();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slK =
        ["user-saved-config"];
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slA =
        currentReactAliasLowervLowert(
          currentReactAliasLowery,
          ({ cwd = null, hostId }, { get, queryClient }) =>
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slJ(
              {
                queryClient,
                hostId,
                cwd,
                enabled: get(businessCheckoutSharedInitializer0501).includes(
                  hostId,
                ),
              },
            ),
        );
    }),
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue2,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue3 =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerb();
      currentQueryRpcAliasUpperC();
      currentQueryRpcAliasLowero();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue2 =
        currentQueryRpcAliasLowera(
          currentReactAliasLowery,
          "wsl-bash-availability",
          {
            enabled: true,
            staleTime: currentQueryRpcAliasUpperS.INFINITE,
          },
        );
    });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slO() {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue121 =
    currentReactAliasUpperO(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue2,
    );
  return {
    data: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue121.data,
    isLoading:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue121.isLoading,
  };
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue4,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slD =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue4 =
        currentReactAliasLoweruLowern();
      currentReactAliasLowerx();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue3();
    }),
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue5,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue6 =
    createLazyEsmInitializer(() => {
      initReactIntlRuntimeChunk();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue5 =
        defineMessages({
          openConfigToml: {
            id: "codex.profileDropdown.openConfigToml",
            defaultMessage: "Open config.toml",
            description: "Action to open the MCP configuration file",
          },
          openConfigTomlWsl: {
            id: "codex.profileDropdown.openConfigToml.wsl",
            defaultMessage: "Open config.toml in WSL environment",
            description:
              "Action to open the MCP configuration file inside Windows Subsystem for Linux",
          },
        });
    });
async function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slE(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam15,
) {
  pullRequestRoutRuntimeVariant2Member0009({
    path: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam15.path,
    cwd: null,
    hostId:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam15.hostId,
    target:
      await appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slHelper1(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam15.hostId,
      ),
    line: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam15
      .range?.start.line,
    column:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam15
        .range?.start.column,
  });
}
async function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slHelper1(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam17,
) {
  try {
    return (
      await pullRequestRoutRuntimeVariant12Member0020({
        cwd: null,
        hostId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam17,
      })
    ).preferredTarget;
  } catch {
    return;
  }
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slT =
  createLazyEsmInitializer(() => {
    pullRequestRoutRuntimeVariant12Member0047();
    pullRequestRoutRuntimeVariant2Member0021();
  });
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slS(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam10,
) {
  let { hostId } =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam10,
    { configPath, label } =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slHelper2(
        hostId,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue106 =
      () => {
        configPath != null &&
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slE(
            {
              hostId,
              path: configPath,
            },
          );
      };
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue107 =
    configPath == null;
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue9.jsx(
    Button,
    {
      color: "secondary",
      size: "toolbar",
      className: "inline-flex w-fit",
      onClick:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue106,
      disabled:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue107,
      children: label,
    },
  );
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slC(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam7,
) {
  let { hostId } =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam7,
    { configPath, label } =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slHelper2(
        hostId,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue90 =
      () => {
        configPath != null &&
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slE(
            {
              hostId,
              path: configPath,
            },
          );
      };
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue91 =
      configPath == null,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue92 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue9.jsx(
        settingsCommandSharedRuntimeVariant11Member0001,
        {
          className: "icon-xxs shrink-0",
          "aria-hidden": true,
        },
      );
  return (
    <button
      type="button"
      className="inline-flex cursor-interaction items-center gap-1 text-start font-medium text-token-text-secondary hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-50"
      onClick={
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue90
      }
      disabled={
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue91
      }
    >
      {label}
      {
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue92
      }
    </button>
  );
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slHelper2(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam9,
) {
  let { data } = settingsCommandSharedRuntimeVariant4Member0047(),
    { data: _data } =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slO(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue97 =
      currentReactAliasLowerm(currentQueryRpcAliasLowerbLowert.runCodexInWsl),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue98 =
      pullRequestRoutRuntimeVariant12Member0010(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam9,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue99 =
      data?.platform === "win32" &&
      _data?.distro != null &&
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue97,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue100 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue98 ==
      null
        ? null
        : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue8.default.join(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue98,
            "config.toml",
          );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue101 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue100,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue102 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue99
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue9.jsx(
            FormattedMessage,
            {
              ...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue5.openConfigTomlWsl,
            },
          )
        : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue9.jsx(
            FormattedMessage,
            {
              ...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue5.openConfigToml,
            },
          );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue103 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue102;
  return {
    configPath:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue101,
    label:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue103,
  };
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue7,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue8,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue9;
export const appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slW =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue7 =
      currentReactAliasLoweruLowern();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue8 =
      toEsm(currentQueryRpcAliasLowerhLowero(), 1);
    currentQueryRpcAliasLowerw();
    initReactIntlRuntimeChunk();
    initButtonRuntime();
    pullRequestRoutRuntimeVariant12Member0007();
    settingsCommandSharedRuntimeVariant4Member0030();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slD();
    settingsCommandSharedRuntimeVariant11Member0017();
    currentReactAliasLowerl();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue6();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slT();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue9 =
      currentReactAliasLowerzLowert();
  });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slX(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "none" ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "minimal" ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "low" ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "medium" ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "high" ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "xhigh" ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "max" ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam14 ===
      "ultra"
  );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slV,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slUnderscore,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slY,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slB =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slV =
        "gpt-5.5";
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slUnderscore =
        "medium";
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slY =
        ["minimal", "low", "medium", "high", "xhigh", "max"];
    });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slH({
  authMethod,
  availableModels,
  defaultModel,
  enabledReasoningEfforts,
  includeUltraReasoningEffort,
  models,
  useHiddenModels,
}) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue60 =
      [],
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue61 =
      null,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue62 =
      useHiddenModels && authMethod !== "amazonBedrock",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue63 =
      models.some((item) =>
        item.supportedReasoningEfforts.some(
          ({ reasoningEffort }) => reasoningEffort === "max",
        ),
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue64 =
      includeUltraReasoningEffort &&
      models.some((item) =>
        item.supportedReasoningEfforts.some(
          ({ reasoningEffort }) => reasoningEffort === "ultra",
        ),
      );
  return (
    models.forEach((item) => {
      if (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue62
          ? availableModels.has(item.model)
          : !item.hidden
      ) {
        let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue109 =
            includeUltraReasoningEffort
              ? item.supportedReasoningEfforts
              : item.supportedReasoningEfforts.filter(
                  ({ reasoningEffort }) => reasoningEffort !== "ultra",
                ),
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue110 =
            (
              authMethod === "copilot"
                ? [
                    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue109.find(
                      (_item) => _item.reasoningEffort === "medium",
                    ) ?? {
                      reasoningEffort: "medium",
                      description: "medium effort",
                    },
                  ]
                : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue109
            ).filter(
              ({ reasoningEffort }) =>
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slX(
                  reasoningEffort,
                ) && enabledReasoningEfforts.has(reasoningEffort),
            ),
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue111 =
            {
              ...item,
              supportedReasoningEfforts:
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue110,
            };
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue60.push(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue111,
        );
        item.isDefault &&
          (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue61 =
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue111);
      }
    }),
    (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue61 ??=
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue60.find(
        (item) => item.model === defaultModel,
      ) ?? null),
    {
      models:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue60,
      defaultModel:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue61,
      hasModelSupportingMaxReasoningEffort:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue63,
      hasModelSupportingUltraReasoningEffort:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue64,
    }
  );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slG =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slB();
  });
export async function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slM(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam12,
  { enabled, hostId, listModelsData, reasoningEffort },
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue115 =
      currentReactAliasLowerc(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam12.get,
        currentQueryRpcAliasUnderscoreLowert.enabledReasoningEfforts,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue116 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue115;
  enabled &&
  !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue115.includes(
    reasoningEffort,
  )
    ? (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue116 =
        [
          ...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue115,
          reasoningEffort,
        ])
    : !enabled &&
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue115.includes(
        reasoningEffort,
      ) &&
      (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue116 =
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue115.filter(
          (item) => item !== reasoningEffort,
        ));
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue116 !==
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue115 &&
    (!enabled &&
      (reasoningEffort === "max" || reasoningEffort === "ultra") &&
      (await appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slHelper3(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam12,
        hostId,
        listModelsData,
        reasoningEffort,
      )),
    await currentReactAliasLowerf(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam12,
      currentQueryRpcAliasUnderscoreLowert.enabledReasoningEfforts,
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue116,
    ));
}
async function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slHelper3(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam2,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam3,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam4,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam5,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue69 =
      {
        hostId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam3,
        cwd: null,
      },
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue70 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam2.query.snapshot(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slA,
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue69,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue71 =
      await appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue70.getOrFetch(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue72 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam2.get(
        businessCheckoutSharedMember0084,
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue69,
      );
  if (
    (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue72?.reasoningEffort ??
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue71?.model_reasoning_effort ??
      null) !==
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam5
  )
    return;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue73 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue72?.model ??
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue71?.model ??
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam4
        .defaultModel?.model,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue74 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam4.models.find(
        (item) =>
          item.model ===
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue73,
      );
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue74 ==
    null
  )
    return;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue75 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue74.defaultReasoningEffort;
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slX(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue75,
    )
  )
    return;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue76 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue72?.profile ??
    null;
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue72 ==
    null &&
    typeof appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue71?.profile ==
      "string" &&
    (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue76 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue71.profile);
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue77 =
    await currentHostServicesAliasUpperO("set-default-model-config-for-host", {
      hostId:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam3,
      model:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue74.model,
      profile:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue76,
      reasoningEffort:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue75,
    });
  await currentHostServicesAliasUpperO("clear-prewarmed-threads-for-host", {
    hostId:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam3,
  });
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam2.set(
    businessCheckoutSharedMember0084,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue69,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue77.status ===
      "okOverridden"
      ? {
          model:
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue74.model,
          profile:
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue76,
          reasoningEffort:
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue75,
        }
      : null,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue77.status !==
    "okOverridden" &&
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue70.setData(
      (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam16,
      ) =>
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam16 ==
        null
          ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam16
          : Object.assign(
              structuredClone(
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam16,
              ),
              {
                model:
                  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue74.model,
                model_reasoning_effort:
                  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue75,
              },
            ),
    );
  currentHostServicesAliasLowert([
    ...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slK,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam3,
    null,
  ]);
}
var _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slD,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slF,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slP =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerx();
      currentQueryRpcAliasLowerw();
      businessCheckoutSharedFunction0149();
      currentHostServicesAliasUpperD();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slM();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slB();
      currentReactAliasLowerb();
      currentReactAliasLowerl();
      currentHostServicesAliasLowern();
      _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slD =
        ["low", "medium", "high", "xhigh"];
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slF =
        currentReactAliasLowerdLowert(
          currentReactAliasLowery,
          ({ get }) =>
            new Set(
              currentReactAliasLowerc(
                get,
                currentQueryRpcAliasUnderscoreLowert.enabledReasoningEfforts,
              ),
            ),
        );
    });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slU(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam13,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue117 =
      currentQueryRpcAliasUpperKLowerc(
        currentQueryRpcAliasLowerlLowerl(),
      ).safeParse(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam13.available_models,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue118 =
      currentQueryRpcAliasUpperJLowerc().safeParse(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam13.use_hidden_models,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue119 =
      currentQueryRpcAliasLowerlLowerl().safeParse(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam13.default_model,
      );
  return {
    availableModels: new Set(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue117.success
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue117.data
        : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue11,
    ),
    useHiddenModels:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue118.success
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue118.data
        : $e.useHiddenModels,
    defaultModel:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue119.success
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue119.data
        : $e.defaultModel,
  };
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue10,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue11,
  $e,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slL,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slC =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue10 =
        toEsm(currentReactAliasLowerk(), 1);
      currentReactAliasLowerx();
      currentQueryRpcAliasUpperRLowerc();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slB();
      currentReactAliasLowerb();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue11 =
        [];
      $e = {
        availableModels: new Set(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue11,
        ),
        useHiddenModels: false,
        defaultModel:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slV,
      };
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slL =
        currentReactAliasLowerxLowert(currentReactAliasLowery, $e, {
          isEqual:
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue10.default,
        });
    });
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slS() {
  let { value } = useStatsigDynamicConfig("107580212");
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slU(
    value,
  );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue12,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slO =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue12 =
        currentReactAliasLoweruLowern();
      initCodexStatsigRuntime();
      _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slC();
    });
function at(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam18,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam19,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam20 = appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue14,
) {
  return [
    ...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue15,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam18,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam19 ??
      "no-auth",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam20,
  ];
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slA(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam6,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue79 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam6?.hostId ??
      "local",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue80 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam6?.limit ??
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue14,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue81 =
      businessCheckoutSharedRuntimeVariant5Member0028(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue79,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue82 =
      _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slS(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue83 =
      Array.from(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue82.availableModels,
      ).sort();
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue84 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue81?.authMethod ??
      null,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue85 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam6?.includeUltraReasoningEffort !==
      false,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue86 =
      {
        availableModels:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue83,
        authMethod:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue84,
        defaultModel:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue82.defaultModel,
        hostId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue79,
        includeUltraReasoningEffort:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue85,
        limit:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue80,
        useHiddenModels:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue82.useHiddenModels,
      };
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue87 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam6?.enabled !==
        false &&
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue81?.isLoading !==
        true,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue88;
  return (
    (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue88 =
      {
        enabled:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue87,
      }),
    currentReactAliasUpperE(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue16,
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue86,
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue88,
    )
  );
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slR(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam21,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam21 !==
    "pending"
  );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue13,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue14,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue15,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue16;
export const appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slI =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue13 =
      currentReactAliasLoweruLowern();
    currentReactAliasLowerx();
    businessCheckoutSharedFunction0149();
    currentHostServicesAliasUpperD();
    businessCheckoutSharedRuntimeVariant5Member0026();
    currentReactAliasLowerb();
    windowContinuationWarningMessage();
    initStatsigGateStore();
    currentQueryRpcAliasUpperC();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slG();
    _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slP();
    _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slO();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue14 = 100;
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue15 =
      ["models", "list"];
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue16 =
      currentReactAliasLowervLowert(
        currentReactAliasLowery,
        (
          {
            availableModels,
            authMethod,
            defaultModel,
            hostId,
            includeUltraReasoningEffort,
            limit,
            useHiddenModels,
          },
          { get },
        ) => {
          let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue94 =
              get(
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slF,
              ),
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue95 =
              includeUltraReasoningEffort &&
              get(statsigGateValueStore, "1186680773");
          return {
            queryKey: at(hostId, authMethod, limit),
            enabled: get(businessCheckoutSharedInitializer0501).includes(
              hostId,
            ),
            staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
            queryFn: () =>
              currentHostServicesAliasUpperO("list-models-for-host", {
                hostId,
                includeHidden: true,
                cursor: null,
                limit,
              }),
            select: ({ data }) =>
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slH(
                {
                  authMethod,
                  availableModels: new Set(availableModels),
                  defaultModel,
                  enabledReasoningEfforts:
                    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue94,
                  includeUltraReasoningEffort:
                    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue95,
                  models: data,
                  useHiddenModels,
                },
              ),
          };
        },
      );
  });
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slT(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam1,
) {
  let {
      title,
      content,
      customCtas,
      onPrimaryCtaClick,
      primaryCtaText,
      primaryCtaColor,
      secondaryCtaColor,
      onSecondaryCtaClick,
      onDangerCtaClick,
      secondaryCtaText,
      dangerCtaText,
      Icon,
      iconClassName,
      isPrimaryCtaDisabled = false,
      isSecondaryCtaDisabled = false,
      isDangerCtaDisabled:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue19 = false,
      type = "normal",
      layout = "horizontal",
      stackOnNarrow = false,
      ariaLive,
      role,
    } = appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam1,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue26 =
      layout === "vertical",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue27 =
      layout === "verticalIcon",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue28 =
      layout === "horizontal" && stackOnNarrow,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue29 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue26
        ? "w-full justify-end"
        : "shrink-0",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue30 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue28 &&
      "max-[400px]:w-full max-[400px]:shrink max-[400px]:flex-wrap max-[400px]:justify-center",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue31 =
      currentReactAliasUnderscore(
        "flex gap-2",
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue29,
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue30,
      );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue32 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue31,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue33 =
      customCtas ? (
        <div
          className={
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue32
          }
        >
          {customCtas}
        </div>
      ) : (
        (primaryCtaText || secondaryCtaText || dangerCtaText) && (
          <div
            className={
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue32
            }
          >
            {primaryCtaText &&
              $.jsx(Button, {
                onClick: onPrimaryCtaClick,
                color: primaryCtaColor ?? "outline",
                className: "shrink-0",
                disabled: isPrimaryCtaDisabled,
                children: primaryCtaText,
              })}
            {secondaryCtaText &&
              $.jsx(Button, {
                onClick: onSecondaryCtaClick,
                color: secondaryCtaColor ?? "ghost",
                className: "shrink-0",
                disabled: isSecondaryCtaDisabled,
                children: secondaryCtaText,
              })}
            {dangerCtaText &&
              $.jsx(Button, {
                onClick: onDangerCtaClick,
                color: "danger",
                className: "shrink-0",
                disabled:
                  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue19,
                children: dangerCtaText,
              })}
          </div>
        )
      );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue34 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue33,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue35,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue36,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue37,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue38,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue39,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue40,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue41,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue42;
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue42 =
    Symbol.for("react.early_return_sentinel");
  bb0: {
    let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue50 =
        {
          error: "border-token-error-foreground/20 text-token-error-foreground",
          infoAccent:
            "border-token-text-link-foreground/40 text-token-foreground",
          normal: "border-token-input-border text-token-foreground",
          warning:
            "border-token-editor-warning-foreground/30 text-token-foreground",
        }[type],
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue51 =
        {
          error: "bg-token-input-validation-error-background/20",
          infoAccent: "bg-token-input-background",
          normal: "bg-token-input-background",
          warning: "bg-token-input-validation-warning-background/30",
        }[type],
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue52 =
        currentReactAliasUnderscore(
          "icon-sm shrink-0",
          type === "infoAccent" && "text-token-text-link-foreground",
          type === "warning" && "text-token-editor-warning-foreground",
          iconClassName,
        ),
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue53 =
        currentReactAliasUnderscore(
          "absolute inset-0 -z-10",
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue51,
        ),
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue54 =
        (
          <div
            aria-hidden={true}
            className={
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue53
            }
          />
        );
    let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue55 =
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue54,
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue56 =
        currentReactAliasUnderscore(
          "relative isolate flex w-full overflow-hidden rounded-2xl border bg-token-main-surface-primary py-2 pl-3 pr-2 text-sm shadow-xs lg:mx-auto electron:border-0 electron:ring-[0.5px] electron:ring-token-border-heavy",
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue50,
        ),
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue57 =
        () => (
          <div className="flex items-center gap-1">
            {Icon && (
              <Icon
                className={
                  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue52
                }
              />
            )}
            {title && (
              <h3 className="text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold">
                {title}
              </h3>
            )}
          </div>
        ),
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue58;
    if (
      ((appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue58 =
        (
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam11,
        ) => (
          <div
            className={currentReactAliasUnderscore(
              "flex min-w-0 flex-1 flex-col",
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slParam11,
            )}
          >
            <div
              className={currentReactAliasUnderscore(
                "electron:leading-relaxed min-w-0 flex-1 text-pretty",
                title
                  ? type === "error"
                    ? "text-token-error-foreground"
                    : "text-token-description-foreground"
                  : "",
              )}
            >
              {content}
            </div>
          </div>
        )),
      (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue35 =
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue58),
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue26)
    ) {
      let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue112 =
          currentReactAliasUnderscore(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue56,
            "flex-col gap-1.5",
          ),
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue113 =
          (Icon || title) &&
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue57();
      let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue114;
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue114 =
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue35(
          "gap-1.5",
        );
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue42 =
        (
          <aside
            aria-live={ariaLive}
            className={
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue112
            }
            role={role}
          >
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue55
            }
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue113
            }
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue114
            }
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue34
            }
          </aside>
        );
      break bb0;
    }
    if (
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue27
    ) {
      let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue65 =
          currentReactAliasUnderscore(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue56,
            "gap-3",
          ),
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue66 =
          title ? (
            <h3 className="text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold">
              {title}
            </h3>
          ) : null;
      let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue67 =
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue35();
      let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue68;
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue68 =
        (
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue66
            }
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue67
            }
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue34
            }
          </div>
        );
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue42 =
        (
          <aside
            aria-live={ariaLive}
            className={
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue65
            }
            role={role}
          >
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue55
            }
            {Icon ? (
              <div className="flex items-center self-center">
                <Icon
                  className={
                    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue52
                  }
                />
              </div>
            ) : null}
            {
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue68
            }
          </aside>
        );
      break bb0;
    }
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue38 =
      ariaLive;
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue39 =
      currentReactAliasUnderscore(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue56,
        "items-center gap-4",
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue28 &&
          "max-[400px]:items-start max-[400px]:gap-2",
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue40 =
      role;
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue41 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue55;
    let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue59 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue28 &&
      "max-[400px]:items-start";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue36 =
      currentReactAliasUnderscore(
        "flex h-full w-full items-center gap-2",
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue59,
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue37 =
      Icon && (
        <Icon
          className={currentReactAliasUnderscore(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue52,
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue28 &&
              "max-[400px]:hidden",
          )}
        />
      );
  }
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue42 !==
    Symbol.for("react.early_return_sentinel")
  )
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue42;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue43 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue28 &&
      "max-[400px]:flex-col max-[400px]:items-stretch max-[400px]:gap-2",
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue44 =
      currentReactAliasUnderscore(
        "flex min-w-0 grow flex-row items-center justify-between gap-2",
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue43,
      );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue45 =
    title && <h3 className="text-sm font-bold text-pretty">{title}</h3>;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue46 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue35();
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue47 =
    (
      <div
        className={
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue44
        }
      >
        {
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue45
        }
        {
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue46
        }
        {
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue34
        }
      </div>
    );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue48 =
    (
      <div
        className={
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue36
        }
      >
        {
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue37
        }
        {
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue47
        }
      </div>
    );
  return (
    <aside
      aria-live={
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue38
      }
      className={
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue39
      }
      role={
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue40
      }
    >
      {
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue41
      }
      {
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue48
      }
    </aside>
  );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue17,
  $;
export const _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slN =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slValue17 =
      currentReactAliasLoweruLowern();
    currentReactAliasLowerv();
    initButtonRuntime();
    $ = currentReactAliasLowerzLowert();
  });
export {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slA,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slD,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slE,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slM,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slN,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slO,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slT,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slUnderscore,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slB,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slC,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slD,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slF,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slG,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slH,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slJ,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slK,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slL,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slO,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slP,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slS,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slU,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slV,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slX,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronAppMainPluginDKw7nl1slY,
};
