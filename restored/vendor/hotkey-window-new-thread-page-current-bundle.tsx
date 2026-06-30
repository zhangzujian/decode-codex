// Restored from ref/webview/assets/hotkey-window-new-thread-page-DC8KDgIn.js
// Current hotkey window new thread page backing bundle with restored dependency imports.

import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperKLowerT,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotUpperO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  intlFormatDateTimeRuntime,
  currentAppInitialSharedRuntime0710,
  currentAppInitialSharedMember0815,
  currentAppInitialSharedMember0924,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initHomeHeroHeadingChunk,
  ComposerProjectSelector,
} from "./automations-page-current-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotLowerN,
  appgenLibraryHotDjo67r4nCompatSlotLowerT,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  CodexKnotLogoIcon,
  initCodexKnotLogoIconChunk,
} from "../runtime/current-app-initial/plugin-logo-card-runtime";
import {
  initThreadLayoutChunk,
  ThreadLayout,
} from "../runtime/current-app-initial/conversation-dialog-layer-runtime";
import {
  initHotkeyWindowDetailLayoutChunk,
  useHotkeyWindowDetailLayout,
} from "../utils/use-hotkey-window-detail-layout";
import {
  initThreadScrollLayoutChunk,
  ThreadScrollLayout,
} from "../threads/thread-scroll-layout";
export function HotkeyWindowNewThreadPage() {
  let hotkeyWindowNewThreadPageValue4 = hotkeyWindowNewThreadPageHelper1,
    hotkeyWindowNewThreadPageValue5;
  hotkeyWindowNewThreadPageValue5 = {
    title: (
      <span className="max-w-full truncate">
        {hotkeyWindowNewThreadPageValue2.jsx(
          currentAppInitialSharedMember0924,
          {
            id: "threadPage.newThread",
            defaultMessage: "New chat",
            description: "Header title for the home page",
          },
        )}
      </span>
    ),
    mainWindowPath: "/",
    canCollapseToHome: false,
  };
  useHotkeyWindowDetailLayout(hotkeyWindowNewThreadPageValue5);
  let hotkeyWindowNewThreadPageValue6 = hotkeyWindowNewThreadPageValue2.jsx(
    appgenLibraryHotDjo67r4nCompatSlotLowerT,
    {
      showWorkspaceDropdownInFooter: false,
      onLocalConversationCreated: hotkeyWindowNewThreadPageValue4,
    },
  );
  let hotkeyWindowNewThreadPageValue7 = (
    <div aria-hidden="true">
      {hotkeyWindowNewThreadPageValue2.jsx(CodexKnotLogoIcon, {
        className: "h-12 w-12 text-token-foreground/20",
      })}
    </div>
  );
  return hotkeyWindowNewThreadPageValue2.jsx(ThreadLayout, {
    className: "h-full [--padding-panel:calc(var(--padding-panel-base)/2)]",
    children: hotkeyWindowNewThreadPageValue2.jsx(ThreadScrollLayout, {
      footer: hotkeyWindowNewThreadPageValue6,
      children: (
        <div className="flex h-full items-center justify-center px-panel">
          <div className="flex flex-col items-center gap-3 text-center">
            {hotkeyWindowNewThreadPageValue7}
            <div className="flex flex-col items-center gap-1">
              <div className="heading-xl mt-2 font-normal text-token-foreground select-none">
                {hotkeyWindowNewThreadPageValue2.jsx(
                  currentAppInitialSharedMember0924,
                  {
                    id: "home.hero.letsBuild",
                    defaultMessage: "Let’s build",
                    description:
                      "Label above the workspace name on the electron home page",
                  },
                )}
              </div>
              {hotkeyWindowNewThreadPageValue2.jsx(ComposerProjectSelector, {
                variant: "hero",
              })}
            </div>
          </div>
        </div>
      ),
    }),
  });
}
function hotkeyWindowNewThreadPageHelper1(hotkeyWindowNewThreadPageParam1) {
  currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.open({
    path: currentAppInitialSharedCompatSlotUpperKLowerT(
      hotkeyWindowNewThreadPageParam1,
    ),
  });
}
var hotkeyWindowNewThreadPageValue1, hotkeyWindowNewThreadPageValue2;
once(() => {
  hotkeyWindowNewThreadPageValue1 =
    currentAppInitialSharedCompatSlotLowerGLowerC();
  currentAppInitialSharedCompatSlotUpperO();
  intlFormatDateTimeRuntime();
  appgenLibraryHotDjo67r4nCompatSlotLowerN();
  initHomeHeroHeadingChunk();
  initCodexKnotLogoIconChunk();
  currentAppInitialSharedRuntime0710();
  initThreadLayoutChunk();
  initThreadScrollLayoutChunk();
  initHotkeyWindowDetailLayoutChunk();
  hotkeyWindowNewThreadPageValue2 =
    currentAppInitialSharedCompatSlotLowerLLowerC();
})();
