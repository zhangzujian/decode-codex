// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { RemoteConversationTurnSummary } from "./turn-summary";

function remoteConversationPageUnit65(remoteConversationPageOperand43) {
  let { attachments } = remoteConversationPageOperand43,
    remoteConversationPageBinding485 = attachments.map(
      remoteConversationPageUnit66,
    );
  return (
    <div className="flex flex-wrap gap-2 self-end">
      {remoteConversationPageBinding485}
    </div>
  );
}

function remoteConversationPageUnit66(
  remoteConversationPageOperand89,
  remoteConversationPageOperand90,
) {
  return React.createElement(
    RemoteConversationTurnSummary.remoteConversationPageUnit67,
    {
      key: `${remoteConversationPageOperand89.asset_pointer}-${remoteConversationPageOperand90}`,
      asset: remoteConversationPageOperand89,
    },
  );
}

export class RemoteConversationTurnSelection {
  static remoteConversationPageUnit65 = remoteConversationPageUnit65;
  static remoteConversationPageUnit66 = remoteConversationPageUnit66;
}
