// Restored from ref/webview/assets/app-initial~app-main~new-thread-panel-page~onboarding-page~projects-index-page~appgen-libra~cci0ubce-B3AG916S.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer } from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasLowerdLowert,
  currentReactAliasLowerfLowert,
  currentReactAliasLowerx,
  currentReactAliasLowery,
  currentReactAliasLowerzLowert,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasUnderscoreLowero as _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzO,
  currentQueryRpcAliasLowera,
  currentQueryRpcAliasUpperC,
  currentQueryRpcAliasUpperI,
  currentQueryRpcAliasUnderscoreLowero,
  currentQueryRpcAliasUpperS,
  currentQueryRpcAliasLowersLowern,
  currentQueryRpcAliasLowerw,
} from "../app-initial-query-rpc-runtime";
import {
  FormattedMessage,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  currentHostServicesAliasLowerlLowert,
  currentHostServicesAliasUpperS,
  currentHostServicesAliasLowersLowert,
  currentHostServicesAliasUpperT,
  currentHostServicesAliasLowerx,
} from "../app-initial-host-services-runtime";
import {
  statsigGateValueStore,
  initStatsigGateStore,
} from "../../package-adapters/statsig-current/entry";
import {
  businessCheckoutSharedFunction0149 as _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcI,
  businessCheckoutSharedInitializer0501,
  businessCheckoutSharedMember0518,
  businessCheckoutSharedFunction0149,
  businessCheckoutSharedMember0756,
  businessCheckoutSharedMember0758,
  businessCheckoutSharedMember0333,
  businessCheckoutSharedMember0858,
} from "../business-checkout-shared-current";
import {
  conversationIdForClientThreadSignal,
  initThreadScopeRuntime,
} from "../app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s";
import {
  hostConfigByIdSignal,
  initWorkspaceConfigSignalsRuntime,
  initConfigQueryRuntime,
  userConfigQuery,
} from "../business-checkout-config/entry";
import {
  businessCheckoutSecondaryRuntimeFunction0012 as _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutDjgpmkubK,
  businessCheckoutSecondaryRuntimeMember0034,
  businessCheckoutSecondaryRuntimeMember0008,
  businessCheckoutSecondaryRuntimeFunction0009,
  businessCheckoutSecondaryRuntimeMember0011,
  businessCheckoutSecondaryRuntimeFunction0012,
  businessCheckoutSecondaryRuntimeMember0055,
  businessCheckoutSecondaryRuntimeFunction0023,
} from "../business-checkout-secondary-runtime-current";
import {
  parseGitRepositoryUrl,
  initGitRepositoryUrlParserChunk,
} from "../../../utils/git-repository-url";
import {
  settingsCommandSharedRuntimeVariant8Member0013,
  settingsCommandSharedRuntimeVariant8Member0014,
  settingsCommandSharedRuntimeVariant8Member0017,
  settingsCommandSharedRuntimeVariant8Member0027,
  settingsCommandSharedRuntimeVariant8Member0028,
  settingsCommandSharedRuntimeVariant8Member0031,
} from "../settings-command-shared-runtime-variant-8-current";
import {
  pullRequestCodeReviewNewThreadPaneRuntimeVariant7Member0022,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant7Member0028,
} from "../pull-request-code-review-new-thread-pane-runtime-variant-7-current";
import {
  newThreadOnboardingSharedRuntimeFunction0012,
  newThreadOnboardingSharedRuntimeFunction0017,
  newThreadOnboardingSharedRuntimeMember0018,
  newThreadOnboardingSharedRuntimeMember0020,
  newThreadOnboardingSharedRuntimeMember0005,
  newThreadOnboardingSharedRuntimeFunction0022,
  newThreadOnboardingSharedRuntimeFunction0025,
} from "../new-thread-onboarding-shared-runtime-current";
import {
  newThreadOnboardingSharedRuntimeVariant15Member0003,
  newThreadOnboardingSharedRuntimeVariant15Member0020,
} from "../app-initial~artifact-tab-content.electron~app-main~new-thread-panel-page~onboarding-page~se~ismvjv52";
export function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceK({
  projectSidebarEnabled,
  organizeMode,
  showProjectsTitle,
  showRecent,
}) {
  return projectSidebarEnabled
    ? showRecent
      ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue1.jsx(
          FormattedMessage,
          {
            id: "sidebarElectron.allChatsNavLink",
            defaultMessage: "All chats",
            description:
              "Section label above the chronological list of all tasks in the sidebar",
          },
        )
      : organizeMode === "connection"
        ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue1.jsx(
            FormattedMessage,
            {
              id: "sidebarElectron.connectionsNavLink",
              defaultMessage: "Connections",
              description:
                "Section label above connection task groups in the sidebar",
            },
          )
        : showProjectsTitle
          ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue1.jsx(
              FormattedMessage,
              {
                id: "sidebarElectron.projectsNavLink",
                defaultMessage: "Projects",
                description:
                  "Section label above project task groups in the sidebar",
              },
            )
          : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue1.jsx(
              FormattedMessage,
              {
                id: "sidebarElectron.recentNavLink",
                defaultMessage: "Chats",
                description:
                  "Section label above recent tasks list in the sidebar",
              },
            )
    : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue1.jsx(
        FormattedMessage,
        {
          id: "sidebarElectron.cloudTasksNavLink",
          defaultMessage: "Codex Cloud",
          description: "Section label above cloud tasks in the browser sidebar",
        },
      );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceW({
  projectSidebarEnabled,
  organizeMode,
  showProjectsTitle,
  showRecent,
}) {
  return projectSidebarEnabled
    ? showRecent
      ? "All chats"
      : organizeMode === "connection"
        ? "Connections"
        : showProjectsTitle
          ? "Projects"
          : "Tasks"
    : "Codex Cloud";
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceG({
  intl,
  organizeMode,
  projectSidebarEnabled,
  showProjectsTitle,
  showRecent,
}) {
  return projectSidebarEnabled
    ? showRecent
      ? intl.formatMessage({
          id: "sidebarElectron.allChatsNavLink",
          defaultMessage: "All chats",
          description:
            "Section label above the chronological list of all tasks in the sidebar",
        })
      : organizeMode === "connection"
        ? intl.formatMessage({
            id: "sidebarElectron.connectionsNavLink",
            defaultMessage: "Connections",
            description:
              "Section label above connection task groups in the sidebar",
          })
        : showProjectsTitle
          ? intl.formatMessage({
              id: "sidebarElectron.projectsNavLink",
              defaultMessage: "Projects",
              description:
                "Section label above project task groups in the sidebar",
            })
          : intl.formatMessage({
              id: "sidebarElectron.recentNavLink",
              defaultMessage: "Chats",
              description:
                "Section label above recent tasks list in the sidebar",
            })
    : "Codex Cloud";
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceJ(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam11,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam12,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam11
    .map((item, index) => ({
      group: item,
      index,
    }))
    .sort(
      (
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam24,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam25,
      ) => {
        let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue85 =
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceU(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam24
                .group.threadKeys,
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam12,
            )[0]?.at ?? -1 / 0,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue86 =
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceU(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam25
                .group.threadKeys,
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam12,
            )[0]?.at ?? -1 / 0;
        return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue85 ===
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue86
          ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam24.index -
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam25.index
          : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue86 -
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue85;
      },
    )
    .map(({ group }) => group);
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceY(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam29,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam30,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam31,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue99 =
    new Map(
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam30.map(
        (item) => [item.projectId, item],
      ),
    );
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceJ(
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam29.map(
      (item) =>
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue99.get(
          item.projectId,
        ) ?? item,
    ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam31,
  );
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceH(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam43,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam44,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam43.flatMap(
    (item) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue113 =
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam44.get(
          item,
        );
      return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue113 ==
        null
        ? []
        : [
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue113,
          ];
    },
  );
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceU(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam53,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam54,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceH(
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam53,
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam54,
  ).map((item) => item.task);
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper1({
  defaultProjectLabel,
  projectLabel,
  repositoryLabel,
}) {
  if (
    defaultProjectLabel == null ||
    projectLabel == null ||
    repositoryLabel == null
  )
    return null;
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue65 =
      projectLabel.trim(),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue66 =
      repositoryLabel.trim();
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue66 !==
    "" &&
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue66 !==
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue65 &&
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue65 !==
      defaultProjectLabel.trim()
    ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue66
    : null;
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper2({
  chatLabel,
  task,
  projectLabel,
  projectlessThreadIds,
  showProjectlessHoverCard = false,
}) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue14 =
    projectLabel?.trim();
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue14
  )
    return {
      isProjectless: false,
      label:
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue14,
    };
  if (
    (task.kind === "local" &&
      task.conversation != null &&
      (task.conversation.workspaceKind === "projectless" ||
        projectlessThreadIds?.has(task.conversation.id) === true)) ||
    (task.kind === "remote" && projectlessThreadIds?.has(task.task.id) === true)
  )
    return {
      isProjectless: true,
      label: showProjectlessHoverCard ? chatLabel : null,
    };
  if (task.kind === "local" && task.conversation != null)
    return {
      isProjectless: false,
      label:
        (task.conversation.cwd
          ? currentHostServicesAliasLowersLowert(task.conversation.cwd)
          : "") || chatLabel,
    };
  if (task.kind === "remote")
    return {
      isProjectless: false,
      label: task.task.task_status_display?.environment_label ?? chatLabel,
    };
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue15 =
    task.kind === "local"
      ? (task.pendingWorktree.sourceWorkspaceRoot ??
        task.pendingWorktree.worktreeWorkspaceRoot ??
        task.pendingWorktree.worktreeGitRoot)
      : null;
  return {
    isProjectless: false,
    label:
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue15
        ? currentHostServicesAliasLowersLowert(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue15,
          )
        : chatLabel,
  };
}
var appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue1,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceQ =
    createLazyEsmInitializer(() => {
      initReactIntlRuntimeChunk();
      currentHostServicesAliasLowerlLowert();
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue1 =
        currentReactAliasLowerzLowert();
    });
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceZ({
  threadKeys,
  pinnedThreadIds,
  referencesByThreadKey,
}) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue31 =
      new Set(pinnedThreadIds),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue32 =
      new Map(),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue33 =
      new Map();
  for (let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue54 of threadKeys) {
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue62 =
      referencesByThreadKey.get(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue54,
      );
    if (
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue62?.pendingWorktreeId !=
      null
    ) {
      let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue102 =
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue33.get(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue62.pinnedBeforeThreadId,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue102 ==
      null
        ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue33.set(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue62.pinnedBeforeThreadId,
            [
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue54,
            ],
          )
        : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue102.push(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue54,
          );
      continue;
    }
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue62?.threadId !=
      null &&
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue31.has(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue62.threadId,
      ) &&
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue32.set(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue62.threadId,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue54,
      );
  }
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue34 =
      [],
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue35 =
      (
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam48,
      ) => {
        let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue107 =
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue33.get(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam48,
          );
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue107 !=
          null &&
          (appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue34.push(
            ...appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue107,
          ),
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue33.delete(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam48,
          ));
      };
  for (let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue109 of pinnedThreadIds) {
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue35(
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue109,
    );
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue115 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue32.get(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue109,
      );
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue115 !=
      null &&
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue34.push(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue115,
      );
  }
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue35(
    null,
  );
  for (let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue117 of appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue33.values())
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue34.push(
      ...appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue117,
    );
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue34;
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceB(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam38,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam39,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam38.flatMap(
    (item) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue110 =
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam39.get(
          item,
        )?.threadId;
      return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue110 ==
        null
        ? []
        : [
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue110,
          ];
    },
  );
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceL({
  sortablePinnedThreadKeys,
  referencesByThreadKey,
}) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue51 =
    [];
  for (let [
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue63,
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue64,
  ] of sortablePinnedThreadKeys.entries()) {
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue74 =
      referencesByThreadKey.get(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue64,
      );
    if (
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue74?.pendingWorktreeId ==
      null
    )
      continue;
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue75 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper3(
        sortablePinnedThreadKeys,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue63,
        referencesByThreadKey,
      );
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue74.pinnedBeforeThreadId !==
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue75 &&
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue51.push(
        {
          pendingWorktreeId:
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue74.pendingWorktreeId,
          beforeThreadId:
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue75,
        },
      );
  }
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue51;
}
export function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceR(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam15,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam16,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue70 =
      new Map(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam16.map(
          (item, index) => [item, index],
        ),
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue71 =
      (
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam65,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam66,
      ) =>
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue70.get(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam65,
        ) ??
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam66;
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam15
    .map((item, index) => [item, index])
    .sort(
      (
        [
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam55,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam56,
        ],
        [
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam57,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam58,
        ],
      ) =>
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue71(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam55,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam56,
        ) -
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue71(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam57,
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam58,
          ) ||
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam56 -
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam58,
    )
    .map(
      ([
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam67,
      ]) =>
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam67,
    );
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper3(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam21,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam22,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam23,
) {
  for (
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue94 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam22 +
      1;
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue94 <
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam21.length;
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue94 += 1
  ) {
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue105 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam21[
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue94
      ];
    if (
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue105 ==
      null
    )
      continue;
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue106 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam23.get(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue105,
      )?.threadId;
    if (
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue106 !=
      null
    )
      return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue106;
  }
  return null;
}
var appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceV =
    createLazyEsmInitializer(() => {}),
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceI,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceF =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerb();
      currentQueryRpcAliasUpperC();
      _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzO();
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceI =
        currentQueryRpcAliasLowera(
          currentReactAliasLowery,
          "list-pinned-threads",
          {
            refetchOnWindowFocus: true,
            staleTime: currentQueryRpcAliasUpperS.FIVE_SECONDS,
          },
        );
    }),
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceP,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceK,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue2,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue3,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue4,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceJ,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceN,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceA,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceM =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerx();
      businessCheckoutSharedFunction0149();
      initConfigQueryRuntime();
      businessCheckoutSecondaryRuntimeMember0055();
      currentReactAliasLowerb();
      initWorkspaceConfigSignalsRuntime();
      businessCheckoutSecondaryRuntimeMember0034();
      settingsCommandSharedRuntimeVariant8Member0017();
      initStatsigGateStore();
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceP =
        currentReactAliasLowerdLowert(currentReactAliasLowery, () => true);
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceK =
        currentReactAliasLowerdLowert(
          currentReactAliasLowery,
          ({ get }) =>
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceP,
            ) &&
            get(hostConfigByIdSignal, get(businessCheckoutSharedMember0333))
              .kind === "local",
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue2 =
        currentReactAliasLowerdLowert(
          currentReactAliasLowery,
          ({ get }) => true,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue3 =
        currentReactAliasLowerdLowert(currentReactAliasLowery, ({ get }) => {
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue38 =
            get(userConfigQuery, get(businessCheckoutSharedMember0333));
          if (get(statsigGateValueStore, "4114442250")) return "enabled";
          if (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue38.isLoading
          )
            return "loading";
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue39 =
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue38
              .data?.config;
          if (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue39?.[
              "features.remote_connections"
            ] === true
          )
            return "enabled";
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue40 =
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue39?.features;
          return typeof appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue40 !=
            "object" ||
            !appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue40 ||
            Array.isArray(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue40,
            )
            ? "disabled"
            : Object.getOwnPropertyDescriptor(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue40,
                  "remote_connections",
                )?.value === true
              ? "enabled"
              : "disabled";
        });
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue4 =
        currentReactAliasLowerdLowert(currentReactAliasLowery, ({ get }) =>
          get(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue3,
          ) === "enabled"
            ? get(settingsCommandSharedRuntimeVariant8Member0013).filter(
                (item) =>
                  get(businessCheckoutSharedMember0758, item.hostId) ===
                  "connected",
              )
            : [],
        );
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceJ =
        currentReactAliasLowerdLowert(
          currentReactAliasLowery,
          ({ get }) =>
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue4,
            ).length > 0,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceN =
        currentReactAliasLowerdLowert(currentReactAliasLowery, ({ get }) => {
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue46 =
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue3,
            );
          if (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue46 ===
            "loading"
          )
            return true;
          if (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue46 ===
            "disabled"
          )
            return false;
          if (get(businessCheckoutSecondaryRuntimeMember0011)) return true;
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue47 =
            get(businessCheckoutSharedInitializer0501);
          return get(settingsCommandSharedRuntimeVariant8Member0013).some(
            ({ hostId }) => {
              if (
                !appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue47.includes(
                  hostId,
                ) ||
                !get(
                  _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcI,
                  hostId,
                )
              )
                return true;
              let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue89 =
                get(businessCheckoutSharedMember0758, hostId);
              return (
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue89 ===
                  "connecting" ||
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue89 ===
                  "restarting"
              );
            },
          );
        });
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceA =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          ({ localProjectActionsEnabled }, { get }) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue90 =
                get(
                  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceJ,
                ),
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue91 =
                get(
                  _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutDjgpmkubK,
                );
            return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue91 ===
              "project" &&
              !localProjectActionsEnabled &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue90
              ? "connection"
              : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue91;
          },
        );
    });
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceH(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam17,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam18,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue72 =
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam17(
      businessCheckoutSharedMember0858,
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam18,
    );
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue72 ==
      null ||
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue72 ===
      "needs_resume"
  )
    return false;
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue73 =
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam17(
      businessCheckoutSharedMember0756,
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam18,
    );
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue73 ==
    null
    ? false
    : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue73 ===
        0
      ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue72 ===
        "resuming"
      : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam17(
          businessCheckoutSharedMember0518,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam18,
        ) === "inProgress";
}
var $e,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceG,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue5,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue6,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue7,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceUnderscore,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceT,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceW,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceV,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceX,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceS,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceB,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceY,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceC,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceO,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceE,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceM =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerx();
      currentQueryRpcAliasLowerw();
      businessCheckoutSharedFunction0149();
      currentHostServicesAliasUpperT();
      newThreadOnboardingSharedRuntimeMember0018();
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceF();
      currentReactAliasLowerb();
      initWorkspaceConfigSignalsRuntime();
      initThreadScopeRuntime();
      settingsCommandSharedRuntimeVariant8Member0014();
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceQ();
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceM();
      pullRequestCodeReviewNewThreadPaneRuntimeVariant7Member0028();
      settingsCommandSharedRuntimeVariant8Member0017();
      newThreadOnboardingSharedRuntimeMember0020();
      businessCheckoutSecondaryRuntimeMember0008();
      initGitRepositoryUrlParserChunk();
      currentHostServicesAliasLowerlLowert();
      $e = [];
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceG =
        currentReactAliasLowerdLowert(
          currentReactAliasLowery,
          ({ get }) =>
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceI,
            ).data?.threadIds ?? $e,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue5 =
        currentReactAliasLowerdLowert(
          currentReactAliasLowery,
          ({ get }) =>
            get(pullRequestCodeReviewNewThreadPaneRuntimeVariant7Member0022, {
              threadKeys: get(settingsCommandSharedRuntimeVariant8Member0028),
              enabled: true,
            }).groups,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue6 =
        currentReactAliasLowerdLowert(currentReactAliasLowery, ({ get }) =>
          newThreadOnboardingSharedRuntimeFunction0022(
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue5,
            ),
          ),
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam64,
            { get },
          ) =>
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue6,
            ).get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam64,
            ) ?? null,
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue7 =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam20,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue83 =
              get(
                settingsCommandSharedRuntimeVariant8Member0027,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam20,
              );
            return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue83?.kind ===
              "local" &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue83.conversation !=
                null
              ? currentHostServicesAliasUpperS(
                  get,
                  currentQueryRpcAliasUnderscoreLowero.THREAD_PROJECT_ASSIGNMENTS,
                )?.[
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue83
                    .conversation.id
                ]
              : undefined;
          },
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceUnderscore =
        currentReactAliasLowerdLowert(currentReactAliasLowery, ({ get }) =>
          newThreadOnboardingSharedRuntimeFunction0025(
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue5,
            ),
          ),
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceT =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam4,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue41 =
              get(
                settingsCommandSharedRuntimeVariant8Member0027,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam4,
              );
            if (
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue41?.kind ===
                "local" &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue41.conversation ==
                null
            )
              return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue41
                .pendingWorktree.isPinned;
            switch (
              businessCheckoutSecondaryRuntimeFunction0012(
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam4,
              )?.kind
            ) {
              case "local":
              case "remote": {
                let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue82 =
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue41?.kind ===
                    "local" &&
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue41.conversation !=
                    null
                    ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue41
                        .conversation.id
                    : businessCheckoutSecondaryRuntimeFunction0009(
                        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam4,
                      );
                return (
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue82 !=
                    null &&
                  get(
                    _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceG,
                  ).includes(
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue82,
                  )
                );
              }
              case undefined:
                return false;
            }
          },
        );
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceW =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam28,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue95 =
                businessCheckoutSecondaryRuntimeFunction0023(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam28,
                ),
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue96 =
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue95 ==
                null
                  ? null
                  : get(
                      conversationIdForClientThreadSignal,
                      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue95,
                    );
            return (
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue96 !=
                null &&
              get(
                settingsCommandSharedRuntimeVariant8Member0031,
              ).automationThreadIds.has(
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue96,
              )
            );
          },
        );
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceV =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam26,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue87 =
                businessCheckoutSecondaryRuntimeFunction0023(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam26,
                ),
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue88 =
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue87 ==
                null
                  ? null
                  : get(
                      conversationIdForClientThreadSignal,
                      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue87,
                    );
            return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue88 ==
              null
              ? null
              : (get(
                  settingsCommandSharedRuntimeVariant8Member0031,
                ).automationDisplayNames.get(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue88,
                ) ?? null);
          },
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceX =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam3,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue36 =
              get(
                settingsCommandSharedRuntimeVariant8Member0027,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam3,
              );
            if (
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue36 ==
              null
            )
              return null;
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue37 =
              currentHostServicesAliasUpperS(
                get,
                currentQueryRpcAliasUnderscoreLowero.PROJECTLESS_THREAD_IDS,
              );
            return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper2(
              {
                chatLabel: get(
                  newThreadOnboardingSharedRuntimeMember0005,
                ).formatMessage({
                  id: "sidebarElectron.threadHoverCardChatProject",
                  defaultMessage: "Chat",
                  description:
                    "Fallback project label for a sidebar task hover card when it does not belong to a project or workspace",
                }),
                task: appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue36,
                projectLabel: get(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD,
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam3,
                )?.label,
                projectlessThreadIds:
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue37 ==
                  null
                    ? undefined
                    : new Set(
                        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue37,
                      ),
                showProjectlessHoverCard: get(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue2,
                ),
              },
            );
          },
          {
            isEqual: (
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam49,
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam50,
            ) =>
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam49?.isProjectless ===
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam50?.isProjectless &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam49?.label ===
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam50?.label,
          },
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceS =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam63,
            { get },
          ) =>
            get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD,
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam63,
            )?.projectId ?? null,
        );
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceB =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam27,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue92 =
              get(
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam27,
              )?.hostId;
            if (
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue92 ==
              null
            )
              return null;
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue93 =
              get(
                hostConfigByIdSignal,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue92,
              );
            return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue93.id ===
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue92
              ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue93
              : null;
          },
        );
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceY =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam10,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue52 =
              get(
                settingsCommandSharedRuntimeVariant8Member0027,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam10,
              );
            return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue52?.kind ===
              "local"
              ? currentQueryRpcAliasUpperI({
                  cwd:
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue52.conversation ==
                    null
                      ? (appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue52
                          .pendingWorktree.sourceWorkspaceRoot ?? null)
                      : (appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue52
                          .conversation.cwd ?? null),
                  assignment: get(
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue7,
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam10,
                  ),
                })
              : null;
          },
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceC =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam2,
            { get },
          ) => {
            let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue28 =
                get(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD,
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam2,
                ),
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue29 =
                get(
                  settingsCommandSharedRuntimeVariant8Member0027,
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam2,
                ),
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue30 =
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue28
                  ?.repositoryData?.rootFolder ?? null;
            if (
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue30 ==
                null &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue28?.projectKind ===
                "local" &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue29?.kind ===
                "local" &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue29.conversation !=
                null &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue29
                .conversation.gitInfo != null &&
              get(
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue7,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam2,
              )?.pendingCoreUpdate !== true
            ) {
              let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue78 =
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue29
                    .conversation.gitInfo.originUrl,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue79 =
                  get(
                    _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceY,
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam2,
                  );
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue78 !=
                null &&
                (appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue30 =
                  parseGitRepositoryUrl(
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue78,
                  )?.repoName ?? null);
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue30 ==
                null &&
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue79 !=
                  null &&
                !currentQueryRpcAliasLowersLowern(
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue79,
                ) &&
                (appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue30 =
                  currentHostServicesAliasLowersLowert(
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue79,
                  ));
            }
            return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper1(
              {
                defaultProjectLabel:
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue28?.path ==
                  null
                    ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue30
                    : currentHostServicesAliasLowersLowert(
                        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue28.path,
                      ),
                projectLabel:
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue28?.label ??
                  null,
                repositoryLabel:
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue30,
              },
            );
          },
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceO =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam45,
            { get },
          ) =>
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam45 ==
            null
              ? null
              : (currentHostServicesAliasUpperS(
                  get,
                  currentQueryRpcAliasUnderscoreLowero.THREAD_WORKSPACE_ROOT_HINTS,
                )?.[
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam45
                ] ?? null),
        );
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceE =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam37,
            { get },
          ) =>
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam37 ==
            null
              ? null
              : (currentHostServicesAliasUpperS(
                  get,
                  currentQueryRpcAliasUnderscoreLowero.SIDEBAR_THREAD_METADATA,
                )?.[
                  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam37
                ]?.labelColor ?? null),
        );
    });
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper4(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam6,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam7,
) {
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam6.length !==
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam7.length
  )
    return false;
  for (
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue53 = 0;
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue53 <
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam7.length;
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue53 += 1
  ) {
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue58 =
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam6[
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue53
        ],
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue59 =
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam7[
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue53
        ];
    if (
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue58 ==
        null ||
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue59 ==
        null ||
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue58.task !==
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue59.task ||
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue58.isPinned !==
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue59.isPinned ||
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue58.isAutomationRun !==
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue59.isAutomationRun ||
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue58.automationDisplayName !==
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue59.automationDisplayName
    )
      return false;
  }
  return true;
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper5(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam9,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue48 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper6(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8.allSidebarThreadKeys,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam9.allSidebarThreadKeys,
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue49 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper6(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8.pinnedThreadKeys,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam9.pinnedThreadKeys,
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue50 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper6(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8.unpinnedThreadKeys,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam9.unpinnedThreadKeys,
      );
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue48 ===
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8.allSidebarThreadKeys &&
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue49 ===
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8.pinnedThreadKeys &&
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue50 ===
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8.unpinnedThreadKeys
    ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam8
    : {
        allSidebarThreadKeys:
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue48,
        pinnedThreadKeys:
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue49,
        unpinnedThreadKeys:
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue50,
      };
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper6(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam32,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam33,
) {
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam32.length !==
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam33.length
  )
    return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam33;
  for (
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue114 = 0;
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue114 <
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam33.length;
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue114 += 1
  )
    if (
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam32[
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue114
      ] !==
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam33[
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue114
      ]
    )
      return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam33;
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam32;
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper7({
  get,
  threadKeys,
  pinnedThreadIds,
}) {
  if (threadKeys.length === 0)
    return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue10;
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue20 =
    threadKeys.filter(
      (item) =>
        !get(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue12,
          item,
        ),
    );
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue20.length ===
    0
  )
    return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue10;
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue21 =
      [],
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue22 =
      new Map(),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue23 =
      new Map();
  for (let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue67 of appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue20) {
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue76 =
      get(
        settingsCommandSharedRuntimeVariant8Member0027,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue67,
      );
    if (
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue76 ==
      null
    )
      continue;
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue77 =
      newThreadOnboardingSharedRuntimeFunction0012(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue76,
      );
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue22.set(
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue67,
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue77,
    );
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue77.pendingWorktreeId ==
    null
      ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue77.threadId !=
          null &&
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue23.set(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue77.threadId,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue67,
        )
      : get(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceT,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue67,
        ) &&
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue21.push(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue67,
        );
  }
  for (let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue112 of pinnedThreadIds) {
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue116 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue23.get(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue112,
      );
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue116 !=
      null &&
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue21.push(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue116,
      );
  }
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue24 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceZ(
        {
          threadKeys:
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue21,
          pinnedThreadIds,
          referencesByThreadKey:
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue22,
        },
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue25 =
      new Set(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue24,
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue26 =
      new Set(pinnedThreadIds),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue27 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue20.filter(
        (item) => {
          if (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue25.has(
              item,
            )
          )
            return false;
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue97 =
              get(settingsCommandSharedRuntimeVariant8Member0027, item),
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue98 =
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue97 ==
              null
                ? businessCheckoutSecondaryRuntimeFunction0009(item)
                : newThreadOnboardingSharedRuntimeFunction0012(
                    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue97,
                  ).threadId;
          return (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue98 ==
              null ||
            !appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue26.has(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue98,
            )
          );
        },
      );
  return {
    allSidebarThreadKeys: [
      ...appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue24,
      ...appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue27,
    ],
    pinnedThreadKeys:
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue24,
    unpinnedThreadKeys:
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue27,
  };
}
var appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue8,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue9,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue10,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue11,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue12,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceP,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceF;
export const _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerx();
    currentQueryRpcAliasLowerw();
    currentHostServicesAliasUpperT();
    currentReactAliasLowerb();
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceV();
    settingsCommandSharedRuntimeVariant8Member0017();
    newThreadOnboardingSharedRuntimeMember0020();
    businessCheckoutSecondaryRuntimeMember0008();
    _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceM();
    newThreadOnboardingSharedRuntimeVariant15Member0020();
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue8 =
      [];
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue9 =
      [];
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue10 =
      {
        allSidebarThreadKeys:
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue9,
        pinnedThreadKeys:
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue9,
        unpinnedThreadKeys:
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue9,
      };
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue11 =
      new WeakMap();
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue12 =
      currentReactAliasLowerfLowert(
        currentReactAliasLowery,
        (
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam1,
          { get },
        ) => {
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue16 =
            currentHostServicesAliasLowerx(
              get,
              currentQueryRpcAliasUnderscoreLowero.LOCAL_PROJECTS,
            );
          if (
            !appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue16.isSuccess
          )
            return false;
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17 =
            get(
              settingsCommandSharedRuntimeVariant8Member0027,
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam1,
            );
          if (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17 ==
            null
          )
            return false;
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue18 =
              newThreadOnboardingSharedRuntimeFunction0012(
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17,
              ).threadId,
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue19 =
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17.kind ===
                "local" &&
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17.conversation ==
                null
                ? newThreadOnboardingSharedRuntimeVariant15Member0003({
                    type: "assignment",
                    assignment:
                      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17
                        .pendingWorktree.launchMode === "fork-conversation"
                        ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17
                            .pendingWorktree.projectAssignment
                        : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17
                            .pendingWorktree.startConversationParamsInput
                            ?.projectAssignment,
                    executionHostId:
                      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue17
                        .pendingWorktree.hostId,
                  })
                : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue18 ==
                    null
                  ? undefined
                  : currentHostServicesAliasUpperS(
                      get,
                      currentQueryRpcAliasUnderscoreLowero.THREAD_PROJECT_ASSIGNMENTS,
                    )?.[
                      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue18
                    ];
          return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue19?.projectKind !==
            "local" ||
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue16
              .data?.[
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue19
                .projectId
            ] != null
            ? false
            : get(
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD,
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam1,
              )?.projectKind !== "local";
        },
      );
    _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceP =
      currentReactAliasLowerdLowert(
        currentReactAliasLowery,
        ({ get, scope }) => {
          let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue84 =
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper5(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue11.get(
                scope.node,
              ) ??
                appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue10,
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper7(
                {
                  get,
                  threadKeys: get(
                    settingsCommandSharedRuntimeVariant8Member0028,
                  ),
                  pinnedThreadIds: get(
                    _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceG,
                  ),
                },
              ),
            );
          return (
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue11.set(
              scope.node,
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue84,
            ),
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue84
          );
        },
      );
    _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceF =
      currentReactAliasLowerfLowert(
        currentReactAliasLowery,
        (
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam5,
          { get },
        ) =>
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam5.length ===
          0
            ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue8
            : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam5.flatMap(
                (item) => {
                  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue45 =
                    get(settingsCommandSharedRuntimeVariant8Member0027, item);
                  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue45 ==
                    null
                    ? []
                    : [
                        {
                          task: appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue45,
                          isPinned: get(
                            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceT,
                            item,
                          ),
                          isAutomationRun: get(
                            _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceW,
                            item,
                          ),
                          automationDisplayName: get(
                            _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceV,
                            item,
                          ),
                        },
                      ];
                },
              ),
        {
          isEqual:
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper4,
        },
      );
  });
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceC({
  threadIds,
  visibleThreadIds,
  nextVisibleThreadIds,
}) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue55 =
      new Set(visibleThreadIds),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue56 = 0,
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue57 =
      [];
  for (let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue100 of threadIds) {
    if (
      !appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue55.has(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue100,
      )
    ) {
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue57.push(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue100,
      );
      continue;
    }
    let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue103 =
      nextVisibleThreadIds[
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue56
      ];
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue103 !=
      null &&
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue57.push(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue103,
      );
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue56 += 1;
  }
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue57;
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceA({
  visibleThreadKeys,
  pendingVisibleThreadOrder,
}) {
  return pendingVisibleThreadOrder == null ||
    !_appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceO(
      pendingVisibleThreadOrder.previousVisibleThreadKeys,
      visibleThreadKeys,
    ) ||
    !appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper8(
      pendingVisibleThreadOrder.nextVisibleThreadKeys,
      visibleThreadKeys,
    )
    ? visibleThreadKeys
    : pendingVisibleThreadOrder.nextVisibleThreadKeys;
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceI({
  visibleThreadKeys,
  activeThreadKey,
  overThreadKey,
  placement,
}) {
  if (
    activeThreadKey == null ||
    overThreadKey == null ||
    activeThreadKey === overThreadKey
  )
    return null;
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue42 =
      visibleThreadKeys.filter((item) => item !== activeThreadKey),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue43 =
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue42.indexOf(
        overThreadKey,
      );
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue43 ===
    -1
  )
    return null;
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue44 =
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue42[
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue43 +
        +(placement === "after")
    ] ?? null;
  return visibleThreadKeys.includes(activeThreadKey) &&
    _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceO(
      visibleThreadKeys,
      _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceL(
        {
          visibleThreadKeys,
          activeThreadKey,
          beforeThreadKey:
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue44,
        },
      ),
    )
    ? null
    : {
        beforeThreadKey:
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue44,
      };
}
function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceL({
  visibleThreadKeys,
  activeThreadKey,
  beforeThreadKey,
}) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue68 =
      visibleThreadKeys.filter((item) => item !== activeThreadKey),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue69 =
      beforeThreadKey == null
        ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue68.length
        : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue68.indexOf(
            beforeThreadKey,
          );
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue69 ===
    -1
    ? visibleThreadKeys
    : [
        ...appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue68.slice(
          0,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue69,
        ),
        activeThreadKey,
        ...appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue68.slice(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue69,
        ),
      ];
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceT(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam13,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam14,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue60 =
      new Map(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam14.map(
          (item, index) => [item, index],
        ),
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue61 =
      (
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam51,
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam52,
      ) => {
        let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue108 =
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper9(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam51,
          );
        return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue108 ==
          null
          ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam52
          : (appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue60.get(
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue108,
            ) ??
              appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam52);
      };
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam13
    .map((item, index) => [item, index])
    .sort(
      (
        [
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam59,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam60,
        ],
        [
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam61,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam62,
        ],
      ) =>
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue61(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam59,
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam60,
        ) -
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue61(
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam61,
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam62,
          ) ||
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam60 -
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam62,
    )
    .map(
      ([
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam68,
      ]) =>
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam68,
    );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceR(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam36,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam36.flatMap(
    (item) =>
      item.task.kind === "local" && item.task.conversation == null
        ? []
        : [item.task.key],
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceN(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam34,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam35 = [],
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue101 =
    newThreadOnboardingSharedRuntimeFunction0017(
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam35,
    );
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam34.flatMap(
    (item) => {
      let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue111 =
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue101.get(
          item,
        ) ?? businessCheckoutSecondaryRuntimeFunction0009(item);
      return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue111 ==
        null
        ? []
        : [
            appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue111,
          ];
    },
  );
}
export function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceU(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam19,
) {
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue80 =
      String(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam19,
      ),
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue81 =
      businessCheckoutSecondaryRuntimeFunction0012(
        appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue80.startsWith(
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue13,
        )
          ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue80.slice(
              13,
            )
          : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue80,
      );
  switch (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue81?.kind
  ) {
    case "local":
    case "remote":
      return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue81.key;
    case undefined:
      return null;
  }
}
function _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceO(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam46,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam47,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam46.length ===
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam47.length
    ? appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam46.every(
        (item, index) =>
          item ===
          appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam47[
            index
          ],
      )
    : false;
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper8(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam40,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam41,
) {
  if (
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam40.length !==
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam41.length
  )
    return false;
  let appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue104 =
    new Set(
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam41,
    );
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam40.every(
    (item) =>
      appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue104.has(
        item,
      ),
  );
}
function appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceHelper9(
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam42,
) {
  return appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam42
    .task.kind === "local" &&
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam42
      .task.conversation == null
    ? null
    : appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceParam42
        .task.key;
}
var appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue13;
export const _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceS =
  createLazyEsmInitializer(() => {
    newThreadOnboardingSharedRuntimeMember0020();
    businessCheckoutSecondaryRuntimeMember0008();
    appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceValue13 =
      "codex:thread:";
  });
export {
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceA,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceC,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceD,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceE,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceF,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceH,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceI,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceJ,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceM,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceN,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceO,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceP,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceS,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceT,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceU,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceV,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceUnderscore,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceB,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceF,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceG,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceJ,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceK,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceL,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceM,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceO,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceP,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceQ,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceV,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceW,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceX,
  _appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceY,
  appInitialAppMainNewThreadPanelPageOnboardingPageProjectsIndexPageAppgenLibraCci0ubceZ,
};
