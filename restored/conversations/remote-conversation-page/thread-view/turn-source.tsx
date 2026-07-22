// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedMember0924 } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { RemoteConversationTurnActions } from "./turn-actions";

function remoteConversationPageUnit57(remoteConversationPageOperand34) {
  let { logs } = remoteConversationPageOperand34,
    remoteConversationPageBinding453 = React.createElement(
      currentAppInitialSharedMember0924,
      {
        id: "remoteConversation.environmentSetup.failed",
        defaultMessage: "Environment setup failed",
        description: "Status shown when a cloud environment setup script fails",
      },
    );
  let remoteConversationPageBinding454 = logs
    .map(remoteConversationPageUnit58)
    .join("\n");
  return React.createElement(
    RemoteConversationTurnActions.remoteConversationPageUnit61,
    {
      title: remoteConversationPageBinding453,
      output: remoteConversationPageBinding454,
    },
  );
}

function remoteConversationPageUnit58(remoteConversationPageOperand109) {
  return remoteConversationPageOperand109.line;
}

export class RemoteConversationTurnSource {
  static remoteConversationPageUnit57 = remoteConversationPageUnit57;
  static remoteConversationPageUnit58 = remoteConversationPageUnit58;
}
