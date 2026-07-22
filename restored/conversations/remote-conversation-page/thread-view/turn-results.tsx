// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedMember0924 } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperCLowerS } from "../../../vendor/app-main-current-runtime";

import { RemoteConversationTurnActions } from "./turn-actions";

function remoteConversationPageUnit59(remoteConversationPageOperand33) {
  let { logs } = remoteConversationPageOperand33,
    remoteConversationPageBinding446 = React.createElement(
      appMainCurrentCompatSlotUpperCLowerS,
      {
        message: React.createElement(currentAppInitialSharedMember0924, {
          id: "remoteConversation.environmentSetup.running",
          defaultMessage: "Setting up environment",
          description:
            "Status shown while a cloud environment setup script is running",
        }),
      },
    );
  let remoteConversationPageBinding447 = logs
    .map(remoteConversationPageUnit60)
    .join("\n");
  return React.createElement(
    RemoteConversationTurnActions.remoteConversationPageUnit61,
    {
      title: remoteConversationPageBinding446,
      output: remoteConversationPageBinding447,
    },
  );
}

function remoteConversationPageUnit60(remoteConversationPageOperand110) {
  return remoteConversationPageOperand110.line;
}

export class RemoteConversationTurnResults {
  static remoteConversationPageUnit59 = remoteConversationPageUnit59;
  static remoteConversationPageUnit60 = remoteConversationPageUnit60;
}
