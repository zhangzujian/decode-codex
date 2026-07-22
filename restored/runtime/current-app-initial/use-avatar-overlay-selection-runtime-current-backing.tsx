// Restored from ref/webview/assets/use-avatar-overlay-selection-BjGev2eC.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyE,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX,
} from "./shared-react-runtime";
import {
  petInstallModalHostQuickChatWindRuntimeMember0009 as appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsH,
  petInstallModalHostQuickChatWindRuntimeMember0022 as appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsU,
  petInstallModalHostQuickChatWindRuntimeMember0024 as appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsW,
} from "../current-ref-aliases/pet-install-modal-host-quick-chat-wind-runtime/index";
import {
  avatarOverlayPillMaterialModuleRuntimeMember0003 as avatarOverlayPillMaterialModuleD,
  avatarOverlayPillMaterialModuleRuntimeMember0004 as avatarOverlayPillMaterialModuleF,
  avatarOverlayPillMaterialModuleRuntimeMember0016 as avatarOverlayPillMaterialModuleU,
} from "../current-ref-aliases/avatar-overlay-pill-material-module-runtime/index";
import {
  selectedCustomAvatarRefreshQuery as customAvatarsQueryI,
  initCustomAvatarsQueryChunk as customAvatarsQueryR,
} from "../current-ref-aliases/custom-avatars-query/index";
import {
  useAvatarOptions as useAvatarOptionsN,
  initUseAvatarOptionsChunk as useAvatarOptionsT,
} from "../current-ref-aliases/use-avatar-options/index";
export function useAvatarOverlaySelectionU(event) {
  return {
    screenX: event.screenX,
    screenY: event.screenY,
    timeMs: event.timeStamp,
  };
}
function useAvatarOverlaySelectionHelper1(
  useAvatarOverlaySelectionParam19,
  useAvatarOverlaySelectionParam20,
) {
  return useAvatarOverlaySelectionHelper2(
    useAvatarOverlaySelectionParam19,
    useAvatarOverlaySelectionParam20,
  )
    ? useAvatarOverlaySelectionHelper3(
        useAvatarOverlaySelectionD([
          ...useAvatarOverlaySelectionParam19.samples,
          useAvatarOverlaySelectionParam20,
        ]),
      )
    : null;
}
export function useAvatarOverlaySelectionL(
  useAvatarOverlaySelectionParam11,
  useAvatarOverlaySelectionParam12,
  useAvatarOverlaySelectionParam13,
) {
  let useAvatarOverlaySelectionValue26 =
    useAvatarOverlaySelectionParam12 ??
    (useAvatarOverlaySelectionParam13
      ? useAvatarOverlaySelectionParam11.samples.at(-1)
      : undefined);
  return {
    hasMoved:
      useAvatarOverlaySelectionValue26 == null
        ? useAvatarOverlaySelectionParam11.hasMoved
        : useAvatarOverlaySelectionHelper2(
            useAvatarOverlaySelectionParam11,
            useAvatarOverlaySelectionValue26,
          ),
    releaseSample: useAvatarOverlaySelectionValue26,
    velocity:
      useAvatarOverlaySelectionValue26 == null
        ? null
        : useAvatarOverlaySelectionHelper1(
            useAvatarOverlaySelectionParam11,
            useAvatarOverlaySelectionValue26,
          ),
  };
}
function useAvatarOverlaySelectionHelper2(
  useAvatarOverlaySelectionParam15,
  event,
) {
  if (useAvatarOverlaySelectionParam15.hasMoved) return true;
  let useAvatarOverlaySelectionValue27 =
    useAvatarOverlaySelectionParam15.samples[0];
  return (
    useAvatarOverlaySelectionValue27 != null &&
    (Math.abs(event.screenX - useAvatarOverlaySelectionValue27.screenX) >= 4 ||
      Math.abs(event.screenY - useAvatarOverlaySelectionValue27.screenY) >= 4)
  );
}
function useAvatarOverlaySelectionD(useAvatarOverlaySelectionParam17) {
  let useAvatarOverlaySelectionValue31 =
    useAvatarOverlaySelectionParam17.at(-1);
  return useAvatarOverlaySelectionValue31 == null
    ? useAvatarOverlaySelectionParam17
    : useAvatarOverlaySelectionParam17.filter(
        (item) =>
          useAvatarOverlaySelectionValue31.timeMs - item.timeMs <=
          useAvatarOverlaySelectionValue2,
      );
}
function useAvatarOverlaySelectionHelper3(useAvatarOverlaySelectionParam2) {
  let useAvatarOverlaySelectionValue17 = useAvatarOverlaySelectionHelper4(
    useAvatarOverlaySelectionParam2,
  );
  if (useAvatarOverlaySelectionValue17 == null) return null;
  let useAvatarOverlaySelectionValue18 = useAvatarOverlaySelectionParam2.find(
    (item) => useAvatarOverlaySelectionValue17.timeMs - item.timeMs > 0,
  );
  if (useAvatarOverlaySelectionValue18 == null) return null;
  let useAvatarOverlaySelectionValue19 =
      Math.max(
        useAvatarOverlaySelectionValue17.timeMs -
          useAvatarOverlaySelectionValue18.timeMs,
        useAvatarOverlaySelectionValue3,
      ) / 1e3,
    useAvatarOverlaySelectionValue20 = {
      x:
        (useAvatarOverlaySelectionValue17.screenX -
          useAvatarOverlaySelectionValue18.screenX) /
        useAvatarOverlaySelectionValue19,
      y:
        (useAvatarOverlaySelectionValue17.screenY -
          useAvatarOverlaySelectionValue18.screenY) /
        useAvatarOverlaySelectionValue19,
    },
    useAvatarOverlaySelectionValue21 = Math.hypot(
      useAvatarOverlaySelectionValue20.x,
      useAvatarOverlaySelectionValue20.y,
    );
  if (useAvatarOverlaySelectionValue21 < useAvatarOverlaySelectionValue4)
    return null;
  if (useAvatarOverlaySelectionValue21 <= 1600)
    return useAvatarOverlaySelectionValue20;
  let useAvatarOverlaySelectionValue22 =
    useAvatarOverlaySelectionValue1 / useAvatarOverlaySelectionValue21;
  return {
    x: useAvatarOverlaySelectionValue20.x * useAvatarOverlaySelectionValue22,
    y: useAvatarOverlaySelectionValue20.y * useAvatarOverlaySelectionValue22,
  };
}
function useAvatarOverlaySelectionHelper4(useAvatarOverlaySelectionParam6) {
  let useAvatarOverlaySelectionValue24 = useAvatarOverlaySelectionParam6.at(-1);
  if (useAvatarOverlaySelectionValue24 == null) return;
  let useAvatarOverlaySelectionValue25 =
    useAvatarOverlaySelectionParam6.length - 1;
  for (; useAvatarOverlaySelectionValue25 > 0;) {
    let useAvatarOverlaySelectionValue28 =
      useAvatarOverlaySelectionParam6[useAvatarOverlaySelectionValue25 - 1];
    if (
      useAvatarOverlaySelectionValue28 == null ||
      Math.abs(
        useAvatarOverlaySelectionValue24.screenX -
          useAvatarOverlaySelectionValue28.screenX,
      ) >= 4 ||
      Math.abs(
        useAvatarOverlaySelectionValue24.screenY -
          useAvatarOverlaySelectionValue28.screenY,
      ) >= 4
    )
      break;
    --useAvatarOverlaySelectionValue25;
  }
  return useAvatarOverlaySelectionParam6[useAvatarOverlaySelectionValue25];
}
var useAvatarOverlaySelectionValue1,
  useAvatarOverlaySelectionValue2,
  useAvatarOverlaySelectionValue3,
  useAvatarOverlaySelectionValue4;
export const useAvatarOverlaySelectionF = rolldownRuntimeN(() => {
  useAvatarOverlaySelectionValue1 = 1600;
  useAvatarOverlaySelectionValue2 = 160;
  useAvatarOverlaySelectionValue3 = 8;
  useAvatarOverlaySelectionValue4 = 320;
});
export function useAvatarOverlaySelectionS(
  useAvatarOverlaySelectionParam4,
  useAvatarOverlaySelectionParam5,
) {
  return useAvatarOverlaySelectionParam4
    .map((item) =>
      [
        item.id,
        item.title,
        item.body ?? "",
        item.level,
        item.isLoading ? "loading" : "done",
        item.action?.path ?? "",
        item.waitingRequest == null
          ? ""
          : avatarOverlayPillMaterialModuleD(
              item.waitingRequest,
              useAvatarOverlaySelectionParam5,
            ),
      ].join(""),
    )
    .join("\0");
}
export const useAvatarOverlaySelectionC = rolldownRuntimeN(() => {
  avatarOverlayPillMaterialModuleF();
});
export function useAvatarOverlaySelectionI({
  dismissedNotificationTurnKeys,
  extraNotifications = [],
  latestActivityFirst = false,
  nowMs = Date.now(),
  sessions,
}) {
  let useAvatarOverlaySelectionValue11 = extraNotifications.flatMap((item) =>
    (item.expiresAtMs != null && nowMs >= item.expiresAtMs) ||
    dismissedNotificationTurnKeys?.get(item.id) === item.turnKey
      ? []
      : [
          {
            expiresAtMs: item.expiresAtMs,
            key: item.id,
            notification: item,
            notificationPriority: useAvatarOverlaySelectionHelper10(item.kind),
            sortAtMs: item.updatedAtMs,
            updatedAtMs: item.updatedAtMs,
          },
        ],
  );
  for (let useAvatarOverlaySelectionValue29 of sessions) {
    let useAvatarOverlaySelectionValue30 = useAvatarOverlaySelectionHelper5(
      useAvatarOverlaySelectionValue29,
      nowMs,
    );
    useAvatarOverlaySelectionValue30 != null &&
      dismissedNotificationTurnKeys?.get(
        useAvatarOverlaySelectionValue30.notification.id,
      ) !== useAvatarOverlaySelectionValue30.notification.turnKey &&
      useAvatarOverlaySelectionValue11.push(useAvatarOverlaySelectionValue30);
  }
  return {
    nextNotificationExpiresAtMs: useAvatarOverlaySelectionValue11.reduce(
      (accumulator, current) =>
        current.expiresAtMs == null ||
        (accumulator != null && accumulator <= current.expiresAtMs)
          ? accumulator
          : current.expiresAtMs,
      null,
    ),
    notifications: useAvatarOverlaySelectionValue11
      .sort(
        (useAvatarOverlaySelectionParam21, useAvatarOverlaySelectionParam22) =>
          useAvatarOverlaySelectionHelper9(
            useAvatarOverlaySelectionParam21,
            useAvatarOverlaySelectionParam22,
            latestActivityFirst,
          ),
      )
      .map((item) => item.notification),
  };
}
export function useAvatarOverlaySelectionO(useAvatarOverlaySelectionParam18) {
  return (
    useAvatarOverlaySelectionParam18.source === "local" &&
    useAvatarOverlaySelectionParam18.usesLiveConversationState !== false
  );
}
export function useAvatarOverlaySelectionR({ intl, petName, startedAtMs }) {
  return {
    action: null,
    body: intl.formatMessage({
      id: "avatarOverlay.firstAwake.body",
      defaultMessage: "I'm here to help keep your ChatGPT sessions moving",
      description:
        "Body of the temporary greeting shown when the floating Codex pet is first opened",
    }),
    controlTarget: null,
    expiresAtMs: startedAtMs + useAvatarOverlaySelectionValue9,
    id: "first-awake",
    isLoading: false,
    kind: "first-awake",
    level: "info",
    localConversationId: null,
    source: "local",
    title: intl.formatMessage(
      {
        id: "avatarOverlay.firstAwake.title",
        defaultMessage: "Hi, I'm {petName}",
        description:
          "Title of the temporary greeting shown when the floating Codex pet is first opened",
      },
      {
        petName,
      },
    ),
    turnKey: null,
    updatedAtMs: startedAtMs,
    waitingRequest: null,
  };
}
function useAvatarOverlaySelectionHelper5(
  event,
  useAvatarOverlaySelectionParam1,
) {
  if (event.status === "idle" || !event.showInNotificationTray) return null;
  let useAvatarOverlaySelectionValue12 = useAvatarOverlaySelectionHelper7(
    event.status,
    event.updatedAtMs,
  );
  return useAvatarOverlaySelectionValue12 != null &&
    useAvatarOverlaySelectionParam1 >= useAvatarOverlaySelectionValue12
    ? null
    : {
        expiresAtMs: useAvatarOverlaySelectionValue12,
        key: event.key,
        notification: {
          action: {
            path: event.actionPath,
          },
          body: event.subtitle,
          controlTarget: event.controlTarget,
          expiresAtMs: useAvatarOverlaySelectionValue12,
          id: event.key,
          isLoading: event.status === "running",
          kind: "session",
          level: useAvatarOverlaySelectionHelper8(event.status),
          localConversationId: event.localConversationId,
          source: event.source,
          title: useAvatarOverlaySelectionHelper6(event),
          turnKey: event.turnKey,
          updatedAtMs: event.updatedAtMs,
          waitingRequest:
            event.status === "waiting" ? event.waitingRequest : null,
        },
        notificationPriority: useAvatarOverlaySelectionHelper11(event.status),
        sortAtMs: event.sortAtMs,
        updatedAtMs: event.updatedAtMs,
      };
}
function useAvatarOverlaySelectionHelper6(useAvatarOverlaySelectionParam16) {
  return useAvatarOverlaySelectionParam16.status !== "waiting" ||
    useAvatarOverlaySelectionParam16.waitingRequest == null
    ? useAvatarOverlaySelectionParam16.title
    : avatarOverlayPillMaterialModuleU(
        useAvatarOverlaySelectionParam16.title,
        useAvatarOverlaySelectionParam16.waitingRequest,
      );
}
function useAvatarOverlaySelectionHelper7(
  useAvatarOverlaySelectionParam8,
  useAvatarOverlaySelectionParam9,
) {
  switch (useAvatarOverlaySelectionParam8) {
    case "running":
      return useAvatarOverlaySelectionParam9 + useAvatarOverlaySelectionValue5;
    case "failed":
      return useAvatarOverlaySelectionParam9 + useAvatarOverlaySelectionValue6;
    case "waiting":
      return useAvatarOverlaySelectionParam9 + useAvatarOverlaySelectionValue7;
    case "review":
      return useAvatarOverlaySelectionParam9 + useAvatarOverlaySelectionValue8;
    case "idle":
      return null;
  }
}
function useAvatarOverlaySelectionHelper8(useAvatarOverlaySelectionParam7) {
  switch (useAvatarOverlaySelectionParam7) {
    case "waiting":
      return "warning";
    case "failed":
      return "danger";
    case "running":
      return "info";
    case "review":
      return "success";
    case "idle":
      return "info";
  }
}
function useAvatarOverlaySelectionHelper9(
  event,
  _event,
  useAvatarOverlaySelectionParam3,
) {
  let useAvatarOverlaySelectionValue23 =
    event.notificationPriority - _event.notificationPriority;
  if (useAvatarOverlaySelectionValue23 !== 0)
    return useAvatarOverlaySelectionValue23;
  if (useAvatarOverlaySelectionParam3) {
    let useAvatarOverlaySelectionValue33 = _event.sortAtMs - event.sortAtMs;
    if (useAvatarOverlaySelectionValue33 !== 0)
      return useAvatarOverlaySelectionValue33;
  }
  if (!useAvatarOverlaySelectionParam3) {
    let useAvatarOverlaySelectionValue32 =
      _event.updatedAtMs - event.updatedAtMs;
    if (useAvatarOverlaySelectionValue32 !== 0)
      return useAvatarOverlaySelectionValue32;
  }
  return event.key.localeCompare(_event.key);
}
function useAvatarOverlaySelectionHelper10(useAvatarOverlaySelectionParam14) {
  switch (useAvatarOverlaySelectionParam14) {
    case "activity":
      return -2;
    case "attention":
      return -1;
    case "first-awake":
    case "multi-agent":
    case "session":
      return 4;
  }
}
function useAvatarOverlaySelectionHelper11(useAvatarOverlaySelectionParam10) {
  switch (useAvatarOverlaySelectionParam10) {
    case "waiting":
      return 0;
    case "failed":
      return 1;
    case "review":
      return 2;
    case "running":
      return 3;
    case "idle":
      return 4;
  }
}
var useAvatarOverlaySelectionValue5,
  useAvatarOverlaySelectionValue6,
  useAvatarOverlaySelectionValue7,
  useAvatarOverlaySelectionValue8,
  useAvatarOverlaySelectionValue9;
export const useAvatarOverlaySelectionA = rolldownRuntimeN(() => {
  avatarOverlayPillMaterialModuleF();
  useAvatarOverlaySelectionValue5 = 180000;
  useAvatarOverlaySelectionValue6 = 3600000;
  useAvatarOverlaySelectionValue7 = 86400000;
  useAvatarOverlaySelectionValue8 = 604800000;
  useAvatarOverlaySelectionValue9 = 8000;
});
export function useAvatarOverlaySelectionN() {
  let { avatarOptions, isFetching } = useAvatarOptionsN(),
    { selectedAvatar, selectedAvatarId } =
      appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsW(
        avatarOptions,
      ),
    useAvatarOverlaySelectionValue14 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsU(
        selectedAvatar,
        selectedAvatarId,
      ),
    { isFetching: _isFetching } =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyE(
        customAvatarsQueryI,
        selectedAvatarId ?? selectedAvatar.id,
      ),
    useAvatarOverlaySelectionValue15 =
      useAvatarOverlaySelectionValue14 && (isFetching || _isFetching)
        ? null
        : selectedAvatar;
  return {
    selectedAvatar: useAvatarOverlaySelectionValue15,
    selectedAvatarId,
  };
}
var useAvatarOverlaySelectionValue10;
export const useAvatarOverlaySelectionT = rolldownRuntimeN(() => {
  useAvatarOverlaySelectionValue10 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX();
  appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsH();
  customAvatarsQueryR();
  useAvatarOptionsT();
});
export { useAvatarOverlaySelectionD };
