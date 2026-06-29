// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// In-app browser sidebar host: owns the toolbar (back/forward, address bar,
// security indicator, screenshot/annotate/downloads/menu actions), the device
// emulation toolbar, the zoom controller, and the managed webview / cursor
// overlay, dispatching browser-sidebar commands to the host process.
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as React from "react";
import { flushSync } from "react-dom";
import { useIntl } from "../vendor/react-intl";
import { useSystemPrefersReducedMotion } from "../utils/reduced-motion-preference";
import { classNames } from "../utils/class-names";
import { vscodeApiF } from "../boundaries/vscode-api";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { BackForwardNavigationButtons } from "../ui/back-forward-navigation-buttons";
import { BrowserSidebarMenu } from "../ui/browser-sidebar-menu";
import { StopIcon } from "../icons/stop-icon";
import { RefreshIcon } from "../icons/refresh-icon";
import { ChevronIcon } from "../icons/chevron-icon";
import { ExternalLinkIcon } from "../icons/external-link-icon";
import { browserSidebarMode } from "./browser-sidebar-state";
import { browserSidebarManager } from "./sidebar-manager";
import { BrowserAnnotateButton } from "./browser-annotate-button";
import { BrowserSidebarWebview } from "./sidebar-webview";
import {
  BrowserSidebarZoomController,
  type BrowserSidebarZoomCommandDispatcher,
} from "./browser-sidebar-zoom-controller";
import {
  ADDRESS_FADE_MASK_CLASS,
  FLOATING_COMPOSER_TOGGLE_HEIGHT,
  FOCUS_MODE,
  TOGGLE_ANNOTATION_MODE_ACCELERATOR,
  type BrowserSidebarBoundsRect,
  type FocusMode,
  canDismissActiveEditor,
  createDefaultDesignHoldState,
  isBrowserTabMatch,
  isSpaceOrEnterKey,
  scaleBounds,
  splitCertificateErrorScheme,
} from "./browser-sidebar-host-utils";
import {
  BrowserAddressInput,
  BrowserAddressSecurityIndicator,
  BrowserAnnotationTakeoverToolbar,
  BrowserCursorOverlay,
  BrowserDeviceToolbarOverlay,
  BrowserDownloadsButton,
  BrowserFloatingComposer,
  BrowserProfileImportNux,
  BrowserScreenshotButton,
  BrowserSidebarFallbackWebview,
  BrowserSidebarPlaceholder,
  ElectronExtensionGate,
  activeBrowserFindTargetAtom,
  activeBrowserTabIdQuery,
  ANNOTATION_SETTLE_ANIMATION,
  activeSidePanelKindAtom,
  annotationAddModifierPressedAtom,
  annotationFlowKind,
  annotationModeEntrySource,
  appStoreScope,
  bottomPanelAnimationSignal,
  browserAnnotationModeChangedEvent,
  browserAnnotationTakeoverEvent,
  browserDeviceToolbarBackgroundColor,
  browserDeviceToolbarLayoutAtom,
  browserFindFocusRequestAtom,
  browserFindStateAtom,
  browserManagedQueryAtom,
  browserNavigatedEvent,
  browserOpenedInExternalEvent,
  browserOwlPermissionsFlag,
  browserPanelOpenedEvent,
  browserPrintEnabledFlag,
  browserProfileImportNuxSeenAtom,
  browserTabType,
  browserToolbarActionEvent,
  browserToolbarActionType,
  buildBrowserProfileImportQuery,
  clearBrowserFindFocus,
  clearBrowserPendingNavigation,
  clearBrowserPendingOpen,
  computeBrowserDeviceToolbarLayout,
  computeEmulatedViewport,
  designModifierPressedAtom,
  discardBrowserAnnotationsModalConfig,
  emptyBrowserFindState,
  extractBrowserComments,
  featureFlagQuery,
  floatingComposerMessages,
  focusBrowserConversationScope,
  formatBrowserAddressDisplay,
  getAnnotationFlowConfig,
  getBrowserAdoptedWebContentsId,
  getBrowserAdoptionLease,
  getBrowserOpenReason,
  getBrowserOpenSource,
  getConversationScopeValue,
  getDefaultBrowserTabId,
  getPendingBrowserAddressOverride,
  getPendingBrowserOpenReason,
  getPendingBrowserOpenSource,
  getResponsiveViewportSize,
  hasPendingBrowserComments,
  hasQueuedDesignTweaks,
  importBrowserProfiles,
  markBrowserToolbarInteracted,
  toastControllerToken,
  isCommentForBrowserTab,
  isElementFocusWithin,
  isEventWithinElement,
  isSidePanelVisibleAtom,
  markBrowserTabVisited,
  multiBrowserTabsEnabledAtom,
  newTabPageTitle,
  normalizeBrowserUrl,
  openBrowserFind,
  openBrowserPanelForTab,
  openChromiumInternalPage,
  openExternalLink,
  openScopedConfirmModal,
  persistedBrowserTabsGateId,
  resetBrowserChromeAutoHide,
  resolveBrowserNavigationUrl,
  resolveBrowserZoomPercent,
  rightPanelComposerReserveAtom,
  rotateDeviceToolbarState,
  setActiveBrowserFindTarget,
  setActiveSidePanelKind,
  setBrowserChromeForceVisible,
  setBrowserFindState,
  shouldShowBrowserProfileImportNux,
  submitBrowserAnnotationComments,
  syncBrowserOpenState,
  toBrowserCommentAttachment,
  toConversationId,
  toThemeVariant,
  trackScopedAnalyticsEvent,
  useAsyncQueryValue,
  useBrowserSidebarComments,
  useFeatureGate,
  useFormattedAcceleratorLabel,
  useHostMessageSubscription,
  useKeyboardAccelerator,
  useNamedKeyboardShortcut,
  useRightPanelLayout,
  useScopedQuery,
  useScopedStore,
  useScopedValue,
  useThemePreference,
  useWindowZoom,
} from "../boundaries/onboarding-commons-externals.facade";

const DEFAULT_BROWSER_TAB_SNAPSHOT = {
  annotationFlow: annotationFlowKind.BATCH,
  tabType: browserTabType.NEW_TAB_PAGE,
  isSuspended: false,
  title: newTabPageTitle,
  url: "",
  faviconUrl: null,
  securityState: null,
  isLoading: false,
  canGoBack: false,
  canGoForward: false,
  zoomPercent: 100,
  commentModeDisabledReason: null,
  interactionMode: browserSidebarMode.BROWSE,
  isAudible: false,
  isCapturingUserMedia: false,
  annotationEditorMode: "comment",
  isAnnotationAddModifierPressed: false,
  isOriginalViewEnabled: false,
  isTweaksEditorOpen: false,
  comments: [],
};

const ANNOTATION_ENTRY_SOURCE_BY_TRIGGER: Record<string, unknown> = {
  "context-menu-annotate":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_ANNOTATE,
  "context-menu-quick-annotate":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_QUICK_ANNOTATE,
  "keyboard-shortcut":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_KEYBOARD_SHORTCUT,
  "toolbar-button":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_TOOLBAR_BUTTON,
};

export type BrowserSidebarPanelTarget = "right" | "bottom";

export type BrowserSidebarProps = {
  autoFocusOnOpen?: boolean;
  conversationId: string;
  browserTabId?: string;
  hostDisplayName?: string;
  cwd?: string;
  isVisible: boolean;
  isAnnotationModeEnabled?: boolean;
  isDeviceToolbarEnabled?: boolean;
  isDeviceToolbarMenuItemVisible?: boolean;
  isScreenshotCaptureEnabled?: boolean;
  isFloatingComposerToggleVisible?: boolean;
  isFloatingComposerVisible?: boolean;
  isTweaksEnabled?: boolean;
  onToggleFloatingComposer?: () => void;
  panelTarget?: BrowserSidebarPanelTarget;
};

export function BrowserSidebar({
  autoFocusOnOpen = false,
  conversationId,
  browserTabId = getDefaultBrowserTabId(conversationId),
  cwd,
  isVisible,
  isAnnotationModeEnabled = true,
  isDeviceToolbarEnabled = true,
  isDeviceToolbarMenuItemVisible = true,
  isScreenshotCaptureEnabled = true,
  isFloatingComposerToggleVisible = false,
  isFloatingComposerVisible = true,
  isTweaksEnabled = true,
  onToggleFloatingComposer = () => undefined,
  panelTarget = "right",
}: BrowserSidebarProps) {
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const windowZoom = useWindowZoom();
  const themeVariant = toThemeVariant(useThemePreference());
  const effectiveLocale =
    Object.keys(intl.messages).length > 0 ? intl.locale : intl.defaultLocale;
  const stringMessages = Object.fromEntries(
    Object.entries(intl.messages).filter(
      (entry) => typeof entry[1] === "string",
    ),
  );
  const { comments, setComments } = useBrowserSidebarComments(
    getConversationScopeValue(store.value) ?? conversationId,
  );
  const prefersReducedMotion = useSystemPrefersReducedMotion();
  const { rightPanelLayoutTick } = useRightPanelLayout();
  const bottomPanelAnimation = useScopedValue(bottomPanelAnimationSignal);

  const rootElementRef = useRef<HTMLDivElement | null>(null);
  const viewportContainerRef = useRef<HTMLDivElement | null>(null);
  const webviewElementRef = useRef<HTMLElement | null>(null);
  const addressBarContainerRef = useRef<HTMLDivElement | null>(null);
  const addressInputRef = useRef<HTMLInputElement | null>(null);
  const committedAddressRef = useRef("");
  const dispatchZoomCommandRef =
    useRef<BrowserSidebarZoomCommandDispatcher | null>(null);
  const activeEditorDismissRef = useRef<(() => boolean) | null>(null);
  const suppressCommentSyncRef = useRef(false);
  const hasEditedAddressRef = useRef(false);
  const shouldKeepAddressSelectedRef = useRef(false);
  const isStoppingAddressEditingRef = useRef(false);
  const isChromeHoveredRef = useRef(false);
  const isVisibleRef = useRef(isVisible);
  const wasVisibleRef = useRef(false);
  const wasVisibleForUrlRef = useRef(false);
  const hasTrackedPanelOpenRef = useRef(false);
  const previousInteractionModeRef = useRef(browserSidebarMode.BROWSE);
  const previousTabIdentityRef = useRef({
    browserTabId,
    conversationId,
    url: "",
  });
  const previousAnnotationStateRef = useRef({
    browserTabId,
    conversationId,
    interactionMode: browserSidebarMode.BROWSE,
    isAnnotationSessionTakeoverActive: false,
    isVisible: false,
  });
  const lastBoundsRef = useRef<BrowserSidebarBoundsRect | null>(null);
  const pendingOpenInitiatorRef = useRef<string | null>(null);
  const pendingOpenSourceRef = useRef<string | null>(null);
  const originalViewEnabledRef = useRef(false);
  const annotationFlowKeyRef = useRef<string | null>(null);
  const takeoverActiveKeyRef = useRef<boolean | null>(null);

  const [panelBounds, setPanelBounds] =
    useState<BrowserSidebarBoundsRect | null>(null);
  const [viewportResizeScale, setViewportResizeScale] = useState<number | null>(
    null,
  );
  const [designHoldState, setDesignHoldState] = useState(() =>
    createDefaultDesignHoldState(conversationId),
  );
  const rightPanelComposerReserve = useScopedValue(
    rightPanelComposerReserveAtom,
  );
  const isDesignModifierPressed = useScopedValue(designModifierPressedAtom);
  const isAnnotationAddModifierActive = useScopedValue(
    annotationAddModifierPressedAtom,
  );
  const isBrowserManaged = useScopedQuery(browserManagedQueryAtom, {
    browserTabId,
    conversationId,
  });
  const isMultiBrowserTabsEnabled = useScopedValue(multiBrowserTabsEnabledAtom);
  const activeBrowserTabId = useScopedQuery(
    activeBrowserTabIdQuery,
    conversationId,
  );
  const persistedTabsEnabled = useFeatureGate(persistedBrowserTabsGateId);
  const openAiGoLinksQuery = useScopedQuery(featureFlagQuery, "openAiGoLinks");
  const printEnabledQuery = useScopedQuery(featureFlagQuery, "browserPrint");
  const owlPermissionsQuery = useScopedQuery(
    featureFlagQuery,
    browserOwlPermissionsFlag,
  );
  const isPrintEnabled = printEnabledQuery.data === true;
  const isOwlPermissionsEnabled = owlPermissionsQuery.data === true;
  const goLinksConfig = {
    openAIGoLinksEnabled: openAiGoLinksQuery.data === true,
  };

  const readSnapshot = () =>
    browserSidebarManager.getSnapshot(conversationId, browserTabId);
  const snapshot = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readSnapshot,
    readSnapshot,
  );
  const readHasRetainedWebview = () =>
    browserSidebarManager.hasRetainedWebview(conversationId, browserTabId);
  const hasRetainedWebview = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readHasRetainedWebview,
    readHasRetainedWebview,
  );
  const hasSnapshot = snapshot != null;
  const readCursorState = () =>
    browserSidebarManager.getBrowserUseCursorState(
      conversationId,
      browserTabId,
    );
  const browserUseCursorState = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readCursorState,
    readCursorState,
  );
  const readIsAgentControlling = () =>
    browserSidebarManager.isBrowserUseActive(conversationId, browserTabId);
  const isAgentControllingBrowser = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readIsAgentControlling,
    readIsAgentControlling,
  );
  const adoptionLease = getBrowserAdoptionLease(conversationId, browserTabId);
  const adoptedWebContentsId = getBrowserAdoptedWebContentsId(
    conversationId,
    browserTabId,
  );
  const isAdopting = adoptionLease != null && adoptedWebContentsId != null;

  const findState = useScopedValue(browserFindStateAtom);
  const findFocusRequest = useScopedValue(browserFindFocusRequestAtom);
  const activeFindTarget = useScopedValue(activeBrowserFindTargetAtom);
  const activeSidePanelKind = useScopedValue(activeSidePanelKindAtom);
  const isSidePanelVisible = useScopedValue(isSidePanelVisibleAtom);
  const isFindActiveForTab =
    isSidePanelVisible &&
    activeSidePanelKind === "browser" &&
    activeFindTarget?.conversationId === conversationId &&
    activeFindTarget.browserTabId === browserTabId;

  const [hasSettledOpen, setHasSettledOpen] = useState(false);
  const hasSeenProfileImportNux = useScopedValue(
    browserProfileImportNuxSeenAtom,
  );
  const isBrowserKnowledgeWorkerEnabled = useFeatureGate("1834314516");
  const downloadsService = isBrowserKnowledgeWorkerEnabled
    ? store.value?.downloads
    : undefined;
  const browserProfileImportService = store.value?.browserProfileImport;
  const profileImportQuery = useAsyncQueryValue(
    buildBrowserProfileImportQuery(
      browserProfileImportService,
      isVisible &&
        hasSettledOpen &&
        isBrowserKnowledgeWorkerEnabled &&
        browserProfileImportService != null &&
        hasSeenProfileImportNux === false,
    ),
  );
  const [isAnnotateHoverSuppressed, setIsAnnotateHoverSuppressed] =
    useState(false);
  const [
    pendingInteractionModeTransition,
    setPendingInteractionModeTransition,
  ] = useState<{ fromSnapshot: unknown; to: string } | null>(null);

  const tabSnapshot = snapshot ?? DEFAULT_BROWSER_TAB_SNAPSHOT;
  const isWebTab = tabSnapshot.tabType === browserTabType.WEB;
  const hasBrowserPage = isWebTab && tabSnapshot.url.trim().length > 0;
  const designHoldStateForConversation =
    designHoldState.conversationId === conversationId
      ? designHoldState
      : createDefaultDesignHoldState(conversationId);
  const isCommentModeSiteBlocked =
    tabSnapshot.commentModeDisabledReason === "site-blocked";
  const effectiveInteractionMode =
    pendingInteractionModeTransition != null &&
    pendingInteractionModeTransition.fromSnapshot === tabSnapshot
      ? pendingInteractionModeTransition.to
      : tabSnapshot.interactionMode;
  const isCommentMode =
    isAnnotationModeEnabled &&
    effectiveInteractionMode === browserSidebarMode.COMMENT;
  const annotationFlowConfig = getAnnotationFlowConfig(
    tabSnapshot.annotationFlow,
  );
  const isPersistentCommentMode =
    isCommentMode && annotationFlowConfig.persistent;
  const isWebviewHostActive =
    (hasSnapshot && isWebTab) || isAdopting || isAgentControllingBrowser;
  const shouldPaintWebview =
    isWebviewHostActive && (hasBrowserPage || isAdopting);
  const hasQueuedTweaks = hasQueuedDesignTweaks(tabSnapshot.comments);
  const pendingAnnotationCount = comments.filter((comment) =>
    isCommentForBrowserTab(comment, browserTabId),
  ).length;
  const hasPendingAnnotations =
    snapshot != null &&
    (hasPendingBrowserComments(snapshot.comments) ||
      pendingAnnotationCount > 0);
  const annotationEditorMode = tabSnapshot.annotationEditorMode ?? "comment";
  const isTweaksEditorOpen = tabSnapshot.isTweaksEditorOpen === true;
  const isDesignEditorActive =
    annotationEditorMode === "design" || isTweaksEditorOpen;
  const isAnnotationSessionTakeoverActive =
    isCommentMode && isDesignEditorActive;
  const annotationEditorModeLabel = isDesignEditorActive ? "design" : "comment";
  const isAnnotationTakeoverVisible =
    isTweaksEnabled &&
    isPersistentCommentMode &&
    (isDesignEditorActive || hasPendingAnnotations);
  const profileImportNuxStrip = shouldShowBrowserProfileImportNux({
    baseGateEnabled: isBrowserKnowledgeWorkerEnabled,
    hasSeen: hasSeenProfileImportNux,
    hasSettledOpen,
    isVisible,
    profiles: profileImportQuery.data,
    profilesQuerySucceeded: profileImportQuery.isSuccess,
    serviceAvailable: browserProfileImportService != null,
  })
    ? {
        content: (
          <BrowserProfileImportNux
            profiles={profileImportQuery.data ?? []}
            onDismiss={() => {
              store.set(browserProfileImportNuxSeenAtom, true);
            }}
            onImport={() => {
              if (importBrowserProfiles(store, browserProfileImportService)) {
                store.set(browserProfileImportNuxSeenAtom, true);
              }
            }}
          />
        ),
        key: "browser-profile-import-nux",
        presentation: "strip" as const,
      }
    : null;

  const [addressValue, setAddressValue] = useState("");
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [shouldAnimateAddressExpansion, setShouldAnimateAddressExpansion] =
    useState(false);
  const [shouldFocusWebviewAfterLoad, setShouldFocusWebviewAfterLoad] =
    useState(false);
  const [pendingNavigationSnapshot, setPendingNavigationSnapshot] = useState<
    unknown | undefined
  >();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSecurityPopoverOpen, setIsSecurityPopoverOpen] = useState(false);
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);
  const isChromeExpanded =
    isAddressEditing || isMenuOpen || isSecurityPopoverOpen;
  const currentUrl =
    normalizeBrowserUrl(tabSnapshot.url).length === 0 ? "" : tabSnapshot.url;

  const readDeviceToolbarTabState = () =>
    browserSidebarManager.getDeviceToolbarTabState(
      conversationId,
      browserTabId,
    );
  const deviceToolbarState = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readDeviceToolbarTabState,
    readDeviceToolbarTabState,
  ).toolbarState;
  const pendingAddressOverride = getPendingBrowserAddressOverride(
    conversationId,
    browserTabId,
  );
  const initialUrl =
    isAdopting && pendingAddressOverride != null
      ? pendingAddressOverride
      : tabSnapshot.url.length === 0
        ? "about:blank"
        : tabSnapshot.url;
  const shouldBootstrapWhenHidden = isAgentControllingBrowser || isAdopting;
  const isAnnotationDisabled =
    !isAnnotationModeEnabled || !hasBrowserPage || isCommentModeSiteBlocked;
  const annotateShortcutLabel = useFormattedAcceleratorLabel(
    TOGGLE_ANNOTATION_MODE_ACCELERATOR,
  );
  isVisibleRef.current = isVisible;

  const deviceToolbar =
    isDeviceToolbarEnabled && deviceToolbarState.isEnabled && hasBrowserPage
      ? deviceToolbarState
      : { ...deviceToolbarState, isEnabled: false };
  const reservedComposerSpace =
    panelTarget === "right" ? rightPanelComposerReserve : 0;
  const reservedComposerSpaceWithToggle = isFloatingComposerToggleVisible
    ? Math.max(reservedComposerSpace, FLOATING_COMPOSER_TOGGLE_HEIGHT)
    : reservedComposerSpace;
  const adjustedPanelBounds =
    panelBounds == null ||
    deviceToolbar.isEnabled ||
    reservedComposerSpaceWithToggle === 0
      ? panelBounds
      : {
          ...panelBounds,
          height:
            panelBounds.height > 0
              ? Math.max(
                  1,
                  panelBounds.height - reservedComposerSpaceWithToggle,
                )
              : 0,
        };
  const deviceToolbarLayout = computeBrowserDeviceToolbarLayout(
    panelBounds,
    deviceToolbar,
  );
  const webviewBounds =
    deviceToolbarLayout?.webviewBounds ?? adjustedPanelBounds;
  const visualBounds = deviceToolbarLayout?.visualBounds ?? adjustedPanelBounds;
  const layoutScale = deviceToolbarLayout?.scale ?? 1;
  const scaledBounds = scaleBounds(visualBounds, windowZoom);
  const viewportScale = layoutScale * windowZoom;
  const isWebviewVisible =
    isWebviewHostActive && (scaledBounds != null || shouldBootstrapWhenHidden);
  const webviewKey = isWebviewVisible
    ? `${conversationId}\0${browserTabId}`
    : null;
  const effectiveViewportScale = viewportResizeScale ?? layoutScale;
  const currentZoomPercent = resolveBrowserZoomPercent(
    tabSnapshot.zoomPercent,
    effectiveViewportScale,
  );
  const deviceToolbarBackgroundColor = deviceToolbar.isEnabled
    ? browserDeviceToolbarBackgroundColor
    : undefined;
  const hostKind = panelTarget === "bottom" ? "bottom-panel" : "right-panel";
  const emulatedViewport =
    isVisible && deviceToolbar.isEnabled && deviceToolbarLayout != null
      ? computeEmulatedViewport({
          fitHeight: deviceToolbarLayout.fitHeight,
          height: deviceToolbar.height,
          width: deviceToolbar.width,
        })
      : null;
  lastBoundsRef.current = scaledBounds;

  const browserOpenSource = getBrowserOpenSource(conversationId, browserTabId);
  const browserOpenReason = getBrowserOpenReason(conversationId, browserTabId);
  const isOpenedByAgent =
    browserOpenSource === "browser_use" || browserOpenReason === "browser_use";
  const isManualOpen =
    (!isBrowserManaged && browserOpenSource == null) ||
    browserOpenSource === "manual" ||
    browserOpenReason === "side_panel_menu" ||
    browserOpenReason === "toggle_browser_command";

  const buildBrowserCommandPayload = ({
    command,
    targetBrowserTabId = browserTabId,
    targetConversationId = conversationId,
  }: {
    command: unknown;
    targetBrowserTabId?: string;
    targetConversationId?: string;
  }) => ({
    conversationId: targetConversationId,
    ...(targetBrowserTabId === getDefaultBrowserTabId(targetConversationId)
      ? {}
      : { browserTabId: targetBrowserTabId }),
    command,
  });
  const dispatchBrowserCommand = (command: unknown) => {
    vscodeApiF.dispatchMessage(
      "browser-sidebar-command",
      buildBrowserCommandPayload({ command }),
    );
  };
  const dispatchBrowserCommandEvent = React.useEffectEvent(
    dispatchBrowserCommand,
  );

  const resetAddressScroll = () => {
    const input = addressInputRef.current;
    if (!isVisibleRef.current || input == null) return;
    input.scrollLeft = 0;
  };
  const selectAddressText = () => {
    const input = addressInputRef.current;
    if (
      !isVisibleRef.current ||
      input == null ||
      hasEditedAddressRef.current ||
      !shouldKeepAddressSelectedRef.current
    ) {
      return;
    }
    input.setSelectionRange(0, input.value.length, "forward");
    resetAddressScroll();
  };
  const focusAddressInput = ({
    shouldSelectAddress,
  }: {
    shouldSelectAddress: boolean;
  }) => {
    const input = addressInputRef.current;
    if (shouldSelectAddress) shouldKeepAddressSelectedRef.current = true;
    input?.focus();
    resetAddressScroll();
    if (shouldSelectAddress) {
      selectAddressText();
      requestAnimationFrame(() => {
        resetAddressScroll();
        selectAddressText();
      });
    }
  };
  const beginAddressEditing = ({
    shouldSelectAddress,
  }: {
    shouldSelectAddress: boolean;
  }) => {
    isStoppingAddressEditingRef.current = false;
    if (!isAddressEditing) {
      hasEditedAddressRef.current = false;
      committedAddressRef.current = currentUrl;
      flushSync(() => {
        setAddressValue(tabSnapshot.url);
        setShouldAnimateAddressExpansion(hasSettledOpen);
        setIsAddressEditing(true);
      });
    }
    focusAddressInput({ shouldSelectAddress });
  };
  const focusBrowserAddressBar = () => {
    beginAddressEditing({ shouldSelectAddress: true });
  };
  const cancelAddressEditing = () => {
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    setAddressValue(tabSnapshot.url);
    setIsAddressEditing(false);
  };
  const stopAddressEditing = () => {
    if (isStoppingAddressEditingRef.current) return;
    isStoppingAddressEditingRef.current = true;
    cancelAddressEditing();
    const input = addressInputRef.current;
    if (input != null && input === document.activeElement) input.blur();
  };
  const stopAddressEditingEvent = React.useEffectEvent(stopAddressEditing);
  const ensureAddressEditing = () => {
    if (isAddressEditing) return;
    isStoppingAddressEditingRef.current = false;
    hasEditedAddressRef.current = false;
    committedAddressRef.current = currentUrl;
    if (tabSnapshot.url.length > 0) shouldKeepAddressSelectedRef.current = true;
    setAddressValue(tabSnapshot.url);
    setShouldAnimateAddressExpansion(hasSettledOpen);
    setIsAddressEditing(true);
    requestAnimationFrame(() => {
      resetAddressScroll();
      selectAddressText();
    });
  };
  const focusContentSearchInput = () => {
    window.requestAnimationFrame(() => {
      const searchInput = document.getElementById("content-search-input");
      if (searchInput instanceof HTMLInputElement) {
        searchInput.focus();
        searchInput.select();
      }
    });
  };
  const focusWebviewOrRoot = () => {
    window.requestAnimationFrame(() => {
      webviewElementRef.current?.focus();
      if (document.activeElement !== webviewElementRef.current) {
        rootElementRef.current?.focus();
      }
    });
  };

  useEffect(() => {
    if (
      findFocusRequest?.conversationId !== conversationId ||
      findFocusRequest.browserTabId !== browserTabId
    ) {
      return;
    }
    focusWebviewOrRoot();
    clearBrowserFindFocus(store);
  }, [
    browserTabId,
    findFocusRequest?.browserTabId,
    findFocusRequest?.conversationId,
    conversationId,
    store,
  ]);

  const closeBrowserFind = React.useEffectEvent(
    ({
      targetBrowserTabId = browserTabId,
      shouldRestoreFocus = true,
      targetConversationId = conversationId,
    }: {
      targetBrowserTabId?: string;
      shouldRestoreFocus?: boolean;
      targetConversationId?: string;
    } = {}) => {
      if (
        activeFindTarget?.conversationId === targetConversationId &&
        activeFindTarget.browserTabId === targetBrowserTabId
      ) {
        if (isSidePanelVisible && activeSidePanelKind === "browser") {
          setActiveBrowserFindTarget(store, null);
        }
        setBrowserFindState(store, emptyBrowserFindState);
      }
      vscodeApiF.dispatchMessage(
        "browser-sidebar-command",
        buildBrowserCommandPayload({
          command: { type: "close-find" },
          targetBrowserTabId,
          targetConversationId,
        }),
      );
      if (shouldRestoreFocus) focusWebviewOrRoot();
    },
  );
  const openBrowserFindPanel = () => {
    setActiveBrowserFindTarget(store, { browserTabId, conversationId });
    setActiveSidePanelKind(store, "browser");
    openBrowserFind(store);
    focusContentSearchInput();
  };

  useEffect(() => {
    if (!shouldFocusWebviewAfterLoad || !isWebviewHostActive) return;
    const handle = requestAnimationFrame(() => {
      webviewElementRef.current?.focus();
      setShouldFocusWebviewAfterLoad(false);
    });
    return () => {
      cancelAnimationFrame(handle);
    };
  }, [shouldFocusWebviewAfterLoad, isWebviewHostActive]);

  useEffect(() => {
    const shouldKeepSelectedOnUpdate =
      isAddressEditing &&
      addressInputRef.current === document.activeElement &&
      !hasEditedAddressRef.current &&
      currentUrl.length > 0;
    if (
      isAddressEditing &&
      addressInputRef.current === document.activeElement &&
      hasEditedAddressRef.current
    ) {
      if (currentUrl !== committedAddressRef.current) stopAddressEditingEvent();
      return;
    }
    if (pendingNavigationSnapshot !== undefined) {
      if (snapshot === pendingNavigationSnapshot) return;
      setPendingNavigationSnapshot(undefined);
    }
    hasEditedAddressRef.current = false;
    if (shouldKeepSelectedOnUpdate) shouldKeepAddressSelectedRef.current = true;
    setAddressValue(currentUrl);
  }, [pendingNavigationSnapshot, currentUrl, isAddressEditing, snapshot]);

  useLayoutEffect(() => {
    const previous = previousTabIdentityRef.current;
    if (
      previous.browserTabId === browserTabId &&
      previous.conversationId === conversationId
    ) {
      return;
    }
    clearBrowserPendingNavigation(
      previous.conversationId,
      previous.browserTabId,
    );
    clearBrowserPendingOpen(previous.conversationId, previous.browserTabId);
    const input = addressInputRef.current;
    if (input != null && input === document.activeElement) input.blur();
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    isStoppingAddressEditingRef.current = false;
    isChromeHoveredRef.current = false;
    previousInteractionModeRef.current = tabSnapshot.interactionMode;
    pendingOpenInitiatorRef.current = null;
    pendingOpenSourceRef.current = null;
    hasTrackedPanelOpenRef.current = false;
    annotationFlowKeyRef.current = null;
    takeoverActiveKeyRef.current = null;
    setAddressValue(currentUrl);
    setPendingNavigationSnapshot(undefined);
    setViewportResizeScale(null);
    setIsAddressEditing(false);
    setIsMenuOpen(false);
    setIsSecurityPopoverOpen(false);
    setIsDownloadsOpen(false);
    setIsAnnotateHoverSuppressed(false);
    setPendingInteractionModeTransition(null);
    setShouldAnimateAddressExpansion(false);
    setShouldFocusWebviewAfterLoad(false);
  }, [
    currentUrl,
    tabSnapshot.interactionMode,
    tabSnapshot.url,
    browserTabId,
    conversationId,
  ]);

  useEffect(() => {
    if (!isVisible && wasVisibleForUrlRef.current) {
      markBrowserTabVisited(conversationId, browserTabId);
    }
    if (!isVisible) {
      shouldKeepAddressSelectedRef.current = false;
      isStoppingAddressEditingRef.current = false;
      setShouldAnimateAddressExpansion(false);
      setIsAddressEditing(false);
      setIsSecurityPopoverOpen(false);
    }
    if (isVisible && tabSnapshot.url.length > 0) {
      markBrowserTabVisited(conversationId, browserTabId);
      clearBrowserPendingNavigation(conversationId, browserTabId);
      clearBrowserPendingOpen(conversationId, browserTabId);
    }
    wasVisibleForUrlRef.current = isVisible;
  }, [tabSnapshot.url, browserTabId, conversationId, isVisible]);

  useEffect(() => {
    const previous = previousTabIdentityRef.current;
    previousTabIdentityRef.current = {
      browserTabId,
      conversationId,
      url: tabSnapshot.url,
    };
    if (
      isVisible &&
      hasBrowserPage &&
      previous.browserTabId === browserTabId &&
      previous.conversationId === conversationId &&
      previous.url === tabSnapshot.url
    ) {
      return;
    }
    const wasActiveFindTarget =
      activeFindTarget?.conversationId === previous.conversationId &&
      activeFindTarget.browserTabId === previous.browserTabId;
    const wasBrowserFindOpen =
      isSidePanelVisible &&
      activeSidePanelKind === "browser" &&
      wasActiveFindTarget;
    const hasFindContext = findState.query.length > 0 || wasBrowserFindOpen;
    if (wasActiveFindTarget && hasFindContext) {
      closeBrowserFind({
        shouldRestoreFocus: false,
        targetBrowserTabId: previous.browserTabId,
        targetConversationId: previous.conversationId,
      });
    }
  }, [
    browserTabId,
    tabSnapshot.url,
    conversationId,
    findState.query.length,
    activeFindTarget?.browserTabId,
    activeFindTarget?.conversationId,
    hasBrowserPage,
    isSidePanelVisible,
    isFindActiveForTab,
    activeSidePanelKind,
    isVisible,
  ]);

  useEffect(() => {
    const previous = previousAnnotationStateRef.current;
    previousAnnotationStateRef.current = {
      browserTabId,
      conversationId,
      interactionMode: tabSnapshot.interactionMode,
      isAnnotationSessionTakeoverActive: isAnnotationTakeoverVisible,
      isVisible,
    };
    if (
      previous.isVisible &&
      previous.interactionMode === browserSidebarMode.COMMENT &&
      !previous.isAnnotationSessionTakeoverActive &&
      !(
        isVisible &&
        previous.browserTabId === browserTabId &&
        previous.conversationId === conversationId
      ) &&
      canDismissActiveEditor(activeEditorDismissRef.current)
    ) {
      vscodeApiF.dispatchMessage("browser-sidebar-command", {
        conversationId: previous.conversationId,
        ...(previous.browserTabId ===
        getDefaultBrowserTabId(previous.conversationId)
          ? {}
          : { browserTabId: previous.browserTabId }),
        command: {
          type: "set-interaction-mode",
          interactionMode: browserSidebarMode.BROWSE,
        },
      });
    }
  }, [
    tabSnapshot.interactionMode,
    browserTabId,
    conversationId,
    isAnnotationTakeoverVisible,
    isVisible,
  ]);

  useEffect(() => {
    if (!isVisible || (!isAddressEditing && !isSecurityPopoverOpen)) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      setIsSecurityPopoverOpen(false);
      if (
        isAddressEditing &&
        target instanceof Node &&
        !addressBarContainerRef.current?.contains(target) &&
        !(
          target instanceof Element &&
          target.closest("[data-browser-sidebar-skip-address-commit='true']") !=
            null
        )
      ) {
        stopAddressEditingEvent();
      }
    };
    const handleContainerPointerDown = () => {
      setIsSecurityPopoverOpen(false);
      if (isAddressEditing) stopAddressEditingEvent();
    };
    const handleWindowFocus = () => {
      setIsSecurityPopoverOpen(false);
    };
    const viewportContainer = viewportContainerRef.current;
    const webviewElement = webviewElementRef.current;
    window.addEventListener("pointerdown", handlePointerDown, true);
    viewportContainer?.addEventListener(
      "pointerdown",
      handleContainerPointerDown,
    );
    webviewElement?.addEventListener("pointerdown", handleContainerPointerDown);
    webviewElement?.addEventListener("focus", handleContainerPointerDown);
    window.addEventListener("focus", handleWindowFocus);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown, true);
      viewportContainer?.removeEventListener(
        "pointerdown",
        handleContainerPointerDown,
      );
      webviewElement?.removeEventListener(
        "pointerdown",
        handleContainerPointerDown,
      );
      webviewElement?.removeEventListener("focus", handleContainerPointerDown);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [isAddressEditing, isSecurityPopoverOpen, isVisible]);

  useEffect(() => {
    if (snapshot == null) {
      annotationFlowKeyRef.current = null;
      return;
    }
    const annotationFlowKey = `${tabSnapshot.interactionMode}:${tabSnapshot.annotationFlow ?? annotationFlowKind.BATCH}`;
    const previousKey = annotationFlowKeyRef.current;
    annotationFlowKeyRef.current = annotationFlowKey;
    if (
      !isVisible ||
      previousKey == null ||
      previousKey === annotationFlowKey
    ) {
      return;
    }
    const entrySource =
      tabSnapshot.interactionMode === browserSidebarMode.COMMENT &&
      tabSnapshot.annotationModeEntrySource != null
        ? ANNOTATION_ENTRY_SOURCE_BY_TRIGGER[
            tabSnapshot.annotationModeEntrySource
          ]
        : undefined;
    trackScopedAnalyticsEvent(store, browserAnnotationModeChangedEvent, {
      enabled: tabSnapshot.interactionMode === browserSidebarMode.COMMENT,
      hasPendingAnnotations,
      hasQueuedDesignTweaks: hasQueuedTweaks,
      annotationEditorMode: annotationEditorModeLabel,
      entrySource,
    });
  }, [
    annotationEditorModeLabel,
    tabSnapshot.annotationFlow,
    tabSnapshot.annotationModeEntrySource,
    tabSnapshot.interactionMode,
    hasPendingAnnotations,
    hasQueuedTweaks,
    isVisible,
    store,
    snapshot,
  ]);

  useEffect(() => {
    if (snapshot == null) {
      takeoverActiveKeyRef.current = null;
      return;
    }
    const previousKey = takeoverActiveKeyRef.current;
    takeoverActiveKeyRef.current = isAnnotationSessionTakeoverActive;
    if (
      !isVisible ||
      previousKey == null ||
      previousKey === isAnnotationSessionTakeoverActive
    ) {
      return;
    }
    trackScopedAnalyticsEvent(store, browserAnnotationTakeoverEvent, {
      enabled: isAnnotationSessionTakeoverActive,
      hasPendingAnnotations,
      hasQueuedDesignTweaks: hasQueuedTweaks,
    });
  }, [
    hasPendingAnnotations,
    hasQueuedTweaks,
    isAnnotationSessionTakeoverActive,
    isVisible,
    store,
    snapshot,
  ]);

  useEffect(() => {
    const previousInteractionMode = previousInteractionModeRef.current;
    previousInteractionModeRef.current = tabSnapshot.interactionMode;
    if (
      isVisible &&
      isFindActiveForTab &&
      previousInteractionMode === browserSidebarMode.COMMENT &&
      tabSnapshot.interactionMode === browserSidebarMode.BROWSE
    ) {
      focusContentSearchInput();
    }
  }, [tabSnapshot.interactionMode, isFindActiveForTab, isVisible]);

  useLayoutEffect(() => {
    selectAddressText();
  }, [addressValue, isAddressEditing]);

  useLayoutEffect(() => {
    const wasVisible = wasVisibleRef.current;
    const becameVisible = isVisible && !wasVisible;
    wasVisibleRef.current = isVisible;
    if (!autoFocusOnOpen || !becameVisible) return;
    const pendingOverride = getPendingBrowserAddressOverride(
      conversationId,
      browserTabId,
    );
    const currentSnapshot = browserSidebarManager.getSnapshot(
      conversationId,
      browserTabId,
    );
    let resolvedUrl = pendingOverride ?? "";
    if (currentSnapshot != null) {
      resolvedUrl =
        normalizeBrowserUrl(currentSnapshot.url).length === 0
          ? (pendingOverride ?? currentSnapshot.url)
          : currentSnapshot.url;
    }
    const shouldFocusAddress =
      !isOpenedByAgent && normalizeBrowserUrl(resolvedUrl).length === 0;
    if (!shouldFocusAddress && !(isManualOpen && !shouldFocusAddress)) return;
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    if (shouldFocusAddress) {
      flushSync(() => {
        setAddressValue("");
        setShouldAnimateAddressExpansion(false);
        setIsAddressEditing(true);
      });
      addressInputRef.current?.focus();
    }
    const handle = requestAnimationFrame(() => {
      if (isVisibleRef.current) {
        if (shouldFocusAddress) {
          addressInputRef.current?.focus();
          return;
        }
        webviewElementRef.current?.focus();
      }
    });
    return () => {
      cancelAnimationFrame(handle);
    };
  }, [
    autoFocusOnOpen,
    browserTabId,
    conversationId,
    isOpenedByAgent,
    isManualOpen,
    isVisible,
  ]);

  useNamedKeyboardShortcut("focusBrowserAddressBar", focusBrowserAddressBar, {
    enabled: isVisible,
    isActive: (state: {
      originPanel?: string | null;
      keyboardOrigin?: string;
    }) =>
      state?.originPanel == null
        ? state?.keyboardOrigin === "browser-web-contents"
          ? true
          : isElementFocusWithin(rootElementRef.current)
        : state.originPanel === panelTarget,
    keyboardHandler: (
      event: KeyboardEvent,
      options?: { keyboardOrigin?: string },
    ) => {
      if (
        !isEventWithinElement(
          event,
          rootElementRef.current,
          options?.keyboardOrigin,
        )
      ) {
        return false;
      }
    },
  });
  const navigationKeyboardHandler = (event: KeyboardEvent) => {
    const target = event.target;
    if (
      event.defaultPrevented ||
      (target instanceof Element &&
        target.closest(
          "input,textarea,select,[contenteditable='true'],[data-codex-composer],[data-codex-terminal]",
        ) != null)
    ) {
      return false;
    }
  };
  useNamedKeyboardShortcut(
    "navigateBrowserBack",
    () => {
      dispatchBrowserCommand({ type: "go-back" });
    },
    { enabled: isVisible, keyboardHandler: navigationKeyboardHandler },
  );
  useNamedKeyboardShortcut(
    "navigateBrowserForward",
    () => {
      dispatchBrowserCommand({ type: "go-forward" });
    },
    { enabled: isVisible, keyboardHandler: navigationKeyboardHandler },
  );

  const applyInteractionModeTransition = (
    mode: string,
    focusMode: FocusMode,
  ) => {
    const transition =
      mode === browserSidebarMode.COMMENT
        ? null
        : { fromSnapshot: tabSnapshot, to: mode };
    flushSync(() => {
      setPendingInteractionModeTransition(transition);
      setIsAnnotateHoverSuppressed(mode === "comment");
    });
    if (focusMode === FOCUS_MODE.FOCUS) {
      window.requestAnimationFrame(() => {
        webviewElementRef.current?.focus();
      });
    }
  };
  const changeInteractionMode = (
    mode: string,
    focusMode: FocusMode,
    entrySource?: string,
  ) => {
    if (!isAnnotationModeEnabled && mode === browserSidebarMode.COMMENT) return;
    applyInteractionModeTransition(mode, focusMode);
    dispatchBrowserCommand({
      type: "set-interaction-mode",
      interactionMode: mode,
      annotationModeEntrySource: entrySource,
    });
  };
  const previewInteractionMode = (mode: string, focusMode: FocusMode) => {
    if (!isAnnotationModeEnabled && mode === browserSidebarMode.COMMENT) return;
    applyInteractionModeTransition(mode, focusMode);
  };

  useKeyboardAccelerator({
    accelerator: TOGGLE_ANNOTATION_MODE_ACCELERATOR,
    enabled: isVisible && !isAnnotationDisabled,
    onKeyDown: (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();
      changeInteractionMode(
        isCommentMode ? browserSidebarMode.BROWSE : browserSidebarMode.COMMENT,
        isCommentMode ? FOCUS_MODE.NONE : FOCUS_MODE.FOCUS,
        isCommentMode ? undefined : "keyboard-shortcut",
      );
    },
  });
  useKeyboardAccelerator({
    accelerator: "Escape",
    enabled: isVisible,
    onKeyDown: (event: KeyboardEvent) => {
      if (isAddressEditing) return;
      const activeElement = document.activeElement;
      const isWithinRoot =
        activeElement instanceof HTMLElement &&
        rootElementRef.current?.contains(activeElement) === true;
      if (!(!isChromeHoveredRef.current && !isWithinRoot) && isCommentMode) {
        event.preventDefault();
        event.stopPropagation();
        addAnnotationsToComposer();
      }
    },
  });

  const syncWebview = React.useEffectEvent(
    (
      overrides: {
        visible?: boolean;
        bounds?: BrowserSidebarBoundsRect | null;
      } = {},
    ) => {
      const visible = overrides.visible ?? isVisible;
      const bounds = overrides.bounds ?? lastBoundsRef.current;
      const presented = visible && isWebviewHostActive && bounds != null;
      const pendingTransfer =
        browserSidebarManager.consumePendingElectronTransfer(
          conversationId,
          browserTabId,
        );
      const mountGeneration = browserSidebarManager.getMountGeneration(
        conversationId,
        browserTabId,
      );
      const pagePersistence = browserSidebarManager.getPagePersistence(
        conversationId,
        browserTabId,
        persistedTabsEnabled,
      );
      vscodeApiF.dispatchMessage("browser-sidebar-sync", {
        payload: {
          conversationId,
          pagePersistence,
          browserTabId,
          hostKind,
          cwd,
          transferSourceBrowserTabId: pendingTransfer?.sourceBrowserTabId,
          transferSourceConversationId: pendingTransfer?.sourceConversationId,
          mountGeneration,
          presented,
          visible,
          bounds: visible ? bounds : null,
          ...(isAnnotationModeEnabled ? {} : { annotationModeEnabled: false }),
          emulatedViewportSize: deviceToolbar.isEnabled
            ? { width: deviceToolbar.width, height: deviceToolbar.height }
            : null,
          viewportScale,
          themeVariant,
          isAgentControllingBrowser,
          runtimeIntlConfig: {
            defaultLocale: intl.defaultLocale,
            locale: effectiveLocale,
            messages: stringMessages,
          },
        },
      });
    },
  );
  const syncBrowserOpenStateEvent = React.useEffectEvent(
    (visible: boolean = isVisible) => {
      syncBrowserOpenState(store, conversationId, browserTabId, {
        isOpen: visible,
        url: tabSnapshot.url,
      });
    },
  );

  useLayoutEffect(() => {
    const viewportContainer = viewportContainerRef.current;
    if (!viewportContainer) {
      setPanelBounds(null);
      return;
    }
    let rafHandle: number | null = null;
    const measureBounds = () => {
      const rect = viewportContainer.getBoundingClientRect();
      const nextBounds = {
        x: rect.x / windowZoom,
        y: rect.y / windowZoom,
        width: rect.width / windowZoom,
        height: rect.height / windowZoom,
      };
      setPanelBounds((previous) =>
        previous &&
        previous.x === nextBounds.x &&
        previous.y === nextBounds.y &&
        previous.width === nextBounds.width &&
        previous.height === nextBounds.height
          ? previous
          : nextBounds,
      );
    };
    const scheduleMeasure = () => {
      rafHandle ??= window.requestAnimationFrame(() => {
        rafHandle = null;
        measureBounds();
      });
    };
    const resizeObserver = new ResizeObserver(() => {
      measureBounds();
    });
    resizeObserver.observe(viewportContainer);
    measureBounds();
    if (isVisible) scheduleMeasure();
    const unsubscribeLayoutTick =
      panelTarget === "bottom"
        ? bottomPanelAnimation.on("change", scheduleMeasure)
        : rightPanelLayoutTick.on("change", scheduleMeasure);
    window.addEventListener("resize", measureBounds);
    return () => {
      if (rafHandle != null) window.cancelAnimationFrame(rafHandle);
      unsubscribeLayoutTick();
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureBounds);
    };
  }, [
    bottomPanelAnimation,
    isVisible,
    panelTarget,
    rightPanelLayoutTick,
    windowZoom,
  ]);

  useLayoutEffect(() => {
    if (panelTarget === "right") {
      store.set(browserDeviceToolbarLayoutAtom, emulatedViewport);
      return () => {
        store.set(browserDeviceToolbarLayoutAtom, null);
      };
    }
  }, [panelTarget, emulatedViewport, store]);

  useEffect(() => {
    if (!isVisible) {
      setHasSettledOpen(false);
      return;
    }
    if (prefersReducedMotion) {
      setHasSettledOpen(true);
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setHasSettledOpen(true);
    }, ANNOTATION_SETTLE_ANIMATION.duration * 1000);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isVisible, prefersReducedMotion]);

  useEffect(() => {
    if (!isVisible) {
      isChromeHoveredRef.current = false;
      return;
    }
    const viewportContainer = viewportContainerRef.current;
    const webviewElement = webviewElementRef.current;
    const handlePointerEnter = () => {
      isChromeHoveredRef.current = true;
    };
    const handlePointerLeave = () => {
      isChromeHoveredRef.current = false;
    };
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    const handleWebviewFocus = () => {
      closeMenu();
      resetBrowserChromeAutoHide(store);
      markBrowserToolbarInteracted(store, hostKind);
      setBrowserChromeForceVisible(store, false);
    };
    viewportContainer?.addEventListener("pointerenter", handlePointerEnter);
    viewportContainer?.addEventListener("pointerleave", handlePointerLeave);
    webviewElement?.addEventListener("pointerenter", handlePointerEnter);
    webviewElement?.addEventListener("pointerleave", handlePointerLeave);
    webviewElement?.addEventListener("focus", handleWebviewFocus);
    webviewElement?.addEventListener("pointerdown", closeMenu);
    if (document.activeElement === webviewElement) handleWebviewFocus();
    window.addEventListener("blur", handlePointerLeave);
    return () => {
      viewportContainer?.removeEventListener(
        "pointerenter",
        handlePointerEnter,
      );
      viewportContainer?.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      webviewElement?.removeEventListener("pointerenter", handlePointerEnter);
      webviewElement?.removeEventListener("pointerleave", handlePointerLeave);
      webviewElement?.removeEventListener("focus", handleWebviewFocus);
      webviewElement?.removeEventListener("pointerdown", closeMenu);
      window.removeEventListener("blur", handlePointerLeave);
      isChromeHoveredRef.current = false;
    };
  }, [conversationId, isVisible, hostKind, store, isWebviewHostActive]);

  useEffect(() => {
    syncBrowserOpenStateEvent();
  }, [tabSnapshot.url, browserTabId, conversationId, isVisible]);

  useEffect(() => {
    syncWebview();
  }, [
    deviceToolbar.height,
    deviceToolbar.isEnabled,
    deviceToolbar.width,
    isAnnotationModeEnabled,
    scaledBounds?.height,
    scaledBounds?.width,
    scaledBounds?.x,
    scaledBounds?.y,
    browserTabId,
    tabSnapshot.tabType,
    viewportScale,
    tabSnapshot.url,
    themeVariant,
    conversationId,
    cwd,
    hasBrowserPage,
    hasSnapshot,
    webviewKey,
    intl.defaultLocale,
    isAgentControllingBrowser,
    isVisible,
    hostKind,
    persistedTabsEnabled,
    effectiveLocale,
  ]);

  useEffect(() => {
    const pressed =
      hasBrowserPage && isVisible && isCommentMode && isDesignModifierPressed;
    vscodeApiF.dispatchMessage("browser-sidebar-command", {
      conversationId,
      command: { type: "set-design-modifier-pressed", pressed },
    });
  }, [
    conversationId,
    hasBrowserPage,
    isCommentMode,
    isDesignModifierPressed,
    isVisible,
  ]);

  useEffect(
    () => () => {
      syncBrowserOpenStateEvent(false);
      syncWebview({ visible: false, bounds: null });
    },
    [browserTabId, conversationId],
  );

  useEffect(() => {
    if (!isVisible) {
      hasTrackedPanelOpenRef.current = false;
      return;
    }
    if (hasTrackedPanelOpenRef.current) return;
    hasTrackedPanelOpenRef.current = true;
    const pendingSource = getPendingBrowserOpenSource(
      conversationId,
      browserTabId,
    );
    const pendingReason = getPendingBrowserOpenReason(
      conversationId,
      browserTabId,
    );
    const source = pendingOpenSourceRef.current ?? pendingSource ?? "manual";
    const initiator =
      pendingOpenInitiatorRef.current ??
      pendingReason ??
      "panel_visibility_effect";
    pendingOpenInitiatorRef.current = null;
    pendingOpenSourceRef.current = null;
    trackScopedAnalyticsEvent(store, browserPanelOpenedEvent, {
      initiator,
      panelTarget,
      source,
    });
  }, [browserTabId, conversationId, isVisible, panelTarget, store]);

  useHostMessageSubscription(
    "browser-sidebar-command",
    (message: {
      conversationId: string;
      browserTabId?: string;
      command: { type: string; interactionMode?: string };
    }) => {
      if (
        message.conversationId !== conversationId ||
        !isBrowserTabMatch(
          message.browserTabId,
          activeBrowserTabId,
          browserTabId,
        )
      ) {
        return;
      }
      switch (message.command.type) {
        case "open-find":
          openBrowserFindPanel();
          break;
        case "focus-address":
          focusBrowserAddressBar();
          break;
        case "step-zoom":
        case "set-zoom-percent":
        case "reset-zoom":
          dispatchZoomCommandRef.current?.(message.command);
          break;
        case "set-interaction-mode":
          previewInteractionMode(
            message.command.interactionMode!,
            message.command.interactionMode === browserSidebarMode.COMMENT
              ? FOCUS_MODE.FOCUS
              : FOCUS_MODE.NONE,
          );
          break;
        default:
          break;
      }
    },
    [activeBrowserTabId, browserTabId, conversationId],
  );
  useHostMessageSubscription(
    "electron-window-focus-changed",
    (message: { isFocused: boolean }) => {
      if (!message.isFocused) {
        isChromeHoveredRef.current = false;
        return;
      }
      if (!isVisible || !isCommentMode || !hasBrowserPage) return;
      isChromeHoveredRef.current =
        viewportContainerRef.current?.matches(":hover") === true ||
        webviewElementRef.current?.matches(":hover") === true;
      dispatchBrowserCommand({ type: "refresh-cursor" });
    },
    [browserTabId, conversationId, hasBrowserPage, isCommentMode, isVisible],
  );
  useHostMessageSubscription(
    "browser-sidebar-find-state",
    (message: {
      conversationId: string;
      browserTabId?: string;
      state: unknown;
    }) => {
      if (
        message.conversationId !== conversationId ||
        !isBrowserTabMatch(
          message.browserTabId,
          activeBrowserTabId,
          browserTabId,
        ) ||
        activeFindTarget?.conversationId !== conversationId ||
        activeFindTarget.browserTabId !== browserTabId
      ) {
        return;
      }
      setBrowserFindState(store, message.state);
    },
    [
      activeBrowserTabId,
      browserTabId,
      activeFindTarget?.browserTabId,
      activeFindTarget?.conversationId,
      conversationId,
      store,
    ],
  );
  useHostMessageSubscription(
    "toggle-browser-panel",
    (message: {
      conversationId?: string;
      browserTabId?: string;
      source?: string;
      open?: boolean;
      url?: string | null;
      initiator?: string;
    }) => {
      if (
        (message.conversationId != null &&
          message.conversationId !== conversationId) ||
        !isBrowserTabMatch(
          message.browserTabId,
          activeBrowserTabId,
          browserTabId,
        ) ||
        message.source == null
      ) {
        return;
      }
      if (message.open === false) {
        pendingOpenInitiatorRef.current = null;
        pendingOpenSourceRef.current = null;
        return;
      }
      if (isVisible && (message.open === true || message.url != null)) {
        const initiator = message.initiator ?? "panel_visibility_effect";
        pendingOpenInitiatorRef.current = null;
        pendingOpenSourceRef.current = null;
        trackScopedAnalyticsEvent(store, browserPanelOpenedEvent, {
          initiator,
          panelTarget,
          source: message.source,
          hasUrl: message.url == null ? undefined : true,
          panelWasAlreadyVisible: true,
        });
        return;
      }
      pendingOpenInitiatorRef.current = message.initiator ?? null;
      pendingOpenSourceRef.current = message.source;
      if (!isBrowserManaged) {
        openBrowserPanelForTab(conversationId, browserTabId, {
          initiator: message.initiator,
          source: message.source,
        });
      }
    },
    [
      activeBrowserTabId,
      browserTabId,
      conversationId,
      isBrowserManaged,
      isVisible,
      panelTarget,
      store,
    ],
  );
  useHostMessageSubscription(
    "browser-sidebar-usage",
    (message: {
      conversationId: string;
      browserTabId?: string;
      kind?: string;
      initiator?: string;
      source?: string;
      urlKind?: string;
    }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      if (message.kind === "navigated") {
        trackScopedAnalyticsEvent(store, browserNavigatedEvent, {
          initiator: message.initiator,
          panelTarget,
          source: message.source,
          urlKind: message.urlKind,
        });
      }
    },
    [browserTabId, conversationId, panelTarget, store],
  );
  useHostMessageSubscription(
    "browser-sidebar-screenshot-copied",
    (message: { conversationId: string; browserTabId?: string }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      store.get(toastControllerToken).success(
        intl.formatMessage({
          id: "thread.browser.screenshot.copied",
          defaultMessage: "Screenshot saved to clipboard",
          description:
            "Success toast shown after capturing the visible browser viewport to the clipboard",
        }),
      );
    },
    [browserTabId, conversationId, intl, store],
  );
  useHostMessageSubscription(
    "browser-sidebar-url-copied",
    (message: { conversationId: string; browserTabId?: string }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      store.get(toastControllerToken).success(
        intl.formatMessage({
          id: "thread.browser.url.copied",
          defaultMessage: "URL copied to clipboard",
          description:
            "Success toast shown after copying the current in-app browser URL to the clipboard with the keyboard shortcut",
        }),
      );
    },
    [browserTabId, conversationId, intl, store],
  );
  useHostMessageSubscription(
    "browser-sidebar-screenshot-copy-failed",
    (message: { conversationId: string; browserTabId?: string }) => {
      if (
        message.conversationId !== conversationId ||
        message.browserTabId !== browserTabId
      ) {
        return;
      }
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "thread.browser.screenshot.copyFailed",
          defaultMessage: "Unable to capture screenshot",
          description:
            "Error toast shown when capturing the visible browser viewport fails",
        }),
      );
    },
    [browserTabId, conversationId, intl, store],
  );

  useEffect(() => {
    if (snapshot == null) return;
    const nextComments = extractBrowserComments(
      snapshot.comments,
      isTweaksEnabled,
    );
    suppressCommentSyncRef.current = true;
    setComments((previous) => [
      ...previous.filter(
        (comment) => !isCommentForBrowserTab(comment, browserTabId),
      ),
      ...nextComments.map((comment, index) =>
        toBrowserCommentAttachment(comment, index + 1, browserTabId),
      ),
    ]);
  }, [browserTabId, isTweaksEnabled, setComments, snapshot]);

  useEffect(() => {
    const nextComments =
      snapshot == null
        ? []
        : extractBrowserComments(snapshot.comments, isTweaksEnabled);
    if (suppressCommentSyncRef.current) {
      suppressCommentSyncRef.current = false;
      return;
    }
    if (
      snapshot != null &&
      nextComments.length > 0 &&
      pendingAnnotationCount === 0
    ) {
      dispatchBrowserCommandEvent({ type: "clear-comments" });
    }
  }, [pendingAnnotationCount, conversationId, isTweaksEnabled, snapshot]);

  useEffect(
    () => () => {
      if (originalViewEnabledRef.current) {
        vscodeApiF.dispatchMessage("browser-sidebar-command", {
          conversationId,
          command: { type: "set-original-view-enabled", enabled: false },
        });
        originalViewEnabledRef.current = false;
      }
    },
    [conversationId],
  );

  const commitAddress = ({
    value,
    shouldNavigateUnchanged,
  }: {
    value: string;
    shouldNavigateUnchanged?: boolean;
  }) => {
    const nextUrl = resolveBrowserNavigationUrl(value, goLinksConfig);
    const currentNormalized = resolveBrowserNavigationUrl(
      tabSnapshot.url,
      goLinksConfig,
    );
    const isUnchanged =
      normalizeBrowserUrl(nextUrl) === normalizeBrowserUrl(currentNormalized);
    hasEditedAddressRef.current = false;
    shouldKeepAddressSelectedRef.current = false;
    setAddressValue(nextUrl);
    if (nextUrl.length !== 0 && !(!shouldNavigateUnchanged && isUnchanged)) {
      setPendingNavigationSnapshot(snapshot);
      setShouldFocusWebviewAfterLoad(true);
      if (isUnchanged) {
        reloadPage();
        return;
      }
      dispatchBrowserCommand({
        type: "navigate",
        url: nextUrl,
        source: "manual",
        initiator: "address_bar",
      });
    }
  };
  const backLabel = intl.formatMessage({
    id: "thread.browser.back",
    defaultMessage: "Back",
    description: "Button label to navigate back in the inline browser",
  });
  const forwardLabel = intl.formatMessage({
    id: "thread.browser.next",
    defaultMessage: "Next",
    description: "Button label to navigate forward in the inline browser",
  });
  const stopLoadingLabel = intl.formatMessage({
    id: "thread.browser.stopLoading",
    defaultMessage: "Stop loading",
    description: "Tooltip text for stopping an in-flight browser navigation",
  });
  const reloadLabel = intl.formatMessage({
    id: "thread.browser.reload",
    defaultMessage: "Reload page",
    description: "Tooltip text for reloading the browser page",
  });
  const addressPlaceholder = intl.formatMessage({
    id: "thread.browser.addressPlaceholder",
    defaultMessage: "Enter a URL",
    description: "Placeholder text for the browser address bar",
  });
  const openExternalBrowserLabel = intl.formatMessage({
    id: "thread.browser.openExternalBrowser",
    defaultMessage: "Open in external browser",
    description:
      "Tooltip text for opening the current inline browser URL outside the app",
  });
  const commentModeUnavailableLabel = intl.formatMessage({
    id: "thread.browser.commentModeUnavailableForSite",
    defaultMessage: "Annotating is disabled for this website",
    description:
      "Tooltip shown when annotating is disabled for the current website",
  });
  const captureScreenshotLabel = intl.formatMessage({
    id: "thread.browser.captureScreenshot",
    defaultMessage: "Take a screenshot",
    description:
      "Tooltip text for capturing the visible browser viewport to the clipboard",
  });
  const certificateErrorSchemeParts =
    !isAddressEditing &&
    isOwlPermissionsEnabled &&
    tabSnapshot.securityState === "certificate-error"
      ? splitCertificateErrorScheme(addressValue)
      : null;
  let displayUrl = formatBrowserAddressDisplay(addressValue);
  if (isAddressEditing || certificateErrorSchemeParts != null) {
    displayUrl = addressValue;
  }
  const hasDisplayUrl = displayUrl.trim().length > 0;

  useEffect(() => {
    if (isAnnotationSessionTakeoverActive && hasQueuedTweaks) return;
    setDesignHoldState((previous) =>
      previous.conversationId !== conversationId || !previous.isHeld
        ? previous
        : createDefaultDesignHoldState(conversationId),
    );
  }, [conversationId, hasQueuedTweaks, isAnnotationSessionTakeoverActive]);
  const isOriginalViewEnabled =
    isAnnotationSessionTakeoverActive &&
    hasQueuedTweaks &&
    designHoldStateForConversation.isHeld;
  useEffect(() => {
    if (originalViewEnabledRef.current !== isOriginalViewEnabled) {
      originalViewEnabledRef.current = isOriginalViewEnabled;
      vscodeApiF.dispatchMessage("browser-sidebar-command", {
        conversationId,
        command: {
          type: "set-original-view-enabled",
          enabled: isOriginalViewEnabled,
        },
      });
    }
  }, [conversationId, isOriginalViewEnabled]);

  const discardAnnotations = () => {
    dispatchBrowserCommand({ type: "discard-pending-annotations" });
  };
  const addAnnotationsToComposer = () => {
    dispatchBrowserCommand({ type: "add-annotations-to-composer" });
  };
  const setActiveEditorDismissHandler = useCallback(
    (handler: (() => boolean) | null) => {
      activeEditorDismissRef.current = handler;
    },
    [],
  );
  const exitAnnotationTakeover = () => {
    if (canDismissActiveEditor(activeEditorDismissRef.current)) {
      addAnnotationsToComposer();
    }
  };
  const confirmDiscardAnnotations = () => {
    openScopedConfirmModal(store, discardBrowserAnnotationsModalConfig, {
      onConfirm: discardAnnotations,
    });
  };
  const holdOriginalView = () => {
    setDesignHoldState({ conversationId, isHeld: true });
  };
  const releaseOriginalView = () => {
    setDesignHoldState((previous) =>
      previous.conversationId === conversationId && previous.isHeld
        ? { ...previous, isHeld: false }
        : previous,
    );
  };
  const handleOriginalViewPointerDown = (event: React.PointerEvent) => {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    holdOriginalView();
  };
  const handleOriginalViewKeyDown = (event: React.KeyboardEvent) => {
    if (!isSpaceOrEnterKey(event.key) || event.repeat) return;
    event.preventDefault();
    holdOriginalView();
  };
  const handleOriginalViewPointerUp = (event: React.PointerEvent) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId) === true) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    releaseOriginalView();
  };
  const handleOriginalViewKeyUp = (event: React.KeyboardEvent) => {
    if (isSpaceOrEnterKey(event.key)) {
      event.preventDefault();
      releaseOriginalView();
    }
  };
  const handleOriginalViewPointerCancel = (event: React.PointerEvent) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId) === true) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDesignHoldState(createDefaultDesignHoldState(conversationId));
  };
  const getResponsiveViewportSizeForState = ({
    responsiveViewportSize,
  }: {
    responsiveViewportSize?: unknown;
  }) => responsiveViewportSize ?? getResponsiveViewportSize(panelBounds);
  const setDeviceToolbarTabState = (
    updater: (previous: {
      toolbarState: unknown;
      responsiveViewportSize?: unknown;
    }) => unknown,
  ) => {
    browserSidebarManager.setDeviceToolbarTabState(
      conversationId,
      browserTabId,
      updater,
    );
  };
  const handleDeviceToolbarStateChange = (
    nextToolbarState: { presetId?: string; height: number; width: number },
    options: { shouldResetPageZoom?: boolean } = {},
  ) => {
    setDeviceToolbarTabState((previous) =>
      nextToolbarState.presetId === "responsive"
        ? {
            responsiveViewportSize: {
              height: nextToolbarState.height,
              width: nextToolbarState.width,
            },
            toolbarState: nextToolbarState,
          }
        : { ...previous, toolbarState: nextToolbarState },
    );
    if (options.shouldResetPageZoom === true) {
      dispatchBrowserCommand({ type: "set-zoom-percent", zoomPercent: 100 });
    }
  };
  const toggleDeviceToolbar = () => {
    if (!deviceToolbar.isEnabled) {
      trackScopedAnalyticsEvent(store, browserToolbarActionEvent, {
        action:
          browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_MODE_ENTERED,
      });
    }
    setDeviceToolbarTabState((previous) => {
      const toolbarState = previous.toolbarState;
      return toolbarState.isEnabled
        ? { ...previous, toolbarState: { ...toolbarState, isEnabled: false } }
        : toolbarState.presetId === "responsive"
          ? {
              ...previous,
              toolbarState: {
                ...toolbarState,
                ...getResponsiveViewportSizeForState(previous),
                isEnabled: true,
              },
            }
          : { ...previous, toolbarState: { ...toolbarState, isEnabled: true } };
    });
  };
  const rotateDeviceToolbar = () => {
    setDeviceToolbarTabState((previous) => {
      const rotated = rotateDeviceToolbarState(previous.toolbarState);
      return rotated.presetId === "responsive"
        ? {
            responsiveViewportSize: {
              height: rotated.height,
              width: rotated.width,
            },
            toolbarState: rotated,
          }
        : { ...previous, toolbarState: rotated };
    });
  };
  const openInExternalBrowser = (value: string) => {
    if (value.trim().length === 0) return;
    trackScopedAnalyticsEvent(store, browserToolbarActionEvent, {});
    trackScopedAnalyticsEvent(store, browserOpenedInExternalEvent, {
      action:
        browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_OPENED_IN_EXTERNAL_BROWSER,
    });
    openExternalLink({
      href: resolveBrowserNavigationUrl(value, goLinksConfig),
      initiator: "open_in_browser_bridge",
      openTarget: "external-browser",
    });
  };
  const preventDefaultAndStop = (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const reloadPage = (ignoreCache = false) => {
    dispatchBrowserCommand(
      ignoreCache ? { type: "reload", ignoreCache: true } : { type: "reload" },
    );
  };
  const reloadOrStop = () => {
    if (tabSnapshot.isLoading) {
      dispatchBrowserCommand({ type: "stop" });
      return;
    }
    reloadPage();
  };
  const isFloatingComposerToggleAvailable =
    isVisible &&
    isFloatingComposerToggleVisible &&
    hasBrowserPage &&
    !deviceToolbar.isEnabled;
  const floatingComposerToggleLabel = isFloatingComposerVisible
    ? intl.formatMessage(floatingComposerMessages.hideFloatingComposer)
    : intl.formatMessage(floatingComposerMessages.showFloatingComposer);

  return (
    <div
      ref={rootElementRef}
      data-browser-sidebar-chrome-expanded={isChromeExpanded}
      data-browser-sidebar-primary-focus-target={
        hasBrowserPage ? "webview" : "address"
      }
      className="relative grid h-full min-h-0 w-full min-w-0 grid-rows-[auto_1fr]"
      tabIndex={-1}
    >
      <div className="relative z-10 h-toolbar-pane min-w-0 shrink-0 border-b border-token-border">
        {isAnnotationTakeoverVisible ? (
          <BrowserAnnotationTakeoverToolbar
            captureScreenshotLabel={captureScreenshotLabel}
            conversationId={conversationId}
            displayUrl={displayUrl}
            hasPendingAnnotations={hasPendingAnnotations}
            hasQueuedTweaks={hasQueuedTweaks}
            isAddModifierPressed={
              isAnnotationAddModifierActive ||
              tabSnapshot.isAnnotationAddModifierPressed === true
            }
            isOriginalViewEnabled={isOriginalViewEnabled}
            isScreenshotCaptureEnabled={isScreenshotCaptureEnabled}
            onAddToComposer={addAnnotationsToComposer}
            onDiscard={confirmDiscardAnnotations}
            onExit={exitAnnotationTakeover}
            onOriginalViewBlur={releaseOriginalView}
            onOriginalViewKeyDown={handleOriginalViewKeyDown}
            onOriginalViewKeyUp={handleOriginalViewKeyUp}
            onOriginalViewPointerCancel={handleOriginalViewPointerCancel}
            onOriginalViewPointerDown={handleOriginalViewPointerDown}
            onOriginalViewPointerUp={handleOriginalViewPointerUp}
            onSubmit={() => {
              submitBrowserAnnotationComments(conversationId);
            }}
            pendingAnnotationCount={pendingAnnotationCount}
          />
        ) : null}
        <div
          aria-hidden={isAnnotationTakeoverVisible}
          data-browser-sidebar-toolbar="true"
          className={classNames(
            "flex h-full min-w-0 items-center gap-1 px-2 text-token-description-foreground",
            isChromeExpanded ? "no-drag" : "draggable",
            isAnnotationTakeoverVisible && "hidden",
          )}
          onPointerDown={(event) => {
            const target = event.target;
            if (
              !(target instanceof Node) ||
              !event.currentTarget.contains(target) ||
              addressBarContainerRef.current?.contains(target) ||
              (target instanceof Element &&
                target.closest(
                  "[data-browser-sidebar-skip-address-commit='true']",
                ) != null)
            ) {
              return;
            }
            setIsMenuOpen(false);
            setIsSecurityPopoverOpen(false);
            if (isAddressEditing) stopAddressEditing();
          }}
        >
          <div className="flex items-center gap-px">
            <ElectronExtensionGate electron extension>
              <BackForwardNavigationButtons
                backLabel={backLabel}
                canGoBack={tabSnapshot.canGoBack}
                canGoForward={tabSnapshot.canGoForward}
                forwardLabel={forwardLabel}
                onBack={() => {
                  dispatchBrowserCommand({ type: "go-back" });
                }}
                onForward={() => {
                  dispatchBrowserCommand({ type: "go-forward" });
                }}
              />
            </ElectronExtensionGate>
            <Button
              color="ghost"
              size="toolbar"
              uniform
              disabled={snapshot == null}
              onClick={reloadOrStop}
              title={tabSnapshot.isLoading ? stopLoadingLabel : reloadLabel}
            >
              {tabSnapshot.isLoading ? (
                <StopIcon className="icon-xs" />
              ) : (
                <RefreshIcon className="icon-xs" />
              )}
            </Button>
          </div>
          <div className="no-drag flex min-w-0 flex-1 items-center justify-center px-1">
            <div
              ref={addressBarContainerRef}
              className="relative w-full max-w-[770px]"
            >
              <div
                className={classNames(
                  "group/address-bar flex h-[28px] min-w-0 w-full items-center overflow-hidden rounded-[10px] transition-[background-color,box-shadow] duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-colors",
                  isAddressEditing
                    ? "bg-transparent ring-1 ring-inset ring-token-border"
                    : classNames(
                        "cursor-text focus-within:bg-transparent focus-within:ring-1 focus-within:ring-inset focus-within:ring-token-border",
                        isSecurityPopoverOpen
                          ? "bg-token-list-hover-background"
                          : "bg-transparent hover:bg-token-list-hover-background",
                      ),
                )}
                onClick={() => {
                  beginAddressEditing({
                    shouldSelectAddress: !isAddressEditing,
                  });
                }}
                onContextMenu={() => {
                  beginAddressEditing({ shouldSelectAddress: false });
                }}
              >
                <BrowserAddressSecurityIndicator
                  browserTabId={browserTabId}
                  conversationId={conversationId}
                  currentUrl={tabSnapshot.url}
                  isOwlPermissionsEnabled={isOwlPermissionsEnabled}
                  isAddressEditing={isAddressEditing}
                  isOpen={isSecurityPopoverOpen}
                  onOpenChange={setIsSecurityPopoverOpen}
                  securityState={tabSnapshot.securityState}
                  shouldAnimateAddressExpansion={shouldAnimateAddressExpansion}
                />
                <div className="relative h-full min-w-0 flex-1">
                  {certificateErrorSchemeParts == null ? null : (
                    <div
                      aria-hidden="true"
                      className={classNames(
                        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden px-2 text-sm leading-[18px] whitespace-nowrap",
                        hasDisplayUrl && ADDRESS_FADE_MASK_CLASS,
                      )}
                    >
                      <span className="max-w-full min-w-0 truncate text-center text-token-input-foreground">
                        <span className="text-token-error-foreground line-through">
                          {certificateErrorSchemeParts.scheme}
                        </span>
                        <span>{certificateErrorSchemeParts.rest}</span>
                      </span>
                    </div>
                  )}
                  <BrowserAddressInput
                    addressBarRef={addressBarContainerRef}
                    addressInputRef={addressInputRef}
                    className={classNames(
                      !isAddressEditing &&
                        hasDisplayUrl &&
                        ADDRESS_FADE_MASK_CLASS,
                      certificateErrorSchemeParts != null &&
                        "text-transparent caret-transparent",
                    )}
                    addressValue={displayUrl}
                    bottomPanelAnimation={bottomPanelAnimation}
                    browserStateUrl={tabSnapshot.url}
                    browserTabId={browserTabId}
                    conversationId={toConversationId(conversationId)}
                    hasEditedAddressRef={hasEditedAddressRef}
                    isAddressEditing={isAddressEditing}
                    isStoppingAddressEditingRef={isStoppingAddressEditingRef}
                    isVisible={isVisible}
                    onAddressValueChange={setAddressValue}
                    onCancelAddressEditing={cancelAddressEditing}
                    onCommitAddress={(value: string) => {
                      commitAddress({ value, shouldNavigateUnchanged: true });
                    }}
                    onEnsureAddressEditing={ensureAddressEditing}
                    onFinishAddressEditing={() => setIsAddressEditing(false)}
                    onOpenBrowserFind={openBrowserFindPanel}
                    onStartAddressEditing={() => {
                      beginAddressEditing({ shouldSelectAddress: true });
                    }}
                    onStopAddressEditing={stopAddressEditing}
                    panelTarget={panelTarget}
                    placeholder={addressPlaceholder}
                    rightPanelLayoutTick={rightPanelLayoutTick}
                    shouldKeepAddressSelectedRef={shouldKeepAddressSelectedRef}
                    submittedAddressStillPending={
                      pendingNavigationSnapshot !== undefined &&
                      snapshot === pendingNavigationSnapshot
                    }
                  />
                </div>
                <Tooltip
                  tooltipContent={openExternalBrowserLabel}
                  disabled={!hasDisplayUrl}
                >
                  <button
                    type="button"
                    data-browser-sidebar-open-external="true"
                    aria-label={openExternalBrowserLabel}
                    disabled={!hasDisplayUrl}
                    onPointerDown={preventDefaultAndStop}
                    onMouseDown={preventDefaultAndStop}
                    onClick={(event) => {
                      event.stopPropagation();
                      openInExternalBrowser(
                        isAddressEditing
                          ? (addressInputRef.current?.value ?? addressValue)
                          : addressValue,
                      );
                    }}
                    className={classNames(
                      "flex h-[28px] w-7 shrink-0 items-center justify-center rounded-l-none rounded-r-[10px] text-token-description-foreground outline-none transition-[background-color]",
                      isAddressEditing
                        ? "opacity-100"
                        : "opacity-0 group-hover/address-bar:opacity-100 group-focus-within/address-bar:opacity-100",
                      hasDisplayUrl
                        ? "cursor-interaction hover:bg-token-foreground/5 focus-visible:bg-token-foreground/5"
                        : "cursor-default opacity-0",
                    )}
                  >
                    <ExternalLinkIcon className="icon-xs" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            {isScreenshotCaptureEnabled ? (
              <BrowserScreenshotButton
                browserTabId={browserTabId}
                captureScreenshotLabel={captureScreenshotLabel}
                conversationId={conversationId}
                hasBrowserPage={hasBrowserPage}
                isCommentMode={isCommentMode}
                reserveSpaceWhenHidden
              />
            ) : null}
            {isAnnotationModeEnabled ? (
              <div
                aria-hidden={!hasBrowserPage}
                className={classNames(
                  "ease-basic flex origin-right justify-end transition-[width,max-width,opacity,transform] duration-150 motion-reduce:transition-none",
                  hasBrowserPage
                    ? classNames(
                        "scale-100 overflow-visible opacity-100",
                        isPersistentCommentMode ? "max-w-40" : "w-7 max-w-7",
                      )
                    : "pointer-events-none max-w-7 overflow-hidden opacity-0",
                )}
              >
                <BrowserAnnotateButton
                  activeHoverSuppressed={isAnnotateHoverSuppressed}
                  conversationId={conversationId}
                  disabled={isAnnotationDisabled}
                  disabledTooltipContent={
                    isCommentModeSiteBlocked
                      ? commentModeUnavailableLabel
                      : undefined
                  }
                  onActiveHoverSuppressedChange={setIsAnnotateHoverSuppressed}
                  onInteractionModeChange={(mode: string) => {
                    changeInteractionMode(
                      mode,
                      mode === browserSidebarMode.COMMENT
                        ? FOCUS_MODE.FOCUS
                        : FOCUS_MODE.NONE,
                      mode === browserSidebarMode.COMMENT
                        ? "toolbar-button"
                        : undefined,
                    );
                  }}
                  interactionMode={
                    isPersistentCommentMode
                      ? browserSidebarMode.COMMENT
                      : browserSidebarMode.BROWSE
                  }
                  shortcutLabel={annotateShortcutLabel}
                  shouldShowCoachmark={
                    hasBrowserPage && isVisible && hasSettledOpen
                  }
                />
              </div>
            ) : null}
            <ElectronExtensionGate electron>
              {downloadsService == null ? null : (
                <BrowserDownloadsButton
                  conversationId={conversationId}
                  downloadsService={downloadsService}
                  open={isDownloadsOpen}
                  onOpenChange={setIsDownloadsOpen}
                />
              )}
            </ElectronExtensionGate>
            <ElectronExtensionGate electron>
              <div className="ease-basic max-w-8 origin-right scale-100 overflow-visible opacity-100 transition-[max-width,opacity,transform] duration-150 motion-reduce:transition-none">
                <BrowserSidebarMenu
                  browserKnowledgeWorkerEnabled={
                    isBrowserKnowledgeWorkerEnabled
                  }
                  browserProfileImportService={browserProfileImportService}
                  currentZoomPercent={currentZoomPercent}
                  isDeviceToolbarMenuItemVisible={
                    isDeviceToolbarEnabled && isDeviceToolbarMenuItemVisible
                  }
                  isDeviceToolbarVisible={deviceToolbar.isEnabled}
                  isFloatingComposerMenuItemVisible={
                    isFloatingComposerToggleVisible
                  }
                  isFloatingComposerVisible={isFloatingComposerVisible}
                  isPrintMenuItemVisible={isPrintEnabled}
                  onHardReload={() => {
                    reloadPage(true);
                  }}
                  onOpenChromiumPage={(url: string) => {
                    openChromiumInternalPage({
                      browserTabId,
                      conversationId,
                      isMultiBrowserTabsEnabled,
                      url,
                    });
                  }}
                  onOpenFindInPage={openBrowserFindPanel}
                  onOpenChange={setIsMenuOpen}
                  onPrint={() => {
                    if (isPrintEnabled)
                      dispatchBrowserCommand({ type: "print" });
                  }}
                  pageActionsDisabled={
                    !hasBrowserPage || tabSnapshot.url.trim().length === 0
                  }
                  onResetZoom={() => {
                    dispatchZoomCommandRef.current?.({ type: "reset-zoom" });
                  }}
                  onToggleFloatingComposer={onToggleFloatingComposer}
                  onToggleDeviceToolbar={toggleDeviceToolbar}
                  onZoomIn={() => {
                    dispatchZoomCommandRef.current?.({
                      type: "step-zoom",
                      delta: 1,
                    });
                  }}
                  onZoomOut={() => {
                    dispatchZoomCommandRef.current?.({
                      type: "step-zoom",
                      delta: -1,
                    });
                  }}
                  open={isMenuOpen}
                />
              </div>
            </ElectronExtensionGate>
          </div>
        </div>
        <div
          aria-hidden
          className={classNames(
            "pointer-events-none absolute inset-x-0 bottom-0 h-0.5 overflow-hidden transition-opacity",
            tabSnapshot.isLoading ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="h-full w-full animate-pulse bg-token-progress-bar-background" />
        </div>
      </div>
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        {profileImportNuxStrip?.presentation === "strip" ? (
          <div
            key={profileImportNuxStrip.key}
            className="relative z-40 shrink-0"
          >
            {profileImportNuxStrip.content}
          </div>
        ) : null}
        <div
          ref={viewportContainerRef}
          className="relative min-h-0 min-w-0 flex-1 overflow-hidden"
          style={{ backgroundColor: deviceToolbarBackgroundColor }}
        >
          <BrowserDeviceToolbarOverlay
            key={conversationId}
            currentZoomPercent={currentZoomPercent}
            layout={deviceToolbarLayout}
            panelBounds={panelBounds}
            state={deviceToolbar}
            onClose={toggleDeviceToolbar}
            onRotate={rotateDeviceToolbar}
            onStateChange={handleDeviceToolbarStateChange}
            onViewportResizeActiveChange={(active: boolean) => {
              setViewportResizeScale(active ? layoutScale : null);
            }}
            onZoomPercentChange={(zoomPercent: number) => {
              dispatchZoomCommandRef.current?.(
                { type: "set-zoom-percent", zoomPercent },
                { showBanner: false },
              );
            }}
          />
          {isVisible && hasBrowserPage ? (
            <BrowserSidebarZoomController
              browserTabId={browserTabId}
              conversationId={conversationId}
              currentRenderedZoomPercent={currentZoomPercent}
              dispatchZoomCommandRef={dispatchZoomCommandRef}
              rootRef={rootElementRef}
              toolbarOffset={deviceToolbarLayout == null ? undefined : 34}
              viewportScale={effectiveViewportScale}
            />
          ) : null}
          {isFloatingComposerToggleAvailable ? (
            <>
              <div
                aria-hidden
                className={classNames(
                  "pointer-events-none absolute inset-x-0 z-10 border-t border-token-border transition-transform duration-150 ease-[var(--cubic-enter)]",
                  prefersReducedMotion && "transition-none",
                )}
                data-testid="browser-sidebar-reserve-divider"
                style={{
                  bottom: reservedComposerSpace,
                  transform: `translateY(${
                    isFloatingComposerVisible
                      ? 0
                      : reservedComposerSpace - FLOATING_COMPOSER_TOGGLE_HEIGHT
                  }px)`,
                }}
              />
              <Tooltip tooltipContent={floatingComposerToggleLabel}>
                <Button
                  aria-expanded={isFloatingComposerVisible}
                  aria-label={floatingComposerToggleLabel}
                  className={classNames(
                    "absolute right-2 z-20 border-token-border bg-token-main-surface-primary hover:!bg-token-main-surface-primary transition-transform duration-150 ease-[var(--cubic-enter)]",
                    prefersReducedMotion && "transition-none",
                  )}
                  color="outline"
                  size="iconSm"
                  style={{
                    bottom: reservedComposerSpace,
                    transform: `translateY(calc(50% + ${
                      isFloatingComposerVisible
                        ? FLOATING_COMPOSER_TOGGLE_HEIGHT / 2
                        : reservedComposerSpace -
                          FLOATING_COMPOSER_TOGGLE_HEIGHT / 2
                    }px))`,
                  }}
                  onClick={onToggleFloatingComposer}
                >
                  <ChevronIcon
                    className={classNames(
                      "icon-2xs transition-transform duration-150 ease-[var(--cubic-enter)]",
                      prefersReducedMotion && "transition-none",
                      !isFloatingComposerVisible && "rotate-180",
                    )}
                  />
                </Button>
              </Tooltip>
            </>
          ) : null}
          {snapshot == null || (!hasBrowserPage && !isAdopting) ? (
            <BrowserSidebarPlaceholder />
          ) : null}
          {isWebviewHostActive ? (
            <ElectronExtensionGate electron>
              {isBrowserManaged && !hasRetainedWebview ? (
                <BrowserSidebarWebview
                  adoptionLease={adoptionLease}
                  adoptedWebContentsId={adoptedWebContentsId}
                  bounds={webviewBounds}
                  browserTabId={browserTabId}
                  conversationId={conversationId}
                  hostKind={hostKind}
                  initialUrl={initialUrl}
                  isVisible={isWebviewVisible && isVisible}
                  persistedTabsEnabled={persistedTabsEnabled}
                  scale={layoutScale}
                  shouldBootstrapWhenHidden={shouldBootstrapWhenHidden}
                  shouldPaint={shouldPaintWebview}
                  webviewRef={webviewElementRef}
                  windowZoom={windowZoom}
                >
                  <BrowserCursorOverlay
                    conversationId={conversationId}
                    cursor={browserUseCursorState}
                    isVisible={isAgentControllingBrowser}
                    viewportSize={webviewBounds}
                  />
                </BrowserSidebarWebview>
              ) : (
                <BrowserSidebarFallbackWebview
                  bounds={webviewBounds}
                  browserTabId={browserTabId}
                  conversationId={conversationId}
                  hostKind={hostKind}
                  initialUrl={
                    tabSnapshot.url.length === 0
                      ? "about:blank"
                      : tabSnapshot.url
                  }
                  isVisible={isVisible}
                  persistedTabsEnabled={persistedTabsEnabled}
                  scale={layoutScale}
                  webviewRef={webviewElementRef}
                  windowZoom={windowZoom}
                >
                  <BrowserCursorOverlay
                    conversationId={conversationId}
                    cursor={browserUseCursorState}
                    isVisible={isAgentControllingBrowser}
                    viewportSize={webviewBounds}
                  />
                </BrowserSidebarFallbackWebview>
              )}
            </ElectronExtensionGate>
          ) : null}
        </div>
      </div>
      <BrowserFloatingComposer
        browserTabId={browserTabId}
        conversationId={conversationId}
        defaultCreateSubmitMode={annotationFlowConfig.defaultSubmitMode}
        onActiveEditorDismissRequestChange={setActiveEditorDismissHandler}
        showAdjustEntry={isAnnotationModeEnabled && isTweaksEnabled}
      />
    </div>
  );
}
