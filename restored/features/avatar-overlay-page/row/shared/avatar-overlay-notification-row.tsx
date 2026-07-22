// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedCompatSlotUpperGLowerO } from "../../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadQueryCompatSlotUpperELowerP,
  worktreeNewThreadQueryCompatSlotLowerILowerH,
  worktreeNewThreadQueryCompatSlotLowerMLowerH,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotLowerYLowerP,
} from "../../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  currentAppInitialSharedMember0547,
  currentAppInitialSharedFunction0375,
} from "../../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { projectHoverCardCurrentCompatSlotLowerW } from "../../../../runtime/current-app-initial/project-hover-card-current-runtime";

import {
  getLatestAvatarOverlayActivitySubtitle,
  getAvatarOverlayActivityStatusConfig,
  getWaitingRequestSearchText,
  AvatarOverlayPillDismissButton,
  observeElementSize,
} from "../../../avatar-overlay-pill";

import { AvatarOverlaySharedModule } from "../../shared";

import { AvatarOverlayStatusIcon } from "./avatar-overlay-status-icon";

import { CompactWaitingRequestBody } from "./compact-waiting-request-body";

import { hasHorizontallyOverflowingContent } from "./has-horizontally-overflowing-content";
import type { AvatarOverlayNotificationRowProps } from "./types";

export function AvatarOverlayNotificationRow({
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
}: AvatarOverlayNotificationRowProps) {
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
        : `${notification.title}. ${avatarOverlayBinding106}. ${avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.openNotification)}`,
    avatarOverlayBinding108 = notification.action != null,
    avatarOverlayBinding109 =
      notification.kind !== "activity" && onDismissNotification != null,
    [avatarOverlayBinding110, avatarOverlayBinding111] =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding112, avatarOverlayBinding113] =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding114, avatarOverlayBinding115] =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useState(""),
    [avatarOverlayBinding116, avatarOverlayBinding117] =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useState(null),
    [avatarOverlayBinding118, avatarOverlayBinding119] =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding120, avatarOverlayBinding121] =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useState(0),
    [avatarOverlayBinding122, avatarOverlayBinding123] =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    avatarOverlayBinding124 =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useRef(
        avatarOverlayBinding110,
      ),
    avatarOverlayBinding125 =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useRef(undefined),
    avatarOverlayBinding126 =
      avatarOverlayBinding103 == null
        ? AvatarOverlaySharedModule.avatarOverlayBinding8
        : AvatarOverlaySharedModule.avatarOverlayBinding9,
    avatarOverlayBinding127 =
      AvatarOverlaySharedModule.avatarOverlayBinding2.useCallback(
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
  AvatarOverlaySharedModule.avatarOverlayBinding2.useLayoutEffect(() => {
    avatarOverlayBinding124.current = avatarOverlayBinding110;
  }, [avatarOverlayBinding110]);
  let avatarOverlayBinding128 =
      avatarOverlayBinding120 >
        avatarOverlayBinding126 +
          AvatarOverlaySharedModule.avatarOverlayBinding11 ||
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
              AvatarOverlaySharedModule.avatarOverlayBinding4
                .notificationReplyError,
            ),
          );
        } finally {
          avatarOverlayBinding113(false);
        }
      }
    };
  return React.createElement(
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
            delay:
              Math.min(notificationIndex, 3) *
              AvatarOverlaySharedModule.avatarOverlayBinding7,
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
    },
    <div
      className={worktreeNewThreadQueryCompatSlotLowerMLowerH(
        "relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]",
        avatarOverlayBinding108 &&
          "transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-token-border/80 hover:bg-token-main-surface-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(0,0,0,0.1)] motion-reduce:transition-none",
      )}
    >
      {React.createElement(
        worktreeNewThreadQueryCompatSlotLowerILowerH.div,
        {
          role: avatarOverlayBinding108 ? "button" : undefined,
          className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
            "block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]",
            avatarOverlayBinding109 ? "pl-5" : "pl-3",
            avatarOverlayBinding108 ? "cursor-interaction" : "cursor-default",
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
            avatarOverlayBinding108 && onRunNotificationAction?.(notification);
          },
          onKeyDown: (event) => {
            !avatarOverlayBinding108 ||
              (event.key !== "Enter" && event.key !== " ") ||
              (event.preventDefault(), onRunNotificationAction?.(notification));
          },
        },
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
        React.createElement(
          worktreeNewThreadQueryCompatSlotLowerILowerH.div,
          {
            ref: avatarOverlayBinding127,
            animate: {
              maxHeight: avatarOverlayBinding129
                ? AvatarOverlaySharedModule.avatarOverlayBinding10
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
          },
          avatarOverlayBinding103 == null
            ? avatarOverlayBinding102
            : React.createElement(CompactWaitingRequestBody, {
                isExpanded: avatarOverlayBinding129,
                localConversationId: avatarOverlayBinding97,
                request: avatarOverlayBinding103,
                onRunNotificationAction: (avatarOverlayOperand76) => {
                  onRunNotificationAction?.(
                    notification,
                    avatarOverlayOperand76,
                  );
                },
                onSubmitQuestionOption: (avatarOverlayOperand77) => {
                  onSubmitQuestionOption?.(
                    notification,
                    avatarOverlayOperand77,
                  );
                },
              }),
        ),
      )}
      <span
        role="img"
        aria-label={
          avatarOverlayBinding103?.kind === "question"
            ? avatarOverlayBinding96.formatMessage(
                AvatarOverlaySharedModule.avatarOverlayBinding4
                  .questionStatusIcon,
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
          ? React.createElement(projectHoverCardCurrentCompatSlotLowerW, {
              className: avatarOverlayBinding100.iconClassName,
            })
          : AvatarOverlayStatusIcon(avatarOverlayBinding100)}
      </span>
      {avatarOverlayBinding128
        ? React.createElement(
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
            },
            React.createElement(
              worktreeNewThreadQueryCompatSlotLowerYLowerP,
              {
                align: "end",
                side: "top",
                tooltipContent: avatarOverlayBinding96.formatMessage(
                  avatarOverlayBinding110
                    ? AvatarOverlaySharedModule.avatarOverlayBinding4
                        .collapseNotificationTooltip
                    : AvatarOverlaySharedModule.avatarOverlayBinding4
                        .expandNotificationTooltip,
                ),
              },
              React.createElement(
                worktreeNewThreadQueryCompatSlotUpperTLowerM,
                {
                  className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
                    "size-6",
                    AvatarOverlaySharedModule.avatarOverlayBinding13,
                  ),
                  color: "ghost",
                  size: "icon",
                  "aria-expanded": avatarOverlayBinding110,
                  "aria-label": avatarOverlayBinding96.formatMessage(
                    avatarOverlayBinding110
                      ? AvatarOverlaySharedModule.avatarOverlayBinding4
                          .collapseNotification
                      : AvatarOverlaySharedModule.avatarOverlayBinding4
                          .expandNotification,
                    {
                      title: notification.title,
                    },
                  ),
                  onClick: () => {
                    avatarOverlayBinding111(
                      (avatarOverlayOperand90) => !avatarOverlayOperand90,
                    );
                  },
                },
                React.createElement(
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
                  },
                  React.createElement(
                    worktreeNewThreadQueryCompatSlotUpperELowerP,
                    {
                      className: "icon-xs",
                    },
                  ),
                ),
              ),
            ),
          )
        : null}
      {avatarOverlayBinding130 && !isReplying
        ? React.createElement(
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
            },
            <div className="flex justify-end pb-1">
              {React.createElement(
                worktreeNewThreadQueryCompatSlotUpperTLowerM,
                {
                  className: worktreeNewThreadQueryCompatSlotLowerMLowerH(
                    "h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]",
                    AvatarOverlaySharedModule.avatarOverlayBinding13,
                  ),
                  color: "outline",
                  size: "default",
                  "aria-label": avatarOverlayBinding96.formatMessage(
                    AvatarOverlaySharedModule.avatarOverlayBinding4
                      .replyNotification,
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
                },
                avatarOverlayBinding96.formatMessage(
                  AvatarOverlaySharedModule.avatarOverlayBinding4
                    .replyNotificationButton,
                ),
              )}
            </div>,
          )
        : null}
      {isReplying
        ? React.createElement(
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
            },
            <div className="flex min-w-0 items-center gap-1.5">
              <input
                ref={replyInputRef}
                className="text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border"
                aria-label={avatarOverlayBinding96.formatMessage(
                  AvatarOverlaySharedModule.avatarOverlayBinding4
                    .replyNotification,
                  {
                    title: notification.title,
                  },
                )}
                autoFocus={true}
                placeholder={avatarOverlayBinding96.formatMessage(
                  AvatarOverlaySharedModule.avatarOverlayBinding4
                    .notificationReplyPlaceholder,
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
              {React.createElement(
                worktreeNewThreadQueryCompatSlotUpperTLowerM,
                {
                  className: "h-6 px-2 text-xs",
                  color: "primary",
                  size: "default",
                  type: "submit",
                  "aria-label": avatarOverlayBinding96.formatMessage(
                    AvatarOverlaySharedModule.avatarOverlayBinding4
                      .sendNotificationReply,
                    {
                      title: notification.title,
                    },
                  ),
                  disabled:
                    avatarOverlayBinding131.length === 0 ||
                    avatarOverlayBinding112,
                  loading: avatarOverlayBinding112,
                },
                avatarOverlayBinding96.formatMessage(
                  AvatarOverlaySharedModule.avatarOverlayBinding4
                    .replyNotificationButton,
                ),
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
        {React.createElement(
          worktreeNewThreadQueryCompatSlotLowerYLowerP,
          {
            align: "start",
            side: "top",
            tooltipContent: avatarOverlayBinding96.formatMessage(
              AvatarOverlaySharedModule.avatarOverlayBinding4
                .dismissNotificationTooltip,
            ),
          },
          React.createElement(AvatarOverlayPillDismissButton, {
            ariaLabel: avatarOverlayBinding96.formatMessage(
              AvatarOverlaySharedModule.avatarOverlayBinding4
                .dismissNotification,
              {
                title: notification.title,
              },
            ),
            onClick: () => {
              onDismissNotification?.(notification);
            },
          }),
        )}
      </div>
    ) : null,
  );
}
