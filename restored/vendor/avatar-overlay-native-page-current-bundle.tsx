// Restored from ref/webview/assets/avatar-overlay-native-page-CAxsNCX7.js
// Current avatar overlay native page backing bundle with restored dependency imports.

import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperJLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUpperULowerI,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotUpperVLowerI,
  currentAppInitialSharedCompatSlotUpperVLowerO,
  currentAppInitialSharedCompatSlotUpperWLowerI,
  currentAppInitialSharedCompatSlotLowerY,
  currentAppInitialSharedCompatSlotLowerZLowerI,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerC,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperELowerS,
  worktreeNewThreadQueryCompatSlotLowerGLowerP,
  worktreeNewThreadQueryCompatSlotLowerILowerC,
  worktreeNewThreadQueryCompatSlotUpperJLowerD,
  worktreeNewThreadQueryCompatSlotLowerMLowerF,
  worktreeNewThreadQueryCompatSlotLowerMLowerP,
  worktreeNewThreadQueryCompatSlotLowerRLowerF,
  worktreeNewThreadQueryCompatSlotLowerSLowerC,
  worktreeNewThreadQueryCompatSlotUpperTLowerS,
  worktreeNewThreadQueryCompatSlotUpperXLowerD,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  createSignalGetterAtom as _appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dTy,
  currentAppInitialSharedFunction0034,
  currentAppInitialSharedAcceptDeclineCancelFunction,
  currentAppInitialSharedMember0542,
  currentAppInitialSharedMember0547,
  currentAppInitialSharedMember0097,
  initPersistedAtomStorageRuntime,
  analyticsMember0137,
  intlFormatDateTimeRuntime,
  remoteControlRefreshSourceEnum,
  currentAppInitialSharedMember0654,
  currentAppInitialSharedMember0210,
  appServerDisconnectedAppServerSignal,
  toolSuggestionAndConnectorSchema,
  currentAppInitialSharedMember0273,
  currentAppInitialSharedDisplayRuntime,
  remoteConnectionRuntime0298,
  currentAppInitialSharedMember0781,
  currentAppInitialSharedImplementPlanImplementationRuntime,
  currentAppInitialSharedMember0342,
  createSignalGetterAtom,
  currentAppInitialSharedRuntime0840,
  extractJsonSchemaRequiredFields,
  currentAppInitialSharedFunction0375,
  currentAppInitialSharedMember0864,
  currentAppInitialSharedFunction0895,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initAvatarOverlayOpenStateChunk,
  avatarOverlayAnalytics,
} from "./automations-page-current-runtime";
import {
  pullRequestNewThreadCompatSlotUpperD,
  pullRequestNewThreadCompatSlotLowerY,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotLowerBLowerM,
  appMainCurrentCompatSlotUnderscoreLowerF,
  appMainCurrentCompatSlotLowerOLowerD,
  appMainCurrentCompatSlotLowerSLowerD,
  appMainCurrentCompatSlotLowerVLowerF,
  appMainCurrentCompatSlotLowerXLowerM,
} from "./app-main-current-runtime";
import {
  initAvatarOverlayNativeFrameCopyChunk,
  initAvatarOverlayNativeFrameChunk,
  buildAvatarOverlayNativeNotificationCopy,
  AvatarOverlayNativeFrame,
} from "../features/avatar-overlay-native-frame";
import {
  createAvatarOverlayMascotWidthStyle,
  initAvatarOverlayPillActivityItemsChunk,
  clampAvatarOverlayMascotWidth,
  initAvatarOverlayMascotWidthChunk,
  AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
  useAvatarOverlayMascotWidth,
  buildAvatarOverlayPillActivityItems,
} from "../features/avatar-overlay-pill";
import {
  isSelectedCustomAvatarMissing,
  initAvatarSelectionStateChunk,
} from "../features/custom-avatars-query";
import {
  useFloatingWindowPointerInteractivity,
  initFloatingWindowPointerInteractivityChunk,
} from "../utils/use-floating-window-pointer-interactivity";
import {
  initAvatarOverlayDebugStateChunk,
  avatarOverlayResizeButtonHiddenSignal,
} from "../utils/avatar-overlay-debug-state";
import {
  initAvatarOverlayNotificationTrayChunk,
  resolveAvatarOverlayPointerDragRelease,
  initAvatarOverlayPointerDragChunk,
  collectAvatarOverlayNotifications,
  createAvatarOverlayPointerSample,
  useAvatarOverlaySelection,
  buildAvatarOverlayNotificationSearchKey,
  createFirstAwakeAvatarOverlayNotification,
  initAvatarOverlayNotificationSearchKeyChunk,
  initUseAvatarOverlaySelectionChunk,
  trimRecentAvatarOverlayPointerSamples,
} from "../features/avatar-overlay-selection";
function avatarOverlayNativePageHelper1({
  activityStackPresentation,
  isNotificationStackExpanded,
  measuredSurfaces,
  policies,
}) {
  return measuredSurfaces.flatMap((item) => {
    let avatarOverlayNativePageValue164 = policies.find(
      (_item) => _item.id === item.id,
    );
    if (avatarOverlayNativePageValue164 == null) return [];
    let avatarOverlayNativePageValue165 = activityStackPresentation.slots.find(
      (_item) => _item.slotId === item.id,
    );
    if (avatarOverlayNativePageValue165 == null)
      return [
        {
          ...item,
          ...avatarOverlayNativePageValue164,
          chromiumPresentationRect: item.rect,
          edgeZone: null,
          opacity: 1,
          platterRect: item.rect,
          presentationRect: item.rect,
        },
      ];
    let avatarOverlayNativePageValue166 = avatarOverlayNativePageHelper2(
      item.rect,
      avatarOverlayNativePageValue165.visibleRect,
      avatarOverlayNativePageValue165.presentationRect,
    );
    return [
      {
        ...item,
        ...avatarOverlayNativePageValue164,
        chromiumPresentationRect: isNotificationStackExpanded
          ? item.rect
          : avatarOverlayNativePageHelper2(
              item.rect,
              avatarOverlayNativePageValue165.contentRect,
              avatarOverlayNativePageValue165.presentationRect,
            ),
        edgeZone: avatarOverlayNativePageValue165.edgeZone,
        opacity:
          !isNotificationStackExpanded ||
          avatarOverlayNativePageValue165.visibleRect.height > 0
            ? 1
            : 0,
        platterRect: item.rect,
        presentationRect: avatarOverlayNativePageValue166,
      },
    ];
  });
}
function avatarOverlayNativePageHelper2(
  avatarOverlayNativePageParam42,
  avatarOverlayNativePageParam43,
  avatarOverlayNativePageParam44,
) {
  return {
    height: avatarOverlayNativePageParam43.height,
    left:
      avatarOverlayNativePageParam42.left +
      avatarOverlayNativePageParam43.left -
      avatarOverlayNativePageParam44.left,
    top:
      avatarOverlayNativePageParam42.top +
      avatarOverlayNativePageParam43.top -
      avatarOverlayNativePageParam44.top,
    width: avatarOverlayNativePageParam43.width,
  };
}
var avatarOverlayNativePageValue1 = once(() => {});
function avatarOverlayNativePageHelper3(
  avatarOverlayNativePageParam27,
  { includeInertSurfaces = false } = {},
) {
  if (avatarOverlayNativePageParam27 == null) return null;
  let avatarOverlayNativePageValue193 = _t(
      avatarOverlayNativePageParam27.querySelector(
        avatarOverlayNativePageValue2,
      ),
    ),
    avatarOverlayNativePageValue194 = avatarOverlayNativePageHelper7(
      avatarOverlayNativePageParam27.querySelector(
        avatarOverlayNativePageValue3,
      ),
      includeInertSurfaces,
    );
  return avatarOverlayNativePageValue193 == null
    ? null
    : {
        mascot: avatarOverlayNativePageValue193,
        tray: avatarOverlayNativePageValue194,
      };
}
function avatarOverlayNativePageHelper4(
  avatarOverlayNativePageParam8,
  avatarOverlayNativePageParam9,
  { includeInert = false } = {},
) {
  return avatarOverlayNativePageParam8 == null
    ? []
    : Array.from(
        avatarOverlayNativePageParam8.querySelectorAll(
          avatarOverlayNativePageValue9,
        ),
      )
        .flatMap((item) => {
          if (
            (!includeInert && item.closest("[inert]") != null) ||
            avatarOverlayNativePageHelper8(item)
          )
            return [];
          let avatarOverlayNativePageValue139 =
              item.dataset.avatarOverlayNativeSurfaceId,
            avatarOverlayNativePageValue140 =
              avatarOverlayNativePageParam9.find(
                (_item) => _item === avatarOverlayNativePageValue139,
              ),
            avatarOverlayNativePageValue141 = item.getBoundingClientRect();
          if (
            avatarOverlayNativePageValue140 == null ||
            avatarOverlayNativePageValue141.width <= 0 ||
            avatarOverlayNativePageValue141.height <= 0
          )
            return [];
          let avatarOverlayNativePageValue142 = {
              height: avatarOverlayNativePageValue141.height,
              left: avatarOverlayNativePageValue141.left,
              top: avatarOverlayNativePageValue141.top,
              width: avatarOverlayNativePageValue141.width,
            },
            avatarOverlayNativePageValue143 = Number(
              item.dataset.avatarOverlayNativeCornerRadius,
            ),
            avatarOverlayNativePageValue144 =
              avatarOverlayNativePageHelper9(item);
          if (
            !Number.isFinite(avatarOverlayNativePageValue143) ||
            !Number.isFinite(avatarOverlayNativePageValue144)
          )
            return [];
          let avatarOverlayNativePageValue145 = item.querySelector(
              avatarOverlayNativePageValue10,
            ),
            avatarOverlayNativePageValue146 =
              avatarOverlayNativePageValue145?.getBoundingClientRect();
          return [
            {
              ...(avatarOverlayNativePageValue145 != null &&
              avatarOverlayNativePageValue146 != null &&
              !avatarOverlayNativePageHelper8(
                avatarOverlayNativePageValue145,
              ) &&
              avatarOverlayNativePageValue146.width > 0 &&
              avatarOverlayNativePageValue146.height > 0
                ? {
                    chromiumOverflowCornerRadius:
                      Math.min(
                        avatarOverlayNativePageValue146.width,
                        avatarOverlayNativePageValue146.height,
                      ) / 2,
                    chromiumOverflowRect: {
                      height: avatarOverlayNativePageValue146.height,
                      left: avatarOverlayNativePageValue146.left,
                      top: avatarOverlayNativePageValue146.top,
                      width: avatarOverlayNativePageValue146.width,
                    },
                  }
                : {}),
              cornerRadius: avatarOverlayNativePageValue143,
              id: avatarOverlayNativePageValue140,
              opacity: avatarOverlayNativePageValue144,
              rect: avatarOverlayNativePageValue142,
            },
          ];
        })
        .sort(
          (avatarOverlayNativePageParam63, avatarOverlayNativePageParam64) =>
            avatarOverlayNativePageParam9.indexOf(
              avatarOverlayNativePageParam63.id,
            ) -
            avatarOverlayNativePageParam9.indexOf(
              avatarOverlayNativePageParam64.id,
            ),
        );
}
function avatarOverlayNativePageHelper5(avatarOverlayNativePageParam58) {
  return Array.from(
    avatarOverlayNativePageParam58.querySelectorAll(
      avatarOverlayNativePageValue12.join(", "),
    ),
  );
}
function _t(avatarOverlayNativePageParam28) {
  if (
    avatarOverlayNativePageParam28 == null ||
    avatarOverlayNativePageHelper8(avatarOverlayNativePageParam28)
  )
    return null;
  let avatarOverlayNativePageValue195 =
    avatarOverlayNativePageParam28.getBoundingClientRect();
  return avatarOverlayNativePageValue195.width <= 0 ||
    avatarOverlayNativePageValue195.height <= 0
    ? null
    : {
        width: Math.ceil(avatarOverlayNativePageValue195.width),
        height: Math.ceil(avatarOverlayNativePageValue195.height),
      };
}
function avatarOverlayNativePageHelper6(avatarOverlayNativePageParam40) {
  return {
    backing:
      _t(
        avatarOverlayNativePageParam40?.querySelector(
          avatarOverlayNativePageValue7,
        ) ?? null,
      )?.height ?? 0,
    visible:
      _t(
        avatarOverlayNativePageParam40?.querySelector(
          avatarOverlayNativePageValue8,
        ) ?? null,
      )?.height ?? 0,
  };
}
function avatarOverlayNativePageHelper7(
  avatarOverlayNativePageParam11,
  avatarOverlayNativePageParam12,
) {
  if (
    avatarOverlayNativePageParam11 == null ||
    avatarOverlayNativePageHelper8(avatarOverlayNativePageParam11)
  )
    return null;
  let avatarOverlayNativePageValue156 =
    avatarOverlayNativePageParam11.getBoundingClientRect();
  if (
    avatarOverlayNativePageValue156.width <= 0 ||
    avatarOverlayNativePageValue156.height <= 0
  )
    return null;
  let avatarOverlayNativePageValue157 = Array.from(
      avatarOverlayNativePageParam11.querySelectorAll(
        avatarOverlayNativePageValue9,
      ),
    )
      .filter(
        (item) =>
          (avatarOverlayNativePageParam12 || item.closest("[inert]") == null) &&
          !avatarOverlayNativePageHelper8(item),
      )
      .map((item) => item.getBoundingClientRect()),
    avatarOverlayNativePageValue158 = Math.ceil(
      Math.max(
        avatarOverlayNativePageParam11.offsetWidth > 0
          ? avatarOverlayNativePageParam11.offsetWidth
          : avatarOverlayNativePageValue156.width,
        Math.max(
          avatarOverlayNativePageValue156.right,
          ...avatarOverlayNativePageValue157.map((item) => item.right),
        ) -
          Math.min(
            avatarOverlayNativePageValue156.left,
            ...avatarOverlayNativePageValue157.map((item) => item.left),
          ),
      ),
    ),
    avatarOverlayNativePageValue159 =
      avatarOverlayNativePageParam11.querySelector(
        avatarOverlayNativePageValue4,
      ),
    avatarOverlayNativePageValue160 =
      avatarOverlayNativePageParam11.querySelector(
        avatarOverlayNativePageValue5,
      );
  if (
    avatarOverlayNativePageValue159 == null ||
    avatarOverlayNativePageValue160 == null
  )
    return {
      height: Math.ceil(avatarOverlayNativePageValue156.height),
      width: avatarOverlayNativePageValue158,
    };
  let avatarOverlayNativePageValue161 =
      avatarOverlayNativePageValue160.getBoundingClientRect(),
    avatarOverlayNativePageValue162 = Math.max(
      0,
      ...Array.from(
        avatarOverlayNativePageValue160.querySelectorAll(
          avatarOverlayNativePageValue11,
        ),
      ).map(
        (item) =>
          item.getBoundingClientRect().bottom -
          avatarOverlayNativePageValue161.bottom,
      ),
    );
  return {
    height: Math.ceil(
      avatarOverlayNativePageValue159.getBoundingClientRect().height +
        avatarOverlayNativePageValue160.scrollHeight -
        avatarOverlayNativePageValue162,
    ),
    width: avatarOverlayNativePageValue158,
  };
}
function avatarOverlayNativePageHelper8(avatarOverlayNativePageParam59) {
  return (
    window.getComputedStyle(avatarOverlayNativePageParam59).display === "none"
  );
}
function avatarOverlayNativePageHelper9(avatarOverlayNativePageParam41) {
  let avatarOverlayNativePageValue199 = 1;
  for (
    let avatarOverlayNativePageValue206 = avatarOverlayNativePageParam41;
    avatarOverlayNativePageValue206 != null;
    avatarOverlayNativePageValue206 =
      avatarOverlayNativePageValue206.parentElement
  )
    avatarOverlayNativePageValue199 *= Number(
      window.getComputedStyle(avatarOverlayNativePageValue206).opacity || "1",
    );
  return avatarOverlayNativePageValue199;
}
var avatarOverlayNativePageValue2,
  avatarOverlayNativePageValue3,
  avatarOverlayNativePageValue4,
  avatarOverlayNativePageValue5,
  avatarOverlayNativePageValue6,
  avatarOverlayNativePageValue7,
  avatarOverlayNativePageValue8,
  avatarOverlayNativePageValue9,
  avatarOverlayNativePageValue10,
  avatarOverlayNativePageValue11,
  avatarOverlayNativePageValue12,
  avatarOverlayNativePageValue13 = once(() => {
    avatarOverlayNativePageValue2 = ".codex-avatar-root";
    avatarOverlayNativePageValue3 =
      "[data-avatar-overlay-size='notification-tray']";
    avatarOverlayNativePageValue4 =
      "[data-avatar-overlay-size='notification-tray-header']";
    avatarOverlayNativePageValue5 =
      "[data-avatar-overlay-size='notification-tray-list']";
    avatarOverlayNativePageValue6 =
      "[data-avatar-overlay-measure='notification-tray-row']";
    avatarOverlayNativePageValue7 =
      "[data-avatar-overlay-size='notification-stack-backing-layout']";
    avatarOverlayNativePageValue8 =
      "[data-avatar-overlay-size='notification-stack-visible-layout']";
    avatarOverlayNativePageValue9 = "[data-avatar-overlay-native-surface-id]";
    avatarOverlayNativePageValue10 =
      "[data-avatar-overlay-chromium-overflow='true']";
    avatarOverlayNativePageValue11 =
      "[data-avatar-overlay-backing-canvas='true']";
    avatarOverlayNativePageValue12 = [
      avatarOverlayNativePageValue2,
      avatarOverlayNativePageValue3,
      avatarOverlayNativePageValue4,
      avatarOverlayNativePageValue5,
      avatarOverlayNativePageValue6,
      avatarOverlayNativePageValue7,
      avatarOverlayNativePageValue8,
      avatarOverlayNativePageValue9,
      avatarOverlayNativePageValue10,
    ];
  });
export function AvatarOverlayNativePage() {
  let { selectedAvatar, selectedAvatarId } = useAvatarOverlaySelection(),
    avatarOverlayNativePageValue148 = selectedAvatar == null,
    avatarOverlayNativePageValue149,
    avatarOverlayNativePageValue150;
  avatarOverlayNativePageValue149 = () => {
    avatarOverlayNativePageValue148 &&
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-pointer-interaction-changed",
        {
          isInteractive: false,
        },
      );
  };
  avatarOverlayNativePageValue150 = [avatarOverlayNativePageValue148];
  avatarOverlayNativePageValue16.useEffect(
    avatarOverlayNativePageValue149,
    avatarOverlayNativePageValue150,
  );
  let avatarOverlayNativePageValue151, avatarOverlayNativePageValue152;
  if (
    ((avatarOverlayNativePageValue151 = () => {
      avatarOverlayNativePageValue148 &&
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-composition-changed",
          {
            state: null,
          },
        );
    }),
    (avatarOverlayNativePageValue152 = [avatarOverlayNativePageValue148]),
    avatarOverlayNativePageValue16.useLayoutEffect(
      avatarOverlayNativePageValue151,
      avatarOverlayNativePageValue152,
    ),
    selectedAvatar == null)
  )
    return null;
  let avatarOverlayNativePageValue153 = avatarOverlayNativePageHelper14(
    selectedAvatar,
    selectedAvatarId,
  );
  return avatarOverlayNativePageValue17.jsx(
    avatarOverlayNativePageHelper10,
    {
      selectedAvatar,
      selectedAvatarId,
    },
    avatarOverlayNativePageValue153,
  );
}
function avatarOverlayNativePageHelper10({ selectedAvatar, selectedAvatarId }) {
  let avatarOverlayNativePageValue114 =
      currentAppInitialSharedCompatSlotUpperKLowerO(
        currentAppInitialSharedCompatSlotUpperE,
      ),
    avatarOverlayNativePageValue115 = currentAppInitialSharedFunction0375(),
    avatarOverlayNativePageValue116 =
      worktreeNewThreadQueryCompatSlotUpperELowerS() === true,
    avatarOverlayNativePageValue117 =
      currentAppInitialSharedMember0781("451951815"),
    avatarOverlayNativePageValue118 =
      currentAppInitialSharedMember0781("665486075"),
    avatarOverlayNativePageValue119 =
      currentAppInitialSharedMember0781("1380537759"),
    avatarOverlayNativePageValue120 = currentAppInitialSharedMember0781(
      appMainCurrentCompatSlotLowerBLowerM,
    ),
    avatarOverlayNativePageValue121 = appMainCurrentCompatSlotLowerSLowerD(
      currentAppInitialSharedMember0542,
    ),
    avatarOverlayNativePageValue122 =
      currentAppInitialSharedCompatSlotLowerQLowerO(analyticsMember0137),
    { mascotWidthPx, setMascotWidthPx } = useAvatarOverlayMascotWidth(),
    { data = [], refetch } = pullRequestNewThreadCompatSlotUpperD(),
    { data: _data = [], refetch: _refetch } =
      worktreeNewThreadQueryCompatSlotLowerMLowerF({
        taskFilter: "current",
        limit: 20,
      }),
    avatarOverlayNativePageValue123 =
      worktreeNewThreadQueryCompatSlotUpperXLowerD(),
    avatarOverlayNativePageValue124 =
      worktreeNewThreadQueryCompatSlotLowerRLowerF(),
    avatarOverlayNativePageValue125 = buildAvatarOverlayPillActivityItems({
      includeCompactWaitingRequests: avatarOverlayNativePageValue117,
      includeMcpElicitationCancelAction: true,
      intl: avatarOverlayNativePageValue115,
      localConversations: data,
      excludedConversationId: null,
      remoteTasks: _data,
    });
  return avatarOverlayNativePageValue17.jsx(avatarOverlayNativePageHelper11, {
    isDarkAppearance: avatarOverlayNativePageValue116,
    dictationCleanupEnabled: false,
    dictationStreamingEnabled: avatarOverlayNativePageValue120,
    dictationSupportState: avatarOverlayNativePageValue121,
    latestTurnItems: (avatarOverlayNativePageParam62) =>
      avatarOverlayNativePageParam62 == null
        ? undefined
        : avatarOverlayNativePageValue114.get(
            currentAppInitialSharedMember0547,
            avatarOverlayNativePageParam62,
          )?.items,
    mascotWidthPx,
    productLogger: avatarOverlayNativePageValue122,
    globalDictationOrbEnabled: avatarOverlayNativePageValue119,
    quickChatEnabled: avatarOverlayNativePageValue118,
    selectedAvatar,
    selectedAvatarId,
    sessions: avatarOverlayNativePageValue125,
    onClosePet: () => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-close",
        {},
      );
    },
    onMascotClick: () => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "open-current-main-window",
        {},
      );
    },
    onMascotWidthChange: setMascotWidthPx,
    onRefreshLocalSessions: refetch,
    onRefreshRemoteSessions: _refetch,
    onRunNotificationControl: async (
      avatarOverlayNativePageParam6,
      avatarOverlayNativePageParam7,
    ) => {
      let avatarOverlayNativePageValue135 =
        avatarOverlayNativePageParam6.controlTarget;
      switch (avatarOverlayNativePageParam7.type) {
        case "close-follow-up":
        case "open-follow-up":
          return;
        case "stop":
          if (avatarOverlayNativePageValue135 == null) return;
          switch (avatarOverlayNativePageValue135.type) {
            case "app-server-conversation":
              await currentAppInitialSharedFunction0895(
                "interrupt-conversation",
                {
                  conversationId:
                    avatarOverlayNativePageValue135.conversationId,
                  initiatedBy: "user",
                },
              );
              Promise.resolve(refetch()).catch(() => {});
              return;
            case "cloud-task":
              await avatarOverlayNativePageValue123.mutateAsync(
                avatarOverlayNativePageValue135.taskId,
              );
              Promise.resolve(_refetch()).catch(() => {});
              return;
          }
        case "submit-follow-up": {
          let avatarOverlayNativePageValue155 =
            avatarOverlayNativePageParam7.prompt.trim();
          if (
            avatarOverlayNativePageValue135 == null ||
            avatarOverlayNativePageValue155.length === 0
          )
            return;
          switch (avatarOverlayNativePageValue135.type) {
            case "app-server-conversation":
              await currentAppInitialSharedFunction0895(
                "send-follow-up-message",
                {
                  conversationId:
                    avatarOverlayNativePageValue135.conversationId,
                  prompt: avatarOverlayNativePageValue155,
                  serviceTier:
                    await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(
                      avatarOverlayNativePageValue114,
                      avatarOverlayNativePageValue114.get(
                        currentAppInitialSharedMember0210,
                        avatarOverlayNativePageValue135.conversationId,
                      ) ?? "local",
                      null,
                    ),
                },
              );
              Promise.resolve(refetch()).catch(() => {});
              return;
            case "cloud-task":
              await avatarOverlayNativePageValue124.mutateAsync({
                taskId: avatarOverlayNativePageValue135.taskId,
                turnId: avatarOverlayNativePageValue135.turnId,
                prompt: avatarOverlayNativePageValue155,
                ideContext: "",
                runEnvironmentInQaMode: false,
                priorConversation: null,
                images: null,
              });
              Promise.resolve(_refetch()).catch(() => {});
              return;
          }
        }
      }
    },
    onRunNotificationAction: (
      avatarOverlayNativePageParam1,
      avatarOverlayNativePageParam2,
    ) => {
      let avatarOverlayNativePageValue126 =
        avatarOverlayNativePageParam1.waitingRequest;
      if (
        avatarOverlayNativePageParam1.localConversationId != null &&
        avatarOverlayNativePageParam2 != null
      ) {
        let avatarOverlayNativePageValue127 =
          avatarOverlayNativePageParam1.localConversationId;
        switch (avatarOverlayNativePageParam2.intent) {
          case "command-approval":
            if (
              avatarOverlayNativePageParam2.commandDecision != null &&
              (avatarOverlayNativePageValue126?.kind === "exec" ||
                avatarOverlayNativePageValue126?.kind === "network")
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-command-execution-approval-decision",
                {
                  conversationId: avatarOverlayNativePageValue127,
                  requestId: avatarOverlayNativePageValue126.requestId,
                  decision: avatarOverlayNativePageParam2.commandDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "file-approval":
            if (
              avatarOverlayNativePageParam2.fileDecision != null &&
              avatarOverlayNativePageValue126?.kind === "patch"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-file-change-approval-decision",
                {
                  conversationId: avatarOverlayNativePageValue127,
                  requestId: avatarOverlayNativePageValue126.requestId,
                  decision: avatarOverlayNativePageParam2.fileDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "permission-response":
            if (
              avatarOverlayNativePageParam2.permissionResponse != null &&
              avatarOverlayNativePageValue126?.kind === "permission"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-permissions-request-approval-response",
                {
                  conversationId: avatarOverlayNativePageValue127,
                  requestId: avatarOverlayNativePageValue126.requestId,
                  response: avatarOverlayNativePageParam2.permissionResponse,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "mcp-elicitation":
            if (
              avatarOverlayNativePageParam2.mcpElicitationAction != null &&
              avatarOverlayNativePageValue126?.kind === "tool"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-mcp-server-elicitation-response",
                {
                  conversationId: avatarOverlayNativePageValue127,
                  requestId: avatarOverlayNativePageValue126.requestId,
                  response: currentAppInitialSharedAcceptDeclineCancelFunction(
                    avatarOverlayNativePageParam2.mcpElicitationAction,
                  ),
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "plan-start":
            if (
              avatarOverlayNativePageValue126?.kind === "plan" &&
              avatarOverlayNativePageParam2.planStartCollaborationMode != null
            ) {
              currentAppInitialSharedFunction0895(
                "update-thread-settings-for-next-turn",
                {
                  conversationId: avatarOverlayNativePageValue127,
                  threadSettings: {
                    collaborationMode:
                      avatarOverlayNativePageParam2.planStartCollaborationMode,
                  },
                },
              )
                .then(() =>
                  currentAppInitialSharedFunction0895(
                    "remove-plan-implementation-request",
                    {
                      conversationId: avatarOverlayNativePageValue127,
                      turnId: avatarOverlayNativePageValue126.turnId,
                    },
                  ),
                )
                .then(async () =>
                  currentAppInitialSharedFunction0895(
                    "send-follow-up-message",
                    {
                      conversationId: avatarOverlayNativePageValue127,
                      prompt: `${currentAppInitialSharedMember0864}\n${avatarOverlayNativePageValue126.planContent}`,
                      serviceTier:
                        await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(
                          avatarOverlayNativePageValue114,
                          avatarOverlayNativePageValue114.get(
                            currentAppInitialSharedMember0210,
                            avatarOverlayNativePageValue127,
                          ) ?? "local",
                          avatarOverlayNativePageParam2
                            .planStartCollaborationMode?.settings.model ?? null,
                        ),
                    },
                  ),
                )
                .then(() => {
                  refetch();
                });
              return;
            }
            break;
          case "open":
            break;
        }
      }
      (avatarOverlayNativePageParam2 != null &&
        avatarOverlayNativePageParam2.intent !== "open") ||
        (avatarOverlayNativePageParam1.action != null &&
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "open-in-main-window",
            {
              path: avatarOverlayNativePageParam1.action.path,
            },
          ));
    },
    onSubmitQuestionOption: (
      avatarOverlayNativePageParam13,
      avatarOverlayNativePageParam14,
    ) => {
      let avatarOverlayNativePageValue182 =
        avatarOverlayNativePageParam13.waitingRequest;
      avatarOverlayNativePageParam13.localConversationId == null ||
        avatarOverlayNativePageValue182?.kind !== "question" ||
        currentAppInitialSharedFunction0895("reply-with-user-input-response", {
          conversationId: avatarOverlayNativePageParam13.localConversationId,
          requestId: avatarOverlayNativePageValue182.requestId,
          response: {
            answers: {
              [avatarOverlayNativePageParam14.questionId]: {
                answers: [avatarOverlayNativePageParam14.label],
              },
            },
          },
        }).then(() => {
          refetch();
        });
    },
    onSubmitQuickChat: async (avatarOverlayNativePageParam31) => {
      await appMainCurrentCompatSlotUnderscoreLowerF({
        model: undefined,
        prompt: avatarOverlayNativePageParam31,
        scope: avatarOverlayNativePageValue114,
        target: {
          type: "projectless",
        },
        thinking: undefined,
      });
      await refetch();
    },
  });
}
function avatarOverlayNativePageHelper11({
  dictationCleanupEnabled,
  dictationStreamingEnabled,
  dictationSupportState,
  firstAwakeNotificationEnabled = true,
  globalDictationOrbEnabled = false,
  isDarkAppearance,
  latestTurnItems,
  mascotWidthPx,
  productLogger,
  quickChatEnabled,
  selectedAvatar,
  selectedAvatarId,
  sessions,
  onClosePet,
  onMascotClick,
  onMascotWidthChange,
  onRefreshLocalSessions,
  onRefreshRemoteSessions,
  onRunNotificationControl,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onSubmitQuickChat,
}) {
  let avatarOverlayNativePageValue26 =
      currentAppInitialSharedCompatSlotUpperKLowerO(
        currentAppInitialSharedCompatSlotUpperE,
      ),
    be = currentAppInitialSharedCompatSlotLowerQLowerO(
      avatarOverlayResizeButtonHiddenSignal,
    ),
    avatarOverlayNativePageValue27 =
      avatarOverlayNativePageValue22.phase !== "inactive" && true;
  currentAppInitialSharedCompatSlotUpperGLowerO(
    currentAppInitialSharedMember0547,
    undefined,
  );
  let { data } = worktreeNewThreadQueryCompatSlotLowerSLowerC({
      enabled: avatarOverlayNativePageValue27,
      hostId: undefined,
    }),
    avatarOverlayNativePageValue28 = currentAppInitialSharedFunction0375(),
    [avatarOverlayNativePageValue29, avatarOverlayNativePageValue30] =
      avatarOverlayNativePageValue16.useState(avatarOverlayNativePageValue25),
    [avatarOverlayNativePageValue31, avatarOverlayNativePageValue32] =
      avatarOverlayNativePageValue16.useState(false),
    [avatarOverlayNativePageValue33, avatarOverlayNativePageValue34] =
      avatarOverlayNativePageValue16.useState(true),
    [avatarOverlayNativePageValue35, avatarOverlayNativePageValue36] =
      avatarOverlayNativePageValue16.useState(false),
    [avatarOverlayNativePageValue37, avatarOverlayNativePageValue38] =
      avatarOverlayNativePageValue16.useState(false),
    [avatarOverlayNativePageValue39, avatarOverlayNativePageValue40] =
      avatarOverlayNativePageValue16.useState(false),
    [avatarOverlayNativePageValue41, avatarOverlayNativePageValue42] =
      avatarOverlayNativePageValue16.useState(false),
    [avatarOverlayNativePageValue43, avatarOverlayNativePageValue44] =
      avatarOverlayNativePageValue16.useState(null),
    [avatarOverlayNativePageValue45, avatarOverlayNativePageValue46] =
      avatarOverlayNativePageValue16.useState(""),
    [avatarOverlayNativePageValue47, avatarOverlayNativePageValue48] =
      avatarOverlayNativePageValue16.useState(0),
    [avatarOverlayNativePageValue49, avatarOverlayNativePageValue50] =
      avatarOverlayNativePageValue16.useState(null),
    [avatarOverlayNativePageValue51, avatarOverlayNativePageValue52] =
      avatarOverlayNativePageValue16.useState([]),
    [avatarOverlayNativePageValue53, avatarOverlayNativePageValue54] =
      avatarOverlayNativePageValue16.useState({}),
    [avatarOverlayNativePageValue55, avatarOverlayNativePageValue56] =
      avatarOverlayNativePageValue16.useState(0),
    [avatarOverlayNativePageValue57, avatarOverlayNativePageValue58] =
      avatarOverlayNativePageValue16.useState(false),
    [avatarOverlayNativePageValue59, avatarOverlayNativePageValue60] =
      avatarOverlayNativePageValue16.useState(null),
    [avatarOverlayNativePageValue61, avatarOverlayNativePageValue62] =
      avatarOverlayNativePageValue16.useState(false),
    [avatarOverlayNativePageValue63, avatarOverlayNativePageValue64] =
      avatarOverlayNativePageValue16.useState(null),
    [avatarOverlayNativePageValue65, avatarOverlayNativePageValue66] =
      avatarOverlayNativePageValue16.useState(() => new Map()),
    [avatarOverlayNativePageValue67, avatarOverlayNativePageValue68] =
      avatarOverlayNativePageValue16.useState(() => Date.now()),
    [avatarOverlayNativePageValue69] = avatarOverlayNativePageValue16.useState(
      () =>
        firstAwakeNotificationEnabled
          ? avatarOverlayNativePageHelper13(selectedAvatar, selectedAvatarId)
          : null,
    ),
    avatarOverlayNativePageValue70 =
      avatarOverlayNativePageValue69 == null
        ? null
        : createFirstAwakeAvatarOverlayNotification({
            intl: avatarOverlayNativePageValue28,
            petName: avatarOverlayNativePageValue69.petName,
            startedAtMs: avatarOverlayNativePageValue69.startedAtMs,
          }),
    avatarOverlayNativePageValue71 = [],
    { nextNotificationExpiresAtMs, notifications } =
      collectAvatarOverlayNotifications({
        dismissedNotificationTurnKeys: avatarOverlayNativePageValue65,
        extraNotifications: avatarOverlayNativePageValue27
          ? [...[], ...avatarOverlayNativePageValue71]
          : avatarOverlayNativePageValue70 == null
            ? []
            : [avatarOverlayNativePageValue70],
        latestActivityFirst: true,
        nowMs: avatarOverlayNativePageValue67,
        sessions: avatarOverlayNativePageValue27 ? [] : sessions,
      }),
    avatarOverlayNativePageValue72 = notifications.map((item) => ({
      copy: buildAvatarOverlayNativeNotificationCopy({
        intl: avatarOverlayNativePageValue28,
        latestTurnItems:
          item.source === "local" && !item.id.startsWith("realtime-")
            ? latestTurnItems(item.localConversationId)
            : undefined,
        notification: item,
        notificationCount: notifications.length,
      }),
      notification: item,
    })),
    avatarOverlayNativePageValue73 = buildAvatarOverlayNotificationSearchKey(
      notifications,
      avatarOverlayNativePageValue28,
    ),
    avatarOverlayNativePageValue74 = avatarOverlayNativePageValue33
      ? notifications.map(({ id }) => ({
          height: avatarOverlayNativePageValue53[id] ?? 54,
          id,
        }))
      : avatarOverlayNativePageValue20,
    avatarOverlayNativePageValue75 =
      currentAppInitialSharedCompatSlotUpperULowerI({
        expanded:
          avatarOverlayNativePageValue31 || avatarOverlayNativePageValue35,
        items: avatarOverlayNativePageValue74,
        scrollOffset: avatarOverlayNativePageValue55,
        viewportRect: {
          height: avatarOverlayNativePageValue19,
          left: 0,
          top: 0,
          width: 345,
        },
      }),
    avatarOverlayNativePageValue76 = sessions.some(
      (item) => item.source !== "cloud" && item.status === "running",
    ),
    avatarOverlayNativePageValue77 = sessions.some(
      (item) => item.source === "cloud" && item.status === "running",
    ),
    avatarOverlayNativePageValue78 =
      quickChatEnabled &&
      (avatarOverlayNativePageValue37 ||
        avatarOverlayNativePageValue39 ||
        avatarOverlayNativePageValue41),
    _AvatarOverlayNativePage = avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue79 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue80 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue81 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue82 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue83 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue84 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue85 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue86 = avatarOverlayNativePageValue16.useRef(0),
    avatarOverlayNativePageValue87 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue88 =
      avatarOverlayNativePageValue16.useRef(null),
    avatarOverlayNativePageValue89 =
      avatarOverlayNativePageValue16.useRef(false),
    avatarOverlayNativePageValue90 = avatarOverlayNativePageValue16.useCallback(
      (
        avatarOverlayNativePageParam15,
        avatarOverlayNativePageParam16,
        avatarOverlayNativePageParam17,
        avatarOverlayNativePageParam18 = avatarOverlayNativePageValue35,
      ) => {
        productLogger.logProductEvent(
          currentAppInitialSharedMember0097,
          avatarOverlayAnalytics({
            action: avatarOverlayNativePageParam15,
            hasRunningCloudSession: avatarOverlayNativePageValue77,
            hasRunningLocalSession: avatarOverlayNativePageValue76,
            isNotificationTrayOpen: avatarOverlayNativePageParam18,
            notification: avatarOverlayNativePageParam17,
            notificationCount: notifications.length,
            selectedAvatar,
            source: avatarOverlayNativePageParam16,
          }),
        );
      },
      [
        avatarOverlayNativePageValue76,
        avatarOverlayNativePageValue77,
        avatarOverlayNativePageValue35,
        notifications.length,
        productLogger,
        selectedAvatar,
      ],
    );
  avatarOverlayNativePageValue16.useEffect(() => {
    if (avatarOverlayNativePageValue69 == null) return;
    let avatarOverlayNativePageValue205 = createSignalGetterAtom(
      avatarOverlayNativePageValue21,
      [],
    );
    avatarOverlayNativePageValue205.includes(
      avatarOverlayNativePageValue69.avatarId,
    ) ||
      currentAppInitialSharedFunction0034(avatarOverlayNativePageValue21, [
        ...avatarOverlayNativePageValue205,
        avatarOverlayNativePageValue69.avatarId,
      ]);
  }, [avatarOverlayNativePageValue69]);
  avatarOverlayNativePageValue16.useEffect(() => {
    avatarOverlayNativePageValue89.current ||
      (productLogger !== extractJsonSchemaRequiredFields &&
        ((avatarOverlayNativePageValue89.current = true),
        avatarOverlayNativePageValue90(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
        )));
  }, [productLogger, avatarOverlayNativePageValue90]);
  useFloatingWindowPointerInteractivity({
    interactiveRegionRef: avatarOverlayNativePageValue84,
    isPaused: () =>
      _AvatarOverlayNativePage.current != null ||
      avatarOverlayNativePageValue79.current != null,
    onInteractiveChange: (avatarOverlayNativePageParam48) => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-pointer-interaction-changed",
        {
          isInteractive: avatarOverlayNativePageParam48,
        },
      );
    },
    regionElementSelectors: avatarOverlayNativePageValue23,
  });
  let avatarOverlayNativePageValue91 =
      avatarOverlayNativePageValue16.useCallback(() => {
        let avatarOverlayNativePageValue128 = avatarOverlayNativePageHelper3(
          avatarOverlayNativePageValue84.current,
          {
            includeInertSurfaces: true,
          },
        );
        if (avatarOverlayNativePageValue128 == null) return;
        let avatarOverlayNativePageValue129 = avatarOverlayNativePageHelper6(
            avatarOverlayNativePageValue84.current,
          ),
          avatarOverlayNativePageValue130 = avatarOverlayNativePageHelper1({
            activityStackPresentation: avatarOverlayNativePageValue75,
            isNotificationStackExpanded:
              avatarOverlayNativePageValue31 || avatarOverlayNativePageValue35,
            measuredSurfaces: avatarOverlayNativePageHelper4(
              avatarOverlayNativePageValue84.current,
              currentAppInitialSharedCompatSlotLowerZLowerI,
              {
                includeInert: true,
              },
            ),
            policies: currentAppInitialSharedCompatSlotUpperVLowerI({
              activityStackPresentation: avatarOverlayNativePageValue75,
              isNotificationStackExpanded:
                avatarOverlayNativePageValue31 ||
                avatarOverlayNativePageValue35,
              isQuickChatVisible: avatarOverlayNativePageValue78,
              showsNotificationBadge: avatarOverlayNativePageValue72.length > 0,
            }),
          }),
          avatarOverlayNativePageValue131 = {
            ...avatarOverlayNativePageValue53,
            ...Object.fromEntries(
              avatarOverlayNativePageValue75.slots.flatMap(
                ({ itemId, slotId }) => {
                  let avatarOverlayNativePageValue198 =
                    avatarOverlayNativePageValue130.find(
                      (item) => item.id === slotId,
                    );
                  return avatarOverlayNativePageValue198 == null
                    ? []
                    : [
                        [
                          itemId,
                          Math.ceil(
                            avatarOverlayNativePageValue198.rect.height,
                          ),
                        ],
                      ];
                },
              ),
            ),
          };
        if (
          !avatarOverlayNativePageValue15.default(
            avatarOverlayNativePageValue53,
            avatarOverlayNativePageValue131,
          ) &&
          (avatarOverlayNativePageValue54(avatarOverlayNativePageValue131),
          avatarOverlayNativePageValue31)
        )
          return;
        let avatarOverlayNativePageValue132 = {
            activityStackBackingLayoutHeight:
              avatarOverlayNativePageValue129.backing,
            activityStackItems: avatarOverlayNativePageValue74,
            activityStackPresentation: avatarOverlayNativePageValue75,
            activityStackScrollOffset: avatarOverlayNativePageValue55,
            activityStackVisibleLayoutHeight:
              avatarOverlayNativePageValue129.visible,
            mascot: avatarOverlayNativePageValue128.mascot,
            surfaces: avatarOverlayNativePageValue130,
            tray: avatarOverlayNativePageValue128.tray,
          },
          avatarOverlayNativePageValue133 = {
            contentState: {
              activities: avatarOverlayNativePageValue72,
              activityStackBackingLayoutHeight:
                avatarOverlayNativePageValue132.activityStackBackingLayoutHeight,
              activityStackItems:
                avatarOverlayNativePageValue132.activityStackItems,
              activityStackPresentation:
                avatarOverlayNativePageValue132.activityStackPresentation,
              activityStackScrollOffset:
                avatarOverlayNativePageValue132.activityStackScrollOffset,
              activityStackVisibleLayoutHeight:
                avatarOverlayNativePageValue132.activityStackVisibleLayoutHeight,
              expandedNotificationIds: avatarOverlayNativePageValue51,
              isDarkAppearance,
              isNotificationStackExpanded: avatarOverlayNativePageValue35,
              isQuickChatVisible: avatarOverlayNativePageValue78,
              layout: avatarOverlayNativePageValue29,
              locale: avatarOverlayNativePageValue28.locale,
              notificationFollowUp: avatarOverlayNativePageValue49,
              pointerSurfaceId: avatarOverlayNativePageValue43,
              quickChatDictation: {
                cleanupEnabled: dictationCleanupEnabled,
                streamingEnabled: dictationStreamingEnabled,
                supportState: dictationSupportState,
              },
              quickChatDraft: avatarOverlayNativePageValue45,
              quickChatResetRevision: avatarOverlayNativePageValue47,
            },
            measurements: avatarOverlayNativePageValue132,
          };
        avatarOverlayNativePageValue15.default(
          avatarOverlayNativePageValue133,
          avatarOverlayNativePageValue88.current,
        ) ||
          ((avatarOverlayNativePageValue88.current =
            avatarOverlayNativePageValue133),
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-composition-changed",
            {
              state: avatarOverlayNativePageValue133,
            },
          ));
      }, [
        avatarOverlayNativePageValue72,
        avatarOverlayNativePageValue53,
        avatarOverlayNativePageValue74,
        avatarOverlayNativePageValue75,
        avatarOverlayNativePageValue55,
        avatarOverlayNativePageValue51,
        avatarOverlayNativePageValue28.locale,
        isDarkAppearance,
        avatarOverlayNativePageValue35,
        avatarOverlayNativePageValue78,
        avatarOverlayNativePageValue29,
        avatarOverlayNativePageValue31,
        avatarOverlayNativePageValue49,
        avatarOverlayNativePageValue43,
        dictationCleanupEnabled,
        dictationStreamingEnabled,
        dictationSupportState,
        avatarOverlayNativePageValue45,
        avatarOverlayNativePageValue47,
      ]),
    avatarOverlayNativePageValue92 =
      avatarOverlayNativePageValue16.useCallback(() => {
        if (
          avatarOverlayNativePageValue79.current != null ||
          avatarOverlayNativePageValue82.current != null
        )
          return;
        let avatarOverlayNativePageValue168 = avatarOverlayNativePageHelper3(
          avatarOverlayNativePageValue84.current,
        );
        if (avatarOverlayNativePageValue168 == null) return;
        if (
          avatarOverlayNativePageHelper15(
            avatarOverlayNativePageValue85.current,
            avatarOverlayNativePageValue168,
          )
        ) {
          if (
            avatarOverlayNativePageValue31 &&
            avatarOverlayNativePageValue87.current != null
          )
            return;
          avatarOverlayNativePageValue31 ||
            (avatarOverlayNativePageValue87.current = null);
          avatarOverlayNativePageValue91();
          return;
        }
        let avatarOverlayNativePageValue169 =
          avatarOverlayNativePageValue85.current == null;
        avatarOverlayNativePageValue85.current =
          avatarOverlayNativePageValue168;
        let avatarOverlayNativePageValue170 =
          avatarOverlayNativePageValue31 && !avatarOverlayNativePageValue169
            ? avatarOverlayNativePageValue86.current + 1
            : null;
        avatarOverlayNativePageValue170 != null &&
          (avatarOverlayNativePageValue86.current =
            avatarOverlayNativePageValue170);
        avatarOverlayNativePageValue87.current =
          avatarOverlayNativePageValue170;
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-element-size-changed",
          {
            ...(avatarOverlayNativePageValue170 == null
              ? {}
              : {
                  elementSizeRevision: avatarOverlayNativePageValue170,
                }),
            mascot: avatarOverlayNativePageValue168.mascot,
            tray: avatarOverlayNativePageValue168.tray,
          },
        );
        avatarOverlayNativePageValue169 && avatarOverlayNativePageValue91();
      }, [avatarOverlayNativePageValue31, avatarOverlayNativePageValue91]),
    avatarOverlayNativePageValue93 =
      avatarOverlayNativePageValue16.useCallback(() => {
        avatarOverlayNativePageValue83.current != null &&
          (window.clearTimeout(avatarOverlayNativePageValue83.current),
          (avatarOverlayNativePageValue83.current = null));
      }, []),
    avatarOverlayNativePageValue94 =
      avatarOverlayNativePageValue16.useCallback(() => {
        avatarOverlayNativePageValue80.current != null &&
          (window.cancelAnimationFrame(avatarOverlayNativePageValue80.current),
          (avatarOverlayNativePageValue80.current = null));
        avatarOverlayNativePageValue81.current = null;
      }, []),
    avatarOverlayNativePageValue95 = avatarOverlayNativePageValue16.useCallback(
      (avatarOverlayNativePageParam19) => {
        avatarOverlayNativePageValue81.current = avatarOverlayNativePageParam19;
        avatarOverlayNativePageValue80.current ??= window.requestAnimationFrame(
          () => {
            avatarOverlayNativePageValue80.current = null;
            let avatarOverlayNativePageValue186 =
              avatarOverlayNativePageValue81.current;
            avatarOverlayNativePageValue81.current = null;
            !(
              avatarOverlayNativePageValue186 == null ||
              avatarOverlayNativePageValue79.current == null
            ) &&
              currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
                "avatar-overlay-mascot-resize-move",
                {
                  width: avatarOverlayNativePageValue186,
                },
              );
          },
        );
      },
      [],
    ),
    avatarOverlayNativePageValue96 = avatarOverlayNativePageValue16.useCallback(
      (avatarOverlayNativePageParam32) => {
        avatarOverlayNativePageValue82.current = avatarOverlayNativePageParam32;
        avatarOverlayNativePageValue93();
        avatarOverlayNativePageValue83.current = window.setTimeout(() => {
          avatarOverlayNativePageValue83.current = null;
          avatarOverlayNativePageValue82.current = null;
          avatarOverlayNativePageValue64(null);
          avatarOverlayNativePageValue92();
        }, 100);
      },
      [avatarOverlayNativePageValue93, avatarOverlayNativePageValue92],
    ),
    avatarOverlayNativePageValue97 = avatarOverlayNativePageValue16.useCallback(
      () =>
        _t(
          avatarOverlayNativePageValue84.current?.querySelector(
            ".codex-avatar-root",
          ) ?? null,
        )?.width ??
        mascotWidthPx ??
        112,
      [mascotWidthPx],
    ),
    avatarOverlayNativePageValue98 = avatarOverlayNativePageValue16.useCallback(
      (avatarOverlayNativePageParam29, avatarOverlayNativePageParam30) => {
        let avatarOverlayNativePageValue196 =
          avatarOverlayNativePageValue79.current;
        avatarOverlayNativePageValue196 == null ||
          avatarOverlayNativePageValue196.pointerId !==
            avatarOverlayNativePageParam29 ||
          ((avatarOverlayNativePageValue79.current = null),
          avatarOverlayNativePageValue58(false),
          avatarOverlayNativePageParam30?.hasPointerCapture?.(
            avatarOverlayNativePageParam29,
          ) &&
            avatarOverlayNativePageParam30.releasePointerCapture?.(
              avatarOverlayNativePageParam29,
            ));
      },
      [],
    ),
    avatarOverlayNativePageValue99 = avatarOverlayNativePageValue16.useCallback(
      (avatarOverlayNativePageParam20, avatarOverlayNativePageParam21) => {
        let avatarOverlayNativePageValue183 =
          avatarOverlayNativePageValue79.current;
        if (
          avatarOverlayNativePageValue183 == null ||
          avatarOverlayNativePageValue183.pointerId !==
            avatarOverlayNativePageParam20
        )
          return;
        let avatarOverlayNativePageValue184 =
          avatarOverlayNativePageParam21 == null
            ? avatarOverlayNativePageValue183.currentWidthPx
            : avatarOverlayNativePageHelper12(
                avatarOverlayNativePageValue183,
                avatarOverlayNativePageParam21,
              );
        avatarOverlayNativePageValue183.currentWidthPx =
          avatarOverlayNativePageValue184;
        avatarOverlayNativePageValue94();
        avatarOverlayNativePageValue64(avatarOverlayNativePageValue184);
        onMascotWidthChange(avatarOverlayNativePageValue184);
        avatarOverlayNativePageValue96(avatarOverlayNativePageValue184);
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-mascot-resize-end",
          {
            width: avatarOverlayNativePageValue184,
          },
        );
      },
      [
        avatarOverlayNativePageValue94,
        onMascotWidthChange,
        avatarOverlayNativePageValue96,
      ],
    ),
    avatarOverlayNativePageValue100 =
      avatarOverlayNativePageValue16.useCallback(
        (event, avatarOverlayNativePageParam10) => {
          let avatarOverlayNativePageValue136 =
            _AvatarOverlayNativePage.current;
          if (
            avatarOverlayNativePageValue136 == null ||
            avatarOverlayNativePageValue136.pointerId !== event.pointerId
          )
            return;
          _AvatarOverlayNativePage.current = null;
          avatarOverlayNativePageValue60(null);
          let avatarOverlayNativePageValue137 = null;
          event.currentTarget instanceof HTMLElement
            ? (avatarOverlayNativePageValue137 = event.currentTarget)
            : event.target instanceof HTMLElement &&
              (avatarOverlayNativePageValue137 = event.target);
          avatarOverlayNativePageValue137?.hasPointerCapture?.(
            event.pointerId,
          ) &&
            avatarOverlayNativePageValue137.releasePointerCapture?.(
              event.pointerId,
            );
          let { hasMoved, releaseSample, velocity } =
            resolveAvatarOverlayPointerDragRelease(
              avatarOverlayNativePageValue136,
              avatarOverlayNativePageParam10
                ? createAvatarOverlayPointerSample(event)
                : undefined,
              !avatarOverlayNativePageParam10 &&
                avatarOverlayNativePageValue136.usesOrbPhysics,
            );
          avatarOverlayNativePageParam10 &&
            !hasMoved &&
            (avatarOverlayNativePageValue90(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
            onMascotClick());
          hasMoved &&
            !avatarOverlayNativePageValue136.hasMoved &&
            releaseSample != null &&
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "avatar-overlay-drag-move",
              {
                pointerScreenX: releaseSample.screenX,
                pointerScreenY: releaseSample.screenY,
              },
            );
          let avatarOverlayNativePageValue138 =
            releaseSample ?? avatarOverlayNativePageValue136;
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-drag-end",
            {
              pointerScreenX: avatarOverlayNativePageValue138.screenX,
              pointerScreenY: avatarOverlayNativePageValue138.screenY,
            },
          );
          avatarOverlayNativePageValue136.usesOrbPhysics &&
            velocity != null &&
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "avatar-overlay-drag-release",
              {
                shouldBounce: true,
                velocityX: velocity.x * 3,
                velocityY: velocity.y * 3,
              },
            );
        },
        [
          avatarOverlayNativePageValue27,
          onMascotClick,
          undefined,
          null,
          avatarOverlayNativePageValue90,
        ],
      ),
    avatarOverlayNativePageValue101 = (event) => {
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        !(event.target instanceof Element) ||
        event.target.closest(".no-drag") != null
      )
        return;
      event.preventDefault();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let avatarOverlayNativePageValue167 = avatarOverlayNativePageValue27;
      _AvatarOverlayNativePage.current = {
        hasMoved: false,
        pointerId: event.pointerId,
        samples: [createAvatarOverlayPointerSample(event)],
        screenX: event.screenX,
        screenY: event.screenY,
        usesOrbPhysics: avatarOverlayNativePageValue167,
      };
      avatarOverlayNativePageValue60(null);
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-drag-start",
        {
          pointerScreenX: event.screenX,
          pointerScreenY: event.screenY,
          pointerWindowX: event.clientX,
          pointerWindowY: event.clientY,
          usesOrbPhysics: avatarOverlayNativePageValue167,
        },
      );
    },
    avatarOverlayNativePageValue102 = (event) => {
      let avatarOverlayNativePageValue171 = _AvatarOverlayNativePage.current;
      if (
        avatarOverlayNativePageValue171 == null ||
        avatarOverlayNativePageValue171.pointerId !== event.pointerId
      )
        return;
      let avatarOverlayNativePageValue172 =
        createAvatarOverlayPointerSample(event);
      avatarOverlayNativePageValue171.samples =
        trimRecentAvatarOverlayPointerSamples([
          ...avatarOverlayNativePageValue171.samples,
          avatarOverlayNativePageValue172,
        ]);
      let avatarOverlayNativePageValue173 =
          avatarOverlayNativePageValue172.screenX -
          avatarOverlayNativePageValue171.screenX,
        avatarOverlayNativePageValue174 =
          avatarOverlayNativePageValue172.screenY -
          avatarOverlayNativePageValue171.screenY;
      (Math.abs(avatarOverlayNativePageValue173) < 4 &&
        Math.abs(avatarOverlayNativePageValue174) < 4) ||
        ((avatarOverlayNativePageValue171.hasMoved = true),
        (avatarOverlayNativePageValue171.screenX =
          avatarOverlayNativePageValue172.screenX),
        (avatarOverlayNativePageValue171.screenY =
          avatarOverlayNativePageValue172.screenY),
        avatarOverlayNativePageValue171.usesOrbPhysics ||
          (avatarOverlayNativePageValue173 >= 4
            ? avatarOverlayNativePageValue60("running-right")
            : avatarOverlayNativePageValue173 <= -4 &&
              avatarOverlayNativePageValue60("running-left")),
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-drag-move",
          {
            pointerScreenX: avatarOverlayNativePageValue172.screenX,
            pointerScreenY: avatarOverlayNativePageValue172.screenY,
          },
        ));
    },
    avatarOverlayNativePageValue103 = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let avatarOverlayNativePageValue179 = avatarOverlayNativePageValue97();
      avatarOverlayNativePageValue93();
      avatarOverlayNativePageValue94();
      avatarOverlayNativePageValue82.current = null;
      avatarOverlayNativePageValue79.current = {
        currentWidthPx: avatarOverlayNativePageValue179,
        pointerId: event.pointerId,
        startScreenX: event.screenX,
        startWidthPx: avatarOverlayNativePageValue179,
      };
      avatarOverlayNativePageValue64(avatarOverlayNativePageValue179);
      avatarOverlayNativePageValue58(true);
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-mascot-resize-start",
        {
          width: avatarOverlayNativePageValue179,
        },
      );
    },
    avatarOverlayNativePageValue104 = (event) => {
      let avatarOverlayNativePageValue190 =
        avatarOverlayNativePageValue79.current;
      if (
        avatarOverlayNativePageValue190 == null ||
        avatarOverlayNativePageValue190.pointerId !== event.pointerId
      )
        return;
      event.preventDefault();
      event.stopPropagation();
      let avatarOverlayNativePageValue191 = avatarOverlayNativePageHelper12(
        avatarOverlayNativePageValue190,
        event.screenX,
      );
      avatarOverlayNativePageValue190.currentWidthPx =
        avatarOverlayNativePageValue191;
      avatarOverlayNativePageValue64(avatarOverlayNativePageValue191);
      avatarOverlayNativePageValue95(avatarOverlayNativePageValue191);
    },
    $t = (event) => {
      avatarOverlayNativePageValue99(event.pointerId, event.screenX);
      avatarOverlayNativePageValue98(event.pointerId, event.currentTarget);
    },
    avatarOverlayNativePageValue105 = (event) => {
      event.stopPropagation();
      avatarOverlayNativePageValue99(event.pointerId);
      avatarOverlayNativePageValue98(event.pointerId, event.currentTarget);
    },
    avatarOverlayNativePageValue106 = (event) => {
      avatarOverlayNativePageValue99(event.pointerId);
      avatarOverlayNativePageValue98(event.pointerId);
    },
    avatarOverlayNativePageValue107 = (
      avatarOverlayNativePageParam23,
      avatarOverlayNativePageParam24,
    ) => {
      avatarOverlayNativePageParam23.action != null &&
        (avatarOverlayNativePageParam24 == null ||
          avatarOverlayNativePageParam24.intent === "open") &&
        avatarOverlayNativePageValue90(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          avatarOverlayNativePageParam23,
        );
      onRunNotificationAction(
        avatarOverlayNativePageParam23,
        avatarOverlayNativePageParam24,
      );
    },
    avatarOverlayNativePageValue108 = (
      avatarOverlayNativePageParam70,
      avatarOverlayNativePageParam71,
    ) => {
      onSubmitQuestionOption(
        avatarOverlayNativePageParam70,
        avatarOverlayNativePageParam71,
      );
    },
    avatarOverlayNativePageValue109 = (avatarOverlayNativePageParam22) => {
      avatarOverlayNativePageValue90(
        currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        avatarOverlayNativePageParam22,
      );
      avatarOverlayNativePageValue66((avatarOverlayNativePageParam46) => {
        if (
          avatarOverlayNativePageParam46.get(
            avatarOverlayNativePageParam22.id,
          ) === avatarOverlayNativePageParam22.turnKey
        )
          return avatarOverlayNativePageParam46;
        let avatarOverlayNativePageValue200 = new Map(
          avatarOverlayNativePageParam46,
        );
        return (
          avatarOverlayNativePageValue200.set(
            avatarOverlayNativePageParam22.id,
            avatarOverlayNativePageParam22.turnKey,
          ),
          avatarOverlayNativePageValue200
        );
      });
    },
    on = () => {
      avatarOverlayNativePageValue90(
        currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
        currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        undefined,
        true,
      );
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-composition-surface-action",
        {
          action: {
            type: "open-notification-stack",
          },
        },
      );
      avatarOverlayNativePageValue36(true);
    },
    avatarOverlayNativePageValue110 = (
      avatarOverlayNativePageParam53,
      avatarOverlayNativePageParam54,
    ) => {
      avatarOverlayNativePageValue52((avatarOverlayNativePageParam55) =>
        avatarOverlayNativePageParam54
          ? avatarOverlayNativePageParam55.includes(
              avatarOverlayNativePageParam53,
            )
            ? avatarOverlayNativePageParam55
            : [
                ...avatarOverlayNativePageParam55,
                avatarOverlayNativePageParam53,
              ]
          : avatarOverlayNativePageParam55.filter(
              (item) => item !== avatarOverlayNativePageParam53,
            ),
      );
    },
    avatarOverlayNativePageValue111 = (avatarOverlayNativePageParam33) => {
      let avatarOverlayNativePageValue197 = notifications.find(
        ({ id }) => id === avatarOverlayNativePageParam33,
      );
      if (avatarOverlayNativePageValue197 != null) {
        if (!avatarOverlayNativePageValue35 && notifications.length > 1) {
          on();
          return;
        }
        avatarOverlayNativePageValue107(avatarOverlayNativePageValue197);
      }
    },
    avatarOverlayNativePageValue112 = async (
      avatarOverlayNativePageParam47,
    ) => {
      if (!quickChatEnabled) return;
      let avatarOverlayNativePageValue203 =
        avatarOverlayNativePageParam47.trim();
      avatarOverlayNativePageValue203.length !== 0 &&
        (await onSubmitQuickChat(avatarOverlayNativePageValue203),
        avatarOverlayNativePageValue46(""),
        avatarOverlayNativePageValue48(
          (avatarOverlayNativePageParam72) =>
            avatarOverlayNativePageParam72 + 1,
        ));
    },
    $ = avatarOverlayNativePageValue16.useCallback(
      (avatarOverlayNativePageParam52) => {
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-keyboard-interaction-changed",
          {
            isInteractive: avatarOverlayNativePageParam52,
          },
        );
      },
      [],
    ),
    avatarOverlayNativePageValue113 = (
      avatarOverlayNativePageParam3,
      avatarOverlayNativePageParam4,
      avatarOverlayNativePageParam5 = true,
    ) => {
      let avatarOverlayNativePageValue134 =
        avatarOverlayNativePageParam3.controlTarget;
      switch (avatarOverlayNativePageParam4.type) {
        case "close-follow-up":
          avatarOverlayNativePageValue50(null);
          avatarOverlayNativePageParam5 && $(false);
          return;
        case "open-follow-up":
          if (
            !avatarOverlayNativePageParam3.isLoading ||
            avatarOverlayNativePageValue134 == null
          )
            return;
          avatarOverlayNativePageValue50({
            notificationId: avatarOverlayNativePageParam3.id,
            submissionStatus: "idle",
            turnKey: avatarOverlayNativePageParam3.turnKey,
          });
          avatarOverlayNativePageParam5 && $(true);
          return;
        case "stop":
          if (avatarOverlayNativePageValue134 == null) return;
          avatarOverlayNativePageValue50(null);
          Promise.resolve(
            onRunNotificationControl(
              avatarOverlayNativePageParam3,
              avatarOverlayNativePageParam4,
            ),
          ).catch(() => {
            avatarOverlayNativePageValue26
              .get(worktreeNewThreadQueryCompatSlotLowerGLowerP)
              .danger(
                avatarOverlayNativePageValue28.formatMessage({
                  id: "avatarOverlay.stopNotificationError",
                  defaultMessage: "Unable to stop activity",
                  description:
                    "Error shown when stopping a running activity from the floating avatar overlay fails",
                }),
              );
          });
          return;
        case "submit-follow-up": {
          let avatarOverlayNativePageValue163 =
            avatarOverlayNativePageParam4.prompt.trim();
          if (
            avatarOverlayNativePageValue134 == null ||
            avatarOverlayNativePageValue163.length === 0
          )
            return;
          avatarOverlayNativePageValue50((avatarOverlayNativePageParam45) =>
            avatarOverlayNativePageParam45?.notificationId ===
              avatarOverlayNativePageParam3.id &&
            avatarOverlayNativePageParam45.turnKey ===
              avatarOverlayNativePageParam3.turnKey
              ? {
                  ...avatarOverlayNativePageParam45,
                  submissionStatus: "submitting",
                }
              : avatarOverlayNativePageParam45,
          );
          Promise.resolve(
            onRunNotificationControl(avatarOverlayNativePageParam3, {
              type: "submit-follow-up",
              prompt: avatarOverlayNativePageValue163,
            }),
          )
            .then(() => {
              avatarOverlayNativePageValue50(
                (avatarOverlayNativePageParam49) =>
                  avatarOverlayNativePageParam49?.notificationId ===
                    avatarOverlayNativePageParam3.id &&
                  avatarOverlayNativePageParam49.turnKey ===
                    avatarOverlayNativePageParam3.turnKey
                    ? null
                    : avatarOverlayNativePageParam49,
              );
              avatarOverlayNativePageParam5 && $(false);
            })
            .catch(() => {
              avatarOverlayNativePageValue50(
                (avatarOverlayNativePageParam35) =>
                  avatarOverlayNativePageParam35?.notificationId ===
                    avatarOverlayNativePageParam3.id &&
                  avatarOverlayNativePageParam35.turnKey ===
                    avatarOverlayNativePageParam3.turnKey
                    ? {
                        ...avatarOverlayNativePageParam35,
                        submissionStatus: "error",
                      }
                    : avatarOverlayNativePageParam35,
              );
            });
          return;
        }
      }
    };
  return (
    currentAppInitialSharedCompatSlotLowerY(
      "avatar-overlay-composition-action",
      ({ action }) => {
        switch (action.type) {
          case "activate-notification":
            avatarOverlayNativePageValue111(action.notificationId);
            return;
          case "activity-stack-scroll-offset-changed":
            avatarOverlayNativePageValue56(action.offset);
            return;
          case "close-notification-stack":
            avatarOverlayNativePageValue36(false);
            return;
          case "composition-pointer-surface-changed":
            avatarOverlayNativePageValue44(action.surfaceId);
            return;
          case "open-notification-stack":
            avatarOverlayNativePageValue36(true);
            return;
          case "notification-expansion-changed":
            avatarOverlayNativePageValue110(
              action.notificationId,
              action.isExpanded,
            );
            return;
          case "quick-chat-active-changed":
            return;
          case "quick-chat-draft-changed":
            if (!quickChatEnabled) return;
            avatarOverlayNativePageValue46(action.draft);
            return;
          case "quick-chat-surface-hover-changed":
            if (!quickChatEnabled) return;
            avatarOverlayNativePageValue42(action.isHovered);
            return;
          case "quick-chat-visibility-changed":
            if (!quickChatEnabled) return;
            avatarOverlayNativePageValue40(action.isVisible);
            return;
          case "scroll-activity-stack":
            avatarOverlayNativePageValue56((avatarOverlayNativePageParam26) =>
              currentAppInitialSharedCompatSlotUpperWLowerI({
                contentHeight: avatarOverlayNativePageValue75.contentHeight,
                deltaY: action.deltaY,
                scrollOffset: avatarOverlayNativePageParam26,
                viewportHeight:
                  avatarOverlayNativePageValue75.viewportRect.height,
              }),
            );
            return;
          case "submit-quick-chat":
            avatarOverlayNativePageValue112(action.prompt);
            return;
          case "dismiss-notification": {
            let avatarOverlayNativePageValue202 = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            avatarOverlayNativePageValue202 != null &&
              avatarOverlayNativePageValue109(avatarOverlayNativePageValue202);
            return;
          }
          case "run-notification-control": {
            let avatarOverlayNativePageValue192 = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            avatarOverlayNativePageValue192 == null
              ? action.action.type === "close-follow-up" &&
                avatarOverlayNativePageValue50(null)
              : avatarOverlayNativePageValue113(
                  avatarOverlayNativePageValue192,
                  action.action,
                  false,
                );
            return;
          }
          case "run-notification-action": {
            let avatarOverlayNativePageValue201 = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            avatarOverlayNativePageValue201 != null &&
              avatarOverlayNativePageValue107(
                avatarOverlayNativePageValue201,
                action.action,
              );
            return;
          }
          case "submit-question-option": {
            let avatarOverlayNativePageValue204 = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            avatarOverlayNativePageValue204 != null &&
              avatarOverlayNativePageValue108(
                avatarOverlayNativePageValue204,
                action.option,
              );
          }
        }
      },
      [avatarOverlayNativePageValue35, notifications],
    ),
    currentAppInitialSharedCompatSlotLowerY(
      "avatar-overlay-layout-changed",
      ({ elementSizeRevision, layout, nativeMaterialAttached }) => {
        elementSizeRevision === avatarOverlayNativePageValue87.current &&
          (avatarOverlayNativePageValue87.current = null);
        avatarOverlayNativePageValue30(layout);
        avatarOverlayNativePageValue32(nativeMaterialAttached);
        avatarOverlayNativePageValue82.current === layout.mascot.width &&
          ((avatarOverlayNativePageValue82.current = null),
          avatarOverlayNativePageValue93(),
          avatarOverlayNativePageValue64(null));
      },
      [avatarOverlayNativePageValue93],
    ),
    avatarOverlayNativePageValue16.useLayoutEffect(() => {
      let avatarOverlayNativePageValue185 =
        (!be && avatarOverlayNativePageValue61) ||
        avatarOverlayNativePageValue57;
      return (
        document.documentElement.classList.toggle(
          avatarOverlayNativePageValue24,
          avatarOverlayNativePageValue185,
        ),
        document.body.classList.toggle(
          avatarOverlayNativePageValue24,
          avatarOverlayNativePageValue185,
        ),
        () => {
          document.documentElement.classList.remove(
            avatarOverlayNativePageValue24,
          );
          document.body.classList.remove(avatarOverlayNativePageValue24);
        }
      );
    }, [be, avatarOverlayNativePageValue61, avatarOverlayNativePageValue57]),
    avatarOverlayNativePageValue16.useEffect(
      () => () => {
        avatarOverlayNativePageValue93();
        avatarOverlayNativePageValue94();
      },
      [avatarOverlayNativePageValue94, avatarOverlayNativePageValue93],
    ),
    avatarOverlayNativePageValue16.useEffect(() => {
      let avatarOverlayNativePageValue180 = (event) => {
          avatarOverlayNativePageValue100(event, true);
          avatarOverlayNativePageValue99(event.pointerId, event.screenX);
          avatarOverlayNativePageValue98(event.pointerId);
        },
        avatarOverlayNativePageValue181 = (event) => {
          avatarOverlayNativePageValue100(event, false);
          avatarOverlayNativePageValue99(event.pointerId);
          avatarOverlayNativePageValue98(event.pointerId);
        };
      return (
        window.addEventListener("pointerup", avatarOverlayNativePageValue180),
        window.addEventListener(
          "pointercancel",
          avatarOverlayNativePageValue181,
        ),
        () => {
          window.removeEventListener(
            "pointerup",
            avatarOverlayNativePageValue180,
          );
          window.removeEventListener(
            "pointercancel",
            avatarOverlayNativePageValue181,
          );
        }
      );
    }, [
      avatarOverlayNativePageValue99,
      avatarOverlayNativePageValue100,
      avatarOverlayNativePageValue98,
    ]),
    avatarOverlayNativePageValue16.useLayoutEffect(() => {
      let avatarOverlayNativePageValue175 = null,
        avatarOverlayNativePageValue176 = () => {
          avatarOverlayNativePageValue175 ??= window.requestAnimationFrame(
            () => {
              avatarOverlayNativePageValue175 = null;
              avatarOverlayNativePageValue92();
            },
          );
        },
        avatarOverlayNativePageValue177 = new ResizeObserver(
          avatarOverlayNativePageValue176,
        ),
        avatarOverlayNativePageValue178 =
          avatarOverlayNativePageValue84.current;
      if (avatarOverlayNativePageValue178 != null) {
        avatarOverlayNativePageValue177.observe(
          avatarOverlayNativePageValue178,
        );
        for (let avatarOverlayNativePageValue207 of avatarOverlayNativePageHelper5(
          avatarOverlayNativePageValue178,
        ))
          avatarOverlayNativePageValue177.observe(
            avatarOverlayNativePageValue207,
          );
      }
      return (
        window.addEventListener("resize", avatarOverlayNativePageValue176),
        avatarOverlayNativePageValue176(),
        () => {
          avatarOverlayNativePageValue175 != null &&
            window.cancelAnimationFrame(avatarOverlayNativePageValue175);
          avatarOverlayNativePageValue177.disconnect();
          window.removeEventListener("resize", avatarOverlayNativePageValue176);
        }
      );
    }, [
      avatarOverlayNativePageValue92,
      selectedAvatar.id,
      avatarOverlayNativePageValue73,
    ]),
    avatarOverlayNativePageValue16.useLayoutEffect(() => {
      avatarOverlayNativePageValue92();
    }, [
      avatarOverlayNativePageValue35,
      avatarOverlayNativePageValue29,
      avatarOverlayNativePageValue92,
      selectedAvatar.id,
      avatarOverlayNativePageValue73,
      mascotWidthPx,
    ]),
    avatarOverlayNativePageValue16.useEffect(() => {
      if (nextNotificationExpiresAtMs == null) return;
      let avatarOverlayNativePageValue187 = Math.max(
          0,
          nextNotificationExpiresAtMs - Date.now(),
        ),
        avatarOverlayNativePageValue188 = window.setTimeout(() => {
          avatarOverlayNativePageValue68((avatarOverlayNativePageParam65) =>
            Math.max(Date.now(), avatarOverlayNativePageParam65 + 1),
          );
        }, avatarOverlayNativePageValue187);
      return () => {
        window.clearTimeout(avatarOverlayNativePageValue188);
      };
    }, [nextNotificationExpiresAtMs]),
    avatarOverlayNativePageValue16.useEffect(() => {
      if (!avatarOverlayNativePageValue76 && !avatarOverlayNativePageValue77)
        return;
      let avatarOverlayNativePageValue189 = window.setTimeout(() => {
        avatarOverlayNativePageValue68((avatarOverlayNativePageParam66) =>
          Math.max(Date.now(), avatarOverlayNativePageParam66 + 1),
        );
        avatarOverlayNativePageValue76 && onRefreshLocalSessions();
        avatarOverlayNativePageValue77 && onRefreshRemoteSessions();
      }, avatarOverlayNativePageValue18);
      return () => {
        window.clearTimeout(avatarOverlayNativePageValue189);
      };
    }, [
      avatarOverlayNativePageValue76,
      avatarOverlayNativePageValue77,
      onRefreshLocalSessions,
      onRefreshRemoteSessions,
    ]),
    avatarOverlayNativePageValue17.jsx(AvatarOverlayNativeFrame, {
      activityCopies: avatarOverlayNativePageValue72.map(({ copy }) => copy),
      activityStackPresentation: avatarOverlayNativePageValue75,
      areActivityPillsVisible: avatarOverlayNativePageValue33,
      avatar: selectedAvatar,
      avatarMenuItems: [
        {
          id: "close-avatar",
          message: currentAppInitialSharedMember0273({
            id: "petOverlay.closePet",
            defaultMessage: "Close pet",
            description: "Context menu item that closes the floating Codex pet",
          }),
          onSelect: () => {
            avatarOverlayNativePageValue90(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            );
            onClosePet();
          },
        },
      ],
      globalDictationOrbEnabled,
      interactiveRegionRef: avatarOverlayNativePageValue84,
      isNotificationTrayOpen: avatarOverlayNativePageValue35,
      layout: avatarOverlayNativePageValue29,
      mascotDragState: avatarOverlayNativePageValue59,
      nativeMaterialAttached: avatarOverlayNativePageValue31,
      expandedNotificationIds: avatarOverlayNativePageValue51,
      notificationStackContentExpanded: avatarOverlayNativePageValue31
        ? true
        : undefined,
      mascotLayout:
        avatarOverlayNativePageValue57 && avatarOverlayNativePageValue63 != null
          ? {
              ...avatarOverlayNativePageValue29.mascot,
              height: Math.ceil(
                avatarOverlayNativePageValue63 /
                  AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
              ),
              width: avatarOverlayNativePageValue63,
            }
          : avatarOverlayNativePageValue29.mascot,
      mascotResizeHandle: be
        ? undefined
        : {
            onLostPointerCapture: avatarOverlayNativePageValue106,
            onPointerCancel: avatarOverlayNativePageValue105,
            onPointerDown: avatarOverlayNativePageValue103,
            onPointerEnter: () => {
              avatarOverlayNativePageValue62(true);
            },
            onPointerLeave: () => {
              avatarOverlayNativePageValue62(false);
            },
            onPointerMove: avatarOverlayNativePageValue104,
            onPointerUp: $t,
          },
      mascotStyle: createAvatarOverlayMascotWidthStyle(
        avatarOverlayNativePageValue63 ?? mascotWidthPx,
      ),
      notifications,
      pointerSurfaceId: avatarOverlayNativePageValue43,
      quickChatDictation: {
        cleanupEnabled: dictationCleanupEnabled,
        streamingEnabled: dictationStreamingEnabled,
        supportState: dictationSupportState,
      },
      onActivityStackScroll: (avatarOverlayNativePageParam25) => {
        avatarOverlayNativePageValue56((avatarOverlayNativePageParam34) =>
          currentAppInitialSharedCompatSlotUpperWLowerI({
            contentHeight: avatarOverlayNativePageValue75.contentHeight,
            deltaY: avatarOverlayNativePageParam25,
            scrollOffset: avatarOverlayNativePageParam34,
            viewportHeight: avatarOverlayNativePageValue75.viewportRect.height,
          }),
        );
      },
      onActivateNotification: avatarOverlayNativePageValue111,
      onHideActivityPills: () => {
        if (
          ($(false), avatarOverlayNativePageValue35 && notifications.length > 1)
        ) {
          avatarOverlayNativePageValue90(
            currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
            currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            undefined,
            false,
          );
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-composition-surface-action",
            {
              action: {
                type: "close-notification-stack",
              },
            },
          );
          avatarOverlayNativePageValue36(false);
          return;
        }
        avatarOverlayNativePageValue36(false);
        avatarOverlayNativePageValue34(false);
      },
      onMascotLostPointerCapture: (avatarOverlayNativePageParam67) => {
        avatarOverlayNativePageValue100(avatarOverlayNativePageParam67, false);
      },
      onMascotPointerCancel: (avatarOverlayNativePageParam68) => {
        avatarOverlayNativePageValue100(avatarOverlayNativePageParam68, false);
      },
      onMascotPointerDown: avatarOverlayNativePageValue101,
      onMascotPointerMove: avatarOverlayNativePageValue102,
      onMascotPointerUp: (avatarOverlayNativePageParam69) => {
        avatarOverlayNativePageValue100(avatarOverlayNativePageParam69, true);
      },
      onNotificationExpansionChange: avatarOverlayNativePageValue110,
      onDismissNotification: avatarOverlayNativePageValue109,
      notificationFollowUp: avatarOverlayNativePageValue49,
      onQuickChatEditorActiveChange: $,
      onQuickChatDraftChange: quickChatEnabled
        ? avatarOverlayNativePageValue46
        : undefined,
      onQuickChatVisibilityChange: quickChatEnabled
        ? avatarOverlayNativePageValue38
        : undefined,
      onRunNotificationControl: avatarOverlayNativePageValue113,
      onRunNotificationAction: avatarOverlayNativePageValue107,
      onSubmitQuestionOption: avatarOverlayNativePageValue108,
      onSubmitQuickChat: avatarOverlayNativePageValue112,
      onShowActivityPills: () => {
        avatarOverlayNativePageValue34(true);
      },
      quickChatDraft: avatarOverlayNativePageValue45,
      quickChatVisible: avatarOverlayNativePageValue78,
      restrictedSurface: undefined,
      renderMode: {
        type: "native-root",
      },
    })
  );
}
function avatarOverlayNativePageHelper12(
  avatarOverlayNativePageParam60,
  avatarOverlayNativePageParam61,
) {
  return clampAvatarOverlayMascotWidth(
    avatarOverlayNativePageParam60.startWidthPx +
      avatarOverlayNativePageParam61 -
      avatarOverlayNativePageParam60.startScreenX,
  );
}
function avatarOverlayNativePageHelper13(
  avatarOverlayNativePageParam38,
  avatarOverlayNativePageParam39,
) {
  return isSelectedCustomAvatarMissing(
    avatarOverlayNativePageParam38,
    avatarOverlayNativePageParam39,
  ) ||
    createSignalGetterAtom(avatarOverlayNativePageValue21, []).includes(
      avatarOverlayNativePageParam38.id,
    )
    ? null
    : {
        avatarId: avatarOverlayNativePageParam38.id,
        petName: avatarOverlayNativePageParam38.displayName,
        startedAtMs: Date.now(),
      };
}
function avatarOverlayNativePageHelper14(
  avatarOverlayNativePageParam56,
  avatarOverlayNativePageParam57,
) {
  return isSelectedCustomAvatarMissing(
    avatarOverlayNativePageParam56,
    avatarOverlayNativePageParam57,
  )
    ? "pending-custom-avatar"
    : "ready";
}
function avatarOverlayNativePageHelper15(
  avatarOverlayNativePageParam36,
  avatarOverlayNativePageParam37,
) {
  return (
    avatarOverlayNativePageParam36 != null &&
    avatarOverlayNativePageParam36.mascot.width ===
      avatarOverlayNativePageParam37.mascot.width &&
    avatarOverlayNativePageParam36.mascot.height ===
      avatarOverlayNativePageParam37.mascot.height &&
    avatarOverlayNativePageHelper16(
      avatarOverlayNativePageParam36.tray,
      avatarOverlayNativePageParam37.tray,
    )
  );
}
function avatarOverlayNativePageHelper16(
  avatarOverlayNativePageParam50,
  avatarOverlayNativePageParam51,
) {
  return (
    avatarOverlayNativePageParam50 === avatarOverlayNativePageParam51 ||
    (avatarOverlayNativePageParam50 != null &&
      avatarOverlayNativePageParam51 != null &&
      avatarOverlayNativePageParam50.width ===
        avatarOverlayNativePageParam51.width &&
      avatarOverlayNativePageParam50.height ===
        avatarOverlayNativePageParam51.height)
  );
}
var avatarOverlayNativePageValue14,
  avatarOverlayNativePageValue15,
  avatarOverlayNativePageValue16,
  avatarOverlayNativePageValue17,
  avatarOverlayNativePageValue18,
  avatarOverlayNativePageValue19,
  avatarOverlayNativePageValue20,
  avatarOverlayNativePageValue21,
  avatarOverlayNativePageValue22,
  avatarOverlayNativePageValue23,
  avatarOverlayNativePageValue24,
  avatarOverlayNativePageValue25;
once(() => {
  avatarOverlayNativePageValue14 =
    currentAppInitialSharedCompatSlotLowerGLowerC();
  remoteControlRefreshSourceEnum();
  avatarOverlayNativePageValue15 = toEsModule(
    currentAppInitialSharedCompatSlotUpperJLowerO(),
    1,
  );
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  avatarOverlayNativePageValue16 = toEsModule(
    currentAppInitialSharedCompatSlotUnderscoreLowerC(),
    1,
  );
  intlFormatDateTimeRuntime();
  appMainCurrentCompatSlotLowerVLowerF();
  pullRequestNewThreadCompatSlotLowerY();
  appServerDisconnectedAppServerSignal();
  currentAppInitialSharedRuntime0840();
  toolSuggestionAndConnectorSchema();
  currentAppInitialSharedImplementPlanImplementationRuntime();
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC();
  initAvatarOverlayOpenStateChunk();
  initAvatarSelectionStateChunk();
  worktreeNewThreadQueryCompatSlotUpperJLowerD();
  worktreeNewThreadQueryCompatSlotLowerMLowerP();
  appMainCurrentCompatSlotLowerOLowerD();
  initFloatingWindowPointerInteractivityChunk();
  currentAppInitialSharedCompatSlotUnderscore();
  remoteConnectionRuntime0298();
  worktreeNewThreadQueryCompatSlotLowerILowerC();
  currentAppInitialSharedCompatSlotUpperD();
  currentAppInitialSharedDisplayRuntime();
  appMainCurrentCompatSlotLowerXLowerM();
  _appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dTy();
  initPersistedAtomStorageRuntime();
  worktreeNewThreadQueryCompatSlotUpperTLowerS();
  initAvatarOverlayNativeFrameCopyChunk();
  avatarOverlayNativePageValue1();
  initAvatarOverlayDebugStateChunk();
  initAvatarOverlayPointerDragChunk();
  initAvatarOverlayNotificationSearchKeyChunk();
  initAvatarOverlayMascotWidthChunk();
  avatarOverlayNativePageValue13();
  initAvatarOverlayNativeFrameChunk();
  initAvatarOverlayNotificationTrayChunk();
  initAvatarOverlayPillActivityItemsChunk();
  initUseAvatarOverlaySelectionChunk();
  avatarOverlayNativePageValue17 =
    currentAppInitialSharedCompatSlotLowerLLowerC();
  avatarOverlayNativePageValue18 = 15e3;
  avatarOverlayNativePageValue19 = 208;
  avatarOverlayNativePageValue20 = [];
  avatarOverlayNativePageValue21 = "first-awake-pet-notification-avatar-ids";
  avatarOverlayNativePageValue22 = {
    audioStream: null,
    canStart: false,
    caption: null,
    conversationId: null,
    phase: "inactive",
    isMicrophoneMuted: false,
    isMuted: false,
    start: () => Promise.resolve(),
    stop: () => Promise.resolve(),
    voiceActivity: "idle",
    toggleMicrophoneMute: () => {},
    toggleMute: () => {},
    waveformCanvasRef: {
      current: null,
    },
  };
  avatarOverlayNativePageValue23 = [
    "[data-avatar-overlay-hit-region]",
    "[data-avatar-mascot='true']",
  ];
  avatarOverlayNativePageValue24 = "codex-avatar-overlay-force-resize-cursor";
  avatarOverlayNativePageValue25 = {
    mascot: {
      left: 244,
      top: 207,
      width: 112,
      height: 121,
    },
    placement: "top-end",
    tray: {
      left: 19.5,
      top: 70,
      width: 345,
      height: 120,
    },
    viewport: {
      width: 384,
      height: 400,
    },
  };
})();
