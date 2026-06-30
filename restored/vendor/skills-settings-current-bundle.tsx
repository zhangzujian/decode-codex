// Restored from ref/webview/assets/skills-settings-77Mu8VFb.js
// Current SkillsSettings backing bundle with restored dependency imports.

import { once as rolldownRuntimeN } from "../runtime/commonjs-interop";
import { currentAppInitialSharedCompatSlotLowerGLowerC as initReactCompilerRuntime } from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  initSkillsPageChunk,
  SkillsPage,
} from "../runtime/current-app-initial/skills-page-current-runtime";
function SkillsSettings() {
  return (
    <SettingsContentLayout>
      <SkillsPage />
    </SettingsContentLayout>
  );
}
rolldownRuntimeN(() => {
  initReactCompilerRuntime();
  initSkillsPageChunk();
  initSettingsContentLayoutChunk();
})();
export { SkillsSettings };
