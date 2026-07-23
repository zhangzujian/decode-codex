// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~app-main~appgen-settings-page~pull-request-route~~pdazrfmg-DzasxZnO.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer, toEsm } from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasUpperD,
  currentReactAliasLowerdLowern,
  currentReactAliasUpperO,
  currentReactAliasLoweruLowern,
  currentReactAliasUnderscore,
  currentReactAliasLowerv,
  currentReactAliasLowerx,
  currentReactAliasLowery,
  currentReactAliasLowerzLowert,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasLowerb,
  currentQueryRpcAliasLowern,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasLoweroLowero,
  currentQueryRpcAliasLowerq,
  currentQueryRpcAliasLowerrLowerr,
  currentQueryRpcAliasLowerw,
  currentQueryRpcAliasUpperWLowero,
  currentQueryRpcAliasLowerx,
} from "../app-initial-query-rpc-runtime";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  initCloseIconRuntime,
  CloseIcon,
  Button,
  initButtonRuntime,
} from "../../current-app-initial/persisted-ui-runtime-entry";
import {
  CheckmarkIcon,
  initChevronDownIconRuntime,
  initCheckmarkIconRuntime,
  ChevronDownIcon,
} from "../../../ui/menu-current/entry";
import {
  currentHostServicesAliasUpperD,
  currentHostServicesAliasUpperO,
} from "../app-initial-host-services-runtime";
import {
  initTooltipRuntime,
  Tooltip,
} from "../app-initial~avatar-overlay-composition-surface~artifact-tab-content.electron~notebook-preview-~kr7rxhqe";
import {
  lodashMemoize,
  toastApiSignal,
  initConversationAttachmentRuntime,
  extractTextAttachmentPaths,
  lodashGetOrDefault,
  windowContinuationWarningMessage,
  initMcpContentSchemaRuntime,
} from "../current-app-shared-current";
import {
  appgenSRuntimeMember0039,
  appgenSRuntimeMember0054,
} from "../appgen-s-runtime-current";
import {
  businessCheckoutSharedFunction0149,
  businessCheckoutSharedMember0251,
} from "../business-checkout-shared-current";
import {
  conversationIdForClientThreadSignal,
  initThreadScopeRuntime,
} from "../app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s";
import {
  businessCheckoutSharedRuntimeVariant5Member0012,
  businessCheckoutSharedRuntimeVariant5Member0014,
} from "../business-checkout-shared-runtime-variant-5";
import {
  businessCheckoutSecondaryRuntimeMember0034,
  businessCheckoutSecondaryRuntimeMember0008,
  businessCheckoutSecondaryRuntimeMember0041,
  businessCheckoutSecondaryRuntimeFunction0012,
  businessCheckoutSecondaryRuntimeMember0056,
} from "../business-checkout-secondary-runtime-current";
import {
  settingsCommandSharedRuntimeVariant4Member0022,
  settingsCommandSharedRuntimeVariant4Member0024,
} from "../settings-command-shared-runtime-variant-4-current";
import {
  settingsCommandSharedRuntimeVariant18Member0030,
  settingsCommandSharedRuntimeVariant18Member0045,
} from "../settings-command-shared-runtime-variant-18-current";
import {
  firstRunAppgenRuntimeVariant3Member0010,
  firstRunAppgenRuntimeVariant3Member0030,
} from "../first-run-appgen-runtime-variant-3";
import {
  settingsCommandSharedRuntimeVariant8Member0005,
  settingsCommandSharedRuntimeVariant8Member0058,
  settingsCommandSharedRuntimeVariant8Member0069,
  settingsCommandSharedRuntimeVariant8Member0076,
} from "../settings-command-shared-runtime-variant-8-current";
import {
  newThreadOnboardingSharedRuntimeMember0018,
  newThreadOnboardingSharedRuntimeMember0005,
} from "../new-thread-onboarding-shared-runtime-current";
import {
  pullRequestRoutRuntimeVariant4Member0111,
  pullRequestRoutRuntimeVariant4Member0084,
} from "../pull-request-rout-runtime-variant-4-current";
import {
  newThreadOnboardingSharedRuntimeVariant16Member0006,
  newThreadOnboardingSharedRuntimeVariant16Member0009,
  newThreadOnboardingSharedRuntimeVariant16Member0038,
  newThreadOnboardingSharedRuntimeVariant16Member0042,
} from "../new-thread-onboarding-shared-runtime-variant-16-current";
import {
  firstRunAppgenRuntimeVariant2Member0006,
  firstRunAppgenRuntimeVariant2Member0007,
} from "../first-run-appgen-runtime-variant-2-current";
import {
  Dropdown,
  initDropdownRuntime,
  DropdownMenu,
} from "../../package-adapters/dropdown-current/entry";
import {
  settingsCommandSharedRuntimeVariant18PullMember0002,
  settingsCommandSharedRuntimeVariant18PullMember0030,
} from "../settings-command-shared-runtime-variant-18-pull-current";
export async function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgA({
  scope,
  pinned,
  threadId,
}) {
  return (
    await currentQueryRpcAliasLowern("set-thread-pinned", {
      params: {
        threadId,
        pinned,
      },
    }),
    pinned &&
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper1(
        scope,
        threadId,
      ),
    {
      threadId,
      pinned,
    }
  );
}
export async function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgK({
  archived,
  hostId,
  scope,
  threadId,
}) {
  let { hostId: _hostId } = await pullRequestRoutRuntimeVariant4Member0084({
      preferredHostId: hostId,
      requestOptions: {
        priority: "background",
        source: "tail_history",
        timeoutMs: 15e3,
      },
      scope,
      threadId,
    }),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue81 =
      currentQueryRpcAliasUpperWLowero(threadId);
  return (
    archived
      ? (await currentHostServicesAliasUpperO("hydrate-background-threads", {
          hostId: _hostId,
          threadIds: [
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue81,
          ],
        }),
        await currentHostServicesAliasUpperO("archive-conversation", {
          hostId: _hostId,
          conversationId:
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue81,
          source: "dynamic_tool",
        }))
      : await currentHostServicesAliasUpperO("unarchive-conversation", {
          hostId: _hostId,
          conversationId:
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue81,
        }),
    {
      threadId,
      archived,
    }
  );
}
export async function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgJ({
  scope,
  threadId,
  title,
}) {
  let { hostId } = await pullRequestRoutRuntimeVariant4Member0084({
    scope,
    threadId,
  });
  return (
    await currentHostServicesAliasUpperO("set-thread-title", {
      hostId,
      conversationId: currentQueryRpcAliasUpperWLowero(threadId),
      title,
      updateDescription: true,
    }),
    {
      threadId,
      title,
    }
  );
}
async function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper1(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam15,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam16,
) {
  try {
    let { hostId } = await pullRequestRoutRuntimeVariant4Member0084({
      scope:
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam15,
      threadId:
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam16,
    });
    await currentHostServicesAliasUpperO("refresh-thread-description", {
      hostId,
      conversationId: currentQueryRpcAliasUpperWLowero(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam16,
      ),
    });
  } catch (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue93) {
    currentQueryRpcAliasLowerx.warning("Failed to refresh thread description", {
      safe: {},
      sensitive: {
        error:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue93,
      },
    });
  }
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgO =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    currentHostServicesAliasUpperD();
    currentQueryRpcAliasLowerb();
    currentQueryRpcAliasLowero();
    pullRequestRoutRuntimeVariant4Member0111();
  });
async function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgD(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam23,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam24,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam25,
) {
  await currentQueryRpcAliasLowern("set-thread-pinned", {
    params:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam25 ===
      undefined
        ? {
            threadId:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam23,
            pinned:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam24,
          }
        : {
            threadId:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam23,
            pinned:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam24,
            beforeThreadId:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam25,
          },
  });
}
export async function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgE(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam18,
) {
  try {
    await currentQueryRpcAliasLowern("set-pinned-threads-order", {
      params: {
        threadIds:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam18,
      },
    });
  } catch (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue94) {
    currentQueryRpcAliasLowerx.error("Failed to set pinned thread order", {
      safe: {},
      sensitive: {
        error:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue94,
      },
    });
  }
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgT =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerb();
    currentQueryRpcAliasLowero();
  });
async function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgW(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam8,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam9,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam10,
) {
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue66 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7.query.snapshot(
        newThreadOnboardingSharedRuntimeVariant16Member0009,
      ),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue67 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue66.getData(),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue68 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue67 ==
      null
        ? null
        : {
            threadIds:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam9
                ? currentQueryRpcAliasLowerrLowerr({
                    threadIds:
                      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue67.threadIds,
                    threadId:
                      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam8,
                    beforeThreadId:
                      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam10 ??
                      null,
                  })
                : appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue67.threadIds.filter(
                    (item) =>
                      item !==
                      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam8,
                  ),
          },
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue69 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7.get(
        businessCheckoutSecondaryRuntimeMember0056,
      ),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue70 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue69 !=
        null &&
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper2(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7,
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue69,
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam8,
      )
        ? appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7.get(
            businessCheckoutSecondaryRuntimeMember0041,
          )
        : undefined;
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue70 !==
    undefined &&
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7.set(
      businessCheckoutSecondaryRuntimeMember0041,
      null,
    );
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue68 !=
    null &&
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue66.setData(
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue68,
    );
  try {
    return (
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam10 ===
      undefined
        ? await appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgD(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam8,
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam9,
          )
        : await appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgD(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam8,
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam9,
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam10,
          ),
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam9 &&
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper1(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam8,
        ),
      true
    );
  } catch (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue83) {
    let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue84 =
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue66.getData(),
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue85 =
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue68 ==
        null;
    return (
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue68 !=
        null &&
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue84 !=
          null &&
        newThreadOnboardingSharedRuntimeVariant16Member0038(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue84.threadIds,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue68.threadIds,
        ) &&
        (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue66.setData(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue67,
        ),
        (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue85 = true)),
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue85 &&
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue70 !==
          undefined &&
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7.get(
          businessCheckoutSecondaryRuntimeMember0056,
        ) ===
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue69 &&
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7.set(
          businessCheckoutSecondaryRuntimeMember0041,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam7.get(
            businessCheckoutSecondaryRuntimeMember0041,
          ) == null
            ? appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue70
            : null,
        ),
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper3(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue83,
      ),
      false
    );
  }
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper2(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam20,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam21,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam22,
) {
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue90 =
    businessCheckoutSecondaryRuntimeFunction0012(
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam21,
    );
  switch (
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue90?.kind
  ) {
    case "local":
      return (
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam20.get(
          conversationIdForClientThreadSignal,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue90.threadId,
        ) ===
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam22
      );
    case "remote":
      return (
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue90.taskId ===
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam22
      );
    case undefined:
      return false;
  }
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper3(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam29,
) {
  currentQueryRpcAliasLowerx.error(
    "Failed to update sidebar thread membership",
    {
      safe: {},
      sensitive: {
        error: currentQueryRpcAliasLoweroLowero(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam29,
        ),
      },
    },
  );
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgC =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgO();
    newThreadOnboardingSharedRuntimeVariant16Member0006();
    initThreadScopeRuntime();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgT();
    businessCheckoutSecondaryRuntimeMember0034();
    businessCheckoutSecondaryRuntimeMember0008();
    newThreadOnboardingSharedRuntimeVariant16Member0042();
    currentQueryRpcAliasLowerb();
  });
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgX(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam4,
  {
    archiveSource,
    conversationId,
    hostId,
    onRedoError,
    onRedoStart,
    onRedoSuccess,
    onUndoSuccess,
  },
) {
  return appgenSRuntimeMember0039(
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam4,
    {
      expiresAfterMs: currentQueryRpcAliasLowerq,
      onRedoError: () => {
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam4
          .get(toastApiSignal)
          .danger(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam4
              .get(newThreadOnboardingSharedRuntimeMember0005)
              .formatMessage({
                id: "threadArchiveHistory.redoError",
                defaultMessage: "Failed to archive conversation",
                description:
                  "Error message when redoing a conversation archive",
              }),
          );
        onRedoError?.();
      },
      onRedoSuccess,
      onUndoError: () => {
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam4
          .get(toastApiSignal)
          .danger(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam4
              .get(newThreadOnboardingSharedRuntimeMember0005)
              .formatMessage({
                id: "localTaskRow.unarchiveError",
                defaultMessage: "Failed to unarchive conversation",
                description:
                  "Error message when undoing a local conversation archive",
              }),
          );
      },
      onUndoSuccess,
      redo: () => (
        onRedoStart?.(
          businessCheckoutSharedMember0251(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam4.get,
            conversationId,
          ) === hostId,
        ),
        currentHostServicesAliasUpperO("archive-conversation", {
          conversationId,
          hostId,
          source: archiveSource,
        })
      ),
      transitionQueueKey: JSON.stringify([hostId, conversationId]),
      undo: () =>
        currentHostServicesAliasUpperO("unarchive-conversation", {
          hostId,
          conversationId,
          restorePinnedPosition: true,
        }),
    },
  );
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgS =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    businessCheckoutSharedFunction0149();
    currentHostServicesAliasUpperD();
    appgenSRuntimeMember0054();
    lodashMemoize();
    newThreadOnboardingSharedRuntimeMember0018();
  });
export function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgY(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam5,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam6,
) {
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue56 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam6 ===
    undefined
      ? {}
      : appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam6;
  let { canPin = true } =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue56,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue58 =
      currentReactAliasUpperD(currentReactAliasLowery),
    { data } = currentReactAliasUpperO(
      newThreadOnboardingSharedRuntimeVariant16Member0009,
    ),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue59 =
      data?.threadIds ?? [];
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue60 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue59,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue61 =
      canPin &&
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam5 !=
        null &&
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue60.includes(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam5,
      );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue62 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue61,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue63 =
      () => {
        !canPin ||
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam5 ==
            null ||
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgW(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue58,
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam5,
            !appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue62,
          );
      };
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue64 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue63;
  return {
    isPinned:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue62,
    togglePin:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue64,
  };
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper4({
  scope,
  cwd,
  intl,
}) {
  cwd &&
    firstRunAppgenRuntimeVariant2Member0007(cwd).then((value) => {
      value &&
        scope
          .get(toastApiSignal)
          .success(
            intl.formatMessage(
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV.copyWorkingDirectorySuccess,
            ),
          );
    });
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgG(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam35,
) {
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam35 &&
    firstRunAppgenRuntimeVariant2Member0007(
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam35,
    );
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgH(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam34,
) {
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam34 &&
    firstRunAppgenRuntimeVariant2Member0007(
      `codex://threads/${appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam34}`,
    );
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper5({
  conversationId,
  parentConversationId,
  scope,
  getMarkdown,
  intl,
}) {
  (async () => {
    await currentHostServicesAliasUpperO("ensure-conversation-history-loaded", {
      conversationId,
      dependentConversationIds:
        parentConversationId == null ? [] : [parentConversationId],
    });
    let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue82 =
      await getMarkdown();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue82 ==
      null ||
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue82.trim()
        .length === 0 ||
      ((await firstRunAppgenRuntimeVariant2Member0007(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue82,
      )) &&
        scope
          .get(toastApiSignal)
          .success(
            intl.formatMessage(
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV.copyConversationMarkdownSuccess,
            ),
          ));
  })().catch(() => {
    scope
      .get(toastApiSignal)
      .danger(
        intl.formatMessage(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV.copyConversationMarkdownError,
        ),
      );
  });
}
export function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgB() {
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue38 =
      currentReactAliasUpperD(currentReactAliasLowery),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue39 =
      useIntl(),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue40,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue41;
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue40 =
    (
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam11,
    ) => {
      let {
        conversationId,
        hostId,
        source,
        onArchiveStart,
        onArchiveSuccess,
        onArchiveError,
        appHistory,
      } =
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam11;
      onArchiveStart?.();
      let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue71 =
        appHistory == null
          ? null
          : appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgX(
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue38,
              {
                archiveSource: source,
                conversationId,
                hostId: hostId ?? "local",
                onRedoError: appHistory.onRedoError,
                onRedoStart: appHistory.onRedoStart,
                onRedoSuccess: appHistory.onRedoSuccess,
                onUndoSuccess: appHistory.onUndoSuccess,
              },
            );
      currentHostServicesAliasUpperO("archive-conversation", {
        conversationId,
        hostId,
        source,
      })
        .then(() => {
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue71?.commit();
          onArchiveSuccess?.();
        })
        .catch(() => {
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue71?.discard();
          onArchiveError?.();
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue38
            .get(toastApiSignal)
            .danger(
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue39.formatMessage(
                appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV.archiveThreadError,
              ),
            );
        });
    };
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue41 =
    (
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam17,
    ) => {
      let { conversationId } =
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam17;
      currentHostServicesAliasUpperO("interrupt-conversation", {
        conversationId,
        initiatedBy: "user",
      }).catch(() => {
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue38
          .get(toastApiSignal)
          .danger(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue39.formatMessage(
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV.interruptThreadError,
            ),
          );
      });
    };
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue42,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue43;
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue42 =
    (
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam14,
    ) => {
      let { conversationId, hostId, title } =
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam14;
      currentHostServicesAliasUpperO("set-thread-title", {
        conversationId,
        hostId,
        title,
        updateDescription: true,
      }).catch(() => {
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue38
          .get(toastApiSignal)
          .danger(
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue39.formatMessage(
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV.renameThreadError,
            ),
          );
      });
    };
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue43 =
    (
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam32,
    ) => {
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper4(
        {
          scope:
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue38,
          cwd: appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam32,
          intl: appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue39,
        },
      );
    };
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue44 =
    (
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam33,
    ) => {
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper5(
        {
          ...appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam33,
          scope:
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue38,
          intl: appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue39,
        },
      );
    };
  return {
    archiveThread:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue40,
    interruptThread:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue41,
    markThreadAsUnread:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper7,
    markThreadAsRead:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper6,
    renameThread:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue42,
    copyWorkingDirectory:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue43,
    copySessionId:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgG,
    copyAppLink:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgH,
    copyConversationMarkdown:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue44,
  };
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper6(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam28,
) {
  let { conversationId, hostId } =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam28;
  currentHostServicesAliasUpperO("mark-conversation-as-read", {
    conversationId,
    hostId,
  });
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper7(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam27,
) {
  let { conversationId, hostId } =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam27;
  currentHostServicesAliasUpperO("mark-conversation-as-unread", {
    conversationId,
    hostId,
  });
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue1,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue2,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgP;
export const appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgM =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerdLowern();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue2 =
      currentReactAliasLowerzLowert();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgP =
      (
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam3,
      ) => (
        <svg
          width={21}
          height={21}
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam3}
        >
          <path
            d="M17.1348 10.5455C17.1348 7.04681 14.2986 4.21057 10.7998 4.21057C8.59509 4.21063 6.65256 5.33708 5.5176 7.04749H7.34963C7.7169 7.04749 8.01467 7.34525 8.01467 7.71252C8.01447 8.07963 7.71678 8.37756 7.34963 8.37756H4.09963C3.73265 8.37737 3.43479 8.07951 3.43459 7.71252V4.46252C3.43459 4.09537 3.73253 3.79768 4.09963 3.79749C4.4669 3.79749 4.76467 4.09526 4.76467 4.46252V5.81995C6.16735 4.03097 8.34882 2.88054 10.7998 2.88049C15.0331 2.88049 18.4649 6.31227 18.4649 10.5455C18.4649 14.7788 15.0331 18.2106 10.7998 18.2106C7.32665 18.2105 4.39432 15.9006 3.45217 12.735C3.34762 12.3831 3.54851 12.0126 3.90041 11.9078C4.25233 11.8033 4.62283 12.0042 4.72756 12.3561C5.50658 14.9731 7.93122 16.8804 10.7998 16.8805C14.2986 16.8805 17.1348 14.0443 17.1348 10.5455ZM10.1348 7.54553C10.1348 7.17832 10.4326 6.88058 10.7998 6.88049C11.1671 6.88049 11.4649 7.17826 11.4649 7.54553V10.5455C11.4649 10.7219 11.3952 10.8915 11.2705 11.0162L9.27053 13.0162C9.01096 13.2757 8.58981 13.2755 8.3301 13.0162C8.0704 12.7565 8.0704 12.3345 8.3301 12.0748L10.1348 10.2701V7.54553Z"
            fill="currentColor"
          />
        </svg>
      );
  });
export const appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgUnderscore =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue1 =
      currentReactAliasLoweruLowern();
    currentReactAliasLowerx();
    initReactIntlRuntimeChunk();
    currentHostServicesAliasUpperD();
    lodashMemoize();
    newThreadOnboardingSharedRuntimeVariant16Member0006();
    currentReactAliasLowerb();
    windowContinuationWarningMessage();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgC();
    firstRunAppgenRuntimeVariant2Member0006();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgS();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV =
      defineMessages({
        archiveThreadError: {
          id: "sidebarElectron.archiveThreadError",
          defaultMessage: "Failed to archive chat",
          description: "Error message when archiving a local chat",
        },
        interruptThreadError: {
          id: "sidebarElectron.interruptThreadError",
          defaultMessage: "Failed to stop chat",
          description: "Error message when stopping an in-progress local chat",
        },
        renameThreadError: {
          id: "sidebarElectron.renameThreadError",
          defaultMessage: "Failed to rename chat",
          description: "Error message when renaming a local chat",
        },
        copyWorkingDirectory: {
          id: "threadHeader.copyWorkingDirectory",
          defaultMessage: "Copy working directory",
          description: "Menu item to copy the current working directory",
        },
        copyWorkingDirectorySuccess: {
          id: "threadHeader.copyWorkingDirectorySuccess",
          defaultMessage: "Copied working directory",
          description:
            "Toast shown after copying the current working directory to the clipboard",
        },
        copySessionId: {
          id: "threadHeader.copySessionId",
          defaultMessage: "Copy session ID",
          description: "Menu item to copy the current session ID",
        },
        copyAppLink: {
          id: "threadHeader.copyAppLink",
          defaultMessage: "Copy deeplink",
          description: "Menu item to copy a deeplink to this chat",
        },
        copyConversationMarkdown: {
          id: "threadHeader.copyConversationMarkdown",
          defaultMessage: "Copy as Markdown",
          description: "Menu item to copy the current conversation as Markdown",
        },
        copyConversationMarkdownSuccess: {
          id: "threadHeader.copyConversationMarkdownSuccess",
          defaultMessage: "Copied conversation as Markdown",
          description:
            "Toast shown after copying the current conversation as Markdown to the clipboard",
        },
        copyConversationMarkdownError: {
          id: "threadHeader.copyConversationMarkdownError",
          defaultMessage: "Failed to copy conversation as Markdown",
          description:
            "Toast shown when copying the current conversation as Markdown to the clipboard fails",
        },
        openInNewWindow: {
          id: "threadHeader.openInNewWindow",
          defaultMessage: "Open in new window",
          description: "Menu item to open the current chat in a new window",
        },
        moreActions: {
          id: "threadHeader.moreActions",
          defaultMessage: "Chat actions",
          description: "Aria label for chat actions dropdown",
        },
        renameThread: {
          id: "sidebarElectron.renameThread",
          defaultMessage: "Rename chat",
          description: "Menu item to rename a local chat",
        },
        archiveThread: {
          id: "sidebarElectron.archiveThread",
          defaultMessage: "Archive chat",
          description: "Menu item to archive a local chat",
        },
        addAutomation: {
          id: "sidebarElectron.addAutomation",
          defaultMessage: "Add scheduled task…",
          description:
            "Menu item to create a new scheduled task attached to a local task",
        },
        editAutomation: {
          id: "sidebarElectron.editAutomation",
          defaultMessage: "Edit scheduled task…",
          description:
            "Menu item to edit the scheduled task attached to a local task",
        },
        markThreadUnread: {
          id: "sidebarElectron.markThreadUnread",
          defaultMessage: "Mark as unread",
          description: "Menu item to mark a local task as unread",
        },
        markThreadRead: {
          id: "sidebarElectron.markThreadRead",
          defaultMessage: "Mark as read",
          description: "Menu item to mark a local task as read",
        },
        forkIntoLocal: {
          id: "threadHeader.forkIntoLocal",
          defaultMessage: "Continue in new chat",
          description:
            "Menu item to create a new local chat from the current chat in the current workspace",
        },
        forkIntoSameWorktree: {
          id: "threadHeader.forkIntoSameWorktree",
          defaultMessage: "Continue in new chat",
          description:
            "Menu item to create a new chat from the current chat in the same worktree",
        },
        forkIntoWorktree: {
          id: "threadHeader.forkIntoWorktree",
          defaultMessage: "Continue in new worktree",
          description:
            "Menu item to create a new chat from the current chat in a new worktree",
        },
        forkThreadError: {
          id: "threadHeader.forkThreadError",
          defaultMessage: "Failed to create chat",
          description:
            "Error message shown when continuing in a new chat fails",
        },
        forkThreadRequiresGitRepo: {
          id: "threadHeader.forkThreadRequiresGitRepo",
          defaultMessage:
            "A Git repository is required to continue in a new worktree",
          description:
            "Error message shown when trying to continue in a new worktree outside a Git repository",
        },
        forkPendingWorktreeTitle: {
          id: "threadHeader.forkPendingWorktreeTitle",
          defaultMessage: "New chat",
          description:
            "Default pending worktree label when continuing from an existing chat",
        },
        forkPendingWorktreePrompt: {
          id: "threadHeader.forkPendingWorktreePrompt",
          defaultMessage: "Continue this task in a new worktree",
          description:
            "Prompt text shown on the worktree init page for task continuation actions",
        },
      });
  });
export function _appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgD(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam2,
) {
  let { backLabel, canGoBack, canGoForward, forwardLabel, onBack, onForward } =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam2,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue47 =
      !canGoBack,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue48 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue4.jsx(
        settingsCommandSharedRuntimeVariant8Member0069,
        {
          className: "icon-xs",
        },
      );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue49 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue4.jsx(
      Button,
      {
        "aria-label": backLabel,
        color: "ghost",
        disabled:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue47,
        onClick: onBack,
        size: "toolbar",
        title: backLabel,
        uniform: true,
        children:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue48,
      },
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue50 =
      !canGoForward,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue51 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue4.jsx(
        settingsCommandSharedRuntimeVariant8Member0069,
        {
          className: "icon-xs -scale-x-100 transform",
        },
      );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue52 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue4.jsx(
      Button,
      {
        "aria-label": forwardLabel,
        color: "ghost",
        disabled:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue50,
        onClick: onForward,
        size: "toolbar",
        title: forwardLabel,
        uniform: true,
        children:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue51,
      },
    );
  return (
    <>
      {
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue49
      }
      {
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue52
      }
    </>
  );
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue3,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue4;
export const appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgF =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue3 =
      currentReactAliasLoweruLowern();
    initButtonRuntime();
    settingsCommandSharedRuntimeVariant8Member0058();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue4 =
      currentReactAliasLowerzLowert();
  });
export function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgL(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam1,
) {
  let {
      className,
      selectedProjectId,
      projectGroups,
      placeholder,
      projectlessActionLabel,
      projectlessLabel,
      align = "start",
      showIcon = true,
      includeChats = true,
      localOnlyTooltip,
      onChange,
    } = appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam1,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue14 =
      useIntl(),
    { remoteConnections } = businessCheckoutSharedRuntimeVariant5Member0014(),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue15 =
      settingsCommandSharedRuntimeVariant18Member0030(remoteConnections)
        .length > 0,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue16 =
      projectlessLabel ??
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue14.formatMessage(
        {
          id: "components.projectDropdown.projectless",
          defaultMessage: "Chats",
          description:
            "Label for selecting the chats target in the project dropdown",
        },
      );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue17 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue16,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue18;
  {
    let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue91;
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue91 =
      (
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam36,
      ) =>
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam36.projectId ===
        selectedProjectId;
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue18 =
      projectGroups.find(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue91,
      );
  }
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue19 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue18,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue20 =
      includeChats && selectedProjectId === "~",
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue21 =
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue20
        ? appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue17
        : (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue19?.label ??
          placeholder),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue22 =
      settingsCommandSharedRuntimeVariant4Member0022;
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue20
    ? (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue22 =
        firstRunAppgenRuntimeVariant3Member0030)
    : appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue19?.isCodexWorktree ===
        true &&
      (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue22 =
        settingsCommandSharedRuntimeVariant18PullMember0002);
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue23 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue14.formatMessage(
      {
        id: "components.projectDropdown.ariaLabel",
        defaultMessage: "Project",
        description: "Aria label for project dropdown",
      },
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue24 =
    currentReactAliasUnderscore("min-w-0", className);
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue25 =
    showIcon
      ? appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue22,
          {
            className: "icon-xs shrink-0",
          },
        )
      : null;
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue26 =
    (
      <span className="truncate text-left text-token-foreground">
        {
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue21
        }
      </span>
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue27 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
      ChevronDownIcon,
      {
        className: "icon-2xs shrink-0 text-token-input-placeholder-foreground",
      },
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue28 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsxs(
      Button,
      {
        "aria-label":
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue23,
        size: "composerSm",
        color: "ghost",
        className:
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue24,
        children: [
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue25,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue26,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue27,
        ],
      },
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue29 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
      FormattedMessage,
      {
        id: "components.projectDropdown.title",
        defaultMessage: "Project",
        description: "Header label above project options",
      },
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue30 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue15
      ? appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
          Tooltip,
          {
            tooltipContent: localOnlyTooltip,
            side: "top",
            align: "center",
            children: (
              <button
                type="button"
                className="inline-flex shrink-0 cursor-interaction items-center justify-center text-token-description-foreground hover:text-token-foreground"
                aria-label={appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue14.formatMessage(
                  {
                    id: "components.projectDropdown.localOnlyTooltipLabel",
                    defaultMessage: "Project availability details",
                    description:
                      "Aria label for the project local-only info tooltip trigger",
                  },
                )}
              >
                {appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
                  settingsCommandSharedRuntimeVariant8Member0005,
                  {
                    className: "icon-2xs",
                  },
                )}
              </button>
            ),
          },
        )
      : null;
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue31 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
      Dropdown.Title,
      {
        children: (
          <div className="flex min-w-0 items-center gap-1">
            {
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue29
            }
            {
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue30
            }
          </div>
        ),
      },
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue32;
  {
    let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue54;
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue54 =
      (
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12,
      ) => {
        let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue72 =
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12.isCodexWorktree ===
            true
              ? settingsCommandSharedRuntimeVariant18PullMember0002
              : settingsCommandSharedRuntimeVariant4Member0022,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue73 =
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12
              .repositoryData?.rootFolder,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue74 =
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue73 !=
              null &&
            appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue73 !==
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12.label;
        return appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
          Dropdown.Item,
          {
            LeftIcon:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue72,
            RightIcon:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12.projectId ===
              selectedProjectId
                ? CheckmarkIcon
                : undefined,
            onSelect: () => {
              onChange(
                appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12.projectId,
              );
            },
            children: (
              <div className="flex items-center gap-1">
                <span>
                  {
                    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12.label
                  }
                </span>
                {appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue74 ? (
                  <span className="truncate text-sm text-token-description-foreground">
                    {
                      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue73
                    }
                  </span>
                ) : null}
              </div>
            ),
          },
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam12.projectId,
        );
      };
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue32 =
      projectGroups.map(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue54,
      );
  }
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue33 =
    projectGroups.length === 0 ? (
      <div className="text-token-muted-foreground px-3 py-2 text-sm">
        {appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
          FormattedMessage,
          {
            id: "components.projectDropdown.empty",
            defaultMessage: "No project folders available",
            description: "Fallback label when no project options are available",
          },
        )}
      </div>
    ) : null;
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue34 =
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsxs(
      Dropdown.Section,
      {
        className: "flex flex-col [--edge-fade-distance:1.5rem]",
        children: [
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue32,
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue33,
        ],
      },
    );
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue35 =
    includeChats &&
    (projectlessActionLabel == null ||
      !appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue20) ? (
      <>
        {appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
          Dropdown.Separator,
          {},
        )}
        {appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
          Dropdown.Section,
          {
            className: "flex flex-col",
            children:
              appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsx(
                Dropdown.Item,
                {
                  LeftIcon:
                    projectlessActionLabel == null
                      ? firstRunAppgenRuntimeVariant3Member0030
                      : CloseIcon,
                  RightIcon:
                    projectlessActionLabel == null &&
                    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue20
                      ? CheckmarkIcon
                      : undefined,
                  onSelect: () => {
                    onChange("~");
                  },
                  children:
                    projectlessActionLabel ??
                    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue17,
                },
              ),
          },
        )}
      </>
    ) : null;
  return appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6.jsxs(
    DropdownMenu,
    {
      align: align,
      contentWidth: "workspace",
      contentMaxHeight: "tall",
      contentClassName: "pb-2",
      triggerButton:
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue28,
      children: [
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue31,
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue34,
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue35,
      ],
    },
  );
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue5,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6;
export const appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgU =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue5 =
      currentReactAliasLoweruLowern();
    currentReactAliasLowerv();
    currentQueryRpcAliasLowerw();
    initReactIntlRuntimeChunk();
    settingsCommandSharedRuntimeVariant18Member0045();
    initButtonRuntime();
    initDropdownRuntime();
    initTooltipRuntime();
    firstRunAppgenRuntimeVariant3Member0010();
    initCheckmarkIconRuntime();
    initChevronDownIconRuntime();
    settingsCommandSharedRuntimeVariant4Member0024();
    settingsCommandSharedRuntimeVariant8Member0076();
    settingsCommandSharedRuntimeVariant18PullMember0030();
    initCloseIconRuntime();
    businessCheckoutSharedRuntimeVariant5Member0012();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue6 =
      currentReactAliasLowerzLowert();
  });
export function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgI(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam30,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam31,
) {
  return {
    commentKey: initMcpContentSchemaRuntime(
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam31,
    ),
    revision:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam30,
  };
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgR(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam26,
) {
  return appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam26.content
    .flatMap((item) => (item.content_type === "text" ? [item.text] : []))
    .join("\n\n")
    .trim();
}
export function _appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgO({
  currentComments,
  nextComments,
}) {
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue86 =
      new Set(currentComments.map(initMcpContentSchemaRuntime)),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue87 =
      nextComments.filter((item) =>
        currentComments.some((_item) =>
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper8(
            {
              currentComment: _item,
              nextComment: item,
            },
          ),
        ),
      ),
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue88 =
      nextComments.filter(
        (item) =>
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgR(
            item,
          ).length > 0 &&
          !appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue86.has(
            initMcpContentSchemaRuntime(item),
          ),
      );
  return appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue7.default(
    [
      ...appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue87,
      ...appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue88,
    ],
    initMcpContentSchemaRuntime,
  );
}
export function _appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgS(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam19,
) {
  return {
    line: appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam19
      .position.line,
    path: appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam19
      .position.path,
    side: appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam19
      .position.side,
    startLine:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam19
        .position.start_line ?? undefined,
    startSide:
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam19
        .position.start_side ?? undefined,
  };
}
export function _appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgA({
  comments,
  filePaths,
  workspaceRoot,
}) {
  let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue89 =
    new Map();
  for (let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue92 of comments) {
    let appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue95 =
      filePaths.find((item) =>
        extractTextAttachmentPaths(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue92
            .position.path,
          item,
          workspaceRoot ?? undefined,
        ),
      );
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue95 !=
      null &&
      appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue89.set(
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue95,
        (appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue89.get(
          appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue95,
        ) ?? 0) + 1,
      );
  }
  return appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue89;
}
function appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgHelper8({
  currentComment,
  nextComment,
}) {
  return (
    currentComment.replyToReviewThreadId != null &&
    currentComment.replyToReviewThreadId ===
      nextComment.replyToReviewThreadId &&
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgR(
      currentComment,
    ).length === 0 &&
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgR(
      nextComment,
    ).length > 0 &&
    currentComment.position.path === nextComment.position.path &&
    currentComment.position.side === nextComment.position.side &&
    currentComment.position.line === nextComment.position.line
  );
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue7;
export const _appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgC =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue7 =
      toEsm(lodashGetOrDefault(), 1);
    initConversationAttachmentRuntime();
  });
export function _appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgT(
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam13,
) {
  let {
      className,
      align = "center",
      children,
      layout,
    } = appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgParam13,
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue77 =
      (layout === undefined ? "default" : layout) === "settings-row" &&
      "min-h-[var(--height-token-settings-row)]",
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue78 =
      align === "center"
        ? "justify-center text-center"
        : "justify-start text-left",
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue79 =
      currentReactAliasUnderscore(
        "flex items-center px-4 text-sm text-token-text-secondary",
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue77,
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue78,
        className,
      );
  return (
    <div
      className={
        appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue79
      }
    >
      {children}
    </div>
  );
}
var appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue8,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue9;
export const appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgN =
  createLazyEsmInitializer(() => {
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue8 =
      currentReactAliasLoweruLowern();
    currentReactAliasLowerv();
    appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgValue9 =
      currentReactAliasLowerzLowert();
  });
export {
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgC,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgD,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgO,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgS,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgT,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgG,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgH,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgP,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgR,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgV,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgW,
  appInitialArtifactTabContentElectronAppMainAppgenSettingsPagePullRequestRoutePdazrfmgX,
};
