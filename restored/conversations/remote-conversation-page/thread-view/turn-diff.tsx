// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedCompatSlotLowerTLowerA } from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadQueryCompatSlotLowerPLowerF,
  worktreeNewThreadQueryCompatSlotLowerSLowerC,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  buildUserPromptSubmitMessage,
  currentAppInitialSharedMember0924,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperR } from "../../../vendor/app-main-current-runtime";

import { RemoteConversationDataModule } from "../data";

import { RemoteConversationTurnResults } from "./turn-results";

import { RemoteConversationTurnSource } from "./turn-source";

import { RemoteConversationTurnStatus } from "./turn-status";

function remoteConversationPageUnit53(remoteConversationPageOperand7) {
  let {
    hostId,
    taskId,
    userTurn,
    assistantTurn,
    conversationDetailLevel,
    fallbackDiff,
  } = remoteConversationPageOperand7;
  let remoteConversationPageBinding198 = {
    taskId,
    turnId: assistantTurn.id,
    turnStatus: assistantTurn.turn_status,
    keepStreamOpenAfterCompletion: false,
  };
  let { setupLogs, threadEvents } =
      RemoteConversationDataModule.remoteConversationPageUnit46(
        remoteConversationPageBinding198,
      ),
    remoteConversationPageBinding199 =
      RemoteConversationDataModule.remoteConversationPageUnit25(assistantTurn);
  let remoteConversationPageBinding200 = remoteConversationPageBinding199,
    remoteConversationPageBinding201 =
      RemoteConversationDataModule.remoteConversationPageUnit27({
        turnStatus: assistantTurn.turn_status,
        storedEvents: remoteConversationPageBinding200,
        liveEvents: threadEvents,
        preserveLiveImageGenerationEvents: false,
      }).map(RemoteConversationTurnStatus.remoteConversationPageUnit55);
  let remoteConversationPageBinding202 = remoteConversationPageBinding201,
    remoteConversationPageBinding203 =
      assistantTurn.error?.code === "startup_script_failed",
    remoteConversationPageBinding204 = {
      enabled: remoteConversationPageBinding203,
    };
  let { data } = worktreeNewThreadQueryCompatSlotLowerPLowerF(
      taskId,
      assistantTurn.id,
      remoteConversationPageBinding204,
    ),
    remoteConversationPageBinding205 =
      data == null
        ? setupLogs
        : data.logs.flatMap(remoteConversationPageUnit54);
  let remoteConversationPageBinding206 = remoteConversationPageBinding205,
    remoteConversationPageBinding207 =
      assistantTurn.turn_status === "failed" &&
      remoteConversationPageBinding203,
    remoteConversationPageBinding208 =
      remoteConversationPageBinding202.length === 0 &&
      (assistantTurn.turn_status === "pending" ||
        assistantTurn.turn_status === "in_progress"),
    remoteConversationPageBinding209 = {
      hostId,
    };
  let { data: _data = [] } = worktreeNewThreadQueryCompatSlotLowerSLowerC(
    remoteConversationPageBinding209,
  );
  let remoteConversationPageBinding211 = _data,
    remoteConversationPageBinding212 = taskId ?? assistantTurn.id,
    remoteConversationPageBinding213 =
      RemoteConversationDataModule.remoteConversationPageUnit29({
        taskId: remoteConversationPageBinding212,
        userTurn,
        assistantTurn,
        threadEvents: remoteConversationPageBinding202,
        fallbackDiff,
        includeUserMessage: false,
      });
  let remoteConversationPageBinding214 = remoteConversationPageBinding213,
    remoteConversationPageBinding215 = buildUserPromptSubmitMessage(
      remoteConversationPageBinding214,
      [],
    );
  let remoteConversationPageBinding216 = remoteConversationPageBinding215,
    remoteConversationPageBinding217 = remoteConversationPageBinding207
      ? React.createElement(
          RemoteConversationTurnSource.remoteConversationPageUnit57,
          {
            logs: remoteConversationPageBinding206,
          },
        )
      : remoteConversationPageBinding208
        ? React.createElement(
            RemoteConversationTurnResults.remoteConversationPageUnit59,
            {
              logs: remoteConversationPageBinding206,
            },
          )
        : React.createElement(appMainCurrentCompatSlotUpperR, {
            conversationId: currentAppInitialSharedCompatSlotLowerTLowerA(
              taskId ?? assistantTurn.id,
            ),
            hostId,
            turnSearchKey: `assistant:${assistantTurn.id}`,
            turn: remoteConversationPageBinding214,
            turnState: remoteConversationPageBinding216,
            conversationDetailLevel,
            cwd: null,
            resolvedApps: remoteConversationPageBinding211,
            reportEntityType: "task",
            modelProvider: null,
          });
  let remoteConversationPageBinding218 =
    assistantTurn.turn_status === "cancelled" ? (
      <div className="text-secondary px-4 text-sm">
        {React.createElement(currentAppInitialSharedMember0924, {
          id: "codex.remoteConversation.turnStatus.cancelled",
          defaultMessage: "Cancelled",
          description: "Status label for a cloud task turn that was cancelled.",
        })}
      </div>
    ) : null;
  let remoteConversationPageBinding219 =
    assistantTurn.turn_status === "failed" && !remoteConversationPageBinding203
      ? React.createElement(
          RemoteConversationTurnStatus.remoteConversationPageUnit56,
          {
            message: assistantTurn.error?.message ?? null,
          },
        )
      : null;
  return (
    <>
      {remoteConversationPageBinding217}
      {remoteConversationPageBinding218}
      {remoteConversationPageBinding219}
    </>
  );
}

function remoteConversationPageUnit54(event, remoteConversationPageOperand69) {
  return event.key.type === "UserSetupScript"
    ? [
        {
          id: `stored:${remoteConversationPageOperand69}`,
          createdAt: event.key.created_at ?? "",
          line: event.line,
        },
      ]
    : [];
}

export class RemoteConversationTurnDiff {
  static remoteConversationPageUnit53 = remoteConversationPageUnit53;
  static remoteConversationPageUnit54 = remoteConversationPageUnit54;
}
