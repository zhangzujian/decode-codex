// Restored from ref/webview/assets/worktree-setup-auto-fix-B_Aon5le.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// WorktreeSetupAutoFix chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  initPersistedAtomStoreRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6J,
  getPersistedAtomValue as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6M,
} from "./persisted-ui-runtime";
import {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9D,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O,
} from "./shared-host-services-runtime";
import {
  businessCheckoutSharedInitializer0506 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcCd,
  schemaFunction0521 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcSd,
} from "../current-ref-aliases/business-checkout-shared/index";
import { pluginDetailPageNewThreadPanelPageRuntimeMember0025 as appInitialArtifactTabContentElectronAppMainPluginDetailPageNewThreadPanelPageBuikfm6jY } from "../current-ref-aliases/plugin-detail-page-new-thread-panel-page-runtime/index";
import {
  newThreadOnboardingSharedRuntimeFunction0013 as appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPagePrGh55pyj3D,
  newThreadOnboardingSharedRuntimeMember0014 as appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPagePrGh55pyj3F,
} from "../current-ref-aliases/new-thread-onboarding-shared-runtime/index";
import {
  newThreadOnboardingSharedRuntimeVariant21Member0001 as appInitialAppMainNewThreadPanelPageOnboardingPageHotkeyWindowThreadPageQuickE9bovb3hA,
  newThreadOnboardingSharedRuntimeVariant21Member0026 as appInitialAppMainNewThreadPanelPageOnboardingPageHotkeyWindowThreadPageQuickE9bovb3hK,
} from "../current-ref-aliases/new-thread-onboarding-shared-runtime-variant-21/index";
function worktreeSetupAutoFixHelper1({
  pendingWorktree,
  isConversationStarting,
  isConversationStartFailed,
}) {
  let worktreeSetupAutoFixValue5 =
      pendingWorktree.worktreeGitRoot != null &&
      pendingWorktree.worktreeWorkspaceRoot != null,
    worktreeSetupAutoFixValue6 = [
      {
        id: `${pendingWorktree.id}:${pendingWorktree.attempt}:worktree`,
        kind: "worktree",
        status: worktreeSetupAutoFixHelper2(
          pendingWorktree.phase,
          worktreeSetupAutoFixValue5,
        ),
        outputText: pendingWorktree.worktreeOutputText,
      },
    ],
    worktreeSetupAutoFixValue7 = worktreeSetupAutoFixHelper3(
      pendingWorktree,
      worktreeSetupAutoFixValue5,
    );
  return (
    worktreeSetupAutoFixValue7 != null &&
      worktreeSetupAutoFixValue6.push({
        id: `${pendingWorktree.id}:${pendingWorktree.attempt}:setup`,
        kind: "setup",
        status: worktreeSetupAutoFixValue7,
        outputText: pendingWorktree.setupOutputText,
      }),
    (isConversationStarting || isConversationStartFailed) &&
      worktreeSetupAutoFixValue6.push({
        id: `${pendingWorktree.id}:${pendingWorktree.attempt}:conversation`,
        kind: "conversation",
        status: isConversationStartFailed ? "failed" : "running",
        outputText: "",
      }),
    worktreeSetupAutoFixValue6
  );
}
function worktreeSetupAutoFixHelper2(
  worktreeSetupAutoFixParam9,
  worktreeSetupAutoFixParam10,
) {
  switch (worktreeSetupAutoFixParam9) {
    case "queued":
    case "creating":
      return "running";
    case "setting-up":
    case "worktree-ready":
      return "completed";
    case "failed":
      return worktreeSetupAutoFixParam10 ? "completed" : "failed";
  }
}
function worktreeSetupAutoFixHelper3(
  worktreeSetupAutoFixParam7,
  worktreeSetupAutoFixParam8,
) {
  switch (worktreeSetupAutoFixParam7.phase) {
    case "queued":
    case "creating":
      return null;
    case "setting-up":
      return "running";
    case "worktree-ready":
      return worktreeSetupAutoFixParam7.localEnvironmentConfigPath == null
        ? null
        : worktreeSetupAutoFixParam7.errorMessage == null
          ? "completed"
          : "skipped";
    case "failed":
      return worktreeSetupAutoFixParam8 ? "failed" : null;
  }
}
var worktreeSetupAutoFixValue1 = rolldownRuntimeN(() => {});
export function worktreeSetupAutoFixR(worktreeSetupAutoFixParam6) {
  let {
      pendingWorktree,
      isConversationStarting,
      isConversationStartFailed,
      children,
    } = worktreeSetupAutoFixParam6,
    worktreeSetupAutoFixValue12 = worktreeSetupAutoFixHelper1({
      pendingWorktree,
      isConversationStarting,
      isConversationStartFailed,
    });
  return worktreeSetupAutoFixValue3.jsx(
    appInitialAppMainNewThreadPanelPageOnboardingPageHotkeyWindowThreadPageQuickE9bovb3hK,
    {
      activities: worktreeSetupAutoFixValue12,
      children,
    },
  );
}
var worktreeSetupAutoFixValue2, worktreeSetupAutoFixValue3;
export const worktreeSetupAutoFixI = rolldownRuntimeN(() => {
  worktreeSetupAutoFixValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAppMainNewThreadPanelPageOnboardingPageHotkeyWindowThreadPageQuickE9bovb3hA();
  worktreeSetupAutoFixValue1();
  worktreeSetupAutoFixValue3 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
});
export async function worktreeSetupAutoFixT({
  createPendingWorktree,
  intl,
  pendingWorktree,
  serviceTier,
}) {
  let worktreeSetupAutoFixValue8 = worktreeSetupAutoFixHelper5(
      pendingWorktree,
      intl,
    ),
    worktreeSetupAutoFixValue9 = await worktreeSetupAutoFixHelper4(
      pendingWorktree,
      worktreeSetupAutoFixValue8,
      serviceTier,
    ),
    worktreeSetupAutoFixValue10 = intl.formatMessage({
      id: "worktreeInitV2.autoFix.label",
      defaultMessage: "Fix worktree setup",
      description:
        "Pending worktree label for a repair thread created after local environment setup fails",
    });
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPagePrGh55pyj3D(
    createPendingWorktree,
    {
      hostId: pendingWorktree.hostId,
      label: worktreeSetupAutoFixValue10,
      initialThreadTitle: worktreeSetupAutoFixValue10,
      sourceWorkspaceRoot: pendingWorktree.sourceWorkspaceRoot,
      startingState: pendingWorktree.startingState,
      localEnvironmentConfigPath: null,
      launchMode: "start-conversation",
      prompt: worktreeSetupAutoFixValue8,
      startConversationParamsInput: worktreeSetupAutoFixValue9,
      sourceConversationId: null,
      sourceCollaborationMode: null,
    },
  );
}
async function worktreeSetupAutoFixHelper4(
  worktreeSetupAutoFixParam3,
  worktreeSetupAutoFixParam4,
  worktreeSetupAutoFixParam5,
) {
  let worktreeSetupAutoFixValue4 = [
    {
      type: "text",
      text: worktreeSetupAutoFixParam4,
      text_elements: [],
    },
  ];
  if (worktreeSetupAutoFixParam3.launchMode === "start-conversation")
    return {
      ...worktreeSetupAutoFixParam3.startConversationParamsInput,
      input: worktreeSetupAutoFixValue4,
      commentAttachments: [],
      workspaceRoots: [worktreeSetupAutoFixParam3.sourceWorkspaceRoot],
      cwd: worktreeSetupAutoFixParam3.sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: "system",
      serviceTier: worktreeSetupAutoFixParam5,
    };
  let { config } =
    await appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O(
      "read-config-for-host",
      {
        hostId: worktreeSetupAutoFixParam3.hostId,
        includeLayers: false,
        cwd: worktreeSetupAutoFixParam3.sourceWorkspaceRoot,
        priority: "critical",
      },
    );
  return {
    input: worktreeSetupAutoFixValue4,
    commentAttachments: [],
    workspaceRoots: [worktreeSetupAutoFixParam3.sourceWorkspaceRoot],
    cwd: worktreeSetupAutoFixParam3.sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6J(
        "agent-mode-by-host-id",
        {},
      )[worktreeSetupAutoFixParam3.hostId] ?? "auto",
    shouldSendPermissionOverrides: true,
    model: null,
    serviceTier: worktreeSetupAutoFixParam5,
    reasoningEffort: null,
    collaborationMode:
      worktreeSetupAutoFixParam3.launchMode === "fork-conversation"
        ? worktreeSetupAutoFixParam3.sourceCollaborationMode
        : null,
    config:
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcSd(
        config,
      ),
    threadSource: "system",
    workspaceKind: "project",
  };
}
function worktreeSetupAutoFixHelper5(
  worktreeSetupAutoFixParam1,
  worktreeSetupAutoFixParam2,
) {
  return worktreeSetupAutoFixParam2.formatMessage(
    {
      id: "worktreeInitV2.autoFix.prompt",
      defaultMessage:
        "Fix this project's local environment setup.{paragraphBreak}The original worktree setup failed before its thread could start. Do not continue the original user request. Start a one-off repair task in this new worktree without running the broken setup automatically. Paths in the failure output refer to the original source or failed worktree, so edit the corresponding files in this current repair worktree. Inspect the selected local environment config and related setup files, reproduce the failure manually if useful, make the smallest source-controlled fix, verify the setup succeeds, and leave the proposed fix here for user review before they retry the original task. If the fix should not be made automatically, explain exactly what the user should change.{paragraphBreak}Selected local environment config: {configPath}{lineBreak}Original setup error: {errorMessage}{paragraphBreak}Original setup output:{lineBreak}```text{lineBreak}{outputText}{lineBreak}```",
      description:
        "Prompt sent to a repair thread created after local environment setup fails",
    },
    {
      configPath: worktreeSetupAutoFixParam1.localEnvironmentConfigPath ?? "",
      errorMessage: worktreeSetupAutoFixParam1.errorMessage ?? "",
      lineBreak: "\n",
      outputText: worktreeSetupAutoFixParam1.setupOutputText,
      paragraphBreak: "\n\n",
    },
  );
}
export const worktreeSetupAutoFixN = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9D();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcCd();
  appInitialArtifactTabContentElectronAppMainPluginDetailPageNewThreadPanelPageBuikfm6jY();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6M();
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPagePrGh55pyj3F();
});
