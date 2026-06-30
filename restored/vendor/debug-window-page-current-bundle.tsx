// Restored from ref/webview/assets/debug-window-page-DHU1KOnj.js
// Current DebugWindowPage backing bundle with restored dependency imports.

import {
  once as rolldownRuntimeN,
  toEsModule as rolldownRuntimeS,
} from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperLLowerI as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLi,
  currentAppInitialSharedCompatSlotUpperO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wO,
  currentAppInitialSharedCompatSlotUnderscore as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wUnderscore,
  currentAppInitialSharedCompatSlotUnderscoreLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC,
  currentAppInitialSharedCompatSlotLowerGLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc,
  currentAppInitialSharedCompatSlotLowerLLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc,
  currentAppInitialSharedCompatSlotLowerY as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wY,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperKLowerC as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKc,
  worktreeNewThreadQueryCompatSlotLowerLLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLs,
  worktreeNewThreadQueryCompatSlotLowerQLowerC as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwQc,
  worktreeNewThreadQueryCompatSlotLowerULowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwUs,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0084 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEa,
  openAiNativeAppDefinition as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dXa,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  debugModalN,
  debugModalR,
} from "../runtime/current-app-initial/debug-modal-current-runtime";
function DebugWindowPage() {
  let debugWindowPageValue4 = (0, debugWindowPageValue1.c)(4),
    [debugWindowPageValue5, debugWindowPageValue6] = (0,
    debugWindowPageValue2.useState)(null),
    debugWindowPageValue7;
  if (
    (debugWindowPageValue4[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((debugWindowPageValue7 = (debugWindowPageParam1) => {
          let { conversationId: conversationId } = debugWindowPageParam1;
          debugWindowPageValue6(conversationId);
        }),
        (debugWindowPageValue4[0] = debugWindowPageValue7))
      : (debugWindowPageValue7 = debugWindowPageValue4[0]),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wY(
      `debug-window-origin-conversation-changed`,
      debugWindowPageValue7,
    ),
    !appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLi.allowDebugMenu(
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKc(),
    ))
  ) {
    let debugWindowPageValue9;
    return (
      debugWindowPageValue4[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((debugWindowPageValue9 = (0, debugWindowPageValue3.jsx)(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEa,
            {
              to: `/`,
              replace: !0,
            },
          )),
          (debugWindowPageValue4[1] = debugWindowPageValue9))
        : (debugWindowPageValue9 = debugWindowPageValue4[1]),
      debugWindowPageValue9
    );
  }
  let debugWindowPageValue8;
  return (
    debugWindowPageValue4[2] === debugWindowPageValue5
      ? (debugWindowPageValue8 = debugWindowPageValue4[3])
      : ((debugWindowPageValue8 = (0, debugWindowPageValue3.jsx)(
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLs,
          {
            electron: !0,
            children: (0, debugWindowPageValue3.jsx)(`main`, {
              className: `h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground`,
              children: (0, debugWindowPageValue3.jsx)(debugModalN, {
                conversationIdOverride: debugWindowPageValue5,
                onClose: debugWindowPageHelper1,
                showHeader: !1,
                showPopOutButton: !1,
              }),
            }),
          },
        )),
        (debugWindowPageValue4[2] = debugWindowPageValue5),
        (debugWindowPageValue4[3] = debugWindowPageValue8)),
    debugWindowPageValue8
  );
}
function debugWindowPageHelper1() {
  return window.close();
}
var debugWindowPageValue1, debugWindowPageValue2, debugWindowPageValue3;
rolldownRuntimeN(() => {
  ((debugWindowPageValue1 =
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc()),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wO(),
    (debugWindowPageValue2 = rolldownRuntimeS(
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC(),
      1,
    )),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dXa(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwUs(),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wUnderscore(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwQc(),
    debugModalR(),
    (debugWindowPageValue3 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc()));
})();
export { DebugWindowPage };
