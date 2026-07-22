// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s-gStRzqf8.js
// app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s-gStRzqf8 chunk restored from the Codex webview bundle.
import {
  Link,
  MemoryRouter,
  Navigate,
  NavigationType,
  Outlet,
  Route,
  Routes,
  UNSAFE_LocationContext as LocationContext,
  createPath,
  createRoutesFromChildren,
  matchPath,
  matchRoutes,
  renderMatches,
  useLocation,
  useMatch,
  useNavigate,
  useNavigationType,
  useParams,
  useSearchParams,
} from "react-router-7-13-1";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB as initSharedSignalModule,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyCt as readScopedSignalValue,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleySt as createFamilySignal,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX as initSharedScopeModuleInternal,
  _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyBt as createScope,
  _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDt as createComputedSignal,
  _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyFt as createScopedFamilySignal,
  _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyXt as createScopeValueSignal,
  _appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY as rootScope,
} from "../../current-app-initial/shared-react-runtime";
import {
  $c as initQueryRuntime,
  ___appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzA as createQuerySignal,
  __appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzS as queryDefaults,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzBn as localConversationRoutePattern,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzLn as initThreadRoutePatterns,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzM as appHostBridge,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzP as initAppHostBridgeInternal,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzVn as newThreadPanelPath,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzXn as alternateConversationRoutePattern,
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzYn as alternateRemoteTaskRoutePattern,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzOn as remoteTaskRoutePattern,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzP as persistedThreadKey,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzUo as createClientThreadId,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzWo as decodeIdentifier,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzZo as isClientThreadId,
} from "../../current-app-initial/shared-query-rpc-runtime";
import {
  createPersistedAtomSignal,
  getPersistedAtomValue,
  initPersistedAtomRegistryRuntime,
  initPersistedAtomStoreRuntime,
  setPersistedAtomItem,
} from "../../current-app-initial/persisted-ui-runtime";
type Platform = "darwin" | "electron" | "linux" | "unknown" | "web" | "win32";
type WindowChromeKind = "application-menu" | "native";
type ProjectContext = {
  hostId: string | null;
  projectId: string;
};
type ThreadRoute =
  | {
      routeKind: "home";
      pathname: string;
      routeTemplate: string;
      search?: string;
      projectContext?: ProjectContext | null;
    }
  | {
      routeKind: "new-thread-panel";
      pathname: string;
      routeTemplate: string;
      search?: string;
    }
  | {
      routeKind: "client-local-thread";
      clientThreadId: string;
      pathname: string;
      routeTemplate: string;
      search?: string;
    }
  | {
      routeKind: "local-thread";
      conversationId: string;
      pathname: string;
      routeTemplate: string;
      search?: string;
      projectContext?: ProjectContext | null;
    }
  | {
      routeKind: "remote-thread";
      taskId: string;
      pathname: string;
      routeTemplate: string;
      search?: string;
    }
  | {
      routeKind: "chatgpt-thread";
      conversationId: string;
      pathname: string;
      routeTemplate: string;
      search?: string;
    }
  | {
      routeKind: "other";
      pathname: string;
      routeTemplate: string;
      search?: string;
    };
type SignalStore = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, ...args: unknown[]): void;
};
type ThreadScopeValue = {
  clientThreadId: string;
  routeConversationId?: string | null;
};
type ThreadScope = {
  value: ThreadScopeValue;
};
type LinkMouseEvent = {
  button: number;
  ctrlKey: boolean;
  metaKey: boolean;
  preventDefault(): void;
};
type OpenInBrowserOptions = {
  conversationId?: string;
  disposition?: "new-tab" | string;
  href: string;
  hostId?: string;
  initiator?: string;
  openTarget?: string;
  openTargetIntent?: "alternate" | "default";
  originHostId?: string;
  source?: string;
  useExternalBrowser?: boolean;
};
function resolveWindowChromeKind(
  runtime: Platform,
  platform: Platform,
): WindowChromeKind {
  if (runtime !== "electron") return "native";
  return platform === "win32" || platform === "linux"
    ? "application-menu"
    : "native";
}
function usesApplicationMenuChrome(): boolean {
  return (
    document.documentElement.dataset.codexWindowChrome === "application-menu"
  );
}
function detectNavigatorPlatform(): Exclude<Platform, "electron" | "web"> {
  const navigatorPlatform = navigator as Navigator & {
    userAgentData?: {
      platform?: string;
    };
  };
  const platform = (
    navigatorPlatform.userAgentData?.platform ??
    navigator.platform ??
    navigator.userAgent
  ).toLowerCase();
  if (platform.includes("win")) return "win32";
  if (platform.includes("mac") || platform.includes("darwin")) return "darwin";
  if (platform.includes("linux")) return "linux";
  return "unknown";
}
function initWindowChromeRuntime(): void {}
function initReactRouterRuntime(): void {}
function initReactRouterCoreRuntime(): void {}
let osInfoQuery: unknown;
let osPlatformSignal: unknown;
let osInfoInitialized = false;
let osPlatformInitialized = false;
function initOsInfoQueryRuntime(): void {
  if (osInfoInitialized) return;
  osInfoInitialized = true;
  initSharedSignalModule();
  initQueryRuntime();
  osInfoQuery = createQuerySignal(rootScope, "os-info", {
    staleTime: (
      queryDefaults as {
        INFINITE: number;
      }
    ).INFINITE,
  });
}
function resolvePlatformLabel(
  platform?: string | null,
): "linux" | "macOS" | "windows" {
  if (platform == null || platform === "web") {
    const browserPlatform =
      typeof navigator === "undefined" ? "" : (navigator.platform ?? "");
    if (browserPlatform.startsWith("Mac")) return "macOS";
    if (browserPlatform.startsWith("Win")) return "windows";
    return "linux";
  }
  if (platform === "win32") return "windows";
  if (platform === "darwin") return "macOS";
  return "linux";
}
function initOsPlatformSignalRuntime(): void {
  if (osPlatformInitialized) return;
  osPlatformInitialized = true;
  initSharedScopeModuleInternal();
  initSharedSignalModule();
  initOsInfoQueryRuntime();
  osPlatformSignal = createComputedSignal(
    rootScope,
    ({ get }: { get<T>(signal: unknown): T }) =>
      resolvePlatformLabel(
        get<{
          data?: {
            platform?: string;
          };
        }>(osInfoQuery).data?.platform,
      ),
  );
}
let newConversationEntrypoint = "new-conversation";
let panelNewConversationEntrypoint = "panel-new-conversation";
function initThreadEntrypointRuntime(): void {
  newConversationEntrypoint = "new-conversation";
  panelNewConversationEntrypoint = "panel-new-conversation";
}
function threadScopeIdForEntrypoint({
  entrypoint,
}: {
  entrypoint: "home" | "panel";
}): string {
  return entrypoint === "home"
    ? newConversationEntrypoint
    : panelNewConversationEntrypoint;
}
function isNewConversationEntrypoint(value: string): boolean {
  return (
    value === newConversationEntrypoint ||
    value === panelNewConversationEntrypoint
  );
}
let localThreadPrefix = "local:";
let remoteThreadPrefix = "remote:";
let routeThreadPrefix = "route:";
let ThreadScopeSignal: unknown;
let threadScopeValueSignal: unknown;
let clientThreadIdByConversationSignal: unknown;
let draftThreadAssignmentListeners = new Set<
  (
    scope: ThreadScope,
    data: {
      conversationId: string;
      draftThreadLocationId: string;
    },
  ) => void
>();
let conversationMappingListeners = new Set<
  (
    store: SignalStore,
    data: {
      clientThreadId: string;
      conversationId: string;
    },
  ) => void
>();
let persistedClientThreadIdSignal: unknown;
let conversationIdByClientThreadSignal: unknown;
let scopedConversationIdSignal: unknown;
let conversationIdForClientThreadSignal: unknown;
let conversationClientThreadIdSignal: unknown;
let draftClientThreadIdSignal: unknown;
let resolvedClientThreadIdSignal: unknown;
let clientThreadIdByConversationIdSignal: unknown;
let clientThreadIdsByConversationSignal: unknown;
let threadScopeInitialized = false;
function normalizeConversationScopeId(conversationId: string): string {
  return `${localThreadPrefix}${conversationId}`;
}
function normalizeRemoteScopeId(taskId: string): string {
  return `${remoteThreadPrefix}${taskId}`;
}
function normalizeRouteScopeId(value: string): string {
  return value;
}
function isLocalConversationScopeId(value: string): boolean {
  return value.startsWith(localThreadPrefix);
}
function initThreadScopeRuntime(): void {
  if (threadScopeInitialized) return;
  threadScopeInitialized = true;
  initSharedScopeModuleInternal();
  initThreadRoutePatterns();
  initThreadEntrypointRuntime();
  initSharedSignalModule();
  initPersistedAtomStoreRuntime();
  initPersistedAtomRegistryRuntime();
  ThreadScopeSignal = createScope("ThreadScope", {
    key: (value: ThreadScopeValue) => value.clientThreadId,
    parent: rootScope,
    retain: {
      max: 20,
    },
  });
  threadScopeValueSignal = createScopeValueSignal(ThreadScopeSignal, null);
  clientThreadIdByConversationSignal = createFamilySignal(
    rootScope,
    () => null,
  );
  draftThreadAssignmentListeners = new Set();
  conversationMappingListeners = new Set();
  persistedClientThreadIdSignal = createPersistedAtomSignal(
    persistedThreadKey,
    null,
  );
  conversationIdByClientThreadSignal = createFamilySignal(
    rootScope,
    () => null,
  );
  scopedConversationIdSignal = createComputedSignal(
    ThreadScopeSignal,
    ({
      get,
      scope,
    }: {
      get<T>(signal: unknown, key?: unknown): T;
      scope: ThreadScope;
    }) => {
      const { clientThreadId } = scope.value;
      if (isClientThreadId(clientThreadId)) {
        return (
          get<string | null>(
            conversationIdByClientThreadSignal,
            clientThreadId,
          ) ?? scope.value.routeConversationId
        );
      }
      return isLocalConversationScopeId(clientThreadId)
        ? decodeIdentifier(clientThreadId.slice(localThreadPrefix.length))
        : null;
    },
  );
  conversationIdForClientThreadSignal = createScopedFamilySignal(
    rootScope,
    (
      clientThreadId: string,
      {
        get,
      }: {
        get<T>(signal: unknown, key?: unknown): T;
      },
    ) =>
      isClientThreadId(clientThreadId)
        ? get<string | null>(conversationIdByClientThreadSignal, clientThreadId)
        : clientThreadId,
  );
  conversationClientThreadIdSignal = createFamilySignal(rootScope, () => null);
  draftClientThreadIdSignal = createFamilySignal(rootScope, () =>
    createClientThreadId(),
  );
  resolvedClientThreadIdSignal = createScopedFamilySignal(
    rootScope,
    (
      scopeId: string,
      {
        get,
      }: {
        get<T>(signal: unknown, key?: unknown): T;
      },
    ) => {
      if (isClientThreadId(scopeId)) return scopeId;
      if (isNewConversationEntrypoint(scopeId))
        return get<string>(draftClientThreadIdSignal, scopeId);
      const conversationId = isLocalConversationScopeId(scopeId)
        ? get<string | null>(
            clientThreadIdByConversationSignal,
            decodeIdentifier(scopeId.slice(localThreadPrefix.length)),
          )
        : null;
      if (conversationId != null) return conversationId;
      const persisted = isLocalConversationScopeId(scopeId)
        ? get<string | null>(persistedClientThreadIdSignal, scopeId)
        : null;
      return typeof persisted === "string" && isClientThreadId(persisted)
        ? persisted
        : scopeId;
    },
  );
  clientThreadIdByConversationIdSignal = createScopedFamilySignal(
    rootScope,
    (
      conversationId: string,
      {
        get,
      }: {
        get<T>(signal: unknown, key?: unknown): T;
      },
    ) => {
      const clientThreadId = get<string>(
        resolvedClientThreadIdSignal,
        normalizeConversationScopeId(conversationId),
      );
      return isClientThreadId(clientThreadId) ? clientThreadId : null;
    },
  );
  clientThreadIdsByConversationSignal = createScopedFamilySignal(
    rootScope,
    (
      conversationIds: string[],
      {
        get,
      }: {
        get<T>(signal: unknown, key?: unknown): T;
      },
    ) =>
      new Map(
        conversationIds.flatMap((conversationId) => {
          const clientThreadId = get<string | null>(
            clientThreadIdByConversationIdSignal,
            conversationId,
          );
          return clientThreadId == null
            ? []
            : [[conversationId, clientThreadId] as const];
        }),
      ),
  );
}
function registerDraftThreadAssignmentListener(
  listener: (
    scope: ThreadScope,
    data: {
      conversationId: string;
      draftThreadLocationId: string;
    },
  ) => void,
): () => void {
  draftThreadAssignmentListeners.add(listener);
  return () => draftThreadAssignmentListeners.delete(listener);
}
function registerConversationMappingListener(
  listener: (
    store: SignalStore,
    data: {
      clientThreadId: string;
      conversationId: string;
    },
  ) => void,
): () => void {
  conversationMappingListeners.add(listener);
  return () => conversationMappingListeners.delete(listener);
}
function associateClientThreadWithConversation(
  store: SignalStore,
  {
    clientThreadId,
    conversationId,
  }: {
    clientThreadId: string;
    conversationId: string;
  },
): void {
  persistClientThreadConversation(store, conversationId, clientThreadId);
}
function clearDraftThreadLocationClientThread(
  store: SignalStore,
  {
    clientNewThreadId,
    draftThreadLocationId,
  }: {
    clientNewThreadId: string;
    draftThreadLocationId: string;
  },
): void {
  if (
    store.get<string>(draftClientThreadIdSignal, draftThreadLocationId) ===
    clientNewThreadId
  ) {
    store.set(
      draftClientThreadIdSignal,
      draftThreadLocationId,
      createClientThreadId(),
    );
  }
}
function completeClientThreadPromotion(
  scope: ThreadScope & SignalStore,
  {
    conversationId,
    draftThreadLocationId,
  }: {
    conversationId: string;
    draftThreadLocationId: string;
  },
): void {
  const { clientThreadId } = scope.value;
  if (!isClientThreadId(clientThreadId))
    throw new Error("Expected a client-created thread");
  persistClientThreadConversation(scope, conversationId, clientThreadId);
  for (const listener of draftThreadAssignmentListeners) {
    listener(scope, {
      conversationId,
      draftThreadLocationId,
    });
  }
  clearDraftThreadLocationClientThread(scope, {
    clientNewThreadId: clientThreadId,
    draftThreadLocationId,
  });
}
function persistClientThreadConversation(
  store: SignalStore,
  conversationId: string,
  clientThreadId: string,
): void {
  const scopeId = normalizeConversationScopeId(conversationId);
  setPersistedAtomItem(persistedThreadKey(scopeId), clientThreadId);
  store.set(persistedClientThreadIdSignal, scopeId, clientThreadId);
  for (const listener of conversationMappingListeners)
    listener(store, {
      clientThreadId,
      conversationId,
    });
  store.set(conversationIdByClientThreadSignal, clientThreadId, conversationId);
  store.set(clientThreadIdByConversationSignal, conversationId, clientThreadId);
}
function readThreadScopeClientThreadId(
  store: SignalStore,
  conversationId: string,
): unknown {
  const scopeId = normalizeConversationScopeId(conversationId);
  return readScopedSignalValue(
    store,
    ThreadScopeSignal,
    store.get(resolvedClientThreadIdSignal, scopeId),
  );
}
function getClientThreadIdForConversation(
  store: SignalStore,
  conversationId: string,
): unknown {
  return store.get(
    resolvedClientThreadIdSignal,
    normalizeConversationScopeId(conversationId),
  );
}
function resolveCanonicalClientThreadId(conversationId: string): string {
  const scopeId = normalizeConversationScopeId(conversationId);
  const persisted = getPersistedAtomValue(persistedThreadKey(scopeId), null);
  return typeof persisted === "string" && isClientThreadId(persisted)
    ? persisted
    : scopeId;
}
function routeToThreadScopeId(route: ThreadRoute): string {
  switch (route.routeKind) {
    case "home":
      return threadScopeIdForEntrypoint({
        entrypoint: "home",
      });
    case "new-thread-panel":
      return threadScopeIdForEntrypoint({
        entrypoint: "panel",
      });
    case "client-local-thread":
      return route.clientThreadId;
    case "local-thread":
      return normalizeConversationScopeId(route.conversationId);
    case "remote-thread":
      return normalizeRemoteScopeId(route.taskId);
    case "chatgpt-thread":
      return normalizeRouteScopeId(
        `${routeThreadPrefix}work:${route.conversationId}`,
      );
    case "other":
      return normalizeRouteScopeId(
        `${routeThreadPrefix}${route.routeTemplate}`,
      );
  }
}
function isHomeDraftClientThread(
  store: SignalStore,
  clientThreadId: string,
): boolean {
  return isClientThreadId(clientThreadId)
    ? store.get(
        draftClientThreadIdSignal,
        threadScopeIdForEntrypoint({
          entrypoint: "home",
        }),
      ) === clientThreadId ||
        store.get(
          draftClientThreadIdSignal,
          threadScopeIdForEntrypoint({
            entrypoint: "panel",
          }),
        ) === clientThreadId
    : false;
}
let conversationRouteTemplate = "/work/conversation/:conversationId";
const temporaryChatSearchParam = "temporary-chat";
function initConversationRouteRuntime(): void {
  conversationRouteTemplate = "/work/conversation/:conversationId";
}
function buildChatgptConversationPath(
  conversationId: string,
  {
    isTemporaryChat = false,
  }: {
    isTemporaryChat?: boolean;
  } = {},
): string {
  const path = `/work/conversation/${encodeURIComponent(conversationId)}`;
  return isTemporaryChat ? `${path}?${temporaryChatSearchParam}=true` : path;
}
function isTemporaryChatSearch(search: string): boolean {
  return new URLSearchParams(search).get(temporaryChatSearchParam) === "true";
}
function setTemporaryChatSearch(search: string, enabled: boolean): string {
  const params = new URLSearchParams(search);
  if (enabled) params.set(temporaryChatSearchParam, "true");
  else params.delete(temporaryChatSearchParam);
  const value = params.toString();
  return value ? `?${value}` : "";
}
function getLocalConversationId(route: ThreadRoute): string | null {
  return route.routeKind === "local-thread" ? route.conversationId : null;
}
function getRouteIdentity(route: ThreadRoute): string | null {
  switch (route.routeKind) {
    case "home":
      return threadScopeIdForEntrypoint({
        entrypoint: "home",
      });
    case "new-thread-panel":
      return threadScopeIdForEntrypoint({
        entrypoint: "panel",
      });
    case "client-local-thread":
      return route.clientThreadId;
    case "local-thread":
    case "chatgpt-thread":
      return route.conversationId;
    case "remote-thread":
      return route.taskId;
    case "other":
      return null;
  }
}
function parseProjectContext(search: string): ProjectContext | null {
  const params = new URLSearchParams(search);
  const projectId = params.get("projectId");
  return projectId == null
    ? null
    : {
        hostId: params.get("hostId"),
        projectId,
      };
}
function parseThreadRoute({
  pathname,
  routeTemplate,
  search = "",
}: {
  pathname: string;
  routeTemplate: string;
  search?: string;
}): ThreadRoute {
  initThreadRoutePatterns();
  initConversationRouteRuntime();
  const conversationId =
    matchPath(alternateConversationRoutePattern, pathname)?.params
      .conversationId ??
    matchPath(localConversationRoutePattern, pathname)?.params.conversationId;
  if (conversationId != null) {
    if (isClientThreadId(conversationId)) {
      return {
        clientThreadId: conversationId,
        pathname,
        routeKind: "client-local-thread",
        routeTemplate,
        search,
      };
    }
    return {
      conversationId: decodeIdentifier(conversationId),
      pathname,
      projectContext: parseProjectContext(search),
      routeKind: "local-thread",
      routeTemplate,
      search,
    };
  }
  const taskId =
    matchPath(remoteTaskRoutePattern, pathname)?.params.taskId ??
    matchPath(alternateRemoteTaskRoutePattern, pathname)?.params.taskId;
  if (taskId != null)
    return {
      pathname,
      routeKind: "remote-thread",
      routeTemplate,
      search,
      taskId,
    };
  const chatgptConversationId = matchPath(conversationRouteTemplate, pathname)
    ?.params.conversationId;
  if (chatgptConversationId != null) {
    return {
      conversationId: chatgptConversationId,
      pathname,
      routeKind: "chatgpt-thread",
      routeTemplate,
      search,
    };
  }
  if (pathname === "/projects") {
    const projectContext = parseProjectContext(search);
    if (projectContext != null)
      return {
        pathname,
        projectContext,
        routeKind: "home",
        routeTemplate,
        search,
      };
  }
  if (pathname === "/" || pathname === "/hotkey-window") {
    return {
      pathname,
      projectContext: null,
      routeKind: "home",
      routeTemplate,
      search,
    };
  }
  if (pathname === "/extension/panel/new" || pathname === newThreadPanelPath) {
    return {
      pathname,
      routeKind: "new-thread-panel",
      routeTemplate,
      search,
    };
  }
  return {
    pathname,
    routeKind: "other",
    routeTemplate,
    search,
  };
}
let RouteScopeSignal: unknown;
let routeScopeInitialized = false;
function initRouteScopeRuntime(): void {
  if (routeScopeInitialized) return;
  routeScopeInitialized = true;
  initSharedScopeModuleInternal();
  initThreadRoutePatterns();
  initReactRouterRuntime();
  initThreadEntrypointRuntime();
  initThreadScopeRuntime();
  RouteScopeSignal = createScope("RouteScope", {
    key: (route: { pathname: string; search?: string }) =>
      `${route.pathname}${route.search ?? ""}`,
    parent: ThreadScopeSignal,
    retain: {
      max: 20,
    },
  });
}
const appLinkProtocolPattern = /^(?:[a-z][a-z0-9+.-]*:|www\.|\/\/)/i;
const applePlatformPattern = /Mac|iPhone|iPad|iPod/;
function initApplePlatformModifierRuntime(): void {}
function initAppLinkProtocolRuntime(): void {}
function isAppLinkProtocol(href: string): boolean {
  return appLinkProtocolPattern.test(href);
}
function normalizeExternalHref(href: string): string {
  if (href.startsWith("//")) return `https:${href}`;
  if (/^www\./i.test(href)) return `https://${href}`;
  return href;
}
function hasPrimaryModifier({
  ctrlKey,
  metaKey,
}: Pick<LinkMouseEvent, "ctrlKey" | "metaKey">): boolean {
  return applePlatformPattern.test(navigator.platform) ? metaKey : ctrlKey;
}
function isSpecialExternalProtocol(href: string): boolean {
  try {
    return ["mailto:", "sms:", "tel:"].includes(new URL(href).protocol);
  } catch {
    return false;
  }
}
function resolveLinkDisposition({
  defaultDisposition,
  event,
  href,
}: {
  defaultDisposition?: string;
  event: LinkMouseEvent;
  href: string;
}): {
  disposition?: string;
  openTargetIntent?: "alternate" | "default";
  useExternalBrowser?: boolean;
} {
  const external = isSpecialExternalProtocol(href);
  const alternate = !external && hasPrimaryModifier(event);
  const newTab = alternate || event.button === 1;
  return {
    disposition: newTab ? "new-tab" : defaultDisposition,
    openTargetIntent: external
      ? undefined
      : alternate
        ? "alternate"
        : "default",
    useExternalBrowser: external ? true : undefined,
  };
}
function dispatchOpenInBrowser(options: OpenInBrowserOptions): boolean {
  if (
    !isAppLinkProtocol(options.href) &&
    !isSpecialExternalProtocol(options.href)
  )
    return false;
  initAppHostBridgeInternal();
  appHostBridge.dispatchMessage("open-in-browser", {
    conversationId: options.conversationId,
    disposition: options.disposition,
    hostId: options.hostId,
    initiator: options.initiator,
    openTarget: options.openTarget,
    openTargetIntent: options.openTargetIntent,
    originHostId: options.originHostId,
    source: options.source ?? "manual",
    useExternalBrowser: options.useExternalBrowser,
    url: normalizeExternalHref(options.href),
  });
  return true;
}
function handleExternalLink({
  event,
  ...options
}: OpenInBrowserOptions & {
  event: LinkMouseEvent;
}): boolean {
  if (
    !isSpecialExternalProtocol(options.href) &&
    !isAppLinkProtocol(options.href)
  )
    return false;
  const disposition = resolveLinkDisposition({
    event,
    href: options.href,
  });
  event.preventDefault();
  return dispatchOpenInBrowser({
    ...options,
    disposition: disposition.disposition ?? options.disposition,
    openTargetIntent: disposition.openTargetIntent,
    useExternalBrowser:
      disposition.useExternalBrowser ?? options.useExternalBrowser,
  });
}
function openExternalLink(
  options: OpenInBrowserOptions & {
    event: LinkMouseEvent;
  },
): boolean {
  isSpecialExternalProtocol(options.href);
  return handleExternalLink(options);
}
function primaryModifierFromEvent(
  event: Pick<LinkMouseEvent, "ctrlKey" | "metaKey">,
): boolean {
  return hasPrimaryModifier(event);
}
function initOpenInBrowserDependencies(): void {
  initAppHostBridgeInternal();
}
function initOpenInBrowserRuntime(): void {
  initOpenInBrowserDependencies();
}
export {
  NavigationType,
  getClientThreadIdForConversation,
  clearDraftThreadLocationClientThread,
  associateClientThreadWithConversation,
  resolvedClientThreadIdSignal,
  clientThreadIdByConversationIdSignal,
  isHomeDraftClientThread,
  initThreadEntrypointRuntime,
  conversationIdForClientThreadSignal,
  conversationClientThreadIdSignal,
  initOsPlatformSignalRuntime,
  isNewConversationEntrypoint,
  threadScopeValueSignal,
  readThreadScopeClientThreadId,
  routeToThreadScopeId,
  clientThreadIdsByConversationSignal,
  initThreadScopeRuntime,
  initReactRouterRuntime,
  registerConversationMappingListener,
  ThreadScopeSignal,
  draftClientThreadIdSignal,
  scopedConversationIdSignal,
  conversationIdByClientThreadSignal,
  threadScopeIdForEntrypoint,
  initOsInfoQueryRuntime,
  osPlatformSignal,
  osInfoQuery,
  conversationRouteTemplate,
  useSearchParams,
  handleExternalLink,
  Route,
  initConversationRouteRuntime,
  initWindowChromeRuntime,
  hasPrimaryModifier,
  createRoutesFromChildren,
  isAppLinkProtocol,
  matchRoutes,
  Link,
  RouteScopeSignal,
  useLocation,
  initRouteScopeRuntime,
  useParams,
  getRouteIdentity,
  useNavigationType,
  renderMatches,
  Outlet,
  resolveCanonicalClientThreadId,
  normalizeConversationScopeId,
  normalizeExternalHref,
  initReactRouterCoreRuntime,
  getLocalConversationId,
  useNavigate,
  openExternalLink,
  MemoryRouter,
  dispatchOpenInBrowser,
  Routes,
  parseThreadRoute,
  useMatch,
  resolvePlatformLabel,
  initOpenInBrowserRuntime,
  Navigate,
  initApplePlatformModifierRuntime,
  createPath,
  resolveLinkDisposition,
  LocationContext,
  initAppLinkProtocolRuntime,
  matchPath,
  buildChatgptConversationPath,
  detectNavigatorPlatform,
  completeClientThreadPromotion,
  isTemporaryChatSearch,
  usesApplicationMenuChrome,
  setTemporaryChatSearch,
  resolveWindowChromeKind,
  registerDraftThreadAssignmentListener,
};
