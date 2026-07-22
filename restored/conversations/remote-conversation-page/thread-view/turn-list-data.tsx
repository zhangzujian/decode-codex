// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import {
  currentAppInitialSharedCompatSlotUpperBLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
} from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadOrchestratorCompatSlotUpperI,
  worktreeNewThreadOrchestratorCompatSlotLowerJLowerL,
  worktreeNewThreadOrchestratorCompatSlotUpperZLowerT,
} from "../../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

import {
  worktreeNewThreadQueryCompatSlotLowerALowerF,
  worktreeNewThreadQueryCompatSlotLowerCLowerD,
  worktreeNewThreadQueryCompatSlotUpperDLowerM,
  worktreeNewThreadQueryCompatSlotUpperILowerS,
  worktreeNewThreadQueryCompatSlotLowerLLowerD,
  worktreeNewThreadQueryCompatSlotUpperLLowerS,
  worktreeNewThreadQueryCompatSlotLowerSLowerD,
  worktreeNewThreadQueryCompatSlotLowerULowerD,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  currentAppInitialSharedMember0194,
  reactRouterMember0297,
  currentAppInitialSharedMember0924,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { useNullAppShellRef } from "../../../vendor/automations-page-current-runtime";

import { pullRequestNewThreadCompatSlotUpperSLowerN } from "../../../runtime/current-app-initial/pull-request-new-thread-runtime";

import {
  appMainCurrentCompatSlotLowerDLowerP,
  appMainCurrentCompatSlotUpperKLowerT as RemoteConversationShell,
  appMainCurrentCompatSlotLowerOLowerP,
} from "../../../vendor/app-main-current-runtime";

import {
  appgenLibraryHotDjo67r4nCompatSlotLowerT,
  appgenLibraryHotDjo67r4nCompatSlotUpperZ,
} from "../../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";

import { ThreadLayout } from "../../../runtime/current-app-initial/conversation-dialog-layer-runtime";

import { ChromeExtensionHeader } from "../../../browser/chrome-extension-header";

import { ThreadScrollLayout } from "../../../threads/thread-scroll-layout";

import { RemoteConversationProjectHeaderModule } from "../project-header";

import { RemoteConversationTurnContentModule } from "../turn-content";

import { remoteConversationPageBinding43 } from "./runtime-bindings-a";

import { RemoteConversationTurnListComponents } from "./turn-list";

import { RemoteConversationTurnState } from "./turn-state";

function remoteConversationPageUnit47(remoteConversationPageOperand2) {
  let {
      hostId,
      showComposer = true,
      conversationDetailLevel,
    } = remoteConversationPageOperand2,
    remoteConversationPageBinding76 =
      currentAppInitialSharedCompatSlotUpperKLowerO(reactRouterMember0297),
    { data, error, isLoading } = currentAppInitialSharedCompatSlotLowerQLowerO(
      worktreeNewThreadQueryCompatSlotLowerLLowerD,
    ),
    { isFetching, isLoading: _isLoading } =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadQueryCompatSlotLowerULowerD,
      ),
    remoteConversationPageBinding77 =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadQueryCompatSlotLowerSLowerD,
      ),
    remoteConversationPageBinding78 =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadQueryCompatSlotLowerCLowerD,
      ),
    remoteConversationPageBinding79 =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadOrchestratorCompatSlotUpperZLowerT,
      ),
    remoteConversationPageBinding80 = useNullAppShellRef(
      "chatgpt.supportsNewChatKeyShortcut",
    ),
    [remoteConversationPageBinding81, remoteConversationPageBinding82] =
      remoteConversationPageBinding43.useState(null),
    { taskId } = currentAppInitialSharedMember0194(),
    { mutate } = worktreeNewThreadQueryCompatSlotLowerALowerF(taskId ?? ""),
    remoteConversationPageBinding83 =
      remoteConversationPageBinding78 ?? data?.current_assistant_turn,
    remoteConversationPageBinding84 =
      remoteConversationPageBinding83?.environment,
    remoteConversationPageBinding85 =
      remoteConversationPageBinding83?.turn_status ?? null,
    remoteConversationPageBinding86 =
      remoteConversationPageBinding85 === "pending" ||
      remoteConversationPageBinding85 === "in_progress",
    remoteConversationPageBinding87 =
      remoteConversationPageBinding85 === "failed",
    remoteConversationPageBinding88 = appMainCurrentCompatSlotLowerDLowerP(),
    remoteConversationPageBinding89 =
      conversationDetailLevel ?? remoteConversationPageBinding88,
    remoteConversationPageBinding90 =
      remoteConversationPageBinding89 === appMainCurrentCompatSlotLowerOLowerP,
    remoteConversationPageBinding91 =
      RemoteConversationProjectHeaderModule.remoteConversationPageUnit22(
        data,
        remoteConversationPageBinding78,
        remoteConversationPageBinding77,
      );
  let remoteConversationPageBinding92 = remoteConversationPageBinding91,
    remoteConversationPageBinding93 = data?.task.has_unread_turn ?? false,
    remoteConversationPageBinding94,
    remoteConversationPageBinding95;
  remoteConversationPageBinding94 = () => {
    remoteConversationPageBinding93 && mutate();
  };
  remoteConversationPageBinding95 = [remoteConversationPageBinding93, mutate];
  remoteConversationPageBinding43.useEffect(
    remoteConversationPageBinding94,
    remoteConversationPageBinding95,
  );
  let remoteConversationPageBinding96 = (remoteConversationPageOperand64) => {
    taskId &&
      worktreeNewThreadQueryCompatSlotUpperILowerS({
        event: remoteConversationPageOperand64,
        href: `${currentAppInitialSharedCompatSlotUpperBLowerO}/tasks/${taskId}`,
        initiator: "open_in_browser_bridge",
      });
  };
  let remoteConversationPageBinding97 = remoteConversationPageBinding96,
    remoteConversationPageBinding98 =
      remoteConversationPageBinding43.useEffectEvent(
        RemoteConversationTurnState.remoteConversationPageUnit48,
      ),
    remoteConversationPageBinding99 = () => {
      remoteConversationPageBinding90 ||
        (data?.task.id &&
          remoteConversationPageBinding92 &&
          remoteConversationPageBinding98(
            data?.task.id ?? null,
            remoteConversationPageBinding92,
          ));
    };
  let remoteConversationPageBinding100 = data?.task.id,
    remoteConversationPageBinding101;
  remoteConversationPageBinding101 = [
    remoteConversationPageBinding90,
    remoteConversationPageBinding100,
    remoteConversationPageBinding92,
  ];
  remoteConversationPageBinding43.useEffect(
    remoteConversationPageBinding99,
    remoteConversationPageBinding101,
  );
  let remoteConversationPageBinding102 = (remoteConversationPageOperand106) => {
    remoteConversationPageBinding80.current = remoteConversationPageOperand106;
    remoteConversationPageBinding82(remoteConversationPageOperand106);
  };
  let remoteConversationPageBinding103 =
      pullRequestNewThreadCompatSlotUpperSLowerN(
        remoteConversationPageBinding102,
      ),
    remoteConversationPageBinding104 = data?.task.title ?? undefined,
    remoteConversationPageBinding105 = React.createElement(
      worktreeNewThreadQueryCompatSlotUpperLLowerS,
      {
        extension: true,
      },
      React.createElement(ChromeExtensionHeader, {
        title: remoteConversationPageBinding104,
      }),
    );
  let remoteConversationPageBinding106 = React.createElement(
    worktreeNewThreadQueryCompatSlotUpperLLowerS,
    {
      extension: true,
    },
    React.createElement(
      RemoteConversationTurnState.remoteConversationPageUnit49,
      {
        taskDetails: data,
      },
    ),
  );
  let remoteConversationPageBinding107 =
    remoteConversationPageBinding92 &&
    taskId &&
    remoteConversationPageBinding78?.id &&
    !remoteConversationPageBinding90 &&
    React.createElement(
      RemoteConversationTurnContentModule.remoteConversationPageUnit8,
      {
        turnId: remoteConversationPageBinding78.id,
        diff: remoteConversationPageBinding92,
        taskEnvironment: remoteConversationPageBinding84,
      },
    );
  let remoteConversationPageBinding108 = remoteConversationPageBinding87 && (
    <div className="p-2">
      <RemoteConversationShell
        type="error"
        content={React.createElement(currentAppInitialSharedMember0924, {
          id: "codex.remoteConversation.turnFailed",
          defaultMessage: "An error occurred during this task",
          description:
            "Error banner shown when the current cloud task turn failed",
        })}
        primaryCtaText={
          <div className="flex items-center gap-1">
            {React.createElement(currentAppInitialSharedMember0924, {
              id: "codex.remoteConversation.openInWeb",
              defaultMessage: "Open in web",
              description: "Open task in Codex web button",
            })}
          </div>
        }
        onPrimaryCtaClick={remoteConversationPageBinding97}
      />
    </div>
  );
  let remoteConversationPageBinding109 = showComposer &&
    remoteConversationPageBinding85 != null && (
      <div
        className="contents"
        data-thread-find-composer="true"
        onMouseDownCapture={() => {
          worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(
            remoteConversationPageBinding76,
            "conversation",
          );
        }}
        onFocusCapture={() => {
          worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(
            remoteConversationPageBinding76,
            "conversation",
          );
        }}
      >
        {React.createElement(appgenLibraryHotDjo67r4nCompatSlotLowerT, {
          isResponseInProgress: remoteConversationPageBinding86,
          showFooterBranchWhen: "always",
        })}
      </div>
    );
  let remoteConversationPageBinding110 = (
    <div className="flex flex-col gap-2">
      {remoteConversationPageBinding107}
      {remoteConversationPageBinding108}
      {remoteConversationPageBinding109}
    </div>
  );
  let remoteConversationPageBinding111 = error && (
    <div className="py-2">
      {React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.errorWithMessage",
        defaultMessage: "Error: {message}",
        description:
          "Error display on the remote conversation page including the message",
        values: {
          message: error.message,
        },
      })}
    </div>
  );
  let remoteConversationPageBinding112 = data ? (
    React.createElement(
      RemoteConversationTurnListComponents.RemoteConversationTurnList,
      {
        hostId,
        turns: remoteConversationPageBinding77,
        unifiedDiff: remoteConversationPageBinding92,
        taskId: taskId ?? null,
        turnsLoading: _isLoading || isFetching,
        focusedAssistantId: remoteConversationPageBinding83?.id ?? null,
        conversationDetailLevel: remoteConversationPageBinding89,
        hideCodeBlocks: remoteConversationPageBinding90,
      },
    )
  ) : isLoading ? (
    <div className="flex min-h-full w-full items-center justify-center">
      {React.createElement(worktreeNewThreadQueryCompatSlotUpperDLowerM, null)}
    </div>
  ) : null;
  let remoteConversationPageBinding113 = (
    <div className="flex flex-col gap-1.5 pt-2">
      {remoteConversationPageBinding111}
      {remoteConversationPageBinding112}
    </div>
  );
  let remoteConversationPageBinding114 = React.createElement(
    worktreeNewThreadOrchestratorCompatSlotUpperI,
    {
      key: taskId,
    },
  );
  let threadScrollContent = React.createElement(
    ThreadScrollLayout,
    {
      hasLiveMcpAppFrame: remoteConversationPageBinding79,
      footer: remoteConversationPageBinding110,
    },
    remoteConversationPageBinding113,
    remoteConversationPageBinding114,
  );
  let remoteConversationPageBinding115 = React.createElement(
    ThreadLayout,
    {
      containerRef: remoteConversationPageBinding103,
      bodyClassName: "[&_[data-thread-find-target=conversation]]:scroll-mt-24",
      "data-vscode-context": '{"chatgpt.supportsNewChatMenu": true}',
      header: remoteConversationPageBinding105,
      banner: remoteConversationPageBinding106,
    },
    threadScrollContent,
  );
  return React.createElement(
    appgenLibraryHotDjo67r4nCompatSlotUpperZ,
    {
      value: remoteConversationPageBinding81,
    },
    remoteConversationPageBinding115,
  );
}

export class RemoteConversationTurnListData {
  static remoteConversationPageUnit47 = remoteConversationPageUnit47;
}
