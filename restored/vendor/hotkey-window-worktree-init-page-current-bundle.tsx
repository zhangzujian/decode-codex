// Restored from ref/webview/assets/hotkey-window-worktree-init-page-CDrG7Phs.js
// Current hotkey window worktree init page backing bundle with restored dependency imports.

import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperKLowerT,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUpperQLowerT,
  currentAppInitialSharedCompatSlotUpperVLowerO,
  currentAppInitialSharedCompatSlotUpperZLowerT,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  currentAppInitialSharedMember0084,
  intlFormatDateTimeRuntime,
  currentAppInitialSharedMember0194,
  currentAppInitialSharedRuntime0710,
  currentAppInitialSharedMember0815,
  openAiNativeAppDefinition,
  currentAppInitialSharedMember0924,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  launcherHotkeyStateQuery,
  initLauncherHotkeyStateChunk,
} from "../features/hotkey-window-state";
import {
  initHotkeyWindowDetailLayoutChunk,
  useHotkeyWindowDetailLayout,
} from "../utils/use-hotkey-window-detail-layout";
import {
  initPendingWorktreeChunk,
  PendingWorktreeConversation,
} from "../worktree/pending-worktree-conversation-ui";
export function HotkeyWindowWorktreeInitPage() {
  let { pendingWorktreeId } = currentAppInitialSharedMember0194(),
    { data } = currentAppInitialSharedCompatSlotLowerQLowerO(
      launcherHotkeyStateQuery,
    ),
    hotkeyWindowWorktreeInitPageValue4 =
      data == null || data.configuredHotkey != null,
    hotkeyWindowWorktreeInitPageValue5 =
      currentAppInitialSharedCompatSlotUpperQLowerT(
        hotkeyWindowWorktreeInitPageValue4,
      );
  let hotkeyWindowWorktreeInitPageValue6 = hotkeyWindowWorktreeInitPageValue5,
    hotkeyWindowWorktreeInitPageValue7;
  if (
    ((hotkeyWindowWorktreeInitPageValue7 =
      pendingWorktreeId == null
        ? null
        : {
            title: (
              <span className="max-w-full truncate">
                {hotkeyWindowWorktreeInitPageValue2.jsx(
                  currentAppInitialSharedMember0924,
                  {
                    id: "worktreeInitV2.title",
                    defaultMessage: "Creating worktree",
                    description: "Title for the worktree init v2 page",
                  },
                )}
              </span>
            ),
            mainWindowPath:
              currentAppInitialSharedCompatSlotUpperZLowerT(pendingWorktreeId),
          }),
    useHotkeyWindowDetailLayout(hotkeyWindowWorktreeInitPageValue7),
    !pendingWorktreeId)
  ) {
    let hotkeyWindowWorktreeInitPageValue9;
    return hotkeyWindowWorktreeInitPageValue2.jsx(
      currentAppInitialSharedMember0084,
      {
        to: hotkeyWindowWorktreeInitPageValue6,
        replace: true,
      },
    );
  }
  return hotkeyWindowWorktreeInitPageValue2.jsx(PendingWorktreeConversation, {
    homePath: hotkeyWindowWorktreeInitPageValue6,
    conversationPathBuilder: currentAppInitialSharedCompatSlotUpperKLowerT,
    onConversationReady: hotkeyWindowWorktreeInitPageHelper1,
  });
}
function hotkeyWindowWorktreeInitPageHelper1(
  hotkeyWindowWorktreeInitPageParam1,
) {
  currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.open({
    path: currentAppInitialSharedCompatSlotUpperKLowerT(
      hotkeyWindowWorktreeInitPageParam1,
    ),
  });
}
var hotkeyWindowWorktreeInitPageValue1, hotkeyWindowWorktreeInitPageValue2;
once(() => {
  hotkeyWindowWorktreeInitPageValue1 =
    currentAppInitialSharedCompatSlotLowerGLowerC();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  intlFormatDateTimeRuntime();
  openAiNativeAppDefinition();
  currentAppInitialSharedRuntime0710();
  initPendingWorktreeChunk();
  initLauncherHotkeyStateChunk();
  initHotkeyWindowDetailLayoutChunk();
  hotkeyWindowWorktreeInitPageValue2 =
    currentAppInitialSharedCompatSlotLowerLLowerC();
})();
