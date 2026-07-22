// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import {
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
} from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadOrchestratorCompatSlotUpperGLowerL,
  worktreeNewThreadOrchestratorCompatSlotLowerJLowerL,
  worktreeNewThreadOrchestratorCompatSlotUpperO,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerL,
} from "../../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

import {
  worktreeNewThreadQueryCompatSlotLowerFLowerD,
  worktreeNewThreadQueryCompatSlotLowerMLowerD,
  worktreeNewThreadQueryCompatSlotLowerPLowerD,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { reactRouterMember0297 } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { ThreadAppShellSourceRegistration } from "../../../vendor/automations-page-current-runtime";

import { appMainCurrentCompatSlotLowerNLowerI } from "../../../vendor/app-main-current-runtime";

import { AppLoadingScreen } from "../../../runtime/current-app-initial/plugin-logo-card-runtime";

import {
  ThreadFindNavigationRail,
  useReviewSearchHighlights,
} from "../../../conversations/local-conversation-thread";

import { RemoteConversationDataModule } from "../data";

import { remoteConversationPageBinding43 } from "./runtime-bindings-a";

import { RemoteConversationTurnActions } from "./turn-actions";

import { RemoteConversationTurnDiff } from "./turn-diff";

import { RemoteConversationTurnSelection } from "./turn-selection";

import { RemoteConversationTurnTimestamps } from "./turn-timestamps";

function RemoteConversationTurnList({
  hostId,
  turns,
  unifiedDiff,
  taskId,
  turnsLoading,
  focusedAssistantId,
  conversationDetailLevel,
  hideCodeBlocks,
}) {
  let remoteConversationPageBinding221 =
      currentAppInitialSharedCompatSlotUpperKLowerO(reactRouterMember0297),
    remoteConversationPageBinding222 =
      worktreeNewThreadQueryCompatSlotLowerPLowerD(
        worktreeNewThreadQueryCompatSlotLowerFLowerD(turns),
        focusedAssistantId,
      ),
    remoteConversationPageBinding223 =
      remoteConversationPageBinding43.useRef(null),
    remoteConversationPageBinding224 = remoteConversationPageBinding43.useMemo(
      () => ({
        scrollToTurn: async (
          remoteConversationPageOperand47,
          remoteConversationPageOperand48,
        ) => {
          remoteConversationPageOperand48?.signal?.aborted ||
            (await worktreeNewThreadOrchestratorCompatSlotUpperO(),
            !remoteConversationPageOperand48?.signal?.aborted &&
              (remoteConversationPageUnit52(
                remoteConversationPageBinding223,
                remoteConversationPageOperand47,
              )?.scrollIntoView({
                block: "center",
                behavior: "smooth",
              }),
              await worktreeNewThreadOrchestratorCompatSlotUpperO()));
        },
        getTurnContainer: (remoteConversationPageOperand122) =>
          remoteConversationPageUnit52(
            remoteConversationPageBinding223,
            remoteConversationPageOperand122,
          ),
      }),
      [],
    ),
    remoteConversationPageBinding225 = remoteConversationPageBinding43.useRef(
      remoteConversationPageBinding222,
    );
  remoteConversationPageBinding225.current = remoteConversationPageBinding222;
  let remoteConversationPageBinding226 =
      currentAppInitialSharedCompatSlotLowerQLowerO(
        worktreeNewThreadOrchestratorCompatSlotUpperGLowerL,
      ),
    remoteConversationPageBinding227 = remoteConversationPageBinding43.useMemo(
      () =>
        RemoteConversationDataModule.createRemoteConversationFindSource({
          getGroupings: () => remoteConversationPageBinding225.current,
          routeContextId: taskId == null ? "unavailable" : `remote:${taskId}`,
          scrollAdapter: remoteConversationPageBinding224,
        }),
      [remoteConversationPageBinding224, taskId],
    );
  return (
    useReviewSearchHighlights({
      containerRef: remoteConversationPageBinding223,
      contextId: remoteConversationPageBinding227.contextId,
    }),
    remoteConversationPageBinding222.length === 0 ? (
      React.createElement(AppLoadingScreen, {
        fillParent: true,
        debugName: "RemoteConversationThread.groupings",
      })
    ) : (
      <>
        {React.createElement(ThreadAppShellSourceRegistration, {
          conversationSource: remoteConversationPageBinding227,
          diffSource: remoteConversationPageBinding226,
        })}
        <div
          ref={remoteConversationPageBinding223}
          data-thread-find-target="conversation"
          className="relative flex flex-col gap-2"
          onMouseDownCapture={() => {
            worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(
              remoteConversationPageBinding221,
              "conversation",
            );
          }}
          onFocusCapture={() => {
            worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(
              remoteConversationPageBinding221,
              "conversation",
            );
          }}
        >
          {turnsLoading
            ? null
            : React.createElement(ThreadFindNavigationRail, {
                getItems: () =>
                  RemoteConversationTurnTimestamps.remoteConversationPageUnit63(
                    remoteConversationPageBinding222,
                  ),
              })}
          {remoteConversationPageBinding222.map(({ node, activeId }) => {
            let remoteConversationPageBinding356 =
                node.userTurn.input_items.filter(
                  (item) => item.type === "image_asset_pointer",
                ),
              remoteConversationPageBinding357 =
                node.userTurn.input_items.filter(
                  (item) => item.type === "comment",
                ).length,
              remoteConversationPageBinding358 =
                worktreeNewThreadQueryCompatSlotLowerMLowerD(
                  node.assistantTurns,
                  activeId,
                ),
              remoteConversationPageBinding359 =
                !!focusedAssistantId &&
                remoteConversationPageBinding358?.id === focusedAssistantId,
              remoteConversationPageBinding360 = `user:${node.userTurn.id}`,
              remoteConversationPageBinding361 =
                worktreeNewThreadOrchestratorCompatSlotUpperULowerL(
                  remoteConversationPageBinding360,
                  "message",
                ),
              remoteConversationPageBinding362 =
                remoteConversationPageBinding358 == null
                  ? null
                  : `assistant:${remoteConversationPageBinding358.id}`;
            return (
              <div
                key={node.userTurn.id}
                className="flex flex-col gap-2"
                data-content-search-turn-key={remoteConversationPageBinding360}
                data-content-search-assistant-turn-key={
                  remoteConversationPageBinding362 ?? undefined
                }
              >
                {remoteConversationPageBinding356.length > 0
                  ? React.createElement(
                      RemoteConversationTurnSelection.remoteConversationPageUnit65,
                      {
                        attachments: remoteConversationPageBinding356,
                      },
                    )
                  : null}
                <div
                  className="scroll-mt-4"
                  data-content-search-unit-key={
                    remoteConversationPageBinding361
                  }
                >
                  {React.createElement(appMainCurrentCompatSlotLowerNLowerI, {
                    message:
                      RemoteConversationTurnActions.remoteConversationPageUnit62(
                        node.userTurn.input_items.filter(
                          (item) => item.type === "message",
                        ),
                      ),
                    sentAtMs: null,
                    hostId,
                    commentCount: remoteConversationPageBinding357,
                    referencesPriorConversation: node.userTurn.input_items.some(
                      (item) => item.type === "prior_conversation",
                    ),
                  })}
                </div>
                {remoteConversationPageBinding358
                  ? React.createElement(
                      RemoteConversationTurnDiff.remoteConversationPageUnit53,
                      {
                        hostId,
                        taskId,
                        userTurn: node.userTurn,
                        assistantTurn: remoteConversationPageBinding358,
                        conversationDetailLevel,
                        fallbackDiff:
                          remoteConversationPageBinding359 && !hideCodeBlocks
                            ? unifiedDiff
                            : null,
                      },
                    )
                  : null}
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

function remoteConversationPageUnit52(
  remoteConversationPageOperand57,
  remoteConversationPageOperand58,
) {
  let remoteConversationPageBinding500 =
    remoteConversationPageOperand57.current;
  return remoteConversationPageBinding500 == null
    ? null
    : (remoteConversationPageBinding500.querySelector(
        `[data-content-search-turn-key="${remoteConversationPageOperand58}"]`,
      ) ??
        remoteConversationPageBinding500.querySelector(
          `[data-content-search-assistant-turn-key="${remoteConversationPageOperand58}"]`,
        ) ??
        null);
}

export class RemoteConversationTurnListComponents {
  static RemoteConversationTurnList = RemoteConversationTurnList;
  static remoteConversationPageUnit52 = remoteConversationPageUnit52;
}
