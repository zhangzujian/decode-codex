// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import { once, toEsModule } from "../../../../runtime/commonjs-interop";

import {
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotLowerCLowerC,
  currentAppInitialSharedCompatSlotLowerF,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotLowerP,
  currentAppInitialSharedCompatSlotDollarLowerS,
} from "../../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  createWhamApiRequestClient,
  getCodexDesktopOriginator,
} from "../../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { RemoteConversationEventParsers } from "./event-parsers";

import { RemoteConversationFindSource } from "./find-source";

function remoteConversationPageUnit45(remoteConversationPageOperand91) {
  return (
    remoteConversationPageOperand91 === "completed" ||
    remoteConversationPageOperand91 === "failed" ||
    remoteConversationPageOperand91 === "cancelled"
  );
}

function remoteConversationPageUnit46(remoteConversationPageOperand15) {
  let {
      taskId,
      turnId,
      turnStatus,
      keepStreamOpenAfterCompletion = false,
    } = remoteConversationPageOperand15,
    remoteConversationPageBinding329 = () =>
      turnId == null
        ? remoteConversationPageBinding40
        : (remoteConversationPageBinding39.get(turnId) ??
          remoteConversationPageBinding40);
  let [remoteConversationPageBinding330, remoteConversationPageBinding331] =
      remoteConversationPageBinding38.useState(
        remoteConversationPageBinding329,
      ),
    remoteConversationPageBinding332 =
      currentAppInitialSharedCompatSlotLowerCLowerC(),
    remoteConversationPageBinding333,
    remoteConversationPageBinding334;
  remoteConversationPageBinding333 = () => {
    remoteConversationPageBinding331(
      turnId == null
        ? remoteConversationPageBinding40
        : (remoteConversationPageBinding39.get(turnId) ??
            remoteConversationPageBinding40),
    );
  };
  remoteConversationPageBinding334 = [turnId];
  remoteConversationPageBinding38.useEffect(
    remoteConversationPageBinding333,
    remoteConversationPageBinding334,
  );
  let remoteConversationPageBinding335 =
    !!taskId &&
    !!turnId &&
    (keepStreamOpenAfterCompletion ||
      !RemoteConversationTurnStream.remoteConversationPageUnit45(turnStatus));
  let remoteConversationPageBinding336 = remoteConversationPageBinding335,
    remoteConversationPageBinding337,
    remoteConversationPageBinding338;
  return (
    (remoteConversationPageBinding337 = () => {
      if (!remoteConversationPageBinding336 || !taskId || !turnId) return;
      let remoteConversationPageBinding402 = new URLSearchParams();
      remoteConversationPageBinding402.append("item_type", "thread_event");
      remoteConversationPageBinding402.append("item_type", "log");
      let remoteConversationPageBinding403 = `/wham/tasks/${taskId}/turns/${turnId}/stream?${remoteConversationPageBinding402.toString()}`,
        remoteConversationPageBinding404 =
          currentAppInitialSharedCompatSlotLowerF
            .getInstance()
            .stream("GET", remoteConversationPageBinding403, {
              headers: getCodexDesktopOriginator(),
              onEvent: (remoteConversationPageOperand32) => {
                let remoteConversationPageBinding435 =
                    RemoteConversationEventParsers.remoteConversationPageUnit26(
                      remoteConversationPageOperand32.data,
                    ),
                  remoteConversationPageBinding436 =
                    RemoteConversationFindSource.remoteConversationPageUnit44(
                      remoteConversationPageOperand32.data,
                    );
                (remoteConversationPageBinding435 == null &&
                  remoteConversationPageBinding436 == null) ||
                  remoteConversationPageBinding331(
                    (remoteConversationPageOperand35) => {
                      let remoteConversationPageBinding456 =
                          remoteConversationPageBinding435 == null ||
                          remoteConversationPageOperand35.threadEvents.some(
                            (item) =>
                              item.id === remoteConversationPageBinding435.id,
                          )
                            ? remoteConversationPageOperand35.threadEvents
                            : [
                                ...remoteConversationPageOperand35.threadEvents,
                                remoteConversationPageBinding435,
                              ],
                        remoteConversationPageBinding457 =
                          remoteConversationPageBinding436 == null ||
                          remoteConversationPageOperand35.setupLogs.some(
                            (item) =>
                              item.id === remoteConversationPageBinding436.id,
                          )
                            ? remoteConversationPageOperand35.setupLogs
                            : [
                                ...remoteConversationPageOperand35.setupLogs,
                                remoteConversationPageBinding436,
                              ];
                      if (
                        remoteConversationPageBinding456 ===
                          remoteConversationPageOperand35.threadEvents &&
                        remoteConversationPageBinding457 ===
                          remoteConversationPageOperand35.setupLogs
                      )
                        return remoteConversationPageOperand35;
                      let remoteConversationPageBinding458 = {
                        setupLogs: remoteConversationPageBinding457,
                        threadEvents: remoteConversationPageBinding456,
                      };
                      return (
                        remoteConversationPageBinding39.set(
                          turnId,
                          remoteConversationPageBinding458,
                        ),
                        remoteConversationPageBinding458
                      );
                    },
                  );
              },
              onComplete: () => {
                remoteConversationPageBinding332.invalidateQueries({
                  queryKey: ["tasks"],
                });
                remoteConversationPageBinding332.invalidateQueries({
                  queryKey: ["task", taskId],
                });
                remoteConversationPageBinding332.invalidateQueries({
                  queryKey: ["task", taskId, "turns"],
                });
              },
            });
      return () => {
        currentAppInitialSharedCompatSlotLowerF
          .getInstance()
          .cancelStream(remoteConversationPageBinding404);
      };
    }),
    (remoteConversationPageBinding338 = [
      remoteConversationPageBinding332,
      remoteConversationPageBinding336,
      taskId,
      turnId,
    ]),
    remoteConversationPageBinding38.useEffect(
      remoteConversationPageBinding337,
      remoteConversationPageBinding338,
    ),
    remoteConversationPageBinding330
  );
}

var remoteConversationPageBinding37;

var remoteConversationPageBinding38;

var remoteConversationPageBinding39;

var remoteConversationPageBinding40;

var remoteConversationPageBinding41 = once(() => {
  remoteConversationPageBinding37 =
    currentAppInitialSharedCompatSlotLowerGLowerC();
  currentAppInitialSharedCompatSlotDollarLowerS();
  remoteConversationPageBinding38 = toEsModule(
    currentAppInitialSharedCompatSlotUnderscoreLowerC(),
    1,
  );
  createWhamApiRequestClient();
  currentAppInitialSharedCompatSlotLowerP();
  RemoteConversationFindSource.getBinding(33)();
  RemoteConversationFindSource.getBinding(36)();
  remoteConversationPageBinding39 = new Map();
  remoteConversationPageBinding40 = {
    setupLogs: [],
    threadEvents: [],
  };
});

export class RemoteConversationTurnStream {
  static remoteConversationPageUnit45 = remoteConversationPageUnit45;
  static remoteConversationPageUnit46 = remoteConversationPageUnit46;
  static getBinding(index: number) {
    return [
      remoteConversationPageBinding37,
      remoteConversationPageBinding38,
      remoteConversationPageBinding39,
      remoteConversationPageBinding40,
      remoteConversationPageBinding41,
    ][index - 37];
  }
}
