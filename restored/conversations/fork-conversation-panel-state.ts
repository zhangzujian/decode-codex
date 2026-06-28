// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Capture the open browser/terminal/artifact/review panel tabs of a source
// conversation and re-materialize them on a forked (or pending-worktree) target
// conversation, remapping tab ids, terminal sessions and workspace-relative
// file paths along the way.

import { posix as posixPath } from "node:path";
import { _appScopeT, appScopeUnderscore } from "../boundaries/app-scope";

// Provisional facade imports from the commons chunk. These helpers and panel
// state descriptors are defined in sibling modules of the same chunk:
// - browser/terminal stores and id helpers
// - per-panel layout signal keys (right/bottom panel open, focus area, etc.)
// - filesystem-path predicates and normalization
import {
  Es as deriveBrowserConversationId,
  ic as getConversationPanelLayoutSnapshot,
  Ds as getBrowserTabIdForPanelTab,
  ws as browserTabIdForConversation,
  Rd as terminalSessionSnapshotStore,
  vx as normalizeFilesystemPath,
  _i as isWindowsStyleAbsolutePath,
  vi as isUncPath,
  mx as isWorkspaceFilePath,
  // chunk-local siblings (no original export name)
  _w as browserTabSnapshotStore,
  _E as terminalTabIdForSession,
  GT as getActiveBrowserTabId,
  WT as getAllBrowserTabIdsForConversation,
  Sw as rightPanelTabsDescriptor,
  Cw as bottomPanelTabsDescriptor,
  ZS as bottomPanelOpenStateKey,
  AS as focusAreaStateKey,
  wS as rightPanelFullWidthStateKey,
  $S as rightPanelOpenStateKey,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";

type AppScope = {
  get<T>(key: unknown, subKey?: unknown): T;
  set(key: unknown, subKey: unknown, value: unknown): void;
};

type PanelTarget = "right" | "bottom";

type CapturedPanelTab =
  | {
      kind: "browser";
      tabId: string | number;
      browserTabId: string | number;
      deviceToolbarState: unknown;
      initialUrl: string | null;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    }
  | {
      kind: "terminal";
      tabId: string | number;
      sessionId: string;
      snapshot: unknown;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    }
  | {
      kind: "artifact";
      tabId: string | number;
      hostId: string;
      path: string;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    }
  | {
      kind: "review-file" | "text-editor";
      tabId: string | number;
      hostId: string;
      path: string;
      workspaceRoot?: string | null;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    };

type CapturedPanelState = {
  bottomPanelOpen: boolean;
  focusArea: string;
  rightPanelFullWidth: boolean;
  rightPanelOpen: boolean;
  sourceBrowserConversationId: string;
  targetBrowserConversationId: string;
  tabs: CapturedPanelTab[];
};

type SourceTab = {
  tabId: string | number;
  kind?: string;
  props: Record<string, unknown>;
};

export const forkedConversationPanelStateStore = appScopeUnderscore(
  _appScopeT,
  () => null as CapturedPanelState | null,
);

export const pendingWorktreePanelStateStore = appScopeUnderscore(
  _appScopeT,
  () =>
    null as {
      sourceWorkspaceRoot: string;
      state: CapturedPanelState;
    } | null,
);

export function applyForkedConversationPanelState(
  scope: AppScope,
  {
    sourceConversationId,
    targetConversationId,
  }: {
    sourceConversationId: string;
    targetConversationId: string;
  },
): void {
  scope.set(
    forkedConversationPanelStateStore,
    targetConversationId,
    remapPanelStateToTarget(
      capturePanelState(scope, sourceConversationId),
      deriveBrowserConversationId(scope, targetConversationId),
    ),
  );
}

export function stashPendingWorktreePanelState(
  scope: AppScope,
  {
    pendingWorktreeId,
    sourceConversationId,
    sourceWorkspaceRoot,
  }: {
    pendingWorktreeId: string;
    sourceConversationId: string;
    sourceWorkspaceRoot: string;
  },
): void {
  scope.set(pendingWorktreePanelStateStore, pendingWorktreeId, {
    sourceWorkspaceRoot,
    state: capturePanelState(scope, sourceConversationId),
  });
}

function capturePanelState(
  scope: AppScope,
  conversationId: string,
): CapturedPanelState {
  const browserConversationId = deriveBrowserConversationId(
    scope,
    conversationId,
  );
  const layout = getConversationPanelLayoutSnapshot(scope, conversationId);
  if (layout == null) return captureBrowserOnlyState(browserConversationId);
  const panelTabs = [
    ...capturePanelTabs(
      layout,
      rightPanelTabsDescriptor,
      browserConversationId,
      "right",
    ),
    ...capturePanelTabs(
      layout,
      bottomPanelTabsDescriptor,
      browserConversationId,
      "bottom",
    ),
  ];
  return {
    bottomPanelOpen: layout.get(bottomPanelOpenStateKey),
    focusArea: layout.get(focusAreaStateKey),
    rightPanelFullWidth: layout.get(rightPanelFullWidthStateKey),
    rightPanelOpen: layout.get(rightPanelOpenStateKey),
    sourceBrowserConversationId: browserConversationId,
    tabs: [
      ...panelTabs,
      ...captureUnplacedBrowserTabs(layout, browserConversationId, panelTabs),
    ],
    targetBrowserConversationId: browserConversationId,
  };
}

function captureBrowserOnlyState(
  browserConversationId: string,
): CapturedPanelState {
  const browserTabIds = browserTabSnapshotStore.getConversationBrowserTabIds(
    browserConversationId,
  );
  return {
    bottomPanelOpen: false,
    focusArea: "main",
    rightPanelFullWidth: false,
    rightPanelOpen: false,
    sourceBrowserConversationId: browserConversationId,
    tabs: browserTabIds.map((browserTabId, index) => ({
      active: index === browserTabIds.length - 1,
      browserTabId,
      deviceToolbarState: browserTabSnapshotStore.getDeviceToolbarTabState(
        browserConversationId,
        browserTabId,
      ),
      initialUrl:
        browserTabSnapshotStore.getSnapshot(browserConversationId, browserTabId)
          ?.url ?? null,
      insertAfterTabId: browserTabIds[index - 1] ?? null,
      kind: "browser",
      panel: "right",
      tabId: browserTabId,
    })),
    targetBrowserConversationId: browserConversationId,
  };
}

function capturePanelTabs(
  layout: { get(key: unknown): { activeTab$: unknown; tabs$: unknown } },
  panelDescriptor: { activeTab$: unknown; tabs$: unknown },
  browserConversationId: string,
  panel: PanelTarget,
): CapturedPanelTab[] {
  const activeTabId = layout.get(panelDescriptor.activeTab$)?.tabId ?? null;
  const capturedTabs: CapturedPanelTab[] = [];
  let previousTabId: string | number | null = null;
  let fallbackActiveTab: CapturedPanelTab | null = null;
  let reachedActiveTab = false;
  for (const sourceTab of layout.get(panelDescriptor.tabs$) as SourceTab[]) {
    if (sourceTab.tabId === activeTabId) {
      reachedActiveTab = true;
      fallbackActiveTab = capturedTabs.at(-1) ?? null;
    }
    const capturedTab = capturePanelTab(
      sourceTab,
      browserConversationId,
      panel,
      previousTabId,
      activeTabId,
    );
    if (capturedTab != null) {
      capturedTabs.push(capturedTab);
      if (reachedActiveTab && fallbackActiveTab == null) {
        fallbackActiveTab = capturedTab;
      }
      previousTabId = capturedTab.tabId;
    }
  }
  if (!capturedTabs.some((tab) => tab.active) && fallbackActiveTab != null) {
    fallbackActiveTab.active = true;
  }
  return capturedTabs;
}

function captureUnplacedBrowserTabs(
  layout: unknown,
  browserConversationId: string,
  capturedTabs: CapturedPanelTab[],
): CapturedPanelTab[] {
  const alreadyCaptured = new Set(
    capturedTabs.flatMap((tab) =>
      tab.kind === "browser" ? [tab.browserTabId] : [],
    ),
  );
  const activeBrowserTabId = getActiveBrowserTabId(
    layout,
    browserConversationId,
  );
  const unplacedTabs: CapturedPanelTab[] = [];
  let insertAfterTabId =
    capturedTabs.filter((tab) => tab.panel === "right").at(-1)?.tabId ?? null;
  for (const browserTabId of getAllBrowserTabIdsForConversation(
    layout,
    browserConversationId,
  )) {
    if (alreadyCaptured.has(browserTabId)) continue;
    unplacedTabs.push({
      active: browserTabId === activeBrowserTabId,
      browserTabId,
      deviceToolbarState: browserTabSnapshotStore.getDeviceToolbarTabState(
        browserConversationId,
        browserTabId,
      ),
      initialUrl:
        browserTabSnapshotStore.getSnapshot(browserConversationId, browserTabId)
          ?.url ?? null,
      insertAfterTabId,
      kind: "browser",
      panel: "right",
      tabId: browserTabId,
    });
    insertAfterTabId = browserTabId;
  }
  return unplacedTabs;
}

function capturePanelTab(
  sourceTab: SourceTab,
  browserConversationId: string,
  panel: PanelTarget,
  insertAfterTabId: string | number | null,
  activeTabId: string | number | null,
): CapturedPanelTab | null {
  const browserTabId = getBrowserTabIdForPanelTab(
    sourceTab,
    browserConversationId,
  );
  if (browserTabId != null) {
    return {
      active: sourceTab.tabId === activeTabId,
      browserTabId,
      deviceToolbarState: browserTabSnapshotStore.getDeviceToolbarTabState(
        browserConversationId,
        browserTabId,
      ),
      initialUrl:
        browserTabSnapshotStore.getSnapshot(browserConversationId, browserTabId)
          ?.url ?? null,
      insertAfterTabId,
      kind: "browser",
      panel,
      tabId: sourceTab.tabId,
    };
  }
  if (
    "sessionId" in sourceTab.props &&
    typeof sourceTab.props.sessionId === "string" &&
    sourceTab.tabId === terminalTabIdForSession(sourceTab.props.sessionId)
  ) {
    const snapshot = terminalSessionSnapshotStore.getSnapshot(
      sourceTab.props.sessionId,
    );
    return snapshot == null
      ? null
      : {
          active: sourceTab.tabId === activeTabId,
          insertAfterTabId,
          kind: "terminal",
          panel,
          sessionId: sourceTab.props.sessionId,
          snapshot,
          tabId: sourceTab.tabId,
        };
  }
  const workspaceFile = readWorkspaceFileTab(sourceTab);
  if (workspaceFile == null || !sourceTab.kind?.startsWith("workspaceFile:")) {
    return null;
  }
  if ("artifactType" in sourceTab.props) {
    return workspaceFile.path == null
      ? null
      : {
          active: sourceTab.tabId === activeTabId,
          hostId: workspaceFile.hostId,
          insertAfterTabId,
          kind: "artifact",
          panel,
          path: workspaceFile.path,
          tabId: sourceTab.tabId,
        };
  }
  return {
    active: sourceTab.tabId === activeTabId,
    hostId: workspaceFile.hostId,
    insertAfterTabId,
    kind: "review-file",
    panel,
    path: workspaceFile.path,
    tabId: sourceTab.tabId,
    workspaceRoot: workspaceFile.workspaceRoot,
  };
}

function remapPanelStateToTarget(
  state: CapturedPanelState,
  targetBrowserConversationId: string,
  sourceWorkspaceRoot?: string,
  targetWorkspaceRoot?: string,
): CapturedPanelState {
  const copiedTargetsByTabId = new Map<
    string | number,
    { tabId: string | number; terminalSessionId?: string }
  >();
  for (const tab of state.tabs) {
    copiedTargetsByTabId.set(
      tab.tabId,
      remapTabIdentity(
        tab,
        state.sourceBrowserConversationId,
        targetBrowserConversationId,
        sourceWorkspaceRoot,
        targetWorkspaceRoot,
      ),
    );
  }
  return {
    ...state,
    tabs: state.tabs.map((tab) =>
      remapTab(
        tab,
        copiedTargetsByTabId,
        state.sourceBrowserConversationId,
        targetBrowserConversationId,
        sourceWorkspaceRoot,
        targetWorkspaceRoot,
      ),
    ),
    targetBrowserConversationId,
  };
}

function remapTabIdentity(
  tab: CapturedPanelTab,
  sourceBrowserConversationId: string,
  targetBrowserConversationId: string,
  sourceWorkspaceRoot: string | undefined,
  targetWorkspaceRoot: string | undefined,
): { tabId: string | number; terminalSessionId?: string } {
  if (tab.kind === "terminal") {
    const terminalSessionId = terminalSessionSnapshotStore.createSessionId();
    return {
      tabId: terminalTabIdForSession(terminalSessionId),
      terminalSessionId,
    };
  }
  if (
    tab.kind === "browser" &&
    tab.browserTabId ===
      browserTabIdForConversation(sourceBrowserConversationId)
  ) {
    return { tabId: browserTabIdForConversation(targetBrowserConversationId) };
  }
  const remappedPath = remapWorkspacePath(
    tab,
    sourceWorkspaceRoot,
    targetWorkspaceRoot,
  );
  if (remappedPath == null) return { tabId: tab.tabId };
  switch (tab.kind) {
    case "artifact":
      return { tabId: `artifact:${tab.hostId}:${remappedPath}` };
    case "review-file":
      return { tabId: `file:${tab.hostId}:${remappedPath}` };
    case "text-editor":
      return { tabId: `text-editor:${tab.hostId}:${remappedPath}` };
    case "browser":
      return { tabId: tab.tabId };
  }
}

function remapTab(
  tab: CapturedPanelTab,
  copiedTargetsByTabId: Map<
    string | number,
    { tabId: string | number; terminalSessionId?: string }
  >,
  sourceBrowserConversationId: string,
  targetBrowserConversationId: string,
  sourceWorkspaceRoot: string | undefined,
  targetWorkspaceRoot: string | undefined,
): CapturedPanelTab {
  const copiedTarget = copiedTargetsByTabId.get(tab.tabId);
  if (copiedTarget == null) throw Error("Expected copied tab target");
  const remappedInsertAfterTabId =
    tab.insertAfterTabId == null
      ? null
      : (copiedTargetsByTabId.get(tab.insertAfterTabId)?.tabId ??
        tab.insertAfterTabId);
  const remappedPath = remapWorkspacePath(
    tab,
    sourceWorkspaceRoot,
    targetWorkspaceRoot,
  );
  switch (tab.kind) {
    case "browser":
      return {
        ...tab,
        browserTabId:
          tab.browserTabId ===
          browserTabIdForConversation(sourceBrowserConversationId)
            ? browserTabIdForConversation(targetBrowserConversationId)
            : tab.browserTabId,
        insertAfterTabId: remappedInsertAfterTabId,
        tabId: copiedTarget.tabId,
      };
    case "terminal":
      if (copiedTarget.terminalSessionId == null) {
        throw Error("Expected copied terminal session");
      }
      return {
        ...tab,
        insertAfterTabId: remappedInsertAfterTabId,
        sessionId: copiedTarget.terminalSessionId,
        tabId: copiedTarget.tabId,
      };
    case "artifact":
    case "text-editor":
      return {
        ...tab,
        insertAfterTabId: remappedInsertAfterTabId,
        path: remappedPath ?? tab.path,
        tabId: copiedTarget.tabId,
      };
    case "review-file":
      return {
        ...tab,
        insertAfterTabId: remappedInsertAfterTabId,
        path: remappedPath as string,
        tabId: copiedTarget.tabId,
        workspaceRoot: targetWorkspaceRoot ?? tab.workspaceRoot,
      };
  }
}

function remapWorkspacePath(
  tab: CapturedPanelTab,
  sourceWorkspaceRoot: string | undefined,
  targetWorkspaceRoot: string | undefined,
): string | null {
  if (
    tab.kind === "browser" ||
    tab.kind === "terminal" ||
    (tab as { path?: string }).path == null ||
    sourceWorkspaceRoot == null ||
    targetWorkspaceRoot == null
  ) {
    return "path" in tab ? (tab as { path: string }).path : null;
  }
  const normalizedPath = normalizeFilesystemPath(tab.path);
  const normalizedSourceRoot = normalizeFilesystemPath(sourceWorkspaceRoot);
  const caseInsensitive =
    isWindowsStyleAbsolutePath(normalizedSourceRoot) ||
    isUncPath(normalizedSourceRoot);
  const relativePath = posixPath.relative(
    caseInsensitive ? normalizedSourceRoot.toLowerCase() : normalizedSourceRoot,
    caseInsensitive ? normalizedPath.toLowerCase() : normalizedPath,
  );
  if (
    !isWorkspaceFilePath(tab.path) ||
    relativePath === ".." ||
    relativePath.startsWith(`..${posixPath.sep}`) ||
    posixPath.isAbsolute(relativePath)
  ) {
    return tab.path;
  }
  const relativeSegmentCount = relativePath
    .split(posixPath.sep)
    .filter(Boolean).length;
  const trailingSourceSegments =
    relativeSegmentCount === 0
      ? ""
      : normalizedPath
          .split(posixPath.sep)
          .slice(-relativeSegmentCount)
          .join(posixPath.sep);
  const remappedPath = normalizeFilesystemPath(
    posixPath.join(targetWorkspaceRoot, trailingSourceSegments),
  );
  return isUncPath(targetWorkspaceRoot)
    ? `//${remappedPath.replace(/^\/+/, "")}`
    : remappedPath;
}

function readWorkspaceFileTab(
  sourceTab: SourceTab,
): { hostId: string; path: string; workspaceRoot: string | null } | null {
  const { props } = sourceTab;
  if (
    !("hostId" in props) ||
    typeof props.hostId !== "string" ||
    !("path" in props) ||
    props.path === undefined ||
    (typeof props.path !== "string" && props.path != null)
  ) {
    return null;
  }
  return {
    hostId: props.hostId,
    path: props.path as string,
    workspaceRoot:
      "workspaceRoot" in props && typeof props.workspaceRoot === "string"
        ? props.workspaceRoot
        : null,
  };
}
