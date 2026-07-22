// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import React from "react";

import { worktreeNewThreadQueryCompatSlotUpperTLowerM } from "../../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { getWaitingRequestActionButtonColor } from "./get-waiting-request-action-button-color";

import { stopPointerEventPropagation } from "./stop-pointer-event-propagation";
import type { CompactWaitingRequestActionsProps } from "./types";

export function CompactWaitingRequestActions(
  avatarOverlayOperand12: CompactWaitingRequestActionsProps,
) {
  let { actions, onRunNotificationAction } = avatarOverlayOperand12,
    avatarOverlayBinding295;
  {
    let avatarOverlayBinding316;
    avatarOverlayBinding316 = (avatarOverlayOperand14) =>
      React.createElement(
        worktreeNewThreadQueryCompatSlotUpperTLowerM,
        {
          key: avatarOverlayOperand14.ariaLabel ?? avatarOverlayOperand14.label,
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
        },
        <span className="truncate">{avatarOverlayOperand14.label}</span>,
      );
    avatarOverlayBinding295 = actions.map(avatarOverlayBinding316);
  }
  return (
    <div className="no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px">
      {avatarOverlayBinding295}
    </div>
  );
}
