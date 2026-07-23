// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~o1pkxa0i-CReILizo.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer, toEsm } from "../rolldown-runtime";
import {
  currentReactAliasUpperD,
  currentReactAliasLowerdLowern,
  currentReactAliasLoweruLowern,
  currentReactAliasLowerx,
  currentReactAliasLowerzLowert,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasUpperC as _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzC,
  currentQueryRpcAliasUpperC,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasUpperS,
} from "../app-initial-query-rpc-runtime";
import {
  FormattedMessage,
  useIntl,
  defineMessage,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  initCloseIconRuntime,
  CloseIcon,
  Button,
  initButtonRuntime,
} from "../../current-app-initial/persisted-ui-runtime-entry";
import {
  initSearchIconRuntime,
  MenuSearchIcon,
} from "../../../ui/menu-current/entry";
import {
  currentHostServicesAliasLowerlLowert,
  currentHostServicesAliasLoweroLowert,
} from "../app-initial-host-services-runtime";
import {
  initContextMenuRuntime,
  ContextMenu,
} from "../../package-adapters/context-menu-current/entry";
import {
  initUseStableCallback,
  useStableCallback,
} from "../app-initial~avatar-overlay-composition-surface~artifact-tab-content.electron~notebook-preview-~kr7rxhqe";
import {
  RouteScopeSignal,
  initRouteScopeRuntime,
} from "../app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s";
import {
  pullRequestRoutRuntimeVariant12Member0002,
  pullRequestRoutRuntimeVariant12Member0047,
} from "../pull-request-rout-runtime-variant-12-current";
import {
  settingsCommandSharedRuntimeVariant4Member0025,
  settingsCommandSharedRuntimeVariant4Member0026,
} from "../settings-command-shared-runtime-variant-4-current";
import {
  pullRequestCodeReviewNewThreadRuntimeMember0063,
  pullRequestCodeReviewNewThreadRuntimeMember0073,
  pullRequestCodeReviewNewThreadRuntimeMember0080,
} from "../pull-request-code-review-new-thread-runtime-current";
import {
  FILE_TREE_TAG_NAME,
  HEADER_SLOT_NAME,
  initFileTreeRuntime,
  CONTEXT_MENU_SLOT_NAME,
  FileTree,
  initFileTreeConstants,
} from "../app-initial~artifact-tab-content.electron~app-main~pull-request-code-review~new-thread-pane~ntg60hiq";
import {
  pullRequestRoutRuntimeVariant5Member0001,
  pullRequestRoutRuntimeVariant5Member0024,
  pullRequestRoutRuntimeVariant5Member0004,
  pullRequestRoutRuntimeVariant5Member0005,
  pullRequestRoutRuntimeVariant5Member0030,
  pullRequestRoutRuntimeVariant5Member0031,
  pullRequestRoutRuntimeVariant5Member0032,
  pullRequestRoutRuntimeVariant5Member0017,
} from "../pull-request-rout-runtime-variant-5-current";
import {
  firstRunAppgenRuntimeVariant2Member0006,
  firstRunAppgenRuntimeVariant2Member0007,
} from "../first-run-appgen-runtime-variant-2-current";
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iC(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam4,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue105 =
    new Set();
  for (let {
    displayPath,
  } of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam4) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue198 =
      displayPath.split("/");
    for (
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue203 = 1;
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue203 <
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue198.length;
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue203 += 1
    )
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue105.add(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue198
          .slice(
            0,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue203,
          )
          .join("/"),
      );
  }
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue106 =
      new Set(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam4.map(
          (item) => item.displayPath,
        ),
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue107 =
      new Set(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue108 =
      new Map(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue109 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam4
        .map((item, index) => ({
          entry: item,
          index,
        }))
        .sort(
          (
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam26,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam27,
          ) =>
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam26
              .entry.displayPath ===
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam27
              .entry.displayPath
              ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam26
                  .entry.path ===
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam27
                  .entry.path
                ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam26.index -
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam27.index
                : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam26
                      .entry.path <
                    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam27
                      .entry.path
                  ? -1
                  : 1
              : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam26
                    .entry.displayPath <
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam27
                    .entry.displayPath
                ? -1
                : 1,
        );
  for (let {
    entry,
    index,
  } of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue109) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187 =
      entry.displayPath;
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue105.has(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187,
      ) ||
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue107.has(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187,
      )
    )
      do
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187 = `${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187}${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue1}`;
      while (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue106.has(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187,
        ) ||
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue105.has(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187,
        ) ||
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue107.has(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187,
        )
      );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue108.set(
      index,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187,
    );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue107.add(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue187,
    );
  }
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam4.map(
    (item, index) => ({
      entry: item,
      treePath:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue108.get(
          index,
        ) ?? item.displayPath,
    }),
  );
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue1;
export const appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iW =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue1 =
      "⁣";
  });
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iH(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam81,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam82,
) {
  return `${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam81}:${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam82}`;
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iM(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam64,
) {
  return `conversation:${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam64.turnKey}:${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam64.unitId}:${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam64.start}`;
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iG(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam68,
) {
  return `diff:${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam68.path}:${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam68.hunkId}:${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam68.start}`;
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iX({
  element,
  matchId,
}) {
  element.setAttribute(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue3,
    matchId,
  );
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV({
  container,
  matchId,
  includeShadowRoots,
}) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue176 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper10(
      matchId,
    );
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue193 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper3(
    container,
    {
      includeShadowRoots,
    },
  )) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue201 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue193.querySelector(
        `[${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue3}="${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue176}"]`,
      );
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue201 !=
      null
    )
      return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue201;
  }
  return null;
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iUnderscore({
  container,
  lineNumber,
  side,
  includeShadowRoots,
}) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue123 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper10(
        `${lineNumber}`,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue124 =
      side === "additions"
        ? "[data-additions]"
        : side === "deletions"
          ? "[data-deletions]"
          : null;
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue144 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper3(
    container,
    {
      includeShadowRoots,
    },
  )) {
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue124 !=
      null
    ) {
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue173 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper2(
          {
            root: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue144,
            selector: `${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue124}[data-line="${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue123}"]`,
          },
        ) ??
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper2(
          {
            root: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue144,
            selector: `${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue124} [data-line="${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue123}"]`,
          },
        ) ??
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper2(
          {
            root: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue144,
            selector: `[data-line="${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue123}"] ${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue124}`,
          },
        );
      if (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue173 !=
        null
      )
        return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue173;
      if (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper1(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue144,
        )
      )
        continue;
    }
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue150 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper2(
        {
          root: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue144,
          selector: `[data-line="${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue123}"]`,
        },
      );
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue150 !=
      null
    )
      return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue150;
  }
  return null;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper1(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam38,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam38 instanceof
    HTMLElement &&
    (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam38.matches(
      "[data-additions]",
    ) ||
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam38.matches(
        "[data-deletions]",
      ))
    ? true
    : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam38.querySelector(
        "[data-additions], [data-deletions]",
      ) != null;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper2({
  root,
  selector,
}) {
  return root instanceof HTMLElement && root.matches(selector)
    ? root
    : (root.querySelector(selector) ?? null);
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iP(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam29,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam30,
) {
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper3(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam29,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam30,
  ).forEach((item) => {
    item
      .querySelectorAll(
        `mark.${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue2}`,
      )
      .forEach((_item) => {
        let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue188 =
          _item.parentNode;
        if (
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue188 !=
          null
        ) {
          for (; _item.firstChild;)
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue188.insertBefore(
              _item.firstChild,
              _item,
            );
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue188.removeChild(
            _item,
          );
        }
      });
  });
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iY({
  target,
  query,
  maxMatches,
  includeShadowRoots,
}) {
  if (maxMatches <= 0)
    return {
      matches: [],
      isCapped: false,
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue130 =
    query.trim();
  if (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue130.length ===
    0
  )
    return {
      matches: [],
      isCapped: false,
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue131 =
      [],
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue132 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper3(
        target,
        {
          includeShadowRoots,
        },
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue133 = false;
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue175 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue132) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue178 =
      maxMatches -
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue131.length;
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue178 <=
      0
    ) {
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue133 = true;
      break;
    }
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue179 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper6(
        {
          root: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue175,
          query:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue130,
          maxMatches:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue178,
        },
      );
    if (
      (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue131.push(
        ...appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue179.matches,
      ),
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue179.isCapped)
    ) {
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue133 = true;
      break;
    }
  }
  return {
    matches:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue131,
    isCapped:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue133,
  };
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam66,
) {
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue206 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam66)
    if (
      !appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper8(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue206,
      )
    )
      return true;
  return false;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper3(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam15,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam16,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue139 =
    [
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam15,
    ];
  if (
    !appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam16.includeShadowRoots
  )
    return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue139;
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue140 =
    [
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam15,
    ];
  for (
    ;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue140.length >
    0;
  ) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue163 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue140.pop();
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue163 ==
      null
    )
      continue;
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue164 =
        document.createTreeWalker(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue163,
          NodeFilter.SHOW_ELEMENT,
        ),
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue164.currentNode;
    for (
      ;
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165 !=
      null;
    ) {
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165 instanceof
        HTMLElement &&
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165.shadowRoot !=
          null &&
        (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper4(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165.shadowRoot,
        ),
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue139.push(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165.shadowRoot,
        ),
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue140.push(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165.shadowRoot,
        ));
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue165 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue164.nextNode();
    }
  }
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue139;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper4(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam47,
) {
  if (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam47.getElementById(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue4,
    ) != null
  )
    return;
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue189 =
    document.createElement("style");
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue189.id =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue4;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue189.textContent =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue5;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam47.append(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue189,
  );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper5(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam5,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue116 =
      document.createTreeWalker(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam5,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam6,
          ) {
            if (
              !(
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam6 instanceof
                Text
              )
            )
              return NodeFilter.FILTER_REJECT;
            let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue134 =
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam6.parentElement;
            return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue134 ==
              null ||
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue134.closest(
                "script, style, textarea, [contenteditable='true'], [data-thread-find-skip]",
              ) != null ||
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue134.matches(
                "[data-column-number], [data-line-number-content], [data-line-num], [data-line-old-num], [data-line-new-num]",
              )
              ? NodeFilter.FILTER_REJECT
              : NodeFilter.FILTER_ACCEPT;
          },
        },
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue117 =
      [],
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue118 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue116.nextNode();
  for (
    ;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue118 !=
    null;
  ) {
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue118 instanceof
      Text &&
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue117.push(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue118,
      );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue118 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue116.nextNode();
  }
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue117;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper6({
  root,
  query,
  maxMatches,
}) {
  if (maxMatches <= 0)
    return {
      matches: [],
      isCapped: false,
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue96 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper5(
      root,
    );
  if (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue96.length ===
    0
  )
    return {
      matches: [],
      isCapped: false,
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue97 =
      [],
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue98 = 0;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue96.forEach(
    (item) => {
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue195 =
          item.textContent ?? "",
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue196 =
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue98 +
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue195.length;
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue97.push(
        {
          node: item,
          start:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue98,
          end: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue196,
        },
      );
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue98 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue196;
    },
  );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue99 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue97
        .map((item) => item.node.textContent ?? "")
        .join("")
        .toLowerCase(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue100 =
      query.toLowerCase(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue101 =
      [],
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue102 = 0;
  for (
    ;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue102 <
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue99.length &&
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue101.length <
      maxMatches;
  ) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue194 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue99.indexOf(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue100,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue102,
      );
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue194 ===
      -1
    )
      break;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue101.push(
      {
        start:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue194,
        end:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue194 +
          query.length,
      },
    );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue102 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue194 +
      query.length;
  }
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue103 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue101.length ===
        maxMatches &&
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue99.indexOf(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue100,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue102,
      ) !== -1,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue104 =
      [];
  for (
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue145 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue101.length -
      1;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue145 >=
    0;
    --appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue145
  ) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue151 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue101[
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue145
        ],
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue152 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper7(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue97,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue151.start,
        ),
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue153 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper7(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue97,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue151.end -
            1,
        );
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue152 ==
        null ||
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue153 ==
        null
    )
      continue;
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue154 =
      document.createRange();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue154.setStart(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue152.node,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue151.start -
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue152.start,
    );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue154.setEnd(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue153.node,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue151.end -
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue153.start,
    );
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue155 =
      document.createElement("mark");
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue155.className =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue2;
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue156 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue154.extractContents();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue155.append(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue156,
    );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue154.insertNode(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue155,
    );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue104.push(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue155,
    );
  }
  return {
    matches:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue104.reverse(),
    isCapped:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue103,
  };
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper7(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam49,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam50,
) {
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue200 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam49)
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam50 >=
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue200.start &&
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam50 <
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue200.end
    )
      return {
        node: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue200.node,
        start:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue200.start,
      };
  return null;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper8(
  event,
) {
  if (event.type === "characterData") {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue202 =
      event.target.parentElement;
    return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue202 ==
      null
      ? false
      : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper9(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue202,
        );
  }
  if (event.type !== "childList") return false;
  if (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper9(
      event.target,
    )
  )
    return true;
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue148 =
      [...event.addedNodes, ...event.removedNodes],
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue149 = false;
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue192 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue148)
    if (
      !(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue192 instanceof
        Text
      )
    ) {
      if (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper9(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue192,
        )
      ) {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue149 = true;
        continue;
      }
      return false;
    }
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue149;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper9(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam46,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam46 instanceof
    HTMLElement
    ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam46.classList.contains(
        "codex-thread-find-active",
      )
      ? true
      : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam46.classList.contains(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue2,
        )
    : false;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper10(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam48,
) {
  return typeof CSS < "u" && typeof CSS.escape == "function"
    ? CSS.escape(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam48,
      )
    : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam48
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"');
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue2,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iF,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue3,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue4,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue5;
export const appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iB =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue2 =
      "codex-thread-find-match";
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iF =
      "codex-thread-find-active";
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue3 =
      "data-content-search-match-id";
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue4 =
      "codex-thread-find-shadow-style";
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue5 =
      "\nmark.codex-thread-find-match {\n  background-color: var(--vscode-charts-yellow);\n  color: var(--color-token-foreground);\n  border-radius: var(--radius-2xs);\n  padding: 0;\n  margin: 0;\n  border: 0;\n  font: inherit;\n  line-height: inherit;\n  letter-spacing: inherit;\n  word-spacing: inherit;\n  vertical-align: baseline;\n}\n\nmark.codex-thread-find-active {\n  background-color: var(--vscode-charts-orange);\n}\n";
  });
export function _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam42,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam43,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam44,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue181 =
      Math.max(
        0,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam43 -
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue6,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue182 =
      Math.min(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam42.length,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam44 +
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue6,
      );
  return {
    before:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam42.slice(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue181,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam43,
      ),
    match:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam42.slice(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam43,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam44,
      ),
    after:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam42.slice(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam44,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue182,
      ),
  };
}
export function _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iC(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam18,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam19,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam20,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue157 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam19.toLowerCase(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue158 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam18.toLowerCase(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue159 =
      [],
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue160 = 0,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue161 = false,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue162 = 0;
  for (
    ;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue162 <
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue158.length;
  ) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue185 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue158.indexOf(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue157,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue162,
      );
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue185 ===
      -1
    )
      break;
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue186 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue185 +
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam19.length;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue160 += 1;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue159.length <
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam20
      ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue159.push(
          {
            start:
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue185,
            end: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue186,
          },
        )
      : (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue161 = true);
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue162 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue186;
  }
  return {
    offsets:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue159,
    totalMatches:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue160,
    isCapped:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue161,
  };
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iL(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam61,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam62,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam61 ==
    null ||
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam62 ==
      null
    ? null
    : (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam61
        .matches[
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam62
      ] ?? null);
}
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iU(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam36,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam37,
) {
  let { query, routeContextId, stateDomain, result } =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam36;
  return query.length === 0 ||
    stateDomain !==
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam37 ||
    result == null ||
    result.domain !==
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam37 ||
    result.contextId !== routeContextId
    ? null
    : result;
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue6;
export const appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iD =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue6 = 24;
  });
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper11(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam23,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam24,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam25,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue166 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam23 ==
      null ? null : (
        <div slot={HEADER_SLOT_NAME}>
          {
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam23
          }
        </div>
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue167 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam24 !=
        null &&
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam25 !=
        null ? (
        <div slot={CONTEXT_MENU_SLOT_NAME}>
          {appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam24(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam25.item,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam25.context,
          )}
        </div>
      ) : null;
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue166 ==
    null &&
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue167 ==
      null ? null : (
    <>
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue166
      }
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue167
      }
    </>
  );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper12(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam21,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam22,
) {
  return typeof window > "u" &&
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam22 !=
      null ? (
    <>
      <template
        shadowrootmode="open"
        dangerouslySetInnerHTML={{
          __html:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam22.shadowHtml,
        }}
      />
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam21
      }
    </>
  ) : (
    <>
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam21
      }
    </>
  );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper13(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam28,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue172 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam28.shadowRoot;
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue172?.querySelector(
    "[data-file-tree-id]",
  ) instanceof HTMLElement ||
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue172?.querySelector(
      "[data-file-tree-id]",
    ) instanceof SVGElement
    ? true
    : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam28.querySelector(
        'template[shadowrootmode="open"]',
      ) instanceof HTMLTemplateElement;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper14(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam10,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam11,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam12,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam13,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam14,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue138 =
    {
      ...(appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam10 ??
        {}),
    };
  if (
    (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam11 !=
      null &&
      delete appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue138.header,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam12)
  ) {
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue169 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam10?.contextMenu,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue170 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue169?.onClose,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue171 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue169?.onOpen;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue138.contextMenu =
      {
        ...(appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue169 ??
          {}),
        enabled: true,
        onClose: () => {
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue170?.();
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam13();
        },
        onOpen: (
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam78,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam79,
        ) => {
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam14(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam78,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam79,
          );
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue171?.(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam78,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam79,
          );
        },
      };
    delete appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue138
      .contextMenu.render;
  }
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue138.header !=
    null ||
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue138.contextMenu !=
      null
    ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue138
    : undefined;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper15({
  header,
  id,
  model,
  preloadedData,
  renderContextMenu,
  ...rest
}) {
  let [
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue81,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue82,
    ] =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useState(
        null,
      ),
    [
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue83,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue84,
    ] =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useState(
        null,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue85 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useRef(
        model.getComposition(),
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue86 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useRef(
        model,
      );
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue86.current !==
    model &&
    ((appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue86.current =
      model),
    (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue85.current =
      model.getComposition()));
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue87 =
      renderContextMenu != null,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue88 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useCallback(() => {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue82(
          null,
        );
      }, []),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue89 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useCallback(
        (
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam75,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam76,
        ) => {
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue82(
            {
              context:
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam76,
              item: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam75,
            },
          );
        },
        [],
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue90 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue85.current,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue91 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useMemo(
        () =>
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper14(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue90,
            header,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue87,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue88,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue89,
          ),
        [
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue90,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue88,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue89,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue87,
          header,
        ],
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue92 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useCallback(
        (
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam83,
        ) => {
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue84(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam83,
          );
        },
        [],
      );
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useEffect(() => {
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue87 ||
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue82(
        null,
      );
  }, [
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue87,
  ]);
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue9(() => {
    model.setComposition(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue91,
    );
  }, [
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue91,
    model,
  ]);
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue9(() => {
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue83 !=
      null
    )
      return (
        preloadedData != null &&
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper13(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue83,
        )
          ? model.hydrate({
              fileTreeContainer:
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue83,
            })
          : model.render({
              fileTreeContainer:
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue83,
            }),
        () => {
          model.unmount();
          model.setComposition(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue90,
          );
        }
      );
  }, [
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue90,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue83,
    model,
    preloadedData,
  ]);
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue93 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper12(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper11(
          header,
          renderContextMenu,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue81,
        ),
        preloadedData,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue94 =
      id ?? preloadedData?.id,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue95 =
      {
        "--trees-item-height": `${String(model.getItemHeight())}px`,
        "--trees-density-override": model.getDensityFactor(),
        ...rest.style,
      };
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue8.jsx(
    FILE_TREE_TAG_NAME,
    {
      ...rest,
      id: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue94,
      ref: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue92,
      style:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue95,
      suppressHydrationWarning: preloadedData != null,
      children:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue93,
    },
  );
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue8,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue9,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue10 =
    createLazyEsmInitializer(() => {
      initFileTreeConstants();
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7 =
        toEsm(currentReactAliasLowerdLowern(), 1);
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue8 =
        currentReactAliasLowerzLowert();
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue9 =
        typeof window > "u"
          ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useEffect
          : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue7.useLayoutEffect;
    });
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper16(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam17,
) {
  let [
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue146,
    ] =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue11.useState(
        () =>
          new FileTree(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam17,
          ),
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue147 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue11.useRef(
        {
          timeout: null,
          model:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue146,
        },
      );
  return (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue11.useEffect(() => {
      let { current } =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue147;
      return (
        current.timeout != null &&
          (clearTimeout(current.timeout), (current.timeout = null)),
        () => {
          current.timeout = setTimeout(() => current.model.cleanUp(), 1);
        }
      );
    }, []),
    {
      model:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue146,
    }
  );
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue11,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue12 =
    createLazyEsmInitializer(() => {
      initFileTreeRuntime();
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue11 =
        toEsm(currentReactAliasLowerdLowern(), 1);
    }),
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue13 =
    createLazyEsmInitializer(() => {
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue10();
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue12();
    });
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper17({
  isLoadingOpenTargets = false,
  onAddToChat,
  onCopyPath,
  onOpenInTarget,
  primaryTarget,
  targetPath,
  visibleTargets,
}) {
  if (targetPath == null) return [];
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue79 =
      onCopyPath == null ? "workspace" : "review",
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue80 =
      [];
  return (
    onCopyPath != null &&
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue80.push(
        {
          id: "copy-path",
          message: defineMessage({
            id: "codex.review.fileTree.contextMenu.copyPath",
            defaultMessage: "Copy path",
            description:
              "Context menu action to copy the path of a file tree item",
          }),
          onSelect: () => {
            onCopyPath(targetPath);
          },
        },
      ),
    onAddToChat != null &&
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue80.push(
        {
          id: "add-to-chat",
          message: defineMessage({
            id: "threadSidePanel.workspaceBrowser.addToChat",
            defaultMessage: "Add to chat",
            description:
              "Context menu action for adding a file from the file tree to the current chat",
          }),
          onSelect: () => {
            onAddToChat(targetPath);
          },
        },
      ),
    isLoadingOpenTargets
      ? [
          {
            id: "open-in-loading",
            message:
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper20(
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue79,
              ),
            tooltipMessage: defineMessage({
              id: "threadSidePanel.workspaceBrowser.openIn.loading",
              defaultMessage: "Loading available apps…",
              description:
                "Tooltip shown when the file tree is still loading app options for opening a file",
            }),
            enabled: false,
          },
          {
            id: "open-in-separator",
            type: "separator",
          },
          ...appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue80,
        ]
      : primaryTarget == null
        ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue80
        : [
            ...pullRequestRoutRuntimeVariant5Member0024({
              idPrefix:
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper18(
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue79,
                ),
              messages:
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper19(
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue79,
                ),
              onOpenInTarget: (
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam73,
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam74,
              ) => {
                onOpenInTarget(
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam73,
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam74,
                  targetPath,
                );
              },
              primaryTarget,
              visibleTargets,
            }),
            {
              id: "open-in-separator",
              type: "separator",
            },
            ...appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue80,
          ]
  );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper18(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam45,
) {
  switch (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam45
  ) {
    case "review":
      return "review-file-tree-open";
    case "workspace":
      return "workspace-directory-tree-open";
  }
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper19(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam3,
) {
  switch (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam3
  ) {
    case "review":
      return {
        openInTarget: defineMessage({
          id: "codex.review.fileTree.contextMenu.openInTarget",
          defaultMessage: "Open in {target}",
          description:
            "Context menu action to open a review file in the preferred app",
        }),
        openIn:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper20(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam3,
          ),
        openInTargetSubmenu: defineMessage({
          id: "codex.review.fileTree.contextMenu.openWithTarget",
          defaultMessage: "{target}",
          description:
            "Context menu action to open a review file in a specific app",
        }),
      };
    case "workspace":
      return {
        openInTarget: defineMessage({
          id: "threadSidePanel.workspaceBrowser.openInTarget",
          defaultMessage: "Open in {target}",
          description:
            "Context menu action to open a workspace browser file in the preferred app",
        }),
        openIn:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper20(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam3,
          ),
        openInTargetSubmenu: defineMessage({
          id: "threadSidePanel.workspaceBrowser.openInTargetSubmenu",
          defaultMessage: "{target}",
          description:
            "Context menu action to open a workspace browser file in a specific app",
        }),
      };
  }
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper20(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam7,
) {
  switch (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam7
  ) {
    case "review":
      return defineMessage({
        id: "codex.review.fileTree.contextMenu.openWith",
        defaultMessage: "Open with",
        description:
          "Context menu submenu label for choosing an app to open a review file",
      });
    case "workspace":
      return defineMessage({
        id: "threadSidePanel.workspaceBrowser.openIn",
        defaultMessage: "Open in…",
        description:
          "Context menu submenu label for choosing an app to open a workspace browser file",
      });
  }
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue14 =
  createLazyEsmInitializer(() => {
    initReactIntlRuntimeChunk();
    pullRequestRoutRuntimeVariant5Member0032();
  });
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iA(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam33,
) {
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue180 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam33.composedPath()) {
    if (
      !(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue180 instanceof
        Element
      ) ||
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue180.getAttribute(
        "data-item-type",
      ) !== "file"
    )
      continue;
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue183 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue180.getAttribute(
        "data-item-path",
      );
    if (
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue183
    )
      return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue183;
  }
  return null;
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iO =
    createLazyEsmInitializer(() => {}),
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue15,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue16 =
    createLazyEsmInitializer(() => {
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue15 =
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 6.41797C10.367 6.41815 10.6649 6.71599 10.665 7.08301V9.33496H12.916C13.2832 9.33496 13.5809 9.63287 13.5811 10C13.5809 10.3671 13.2832 10.665 12.916 10.665H10.665V12.916C10.665 13.2832 10.3671 13.5809 10 13.5811C9.63284 13.5809 9.33496 13.2832 9.33496 12.916V10.665H7.08301C6.71596 10.6649 6.41815 10.367 6.41797 10C6.41813 9.63295 6.71595 9.33509 7.08301 9.33496H9.33496V7.08301C9.33513 6.71596 9.63295 6.4181 10 6.41797Z" fill="currentColor" />\n  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />\n</svg>\n';
    }),
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue17,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue18 =
    createLazyEsmInitializer(() => {
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue17 =
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12.916 9.33496C13.2833 9.33496 13.5811 9.63273 13.5811 10C13.5811 10.3673 13.2833 10.665 12.916 10.665H7.08301C6.71585 10.6649 6.41797 10.3672 6.41797 10C6.41797 9.63281 6.71585 9.33509 7.08301 9.33496H12.916Z" fill="currentColor" />\n  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />\n</svg>\n';
    }),
  at,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue19 =
    createLazyEsmInitializer(() => {
      at =
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 8.33301C10.9205 8.33301 11.667 9.07953 11.667 10C11.667 10.9205 10.9205 11.667 10 11.667C9.07961 11.6669 8.334 10.9204 8.33399 10C8.33399 9.07958 9.0796 8.3331 10 8.33301Z" fill="currentColor" />\n  <path d="M12.667 2.66797C13.3558 2.66797 13.9132 2.66734 14.3633 2.7041C14.8211 2.74154 15.2279 2.82079 15.6045 3.0127C16.1998 3.31614 16.6839 3.8011 16.9873 4.39649C17.1791 4.77306 17.2585 5.17899 17.2959 5.63672C17.3327 6.08689 17.332 6.64406 17.332 7.33301V12.666C17.332 13.3548 17.3326 13.9122 17.2959 14.3623C17.2585 14.8201 17.1791 15.2269 16.9873 15.6035C16.684 16.1987 16.1996 16.6829 15.6045 16.9863C15.2279 17.1782 14.8211 17.2575 14.3633 17.2949C13.9132 17.3317 13.3558 17.3311 12.667 17.3311H7.33399C6.64513 17.3311 6.08786 17.3317 5.6377 17.2949C5.17997 17.2575 4.77403 17.1781 4.39746 16.9863C3.80197 16.6829 3.31712 16.199 3.01367 15.6035C2.82172 15.2268 2.7425 14.8203 2.70508 14.3623C2.66833 13.9121 2.66895 13.3549 2.66895 12.666V7.33301C2.66895 6.64406 2.6683 6.08689 2.70508 5.63672C2.7425 5.17907 2.82191 4.77301 3.01367 4.39649C3.31713 3.80115 3.80208 3.31606 4.39746 3.0127C4.77393 2.82108 5.18011 2.7415 5.6377 2.7041C6.08785 2.66736 6.64515 2.66797 7.33399 2.66797H12.667ZM7.33399 3.99805C6.62326 3.99805 6.12954 3.99898 5.74609 4.03027C5.37079 4.06094 5.15893 4.11787 5.00098 4.19824C4.65588 4.37409 4.37516 4.65496 4.19922 5C4.11874 5.15796 4.06196 5.36963 4.03125 5.74512C3.99992 6.12858 3.99902 6.62213 3.99902 7.33301V12.666C3.99902 13.3767 3.99996 13.8705 4.03125 14.2539C4.06193 14.6295 4.11878 14.841 4.19922 14.999C4.37515 15.3443 4.6557 15.6258 5.00098 15.8018C5.15894 15.8821 5.37074 15.9391 5.74609 15.9697C6.12955 16.001 6.62323 16.001 7.33399 16.001H12.667C13.3776 16.001 13.8715 16.001 14.2549 15.9697C14.6299 15.939 14.8421 15.8821 15 15.8018C15.345 15.6258 15.6269 15.3441 15.8027 14.999C15.883 14.8411 15.9401 14.6289 15.9707 14.2539C16.002 13.8705 16.002 13.3767 16.002 12.666V7.33301C16.002 6.62213 16.002 6.12858 15.9707 5.74512C15.94 5.36972 15.8832 5.15795 15.8027 5C15.6269 4.65483 15.3451 4.37417 15 4.19824C14.8421 4.11782 14.6302 4.06097 14.2549 4.03027C13.8715 3.99897 13.3776 3.99805 12.667 3.99805H7.33399Z" fill="currentColor" />\n</svg>\n';
    });
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iR(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam1,
) {
  let {
      cwd,
      decorationIcons,
      flattenEmptyDirectories = false,
      gitStatus,
      hostId,
      icons,
      initialExpandedPaths,
      initialScrollTop = 0,
      itemHeight,
      onClick,
      onDoubleClick,
      onExpandedPathsChange,
      onSelectionChange,
      onStateChange,
      paths:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue30,
      revealSelectedPath = false,
      revealSelectedPathScrollOffset = "nearest",
      renderRowDecoration,
      resetKey,
      selectedPath,
      surface = "main",
      unsafeCSS,
    } = appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam1,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue33 =
      itemHeight === undefined
        ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue23
        : itemHeight,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue37 =
      currentReactAliasUpperD(RouteScopeSignal),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue38 =
      pullRequestCodeReviewNewThreadRuntimeMember0063(
        pullRequestCodeReviewNewThreadRuntimeMember0080(),
      ),
    { platform } = settingsCommandSharedRuntimeVariant4Member0025(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue39 =
      _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzC(
        "add-context-file",
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue40 =
      {
        cwd,
        hostId,
      };
  let be = pullRequestRoutRuntimeVariant5Member0004(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue40,
    ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue41 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue30.map(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper21,
      );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue41,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue43 =
      new Map();
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue197 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue30)
    typeof appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue197 !=
      "string" &&
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue43.set(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue197.displayPath,
        currentHostServicesAliasLoweroLowert(
          cwd ?? "",
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue197.path,
          platform === "windows",
        ),
      );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue44 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue43,
    __appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iC =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper24(
        icons,
        decorationIcons,
      );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue45 =
      __appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iC,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iW =
      surface === "dropdown"
        ? "var(--color-token-dropdown-background)"
        : "var(--color-token-main-surface-primary)",
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iH =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useRef(
        null,
      ),
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iM =
      Array.from(initialExpandedPaths ?? []);
  let _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iG =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useRef(
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iM,
      ),
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iX =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useRef(
        null,
      ),
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useRef(
        null,
      ),
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iUnderscore =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useRef(
        initialScrollTop,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue46 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useRef(
        selectedPath ?? null,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue47 =
      () => {
        onStateChange?.({
          expandedPaths:
            _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iG.current,
          scrollTop:
            _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iUnderscore.current,
          selectedPath:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue46.current,
        });
      };
  let _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iP =
      useStableCallback(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue47,
      ),
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iY =
      (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam72,
      ) => {
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iG.current =
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam72;
        onExpandedPathsChange?.(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam72,
        );
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iP();
      };
  let __appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS =
      useStableCallback(
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iY,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue48 =
      (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam69,
      ) => {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue46.current =
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam69[0] ??
          null;
        onSelectionChange?.(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam69,
        );
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iP();
      };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue49 =
      useStableCallback(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue48,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue50 =
      selectedPath == null ? undefined : [selectedPath];
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue51 = `
      :host {
        --trees-bg-override: ${_appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iW};
        --trees-bg-muted-override: var(--color-token-list-hover-background);
        --trees-border-color-override: var(--color-token-border);
        --trees-fg-override: var(--color-token-foreground);
        --trees-font-size-override: 13px;
        --trees-focus-ring-color-override: var(--color-token-list-focus-outline);
        --trees-git-added-color-override: var(--color-token-git-decoration-added-resource-foreground);
        --trees-git-deleted-color-override: var(--color-token-git-decoration-deleted-resource-foreground);
        --trees-git-ignored-color-override: var(--color-token-git-decoration-ignored-resource-foreground);
        --trees-git-lane-width-override: 20px;
        --trees-git-modified-color-override: var(--color-token-git-decoration-modified-resource-foreground);
        --trees-git-renamed-color-override: var(--color-token-git-decoration-renamed-resource-foreground);
        --trees-git-untracked-color-override: var(--color-token-git-decoration-untracked-resource-foreground);
        --trees-item-padding-x-override: 6px;
        --trees-item-margin-x-override: 0px;
        --trees-level-gap-override: 0px;
        --trees-padding-inline-override: 0px;
        --trees-scrollbar-gutter-override: 0px;
        --trees-scrollbar-gutter-measured: 0px;
        --trees-selected-bg-override: var(--color-token-list-active-selection-background);
        --trees-selected-fg-override: var(--color-token-list-active-selection-foreground);
        --trees-item-row-gap-override: 10px;
      }

      [data-file-tree-sticky-overlay-content='true'],
      [data-file-tree-sticky-row='true'] {
        background-color: ${_appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iW};
      }

      [data-file-tree-virtualized-scroll='true'] {
        scrollbar-gutter: auto;
      }

      [role="treeitem"] {
        cursor: var(--cursor-interaction) !important;
      }

      [role="treeitem"] * {
        cursor: var(--cursor-interaction) !important;
      }

      [data-item-type='file']:has([data-item-section='content']:empty) {
        display: none;
      }

      [data-item-git-status] > [data-item-section='content'] {
        color: inherit;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span,
      [data-item-git-status='deleted'] > [data-item-section='git'] > span,
      [data-item-git-status='modified'] > [data-item-section='git'] > span {
        font-size: 0;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span::before,
      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before,
      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        width: 20px;
        height: 20px;
        background-color: currentColor;
        content: '';
        mask: var(--base-file-tree-git-status-icon) center / contain no-repeat;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue25}");
      }

      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue26}");
      }

      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue27}");
      }

      /* Filter out @pierre/truncate's subpixel one-line overflow false positives. */
      @container measure (height <= calc(1lh + 1px)) {
        [data-truncate-marker] {
          opacity: 0;
        }
      }

      ${unsafeCSS ?? ""}
    `,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue52 =
      {
        fileTreeSearchMode: "hide-non-matches",
        flattenEmptyDirectories: flattenEmptyDirectories,
        gitStatus,
        icons:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue45,
        initialExpandedPaths,
        initialSelectedPaths:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue50,
        itemHeight:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue33,
        onSelectionChange:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue49,
        paths:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
        renderRowDecoration,
        search: false,
        stickyFolders: true,
        unsafeCSS:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue51,
      };
  let { model } =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper16(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue52,
      ),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue53,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue54;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue53 =
    () => {
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue125 =
          Array.from(initialExpandedPaths ?? []),
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126 =
          _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iX.current;
      if (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126 !=
          null &&
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126.model ===
          model &&
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126.resetKey ===
          resetKey &&
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper22(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126.treePaths,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
        ) &&
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper22(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126.initialExpandedPaths,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue125,
        )
      )
        return;
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue127 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126?.model !==
          model ||
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue126?.resetKey !==
          resetKey;
      _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iX.current =
        {
          initialExpandedPaths:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue125,
          model,
          resetKey,
          treePaths: Array.from(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
          ),
        };
      _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iG.current =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue125;
      model.resetPaths(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
        {
          initialExpandedPaths,
        },
      );
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue128 =
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV
          .current?.path;
      (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue127 ||
        (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue128 !=
          null &&
          model.getItem(
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue128,
          ) == null)) &&
        (_appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV.current =
          null);
    };
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue54 =
    [
      initialExpandedPaths,
      model,
      resetKey,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
    ];
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useEffect(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue53,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue54,
  );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue55,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iF;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue55 =
    () => {
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue141 =
          null,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue142 = 0,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue143 =
          () => {
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue141 =
              null;
            !appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper33(
              model,
              initialScrollTop,
            ) &&
              (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue142 >=
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue24 ||
                ((appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue142 += 1),
                (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue141 =
                  window.requestAnimationFrame(
                    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue143,
                  ))));
          };
      return (
        initialScrollTop > 0 && !(revealSelectedPath && selectedPath != null)
          ? ((_appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iUnderscore.current =
              initialScrollTop),
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue143())
          : (_appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iUnderscore.current = 0),
        () => {
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue141 !=
            null &&
            window.cancelAnimationFrame(
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue141,
            );
        }
      );
    };
  _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iF =
    [initialScrollTop, model, revealSelectedPath, selectedPath];
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useEffect(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue55,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iF,
  );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue56 =
    () => {
      if (
        ((appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue46.current =
          selectedPath ?? null),
        _t(model, selectedPath),
        !revealSelectedPath || selectedPath == null)
      ) {
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV.current =
          null;
        return;
      }
      (_appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV
        .current?.path === selectedPath &&
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV
          .current.scrollOffset === revealSelectedPathScrollOffset) ||
        (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper30(
          model,
          selectedPath,
          revealSelectedPathScrollOffset,
        ) &&
          (_appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iV.current =
            {
              path: selectedPath,
              scrollOffset: revealSelectedPathScrollOffset,
            }));
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue57;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue57 =
    [
      model,
      revealSelectedPath,
      revealSelectedPathScrollOffset,
      resetKey,
      selectedPath,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
    ];
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useEffect(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue56,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue57,
  );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue58,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iB;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue58 =
    () => {
      model.setGitStatus(gitStatus);
    };
  _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iB =
    [gitStatus, model];
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useEffect(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue58,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iB,
  );
  let ___appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS,
    ___appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iC;
  ___appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS =
    () => {
      model.setIcons(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue45,
      );
    };
  ___appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iC =
    [
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue45,
      model,
    ];
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useEffect(
    ___appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS,
    ___appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iC,
  );
  let _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iL,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iU;
  _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iL =
    () =>
      model.subscribe(() => {
        _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iUnderscore.current =
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper32(
            model,
          );
        __appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper29(
            model,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
          ),
        );
      });
  _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iU =
    [
      __appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iS,
      model,
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue42,
    ];
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useEffect(
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iL,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iU,
  );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue59,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iD;
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue59 =
    () => {
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue119 =
          null,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue120 = 0,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue121 =
          null,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue122 =
          () => {
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue119 =
              null;
            let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue135 =
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper31(
                model,
              );
            if (
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue135 !=
              null
            ) {
              let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue168 =
                () => {
                  _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iUnderscore.current =
                    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue135.scrollTop;
                  _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iP();
                };
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue135.addEventListener(
                "scroll",
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue168,
                {
                  passive: true,
                },
              );
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue121 =
                () => {
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue135.removeEventListener(
                    "scroll",
                    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue168,
                  );
                };
              return;
            }
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue120 >=
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue24 ||
              ((appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue120 += 1),
              (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue119 =
                window.requestAnimationFrame(
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue122,
                )));
          };
      return (
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue122(),
        () => {
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue119 !=
            null &&
            window.cancelAnimationFrame(
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue119,
            );
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue121?.();
        }
      );
    };
  _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iD =
    [
      model,
      _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iP,
    ];
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21.useEffect(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue59,
    _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iD,
  );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue60 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue22.jsx(
      pullRequestRoutRuntimeVariant5Member0017,
      {
        cwd,
        hostId,
      },
    );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue61 =
    () => {
      let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue129 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper28(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue44,
          _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iH.current,
        );
      return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper17(
        {
          ...appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper26(
            {
              scope:
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue37,
              cwd,
              fallbackOpenTargets: be,
              hostId,
              targetPath:
                appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue129,
            },
          ),
          onAddToChat:
            hostId == null
              ? undefined
              : (
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam63,
                ) => {
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue39.mutateAsync(
                    {
                      hostId,
                      path: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam63,
                    },
                  );
                },
          onCopyPath: firstRunAppgenRuntimeVariant2Member0007,
          onOpenInTarget: (
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam56,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam57,
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam58,
          ) => {
            be.open(
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam56,
              {
                appPath:
                  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam57,
                persistPreferred: false,
                path: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam58,
              },
            );
          },
          targetPath:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue129,
        },
      );
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue62 =
    () =>
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper27(
        {
          scope:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue37,
          cwd,
          hostId,
          targetPath:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper28(
              appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue44,
              _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iH.current,
            ),
        },
      );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue63 =
    (event) => {
      _appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iH.current =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iA(
          event.nativeEvent,
        );
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue64 =
    {
      backgroundColor: "var(--color-token-main-surface-primary)",
      color: "var(--color-token-foreground)",
      colorScheme:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue38,
      width: "100%",
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue65 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue22.jsx(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper15,
      {
        "data-tab-preview-pin-exempt": true,
        onClick,
        onContextMenu:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue63,
        onDoubleClick,
        model,
        style:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue64,
      },
    );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue66 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue22.jsx(
      ContextMenu,
      {
        awaitBeforeOpen: false,
        getItems:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue61,
        onBeforeOpen:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue62,
        children:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue65,
      },
    );
  return (
    <>
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue60
      }
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue66
      }
    </>
  );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper21(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam67,
) {
  return typeof appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam67 ==
    "string"
    ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam67
    : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam67.displayPath;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper22(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam59,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam60,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam59.length ===
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam60.length
    ? appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam59.every(
        (item, index) =>
          item ===
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam60[
            index
          ],
      )
    : false;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper23(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam65,
) {
  return `data:image/svg+xml,${encodeURIComponent(appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam65)}`;
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper24(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam9,
) {
  if (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam9 ==
      null ||
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam9.length ===
      0
  )
    return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8;
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue136 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam9
        .map(
          (item) =>
            `<symbol id="${item.name}" viewBox="${item.viewBox ?? `0 0 ${item.width ?? 0} ${item.height ?? 0}`}">${item.body}</symbol>`,
        )
        .join(""),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue137 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper25(
        typeof appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8 ==
          "string"
          ? undefined
          : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8?.spriteSheet,
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue136,
      );
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8 ==
    null
    ? {
        set: "complete",
        spriteSheet:
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue137,
      }
    : typeof appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8 ==
        "string"
      ? {
          set: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8,
          spriteSheet:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue137,
        }
      : {
          ...appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam8,
          spriteSheet:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue137,
        };
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper25(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam39,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam40,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam39 ==
    null
    ? `<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam40}</svg>`
    : appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam39.replace(
        "</svg>",
        `${appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam40}</svg>`,
      );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper26({
  scope,
  cwd,
  fallbackOpenTargets,
  hostId,
  targetPath,
}) {
  if (targetPath == null)
    return {
      isLoadingOpenTargets: false,
      primaryTarget: null,
      visibleTargets: [],
    };
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue110 =
      scope.query.snapshot(pullRequestRoutRuntimeVariant12Member0002, {
        cwd,
        hostId,
        path: targetPath,
      }),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue111 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue110.getData(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue112 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue111?.targets ??
      fallbackOpenTargets.targets,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue113 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue111?.availableTargets ??
      fallbackOpenTargets.availableTargets,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue114 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue111?.preferredTarget ??
      fallbackOpenTargets.preferredTarget,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue115 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue111?.mode ??
      fallbackOpenTargets.mode;
  return {
    isLoadingOpenTargets:
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue111 ==
        null &&
      !fallbackOpenTargets.hasLoadedTargets &&
      scope.queryClient.getQueryState(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue110.queryKey,
      )?.status !== "error",
    primaryTarget: pullRequestRoutRuntimeVariant5Member0001({
      preferredTarget:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue114,
      targets:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue112,
      availableTargets:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue113,
      mode: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue115,
    }),
    visibleTargets: pullRequestRoutRuntimeVariant5Member0031({
      targets:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue112,
      availableTargets:
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue113,
      includeHiddenTargets: true,
      mode: appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue115,
    }),
  };
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper27({
  scope,
  cwd,
  hostId,
  targetPath,
}) {
  if (targetPath != null)
    return scope.queryClient.prefetchQuery({
      ...scope.query.getOptions(pullRequestRoutRuntimeVariant12Member0002, {
        cwd,
        hostId,
        path: targetPath,
      }),
      gcTime: currentQueryRpcAliasUpperS.INFINITE,
    });
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper28(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam70,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam71,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam71 ==
    null
    ? null
    : (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam70.get(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam71,
      ) ??
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam71);
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper29(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam34,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam35,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue177 =
    [];
  for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue184 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam35) {
    if (
      !appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue184.endsWith(
        "/",
      )
    )
      continue;
    let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue190 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue184.slice(
          0,
          -1,
        ),
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue191 =
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam34.getItem(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue190,
        );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue191 ==
      null ||
      !appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper34(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue191,
      ) ||
      !appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue191.isExpanded() ||
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue177.push(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue190,
      );
  }
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue177;
}
function _t(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam31,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam32,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue174 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam31.getSelectedPaths();
  if (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam32 ==
    null
  ) {
    for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue204 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue174)
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam31
        .getItem(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue204,
        )
        ?.deselect();
    return;
  }
  if (!(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue174.length ===
      1 &&
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue174[0] ===
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam32
  )) {
    for (let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue205 of appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue174)
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam31
        .getItem(
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue205,
        )
        ?.deselect();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam31
      .getItem(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam32,
      )
      ?.select();
  }
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper30(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam53,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam54,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam55,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam53.getItem(
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam54,
  ) == null
    ? false
    : (appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam53.scrollToPath(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam54,
        {
          offset:
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam55,
        },
      ),
      true);
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper31(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam41,
) {
  return (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam41
      .getFileTreeContainer()
      ?.shadowRoot?.querySelector(
        "[data-file-tree-virtualized-scroll='true']",
      ) ?? null
  );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper32(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam77,
) {
  return (
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper31(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam77,
    )?.scrollTop ?? 0
  );
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper33(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam51,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam52,
) {
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue199 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper31(
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam51,
    );
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue199 ==
    null
    ? false
    : ((appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue199.scrollTop =
        Math.max(
          0,
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam52,
        )),
      true);
}
function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper34(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam80,
) {
  return appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam80.isDirectory();
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue20,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue22,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue23,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue24,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue25,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue26,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue27;
export const appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iI =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue20 =
      currentReactAliasLoweruLowern();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue13();
    currentReactAliasLowerx();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue21 =
      toEsm(currentReactAliasLowerdLowern(), 1);
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue14();
    initContextMenuRuntime();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iO();
    pullRequestRoutRuntimeVariant12Member0047();
    settingsCommandSharedRuntimeVariant4Member0026();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue16();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue18();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue19();
    pullRequestRoutRuntimeVariant5Member0030();
    pullRequestRoutRuntimeVariant5Member0005();
    initRouteScopeRuntime();
    pullRequestCodeReviewNewThreadRuntimeMember0073();
    firstRunAppgenRuntimeVariant2Member0006();
    currentHostServicesAliasLowerlLowert();
    currentQueryRpcAliasUpperC();
    initUseStableCallback();
    currentQueryRpcAliasLowero();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue22 =
      currentReactAliasLowerzLowert();
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue23 = 28;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue24 = 60;
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue25 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper23(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue15,
      );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue26 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper23(
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue17,
      );
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue27 =
      appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iHelper23(
        at,
      );
  });
export function appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iT(
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam2,
) {
  let {
      autoFocus,
      inputId = "file-tree-search",
      inputRef,
      onQueryChange,
      searchQuery,
    } = appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iParam2,
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue70 =
      useIntl(),
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue71 =
      $.jsx(FormattedMessage, {
        id: "codex.fileTreeSearch.label",
        defaultMessage: "Filter files",
        description: "Label for a file tree filter input",
      });
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue72 =
    (
      <label className="sr-only" htmlFor={inputId}>
        {
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue71
        }
      </label>
    );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue73 =
    $.jsx(MenuSearchIcon, {
      className:
        "icon-xs ms-2 shrink-0 text-token-input-placeholder-foreground",
    });
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue74 =
    (event) => onQueryChange(event.target.value);
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue75 =
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue70.formatMessage(
      {
        id: "codex.fileTreeSearch.placeholder",
        defaultMessage: "Filter files…",
        description: "Placeholder text for a file tree filter input",
      },
    );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue76 =
    (
      <input
        autoFocus={autoFocus}
        id={inputId}
        ref={inputRef}
        className="w-full appearance-none border-none bg-transparent py-0 ps-0 pe-1.5 text-token-foreground ring-0 outline-none select-text placeholder:text-token-input-placeholder-foreground focus:border-none focus:ring-0 focus:outline-none [&::placeholder]:select-none"
        type="text"
        value={searchQuery}
        onChange={
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue74
        }
        placeholder={
          appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue75
        }
      />
    );
  let appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue77 =
    searchQuery.length > 0
      ? $.jsx(Button, {
          "aria-label":
            appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue70.formatMessage(
              {
                id: "codex.fileTreeSearch.clear",
                defaultMessage: "Clear file filter",
                description: "Button label to clear a file tree filter input",
              },
            ),
          className:
            "text-token-input-placeholder-foreground hover:text-token-foreground",
          color: "ghost",
          size: "icon",
          onClick: () => onQueryChange(""),
          children: $.jsx(CloseIcon, {
            className: "icon-2xs",
          }),
        })
      : null;
  return (
    <div className="relative flex h-token-button-composer w-full items-center gap-1.5 rounded-lg border border-token-border bg-token-bg-fog text-base leading-[18px]">
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue72
      }
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue73
      }
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue76
      }
      {
        appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue77
      }
    </div>
  );
}
var appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue28,
  $;
export const appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iN =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iValue28 =
      currentReactAliasLoweruLowern();
    initReactIntlRuntimeChunk();
    initButtonRuntime();
    initSearchIconRuntime();
    initCloseIconRuntime();
    $ = currentReactAliasLowerzLowert();
  });
export {
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iA,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iF,
  appInitialArtifactTabContentElectronAppMainPullRequestCodeReviewNewThreadPaneO1pkxa0iO,
};
