// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { once } from "../../../../runtime/commonjs-interop";

import {
  currentAppInitialSharedCompatSlotUpperBLowerO,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUpperVLowerO,
} from "../../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadQueryCompatSlotLowerALowerD,
  worktreeNewThreadQueryCompatSlotLowerCLowerD,
  worktreeNewThreadQueryCompatSlotUpperDLowerN,
  worktreeNewThreadQueryCompatSlotUpperELowerM,
  worktreeNewThreadQueryCompatSlotUpperILowerS,
  worktreeNewThreadQueryCompatSlotLowerLLowerD,
  worktreeNewThreadQueryCompatSlotUpperNLowerN,
  worktreeNewThreadQueryCompatSlotLowerNLowerS,
  worktreeNewThreadQueryCompatSlotUpperOLowerN,
  worktreeNewThreadQueryCompatSlotUpperPLowerN,
  worktreeNewThreadQueryCompatSlotLowerSLowerD,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotLowerXLowerP,
  worktreeNewThreadQueryCompatSlotLowerYLowerP,
} from "../../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  intlFormatDateTimeRuntime,
  currentAppInitialSharedMember0924,
} from "../../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  initAppgenProjectHeaderChunk,
  AppgenProjectHeader,
} from "../../../../appgen/project-header";

import { RemoteConversationProjectHeaderModule } from "../../project-header";

import { RemoteConversationPullRequestModule } from "../../pull-request";

function remoteConversationPageUnit24() {
  let remoteConversationPageBinding292 =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadQueryCompatSlotLowerLLowerD,
      ),
    remoteConversationPageBinding293 =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadQueryCompatSlotLowerSLowerD,
      ),
    remoteConversationPageBinding294 =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadQueryCompatSlotLowerCLowerD,
      ),
    remoteConversationPageBinding295 = remoteConversationPageBinding292.data,
    remoteConversationPageBinding296 =
      remoteConversationPageBinding295?.task.id,
    remoteConversationPageBinding297 =
      remoteConversationPageBinding296 == null
        ? null
        : `${currentAppInitialSharedCompatSlotUpperBLowerO}/tasks/${remoteConversationPageBinding296}`,
    remoteConversationPageBinding298 =
      remoteConversationPageBinding295?.current_diff_task_turn,
    remoteConversationPageBinding299 =
      remoteConversationPageBinding295?.current_assistant_turn,
    remoteConversationPageBinding300 =
      remoteConversationPageBinding295?.task.external_pull_requests ?? [];
  let remoteConversationPageBinding301 = remoteConversationPageBinding300,
    remoteConversationPageBinding302 =
      RemoteConversationProjectHeaderModule.remoteConversationPageUnit22(
        remoteConversationPageBinding295,
        remoteConversationPageBinding294,
        remoteConversationPageBinding293,
      );
  let remoteConversationPageBinding303 = remoteConversationPageBinding302,
    remoteConversationPageBinding304 =
      remoteConversationPageBinding294?.id ??
      remoteConversationPageBinding298?.id ??
      null,
    remoteConversationPageBinding305 =
      remoteConversationPageBinding294?.environment ??
      (remoteConversationPageBinding294?.id ===
      remoteConversationPageBinding298?.id
        ? remoteConversationPageBinding298?.environment
        : undefined) ??
      (remoteConversationPageBinding294 == null ||
      remoteConversationPageBinding294.id ===
        remoteConversationPageBinding299?.id
        ? remoteConversationPageBinding299?.environment
        : undefined),
    remoteConversationPageBinding306 =
      remoteConversationPageBinding295?.task.title ?? null,
    remoteConversationPageBinding307 = remoteConversationPageBinding296 ?? null,
    remoteConversationPageBinding308 = React.createElement(
      RemoteConversationProjectHeaderModule.remoteConversationPageUnit21,
      {
        conversationId: remoteConversationPageBinding307,
      },
    );
  let remoteConversationPageBinding309 =
    remoteConversationPageBinding303 && remoteConversationPageBinding304
      ? React.createElement(
          RemoteConversationPullRequestModule.remoteConversationPageUnit14,
          {
            turnId: remoteConversationPageBinding304,
            diff: remoteConversationPageBinding303,
            taskEnvironment: remoteConversationPageBinding305,
          },
        )
      : null;
  let remoteConversationPageBinding310 = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerYLowerP,
    {
      tooltipContent: React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.viewPreviousTurns.buttonTooltip",
        defaultMessage: "Open in web",
        description: "Open task in Codex web button",
      }),
    },
    React.createElement(
      worktreeNewThreadQueryCompatSlotUpperTLowerM,
      {
        color: "outline",
        size: "toolbar",
        onClick: (remoteConversationPageOperand82) => {
          remoteConversationPageBinding297 != null &&
            worktreeNewThreadQueryCompatSlotUpperILowerS({
              event: remoteConversationPageOperand82,
              href: remoteConversationPageBinding297,
              initiator: "open_in_browser_bridge",
            });
        },
      },
      React.createElement(worktreeNewThreadQueryCompatSlotUpperNLowerN, {
        className: "icon-2xs",
        ExternalIcon: worktreeNewThreadQueryCompatSlotUpperDLowerN,
        href: remoteConversationPageBinding297 ?? "https://chatgpt.com/codex",
      }),
      React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.viewPreviousTurns.buttonText",
        defaultMessage: "Open",
        description: "Open task in Codex web button text",
      }),
    ),
  );
  let remoteConversationPageBinding311 = remoteConversationPageBinding296
    ? React.createElement(
        RemoteConversationPullRequestModule.PullRequestActionButton,
        {
          taskId: remoteConversationPageBinding296,
          turns: remoteConversationPageBinding293,
          selectedTurn: remoteConversationPageBinding294,
          diffTaskTurn: remoteConversationPageBinding298 ?? null,
          pullRequests: remoteConversationPageBinding301,
        },
      )
    : null;
  let remoteConversationPageBinding312 = (
    <div className="flex items-center gap-2">
      {remoteConversationPageBinding309}
      {remoteConversationPageBinding310}
      {remoteConversationPageBinding311}
    </div>
  );
  return React.createElement(AppgenProjectHeader, {
    start: remoteConversationPageBinding306,
    startActions: remoteConversationPageBinding308,
    trailing: remoteConversationPageBinding312,
  });
}

var remoteConversationPageBinding30;

var remoteConversationPageBinding31;

var remoteConversationPageBinding32 = once(() => {
  remoteConversationPageBinding30 =
    currentAppInitialSharedCompatSlotLowerGLowerC();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  intlFormatDateTimeRuntime();
  worktreeNewThreadQueryCompatSlotUpperELowerM();
  worktreeNewThreadQueryCompatSlotLowerNLowerS();
  worktreeNewThreadQueryCompatSlotUpperPLowerN();
  worktreeNewThreadQueryCompatSlotLowerXLowerP();
  worktreeNewThreadQueryCompatSlotUpperOLowerN();
  initAppgenProjectHeaderChunk();
  RemoteConversationPullRequestModule.remoteConversationPageBinding19();
  worktreeNewThreadQueryCompatSlotLowerALowerD();
  RemoteConversationPullRequestModule.remoteConversationPageBinding25();
  RemoteConversationProjectHeaderModule.remoteConversationPageBinding28();
  RemoteConversationProjectHeaderModule.remoteConversationPageBinding29();
  remoteConversationPageBinding31 =
    currentAppInitialSharedCompatSlotLowerLLowerC();
});

export class RemoteConversationHeaderData {
  static remoteConversationPageUnit24 = remoteConversationPageUnit24;
  static getBinding(index: number) {
    return [
      remoteConversationPageBinding30,
      remoteConversationPageBinding31,
      remoteConversationPageBinding32,
    ][index - 30];
  }
}
