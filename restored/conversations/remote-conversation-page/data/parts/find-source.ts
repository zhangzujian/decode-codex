// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import { once } from "../../../../runtime/commonjs-interop";

import {
  currentAppInitialSharedCompatSlotUpperELowerO,
  currentAppInitialSharedCompatSlotLowerJLowerO,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotUpperSLowerO,
} from "../../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  currentAppInitialSharedRuntime0541,
  normalizeDiffLineRange,
  mergeDiffLineRanges,
  currentAppInitialSharedDisplayRuntime,
  helperImmerNothingDraftableSchema,
} from "../../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  createLocalConversationSearchAdapter,
  initConversationSearchHelpers,
} from "../../../../conversations/local-conversation-thread";

var remoteConversationPageBinding33 = once(() => {
  helperImmerNothingDraftableSchema();
  currentAppInitialSharedCompatSlotUpperO();
  currentAppInitialSharedDisplayRuntime();
  currentAppInitialSharedRuntime0541();
});

function createRemoteConversationFindSource({
  getGroupings,
  routeContextId,
  scrollAdapter,
}) {
  return createLocalConversationSearchAdapter({
    contextId: routeContextId,
    getTurns: () =>
      getGroupings().flatMap(({ node, activeId }) => {
        let remoteConversationPageBinding430 = remoteConversationPageUnit43(
            node.userTurn.input_items.filter((item) => item.type === "message"),
          ),
          remoteConversationPageBinding431 =
            node.assistantTurns.find((item) => item.id === activeId) ??
            node.assistantTurns[0] ??
            null,
          remoteConversationPageBinding432 =
            remoteConversationPageBinding431 == null
              ? ""
              : mergeDiffLineRanges(
                  remoteConversationPageUnit43(
                    remoteConversationPageBinding431.output_items.filter(
                      (item) => item.type === "message",
                    ),
                  ),
                ),
          remoteConversationPageBinding433 = [];
        return (
          remoteConversationPageBinding430.trim().length > 0 &&
            remoteConversationPageBinding433.push({
              turnKey: `user:${node.userTurn.id}`,
              units: [
                {
                  unitId: "message",
                  text: remoteConversationPageBinding430,
                },
              ],
            }),
          remoteConversationPageBinding431 != null &&
            remoteConversationPageBinding432.trim().length > 0 &&
            remoteConversationPageBinding433.push({
              turnKey: `assistant:${remoteConversationPageBinding431.id}`,
              units: [
                {
                  unitId: "message",
                  text: remoteConversationPageBinding432,
                },
              ],
            }),
          remoteConversationPageBinding433
        );
      }),
    scrollAdapter,
  });
}

function remoteConversationPageUnit43(remoteConversationPageOperand75) {
  return remoteConversationPageOperand75
    .flatMap((item) =>
      item.content.filter((_item) => _item.content_type === "text"),
    )
    .map((item) => item.text)
    .join("");
}

var remoteConversationPageBinding34 = once(() => {
  initConversationSearchHelpers();
  normalizeDiffLineRange();
});

function remoteConversationPageUnit44(remoteConversationPageOperand68) {
  let remoteConversationPageBinding508 =
    remoteConversationPageBinding35.safeParse(remoteConversationPageOperand68);
  return remoteConversationPageBinding508.success
    ? {
        id: remoteConversationPageBinding508.data.id,
        createdAt: remoteConversationPageBinding508.data.key.created_at,
        line: remoteConversationPageBinding508.data.line,
      }
    : null;
}

var remoteConversationPageBinding35;

var remoteConversationPageBinding36 = once(() => {
  currentAppInitialSharedCompatSlotUpperSLowerO();
  remoteConversationPageBinding35 =
    currentAppInitialSharedCompatSlotUpperELowerO({
      id: currentAppInitialSharedCompatSlotLowerJLowerO(),
      item_type: currentAppInitialSharedCompatSlotUpperSLowerO("log"),
      key: currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO("UserSetupScript"),
        created_at: currentAppInitialSharedCompatSlotLowerJLowerO(),
      }),
      line: currentAppInitialSharedCompatSlotLowerJLowerO(),
    });
});

export class RemoteConversationFindSource {
  static createRemoteConversationFindSource =
    createRemoteConversationFindSource;
  static remoteConversationPageUnit43 = remoteConversationPageUnit43;
  static remoteConversationPageUnit44 = remoteConversationPageUnit44;
  static getBinding(index: number) {
    return [
      remoteConversationPageBinding33,
      remoteConversationPageBinding34,
      remoteConversationPageBinding35,
      remoteConversationPageBinding36,
    ][index - 33];
  }
}
