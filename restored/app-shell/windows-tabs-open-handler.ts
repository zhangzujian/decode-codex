// Restored from ref/webview/assets/app-initial~app-main~automations-page-bHJfYUGr.js
// Main-window implementation for the windows.tabs.open app action.
import {
  getRouteThreadId,
  normalizeBrowserTabId,
  type AppViewRouteForThreadId,
} from "./app-view-route-helpers";
import {
  Ds as openTerminalTab,
  Ts as isTerminalTabAvailable,
  _c as getSidePanelController,
  ac as getBrowserPanelTab,
  dl as setReviewBaseBranch,
  hc as activatePanelTab,
  js as defaultTerminalPanelPlacementSignal,
  ko as focusReviewFilePath,
  mc as sidePanelPlacements,
  oc as getBrowserPanelTabsForThread,
  vc as getPanelTabPlacement,
  vl as setReviewView,
  zl as activeThreadHostIdSignal,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  el as openBrowserPanelTab,
  rl as openReviewPanel,
} from "../boundaries/current-ref/profile-page-producer";
import { openPublicationTermsSidePanelResource } from "../appgen/publication-terms";

type AppViewScope = {
  get: <TValue>(state: unknown, key?: unknown) => TValue;
  value: AppViewRouteForThreadId;
};

type WindowsTabsOpenContext = {
  scope?: AppViewScope | null;
  sourceHostId?: string | null;
  sourceThreadId?: string | null;
};

type WindowsTabsOpenPlacement = "right" | "bottom";

type WindowsTabsOpenTarget =
  | {
      type: "file";
      path: string;
      line?: number;
    }
  | {
      type: "browser";
      tabId?: string;
      url?: string;
    }
  | {
      type: "terminal";
      sessionId?: string;
    }
  | {
      type: "review";
      baseBranch?: string;
      path?: string;
      view?: "last-turn" | "branch" | "unstaged" | "staged";
    };

type WindowsTabsOpenPayload = {
  placement?: WindowsTabsOpenPlacement;
  target: WindowsTabsOpenTarget;
  threadId?: string;
};

type WindowsTabsOpenResult = {
  placement?: string | null;
  status?: "existing" | "opened";
  tabId?: string;
  threadId: string;
  type: WindowsTabsOpenTarget["type"];
  viewer?: string;
};

export function windowsTabsOpenHandler(
  { placement, target, threadId }: WindowsTabsOpenPayload,
  context: WindowsTabsOpenContext,
): WindowsTabsOpenResult {
  const appViewScope = context.scope;
  if (appViewScope == null) {
    throw Error("windows.tabs.open requires an app view");
  }

  const visibleThreadId = getVisibleThreadId(appViewScope.value);
  const requestedThreadId =
    threadId ?? context.sourceThreadId ?? visibleThreadId;
  if (requestedThreadId == null || visibleThreadId == null) {
    throw Error("windows.tabs.open requires a visible thread");
  }
  if (requestedThreadId !== visibleThreadId) {
    throw Error(
      `Thread ${requestedThreadId} is not visible in the targeted main window (showing ${visibleThreadId})`,
    );
  }

  const sourceHostId =
    context.sourceThreadId === requestedThreadId && context.sourceHostId != null
      ? context.sourceHostId
      : appViewScope.get(activeThreadHostIdSignal);

  switch (target.type) {
    case "file": {
      const targetPlacement = placement ?? "right";
      const openedResource = openPublicationTermsSidePanelResource(
        appViewScope,
        target.path,
        {
          hostId: sourceHostId ?? undefined,
          line: target.line,
          target: targetPlacement,
        },
      );
      if (openedResource == null) {
        throw Error("File tab could not be opened");
      }
      return {
        threadId: requestedThreadId,
        type: target.type,
        ...openedResource,
      };
    }
    case "browser": {
      const targetPlacement = placement ?? "right";
      const existingTabs = getBrowserPanelTabsForThread(
        appViewScope,
        requestedThreadId,
      );
      const browserTabId = openBrowserPanelTab(appViewScope, {
        browserTabId:
          target.tabId == null
            ? undefined
            : normalizeBrowserTabId(target.tabId),
        hostId: sourceHostId,
        initialUrl: target.url,
        target: targetPlacement,
      });
      if (browserTabId == null) {
        throw Error("Browser tab could not be opened");
      }
      const panelTab = getBrowserPanelTab(
        appViewScope,
        requestedThreadId,
        browserTabId,
      );
      return {
        threadId: requestedThreadId,
        type: target.type,
        placement: panelTab?.target ?? targetPlacement,
        status: existingTabs.some((tab) => tab.browserTabId === browserTabId)
          ? "existing"
          : "opened",
        tabId: browserTabId,
      };
    }
    case "terminal": {
      if (!isTerminalTabAvailable(appViewScope)) {
        throw Error("Terminal tab is unavailable for this thread");
      }
      const targetPlacement =
        placement ?? appViewScope.get(defaultTerminalPanelPlacementSignal);
      const existingTerminalTabIds = sidePanelPlacements.flatMap((panel) =>
        appViewScope.get<string[]>(getSidePanelController(panel).tabIds$),
      );
      const terminalSessionId = openTerminalTab(
        appViewScope,
        target.sessionId,
        targetPlacement,
      );
      if (terminalSessionId == null) {
        throw Error("Terminal tab could not be opened");
      }
      const tabId = `terminal:${terminalSessionId}`;
      return {
        threadId: requestedThreadId,
        type: target.type,
        placement: getPanelTabPlacement(appViewScope, tabId) ?? targetPlacement,
        status: existingTerminalTabIds.includes(tabId) ? "existing" : "opened",
        tabId,
      };
    }
    case "review": {
      const targetPlacement = placement ?? "right";
      const previousPlacement = getPanelTabPlacement(appViewScope, "diff");
      if ("baseBranch" in target && target.baseBranch != null) {
        setReviewBaseBranch(
          appViewScope,
          getRouteThreadId(appViewScope.value),
          target.baseBranch,
        );
        setReviewView(appViewScope, "branch");
      } else if (target.view != null) {
        setReviewView(appViewScope, target.view);
      }

      const didOpenReview =
        previousPlacement == null
          ? openReviewPanel(appViewScope, true, targetPlacement)
          : activatePanelTab(appViewScope, previousPlacement, "diff");
      if (!didOpenReview) {
        throw Error("Review tab could not be opened");
      }

      if (target.path != null) focusReviewFilePath(appViewScope, target.path);
      return {
        threadId: requestedThreadId,
        type: target.type,
        placement: previousPlacement ?? targetPlacement,
        status: previousPlacement == null ? "opened" : "existing",
        tabId: "diff",
      };
    }
  }
}

function getVisibleThreadId(route: AppViewRouteForThreadId): string | null {
  switch (route.routeKind) {
    case "client-local-thread":
      return route.clientThreadId;
    case "local-thread":
    case "chatgpt-thread":
      return route.conversationId;
    case "remote-thread":
      return route.taskId;
    case "home":
    case "new-thread-panel":
    case "other":
      return null;
  }
}
