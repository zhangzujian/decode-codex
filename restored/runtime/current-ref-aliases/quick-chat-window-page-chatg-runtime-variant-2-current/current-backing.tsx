// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~hotkey-window-thread-page~quick-chat-window-page~chatg~nejl6ozr-CW_aiF_H.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer } from "../rolldown-runtime";
import {
  currentQueryRpcAliasLowerb,
  currentQueryRpcAliasLowercLowerl,
  currentQueryRpcAliasLowerdLowerc,
  currentQueryRpcAliasLowerdLowerl,
  currentQueryRpcAliasLowereLowerl,
  currentQueryRpcAliasLowerlLowerl,
  currentQueryRpcAliasLowermLowerc,
  currentQueryRpcAliasLowern,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasLowerpLoweri,
  currentQueryRpcAliasUpperRLowerc,
  currentQueryRpcAliasLowersLowerl,
  currentQueryRpcAliasLowertLowerl,
  currentQueryRpcAliasLowervLowerl,
  currentQueryRpcAliasLowerw,
  currentQueryRpcAliasUpperWLowero,
  currentQueryRpcAliasLowerx,
  currentQueryRpcAliasUpperXLowerc,
} from "../app-initial-query-rpc-runtime";
import {
  getPersistedAtomValue,
  initPersistedAtomStoreRuntime,
} from "../../current-app-initial/persisted-ui-runtime-entry";
import {
  currentHostServicesAliasLowera,
  currentHostServicesAliasUpperD,
  currentHostServicesAliasLoweri,
  currentHostServicesAliasUpperO,
} from "../app-initial-host-services-runtime";
import {
  windowContinuationRetryDelayMs,
  windowContinuationWarningMessage,
  initLocalHostKindRuntime,
  initGoalPromptDependencies,
} from "../current-app-shared-current";
import { pluginDetailRuntimeMember0013 } from "../plugin-detail-runtime-current";
import {
  pullRequestRoutRuntimeVariant3Member0028,
  pullRequestRoutRuntimeVariant3Member0036,
} from "../pull-request-rout-runtime-variant-3-current";
import {
  appgenSettingsSharedRuntimeMember0004,
  appgenSettingsSharedRuntimeFunction0005,
  appgenSettingsSharedRuntimeMember0006,
  appgenSettingsSharedRuntimeFunction0013,
} from "../appgen-settings-shared-runtime-current";
import {
  businessCheckoutSharedMember0476,
  businessCheckoutSharedInitializer0498,
  businessCheckoutSharedMember0049,
  businessCheckoutSharedInitializer0506,
  businessCheckoutSharedMember0071,
  serviceTierPriorityServiceTierMessages,
  businessCheckoutSharedMember0082,
  businessCheckoutSharedMember0099,
  businessCheckoutSharedMember0566,
  businessCheckoutSharedMember0583,
  businessCheckoutSharedMember0587,
  businessCheckoutSharedMember0601,
  businessCheckoutSharedInitializer0605,
  businessCheckoutSharedFunction0149,
  imagePickerSchemaCapabilities,
  businessCheckoutSharedMember0669,
  businessCheckoutSharedMember0686,
  computerUseComputerCaptureFunction,
  businessCheckoutSharedMember0463,
  businessCheckoutSharedMember0737,
  businessCheckoutSharedMember0315,
  schemaFunction0521,
  businessCheckoutSharedMember0467,
  businessCheckoutSharedMember0821,
  businessCheckoutSharedMember0372,
  businessCheckoutSharedMember0838,
  businessCheckoutSharedMember0872,
  businessCheckoutSharedMember0889,
} from "../business-checkout-shared-current";
import {
  hostConfigByIdSignal,
  initWorkspaceConfigSignalsRuntime,
} from "../business-checkout-config/entry";
import { pluginDetailPageNewThreadPanelPageRuntimeMember0025 } from "../plugin-detail-page-new-thread-panel-page-runtime-current";
import {
  newThreadOnboardingSharedRuntimeMember0014,
  newThreadOnboardingSharedRuntimeFunction0028,
} from "../new-thread-onboarding-shared-runtime-current";
import {
  newThreadOnboardingSharedRuntimeVariant22Member0016,
  newThreadOnboardingSharedRuntimeVariant22Member0004,
} from "../new-thread-onboarding-shared-runtime-variant-22-current";
import {
  newThreadOnboardingSharedRuntimeVariant15Member0003,
  newThreadOnboardingSharedRuntimeVariant15Member0020,
} from "../app-initial~artifact-tab-content.electron~app-main~new-thread-panel-page~onboarding-page~se~ismvjv52";
export async function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrO({
  config,
  model,
  prompt,
  additionalDeveloperInstructions,
  scope,
  sourceThreadId,
  target,
  thinking,
}) {
  if (config != null && sourceThreadId != null)
    throw Error(
      "createThread config is not supported for delegated thread creation",
    );
  if (target.type !== "projectless" && target.environment.type === "worktree") {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue17,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue18;
    if (target.type === "project") {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue32 =
        await appgenSettingsSharedRuntimeFunction0013({
          projectId: target.projectId,
          prompt,
        });
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue32?.projectlessOutputDirectory !=
        null
      )
        throw Error(
          "Worktree threads require a project with exactly one directory",
        );
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue32 ==
        null
      )
        throw Error("Unknown local project");
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue17 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue32.cwd;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue18 =
        newThreadOnboardingSharedRuntimeVariant15Member0003({
          type: "assignment",
          assignment:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue32?.projectAssignment,
          executionHostId: windowContinuationRetryDelayMs,
        });
    } else {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue17 =
        target.path;
      let { roots } = await currentQueryRpcAliasLowern(
        "workspace-root-options",
        {
          params: {
            hostId: target.hostId,
          },
        },
      );
      if (
        !roots.includes(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue17,
        )
      )
        throw Error(
          `Unknown remote project path: ${appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue17}\nSaved remote paths:\n${roots.join("\n")}`,
        );
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue18 =
        newThreadOnboardingSharedRuntimeVariant15Member0003({
          type: "remote-project",
          projectId: target.projectId,
          hostId: target.hostId,
          path: target.path,
        });
    }
    return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper2(
      {
        hostId:
          target.type === "remoteProject"
            ? target.hostId
            : windowContinuationRetryDelayMs,
        model,
        projectAssignment:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue18,
        projectPath:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue17,
        prompt,
        additionalDeveloperInstructions,
        scope,
        sourceThreadId,
        startingState: target.environment.startingState,
        thinking,
      },
    );
  }
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper1(
    {
      config,
      model,
      prompt,
      additionalDeveloperInstructions,
      scope,
      sourceThreadId,
      target,
      thinking,
    },
  );
}
async function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper1({
  config,
  startWithoutFirstTurn,
  model,
  prompt,
  additionalDeveloperInstructions,
  scope,
  sourceThreadId,
  target,
  thinking,
}) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue6,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue7,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue8,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue9,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue10,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue11 =
      windowContinuationRetryDelayMs;
  switch (target.type) {
    case "project": {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue36 =
        await appgenSettingsSharedRuntimeFunction0013({
          projectId: target.projectId,
          prompt,
        });
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue36 ==
        null
      )
        throw Error("Unknown local project");
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue6 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue36.cwd;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue8 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue36.workspaceRoots;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue9 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue36.projectlessOutputDirectory;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue10 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue36.projectAssignment;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue7 =
        "project";
      break;
    }
    case "remoteProject":
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue11 =
        target.hostId;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue6 =
        target.path;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue8 =
        [target.path];
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue7 =
        "project";
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue10 =
        {
          projectKind: "remote",
          projectId: target.projectId,
          path: target.path,
          hostId: target.hostId,
          pendingCoreUpdate: false,
        };
      break;
    case "projectless": {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue37 =
        await appgenSettingsSharedRuntimeFunction0005(["~"], {
          directoryName: target.directoryName,
          prompt,
        });
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue37.cwd ==
        null
      )
        throw Error("Missing projectless thread cwd");
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue6 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue37.cwd;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue7 =
        "projectless";
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue8 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue37.workspaceRoots;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue9 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue37.projectlessOutputDirectory;
      break;
    }
  }
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue12 =
      await appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper4(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue11,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue6,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue8,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper7(
          scope,
          sourceThreadId,
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue11,
        ),
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue13 =
      {
        type: "text",
        text: prompt,
        text_elements: [],
      },
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue14 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper11(
        model,
        thinking,
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue15 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper12(
        model,
        thinking,
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue16 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper6(
        scope,
        sourceThreadId,
      );
  return {
    threadId: await currentHostServicesAliasUpperO("start-conversation", {
      hostId:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue11,
      input:
        sourceThreadId == null
          ? startWithoutFirstTurn == null
            ? [
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue13,
              ]
            : []
          : initLocalHostKindRuntime({
              sourceThreadId,
              input: prompt,
            }),
      cwd: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue6,
      workspaceRoots:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue8,
      collaborationMode:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue14,
      serviceTier: await pullRequestRoutRuntimeVariant3Member0036(
        scope,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue11,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue14
          ?.settings.model ?? null,
      ),
      threadSource: sourceThreadId == null ? "user" : "subagent",
      permissions:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue12,
      approvalsReviewer:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue12.approvalsReviewer,
      additionalDeveloperInstructions,
      config:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue15 ==
        null
          ? config
          : {
              ...config,
              ...appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue15,
            },
      projectAssignment:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue10,
      workspaceKind:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue7,
      projectlessOutputDirectory:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue9,
      serviceName:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue16,
      ...(startWithoutFirstTurn == null
        ? {}
        : {
            initialTitle: startWithoutFirstTurn.title,
            skipAutoTitleGeneration: true,
          }),
    }),
    ...(appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue7 ===
    "projectless"
      ? {
          projectlessOutputDirectory:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue9,
        }
      : {}),
  };
}
async function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper2({
  hostId,
  model,
  projectAssignment,
  projectPath,
  prompt,
  additionalDeveloperInstructions,
  scope,
  sourceThreadId,
  startingState,
  thinking,
}) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue19 =
      [
        {
          type: "text",
          text: prompt,
          text_elements: [],
        },
      ],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue20 =
      sourceThreadId == null
        ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue19
        : initLocalHostKindRuntime({
            sourceThreadId,
            input: prompt,
          }),
    [
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue21,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue22,
    ] = await Promise.all([
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper5(
        {
          input:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue20,
          hostId,
          model,
          projectAssignment,
          projectPath,
          additionalDeveloperInstructions,
          scope,
          sourcePermissionSelection:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper7(
              scope,
              sourceThreadId,
              hostId,
            ),
          sourceServiceName:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper6(
              scope,
              sourceThreadId,
            ),
          threadSource: sourceThreadId == null ? "user" : "subagent",
          thinking,
        },
      ),
      startingState ??
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper3(
          scope,
          hostId,
          projectPath,
        ),
    ]);
  return {
    clientThreadId: newThreadOnboardingSharedRuntimeFunction0028({
      hostId,
      label: newThreadOnboardingSharedRuntimeVariant22Member0004(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue19,
      ),
      sourceWorkspaceRoot: projectPath,
      startingState:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue22,
      localEnvironmentConfigPath: null,
      launchMode: "start-conversation",
      prompt,
      startConversationParamsInput:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue21,
      sourceConversationId: null,
      sourceCollaborationMode: null,
    }).clientThreadId,
  };
}
async function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper3(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam1,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam2,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam3,
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue27 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam1.get(
        hostConfigByIdSignal,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam2,
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue28 =
      await computerUseComputerCaptureFunction("git").request({
        method: "stable-metadata",
        params: {
          cwd: currentQueryRpcAliasLowerpLoweri(
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam3,
          ),
          hostConfig:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue27,
          operationSource: "worktree_pending_create",
        },
      });
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue28 ==
    null
  )
    return {
      type: "branch",
      branchName: "main",
    };
  let { branch } = await computerUseComputerCaptureFunction("git").request({
    method: "default-branch",
    params: {
      root: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue28.root,
      hostConfig:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue27,
      operationSource: "worktree_pending_create",
    },
  });
  return {
    type: "branch",
    branchName: branch ?? "main",
  };
}
async function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper4(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam6,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam7,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam8,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam9,
) {
  let { config } = await currentHostServicesAliasUpperO(
      "read-config-for-host",
      {
        hostId:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam6,
        includeLayers: false,
        cwd: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam7,
        priority: "critical",
      },
    ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue29 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper9(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam7,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam9,
      );
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue29?.sourceCwd ===
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam7
  )
    return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper10(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue29.permissions,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam8,
    );
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue30 =
      currentQueryRpcAliasLowerdLowerc(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper8(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam6,
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue29,
        ),
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam8,
        config,
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue31 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue29?.permissionProfileId;
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue31 !=
      null &&
      ((appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue30.activePermissionProfile =
        {
          extends: null,
          id: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue31,
        }),
      (appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue30.runtimeWorkspaceRoots =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam8)),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue30
  );
}
async function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper5({
  hostId,
  input,
  model,
  projectAssignment,
  projectPath,
  additionalDeveloperInstructions,
  scope,
  sourcePermissionSelection,
  sourceServiceName,
  threadSource,
  thinking,
}) {
  let { config } = await currentHostServicesAliasUpperO(
      "read-config-for-host",
      {
        hostId,
        includeLayers: false,
        cwd: projectPath,
        priority: "critical",
      },
    ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue23 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper11(
        model,
        thinking,
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue24 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper12(
        model,
        thinking,
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue25 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper9(
        projectPath,
        sourcePermissionSelection,
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue26 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue25?.permissionProfileId;
  return {
    input,
    workspaceRoots: [projectPath],
    cwd: projectPath,
    fileAttachments: [],
    addedFiles: [],
    agentMode:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper8(
        hostId,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue25,
      ),
    permissionProfileId:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue26 ??
      undefined,
    shouldSendPermissionOverrides: true,
    model: null,
    serviceTier: await pullRequestRoutRuntimeVariant3Member0036(
      scope,
      hostId,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue23
        ?.settings.model ?? null,
    ),
    reasoningEffort: null,
    collaborationMode:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue23,
    config: schemaFunction0521(config),
    ...(appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue24 ==
    null
      ? {}
      : {
          configOverrides:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue24,
        }),
    ...(additionalDeveloperInstructions == null
      ? {}
      : {
          additionalDeveloperInstructions,
        }),
    threadSource,
    workspaceKind: "project",
    projectAssignment,
    serviceName: sourceServiceName,
  };
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper6(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam64,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam65,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam65 ==
    null
    ? undefined
    : appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam64.get(
        businessCheckoutSharedMember0082,
        currentQueryRpcAliasUpperWLowero(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam65,
        ),
      );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper7(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam10,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam11,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam12,
) {
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam11 ==
    null
  )
    return null;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue33 =
    currentQueryRpcAliasUpperWLowero(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam11,
    );
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam10.get(
      businessCheckoutSharedMember0099,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue33,
    ) !==
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam12
  )
    return null;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue34 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam10.get(
      businessCheckoutSharedMember0315,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue33,
    );
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue34 ==
    null
  )
    return null;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue35 =
    currentQueryRpcAliasLowermLowerc(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue34,
    );
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue35 ==
    null
    ? null
    : {
        agentMode:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue35,
        permissions:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue34,
        permissionProfileId:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue34
            .activePermissionProfile?.id ?? null,
        sourceCwd:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam10.get(
            businessCheckoutSharedMember0049,
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue33,
          ),
      };
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper8(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam62,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam63,
) {
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam63?.agentMode ??
    getPersistedAtomValue("agent-mode-by-host-id", {})[
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam62
    ] ??
    "auto"
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper9(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam13,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14,
) {
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14 ==
    null
  )
    return null;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue40 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14.permissionProfileId;
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14.sourceCwd ===
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam13
    ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14
    : appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14.agentMode ===
          "custom" ||
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14.agentMode ===
          "guardian-approvals"
      ? null
      : appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue40?.startsWith(
            ":",
          ) === true
        ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam14
        : null;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper10(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam31,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam32,
) {
  return {
    ...appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam31,
    runtimeWorkspaceRoots: businessCheckoutSharedMember0587(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam31.runtimeWorkspaceRoots ??
        [],
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam32,
    ),
    sandboxPolicy: businessCheckoutSharedMember0467(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam31.sandboxPolicy,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam32,
    ),
  };
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper11(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam20,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam21,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam20 ==
    null
    ? null
    : {
        mode: "default",
        settings: {
          model:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam20,
          reasoning_effort:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam21 ??
            "medium",
          developer_instructions: null,
        },
      };
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper12(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam60,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam61,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam60 ==
    null &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam61 !=
      null
    ? {
        model_reasoning_effort:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam61,
      }
    : null;
}
export const appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrK =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    businessCheckoutSharedFunction0149();
    currentHostServicesAliasUpperD();
    newThreadOnboardingSharedRuntimeVariant22Member0016();
    businessCheckoutSharedInitializer0506();
    pullRequestRoutRuntimeVariant3Member0028();
    pluginDetailPageNewThreadPanelPageRuntimeMember0025();
    pluginDetailRuntimeMember0013();
    initGoalPromptDependencies();
    appgenSettingsSharedRuntimeMember0006();
    appgenSettingsSharedRuntimeMember0004();
    initWorkspaceConfigSignalsRuntime();
    windowContinuationWarningMessage();
    businessCheckoutSharedInitializer0605();
    initPersistedAtomStoreRuntime();
    currentQueryRpcAliasLowero();
    businessCheckoutSharedMember0476();
    newThreadOnboardingSharedRuntimeVariant15Member0020();
    newThreadOnboardingSharedRuntimeMember0014();
  });
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrE(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam57,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper14(
    {
      action:
        businessCheckoutSharedMember0601.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_STARTED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam57,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrH(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam41,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam42,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper14(
    {
      action:
        businessCheckoutSharedMember0601.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_COMPLETED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam41,
      selectedTask:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam42,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrW(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam43,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam44,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper14(
    {
      action:
        businessCheckoutSharedMember0601.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_SKIPPED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam43,
      selectedTask:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam44,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrT(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam24,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam25,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper14(
    {
      action:
        businessCheckoutSharedMember0601.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_FAILED,
      failureKind:
        businessCheckoutSharedMember0686.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam24,
      selectedTask:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam25,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrM(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam37,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam38,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper16(
    {
      accessType:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper18(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam38,
        ),
      action:
        businessCheckoutSharedMember0669.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_STARTED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam37,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam38,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrP(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam33,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam34,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper16(
    {
      accessType:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper18(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam34,
        ),
      action:
        businessCheckoutSharedMember0669.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_REQUESTED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam33,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam34,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrD(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam35,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam36,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper16(
    {
      accessType:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper18(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam36,
        ),
      action:
        businessCheckoutSharedMember0669.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_COMPLETED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam35,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam36,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrF(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam39,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam40,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper16(
    {
      accessType:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper18(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam40,
        ),
      action:
        businessCheckoutSharedMember0669.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_DENIED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam39,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam40,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrB(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam55,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam56,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper15(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam55,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam56,
    businessCheckoutSharedMember0686.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_HOST_SERVICE_UNAVAILABLE,
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrS(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam58,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam59,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper15(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam58,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam59,
    businessCheckoutSharedMember0686.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_PLUGIN_UNAVAILABLE,
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrX(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam15,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam16,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam17,
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue41 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue1.get(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam15.node,
    );
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue41 ??
    ((appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue41 =
      new Set()),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue1.set(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam15.node,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue41,
    ));
  !appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue41.has(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam16,
  ) &&
    (appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue41.add(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam16,
    ),
    currentQueryRpcAliasLowerx.info(
      "Conversational onboarding plugin task hidden",
      {
        safe: {
          pluginName:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam17,
          task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam16,
        },
      },
    ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrS(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam15,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam16,
    ));
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrY(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam49,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam50,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper17(
    {
      action:
        businessCheckoutSharedMember0566.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_STARTED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam49,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam50,
    },
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper13(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam45,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam46,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper17(
    {
      action:
        businessCheckoutSharedMember0566.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_COMPLETED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam45,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam46,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrV(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam26,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam27,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper17(
    {
      action:
        businessCheckoutSharedMember0566.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
      failureKind:
        businessCheckoutSharedMember0686.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam26,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam27,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrUnderscore(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam22,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam23,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper17(
    {
      action:
        businessCheckoutSharedMember0566.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
      failureKind:
        businessCheckoutSharedMember0686.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_COMPLETION_MISSING,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam22,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam23,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrG(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam47,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam48,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper17(
    {
      action:
        businessCheckoutSharedMember0566.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_CANCELLED,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam47,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam48,
    },
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper14({
  action,
  failureKind,
  scope,
  selectedTask,
}) {
  imagePickerSchemaCapabilities(scope, businessCheckoutSharedMember0583, {
    action,
    failureKind,
    taskType:
      selectedTask == null
        ? undefined
        : appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper19(
            selectedTask,
          ),
  });
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper15(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam28,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam29,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam30,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper16(
    {
      accessType:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper18(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam29,
        ),
      action:
        businessCheckoutSharedMember0669.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FAILED,
      failureKind:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam30,
      scope:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam28,
      task: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam29,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrC(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam53,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam54,
) {
  imagePickerSchemaCapabilities(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam53,
    businessCheckoutSharedMember0838,
    {
      action:
        businessCheckoutSharedMember0463.CODEX_CONVERSATIONAL_ONBOARDING_ROLE_ACTION_SELECTED,
      roleType:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam54,
    },
  );
}
export function _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrD(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam51,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam52,
) {
  imagePickerSchemaCapabilities(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam51,
    businessCheckoutSharedInitializer0498,
    {
      action:
        businessCheckoutSharedMember0889.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_SELECTED,
      taskType:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper19(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam52,
        ),
    },
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper16({
  accessType,
  action,
  failureKind,
  scope,
  task,
}) {
  imagePickerSchemaCapabilities(scope, businessCheckoutSharedMember0821, {
    accessType,
    action,
    failureKind,
    taskType:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper19(
        task,
      ),
  });
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper17({
  action,
  failureKind,
  scope,
  task,
}) {
  imagePickerSchemaCapabilities(scope, businessCheckoutSharedMember0737, {
    action,
    failureKind,
    taskType:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper19(
        task,
      ),
  });
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper18(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam5,
) {
  switch (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam5
  ) {
    case "desktop_note":
      return serviceTierPriorityServiceTierMessages.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_DESKTOP;
    case "csv_chart":
      return serviceTierPriorityServiceTierMessages.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CSV_PICKER;
    case "hold_next_free_hour":
      return serviceTierPriorityServiceTierMessages.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CALENDAR_APP;
    case "send_message_to_self":
      return serviceTierPriorityServiceTierMessages.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_MESSAGING_APP;
    default:
      return serviceTierPriorityServiceTierMessages.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_UNSPECIFIED;
  }
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper19(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam4,
) {
  switch (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam4
  ) {
    case "desktop_note":
      return businessCheckoutSharedMember0872.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_DESKTOP_NOTE;
    case "csv_chart":
      return businessCheckoutSharedMember0872.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_CSV_CHART;
    case "hold_next_free_hour":
      return businessCheckoutSharedMember0872.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_HOLD_NEXT_FREE_HOUR;
    case "send_message_to_self":
      return businessCheckoutSharedMember0872.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_SEND_MESSAGE_TO_SELF;
    default:
      return businessCheckoutSharedMember0872.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_UNSPECIFIED;
  }
}
var appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue1,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrU =
    createLazyEsmInitializer(() => {
      businessCheckoutSharedMember0372();
      businessCheckoutSharedMember0071();
      currentQueryRpcAliasLowerb();
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue1 =
        new WeakMap();
    });
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrL(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam18,
  { sourceHostId, sourceThreadId } = {},
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue42 =
    currentHostServicesAliasLoweri.appActions;
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue42 ==
    null
  )
    throw Error("App actions are unavailable in this host");
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue42.runInPrimaryWindow(
    {
      action:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam18,
      sourceHostId,
      sourceThreadId,
    },
  );
}
export const _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrC =
  createLazyEsmInitializer(() => {
    currentHostServicesAliasLowera();
  });
export function _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrS(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam68,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam69,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue4.set(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam68,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam69,
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrR(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam67,
) {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue4.delete(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam67,
  );
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue5.add(
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam67,
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrI({
  argumentsValue,
  conversationId,
  scope,
}) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue44 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper20(
      {
        argumentsValue,
        conversationId,
      },
    );
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue44 ==
    null
    ? null
    : (appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper13(
        scope,
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue44.selectedTask,
      ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue44.completion);
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrHelper20({
  argumentsValue,
  conversationId,
}) {
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue5.has(
      conversationId,
    )
  )
    return null;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue38 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue4.get(
      conversationId,
    );
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue38 ==
    null
  )
    return null;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue39 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue2.safeParse(
      argumentsValue,
    );
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue39.success
    ? (appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue4.delete(
        conversationId,
      ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue5.add(
        conversationId,
      ),
      {
        completion:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue39.data,
        selectedTask:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue38.selectedTask,
      })
    : null;
}
export function _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrO(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam19,
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue43 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam19?.find(
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam70,
      ) =>
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam70.type ===
        "inputText",
    )?.text;
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue43 ==
    null
  )
    return null;
  try {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue45 =
        JSON.parse(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue43,
        ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue46 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue3.safeParse(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue45,
        );
    return appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue46.success
      ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue46
          .data.result
      : null;
  } catch {
    return null;
  }
}
var appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrN,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue2,
  _t,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue3,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue4,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue5,
  _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrT;
export const appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrA =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasUpperRLowerc();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrU();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrN =
      "complete_conversational_onboarding_task";
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue2 =
      currentQueryRpcAliasUpperXLowerc("outcome", [
        currentQueryRpcAliasLowercLowerl({
          outcome: currentQueryRpcAliasLowertLowerl("completed"),
          output: currentQueryRpcAliasLowerlLowerl()
            .trim()
            .min(1)
            .describe(
              "A concise, user-facing summary of the completed result. Follow any task-specific output instructions.",
            ),
          url: currentQueryRpcAliasLowerlLowerl()
            .url()
            .describe("The URL of the created or affected resource."),
        }),
        currentQueryRpcAliasLowercLowerl({
          outcome: currentQueryRpcAliasLowertLowerl("not_completed"),
          output: currentQueryRpcAliasLowerlLowerl()
            .trim()
            .min(1)
            .describe(
              "A friendly, first-person, user-facing sentence explaining that the goal could not be completed. Omit technical details, tool names, raw constraints, time zones, and error text.",
            ),
        }),
      ]);
    _t = currentQueryRpcAliasLowercLowerl({
      outcome: currentQueryRpcAliasLowertLowerl("completed"),
      url: currentQueryRpcAliasLowerlLowerl().url(),
    }).transform(
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam66,
      ) => ({
        ...appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrParam66,
        output: "",
      }),
    );
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue3 =
      currentQueryRpcAliasLowercLowerl({
        accepted: currentQueryRpcAliasLowertLowerl(true),
        result: currentQueryRpcAliasLowerdLowerl([
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue2,
          _t,
        ]),
      });
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue4 =
      new Map();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue5 =
      new Set();
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrT =
      {
        name: appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrN,
        description:
          "Report a terminal plugin-based conversational onboarding task outcome before the final response. Use completed with a concise, user-facing output and the created or affected resource URL when the intended action happened. Use not_completed with a friendly, first-person, user-facing sentence when execution succeeded but the intended result could not be achieved.",
        inputSchema: {
          type: "object",
          ...currentQueryRpcAliasLowersLowerl(
            currentQueryRpcAliasLowerlLowerl(),
            currentQueryRpcAliasLowereLowerl(),
          ).parse(
            currentQueryRpcAliasLowervLowerl(
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrValue2,
            ),
          ),
        },
      };
  });
export {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrS,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrN,
  _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrT,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgNejl6ozrU,
};
