// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import React from "react";

import { worktreeNewThreadQueryCompatSlotLowerMLowerH } from "../../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { CompactPatchRequestSummary } from "./compact-patch-request-summary";

import { CompactPlanRequest } from "./compact-plan-request";

import { CompactWaitingRequestActions } from "./compact-waiting-request-actions";

import { CompactWaitingRequestSummary } from "./compact-waiting-request-summary";

import { mapQuestionOptionToAction } from "./map-question-option-to-action";
import type { CompactWaitingRequestBodyProps } from "./types";

export function CompactWaitingRequestBody(
  avatarOverlayOperand2: CompactWaitingRequestBodyProps,
) {
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
      let avatarOverlayBinding289 = React.createElement(
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
      let avatarOverlayBinding291 = React.createElement(
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
      let avatarOverlayBinding292 = React.createElement(
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
      return React.createElement(CompactPlanRequest, {
        isExpanded,
        localConversationId,
        onRunNotificationAction: avatarOverlayBinding187,
        request,
      });
    }
    case "exec": {
      let avatarOverlayBinding310 = React.createElement(
        CompactWaitingRequestSummary,
        {
          isExpanded,
          text: request.summary,
        },
      );
      let avatarOverlayBinding311 = React.createElement(
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
      let avatarOverlayBinding313 = React.createElement(
        CompactWaitingRequestSummary,
        {
          isExpanded,
          text: request.target,
        },
      );
      let avatarOverlayBinding314 = React.createElement(
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
      let avatarOverlayBinding307 = React.createElement(
        CompactWaitingRequestSummary,
        {
          isExpanded,
          text: request.target,
        },
      );
      let avatarOverlayBinding308 = React.createElement(
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
        avatarOverlayBinding304 = React.createElement(
          CompactWaitingRequestSummary,
          {
            isExpanded,
            text: avatarOverlayBinding303,
          },
        );
      let avatarOverlayBinding305 = React.createElement(
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
