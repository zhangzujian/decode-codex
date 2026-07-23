// Restored from ref/webview/assets/local-environment-editor-AaqM4KlW.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer, toEsm } from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasUpperD,
  currentReactAliasLowerdLowern,
  currentReactAliasLowerk,
  currentReactAliasUpperO,
  currentReactAliasLoweruLowern,
  currentReactAliasUnderscore,
  currentReactAliasLowerv,
  currentReactAliasLowerx,
  currentReactAliasLowery,
  currentReactAliasLowerzLowert,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasUpperGLowerr,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasLowerr,
  currentQueryRpcAliasLowersLowern,
  currentQueryRpcAliasUpperTLowerl,
  currentQueryRpcAliasUpperULowerr,
  currentQueryRpcAliasUpperVLowerr,
  currentQueryRpcAliasLowerw,
  currentQueryRpcAliasUpperWLowerr,
  currentQueryRpcAliasLowerxLowerl,
} from "../app-initial-query-rpc-runtime";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
  defineMessage,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  Button,
  initButtonRuntime,
} from "../../current-app-initial/persisted-ui-runtime-entry";
import {
  currentHostServicesAliasLowera,
  currentHostServicesAliasLoweri,
} from "../app-initial-host-services-runtime";
import {
  initTooltipRuntime,
  Tooltip,
} from "../app-initial~avatar-overlay-composition-surface~artifact-tab-content.electron~notebook-preview-~kr7rxhqe";
import {
  lodashMemoize,
  toastApiSignal,
  windowContinuationWarningMessage,
  extractPlainTextContent,
} from "../current-app-shared-current";
import {
  businessCheckoutSharedMember0162,
  businessCheckoutSharedMember0209,
  startThreadFollowerTurn,
  businessCheckoutSharedInitializer0363,
  businessCheckoutSharedMember0381,
  businessCheckoutSharedInitializer0399,
} from "../business-checkout-shared-current";
import {
  pullRequestRoutRuntimeVariant12Member0007,
  pullRequestRoutRuntimeVariant12Member0038,
} from "../pull-request-rout-runtime-variant-12-current";
import {
  settingsCommandSharedRuntimeVariant4Member0003,
  settingsCommandSharedRuntimeVariant4Member0007,
  settingsCommandSharedRuntimeVariant4Member0013,
  settingsCommandSharedRuntimeVariant4Member0019,
  settingsCommandSharedRuntimeVariant4Member0060,
} from "../settings-command-shared-runtime-variant-4-current";
import {
  settingsCommandSharedRuntimeVariant18Member0033,
  settingsCommandSharedRuntimeVariant18Member0027,
} from "../settings-command-shared-runtime-variant-18-current";
import {
  initBugIconRuntime,
  canSplit,
} from "../app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~settings-command-~ea2v0nlw";
import {
  pullRequestCodeReviewNewTRuntimeMember0071,
  pullRequestCodeReviewNewTRuntimeMember0105,
  pullRequestCodeReviewNewTRuntimeMember0116,
} from "../pull-request-code-review-new-t-runtime-current";
import {
  appgenSettingsSharedRuntimeVariant10Member0005,
  appgenSettingsSharedRuntimeVariant10Member0009,
} from "../appgen-settings-shared-runtime-variant-10-current";
import { firstRunAppgenRuntimeVariant2Member0011 } from "../first-run-appgen-runtime-variant-2-current";
import {
  Dropdown,
  initDropdownRuntime,
  DropdownMenu,
} from "../../package-adapters/dropdown-current/entry";
import {
  newThreadOnboardingSharedRuntimeVariant18Member0002,
  newThreadOnboardingSharedRuntimeVariant18Member0006,
} from "../new-thread-onboarding-shared-runtime-variant-18-current";
import {
  appgenSettingsSharedRuntimeVariant7Member0008,
  appgenSettingsSharedRuntimeVariant7Member0011,
  appgenSettingsSharedRuntimeVariant7Member0014,
  appgenSettingsSharedRuntimeVariant7Member0016,
} from "../appgen-settings-shared-runtime-variant-7-current";
import {
  appgenLibraryPageHotkeyWinRuntimeMember0001,
  appgenLibraryPageHotkeyWinRuntimeMember0018,
} from "../appgen-library-page-hotkey-win-runtime-current";
import {
  initPlayOutlineIconChunk,
  PlayOutlineIcon,
} from "../icons/play-outline/entry";
import { initTestTubeIconChunk, TestTubeIcon } from "../flask";
import { useForm, initReactFormRuntime } from "../esm";
async function localEnvironmentEditorX(
  localEnvironmentEditorParam22,
  localEnvironmentEditorParam23,
  localEnvironmentEditorParam24,
  localEnvironmentEditorParam25,
) {
  let localEnvironmentEditorValue128 = [
    ...Array.from(new Set(localEnvironmentEditorParam24)).flatMap((item) => [
      currentQueryRpcAliasLowerr("local-environment-config", {
        configPath: item,
        hostId: localEnvironmentEditorParam23,
      }),
      currentQueryRpcAliasLowerr("local-environment", {
        configPath: item,
        hostId: localEnvironmentEditorParam23,
      }),
    ]),
    ...(localEnvironmentEditorParam25 == null
      ? []
      : [
          currentQueryRpcAliasLowerr("local-environments", {
            hostId: localEnvironmentEditorParam23,
            workspaceRoot: localEnvironmentEditorParam25,
          }),
        ]),
  ];
  await Promise.all(
    localEnvironmentEditorValue128.map((item) =>
      localEnvironmentEditorParam22.invalidateQueries({
        queryKey: item,
      }),
    ),
  );
}
var localEnvironmentEditorB = createLazyEsmInitializer(() => {
  currentQueryRpcAliasLowero();
});
function localEnvironmentEditorV(localEnvironmentEditorParam26) {
  let { icon, className } = localEnvironmentEditorParam26,
    localEnvironmentEditorValue130 = localEnvironmentEditorValue3[icon],
    localEnvironmentEditorValue131 = currentReactAliasUnderscore(
      "icon-sm",
      className,
    );
  return localEnvironmentEditorValue2.jsx(localEnvironmentEditorValue130, {
    className: localEnvironmentEditorValue131,
  });
}
var localEnvironmentEditorValue1,
  localEnvironmentEditorValue2,
  localEnvironmentEditorValue3,
  localEnvironmentEditorY = createLazyEsmInitializer(() => {
    localEnvironmentEditorValue1 = currentReactAliasLoweruLowern();
    currentReactAliasLowerv();
    initBugIconRuntime();
    initTestTubeIconChunk();
    initPlayOutlineIconChunk();
    settingsCommandSharedRuntimeVariant18Member0027();
    localEnvironmentEditorValue2 = currentReactAliasLowerzLowert();
    localEnvironmentEditorValue3 = {
      tool: settingsCommandSharedRuntimeVariant18Member0033,
      run: PlayOutlineIcon,
      debug: canSplit,
      test: TestTubeIcon,
    };
  }),
  localEnvironmentEditorG,
  localEnvironmentEditorUnderscore = createLazyEsmInitializer(() => {
    initReactIntlRuntimeChunk();
    localEnvironmentEditorG = [
      {
        value: "tool",
        message: defineMessage({
          id: "settings.localEnvironments.actions.icon.tool",
          defaultMessage: "Tool",
          description: "Tool icon label for local environment actions",
        }),
      },
      {
        value: "run",
        message: defineMessage({
          id: "settings.localEnvironments.actions.icon.run",
          defaultMessage: "Run",
          description: "Run icon label for local environment actions",
        }),
      },
      {
        value: "debug",
        message: defineMessage({
          id: "settings.localEnvironments.actions.icon.debug",
          defaultMessage: "Debug",
          description: "Debug icon label for local environment actions",
        }),
      },
      {
        value: "test",
        message: defineMessage({
          id: "settings.localEnvironments.actions.icon.test",
          defaultMessage: "Test",
          description: "Test icon label for local environment actions",
        }),
      },
    ];
  });
function localEnvironmentEditorM(localEnvironmentEditorParam11) {
  return "defaultName" in localEnvironmentEditorParam11
    ? {
        actions: [],
        cleanupPlatformScripts: localEnvironmentEditorHelper1(null),
        cleanupScript: "",
        name: localEnvironmentEditorParam11.defaultName,
        setupPlatformScripts: localEnvironmentEditorHelper1(null),
        setupScript: "",
      }
    : {
        actions: (localEnvironmentEditorParam11.environment.actions ?? []).map(
          (item) => ({
            ...item,
            id: crypto.randomUUID(),
            platform: item.platform ?? null,
          }),
        ),
        cleanupPlatformScripts: localEnvironmentEditorHelper1(
          localEnvironmentEditorParam11.environment.cleanup,
        ),
        cleanupScript:
          localEnvironmentEditorParam11.environment.cleanup?.script ?? "",
        name: localEnvironmentEditorParam11.environment.name,
        setupPlatformScripts: localEnvironmentEditorHelper1(
          localEnvironmentEditorParam11.environment.setup,
        ),
        setupScript: localEnvironmentEditorParam11.environment.setup.script,
      };
}
function localEnvironmentEditorP() {
  return {
    id: crypto.randomUUID(),
    name: "",
    icon: "tool",
    command: "",
    platform: null,
  };
}
function localEnvironmentEditorHelper1(localEnvironmentEditorParam33) {
  return {
    darwin: localEnvironmentEditorParam33?.darwin?.script ?? "",
    linux: localEnvironmentEditorParam33?.linux?.script ?? "",
    win32: localEnvironmentEditorParam33?.win32?.script ?? "",
  };
}
function localEnvironmentEditorHelper2(
  localEnvironmentEditorParam28,
  localEnvironmentEditorParam29,
) {
  return {
    incompleteActionIds: localEnvironmentEditorParam29.flatMap((item) =>
      item.name.trim().length > 0 == item.command.trim().length > 0
        ? []
        : [item.id],
    ),
    missingName: localEnvironmentEditorParam28.trim().length === 0,
  };
}
function localEnvironmentEditorHelper3(
  localEnvironmentEditorParam30,
  localEnvironmentEditorParam31 = "default",
) {
  return localEnvironmentEditorParam30 === "action"
    ? localEnvironmentEditorValue8
    : localEnvironmentEditorParam31 === "win32"
      ? localEnvironmentEditorParam30 === "setup"
        ? localEnvironmentEditorValue6
        : localEnvironmentEditorValue7
      : localEnvironmentEditorParam30 === "setup"
        ? localEnvironmentEditorValue4
        : localEnvironmentEditorValue5;
}
function localEnvironmentEditorHelper4({
  version,
  name,
  setupScript,
  setupPlatformScripts,
  cleanupScript,
  cleanupPlatformScripts,
  actions,
}) {
  let localEnvironmentEditorValue111 = actions.flatMap((item) => {
      let localEnvironmentEditorValue137 = item.name.trim(),
        localEnvironmentEditorValue138 = item.command.trim();
      return localEnvironmentEditorValue137.length === 0 ||
        localEnvironmentEditorValue138.length === 0
        ? []
        : [
            {
              ...item,
              command: localEnvironmentEditorValue138,
              name: localEnvironmentEditorValue137,
            },
          ];
    }),
    localEnvironmentEditorValue112 = [];
  localEnvironmentEditorValue112.push(
    "# THIS IS AUTOGENERATED. DO NOT EDIT MANUALLY",
  );
  localEnvironmentEditorValue112.push(`version = ${version}`);
  localEnvironmentEditorValue112.push(
    `name = ${localEnvironmentEditorHelper6(name.trim())}`,
  );
  localEnvironmentEditorHelper5(
    localEnvironmentEditorValue112,
    "setup",
    setupScript,
    setupPlatformScripts,
  );
  localEnvironmentEditorHelper5(
    localEnvironmentEditorValue112,
    "cleanup",
    cleanupScript,
    cleanupPlatformScripts,
  );
  localEnvironmentEditorValue111.length > 0 &&
    localEnvironmentEditorValue112.push("");
  for (let localEnvironmentEditorValue133 of localEnvironmentEditorValue111) {
    localEnvironmentEditorValue112.push("[[actions]]");
    localEnvironmentEditorValue112.push(
      `name = ${localEnvironmentEditorHelper6(localEnvironmentEditorValue133.name)}`,
    );
    localEnvironmentEditorValue133.icon &&
      localEnvironmentEditorValue112.push(
        `icon = ${localEnvironmentEditorHelper6(localEnvironmentEditorValue133.icon)}`,
      );
    localEnvironmentEditorValue112.push(
      `command = ${localEnvironmentEditorHelper6(localEnvironmentEditorValue133.command)}`,
    );
    localEnvironmentEditorValue133.platform &&
      localEnvironmentEditorValue112.push(
        `platform = ${localEnvironmentEditorHelper6(localEnvironmentEditorValue133.platform)}`,
      );
    localEnvironmentEditorValue112.push("");
  }
  return `${localEnvironmentEditorValue112.join("\n").trimEnd()}\n`;
}
function localEnvironmentEditorHelper5(
  localEnvironmentEditorParam16,
  localEnvironmentEditorParam17,
  localEnvironmentEditorParam18,
  localEnvironmentEditorParam19,
) {
  let localEnvironmentEditorValue127 = currentQueryRpcAliasUpperULowerr.flatMap(
    (item) => {
      let localEnvironmentEditorValue142 = localEnvironmentEditorParam19[item];
      return localEnvironmentEditorValue142 == null ||
        localEnvironmentEditorValue142.length === 0
        ? []
        : [
            {
              platform: item,
              script: localEnvironmentEditorValue142,
            },
          ];
    },
  );
  if (
    ((localEnvironmentEditorParam17 === "setup" ||
      localEnvironmentEditorParam18.length > 0 ||
      localEnvironmentEditorValue127.length > 0) &&
      (localEnvironmentEditorParam16.push(""),
      localEnvironmentEditorParam16.push(`[${localEnvironmentEditorParam17}]`),
      localEnvironmentEditorParam16.push(
        `script = ${localEnvironmentEditorHelper6(localEnvironmentEditorParam18)}`,
      )),
    localEnvironmentEditorValue127.length !== 0)
  ) {
    localEnvironmentEditorParam16.push("");
    for (let [
      localEnvironmentEditorValue140,
      localEnvironmentEditorValue141,
    ] of localEnvironmentEditorValue127.entries()) {
      localEnvironmentEditorParam16.push(
        `[${localEnvironmentEditorParam17}.${localEnvironmentEditorValue141.platform}]`,
      );
      localEnvironmentEditorParam16.push(
        `script = ${localEnvironmentEditorHelper6(localEnvironmentEditorValue141.script)}`,
      );
      localEnvironmentEditorValue140 <
        localEnvironmentEditorValue127.length - 1 &&
        localEnvironmentEditorParam16.push("");
    }
  }
}
function localEnvironmentEditorHelper6(localEnvironmentEditorParam27) {
  let localEnvironmentEditorValue134 = localEnvironmentEditorParam27.replace(
    /\r\n?/g,
    "\n",
  );
  return localEnvironmentEditorValue134.includes("\n")
    ? localEnvironmentEditorValue134.includes("'''")
      ? `"""\n${localEnvironmentEditorValue134.replace(/\\/g, "\\\\").replace(/"""/g, '\\"""')}"""`
      : `'''\n${localEnvironmentEditorValue134}'''`
    : JSON.stringify(localEnvironmentEditorValue134);
}
var localEnvironmentEditorValue4,
  localEnvironmentEditorValue5,
  localEnvironmentEditorValue6,
  localEnvironmentEditorValue7,
  localEnvironmentEditorValue8,
  localEnvironmentEditorH = createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    localEnvironmentEditorValue4 =
      'cd "$CODEX_WORKTREE_PATH"\npip install -r requirements.txt\nnpm install\n./run/setup.sh';
    localEnvironmentEditorValue5 =
      "docker compose down --remove-orphans\nrm -rf .cache/tmp";
    localEnvironmentEditorValue6 =
      "python -m pip install -r requirements.txt\npnpm install";
    localEnvironmentEditorValue7 = "docker compose down --remove-orphans";
    localEnvironmentEditorValue8 = "npm run dev";
  }),
  localEnvironmentEditorF,
  localEnvironmentEditorD = createLazyEsmInitializer(() => {
    initReactIntlRuntimeChunk();
    localEnvironmentEditorF = defineMessages({
      actionPlatforms: {
        id: "settings.localEnvironments.actions.item.platforms",
        defaultMessage: "Platforms",
        description: "Label for local environment action platforms",
      },
      actionScript: {
        id: "settings.localEnvironments.actions.item.command",
        defaultMessage: "Action script",
        description: "Label for local environment action script",
      },
      actionName: {
        id: "settings.localEnvironments.actions.item.name",
        defaultMessage: "Name",
        description: "Label for local environment action name",
      },
      addAction: {
        id: "settings.localEnvironments.actions.add",
        defaultMessage: "Add action",
        description: "Button label to add a local environment action",
      },
      actionsDescription: {
        id: "settings.localEnvironments.environment.actions.description",
        defaultMessage:
          "These actions can run any command and will be displayed in the header",
        description: "Description for local environment actions summary",
      },
      actionsEmpty: {
        id: "settings.localEnvironments.actions.empty",
        defaultMessage: "Add an action to run commands from the local toolbar",
        description: "Empty state for local environment actions",
      },
      actionsTitle: {
        id: "settings.localEnvironments.actions.title",
        defaultMessage: "Actions",
        description: "Title for local environment actions section",
      },
      cleanupPlatformSelector: {
        id: "settings.localEnvironments.environment.cleanup.platformSelector",
        defaultMessage: "Cleanup script platform",
        description:
          "Accessible label for the cleanup script platform selector",
      },
      cleanupDescription: {
        id: "settings.localEnvironments.environment.cleanup.description",
        defaultMessage: "Runs at the project root before worktree cleanup",
        description: "Description for the cleanup script input",
      },
      cleanupScript: {
        id: "settings.localEnvironments.environment.cleanup.title",
        defaultMessage: "Cleanup script",
        description: "Title for the local environment cleanup script section",
      },
      defaultEnvironmentName: {
        id: "settings.localEnvironments.environment.defaultName",
        defaultMessage: "local",
        description: "Fallback name for a local environment",
      },
      environmentName: {
        id: "settings.localEnvironments.environment.name",
        defaultMessage: "Name",
        description: "Label for a local environment name",
      },
      setupPlatformSelector: {
        id: "settings.localEnvironments.environment.setup.platformSelector",
        defaultMessage: "Setup script platform",
        description: "Accessible label for the setup script platform selector",
      },
      setupScript: {
        id: "settings.localEnvironments.environment.setup",
        defaultMessage: "Setup script",
        description: "Label for a local environment setup script",
      },
    });
  });
async function $e({
  configPath,
  expectedRevision,
  hostId,
  queryClient,
  raw,
  selectEnvironment,
  workspaceRoot,
}) {
  let localEnvironmentEditorValue119 =
    currentHostServicesAliasLoweri.localEnvironments;
  if (localEnvironmentEditorValue119 == null)
    throw Error("Local environments are not supported by this host.");
  let localEnvironmentEditorValue120 =
      await localEnvironmentEditorValue119.saveConfig({
        configPath,
        expectedRevision,
        hostId,
        raw,
      }),
    localEnvironmentEditorValue121 = localEnvironmentEditorValue120.configPath,
    localEnvironmentEditorValue122 = localEnvironmentEditorX(
      queryClient,
      hostId,
      [configPath, localEnvironmentEditorValue121],
      workspaceRoot,
    );
  return localEnvironmentEditorValue120.type === "conflict"
    ? {
        type: "conflict",
      }
    : (await localEnvironmentEditorValue122,
      {
        configPath: localEnvironmentEditorValue121,
        type:
          (await selectEnvironment?.(localEnvironmentEditorValue121)) === false
            ? "selection-failed"
            : "success",
      });
}
async function localEnvironmentEditorU({
  configPath,
  draft,
  expectedRevision,
  hostId,
  queryClient,
  selectEnvironment,
  version,
  workspaceRoot,
}) {
  let localEnvironmentEditorValue126 = localEnvironmentEditorHelper2(
    draft.name,
    draft.actions,
  );
  return localEnvironmentEditorValue126.missingName ||
    localEnvironmentEditorValue126.incompleteActionIds.length > 0
    ? {
        type: "invalid",
      }
    : $e({
        configPath,
        expectedRevision,
        hostId,
        queryClient,
        raw: localEnvironmentEditorHelper4({
          version,
          ...draft,
        }),
        selectEnvironment,
        workspaceRoot,
      });
}
async function localEnvironmentEditorHelper7({
  codexWorktree,
  configPath,
  gitRoot,
  selectForWorkspace,
  selectForWorktree,
}) {
  return codexWorktree
    ? gitRoot == null
      ? false
      : selectForWorktree(gitRoot, configPath)
    : (selectForWorkspace(configPath), true);
}
var localEnvironmentEditorL = createLazyEsmInitializer(() => {
    currentHostServicesAliasLowera();
    localEnvironmentEditorB();
    localEnvironmentEditorH();
  }),
  localEnvironmentEditorValue9,
  localEnvironmentEditorValue10 = createLazyEsmInitializer(() => {
    initReactIntlRuntimeChunk();
    localEnvironmentEditorValue9 = defineMessages({
      all: {
        id: "settings.localEnvironments.actions.item.platforms.all",
        defaultMessage: "All platforms",
        description: "Label for an action available on every platform",
      },
      default: {
        id: "settings.localEnvironments.environment.script.default",
        defaultMessage: "Default",
        description: "Label for default local environment lifecycle script",
      },
      darwin: {
        id: "settings.localEnvironments.actions.item.platforms.macos",
        defaultMessage: "macOS",
        description: "Label for macOS platform toggle",
      },
      linux: {
        id: "settings.localEnvironments.actions.item.platforms.linux",
        defaultMessage: "Linux",
        description: "Label for Linux platform toggle",
      },
      win32: {
        id: "settings.localEnvironments.actions.item.platforms.windows",
        defaultMessage: "Windows",
        description: "Label for Windows platform toggle",
      },
    });
  });
function localEnvironmentEditorS(localEnvironmentEditorParam10) {
  let { leadingOption, selectedId, onSelect, ariaLabel } =
      localEnvironmentEditorParam10,
    localEnvironmentEditorValue114 = useIntl(),
    localEnvironmentEditorValue115 = [
      leadingOption,
      ...currentQueryRpcAliasUpperULowerr,
    ];
  let localEnvironmentEditorValue116 = localEnvironmentEditorValue115,
    localEnvironmentEditorValue117 = localEnvironmentEditorValue116.map(
      (item) => {
        let localEnvironmentEditorValue143 =
          localEnvironmentEditorValue114.formatMessage(
            localEnvironmentEditorValue9[item],
          );
        return {
          id: item,
          label: localEnvironmentEditorValue143,
          ariaLabel: localEnvironmentEditorValue143,
        };
      },
    );
  return localEnvironmentEditorValue12.jsx(
    appgenLibraryPageHotkeyWinRuntimeMember0001,
    {
      className: "flex-wrap",
      selectedId,
      onSelect,
      size: "default",
      ariaLabel,
      options: localEnvironmentEditorValue117,
    },
  );
}
var localEnvironmentEditorValue11,
  localEnvironmentEditorValue12,
  localEnvironmentEditorC = createLazyEsmInitializer(() => {
    localEnvironmentEditorValue11 = currentReactAliasLoweruLowern();
    currentQueryRpcAliasLowerw();
    initReactIntlRuntimeChunk();
    appgenLibraryPageHotkeyWinRuntimeMember0018();
    localEnvironmentEditorValue10();
    localEnvironmentEditorValue12 = currentReactAliasLowerzLowert();
  });
function localEnvironmentEditorHelper8(localEnvironmentEditorParam2) {
  let { actions, dropdownDisabled, incompleteActionIds, onChange } =
      localEnvironmentEditorParam2,
    localEnvironmentEditorValue55 = useIntl(),
    localEnvironmentEditorValue56,
    localEnvironmentEditorValue57,
    localEnvironmentEditorValue58,
    localEnvironmentEditorValue59,
    localEnvironmentEditorValue60,
    localEnvironmentEditorValue61;
  {
    let localEnvironmentEditorValue64 = (localEnvironmentEditorParam32) => ({
      label: localEnvironmentEditorValue55.formatMessage(
        localEnvironmentEditorParam32.message,
      ),
      value: localEnvironmentEditorParam32.value,
      icon: localEnvironmentEditorValue14.jsx(localEnvironmentEditorV, {
        icon: localEnvironmentEditorParam32.value,
      }),
    });
    let localEnvironmentEditorValue65 = localEnvironmentEditorG.map(
        localEnvironmentEditorValue64,
      ),
      localEnvironmentEditorValue66 = (
        localEnvironmentEditorParam38,
        localEnvironmentEditorParam39,
      ) => {
        onChange(
          actions.map((item) =>
            item.id === localEnvironmentEditorParam38
              ? {
                  ...item,
                  ...localEnvironmentEditorParam39,
                }
              : item,
          ),
        );
      };
    let localEnvironmentEditorValue67 = localEnvironmentEditorValue66;
    localEnvironmentEditorValue57 =
      appgenSettingsSharedRuntimeVariant7Member0016;
    let localEnvironmentEditorValue68 = localEnvironmentEditorValue14.jsx(
      FormattedMessage,
      {
        ...localEnvironmentEditorF.actionsTitle,
      },
    );
    let localEnvironmentEditorValue69 = () => {
      onChange([...actions, localEnvironmentEditorP()]);
    };
    let localEnvironmentEditorValue70;
    localEnvironmentEditorValue70 = localEnvironmentEditorValue14.jsx(
      FormattedMessage,
      {
        ...localEnvironmentEditorF.addAction,
      },
    );
    localEnvironmentEditorValue61 = localEnvironmentEditorValue14.jsx(
      appgenSettingsSharedRuntimeVariant7Member0016.Header,
      {
        title: localEnvironmentEditorValue68,
        actions: localEnvironmentEditorValue14.jsx(Button, {
          color: "secondary",
          size: "toolbar",
          type: "button",
          onClick: localEnvironmentEditorValue69,
          children: localEnvironmentEditorValue70,
        }),
      },
    );
    localEnvironmentEditorValue56 =
      appgenSettingsSharedRuntimeVariant7Member0016.Content;
    localEnvironmentEditorValue58 = "gap-1";
    localEnvironmentEditorValue59 = (
      <div className="text-sm text-token-text-secondary">
        {localEnvironmentEditorValue14.jsx(FormattedMessage, {
          ...localEnvironmentEditorF.actionsDescription,
        })}
      </div>
    );
    localEnvironmentEditorValue60 =
      actions.length === 0 ? (
        localEnvironmentEditorValue14.jsx(
          appgenSettingsSharedRuntimeVariant7Member0014,
          {
            children: (
              <div className="p-3 text-sm text-token-text-secondary">
                {localEnvironmentEditorValue14.jsx(FormattedMessage, {
                  ...localEnvironmentEditorF.actionsEmpty,
                })}
              </div>
            ),
          },
        )
      ) : (
        <div className="flex flex-col gap-3">
          {actions.map((item) => {
            let localEnvironmentEditorValue71 =
                localEnvironmentEditorValue65.find(
                  (_item) => _item.value === (item.icon ?? "tool"),
                ) ?? localEnvironmentEditorValue65[0],
              localEnvironmentEditorValue72 = incompleteActionIds.includes(
                item.id,
              ),
              localEnvironmentEditorValue73 =
                localEnvironmentEditorValue72 && item.name.trim().length === 0,
              localEnvironmentEditorValue74 =
                localEnvironmentEditorValue72 &&
                item.command.trim().length === 0,
              localEnvironmentEditorValue75 = `local-env-action-name-error-${item.id}`,
              localEnvironmentEditorValue76 = `local-env-action-command-error-${item.id}`;
            return (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-lg border border-token-border bg-token-input-background p-3"
              >
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
                    htmlFor={`local-env-action-name-${item.id}`}
                  >
                    {localEnvironmentEditorValue14.jsx(FormattedMessage, {
                      ...localEnvironmentEditorF.actionName,
                    })}
                  </label>
                  <div className="flex items-center gap-2">
                    {localEnvironmentEditorValue14.jsx(DropdownMenu, {
                      align: "start",
                      contentWidth: "icon",
                      disabled: dropdownDisabled,
                      triggerButton: localEnvironmentEditorValue14.jsx(Button, {
                        id: `local-env-action-icon-${item.id}`,
                        className: "w-12 justify-center text-sm",
                        color: "secondary",
                        size: "toolbar",
                        type: "button",
                        "aria-label": localEnvironmentEditorValue71.label,
                        children: localEnvironmentEditorValue71.icon,
                      }),
                      children: localEnvironmentEditorValue65.map((_item) =>
                        localEnvironmentEditorValue14.jsx(
                          Dropdown.Item,
                          {
                            onSelect: () => {
                              localEnvironmentEditorValue67(item.id, {
                                icon: _item.value,
                              });
                            },
                            children: (
                              <span className="flex items-center gap-2">
                                {_item.icon}
                                <span>{_item.label}</span>
                              </span>
                            ),
                          },
                          _item.value,
                        ),
                      ),
                    })}
                    <div className="flex-1">
                      <input
                        id={`local-env-action-name-${item.id}`}
                        className="focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2"
                        value={item.name}
                        aria-describedby={
                          localEnvironmentEditorValue73
                            ? localEnvironmentEditorValue75
                            : undefined
                        }
                        aria-invalid={localEnvironmentEditorValue73}
                        onChange={(event) => {
                          localEnvironmentEditorValue67(item.id, {
                            name: event.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  {localEnvironmentEditorValue73 ? (
                    <div
                      id={localEnvironmentEditorValue75}
                      className="text-xs text-token-error-foreground"
                    >
                      {localEnvironmentEditorValue14.jsx(FormattedMessage, {
                        id: "settings.localEnvironments.actions.item.nameRequired",
                        defaultMessage: "Enter an action name",
                        description:
                          "Inline validation for a missing local environment action name",
                      })}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
                    htmlFor={`local-env-action-command-${item.id}`}
                  >
                    {localEnvironmentEditorValue14.jsx(FormattedMessage, {
                      ...localEnvironmentEditorF.actionScript,
                    })}
                  </label>
                  <textarea
                    id={`local-env-action-command-${item.id}`}
                    className="focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2"
                    value={item.command}
                    placeholder={localEnvironmentEditorHelper3("action")}
                    rows={4}
                    aria-describedby={
                      localEnvironmentEditorValue74
                        ? localEnvironmentEditorValue76
                        : undefined
                    }
                    aria-invalid={localEnvironmentEditorValue74}
                    onChange={(event) => {
                      localEnvironmentEditorValue67(item.id, {
                        command: event.target.value,
                      });
                    }}
                  />
                  {localEnvironmentEditorValue74 ? (
                    <div
                      id={localEnvironmentEditorValue76}
                      className="text-xs text-token-error-foreground"
                    >
                      {localEnvironmentEditorValue14.jsx(FormattedMessage, {
                        id: "settings.localEnvironments.actions.item.commandRequired",
                        defaultMessage: "Enter an action command",
                        description:
                          "Inline validation for a missing local environment action command",
                      })}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 flex-col gap-2">
                    <div className="text-xs font-medium tracking-wide text-token-text-secondary uppercase">
                      {localEnvironmentEditorValue14.jsx(FormattedMessage, {
                        ...localEnvironmentEditorF.actionPlatforms,
                      })}
                    </div>
                    {localEnvironmentEditorValue14.jsx(
                      localEnvironmentEditorS,
                      {
                        leadingOption: "all",
                        selectedId: item.platform ?? "all",
                        onSelect: (localEnvironmentEditorParam34) => {
                          localEnvironmentEditorValue67(item.id, {
                            platform:
                              localEnvironmentEditorParam34 === "all"
                                ? null
                                : localEnvironmentEditorParam34,
                          });
                        },
                        ariaLabel: localEnvironmentEditorValue55.formatMessage({
                          id: "settings.localEnvironments.actions.item.platforms.selector",
                          defaultMessage: "Action platform",
                          description:
                            "Aria label for the local environment action platform selector",
                        }),
                      },
                    )}
                  </div>
                  <div className="flex justify-end sm:justify-center">
                    {localEnvironmentEditorValue14.jsx(Tooltip, {
                      tooltipContent: localEnvironmentEditorValue14.jsx(
                        FormattedMessage,
                        {
                          id: "settings.localEnvironments.actions.item.tooltip.delete",
                          defaultMessage: "Delete",
                          description:
                            "Tooltip for removing a local environment action",
                        },
                      ),
                      children: localEnvironmentEditorValue14.jsx(Button, {
                        color: "ghost",
                        size: "toolbar",
                        type: "button",
                        "aria-label":
                          localEnvironmentEditorValue55.formatMessage({
                            id: "settings.localEnvironments.actions.item.button.delete",
                            defaultMessage: "Delete",
                            description:
                              "Label for removing a local environment action",
                          }),
                        onClick: () => {
                          onChange(
                            actions.filter((_item) => _item.id !== item.id),
                          );
                        },
                        children: localEnvironmentEditorValue14.jsx(
                          appgenSettingsSharedRuntimeVariant10Member0009,
                          {
                            className: "icon-sm",
                          },
                        ),
                      }),
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
  }
  let localEnvironmentEditorValue62 = localEnvironmentEditorValue14.jsxs(
    localEnvironmentEditorValue56,
    {
      className: localEnvironmentEditorValue58,
      children: [localEnvironmentEditorValue59, localEnvironmentEditorValue60],
    },
  );
  return localEnvironmentEditorValue14.jsxs(localEnvironmentEditorValue57, {
    children: [localEnvironmentEditorValue61, localEnvironmentEditorValue62],
  });
}
var localEnvironmentEditorValue13,
  localEnvironmentEditorValue14,
  localEnvironmentEditorValue15 = createLazyEsmInitializer(() => {
    localEnvironmentEditorValue13 = currentReactAliasLoweruLowern();
    initReactIntlRuntimeChunk();
    initButtonRuntime();
    initDropdownRuntime();
    initTooltipRuntime();
    appgenSettingsSharedRuntimeVariant10Member0005();
    localEnvironmentEditorY();
    localEnvironmentEditorUnderscore();
    localEnvironmentEditorH();
    localEnvironmentEditorD();
    localEnvironmentEditorC();
    appgenSettingsSharedRuntimeVariant7Member0011();
    appgenSettingsSharedRuntimeVariant7Member0008();
    localEnvironmentEditorValue14 = currentReactAliasLowerzLowert();
  }),
  localEnvironmentEditorO,
  localEnvironmentEditorA = createLazyEsmInitializer(() => {
    initReactIntlRuntimeChunk();
    localEnvironmentEditorO = defineMessages({
      parseError: {
        id: "settings.localEnvironments.file.invalidEnvironmentWarning",
        defaultMessage:
          "This environment file is invalid. Saving will replace its contents",
        description:
          "Warning that saving an invalid local environment file will replace it",
      },
      readError: {
        id: "settings.localEnvironments.file.readFailure",
        defaultMessage: "Unable to load this environment file. Try again",
        description:
          "Read error for a local environment file with guidance to retry",
      },
      retry: {
        id: "settings.localEnvironments.retry",
        defaultMessage: "Retry",
        description: "Button label to retry loading local environment data",
      },
    });
  });
function localEnvironmentEditorHelper9(localEnvironmentEditorParam4) {
  let { actions, draft, scriptType, onScriptChange } =
      localEnvironmentEditorParam4,
    localEnvironmentEditorValue84 = useIntl(),
    [localEnvironmentEditorValue85, localEnvironmentEditorValue86] =
      localEnvironmentEditorValue17.useState("default"),
    localEnvironmentEditorValue87 = scriptType === "setup",
    localEnvironmentEditorValue88 =
      localEnvironmentEditorValue85 === "default"
        ? localEnvironmentEditorValue87
          ? draft.setupScript
          : draft.cleanupScript
        : localEnvironmentEditorValue87
          ? (draft.setupPlatformScripts[localEnvironmentEditorValue85] ?? "")
          : (draft.cleanupPlatformScripts[localEnvironmentEditorValue85] ?? "");
  let localEnvironmentEditorValue89, localEnvironmentEditorValue90;
  localEnvironmentEditorValue89 = localEnvironmentEditorValue87
    ? localEnvironmentEditorValue18.jsx(FormattedMessage, {
        ...localEnvironmentEditorF.setupScript,
      })
    : localEnvironmentEditorValue18.jsx(FormattedMessage, {
        ...localEnvironmentEditorF.cleanupScript,
      });
  localEnvironmentEditorValue90 = localEnvironmentEditorValue87
    ? localEnvironmentEditorValue18.jsx(FormattedMessage, {
        id: "settings.localEnvironments.editor.setup.description",
        defaultMessage: "Runs at the project root on worktree creation",
        description: "Description for environment setup script summary",
      })
    : localEnvironmentEditorValue18.jsx(FormattedMessage, {
        ...localEnvironmentEditorF.cleanupDescription,
      });
  let localEnvironmentEditorValue91 = localEnvironmentEditorValue18.jsx(
    appgenSettingsSharedRuntimeVariant7Member0016.Header,
    {
      title: localEnvironmentEditorValue89,
      subtitle: localEnvironmentEditorValue90,
      actions,
    },
  );
  let localEnvironmentEditorValue92 = localEnvironmentEditorValue87
    ? localEnvironmentEditorValue84.formatMessage(
        localEnvironmentEditorF.setupPlatformSelector,
      )
    : localEnvironmentEditorValue84.formatMessage(
        localEnvironmentEditorF.cleanupPlatformSelector,
      );
  let localEnvironmentEditorValue93 = localEnvironmentEditorValue18.jsx(
    localEnvironmentEditorS,
    {
      leadingOption: "default",
      selectedId: localEnvironmentEditorValue85,
      onSelect: localEnvironmentEditorValue86,
      ariaLabel: localEnvironmentEditorValue92,
    },
  );
  let localEnvironmentEditorValue94 = `local-environment-${scriptType}-script-${localEnvironmentEditorValue85}`,
    localEnvironmentEditorValue95 = localEnvironmentEditorValue88,
    localEnvironmentEditorValue96 = localEnvironmentEditorValue87
      ? localEnvironmentEditorValue84.formatMessage(
          localEnvironmentEditorF.setupScript,
        )
      : localEnvironmentEditorValue84.formatMessage({
          id: "settings.localEnvironments.environment.cleanup.input",
          defaultMessage: "Cleanup script",
          description:
            "Accessible label for the local environment cleanup script input",
        });
  let localEnvironmentEditorValue97 = localEnvironmentEditorHelper3(
    scriptType,
    localEnvironmentEditorValue85,
  );
  let localEnvironmentEditorValue98 = (event) => {
    onScriptChange(
      scriptType,
      localEnvironmentEditorValue85,
      event.target.value,
    );
  };
  let localEnvironmentEditorValue99 = (
    <textarea
      id={localEnvironmentEditorValue94}
      className="focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2"
      value={localEnvironmentEditorValue95}
      aria-label={localEnvironmentEditorValue96}
      placeholder={localEnvironmentEditorValue97}
      rows={6}
      onChange={localEnvironmentEditorValue98}
    />
  );
  let localEnvironmentEditorValue100 = localEnvironmentEditorValue18.jsxs(
    appgenSettingsSharedRuntimeVariant7Member0016.Content,
    {
      className: "gap-2",
      children: [localEnvironmentEditorValue93, localEnvironmentEditorValue99],
    },
  );
  return localEnvironmentEditorValue18.jsxs(
    appgenSettingsSharedRuntimeVariant7Member0016,
    {
      children: [localEnvironmentEditorValue91, localEnvironmentEditorValue100],
    },
  );
}
var localEnvironmentEditorValue16,
  localEnvironmentEditorValue17,
  localEnvironmentEditorValue18,
  _t = createLazyEsmInitializer(() => {
    localEnvironmentEditorValue16 = currentReactAliasLoweruLowern();
    localEnvironmentEditorValue17 = toEsm(currentReactAliasLowerdLowern(), 1);
    initReactIntlRuntimeChunk();
    localEnvironmentEditorH();
    localEnvironmentEditorD();
    localEnvironmentEditorC();
    appgenSettingsSharedRuntimeVariant7Member0011();
    localEnvironmentEditorValue18 = currentReactAliasLowerzLowert();
  });
function localEnvironmentEditorR() {
  let localEnvironmentEditorValue103 = localEnvironmentEditorValue20.jsx(
    settingsCommandSharedRuntimeVariant4Member0060,
    {
      asChild: true,
      children: localEnvironmentEditorValue20.jsx(Button, {
        color: "secondary",
        size: "toolbar",
        className: "w-auto",
        children: localEnvironmentEditorValue20.jsx(FormattedMessage, {
          id: "settings.localEnvironments.environment.setup.envVars.button",
          defaultMessage: "Variables",
          description: "Button label that opens the setup env vars popover",
        }),
      }),
    },
  );
  let localEnvironmentEditorValue104 = localEnvironmentEditorValue20.jsx(
    settingsCommandSharedRuntimeVariant4Member0019,
    {
      className: "px-2 py-1 text-sm font-medium text-token-text-primary",
      children: localEnvironmentEditorValue20.jsx(FormattedMessage, {
        id: "settings.localEnvironments.environment.setup.envVars.title",
        defaultMessage: "Setup script environment variables",
        description: "Title for the setup env vars popover",
      }),
    },
  );
  let localEnvironmentEditorValue105 = localEnvironmentEditorValue20.jsx(
    localEnvironmentEditorHelper10,
    {
      description: localEnvironmentEditorValue20.jsx(FormattedMessage, {
        id: "settings.localEnvironments.environment.setup.envVars.sourcePath.description",
        defaultMessage: "Source workspace path",
        description: "Description for the source workspace setup env var",
      }),
      variableName: currentQueryRpcAliasUpperWLowerr,
    },
  );
  return localEnvironmentEditorValue20.jsxs(
    settingsCommandSharedRuntimeVariant4Member0007,
    {
      children: [
        localEnvironmentEditorValue103,
        localEnvironmentEditorValue20.jsxs(
          settingsCommandSharedRuntimeVariant4Member0013,
          {
            align: "end",
            className:
              "w-80 max-w-[min(20rem,var(--radix-popover-content-available-width))] gap-1",
            children: [
              localEnvironmentEditorValue104,
              <div className="flex flex-col gap-1">
                {localEnvironmentEditorValue105}
                {localEnvironmentEditorValue20.jsx(
                  localEnvironmentEditorHelper10,
                  {
                    variableName: currentQueryRpcAliasUpperGLowerr,
                    description: localEnvironmentEditorValue20.jsx(
                      FormattedMessage,
                      {
                        id: "settings.localEnvironments.environment.setup.envVars.worktreePath.description",
                        defaultMessage: "New worktree path",
                        description:
                          "Description for the worktree setup env var",
                      },
                    ),
                  },
                )}
              </div>,
            ],
          },
        ),
      ],
    },
  );
}
function localEnvironmentEditorHelper10(localEnvironmentEditorParam8) {
  let { variableName, description } = localEnvironmentEditorParam8,
    localEnvironmentEditorValue108 = (
      <div className="text-sm text-token-text-secondary">{description}</div>
    );
  let localEnvironmentEditorValue109 = (
    <div className="overflow-x-auto rounded-md border border-token-input-background bg-token-text-code-block-background px-2 py-1.5">
      <code className="block text-xs font-medium whitespace-nowrap text-token-text-primary">
        {variableName}
      </code>
    </div>
  );
  return (
    <div className="flex flex-col gap-0.5 rounded-lg px-2 py-1">
      {localEnvironmentEditorValue108}
      {localEnvironmentEditorValue109}
    </div>
  );
}
var localEnvironmentEditorValue19,
  localEnvironmentEditorValue20,
  localEnvironmentEditorI = createLazyEsmInitializer(() => {
    localEnvironmentEditorValue19 = currentReactAliasLoweruLowern();
    currentQueryRpcAliasLowerw();
    initReactIntlRuntimeChunk();
    initButtonRuntime();
    settingsCommandSharedRuntimeVariant4Member0003();
    localEnvironmentEditorValue20 = currentReactAliasLowerzLowert();
  });
export function localEnvironmentEditorT(localEnvironmentEditorParam1) {
  let {
      hostId,
      workspaceRoot,
      workspaceGroup,
      configPath,
      expectedRevision,
      initialEnvironment,
      hasParseError,
      hasReadError,
      onDirtyChange,
      onDiscardConflict,
      onRetryRead: localEnvironmentEditorValue26,
      onSavingChange,
      onSaved,
    } = localEnvironmentEditorParam1,
    localEnvironmentEditorValue27 = currentReactAliasUpperD(
      currentReactAliasLowery,
    ),
    localEnvironmentEditorValue28 = useIntl(),
    localEnvironmentEditorValue29 = () => ({
      configPath,
      draft: localEnvironmentEditorM(
        initialEnvironment == null
          ? {
              defaultName:
                newThreadOnboardingSharedRuntimeVariant18Member0002(
                  workspaceRoot,
                ) ??
                localEnvironmentEditorValue28.formatMessage(
                  localEnvironmentEditorF.defaultEnvironmentName,
                ),
            }
          : {
              environment: initialEnvironment,
            },
      ),
      hasParseError,
      revision: expectedRevision,
      version: initialEnvironment?.version ?? 1,
    });
  let [localEnvironmentEditorValue30] = localEnvironmentEditorValue23.useState(
      localEnvironmentEditorValue29,
    ),
    { data, error, refetch } =
      pullRequestRoutRuntimeVariant12Member0038(hostId),
    localEnvironmentEditorValue31 = data?.codexHome,
    localEnvironmentEditorValue32 =
      workspaceGroup?.isCodexWorktree === true ||
      (localEnvironmentEditorValue31 != null &&
        currentQueryRpcAliasLowersLowern(
          workspaceRoot,
          localEnvironmentEditorValue31,
        ));
  let localEnvironmentEditorValue33 = localEnvironmentEditorValue32,
    localEnvironmentEditorValue34 = extractPlainTextContent(hostId),
    localEnvironmentEditorValue35 = currentReactAliasUpperO(
      startThreadFollowerTurn,
    ),
    localEnvironmentEditorValue36 = {
      cwd: workspaceRoot,
      hostConfig: localEnvironmentEditorValue34,
    };
  let localEnvironmentEditorValue37 = {
    retainRepoWatch: localEnvironmentEditorValue35,
  };
  let {
      data: _data,
      error: _error,
      refetch: _refetch,
    } = businessCheckoutSharedInitializer0399(
      localEnvironmentEditorValue36,
      "local_environment_editor",
      localEnvironmentEditorValue37,
    ),
    localEnvironmentEditorValue38 = {
      hostId,
      workspaceRoot,
    };
  let { updateSelection } = pullRequestCodeReviewNewTRuntimeMember0071(
      localEnvironmentEditorValue38,
    ),
    localEnvironmentEditorValue39 = {
      onSuccess: (
        localEnvironmentEditorParam35,
        localEnvironmentEditorParam36,
      ) => {
        !localEnvironmentEditorParam35.success ||
          !_data ||
          pullRequestCodeReviewNewTRuntimeMember0116(
            localEnvironmentEditorValue27,
            _data,
            localEnvironmentEditorValue34,
            localEnvironmentEditorParam36.value,
            "local_environment_editor",
          );
      },
    };
  let localEnvironmentEditorValue40 = businessCheckoutSharedMember0381(
      "set-config-value",
      localEnvironmentEditorValue34,
      localEnvironmentEditorValue39,
    ),
    [localEnvironmentEditorValue41, _e] =
      localEnvironmentEditorValue23.useState(
        localEnvironmentEditorValue30.revision == null,
      ),
    localEnvironmentEditorValue42 =
      localEnvironmentEditorValue41 &&
      ((workspaceGroup == null && error != null) ||
        (localEnvironmentEditorValue33 && _error != null)),
    localEnvironmentEditorValue43 =
      !localEnvironmentEditorValue41 ||
      ((workspaceGroup != null || localEnvironmentEditorValue31 != null) &&
        (!localEnvironmentEditorValue33 || _data?.root != null)),
    localEnvironmentEditorValue44 = (localEnvironmentEditorParam9) =>
      localEnvironmentEditorU({
        configPath: localEnvironmentEditorValue30.configPath,
        draft: localEnvironmentEditorParam9,
        expectedRevision: localEnvironmentEditorValue30.revision,
        hostId,
        queryClient: localEnvironmentEditorValue27.queryClient,
        selectEnvironment: localEnvironmentEditorValue41
          ? (localEnvironmentEditorParam12) =>
              localEnvironmentEditorHelper7({
                codexWorktree: localEnvironmentEditorValue33,
                configPath: localEnvironmentEditorParam12,
                gitRoot: _data?.root ?? null,
                selectForWorkspace: updateSelection,
                selectForWorktree: async (
                  localEnvironmentEditorParam20,
                  localEnvironmentEditorParam21,
                ) =>
                  (
                    await localEnvironmentEditorValue40
                      .mutateAsync({
                        root: localEnvironmentEditorParam20,
                        key: currentQueryRpcAliasUpperVLowerr,
                        operationSource: "local_environment_editor",
                        value: localEnvironmentEditorParam21,
                        scope: "worktree",
                      })
                      .catch(localEnvironmentEditorHelper12)
                  )?.success === true,
              })
          : undefined,
        version: localEnvironmentEditorValue30.version,
        workspaceRoot,
      });
  let localEnvironmentEditorValue45, localEnvironmentEditorValue46;
  localEnvironmentEditorValue45 = () => {
    onSavingChange?.(true);
  };
  localEnvironmentEditorValue46 = () => {
    onSavingChange?.(false);
  };
  let localEnvironmentEditorValue47 = {
    mutationFn: localEnvironmentEditorValue44,
    networkMode: "always",
    onMutate: localEnvironmentEditorValue45,
    onSettled: localEnvironmentEditorValue46,
  };
  let localEnvironmentEditorValue48 = currentQueryRpcAliasUpperTLowerl(
      localEnvironmentEditorValue47,
    ),
    localEnvironmentEditorValue49 = useForm({
      defaultValues: localEnvironmentEditorValue30.draft,
      onSubmit: (localEnvironmentEditorParam6) => {
        let { value } = localEnvironmentEditorParam6;
        if (localEnvironmentEditorValue48.data?.type === "conflict") {
          onDiscardConflict();
          return;
        }
        localEnvironmentEditorHelper13({
          isDirty:
            localEnvironmentEditorValue49.state.isDirty ||
            localEnvironmentEditorValue30.revision == null ||
            localEnvironmentEditorValue30.hasParseError,
          isSelectionReady: localEnvironmentEditorValue43,
          readError: hasReadError,
          selectionError: localEnvironmentEditorValue42,
          isSaving: localEnvironmentEditorValue48.isPending,
          validation: localEnvironmentEditorHelper2(value.name, value.actions),
        }) ??
          localEnvironmentEditorValue48.mutate(value, {
            onSuccess: (localEnvironmentEditorParam7) => {
              if (localEnvironmentEditorParam7.type !== "invalid") {
                if (localEnvironmentEditorParam7.type === "conflict") {
                  localEnvironmentEditorValue27.get(toastApiSignal).danger(
                    localEnvironmentEditorValue28.formatMessage({
                      id: "settings.localEnvironments.save.conflict",
                      defaultMessage:
                        "This environment changed on disk. Discard your edits before saving again",
                      description:
                        "Error toast shown when an environment changed after the editor loaded it",
                    }),
                  );
                  return;
                }
                localEnvironmentEditorValue41 && _e(false);
                localEnvironmentEditorParam7.type === "selection-failed"
                  ? localEnvironmentEditorValue27.get(toastApiSignal).danger(
                      localEnvironmentEditorValue28.formatMessage({
                        id: "settings.localEnvironments.save.selectionError",
                        defaultMessage:
                          "Saved the environment file, but could not select it",
                        description:
                          "Error toast shown when a new local environment cannot be selected after saving",
                      }),
                    )
                  : localEnvironmentEditorValue27.get(toastApiSignal).success(
                      localEnvironmentEditorValue28.formatMessage({
                        id: "settings.localEnvironments.save.success",
                        defaultMessage: "Saved local environment",
                        description:
                          "Toast shown when local environment is saved",
                      }),
                    );
                onSaved(localEnvironmentEditorParam7.configPath);
              }
            },
          });
      },
    }),
    localEnvironmentEditorValue50 = (event) => {
      event.preventDefault();
      localEnvironmentEditorValue49.handleSubmit();
    };
  let localEnvironmentEditorValue51 = (localEnvironmentEditorParam3) => {
    let { values, isDirty } = localEnvironmentEditorParam3,
      localEnvironmentEditorValue77 = (localEnvironmentEditorParam41) => {
        onDirtyChange?.(
          !localEnvironmentEditorValue22.default(
            localEnvironmentEditorParam41,
            localEnvironmentEditorValue30.draft,
          ),
        );
      },
      localEnvironmentEditorValue78 = localEnvironmentEditorHelper2(
        values.name,
        values.actions,
      ),
      localEnvironmentEditorValue79 = localEnvironmentEditorHelper13({
        isDirty:
          isDirty ||
          localEnvironmentEditorValue30.revision == null ||
          localEnvironmentEditorValue30.hasParseError,
        isSelectionReady: localEnvironmentEditorValue43,
        readError: hasReadError,
        selectionError: localEnvironmentEditorValue42,
        isSaving: localEnvironmentEditorValue48.isPending,
        validation: localEnvironmentEditorValue78,
      }),
      localEnvironmentEditorValue80 =
        localEnvironmentEditorValue48.data?.type === "conflict",
      localEnvironmentEditorValue81 = localEnvironmentEditorValue80
        ? null
        : localEnvironmentEditorHelper14(localEnvironmentEditorValue79),
      localEnvironmentEditorValue82 = (
        localEnvironmentEditorParam13,
        localEnvironmentEditorParam14,
        localEnvironmentEditorParam15,
      ) => {
        if (localEnvironmentEditorParam14 === "default") {
          let localEnvironmentEditorValue135 =
              localEnvironmentEditorParam13 === "setup"
                ? "setupScript"
                : "cleanupScript",
            localEnvironmentEditorValue136 = {
              ...values,
              [localEnvironmentEditorValue135]: localEnvironmentEditorParam15,
            };
          localEnvironmentEditorValue49.setFieldValue(
            localEnvironmentEditorValue135,
            localEnvironmentEditorParam15,
          );
          localEnvironmentEditorValue77(localEnvironmentEditorValue136);
          return;
        }
        let localEnvironmentEditorValue123 =
            localEnvironmentEditorParam13 === "setup"
              ? "setupPlatformScripts"
              : "cleanupPlatformScripts",
          localEnvironmentEditorValue124 = {
            ...values[localEnvironmentEditorValue123],
            [localEnvironmentEditorParam14]: localEnvironmentEditorParam15,
          },
          localEnvironmentEditorValue125 = {
            ...values,
            [localEnvironmentEditorValue123]: localEnvironmentEditorValue124,
          };
        localEnvironmentEditorValue49.setFieldValue(
          localEnvironmentEditorValue123,
          localEnvironmentEditorValue124,
        );
        localEnvironmentEditorValue77(localEnvironmentEditorValue125);
      };
    return (
      <fieldset
        className="contents"
        aria-busy={localEnvironmentEditorValue48.isPending || undefined}
        disabled={localEnvironmentEditorValue48.isPending}
      >
        {$.jsx(appgenSettingsSharedRuntimeVariant7Member0016, {
          children: $.jsxs(
            appgenSettingsSharedRuntimeVariant7Member0016.Content,
            {
              className: "gap-[var(--padding-panel)]",
              children: [
                localEnvironmentEditorValue30.hasParseError ? (
                  <div
                    className="text-sm text-token-error-foreground"
                    role="alert"
                  >
                    {$.jsx(FormattedMessage, {
                      ...localEnvironmentEditorO.parseError,
                    })}
                  </div>
                ) : null,
                hasReadError ? (
                  <div
                    className="flex items-center justify-between gap-3 text-sm text-token-error-foreground"
                    role="alert"
                  >
                    <span>
                      {$.jsx(FormattedMessage, {
                        ...localEnvironmentEditorO.readError,
                      })}
                    </span>
                    {$.jsx(Button, {
                      color: "secondary",
                      size: "toolbar",
                      type: "button",
                      onClick: localEnvironmentEditorValue26,
                      children: $.jsx(FormattedMessage, {
                        ...localEnvironmentEditorO.retry,
                      }),
                    })}
                  </div>
                ) : null,
                localEnvironmentEditorValue42
                  ? $.jsx(appgenSettingsSharedRuntimeVariant7Member0014, {
                      children: (
                        <div className="flex items-center justify-between gap-3 p-3">
                          <div className="text-sm text-token-error-foreground">
                            {$.jsx(FormattedMessage, {
                              id: "settings.localEnvironments.projectInfo.error",
                              defaultMessage:
                                "Could not load project information",
                              description:
                                "Error shown when project information required to save an environment cannot be loaded",
                            })}
                          </div>
                          {$.jsx(Button, {
                            color: "secondary",
                            size: "toolbar",
                            type: "button",
                            onClick: () => {
                              Promise.all([refetch(), _refetch()]);
                            },
                            children: $.jsx(FormattedMessage, {
                              id: "settings.localEnvironments.projectInfo.retry",
                              defaultMessage: "Retry",
                              description:
                                "Button label to retry loading project information",
                            }),
                          })}
                        </div>
                      ),
                    })
                  : null,
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="local-environment-name"
                    className="text-sm font-medium text-token-text-primary"
                  >
                    {$.jsx(FormattedMessage, {
                      ...localEnvironmentEditorF.environmentName,
                    })}
                  </label>
                  <input
                    id="local-environment-name"
                    className="focus-visible:ring-token-focus w-full max-w-72 rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2"
                    value={values.name}
                    aria-describedby={
                      localEnvironmentEditorValue78.missingName
                        ? localEnvironmentEditorValue24
                        : undefined
                    }
                    aria-invalid={localEnvironmentEditorValue78.missingName}
                    onChange={(event) => {
                      let localEnvironmentEditorValue139 = event.target.value;
                      localEnvironmentEditorValue49.setFieldValue(
                        "name",
                        localEnvironmentEditorValue139,
                      );
                      localEnvironmentEditorValue77({
                        ...values,
                        name: localEnvironmentEditorValue139,
                      });
                    }}
                  />
                  {localEnvironmentEditorValue78.missingName ? (
                    <div
                      id={localEnvironmentEditorValue24}
                      className="text-xs text-token-error-foreground"
                    >
                      {$.jsx(FormattedMessage, {
                        id: "settings.localEnvironments.editor.nameRequired",
                        defaultMessage: "Enter an environment name",
                        description:
                          "Inline validation for a missing local environment name",
                      })}
                    </div>
                  ) : null}
                </div>,
              ],
            },
          ),
        })}
        {$.jsx(localEnvironmentEditorHelper9, {
          actions: $.jsx(localEnvironmentEditorR, {}),
          draft: values,
          scriptType: "setup",
          onScriptChange: localEnvironmentEditorValue82,
        })}
        {$.jsx(localEnvironmentEditorHelper9, {
          draft: values,
          scriptType: "cleanup",
          onScriptChange: localEnvironmentEditorValue82,
        })}
        {$.jsx(localEnvironmentEditorHelper8, {
          actions: values.actions,
          dropdownDisabled: localEnvironmentEditorValue48.isPending,
          incompleteActionIds:
            localEnvironmentEditorValue78.incompleteActionIds,
          onChange: (localEnvironmentEditorParam37) => {
            localEnvironmentEditorValue49.setFieldValue(
              "actions",
              localEnvironmentEditorParam37,
            );
            localEnvironmentEditorValue77({
              ...values,
              actions: localEnvironmentEditorParam37,
            });
          },
        })}
        {null}
        {localEnvironmentEditorValue80 && (
          <div className="text-sm text-token-error-foreground" role="alert">
            {$.jsx(FormattedMessage, {
              id: "settings.localEnvironments.preview.saveConflict",
              defaultMessage:
                "This environment changed on disk. Continuing will discard your unsaved edits",
              description:
                "Warning shown when resolving an environment save conflict will discard the current draft",
            })}
          </div>
        )}
        {!localEnvironmentEditorValue80 &&
          localEnvironmentEditorValue48.error != null && (
            <div className="text-sm text-token-error-foreground" role="alert">
              {$.jsx(FormattedMessage, {
                id: "settings.localEnvironments.preview.saveFailure",
                defaultMessage: "Could not save the environment. Try again",
                description:
                  "Error message when saving a local environment file fails with guidance to retry",
              })}
            </div>
          )}
        <div className="flex justify-end">
          {$.jsx(Tooltip, {
            disabled: localEnvironmentEditorValue81 == null,
            tooltipContent: localEnvironmentEditorValue81,
            children: (
              <span className="inline-flex">
                {$.jsxs(Button, {
                  "aria-busy":
                    localEnvironmentEditorValue48.isPending || undefined,
                  color: "primary",
                  size: "toolbar",
                  type: localEnvironmentEditorValue80 ? "button" : "submit",
                  disabled:
                    !localEnvironmentEditorValue80 &&
                    localEnvironmentEditorValue79 != null,
                  loading: localEnvironmentEditorValue48.isPending,
                  onClick: localEnvironmentEditorValue80
                    ? () => {
                        onDiscardConflict();
                      }
                    : undefined,
                  children: [
                    localEnvironmentEditorValue80 &&
                      $.jsx(FormattedMessage, {
                        id: "settings.localEnvironments.preview.discardAndReload",
                        defaultMessage: "Discard edits",
                        description:
                          "Button label to discard unsaved environment edits after a save conflict",
                      }),
                    !localEnvironmentEditorValue80 &&
                      localEnvironmentEditorValue48.error != null &&
                      $.jsx(FormattedMessage, {
                        id: "settings.localEnvironments.preview.retrySave",
                        defaultMessage: "Retry save",
                        description:
                          "Button label to retry saving a local environment file",
                      }),
                    !localEnvironmentEditorValue80 &&
                      localEnvironmentEditorValue48.error == null &&
                      $.jsx(FormattedMessage, {
                        id: "settings.localEnvironments.preview.save",
                        defaultMessage: "Save",
                        description:
                          "Save button label for local environment file",
                      }),
                  ],
                })}
              </span>
            ),
          })}
        </div>
      </fieldset>
    );
  };
  let localEnvironmentEditorValue52 = $.jsx(
    localEnvironmentEditorValue49.Subscribe,
    {
      selector: localEnvironmentEditorHelper11,
      children: localEnvironmentEditorValue51,
    },
  );
  return (
    <form
      className="flex flex-col gap-[var(--padding-panel)]"
      onSubmit={localEnvironmentEditorValue50}
    >
      {localEnvironmentEditorValue52}
    </form>
  );
}
function localEnvironmentEditorHelper11(localEnvironmentEditorParam40) {
  return {
    values: localEnvironmentEditorParam40.values,
    isDirty: localEnvironmentEditorParam40.isDirty,
  };
}
function localEnvironmentEditorHelper12() {
  return null;
}
function localEnvironmentEditorHelper13({
  isDirty,
  isSelectionReady,
  readError,
  selectionError,
  isSaving,
  validation,
}) {
  return isSaving
    ? "saving"
    : isSelectionReady
      ? readError
        ? "read-error"
        : validation.missingName
          ? "missing-name"
          : validation.incompleteActionIds.length > 0
            ? "incomplete-action"
            : isDirty
              ? null
              : "no-changes"
      : selectionError
        ? "project-error"
        : "loading-project";
}
function localEnvironmentEditorHelper14(localEnvironmentEditorParam5) {
  if (localEnvironmentEditorParam5 == null) return null;
  switch (localEnvironmentEditorParam5) {
    case "incomplete-action":
      return $.jsx(FormattedMessage, {
        id: "settings.localEnvironments.save.disabled.incompleteAction",
        defaultMessage: "Add both a name and command for each action",
        description:
          "Tooltip shown when save is disabled because an action is incomplete",
      });
    case "loading-project":
      return $.jsx(FormattedMessage, {
        id: "settings.localEnvironments.save.disabled.loadingProject",
        defaultMessage: "Loading project information",
        description:
          "Tooltip shown when save is disabled while project information loads",
      });
    case "missing-name":
      return $.jsx(FormattedMessage, {
        id: "settings.localEnvironments.save.disabled.name",
        defaultMessage: "Add an environment name to save",
        description:
          "Tooltip shown when save is disabled because the name is missing",
      });
    case "no-changes":
      return $.jsx(FormattedMessage, {
        id: "settings.localEnvironments.save.disabled.noChanges",
        defaultMessage: "No changes to save",
        description:
          "Tooltip shown when save is disabled because there are no changes",
      });
    case "project-error":
      return $.jsx(FormattedMessage, {
        id: "settings.localEnvironments.save.disabled.projectError",
        defaultMessage: "Retry loading project information to save",
        description:
          "Tooltip shown when save is disabled because project information failed to load",
      });
    case "read-error":
      return $.jsx(FormattedMessage, {
        id: "settings.localEnvironments.save.disabled.readError",
        defaultMessage: "Retry loading the environment before saving",
        description:
          "Tooltip shown when save is disabled because the environment could not be read",
      });
    case "saving":
      return $.jsx(FormattedMessage, {
        id: "settings.localEnvironments.save.disabled.saving",
        defaultMessage: "Saving…",
        description:
          "Tooltip shown when save is disabled because a save is already in progress",
      });
  }
}
var localEnvironmentEditorValue21,
  localEnvironmentEditorValue22,
  localEnvironmentEditorValue23,
  $,
  localEnvironmentEditorValue24;
export const localEnvironmentEditorN = createLazyEsmInitializer(() => {
  localEnvironmentEditorValue21 = currentReactAliasLoweruLowern();
  initReactFormRuntime();
  currentQueryRpcAliasLowerxLowerl();
  localEnvironmentEditorValue22 = toEsm(currentReactAliasLowerk(), 1);
  currentReactAliasLowerx();
  currentQueryRpcAliasLowerw();
  localEnvironmentEditorValue23 = toEsm(currentReactAliasLowerdLowern(), 1);
  initReactIntlRuntimeChunk();
  initButtonRuntime();
  firstRunAppgenRuntimeVariant2Member0011();
  lodashMemoize();
  initTooltipRuntime();
  businessCheckoutSharedMember0162();
  businessCheckoutSharedInitializer0363();
  pullRequestRoutRuntimeVariant12Member0007();
  pullRequestCodeReviewNewTRuntimeMember0105();
  localEnvironmentEditorValue15();
  localEnvironmentEditorH();
  localEnvironmentEditorD();
  localEnvironmentEditorL();
  localEnvironmentEditorA();
  businessCheckoutSharedMember0209();
  currentReactAliasLowerb();
  appgenSettingsSharedRuntimeVariant7Member0011();
  appgenSettingsSharedRuntimeVariant7Member0008();
  windowContinuationWarningMessage();
  newThreadOnboardingSharedRuntimeVariant18Member0006();
  _t();
  localEnvironmentEditorI();
  $ = currentReactAliasLowerzLowert();
  localEnvironmentEditorValue24 = "local-environment-name-error";
});
export {
  localEnvironmentEditorUnderscore,
  localEnvironmentEditorA,
  localEnvironmentEditorB,
  localEnvironmentEditorC,
  localEnvironmentEditorD,
  localEnvironmentEditorF,
  localEnvironmentEditorG,
  localEnvironmentEditorH,
  localEnvironmentEditorI,
  localEnvironmentEditorL,
  localEnvironmentEditorM,
  localEnvironmentEditorO,
  localEnvironmentEditorP,
  localEnvironmentEditorR,
  localEnvironmentEditorS,
  localEnvironmentEditorU,
  localEnvironmentEditorV,
  localEnvironmentEditorX,
  localEnvironmentEditorY,
};
