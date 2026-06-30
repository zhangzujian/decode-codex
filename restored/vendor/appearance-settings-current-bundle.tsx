// Restored from ref/webview/assets/appearance-settings-ig-5Lyy_.js
// Current AppearanceSettings backing bundle with restored dependency imports.

import { once as rolldownRuntimeN } from "../runtime/commonjs-interop";
import { currentAppInitialSharedCompatSlotLowerGLowerC as initReactCompilerRuntime } from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotUpperH as initSettingsTitleSlugChunk,
  appgenLibraryHotDjo67r4nCompatSlotUpperV as SettingsTitleSlug,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  generalSettingsN as GeneralSettings,
  generalSettingsO as initGeneralSettingsChunk,
} from "../runtime/current-app-initial/general-settings-current-runtime";
function AppearanceSettings() {
  return (
    <SettingsContentLayout title={<SettingsTitleSlug slug="appearance" />}>
      <GeneralSettings />
    </SettingsContentLayout>
  );
}
rolldownRuntimeN(() => {
  initReactCompilerRuntime();
  initSettingsContentLayoutChunk();
  initSettingsTitleSlugChunk();
  initGeneralSettingsChunk();
})();
export { AppearanceSettings };
