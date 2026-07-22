// Restored from ref/webview/assets/avatar-overlay-pill-material.module-DmwKYnog.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// AvatarOverlayPillMaterialModule chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  defineMessages as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4A,
  initReactIntlRuntimeChunk as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O,
} from "../package-adapters/react-intl-current/index";
import {
  Button as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
  initButtonRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V,
} from "./persisted-ui-runtime";
import { petInstallModalHostQuickChatWindRuntimeMember0033 as appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsCt } from "../current-ref-aliases/pet-install-modal-host-quick-chat-wind-runtime/index";
import {
  initInteractiveToolRuntime as _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eYr,
  getLatestCanonicalIslandEntity as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eBr,
  resolveCanonicalTurnsForDisplay as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eBt,
  currentAppInitialSharedSideFunction as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eDr,
  getCodexDesktopOriginator as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eH,
  collectVisualizationChangeKinds as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eKr,
  parsePullRequestNumberFromContent as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eLt,
  currentAppInitialSharedMember0314 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eMr,
  isPastedTextAttachmentPath as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eN,
  implementPlanPromptMessage as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eOr,
  windowContinuationMaximumWaitMs as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eUnderscore,
  normalizeFileSystemCommandAction as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eVt,
  windowContinuationWarningMessage as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eXr,
  createSharedObjectSignalAtom as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eY,
  initSubAgentMetadataRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eYr,
} from "../current-ref-aliases/current-app-shared/index";
import {
  newThreadOnboardingSharedRuntimeVariant4Member0022 as appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Jt,
  newThreadOnboardingSharedRuntimeVariant4Member0050 as appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Xt,
  newThreadOnboardingSharedRuntimeVariant4Member0052 as appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Yt,
  newThreadOnboardingSharedRuntimeVariant4Member0054 as appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Zt,
} from "../current-ref-aliases/new-thread-onboarding-shared-runtime-variant-4/index";
export function avatarOverlayPillMaterialModuleH(
  avatarOverlayPillMaterialModuleParam30,
  avatarOverlayPillMaterialModuleParam31,
  avatarOverlayPillMaterialModuleParam32 = 1,
) {
  if (avatarOverlayPillMaterialModuleParam32 !== 2) return null;
  let avatarOverlayPillMaterialModuleValue80 =
      avatarOverlayPillMaterialModuleParam31.x -
      (avatarOverlayPillMaterialModuleParam30.left +
        avatarOverlayPillMaterialModuleParam30.width / 2),
    avatarOverlayPillMaterialModuleValue81 =
      avatarOverlayPillMaterialModuleParam31.y -
      (avatarOverlayPillMaterialModuleParam30.top +
        avatarOverlayPillMaterialModuleParam30.height / 2);
  if (
    Math.hypot(
      avatarOverlayPillMaterialModuleValue80,
      avatarOverlayPillMaterialModuleValue81,
    ) <= avatarOverlayPillMaterialModuleValue5
  )
    return null;
  let avatarOverlayPillMaterialModuleValue82 =
      (Math.atan2(
        avatarOverlayPillMaterialModuleValue80,
        -avatarOverlayPillMaterialModuleValue81,
      ) *
        (180 / Math.PI) +
        360) %
      360,
    avatarOverlayPillMaterialModuleValue83 =
      Math.round(
        avatarOverlayPillMaterialModuleValue82 /
          avatarOverlayPillMaterialModuleValue1,
      ) % avatarOverlayPillMaterialModuleValue2;
  return {
    columnIndex:
      avatarOverlayPillMaterialModuleValue83 %
      avatarOverlayPillMaterialModuleValue4,
    frameDurationMs: 0,
    rowIndex:
      avatarOverlayPillMaterialModuleValue3 +
      Math.floor(
        avatarOverlayPillMaterialModuleValue83 /
          avatarOverlayPillMaterialModuleValue4,
      ),
  };
}
var avatarOverlayPillMaterialModuleValue1,
  avatarOverlayPillMaterialModuleValue2,
  avatarOverlayPillMaterialModuleValue3,
  avatarOverlayPillMaterialModuleValue4,
  avatarOverlayPillMaterialModuleValue5;
export const avatarOverlayPillMaterialModuleG = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceAppMainPetInstallModalHostQuickChatWindOieh6gbsCt();
  avatarOverlayPillMaterialModuleValue1 = 22.5;
  avatarOverlayPillMaterialModuleValue2 = 16;
  avatarOverlayPillMaterialModuleValue3 = 9;
  avatarOverlayPillMaterialModuleValue4 = 8;
  avatarOverlayPillMaterialModuleValue5 = 1;
});
export function avatarOverlayPillMaterialModuleP(
  avatarOverlayPillMaterialModuleParam6,
) {
  if (avatarOverlayPillMaterialModuleParam6 == null)
    return avatarOverlayPillMaterialModuleValue7;
  if (avatarOverlayPillMaterialModuleParam6.kind === "first-awake")
    return avatarOverlayPillMaterialModuleValue8;
  if (avatarOverlayPillMaterialModuleParam6.isLoading)
    return {
      badgeBackgroundColor: "var(--color-token-activity-bar-badge-background)",
      badgeForegroundColor: "var(--color-token-activity-bar-badge-foreground)",
      fallbackBodyMessage:
        avatarOverlayPillMaterialModuleValue6.runningFallbackBody,
      iconClassName: "icon-xs shrink-0 text-token-text-secondary",
      iconType: "spinner",
      labelMessage: avatarOverlayPillMaterialModuleValue6.running,
      mascotState: "running",
    };
  switch (avatarOverlayPillMaterialModuleParam6.level) {
    case "warning":
      return {
        badgeBackgroundColor: "var(--color-token-editor-warning-foreground)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: avatarOverlayPillMaterialModuleValue6.waiting,
        iconClassName: "icon-xs shrink-0 text-token-editor-warning-foreground",
        iconType: "clock",
        labelMessage: avatarOverlayPillMaterialModuleValue6.waiting,
        mascotState: "waiting",
      };
    case "danger":
      return {
        badgeBackgroundColor: "var(--color-token-error-foreground)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: avatarOverlayPillMaterialModuleValue6.failed,
        iconClassName: "icon-xs shrink-0 text-token-error-foreground",
        iconType: "warning",
        labelMessage: avatarOverlayPillMaterialModuleValue6.failed,
        mascotState: "failed",
      };
    case "success":
      return {
        badgeBackgroundColor: "var(--color-token-charts-green)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: avatarOverlayPillMaterialModuleValue6.review,
        iconClassName: "icon-xs shrink-0 text-token-charts-green",
        iconType: "check-circle",
        labelMessage: avatarOverlayPillMaterialModuleValue6.review,
        mascotState: "review",
      };
    case "info":
      return avatarOverlayPillMaterialModuleValue7;
  }
}
var avatarOverlayPillMaterialModuleValue6,
  avatarOverlayPillMaterialModuleValue7,
  avatarOverlayPillMaterialModuleValue8;
export const avatarOverlayPillMaterialModuleM = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  avatarOverlayPillMaterialModuleValue6 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4A(
      {
        running: {
          id: "avatarOverlay.statusRunning",
          defaultMessage: "Running",
          description: "Status label shown for a loading notification",
        },
        runningFallbackBody: {
          id: "avatarOverlay.statusRunningSubtitle",
          defaultMessage: "Thinking",
          description:
            "Fallback body shown for a loading notification when no richer activity text is available",
        },
        waiting: {
          id: "avatarOverlay.statusWaiting",
          defaultMessage: "Needs input",
          description:
            "Status label shown for a notification waiting on user input",
        },
        review: {
          id: "avatarOverlay.statusReview",
          defaultMessage: "Ready",
          description:
            "Status label shown for a notification with unread completed output",
        },
        failed: {
          id: "avatarOverlay.statusFailed",
          defaultMessage: "Blocked",
          description: "Status label shown for a notification that failed",
        },
        info: {
          id: "avatarOverlay.statusInfo",
          defaultMessage: "Info",
          description: "Status label shown for an informational notification",
        },
      },
    );
  avatarOverlayPillMaterialModuleValue7 = {
    badgeBackgroundColor: "var(--color-token-activity-bar-badge-background)",
    badgeForegroundColor: "var(--color-token-activity-bar-badge-foreground)",
    fallbackBodyMessage: avatarOverlayPillMaterialModuleValue6.info,
    iconClassName: "icon-xs shrink-0 text-token-text-secondary",
    iconType: "clock",
    labelMessage: avatarOverlayPillMaterialModuleValue6.info,
    mascotState: "idle",
  };
  avatarOverlayPillMaterialModuleValue8 = {
    ...avatarOverlayPillMaterialModuleValue7,
    mascotState: "waving",
  };
});
function avatarOverlayPillMaterialModuleHelper1(
  avatarOverlayPillMaterialModuleParam29,
  { displayChannels = avatarOverlayPillMaterialModuleValue12 } = {},
) {
  let avatarOverlayPillMaterialModuleValue74 =
    avatarOverlayPillMaterialModuleParam29.trimStart();
  if (avatarOverlayPillMaterialModuleValue74.length === 0)
    return avatarOverlayPillMaterialModuleParam29;
  if (
    avatarOverlayPillMaterialModuleValue9.startsWith(
      avatarOverlayPillMaterialModuleValue74,
    )
  )
    return "";
  if (
    !avatarOverlayPillMaterialModuleValue74.startsWith(
      avatarOverlayPillMaterialModuleValue9,
    )
  )
    return avatarOverlayPillMaterialModuleParam29;
  let avatarOverlayPillMaterialModuleValue75 =
    avatarOverlayPillMaterialModuleValue74.match(
      avatarOverlayPillMaterialModuleValue10,
    );
  if (avatarOverlayPillMaterialModuleValue75 == null) return "";
  let avatarOverlayPillMaterialModuleValue76 =
    avatarOverlayPillMaterialModuleValue75[1];
  if (
    displayChannels !== "all" &&
    !displayChannels.includes(avatarOverlayPillMaterialModuleValue76)
  )
    return "";
  let avatarOverlayPillMaterialModuleValue77 =
    avatarOverlayPillMaterialModuleValue74.slice(
      avatarOverlayPillMaterialModuleValue75[0].length,
    );
  for (
    let avatarOverlayPillMaterialModuleValue124 = 1;
    avatarOverlayPillMaterialModuleValue124 <= 7;
    avatarOverlayPillMaterialModuleValue124 += 1
  )
    if (
      avatarOverlayPillMaterialModuleValue77.endsWith(
        avatarOverlayPillMaterialModuleValue11.slice(
          0,
          avatarOverlayPillMaterialModuleValue124,
        ),
      )
    )
      return avatarOverlayPillMaterialModuleValue77.slice(
        0,
        -avatarOverlayPillMaterialModuleValue124,
      );
  return avatarOverlayPillMaterialModuleValue77;
}
var avatarOverlayPillMaterialModuleValue9,
  avatarOverlayPillMaterialModuleValue10,
  avatarOverlayPillMaterialModuleValue11,
  avatarOverlayPillMaterialModuleValue12,
  avatarOverlayPillMaterialModuleValue13 = rolldownRuntimeN(() => {
    avatarOverlayPillMaterialModuleValue9 = "<|start|>assistant<|channel|>";
    avatarOverlayPillMaterialModuleValue10 =
      /^<\|start\|>assistant<\|channel\|>([^<]+)<\|message\|>/;
    avatarOverlayPillMaterialModuleValue11 = "<|end|>";
    avatarOverlayPillMaterialModuleValue12 = ["final"];
  });
function _e(
  avatarOverlayPillMaterialModuleParam21,
  avatarOverlayPillMaterialModuleParam22,
  {
    includeMcpElicitationCancelAction = false,
    planStartCollaborationMode,
  } = {},
) {
  switch (avatarOverlayPillMaterialModuleParam21?.type) {
    case "userInput":
      return avatarOverlayPillMaterialModuleParam21.isOnboardingDynamicInput ===
        true
        ? null
        : be(
            avatarOverlayPillMaterialModuleParam21,
            avatarOverlayPillMaterialModuleParam22,
          );
    case "approval":
      return avatarOverlayPillMaterialModuleParam21.item.type === "exec"
        ? avatarOverlayPillMaterialModuleHelper2(
            avatarOverlayPillMaterialModuleParam21.item,
            avatarOverlayPillMaterialModuleParam22,
          )
        : avatarOverlayPillMaterialModuleHelper3(
            avatarOverlayPillMaterialModuleParam21.item,
            avatarOverlayPillMaterialModuleParam22,
          );
    case "permissionRequest":
      return avatarOverlayPillMaterialModuleHelper4(
        avatarOverlayPillMaterialModuleParam21.item,
        avatarOverlayPillMaterialModuleParam22,
      );
    case "implementPlan":
      return avatarOverlayPillMaterialModuleHelper5(
        avatarOverlayPillMaterialModuleParam21,
        avatarOverlayPillMaterialModuleParam22,
        planStartCollaborationMode,
      );
    case "mcpServerElicitation":
      return avatarOverlayPillMaterialModuleHelper6(
        avatarOverlayPillMaterialModuleParam21,
        avatarOverlayPillMaterialModuleParam22,
        includeMcpElicitationCancelAction,
      );
    case "optionPicker":
    case "setupCodexContextPicker":
    case "setupCodexStep":
    case undefined:
      return null;
  }
}
export function avatarOverlayPillMaterialModuleD(
  event,
  avatarOverlayPillMaterialModuleParam15,
) {
  switch (event.kind) {
    case "question":
      return [event.prompt, ...event.options.map((item) => item.label)]
        .filter(Boolean)
        .join(" ");
    case "plan":
      return event.summary;
    case "patch":
      return [
        avatarOverlayPillMaterialModuleParam15.formatMessage(
          avatarOverlayPillMaterialModuleValue14.fileCount,
          {
            count: event.fileCount,
          },
        ),
        event.additions > 0 ? `+${event.additions}` : null,
        event.deletions > 0 ? `-${event.deletions}` : null,
        event.summary,
      ]
        .filter(Boolean)
        .join(". ");
    case "exec":
      return event.summary;
    case "network":
      return event.target;
    case "permission":
      return event.target;
    case "tool":
      return [event.target, event.summary].filter(Boolean).join(". ");
  }
}
export function avatarOverlayPillMaterialModuleU(
  avatarOverlayPillMaterialModuleParam48,
  avatarOverlayPillMaterialModuleParam49,
) {
  return `${avatarOverlayPillMaterialModuleParam49.title} ${avatarOverlayPillMaterialModuleParam49.notificationTitleSeparator ?? "·"} ${avatarOverlayPillMaterialModuleParam48}`;
}
function be(
  avatarOverlayPillMaterialModuleParam25,
  avatarOverlayPillMaterialModuleParam26,
) {
  let avatarOverlayPillMaterialModuleValue67 =
    avatarOverlayPillMaterialModuleParam25.item.questions[0];
  if (avatarOverlayPillMaterialModuleValue67 == null) return null;
  let avatarOverlayPillMaterialModuleValue68 =
    avatarOverlayPillMaterialModuleHelper19(
      avatarOverlayPillMaterialModuleValue67.question,
    ) ??
    avatarOverlayPillMaterialModuleHelper19(
      avatarOverlayPillMaterialModuleValue67.header,
    );
  return avatarOverlayPillMaterialModuleValue68 == null ||
    avatarOverlayPillMaterialModuleValue67.options.length === 0
    ? null
    : {
        kind: "question",
        requestId: avatarOverlayPillMaterialModuleParam25.item.requestId,
        title: avatarOverlayPillMaterialModuleParam26.formatMessage(
          avatarOverlayPillMaterialModuleValue14.askQuestion,
        ),
        prompt: avatarOverlayPillMaterialModuleValue68,
        options: avatarOverlayPillMaterialModuleValue67.options.map((item) => ({
          label:
            avatarOverlayPillMaterialModuleHelper19(item.label) ??
            avatarOverlayPillMaterialModuleParam26.formatMessage(
              avatarOverlayPillMaterialModuleValue14.option,
            ),
          description: avatarOverlayPillMaterialModuleHelper19(
            item.description,
          ),
          questionId: avatarOverlayPillMaterialModuleValue67.id,
        })),
      };
}
function avatarOverlayPillMaterialModuleHelper2(
  avatarOverlayPillMaterialModuleParam8,
  avatarOverlayPillMaterialModuleParam9,
) {
  if (avatarOverlayPillMaterialModuleParam8.type !== "exec")
    throw Error("Expected exec approval item");
  if (avatarOverlayPillMaterialModuleParam8.approvalRequestId == null)
    return null;
  let avatarOverlayPillMaterialModuleValue37 =
    avatarOverlayPillMaterialModuleHelper19(
      avatarOverlayPillMaterialModuleParam8.networkApprovalContext?.host ?? "",
    );
  return avatarOverlayPillMaterialModuleValue37 == null
    ? {
        kind: "exec",
        requestId: avatarOverlayPillMaterialModuleParam8.approvalRequestId,
        operation: avatarOverlayPillMaterialModuleParam9.formatMessage(
          avatarOverlayPillMaterialModuleValue14.runCommand,
        ),
        summary:
          avatarOverlayPillMaterialModuleHelper19(
            avatarOverlayPillMaterialModuleParam8.cmd.join(" && "),
          ) ??
          avatarOverlayPillMaterialModuleParam9.formatMessage(
            avatarOverlayPillMaterialModuleValue14.command,
          ),
        title: avatarOverlayPillMaterialModuleParam9.formatMessage(
          avatarOverlayPillMaterialModuleValue14.reviewCommand,
        ),
        actions: [
          {
            commandDecision: "accept",
            intent: "command-approval",
            label: avatarOverlayPillMaterialModuleParam9.formatMessage(
              avatarOverlayPillMaterialModuleValue14.runOnce,
            ),
            tone: "primary",
          },
          {
            commandDecision: "decline",
            intent: "command-approval",
            label: avatarOverlayPillMaterialModuleParam9.formatMessage(
              avatarOverlayPillMaterialModuleValue14.deny,
            ),
            tone: "danger",
          },
        ],
      }
    : {
        kind: "network",
        requestId: avatarOverlayPillMaterialModuleParam8.approvalRequestId,
        operation: avatarOverlayPillMaterialModuleParam9.formatMessage(
          avatarOverlayPillMaterialModuleValue14.allowNetwork,
        ),
        target: avatarOverlayPillMaterialModuleValue37,
        title: avatarOverlayPillMaterialModuleParam9.formatMessage(
          avatarOverlayPillMaterialModuleValue14.allowNetwork,
        ),
        actions: [
          {
            ariaLabel: avatarOverlayPillMaterialModuleParam9.formatMessage(
              avatarOverlayPillMaterialModuleValue14.allowOnce,
            ),
            commandDecision: "accept",
            intent: "command-approval",
            label: avatarOverlayPillMaterialModuleParam9.formatMessage(
              avatarOverlayPillMaterialModuleValue14.allow,
            ),
            tone: "primary",
          },
          {
            commandDecision: "decline",
            intent: "command-approval",
            label: avatarOverlayPillMaterialModuleParam9.formatMessage(
              avatarOverlayPillMaterialModuleValue14.deny,
            ),
            tone: "danger",
          },
        ],
      };
}
function avatarOverlayPillMaterialModuleHelper3(
  avatarOverlayPillMaterialModuleParam13,
  avatarOverlayPillMaterialModuleParam14,
) {
  if (
    avatarOverlayPillMaterialModuleParam13.type !== "patch" ||
    avatarOverlayPillMaterialModuleParam13.approvalRequestId == null
  )
    return null;
  let avatarOverlayPillMaterialModuleValue59 = Object.entries(
    avatarOverlayPillMaterialModuleParam13.changes,
  );
  if (avatarOverlayPillMaterialModuleValue59.length === 0) return null;
  let avatarOverlayPillMaterialModuleValue60 =
    avatarOverlayPillMaterialModuleHelper17(
      avatarOverlayPillMaterialModuleParam13.changes,
    );
  return {
    kind: "patch",
    requestId: avatarOverlayPillMaterialModuleParam13.approvalRequestId,
    operation: avatarOverlayPillMaterialModuleParam14.formatMessage(
      avatarOverlayPillMaterialModuleValue14.applyChanges,
    ),
    summary:
      avatarOverlayPillMaterialModuleValue59[0]?.[0] ??
      avatarOverlayPillMaterialModuleParam14.formatMessage(
        avatarOverlayPillMaterialModuleValue14.oneFileChanged,
      ),
    title: avatarOverlayPillMaterialModuleParam14.formatMessage(
      avatarOverlayPillMaterialModuleValue14.applyChanges,
    ),
    files: avatarOverlayPillMaterialModuleValue59.map(
      ([avatarOverlayPillMaterialModuleParam54]) =>
        avatarOverlayPillMaterialModuleParam54,
    ),
    fileCount: avatarOverlayPillMaterialModuleValue59.length,
    additions: avatarOverlayPillMaterialModuleValue60.additions,
    deletions: avatarOverlayPillMaterialModuleValue60.deletions,
    actions: [
      {
        fileDecision: "accept",
        intent: "file-approval",
        label: avatarOverlayPillMaterialModuleParam14.formatMessage(
          avatarOverlayPillMaterialModuleValue14.apply,
        ),
        tone: "primary",
      },
      {
        intent: "open",
        label: avatarOverlayPillMaterialModuleParam14.formatMessage(
          avatarOverlayPillMaterialModuleValue14.review,
        ),
        tone: "secondary",
      },
    ],
  };
}
function avatarOverlayPillMaterialModuleHelper4(
  avatarOverlayPillMaterialModuleParam10,
  avatarOverlayPillMaterialModuleParam11,
) {
  let { permissions } = avatarOverlayPillMaterialModuleParam10,
    avatarOverlayPillMaterialModuleValue49 =
      appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Jt(
        permissions,
      )[0];
  if (avatarOverlayPillMaterialModuleValue49 == null) return null;
  let avatarOverlayPillMaterialModuleValue50,
    avatarOverlayPillMaterialModuleValue51;
  if (avatarOverlayPillMaterialModuleValue49.kind === "network") {
    avatarOverlayPillMaterialModuleValue51 =
      avatarOverlayPillMaterialModuleParam11.formatMessage(
        avatarOverlayPillMaterialModuleValue14.networkAccess,
      );
    avatarOverlayPillMaterialModuleValue50 =
      avatarOverlayPillMaterialModuleValue51;
  } else {
    avatarOverlayPillMaterialModuleValue51 =
      avatarOverlayPillMaterialModuleParam11.formatMessage(
        avatarOverlayPillMaterialModuleValue14.fileAccess,
      );
    let avatarOverlayPillMaterialModuleValue111 =
        avatarOverlayPillMaterialModuleValue49.paths[0] ??
        avatarOverlayPillMaterialModuleValue51,
      avatarOverlayPillMaterialModuleValue112 = Math.max(
        0,
        avatarOverlayPillMaterialModuleValue49.paths.length - 1,
      );
    avatarOverlayPillMaterialModuleValue50 =
      avatarOverlayPillMaterialModuleValue112 === 0
        ? avatarOverlayPillMaterialModuleValue111
        : `${avatarOverlayPillMaterialModuleValue111} +${avatarOverlayPillMaterialModuleValue112}`;
  }
  return {
    kind: "permission",
    requestId: avatarOverlayPillMaterialModuleParam10.requestId,
    operation: avatarOverlayPillMaterialModuleValue51,
    target: avatarOverlayPillMaterialModuleValue50,
    title: avatarOverlayPillMaterialModuleValue51,
    actions: [
      {
        intent: "permission-response",
        ariaLabel: avatarOverlayPillMaterialModuleParam11.formatMessage(
          avatarOverlayPillMaterialModuleValue14.allowOnce,
        ),
        label: avatarOverlayPillMaterialModuleParam11.formatMessage(
          avatarOverlayPillMaterialModuleValue14.allow,
        ),
        permissionResponse: {
          permissions: avatarOverlayPillMaterialModuleHelper7(permissions),
          scope: "turn",
        },
        tone: "primary",
      },
      {
        intent: "permission-response",
        label: avatarOverlayPillMaterialModuleParam11.formatMessage(
          avatarOverlayPillMaterialModuleValue14.deny,
        ),
        permissionResponse: {
          permissions: {},
          scope: "turn",
        },
        tone: "danger",
      },
    ],
  };
}
function avatarOverlayPillMaterialModuleHelper5(
  avatarOverlayPillMaterialModuleParam16,
  avatarOverlayPillMaterialModuleParam17,
  avatarOverlayPillMaterialModuleParam18,
) {
  let { planContent } = avatarOverlayPillMaterialModuleParam16,
    avatarOverlayPillMaterialModuleValue61 =
      avatarOverlayPillMaterialModuleHelper19(
        planContent
          .split(/\r?\n/)
          .map((item) => item.replace(/^[-*]\s+\[[ x]\]\s+/i, "").trim())
          .find((item) => item.length > 0) ?? "",
      );
  return avatarOverlayPillMaterialModuleValue61 == null
    ? null
    : {
        kind: "plan",
        operation: avatarOverlayPillMaterialModuleParam17.formatMessage(
          avatarOverlayPillMaterialModuleValue14.plan,
        ),
        planContent,
        summary: avatarOverlayPillMaterialModuleValue61,
        title: avatarOverlayPillMaterialModuleParam17.formatMessage(
          avatarOverlayPillMaterialModuleValue14.plan,
        ),
        turnId: avatarOverlayPillMaterialModuleParam16.turnId,
        actions: [
          {
            intent: "plan-start",
            label: avatarOverlayPillMaterialModuleParam17.formatMessage(
              avatarOverlayPillMaterialModuleValue14.implementPlan,
            ),
            planStartCollaborationMode: avatarOverlayPillMaterialModuleParam18,
            tone: "primary",
          },
        ],
      };
}
function avatarOverlayPillMaterialModuleHelper6(
  avatarOverlayPillMaterialModuleParam1,
  avatarOverlayPillMaterialModuleParam2,
  avatarOverlayPillMaterialModuleParam3,
) {
  let { elicitation } = avatarOverlayPillMaterialModuleParam1,
    avatarOverlayPillMaterialModuleValue23 =
      avatarOverlayPillMaterialModuleParam1.request.params,
    avatarOverlayPillMaterialModuleValue24 =
      avatarOverlayPillMaterialModuleHelper19(
        avatarOverlayPillMaterialModuleValue23.serverName,
      ),
    avatarOverlayPillMaterialModuleValue25 =
      avatarOverlayPillMaterialModuleHelper16(
        avatarOverlayPillMaterialModuleValue24,
      ) ??
      avatarOverlayPillMaterialModuleValue24 ??
      avatarOverlayPillMaterialModuleParam2.formatMessage(
        avatarOverlayPillMaterialModuleValue14.toolServer,
      ),
    avatarOverlayPillMaterialModuleValue26,
    avatarOverlayPillMaterialModuleValue27 =
      avatarOverlayPillMaterialModuleValue25,
    avatarOverlayPillMaterialModuleValue28 = null,
    avatarOverlayPillMaterialModuleValue29 = null,
    avatarOverlayPillMaterialModuleValue30,
    avatarOverlayPillMaterialModuleValue31;
  switch (elicitation.kind) {
    case "unsupportedOpenAIForm":
      avatarOverlayPillMaterialModuleValue26 =
        avatarOverlayPillMaterialModuleParam2.formatMessage({
          id: "avatarOverlay.waitingRequest.answerRequest",
          defaultMessage: "Answer request",
          description: "Compact title for an unsupported waiting form request",
        });
      avatarOverlayPillMaterialModuleValue27 =
        avatarOverlayPillMaterialModuleValue26;
      avatarOverlayPillMaterialModuleValue28 =
        avatarOverlayPillMaterialModuleParam2.formatMessage({
          id: "avatarOverlay.waitingRequest.unsupportedRequest",
          defaultMessage: "This request can’t be shown yet",
          description:
            "Compact summary for an unsupported waiting form request",
        });
      avatarOverlayPillMaterialModuleValue29 = [];
      break;
    case "formElicitation":
    case "openaiForm":
      avatarOverlayPillMaterialModuleValue26 =
        avatarOverlayPillMaterialModuleParam2.formatMessage(
          avatarOverlayPillMaterialModuleValue14.answerTarget,
          {
            target: avatarOverlayPillMaterialModuleValue25,
          },
        );
      avatarOverlayPillMaterialModuleValue28 =
        avatarOverlayPillMaterialModuleHelper19(elicitation.message);
      avatarOverlayPillMaterialModuleValue29 = [];
      break;
    case "mcpToolCall": {
      let avatarOverlayPillMaterialModuleValue46 =
        appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Xt(
          elicitation,
        );
      if (avatarOverlayPillMaterialModuleValue46 != null) {
        avatarOverlayPillMaterialModuleValue26 =
          avatarOverlayPillMaterialModuleValue46.connectorName;
        avatarOverlayPillMaterialModuleValue27 =
          avatarOverlayPillMaterialModuleValue46.appDisplayName;
        avatarOverlayPillMaterialModuleValue28 =
          avatarOverlayPillMaterialModuleHelper19(
            avatarOverlayPillMaterialModuleValue46.subtitle,
          ) ??
          avatarOverlayPillMaterialModuleParam2.formatMessage(
            {
              id: "composer.computerUseAppApproval.title.chatgpt",
              defaultMessage: "Allow ChatGPT to use {appDisplayName}?",
              description:
                "Title asking whether ChatGPT may use an app through Computer Use",
            },
            {
              appDisplayName:
                avatarOverlayPillMaterialModuleValue46.appDisplayName,
            },
          );
        avatarOverlayPillMaterialModuleValue30 =
          avatarOverlayPillMaterialModuleParam2.formatMessage(
            avatarOverlayPillMaterialModuleValue14.allow,
          );
        avatarOverlayPillMaterialModuleValue31 = "•";
        break;
      }
      let avatarOverlayPillMaterialModuleValue47 =
          avatarOverlayPillMaterialModuleHelper19(
            elicitation.approval.connector_name,
          ) ??
          avatarOverlayPillMaterialModuleHelper16(
            elicitation.approval.connector_id,
          ) ??
          avatarOverlayPillMaterialModuleValue25,
        avatarOverlayPillMaterialModuleValue48 =
          avatarOverlayPillMaterialModuleHelper8(elicitation.message);
      avatarOverlayPillMaterialModuleValue26 =
        avatarOverlayPillMaterialModuleValue48 == null
          ? avatarOverlayPillMaterialModuleParam2.formatMessage(
              avatarOverlayPillMaterialModuleValue14.allowTarget,
              {
                target: avatarOverlayPillMaterialModuleValue47,
              },
            )
          : avatarOverlayPillMaterialModuleParam2.formatMessage(
              avatarOverlayPillMaterialModuleValue14.allowTarget,
              {
                target: avatarOverlayPillMaterialModuleValue48,
              },
            );
      avatarOverlayPillMaterialModuleValue27 =
        avatarOverlayPillMaterialModuleValue47;
      avatarOverlayPillMaterialModuleValue28 =
        avatarOverlayPillMaterialModuleHelper19(elicitation.subtitle) ??
        avatarOverlayPillMaterialModuleHelper9(
          elicitation.approval.tool_params,
        ) ??
        avatarOverlayPillMaterialModuleHelper19(elicitation.message);
      break;
    }
    case "toolSuggestion": {
      let avatarOverlayPillMaterialModuleValue66 =
        avatarOverlayPillMaterialModuleHelper19(
          elicitation.suggestion.tool_name,
        ) ??
        avatarOverlayPillMaterialModuleHelper16(
          elicitation.suggestion.tool_id,
        ) ??
        avatarOverlayPillMaterialModuleParam2.formatMessage(
          avatarOverlayPillMaterialModuleValue14.tool,
        );
      avatarOverlayPillMaterialModuleValue26 =
        elicitation.suggestion.suggest_type === "enable"
          ? avatarOverlayPillMaterialModuleParam2.formatMessage(
              avatarOverlayPillMaterialModuleValue14.enableTool,
              {
                toolName: avatarOverlayPillMaterialModuleValue66,
              },
            )
          : avatarOverlayPillMaterialModuleParam2.formatMessage(
              avatarOverlayPillMaterialModuleValue14.installTool,
              {
                toolName: avatarOverlayPillMaterialModuleValue66,
              },
            );
      avatarOverlayPillMaterialModuleValue27 =
        elicitation.suggestion.tool_type === "connector"
          ? avatarOverlayPillMaterialModuleParam2.formatMessage(
              avatarOverlayPillMaterialModuleValue14.connector,
            )
          : avatarOverlayPillMaterialModuleParam2.formatMessage(
              avatarOverlayPillMaterialModuleValue14.plugin,
            );
      avatarOverlayPillMaterialModuleValue28 =
        avatarOverlayPillMaterialModuleHelper19(
          elicitation.suggestion.suggest_reason,
        );
      break;
    }
    case "connectorAuth": {
      let avatarOverlayPillMaterialModuleValue52 =
          avatarOverlayPillMaterialModuleHelper19(
            elicitation.connector.connector_name,
          ) ??
          avatarOverlayPillMaterialModuleHelper16(
            elicitation.connector.connector_id,
          ) ??
          avatarOverlayPillMaterialModuleValue25,
        avatarOverlayPillMaterialModuleValue53 =
          elicitation.connector.auth_reason;
      avatarOverlayPillMaterialModuleValue26 =
        avatarOverlayPillMaterialModuleValue53 === "missing_link"
          ? avatarOverlayPillMaterialModuleParam2.formatMessage(
              avatarOverlayPillMaterialModuleValue14.connectTarget,
              {
                target: avatarOverlayPillMaterialModuleValue52,
              },
            )
          : avatarOverlayPillMaterialModuleValue53 === "oauth_upgrade_required"
            ? avatarOverlayPillMaterialModuleParam2.formatMessage(
                avatarOverlayPillMaterialModuleValue14.additionalAccessTarget,
                {
                  target: avatarOverlayPillMaterialModuleValue52,
                },
              )
            : avatarOverlayPillMaterialModuleParam2.formatMessage(
                avatarOverlayPillMaterialModuleValue14.reconnectTarget,
                {
                  target: avatarOverlayPillMaterialModuleValue52,
                },
              );
      avatarOverlayPillMaterialModuleValue27 =
        avatarOverlayPillMaterialModuleValue52;
      avatarOverlayPillMaterialModuleValue28 =
        avatarOverlayPillMaterialModuleHelper19(elicitation.subtitle) ??
        avatarOverlayPillMaterialModuleHelper19(elicitation.message) ??
        avatarOverlayPillMaterialModuleHelper10(elicitation.url);
      avatarOverlayPillMaterialModuleValue29 = [
        {
          intent: "open",
          label:
            avatarOverlayPillMaterialModuleValue53 === "missing_link"
              ? avatarOverlayPillMaterialModuleParam2.formatMessage(
                  avatarOverlayPillMaterialModuleValue14.connect,
                )
              : avatarOverlayPillMaterialModuleValue53 ===
                  "oauth_upgrade_required"
                ? avatarOverlayPillMaterialModuleParam2.formatMessage(
                    avatarOverlayPillMaterialModuleValue14.updateAccess,
                  )
                : avatarOverlayPillMaterialModuleParam2.formatMessage(
                    avatarOverlayPillMaterialModuleValue14.reconnect,
                  ),
          tone: "primary",
        },
      ];
      break;
    }
    case "urlAction":
      avatarOverlayPillMaterialModuleValue27 =
        avatarOverlayPillMaterialModuleHelper16(elicitation.serverName) ??
        avatarOverlayPillMaterialModuleHelper19(elicitation.serverName) ??
        avatarOverlayPillMaterialModuleValue25;
      avatarOverlayPillMaterialModuleValue26 =
        avatarOverlayPillMaterialModuleParam2.formatMessage(
          avatarOverlayPillMaterialModuleValue14.openLink,
        );
      avatarOverlayPillMaterialModuleValue28 =
        avatarOverlayPillMaterialModuleHelper19(elicitation.subtitle) ??
        avatarOverlayPillMaterialModuleHelper10(elicitation.url) ??
        avatarOverlayPillMaterialModuleHelper19(elicitation.message);
      avatarOverlayPillMaterialModuleValue29 = [
        {
          intent: "open",
          label: avatarOverlayPillMaterialModuleParam2.formatMessage(
            avatarOverlayPillMaterialModuleValue14.openLink,
          ),
          tone: "primary",
        },
      ];
      break;
    case "generic":
      avatarOverlayPillMaterialModuleValue26 =
        avatarOverlayPillMaterialModuleHelper12({
          message: elicitation.message,
          metadata: elicitation.metadata,
        }) ??
        avatarOverlayPillMaterialModuleParam2.formatMessage(
          avatarOverlayPillMaterialModuleValue14.allowTarget,
          {
            target: avatarOverlayPillMaterialModuleValue25,
          },
        );
      avatarOverlayPillMaterialModuleValue28 =
        avatarOverlayPillMaterialModuleHelper19(elicitation.subtitle) ??
        avatarOverlayPillMaterialModuleHelper9(elicitation.toolParams) ??
        avatarOverlayPillMaterialModuleHelper19(elicitation.message);
      break;
  }
  elicitation.riskLevel === "high" &&
    (avatarOverlayPillMaterialModuleValue29 = [
      {
        intent: "open",
        label: avatarOverlayPillMaterialModuleParam2.formatMessage(
          avatarOverlayPillMaterialModuleValue14.review,
        ),
        tone: "primary",
      },
    ]);
  let avatarOverlayPillMaterialModuleValue32 =
      avatarOverlayPillMaterialModuleParam2.formatMessage(
        avatarOverlayPillMaterialModuleValue14.allowTarget,
        {
          target: avatarOverlayPillMaterialModuleValue27,
        },
      ),
    avatarOverlayPillMaterialModuleValue33 = {
      ariaLabel: avatarOverlayPillMaterialModuleValue32,
      intent: "mcp-elicitation",
      label:
        avatarOverlayPillMaterialModuleValue30 ??
        avatarOverlayPillMaterialModuleValue32,
      mcpElicitationAction: "accept",
      tone: "primary",
    };
  return {
    kind: "tool",
    requestId: avatarOverlayPillMaterialModuleParam1.requestId,
    operation: avatarOverlayPillMaterialModuleValue26,
    target: avatarOverlayPillMaterialModuleValue27,
    summary: avatarOverlayPillMaterialModuleValue28,
    notificationTitleSeparator: avatarOverlayPillMaterialModuleValue31,
    title: avatarOverlayPillMaterialModuleValue26,
    actions:
      avatarOverlayPillMaterialModuleValue29 ??
      (avatarOverlayPillMaterialModuleParam3
        ? [
            {
              intent: "mcp-elicitation",
              label: avatarOverlayPillMaterialModuleParam2.formatMessage(
                avatarOverlayPillMaterialModuleValue14.cancel,
              ),
              mcpElicitationAction: "decline",
              tone: "secondary",
            },
            avatarOverlayPillMaterialModuleValue33,
          ]
        : [avatarOverlayPillMaterialModuleValue33]),
  };
}
function avatarOverlayPillMaterialModuleHelper7(
  avatarOverlayPillMaterialModuleParam47,
) {
  return {
    network: avatarOverlayPillMaterialModuleParam47.network ?? undefined,
    fileSystem: avatarOverlayPillMaterialModuleParam47.fileSystem ?? undefined,
  };
}
function avatarOverlayPillMaterialModuleHelper8(
  avatarOverlayPillMaterialModuleParam39,
) {
  let avatarOverlayPillMaterialModuleValue101 =
    /\brun\s+tool\s+"([^"]+)"/i.exec(avatarOverlayPillMaterialModuleParam39);
  if (avatarOverlayPillMaterialModuleValue101?.[1] != null)
    return avatarOverlayPillMaterialModuleHelper19(
      avatarOverlayPillMaterialModuleValue101[1],
    );
  let avatarOverlayPillMaterialModuleValue102 = /\baccess\s+(.+?)\?*$/i.exec(
    avatarOverlayPillMaterialModuleParam39,
  );
  return avatarOverlayPillMaterialModuleValue102?.[1] == null
    ? null
    : avatarOverlayPillMaterialModuleHelper19(
        avatarOverlayPillMaterialModuleValue102[1],
      );
}
function avatarOverlayPillMaterialModuleHelper9(
  avatarOverlayPillMaterialModuleParam40,
) {
  if (avatarOverlayPillMaterialModuleParam40 == null) return null;
  let avatarOverlayPillMaterialModuleValue105 = Object.entries(
    avatarOverlayPillMaterialModuleParam40,
  )[0];
  if (avatarOverlayPillMaterialModuleValue105 == null) return null;
  let [
      avatarOverlayPillMaterialModuleValue106,
      avatarOverlayPillMaterialModuleValue107,
    ] = avatarOverlayPillMaterialModuleValue105,
    avatarOverlayPillMaterialModuleValue108 =
      avatarOverlayPillMaterialModuleHelper11(
        avatarOverlayPillMaterialModuleValue107,
      );
  return avatarOverlayPillMaterialModuleHelper19(
    avatarOverlayPillMaterialModuleValue108 == null
      ? avatarOverlayPillMaterialModuleValue106
      : `${avatarOverlayPillMaterialModuleValue106}: ${avatarOverlayPillMaterialModuleValue108}`,
  );
}
function avatarOverlayPillMaterialModuleHelper10(
  avatarOverlayPillMaterialModuleParam41,
) {
  try {
    let avatarOverlayPillMaterialModuleValue118 = new URL(
        avatarOverlayPillMaterialModuleParam41,
      ),
      avatarOverlayPillMaterialModuleValue119 =
        avatarOverlayPillMaterialModuleValue118.pathname === "/"
          ? ""
          : avatarOverlayPillMaterialModuleValue118.pathname;
    return avatarOverlayPillMaterialModuleHelper20(
      `${avatarOverlayPillMaterialModuleValue118.hostname}${avatarOverlayPillMaterialModuleValue119}`,
    );
  } catch {
    return avatarOverlayPillMaterialModuleHelper20(
      avatarOverlayPillMaterialModuleParam41,
    );
  }
}
function avatarOverlayPillMaterialModuleHelper11(
  avatarOverlayPillMaterialModuleParam36,
) {
  return typeof avatarOverlayPillMaterialModuleParam36 == "string"
    ? avatarOverlayPillMaterialModuleHelper20(
        avatarOverlayPillMaterialModuleParam36,
      )
    : typeof avatarOverlayPillMaterialModuleParam36 == "number" ||
        typeof avatarOverlayPillMaterialModuleParam36 == "boolean"
      ? String(avatarOverlayPillMaterialModuleParam36)
      : avatarOverlayPillMaterialModuleParam36 == null
        ? null
        : avatarOverlayPillMaterialModuleHelper20(
            JSON.stringify(avatarOverlayPillMaterialModuleParam36) ?? "",
          );
}
function avatarOverlayPillMaterialModuleHelper12({ message, metadata }) {
  let avatarOverlayPillMaterialModuleValue116 =
      avatarOverlayPillMaterialModuleHelper14(metadata),
    avatarOverlayPillMaterialModuleValue117 =
      avatarOverlayPillMaterialModuleHelper13(
        message,
        avatarOverlayPillMaterialModuleValue116,
      );
  return avatarOverlayPillMaterialModuleValue116 != null &&
    avatarOverlayPillMaterialModuleHelper15(
      avatarOverlayPillMaterialModuleValue117,
    )
    ? avatarOverlayPillMaterialModuleValue116
    : avatarOverlayPillMaterialModuleHelper19(
        avatarOverlayPillMaterialModuleValue117,
      );
}
function avatarOverlayPillMaterialModuleHelper13(
  avatarOverlayPillMaterialModuleParam37,
  avatarOverlayPillMaterialModuleParam38,
) {
  let avatarOverlayPillMaterialModuleValue98 =
    avatarOverlayPillMaterialModuleParam37.trim();
  if (avatarOverlayPillMaterialModuleParam38 == null)
    return avatarOverlayPillMaterialModuleValue98;
  let avatarOverlayPillMaterialModuleValue99 = `Reason: ${avatarOverlayPillMaterialModuleParam38}`;
  if (
    !avatarOverlayPillMaterialModuleValue98.endsWith(
      avatarOverlayPillMaterialModuleValue99,
    )
  )
    return avatarOverlayPillMaterialModuleValue98;
  let avatarOverlayPillMaterialModuleValue100 =
    avatarOverlayPillMaterialModuleValue98
      .slice(0, -avatarOverlayPillMaterialModuleValue99.length)
      .trim();
  return avatarOverlayPillMaterialModuleValue100.length > 0
    ? avatarOverlayPillMaterialModuleValue100
    : avatarOverlayPillMaterialModuleValue98;
}
function avatarOverlayPillMaterialModuleHelper14(
  avatarOverlayPillMaterialModuleParam42,
) {
  if (
    avatarOverlayPillMaterialModuleParam42 == null ||
    Array.isArray(avatarOverlayPillMaterialModuleParam42) ||
    typeof avatarOverlayPillMaterialModuleParam42 != "object"
  )
    return null;
  let avatarOverlayPillMaterialModuleValue109 =
    avatarOverlayPillMaterialModuleParam42.reason;
  return typeof avatarOverlayPillMaterialModuleValue109 == "string"
    ? avatarOverlayPillMaterialModuleHelper19(
        avatarOverlayPillMaterialModuleValue109,
      )
    : null;
}
function avatarOverlayPillMaterialModuleHelper15(
  avatarOverlayPillMaterialModuleParam43,
) {
  let avatarOverlayPillMaterialModuleValue110 =
    avatarOverlayPillMaterialModuleParam43.trim().toLowerCase();
  return (
    avatarOverlayPillMaterialModuleValue110 ===
      "tool call needs your approval." ||
    avatarOverlayPillMaterialModuleValue110 === "tool call needs your approval"
  );
}
function avatarOverlayPillMaterialModuleHelper16(
  avatarOverlayPillMaterialModuleParam35,
) {
  let avatarOverlayPillMaterialModuleValue94 =
    avatarOverlayPillMaterialModuleParam35
      ?.trim()
      .replace(/^connector[_-]/, "")
      .split(/[_-]+/)
      .filter(Boolean);
  return avatarOverlayPillMaterialModuleValue94 == null ||
    avatarOverlayPillMaterialModuleValue94.length === 0
    ? null
    : avatarOverlayPillMaterialModuleValue94
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ");
}
function avatarOverlayPillMaterialModuleHelper17(
  avatarOverlayPillMaterialModuleParam27,
) {
  let avatarOverlayPillMaterialModuleValue69 = 0,
    avatarOverlayPillMaterialModuleValue70 = 0;
  for (let avatarOverlayPillMaterialModuleValue78 of Object.values(
    avatarOverlayPillMaterialModuleParam27,
  ))
    switch (avatarOverlayPillMaterialModuleValue78?.type) {
      case "add":
        avatarOverlayPillMaterialModuleValue69 +=
          avatarOverlayPillMaterialModuleHelper18(
            avatarOverlayPillMaterialModuleValue78.content,
          );
        break;
      case "delete":
        avatarOverlayPillMaterialModuleValue70 +=
          avatarOverlayPillMaterialModuleHelper18(
            avatarOverlayPillMaterialModuleValue78.content,
          );
        break;
      case "update":
        for (let avatarOverlayPillMaterialModuleValue103 of avatarOverlayPillMaterialModuleValue78.unified_diff.split(
          /\r?\n/,
        ))
          avatarOverlayPillMaterialModuleValue103.startsWith("+++") ||
            avatarOverlayPillMaterialModuleValue103.startsWith("---") ||
            (avatarOverlayPillMaterialModuleValue103.startsWith("+")
              ? (avatarOverlayPillMaterialModuleValue69 += 1)
              : avatarOverlayPillMaterialModuleValue103.startsWith("-") &&
                (avatarOverlayPillMaterialModuleValue70 += 1));
        break;
    }
  return {
    additions: avatarOverlayPillMaterialModuleValue69,
    deletions: avatarOverlayPillMaterialModuleValue70,
  };
}
function avatarOverlayPillMaterialModuleHelper18(
  avatarOverlayPillMaterialModuleParam44,
) {
  if (avatarOverlayPillMaterialModuleParam44.length === 0) return 0;
  let avatarOverlayPillMaterialModuleValue114 =
    avatarOverlayPillMaterialModuleParam44.split(/\r?\n/);
  return avatarOverlayPillMaterialModuleValue114.at(-1) === ""
    ? avatarOverlayPillMaterialModuleValue114.length - 1
    : avatarOverlayPillMaterialModuleValue114.length;
}
function avatarOverlayPillMaterialModuleHelper19(
  avatarOverlayPillMaterialModuleParam46,
) {
  let avatarOverlayPillMaterialModuleValue121 =
    avatarOverlayPillMaterialModuleParam46?.replace(/\s+/g, " ").trim() ?? "";
  return avatarOverlayPillMaterialModuleValue121.length === 0
    ? null
    : avatarOverlayPillMaterialModuleValue121;
}
function avatarOverlayPillMaterialModuleHelper20(
  avatarOverlayPillMaterialModuleParam45,
) {
  let avatarOverlayPillMaterialModuleValue120 =
    avatarOverlayPillMaterialModuleHelper19(
      avatarOverlayPillMaterialModuleParam45,
    );
  return avatarOverlayPillMaterialModuleValue120 == null
    ? null
    : avatarOverlayPillMaterialModuleValue120.length <= 48
      ? avatarOverlayPillMaterialModuleValue120
      : `${avatarOverlayPillMaterialModuleValue120.slice(0, 47)}…`;
}
var avatarOverlayPillMaterialModuleValue14,
  avatarOverlayPillMaterialModuleF = rolldownRuntimeN(() => {
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
    appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Zt();
    appInitialAvatarOverlayCompositionSurfaceAppMainNewThreadPanelPageOnboardingPageKgjrczv7Yt();
    avatarOverlayPillMaterialModuleValue14 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4A(
        {
          allow: {
            id: "avatarOverlay.waitingRequest.allow",
            defaultMessage: "Allow",
            description:
              "Compact action button label for allowing a waiting request",
          },
          allowNetwork: {
            id: "avatarOverlay.waitingRequest.allowNetwork",
            defaultMessage: "Allow network",
            description: "Compact title for a waiting network access request",
          },
          allowOnce: {
            id: "avatarOverlay.waitingRequest.allowOnce",
            defaultMessage: "Allow once",
            description:
              "Accessible label for allowing a waiting request for the current turn",
          },
          allowTarget: {
            id: "avatarOverlay.waitingRequest.allowTarget",
            defaultMessage: "Allow {target}",
            description:
              "Compact action button label or title for allowing access to a named connector, plugin, tool, or server",
          },
          apply: {
            id: "avatarOverlay.waitingRequest.apply",
            defaultMessage: "Apply",
            description:
              "Compact action button label for applying a file change request",
          },
          applyChanges: {
            id: "avatarOverlay.waitingRequest.applyChanges",
            defaultMessage: "Apply changes",
            description:
              "Compact title for a waiting file change approval request",
          },
          askQuestion: {
            id: "avatarOverlay.waitingRequest.askQuestion",
            defaultMessage: "Ask a question",
            description:
              "Compact title for a waiting user-input question request",
          },
          answerTarget: {
            id: "avatarOverlay.waitingRequest.answerTarget",
            defaultMessage: "Answer {target}",
            description:
              "Compact title for answering a named tool server request",
          },
          command: {
            id: "avatarOverlay.waitingRequest.command",
            defaultMessage: "Command",
            description:
              "Fallback compact summary for a waiting command approval request",
          },
          cancel: {
            id: "avatarOverlay.waitingRequest.cancel",
            defaultMessage: "Cancel",
            description:
              "Compact action button label for cancelling a waiting request",
          },
          connector: {
            id: "avatarOverlay.waitingRequest.connector",
            defaultMessage: "Connector",
            description:
              "Compact label for a suggested connector waiting request",
          },
          connectTarget: {
            id: "avatarOverlay.waitingRequest.connectTarget",
            defaultMessage: "Connect {target}",
            description: "Compact title for connecting a named connector",
          },
          connect: {
            id: "avatarOverlay.waitingRequest.connect",
            defaultMessage: "Connect",
            description:
              "Compact action button label for connecting a connector",
          },
          continue: {
            id: "avatarOverlay.waitingRequest.continue",
            defaultMessage: "Continue",
            description:
              "Compact action button label for continuing a connector flow",
          },
          deny: {
            id: "avatarOverlay.waitingRequest.deny",
            defaultMessage: "Deny",
            description:
              "Compact action button label for denying a waiting request",
          },
          enableTool: {
            id: "avatarOverlay.waitingRequest.enableTool",
            defaultMessage: "Enable {toolName}",
            description:
              "Compact title for enabling a named connector or plugin",
          },
          fileAccess: {
            id: "avatarOverlay.waitingRequest.fileAccess",
            defaultMessage: "File access",
            description: "Compact title for a waiting file permission request",
          },
          fileCount: {
            id: "avatarOverlay.waitingRequest.fileCount",
            defaultMessage: "{count, plural, one {# file} other {# files}}",
            description:
              "Compact file count used in a waiting patch request accessibility summary",
          },
          installTool: {
            id: "avatarOverlay.waitingRequest.installTool",
            defaultMessage: "Install {toolName}",
            description:
              "Compact title for installing a named connector or plugin",
          },
          implementPlan: {
            id: "avatarOverlay.waitingRequest.implementPlan",
            defaultMessage: "Implement plan",
            description:
              "Compact action button label for starting a proposed plan",
          },
          networkAccess: {
            id: "avatarOverlay.waitingRequest.networkAccess",
            defaultMessage: "Network access",
            description:
              "Compact title for a waiting network permission request",
          },
          openLink: {
            id: "avatarOverlay.waitingRequest.openLink",
            defaultMessage: "Open link",
            description:
              "Compact title or action label for a waiting URL action request",
          },
          oneFileChanged: {
            id: "avatarOverlay.waitingRequest.oneFileChanged",
            defaultMessage: "1 file changed",
            description:
              "Fallback compact summary for a waiting file change approval request",
          },
          option: {
            id: "avatarOverlay.waitingRequest.option",
            defaultMessage: "Option",
            description: "Fallback compact label for a waiting question option",
          },
          plan: {
            id: "avatarOverlay.waitingRequest.plan",
            defaultMessage: "Plan",
            description:
              "Compact title for a waiting plan implementation request",
          },
          plugin: {
            id: "avatarOverlay.waitingRequest.plugin",
            defaultMessage: "Plugin",
            description: "Compact label for a suggested plugin waiting request",
          },
          review: {
            id: "avatarOverlay.waitingRequest.review",
            defaultMessage: "Review",
            description:
              "Compact action button label for reviewing a waiting request",
          },
          reviewCommand: {
            id: "avatarOverlay.waitingRequest.reviewCommand",
            defaultMessage: "Review command",
            description: "Compact title for a waiting command approval request",
          },
          additionalAccessTarget: {
            id: "avatarOverlay.waitingRequest.moreAccessTarget",
            defaultMessage: "ChatGPT needs more {target} access",
            description:
              "Compact title for granting additional access to a named connector",
          },
          reconnectTarget: {
            id: "avatarOverlay.waitingRequest.reconnectTarget",
            defaultMessage: "Reconnect {target}",
            description:
              "Compact title or action label for reconnecting a named connector",
          },
          reconnect: {
            id: "avatarOverlay.waitingRequest.reconnect",
            defaultMessage: "Reconnect",
            description:
              "Compact action button label for reconnecting expired connector credentials",
          },
          runCommand: {
            id: "avatarOverlay.waitingRequest.runCommand",
            defaultMessage: "Run command",
            description:
              "Compact operation label for a waiting command approval request",
          },
          runOnce: {
            id: "avatarOverlay.waitingRequest.runOnce",
            defaultMessage: "Run once",
            description:
              "Compact action button label for running a command once",
          },
          updateAccess: {
            id: "avatarOverlay.waitingRequest.updateAccess",
            defaultMessage: "Update access",
            description:
              "Compact action button label for updating connector permissions",
          },
          tool: {
            id: "avatarOverlay.waitingRequest.tool",
            defaultMessage: "tool",
            description: "Fallback compact label for a suggested tool",
          },
          toolServer: {
            id: "avatarOverlay.waitingRequest.toolServer",
            defaultMessage: "Tool server",
            description: "Fallback compact label for an unnamed tool server",
          },
        },
      );
  });
export function avatarOverlayPillMaterialModuleS({
  includeCompactWaitingRequests,
  includeMcpElicitationCancelAction = false,
  intl,
  localConversations,
  excludedConversationId,
  remoteTasks,
}) {
  let avatarOverlayPillMaterialModuleValue64 = [],
    avatarOverlayPillMaterialModuleValue65 = new Set();
  for (let avatarOverlayPillMaterialModuleValue92 of localConversations) {
    let avatarOverlayPillMaterialModuleValue93 =
      avatarOverlayPillMaterialModuleHelper21({
        conversation: avatarOverlayPillMaterialModuleValue92,
        includeCompactWaitingRequests,
        includeMcpElicitationCancelAction,
        intl,
        excludedConversationId,
      });
    avatarOverlayPillMaterialModuleValue93 == null ||
      avatarOverlayPillMaterialModuleValue65.has(
        avatarOverlayPillMaterialModuleValue93.key,
      ) ||
      (avatarOverlayPillMaterialModuleValue65.add(
        avatarOverlayPillMaterialModuleValue93.key,
      ),
      avatarOverlayPillMaterialModuleValue64.push(
        avatarOverlayPillMaterialModuleValue93,
      ));
  }
  for (let avatarOverlayPillMaterialModuleValue123 of remoteTasks) {
    let avatarOverlayPillMaterialModuleValue126 =
      avatarOverlayPillMaterialModuleHelper22(
        avatarOverlayPillMaterialModuleValue123,
        intl,
      );
    avatarOverlayPillMaterialModuleValue65.has(
      avatarOverlayPillMaterialModuleValue126.key,
    ) ||
      (avatarOverlayPillMaterialModuleValue65.add(
        avatarOverlayPillMaterialModuleValue126.key,
      ),
      avatarOverlayPillMaterialModuleValue64.push(
        avatarOverlayPillMaterialModuleValue126,
      ));
  }
  return avatarOverlayPillMaterialModuleValue64;
}
function avatarOverlayPillMaterialModuleHelper21({
  conversation,
  includeCompactWaitingRequests,
  includeMcpElicitationCancelAction,
  intl,
  excludedConversationId,
}) {
  if (
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eBr(
      conversation,
    )
  )
    return null;
  let avatarOverlayPillMaterialModuleValue38 = conversation.hostId ?? "local",
    avatarOverlayPillMaterialModuleValue39 =
      avatarOverlayPillMaterialModuleValue38 === "local"
        ? "local"
        : "remote-host",
    avatarOverlayPillMaterialModuleValue40 =
      avatarOverlayPillMaterialModuleHelper27(conversation),
    avatarOverlayPillMaterialModuleValue41 =
      conversation.threadSource === "automation" || false,
    avatarOverlayPillMaterialModuleValue42 =
      avatarOverlayPillMaterialModuleValue41
        ? avatarOverlayPillMaterialModuleHelper24(conversation)
        : avatarOverlayPillMaterialModuleHelper23(conversation, intl),
    avatarOverlayPillMaterialModuleValue43 =
      includeCompactWaitingRequests &&
      avatarOverlayPillMaterialModuleValue40 === "waiting"
        ? appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eH(
            conversation,
          )
        : null;
  return {
    actionPath: "/local/" + conversation.id,
    controlTarget: {
      type: "app-server-conversation",
      conversationId: conversation.id,
    },
    hostId: avatarOverlayPillMaterialModuleValue38,
    key:
      avatarOverlayPillMaterialModuleValue39 +
      ":" +
      avatarOverlayPillMaterialModuleValue38 +
      ":" +
      conversation.id,
    localConversationId: conversation.id,
    source: avatarOverlayPillMaterialModuleValue39,
    showInNotificationTray:
      !avatarOverlayPillMaterialModuleValue41 ||
      avatarOverlayPillMaterialModuleValue40 === "waiting" ||
      avatarOverlayPillMaterialModuleValue40 === "failed" ||
      avatarOverlayPillMaterialModuleValue42 != null,
    sortAtMs:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eDr(
        conversation,
      )?.turnStartedAtMs ?? conversation.updatedAt,
    status: avatarOverlayPillMaterialModuleValue40,
    subtitle: avatarOverlayPillMaterialModuleValue42,
    title:
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eLt(
        conversation,
      ) ?? intl.formatMessage(avatarOverlayPillMaterialModuleValue15.newThread),
    turnKey: String(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eOr(
        conversation,
      ),
    ),
    updatedAtMs: conversation.updatedAt,
    waitingRequest: _e(avatarOverlayPillMaterialModuleValue43, intl, {
      includeMcpElicitationCancelAction,
      planStartCollaborationMode: {
        mode: "default",
        settings: {
          ...conversation.latestCollaborationMode.settings,
          developer_instructions: null,
        },
      },
    }),
  };
}
function avatarOverlayPillMaterialModuleHelper22(
  avatarOverlayPillMaterialModuleParam23,
  avatarOverlayPillMaterialModuleParam24,
) {
  let avatarOverlayPillMaterialModuleValue62 =
      (avatarOverlayPillMaterialModuleParam23.updated_at ??
        avatarOverlayPillMaterialModuleParam23.created_at ??
        0) * 1e3,
    avatarOverlayPillMaterialModuleValue63 =
      avatarOverlayPillMaterialModuleParam23.task_status_display
        ?.latest_turn_status_display?.turn_id ?? null;
  return {
    actionPath: "/remote/" + avatarOverlayPillMaterialModuleParam23.id,
    controlTarget:
      avatarOverlayPillMaterialModuleValue63 == null
        ? null
        : {
            type: "cloud-task",
            taskId: avatarOverlayPillMaterialModuleParam23.id,
            turnId: avatarOverlayPillMaterialModuleValue63,
          },
    hostId: null,
    key: "cloud:" + avatarOverlayPillMaterialModuleParam23.id,
    localConversationId: null,
    source: "cloud",
    showInNotificationTray: true,
    sortAtMs: avatarOverlayPillMaterialModuleValue62,
    status: avatarOverlayPillMaterialModuleHelper28(
      avatarOverlayPillMaterialModuleParam23,
    ),
    subtitle: null,
    title:
      avatarOverlayPillMaterialModuleParam23.title?.trim() ||
      avatarOverlayPillMaterialModuleParam24.formatMessage(
        avatarOverlayPillMaterialModuleValue15.newThread,
      ),
    turnKey: avatarOverlayPillMaterialModuleValue63,
    updatedAtMs: avatarOverlayPillMaterialModuleValue62,
    waitingRequest: null,
  };
}
function avatarOverlayPillMaterialModuleHelper23(
  avatarOverlayPillMaterialModuleParam52,
  avatarOverlayPillMaterialModuleParam53,
) {
  return avatarOverlayPillMaterialModuleC(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eDr(
      avatarOverlayPillMaterialModuleParam52,
    )?.items ?? [],
    avatarOverlayPillMaterialModuleParam53,
  );
}
function avatarOverlayPillMaterialModuleC(
  avatarOverlayPillMaterialModuleParam19,
  avatarOverlayPillMaterialModuleParam20,
) {
  for (
    let avatarOverlayPillMaterialModuleValue71 =
      avatarOverlayPillMaterialModuleParam19.length - 1;
    avatarOverlayPillMaterialModuleValue71 >= 0;
    --avatarOverlayPillMaterialModuleValue71
  ) {
    let avatarOverlayPillMaterialModuleValue73 =
      avatarOverlayPillMaterialModuleParam19[
        avatarOverlayPillMaterialModuleValue71
      ];
    if (avatarOverlayPillMaterialModuleValue73?.type === "reasoning")
      for (
        let avatarOverlayPillMaterialModuleValue115 =
          avatarOverlayPillMaterialModuleValue73.summary.length - 1;
        avatarOverlayPillMaterialModuleValue115 >= 0;
        --avatarOverlayPillMaterialModuleValue115
      ) {
        let avatarOverlayPillMaterialModuleValue125 =
          avatarOverlayPillMaterialModuleHelper26(
            avatarOverlayPillMaterialModuleValue73.summary[
              avatarOverlayPillMaterialModuleValue115
            ],
          );
        if (avatarOverlayPillMaterialModuleValue125 != null)
          return avatarOverlayPillMaterialModuleValue125;
      }
    if (avatarOverlayPillMaterialModuleValue73?.type === "agentMessage") {
      let avatarOverlayPillMaterialModuleValue95 =
          avatarOverlayPillMaterialModuleHelper1(
            avatarOverlayPillMaterialModuleValue73.text,
          ),
        avatarOverlayPillMaterialModuleValue96 =
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eXr(
            avatarOverlayPillMaterialModuleValue95,
          ),
        avatarOverlayPillMaterialModuleValue97 =
          avatarOverlayPillMaterialModuleValue96?.decision === "DONT_NOTIFY"
            ? null
            : avatarOverlayPillMaterialModuleHelper26(
                avatarOverlayPillMaterialModuleValue96?.notificationMessage ??
                  avatarOverlayPillMaterialModuleValue96?.visibleText ??
                  avatarOverlayPillMaterialModuleValue95,
              );
      if (avatarOverlayPillMaterialModuleValue97 != null)
        return avatarOverlayPillMaterialModuleValue97;
    }
  }
  for (
    let avatarOverlayPillMaterialModuleValue122 =
      avatarOverlayPillMaterialModuleParam19.length - 1;
    avatarOverlayPillMaterialModuleValue122 >= 0;
    --avatarOverlayPillMaterialModuleValue122
  ) {
    let avatarOverlayPillMaterialModuleValue127 =
      avatarOverlayPillMaterialModuleHelper25(
        avatarOverlayPillMaterialModuleParam19[
          avatarOverlayPillMaterialModuleValue122
        ],
        avatarOverlayPillMaterialModuleParam20,
      );
    if (avatarOverlayPillMaterialModuleValue127 != null)
      return avatarOverlayPillMaterialModuleValue127;
  }
  return null;
}
function avatarOverlayPillMaterialModuleHelper24(
  avatarOverlayPillMaterialModuleParam28,
) {
  let avatarOverlayPillMaterialModuleValue72 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eDr(
      avatarOverlayPillMaterialModuleParam28,
    )?.items;
  if (avatarOverlayPillMaterialModuleValue72 == null) return null;
  for (
    let avatarOverlayPillMaterialModuleValue79 =
      avatarOverlayPillMaterialModuleValue72.length - 1;
    avatarOverlayPillMaterialModuleValue79 >= 0;
    --avatarOverlayPillMaterialModuleValue79
  ) {
    let avatarOverlayPillMaterialModuleValue86 =
      avatarOverlayPillMaterialModuleValue72[
        avatarOverlayPillMaterialModuleValue79
      ];
    if (avatarOverlayPillMaterialModuleValue86?.type !== "agentMessage")
      continue;
    let avatarOverlayPillMaterialModuleValue87 =
        avatarOverlayPillMaterialModuleHelper1(
          avatarOverlayPillMaterialModuleValue86.text,
        ),
      avatarOverlayPillMaterialModuleValue88 =
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eXr(
          avatarOverlayPillMaterialModuleValue87,
        );
    if (avatarOverlayPillMaterialModuleValue88 != null)
      return avatarOverlayPillMaterialModuleValue88.decision === "DONT_NOTIFY"
        ? null
        : avatarOverlayPillMaterialModuleHelper26(
            avatarOverlayPillMaterialModuleValue88.notificationMessage ??
              avatarOverlayPillMaterialModuleValue88.visibleText,
          );
    if (avatarOverlayPillMaterialModuleValue86.phase !== "commentary") {
      let avatarOverlayPillMaterialModuleValue128 =
        avatarOverlayPillMaterialModuleHelper26(
          avatarOverlayPillMaterialModuleValue87,
        );
      if (avatarOverlayPillMaterialModuleValue128 != null)
        return avatarOverlayPillMaterialModuleValue128;
    }
  }
  return null;
}
function avatarOverlayPillMaterialModuleHelper25(
  avatarOverlayPillMaterialModuleParam4,
  avatarOverlayPillMaterialModuleParam5,
) {
  if (avatarOverlayPillMaterialModuleParam4 == null) return null;
  if (avatarOverlayPillMaterialModuleParam4.type === "commandExecution") {
    let avatarOverlayPillMaterialModuleValue44 =
        avatarOverlayPillMaterialModuleParam4.commandActions.at(-1),
      avatarOverlayPillMaterialModuleValue45 =
        avatarOverlayPillMaterialModuleParam4.status === "inProgress";
    if (avatarOverlayPillMaterialModuleValue44 == null)
      return avatarOverlayPillMaterialModuleValue45
        ? avatarOverlayPillMaterialModuleParam5.formatMessage(
            avatarOverlayPillMaterialModuleValue15.runningCommand,
          )
        : avatarOverlayPillMaterialModuleParam5.formatMessage(
            avatarOverlayPillMaterialModuleValue15.ranCommand,
          );
    switch (avatarOverlayPillMaterialModuleValue44.type) {
      case "read":
        return avatarOverlayPillMaterialModuleValue45
          ? avatarOverlayPillMaterialModuleParam5.formatMessage(
              avatarOverlayPillMaterialModuleValue15.readingFile,
              {
                fileName: avatarOverlayPillMaterialModuleValue44.name,
              },
            )
          : avatarOverlayPillMaterialModuleParam5.formatMessage(
              avatarOverlayPillMaterialModuleValue15.readFile,
              {
                fileName: avatarOverlayPillMaterialModuleValue44.name,
              },
            );
      case "listFiles":
        return avatarOverlayPillMaterialModuleValue45
          ? avatarOverlayPillMaterialModuleParam5.formatMessage(
              avatarOverlayPillMaterialModuleValue15.listingFiles,
            )
          : avatarOverlayPillMaterialModuleParam5.formatMessage(
              avatarOverlayPillMaterialModuleValue15.listedFiles,
            );
      case "search": {
        let avatarOverlayPillMaterialModuleValue90 =
          avatarOverlayPillMaterialModuleHelper26(
            avatarOverlayPillMaterialModuleValue44.query ?? "",
          );
        return avatarOverlayPillMaterialModuleValue90 == null
          ? avatarOverlayPillMaterialModuleValue45
            ? avatarOverlayPillMaterialModuleParam5.formatMessage(
                avatarOverlayPillMaterialModuleValue15.searchingFiles,
              )
            : avatarOverlayPillMaterialModuleParam5.formatMessage(
                avatarOverlayPillMaterialModuleValue15.searchedFiles,
              )
          : avatarOverlayPillMaterialModuleValue45
            ? avatarOverlayPillMaterialModuleParam5.formatMessage(
                avatarOverlayPillMaterialModuleValue15.searchingQuery,
                {
                  query: avatarOverlayPillMaterialModuleValue90,
                },
              )
            : avatarOverlayPillMaterialModuleParam5.formatMessage(
                avatarOverlayPillMaterialModuleValue15.searchedQuery,
                {
                  query: avatarOverlayPillMaterialModuleValue90,
                },
              );
      }
      case "unknown":
        return avatarOverlayPillMaterialModuleValue45
          ? avatarOverlayPillMaterialModuleParam5.formatMessage(
              avatarOverlayPillMaterialModuleValue15.runningCommand,
            )
          : avatarOverlayPillMaterialModuleParam5.formatMessage(
              avatarOverlayPillMaterialModuleValue15.ranCommand,
            );
    }
  }
  if (avatarOverlayPillMaterialModuleParam4.type === "fileChange") {
    let avatarOverlayPillMaterialModuleValue104 =
      avatarOverlayPillMaterialModuleParam4.changes.length;
    return avatarOverlayPillMaterialModuleParam4.status === "inProgress"
      ? avatarOverlayPillMaterialModuleParam5.formatMessage(
          avatarOverlayPillMaterialModuleValue15.editingFiles,
          {
            fileCount: avatarOverlayPillMaterialModuleValue104,
          },
        )
      : avatarOverlayPillMaterialModuleParam5.formatMessage(
          avatarOverlayPillMaterialModuleValue15.editedFiles,
          {
            fileCount: avatarOverlayPillMaterialModuleValue104,
          },
        );
  }
  if (avatarOverlayPillMaterialModuleParam4.type === "mcpToolCall") {
    let avatarOverlayPillMaterialModuleValue84 =
        avatarOverlayPillMaterialModuleParam4.status === "inProgress",
      avatarOverlayPillMaterialModuleValue85 =
        avatarOverlayPillMaterialModuleHelper26(
          avatarOverlayPillMaterialModuleParam4.tool.replace(/[_-]+/g, " "),
        );
    return avatarOverlayPillMaterialModuleValue85 == null
      ? avatarOverlayPillMaterialModuleValue84
        ? avatarOverlayPillMaterialModuleParam5.formatMessage(
            avatarOverlayPillMaterialModuleValue15.callingTool,
          )
        : avatarOverlayPillMaterialModuleParam5.formatMessage(
            avatarOverlayPillMaterialModuleValue15.calledTool,
          )
      : avatarOverlayPillMaterialModuleValue84
        ? avatarOverlayPillMaterialModuleParam5.formatMessage(
            avatarOverlayPillMaterialModuleValue15.callingToolName,
            {
              toolName: avatarOverlayPillMaterialModuleValue85,
            },
          )
        : avatarOverlayPillMaterialModuleParam5.formatMessage(
            avatarOverlayPillMaterialModuleValue15.calledToolName,
            {
              toolName: avatarOverlayPillMaterialModuleValue85,
            },
          );
  }
  if (avatarOverlayPillMaterialModuleParam4.type === "webSearch") {
    let avatarOverlayPillMaterialModuleValue113 =
      avatarOverlayPillMaterialModuleHelper26(
        avatarOverlayPillMaterialModuleParam4.query,
      );
    return avatarOverlayPillMaterialModuleValue113 == null
      ? avatarOverlayPillMaterialModuleParam5.formatMessage(
          avatarOverlayPillMaterialModuleValue15.searchedWeb,
        )
      : avatarOverlayPillMaterialModuleParam5.formatMessage(
          avatarOverlayPillMaterialModuleValue15.searchedQuery,
          {
            query: avatarOverlayPillMaterialModuleValue113,
          },
        );
  }
  return null;
}
function avatarOverlayPillMaterialModuleHelper26(
  avatarOverlayPillMaterialModuleParam33,
) {
  let avatarOverlayPillMaterialModuleValue89 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eVt(
      avatarOverlayPillMaterialModuleParam33,
    )
      .replace(/^\s{0,3}#{1,6}\s+/g, "")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/__([^_]+)__/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/_([^_]+)_/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
  return avatarOverlayPillMaterialModuleValue89.length > 0
    ? avatarOverlayPillMaterialModuleValue89
    : null;
}
function avatarOverlayPillMaterialModuleHelper27(
  avatarOverlayPillMaterialModuleParam12,
) {
  let avatarOverlayPillMaterialModuleValue54 =
      avatarOverlayPillMaterialModuleParam12.resumeState === "needs_resume"
        ? avatarOverlayPillMaterialModuleParam12.threadRuntimeStatus
        : null,
    avatarOverlayPillMaterialModuleValue55 =
      avatarOverlayPillMaterialModuleParam12.resumeState === "needs_resume"
        ? avatarOverlayPillMaterialModuleValue54?.type === "active"
        : avatarOverlayPillMaterialModuleParam12.resumeState === "resuming" ||
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eDr(
            avatarOverlayPillMaterialModuleParam12,
          )?.status === "inProgress",
    avatarOverlayPillMaterialModuleValue56 =
      avatarOverlayPillMaterialModuleParam12.resumeState === "needs_resume"
        ? avatarOverlayPillMaterialModuleValue54?.type === "active" &&
          avatarOverlayPillMaterialModuleValue54.activeFlags.includes(
            "waitingOnUserInput",
          )
        : avatarOverlayPillMaterialModuleParam12.requests.some(
            (item) => item.method === "item/tool/requestUserInput",
          ),
    avatarOverlayPillMaterialModuleValue57 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eKr(
        avatarOverlayPillMaterialModuleParam12,
      ).some((item) =>
        item.items.some(
          (_item) => _item.type === "planImplementation" && !_item.isCompleted,
        ),
      ),
    avatarOverlayPillMaterialModuleValue58 =
      avatarOverlayPillMaterialModuleParam12.resumeState === "needs_resume"
        ? avatarOverlayPillMaterialModuleValue54?.type === "systemError"
        : appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eDr(
            avatarOverlayPillMaterialModuleParam12,
          )?.status === "failed";
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eY(
    avatarOverlayPillMaterialModuleParam12,
  ) ||
    avatarOverlayPillMaterialModuleValue56 ||
    avatarOverlayPillMaterialModuleValue57
    ? "waiting"
    : avatarOverlayPillMaterialModuleValue58
      ? "failed"
      : avatarOverlayPillMaterialModuleValue55
        ? "running"
        : avatarOverlayPillMaterialModuleParam12.hasUnreadTurn
          ? "review"
          : "idle";
}
function avatarOverlayPillMaterialModuleHelper28(
  avatarOverlayPillMaterialModuleParam34,
) {
  if (avatarOverlayPillMaterialModuleParam34.archived) return "idle";
  let avatarOverlayPillMaterialModuleValue91 =
    avatarOverlayPillMaterialModuleParam34.task_status_display
      ?.latest_turn_status_display?.turn_status;
  return avatarOverlayPillMaterialModuleValue91 === "failed" ||
    avatarOverlayPillMaterialModuleValue91 === "cancelled"
    ? "failed"
    : avatarOverlayPillMaterialModuleValue91 === "in_progress" ||
        avatarOverlayPillMaterialModuleValue91 === "pending"
      ? "running"
      : avatarOverlayPillMaterialModuleParam34.has_unread_turn
        ? "review"
        : "idle";
}
var avatarOverlayPillMaterialModuleValue15;
export const avatarOverlayPillMaterialModuleL = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4O();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eMr();
  avatarOverlayPillMaterialModuleValue13();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eYr();
  _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eYr();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eBt();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eUnderscore();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eN();
  avatarOverlayPillMaterialModuleF();
  avatarOverlayPillMaterialModuleValue15 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewDejrazf4A(
      {
        calledTool: {
          id: "avatarOverlay.session.calledTool",
          defaultMessage: "Called tool",
          description:
            "Avatar overlay activity subtitle for a completed generic tool call",
        },
        calledToolName: {
          id: "avatarOverlay.session.calledToolName",
          defaultMessage: "Called {toolName}",
          description:
            "Avatar overlay activity subtitle for a completed named tool call",
        },
        callingTool: {
          id: "avatarOverlay.session.callingTool",
          defaultMessage: "Calling tool",
          description:
            "Avatar overlay activity subtitle for a running generic tool call",
        },
        callingToolName: {
          id: "avatarOverlay.session.callingToolName",
          defaultMessage: "Calling {toolName}",
          description:
            "Avatar overlay activity subtitle for a running named tool call",
        },
        editedFiles: {
          id: "avatarOverlay.session.editedFiles",
          defaultMessage:
            "Edited {fileCount, plural, one {# file} other {# files}}",
          description:
            "Avatar overlay activity subtitle for completed file edits",
        },
        editingFiles: {
          id: "avatarOverlay.session.editingFiles",
          defaultMessage:
            "Editing {fileCount, plural, one {# file} other {# files}}",
          description:
            "Avatar overlay activity subtitle for running file edits",
        },
        listedFiles: {
          id: "avatarOverlay.session.listedFiles",
          defaultMessage: "Listed files",
          description:
            "Avatar overlay activity subtitle for a completed file listing command",
        },
        listingFiles: {
          id: "avatarOverlay.session.listingFiles",
          defaultMessage: "Listing files",
          description:
            "Avatar overlay activity subtitle for a running file listing command",
        },
        newThread: {
          id: "avatarOverlay.session.newThread",
          defaultMessage: "New chat",
          description:
            "Avatar overlay fallback title for a thread without a generated title",
        },
        ranCommand: {
          id: "avatarOverlay.session.ranCommand",
          defaultMessage: "Ran command",
          description:
            "Avatar overlay activity subtitle for a completed shell command",
        },
        readFile: {
          id: "avatarOverlay.session.readFile",
          defaultMessage: "Read {fileName}",
          description:
            "Avatar overlay activity subtitle for a completed file read",
        },
        readingFile: {
          id: "avatarOverlay.session.readingFile",
          defaultMessage: "Reading {fileName}",
          description:
            "Avatar overlay activity subtitle for a running file read",
        },
        runningCommand: {
          id: "avatarOverlay.session.runningCommand",
          defaultMessage: "Running command",
          description:
            "Avatar overlay activity subtitle for a running shell command",
        },
        searchedFiles: {
          id: "avatarOverlay.session.searchedFiles",
          defaultMessage: "Searched files",
          description:
            "Avatar overlay activity subtitle for a completed file search command without a query",
        },
        searchedQuery: {
          id: "avatarOverlay.session.searchedQuery",
          defaultMessage: 'Searched "{query}"',
          description:
            "Avatar overlay activity subtitle for a completed search with a query",
        },
        searchedWeb: {
          id: "avatarOverlay.session.searchedWeb",
          defaultMessage: "Searched web",
          description:
            "Avatar overlay activity subtitle for a completed web search",
        },
        searchingFiles: {
          id: "avatarOverlay.session.searchingFiles",
          defaultMessage: "Searching files",
          description:
            "Avatar overlay activity subtitle for a running file search command without a query",
        },
        searchingQuery: {
          id: "avatarOverlay.session.searchingQuery",
          defaultMessage: 'Searching "{query}"',
          description:
            "Avatar overlay activity subtitle for a running search with a query",
        },
      },
    );
});
export function avatarOverlayPillMaterialModuleA(
  avatarOverlayPillMaterialModuleParam50,
  avatarOverlayPillMaterialModuleParam51,
) {
  return !avatarOverlayPillMaterialModuleParam50 &&
    !avatarOverlayPillMaterialModuleParam51
    ? "pet"
    : avatarOverlayPillMaterialModuleParam51
      ? "voice-orb"
      : "hidden";
}
export const avatarOverlayPillMaterialModuleO = rolldownRuntimeN(() => {});
export function avatarOverlayPillMaterialModuleR(
  avatarOverlayPillMaterialModuleParam7,
) {
  let { ariaLabel, onClick } = avatarOverlayPillMaterialModuleParam7,
    avatarOverlayPillMaterialModuleValue35 = (
      <svg
        aria-hidden={true}
        className="size-3"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M3 3 9 9M9 3 3 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  return avatarOverlayPillMaterialModuleValue17.jsx(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6Underscore,
    {
      "aria-label": ariaLabel,
      className:
        "size-5 !rounded-full !border-token-border-heavy !bg-token-main-surface-primary/65 !text-token-foreground shadow-[0_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-basic ease-out focus-visible:ring-2 focus-visible:ring-token-focus-border active:scale-95 enabled:hover:!bg-token-main-surface-primary/80 motion-reduce:transition-none motion-reduce:active:scale-100 forced-colors:!border-[ButtonBorder] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:!bg-token-main-surface-primary/95 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none",
      color: "ghost",
      size: "icon",
      onClick,
      children: avatarOverlayPillMaterialModuleValue35,
    },
  );
}
var avatarOverlayPillMaterialModuleValue16,
  avatarOverlayPillMaterialModuleValue17,
  avatarOverlayPillMaterialModuleValue18,
  avatarOverlayPillMaterialModuleValue19,
  avatarOverlayPillMaterialModuleValue20,
  avatarOverlayPillMaterialModuleValue21,
  avatarOverlayPillMaterialModuleValue22,
  avatarOverlayPillMaterialModuleT;
export const avatarOverlayPillMaterialModuleN = rolldownRuntimeN(() => {
  avatarOverlayPillMaterialModuleValue18 = "_cssMaterial_1lmj6_1";
  avatarOverlayPillMaterialModuleValue19 = "_activityPillMaterial_1lmj6_15";
  avatarOverlayPillMaterialModuleValue20 = "_cssMaterialElevated_1lmj6_22";
  avatarOverlayPillMaterialModuleValue21 = "_replyStopControl_1lmj6_40";
  avatarOverlayPillMaterialModuleValue22 = "_cssControl_1lmj6_52";
  avatarOverlayPillMaterialModuleT = {
    cssMaterial: avatarOverlayPillMaterialModuleValue18,
    activityPillMaterial: avatarOverlayPillMaterialModuleValue19,
    cssMaterialElevated: avatarOverlayPillMaterialModuleValue20,
    replyStopControl: avatarOverlayPillMaterialModuleValue21,
    cssControl: avatarOverlayPillMaterialModuleValue22,
  };
});
export const avatarOverlayPillMaterialModuleI = rolldownRuntimeN(() => {
  avatarOverlayPillMaterialModuleValue16 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6V();
  avatarOverlayPillMaterialModuleValue17 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
});
export {
  avatarOverlayPillMaterialModuleC,
  avatarOverlayPillMaterialModuleF,
  avatarOverlayPillMaterialModuleT,
};
