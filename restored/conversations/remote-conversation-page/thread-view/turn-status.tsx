// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedMember0924 } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperKLowerT as RemoteConversationShell } from "../../../vendor/app-main-current-runtime";

function remoteConversationPageUnit55(remoteConversationPageOperand108) {
  return remoteConversationPageOperand108.notification;
}

function remoteConversationPageUnit56(remoteConversationPageOperand37) {
  let { message } = remoteConversationPageOperand37,
    remoteConversationPageBinding467 =
      message ??
      React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.taskFailed",
        defaultMessage: "Task failed",
        description:
          "Fallback message shown when a selected cloud task attempt failed without a specific error message",
      });
  return (
    <RemoteConversationShell
      type="error"
      content={remoteConversationPageBinding467}
    />
  );
}

export class RemoteConversationTurnStatus {
  static remoteConversationPageUnit55 = remoteConversationPageUnit55;
  static remoteConversationPageUnit56 = remoteConversationPageUnit56;
}
