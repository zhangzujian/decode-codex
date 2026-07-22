// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import { currentAppInitialSharedCompatSlotLowerQLowerA } from "../../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  currentAppInitialSharedRandomBytesLengthFunction,
  modelContextProtocolRelatedTaskSchema,
  currentAppInitialSharedSrcFunction,
} from "../../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

function remoteConversationPageUnit25(remoteConversationPageOperand59) {
  let remoteConversationPageBinding501 =
    remoteConversationPageOperand59?.thread_events?.events;
  return Array.isArray(remoteConversationPageBinding501)
    ? remoteConversationPageBinding501.flatMap((item, index) => {
        let remoteConversationPageBinding516 =
          remoteConversationPageUnit34(item);
        return remoteConversationPageBinding516 == null
          ? []
          : [
              {
                id: `stored:${index}`,
                notification: remoteConversationPageBinding516,
              },
            ];
      })
    : [];
}

function remoteConversationPageUnit26(remoteConversationPageOperand56) {
  if (
    !remoteConversationPageUnit42(remoteConversationPageOperand56) ||
    remoteConversationPageOperand56.item_type !== "thread_event"
  )
    return null;
  let remoteConversationPageBinding497 = remoteConversationPageOperand56,
    remoteConversationPageBinding498 = remoteConversationPageUnit34(
      remoteConversationPageBinding497.event,
    );
  return remoteConversationPageBinding498 == null
    ? null
    : {
        id:
          typeof remoteConversationPageBinding497.id == "string"
            ? remoteConversationPageBinding497.id
            : crypto.randomUUID(),
        notification: remoteConversationPageBinding498,
      };
}

function remoteConversationPageUnit27({
  turnStatus,
  storedEvents,
  liveEvents,
  preserveLiveImageGenerationEvents = false,
}) {
  let remoteConversationPageBinding442 = storedEvents.some(
    (item) =>
      item.notification.method === "item/completed" &&
      item.notification.params.item.type === "agentMessage",
  );
  if (turnStatus !== "completed" || !remoteConversationPageBinding442)
    return [...storedEvents, ...liveEvents];
  if (!preserveLiveImageGenerationEvents) return storedEvents;
  let remoteConversationPageBinding443 = new Set(
      storedEvents.flatMap((item) =>
        item.notification.method === "item/completed"
          ? [remoteConversationPageUnit28(item.notification.params.item)]
          : [],
      ),
    ),
    remoteConversationPageBinding444 = liveEvents.filter(
      (item) =>
        item.notification.method === "item/completed" &&
        item.notification.params.item.type === "imageGeneration" &&
        !remoteConversationPageBinding443.has(
          remoteConversationPageUnit28(item.notification.params.item),
        ),
    );
  return [...storedEvents, ...remoteConversationPageBinding444];
}

function remoteConversationPageUnit28(remoteConversationPageOperand107) {
  return `${remoteConversationPageOperand107.type}:${remoteConversationPageOperand107.id}`;
}

function remoteConversationPageUnit29({
  taskId,
  userTurn,
  assistantTurn,
  threadEvents,
  fallbackDiff,
  includeUserMessage,
}) {
  let remoteConversationPageBinding405 =
      currentAppInitialSharedCompatSlotLowerQLowerA([]),
    remoteConversationPageBinding406 = {
      params: {
        threadId: assistantTurn.conversation_id ?? taskId,
        input: includeUserMessage
          ? remoteConversationPageUnit33(userTurn.input_items)
          : [],
        cwd: null,
        approvalPolicy: remoteConversationPageBinding405.approvalPolicy,
        sandboxPolicy: remoteConversationPageBinding405.sandboxPolicy,
        model: null,
        effort: null,
        summary: "none",
        personality: null,
        outputSchema: null,
        collaborationMode: null,
      },
      turnId: assistantTurn.id,
      turnStartedAtMs: remoteConversationPageUnit41(assistantTurn.created_at),
      firstTurnWorkItemStartedAtMs: null,
      finalAssistantStartedAtMs: null,
      status: remoteConversationPageUnit32(assistantTurn),
      error: null,
      diff: fallbackDiff,
      items: [],
    },
    remoteConversationPageBinding407 = threadEvents.reduce(
      remoteConversationPageUnit30,
      remoteConversationPageBinding406,
    ),
    remoteConversationPageBinding408 = remoteConversationPageUnit31(
      assistantTurn,
      remoteConversationPageBinding407.status,
    ),
    remoteConversationPageBinding409 =
      remoteConversationPageBinding408 ===
      remoteConversationPageBinding407.status
        ? remoteConversationPageBinding407
        : {
            ...remoteConversationPageBinding407,
            status: remoteConversationPageBinding408,
          };
  if (
    remoteConversationPageBinding409.items.some(
      (item) => item.type === "agentMessage",
    )
  )
    return remoteConversationPageBinding409;
  let remoteConversationPageBinding410 = remoteConversationPageUnit40(
    assistantTurn.output_items?.filter(
      (remoteConversationPageOperand113) =>
        remoteConversationPageOperand113.type === "message",
    ) ?? [],
  );
  return remoteConversationPageBinding410.trim().length === 0
    ? remoteConversationPageBinding409
    : modelContextProtocolRelatedTaskSchema(
        remoteConversationPageBinding409,
        (remoteConversationPageOperand63) => {
          remoteConversationPageOperand63.items.push({
            id: `cloud-assistant-message:${assistantTurn.id}`,
            type: "agentMessage",
            text: remoteConversationPageBinding410,
            phase: null,
            memoryCitation: null,
          });
        },
      );
}

function remoteConversationPageUnit30(
  remoteConversationPageOperand12,
  remoteConversationPageOperand13,
) {
  return modelContextProtocolRelatedTaskSchema(
    remoteConversationPageOperand12,
    (remoteConversationPageOperand14) => {
      switch (remoteConversationPageOperand13.method) {
        case "turn/started":
          remoteConversationPageOperand14.turnId =
            remoteConversationPageOperand13.params.turn.id;
          remoteConversationPageOperand14.status =
            remoteConversationPageOperand13.params.turn.status;
          remoteConversationPageOperand14.error =
            remoteConversationPageOperand13.params.turn.error;
          remoteConversationPageOperand14.turnStartedAtMs =
            remoteConversationPageOperand14.turnStartedAtMs ?? Date.now();
          break;
        case "turn/completed":
          remoteConversationPageOperand14.turnId =
            remoteConversationPageOperand13.params.turn.id;
          remoteConversationPageOperand14.status =
            remoteConversationPageOperand13.params.turn.status;
          remoteConversationPageOperand14.error =
            remoteConversationPageOperand13.params.turn.error;
          break;
        case "turn/diff/updated":
          remoteConversationPageOperand14.diff =
            remoteConversationPageOperand13.params.diff;
          break;
        case "turn/plan/updated":
          remoteConversationPageOperand14.items.push({
            id: currentAppInitialSharedRandomBytesLengthFunction(),
            type: "todo-list",
            explanation:
              remoteConversationPageOperand13.params.explanation ?? null,
            plan: remoteConversationPageOperand13.params.plan,
          });
          break;
        case "item/started": {
          let remoteConversationPageBinding490 = remoteConversationPageUnit36(
            remoteConversationPageOperand13.params.item,
          );
          if (remoteConversationPageBinding490.type === "userMessage") break;
          remoteConversationPageBinding490.type === "agentMessage" &&
            (remoteConversationPageOperand14.finalAssistantStartedAtMs =
              remoteConversationPageOperand14.finalAssistantStartedAtMs ??
              Date.now());
          remoteConversationPageUnit37(
            remoteConversationPageOperand14.items,
            remoteConversationPageBinding490,
          );
          break;
        }
        case "item/completed": {
          let remoteConversationPageBinding514 = remoteConversationPageUnit36(
            remoteConversationPageOperand13.params.item,
          );
          if (remoteConversationPageBinding514.type === "userMessage") break;
          remoteConversationPageUnit37(
            remoteConversationPageOperand14.items,
            remoteConversationPageBinding514,
          );
          break;
        }
        case "item/agentMessage/delta": {
          let remoteConversationPageBinding512 = remoteConversationPageUnit38(
            remoteConversationPageOperand14.items,
            remoteConversationPageOperand13.params.itemId,
            "agentMessage",
          );
          remoteConversationPageBinding512 &&
            (remoteConversationPageBinding512.text = `${remoteConversationPageBinding512.text}${remoteConversationPageOperand13.params.delta}`);
          break;
        }
        case "item/plan/delta": {
          let remoteConversationPageBinding513 = remoteConversationPageUnit38(
            remoteConversationPageOperand14.items,
            remoteConversationPageOperand13.params.itemId,
            "plan",
          );
          remoteConversationPageBinding513 &&
            (remoteConversationPageBinding513.text = `${remoteConversationPageBinding513.text}${remoteConversationPageOperand13.params.delta}`);
          break;
        }
        case "item/reasoning/summaryTextDelta": {
          let remoteConversationPageBinding493 = remoteConversationPageUnit38(
            remoteConversationPageOperand14.items,
            remoteConversationPageOperand13.params.itemId,
            "reasoning",
          );
          if (!remoteConversationPageBinding493) break;
          let remoteConversationPageBinding494 =
            remoteConversationPageOperand13.params.summaryIndex;
          remoteConversationPageBinding493.summary =
            remoteConversationPageUnit39(
              remoteConversationPageBinding493.summary,
              remoteConversationPageBinding494,
              "",
            );
          remoteConversationPageBinding493.summary[
            remoteConversationPageBinding494
          ] =
            `${remoteConversationPageBinding493.summary[remoteConversationPageBinding494]}${remoteConversationPageOperand13.params.delta}`;
          break;
        }
        case "item/reasoning/textDelta": {
          let remoteConversationPageBinding495 = remoteConversationPageUnit38(
            remoteConversationPageOperand14.items,
            remoteConversationPageOperand13.params.itemId,
            "reasoning",
          );
          if (!remoteConversationPageBinding495) break;
          let remoteConversationPageBinding496 =
            remoteConversationPageOperand13.params.contentIndex;
          remoteConversationPageBinding495.content =
            remoteConversationPageUnit39(
              remoteConversationPageBinding495.content,
              remoteConversationPageBinding496,
              "",
            );
          remoteConversationPageBinding495.content[
            remoteConversationPageBinding496
          ] =
            `${remoteConversationPageBinding495.content[remoteConversationPageBinding496]}${remoteConversationPageOperand13.params.delta}`;
          break;
        }
        case "item/commandExecution/outputDelta": {
          let remoteConversationPageBinding505 = remoteConversationPageUnit38(
            remoteConversationPageOperand14.items,
            remoteConversationPageOperand13.params.itemId,
            "commandExecution",
          );
          remoteConversationPageBinding505 &&
            (remoteConversationPageBinding505.aggregatedOutput = `${remoteConversationPageBinding505.aggregatedOutput ?? ""}${remoteConversationPageOperand13.params.delta}`);
          break;
        }
        case "error":
          remoteConversationPageOperand14.items.push({
            id: currentAppInitialSharedRandomBytesLengthFunction(),
            type: "error",
            message: remoteConversationPageOperand13.params.error.message,
            willRetry: remoteConversationPageOperand13.params.willRetry,
            errorInfo:
              remoteConversationPageOperand13.params.error.codexErrorInfo,
            additionalDetails:
              remoteConversationPageOperand13.params.error.additionalDetails ??
              null,
          });
          break;
      }
    },
  );
}

function remoteConversationPageUnit31(
  remoteConversationPageOperand97,
  remoteConversationPageOperand98,
) {
  let remoteConversationPageBinding519 = remoteConversationPageUnit32(
    remoteConversationPageOperand97,
  );
  return remoteConversationPageBinding519 === "inProgress"
    ? remoteConversationPageOperand98
    : remoteConversationPageBinding519;
}

function remoteConversationPageUnit32(remoteConversationPageOperand42) {
  if (
    remoteConversationPageOperand42.cancellation_requested_at != null &&
    (remoteConversationPageOperand42.turn_status === "pending" ||
      remoteConversationPageOperand42.turn_status === "in_progress")
  )
    return "interrupted";
  switch (remoteConversationPageOperand42.turn_status) {
    case "completed":
      return "completed";
    case "failed":
      return "failed";
    case "cancelled":
      return "interrupted";
    case "in_progress":
    case "pending":
      return "inProgress";
  }
}

function remoteConversationPageUnit33(remoteConversationPageOperand49) {
  let remoteConversationPageBinding491 = remoteConversationPageOperand49
    .flatMap((item) => (item.type === "message" ? item.content : []))
    .filter((item) => item.content_type === "text")
    .map((item) => item.text)
    .join("\n");
  return remoteConversationPageBinding491.trim().length > 0
    ? [
        {
          type: "text",
          text: remoteConversationPageBinding491,
          text_elements: [],
        },
      ]
    : [];
}

function remoteConversationPageUnit34(remoteConversationPageOperand67) {
  if (!remoteConversationPageUnit42(remoteConversationPageOperand67))
    return null;
  let remoteConversationPageBinding507 = remoteConversationPageOperand67.method;
  return typeof remoteConversationPageBinding507 != "string" ||
    !remoteConversationPageUnit35(remoteConversationPageBinding507)
    ? null
    : {
        method: remoteConversationPageBinding507,
        params: remoteConversationPageOperand67.params,
      };
}

function remoteConversationPageUnit35(remoteConversationPageOperand41) {
  return (
    remoteConversationPageOperand41 === "turn/started" ||
    remoteConversationPageOperand41 === "turn/completed" ||
    remoteConversationPageOperand41 === "turn/diff/updated" ||
    remoteConversationPageOperand41 === "turn/plan/updated" ||
    remoteConversationPageOperand41 === "item/started" ||
    remoteConversationPageOperand41 === "item/completed" ||
    remoteConversationPageOperand41 === "item/agentMessage/delta" ||
    remoteConversationPageOperand41 === "item/plan/delta" ||
    remoteConversationPageOperand41 === "item/reasoning/summaryTextDelta" ||
    remoteConversationPageOperand41 === "item/reasoning/textDelta" ||
    remoteConversationPageOperand41 === "item/commandExecution/outputDelta" ||
    remoteConversationPageOperand41 === "error"
  );
}

function remoteConversationPageUnit36(remoteConversationPageOperand46) {
  return remoteConversationPageOperand46.type === "imageGeneration"
    ? currentAppInitialSharedSrcFunction(remoteConversationPageOperand46)
    : remoteConversationPageOperand46.type === "collabAgentToolCall"
      ? {
          ...remoteConversationPageOperand46,
          receiverThreads:
            remoteConversationPageOperand46.receiverThreadIds.map((item) => ({
              threadId: item,
              thread: null,
            })),
        }
      : remoteConversationPageOperand46;
}

function remoteConversationPageUnit37(
  remoteConversationPageOperand80,
  remoteConversationPageOperand81,
) {
  let remoteConversationPageBinding515 =
    remoteConversationPageOperand80.findIndex(
      (item) => item.id === remoteConversationPageOperand81.id,
    );
  if (remoteConversationPageBinding515 >= 0) {
    remoteConversationPageOperand80[remoteConversationPageBinding515] =
      remoteConversationPageOperand81;
    return;
  }
  remoteConversationPageOperand80.push(remoteConversationPageOperand81);
}

function remoteConversationPageUnit38(
  remoteConversationPageOperand92,
  remoteConversationPageOperand93,
  remoteConversationPageOperand94,
) {
  return (
    remoteConversationPageOperand92.find(
      (item) =>
        item.id === remoteConversationPageOperand93 &&
        item.type === remoteConversationPageOperand94,
    ) ?? null
  );
}

function remoteConversationPageUnit39(
  remoteConversationPageOperand99,
  remoteConversationPageOperand100,
  remoteConversationPageOperand101,
) {
  for (
    ;
    remoteConversationPageOperand99.length <= remoteConversationPageOperand100;
  )
    remoteConversationPageOperand99.push(remoteConversationPageOperand101);
  return remoteConversationPageOperand99;
}

function remoteConversationPageUnit40(remoteConversationPageOperand74) {
  return remoteConversationPageOperand74
    .flatMap((item) =>
      item.content.filter((_item) => _item.content_type === "text"),
    )
    .map((item) => item.text)
    .join("");
}

function remoteConversationPageUnit41(remoteConversationPageOperand102) {
  return typeof remoteConversationPageOperand102 == "number"
    ? remoteConversationPageOperand102 * 1e3
    : null;
}

function remoteConversationPageUnit42(remoteConversationPageOperand103) {
  return (
    typeof remoteConversationPageOperand103 == "object" &&
    !!remoteConversationPageOperand103
  );
}

export class RemoteConversationEventParsers {
  static remoteConversationPageUnit25 = remoteConversationPageUnit25;
  static remoteConversationPageUnit26 = remoteConversationPageUnit26;
  static remoteConversationPageUnit27 = remoteConversationPageUnit27;
  static remoteConversationPageUnit28 = remoteConversationPageUnit28;
  static remoteConversationPageUnit29 = remoteConversationPageUnit29;
  static remoteConversationPageUnit30 = remoteConversationPageUnit30;
  static remoteConversationPageUnit31 = remoteConversationPageUnit31;
  static remoteConversationPageUnit32 = remoteConversationPageUnit32;
  static remoteConversationPageUnit33 = remoteConversationPageUnit33;
  static remoteConversationPageUnit34 = remoteConversationPageUnit34;
  static remoteConversationPageUnit35 = remoteConversationPageUnit35;
  static remoteConversationPageUnit36 = remoteConversationPageUnit36;
  static remoteConversationPageUnit37 = remoteConversationPageUnit37;
  static remoteConversationPageUnit38 = remoteConversationPageUnit38;
  static remoteConversationPageUnit39 = remoteConversationPageUnit39;
  static remoteConversationPageUnit40 = remoteConversationPageUnit40;
  static remoteConversationPageUnit41 = remoteConversationPageUnit41;
  static remoteConversationPageUnit42 = remoteConversationPageUnit42;
}
