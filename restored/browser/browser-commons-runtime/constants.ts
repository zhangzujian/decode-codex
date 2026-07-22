// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser zoom, annotation analytics, and default find-state constants.

export const BROWSER_ZOOM_LEVELS = [
  25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500,
];
export const MAX_BROWSER_ZOOM_PERCENT = 500;

export const annotationFlowKind = {
  BATCH: "batch",
  SINGLE: "single",
} as const;

export const annotationModeEntrySource = {
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_ANNOTATE:
    "context_menu_annotate",
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_QUICK_ANNOTATE:
    "context_menu_quick_annotate",
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_KEYBOARD_SHORTCUT:
    "keyboard_shortcut",
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_TOOLBAR_BUTTON:
    "toolbar_button",
} as const;

export const browserAnnotationModeChangedEvent =
  "codex_in_app_browser_annotation_mode_changed";
export const browserNavigatedEvent = "codex_in_app_browser_navigated";
export const browserPanelOpenedEvent = "codex_in_app_browser_panel_opened";

export const emptyBrowserFindState = {
  active: false,
  activeMatchIndex: null,
  query: "",
  totalMatches: 0,
};

export function clampBrowserZoomPercent(value: number): number {
  if (!Number.isFinite(value)) return 100;
  return Math.min(MAX_BROWSER_ZOOM_PERCENT, Math.max(25, Math.round(value)));
}
