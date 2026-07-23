// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~quick-chat-window-page~chatgpt-conversation-page-CnNMwyju.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer } from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasUpperD,
  currentReactAliasUpperE,
  currentReactAliasLowerfLowert,
  currentReactAliasUpperO,
  currentReactAliasLoweruLowern,
  currentReactAliasLowerx,
  currentReactAliasLowery,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasUpperC,
  currentQueryRpcAliasUpperCLowerl,
  currentQueryRpcAliasUpperFLowerl,
  currentQueryRpcAliasUpperLLowerl,
  currentQueryRpcAliasUpperS,
  currentQueryRpcAliasLowerxLowerl,
} from "../app-initial-query-rpc-runtime";
import { currentAppInitialSharedFunction0626 } from "../current-app-shared-current";
import {
  initConversationRouteRuntime,
  useLocation,
  useNavigate,
  initReactRouterRuntime,
  conversationRouteTemplate,
  matchPath,
  buildChatgptConversationPath,
} from "../app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s";
import {
  businessCheckoutSecondaryRuntimeMember0034,
  businessCheckoutSecondaryRuntimeMember0008,
  businessCheckoutSecondaryRuntimeFunction0012,
  businessCheckoutSecondaryRuntimeMember0014,
  businessCheckoutSecondaryRuntimeFunction0021,
  businessCheckoutSecondaryRuntimeFunction0065,
} from "../business-checkout-secondary-runtime-current";
import {
  settingsCommandSharedRuntimeVariant4Member0011,
  settingsCommandSharedRuntimeVariant4Member0049,
} from "../settings-command-shared-runtime-variant-4-current";
import {
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0093,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0021,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0025,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0027,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0124,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0042,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0142,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0048,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0157,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0064,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0066,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0069,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0170,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0176,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0178,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0182,
} from "../pull-request-code-review-new-thread-pane-runtime-variant-3-current";
import {
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0012 as _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneK9hi4mliR,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0003,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0004,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0020,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0021,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0022,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0006,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0028,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0030,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0012,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0013,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0014,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0015,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0035,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0036,
  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0037,
} from "../pull-request-code-review-new-thread-pane-runtime-variant-4-current";
import {
  newThreadOnboardingSharedRuntimeVariant16Member0032,
  newThreadOnboardingSharedRuntimeVariant16Member0042,
} from "../new-thread-onboarding-shared-runtime-variant-16-current";
import {
  settingsCommandSharedRuntimeVariant19Member0002,
  settingsCommandSharedRuntimeVariant19Member0003,
  settingsCommandSharedRuntimeVariant19Member0005,
  settingsCommandSharedRuntimeVariant19Member0006,
} from "../settings-command-shared-runtime-variant-19-current";
import {
  quickChatWindowPageCodexMicroRuntimeMember0003,
  quickChatWindowPageCodexMicroRuntimeMember0004,
} from "../quick-chat-window-page-codex-micro-runtime-current";
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageW(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam3,
) {
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam3 ==
    null
  )
    return [];
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue60 =
    Array.from(
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam3.items ??
        [],
    ).filter((item) => item.kind === "file");
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam3
    .files.length > 0
    ? Array.from(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam3.files,
      ).filter(
        (item, index) =>
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue60[
            index
          ]?.webkitGetAsEntry?.()?.isDirectory !== true,
      )
    : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue60.flatMap(
        (item) => {
          if (item.webkitGetAsEntry?.()?.isDirectory === true) return [];
          let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue78 =
            item.getAsFile();
          return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue78 ==
            null
            ? []
            : [
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue78,
              ];
        },
      );
}
export const appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageT =
  createLazyEsmInitializer(() => {});
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageB(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam12,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam13,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam14,
) {
  switch (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam12
  ) {
    case "local":
      return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam13 !=
        null &&
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam13 !==
          "local"
        ? "remote"
        : (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam14 ??
            "local");
    case "remote":
      return "remote";
    case undefined:
      return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam14;
  }
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS({
  activePoint,
  containerRect,
  edgeInsetY = 0,
}) {
  return (
    activePoint.x >= containerRect.left &&
    activePoint.x <= containerRect.right &&
    activePoint.y >= containerRect.top + edgeInsetY &&
    activePoint.y <= containerRect.bottom - edgeInsetY
  );
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageUnderscore({
  sourceContainerId,
  homeContainerId,
  threadId,
  threadKind,
  sourceProjectKind,
  targetContainerId,
  targetProjectKind,
}) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue58 =
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageB(
      threadKind,
      null,
      sourceProjectKind,
    );
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue58 !=
    null &&
    targetProjectKind != null &&
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue58 !==
      targetProjectKind
    ? false
    : sourceContainerId === targetContainerId
      ? threadId != null || threadKind === "local"
      : sourceContainerId?.startsWith("reorder-only:") === true ||
          threadId == null
        ? false
        : targetContainerId === "pinned" ||
          targetContainerId.startsWith("project:") ||
          (targetContainerId === "cloud" &&
            sourceContainerId === "pinned" &&
            homeContainerId === targetContainerId) ||
          (targetContainerId === "chats" &&
            (sourceContainerId?.startsWith("project:") === true ||
              (sourceContainerId === "pinned" &&
                homeContainerId === targetContainerId)));
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC({
  activePoint,
  projectTargets,
  reorderEdgePx,
  sourceProjectKind,
}) {
  return sourceProjectKind == null
    ? false
    : projectTargets.some(
        (item) =>
          item.projectKind !== sourceProjectKind &&
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS(
            {
              activePoint,
              containerRect: item.rect,
              edgeInsetY: item.dropZone === "project-icon" ? 0 : reorderEdgePx,
            },
          ),
      );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageY({
  activeRect,
  pointerY,
  targetRect,
}) {
  return (pointerY ?? (activeRect.top + activeRect.bottom) / 2) <
    (targetRect.top + targetRect.bottom) / 2
    ? "before"
    : "after";
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageV({
  threadTargets,
  containerTargets,
  isActiveAtPoint,
  isActiveInReorderBoundary,
  isGuaranteedContainerTarget,
  isTargetAncestorOf,
}) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue50 =
    isGuaranteedContainerTarget == null
      ? []
      : containerTargets.filter(
          (item) => isGuaranteedContainerTarget(item) && isActiveAtPoint(item),
        );
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue50.length >
    0
  )
    return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue50;
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue51 =
      isActiveInReorderBoundary == null
        ? []
        : containerTargets.filter(isActiveInReorderBoundary),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue52 =
      threadTargets.filter((item) =>
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue51.some(
          (_item) => isTargetAncestorOf(_item, item),
        ),
      );
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue52.length >
    0
  )
    return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue52;
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue53 =
      threadTargets.filter(isActiveAtPoint),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue54 =
      containerTargets.filter(isActiveAtPoint),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue55 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue54.filter(
        (item) =>
          !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue54.some(
            (_item) => item !== _item && isTargetAncestorOf(item, _item),
          ),
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue56 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue55.filter(
        (item) =>
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue53.some(
            (_item) =>
              isTargetAncestorOf(_item, item) &&
              !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue53.some(
                (__item) => isTargetAncestorOf(item, __item),
              ),
          ),
      );
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue56.length >
    0
  )
    return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue56;
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue57 =
    threadTargets.filter((item) =>
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue55.some(
        (_item) => isTargetAncestorOf(_item, item),
      ),
    );
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue57.length >
    0
    ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue57
    : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue53.length >
        0
      ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue53
      : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue55;
}
var appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageX =
  createLazyEsmInitializer(() => {
    currentAppInitialSharedFunction0626();
  });
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageL(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam40,
) {
  return `codex:project:${appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam40}`;
}
function _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam39,
) {
  return `chatgpt:project:${appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam39}`;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam42,
) {
  return `codex:thread:${appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam42}`;
}
function _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam34,
) {
  return `chatgpt:conversation:${appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam34}`;
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageF({
  keys,
  activeId,
  overId,
  activeRect,
  overRect,
  pointerY,
}) {
  return newThreadOnboardingSharedRuntimeVariant16Member0032({
    visibleThreadKeys: keys,
    activeThreadKey:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper1(
        keys,
        activeId,
      ),
    overThreadKey:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper1(
        keys,
        overId,
      ),
    placement:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageY(
        {
          activeRect,
          pointerY,
          targetRect: overRect,
        },
      ),
  });
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageM({
  allKeys,
  nextVisibleKeys,
  storedOrder,
}) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue64 =
      new Set(allKeys),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue65 =
      new Set(storedOrder),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue66 =
      [
        ...allKeys.filter(
          (item) =>
            !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue65.has(
              item,
            ),
        ),
        ...storedOrder.filter((item) =>
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue64.has(
            item,
          ),
        ),
      ],
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue67 =
      new Set(nextVisibleKeys),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue68 = 0;
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue66.map(
    (item) => {
      if (
        !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue67.has(
          item,
        )
      )
        return item;
      let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue84 =
        nextVisibleKeys[
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue68
        ];
      return (
        (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue68 += 1),
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue84 ??
          item
      );
    },
  );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD({
  clientRecencyAt = 0,
  createTime,
  updateTime,
}) {
  for (let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue79 of [
    updateTime,
    createTime,
  ]) {
    if (
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue79 ==
      null
    )
      continue;
    let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue80 =
      Date.parse(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue79,
      );
    if (
      Number.isFinite(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue80,
      )
    )
      return Math.max(
        clientRecencyAt,
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue80,
      );
  }
  return clientRecencyAt;
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageH({
  aeonThreadKeys,
  chatKeys,
  chatsCollapsed,
  connectionThreadKeys,
  mode,
  pinnedCodexProjectThreadKeysByKey,
  pinnedKeys,
  projectThreadKeys,
}) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue59 =
    pinnedKeys.flatMap((item) => {
      let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue85 =
        pinnedCodexProjectThreadKeysByKey.get(item);
      return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue85 ==
        null
        ? [item]
        : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue85.map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
          );
    });
  return [
    ...new Set([
      ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue59,
      ...aeonThreadKeys.map(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
      ),
      ...(mode === "connection"
        ? (connectionThreadKeys ?? []).map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
          )
        : []),
      ...(mode === "project"
        ? projectThreadKeys.map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
          )
        : []),
      ...(chatsCollapsed ? [] : chatKeys),
    ]),
  ];
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageP(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam2,
  {
    chatOrder = [],
    chatSortMode = "priority",
    mode,
    pinnedOrder,
    projectOrder,
    source,
  },
) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue36 =
      source === "all"
        ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam2
        : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam2.filter(
            (item) => item.source === source,
          ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue37 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue36.filter(
        (item) => item.pinned,
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue38 =
      new Set(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue37.flatMap(
          (item) => (item.kind === "project" ? [item.key] : []),
        ),
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue39 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue36.filter(
        (item) => mode === "project" && item.kind === "project" && !item.pinned,
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue40 =
      new Set([
        ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue38,
        ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue39.map(
          (item) => item.key,
        ),
      ]),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue41 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue36.filter(
        (item) => {
          if (item.kind !== "conversation" || item.pinned) return false;
          switch (mode) {
            case "connection":
              return item.key.startsWith("chatgpt:conversation:");
            case "list":
              return (
                item.projectKey == null ||
                !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue38.has(
                  item.projectKey,
                )
              );
            case "project":
              return (
                item.projectKey == null ||
                !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue40.has(
                  item.projectKey,
                )
              );
          }
        },
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue42 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue41;
  switch (chatSortMode) {
    case "manual":
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue42 =
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper3(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue41,
          chatOrder,
        );
      break;
    case "priority":
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue42 =
        quickChatWindowPageCodexMicroRuntimeMember0003(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue41,
        );
      break;
    case "updated_at":
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue42 =
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue41
          .map((item, index) => ({
            entry: item,
            index,
          }))
          .sort(
            (
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam27,
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam28,
            ) =>
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam28
                .entry.recencyAt -
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam27
                  .entry.recencyAt ||
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam27.index -
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam28.index,
          )
          .map(({ entry }) => entry);
      break;
  }
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue43 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper2(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue39,
        projectOrder,
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue44 =
      new Set(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue43,
      );
  return {
    chatAttentionStates:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue42.map(
        (item) => item.attentionState,
      ),
    chatKeys:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue42.map(
        (item) => item.key,
      ),
    pinnedKeys:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper2(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue37,
        pinnedOrder,
      ),
    projectAttentionStates:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue36.flatMap(
        (item) =>
          item.kind === "conversation" &&
          !item.pinned &&
          item.projectKey != null &&
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue44.has(
            item.projectKey,
          )
            ? [item.attentionState]
            : [],
      ),
    projectKeys:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue43,
  };
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper1(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam4,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5,
) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue61 =
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam4.find(
      (item) =>
        item ===
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5,
    );
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue61 !=
    null
  )
    return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue61;
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.startsWith(
      "codex:project:",
    ) ||
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.startsWith(
      "sidebar-group:",
    )
  )
    return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageL(
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.slice(
        14,
      ),
    );
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.startsWith(
      "chatgpt:project:",
    )
  )
    return _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC(
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.slice(
        16,
      ),
    );
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.startsWith(
      "chatgpt:conversation:",
    )
  )
    return _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS(
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.slice(
        21,
      ),
    );
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue62 =
    businessCheckoutSecondaryRuntimeFunction0012(
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.startsWith(
        $,
      )
        ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5.slice(
            13,
          )
        : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam5,
    );
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue62 ==
    null
    ? null
    : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue62.key,
      );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper2(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam15,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam16,
) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue73 =
      new Map(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam15.map(
          (item) => [item.key, item],
        ),
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue74 =
      new Set(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam16,
      );
  return [
    ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam15
      .filter(
        (item) =>
          !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue74.has(
            item.key,
          ),
      )
      .map((item) => item.key),
    ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam16.filter(
      (item) =>
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue73.has(
          item,
        ),
    ),
  ];
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper3(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam10,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam11,
) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue70 =
      new Map(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam10.map(
          (item) => [item.key, item],
        ),
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue71 =
      new Set(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam11,
      );
  return [
    ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam10.filter(
      (item) =>
        !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue71.has(
          item.key,
        ),
    ),
    ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam11.flatMap(
      (item) => {
        let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue86 =
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue70.get(
            item,
          );
        return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue86 ==
          null
          ? []
          : [
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue86,
            ];
      },
    ),
  ];
}
var $,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageG =
    createLazyEsmInitializer(() => {
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageX();
      quickChatWindowPageCodexMicroRuntimeMember0004();
      businessCheckoutSecondaryRuntimeMember0008();
      newThreadOnboardingSharedRuntimeVariant16Member0042();
      $ = "codex:thread:";
    });
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper4(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam19,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam20,
) {
  if (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam20
  )
    return "unread";
  switch (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam19
  ) {
    case "streaming":
      return "active";
    case "error":
    case "idle":
      return "idle";
  }
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageA({
  attentionStates,
  manualOrder,
  optimisticConversationIds,
  optimisticConversationRecencyAts,
  serverConversations,
  sortMode,
}) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue48 =
    [
      ...optimisticConversationIds.map((item, index) => ({
        attentionState: attentionStates[index] ?? "idle",
        conversationId: item,
        kind: "optimistic",
        recencyAt: optimisticConversationRecencyAts[index] ?? 0,
      })),
      ...(serverConversations ?? []).map((item, index) => ({
        attentionState:
          attentionStates[optimisticConversationIds.length + index] ?? "idle",
        conversation: item,
        kind: "server",
        recencyAt:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD(
            {
              createTime: item.create_time,
              updateTime: item.update_time,
            },
          ),
      })),
    ];
  if (sortMode === "priority")
    return quickChatWindowPageCodexMicroRuntimeMember0003(
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue48,
    );
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue49 =
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue48.map(
      (item, index) => ({
        index,
        target: item,
      }),
    );
  if (sortMode === "manual") {
    let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue69 =
      new Map(manualOrder.map((item, index) => [item, index]));
    return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue49
      .sort(
        (
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam17,
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam18,
        ) => {
          let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue76 =
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue69.get(
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper5(
                  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam17.target,
                ),
              ),
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue77 =
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue69.get(
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper5(
                  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam18.target,
                ),
              );
          return (
            (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue76 ??
              9007199254740991) -
              (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue77 ??
                9007199254740991) ||
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam17.index -
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam18.index
          );
        },
      )
      .map(({ target }) => target);
  }
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue49
    .sort(
      (
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam25,
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam26,
      ) =>
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam26
          .target.recencyAt -
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam25
            .target.recencyAt ||
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam25.index -
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam26.index,
    )
    .map(({ target }) => target);
}
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageI(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam55,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper5(
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam55,
  );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper5(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam22,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam22.kind ===
    "optimistic"
    ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam22.conversationId
    : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam22
        .conversation.id;
}
var appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageR,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageO =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerx();
      currentReactAliasLowerb();
      quickChatWindowPageCodexMicroRuntimeMember0004();
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageG();
      settingsCommandSharedRuntimeVariant4Member0011();
      pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0027();
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageR =
        currentReactAliasLowerfLowert(
          currentReactAliasLowery,
          (
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam35,
            { get },
          ) =>
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam35.map(
              (item) =>
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper4(
                  get(
                    pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0021,
                    item,
                  ),
                  get(
                    pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0048,
                    item,
                  ),
                ),
            ),
          {
            isEqual: settingsCommandSharedRuntimeVariant4Member0049,
          },
        );
    });
export function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageN(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam1,
) {
  let { conversationFilter = "all", flatConversationHistory = false } =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam1 ===
      undefined
        ? {}
        : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam1,
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue6 =
      currentReactAliasUpperD(currentReactAliasLowery),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 =
      currentReactAliasUpperO(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0176,
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue8 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue6.get(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0069,
      ),
    {
      pathname:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue9,
    } = useLocation(),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue10 =
      useNavigate(),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue11 =
      settingsCommandSharedRuntimeVariant19Member0003(),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue12 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
        ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue11
        : "unavailable",
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue13 =
      conversationFilter !== "tasks",
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue14 =
      conversationFilter !== "chats",
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue15 =
      _t(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue9,
      );
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue16 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue15,
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue17 =
      currentReactAliasUpperO(businessCheckoutSecondaryRuntimeMember0014),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue18 =
      currentReactAliasUpperO(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0182,
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue19 =
      currentReactAliasUpperE(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0170,
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue16,
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue20 =
      currentQueryRpcAliasUpperFLowerl({
        enabled:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7,
        placeholderData:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
            ? pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0030
            : undefined,
        queryFn: async () => {
          let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue82 =
            await appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue8.listPinnedConversationItems();
          return (
            _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneK9hi4mliR(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue82,
            ),
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue82
          );
        },
        queryKey: pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0015(),
        staleTime: currentQueryRpcAliasUpperS.ONE_MINUTE,
      }),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue21 =
      currentQueryRpcAliasUpperFLowerl({
        enabled:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7,
        queryFn: () =>
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue8.listPinnedProjectItems(),
        queryKey: pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0035(),
        staleTime: currentQueryRpcAliasUpperS.ONE_MINUTE,
      }),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22 =
      currentQueryRpcAliasUpperCLowerl({
        enabled:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue13,
        getNextPageParam:
          pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0014,
        initialPageParam: 0,
        placeholderData:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
          !flatConversationHistory
            ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper25
            : undefined,
        queryFn: async (
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam6,
        ) => {
          let { pageParam } =
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam6,
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue63 =
              await appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue8.list(
                {
                  excludeConversationOrigin: "tpp",
                  hideProjectConversations: flatConversationHistory
                    ? false
                    : undefined,
                  isArchived: false,
                  isStarred: false,
                  limit: 20,
                  order: "updated",
                  offset: pageParam,
                },
              );
          return (
            flatConversationHistory ||
              pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0028(
                pageParam,
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue63,
              ),
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue63
          );
        },
        queryKey: pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0022(
          flatConversationHistory,
          {
            excludeTppConversations: true,
          },
        ),
        refetchOnMount: flatConversationHistory ? "always" : true,
        staleTime: currentQueryRpcAliasUpperS.ONE_MINUTE,
      }),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23 =
      currentQueryRpcAliasUpperCLowerl({
        enabled:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue14,
        getNextPageParam:
          pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0004,
        initialPageParam: 0,
        queryFn: (
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam7,
        ) => {
          let { pageParam } =
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam7;
          return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue8.list(
            {
              conversationOrigin: "tpp",
              hideProjectConversations: flatConversationHistory
                ? false
                : undefined,
              isArchived: false,
              isStarred: false,
              limit: 100,
              order: "updated",
              offset: pageParam,
            },
          );
        },
        queryKey: pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0036(
          flatConversationHistory,
          {
            includeStarredConversations: false,
          },
        ),
        staleTime: currentQueryRpcAliasUpperS.ONE_MINUTE,
      }),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24 =
      currentQueryRpcAliasUpperCLowerl(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0037(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue8,
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7,
        ),
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue25 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
        ? (
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue21.data ??
            []
          ).map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper24,
          )
        : [],
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue26 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue25.filter(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0012,
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue27 =
      new Set(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue26.map(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper23,
        ),
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue28 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
        ? (
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue20.data ??
            []
          ).map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper22,
          )
        : [],
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue29 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
        ? [
            ...(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22
                .data?.pages ?? []
            ).flatMap(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper21,
            ),
            ...(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23
                .data?.pages ?? []
            )
              .flatMap(
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper20,
              )
              .filter(
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper19,
              ),
          ]
            .map(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper18,
            )
            .sort(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper17,
            )
            .map(at)
        : [],
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue30 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
        ? (
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24
              .data?.pages ?? []
          ).flatMap(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper16,
          )
        : [],
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue31 =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue30.filter(
        (item) =>
          pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0012(
            item.gizmo,
          ) &&
          !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue27.has(
            item.gizmo.gizmo.id,
          ),
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue32 =
      new Set([
        ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue25.map(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper15,
        ),
        ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue30.map(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper14,
        ),
      ]),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageW =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24.isSuccess
        ? Array.from(
            new Set(
              [
                ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue28,
                ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue29,
              ]
                .map(
                  pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0021,
                )
                .filter(
                  (item) =>
                    item != null &&
                    !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue32.has(
                      item,
                    ),
                ),
            ),
          )
        : [],
    __appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageT =
      currentQueryRpcAliasUpperLLowerl({
        queries:
          (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
            ? _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageW
            : []
          ).map((item) => ({
            queryFn: () =>
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue8.getProject(
                item,
              ),
            queryKey:
              pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0013(item),
            staleTime: currentQueryRpcAliasUpperS.ONE_MINUTE,
          })),
      })
        .map(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper13,
        )
        .filter(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper12,
        ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageB =
      new Set([
        ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue27,
        ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue31.map(
          $e,
        ),
        ...__appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageT
          .filter(pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0012)
          .map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper11,
          ),
      ]),
    __appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS =
      new Map(
        [
          ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue25,
          ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue30.map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper10,
          ),
          ...__appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageT,
        ].map(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper9,
        ),
      ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageUnderscore =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue28.filter(
        (item) => {
          if (
            !pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0157(
              item.conversation_origin,
              conversationFilter,
            )
          )
            return false;
          if (
            flatConversationHistory ||
            pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0124(
              item.conversation_origin,
            ) === "codex"
          )
            return true;
          let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue75 =
            pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0021(item);
          return (
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue75 ==
              null ||
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageB.has(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue75,
            )
          );
        },
      ),
    __appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC =
      new Set(
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageUnderscore.map(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper8,
        ),
      ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageY =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue29.filter(
        (item) => {
          if (
            !pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0157(
              item.conversation_origin,
              conversationFilter,
            )
          )
            return false;
          let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue72 =
            pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0021(item);
          return (
            !__appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC.has(
              item.id,
            ) &&
            (flatConversationHistory ||
              pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0124(
                item.conversation_origin,
              ) === "codex" ||
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue72 ==
                null ||
              _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageB.has(
                appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue72,
              ))
          );
        },
      ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageV =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue31.length >
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue2,
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageX =
      _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageV &&
      !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue17
        ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue31.filter(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper7,
          )
        : appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue31,
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageL =
      [
        ..._appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageUnderscore,
        ..._appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageY,
      ].map(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper6,
      ),
    ___appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC =
      currentReactAliasUpperE(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0178,
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageL,
      ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU =
      currentReactAliasUpperE(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0142,
        {
          conversationFilter: conversationFilter,
          conversationIds:
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
              ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue18
              : [],
          serverConversationIds:
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageL,
        },
      ),
    ___appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS =
      currentReactAliasUpperE(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0178,
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
      ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageF =
      currentReactAliasUpperE(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0042,
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
      ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageM =
      currentReactAliasUpperE(
        pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0064,
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
      ),
    _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD =
      [
        ..._appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
        ..._appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageL,
      ];
  let {
      chatTargets:
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageH,
      pinnedTargets:
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageP,
    } =
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper28(
        {
          attentionStates: currentReactAliasUpperE(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageR,
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD,
          ),
          pinnedConversations:
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageUnderscore,
          optimisticConversationIds:
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
          optimisticConversationOrigins:
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageM,
          optimisticConversationProjectIds:
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageF,
          optimisticConversationRecencyAts:
            ___appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS,
          conversations:
            _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageY,
          serverConversationRecencyAts:
            ___appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC,
        },
      ),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue33 =
      () => {
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
          Promise.all([
            ...(appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue13 &&
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.hasNextPage &&
            !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.isFetching
              ? [
                  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.fetchNextPage(),
                ]
              : []),
            ...(appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue14 &&
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.hasNextPage &&
            !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.isFetching
              ? [
                  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.fetchNextPage(),
                ]
              : []),
          ]);
      };
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue34 =
    () => {
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24.fetchNextPage();
    };
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue35 =
    () => {
      !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 ||
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue12 !==
          "allowed" ||
        settingsCommandSharedRuntimeVariant19Member0002(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue6,
          (
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam23,
          ) => {
            businessCheckoutSecondaryRuntimeFunction0065(
              appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue6,
              `chatgpt:${appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam23.gizmo.id}`,
              true,
            );
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue10(
              "/projects",
            );
          },
        );
    };
  let $;
  return (
    ($ = () => {
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        businessCheckoutSecondaryRuntimeFunction0021(
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue6,
          !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue17,
        );
    }),
    {
      activeConversationId:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
          ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue16
          : null,
      activeServerConversationId:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7
          ? appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue19
          : null,
      canFetchNextConversationPage:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        ((appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue13 &&
          !!appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.hasNextPage &&
          !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.isFetching) ||
          (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue14 &&
            !!appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.hasNextPage &&
            !appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.isFetching)),
      chatTargets:
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageH,
      fetchNextConversationPage:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue33,
      fetchNextProjectPage:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue34,
      handleCreateProjectOpen:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue35,
      hasProjectOverflow:
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageV,
      hasNextProjectPage:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        !!appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24.hasNextPage,
      isConversationError:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        ((appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue13 &&
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.isError) ||
          (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue14 &&
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.isError) ||
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue20.isError),
      isConversationLoading:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        ((appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue13 &&
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.isLoading) ||
          (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue14 &&
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.isLoading) ||
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue20.isLoading),
      isFetchingNextConversationPage:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        (appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue22.isFetchingNextPage ||
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue23.isFetchingNextPage),
      isFetchingNextProjectPage:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24.isFetchingNextPage,
      isProjectError:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24.isError,
      isProjectLoading:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue24.isLoading,
      pinnedProjects:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue26,
      pinnedTargets:
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageP,
      projectCrudStatus:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue12,
      projectNamesById:
        __appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS,
      projects:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue31,
      showAllProjects:
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue7 &&
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue17,
      toggleShowAllProjects: $,
      visibleProjects:
        _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageX,
    }
  );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper6(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam56,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam56.id;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper7(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam48,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam49,
) {
  return (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam49 <
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue2
  );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper8(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam57,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam57.id;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper9(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam24,
) {
  return [
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam24
      .gizmo.id,
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam24.gizmo.display.name.trim() ||
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam24
        .gizmo.id,
  ];
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper10(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam51,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam51.gizmo;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper11(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam45,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam45
    .gizmo.id;
}
function $e(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam43,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam43
    .gizmo.gizmo.id;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper12(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam50,
) {
  return (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam50 !=
    null
  );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper13(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam36,
) {
  let { data } =
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam36;
  return data;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper14(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam44,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam44
    .gizmo.gizmo.id;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper15(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam46,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam46
    .gizmo.id;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper16(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam52,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam52.items;
}
function at(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam30,
) {
  let { conversation } =
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam30;
  return conversation;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper17(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam8,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam9,
) {
  return (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD(
      {
        createTime:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam9
            .conversation.create_time,
        updateTime:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam9
            .conversation.update_time,
      },
    ) -
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD(
        {
          createTime:
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam8
              .conversation.create_time,
          updateTime:
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam8
              .conversation.update_time,
        },
      ) ||
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam8.index -
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam9.index
  );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper18(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam31,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam32,
) {
  return {
    conversation:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam31,
    index:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam32,
  };
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper19(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam41,
) {
  return (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam41.is_starred !==
    true
  );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper20(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam53,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam53.items;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper21(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam54,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam54.items;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper22(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam37,
) {
  let { item } =
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam37;
  return item;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper23(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam47,
) {
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam47
    .gizmo.id;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper24(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam38,
) {
  let { item } =
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam38;
  return item;
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper25() {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue83 =
    pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0020();
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue83 ==
    null
    ? undefined
    : {
        ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue83,
        pages:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue83.pages.map(
            appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper26,
          ),
      };
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper26(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam29,
) {
  return {
    ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam29,
    items:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam29.items.filter(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper27,
      ),
  };
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper27(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam33,
) {
  return (
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam33.conversation_origin !==
    "tpp"
  );
}
function _t(
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam21,
) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue81 =
    matchPath(
      conversationRouteTemplate,
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageParam21,
    )?.params.conversationId;
  return appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue81 ==
    null
    ? null
    : decodeURIComponent(
        appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue81,
      );
}
function appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageHelper28({
  attentionStates,
  pinnedConversations,
  optimisticConversationIds,
  optimisticConversationOrigins,
  optimisticConversationProjectIds,
  optimisticConversationRecencyAts,
  conversations,
  serverConversationRecencyAts,
}) {
  let appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue45 =
      pinnedConversations.map((item, index) => ({
        attentionState:
          attentionStates[optimisticConversationIds.length + index] ?? "idle",
        kind: "pinned",
        conversation: item,
        conversationId: item.id,
        recencyAt:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD(
            {
              clientRecencyAt: serverConversationRecencyAts[index],
              createTime: item.create_time,
              updateTime: item.update_time,
            },
          ),
        route: buildChatgptConversationPath(item.id),
        source: pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0124(
          item.conversation_origin,
        ),
      })),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue46 =
      optimisticConversationIds.map((item, index) => ({
        attentionState: attentionStates[index] ?? "idle",
        kind: "optimistic",
        conversationId: item,
        projectId: optimisticConversationProjectIds[index] ?? null,
        recencyAt: optimisticConversationRecencyAts[index] ?? 0,
        route: buildChatgptConversationPath(item),
        source: pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0124(
          optimisticConversationOrigins[index],
        ),
      })),
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue47 =
      conversations.map((item, index) => ({
        attentionState:
          attentionStates[
            optimisticConversationIds.length +
              pinnedConversations.length +
              index
          ] ?? "idle",
        kind: "recent",
        conversation: item,
        conversationId: item.id,
        projectId:
          pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0021(item),
        recencyAt:
          appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD(
            {
              clientRecencyAt:
                serverConversationRecencyAts[
                  pinnedConversations.length + index
                ],
              createTime: item.create_time,
              updateTime: item.update_time,
            },
          ),
        route: buildChatgptConversationPath(item.id),
        source: pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0124(
          item.conversation_origin,
        ),
      }));
  return {
    chatTargets: [
      ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue46,
      ...appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue47,
    ],
    pinnedTargets:
      appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue45,
  };
}
var appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue1,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue2;
export const _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageT =
  createLazyEsmInitializer(() => {
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue1 =
      currentReactAliasLoweruLowern();
    currentQueryRpcAliasLowerxLowerl();
    currentReactAliasLowerx();
    initReactRouterRuntime();
    pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0066();
    currentReactAliasLowerb();
    businessCheckoutSecondaryRuntimeMember0034();
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageG();
    currentQueryRpcAliasUpperC();
    pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0025();
    pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0006();
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageO();
    pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0093();
    pullRequestCodeReviewNewThreadPaneRuntimeVariant3Member0027();
    settingsCommandSharedRuntimeVariant19Member0005();
    pullRequestCodeReviewNewThreadPaneRuntimeVariant4Member0003();
    settingsCommandSharedRuntimeVariant19Member0006();
    initConversationRouteRuntime();
    appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageValue2 = 5;
  });
export {
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageB,
  _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageC,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageD,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageG,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageL,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageO,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageR,
  _appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageS,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageU,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageX,
  appInitialAppMainProjectsIndexPageQuickChatWindowPageChatgptConversationPageY,
};
