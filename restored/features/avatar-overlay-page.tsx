// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotUpperVLowerO,
  currentAppInitialSharedCompatSlotLowerY,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerG,
  worktreeNewThreadOrchestratorCompatSlotUpperWLowerG,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperDLowerM,
  worktreeNewThreadQueryCompatSlotUpperDLowerP,
  worktreeNewThreadQueryCompatSlotUpperELowerM,
  worktreeNewThreadQueryCompatSlotUpperELowerP,
  worktreeNewThreadQueryCompatSlotLowerFLowerH,
  worktreeNewThreadQueryCompatSlotLowerHLowerH,
  worktreeNewThreadQueryCompatSlotLowerILowerC,
  worktreeNewThreadQueryCompatSlotLowerILowerH,
  worktreeNewThreadQueryCompatSlotUpperJLowerD,
  worktreeNewThreadQueryCompatSlotLowerMLowerF,
  worktreeNewThreadQueryCompatSlotLowerMLowerH,
  worktreeNewThreadQueryCompatSlotLowerOLowerH,
  worktreeNewThreadQueryCompatSlotUpperOLowerM,
  worktreeNewThreadQueryCompatSlotLowerPLowerH,
  worktreeNewThreadQueryCompatSlotUpperQLowerM,
  worktreeNewThreadQueryCompatSlotLowerSLowerC,
  worktreeNewThreadQueryCompatSlotUpperSLowerS,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotUpperXLowerM,
  worktreeNewThreadQueryCompatSlotLowerXLowerP,
  worktreeNewThreadQueryCompatSlotLowerXLowerS,
  worktreeNewThreadQueryCompatSlotLowerYLowerP,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedFunction0034,
  currentAppInitialSharedAcceptDeclineCancelFunction,
  currentAppInitialSharedMember0547,
  currentAppInitialSharedMember0097,
  initPersistedAtomStorageRuntime,
  createScopedSignalAtom,
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
} from "../vendor/automations-page-current-runtime";
import {
  initAvatarMascotButtonChunk,
  AvatarMascotButton,
} from "../ui/avatar-mascot-button";
import {
  initBulletSeparatorChunk,
  BulletSeparator,
} from "../runtime/current-app-initial/thread-app-shell-rate-limit-runtime";
import {
  pullRequestNewThreadCompatSlotUpperD,
  pullRequestNewThreadCompatSlotLowerY,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotLowerALowerM,
  appMainCurrentCompatSlotLowerGLowerP,
  useComposedRefs,
  appMainCurrentCompatSlotLowerILowerM,
  appMainCurrentCompatSlotLowerOLowerM,
  appMainCurrentCompatSlotLowerRLowerM,
} from "../vendor/app-main-current-runtime/index";
import {
  projectHoverCardCurrentCompatSlotUpperT,
  projectHoverCardCurrentCompatSlotLowerW,
} from "../runtime/current-app-initial/project-hover-card-current-runtime";
import {
  createAvatarOverlayMascotWidthStyle,
  getAvatarOverlayPillVisibilityMode,
  getLatestAvatarOverlayActivitySubtitle,
  initAvatarOverlayPillActivityItemsChunk,
  getAvatarOverlayActivityStatusConfig,
  initCompactWaitingRequestChunk,
  clampAvatarOverlayMascotWidth,
  initAvatarOverlayPillEmptyChunk,
  getWaitingRequestSearchText,
  initAvatarOverlayPillDismissButtonChunk,
  initAvatarOverlayMascotWidthChunk,
  AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
  useAvatarOverlayMascotWidth,
  AvatarOverlayPillDismissButton,
  buildAvatarOverlayPillActivityItems,
  initAvatarOverlayActivityStatusChunk,
  observeElementSize,
  initAvatarOverlayPillChunk,
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
function AvatarOverlaySurface({
  avatar,
  avatarMenuItems,
  interactiveRegionRef,
  isDragging = false,
  isNotificationTrayOpen = true,
  restrictedSurface,
  layout,
  mascotLayout = layout.mascot,
  mascotStyle,
  mascotDragState,
  mascotResizeHandle,
  notifications,
  onLostPointerCapture,
  onCloseNotificationTray,
  onPointerCancel,
  onPointerDown,
  onPointerMove: avatarOverlayOperand3,
  onPointerUp,
  onDismissNotification,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onNotificationReplyEditorActiveChange,
  onOpenNotificationReply,
  onSubmitNotificationReply,
  onOpenNotificationTray,
}) {
  let avatarOverlayBinding188 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding189 = worktreeNewThreadQueryCompatSlotUpperQLowerM(),
    avatarOverlayBinding190 = getAvatarOverlayActivityStatusConfig(
      notifications[0],
    ),
    avatarOverlayBinding191 = notifications.length > 0,
    avatarOverlayBinding192 = restrictedSurface?.phase ?? "inactive",
    avatarOverlayBinding193 = getAvatarOverlayPillVisibilityMode(
      restrictedSurface?.isSessionActive ?? false,
      avatarOverlayBinding192 !== "inactive",
    ),
    avatarOverlayBinding194 = avatarOverlayBinding193 === "voice-orb",
    avatarOverlayBinding195 = avatarOverlayBinding193 === "hidden",
    avatarOverlayBinding196 =
      avatarOverlayBinding193 === "pet"
        ? mascotLayout
        : {
            ...mascotLayout,
            height: 121,
            width: 112,
          },
    avatarOverlayBinding197 = avatarOverlayBinding191 && isNotificationTrayOpen;
  restrictedSurface?.controlsHovered;
  let avatarOverlayBinding198 = restrictedSurface?.caption ?? null,
    avatarOverlayBinding199 =
      avatarOverlayBinding197 || avatarOverlayBinding198 != null,
    avatarOverlayBinding200 =
      avatarOverlayBinding191 || avatarOverlayBinding199,
    avatarOverlayBinding201 = layout.placement.startsWith("top"),
    avatarOverlayBinding202 = layout.placement.endsWith("end"),
    avatarOverlayBinding203 = notifications.length > avatarOverlayBinding5,
    avatarOverlayBinding204 =
      layout.tray == null ? undefined : Math.max(0, layout.tray.height),
    avatarOverlayBinding205 = `${avatarOverlayBinding201 ? "bottom" : "top"} ${avatarOverlayBinding202 ? "right" : "left"}`,
    avatarOverlayBinding206;
  avatarOverlayBinding197
    ? (avatarOverlayBinding206 = {
        ariaLabel: avatarOverlayBinding188.formatMessage(
          avatarOverlayBinding4.collapseNotificationTray,
        ),
        backgroundColor: "var(--color-token-bg-primary)",
        content: avatarOverlayBinding3.jsx(
          worktreeNewThreadQueryCompatSlotLowerFLowerH,
          {
            className: "icon-xs opacity-80",
          },
        ),
        foregroundColor: "var(--color-token-text-secondary)",
        isIconOnly: true,
        onClick: onCloseNotificationTray,
      })
    : avatarOverlayBinding191 &&
      (avatarOverlayBinding206 = {
        ariaLabel: avatarOverlayBinding188.formatMessage(
          {
            id: "avatarOverlay.toggleNotificationTray",
            defaultMessage:
              "Open activity tray, {count, plural, one {# item} other {# items}}",
            description:
              "Accessible label for the floating avatar activity count button",
          },
          {
            count: notifications.length,
          },
        ),
        backgroundColor: avatarOverlayBinding190.badgeBackgroundColor,
        content: notifications.length,
        foregroundColor: avatarOverlayBinding190.badgeForegroundColor,
        onClick: onOpenNotificationTray,
      });
  let avatarOverlayBinding207 = avatarOverlayBinding3.jsx(AvatarMascotButton, {
    ariaLabel: avatarOverlayBinding188.formatMessage(
      avatarOverlayBinding4.mascotLabel,
      {
        petName: avatar.displayName,
      },
    ),
    assetRef: avatar.assetRef,
    spritesheetUrl: avatar.spritesheetUrl,
    notificationBadge: avatarOverlayBinding206,
    resizeHandle:
      mascotResizeHandle == null
        ? undefined
        : {
            ariaLabel: avatarOverlayBinding188.formatMessage(
              avatarOverlayBinding4.resizeMascot,
            ),
            ...mascotResizeHandle,
          },
    state: avatarOverlayBinding190.mascotState,
    style: mascotStyle,
    transientState: mascotDragState,
  });
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-transparent">
      <section
        ref={interactiveRegionRef}
        data-avatar-overlay-content-frame="true"
        className="relative h-full w-full cursor-grab active:cursor-grabbing"
        onLostPointerCapture={onLostPointerCapture}
        onPointerCancel={onPointerCancel}
        onPointerDown={onPointerDown}
        onPointerMove={avatarOverlayOperand3}
        onPointerUp={onPointerUp}
      >
        {avatarOverlayBinding200 ? (
          <div
            aria-hidden={avatarOverlayBinding199 ? undefined : true}
            data-avatar-overlay-hit-region="notification-tray"
            inert={!avatarOverlayBinding199}
            className={worktreeNewThreadQueryCompatSlotLowerMLowerH(
              "absolute flex cursor-interaction text-sm text-token-foreground",
              avatarOverlayBinding201 ? "items-end" : "items-start",
            )}
            style={{
              height: layout.tray?.height,
              left: layout.tray?.left,
              pointerEvents: avatarOverlayBinding199 ? undefined : "none",
              top: layout.tray?.top,
              visibility: layout.tray == null ? "hidden" : undefined,
              width: layout.tray?.width,
            }}
          >
            {avatarOverlayBinding3.jsxs(
              worktreeNewThreadQueryCompatSlotLowerILowerH.div,
              {
                animate: {
                  opacity: avatarOverlayBinding199 ? 1 : 0,
                  scale:
                    avatarOverlayBinding199 || avatarOverlayBinding189
                      ? 1
                      : 0.97,
                  y: avatarOverlayBinding199 || avatarOverlayBinding189 ? 0 : 8,
                },
                className:
                  "relative w-full overflow-hidden [corner-shape:var(--codex-corner-shape)]",
                "data-avatar-overlay-size": "notification-tray",
                initial: false,
                style: avatarOverlayBinding203
                  ? {
                      maxHeight: avatarOverlayBinding204,
                      transformOrigin: avatarOverlayBinding205,
                    }
                  : {
                      transformOrigin: avatarOverlayBinding205,
                    },
                transition: avatarOverlayBinding189
                  ? {
                      duration: 0,
                    }
                  : {
                      damping: 26,
                      mass: 0.8,
                      stiffness: 360,
                      type: "spring",
                    },
                children: [
                  <div
                    className="h-0 overflow-hidden"
                    data-avatar-overlay-size="notification-tray-header"
                  />,
                  <div>
                    {avatarOverlayBinding3.jsx(AvatarOverlayNotificationTray, {
                      areNotificationsVisible: avatarOverlayBinding197,
                      isTrayAboveMascot: avatarOverlayBinding201,
                      isNotificationTrayVisible: avatarOverlayBinding199,
                      notifications,
                      prefersReducedMotion: !!avatarOverlayBinding189,
                      restrictedCaption: avatarOverlayBinding198,
                      trayMaxHeight: avatarOverlayBinding204,
                      onDismissNotification,
                      onRunNotificationAction,
                      onSubmitQuestionOption,
                      onNotificationReplyEditorActiveChange,
                      onOpenNotificationReply,
                      onSubmitNotificationReply,
                    })}
                  </div>,
                ],
              },
            )}
          </div>
        ) : null}
        {avatarOverlayBinding3.jsx(
          worktreeNewThreadOrchestratorCompatSlotUpperULowerG,
          {
            items: avatarMenuItems,
            children: (
              <div
                data-avatar-overlay-hit-region={
                  avatarOverlayBinding195 ? undefined : "mascot"
                }
                className={worktreeNewThreadQueryCompatSlotLowerMLowerH(
                  "group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none",
                  avatarOverlayBinding195 && "pointer-events-none",
                  isDragging && !avatarOverlayBinding194
                    ? "scale-95 transition-transform"
                    : "transition-none",
                )}
                style={{
                  height: avatarOverlayBinding196.height,
                  left: avatarOverlayBinding196.left,
                  top: avatarOverlayBinding196.top,
                  width: avatarOverlayBinding196.width,
                }}
              >
                {avatarOverlayBinding207}
              </div>
            ),
          },
        )}
      </section>
    </main>
  );
}
function AvatarOverlayNotificationTray(avatarOverlayOperand1) {
  let {
      areNotificationsVisible,
      isTrayAboveMascot,
      isNotificationTrayVisible,
      notifications,
      onDismissNotification,
      onNotificationReplyEditorActiveChange,
      onOpenNotificationReply,
      onRunNotificationAction,
      onSubmitQuestionOption,
      onSubmitNotificationReply,
      prefersReducedMotion,
      restrictedCaption,
      trayMaxHeight,
    } = avatarOverlayOperand1,
    avatarOverlayBinding135 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding136 = avatarOverlayBinding2.useRef(null),
    avatarOverlayBinding137 = buildAvatarOverlayNotificationSearchKey(
      notifications,
      avatarOverlayBinding135,
    );
  let avatarOverlayBinding138 = avatarOverlayBinding137,
    avatarOverlayBinding139 = restrictedCaption == null ? "" : "caption",
    avatarOverlayBinding140 = isTrayAboveMascot ? "tray-above" : "tray-below",
    avatarOverlayBinding141 = [
      avatarOverlayBinding138,
      avatarOverlayBinding139,
      avatarOverlayBinding140,
    ];
  let avatarOverlayBinding142 = avatarOverlayBinding141.join("\0"),
    avatarOverlayBinding143 = notifications.length > avatarOverlayBinding5,
    avatarOverlayBinding144 = Math.max(
      0,
      notifications.length - avatarOverlayBinding5,
    ),
    avatarOverlayBinding145 = {
      hasScrollableContent: false,
      hasLatestNotificationsAbove: false,
      hiddenOlderNotificationCount: 0,
    };
  let [avatarOverlayBinding146, avatarOverlayBinding147] =
      avatarOverlayBinding2.useState(avatarOverlayBinding145),
    [avatarOverlayBinding148, avatarOverlayBinding149] =
      avatarOverlayBinding2.useState(null),
    avatarOverlayBinding150 = avatarOverlayBinding2.useRef(null),
    avatarOverlayBinding151 = notifications.some(
      (item) => item.id === avatarOverlayBinding148,
    )
      ? avatarOverlayBinding148
      : null;
  let avatarOverlayBinding152 = avatarOverlayBinding151,
    avatarOverlayBinding153 =
      avatarOverlayBinding152 != null && areNotificationsVisible,
    avatarOverlayBinding154,
    avatarOverlayBinding155;
  avatarOverlayBinding154 = () => {
    if (avatarOverlayBinding153)
      return (
        onNotificationReplyEditorActiveChange?.(true),
        () => {
          onNotificationReplyEditorActiveChange?.(false);
        }
      );
  };
  avatarOverlayBinding155 = [
    avatarOverlayBinding153,
    onNotificationReplyEditorActiveChange,
  ];
  avatarOverlayBinding2.useEffect(
    avatarOverlayBinding154,
    avatarOverlayBinding155,
  );
  let avatarOverlayBinding156, avatarOverlayBinding157;
  avatarOverlayBinding157 = () => {
    avatarOverlayBinding150.current?.focus();
  };
  avatarOverlayBinding156 = [];
  currentAppInitialSharedCompatSlotLowerY(
    "avatar-overlay-keyboard-interaction-ready",
    avatarOverlayBinding157,
    avatarOverlayBinding156,
  );
  let avatarOverlayBinding158 = Math.min(
      avatarOverlayBinding146.hiddenOlderNotificationCount,
      avatarOverlayBinding144,
    ),
    avatarOverlayBinding159 = avatarOverlayBinding146.hasScrollableContent,
    avatarOverlayBinding160 =
      areNotificationsVisible &&
      avatarOverlayBinding159 &&
      avatarOverlayBinding143 &&
      avatarOverlayBinding146.hasLatestNotificationsAbove,
    avatarOverlayBinding161 =
      areNotificationsVisible &&
      avatarOverlayBinding159 &&
      avatarOverlayBinding143 &&
      avatarOverlayBinding158 > 0,
    avatarOverlayBinding162 =
      areNotificationsVisible &&
      avatarOverlayBinding159 &&
      avatarOverlayBinding143,
    avatarOverlayBinding163 =
      areNotificationsVisible && avatarOverlayBinding159,
    avatarOverlayBinding164 = notifications.length > 0,
    avatarOverlayBinding165 =
      avatarOverlayBinding164 && avatarOverlayBinding143,
    avatarOverlayBinding166 = prefersReducedMotion
      ? {
          duration: 0,
        }
      : {
          duration: 0.18,
          ease: [0.16, 1, 0.3, 1],
        };
  let avatarOverlayBinding167 = avatarOverlayBinding166,
    avatarOverlayBinding168 =
      restrictedCaption == null
        ? null
        : avatarOverlayBinding3.jsx(
            RestrictedCaptionPanel,
            {
              prefersReducedMotion,
              shouldInsetForScrollbar: avatarOverlayBinding163,
              text: restrictedCaption,
            },
            "restricted-caption",
          );
  let avatarOverlayBinding169 = avatarOverlayBinding168,
    avatarOverlayBinding170 = (avatarOverlayOperand65) => {
      avatarOverlayBinding147((avatarOverlayOperand71) => {
        let avatarOverlayBinding381 = getNotificationTrayScrollState(
          avatarOverlayOperand65,
        );
        return areNotificationTrayScrollStatesEqual(
          avatarOverlayOperand71,
          avatarOverlayBinding381,
        )
          ? avatarOverlayOperand71
          : avatarOverlayBinding381;
      });
    };
  let avatarOverlayBinding171 = avatarOverlayBinding170,
    avatarOverlayBinding172 = (avatarOverlayOperand81) => {
      avatarOverlayBinding136.current = avatarOverlayOperand81;
      avatarOverlayOperand81 != null &&
        avatarOverlayBinding171(avatarOverlayOperand81);
    };
  let avatarOverlayBinding173 = avatarOverlayBinding172,
    avatarOverlayBinding174 = () => {
      let avatarOverlayBinding346 = avatarOverlayBinding136.current;
      if (avatarOverlayBinding346 == null) return;
      avatarOverlayBinding171(avatarOverlayBinding346);
      let avatarOverlayBinding347 = window.requestAnimationFrame(() => {
          avatarOverlayBinding171(avatarOverlayBinding346);
        }),
        avatarOverlayBinding348 = new ResizeObserver(() => {
          avatarOverlayBinding171(avatarOverlayBinding346);
        });
      return (
        avatarOverlayBinding348.observe(avatarOverlayBinding346),
        () => {
          window.cancelAnimationFrame(avatarOverlayBinding347);
          avatarOverlayBinding348.disconnect();
        }
      );
    };
  let avatarOverlayBinding175;
  avatarOverlayBinding175 = [
    avatarOverlayBinding142,
    trayMaxHeight,
    avatarOverlayBinding171,
  ];
  avatarOverlayBinding2.useLayoutEffect(
    avatarOverlayBinding174,
    avatarOverlayBinding175,
  );
  let _e = () => {
    let avatarOverlayBinding369 = avatarOverlayBinding136.current;
    avatarOverlayBinding369 != null &&
      (avatarOverlayBinding369.scrollTo({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        top: 0,
      }),
      avatarOverlayBinding147(
        getNotificationTrayScrollState(avatarOverlayBinding369, 0),
      ));
  };
  let avatarOverlayBinding176 = _e,
    avatarOverlayBinding177 = () => {
      let avatarOverlayBinding365 = avatarOverlayBinding136.current;
      if (avatarOverlayBinding365 == null) return;
      let avatarOverlayBinding366 = getNotificationTrayScrollableHeight(
        avatarOverlayBinding365,
        avatarOverlayBinding158,
      );
      avatarOverlayBinding365.scrollTo({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        top: avatarOverlayBinding366,
      });
      avatarOverlayBinding147(
        getNotificationTrayScrollState(
          avatarOverlayBinding365,
          avatarOverlayBinding366,
        ),
      );
    };
  let avatarOverlayBinding178 = avatarOverlayBinding177,
    avatarOverlayBinding179 = avatarOverlayBinding169 != null && "gap-1.5",
    avatarOverlayBinding180 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
      "relative flex w-full min-w-0 flex-col overflow-hidden",
      avatarOverlayBinding179,
    );
  let be = avatarOverlayBinding165
    ? {
        height: trayMaxHeight,
        maxHeight: trayMaxHeight,
      }
    : undefined;
  let avatarOverlayBinding181 = isTrayAboveMascot
      ? null
      : avatarOverlayBinding169,
    avatarOverlayBinding182 = avatarOverlayBinding164
      ? avatarOverlayBinding3.jsxs(
          worktreeNewThreadQueryCompatSlotLowerILowerH.div,
          {
            layout: avatarOverlayBinding165,
            className: "relative min-h-0 min-w-0 flex-1",
            transition: avatarOverlayBinding167,
            children: [
              avatarOverlayBinding3.jsx(
                worktreeNewThreadQueryCompatSlotLowerOLowerH,
                {
                  children: avatarOverlayBinding160
                    ? avatarOverlayBinding3.jsx(
                        LatestNotificationsButton,
                        {
                          prefersReducedMotion,
                          onClick: avatarOverlayBinding176,
                        },
                        "latest",
                      )
                    : null,
                },
              ),
              avatarOverlayBinding3.jsx(
                worktreeNewThreadQueryCompatSlotLowerILowerH.div,
                {
                  ref: avatarOverlayBinding173,
                  animate: {
                    opacity: isNotificationTrayVisible ? 1 : 0,
                    y:
                      isNotificationTrayVisible || prefersReducedMotion ? 0 : 3,
                  },
                  "aria-label": avatarOverlayBinding135.formatMessage(
                    avatarOverlayBinding4.notificationList,
                  ),
                  className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
                    "scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]",
                    avatarOverlayBinding162 &&
                      "vertical-scroll-fade-mask snap-y snap-mandatory",
                  ),
                  "data-avatar-overlay-size": "notification-tray-list",
                  role: "list",
                  initial: false,
                  transition: prefersReducedMotion
                    ? {
                        duration: 0,
                      }
                    : {
                        duration: 0.16,
                        ease: "easeOut",
                      },
                  onScroll: (event) => {
                    let avatarOverlayBinding374 =
                      getNotificationTrayScrollState(event.currentTarget);
                    avatarOverlayBinding147((avatarOverlayOperand88) =>
                      areNotificationTrayScrollStatesEqual(
                        avatarOverlayOperand88,
                        avatarOverlayBinding374,
                      )
                        ? avatarOverlayOperand88
                        : avatarOverlayBinding374,
                    );
                  },
                  children: notifications.map((item, index) =>
                    avatarOverlayBinding3.jsx(
                      AvatarOverlayNotificationRow,
                      {
                        isReplying: avatarOverlayBinding152 === item.id,
                        notification: item,
                        notificationIndex: index,
                        onCloseReply: () => {
                          avatarOverlayBinding149((avatarOverlayOperand87) =>
                            avatarOverlayOperand87 === item.id
                              ? null
                              : avatarOverlayOperand87,
                          );
                        },
                        onDismissNotification,
                        onOpenReply: () => {
                          onOpenNotificationReply?.(item);
                          avatarOverlayBinding149(item.id);
                        },
                        onRunNotificationAction,
                        onSubmitQuestionOption,
                        onSubmitNotificationReply,
                        prefersReducedMotion,
                        replyInputRef: avatarOverlayBinding150,
                      },
                      item.id,
                    ),
                  ),
                },
              ),
              avatarOverlayBinding3.jsx(
                worktreeNewThreadQueryCompatSlotLowerOLowerH,
                {
                  children: avatarOverlayBinding161
                    ? avatarOverlayBinding3.jsx(
                        OlderNotificationsButton,
                        {
                          count: avatarOverlayBinding158,
                          prefersReducedMotion,
                          onClick: avatarOverlayBinding178,
                        },
                        "older",
                      )
                    : null,
                },
              ),
            ],
          },
        )
      : null;
  let avatarOverlayBinding183 = isTrayAboveMascot
    ? avatarOverlayBinding169
    : null;
  return avatarOverlayBinding3.jsxs(
    worktreeNewThreadQueryCompatSlotLowerILowerH.div,
    {
      layout: avatarOverlayBinding165,
      className: avatarOverlayBinding180,
      "data-avatar-overlay-size": "notification-tray-content",
      style: be,
      transition: avatarOverlayBinding167,
      children: [
        avatarOverlayBinding181,
        avatarOverlayBinding182,
        avatarOverlayBinding183,
      ],
    },
  );
}
function RestrictedCaptionPanel(avatarOverlayOperand9) {
  let { prefersReducedMotion, shouldInsetForScrollbar, text } =
      avatarOverlayOperand9,
    avatarOverlayBinding260 = avatarOverlayBinding2.useRef(null),
    avatarOverlayBinding261 = () => {
      let avatarOverlayBinding379 = avatarOverlayBinding260.current;
      avatarOverlayBinding379 != null &&
        (avatarOverlayBinding379.scrollTop =
          avatarOverlayBinding379.scrollHeight);
    };
  let avatarOverlayBinding262;
  avatarOverlayBinding262 = [text];
  avatarOverlayBinding2.useLayoutEffect(
    avatarOverlayBinding261,
    avatarOverlayBinding262,
  );
  let avatarOverlayBinding263 = {
    height: "auto",
    opacity: 1,
  };
  let avatarOverlayBinding264 =
      shouldInsetForScrollbar && "[scrollbar-gutter:stable]",
    avatarOverlayBinding265 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
      "no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left",
      avatarOverlayBinding264,
    );
  let avatarOverlayBinding266 = prefersReducedMotion
    ? false
    : {
        height: 0,
        opacity: 0,
      };
  let avatarOverlayBinding267 = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1],
      };
  let avatarOverlayBinding268 = (
    <div className="relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]">
      <div
        ref={avatarOverlayBinding260}
        className="text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground"
      >
        {text}
      </div>
    </div>
  );
  return avatarOverlayBinding3.jsx(
    worktreeNewThreadQueryCompatSlotLowerILowerH.div,
    {
      "aria-live": "polite",
      animate: avatarOverlayBinding263,
      className: avatarOverlayBinding265,
      "data-avatar-overlay-size": "notification-tray-caption",
      initial: avatarOverlayBinding266,
      role: "status",
      transition: avatarOverlayBinding267,
      children: avatarOverlayBinding268,
    },
  );
}
function LatestNotificationsButton(avatarOverlayOperand8) {
  let { onClick, prefersReducedMotion } = avatarOverlayOperand8,
    avatarOverlayBinding244 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding245 = avatarOverlayBinding244.formatMessage(
      avatarOverlayBinding4.showLatestNotifications,
    );
  let avatarOverlayBinding246 = {
    opacity: 1,
    scale: 1,
    x: "-50%",
  };
  let avatarOverlayBinding247 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding248 = {
      opacity: 0,
      scale: avatarOverlayBinding247,
      x: "-50%",
    };
  let avatarOverlayBinding249 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding250 = {
      opacity: 0,
      scale: avatarOverlayBinding249,
      x: "-50%",
    };
  let avatarOverlayBinding251 = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.14,
        ease: "easeOut",
      };
  let avatarOverlayBinding252 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
    avatarOverlayBinding12,
    "top-1 min-w-12",
  );
  let avatarOverlayBinding253 = prefersReducedMotion
    ? undefined
    : {
        scale: 1.03,
      };
  let avatarOverlayBinding254 = prefersReducedMotion
    ? undefined
    : {
        scale: 0.96,
      };
  let avatarOverlayBinding255 = avatarOverlayBinding244.formatMessage(
    avatarOverlayBinding4.latestNotifications,
  );
  let avatarOverlayBinding256 = <span>{avatarOverlayBinding255}</span>;
  let avatarOverlayBinding257 = avatarOverlayBinding3.jsx(
    worktreeNewThreadQueryCompatSlotUpperELowerP,
    {
      className:
        "icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block",
    },
  );
  return avatarOverlayBinding3.jsxs(
    worktreeNewThreadQueryCompatSlotLowerILowerH.button,
    {
      type: "button",
      "aria-label": avatarOverlayBinding245,
      "data-avatar-overlay-hit-region": "notification-scroll-control",
      animate: avatarOverlayBinding246,
      exit: avatarOverlayBinding248,
      initial: avatarOverlayBinding250,
      transition: avatarOverlayBinding251,
      className: avatarOverlayBinding252,
      whileHover: avatarOverlayBinding253,
      whileTap: avatarOverlayBinding254,
      onClick,
      children: [avatarOverlayBinding256, avatarOverlayBinding257],
    },
  );
}
function OlderNotificationsButton(avatarOverlayOperand7) {
  let { count, onClick, prefersReducedMotion } = avatarOverlayOperand7,
    avatarOverlayBinding225 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding226 = avatarOverlayBinding225.formatMessage(
      avatarOverlayBinding4.showOlderNotifications,
      {
        count,
      },
    );
  let avatarOverlayBinding227 = {
    opacity: 1,
    scale: 1,
    x: "-50%",
  };
  let avatarOverlayBinding228 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding229 = {
      opacity: 0,
      scale: avatarOverlayBinding228,
      x: "-50%",
    };
  let avatarOverlayBinding230 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding231 = {
      opacity: 0,
      scale: avatarOverlayBinding230,
      x: "-50%",
    };
  let avatarOverlayBinding232 = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.14,
        ease: "easeOut",
      };
  let avatarOverlayBinding233 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
    avatarOverlayBinding12,
    "bottom-1 min-w-9",
  );
  let avatarOverlayBinding234 = prefersReducedMotion
    ? undefined
    : {
        scale: 1.03,
      };
  let avatarOverlayBinding235 = prefersReducedMotion
    ? undefined
    : {
        scale: 0.96,
      };
  let avatarOverlayBinding236 = avatarOverlayBinding225.formatMessage(
    avatarOverlayBinding4.compactOlderNotificationCount,
    {
      count,
    },
  );
  let avatarOverlayBinding237 = (
    <span className="group-hover:hidden group-focus:hidden">
      {avatarOverlayBinding236}
    </span>
  );
  let avatarOverlayBinding238 = avatarOverlayBinding225.formatMessage(
    avatarOverlayBinding4.olderNotificationCount,
    {
      count,
    },
  );
  let avatarOverlayBinding239 = (
    <span className="hidden group-hover:inline group-focus:inline">
      {avatarOverlayBinding238}
    </span>
  );
  let avatarOverlayBinding240 = avatarOverlayBinding3.jsx(
    worktreeNewThreadQueryCompatSlotUpperELowerP,
    {
      className:
        "icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block",
    },
  );
  return avatarOverlayBinding3.jsxs(
    worktreeNewThreadQueryCompatSlotLowerILowerH.button,
    {
      type: "button",
      "aria-label": avatarOverlayBinding226,
      "data-avatar-overlay-hit-region": "notification-scroll-control",
      animate: avatarOverlayBinding227,
      exit: avatarOverlayBinding229,
      initial: avatarOverlayBinding231,
      transition: avatarOverlayBinding232,
      className: avatarOverlayBinding233,
      whileHover: avatarOverlayBinding234,
      whileTap: avatarOverlayBinding235,
      onClick,
      children: [
        avatarOverlayBinding237,
        avatarOverlayBinding239,
        avatarOverlayBinding240,
      ],
    },
  );
}
function getNotificationTrayScrollableHeight(
  avatarOverlayOperand48,
  avatarOverlayOperand49,
) {
  if (avatarOverlayOperand49 <= avatarOverlayBinding5)
    return avatarOverlayOperand48.scrollHeight;
  let avatarOverlayBinding371 = getNotificationRowElements(
    avatarOverlayOperand48,
  );
  return (
    avatarOverlayBinding371[
      findNotificationRowIndexAtOffset(
        avatarOverlayBinding371,
        getNotificationScrollThreshold(
          avatarOverlayOperand48,
          avatarOverlayBinding371,
        ),
      ) + avatarOverlayBinding5
    ]?.offsetTop ?? avatarOverlayOperand48.scrollHeight
  );
}
function AvatarOverlayNotificationRow({
  isReplying,
  notification,
  notificationIndex,
  onDismissNotification,
  onCloseReply,
  onOpenReply,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onSubmitNotificationReply,
  prefersReducedMotion,
  replyInputRef,
}) {
  let avatarOverlayBinding96 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding97 =
      notification.source === "local" &&
      notification.usesLiveConversationState !== false
        ? notification.localConversationId
        : null,
    avatarOverlayBinding98 = currentAppInitialSharedCompatSlotUpperGLowerO(
      currentAppInitialSharedMember0547,
      avatarOverlayBinding97,
    ),
    avatarOverlayBinding99 =
      avatarOverlayBinding98 == null
        ? null
        : getLatestAvatarOverlayActivitySubtitle(
            avatarOverlayBinding98.items,
            avatarOverlayBinding96,
          ),
    avatarOverlayBinding100 =
      getAvatarOverlayActivityStatusConfig(notification),
    avatarOverlayBinding101 = avatarOverlayBinding96.formatMessage(
      avatarOverlayBinding100.labelMessage,
    ),
    avatarOverlayBinding102 =
      avatarOverlayBinding99 ??
      notification.body ??
      avatarOverlayBinding96.formatMessage(
        avatarOverlayBinding100.fallbackBodyMessage,
      ),
    avatarOverlayBinding103 = notification.waitingRequest,
    avatarOverlayBinding104 =
      avatarOverlayBinding103 == null
        ? avatarOverlayBinding102
        : getWaitingRequestSearchText(
            avatarOverlayBinding103,
            avatarOverlayBinding96,
          ),
    avatarOverlayBinding105 = avatarOverlayBinding104.replace(/[.?!]+$/, ""),
    avatarOverlayBinding106 =
      avatarOverlayBinding104 === avatarOverlayBinding101
        ? avatarOverlayBinding101
        : `${avatarOverlayBinding101}. ${avatarOverlayBinding105}`,
    avatarOverlayBinding107 =
      notification.action == null
        ? `${notification.title}. ${avatarOverlayBinding106}`
        : `${notification.title}. ${avatarOverlayBinding106}. ${avatarOverlayBinding96.formatMessage(avatarOverlayBinding4.openNotification)}`,
    avatarOverlayBinding108 = notification.action != null,
    avatarOverlayBinding109 =
      notification.kind !== "activity" && onDismissNotification != null,
    [avatarOverlayBinding110, avatarOverlayBinding111] =
      avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding112, avatarOverlayBinding113] =
      avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding114, avatarOverlayBinding115] =
      avatarOverlayBinding2.useState(""),
    [avatarOverlayBinding116, avatarOverlayBinding117] =
      avatarOverlayBinding2.useState(null),
    [avatarOverlayBinding118, avatarOverlayBinding119] =
      avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding120, avatarOverlayBinding121] =
      avatarOverlayBinding2.useState(0),
    [avatarOverlayBinding122, avatarOverlayBinding123] =
      avatarOverlayBinding2.useState(false),
    avatarOverlayBinding124 = avatarOverlayBinding2.useRef(
      avatarOverlayBinding110,
    ),
    avatarOverlayBinding125 = avatarOverlayBinding2.useRef(undefined),
    avatarOverlayBinding126 =
      avatarOverlayBinding103 == null
        ? avatarOverlayBinding8
        : avatarOverlayBinding9,
    avatarOverlayBinding127 = avatarOverlayBinding2.useCallback(
      (avatarOverlayOperand20) => {
        if (
          (avatarOverlayBinding125.current?.(),
          (avatarOverlayBinding125.current = undefined),
          avatarOverlayOperand20 == null)
        )
          return;
        let avatarOverlayBinding349 = () => {
          let avatarOverlayBinding361 = avatarOverlayOperand20.scrollHeight;
          avatarOverlayBinding121((avatarOverlayOperand89) =>
            avatarOverlayOperand89 === avatarOverlayBinding361
              ? avatarOverlayOperand89
              : avatarOverlayBinding361,
          );
          let avatarOverlayBinding362 = hasHorizontallyOverflowingContent(
            avatarOverlayOperand20,
          );
          avatarOverlayBinding123((avatarOverlayOperand66) => {
            let avatarOverlayBinding380 =
              (avatarOverlayBinding124.current && avatarOverlayOperand66) ||
              avatarOverlayBinding362;
            return avatarOverlayOperand66 === avatarOverlayBinding380
              ? avatarOverlayOperand66
              : avatarOverlayBinding380;
          });
        };
        avatarOverlayBinding349();
        avatarOverlayBinding125.current = observeElementSize({
          axis: "both",
          target: avatarOverlayOperand20,
          onChange: avatarOverlayBinding349,
        });
      },
      [],
    );
  avatarOverlayBinding2.useLayoutEffect(() => {
    avatarOverlayBinding124.current = avatarOverlayBinding110;
  }, [avatarOverlayBinding110]);
  let avatarOverlayBinding128 =
      avatarOverlayBinding120 >
        avatarOverlayBinding126 + avatarOverlayBinding11 ||
      avatarOverlayBinding122,
    avatarOverlayBinding129 =
      avatarOverlayBinding128 && avatarOverlayBinding110 && !isReplying,
    avatarOverlayBinding130 =
      notification.controlTarget?.type === "app-server-conversation" &&
      onSubmitNotificationReply != null,
    avatarOverlayBinding131 = avatarOverlayBinding114.trim(),
    avatarOverlayBinding132 = prefersReducedMotion
      ? {
          duration: 0,
        }
      : {
          duration: avatarOverlayBinding118 ? 0.2 : 0.28,
          ease: [0.16, 1, 0.3, 1],
        },
    avatarOverlayBinding133 = async (event) => {
      if (
        (event.preventDefault(),
        event.stopPropagation(),
        !(
          !avatarOverlayBinding130 ||
          avatarOverlayBinding131.length === 0 ||
          avatarOverlayBinding112
        ))
      ) {
        avatarOverlayBinding113(true);
        avatarOverlayBinding117(null);
        try {
          await onSubmitNotificationReply(
            notification,
            avatarOverlayBinding131,
          );
          avatarOverlayBinding115("");
          onCloseReply();
        } catch {
          avatarOverlayBinding117(
            avatarOverlayBinding96.formatMessage(
              avatarOverlayBinding4.notificationReplyError,
            ),
          );
        } finally {
          avatarOverlayBinding113(false);
        }
      }
    };
  return avatarOverlayBinding3.jsxs(
    worktreeNewThreadQueryCompatSlotLowerILowerH.div,
    {
      animate: {
        opacity: 1,
        y: 0,
      },
      initial: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 4,
      },
      role: "listitem",
      className:
        "group no-drag relative w-full min-w-0 snap-start scroll-mt-2 text-left",
      "data-avatar-overlay-measure": "notification-tray-row",
      transition: prefersReducedMotion
        ? {
            duration: 0,
          }
        : {
            delay: Math.min(notificationIndex, 3) * avatarOverlayBinding7,
            duration: 0.18,
            ease: "easeOut",
          },
      onBlurCapture: (event) => {
        let avatarOverlayBinding378 = event.relatedTarget;
        (avatarOverlayBinding378 instanceof Node &&
          event.currentTarget.contains(avatarOverlayBinding378)) ||
          avatarOverlayBinding119(false);
      },
      onFocusCapture: () => {
        avatarOverlayBinding119(true);
      },
      onPointerEnter: () => {
        avatarOverlayBinding119(true);
      },
      onPointerLeave: () => {
        avatarOverlayBinding119(false);
      },
      children: [
        <div
          className={worktreeNewThreadQueryCompatSlotLowerMLowerH(
            "relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]",
            avatarOverlayBinding108 &&
              "transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-token-border/80 hover:bg-token-main-surface-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(0,0,0,0.1)] motion-reduce:transition-none",
          )}
        >
          {avatarOverlayBinding3.jsxs(
            worktreeNewThreadQueryCompatSlotLowerILowerH.div,
            {
              role: avatarOverlayBinding108 ? "button" : undefined,
              className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
                "block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]",
                avatarOverlayBinding109 ? "pl-5" : "pl-3",
                avatarOverlayBinding108
                  ? "cursor-interaction"
                  : "cursor-default",
              ),
              tabIndex: avatarOverlayBinding108 ? 0 : undefined,
              transition: prefersReducedMotion
                ? {
                    duration: 0,
                  }
                : {
                    duration: 0.12,
                    ease: "easeOut",
                  },
              whileTap:
                avatarOverlayBinding108 && !prefersReducedMotion
                  ? {
                      scale: 0.995,
                    }
                  : undefined,
              "aria-label": avatarOverlayBinding108
                ? avatarOverlayBinding107
                : undefined,
              onClick: () => {
                avatarOverlayBinding108 &&
                  onRunNotificationAction?.(notification);
              },
              onKeyDown: (event) => {
                !avatarOverlayBinding108 ||
                  (event.key !== "Enter" && event.key !== " ") ||
                  (event.preventDefault(),
                  onRunNotificationAction?.(notification));
              },
              children: [
                <span className="flex min-w-0 items-center pr-7">
                  <span
                    className={worktreeNewThreadQueryCompatSlotLowerMLowerH(
                      "text-size-chat min-w-0 truncate leading-[17px]",
                      notification.kind === "activity"
                        ? "text-token-text-secondary"
                        : "font-semibold text-token-foreground",
                    )}
                  >
                    {notification.title}
                  </span>
                </span>,
                avatarOverlayBinding3.jsx(
                  worktreeNewThreadQueryCompatSlotLowerILowerH.div,
                  {
                    ref: avatarOverlayBinding127,
                    animate: {
                      maxHeight: avatarOverlayBinding129
                        ? avatarOverlayBinding10
                        : avatarOverlayBinding126,
                    },
                    className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
                      "text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground",
                      notification.kind === "activity" && "hidden",
                      avatarOverlayBinding129
                        ? "whitespace-pre-wrap"
                        : avatarOverlayBinding103 == null
                          ? "line-clamp-2"
                          : undefined,
                    ),
                    "data-avatar-overlay-measure-body": "true",
                    initial: false,
                    transition: prefersReducedMotion
                      ? {
                          duration: 0,
                        }
                      : {
                          duration: 0.18,
                          ease: "easeOut",
                        },
                    children:
                      avatarOverlayBinding103 == null
                        ? avatarOverlayBinding102
                        : avatarOverlayBinding3.jsx(CompactWaitingRequestBody, {
                            isExpanded: avatarOverlayBinding129,
                            localConversationId: avatarOverlayBinding97,
                            request: avatarOverlayBinding103,
                            onRunNotificationAction: (
                              avatarOverlayOperand76,
                            ) => {
                              onRunNotificationAction?.(
                                notification,
                                avatarOverlayOperand76,
                              );
                            },
                            onSubmitQuestionOption: (
                              avatarOverlayOperand77,
                            ) => {
                              onSubmitQuestionOption?.(
                                notification,
                                avatarOverlayOperand77,
                              );
                            },
                          }),
                  },
                ),
              ],
            },
          )}
          <span
            role="img"
            aria-label={
              avatarOverlayBinding103?.kind === "question"
                ? avatarOverlayBinding96.formatMessage(
                    avatarOverlayBinding4.questionStatusIcon,
                  )
                : avatarOverlayBinding101
            }
            className={worktreeNewThreadQueryCompatSlotLowerMLowerH(
              "pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100",
              avatarOverlayBinding128 &&
                avatarOverlayBinding118 &&
                "opacity-0 transition-opacity duration-150 motion-reduce:transition-none",
            )}
          >
            {avatarOverlayBinding103?.kind === "question"
              ? avatarOverlayBinding3.jsx(
                  projectHoverCardCurrentCompatSlotLowerW,
                  {
                    className: avatarOverlayBinding100.iconClassName,
                  },
                )
              : AvatarOverlayStatusIcon(avatarOverlayBinding100)}
          </span>
          {avatarOverlayBinding128
            ? avatarOverlayBinding3.jsx(
                worktreeNewThreadQueryCompatSlotLowerILowerH.div,
                {
                  animate: {
                    opacity: avatarOverlayBinding118 ? 1 : 0,
                    x: avatarOverlayBinding118 ? 0 : 6,
                  },
                  className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
                    "absolute top-1 right-1 z-10",
                    avatarOverlayBinding118
                      ? "pointer-events-auto"
                      : "pointer-events-none",
                  ),
                  "data-avatar-overlay-control": "expand",
                  initial: false,
                  transition: avatarOverlayBinding132,
                  children: avatarOverlayBinding3.jsx(
                    worktreeNewThreadQueryCompatSlotLowerYLowerP,
                    {
                      align: "end",
                      side: "top",
                      tooltipContent: avatarOverlayBinding96.formatMessage(
                        avatarOverlayBinding110
                          ? avatarOverlayBinding4.collapseNotificationTooltip
                          : avatarOverlayBinding4.expandNotificationTooltip,
                      ),
                      children: avatarOverlayBinding3.jsx(
                        worktreeNewThreadQueryCompatSlotUpperTLowerM,
                        {
                          className:
                            worktreeNewThreadQueryCompatSlotLowerMLowerH(
                              "size-6",
                              avatarOverlayBinding13,
                            ),
                          color: "ghost",
                          size: "icon",
                          "aria-expanded": avatarOverlayBinding110,
                          "aria-label": avatarOverlayBinding96.formatMessage(
                            avatarOverlayBinding110
                              ? avatarOverlayBinding4.collapseNotification
                              : avatarOverlayBinding4.expandNotification,
                            {
                              title: notification.title,
                            },
                          ),
                          onClick: () => {
                            avatarOverlayBinding111(
                              (avatarOverlayOperand90) =>
                                !avatarOverlayOperand90,
                            );
                          },
                          children: avatarOverlayBinding3.jsx(
                            worktreeNewThreadQueryCompatSlotLowerILowerH.span,
                            {
                              animate: {
                                rotate: avatarOverlayBinding110 ? 90 : 0,
                              },
                              transition: prefersReducedMotion
                                ? {
                                    duration: 0,
                                  }
                                : {
                                    duration: 0.12,
                                    ease: "easeOut",
                                  },
                              children: avatarOverlayBinding3.jsx(
                                worktreeNewThreadQueryCompatSlotUpperELowerP,
                                {
                                  className: "icon-xs",
                                },
                              ),
                            },
                          ),
                        },
                      ),
                    },
                  ),
                },
              )
            : null}
          {avatarOverlayBinding130 && !isReplying
            ? avatarOverlayBinding3.jsx(
                worktreeNewThreadQueryCompatSlotLowerILowerH.div,
                {
                  animate: {
                    opacity: avatarOverlayBinding118 ? 1 : 0,
                    x: avatarOverlayBinding118 ? 0 : 6,
                  },
                  className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
                    "no-drag absolute right-2 bottom-1 z-10",
                    avatarOverlayBinding118
                      ? "pointer-events-auto"
                      : "pointer-events-none",
                  ),
                  "data-avatar-overlay-control": "reply",
                  initial: false,
                  transition: avatarOverlayBinding132,
                  children: (
                    <div className="flex justify-end pb-1">
                      {avatarOverlayBinding3.jsx(
                        worktreeNewThreadQueryCompatSlotUpperTLowerM,
                        {
                          className:
                            worktreeNewThreadQueryCompatSlotLowerMLowerH(
                              "h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]",
                              avatarOverlayBinding13,
                            ),
                          color: "outline",
                          size: "default",
                          "aria-label": avatarOverlayBinding96.formatMessage(
                            avatarOverlayBinding4.replyNotification,
                            {
                              title: notification.title,
                            },
                          ),
                          onClick: (event) => {
                            event.stopPropagation();
                            avatarOverlayBinding117(null);
                            avatarOverlayBinding115("");
                            onOpenReply();
                            avatarOverlayBinding119(true);
                          },
                          onPointerDown: (event) => {
                            event.stopPropagation();
                          },
                          children: avatarOverlayBinding96.formatMessage(
                            avatarOverlayBinding4.replyNotificationButton,
                          ),
                        },
                      )}
                    </div>
                  ),
                },
              )
            : null}
          {isReplying
            ? avatarOverlayBinding3.jsxs(
                worktreeNewThreadQueryCompatSlotLowerILowerH.form,
                {
                  className:
                    "no-drag mx-3 mb-2 border-t border-token-border/60 pt-2",
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                  initial: {
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : -2,
                  },
                  transition: prefersReducedMotion
                    ? {
                        duration: 0,
                      }
                    : {
                        duration: 0.16,
                        ease: "easeOut",
                      },
                  onClick: (event) => {
                    event.stopPropagation();
                  },
                  onPointerDown: (event) => {
                    event.stopPropagation();
                  },
                  onSubmit: (avatarOverlayOperand83) => {
                    avatarOverlayBinding133(avatarOverlayOperand83);
                  },
                  children: [
                    <div className="flex min-w-0 items-center gap-1.5">
                      <input
                        ref={replyInputRef}
                        className="text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border"
                        aria-label={avatarOverlayBinding96.formatMessage(
                          avatarOverlayBinding4.replyNotification,
                          {
                            title: notification.title,
                          },
                        )}
                        autoFocus={true}
                        placeholder={avatarOverlayBinding96.formatMessage(
                          avatarOverlayBinding4.notificationReplyPlaceholder,
                        )}
                        value={avatarOverlayBinding114}
                        onChange={(event) => {
                          avatarOverlayBinding115(event.currentTarget.value);
                          avatarOverlayBinding117(null);
                        }}
                        onKeyDown={(event) => {
                          event.key !== "Escape" ||
                            avatarOverlayBinding112 ||
                            (event.stopPropagation(),
                            onCloseReply(),
                            avatarOverlayBinding117(null));
                        }}
                      />
                      {avatarOverlayBinding3.jsx(
                        worktreeNewThreadQueryCompatSlotUpperTLowerM,
                        {
                          className: "h-6 px-2 text-xs",
                          color: "primary",
                          size: "default",
                          type: "submit",
                          "aria-label": avatarOverlayBinding96.formatMessage(
                            avatarOverlayBinding4.sendNotificationReply,
                            {
                              title: notification.title,
                            },
                          ),
                          disabled:
                            avatarOverlayBinding131.length === 0 ||
                            avatarOverlayBinding112,
                          loading: avatarOverlayBinding112,
                          children: avatarOverlayBinding96.formatMessage(
                            avatarOverlayBinding4.replyNotificationButton,
                          ),
                        },
                      )}
                    </div>,
                    avatarOverlayBinding116 == null ? null : (
                      <div
                        className="mt-1 text-[11px] leading-4 text-token-error-foreground"
                        role="alert"
                      >
                        {avatarOverlayBinding116}
                      </div>
                    ),
                  ],
                },
              )
            : null}
        </div>,
        avatarOverlayBinding109 && !isReplying ? (
          <div
            className={worktreeNewThreadQueryCompatSlotLowerMLowerH(
              "absolute -top-1 -left-1 z-20",
              avatarOverlayBinding118
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0",
            )}
            data-avatar-overlay-control="dismiss"
          >
            {avatarOverlayBinding3.jsx(
              worktreeNewThreadQueryCompatSlotLowerYLowerP,
              {
                align: "start",
                side: "top",
                tooltipContent: avatarOverlayBinding96.formatMessage(
                  avatarOverlayBinding4.dismissNotificationTooltip,
                ),
                children: avatarOverlayBinding3.jsx(
                  AvatarOverlayPillDismissButton,
                  {
                    ariaLabel: avatarOverlayBinding96.formatMessage(
                      avatarOverlayBinding4.dismissNotification,
                      {
                        title: notification.title,
                      },
                    ),
                    onClick: () => {
                      onDismissNotification?.(notification);
                    },
                  },
                ),
              },
            )}
          </div>
        ) : null,
      ],
    },
  );
}
function CompactWaitingRequestBody(avatarOverlayOperand2) {
  let {
      isExpanded,
      localConversationId,
      onRunNotificationAction,
      onSubmitQuestionOption,
      request,
    } = avatarOverlayOperand2,
    avatarOverlayBinding186 = (avatarOverlayOperand82) => {
      "questionOption" in avatarOverlayOperand82 ||
        onRunNotificationAction(avatarOverlayOperand82);
    };
  let avatarOverlayBinding187 = avatarOverlayBinding186;
  switch (request.kind) {
    case "question": {
      let avatarOverlayBinding284 = isExpanded
          ? "break-words whitespace-pre-wrap"
          : "truncate",
        avatarOverlayBinding285 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
          "min-w-0",
          avatarOverlayBinding284,
        );
      let avatarOverlayBinding286 = (
        <div className={avatarOverlayBinding285}>{request.prompt}</div>
      );
      let avatarOverlayBinding287 = request.options.map(
        mapQuestionOptionToAction,
      );
      let avatarOverlayBinding288 = (avatarOverlayOperand45) => {
        if ("questionOption" in avatarOverlayOperand45) {
          onSubmitQuestionOption?.(avatarOverlayOperand45.questionOption);
          return;
        }
        onRunNotificationAction(avatarOverlayOperand45);
      };
      let avatarOverlayBinding289 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestActions,
        {
          actions: avatarOverlayBinding287,
          onRunNotificationAction: avatarOverlayBinding288,
        },
      );
      let avatarOverlayBinding290;
      return (
        <div data-avatar-overlay-compact-waiting-request="question">
          {avatarOverlayBinding286}
          {avatarOverlayBinding289}
        </div>
      );
    }
    case "patch": {
      let avatarOverlayBinding291 = avatarOverlayBinding3.jsx(
        CompactPatchRequestSummary,
        {
          additions: request.additions,
          deletions: request.deletions,
          fileCount: request.fileCount,
          files: request.files,
          isExpanded,
          summary: request.summary,
        },
      );
      let avatarOverlayBinding292 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestActions,
        {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187,
        },
      );
      let avatarOverlayBinding293;
      return (
        <div data-avatar-overlay-compact-waiting-request="patch">
          {avatarOverlayBinding291}
          {avatarOverlayBinding292}
        </div>
      );
    }
    case "plan": {
      let avatarOverlayBinding343;
      return avatarOverlayBinding3.jsx(CompactPlanRequest, {
        isExpanded,
        localConversationId,
        onRunNotificationAction: avatarOverlayBinding187,
        request,
      });
    }
    case "exec": {
      let avatarOverlayBinding310 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestSummary,
        {
          isExpanded,
          text: request.summary,
        },
      );
      let avatarOverlayBinding311 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestActions,
        {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187,
        },
      );
      let avatarOverlayBinding312;
      return (
        <div data-avatar-overlay-compact-waiting-request="exec">
          {avatarOverlayBinding310}
          {avatarOverlayBinding311}
        </div>
      );
    }
    case "network": {
      let avatarOverlayBinding313 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestSummary,
        {
          isExpanded,
          text: request.target,
        },
      );
      let avatarOverlayBinding314 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestActions,
        {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187,
        },
      );
      let avatarOverlayBinding315;
      return (
        <div data-avatar-overlay-compact-waiting-request="network">
          {avatarOverlayBinding313}
          {avatarOverlayBinding314}
        </div>
      );
    }
    case "permission": {
      let avatarOverlayBinding307 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestSummary,
        {
          isExpanded,
          text: request.target,
        },
      );
      let avatarOverlayBinding308 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestActions,
        {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187,
        },
      );
      let avatarOverlayBinding309;
      return (
        <div data-avatar-overlay-compact-waiting-request="permission">
          {avatarOverlayBinding307}
          {avatarOverlayBinding308}
        </div>
      );
    }
    case "tool": {
      let avatarOverlayBinding303 = request.summary ?? request.target,
        avatarOverlayBinding304 = avatarOverlayBinding3.jsx(
          CompactWaitingRequestSummary,
          {
            isExpanded,
            text: avatarOverlayBinding303,
          },
        );
      let avatarOverlayBinding305 = avatarOverlayBinding3.jsx(
        CompactWaitingRequestActions,
        {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187,
        },
      );
      let avatarOverlayBinding306;
      return (
        <div data-avatar-overlay-compact-waiting-request="tool">
          {avatarOverlayBinding304}
          {avatarOverlayBinding305}
        </div>
      );
    }
  }
}
function mapQuestionOptionToAction(
  avatarOverlayOperand56,
  avatarOverlayOperand57,
) {
  return {
    label: avatarOverlayOperand56.label,
    tone: avatarOverlayOperand57 === 0 ? "primary" : "secondary",
    questionOption: avatarOverlayOperand56,
  };
}
function CompactPlanRequest(avatarOverlayOperand11) {
  let { isExpanded, localConversationId, onRunNotificationAction, request } =
      avatarOverlayOperand11,
    { getModeForSelection } =
      appMainCurrentCompatSlotLowerGLowerP(localConversationId),
    avatarOverlayBinding272,
    avatarOverlayBinding273,
    avatarOverlayBinding274,
    avatarOverlayBinding275;
  {
    let avatarOverlayBinding327 = getModeForSelection("default");
    avatarOverlayBinding274 = request.kind;
    avatarOverlayBinding275 = avatarOverlayBinding3.jsx(
      CompactWaitingRequestSummary,
      {
        isExpanded,
        text: request.summary,
      },
    );
    avatarOverlayBinding272 = CompactWaitingRequestActions;
    avatarOverlayBinding273 = request.actions.map((item) =>
      item.intent === "plan-start"
        ? {
            ...item,
            planStartCollaborationMode: avatarOverlayBinding327,
          }
        : item,
    );
  }
  let avatarOverlayBinding276 = avatarOverlayBinding3.jsx(
    avatarOverlayBinding272,
    {
      actions: avatarOverlayBinding273,
      onRunNotificationAction,
    },
  );
  return (
    <div data-avatar-overlay-compact-waiting-request={avatarOverlayBinding274}>
      {avatarOverlayBinding275}
      {avatarOverlayBinding276}
    </div>
  );
}
function CompactWaitingRequestSummary(avatarOverlayOperand17) {
  let { isExpanded, text } = avatarOverlayOperand17,
    avatarOverlayBinding329 = isExpanded
      ? "break-words whitespace-pre-wrap"
      : "truncate whitespace-nowrap",
    avatarOverlayBinding330 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
      "min-w-0 text-token-text-secondary",
      avatarOverlayBinding329,
    );
  return (
    <div
      className={avatarOverlayBinding330}
      data-avatar-overlay-compact-waiting-summary-text="true"
    >
      {text}
    </div>
  );
}
function CompactPatchRequestSummary(avatarOverlayOperand4) {
  let { additions, deletions, fileCount, files, isExpanded, summary } =
      avatarOverlayOperand4,
    avatarOverlayBinding209 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding210 = avatarOverlayBinding209.formatMessage(
      avatarOverlayBinding4.compactPatchFileCount,
      {
        count: fileCount,
      },
    );
  let avatarOverlayBinding211 = avatarOverlayBinding210,
    avatarOverlayBinding212 =
      additions > 0
        ? avatarOverlayBinding209.formatMessage(
            avatarOverlayBinding4.compactPatchAdditions,
            {
              count: additions,
            },
          )
        : null;
  let avatarOverlayBinding213 = avatarOverlayBinding212,
    avatarOverlayBinding214 =
      deletions > 0
        ? avatarOverlayBinding209.formatMessage(
            avatarOverlayBinding4.compactPatchDeletions,
            {
              count: deletions,
            },
          )
        : null;
  let avatarOverlayBinding215 = avatarOverlayBinding214;
  if (!isExpanded) {
    let avatarOverlayBinding278 = <span>{avatarOverlayBinding211}</span>;
    let avatarOverlayBinding279 =
      avatarOverlayBinding213 == null ? null : (
        <span className="ml-1.5 text-token-charts-green">
          {avatarOverlayBinding213}
        </span>
      );
    let avatarOverlayBinding280 =
      avatarOverlayBinding215 == null ? null : (
        <span className="ml-1.5 text-token-error-foreground">
          {avatarOverlayBinding215}
        </span>
      );
    let avatarOverlayBinding281 = avatarOverlayBinding3.jsx(BulletSeparator, {
      className: "mx-1.5 text-token-text-tertiary",
    });
    let avatarOverlayBinding282 = <span>{summary}</span>;
    let avatarOverlayBinding283;
    return (
      <div
        className="min-w-0 truncate whitespace-nowrap text-token-text-secondary"
        data-avatar-overlay-compact-waiting-summary-text="true"
      >
        {avatarOverlayBinding278}
        {avatarOverlayBinding279}
        {avatarOverlayBinding280}
        {avatarOverlayBinding281}
        {avatarOverlayBinding282}
      </div>
    );
  }
  let avatarOverlayBinding216 = (
    <span className="text-[11px] leading-4 text-token-text-secondary">
      {avatarOverlayBinding211}
    </span>
  );
  let avatarOverlayBinding217 =
    avatarOverlayBinding213 == null ? null : (
      <span className="text-[11px] leading-4 text-token-charts-green">
        {avatarOverlayBinding213}
      </span>
    );
  let avatarOverlayBinding218 =
    avatarOverlayBinding215 == null ? null : (
      <span className="text-[11px] leading-4 text-token-error-foreground">
        {avatarOverlayBinding215}
      </span>
    );
  let avatarOverlayBinding219 = (
    <div className="mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
      {avatarOverlayBinding216}
      {avatarOverlayBinding217}
      {avatarOverlayBinding218}
    </div>
  );
  let avatarOverlayBinding220 = files.map(CompactPatchFileRow);
  let avatarOverlayBinding221 = (
    <div className="mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary">
      {avatarOverlayBinding220}
    </div>
  );
  return (
    <div data-avatar-overlay-compact-waiting-summary-text="true">
      {avatarOverlayBinding219}
      {avatarOverlayBinding221}
    </div>
  );
}
function CompactPatchFileRow(avatarOverlayOperand61) {
  return (
    <div key={avatarOverlayOperand61} className="leading-4 break-words">
      {avatarOverlayOperand61}
    </div>
  );
}
function CompactWaitingRequestActions(avatarOverlayOperand12) {
  let { actions, onRunNotificationAction } = avatarOverlayOperand12,
    avatarOverlayBinding295;
  {
    let avatarOverlayBinding316;
    avatarOverlayBinding316 = (avatarOverlayOperand14) =>
      avatarOverlayBinding3.jsx(
        worktreeNewThreadQueryCompatSlotUpperTLowerM,
        {
          className: "max-w-full min-w-0",
          color: getWaitingRequestActionButtonColor(
            avatarOverlayOperand14.tone,
          ),
          size: "toolbar",
          "aria-label":
            avatarOverlayOperand14.ariaLabel ?? avatarOverlayOperand14.label,
          title:
            avatarOverlayOperand14.ariaLabel ?? avatarOverlayOperand14.label,
          onClick: (event) => {
            event.stopPropagation();
            onRunNotificationAction(avatarOverlayOperand14);
          },
          onPointerDown: stopPointerEventPropagation,
          children: (
            <span className="truncate">{avatarOverlayOperand14.label}</span>
          ),
        },
        avatarOverlayOperand14.ariaLabel ?? avatarOverlayOperand14.label,
      );
    avatarOverlayBinding295 = actions.map(avatarOverlayBinding316);
  }
  return (
    <div className="no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px">
      {avatarOverlayBinding295}
    </div>
  );
}
function stopPointerEventPropagation(event) {
  event.stopPropagation();
}
function getWaitingRequestActionButtonColor(avatarOverlayOperand41) {
  switch (avatarOverlayOperand41) {
    case "primary":
      return "secondary";
    case "danger":
      return "danger";
    case "secondary":
      return "secondary";
  }
}
function getNotificationTrayScrollState(
  avatarOverlayOperand18,
  avatarOverlayOperand19 = avatarOverlayOperand18.scrollTop,
) {
  if (!hasScrollableNotificationTray(avatarOverlayOperand18))
    return {
      hasScrollableContent: false,
      hasLatestNotificationsAbove: false,
      hiddenOlderNotificationCount: 0,
    };
  if (
    isNotificationTrayScrolledToEnd(
      avatarOverlayOperand18,
      avatarOverlayOperand19,
    )
  )
    return {
      hasScrollableContent: true,
      hasLatestNotificationsAbove: true,
      hiddenOlderNotificationCount: 0,
    };
  let avatarOverlayBinding341 = getNotificationRowElements(
      avatarOverlayOperand18,
    ),
    avatarOverlayBinding342 = getNotificationScrollThreshold(
      avatarOverlayOperand18,
      avatarOverlayBinding341,
      avatarOverlayOperand19,
    );
  return {
    hasScrollableContent: true,
    hasLatestNotificationsAbove: avatarOverlayOperand19 > avatarOverlayBinding6,
    hiddenOlderNotificationCount: countHiddenOlderNotifications(
      avatarOverlayOperand18,
      avatarOverlayBinding341,
      avatarOverlayBinding342,
    ),
  };
}
function areNotificationTrayScrollStatesEqual(
  avatarOverlayOperand32,
  avatarOverlayOperand33,
) {
  return (
    avatarOverlayOperand32.hasScrollableContent ===
      avatarOverlayOperand33.hasScrollableContent &&
    avatarOverlayOperand32.hasLatestNotificationsAbove ===
      avatarOverlayOperand33.hasLatestNotificationsAbove &&
    avatarOverlayOperand32.hiddenOlderNotificationCount ===
      avatarOverlayOperand33.hiddenOlderNotificationCount
  );
}
function isNotificationTrayScrolledToEnd(
  avatarOverlayOperand59,
  avatarOverlayOperand60 = avatarOverlayOperand59.scrollTop,
) {
  let avatarOverlayBinding373 = Math.max(
    0,
    avatarOverlayOperand59.scrollHeight - avatarOverlayOperand59.clientHeight,
  );
  return (
    hasScrollableNotificationTray(avatarOverlayOperand59) &&
    avatarOverlayOperand60 >= avatarOverlayBinding373 - avatarOverlayBinding6
  );
}
function hasScrollableNotificationTray(avatarOverlayOperand80) {
  return (
    avatarOverlayOperand80.scrollHeight >
    avatarOverlayOperand80.clientHeight + avatarOverlayBinding6
  );
}
function hasHorizontallyOverflowingContent(avatarOverlayOperand46) {
  return [
    avatarOverlayOperand46,
    ...Array.from(avatarOverlayOperand46.querySelectorAll("*")),
  ].some(
    (item) =>
      item.clientWidth > 0 &&
      item.scrollWidth > item.clientWidth + avatarOverlayBinding11,
  );
}
function countHiddenOlderNotifications(
  avatarOverlayOperand53,
  avatarOverlayOperand54,
  avatarOverlayOperand55,
) {
  let avatarOverlayBinding372 =
    avatarOverlayOperand55 +
    avatarOverlayOperand53.clientHeight -
    avatarOverlayBinding6;
  return avatarOverlayOperand54.filter(
    (item) => item.offsetTop + item.offsetHeight > avatarOverlayBinding372,
  ).length;
}
function getNotificationRowElements(avatarOverlayOperand67) {
  return Array.from(avatarOverlayOperand67.children).filter(
    (item) => item instanceof HTMLElement,
  );
}
function getNotificationScrollThreshold(
  avatarOverlayOperand68,
  avatarOverlayOperand69,
  avatarOverlayOperand70 = avatarOverlayOperand68.scrollTop,
) {
  return (
    avatarOverlayOperand70 +
    (avatarOverlayOperand69[0]?.offsetTop ?? 0) +
    avatarOverlayBinding6
  );
}
function findNotificationRowIndexAtOffset(
  avatarOverlayOperand63,
  avatarOverlayOperand64,
) {
  let avatarOverlayBinding377 = 0;
  for (
    let avatarOverlayBinding382 = 0;
    avatarOverlayBinding382 < avatarOverlayOperand63.length;
    avatarOverlayBinding382 += 1
  )
    avatarOverlayOperand63[avatarOverlayBinding382].offsetTop <=
      avatarOverlayOperand64 &&
      (avatarOverlayBinding377 = avatarOverlayBinding382);
  return avatarOverlayBinding377;
}
function AvatarOverlayStatusIcon(avatarOverlayOperand27) {
  switch (avatarOverlayOperand27.iconType) {
    case "check-circle":
      return avatarOverlayBinding3.jsx(
        worktreeNewThreadQueryCompatSlotLowerXLowerS,
        {
          className: avatarOverlayOperand27.iconClassName,
        },
      );
    case "clock":
      return avatarOverlayBinding3.jsx(appMainCurrentCompatSlotLowerALowerM, {
        className: avatarOverlayOperand27.iconClassName,
      });
    case "spinner":
      return avatarOverlayBinding3.jsx(
        worktreeNewThreadQueryCompatSlotUpperDLowerM,
        {
          className: avatarOverlayOperand27.iconClassName,
        },
      );
    case "warning":
      return avatarOverlayBinding3.jsx(appMainCurrentCompatSlotLowerRLowerM, {
        className: avatarOverlayOperand27.iconClassName,
      });
  }
}
var avatarOverlayBinding1,
  avatarOverlayBinding2,
  avatarOverlayBinding3,
  avatarOverlayBinding4,
  avatarOverlayBinding5,
  avatarOverlayBinding6,
  avatarOverlayBinding7,
  avatarOverlayBinding8,
  avatarOverlayBinding9,
  avatarOverlayBinding10,
  avatarOverlayBinding11,
  avatarOverlayBinding12,
  avatarOverlayBinding13,
  avatarOverlayBinding14 = once(() => {
    avatarOverlayBinding1 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    worktreeNewThreadQueryCompatSlotUpperXLowerM();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    avatarOverlayBinding2 = toEsModule(
      currentAppInitialSharedCompatSlotUnderscoreLowerC(),
      1,
    );
    intlFormatDateTimeRuntime();
    appServerDisconnectedAppServerSignal();
    initAvatarMascotButtonChunk();
    initBulletSeparatorChunk();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadOrchestratorCompatSlotUpperWLowerG();
    worktreeNewThreadQueryCompatSlotUpperOLowerM();
    worktreeNewThreadQueryCompatSlotLowerXLowerP();
    useComposedRefs();
    worktreeNewThreadQueryCompatSlotUpperSLowerS();
    worktreeNewThreadQueryCompatSlotUpperDLowerP();
    worktreeNewThreadQueryCompatSlotLowerPLowerH();
    appMainCurrentCompatSlotLowerOLowerM();
    projectHoverCardCurrentCompatSlotUpperT();
    appMainCurrentCompatSlotLowerILowerM();
    currentAppInitialSharedCompatSlotUnderscore();
    initAvatarOverlayPillChunk();
    initAvatarOverlayPillEmptyChunk();
    initAvatarOverlayNotificationSearchKeyChunk();
    initAvatarOverlayMascotWidthChunk();
    initAvatarOverlayActivityStatusChunk();
    initAvatarOverlayPillDismissButtonChunk();
    initAvatarOverlayPillActivityItemsChunk();
    initCompactWaitingRequestChunk();
    avatarOverlayBinding3 = currentAppInitialSharedCompatSlotLowerLLowerC();
    avatarOverlayBinding4 = createScopedSignalAtom({
      mascotLabel: {
        id: "petOverlay.mascotLabel",
        defaultMessage: "{petName} pet",
        description: "Accessible label for the floating Codex pet",
      },
      openNotification: {
        id: "avatarOverlay.openNotification",
        defaultMessage: "Open notification",
        description:
          "Accessible label for an actionable row in the floating avatar notification tray",
      },
      dismissNotification: {
        id: "avatarOverlay.dismissNotification",
        defaultMessage: "Dismiss {title}",
        description:
          "Accessible label for dismissing a notification in the floating avatar notification tray",
      },
      dismissNotificationTooltip: {
        id: "avatarOverlay.dismissNotificationTooltip",
        defaultMessage: "Dismiss",
        description:
          "Tooltip for the icon button that dismisses a floating avatar notification",
      },
      replyNotification: {
        id: "avatarOverlay.replyNotification",
        defaultMessage: "Reply to {title}",
        description:
          "Accessible label for replying to a floating avatar notification",
      },
      replyNotificationButton: {
        id: "avatarOverlay.replyNotificationButton",
        defaultMessage: "Reply",
        description:
          "Compact button label for replying to a floating avatar notification",
      },
      sendNotificationReply: {
        id: "avatarOverlay.sendNotificationReply",
        defaultMessage: "Send reply to {title}",
        description:
          "Accessible label for submitting a floating avatar notification reply",
      },
      notificationReplyPlaceholder: {
        id: "avatarOverlay.notificationReplyPlaceholder",
        defaultMessage: "Reply",
        description:
          "Placeholder for the one-line floating avatar notification reply input",
      },
      notificationReplyError: {
        id: "avatarOverlay.notificationReplyError",
        defaultMessage: "Unable to send reply",
        description:
          "Compact error shown when a floating avatar notification reply fails",
      },
      expandNotification: {
        id: "avatarOverlay.expandNotification",
        defaultMessage: "Expand {title}",
        description:
          "Accessible label for expanding a floating avatar notification row",
      },
      collapseNotification: {
        id: "avatarOverlay.collapseNotification",
        defaultMessage: "Collapse {title}",
        description:
          "Accessible label for collapsing a floating avatar notification row",
      },
      expandNotificationTooltip: {
        id: "avatarOverlay.expandNotificationTooltip",
        defaultMessage: "Expand",
        description:
          "Tooltip for the icon button that expands a floating avatar notification",
      },
      collapseNotificationTooltip: {
        id: "avatarOverlay.collapseNotificationTooltip",
        defaultMessage: "Collapse",
        description:
          "Tooltip for the icon button that collapses a floating avatar notification",
      },
      collapseNotificationTray: {
        id: "avatarOverlay.collapseNotificationTray",
        defaultMessage: "Collapse activity",
        description:
          "Accessible label and tooltip for the button that collapses the floating avatar activity tray",
      },
      resizeMascot: {
        id: "avatarOverlay.resizeMascot",
        defaultMessage: "Resize pet",
        description:
          "Accessible label for the handle that resizes the floating Codex pet",
      },
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description:
          "Accessible label for the list of floating avatar activity notifications",
      },
      latestNotifications: {
        id: "avatarOverlay.latestNotifications",
        defaultMessage: "Latest",
        description:
          "Label for the button that scrolls the floating avatar activity list back to the newest notifications",
      },
      showLatestNotifications: {
        id: "avatarOverlay.showLatestNotifications",
        defaultMessage: "Show latest activity",
        description:
          "Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications",
      },
      showOlderNotifications: {
        id: "avatarOverlay.showOlderNotifications",
        defaultMessage:
          "Show {count, plural, one {# older activity item} other {# older activity items}}",
        description:
          "Accessible label for the button that scrolls the floating avatar activity list toward older notifications",
      },
      olderNotificationCount: {
        id: "avatarOverlay.olderNotificationCount",
        defaultMessage: "{count, plural, one {# more} other {# more}}",
        description:
          "Label for the button that shows there are more floating avatar activity notifications below",
      },
      compactOlderNotificationCount: {
        id: "avatarOverlay.compactOlderNotificationCount",
        defaultMessage: "+{count}",
        description:
          "Compact label for the edge button that shows hidden floating avatar activity notifications",
      },
      questionStatusIcon: {
        id: "avatarOverlay.questionStatusIcon",
        defaultMessage: "Question",
        description:
          "Accessible label for a floating avatar notification waiting on a question answer",
      },
      compactPatchFileCount: {
        id: "avatarOverlay.compactPatchFileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
        description:
          "Compact file count for a patch request in the floating avatar notification tray",
      },
      compactPatchAdditions: {
        id: "avatarOverlay.compactPatchAdditions",
        defaultMessage: "+{count}",
        description:
          "Compact additions count for a patch request in the floating avatar notification tray",
      },
      compactPatchDeletions: {
        id: "avatarOverlay.compactPatchDeletions",
        defaultMessage: "-{count}",
        description:
          "Compact deletions count for a patch request in the floating avatar notification tray",
      },
    });
    avatarOverlayBinding5 = 2;
    avatarOverlayBinding6 = 2;
    avatarOverlayBinding7 = 0.035;
    avatarOverlayBinding8 = 32;
    avatarOverlayBinding9 = 84;
    avatarOverlayBinding10 = 512;
    avatarOverlayBinding11 = 1;
    avatarOverlayBinding12 =
      "group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]";
    avatarOverlayBinding13 =
      "!bg-token-main-surface-primary enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_94%,var(--color-token-foreground))]";
  });
export function AvatarOverlayPage() {
  let { selectedAvatar, selectedAvatarId } = useAvatarOverlaySelection(),
    avatarOverlayBinding298 = selectedAvatar == null,
    avatarOverlayBinding299,
    avatarOverlayBinding300;
  if (
    ((avatarOverlayBinding299 = () => {
      avatarOverlayBinding298 &&
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-pointer-interaction-changed",
          {
            isInteractive: false,
          },
        );
    }),
    (avatarOverlayBinding300 = [avatarOverlayBinding298]),
    avatarOverlayReact.useEffect(
      avatarOverlayBinding299,
      avatarOverlayBinding300,
    ),
    selectedAvatar == null)
  )
    return null;
  let avatarOverlayBinding301 = getAvatarOverlayReadinessKey(
    selectedAvatar,
    selectedAvatarId,
  );
  return avatarOverlayBinding16.jsx(
    AvatarOverlayController,
    {
      selectedAvatar,
      selectedAvatarId,
    },
    avatarOverlayBinding301,
  );
}
function AvatarOverlayController({ selectedAvatar, selectedAvatarId }) {
  let avatarOverlayBinding30 = currentAppInitialSharedCompatSlotUpperKLowerO(
      currentAppInitialSharedCompatSlotUpperE,
    ),
    avatarOverlayBinding31 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding32 = currentAppInitialSharedMember0781("451951815"),
    avatarOverlayBinding33 =
      currentAppInitialSharedCompatSlotLowerQLowerO(analyticsMember0137),
    avatarOverlayBinding34 = currentAppInitialSharedCompatSlotLowerQLowerO(
      avatarOverlayResizeButtonHiddenSignal,
    ),
    avatarOverlayBinding35 = avatarOverlayBinding19,
    avatarOverlayBinding36 =
      avatarOverlayBinding35.phase !== "inactive" && true;
  currentAppInitialSharedCompatSlotUpperGLowerO(
    currentAppInitialSharedMember0547,
    undefined,
  );
  let { data } = worktreeNewThreadQueryCompatSlotLowerSLowerC({
      enabled: avatarOverlayBinding36,
      hostId: undefined,
    }),
    avatarOverlayBinding37 = avatarOverlayBinding36,
    [avatarOverlayBinding38, avatarOverlayBinding39] =
      avatarOverlayReact.useState(avatarOverlayBinding29),
    [avatarOverlayBinding40, avatarOverlayBinding41] =
      avatarOverlayReact.useState(null),
    [avatarOverlayBinding42, avatarOverlayBinding43] =
      avatarOverlayReact.useState(true),
    [avatarOverlayBinding44, avatarOverlayBinding45] =
      avatarOverlayReact.useState(false),
    [avatarOverlayBinding46, avatarOverlayBinding47] =
      avatarOverlayReact.useState(false),
    [avatarOverlayBinding48, avatarOverlayBinding49] =
      avatarOverlayReact.useState(false),
    [avatarOverlayBinding50, avatarOverlayBinding51] =
      avatarOverlayReact.useState(null),
    { mascotWidthPx, setMascotWidthPx } = useAvatarOverlayMascotWidth(),
    [avatarOverlayBinding52, avatarOverlayBinding53] =
      avatarOverlayReact.useState(() => new Map()),
    [avatarOverlayBinding54, avatarOverlayBinding55] =
      avatarOverlayReact.useState(() => Date.now()),
    [avatarOverlayBinding56] = avatarOverlayReact.useState(() =>
      createFirstAwakeNotificationSeed(selectedAvatar, selectedAvatarId),
    ),
    { data: _data = [], refetch } = pullRequestNewThreadCompatSlotUpperD(),
    { data: __data = [], refetch: _refetch } =
      worktreeNewThreadQueryCompatSlotLowerMLowerF({
        taskFilter: "current",
        limit: 20,
      }),
    avatarOverlayBinding57 = buildAvatarOverlayPillActivityItems({
      includeCompactWaitingRequests: avatarOverlayBinding32,
      intl: avatarOverlayBinding31,
      localConversations: _data,
      excludedConversationId: null,
      remoteTasks: __data,
    }),
    avatarOverlayBinding58 =
      avatarOverlayBinding56 == null
        ? null
        : createFirstAwakeAvatarOverlayNotification({
            intl: avatarOverlayBinding31,
            petName: avatarOverlayBinding56.petName,
            startedAtMs: avatarOverlayBinding56.startedAtMs,
          }),
    avatarOverlayBinding59 = [],
    { nextNotificationExpiresAtMs, notifications } =
      collectAvatarOverlayNotifications({
        dismissedNotificationTurnKeys: avatarOverlayBinding52,
        extraNotifications: avatarOverlayBinding36
          ? [...[], ...avatarOverlayBinding59]
          : avatarOverlayBinding58 == null
            ? []
            : [avatarOverlayBinding58],
        nowMs: avatarOverlayBinding54,
        sessions: avatarOverlayBinding36 ? [] : avatarOverlayBinding57,
      }),
    avatarOverlayBinding60 = buildAvatarOverlayNotificationSearchKey(
      notifications,
      avatarOverlayBinding31,
    ),
    avatarOverlayBinding61 = avatarOverlayBinding57.some(
      (item) => item.source !== "cloud" && item.status === "running",
    ),
    avatarOverlayBinding62 = avatarOverlayBinding57.some(
      (item) => item.source === "cloud" && item.status === "running",
    ),
    avatarOverlayBinding63 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding64 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding65 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding66 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding67 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding68 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding69 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding70 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding71 = avatarOverlayReact.useRef(false),
    avatarOverlayBinding72 = avatarOverlayReact.useCallback(
      (
        avatarOverlayOperand23,
        avatarOverlayOperand24,
        avatarOverlayOperand25,
        avatarOverlayOperand26 = avatarOverlayBinding42,
      ) => {
        avatarOverlayBinding33.logProductEvent(
          currentAppInitialSharedMember0097,
          avatarOverlayAnalytics({
            action: avatarOverlayOperand23,
            hasRunningCloudSession: avatarOverlayBinding62,
            hasRunningLocalSession: avatarOverlayBinding61,
            isNotificationTrayOpen: avatarOverlayOperand26,
            notification: avatarOverlayOperand25,
            notificationCount: notifications.length,
            selectedAvatar,
            source: avatarOverlayOperand24,
          }),
        );
      },
      [
        avatarOverlayBinding61,
        avatarOverlayBinding62,
        avatarOverlayBinding42,
        notifications.length,
        avatarOverlayBinding33,
        selectedAvatar,
      ],
    );
  avatarOverlayReact.useEffect(() => {
    if (avatarOverlayBinding56 == null) return;
    let avatarOverlayBinding375 = createSignalGetterAtom(
      avatarOverlayBinding18,
      [],
    );
    avatarOverlayBinding375.includes(avatarOverlayBinding56.avatarId) ||
      currentAppInitialSharedFunction0034(avatarOverlayBinding18, [
        ...avatarOverlayBinding375,
        avatarOverlayBinding56.avatarId,
      ]);
  }, [avatarOverlayBinding56]);
  avatarOverlayReact.useEffect(() => {
    avatarOverlayBinding71.current ||
      (avatarOverlayBinding33 !== extractJsonSchemaRequiredFields &&
        ((avatarOverlayBinding71.current = true),
        avatarOverlayBinding72(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
        )));
  }, [avatarOverlayBinding33, avatarOverlayBinding72]);
  useFloatingWindowPointerInteractivity({
    interactiveRegionRef: avatarOverlayBinding69,
    isPaused: () =>
      avatarOverlayBinding63.current != null ||
      avatarOverlayBinding64.current != null,
    onInteractiveChange: (avatarOverlayOperand50) => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-pointer-interaction-changed",
        {
          isInteractive: avatarOverlayOperand50,
        },
      );
    },
    regionElementSelectors: avatarOverlayBinding20,
  });
  let avatarOverlayBinding73 = avatarOverlayReact.useCallback(() => {
      if (
        avatarOverlayBinding64.current != null ||
        avatarOverlayBinding67.current != null
      )
        return;
      let avatarOverlayBinding344 = measureAvatarOverlayElements(
        avatarOverlayBinding69.current,
      );
      if (avatarOverlayBinding344 == null) return;
      let avatarOverlayBinding345 = {
        ...avatarOverlayBinding344,
        isTrayVisible:
          (avatarOverlayBinding42 && notifications.length > 0) ||
          avatarOverlayBinding35.caption != null,
      };
      areOverlayElementMeasurementsEqual(
        avatarOverlayBinding70.current,
        avatarOverlayBinding345,
      ) ||
        ((avatarOverlayBinding70.current = avatarOverlayBinding345),
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-element-size-changed",
          {
            isTrayVisible: avatarOverlayBinding345.isTrayVisible,
            mascot: avatarOverlayBinding345.mascot,
            tray: avatarOverlayBinding345.tray,
          },
        ));
    }, [
      avatarOverlayBinding42,
      notifications.length,
      avatarOverlayBinding35.caption,
    ]),
    avatarOverlayBinding74 = avatarOverlayReact.useCallback(() => {
      avatarOverlayBinding68.current != null &&
        (window.clearTimeout(avatarOverlayBinding68.current),
        (avatarOverlayBinding68.current = null));
    }, []),
    avatarOverlayBinding75 = avatarOverlayReact.useCallback(() => {
      avatarOverlayBinding65.current != null &&
        (window.cancelAnimationFrame(avatarOverlayBinding65.current),
        (avatarOverlayBinding65.current = null));
      avatarOverlayBinding66.current = null;
    }, []),
    avatarOverlayBinding76 = avatarOverlayReact.useCallback(
      (avatarOverlayOperand28) => {
        avatarOverlayBinding66.current = avatarOverlayOperand28;
        avatarOverlayBinding65.current ??= window.requestAnimationFrame(() => {
          avatarOverlayBinding65.current = null;
          let avatarOverlayBinding354 = avatarOverlayBinding66.current;
          avatarOverlayBinding66.current = null;
          !(
            avatarOverlayBinding354 == null ||
            avatarOverlayBinding64.current == null
          ) &&
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "avatar-overlay-mascot-resize-move",
              {
                width: avatarOverlayBinding354,
              },
            );
        });
      },
      [],
    ),
    avatarOverlayBinding77 = avatarOverlayReact.useCallback(
      (avatarOverlayOperand39) => {
        avatarOverlayBinding67.current = avatarOverlayOperand39;
        avatarOverlayBinding74();
        avatarOverlayBinding68.current = window.setTimeout(() => {
          avatarOverlayBinding68.current = null;
          avatarOverlayBinding67.current = null;
          avatarOverlayBinding51(null);
          avatarOverlayBinding73();
        }, 100);
      },
      [avatarOverlayBinding74, avatarOverlayBinding73],
    ),
    avatarOverlayBinding78 = avatarOverlayReact.useCallback(
      () =>
        measureElementSize(
          avatarOverlayBinding69.current?.querySelector(
            avatarMascotRootSelector,
          ) ?? null,
        )?.width ??
        mascotWidthPx ??
        112,
      [mascotWidthPx],
    ),
    avatarOverlayBinding79 = avatarOverlayReact.useCallback(
      (avatarOverlayOperand37, avatarOverlayOperand38) => {
        let avatarOverlayBinding364 = avatarOverlayBinding64.current;
        avatarOverlayBinding364 == null ||
          avatarOverlayBinding364.pointerId !== avatarOverlayOperand37 ||
          ((avatarOverlayBinding64.current = null),
          avatarOverlayBinding47(false),
          avatarOverlayOperand38?.hasPointerCapture?.(avatarOverlayOperand37) &&
            avatarOverlayOperand38.releasePointerCapture?.(
              avatarOverlayOperand37,
            ));
      },
      [],
    ),
    avatarOverlayBinding80 = avatarOverlayReact.useCallback(
      (avatarOverlayOperand29, avatarOverlayOperand30) => {
        let avatarOverlayBinding351 = avatarOverlayBinding64.current;
        if (
          avatarOverlayBinding351 == null ||
          avatarOverlayBinding351.pointerId !== avatarOverlayOperand29
        )
          return;
        let avatarOverlayBinding352 =
          avatarOverlayOperand30 == null
            ? avatarOverlayBinding351.currentWidthPx
            : getMascotWidthFromResizeDrag(
                avatarOverlayBinding351,
                avatarOverlayOperand30,
              );
        avatarOverlayBinding351.currentWidthPx = avatarOverlayBinding352;
        avatarOverlayBinding75();
        avatarOverlayBinding51(avatarOverlayBinding352);
        setMascotWidthPx(avatarOverlayBinding352);
        avatarOverlayBinding77(avatarOverlayBinding352);
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-mascot-resize-end",
          {
            width: avatarOverlayBinding352,
          },
        );
      },
      [avatarOverlayBinding75, setMascotWidthPx, avatarOverlayBinding77],
    ),
    avatarOverlayBinding81 = avatarOverlayReact.useCallback(
      (
        avatarOverlayOperand10,
        {
          releaseSample,
          shouldPreserveOrbMomentum = false,
          shouldOpenMainWindow,
        },
      ) => {
        let avatarOverlayBinding270 = avatarOverlayBinding63.current;
        if (
          avatarOverlayBinding270 == null ||
          avatarOverlayBinding270.pointerId !== avatarOverlayOperand10
        )
          return;
        avatarOverlayBinding63.current = null;
        avatarOverlayBinding45(false);
        avatarOverlayBinding41(null);
        let {
          hasMoved,
          releaseSample: _releaseSample,
          velocity,
        } = resolveAvatarOverlayPointerDragRelease(
          avatarOverlayBinding270,
          releaseSample,
          shouldPreserveOrbMomentum && avatarOverlayBinding270.usesOrbPhysics,
        );
        if (
          (avatarOverlayBinding69.current?.hasPointerCapture?.(
            avatarOverlayOperand10,
          ) &&
            avatarOverlayBinding69.current.releasePointerCapture?.(
              avatarOverlayOperand10,
            ),
          hasMoved &&
            !avatarOverlayBinding270.hasMoved &&
            _releaseSample != null &&
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "avatar-overlay-drag-move",
              {
                pointerScreenX: _releaseSample.screenX,
                pointerScreenY: _releaseSample.screenY,
              },
            ),
          shouldOpenMainWindow &&
            avatarOverlayBinding270.startedOnMascot &&
            !hasMoved &&
            (avatarOverlayBinding72(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "open-current-main-window",
              {},
            )),
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-drag-end",
            {
              pointerScreenX:
                _releaseSample?.screenX ?? avatarOverlayBinding270.screenX,
              pointerScreenY:
                _releaseSample?.screenY ?? avatarOverlayBinding270.screenY,
            },
          ),
          hasMoved &&
            avatarOverlayBinding72(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED,
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
          velocity != null)
        ) {
          let avatarOverlayBinding357 = avatarOverlayBinding270.usesOrbPhysics
            ? 3
            : 1;
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-drag-release",
            {
              shouldBounce: avatarOverlayBinding270.usesOrbPhysics,
              velocityX: velocity.x * avatarOverlayBinding357,
              velocityY: velocity.y * avatarOverlayBinding357,
            },
          );
        }
      },
      [avatarOverlayBinding36, undefined, null, avatarOverlayBinding72],
    ),
    avatarOverlayBinding82 = (event) => {
      event.button !== 0 ||
        !(event.target instanceof Element) ||
        event.target.closest(".no-drag") != null ||
        (event.preventDefault(),
        event.currentTarget.setPointerCapture?.(event.pointerId),
        (avatarOverlayBinding63.current = {
          startedOnMascot:
            event.target.closest('[data-avatar-mascot="true"]') != null,
          hasMoved: false,
          pointerId: event.pointerId,
          samples: [createAvatarOverlayPointerSample(event)],
          screenX: event.screenX,
          screenY: event.screenY,
          usesOrbPhysics: avatarOverlayBinding37,
        }),
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-drag-start",
          {
            pointerScreenX: event.screenX,
            pointerScreenY: event.screenY,
            pointerWindowX: event.clientX,
            pointerWindowY: event.clientY,
            usesOrbPhysics: avatarOverlayBinding37,
          },
        ),
        avatarOverlayBinding45(true),
        avatarOverlayBinding41(null));
    },
    avatarOverlayBinding83 = (event) => {
      let avatarOverlayBinding332 = avatarOverlayBinding63.current;
      if (
        avatarOverlayBinding332 == null ||
        avatarOverlayBinding332.pointerId !== event.pointerId
      )
        return;
      let avatarOverlayBinding333 = createAvatarOverlayPointerSample(event);
      avatarOverlayBinding332.samples = trimRecentAvatarOverlayPointerSamples([
        ...avatarOverlayBinding332.samples,
        avatarOverlayBinding333,
      ]);
      let avatarOverlayBinding334 =
          avatarOverlayBinding333.screenX - avatarOverlayBinding332.screenX,
        avatarOverlayBinding335 =
          avatarOverlayBinding333.screenY - avatarOverlayBinding332.screenY;
      (Math.abs(avatarOverlayBinding334) < 4 &&
        Math.abs(avatarOverlayBinding335) < 4) ||
        ((avatarOverlayBinding332.hasMoved = true),
        (avatarOverlayBinding332.screenX = avatarOverlayBinding333.screenX),
        (avatarOverlayBinding332.screenY = avatarOverlayBinding333.screenY),
        avatarOverlayBinding41((avatarOverlayOperand84) =>
          getMascotDragAnimationState({
            currentDragState: avatarOverlayOperand84,
            deltaX: avatarOverlayBinding334,
          }),
        ),
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-drag-move",
          {
            pointerScreenX: avatarOverlayBinding333.screenX,
            pointerScreenY: avatarOverlayBinding333.screenY,
          },
        ));
    },
    avatarOverlayBinding84 = (event) => {
      avatarOverlayBinding81(event.pointerId, {
        releaseSample: createAvatarOverlayPointerSample(event),
        shouldOpenMainWindow: true,
      });
    },
    avatarOverlayBinding85 = (event) => {
      avatarOverlayBinding81(event.pointerId, {
        shouldPreserveOrbMomentum: true,
        shouldOpenMainWindow: false,
      });
    },
    avatarOverlayBinding86 = (event) => {
      avatarOverlayBinding81(event.pointerId, {
        shouldPreserveOrbMomentum: true,
        shouldOpenMainWindow: false,
      });
    },
    avatarOverlayBinding87 = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let avatarOverlayBinding340 = avatarOverlayBinding78();
      avatarOverlayBinding74();
      avatarOverlayBinding75();
      avatarOverlayBinding67.current = null;
      avatarOverlayBinding64.current = {
        currentWidthPx: avatarOverlayBinding340,
        pointerId: event.pointerId,
        startScreenX: event.screenX,
        startWidthPx: avatarOverlayBinding340,
      };
      avatarOverlayBinding51(avatarOverlayBinding340);
      avatarOverlayBinding47(true);
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-mascot-resize-start",
        {
          width: avatarOverlayBinding340,
        },
      );
    },
    avatarOverlayBinding88 = (event) => {
      let avatarOverlayBinding359 = avatarOverlayBinding64.current;
      if (
        avatarOverlayBinding359 == null ||
        avatarOverlayBinding359.pointerId !== event.pointerId
      )
        return;
      event.preventDefault();
      event.stopPropagation();
      let avatarOverlayBinding360 = getMascotWidthFromResizeDrag(
        avatarOverlayBinding359,
        event.screenX,
      );
      avatarOverlayBinding359.currentWidthPx = avatarOverlayBinding360;
      avatarOverlayBinding51(avatarOverlayBinding360);
      avatarOverlayBinding76(avatarOverlayBinding360);
    },
    avatarOverlayBinding89 = (event) => {
      avatarOverlayBinding80(event.pointerId, event.screenX);
      avatarOverlayBinding79(event.pointerId, event.currentTarget);
    },
    avatarOverlayBinding90 = (event) => {
      event.stopPropagation();
      avatarOverlayBinding80(event.pointerId);
      avatarOverlayBinding79(event.pointerId, event.currentTarget);
    },
    handleResizeLostPointerCapture = (event) => {
      avatarOverlayBinding80(event.pointerId);
      avatarOverlayBinding79(event.pointerId);
    },
    avatarOverlayBinding91 = (avatarOverlayOperand5, avatarOverlayOperand6) => {
      let avatarOverlayBinding223 = avatarOverlayOperand5.waitingRequest;
      if (
        avatarOverlayOperand5.localConversationId != null &&
        avatarOverlayOperand6 != null
      ) {
        let avatarOverlayBinding242 = avatarOverlayOperand5.localConversationId;
        switch (avatarOverlayOperand6.intent) {
          case "command-approval":
            if (
              avatarOverlayOperand6.commandDecision != null &&
              (avatarOverlayBinding223?.kind === "exec" ||
                avatarOverlayBinding223?.kind === "network")
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-command-execution-approval-decision",
                {
                  conversationId: avatarOverlayBinding242,
                  requestId: avatarOverlayBinding223.requestId,
                  decision: avatarOverlayOperand6.commandDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "file-approval":
            if (
              avatarOverlayOperand6.fileDecision != null &&
              avatarOverlayBinding223?.kind === "patch"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-file-change-approval-decision",
                {
                  conversationId: avatarOverlayBinding242,
                  requestId: avatarOverlayBinding223.requestId,
                  decision: avatarOverlayOperand6.fileDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "permission-response":
            if (
              avatarOverlayOperand6.permissionResponse != null &&
              avatarOverlayBinding223?.kind === "permission"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-permissions-request-approval-response",
                {
                  conversationId: avatarOverlayBinding242,
                  requestId: avatarOverlayBinding223.requestId,
                  response: avatarOverlayOperand6.permissionResponse,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "mcp-elicitation":
            if (
              avatarOverlayOperand6.mcpElicitationAction != null &&
              avatarOverlayBinding223?.kind === "tool"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-mcp-server-elicitation-response",
                {
                  conversationId: avatarOverlayBinding242,
                  requestId: avatarOverlayBinding223.requestId,
                  response: currentAppInitialSharedAcceptDeclineCancelFunction(
                    avatarOverlayOperand6.mcpElicitationAction,
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
              avatarOverlayBinding223?.kind === "plan" &&
              avatarOverlayOperand6.planStartCollaborationMode != null
            ) {
              currentAppInitialSharedFunction0895(
                "update-thread-settings-for-next-turn",
                {
                  conversationId: avatarOverlayBinding242,
                  threadSettings: {
                    collaborationMode:
                      avatarOverlayOperand6.planStartCollaborationMode,
                  },
                },
              )
                .then(() =>
                  currentAppInitialSharedFunction0895(
                    "remove-plan-implementation-request",
                    {
                      conversationId: avatarOverlayBinding242,
                      turnId: avatarOverlayBinding223.turnId,
                    },
                  ),
                )
                .then(async () =>
                  currentAppInitialSharedFunction0895(
                    "send-follow-up-message",
                    {
                      conversationId: avatarOverlayBinding242,
                      prompt: `${currentAppInitialSharedMember0864}\n${avatarOverlayBinding223.planContent}`,
                      serviceTier:
                        await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(
                          avatarOverlayBinding30,
                          avatarOverlayBinding30.get(
                            currentAppInitialSharedMember0210,
                            avatarOverlayBinding242,
                          ) ?? "local",
                          avatarOverlayOperand6.planStartCollaborationMode
                            ?.settings.model ?? null,
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
      (avatarOverlayOperand6 != null &&
        avatarOverlayOperand6.intent !== "open") ||
        (avatarOverlayOperand5.action != null &&
          (avatarOverlayBinding72(
            currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
            currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            avatarOverlayOperand5,
          ),
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "open-in-main-window",
            {
              path: avatarOverlayOperand5.action.path,
            },
          )));
    },
    avatarOverlayBinding92 = (
      avatarOverlayOperand21,
      avatarOverlayOperand22,
    ) => {
      let avatarOverlayBinding350 = avatarOverlayOperand21.waitingRequest;
      avatarOverlayOperand21.localConversationId == null ||
        avatarOverlayBinding350?.kind !== "question" ||
        currentAppInitialSharedFunction0895("reply-with-user-input-response", {
          conversationId: avatarOverlayOperand21.localConversationId,
          requestId: avatarOverlayBinding350.requestId,
          response: {
            answers: {
              [avatarOverlayOperand22.questionId]: {
                answers: [avatarOverlayOperand22.label],
              },
            },
          },
        }).then(() => {
          refetch();
        });
    },
    avatarOverlayBinding93 = (avatarOverlayOperand31) => {
      avatarOverlayBinding72(
        currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        avatarOverlayOperand31,
      );
      avatarOverlayBinding53((avatarOverlayOperand47) => {
        if (
          avatarOverlayOperand47.get(avatarOverlayOperand31.id) ===
          avatarOverlayOperand31.turnKey
        )
          return avatarOverlayOperand47;
        let avatarOverlayBinding370 = new Map(avatarOverlayOperand47);
        return (
          avatarOverlayBinding370.set(
            avatarOverlayOperand31.id,
            avatarOverlayOperand31.turnKey,
          ),
          avatarOverlayBinding370
        );
      });
    },
    avatarOverlayBinding94 = async (
      avatarOverlayOperand15,
      avatarOverlayOperand16,
    ) => {
      if (
        avatarOverlayOperand15.controlTarget?.type !== "app-server-conversation"
      )
        return;
      let avatarOverlayBinding326 = avatarOverlayOperand16.trim();
      avatarOverlayBinding326.length !== 0 &&
        (avatarOverlayBinding72(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          avatarOverlayOperand15,
        ),
        await currentAppInitialSharedFunction0895("send-follow-up-message", {
          conversationId: avatarOverlayOperand15.controlTarget.conversationId,
          prompt: avatarOverlayBinding326,
          serviceTier:
            await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(
              avatarOverlayBinding30,
              avatarOverlayBinding30.get(
                currentAppInitialSharedMember0210,
                avatarOverlayOperand15.controlTarget.conversationId,
              ) ?? "local",
              null,
            ),
        }));
    },
    avatarOverlayBinding95 = avatarOverlayReact.useCallback(
      (avatarOverlayOperand58) => {
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-keyboard-interaction-changed",
          {
            isInteractive: avatarOverlayOperand58,
          },
        );
      },
      [],
    );
  return (
    currentAppInitialSharedCompatSlotLowerY(
      "avatar-overlay-layout-changed",
      ({ layout }) => {
        avatarOverlayBinding39(layout);
        avatarOverlayBinding67.current === layout.mascot.width &&
          ((avatarOverlayBinding67.current = null),
          avatarOverlayBinding74(),
          avatarOverlayBinding51(null),
          window.requestAnimationFrame(avatarOverlayBinding73));
      },
      [avatarOverlayBinding74, avatarOverlayBinding73],
    ),
    avatarOverlayReact.useLayoutEffect(() => {
      let avatarOverlayBinding353 =
        (!avatarOverlayBinding34 && avatarOverlayBinding48) ||
        avatarOverlayBinding46;
      return (
        document.documentElement.classList.toggle(
          avatarOverlayBinding27,
          avatarOverlayBinding353,
        ),
        document.body.classList.toggle(
          avatarOverlayBinding27,
          avatarOverlayBinding353,
        ),
        () => {
          document.documentElement.classList.remove(avatarOverlayBinding27);
          document.body.classList.remove(avatarOverlayBinding27);
        }
      );
    }, [
      avatarOverlayBinding34,
      avatarOverlayBinding48,
      avatarOverlayBinding46,
    ]),
    avatarOverlayReact.useEffect(
      () => () => {
        avatarOverlayBinding74();
        avatarOverlayBinding75();
      },
      [avatarOverlayBinding75, avatarOverlayBinding74],
    ),
    avatarOverlayReact.useEffect(() => {
      let avatarOverlayBinding324 = (event) => {
          avatarOverlayBinding81(event.pointerId, {
            releaseSample: createAvatarOverlayPointerSample(event),
            shouldOpenMainWindow: true,
          });
          avatarOverlayBinding80(event.pointerId, event.screenX);
          avatarOverlayBinding79(event.pointerId);
        },
        avatarOverlayBinding325 = (event) => {
          avatarOverlayBinding81(event.pointerId, {
            shouldPreserveOrbMomentum: true,
            shouldOpenMainWindow: false,
          });
          avatarOverlayBinding80(event.pointerId);
          avatarOverlayBinding79(event.pointerId);
        };
      return (
        window.addEventListener("pointerup", avatarOverlayBinding324),
        window.addEventListener("pointercancel", avatarOverlayBinding325),
        () => {
          window.removeEventListener("pointerup", avatarOverlayBinding324);
          window.removeEventListener("pointercancel", avatarOverlayBinding325);
        }
      );
    }, [
      avatarOverlayBinding80,
      avatarOverlayBinding81,
      avatarOverlayBinding79,
    ]),
    avatarOverlayReact.useLayoutEffect(() => {
      let avatarOverlayBinding336 = null,
        avatarOverlayBinding337 = () => {
          avatarOverlayBinding336 ??= window.requestAnimationFrame(() => {
            avatarOverlayBinding336 = null;
            avatarOverlayBinding73();
          });
        },
        avatarOverlayBinding338 = new ResizeObserver(avatarOverlayBinding337),
        avatarOverlayBinding339 = avatarOverlayBinding69.current;
      if (avatarOverlayBinding339 != null) {
        avatarOverlayBinding338.observe(avatarOverlayBinding339);
        for (let avatarOverlayBinding383 of getAvatarOverlayMeasuredElements(
          avatarOverlayBinding339,
        ))
          avatarOverlayBinding338.observe(avatarOverlayBinding383);
      }
      return (
        window.addEventListener("resize", avatarOverlayBinding337),
        avatarOverlayBinding337(),
        () => {
          avatarOverlayBinding336 != null &&
            window.cancelAnimationFrame(avatarOverlayBinding336);
          avatarOverlayBinding338.disconnect();
          window.removeEventListener("resize", avatarOverlayBinding337);
        }
      );
    }, [avatarOverlayBinding73, selectedAvatar.id, avatarOverlayBinding60]),
    avatarOverlayReact.useLayoutEffect(() => {
      avatarOverlayBinding73();
    }, [
      avatarOverlayBinding42,
      avatarOverlayBinding73,
      selectedAvatar.id,
      avatarOverlayBinding60,
      avatarOverlayBinding35.caption,
      mascotWidthPx,
    ]),
    avatarOverlayReact.useEffect(() => {
      if (nextNotificationExpiresAtMs == null) return;
      let avatarOverlayBinding355 = Math.max(
          0,
          nextNotificationExpiresAtMs - Date.now(),
        ),
        avatarOverlayBinding356 = window.setTimeout(() => {
          avatarOverlayBinding55((avatarOverlayOperand85) =>
            Math.max(Date.now(), avatarOverlayOperand85 + 1),
          );
        }, avatarOverlayBinding355);
      return () => {
        window.clearTimeout(avatarOverlayBinding356);
      };
    }, [nextNotificationExpiresAtMs]),
    avatarOverlayReact.useEffect(() => {
      if (!avatarOverlayBinding61 && !avatarOverlayBinding62) return;
      let avatarOverlayBinding358 = window.setTimeout(() => {
        avatarOverlayBinding55((avatarOverlayOperand86) =>
          Math.max(Date.now(), avatarOverlayOperand86 + 1),
        );
        avatarOverlayBinding61 && refetch();
        avatarOverlayBinding62 && _refetch();
      }, avatarOverlayBinding17);
      return () => {
        window.clearTimeout(avatarOverlayBinding358);
      };
    }, [avatarOverlayBinding61, avatarOverlayBinding62, refetch, _refetch]),
    avatarOverlayBinding16.jsx(AvatarOverlaySurface, {
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
            avatarOverlayBinding72(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            );
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "avatar-overlay-close",
              {},
            );
          },
        },
      ],
      interactiveRegionRef: avatarOverlayBinding69,
      restrictedSurface: undefined,
      isDragging: avatarOverlayBinding44,
      isNotificationTrayOpen: avatarOverlayBinding42,
      layout: avatarOverlayBinding38,
      mascotDragState: avatarOverlayBinding40,
      mascotLayout:
        avatarOverlayBinding46 && avatarOverlayBinding50 != null
          ? {
              ...avatarOverlayBinding38.mascot,
              height: Math.ceil(
                avatarOverlayBinding50 / AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
              ),
              width: avatarOverlayBinding50,
            }
          : avatarOverlayBinding38.mascot,
      mascotResizeHandle: avatarOverlayBinding34
        ? undefined
        : {
            onLostPointerCapture: handleResizeLostPointerCapture,
            onPointerCancel: avatarOverlayBinding90,
            onPointerDown: avatarOverlayBinding87,
            onPointerEnter: () => {
              avatarOverlayBinding49(true);
            },
            onPointerLeave: () => {
              avatarOverlayBinding49(false);
            },
            onPointerMove: avatarOverlayBinding88,
            onPointerUp: avatarOverlayBinding89,
          },
      mascotStyle: createAvatarOverlayMascotWidthStyle(
        avatarOverlayBinding50 ?? mascotWidthPx,
      ),
      notifications,
      onCloseNotificationTray: () => {
        avatarOverlayBinding72(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          undefined,
          false,
        );
        avatarOverlayBinding43(false);
      },
      onLostPointerCapture: avatarOverlayBinding86,
      onPointerCancel: avatarOverlayBinding85,
      onPointerDown: avatarOverlayBinding82,
      onPointerMove: avatarOverlayBinding83,
      onPointerUp: avatarOverlayBinding84,
      onDismissNotification: avatarOverlayBinding93,
      onNotificationReplyEditorActiveChange: avatarOverlayBinding95,
      onOpenNotificationReply: (avatarOverlayOperand40) => {
        avatarOverlayBinding72(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          avatarOverlayOperand40,
        );
      },
      onRunNotificationAction: avatarOverlayBinding91,
      onSubmitQuestionOption: avatarOverlayBinding92,
      onSubmitNotificationReply: avatarOverlayBinding94,
      onOpenNotificationTray: () => {
        avatarOverlayBinding72(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          undefined,
          true,
        );
        avatarOverlayBinding43(true);
      },
    })
  );
}
function getMascotWidthFromResizeDrag(
  avatarOverlayOperand78,
  avatarOverlayOperand79,
) {
  return clampAvatarOverlayMascotWidth(
    avatarOverlayOperand78.startWidthPx +
      avatarOverlayOperand79 -
      avatarOverlayOperand78.startScreenX,
  );
}
function createFirstAwakeNotificationSeed(
  avatarOverlayOperand43,
  avatarOverlayOperand44,
) {
  return isSelectedCustomAvatarMissing(
    avatarOverlayOperand43,
    avatarOverlayOperand44,
  ) ||
    createSignalGetterAtom(avatarOverlayBinding18, []).includes(
      avatarOverlayOperand43.id,
    )
    ? null
    : {
        avatarId: avatarOverlayOperand43.id,
        petName: avatarOverlayOperand43.displayName,
        startedAtMs: Date.now(),
      };
}
function getAvatarOverlayReadinessKey(
  avatarOverlayOperand72,
  avatarOverlayOperand73,
) {
  return isSelectedCustomAvatarMissing(
    avatarOverlayOperand72,
    avatarOverlayOperand73,
  )
    ? "pending-custom-avatar"
    : "ready";
}
function getMascotDragAnimationState({ currentDragState, deltaX }) {
  return deltaX >= 4
    ? "running-right"
    : deltaX <= -4
      ? "running-left"
      : currentDragState;
}
function measureAvatarOverlayElements(avatarOverlayOperand42) {
  if (avatarOverlayOperand42 == null) return null;
  let avatarOverlayBinding367 = measureElementSize(
      avatarOverlayOperand42.querySelector(avatarMascotRootSelector),
    ),
    avatarOverlayBinding368 = measureNotificationTraySize(
      avatarOverlayOperand42.querySelector(avatarOverlayBinding21),
    );
  return avatarOverlayBinding367 == null
    ? null
    : {
        mascot: avatarOverlayBinding367,
        tray: avatarOverlayBinding368,
      };
}
function getAvatarOverlayMeasuredElements(avatarOverlayOperand74) {
  return Array.from(
    avatarOverlayOperand74.querySelectorAll(avatarOverlayBinding28.join(", ")),
  );
}
function measureElementSize(avatarOverlayOperand34) {
  if (
    avatarOverlayOperand34 == null ||
    isElementDisplayNone(avatarOverlayOperand34)
  )
    return null;
  let avatarOverlayBinding363 = avatarOverlayOperand34.getBoundingClientRect();
  return avatarOverlayBinding363.width <= 0 ||
    avatarOverlayBinding363.height <= 0
    ? null
    : {
        width: Math.ceil(avatarOverlayBinding363.width),
        height: Math.ceil(avatarOverlayBinding363.height),
      };
}
function measureNotificationTraySize(avatarOverlayOperand13) {
  if (
    avatarOverlayOperand13 == null ||
    isElementDisplayNone(avatarOverlayOperand13)
  )
    return null;
  let avatarOverlayBinding317 = avatarOverlayOperand13.getBoundingClientRect();
  if (avatarOverlayBinding317.width <= 0 || avatarOverlayBinding317.height <= 0)
    return null;
  let avatarOverlayBinding318 = Math.ceil(
      avatarOverlayOperand13.offsetWidth > 0
        ? avatarOverlayOperand13.offsetWidth
        : avatarOverlayBinding317.width,
    ),
    avatarOverlayBinding319 = avatarOverlayOperand13.querySelector(
      avatarOverlayBinding22,
    ),
    avatarOverlayBinding320 = avatarOverlayOperand13.querySelector(
      avatarOverlayBinding23,
    ),
    avatarOverlayBinding321 = avatarOverlayOperand13.querySelector(
      avatarOverlayBinding24,
    ),
    avatarOverlayBinding322 = avatarOverlayOperand13.querySelector(
      avatarOverlayBinding25,
    );
  if (
    avatarOverlayBinding319 == null ||
    (avatarOverlayBinding320 == null && avatarOverlayBinding321 == null)
  )
    return {
      width: avatarOverlayBinding318,
      height: Math.ceil(avatarOverlayBinding317.height),
    };
  let avatarOverlayBinding323 =
    avatarOverlayBinding320 != null &&
    (avatarOverlayBinding321 == null ? 0 : 1) +
      (avatarOverlayBinding322 == null ? 0 : 1) >
      1
      ? getComputedRowGap(avatarOverlayBinding320)
      : 0;
  return {
    width: avatarOverlayBinding318,
    height: Math.ceil(
      avatarOverlayBinding319.getBoundingClientRect().height +
        (avatarOverlayBinding321?.scrollHeight ?? 0) +
        (avatarOverlayBinding322 == null
          ? 0
          : avatarOverlayBinding322.getBoundingClientRect().height) +
        avatarOverlayBinding323,
    ),
  };
}
function getComputedRowGap(avatarOverlayOperand62) {
  let avatarOverlayBinding376 = Number.parseFloat(
    window.getComputedStyle(avatarOverlayOperand62).rowGap,
  );
  return Number.isFinite(avatarOverlayBinding376) ? avatarOverlayBinding376 : 0;
}
function areOverlayElementMeasurementsEqual(
  avatarOverlayOperand35,
  avatarOverlayOperand36,
) {
  return (
    avatarOverlayOperand35 != null &&
    avatarOverlayOperand35.isTrayVisible ===
      avatarOverlayOperand36.isTrayVisible &&
    avatarOverlayOperand35.mascot.width ===
      avatarOverlayOperand36.mascot.width &&
    avatarOverlayOperand35.mascot.height ===
      avatarOverlayOperand36.mascot.height &&
    areOptionalElementSizesEqual(
      avatarOverlayOperand35.tray,
      avatarOverlayOperand36.tray,
    )
  );
}
function areOptionalElementSizesEqual(
  avatarOverlayOperand51,
  avatarOverlayOperand52,
) {
  return (
    avatarOverlayOperand51 === avatarOverlayOperand52 ||
    (avatarOverlayOperand51 != null &&
      avatarOverlayOperand52 != null &&
      avatarOverlayOperand51.width === avatarOverlayOperand52.width &&
      avatarOverlayOperand51.height === avatarOverlayOperand52.height)
  );
}
function isElementDisplayNone(avatarOverlayOperand75) {
  return window.getComputedStyle(avatarOverlayOperand75).display === "none";
}
var avatarOverlayBinding15,
  avatarOverlayReact,
  avatarOverlayBinding16,
  avatarOverlayBinding17,
  avatarOverlayBinding18,
  avatarOverlayBinding19,
  avatarOverlayBinding20,
  avatarMascotRootSelector,
  avatarOverlayBinding21,
  avatarOverlayBinding22,
  avatarOverlayBinding23,
  avatarOverlayBinding24,
  avatarOverlayBinding25,
  avatarOverlayBinding26,
  avatarOverlayBinding27,
  avatarOverlayBinding28,
  avatarOverlayBinding29;
once(() => {
  avatarOverlayBinding15 = currentAppInitialSharedCompatSlotLowerGLowerC();
  remoteControlRefreshSourceEnum();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  avatarOverlayReact = toEsModule(
    currentAppInitialSharedCompatSlotUnderscoreLowerC(),
    1,
  );
  intlFormatDateTimeRuntime();
  pullRequestNewThreadCompatSlotLowerY();
  appServerDisconnectedAppServerSignal();
  currentAppInitialSharedRuntime0840();
  toolSuggestionAndConnectorSchema();
  currentAppInitialSharedImplementPlanImplementationRuntime();
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC();
  initAvatarOverlayOpenStateChunk();
  initAvatarSelectionStateChunk();
  worktreeNewThreadQueryCompatSlotUpperJLowerD();
  initFloatingWindowPointerInteractivityChunk();
  currentAppInitialSharedCompatSlotUnderscore();
  remoteConnectionRuntime0298();
  worktreeNewThreadQueryCompatSlotLowerILowerC();
  currentAppInitialSharedCompatSlotUpperD();
  currentAppInitialSharedDisplayRuntime();
  createSignalGetterAtom();
  initPersistedAtomStorageRuntime();
  initAvatarOverlayDebugStateChunk();
  initAvatarOverlayPointerDragChunk();
  avatarOverlayBinding14();
  initAvatarOverlayNotificationSearchKeyChunk();
  initAvatarOverlayMascotWidthChunk();
  initAvatarOverlayNotificationTrayChunk();
  initAvatarOverlayPillActivityItemsChunk();
  initUseAvatarOverlaySelectionChunk();
  avatarOverlayBinding16 = currentAppInitialSharedCompatSlotLowerLLowerC();
  avatarOverlayBinding17 = 15e3;
  avatarOverlayBinding18 = "first-awake-pet-notification-avatar-ids";
  avatarOverlayBinding19 = {
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
  avatarOverlayBinding20 = [
    "[data-avatar-overlay-hit-region]",
    "[data-avatar-mascot='true']",
  ];
  avatarMascotRootSelector = ".codex-avatar-root";
  avatarOverlayBinding21 = "[data-avatar-overlay-size='notification-tray']";
  avatarOverlayBinding22 =
    "[data-avatar-overlay-size='notification-tray-header']";
  avatarOverlayBinding23 =
    "[data-avatar-overlay-size='notification-tray-content']";
  avatarOverlayBinding24 =
    "[data-avatar-overlay-size='notification-tray-list']";
  avatarOverlayBinding25 =
    "[data-avatar-overlay-size='notification-tray-caption']";
  avatarOverlayBinding26 =
    "[data-avatar-overlay-measure='notification-tray-row']";
  avatarOverlayBinding27 = "codex-avatar-overlay-force-resize-cursor";
  avatarOverlayBinding28 = [
    avatarMascotRootSelector,
    avatarOverlayBinding21,
    avatarOverlayBinding22,
    avatarOverlayBinding23,
    avatarOverlayBinding24,
    avatarOverlayBinding25,
    avatarOverlayBinding26,
  ];
  avatarOverlayBinding29 = {
    mascot: {
      left: 244,
      top: 191,
      width: 112,
      height: 121,
    },
    placement: "top-end",
    tray: {
      left: 80,
      top: 56,
      width: 276,
      height: 131,
    },
    viewport: {
      width: 356,
      height: 320,
    },
  };
})();
