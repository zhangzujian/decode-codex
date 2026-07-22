// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import React from "react";

import { appMainCurrentCompatSlotLowerGLowerP } from "../../../../vendor/app-main-current-runtime/index";

import { CompactWaitingRequestActions } from "./compact-waiting-request-actions";

import { CompactWaitingRequestSummary } from "./compact-waiting-request-summary";
import type { CompactPlanRequestProps } from "./types";

export function CompactPlanRequest(
  avatarOverlayOperand11: CompactPlanRequestProps,
) {
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
    avatarOverlayBinding275 = React.createElement(
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
  let avatarOverlayBinding276 = React.createElement(avatarOverlayBinding272, {
    actions: avatarOverlayBinding273,
    onRunNotificationAction,
  });
  return (
    <div data-avatar-overlay-compact-waiting-request={avatarOverlayBinding274}>
      {avatarOverlayBinding275}
      {avatarOverlayBinding276}
    </div>
  );
}
