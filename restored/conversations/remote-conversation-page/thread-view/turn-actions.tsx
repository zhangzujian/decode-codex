// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedMember0924 } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  appMainCurrentCompatSlotLowerOLowerN,
  appMainCurrentCompatSlotUpperTLowerI,
} from "../../../vendor/app-main-current-runtime";

function remoteConversationPageUnit61(remoteConversationPageOperand23) {
  let { title, output } = remoteConversationPageOperand23,
    remoteConversationPageBinding392 =
      output.length > 0 ? (
        React.createElement(
          appMainCurrentCompatSlotLowerOLowerN,
          {
            className: "text-sm",
          },
          output,
        )
      ) : (
        <span className="text-token-input-placeholder-foreground">
          {React.createElement(currentAppInitialSharedMember0924, {
            id: "remoteConversation.environmentSetup.output.empty",
            defaultMessage: "Waiting for output…",
            description:
              "Placeholder text before cloud environment setup output starts streaming",
          })}
        </span>
      );
  let remoteConversationPageBinding393 = remoteConversationPageBinding392,
    remoteConversationPageBinding394 = (
      <div className="text-sm text-token-description-foreground">{title}</div>
    );
  let remoteConversationPageBinding395 = [
    {
      key: "cloud-environment-setup-output",
      node: remoteConversationPageBinding393,
    },
  ];
  let remoteConversationPageBinding396 = {
    preview: "500px",
    expanded: "500px",
    collapsed: "0px",
  };
  let remoteConversationPageBinding397 = React.createElement(
    appMainCurrentCompatSlotUpperTLowerI,
    {
      items: remoteConversationPageBinding395,
      allowHorizontalScroll: true,
      className:
        "text-size-code min-h-[180px] overflow-x-auto rounded-lg border border-token-border bg-token-editor-background p-3 font-mono text-sm whitespace-pre text-token-input-placeholder-foreground",
      contentClassName: "gap-0",
      maxHeightByState: remoteConversationPageBinding396,
    },
  );
  return (
    <div className="mb-4 flex flex-col gap-3">
      {remoteConversationPageBinding394}
      {remoteConversationPageBinding397}
    </div>
  );
}

function remoteConversationPageUnit62(remoteConversationPageOperand76) {
  return remoteConversationPageOperand76
    .flatMap((item) =>
      item.content.filter((_item) => _item.content_type === "text"),
    )
    .map((item) => item.text)
    .join("");
}

export class RemoteConversationTurnActions {
  static remoteConversationPageUnit61 = remoteConversationPageUnit61;
  static remoteConversationPageUnit62 = remoteConversationPageUnit62;
}
