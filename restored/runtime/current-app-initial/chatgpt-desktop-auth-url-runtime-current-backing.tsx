// Restored from ref/webview/assets/chatgpt-desktop-auth-url-DpvX8Jo3.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// ChatgptDesktopAuthUrl chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9D,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O,
} from "./shared-host-services-runtime";
import {
  windowContinuationRetryDelayMs as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eI,
  windowContinuationWarningMessage as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eN,
} from "../current-ref-aliases/current-app-shared/index";
import { loadStatsigClientRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNssizff1B } from "../package-adapters/statsig-current/index";
import {
  businessCheckoutSharedRuntimeVariant3Member0007 as appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiG,
  businessCheckoutSharedRuntimeVariant3Member0010 as appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiK,
  businessCheckoutSharedRuntimeVariant3Member0021 as appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiQ,
  businessCheckoutSharedRuntimeVariant3Member0038 as appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiW,
} from "../current-ref-aliases/business-checkout-shared-runtime-variant-3/index";
export async function chatgptDesktopAuthUrlO({
  appBrand,
  hostId = appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eI,
  signal,
  useHostedLoginSuccessPage,
  useStreamlinedLogin,
}) {
  let chatgptDesktopAuthUrlValue12 = chatgptDesktopAuthUrlHelper1(signal);
  return hostId === "local"
    ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O(
        "login-with-chatgpt",
        {
          abortController: chatgptDesktopAuthUrlValue12,
          ...(useHostedLoginSuccessPage && appBrand != null
            ? {
                appBrand,
              }
            : {}),
          useHostedLoginSuccessPage,
          useStreamlinedLogin,
        },
      )
    : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O(
        "login-with-chatgpt-for-host",
        {
          abortController: chatgptDesktopAuthUrlValue12,
          hostId,
          ...(useHostedLoginSuccessPage && appBrand != null
            ? {
                appBrand,
              }
            : {}),
          useHostedLoginSuccessPage,
          useStreamlinedLogin,
        },
      );
}
export function chatgptDesktopAuthUrlA({ signal } = {}) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9O(
    "login-with-chatgpt-device-code",
    {
      abortController: chatgptDesktopAuthUrlHelper1(signal),
    },
  );
}
function chatgptDesktopAuthUrlHelper1(chatgptDesktopAuthUrlParam8) {
  let chatgptDesktopAuthUrlValue14 = new AbortController();
  return chatgptDesktopAuthUrlParam8 == null
    ? chatgptDesktopAuthUrlValue14
    : chatgptDesktopAuthUrlParam8.aborted
      ? (chatgptDesktopAuthUrlValue14.abort(), chatgptDesktopAuthUrlValue14)
      : (chatgptDesktopAuthUrlParam8.addEventListener(
          "abort",
          () => chatgptDesktopAuthUrlValue14.abort(),
          {
            once: true,
          },
        ),
        chatgptDesktopAuthUrlValue14);
}
export const chatgptDesktopAuthUrlI = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewL16cgjx9D();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eN();
});
export function chatgptDesktopAuthUrlT({
  allowedWorkspaceId,
  authUrl,
  codexAppVersion,
  currentWorkspaceId,
  loginHint,
  sourceSurfaceStableId = chatgptDesktopAuthUrlValue1.StableID.get(
    appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiW,
  ),
  includeCodexOriginStableId = false,
  useDesktopAuth,
  useStreamlinedLoginUx,
}) {
  let _chatgptDesktopAuthUrlO = !!(
    allowedWorkspaceId ||
    codexAppVersion ||
    currentWorkspaceId ||
    loginHint ||
    sourceSurfaceStableId
  );
  if (!_chatgptDesktopAuthUrlO && !useDesktopAuth && !useStreamlinedLoginUx)
    return authUrl;
  try {
    let chatgptDesktopAuthUrlValue11 = new URL(authUrl);
    if (chatgptDesktopAuthUrlValue11.pathname === chatgptDesktopAuthUrlValue2) {
      let chatgptDesktopAuthUrlValue13 =
        chatgptDesktopAuthUrlValue11.searchParams.get("authorize_url");
      if (_chatgptDesktopAuthUrlO && chatgptDesktopAuthUrlValue13) {
        let chatgptDesktopAuthUrlValue15 = new URL(
          chatgptDesktopAuthUrlValue13,
        );
        chatgptDesktopAuthUrlHelper2(
          chatgptDesktopAuthUrlValue15,
          allowedWorkspaceId,
          codexAppVersion,
          currentWorkspaceId,
          loginHint,
          sourceSurfaceStableId,
          includeCodexOriginStableId,
        );
        chatgptDesktopAuthUrlValue11.searchParams.set(
          "authorize_url",
          chatgptDesktopAuthUrlValue15.toString(),
        );
      }
      return (
        useStreamlinedLoginUx &&
          chatgptDesktopAuthUrlValue11.searchParams.set(
            chatgptDesktopAuthUrlValue6,
            "true",
          ),
        chatgptDesktopAuthUrlValue11.toString()
      );
    }
    if (
      (_chatgptDesktopAuthUrlO &&
        chatgptDesktopAuthUrlHelper2(
          chatgptDesktopAuthUrlValue11,
          allowedWorkspaceId,
          codexAppVersion,
          currentWorkspaceId,
          loginHint,
          sourceSurfaceStableId,
          includeCodexOriginStableId,
        ),
      useStreamlinedLoginUx &&
        chatgptDesktopAuthUrlValue11.searchParams.set(
          chatgptDesktopAuthUrlValue6,
          "true",
        ),
      !useDesktopAuth)
    )
      return chatgptDesktopAuthUrlValue11.toString();
    let _chatgptDesktopAuthUrlA = new URL(chatgptDesktopAuthUrlValue3);
    return (
      _chatgptDesktopAuthUrlA.searchParams.set(
        "authorize_url",
        chatgptDesktopAuthUrlValue11.toString(),
      ),
      useStreamlinedLoginUx &&
        _chatgptDesktopAuthUrlA.searchParams.set(
          chatgptDesktopAuthUrlValue6,
          "true",
        ),
      _chatgptDesktopAuthUrlA.toString()
    );
  } catch {
    return authUrl;
  }
}
export function chatgptDesktopAuthUrlN(chatgptDesktopAuthUrlParam9) {
  return chatgptDesktopAuthUrlParam9.get(
    appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiK,
  ).data?.version;
}
function chatgptDesktopAuthUrlHelper2(
  chatgptDesktopAuthUrlParam1,
  chatgptDesktopAuthUrlParam2,
  chatgptDesktopAuthUrlParam3,
  chatgptDesktopAuthUrlParam4,
  chatgptDesktopAuthUrlParam5,
  chatgptDesktopAuthUrlParam6,
  chatgptDesktopAuthUrlParam7,
) {
  chatgptDesktopAuthUrlParam2 &&
    chatgptDesktopAuthUrlParam1.searchParams.set(
      chatgptDesktopAuthUrlValue7,
      chatgptDesktopAuthUrlParam2,
    );
  chatgptDesktopAuthUrlParam3 &&
    chatgptDesktopAuthUrlParam1.searchParams.set(
      chatgptDesktopAuthUrlValue4,
      chatgptDesktopAuthUrlParam3,
    );
  chatgptDesktopAuthUrlParam4 &&
    chatgptDesktopAuthUrlParam1.searchParams.set(
      chatgptDesktopAuthUrlValue8,
      chatgptDesktopAuthUrlParam4,
    );
  chatgptDesktopAuthUrlParam5 &&
    chatgptDesktopAuthUrlParam1.searchParams.set(
      chatgptDesktopAuthUrlValue9,
      chatgptDesktopAuthUrlParam5,
    );
  chatgptDesktopAuthUrlParam6 &&
    (chatgptDesktopAuthUrlParam1.searchParams.set(
      chatgptDesktopAuthUrlValue10,
      chatgptDesktopAuthUrlParam6,
    ),
    chatgptDesktopAuthUrlParam7 &&
      chatgptDesktopAuthUrlParam1.searchParams.set(
        chatgptDesktopAuthUrlValue5,
        chatgptDesktopAuthUrlParam6,
      ));
}
var chatgptDesktopAuthUrlValue1,
  chatgptDesktopAuthUrlValue2,
  chatgptDesktopAuthUrlValue3,
  chatgptDesktopAuthUrlValue4,
  chatgptDesktopAuthUrlValue5,
  chatgptDesktopAuthUrlValue6,
  chatgptDesktopAuthUrlValue7,
  chatgptDesktopAuthUrlValue8,
  chatgptDesktopAuthUrlValue9,
  chatgptDesktopAuthUrlValue10;
export const chatgptDesktopAuthUrlR = rolldownRuntimeN(() => {
  chatgptDesktopAuthUrlValue1 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNssizff1B();
  appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiQ();
  appInitialAppMainBusinessCheckoutSwitchWorkspaceDialogSettingsPageLoginRouteCo0rxi42yiG();
  chatgptDesktopAuthUrlValue2 = "/codex/desktop-auth";
  chatgptDesktopAuthUrlValue3 = `https://chatgpt.com${chatgptDesktopAuthUrlValue2}`;
  chatgptDesktopAuthUrlValue4 = "codex_app_version";
  chatgptDesktopAuthUrlValue5 = "codex_origin_stable_id";
  chatgptDesktopAuthUrlValue6 = "codex_streamlined_login";
  chatgptDesktopAuthUrlValue7 = "allowed_workspace_id";
  chatgptDesktopAuthUrlValue8 = "current_workspace_id";
  chatgptDesktopAuthUrlValue9 = "login_hint";
  chatgptDesktopAuthUrlValue10 = "source_surface_stable_id";
});
