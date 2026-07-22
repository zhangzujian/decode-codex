// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~hotkey-window-thread-page~thread-app-shell-chrome~remo~c1415s9d-BXGGUI4D.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// AppInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9d chunk restored from the Codex webview bundle.
import {
  createLazyEsmInitializer as rolldownRuntimeN,
  toEsm as rolldownRuntimeS,
} from "../rolldown/index";
import { lodashGetOrDefault as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eIr } from "../current-ref-aliases/current-app-shared/index";
import {
  businessCheckoutSharedFunction0538 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcEc,
  businessCheckoutSharedInitializer0656 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcKu,
  businessCheckoutSharedFunction0693 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcNc,
  businessCheckoutSharedInitializer0760 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcRc,
  computerUseToolSurfaceSchema as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcTc,
} from "../current-ref-aliases/business-checkout-shared/index";
import {
  quickChatWindowPageChatgRuntimeMember0003 as _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpA,
  quickChatWindowPageChatgRuntimeMember0027 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpA,
  quickChatWindowPageChatgRuntimeMember0029 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpB,
  quickChatWindowPageChatgRuntimeMember0033 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpK,
  quickChatWindowPageChatgRuntimeMember0055 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpM,
  quickChatWindowPageChatgRuntimeMember0057 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpN,
  quickChatWindowPageChatgRuntimeMember0059 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpP,
  quickChatWindowPageChatgRuntimeMember0077 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpS,
  quickChatWindowPageChatgRuntimeMember0095 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpUnderscore,
  quickChatWindowPageChatgRuntimeMember0108 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpY,
} from "../current-ref-aliases/quick-chat-window-page-chatg-runtime/index";
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dG({
  items,
  isActive,
}) {
  if (!isActive) return false;
  if (items.some((item) => !item.completed)) return true;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue82 =
    items.at(-1);
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue82 !=
      null &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpUnderscore(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue82,
    )
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dH({
  items,
  keepLatestLiveActivityInGroup,
}) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue85 =
    items.at(-1);
  return (
    items.length > 1 ||
    (keepLatestLiveActivityInGroup &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue85 !=
        null &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpUnderscore(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue85,
      ))
  );
}
var appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dM =
  rolldownRuntimeN(() => {
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpB();
  });
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dA({
  entries,
  conversationDetailLevel,
  isTurnInProgress,
  isActivitySliceClosed,
  mcpServerStatuses,
  shouldAutoExpandMcpApps = false,
  modelProvider = null,
  resolvedApps,
  isTurnCancelled = false,
  collapseMixedDynamicToolActivity = false,
}) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL(
    {
      units:
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC(
          {
            units:
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dS(
                {
                  units:
                    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU(
                      entries,
                    ),
                  isActivitySliceClosed,
                  conversationDetailLevel,
                  mcpServerStatuses,
                  resolvedApps,
                  shouldAutoExpandMcpApps,
                  modelProvider,
                  isTurnCancelled,
                  collapseMixedDynamicToolActivity,
                },
              ),
            keepLatestLiveActivityInGroup:
              isTurnInProgress && !isActivitySliceClosed,
          },
        ),
      isActivitySliceClosed,
      mcpServerStatuses,
      shouldAutoExpandMcpApps,
      resolvedApps,
      keepLatestLiveActivityInGroup: isTurnInProgress && !isActivitySliceClosed,
    },
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dD(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam27,
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue93 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dA(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam27,
    ).at(-1);
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue93 !=
      null &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dP(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue93,
    )
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dP(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam18,
) {
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam18.kind ===
      "collapsed-tool-activity" ||
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam18.kind ===
      "pending-mcp-tool-calls" ||
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam18.kind ===
      "dynamic-tool-call-group"
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam6,
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue53 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue54 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue55 =
      () => {
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue54.length !==
          0 &&
          (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue53.push(
            {
              kind: "web-search-group",
              items:
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue54,
            },
          ),
          (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue54 =
            []));
      };
  for (let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61 of appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam6) {
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61.kind ===
        "item" &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61
        .item.type === "web-search"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue54.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61.item,
      );
      continue;
    }
    if (
      (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue55(),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61.kind ===
        "item" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61
          .item.type === "multi-agent-action")
    ) {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue71 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue53[
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue53.length -
            1
        ];
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue71?.kind ===
          "multi-agent-group" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue71
          .items[0]?.action ===
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61
            .item.action
      ) {
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue71.items.push(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61.item,
        );
        continue;
      }
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue53.push(
        {
          kind: "multi-agent-group",
          items: [
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61.item,
          ],
        },
      );
      continue;
    }
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue53.push(
      {
        kind: "entry",
        entry:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue61,
      },
    );
  }
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue55(),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue53
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO(
  event,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4,
) {
  if (event.kind === "collapsed-tool-activity")
    return `collapsed-tool-activity:${event.key}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4}`;
  if (event.kind === "pending-mcp-tool-calls")
    return `pending-mcp-tool-calls:${event.key}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4}`;
  if (event.kind === "dynamic-tool-call-group")
    return `dynamic-tool-call-group:${event.key}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4}`;
  if (event.kind === "multi-agent-group") {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue88 =
      event.items[0];
    return `multi-agent-group:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue88?.action ?? "unknown"}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue88?.id ?? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4}`;
  }
  if (event.kind === "web-search-group")
    return `web-search-group:${event.items[0]?.query ?? "unknown"}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4}`;
  if (event.entry.kind === "exploration") {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue86 =
      event.entry.items[0];
    return `exploration:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue86?.type === "exec" ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue86.callId : `${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue86?.type ?? "none"}-${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4}`}`;
  }
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42 =
    event.entry.item;
  return "id" in
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42 &&
    typeof appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42.id ==
      "string"
    ? `item:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42.type}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42.id}`
    : "callId" in
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42 &&
        typeof appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42.callId ==
          "string"
      ? `item:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42.type}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42.callId}`
      : `item:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue42.type}:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam4}`;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL({
  units,
  isActivitySliceClosed,
  mcpServerStatuses,
  shouldAutoExpandMcpApps = false,
  resolvedApps,
  keepLatestLiveActivityInGroup = false,
}) {
  if (isActivitySliceClosed) return units;
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue52 =
    [];
  for (
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue56 = 0;
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue56 <
    units.length;
  ) {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue57 =
        [],
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue58 =
        null,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue59 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue56;
    for (
      ;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue59 <
      units.length;
    ) {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue77 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper10(
          units[
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue59
          ],
        );
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue77 ==
          null ||
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper9(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue77,
          mcpServerStatuses,
          shouldAutoExpandMcpApps,
        )
      )
        break;
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue78 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper8(
          {
            item: appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue77,
            resolvedApps,
          },
        );
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue58 !=
          null &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue78 !==
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue58
      )
        break;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue58 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue78;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue57.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue77,
      );
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue59 += 1;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue57.length >
        1 ||
      (keepLatestLiveActivityInGroup &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue57.length >
          0 &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue59 ===
          units.length)
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue52.push(
        {
          kind: "pending-mcp-tool-calls",
          key:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue57[0]
              ?.callId ??
            `${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue56}`,
          items:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue57,
        },
      );
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue56 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue59;
      continue;
    }
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue60 =
      units[
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue56
      ];
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue60 !=
      null &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue52.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue60,
      );
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue56 += 1;
  }
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue52;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC({
  units,
  keepLatestLiveActivityInGroup = false,
}) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue41 =
    [];
  for (
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45 = 0;
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45 <
    units.length;
  ) {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49 =
        [],
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue50 =
        null,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45;
    for (
      ;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51 <
      units.length;
    ) {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue68 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper11(
          units[
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51
          ],
        );
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue68 ==
        null
      )
        break;
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpY(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue68,
        )?.standaloneInConversation === true
      ) {
        if (
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49.length >
          0
        )
          break;
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49.push(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue68,
        );
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue50 =
          units[
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51
          ] ?? null;
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51 += 1;
        break;
      }
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue68,
      );
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue69 =
        units[
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51
        ];
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue50 ==
        null &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue69 !=
          null &&
        (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue50 =
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue69);
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51 += 1;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51 ===
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45
    ) {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue91 =
        units[
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45
        ];
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue91 !=
        null &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue41.push(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue91,
        );
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45 += 1;
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49.length ===
      0
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51;
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dH(
        {
          items:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49,
          keepLatestLiveActivityInGroup:
            keepLatestLiveActivityInGroup &&
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51 ===
              units.length,
        },
      )
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue41.push(
        {
          kind: "dynamic-tool-call-group",
          key:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49[0]
              ?.callId ??
            `${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45}`,
          items:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue49,
        },
      );
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51;
      continue;
    }
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue50 !=
      null &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue41.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue50,
      );
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue45 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue51;
  }
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue41;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dR(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam10,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam11,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam10 ===
    "STEPS_PROSE"
    ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam11.some(
        (item) =>
          item.kind !== "entry" || item.entry.kind !== "item"
            ? true
            : item.entry.item.type !== "automatic-approval-review" &&
              item.entry.item.type !== "exec" &&
              item.entry.item.type !== "patch",
      )
    : true;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper1(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam28,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam29,
) {
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dR(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam28,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam29,
    ) &&
    (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper4(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam28,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam29,
    ) > 0 ||
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper3(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam29,
      ))
  );
}
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dI({
  conversationDetailLevel,
  units,
  summary,
  hasSourceSummary = false,
  isActiveToolActivity,
}) {
  return isActiveToolActivity ||
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper2(
      units,
    ) ||
    hasSourceSummary
    ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dR(
        conversationDetailLevel,
        units,
      )
    : conversationDetailLevel !== "STEPS_PROSE" &&
        summary != null &&
        summary.commandCount > 1
      ? true
      : appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper1(
          conversationDetailLevel,
          units,
        );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper2(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam17,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam17.some(
    (item) =>
      item.kind !== "entry" ||
      item.entry.kind !== "item" ||
      item.entry.item.type !== "exec"
        ? false
        : !item.entry.item.parsedCmd.isFinished,
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper3(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam20,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam20.some(
    (item) =>
      item.kind === "entry" &&
      item.entry.kind === "item" &&
      item.entry.item.type === "mcp-tool-call",
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper4(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam8,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam9,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam9.reduce(
    (accumulator, current) => {
      switch (current.kind) {
        case "entry":
          return current.entry.kind === "exploration"
            ? accumulator + current.entry.items.length
            : appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam8 ===
                  "STEPS_PROSE" &&
                (current.entry.item.type === "automatic-approval-review" ||
                  current.entry.item.type === "exec")
              ? accumulator
              : accumulator + 1;
        case "multi-agent-group":
          return accumulator + current.items.length;
        case "web-search-group":
          return accumulator + current.items.length;
      }
    },
    0,
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dS({
  units,
  isActivitySliceClosed,
  conversationDetailLevel,
  mcpServerStatuses,
  resolvedApps,
  shouldAutoExpandMcpApps = false,
  modelProvider = null,
  isTurnCancelled = false,
  collapseMixedDynamicToolActivity = false,
}) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue31 =
      units.map((item) =>
        collapseMixedDynamicToolActivity &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper6(
          item,
        )
          ? {
              type: "mcp-tool-call",
              isInProgress: !item.entry.item.completed,
              source: null,
            }
          : appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpK(
              item,
              {
                mcpServerStatuses,
                resolvedApps,
                shouldKeepMcpAppToolCallsExpandedByDefault:
                  shouldAutoExpandMcpApps,
                modelProvider,
                isTurnCancelled,
              },
            ),
      ),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue32 =
      [
        ..._appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpA(
          {
            units:
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue31,
            isActivitySliceClosed,
          },
        ),
      ];
  if (!isActivitySliceClosed) {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue62 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper12(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue31,
        ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue63 =
        [];
    for (let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue83 of appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue31.slice(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue62,
    )) {
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue83.type ===
        "mcp-tool-call"
      ) {
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue63.push(
          {
            type: "other",
          },
        );
        continue;
      }
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue63.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue83,
      );
    }
    for (let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue81 of _appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpA(
      {
        units:
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue63,
        isActivitySliceClosed: true,
      },
    ))
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue32.push(
        {
          startIndex:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue81.startIndex +
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue62,
          endIndex:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue81.endIndex +
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue62,
          summary:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue81.summary,
        },
      );
  }
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue33 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue32.filter(
      (item) =>
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper5(
          units.slice(item.startIndex, item.endIndex),
        ),
    );
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue33.length ===
    0
  )
    return units;
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue33.sort(
    (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam32,
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam33,
    ) =>
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam32.startIndex -
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam33.startIndex,
  );
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue34 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue35 = 0;
  for (
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue38 = 0;
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue38 <
    units.length;
  ) {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue33[
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue35
      ];
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39 &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue38 ===
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.startIndex
    ) {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue46 =
          units.slice(
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.startIndex,
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.endIndex,
          ),
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47 =
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue46[0],
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue48 =
          !isActivitySliceClosed &&
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.endIndex ===
            units.length;
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue46.length ===
          1 &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47 !=
          null &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47.kind ===
          "entry" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47
          .entry.kind === "item"
      ) {
        let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue72 =
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47
            .entry.item;
        if (
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue72.type ===
            "mcp-tool-call" ||
          (conversationDetailLevel !== "STEPS_PROSE" &&
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue72.type ===
              "exec" &&
            !appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue48)
        ) {
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue34.push(
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47,
          );
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue38 =
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.endIndex;
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue35 += 1;
          continue;
        }
      }
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47 !=
        null
      ) {
        let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue70 =
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper7(
            {
              groupedUnits:
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue46,
              isCurrentToolActivity:
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue48,
              summary:
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.summary,
            },
          );
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue34.push(
          {
            kind: "collapsed-tool-activity",
            key: appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO(
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue47,
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.startIndex,
            ),
            units:
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue46,
            summary:
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue70,
          },
        );
      }
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue38 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue39.endIndex;
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue35 += 1;
      continue;
    }
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue40 =
      units[
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue38
      ];
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue40 !=
      null &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue34.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue40,
      );
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue38 += 1;
  }
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue34;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper5(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam25,
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue87 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam25.filter(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper6,
    ).length;
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue87 ===
    0
    ? true
    : appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue87 ===
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam25.length
      ? false
      : appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam25.length >
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue1;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper6(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam22,
) {
  return (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam22.kind ===
      "entry" &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam22
      .entry.kind === "item" &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam22
      .entry.item.type === "dynamic-tool-call"
  );
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper7({
  groupedUnits,
  isCurrentToolActivity,
  summary,
}) {
  return !isCurrentToolActivity ||
    groupedUnits.at(-1)?.kind !== "web-search-group"
    ? summary
    : {
        ...summary,
        runningWebSearchCount: summary.webSearchCount,
      };
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper8({
  item,
  resolvedApps,
}) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue64 =
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcEc(
      {
        item,
      },
    );
  if (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue64 !=
    null
  )
    return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue64.groupKey;
  if (resolvedApps != null) {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue79 =
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcNc(
        {
          apps: resolvedApps,
          functionName: item.functionName,
          serverName: item.invocation.server,
          toolName: item.invocation.tool,
        },
      );
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue79 !=
      null
    )
      return `app:${appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue79.id}`;
  }
  return `server:${item.invocation.server}`;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper9(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam13,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam14,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam15,
) {
  return appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcEc(
    {
      item: appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam13,
    },
  ) == null
    ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam13
        .invocation.server === "computer-use" ||
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpM(
        {
          item: appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam13,
          mcpServerStatuses:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam14,
        },
      )
      ? true
      : appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam15 &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpP(
          {
            item: appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam13,
            mcpServerStatuses:
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam14,
          },
        )
    : false;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper10(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam21,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam21?.kind ===
    "entry" &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam21
      .entry.kind === "item" &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam21
      .entry.item.type === "mcp-tool-call"
    ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam21
        .entry.item
    : null;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper11(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam19,
) {
  return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam19?.kind ===
    "entry" &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam19
      .entry.kind === "item" &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam19
      .entry.item.type === "dynamic-tool-call"
    ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam19
        .entry.item
    : null;
}
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper12(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam23,
) {
  for (
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue89 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam23.length -
      1;
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue89 >=
    0;
    --appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue89
  )
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam23[
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue89
      ]?.type === "assistant-message"
    )
      return (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue89 +
        1
      );
  return 0;
}
var appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue1;
export const appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dF =
  rolldownRuntimeN(() => {
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcKu();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpA();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dM();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpB();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcRc();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpN();
    appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutOxnpxkxcTc();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgF5p8e1kpS();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue1 = 3;
  });
function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper13(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam3,
) {
  switch (
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam3.type
  ) {
    case "todo-list":
    case "turn-diff":
    case "user-message":
    case "remote-task-created":
    case "proposed-plan":
    case "plan-implementation":
    case "mcp-server-elicitation":
    case "permission-request":
    case "userInput":
    case "personality-changed":
    case "forked-from-conversation":
    case "model-changed":
    case "model-rerouted":
    case "auto-review-interruption-warning":
    case "generated-image":
    case "automation-update":
    case "subagent-activity":
    case "steered":
      return false;
    case "web-search":
      return (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam3.query.trim()
          .length > 0
      );
    case "assistant-message":
    case "image-view":
    case "realtime-transcript":
    case "exec":
    case "patch":
    case "dynamic-tool-call":
    case "mcp-tool-call":
    case "automatic-approval-review":
    case "multi-agent-action":
    case "stream-error":
    case "system-error":
    case "context-compaction":
    case "reasoning":
    case "user-input-response":
    case "worked-for":
    case "worktree-init":
      return true;
  }
}
var appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue2 =
  rolldownRuntimeN(() => {});
export function appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dN(
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam1,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam2,
) {
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue11 =
      null,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue12 =
      null,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue13 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue14 =
      null,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue15 =
      null,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue16 =
      null,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue17 =
      null,
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue18 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue19 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue20 =
      new Set(),
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue21 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue22 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue23 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue24 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue25 =
      [],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue26 =
      [],
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dG =
      [],
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dH =
      [],
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dM =
      [],
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dA =
      [],
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dD = false,
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dP = false;
  for (let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36 of appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam1) {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue37 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "subagent-activity" &&
      !_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dP;
    if (
      ((_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dP =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "subagent-activity"),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "user-message" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.heartbeatTrigger !=
          null)
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue13.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      !_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dD &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "user-message"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue13.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      ((_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dD = true),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "turn-diff" &&
        (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue14 =
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "todo-list" &&
        (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue15 =
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "proposed-plan")
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue16 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36;
      continue;
    }
    if (
      (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "remote-task-created" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue25.push(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
        ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "personality-changed" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue26.push(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
        ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "forked-from-conversation" &&
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dG.push(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
        ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "model-changed")
    ) {
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dH.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "model-rerouted"
    ) {
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dM.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "plan-implementation"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue17 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36;
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "mcp-server-elicitation"
    ) {
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.completed ===
        true
      ) {
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36
          .elicitation.kind !== "unsupportedOpenAIForm" &&
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue21.push(
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
          );
        continue;
      }
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue74 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue10(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
        );
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue74 !=
        null &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue20.add(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue74,
        );
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue18.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "permission-request"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue19.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    let __appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue4(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
        ),
      __appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO =
        !__appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue5(
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
        );
    if (
      __appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU ||
      __appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue11 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36;
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
        "userInput" &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.completed !==
        true
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue12 =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36;
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "user-message"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue21.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "generated-image"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue23.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "automation-update"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue22.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "auto-review-interruption-warning"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue24.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
      continue;
    }
    if (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36.type ===
      "subagent-activity"
    ) {
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue37
        ? (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue21.push(
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
          ),
          _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dA.push(
            [
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
            ],
          ))
        : _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dA
            .at(-1)
            ?.push(
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
            );
      continue;
    }
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dHelper13(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
    ) &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue21.push(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue36,
      );
  }
  let _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue8(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue21,
      ),
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue7(
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU,
      ),
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue20.size >
      0
        ? _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU.filter(
            (item) =>
              item.type !== "mcp-tool-call" ||
              item.completed ||
              !appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue20.has(
                item.invocation.server,
              ),
          )
        : _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU,
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC =
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL.length -
      1;
  for (
    ;
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL[
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC
    ]?.type === "mcp-server-elicitation";
  )
    --_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC;
  if (
    !appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue6(
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL[
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC
      ],
    )
  ) {
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue75 =
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC;
    for (;;) {
      let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue90 =
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL[
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue75
        ];
      if (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue90?.type !==
          "reasoning" ||
        !appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue90.completed
      )
        break;
      --appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue75;
    }
    let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue76 =
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL[
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue75
      ];
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue6(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue76,
    ) &&
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue76.phase ===
        "final_answer" &&
      (_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC =
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue75);
  }
  let _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dR =
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL[
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC
      ],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue6(
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dR,
      )
        ? _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dR
        : null,
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dI =
      (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27?.content?.trim()
        .length ?? 0) > 0 ||
      !!appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27?.structuredOutput;
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27
    ? (_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL.splice(
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC,
        1,
      ),
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue24.push(
        ..._appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO,
      ))
    : _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL.push(
        ..._appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO,
      );
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue28 =
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL[
        _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL.length -
          1
      ],
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue29 =
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam2 !==
        "in_progress" &&
      !_appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dI &&
      $(
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue28,
      )
        ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue28
        : null;
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue29 &&
    _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL.pop();
  let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue30 =
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27 !=
      null &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27.completed &&
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue22.length >
      0
      ? {
          ...appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27,
          automationCitations:
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue3
              .default(
                [
                  ...appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue22,
                ].reverse(),
                (
                  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam30,
                ) =>
                  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam30
                    .result?.automationId ??
                  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam30
                    .arguments.id ??
                  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam30.callId,
              )
              .reverse(),
        }
      : appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27;
  return {
    userItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue13,
    agentItems:
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL,
    automationUpdateItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue27 ==
      null
        ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue22
        : [],
    assistantItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue30,
    toolOutputItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue23,
    postAssistantItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue24,
    systemEventItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue29,
    unifiedDiffItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue14,
    remoteTaskCreatedItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue25,
    personalityChangedItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue26,
    forkedFromConversationItems:
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dG,
    modelChangedItems:
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dH,
    modelReroutedItems:
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dM,
    subagentActivityItemGroups:
      _appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dA,
    todoListItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue15,
    proposedPlanItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue16,
    planImplementationItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue17,
    mcpServerElicitationItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue18,
    permissionRequestItems:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue19,
    approvalItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue11,
    userInputItem:
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue12,
  };
}
var appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue3,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue4,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue5,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue6,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue7,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue8,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue9,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue10,
  $;
export const appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dT =
  rolldownRuntimeN(() => {
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue3 =
      rolldownRuntimeS(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eIr(),
        1,
      );
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue2();
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue4 =
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam26,
      ) =>
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam26.type ===
          "patch" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam26.approvalRequestId !=
          null &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam26.success ==
          null;
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue5 =
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam24,
      ) =>
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam24.type ===
          "exec" &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam24.approvalRequestId !=
          null &&
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam24
          .output?.exitCode === undefined;
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue6 =
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam31,
      ) =>
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam31?.type ===
        "assistant-message";
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue7 =
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam12,
      ) => {
        let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue73 =
          [];
        for (;;) {
          let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue84 =
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam12[
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam12.length -
                1
            ];
          if (
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue84?.type !==
            "automatic-approval-review"
          )
            break;
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam12.pop();
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue73.push(
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue84,
          );
        }
        return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue73.reverse();
      };
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue8 =
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam5,
      ) => {
        let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue43 =
            new Map(),
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue44 =
            new Set();
        for (let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue92 of appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam5) {
          let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue94 =
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue9(
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue92,
            );
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue94 !=
            null &&
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue44.add(
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue94,
            );
        }
        for (let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65 of appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam5)
          if (
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65.type ===
              "automatic-approval-review" &&
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65.targetItemId !=
              null &&
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue44.has(
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65.targetItemId,
            )
          ) {
            let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue80 =
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue43.get(
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65.targetItemId,
              );
            if (
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue80 ==
              null
            ) {
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue43.set(
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65.targetItemId,
                [
                  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65,
                ],
              );
              continue;
            }
            appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue80.push(
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue65,
            );
          }
        return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam5.flatMap(
          (item) => {
            if (
              item.type === "automatic-approval-review" &&
              item.targetItemId != null &&
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue43.has(
                item.targetItemId,
              )
            )
              return [];
            let appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue66 =
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue9(
                  item,
                ),
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue67 =
                appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue66 ==
                null
                  ? null
                  : (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue43.get(
                      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue66,
                    ) ?? null);
            return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue67 ==
              null
              ? [item]
              : [
                  {
                    ...item,
                    automaticApprovalReviews:
                      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue67,
                  },
                ];
          },
        );
      };
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue9 =
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16,
      ) =>
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16.type ===
          "exec" ||
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16.type ===
          "patch" ||
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16.type ===
          "mcp-tool-call"
          ? appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16.type ===
            "exec"
            ? (appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16.commandExecutionItemId ??
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16.callId)
            : appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam16.callId
          : null;
    appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dValue10 =
      (
        appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam7,
      ) => {
        switch (
          appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam7
            .elicitation.kind
        ) {
          case "formElicitation":
          case "openaiForm":
          case "generic":
          case "urlAction":
            return (
              appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam7.elicitation.serverName.trim() ||
              null
            );
          case "mcpToolCall":
            return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam7
              .elicitation.approval.connector_id;
          case "connectorAuth":
            return appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam7
              .elicitation.connector.connector_id;
          case "toolSuggestion":
          case "unsupportedOpenAIForm":
            return null;
        }
      };
    $ = (
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam34,
    ) =>
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dParam34?.type ===
      "system-error";
  });
export {
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dA,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dC,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dH,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dL,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dM,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dO,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dP,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dR,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dS,
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageThreadAppShellChromeRemoC1415s9dU,
};
