// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~k8lpzggp-C0GSl6LK.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer } from "../rolldown-runtime";
import {
  currentReactAliasUpperDLowert as _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDt,
  currentReactAliasLowerb,
  currentReactAliasLowerbLowert,
  currentReactAliasLowerdLowern,
  currentReactAliasUpperDLowert,
  currentReactAliasLowerfLowert,
  currentReactAliasUpperOLowert,
  currentReactAliasLowerx,
  currentReactAliasLowerxLowert,
  currentReactAliasLowery,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasLowerw,
  currentQueryRpcAliasUpperWLowero,
} from "../app-initial-query-rpc-runtime";
import {
  defineMessages,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  createPersistedAtomStore,
  initPersistedAtomRegistryRuntime,
  createPersistedAtomRegistryEntry,
  getPersistedAtomValue,
  clearPersistedAtomStore,
  initPersistedAtomStoreRuntime,
  createPersistedAtomSignal,
} from "../../current-app-initial/persisted-ui-runtime-entry";
import {
  businessCheckoutSharedMember0074,
  readThreadTerminalToolDefinition,
  businessCheckoutSharedInitializer0258,
  businessCheckoutSharedInitializer0307,
} from "../business-checkout-shared-current";
import {
  initThreadEntrypointRuntime as _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutC1u3yp5sG,
  RouteScopeSignal,
  initThreadEntrypointRuntime,
  normalizeConversationScopeId,
  getLocalConversationId,
  initThreadScopeRuntime,
  threadScopeIdForEntrypoint,
} from "../app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s";
var _e = createLazyEsmInitializer(() => {
    currentReactAliasLowerdLowern();
  }),
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue1 =
    createLazyEsmInitializer(() => {
      currentReactAliasUpperOLowert();
      _e();
    });
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpSt() {
  clearPersistedAtomStore();
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpXt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam64,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam65,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam66,
) {
  return currentReactAliasUpperDLowert(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam64,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam65,
    createPersistedAtomStore(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam66,
  );
}
export const appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpBt =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue1();
    initPersistedAtomStoreRuntime();
  });
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpGt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam41,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam41
    .value.kind === "local"
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam41
        .value.conversationId
    : null;
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpMt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam15,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam15.kind
  ) {
    case "local":
      return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam15.conversationId;
    case "chatgpt":
      return `chatgpt:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam15.conversationId ?? "new"}`;
    case "cloud":
    case "new":
    case "other":
      return null;
  }
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam5,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam5.kind
  ) {
    case "new":
      switch (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam5.entrypoint
      ) {
        case "home":
        case "library-preview":
          return threadScopeIdForEntrypoint({
            entrypoint: "home",
          });
        case "panel":
          return threadScopeIdForEntrypoint({
            entrypoint: "panel",
          });
      }
    case "local":
      return (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam5.conversationId ??
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam5.clientThreadId
      );
    case "cloud":
      return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam5.taskId;
    case "chatgpt":
    case "other":
      return threadScopeIdForEntrypoint({
        entrypoint: "home",
      });
  }
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpYt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam9,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam10,
) {
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam10 !=
    null
  )
    return false;
  switch (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam9.kind
  ) {
    case "new":
      return (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam9.entrypoint ===
        "home"
      );
    case "local":
      return (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam9.placement ===
          "main" &&
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam9.conversationId !=
          null &&
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam9.conversationId ===
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam9.routeConversationId
      );
    case "cloud":
      return true;
    case "chatgpt":
    case "other":
      return false;
  }
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpT(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.kind
  ) {
    case "new":
      switch (
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.entrypoint
      ) {
        case "home":
        case "panel":
          return threadScopeIdForEntrypoint({
            entrypoint:
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.entrypoint,
          });
        case "library-preview":
          switch (
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4
              .implicitAttachment.kind
          ) {
            case "file":
              return `library-preview:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.implicitAttachment.file.fsPath || appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.implicitAttachment.file.path}`;
            case "image":
              return `library-preview:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.implicitAttachment.image.localPath ?? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.implicitAttachment.image.src}`;
          }
      }
    case "local":
      return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.clientThreadId;
    case "cloud":
      return `cloud:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.taskId}`;
    case "chatgpt":
      return `chatgpt:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam4.conversationId ?? "new"}`;
    case "other":
      return "other";
  }
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpFt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam27,
) {
  return {
    aeonStartTarget: null,
    entrypoint: "library-preview",
    implicitAttachment:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam27,
    kind: "new",
    routeConversationId: null,
  };
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpPt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam23,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam24 = "main",
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam25 = appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam23,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam26 = normalizeConversationScopeId(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam23,
  ),
) {
  return {
    clientThreadId:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam26,
    conversationId:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam23,
    kind: "local",
    placement:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam24,
    routeConversationId:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam25,
  };
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpDt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam2,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam3,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue16 =
    getLocalConversationId(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1,
    );
  switch (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1.routeKind
  ) {
    case "home":
      return {
        aeonStartTarget:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam2?.aeonStartTarget ??
          null,
        entrypoint: "home",
        ...(appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam2?.focusComposerNonce ==
        null
          ? {}
          : {
              focusComposerNonce:
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam2.focusComposerNonce,
            }),
        kind: "new",
        routeConversationId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue16,
      };
    case "new-thread-panel":
      return {
        aeonStartTarget: null,
        entrypoint: "panel",
        kind: "new",
        routeConversationId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue16,
      };
    case "local-thread":
      return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpPt(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1.conversationId,
        "main",
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1.conversationId,
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam3 ??
          normalizeConversationScopeId(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1.conversationId,
          ),
      );
    case "remote-thread":
      return {
        kind: "cloud",
        routeConversationId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue16,
        taskId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1.taskId,
      };
    case "client-local-thread":
      return {
        clientThreadId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam1.clientThreadId,
        conversationId: null,
        kind: "local",
        placement: "main",
        routeConversationId: null,
      };
    case "chatgpt-thread":
    case "other":
      return {
        kind: "other",
        routeConversationId:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue16,
      };
  }
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpUt,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpVt =
    createLazyEsmInitializer(() => {
      currentReactAliasLowerx();
      initThreadEntrypointRuntime();
      _appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainBusinessCheckoutC1u3yp5sG();
      initThreadScopeRuntime();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpUt =
        currentReactAliasLowerbLowert("ComposerScope", {
          key: (
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam20,
          ) =>
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam20.kind ===
              "new" &&
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam20.entrypoint ===
              "home" &&
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam20.focusComposerNonce !=
              null
              ? `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpT(appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam20)}:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam20.focusComposerNonce}`
              : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpT(
                  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam20,
                ),
          parent: RouteScopeSignal,
          retain: {
            max: 100,
          },
        });
    });
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpNt({
  cwd,
  hostId,
  isFollowUp = false,
  isLoading = false,
}) {
  return isFollowUp || isLoading || cwd == null || cwd === "/" || cwd === "~"
    ? null
    : JSON.stringify([hostId, cwd]);
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpCt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam60,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam61,
) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam60.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
    null,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam60.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue2,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam61,
  );
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpEt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam62,
) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam62.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4,
    null,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam62.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
    null,
  );
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpDollar(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam29,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue47 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam29.get(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue48 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam29.get(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
      );
  return () => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam29.get(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4,
    ) ===
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue47 &&
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam29.set(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4,
        null,
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam29.get(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
    ) ===
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue48 &&
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam29.set(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
        null,
      );
  };
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpSt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam45,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam46,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam47,
) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam45.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam47 ==
      null
      ? null
      : {
          key: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam46,
          mode: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam47,
        },
  );
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpAt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam42,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam43,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam44,
) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam42.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
    null,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam42.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4,
    {
      mode: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam44,
      projectKey:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam43,
    },
  );
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpLt(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam52,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam53,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam54,
) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpEt(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam52,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam52.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue3,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam53,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam54,
  );
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam52.set(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue2,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam54,
  );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue2,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue3,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpTt,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpIt,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpOt;
export const appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpRt =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerx();
    currentQueryRpcAliasLowerw();
    currentReactAliasLowerb();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpVt();
    initPersistedAtomRegistryRuntime();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue2 =
      createPersistedAtomRegistryEntry("last-used-continue-in-mode", "local");
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue3 =
      createPersistedAtomSignal(
        (
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam76,
        ) =>
          `composer-mode-by-project:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam76}`,
        undefined,
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4 =
      currentReactAliasLowerxLowert(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpUt,
        () => null,
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5 =
      currentReactAliasLowerxLowert(currentReactAliasLowery, () => null);
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpTt =
      currentReactAliasLowerfLowert(
        currentReactAliasLowery,
        (
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam38,
          { get },
        ) => {
          let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue56 =
            get(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue5,
            );
          return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue56 !=
            null &&
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue56.key ===
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam38
            ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue56.mode
            : null;
        },
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpIt =
      _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDt(
        currentReactAliasLowery,
        ({ get }) => {
          let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue57 =
            get(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue2,
            );
          return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue57 ===
            "remote"
            ? "local"
            : (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue57 ??
                "local");
        },
      );
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpOt =
      currentReactAliasLowerfLowert(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpUt,
        (
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam35,
          { get },
        ) => {
          let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue53 =
            get(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue4,
            );
          return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue53?.projectKey ===
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam35
            ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue53.mode
            : (get(
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue3,
                appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam35,
              ) ?? "local");
        },
      );
  });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpY(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam48,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam48.interface?.displayName?.trim() ||
    businessCheckoutSharedMember0074(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam48.name,
    )
  );
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper1(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam31,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue50 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam31
      .interface?.defaultPrompt;
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue50
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue51 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue50.trim();
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue51.length ===
    0
    ? null
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue51;
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpJ({
  displayLabel,
  icon,
  name,
  path,
}) {
  if (!path) return `$${name}`;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue34 =
    new URLSearchParams();
  displayLabel != null &&
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue34.set(
      "label",
      displayLabel,
    );
  icon != null &&
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue34.set(
      "icon",
      icon,
    );
  let a =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue34.toString();
  return businessCheckoutSharedInitializer0307(
    `$${name}${a.length === 0 ? "" : `?${a}`}`,
    path,
  );
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpQ(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam8,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue20 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam8
        .trim()
        .replace(/^\$/, ""),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue21 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue20.indexOf(
        "?",
      );
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue21 ===
    -1
  )
    return {
      displayLabel: undefined,
      icon: undefined,
      name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue20,
    };
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue22 =
      new URLSearchParams(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue20.slice(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue21 +
            1,
        ),
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue23 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue22
        .get("label")
        ?.trim(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue24 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue22.get(
        "icon",
      );
  return {
    displayLabel:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue23 ==
        null ||
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue23.length ===
        0
        ? undefined
        : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue23,
    icon:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue24 ===
      "pencil-sparkle"
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue24
        : undefined,
    name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue20
      .slice(
        0,
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue21,
      )
      .trim(),
  };
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpQ(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam12,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam13,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue27 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam13.toLowerCase(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue28 =
      [];
  for (let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue39 of appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam12.data) {
    let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue46 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue39.skills.find(
        (item) =>
          item.name.toLowerCase() ===
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue27,
      );
    if (
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue46 !=
      null
    )
      return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue46;
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue28.push(
      ...appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue39.skills.filter(
        (item) =>
          item.name
            .toLowerCase()
            .endsWith(
              `:${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue27}`,
            ),
      ),
    );
  }
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue28.length ===
    1
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue28[0]
    : null;
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper2(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam58,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam58.endsWith(
    " ",
  )
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam58
    : `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam58} `;
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpX(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam14,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue29 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper1(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam14,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue30 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpJ(
        {
          name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam14.name,
          path: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam14.path,
        },
      );
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue29
  )
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper2(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue30,
    );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue31 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue29.toLowerCase(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue32 = `[$${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam14.name.toLowerCase()}](`;
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue31.includes(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue32,
    )
  )
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper2(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue29,
    );
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue33 = `$${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam14.name.toLowerCase()}`;
  return !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam14.path &&
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue31.includes(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue33,
    )
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper2(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue29,
      )
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper2(
        `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue29} ${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue30}`,
      );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpZ =
    createLazyEsmInitializer(() => {
      readThreadTerminalToolDefinition();
      businessCheckoutSharedInitializer0258();
    }),
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpK =
    createLazyEsmInitializer(() => {
      initReactIntlRuntimeChunk();
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG =
        defineMessages({
          label: {
            id: "composer.pluginMention.browserUse.label",
            defaultMessage: "Browser",
            description:
              "Short display label for the Browser plugin in mention chips, mention menus, and settings.",
          },
          restrictedAvailabilityDescription: {
            id: "settings.browserPlugin.restrictedAvailabilityDescription",
            defaultMessage:
              "Disabled by your organization or unavailable in your region",
            description:
              "Description shown when the Browser or Google Chrome plugin is unavailable because access is restricted.",
          },
        });
    });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpU(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam17,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue38 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam17
      .interface?.shortDescription;
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue38 !=
      null &&
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue38.trim()
      .length > 0
  )
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue38;
  let { short_description, shortDescription } =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam17;
  return (
    short_description ??
    shortDescription ??
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam17.description
  );
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpW =
    createLazyEsmInitializer(() => {}),
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpV,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpH =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpV =
        "computer-use";
    });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpC(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam30,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue49 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam30
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/^-+|-+$/g, "");
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue49 ===
    ""
    ? "app"
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue49;
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpU(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam77,
) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue6}${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam77}`;
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper3(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam74,
) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue7}${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam74}`;
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper4(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam75,
) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue12}${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam75}`;
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpF(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam57,
) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue8}${encodeURIComponent(appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam57)}`;
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpP({
  conversationId,
  title,
}) {
  return businessCheckoutSharedInitializer0307(
    title,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpF(
      conversationId,
    ),
  );
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpF(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam67,
) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue13}${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam67.trim()}`;
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpK(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam68,
) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue10}${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam68.trim()}`;
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpM(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam51,
) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue11}${encodeURIComponent(appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam51.trim())}`;
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpN({
  projectId,
  title,
}) {
  return businessCheckoutSharedInitializer0307(
    title,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpM(
      projectId,
    ),
  );
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpUnderscore({
  resourceUri,
  server,
}) {
  return `${appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue9}${encodeURIComponent(server)}/${encodeURIComponent(resourceUri)}`;
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpR(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam70,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam70.startsWith(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue6,
  );
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpL(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam71,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam71.startsWith(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue7,
  );
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpZ(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam72,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam72.startsWith(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue12,
  );
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper5(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam69,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam69.startsWith(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue8,
  );
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam73,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam73.startsWith(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue10,
  );
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpD(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam22,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper5(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam22,
    )
  )
    return null;
  try {
    let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue58 =
      decodeURIComponent(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam22.slice(
          23,
        ),
      ).trim();
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue58.length ===
      0
      ? null
      : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue58;
  } catch {
    return null;
  }
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpE(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam21,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam21,
    )
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue43 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam21
        .slice(9)
        .trim(),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue44 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue43.indexOf(
        "?",
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue45 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue44 ===
      -1
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue43
        : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue43
            .slice(
              0,
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue44,
            )
            .trim();
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue45.length ===
    0
    ? null
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue45;
}
function $e(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam18,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam18.startsWith(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue11,
    )
  )
    return null;
  try {
    let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue59 =
      decodeURIComponent(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam18.slice(
          16,
        ),
      ).trim();
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue59.length ===
      0
      ? null
      : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue59;
  } catch {
    return null;
  }
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam11,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam11.startsWith(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue9,
    )
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue25 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam11.slice(
        15,
      ),
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue26 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue25.indexOf(
        "/",
      );
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue26 ===
    -1
  )
    return null;
  try {
    let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue40 =
        decodeURIComponent(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue25.slice(
            0,
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue26,
          ),
        ),
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue41 =
        decodeURIComponent(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue25.slice(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue26 +
              1,
          ),
        );
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue40.length ===
      0 ||
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue41.length ===
        0
      ? null
      : {
          resourceUri:
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue41,
          server:
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue40,
        };
  } catch {
    return null;
  }
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpH(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam36,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpL(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam36,
    )
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue54 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam36
      .slice(8)
      .trim();
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue54.length ===
    0
    ? null
    : currentQueryRpcAliasUpperWLowero(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue54,
      );
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpP(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam34,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam34.startsWith(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue13,
    )
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue52 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam34
      .slice(9)
      .trim();
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue52.length ===
    0
    ? null
    : currentQueryRpcAliasUpperWLowero(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue52,
      );
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpJ(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam37,
) {
  if (
    !_appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpZ(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam37,
    )
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue55 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam37
      .slice(11)
      .trim();
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue55.length ===
    0
    ? null
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue55;
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpW(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam49,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpR(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam49,
  )
    ? "app"
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam49,
        )
      ? "plugin"
      : "skill";
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpA({
  href,
  label,
}) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpL(
    href,
  ) ||
    _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpZ(
      href,
    ) ||
    _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpP(
      href,
    ) != null
    ? "agent"
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB(
          href,
        )
      ? "plugin"
      : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpD(
            href,
          ) == null
        ? _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG(
            href,
          ) == null
          ? $e(href) == null
            ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpR(
                href,
              )
              ? "app"
              : label.trim().startsWith("$")
                ? "skill"
                : "text"
            : "sites-project"
          : "mcp-resource"
        : "chatgpt-conversation";
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpT(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam16,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam16.trim();
  return (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37.startsWith(
    "$[",
  ) ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37.startsWith(
      "@[",
    )) &&
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37.endsWith(
      "]",
    )
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37.slice(
        2,
        -1,
      )
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37.startsWith(
          "$",
        ) ||
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37.startsWith(
          "@",
        )
      ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37.slice(
          1,
        )
      : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue37;
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam28,
) {
  return {
    name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam28.name,
    displayName:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpY(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam28,
      ),
    path: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam28.path,
    description:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpU(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam28,
      ),
    iconSmall:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam28
        .interface?.iconSmall ?? "",
  };
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpV(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam19,
) {
  return {
    name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpC(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam19.name,
    ),
    displayName:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam19.name,
    path: _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpU(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam19.id,
    ),
    description:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam19.description ??
      "",
    iconSmall:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam19.logoUrl ??
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam19.logoUrlDark ??
      "",
  };
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpY(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam6,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam7 = appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper6(),
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue17 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam6
        .plugin.name,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue18 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam6.displayName ??
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue17,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue19 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue17;
  return (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue17 ===
    "browser"
      ? ((appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue18 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam7.browserUse),
        (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue19 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue18))
      : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue17 ===
          "computer-use" &&
        ((appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue18 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam7.computerUse),
        (appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue19 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue18)),
    {
      name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue19,
      displayName:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue18,
      path: _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpK(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam6
          .plugin.id,
      ),
      description:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam6.description ??
        "",
      iconSmall:
        _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpD(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam6,
        ),
      brandColor:
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper7(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam6
            .plugin.interface,
        ),
    }
  );
}
function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpD(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam50,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam50.composerIconPath ??
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam50.logoPath ??
    ""
  );
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpC(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam59,
) {
  return {
    kind: "skill",
    ..._appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam59,
    ),
  };
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpX(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam63,
) {
  return {
    kind: "app",
    ..._appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpV(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam63,
    ),
  };
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpS(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam55,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam56,
) {
  return {
    kind: "plugin",
    ..._appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpY(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam55,
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam56,
    ),
  };
}
export function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpO(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam33,
) {
  return {
    browserUse:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam33.formatMessage(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG.label,
      ),
    computerUse:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam33.formatMessage(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue14.computerUse,
      ),
  };
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper6() {
  return {
    browserUse:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG
        .label.defaultMessage,
    computerUse:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue14
        .computerUse.defaultMessage,
  };
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper7(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam39,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue60 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam39?.brandColor;
  if (!(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue60 ==
      null ||
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue60.length ===
      0
  ))
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue60;
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpL({
  conversationId,
  displayName,
}) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue42 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper8(
      displayName,
    );
  return {
    kind: "agent",
    name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue42.toLowerCase(),
    displayName:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue42,
    conversationId,
    path: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper3(
      conversationId,
    ),
  };
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpM(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam32,
) {
  return {
    kind: "agent",
    name: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam32.roleName,
    displayName:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam32.roleName,
    path: appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper4(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam32.roleName,
    ),
  };
}
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper8(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam40,
) {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue61 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam40.trim();
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue61.startsWith(
    "@",
  )
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue61
        .slice(1)
        .trim()
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue61;
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue6,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue7,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue8,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue9,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue10,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue11,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue12,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue13,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue14;
export const appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpI =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    initReactIntlRuntimeChunk();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpK();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpW();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpZ();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpH();
    readThreadTerminalToolDefinition();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue6 =
      "app://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue7 =
      "agent://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue8 =
      "chatgpt-conversation://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue9 =
      "mcp-resource://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue10 =
      "plugin://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue11 =
      "sites-project://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue12 =
      "subagent://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue13 =
      "thread://";
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue14 =
      defineMessages({
        computerUse: {
          id: "composer.pluginMention.computerUse.label",
          defaultMessage: "Computer",
          description:
            "Short display label for the Computer Use plugin in mention chips and mention menus.",
        },
      });
  });
function appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper9() {
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue35 =
    document.querySelector('meta[name="initial-route"]');
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue35?.content?.trim()
  )
    return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue35.content.trim();
  let appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue36 =
    new URL(window.location.href).searchParams.get("initialRoute");
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue36
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue36.trim()
    : null;
}
var _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpS;
export const _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpO =
  createLazyEsmInitializer(() => {
    _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpS =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpHelper9();
  });
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpA(
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam78,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam79,
) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam78.set(
    $,
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpParam79,
  );
}
export function _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpI({
  chatGptFeatureAccessStatus,
  codexFeaturesAllowed,
  isModeToggleBlocked,
  workModeEnabled,
}) {
  return (
    chatGptFeatureAccessStatus === "allowed" &&
    codexFeaturesAllowed &&
    workModeEnabled &&
    !isModeToggleBlocked
  );
}
export function __appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpT({
  chatGptFeatureAccessStatus,
  codexFeaturesAllowed,
  isModeToggleBlocked,
  persistedMode,
  settingsLoading,
  workModeEnabled,
}) {
  return codexFeaturesAllowed
    ? isModeToggleBlocked ||
      chatGptFeatureAccessStatus === "denied" ||
      (!settingsLoading && !workModeEnabled)
      ? "work"
      : persistedMode
    : "chat";
}
var appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue15,
  $,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpN;
export const _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpR =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerx();
    currentReactAliasLowerb();
    initPersistedAtomStoreRuntime();
    initPersistedAtomRegistryRuntime();
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue15 =
      "home-composer-mode-v1";
    $ = createPersistedAtomRegistryEntry(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue15,
      "chat",
    );
    _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpN =
      _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDt(
        currentReactAliasLowery,
        ({ get }) =>
          get($) ??
          getPersistedAtomValue(
            appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpValue15,
            "chat",
          ),
      );
  });
export {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpD,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpH,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpJ,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpK,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpL,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpM,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpP,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpR,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpU,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpV,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpW,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpY,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpZ,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpT as _t,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpB,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpC,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpD,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpEt,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpF,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpG,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpIt,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpK,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpN,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpOt,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpPt,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpS,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpTt,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpU,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpUt,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpV,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpVt,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpY,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewK8lpzggpZ,
};
