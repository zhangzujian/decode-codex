// Restored from ref/webview/assets/app-initial~app-main~new-thread-panel-page~onboarding-page~select-workspace-page~login-rout~ed992cau-B1vrGsWe.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer } from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasLowerdLowert,
  currentReactAliasUpperILowert,
  currentReactAliasLowerkLowert,
  currentReactAliasUpperSLowert,
  currentReactAliasLowerx,
  currentReactAliasLowerxLowert,
  currentReactAliasLowery,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasUpperC,
  currentQueryRpcAliasLowerdLowerc,
  currentQueryRpcAliasLoweri,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasUpperS,
  currentQueryRpcAliasLowerw,
} from "../app-initial-query-rpc-runtime";
import {
  defineMessages,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  initPersistedAtomRegistryRuntime,
  createPersistedAtomRegistryEntry,
  getPersistedAtomValue,
  initPersistedAtomStoreRuntime,
} from "../../current-app-initial/persisted-ui-runtime-entry";
import {
  notebookPreviewRuntimeVariant4Member0034,
  notebookPreviewRuntimeVariant4Member0073,
} from "../notebook-preview-runtime-variant-4";
import {
  initLanguagePreferenceRuntime,
  initGoalSlashCommandRuntime,
  currentAppInitialSharedFunction0022,
  initWindowContinuationRuntime,
} from "../current-app-shared-current";
import {
  businessCheckoutSharedMember0071,
  threadRuntimeWorkspaceRootsFallbackFunction,
  currentAppInitialSharedMember0863,
  imagePickerSchemaCapabilities,
  businessCheckoutSharedMember0679,
  businessCheckoutSharedMember0730,
  businessCheckoutSharedMember0372,
} from "../business-checkout-shared-current";
import {
  initWorkspaceConfigSignalsRuntime,
  localWorkspaceRootOptionsQuery,
} from "../business-checkout-config/entry";
import {
  businessCheckoutSharedRuntimeVariant5Member0029,
  businessCheckoutSharedRuntimeVariant5Member0035,
} from "../business-checkout-shared-runtime-variant-5";
import {
  settingsCommandSharedRuntimeMember0061,
  settingsCommandSharedRuntimeFunction0024,
} from "../settings-command-shared-runtime-current";
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauLt({
  agentMode,
  permissionProfileId,
  shouldSendPermissionOverrides,
  workspaceRoots,
  config,
  configOverrides,
  input,
  commentAttachments,
  collaborationMode,
  serviceTier,
  serviceName,
  cwd,
  fileAttachments,
  addedFiles,
  memoryPreferences,
  mode,
  threadSource,
  threadStartKind,
  workspaceKind = "project",
  projectlessOutputDirectory,
  projectAssignment,
  baseInstructions:
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam1,
  additionalDeveloperInstructions,
}) {
  if (workspaceKind === "projectless" && projectlessOutputDirectory == null)
    throw Error("Projectless conversations require an output directory");
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue8 =
      currentAppInitialSharedFunction0022([...fileAttachments, ...addedFiles]),
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue9 =
      shouldSendPermissionOverrides === false
        ? null
        : currentQueryRpcAliasLowerdLowerc(agentMode, workspaceRoots, config);
  return (
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue9 !=
      null &&
      permissionProfileId != null &&
      ((appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue9.activePermissionProfile =
        {
          id: permissionProfileId,
          extends: null,
        }),
      (appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue9.runtimeWorkspaceRoots =
        workspaceRoots)),
    {
      input,
      commentAttachments,
      workspaceRoots,
      collaborationMode,
      multiAgentMode: initLanguagePreferenceRuntime,
      serviceTier,
      ...(serviceName === undefined
        ? {}
        : {
            serviceName,
          }),
      ...(appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue9 ==
      null
        ? {
            useAppServerPermissionDefault: true,
          }
        : {
            permissions:
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue9,
            approvalsReviewer:
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue9.approvalsReviewer,
          }),
      cwd,
      attachments:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue8,
      workspaceKind,
      projectAssignment,
      mode,
      threadSource,
      threadStartKind,
      config: configOverrides,
      ...(workspaceKind === "projectless"
        ? {
            projectlessOutputDirectory,
          }
        : {}),
      memoryPreferences,
      baseInstructions:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam1,
      additionalDeveloperInstructions,
    }
  );
}
var appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauOt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauSt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauAt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauCt =
    createLazyEsmInitializer(() => {
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauOt =
        "last_completed_onboarding";
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauSt =
        "electron:onboarding-projectless-completed";
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauAt =
        "electron:onboarding-conversational-completed-by-account-id";
    });
export const appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauUt =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    initWindowContinuationRuntime();
    initGoalSlashCommandRuntime();
  });
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauRt({
  hideFirstNewThreadOnboardingPromos,
  pathname,
}) {
  return hideFirstNewThreadOnboardingPromos && pathname === "/";
}
function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper1({
  projectlessOnboardingCompleted,
  workspaceRootsCount,
  workspaceRootsIsLoading,
}) {
  return projectlessOnboardingCompleted == null
    ? null
    : projectlessOnboardingCompleted
      ? true
      : workspaceRootsIsLoading
        ? null
        : workspaceRootsCount > 0;
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauIt(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam60,
) {
  return (
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam60 !=
      null &&
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam60 *
      1e3 <
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue3
  );
}
var appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauG,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauK,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauY,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue1,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauDollar,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauU,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauNt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauEt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue2,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauJ,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauQ,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue3,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauQ,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauZ,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauX,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauTt =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerkLowert();
      currentReactAliasLowerx();
      settingsCommandSharedRuntimeMember0061();
      currentReactAliasLowerb();
      initWorkspaceConfigSignalsRuntime();
      notebookPreviewRuntimeVariant4Member0034();
      initPersistedAtomStoreRuntime();
      initPersistedAtomRegistryRuntime();
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauCt();
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauG =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-override",
          "auto",
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauK =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-welcome-pending",
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauY =
        notebookPreviewRuntimeVariant4Member0073(
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauSt,
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue1 =
        createPersistedAtomRegistryEntry(
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauSt,
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauDollar =
        currentReactAliasLowerdLowert(currentReactAliasLowery, ({ get }) => {
          let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue22 =
              get(
                appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue1,
              ),
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue23 =
              get(localWorkspaceRootOptionsQuery);
          return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper1(
            {
              projectlessOnboardingCompleted:
                appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue22,
              workspaceRootsCount:
                appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue23
                  .data?.roots.length ?? 0,
              workspaceRootsIsLoading:
                appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue23.data ==
                  null &&
                appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue23.isLoading,
            },
          );
        });
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauU =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-hide-first-new-thread-promos",
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauNt =
        createPersistedAtomRegistryEntry(
          "electron:onboarding-mail-provider-debug-override",
          null,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauEt =
        createPersistedAtomRegistryEntry(
          "electron:onboarding-hide-google-tiles-debug-override",
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue2 =
        notebookPreviewRuntimeVariant4Member0073(
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauOt,
          null,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW =
        currentReactAliasUpperILowert(
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam62,
          ) =>
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam62(
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue2,
            ) ?? getPersistedAtomValue("last_completed_onboarding", null),
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam54,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam55,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam56,
          ) => {
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam56 !=
              null && settingsCommandSharedRuntimeFunction0024();
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam55(
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue2,
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam56,
            );
          },
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauJ =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-primary-runtime-install-requested",
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauQ =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-primary-runtime-install-ready",
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue3 =
        new Date(2026, 3, 30).getTime();
      _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauQ =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-workspace-experiment-assignment",
          null,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauZ =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-workspace-autolaunch-applied",
          false,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauX =
        notebookPreviewRuntimeVariant4Member0073(
          "electron:onboarding-welcome-v2-role-state",
          {
            roles: [],
            personalizedSuggestionsEnabled: true,
            workMode: null,
          },
        );
    });
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauR(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam16,
) {
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam16 ==
    null
  )
    return null;
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue29 =
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam16.lastIndexOf(
      "@",
    );
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue29 <=
    0
  )
    return null;
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue30 =
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam16
      .slice(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue29 +
          1,
      )
      .trim()
      .toLowerCase();
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue30.length ===
    0
    ? null
    : appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue30;
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauZ({
  debugOverride,
  detectedProvider,
  emailDomain,
  isError,
}) {
  return (
    debugOverride ??
    detectedProvider ??
    (emailDomain == null || isError ? "other" : null)
  );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauV(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam45,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam46,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam45 ===
    "other"
    ? businessCheckoutSharedRuntimeVariant5Member0035(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam46,
      )
      ? "microsoft"
      : "google"
    : appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam45;
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauB(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam50,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam51,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam51 ===
    "microsoft"
    ? (appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue4[
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam50
      ] ??
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam50)
    : appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam50;
}
var appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue4,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauL;
export const appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauH =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerb();
    currentQueryRpcAliasUpperC();
    businessCheckoutSharedRuntimeVariant5Member0029();
    currentQueryRpcAliasLowero();
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue4 =
      {
        gmail: "outlook-email",
        "google-calendar": "outlook-calendar",
        "google-drive": "sharepoint",
        slack: "teams",
      };
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauL =
      currentQueryRpcAliasLoweri(
        currentReactAliasLowery,
        "email-domain-mail-provider",
        (
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam30,
        ) => ({
          enabled:
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam30 !=
            null,
          params:
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam30 ==
            null
              ? undefined
              : {
                  domain:
                    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam30,
                },
          retry: 2,
          staleTime: currentQueryRpcAliasUpperS.FIVE_MINUTES,
        }),
      );
  });
function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauP(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam17,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam17.source ==
    null
    ? appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam17.id ===
      "claude_import"
      ? "claude_import"
      : appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue5.has(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam17.id,
          )
        ? "sidebar"
        : "conversational_onboarding"
    : appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam17.source;
}
function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam66,
) {
  return (
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauP(
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam66,
    ) === "sidebar"
  );
}
var appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue5,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauF =
    createLazyEsmInitializer(() => {
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue5 =
        new Set([
          "enable_notifications",
          "create_automation",
          "summarize_inbox",
          "triage_github_prs",
          "catch_up_updates_and_blockers",
          "catch_up_linear",
          "review_latest_plans",
          "summarize_current_priorities",
        ]);
    });
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauA(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam39,
) {
  imagePickerSchemaCapabilities(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam39,
    currentAppInitialSharedMember0863,
    {
      action:
        threadRuntimeWorkspaceRootsFallbackFunction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ACTION_COLLAPSE_CLICKED,
    },
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauJ(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam40,
) {
  imagePickerSchemaCapabilities(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam40,
    currentAppInitialSharedMember0863,
    {
      action:
        threadRuntimeWorkspaceRootsFallbackFunction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ACTION_HIDE_CLICKED,
    },
  );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam43,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam44,
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper3(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam43,
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam44,
    businessCheckoutSharedMember0730.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_CLICKED,
  );
}
function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper2(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam41,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam42,
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper3(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam41,
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam42,
    businessCheckoutSharedMember0730.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_COMPLETED,
  );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauN(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam18,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam19,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam20,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam21,
) {
  imagePickerSchemaCapabilities(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam18,
    businessCheckoutSharedMember0679,
    {
      action:
        businessCheckoutSharedMember0730.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_PROMPT_TURN_STARTED,
      itemId:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam19,
      threadId:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam20,
      turnId:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam21,
    },
  );
}
function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper3(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam57,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam58,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam59,
) {
  imagePickerSchemaCapabilities(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam57,
    businessCheckoutSharedMember0679,
    {
      action:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam59,
      itemId:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam58,
    },
  );
}
var _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauK =
    createLazyEsmInitializer(() => {
      businessCheckoutSharedMember0372();
      businessCheckoutSharedMember0071();
    }),
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauD,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauO =
    createLazyEsmInitializer(() => {
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauD =
        "sidebar-onboarding-checklist-state-by-account-id-v2";
    });
function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam47,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam48,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue39 =
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam47?.[
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam48
    ];
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue39?.version ===
    1
    ? appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue39
    : undefined;
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauH(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam36,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam37,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam38,
) {
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam38?.mode !==
    "disabled"
  )
    return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam38?.mode ===
      "enabled"
      ? appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam38.accountState
      : _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam36,
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam37,
        );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauUnderscore(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam10,
  {
    accountId,
    completedConversationalOnboardingTask,
    hasCompletedClaudeImport,
    sidebarItems,
  },
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper4(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam10,
    accountId,
  );
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam10.set(
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    (
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam24,
    ) => ({
      ...(appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam24 ??
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6),
      [accountId]:
        _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauF(
          {
            completedConversationalOnboardingTask,
            hasCompletedClaudeImport,
            sidebarItems,
          },
        ),
    }),
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauB(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam25,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam26,
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper4(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam25,
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam26,
  );
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam25.set(
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    (
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam32,
    ) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue34 =
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam32 ??
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6;
      if (
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue34[
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam26
        ] == null
      )
        return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue34;
      let {
        [appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam26]:
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue35,
        ...rest
      } =
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue34;
      return rest;
    },
  );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauS(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam27,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam28,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam29,
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam27.set(
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    (
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam33,
    ) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue36 =
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam33 ??
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue37 =
          _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue36,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam28,
          );
      return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue37 ==
        null
        ? appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue36
        : {
            ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue36,
            [appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam28]:
              {
                ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue37,
                collapsed:
                  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam29,
              },
          };
    },
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauP(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam22,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam23,
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper4(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam22,
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam23,
  );
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam22.set(
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    (
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam31,
    ) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue32 =
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam31 ??
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue33 =
          _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue32,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam23,
          );
      return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue33 ==
        null
        ? appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue32
        : {
            ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue32,
            [appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam23]:
              {
                ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue33,
                dismissed: true,
              },
          };
    },
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauX(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam9,
) {
  for (let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue41 of Object.keys(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam9.get(
      _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    ) ??
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
  ))
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper4(
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam9,
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue41,
    );
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam9.set(
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    (
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam12,
    ) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue21 =
        {};
      for (let [
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue24,
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue25,
      ] of Object.entries(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam12 ??
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
      ))
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue25.version ===
          1 &&
          (appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue21[
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue24
          ] = {
            version: 1,
            collapsed: false,
            items:
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue25.items.map(
                (item) => ({
                  ...item,
                  completed:
                    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI(
                      item,
                    )
                      ? false
                      : item.completed,
                }),
              ),
          });
      return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue21;
    },
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauY(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam34,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam35,
) {
  return (
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam34?.version ===
      1 &&
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam34.items.some(
      (item) =>
        item.id ===
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam35 &&
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI(
          item,
        ) &&
        item.completed,
    )
  );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauE(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam13,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam14,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue26 =
      _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam13.get(
          _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
        ),
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam14,
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue27 =
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue26?.items.find(
        (
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam67,
        ) =>
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam67.id ===
            "enable_notifications" &&
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam67,
          ),
      );
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue26?.notificationPermissionItemIncluded !==
    true ||
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue27 ==
      null ||
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue27.completed ||
    (appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam13.get(
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam14,
    ) ??
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam13.set(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam14,
        Date.now(),
      ));
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauV(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam2,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam3,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam4,
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam2.set(
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    (
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam5,
    ) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue10 =
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam5 ??
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue11 =
          _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue10,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam3,
          );
      if (
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue11 ==
          null ||
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue11.notificationPermissionItemIncluded !=
          null ||
        !appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue11.items.some(
          (item) =>
            item.id === "enable_notifications" &&
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI(
              item,
            ),
        )
      )
        return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue10;
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue12 =
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue11.items.some(
            (item) =>
              item.id === "enable_notifications" &&
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI(
                item,
              ) &&
              item.completed,
          ),
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue13 =
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam2.get(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam3,
          ) != null;
      if (
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam4 ==
          null &&
        !appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue12 &&
        !appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue13
      )
        return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue10;
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue14 =
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue12 ||
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue13 ||
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam4 ===
          "disabled" ||
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam4 ===
          "not-determined";
      return {
        ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue10,
        [appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam3]:
          {
            ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue11,
            notificationPermissionItemIncluded:
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue14,
          },
      };
    },
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauD(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam6,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam7,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam8,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue16 = false;
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam8 ===
    "enable_notifications" &&
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper4(
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam6,
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam7,
    );
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam6.set(
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
    (
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam11,
    ) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue17 =
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam11 ??
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue18 =
          _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue17,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam7,
          );
      if (
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue18 ==
        null
      )
        return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue17;
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue19 =
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue18.items.findIndex(
          (item) =>
            item.id ===
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam8 &&
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI(
              item,
            ),
        );
      if (
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue19 <
          0 ||
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue18
          .items[
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue19
        ]?.completed === true
      )
        return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue17;
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue16 = true;
      let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue20 =
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue18.items.map(
          (item, index) =>
            index ===
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue19
              ? {
                  ...item,
                  completed: true,
                }
              : item,
        );
      return {
        ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue17,
        [appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam7]:
          {
            ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue18,
            items:
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue20,
          },
      };
    },
  );
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue16 &&
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper2(
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam6,
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam8,
    );
}
function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper4(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam68,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam69,
) {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam68.set(
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam69,
    null,
  );
}
function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauF({
  completedConversationalOnboardingTask,
  hasCompletedClaudeImport,
  sidebarItems,
}) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue15 =
    [];
  return (
    completedConversationalOnboardingTask != null &&
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue15.push(
        {
          ...completedConversationalOnboardingTask,
          completed: true,
          source: "conversational_onboarding",
        },
      ),
    hasCompletedClaudeImport &&
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue15.push(
        {
          id: "claude_import",
          completed: true,
          source: "claude_import",
        },
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue15.push(
      ...sidebarItems
        .filter(({ id }) => id !== completedConversationalOnboardingTask?.id)
        .map((item) => ({
          ...item,
          completed: false,
          source: "sidebar",
        })),
    ),
    {
      version: 1,
      collapsed: false,
      items:
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue15,
    }
  );
}
var appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauC;
export const _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauG =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerx();
    currentReactAliasLowerb();
    initPersistedAtomRegistryRuntime();
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauF();
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauK();
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauO();
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6 =
      {};
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW =
      createPersistedAtomRegistryEntry(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauD,
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue6,
      );
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT =
      currentReactAliasUpperSLowert(
        currentReactAliasLowery,
        (
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam70,
        ) => null,
      );
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauC =
      currentReactAliasLowerxLowert(currentReactAliasLowery, null);
  });
function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauA(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam49,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam49.some(
    (item) => at.has(item),
  )
    ? "coding"
    : "non_coding";
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauO({
  backendRole,
  localRoles,
}) {
  return localRoles.length > 0
    ? _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauA(
        localRoles,
      )
    : backendRole == null
      ? null
      : _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauA(
          [backendRole],
        );
}
function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauS({
  roleSelectionSkipped,
  roles,
}) {
  return roleSelectionSkipped
    ? null
    : (roles.find(
        (item) => item === "engineering" || item === "data_science",
      ) ??
        roles.find((item) => item !== "default" && item !== "something_else") ??
        (roles.includes("something_else") ? "something_else" : null));
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI({
  backendRole,
  localRoles,
}) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue31 =
    (backendRole === "something_else" ? null : backendRole) ??
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauS(
      {
        roleSelectionSkipped: false,
        roles: localRoles,
      },
    );
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue31 ===
    "something_else"
    ? null
    : appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue31;
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauL(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam61,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam61.some(
    (item) =>
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue7.has(
        item,
      ),
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauC(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam15 = Math.random,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue28 =
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauN.filter(
      (item) => item !== "something_else",
    );
  for (
    let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue38 =
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue28.length -
      1;
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue38 >
    0;
    --appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue38
  ) {
    let appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue40 =
      Math.floor(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam15() *
          (appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue38 +
            1),
      );
    [
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue28[
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue38
      ],
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue28[
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue40
      ],
    ] = [
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue28[
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue40
      ],
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue28[
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue38
      ],
    ];
  }
  return [
    ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue28,
    "something_else",
  ];
}
function appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper5(
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam52,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam53,
) {
  return {
    ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam52,
    roles:
      appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam53,
    workMode:
      _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauA(
        appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam53,
      ),
  };
}
var appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue7,
  at,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauN,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauR;
export const _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauU =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerkLowert();
    initReactIntlRuntimeChunk();
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauTt();
    appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue7 =
      new Set(["engineering", "data_science"]);
    at = new Set([
      "default",
      ...appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauValue7,
    ]);
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauN =
      [
        "engineering",
        "data_science",
        "product_management",
        "design",
        "marketing",
        "sales",
        "finance",
        "operations",
        "people_hr",
        "legal",
        "student",
        "something_else",
      ];
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT =
      defineMessages({
        engineering: {
          id: "electron.onboarding.welcomeV2.role.engineering",
          defaultMessage: "Engineering",
          description: "Welcome v2 role option for engineering users",
        },
        product_management: {
          id: "electron.onboarding.welcomeV2.role.product",
          defaultMessage: "Product",
          description: "Welcome v2 role option for product management users",
        },
        data_science: {
          id: "electron.onboarding.welcomeV2.role.dataScience",
          defaultMessage: "Data science",
          description: "Welcome v2 role option for data science users",
        },
        design: {
          id: "electron.onboarding.welcomeV2.role.design",
          defaultMessage: "Design",
          description: "Welcome v2 role option for design users",
        },
        finance: {
          id: "electron.onboarding.welcomeV2.role.finance",
          defaultMessage: "Finance",
          description: "Welcome v2 role option for finance users",
        },
        marketing: {
          id: "electron.onboarding.welcomeV2.role.marketing",
          defaultMessage: "Marketing",
          description: "Welcome v2 role option for marketing users",
        },
        sales: {
          id: "electron.onboarding.welcomeV2.role.sales",
          defaultMessage: "Sales",
          description: "Welcome v2 role option for sales users",
        },
        operations: {
          id: "electron.onboarding.welcomeV2.role.operations",
          defaultMessage: "Operations",
          description: "Welcome v2 role option for operations users",
        },
        people_hr: {
          id: "electron.onboarding.welcomeV2.role.peopleHr",
          defaultMessage: "People & HR",
          description: "Welcome v2 role option for people and HR users",
        },
        legal: {
          id: "electron.onboarding.welcomeV2.role.legal",
          defaultMessage: "Legal",
          description: "Welcome v2 role option for legal users",
        },
        student: {
          id: "electron.onboarding.welcomeV2.role.student",
          defaultMessage: "Student",
          description: "Welcome v2 role option for student users",
        },
        something_else: {
          id: "electron.onboarding.welcomeV2.role.somethingElse",
          defaultMessage: "Something else",
          description:
            "Welcome v2 role option for users who don't fit into the other categories",
        },
      });
    _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauR =
      currentReactAliasUpperILowert(
        null,
        (
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam63,
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam64,
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam65,
        ) => {
          appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam64(
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauX,
            appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauHelper5(
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam63(
                appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauX,
              ),
              appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauParam65,
            ),
          );
        },
      );
  });
export {
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauDollar as $,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauC,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauD,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauF,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauG,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauI,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauJ,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauK,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauL,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauO,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauP,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauQ,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauU,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauX,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauY,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauZ,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauA,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauAt as at,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauCt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauEt,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauF,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauK,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauM,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauN,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauNt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauOt,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauQ,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauR,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauS,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauSt,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauT,
  appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauTt,
  _appInitialAppMainNewThreadPanelPageOnboardingPageSelectWorkspacePageLoginRoutEd992cauW,
};
