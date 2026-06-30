// Restored from ref/webview/assets/hotkey-window-thread-page-DGErqu4u.js
// Current hotkey window thread page backing bundle with restored dependency imports.

import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperJLowerT,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUpperQLowerT,
  currentAppInitialSharedCompatSlotLowerTLowerR,
  currentAppInitialSharedCompatSlotUpperVLowerO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerF,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerF,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  currentAppInitialSharedMember0084,
  reactRouterRouteScopeParentRuntime,
  intlFormatDateTimeRuntime,
  currentAppInitialSharedMember0194,
  appServerDisconnectedAppServerSignal,
  reactRouterMember0297,
  currentAppInitialSharedFunction0375,
  currentAppInitialSharedMember0874,
  openAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotDollarLowerN,
  appgenLibraryHotDjo67r4nCompatSlotUpperQLowerN,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  launcherHotkeyStateQuery,
  initLauncherHotkeyStateChunk,
} from "../features/hotkey-window-state";
import {
  initHotkeyWindowDetailLayoutChunk,
  useHotkeyWindowDetailLayout,
} from "../utils/use-hotkey-window-detail-layout";
import {
  initLocalConversationHeartbeatAutomationThreadStateReporter,
  initLocalConversationStreamRoleProductEventReporter,
  LocalConversationHeartbeatAutomationThreadStateReporter,
  LocalConversationStreamRoleProductEventReporter,
} from "../conversations/local-conversation-stream-role-product-event";
import {
  initLocalConversationThreadChunk,
  usePinnedSummaryPanelLayout,
  initLocalConversationArtifacts,
  LocalConversationThread,
} from "../conversations/local-conversation-thread";
export function HotkeyWindowThreadPage() {
  let hotkeyWindowThreadPageValue4 =
      currentAppInitialSharedCompatSlotUpperKLowerO(reactRouterMember0297),
    hotkeyWindowThreadPageValue5 = currentAppInitialSharedFunction0375(),
    { conversationId } = currentAppInitialSharedMember0194(),
    { data } = currentAppInitialSharedCompatSlotLowerQLowerO(
      launcherHotkeyStateQuery,
    ),
    hotkeyWindowThreadPageValue6 =
      data == null || data.configuredHotkey != null,
    hotkeyWindowThreadPageValue7 =
      currentAppInitialSharedCompatSlotUpperQLowerT(
        hotkeyWindowThreadPageValue6,
      );
  let hotkeyWindowThreadPageValue8 = hotkeyWindowThreadPageValue7,
    hotkeyWindowThreadPageValue9 =
      currentAppInitialSharedCompatSlotUpperGLowerO(
        worktreeNewThreadOrchestratorCompatSlotLowerZLowerF,
        conversationId ?? null,
      ),
    hotkeyWindowThreadPageValue10 =
      currentAppInitialSharedCompatSlotUpperGLowerO(
        currentAppInitialSharedMember0874,
        conversationId ?? null,
      ),
    hotkeyWindowThreadPageValue11 =
      appgenLibraryHotDjo67r4nCompatSlotUpperQLowerN(
        hotkeyWindowThreadPageValue10
          ? currentAppInitialSharedCompatSlotLowerTLowerR(
              hotkeyWindowThreadPageValue10,
            )
          : null,
      );
  let hotkeyWindowThreadPageValue12 = hotkeyWindowThreadPageValue11;
  usePinnedSummaryPanelLayout(hotkeyWindowThreadPageValue4);
  let hotkeyWindowThreadPageValue13;
  if (
    ((hotkeyWindowThreadPageValue13 =
      conversationId == null
        ? null
        : {
            title: (
              <div className="flex max-w-full min-w-0 items-baseline gap-2">
                <div className="min-w-0 shrink-[999] truncate text-token-foreground">
                  {hotkeyWindowThreadPageValue9 ??
                    hotkeyWindowThreadPageValue5.formatMessage({
                      id: "hotkeyWindow.defaultTitle",
                      defaultMessage: "Codex",
                      description:
                        "Fallback title for hotkey window thread header",
                    })}
                </div>
                {hotkeyWindowThreadPageValue12 == null ? null : (
                  <div className="flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground">
                    <span className="truncate">
                      {hotkeyWindowThreadPageValue12}
                    </span>
                  </div>
                )}
              </div>
            ),
            mainWindowPath:
              currentAppInitialSharedCompatSlotUpperJLowerT(conversationId),
          }),
    useHotkeyWindowDetailLayout(hotkeyWindowThreadPageValue13),
    !conversationId)
  ) {
    let hotkeyWindowThreadPageValue18;
    return hotkeyWindowThreadPageValue2.jsx(currentAppInitialSharedMember0084, {
      to: hotkeyWindowThreadPageValue8,
      replace: true,
    });
  }
  let hotkeyWindowThreadPageValue14, hotkeyWindowThreadPageValue15;
  hotkeyWindowThreadPageValue14 = hotkeyWindowThreadPageValue2.jsx(
    LocalConversationStreamRoleProductEventReporter,
    {
      conversationId,
    },
  );
  hotkeyWindowThreadPageValue15 = hotkeyWindowThreadPageValue2.jsx(
    LocalConversationHeartbeatAutomationThreadStateReporter,
    {
      conversationId,
    },
  );
  let hotkeyWindowThreadPageValue16 = (
    <div className="h-full [--padding-panel:calc(var(--padding-panel-base)/2)]">
      {hotkeyWindowThreadPageValue2.jsx(LocalConversationThread, {
        conversationId,
        allowMissingConversation: true,
        showExternalFooter: true,
      })}
    </div>
  );
  return (
    <>
      {hotkeyWindowThreadPageValue14}
      {hotkeyWindowThreadPageValue15}
      {hotkeyWindowThreadPageValue16}
    </>
  );
}
var hotkeyWindowThreadPageValue1, hotkeyWindowThreadPageValue2;
once(() => {
  hotkeyWindowThreadPageValue1 =
    currentAppInitialSharedCompatSlotLowerGLowerC();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  intlFormatDateTimeRuntime();
  openAiNativeAppDefinition();
  appServerDisconnectedAppServerSignal();
  initLocalConversationHeartbeatAutomationThreadStateReporter();
  initLocalConversationStreamRoleProductEventReporter();
  initLocalConversationThreadChunk();
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerF();
  reactRouterRouteScopeParentRuntime();
  appgenLibraryHotDjo67r4nCompatSlotDollarLowerN();
  initLocalConversationArtifacts();
  initLauncherHotkeyStateChunk();
  initHotkeyWindowDetailLayoutChunk();
  hotkeyWindowThreadPageValue2 =
    currentAppInitialSharedCompatSlotLowerLLowerC();
})();
