// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~new-thread-panel-page~onboarding-page~se~ismvjv52-D8wORTJv.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// AppInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52 chunk restored from the Codex webview bundle.
import {
  createLazyEsmInitializer as rolldownRuntimeN,
  toEsm as rolldownRuntimeS,
  createLazyCommonJsModule as rolldownRuntimeT,
} from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAs as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAi,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZ as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAn,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAi as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAs,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAn as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzB,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzB as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzIi,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzIi as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSi,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSi as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSn,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSn as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzW,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzW as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzX,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzX as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZ,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZs,
} from "./shared-query-rpc-runtime";
import { appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9Lt } from "./shared-host-services-runtime";
import {
  windowContinuationRetryDelayMs as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eI,
  windowContinuationWarningMessage as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eN,
  currentAppInitialSharedFunction0626 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eO,
} from "../current-ref-aliases/current-app-shared/index";
import {
  settingsCommandSharedRuntimeVariant4Member0001 as _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iQ,
  settingsCommandSharedRuntimeVariant4Member0011 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iDollar,
  settingsCommandSharedRuntimeVariant4Member0018 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iJ,
  settingsCommandSharedRuntimeVariant4Member0049 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iQ,
} from "../current-ref-aliases/settings-command-shared-runtime-variant-4/index";
import {
  settingsCommandSharedRuntimeVariant13Member0025 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKt7wj8foX,
  settingsCommandSharedRuntimeVariant13Member0026 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKt7wj8foY,
} from "../current-ref-aliases/settings-command-shared-runtime-variant-13/index";
import { firstRunAppgenRuntimeMember0009 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainFirstRunAppgenF83t1tf1I } from "../current-ref-aliases/first-run-appgen-runtime/index";
import { pullRequestRoutRuntimeVariant7Member0018 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainPullRequestRoutKxr6s7fbV } from "../current-ref-aliases/pull-request-rout-runtime-variant-7/index";
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Y({
  isExistingThread,
  executionHostId,
  activeLocalProjectId,
  existingAssignment,
  homeRemoteProject,
  selectedRemoteProject,
}) {
  if (isExistingThread)
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52B(
      {
        type: "assignment",
        assignment: existingAssignment,
        executionHostId,
      },
    );
  if (executionHostId === "local")
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52B(
      {
        type: "local-project",
        projectId: activeLocalProjectId,
      },
    );
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value70 =
    homeRemoteProject ?? selectedRemoteProject;
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value70?.hostId ===
    executionHostId
  )
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52B(
      {
        type: "remote-project",
        projectId:
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value70.id,
        hostId:
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value70.hostId,
        path: appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value70.remotePath,
      },
    );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52B(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33,
) {
  switch (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.type
  ) {
    case "local-project":
      return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.projectId ==
        null ||
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.projectId ===
          "~"
        ? undefined
        : {
            projectKind: "local",
            projectId:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.projectId,
            pendingCoreUpdate: false,
          };
    case "remote-project":
      return {
        projectKind: "remote",
        projectId:
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.projectId,
        hostId:
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.hostId,
        path: appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.path,
        pendingCoreUpdate: false,
      };
    case "assignment": {
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.assignment ==
          null ||
        !(appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33
          .assignment.projectKind === "local"
          ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.executionHostId ===
            "local"
          : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.executionHostId !==
              "local" &&
            (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33
              .assignment.hostId == null ||
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33
                .assignment.hostId ===
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.executionHostId))
      )
        return;
      let { cwd, ...rest } =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param33.assignment;
      return {
        ...rest,
        pendingCoreUpdate: false,
      };
    }
  }
}
var appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52X =
    rolldownRuntimeN(() => {
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzW();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eO();
    }),
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value1 =
    rolldownRuntimeT(
      (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param65,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param66,
      ) => {
        function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper28(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param76,
        ) {
          for (
            var appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value118 =
                -1,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value119 =
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param76 ==
                null
                  ? 0
                  : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param76.length,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value120 =
                {};
            ++appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value118 <
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value119;
          ) {
            var appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value121 =
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param76[
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value118
              ];
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value120[
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value121[0]
            ] =
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value121[1];
          }
          return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value120;
        }
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param66.exports =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper28;
      },
    ),
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52V =
    rolldownRuntimeT(
      (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param69,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param70,
      ) => {
        var appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value105 =
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZs(),
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value106 =
            appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainPullRequestRoutKxr6s7fbV(),
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value107 =
            Object.prototype.hasOwnProperty;
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param70.exports =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value106(
            function (
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param105,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param106,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param107,
            ) {
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value107.call(
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param105,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param107,
              )
                ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param105[
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param107
                  ].push(
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param106,
                  )
                : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value105(
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param105,
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param107,
                    [
                      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param106,
                    ],
                  );
            },
          );
      },
    );
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Underscore(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param92,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value136 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param92
      .rootPaths.length === 1
      ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param92
          .rootPaths[0]
      : undefined;
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value136 !=
      null &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper1(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value136,
    )
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper1(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param87,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param87
      .split(/[\\/]+/)
      .filter(Boolean)
      .at(-2) === ".chatgpt-projects"
  );
}
var appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52G =
  rolldownRuntimeN(() => {});
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52T(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param80,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param81,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param80.length ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param81.length &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param80.every(
      (item, index) => {
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value140 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param81[
            index
          ];
        return (
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value140 !=
            null &&
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52N(
            item,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value140,
          )
        );
      },
    )
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52N(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.groupId ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.groupId &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.projectId ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.projectId &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.projectKind ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.projectKind &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.hostId ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.hostId &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.hostDisplayName ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.hostDisplayName &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.cloudEnvironment ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.cloudEnvironment &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.label ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.label &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.path ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.path &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.pathAlias ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.pathAlias &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.projectCreatedAt ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.projectCreatedAt &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.projectUpdatedAt ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.projectUpdatedAt &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.isLegacyLocalSingleFolderProject ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.isLegacyLocalSingleFolderProject &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper11(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39,
    ) &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper14(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.repositoryData,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.repositoryData,
    ) &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.isCodexWorktree ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.isCodexWorktree &&
    _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iQ(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param38.threadKeys,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param39.threadKeys,
    )
  );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52P(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param51,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param52,
) {
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param52 ===
    "chatgpt"
  )
    return {
      projectGroups:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param51,
      chatGptProjectMirrorThreadKeys: undefined,
    };
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value81 =
      [],
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value82 =
      new Set();
  for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value138 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param51)
    if (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper3(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value138,
      )
    )
      for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value143 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value138.threadKeys)
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value82.add(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value143,
        );
    else
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value81.push(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value138,
      );
  return {
    projectGroups:
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value81,
    chatGptProjectMirrorThreadKeys:
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value82,
  };
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper2(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param67,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param68,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value95 =
      new Set(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param67.map(
          (item) => item.projectId,
        ),
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value96 =
      (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param68 ??
        []
      ).filter((item) =>
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value95.has(
          item,
        ),
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value97 =
      new Set(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value96,
      );
  return [
    ...appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param67
      .map((item) => item.projectId)
      .filter(
        (item) =>
          !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value97.has(
            item,
          ),
      ),
    ...appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value96,
  ];
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper3(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param79,
) {
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param79.projectKind !==
    "local"
  )
    return false;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value125 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param79
      .rootPaths?.length === 1
      ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param79
          .rootPaths[0]
      : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param79.path;
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value125 !=
      null &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper1(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value125,
    )
  );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52H(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param63,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param64,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value93 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper2(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param63,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param64,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value94 =
      new Map(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value93.map(
          (item, index) => [item, index],
        ),
      );
  return [
    ...appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param63,
  ].sort(
    (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param99,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param100,
    ) =>
      (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value94.get(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param99.projectId,
      ) ?? 9007199254740991) -
      (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value94.get(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param100.projectId,
      ) ?? 9007199254740991),
  );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52D(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param57,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param58,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value85 =
    new Map(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param58.map(
        (item, index) => [item, index],
      ),
    );
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param57.map(
    (item) => {
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value108 =
        [...item.threadKeys].sort(
          (
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param111,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param112,
          ) =>
            (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value85.get(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param111,
            ) ?? 9007199254740991) -
            (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value85.get(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param112,
            ) ?? 9007199254740991),
        );
      return _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iQ(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value108,
        item.threadKeys,
      )
        ? item
        : {
            ...item,
            threadKeys:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value108,
          };
    },
  );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52U(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param49,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param50,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value77 =
      new Set(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param50,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value78 =
      new Map(
        (
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param50 ??
          []
        ).map((item, index) => [item, index]),
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value79 =
      [],
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value80 =
      [];
  for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value141 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param49)
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value77.has(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value141.projectId,
    )
      ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value79.push(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value141,
        )
      : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value80.push(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value141,
        );
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value79.sort(
      (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param95,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param96,
      ) =>
        (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value78.get(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param95.projectId,
        ) ?? 9007199254740991) -
        (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value78.get(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param96.projectId,
        ) ?? 9007199254740991),
    ),
    {
      pinnedGroups:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value79,
      unpinnedGroups:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value80,
    }
  );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52F({
  groups,
  hiddenTaskKeys,
}) {
  return hiddenTaskKeys.size === 0
    ? groups
    : groups.flatMap((item) => {
        if (item.threadKeys.length === 0) return [item];
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value122 =
          item.threadKeys.filter((_item) => !hiddenTaskKeys.has(_item));
        return [
          {
            ...item,
            threadKeys:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value122,
          },
        ];
      });
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52R(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param14,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param15,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param16 = [],
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param17,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value25 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value3.default(
        Object.values(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param15?.canonicalPathByRoot ??
            {},
        ),
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value26 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value2.default(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param16.map(
          (item) => [
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
              item.dir,
            ),
            item,
          ],
        ),
      );
  return Object.values(
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param14 ??
      {},
  ).map((item) => {
    let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27 =
        item.rootPaths.length === 1 ? item.rootPaths[0] : null,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value28 =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27 ==
        null
          ? null
          : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27,
            ),
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value29 =
        item.rootPaths.flatMap((_item) => {
          let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value90 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param15
              ?.canonicalPathByRoot?.[_item];
          if (
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value90 ==
            null
          )
            return [];
          let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value91 =
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
                _item,
              ),
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value92 =
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value90,
              );
          return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value92 ===
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value91 ||
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value25[
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value92
            ]?.length !== 1
            ? []
            : [
                {
                  alias:
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value90,
                  path: _item,
                },
              ];
        }),
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value30 =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value28 ==
        null
          ? undefined
          : (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value26[
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value28
            ] ?? undefined),
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value31 =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27 !=
          null &&
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value30 !=
          null &&
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper4(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value30,
        )
          ? {
              ownerRepo:
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value30.originUrl
                  ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKt7wj8foX(
                      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value30.originUrl,
                    )
                  : null,
              repoPath:
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper6(
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27,
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param16,
                ).join("/"),
              rootFolder:
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value4.default(
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper7(
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value30.root,
                  ),
                ) ?? "",
            }
          : null;
    return {
      isCodexWorktree:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27 ==
        null
          ? false
          : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSn(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param17,
            ),
      isLegacyLocalSingleFolderProject: false,
      label: item.name.trim() || item.id,
      ...(appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27 ==
      null
        ? {}
        : {
            path: appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value27,
          }),
      projectCreatedAt: item.createdAt,
      projectUpdatedAt: item.updatedAt,
      projectId: item.id,
      projectKind: "local",
      repositoryData:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value31,
      rootPaths: item.rootPaths,
      ...(appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value29.length ===
      0
        ? {}
        : {
            rootPathAliases:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value29,
          }),
      threadKeys: [],
    };
  });
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper4(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param110,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param110.originUrl !=
      null ||
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param110.commonDir !=
      null
  );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52I(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param44,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param45,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value75 =
    new Map(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param45.map(
        (item) => [item.hostId, item.displayName],
      ),
    );
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param44.map(
    (item) => ({
      groupId: item.id,
      isLegacyLocalSingleFolderProject: false,
      projectId: item.id,
      projectKind: "remote",
      hostId: item.hostId,
      hostDisplayName:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value75.get(
          item.hostId,
        ) ?? null,
      label: item.label,
      path: item.remotePath,
      repositoryData: null,
      isCodexWorktree: false,
      threadKeys: [],
    }),
  );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52A(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param8,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param9,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param11,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param12,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param13,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value21 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value2.default(
        (
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param11 ??
          []
        ).flatMap(({ dir, originUrl }) => {
          let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value135 =
            originUrl
              ? appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKt7wj8foX(
                  originUrl,
                )
              : null;
          return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value135
            ? [
                [
                  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
                    dir,
                  ),
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value135,
                ],
              ]
            : [];
        }),
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value22 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value3.default(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param9 ??
          [],
        (
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param127,
        ) =>
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param127.label,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value23 =
      new Set(),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value24 =
      new Map();
  for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value87 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10)
    if (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value87.projectKind ===
      "local"
    )
      for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value109 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52L(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value87,
      )) {
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value115 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value109,
          );
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value23.add(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value115,
        );
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value116 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value24.get(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value115,
            ),
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value117 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper8(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value87,
            )
              ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value87
              : {
                  ...appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value87,
                  path: appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value109,
                };
        (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value116 ==
          null ||
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper10(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value117,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value116,
          )) &&
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value24.set(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value115,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value117,
          );
      }
  for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value83 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10)
    if (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value83.projectKind ===
      "local"
    )
      for (let {
        alias,
        path,
      } of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper9(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value83,
      )) {
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value98 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
            alias,
          );
        if (
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value23.has(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value98,
          )
        )
          continue;
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value99 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper8(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value83,
            ) &&
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value83.path ===
              path
              ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value83
              : {
                  ...appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value83,
                  path,
                },
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value100 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value24.get(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value98,
            );
        (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value100 ==
          null ||
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper10(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value99,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value100,
          )) &&
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value24.set(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value98,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value99,
          );
      }
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param8.forEach(
      (item) => {
        if (item.kind === "local")
          item.pendingWorktree == null
            ? $(
                item,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value24,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param11,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param13?.gitOriginsByHostId,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param12,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param13?.primaryHostId,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param13,
              )
            : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper23(
                item,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value21,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value24,
              );
        else if (item.kind === "remote") {
          let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value86 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper17(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param13
                ?.threadProjectAssignments?.[item.task.id],
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10,
            );
          if (
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value86 !=
            null
          ) {
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value86.threadKeys.push(
              item.key,
            );
            return;
          }
          if (
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param13?.projectlessThreadIds?.has(
              item.task.id,
            ) === true
          )
            return;
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper24(
            item,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value22,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10,
          );
        }
      },
    ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param10
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper5(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param97,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param98,
) {
  return !!(
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param97 &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param98 &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param97.owner ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param98.owner &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param97.repoName ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param98.repoName
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52O(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param85,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param86,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value131 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param85,
    ).replace(/\/+$/, "");
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param86.find(
      (item) =>
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
          item.dir,
        ).replace(/\/+$/, "") ===
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value131,
    ) ?? null
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper6(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param83,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param84,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value128 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52O(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param83,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param84 ??
        [],
    );
  if (
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value128?.root
  )
    return [];
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value129 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper7(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param83,
        ),
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value130 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper7(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value128.root,
        ),
      );
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value129.slice(
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value130.length,
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper7(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param113,
) {
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param113
    .split(/[/\\]+/)
    .filter(Boolean);
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper8(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param120,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param120.path !=
    null
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52L(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param108,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param108.rootPaths ??
    (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param108.path ==
    null
      ? []
      : [
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param108.path,
        ])
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper9(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param71,
) {
  return [
    ...(appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param71.pathAlias ==
      null ||
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param71.path ==
      null
      ? []
      : [
          {
            alias:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param71.pathAlias,
            path: appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param71.path,
          },
        ]),
    ...(appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param71.rootPathAliases ??
      []),
  ];
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper10(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param77,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param78,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value123 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param77.projectCreatedAt ??
      0,
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value124 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param78.projectCreatedAt ??
      0;
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value123 ===
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value124
    ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param77.projectId.localeCompare(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param78.projectId,
      ) > 0
    : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value123 >
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value124;
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper11(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param72,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param73,
) {
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param72.projectKind !==
    "local" ||
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param73.projectKind !==
      "local"
    ? true
    : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper12(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param72.rootPaths,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param73.rootPaths,
      ) &&
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper13(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param72.rootPathAliases,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param73.rootPathAliases,
        );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper12(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param103,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param104,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param103 ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param104 ||
    (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param103 !=
      null &&
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param104 !=
        null &&
      _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iQ(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param103,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param104,
      ))
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper13(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param61,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param62,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param61 ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param62 ||
    (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param61 !=
      null &&
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param62 !=
        null &&
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param61.length ===
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param62.length &&
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param61.every(
        (item, index) => {
          let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value134 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param62[
              index
            ];
          return (
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value134 !=
              null &&
            item.alias ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value134.alias &&
            item.path ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value134.path
          );
        },
      ))
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper14(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param59,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param60,
) {
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param59 ==
    null ||
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param60 ==
      null
    ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param59 ===
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param60
    : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param59.repoPath ===
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param60.repoPath &&
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param59.rootFolder ===
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param60.rootFolder &&
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param59
          .ownerRepo?.owner ===
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param60
            .ownerRepo?.owner &&
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param59
          .ownerRepo?.repoName ===
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param60
            .ownerRepo?.repoName;
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper15(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param116,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param117,
) {
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param116.get(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param117,
      ),
    ) ?? null
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper16(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param118,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param119,
) {
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param118.has(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param119,
    ),
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper17(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param53,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param54,
) {
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param53 ==
    null
    ? null
    : (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param54.find(
        (item) =>
          item.projectId !==
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param53.projectId ||
          item.projectKind !==
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param53.projectKind
            ? false
            : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param53.projectKind ===
                "local"
              ? true
              : item.hostId ===
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param53.hostId &&
                item.path ===
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param53.path,
      ) ?? null);
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52C(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param28,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param29,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param30,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param31,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param32,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value54 =
      new Set(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param31.map(
          (item) => item.hostId,
        ),
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value55 =
      new Map([
        [
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param29,
          (
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param30 ??
            []
          ).filter((item) => item !== "~"),
        ],
      ]),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value56 =
      (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param101,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param102,
      ) => {
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value139 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value55.get(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param101,
          );
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value55.set(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param101,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value139 ==
            null
            ? [
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param102,
              ]
            : [
                ...appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value139,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param102,
              ],
        );
      };
  for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param28)
    if (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.kind ===
      "local"
    ) {
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.pendingWorktree !=
        null
      ) {
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value113 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67
              .pendingWorktree.hostId,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value114 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67
              .pendingWorktree.sourceWorkspaceRoot;
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value114 &&
          (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value113 ===
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param29 ||
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value54.has(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value113,
            )) &&
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value56(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value113,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value114,
          );
        continue;
      }
      if (
        (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.summary !=
          null &&
          !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSn(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.cwd,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param32,
          )) ||
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.workspaceKind ===
          "projectless" ||
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.cwd ===
          "~"
      )
        continue;
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value68 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.hostId ==
            null ||
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzIi(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.hostId,
          )
            ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param29
            : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.hostId,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value69 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value67.cwd;
      if (
        !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value69 ||
        (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value68 !==
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param29 &&
          !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value54.has(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value68,
          ))
      )
        continue;
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value56(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value68,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value69,
      );
      continue;
    }
  for (let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value142 of appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param31)
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value56(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value142.hostId,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value142.remotePath,
    );
  return Array.from(
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value55.entries(),
  )
    .map(
      ([
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param93,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param94,
      ]) => ({
        hostId:
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param93,
        dirs: appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value5
          .default(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param94,
          )
          .sort(
            (
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param121,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param122,
            ) =>
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param121.localeCompare(
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param122,
              ),
          ),
      }),
    )
    .filter(
      ({ hostId, dirs }) =>
        hostId ===
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param29 ||
        dirs.length > 0,
    );
}
export function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52S(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param55,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param56,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value84 =
    new Map(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param56.map(
        ({ hostId, dirs }) => [
          hostId,
          new Set(
            dirs.map(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo,
            ),
          ),
        ],
      ),
    );
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param55
    .map(({ hostId, dirs }) => ({
      hostId,
      dirs: dirs.filter(
        (item) =>
          !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value84
            .get(hostId)
            ?.has(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
                item,
              ),
            ),
      ),
    }))
    .filter(({ dirs }) => dirs.length > 0);
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper18(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param34,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param35,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param36,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param37,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value57 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZ(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param36,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value58 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param37 ==
      null
        ? null
        : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZ(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAn(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param37,
            ),
          ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value59 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value57.lastIndexOf(
        "/.codex/worktrees/",
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value60 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value58 !=
        null &&
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value57.startsWith(
        `${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value58}/`,
      )
        ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value58.length +
          1
        : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value59 ===
            -1
          ? null
          : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value59 +
            18;
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value60 ==
    null
  )
    return [];
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value61 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value57
      .slice(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value60,
      )
      .split("/")
      .filter(Boolean);
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value61.length <
      2 ||
    !/^[0-9a-f]{4,}$/i.test(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value61[0] ??
        "",
    )
  )
    return [];
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value62 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value61.slice(
        1,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value63 =
      (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param34 ??
        []
      ).filter(
        (item) =>
          item.hostId ===
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param35,
      );
  for (
    let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value89 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value62.length;
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value89 >
    0;
    --appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value89
  ) {
    let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value101 =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value62
          .slice(
            0,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value89,
          )
          .join("/"),
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value102 =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value63.filter(
          (item) => {
            let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value137 =
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZ(
                item.remotePath,
              );
            return (
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value137 ===
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value101 ||
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value137.endsWith(
                `/${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value101}`,
              )
            );
          },
        );
    if (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value102.length >
      0
    )
      return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value102;
  }
  return [];
}
function be(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param42,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param43,
) {
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param42 ==
      null ||
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param43 ==
      null
  )
    return false;
  let [
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value71,
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value72,
  ] =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAi(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param42,
    ) &&
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSi(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param43,
    )
      ? [
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param42,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param43,
        ]
      : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAi(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param43,
          ) &&
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSi(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param42,
          )
        ? [
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param43,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param42,
          ]
        : [];
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value71 ==
      null ||
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value72 ==
      null
  )
    return false;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value73 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value71.hostName
        .trim()
        .toLowerCase()
        .replace(/\.$/, ""),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value74 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value72.sshHost
        .trim()
        .toLowerCase()
        .replace(/\.$/, "");
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value73.length >
      0 &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value74.length >
      0 &&
    (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value73 ===
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value74 ||
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value73.startsWith(
        `${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value74}.`,
      ) ||
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value74.startsWith(
        `${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value73}.`,
      ))
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper19({
  gitOrigins,
  gitOriginsByHostId,
  hostId,
  primaryHostId,
}) {
  return hostId && gitOriginsByHostId?.[hostId]
    ? gitOriginsByHostId[hostId]
    : hostId && gitOriginsByHostId && hostId !== primaryHostId
      ? []
      : (gitOrigins ?? []);
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper20(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param74,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param75,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value110 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52O(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param74,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param75 ??
        [],
    );
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value110?.commonDir
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value110.commonDir,
      ).replace(/\/+$/, "") !==
        `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value110.root).replace(/\/+$/, "")}/.git`
    : false;
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper21(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param21,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param22,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param23,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param24,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param25,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param26,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param27 = false,
) {
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper16(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param24,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param21,
    )
  )
    return null;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value37 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param26?.[
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param22
      ],
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value37
        ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper15(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param24,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value37,
          )
        : null;
  if (
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param25
  )
    return (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38?.path ??
      null
    );
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value39 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52O(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param21,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param25,
    );
  if (
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value39
  )
    return (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38?.path ??
      null
    );
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value40 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value39.originUrl ??
      null,
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value41 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value39.commonDir ??
      null;
  if (
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value40 &&
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value41
  )
    return (
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38?.path ??
      null
    );
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value42 =
      (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param109,
      ) =>
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param109
          ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value40
            ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param109.originUrl ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value40
            : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value41
              ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param109.commonDir ===
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value41
              : false
          : false,
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value43 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param21,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value44 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper6(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param21,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param25,
      ).join("/"),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value45 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param23.flatMap(
        (item) => {
          if (
            !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper8(
              item,
            )
          )
            return [];
          let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value103 =
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
              item.path,
            );
          if (
            item.isCodexWorktree &&
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value43 !==
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value103
          )
            return [];
          let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value104 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52O(
              item.path,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param25,
            );
          return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value104 !=
            null &&
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value42(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value104,
            )
            ? [item]
            : [];
        },
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value46 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value45.filter(
        (item) =>
          item.repositoryData?.repoPath ===
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value44,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value47 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value4.default(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper7(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value39.root,
        ),
      ) ?? "",
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value48 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper22(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value46,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value47,
      );
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value48
  )
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value48.path;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value49 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value46[0];
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value49
  )
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value49.path;
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38 &&
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value45.includes(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38,
    )
  )
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38.path;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value50 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value45.filter(
        (item) => item.repositoryData?.repoPath === "",
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value51 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper22(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value50,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value47,
      );
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value51
  )
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value51.path;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value52 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value50[0];
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value52
  )
    return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value52.path;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value53 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value45[0];
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value53
    ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value53.path
    : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param27
      ? (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value38?.path ??
        null)
      : null;
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper22(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param88,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param89,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value132 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param88.filter(
      (item) =>
        item.repositoryData?.rootFolder ===
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param89,
    );
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value132.length ===
    1
    ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value132[0]
    : null;
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper23(
  event,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param18,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param19,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param20,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32 =
      event.pendingWorktree,
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value33 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper17(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52B(
          {
            type: "assignment",
            assignment:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32.launchMode ===
              "fork-conversation"
                ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32.projectAssignment
                : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32
                    .startConversationParamsInput?.projectAssignment,
            executionHostId:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32.hostId,
          },
        ),
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param19,
      );
  if (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value33 !=
    null
  ) {
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value33.threadKeys.push(
      event.key,
    );
    return;
  }
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value34 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32
      .startConversationParamsInput?.workspaceRoots[0] ??
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32
      .startConversationParamsInput?.cwd ??
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32.sourceWorkspaceRoot;
  if (
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value34
  ) {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzX.warning(
      "No original clone cwd found for pending worktree task",
      {
        safe: {
          pendingWorktreeId:
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32.id,
        },
        sensitive: {},
      },
    );
    return;
  }
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value35 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param18[
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value34,
        )
      ] ?? null,
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value36 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32.hostId ===
      "local"
        ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper15(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param20,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value34,
          )
        : (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param19.find(
            (item) =>
              item.projectKind === "remote" &&
              item.hostId ===
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value32.hostId &&
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
                item.path,
              ) ===
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSo(
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value34,
                ),
          ) ?? null);
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value36 &&
    ((appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value35 &&
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value36
        .repositoryData?.ownerRepo != null &&
      !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper5(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value36
          .repositoryData.ownerRepo,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value35,
      )) ||
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value36.threadKeys.push(
        event.key,
      ));
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper24(
  event,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param40,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param41,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value64 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper26(
        event,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param40,
      ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value65 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper27(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value64,
      );
  if (
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value65
  ) {
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value6.has(
      event.task.id,
    ) ||
      (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value6.add(
        event.task.id,
      ),
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzX.warning(
        "No owner repo found for remote task",
        {
          safe: {
            taskId: event.task.id,
          },
          sensitive: {},
        },
      ));
    return;
  }
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value66 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value65.repoName.toLowerCase();
  (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param41.find(
      (item) =>
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper5(
          item.repositoryData?.ownerRepo,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value65,
        ) &&
        item.repositoryData?.repoPath === "" &&
        item.repositoryData?.rootFolder?.toLowerCase() ===
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value66,
    ) ??
    null ??
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param41.find(
      (item) =>
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper5(
          item.repositoryData?.ownerRepo,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value65,
        ),
    ) ??
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper25(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value65,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value64,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param41,
    )
  ).threadKeys.push(event.key);
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper25(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param47,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param48,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value76 =
    {
      isLegacyLocalSingleFolderProject: false,
      projectId: `cloud:${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46.owner}/${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46.repoName}`,
      projectKind: "remote",
      cloudEnvironment:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param47 ??
        undefined,
      label:
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46.repoName,
      path: `${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46.owner}/${appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46.repoName}`,
      repositoryData: {
        ownerRepo:
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46,
        repoPath: "",
        rootFolder:
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param46.repoName,
      },
      isCodexWorktree: false,
      threadKeys: [],
    };
  return (
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param48.push(
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value76,
    ),
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value76
  );
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper26(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param90,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param91,
) {
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value133 =
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param90
      .task.task_status_display?.environment_label;
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value133
    ? (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param91[
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value133
      ]?.[0] ?? null)
    : null;
}
function appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper27(
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param82,
) {
  if (
    !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param82
  )
    return null;
  let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value126 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param82
        .repos?.[0],
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value127 =
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value126
        ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param82
            .repo_map?.[
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value126
          ]?.clone_url
        : null;
  return appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value127
    ? (appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKt7wj8foX(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value127,
      ) ?? null)
    : null;
}
var appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value2,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value3,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value4,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value5,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value6,
  $;
export const appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52M =
  rolldownRuntimeN(() => {
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value2 =
      rolldownRuntimeS(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value1(),
        1,
      );
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value3 =
      rolldownRuntimeS(
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52V(),
        1,
      );
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value4 =
      rolldownRuntimeS(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzAs(),
        1,
      );
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value5 =
      rolldownRuntimeS(
        appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainFirstRunAppgenF83t1tf1I(),
        1,
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzW();
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52G();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iDollar();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eN();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iJ();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzB();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandKt7wj8foY();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9Lt();
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52X();
    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value6 =
      new Set();
    $ = (
      event,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param1,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param2,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param3,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param4,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param5,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param6 = appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eI,
      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7,
    ) => {
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7 =
          event.hostId == null ||
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzIi(
            event.hostId,
          )
            ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param6
            : event.hostId,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value8 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7
            ?.threadProjectAssignments?.[event.conversationId],
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value9 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value8 !=
            null &&
          (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value8.projectKind ===
          "local"
            ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7 ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param6
            : appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value8.hostId !=
                null &&
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7 ===
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value8.hostId)
            ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper17(
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value8,
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param1,
              )
            : null;
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value9 !=
        null
      ) {
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value9.threadKeys.push(
          event.key,
        );
        return;
      }
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10 =
        event.cwd;
      if (
        !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10 ||
        !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper7(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10,
        ).length
      )
        return;
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value11 =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10;
      if (
        event.workspaceKind === "projectless" ||
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7?.projectlessThreadIds?.has(
          event.conversationId,
        ) === true
      )
        return;
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value12 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7 !==
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param6,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value13 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7?.remoteProjects,
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value14 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7?.remoteConnections?.find(
            (
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param124,
            ) =>
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param124.hostId ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7,
          ),
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value15 =
          (
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value13 ??
            []
          ).filter((item) => {
            if (
              item.hostId ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7
            )
              return false;
            let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value112 =
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7?.remoteConnections?.find(
                (
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param123,
                ) =>
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param123.hostId ===
                  item.hostId,
              );
            return be(
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value14,
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value112,
            );
          });
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value12 &&
        ((appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7?.enabledRemoteHostIds !=
          null &&
          !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7.enabledRemoteHostIds.has(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7,
          )) ||
          (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value15.length ===
            0 &&
            !appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value13?.some(
              (
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param125,
              ) =>
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param125.hostId ===
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7,
            )))
      )
        return;
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value16 =
        [
          ...(appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value12
            ? Object.entries(
                appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value3.default(
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value15,
                  (
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param126,
                  ) =>
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param126.hostId,
                ),
              ).flatMap(
                ([
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param114,
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param115,
                ]) =>
                  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper18(
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param115,
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param114,
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10,
                    appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7
                      ?.codexHomesByHostId?.[
                      appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param114
                    ],
                  ),
              )
            : []),
        ];
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value16.length ===
        1
      ) {
        (
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param1.find(
            (item) =>
              item.projectId ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value16[0]
                ?.id,
          ) ?? null
        )?.threadKeys.push(event.key);
        return;
      }
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value16.length >
        1
      )
        return;
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value17 =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper19(
          {
            gitOrigins:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param3,
            gitOriginsByHostId:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param4,
            hostId:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7 ??
              undefined,
            primaryHostId:
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param6,
          },
        );
      if (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzSn(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param5,
        ) ||
        (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value12 &&
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper20(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value17,
          ))
      ) {
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value88 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper21(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10,
            event.conversationId,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param1,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param2,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value17,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7?.threadWorkspaceRootHints,
            event.summary != null,
          );
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value88 &&
          (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value11 =
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value88);
      }
      let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value18 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZ(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value11,
          ),
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value19 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value15.filter(
            (item) =>
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZ(
                item.remotePath,
              ) ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value18,
          ),
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value20 =
          appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainSettingsCommandHox8u96iQ(
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value13,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value7,
            appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value11,
          ) ??
          (appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value19.length ===
          1
            ? appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value19[0]
            : null);
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value20 !=
        null
      ) {
        let appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value111 =
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param1.find(
            (item) =>
              item.projectId ===
              appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value20.id,
          ) ?? null;
        if (
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value111 !=
          null
        ) {
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value111.threadKeys.push(
            event.key,
          );
          return;
        }
      }
      if (
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value12
      )
        return;
      let _appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Y =
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Helper15(
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param2,
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value11,
        );
      _appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Y &&
        (_appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Y.threadKeys.push(
          event.key,
        ),
        appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value11 !==
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Value10 &&
          appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Param7?.onDiscoverThreadWorkspaceRootHint?.(
            event.conversationId,
            _appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52Y.path,
          ));
    };
  });
export {
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52B,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52G,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52L,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52N,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52O,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52V,
  appInitialArtifactTabContentElectronAppMainNewThreadPanelPageOnboardingPageSeIsmvjv52X,
};
