// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { worktreeNewThreadQueryCompatSlotLowerYLowerP } from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { currentAppInitialSharedMember0924 } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperXLowerT } from "../../../vendor/app-main-current-runtime";

import { InfoCircleIcon } from "../../../runtime/renderer-error-boundary-runtime";

import { RemoteConversationTurnMetadata } from "./turn-metadata";

function remoteConversationPageUnit48(
  remoteConversationPageOperand120,
  remoteConversationPageOperand121,
) {}

function remoteConversationPageUnit49(remoteConversationPageOperand24) {
  let { taskDetails } = remoteConversationPageOperand24,
    remoteConversationPageBinding400 = taskDetails && (
      <a
        className="group flex items-center justify-center gap-1 bg-token-text-link-foreground/20 py-1.5 text-sm text-token-foreground focus:!outline-none"
        href={`https://chatgpt.com/codex/tasks/${taskDetails.task.id}`}
      >
        {React.createElement(appMainCurrentCompatSlotUpperXLowerT, {
          className: "icon-2xs",
        })}
        {React.createElement(
          currentAppInitialSharedMember0924,
          {
            id: "codex.remoteConversation.codexCloudTask",
            defaultMessage: "You are viewing a <u>Codex cloud</u> task",
            description:
              "Label indicating that you are viewing a Codex cloud task, not a local task",
            values: {
              u: RemoteConversationTurnMetadata.remoteConversationPageUnit51,
            },
          },
          RemoteConversationTurnMetadata.remoteConversationPageUnit50,
        )}
        {React.createElement(
          worktreeNewThreadQueryCompatSlotLowerYLowerP,
          {
            tooltipContent: (
              <div className="max-w-[120px]">
                {React.createElement(currentAppInitialSharedMember0924, {
                  id: "codex.remoteConversation.viewPreviousTurns",
                  defaultMessage: "Open in web",
                  description: "Tooltip for opening the task in Codex web",
                })}
              </div>
            ),
          },
          React.createElement(InfoCircleIcon, {
            className: "icon-2xs",
          }),
        )}
      </a>
    );
  return <>{remoteConversationPageBinding400}</>;
}

export class RemoteConversationTurnState {
  static remoteConversationPageUnit48 = remoteConversationPageUnit48;
  static remoteConversationPageUnit49 = remoteConversationPageUnit49;
}
