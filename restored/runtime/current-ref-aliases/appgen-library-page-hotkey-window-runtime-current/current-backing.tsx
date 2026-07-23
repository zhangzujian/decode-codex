// Restored from ref/webview/assets/app-initial~app-main~new-thread-panel-page~projects-index-page~appgen-library-page~hotkey-w~gvw9nkdu-BIKEUPPl.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer, toEsm } from "../rolldown-runtime";
import {
  currentReactAliasLowerb,
  currentReactAliasLowerdLowern,
  currentReactAliasLowerdLowert,
  currentReactAliasUpperE,
  currentReactAliasLowerfLowert,
  currentReactAliasLowerk,
  currentReactAliasLoweruLowern,
  currentReactAliasLowerx,
  currentReactAliasLowery,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasLowerb,
  currentQueryRpcAliasLowermLoweri,
  currentQueryRpcAliasLowern,
  currentQueryRpcAliasLowero,
  currentQueryRpcAliasLowerw,
  currentQueryRpcAliasLowerx,
} from "../app-initial-query-rpc-runtime";
import {
  defineMessage,
  initReactIntlRuntimeChunk,
} from "../../package-adapters/react-intl-current/entry";
import {
  notebookPreviewRuntimeVariant4Member0068,
  notebookPreviewRuntimeVariant4Member0070,
} from "../notebook-preview-runtime-variant-4";
import { windowContinuationWarningMessage } from "../current-app-shared-current";
import {
  businessCheckoutSharedMember0503,
  businessCheckoutSharedFunction0149,
  automationIdleFetchFetchingQuery,
  businessCheckoutSharedMember0725,
  businessCheckoutSharedMember0758,
  businessCheckoutSharedMember0792,
} from "../business-checkout-shared-current";
import {
  businessCheckoutSharedRuntimeVariant5Member0026,
  businessCheckoutSharedRuntimeVariant5Member0036,
} from "../business-checkout-shared-runtime-variant-5";
import {
  settingsCommandSharedRuntimeVariant4Member0039,
  settingsCommandSharedRuntimeVariant4Member0051,
} from "../settings-command-shared-runtime-variant-4-current";
import {
  pullRequestCodeReviewNewThreadPaneRuntimeMember0002,
  pullRequestCodeReviewNewThreadPaneRuntimeMember0007,
  pullRequestCodeReviewNewThreadPaneRuntimeMember0012,
  pullRequestCodeReviewNewThreadPaneRuntimeMember0040,
} from "../pull-request-code-review-new-thread-pane-runtime-current";
import {
  pullRequestRoutRuntimeVariant9Member0004,
  pullRequestRoutRuntimeVariant9Member0005,
  pullRequestRoutRuntimeVariant9Member0022,
  pullRequestRoutRuntimeVariant9Member0039,
  pullRequestRoutRuntimeVariant9Member0095,
} from "../pull-request-rout-runtime-variant-9-current";
import {
  parseGitRepositoryUrl,
  initGitRepositoryUrlParserChunk,
} from "../../../utils/git-repository-url";
import {
  appgenSettingsSharedRuntimeVariant11Member0014,
  appgenSettingsSharedRuntimeVariant11Member0015,
  appgenSettingsSharedRuntimeVariant11Member0025,
  appgenSettingsSharedRuntimeVariant11Member0026,
} from "../appgen-settings-shared-runtime-variant-11-current";
import {
  settingsCommandSharedRuntimeVariant18Member0001,
  settingsCommandSharedRuntimeVariant18Member0013,
} from "../settings-command-shared-runtime-variant-18-current";
var appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduW;
export const appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduT =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerx();
    pullRequestRoutRuntimeVariant9Member0004();
    notebookPreviewRuntimeVariant4Member0070();
    pullRequestCodeReviewNewThreadPaneRuntimeMember0002();
    pullRequestCodeReviewNewThreadPaneRuntimeMember0007();
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduW =
      currentReactAliasLowerdLowert(
        notebookPreviewRuntimeVariant4Member0068,
        ({ get }) =>
          get(pullRequestCodeReviewNewThreadPaneRuntimeMember0012) &&
          pullRequestCodeReviewNewThreadPaneRuntimeMember0040(
            get(pullRequestRoutRuntimeVariant9Member0022),
          ) != null,
      );
  });
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduX({
  canCreateBrowserDefaultHostThreads,
  hasBrowserLocalExecutionHost,
  hasComposerModeGitRepo,
  hasFollowUp,
  isBrowser,
  isComposerModeGitMetadataLoading,
  isResponseInProgress,
  isStatsigLoading,
  isWorktreeExecutionTargetLoading,
  isWorktreePickerEnabled,
}) {
  if (isBrowser) {
    let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue54 =
      canCreateBrowserDefaultHostThreads && !hasFollowUp;
    return {
      fallbackMode:
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue54
          ? "local"
          : "cloud",
      isAvailabilityLoading: false,
      isCloudAvailable:
        !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue54,
      isLocalAvailable:
        hasBrowserLocalExecutionHost || canCreateBrowserDefaultHostThreads,
      isWorktreeAvailable: false,
    };
  }
  return {
    fallbackMode: "local",
    isAvailabilityLoading:
      isComposerModeGitMetadataLoading ||
      isStatsigLoading ||
      isWorktreeExecutionTargetLoading,
    isCloudAvailable: hasComposerModeGitRepo,
    isLocalAvailable: true,
    isWorktreeAvailable:
      hasComposerModeGitRepo &&
      !hasFollowUp &&
      !isResponseInProgress &&
      isWorktreePickerEnabled,
  };
}
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduS({
  composerMode,
  cloudAccess,
  fallbackMode,
  isAvailabilityLoading,
  isCloudAvailable,
  isEverydayWorkMode,
  isLocalAvailable,
  isWorktreeAvailable,
}) {
  if (isEverydayWorkMode) return "local";
  if (composerMode === "cloud" && cloudAccess !== "enabled")
    return fallbackMode;
  if (isAvailabilityLoading) return composerMode;
  switch (composerMode) {
    case "cloud":
      return isCloudAvailable ? "cloud" : fallbackMode;
    case "local":
      return isLocalAvailable ? "local" : fallbackMode;
    case "worktree":
      return isWorktreeAvailable ? "worktree" : fallbackMode;
  }
}
export const appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduC =
  createLazyEsmInitializer(() => {});
function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper1(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam18,
) {
  return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam18 ===
    "default"
    ? "engineering"
    : appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam18 in
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue2
      ? appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam18
      : "something_else";
}
function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper2(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam15,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue66 =
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam15.length >
    0
      ? appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam15
      : ["something_else"];
  return Array.from(
    new Set(
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue66.map(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper1,
      ),
    ),
  );
}
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduY({
  roles,
}) {
  return {
    role: appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper1(
      roles[0] ?? "something_else",
    ),
    suggestionPrompts:
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper3(
        {
          roles,
          promptsByRole:
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue2,
        },
      ),
  };
}
function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper3({
  roles,
  promptsByRole,
  limit = appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue1,
}) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue33 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper2(
        roles,
      ).map((item) => promptsByRole[item]),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue34 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue33.map(
        () => 0,
      ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35 =
      [],
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue36 =
      new Set();
  for (let [
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue59,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue60,
  ] of appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue33.entries()) {
    let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue63 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue60[
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue34[
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue59
        ]
      ];
    if (
      ((appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue34[
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue59
      ] += 1),
      !(
        !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue63 ||
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue36.has(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue63,
        )
      ) &&
        (appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue36.add(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue63,
        ),
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35.push(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue63,
        ),
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35.length >=
          limit))
    )
      return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35;
  }
  for (
    ;
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35.length <
    limit;
  ) {
    let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue52 = false;
    for (
      let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue56 = 0;
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue56 <
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue33.length;
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue56 += 1
    ) {
      let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue61 =
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue33[
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue56
        ][
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue34[
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue56
          ]
        ];
      if (
        ((appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue34[
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue56
        ] += 1),
        !(
          !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue61 ||
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue36.has(
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue61,
          )
        ) &&
          (appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue36.add(
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue61,
          ),
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35.push(
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue61,
          ),
          (appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue52 = true),
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35.length >=
            limit))
      )
        break;
    }
    if (
      !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue52
    )
      break;
  }
  return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue35;
}
var appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue1,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue2;
export const appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduB =
  createLazyEsmInitializer(() => {
    initReactIntlRuntimeChunk();
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue1 = 3;
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue2 =
      {
        engineering: [
          {
            appIds: ["github", "linear"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.engineering.debugIssue.title",
              defaultMessage: "Debug an issue",
              description:
                "Short home prompt title for engineering role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.engineering.debugIssue.prompt",
              defaultMessage:
                "Use GitHub, Linear, or my uploaded logs/code to investigate a bug, PR, build failure, or issue I choose. If missing, ask what to inspect. Identify likely root cause, fix path, and tests.",
              description: "Long home prompt for engineering issue debugging",
            }),
          },
          {
            appIds: ["github", "linear", "file-word-document"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.engineering.planImplementation.title",
              defaultMessage: "Plan implementation",
              description:
                "Short home prompt title for engineering role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.engineering.planImplementation.prompt",
              defaultMessage:
                "Use GitHub, Linear, or my uploaded spec to plan implementation for a feature or bug. If I have not named one, ask me which issue. Include likely files, edge cases, and test plan.",
              description:
                "Long home prompt for engineering implementation planning",
            }),
          },
          {
            appIds: ["github", "file-word-document"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.engineering.reviewPr.title",
              defaultMessage: "Review a PR",
              description:
                "Short home prompt title for engineering role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.engineering.reviewPr.prompt",
              defaultMessage:
                "Use GitHub or an uploaded diff to review a specific PR. If no PR is provided, ask which PR to review. Check correctness, risk, edge cases, missing tests, and alignment with the issue or spec.",
              description: "Long home prompt for engineering PR review",
            }),
          },
        ],
        product_management: [
          {
            appIds: ["file-word-document"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.product.reviewPrd.title",
              defaultMessage: "Review a PRD",
              description:
                "Short home prompt title for product management role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.product.reviewPrd.prompt",
              defaultMessage:
                "If I uploaded or attached a PRD, use that first. Otherwise ask me which PRD, feature, or product area to review. Critique it for unclear requirements, missing metrics, risks, open questions, and next decisions.",
              description: "Long home prompt for product PRD review",
            }),
          },
          {
            appIds: ["linear"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.product.prepLaunch.title",
              defaultMessage: "Prep a launch",
              description:
                "Short home prompt title for product management role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.product.prepLaunch.prompt",
              defaultMessage:
                "Use Linear or my uploaded context to prep a launch-readiness brief. If I have not named the launch, ask me which one. Summarize blockers, owners, risks, unresolved decisions, and next actions.",
              description: "Long home prompt for product launch prep",
            }),
          },
          {
            appIds: ["gmail", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.product.summarizeStakeholderAsks.title",
              defaultMessage: "Summarize stakeholder asks",
              description:
                "Short home prompt title for product management role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.product.summarizeStakeholderAsks.prompt",
              defaultMessage:
                "Use Gmail, Slack, or my uploaded notes to summarize stakeholder asks on a product topic I choose. If missing, ask for the topic. Group asks by theme and recommend what to do next.",
              description: "Long home prompt for product stakeholder asks",
            }),
          },
        ],
        finance: [
          {
            appIds: ["google-calendar", "google-drive", "gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.finance.prepReview.title",
              defaultMessage: "Prep a finance review",
              description:
                "Short home prompt title for finance role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.finance.prepReview.prompt",
              defaultMessage:
                "Use Google Calendar, Google Drive, Gmail, or my uploaded docs to prep for a finance review, budget, forecast, close item, or model I choose. If missing, ask which topic. Summarize key numbers, risks, decisions, and likely questions.",
              description: "Long home prompt for finance review prep",
            }),
          },
          {
            appIds: ["gmail", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.finance.triageAsks.title",
              defaultMessage: "Triage finance asks",
              description:
                "Short home prompt title for finance role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.finance.triageAsks.prompt",
              defaultMessage:
                "Use Gmail, Slack, or my uploaded notes to find finance asks for a topic I choose. Create a tracker with requester, ask, amount if mentioned, deadline, status, missing info, and next step.",
              description: "Long home prompt for finance ask triage",
            }),
          },
          {
            appIds: ["google-drive", "file-spreadsheet"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.finance.reviewModel.title",
              defaultMessage: "Review a model",
              description:
                "Short home prompt title for finance role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.finance.reviewModel.prompt",
              defaultMessage:
                "Use Google Drive or my uploaded spreadsheet/model to review a forecast, budget, close package, or results file. Summarize what changed, what looks off, follow-ups, and a leadership-ready narrative.",
              description: "Long home prompt for finance model review",
            }),
          },
        ],
        marketing: [
          {
            appIds: ["file-word-document"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.marketing.reviewBrief.title",
              defaultMessage: "Review a campaign brief",
              description:
                "Short home prompt title for marketing role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.marketing.reviewBrief.prompt",
              defaultMessage:
                "If I uploaded or attached a campaign brief, use that first. Otherwise ask me which campaign, launch, audience, or message to review. Summarize positioning, gaps, risks, open questions, and next assets needed.",
              description:
                "Long home prompt for marketing campaign brief review",
            }),
          },
          {
            appIds: ["slack", "gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.marketing.feedbackDirection.title",
              defaultMessage: "Turn feedback into direction",
              description:
                "Short home prompt title for marketing role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.marketing.feedbackDirection.prompt",
              defaultMessage:
                "Use Slack, Gmail, or my uploaded feedback to analyze campaign feedback for a topic I choose. Separate signal from noise, identify repeated concerns, and recommend messaging changes.",
              description: "Long home prompt for marketing feedback synthesis",
            }),
          },
          {
            appIds: ["google-drive"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.marketing.assetConcepts.title",
              defaultMessage: "Draft asset concepts",
              description:
                "Short home prompt title for marketing role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.marketing.assetConcepts.prompt",
              defaultMessage:
                "Use Google Drive or my uploaded brief to create 3 asset concepts for a campaign or audience I choose. Include audience, message, visual direction, headline copy, and channel fit.",
              description: "Long home prompt for marketing asset concepts",
            }),
          },
        ],
        sales: [
          {
            appIds: ["google-calendar", "gmail", "google-drive", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.sales.prepCustomerMeeting.title",
              defaultMessage: "Prep a customer meeting",
              description: "Short home prompt title for sales role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.sales.prepCustomerMeeting.prompt",
              defaultMessage:
                "Use Google Calendar, Gmail, Google Drive, Slack, or my uploaded account notes to prep for a customer meeting I choose. If missing, ask which account. Give me context, buyer priorities, talk track, objections, risks, and next steps.",
              description: "Long home prompt for sales meeting prep",
            }),
          },
          {
            appIds: ["gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.sales.draftFollowUp.title",
              defaultMessage: "Draft a follow-up",
              description: "Short home prompt title for sales role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.sales.draftFollowUp.prompt",
              defaultMessage:
                "Use Gmail or my uploaded meeting notes to draft a follow-up for an account or prospect I choose. Summarize context, infer buyer priorities, identify missing info, and write the follow-up.",
              description: "Long home prompt for sales follow-up drafting",
            }),
          },
          {
            appIds: ["slack", "gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.sales.inspectDealRisk.title",
              defaultMessage: "Inspect deal risk",
              description: "Short home prompt title for sales role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.sales.inspectDealRisk.prompt",
              defaultMessage:
                "Use Slack, Gmail, or my uploaded notes to inspect a deal, account, or territory I choose. Create a risk table with latest signal, risk, owner, next action, and suggested message.",
              description: "Long home prompt for sales deal risk inspection",
            }),
          },
        ],
        operations: [
          {
            appIds: ["google-calendar", "google-drive", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.strategy.prepOperatingReview.title",
              defaultMessage: "Prep an operating review",
              description:
                "Short home prompt title for strategy and operations role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.strategy.prepOperatingReview.prompt",
              defaultMessage:
                "Use Google Calendar, Google Drive, Slack, or my uploaded docs to prep an operating review for an initiative I choose. If missing, ask which initiative. Summarize goals, blockers, owners, decisions needed, escalation points, and next steps.",
              description:
                "Long home prompt for strategy and operations review prep",
            }),
          },
          {
            appIds: ["google-drive", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.strategy.mapDependencies.title",
              defaultMessage: "Map dependencies",
              description:
                "Short home prompt title for strategy and operations role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.strategy.mapDependencies.prompt",
              defaultMessage:
                "Use Google Drive, Slack, or my uploaded project plan to map dependencies for a workstream I choose. Include owner, status, risk, dependency, decision needed, and recommended next action.",
              description: "Long home prompt for strategy dependency mapping",
            }),
          },
          {
            appIds: ["gmail", "slack", "google-calendar"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.strategy.prioritizeStakeholderAsks.title",
              defaultMessage: "Prioritize stakeholder asks",
              description:
                "Short home prompt title for strategy and operations role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.strategy.prioritizeStakeholderAsks.prompt",
              defaultMessage:
                "Use Gmail, Slack, Google Calendar, or my uploaded notes to summarize stakeholder asks for an initiative I choose. Prioritize them by urgency, impact, and deadline, then suggest responses.",
              description:
                "Long home prompt for strategy stakeholder ask prioritization",
            }),
          },
        ],
        people_hr: [
          {
            appIds: ["google-calendar", "google-drive", "slack", "gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.peopleHr.prepOperatingReview.title",
              defaultMessage: "Prep an operating review",
              description:
                "Short home prompt title for people and HR role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.peopleHr.prepOperatingReview.prompt",
              defaultMessage:
                "Use Google Calendar, Google Drive, Slack, Gmail, and my uploaded docs where available to prep an operating review for an initiative I choose. If missing, ask which initiative. Summarize goals, blockers, owners, decisions needed, escalation points, and next steps.",
              description:
                "Long home prompt for people and HR operating review prep",
            }),
          },
          {
            appIds: ["gmail", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.peopleHr.triagePartnerAsks.title",
              defaultMessage: "Triage cross-functional partner asks",
              description:
                "Short home prompt title for people and HR role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.peopleHr.triagePartnerAsks.prompt",
              defaultMessage:
                "Use Gmail, Slack, or Teams, or my uploaded notes to find cross-functional team or partner asks for a topic I choose. Create a tracker with requester, ask, amount if mentioned, deadline, status, missing info, and next step.",
              description:
                "Long home prompt for people and HR partner ask triage",
            }),
          },
          {
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.peopleHr.structureProblem.title",
              defaultMessage: "Structure a messy business problem",
              description:
                "Short home prompt title for people and HR role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.peopleHr.structureProblem.prompt",
              defaultMessage:
                "Use problem structuring to turn an ambiguous business question I choose into a clear decision frame. Identify the core question, sub-questions, assumptions, evidence needed, stakeholders, and recommended workplan.",
              description:
                "Long home prompt for people and HR problem structuring",
            }),
          },
        ],
        legal: [
          {
            appIds: ["google-calendar", "google-drive", "slack", "gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.legal.prepOperatingReview.title",
              defaultMessage: "Prep an operating review",
              description: "Short home prompt title for legal role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.legal.prepOperatingReview.prompt",
              defaultMessage:
                "Use Google Calendar, Google Drive, Slack, Gmail, and my uploaded docs where available to prep an operating review for an initiative I choose. If missing, ask which initiative. Summarize goals, blockers, owners, decisions needed, escalation points, and next steps.",
              description: "Long home prompt for legal operating review prep",
            }),
          },
          {
            appIds: ["google-drive", "slack", "gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.legal.draftLeadershipMemo.title",
              defaultMessage: "Draft a leadership memo",
              description: "Short home prompt title for legal role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.legal.draftLeadershipMemo.prompt",
              defaultMessage:
                "Use available docs, Slack context, Gmail, and uploaded notes to draft a crisp leadership memo on a topic I choose. Include the situation, decision needed, evidence, options, risks, and recommended next step.",
              description:
                "Long home prompt for legal leadership memo drafting",
            }),
          },
          {
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.legal.structureProblem.title",
              defaultMessage: "Structure a messy business problem",
              description: "Short home prompt title for legal role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.legal.structureProblem.prompt",
              defaultMessage:
                "Use problem structuring to turn an ambiguous business question I choose into a clear decision frame. Identify the core question, sub-questions, assumptions, evidence needed, stakeholders, and recommended workplan.",
              description: "Long home prompt for legal problem structuring",
            }),
          },
        ],
        data_science: [
          {
            appIds: ["google-drive", "slack", "github"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.dataScience.investigateMetric.title",
              defaultMessage: "Investigate a metric",
              description:
                "Short home prompt title for data science role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.dataScience.investigateMetric.prompt",
              defaultMessage:
                "Use Google Drive, Slack, GitHub, or my uploaded data/readout to investigate a metric, experiment, or dashboard I choose. If missing, ask which one. Summarize the business question, evidence, caveats, likely drivers, and next analysis.",
              description:
                "Long home prompt for data science metric investigation",
            }),
          },
          {
            appIds: ["github"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.dataScience.reviewNotebook.title",
              defaultMessage: "Review a notebook",
              description:
                "Short home prompt title for data science role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.dataScience.reviewNotebook.prompt",
              defaultMessage:
                "Use GitHub or my uploaded notebook/code to review a notebook, model, pipeline, or data issue. Explain what changed, why it matters, what could break, and how to validate it.",
              description: "Long home prompt for data science notebook review",
            }),
          },
          {
            appIds: ["gmail", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.dataScience.triageRequests.title",
              defaultMessage: "Triage analysis requests",
              description:
                "Short home prompt title for data science role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.dataScience.triageRequests.prompt",
              defaultMessage:
                "Use Gmail, Slack, or my uploaded notes to triage data science requests for an area I choose. Rank them by business impact, urgency, data availability, ambiguity, and recommended priority.",
              description:
                "Long home prompt for data science analysis request triage",
            }),
          },
        ],
        design: [
          {
            appIds: ["figma"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.design.critiqueDesign.title",
              defaultMessage: "Critique a design",
              description: "Short home prompt title for design role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.design.critiqueDesign.prompt",
              defaultMessage:
                "Use Figma or my uploaded screenshot/prototype to critique a design, flow, or screen I choose. Review hierarchy, interaction clarity, accessibility, edge cases, and product goal alignment, then suggest 5 improvements.",
              description: "Long home prompt for design critique",
            }),
          },
          {
            appIds: ["slack", "gmail", "figma"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.design.synthesizeFeedback.title",
              defaultMessage: "Synthesize design feedback",
              description: "Short home prompt title for design role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.design.synthesizeFeedback.prompt",
              defaultMessage:
                "Use Slack, Gmail, Figma, or my uploaded feedback to synthesize feedback for a design project I choose. Group themes, identify contradictions, recommend what to accept or push back on, and draft an alignment reply.",
              description: "Long home prompt for design feedback synthesis",
            }),
          },
          {
            appIds: ["google-drive", "figma"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.design.reviewSpec.title",
              defaultMessage: "Review spec to design",
              description: "Short home prompt title for design role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.design.reviewSpec.prompt",
              defaultMessage:
                "Use Google Drive, Figma, or my uploaded spec/design to compare a product spec with the design. Identify mismatches, missing states, UX risks, and decisions needed before handoff.",
              description: "Long home prompt for design spec review",
            }),
          },
        ],
        student: [
          {
            appIds: ["google-calendar", "gmail", "google-drive"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.student.studyPlan.title",
              defaultMessage: "Build a study plan",
              description:
                "Short home prompt title for student role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.student.studyPlan.prompt",
              defaultMessage:
                "Use Google Calendar, Gmail, Google Drive, or my uploaded syllabus/notes to build a study plan for a class, exam, assignment, or paper I choose. If missing, ask which one. Include deadlines, priorities, and daily next steps.",
              description: "Long home prompt for student study planning",
            }),
          },
          {
            appIds: ["github"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.student.debugAssignment.title",
              defaultMessage: "Debug my assignment",
              description:
                "Short home prompt title for student role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.student.debugAssignment.prompt",
              defaultMessage:
                "Use GitHub or my uploaded code/course materials to help debug a coding assignment or project. Explain the issue in plain English, suggest a fix path, and list what to test.",
              description: "Long home prompt for student assignment debugging",
            }),
          },
          {
            appIds: ["gmail", "google-drive"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.student.summarizeMaterials.title",
              defaultMessage: "Summarize class materials",
              description:
                "Short home prompt title for student role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.student.summarizeMaterials.prompt",
              defaultMessage:
                "Use Gmail, Google Drive, or my uploaded lecture notes/readings to summarize a class topic I choose. Pull out key concepts, deadlines, assignments, and what I should study next.",
              description: "Long home prompt for student material summary",
            }),
          },
        ],
        something_else: [
          {
            appIds: ["slack", "gmail", "google-drive"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.other.summarizeUpdates.title",
              defaultMessage: "Summarize updates",
              description: "Short home prompt title for other role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.other.summarizeUpdates.prompt",
              defaultMessage:
                "Summarize updates across Slack, Gmail, and docs, then draft a to-do list for me",
              description: "Long home prompt for summarizing updates",
            }),
          },
          {
            appIds: ["gmail"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.other.draftFollowUps.title",
              defaultMessage: "Draft follow-ups",
              description: "Short home prompt title for other role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.other.draftFollowUps.prompt",
              defaultMessage:
                "Review recent unread Gmail messages and draft personalized follow-ups",
              description: "Long home prompt for drafting follow-ups",
            }),
          },
          {
            appIds: ["google-calendar", "gmail", "google-drive", "slack"],
            titleMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.other.prepMeetings.title",
              defaultMessage: "Prep for meetings",
              description: "Short home prompt title for other role onboarding",
            }),
            promptMessage: defineMessage({
              id: "electron.onboarding.welcomeV2.roleCopy.other.prepMeetings.prompt",
              defaultMessage:
                "Prep me for today's meetings using Google Calendar, Gmail, Google Drive, and Slack: context, agenda items, and key decisions",
              description: "Long home prompt for meeting prep",
            }),
          },
        ],
      };
  });
function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduM(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam10,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue50 =
    new Map();
  for (let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53 of appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam10) {
    let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue55 =
      [
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53.id,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduP(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53.id,
        ),
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduP(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53.name,
        ),
        ...(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53.pluginDisplayNames ??
          []
        ).map(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduP,
        ),
      ];
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53.id.startsWith(
      "connector_",
    ) &&
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue55.push(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduP(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53.id.slice(
            10,
          ),
        ),
      );
    for (let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue70 of appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue55)
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue70.length >
        0 &&
        !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue50.has(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue70,
        ) &&
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue50.set(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue70,
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue53,
        );
  }
  return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue50;
}
function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduH(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam12,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam13,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue62 =
    new Set();
  for (let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue68 of appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam13) {
    let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue69 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam12.get(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue68,
      ) ??
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam12.get(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduP(
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue68,
        ),
      );
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue69 !=
      null &&
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue62.add(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue69,
      );
  }
  return Array.from(
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue62,
  );
}
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduV(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam6,
) {
  let {
      appIds,
      enabled = true,
      hostId = "local",
    } = appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam6,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue40 =
      businessCheckoutSharedRuntimeVariant5Member0036(),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue41 =
      {
        hostId: hostId,
      };
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue42 =
      appgenSettingsSharedRuntimeVariant11Member0014(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue41,
      ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue43 =
      enabled &&
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue42 &&
      !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue40.isLoading &&
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue40.userId !=
        null,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue44 =
      {
        enabled:
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue43,
      };
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue45 =
    currentReactAliasUpperE(
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue4,
      hostId,
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue44,
    );
  if (
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue45 ==
    null
  )
    return;
  return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduH(
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue45,
    appIds,
  );
}
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduUnderscore(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam19,
) {
  for (let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue71 of appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam19)
    return (
      settingsCommandSharedRuntimeVariant18Member0001(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue71,
      ) == null
    );
  return false;
}
function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduP(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam17,
) {
  return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam17
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}
var appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue3,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue4;
export const appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduG =
  createLazyEsmInitializer(() => {
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue3 =
      currentReactAliasLoweruLowern();
    currentReactAliasLowerx();
    settingsCommandSharedRuntimeVariant18Member0013();
    businessCheckoutSharedRuntimeVariant5Member0026();
    appgenSettingsSharedRuntimeVariant11Member0015();
    appgenSettingsSharedRuntimeVariant11Member0025();
    currentReactAliasLowerb();
    windowContinuationWarningMessage();
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue4 =
      currentReactAliasLowerfLowert(
        currentReactAliasLowery,
        (
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam16,
          { get },
        ) => {
          let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue67 =
            get(
              appgenSettingsSharedRuntimeVariant11Member0026,
              appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam16,
            ).data;
          return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue67 ==
            null
            ? undefined
            : appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduM(
                appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue67,
              );
        },
      );
  });
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduF(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam3,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue18 =
      currentReactAliasUpperE(
        businessCheckoutSharedMember0503,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam3,
      ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue19 =
      currentReactAliasUpperE(
        businessCheckoutSharedMember0758,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam3,
      ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue20 =
      currentReactAliasUpperE(
        businessCheckoutSharedMember0725,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam3,
      ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue21 =
      currentReactAliasUpperE(
        businessCheckoutSharedMember0792,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam3,
      ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue22 =
      currentReactAliasUpperE(
        automationIdleFetchFetchingQuery,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam3,
      );
  if (
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue18 ==
    null
  ) {
    let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue47;
    return {
      appServerVersion:
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue20,
      error:
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue21,
      installedCodexVersion:
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue22,
      state: null,
    };
  }
  return {
    appServerVersion:
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue20,
    error:
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue21,
    installedCodexVersion:
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue22,
    state:
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue19,
  };
}
var appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue5;
export const appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduD =
  createLazyEsmInitializer(() => {
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue5 =
      currentReactAliasLoweruLowern();
    currentReactAliasLowerx();
    businessCheckoutSharedFunction0149();
  });
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduU(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam14,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue64 =
      pullRequestRoutRuntimeVariant9Member0039(),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue65 =
      pullRequestRoutRuntimeVariant9Member0095(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue64,
      );
  return _appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduC(
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue65 ==
      null
      ? undefined
      : appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue64
          ?.repo_map?.[
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue65
        ]?.clone_url,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam14,
  );
}
function _appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduC(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam4,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam5,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue25 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam5?.enabled ??
      true,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue26 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue25
        ? appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam4
        : undefined,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue27 =
      Symbol(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue26,
      );
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue28 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue27,
    [
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue29,
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue30,
    ] = $.useState(null),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue31,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue32;
  return (
    (appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue31 =
      () => {
        if (
          !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam4 ||
          !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue25
        )
          return;
        let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue51 = false;
        return (
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduO(
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam4,
          ).then((value) => {
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue51 ||
              appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue30(
                {
                  lookupKey:
                    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue28,
                  gitRoot: value,
                },
              );
          }),
          () => {
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue51 = true;
          }
        );
      }),
    (appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue32 =
      [
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam4,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue25,
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue28,
      ]),
    $.useEffect(
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue31,
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue32,
    ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue25 &&
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue29?.lookupKey ===
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue28
      ? appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue29.gitRoot
      : null
  );
}
async function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduO(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam11,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue57 =
    await currentQueryRpcAliasLowern("active-workspace-roots");
  if (
    !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam11 ||
    !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue57
  )
    return null;
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue58 =
    await currentQueryRpcAliasLowern("git-origins", {
      source: "git_root_lookup",
    });
  return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper4(
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam11,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue57.roots,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue58.origins,
  );
}
async function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduHelper4(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam7,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam8,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam9,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue48 =
      parseGitRepositoryUrl(
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam7,
      ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue49 =
      (
        appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam9 ??
        []
      ).find((item) =>
        item.originUrl
          ? appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue7.default(
              parseGitRepositoryUrl(item.originUrl),
              appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue48,
            )
          : false,
      );
  return appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue49
    ? appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue49.root
    : (currentQueryRpcAliasLowerx.warning("No matching origin found", {
        safe: {},
        sensitive: {
          originUrl:
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam7,
        },
      }),
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam8[0] ??
        null);
}
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduL(
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam1,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam2,
) {
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue9 =
      !!appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam1 &&
      (appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam2?.enabled ??
        true),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue10 =
      !appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue9 ||
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam1 ==
        null
        ? {
            dirs: [],
          }
        : appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam2?.hostId ==
            null
          ? {
              dirs: [
                appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam1,
              ],
            }
          : {
              dirs: [
                appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam1,
              ],
              hostId:
                appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam2.hostId,
            };
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue11 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue10,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue12 =
      {
        params:
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue11,
        source:
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam2.source,
      };
  let { data, isLoading } = currentReactAliasUpperE(
      settingsCommandSharedRuntimeVariant4Member0051,
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue12,
    ),
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue13 =
      data?.origins.find(
        (
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam20,
        ) =>
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam20.dir ===
          appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduParam1,
      )?.root ??
      data?.origins[0]?.root ??
      null;
  let appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue14 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue13,
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue15 =
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue14
        ? currentQueryRpcAliasLowermLoweri(
            appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue14,
          )
        : null;
  return {
    gitRoot:
      appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue15,
    isLoading,
  };
}
var appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue6,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue7,
  $;
export const _appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduS =
  createLazyEsmInitializer(() => {
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue6 =
      currentReactAliasLoweruLowern();
    appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduValue7 =
      toEsm(currentReactAliasLowerk(), 1);
    currentReactAliasLowerx();
    currentQueryRpcAliasLowerw();
    $ = toEsm(currentReactAliasLowerdLowern(), 1);
    settingsCommandSharedRuntimeVariant4Member0039();
    currentQueryRpcAliasLowero();
    currentQueryRpcAliasLowerb();
    initGitRepositoryUrlParserChunk();
    pullRequestRoutRuntimeVariant9Member0005();
  });
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduR({
  appServerConnectionState,
  localExecutionRemoteHostId,
}) {
  return localExecutionRemoteHostId == null
    ? null
    : localExecutionRemoteHostId === "durable" &&
        appServerConnectionState == null
      ? "connected"
      : (appServerConnectionState ?? "disconnected");
}
export function _appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduT({
  followUpConversationId,
  managerHostId,
}) {
  return followUpConversationId == null ||
    managerHostId === "local" ||
    managerHostId === "durable"
    ? null
    : managerHostId;
}
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduN({
  attachedRemoteHostId,
  browserRemoteHostId,
  followUpType,
  forceDefaultHost,
  selectedRemoteProjectHostId,
}) {
  return (
    attachedRemoteHostId ??
    (followUpType === "local" || (forceDefaultHost && followUpType == null)
      ? null
      : (selectedRemoteProjectHostId ?? browserRemoteHostId))
  );
}
export function appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduA({
  composerMode,
  draftRemoteHostId,
  followUpType,
  hasStartedBranchConversation,
}) {
  return (
    composerMode === "local" &&
    draftRemoteHostId !== "local" &&
    followUpType !== "local" &&
    (!hasStartedBranchConversation || followUpType === "cloud")
  );
}
export const appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduI =
  createLazyEsmInitializer(() => {
    currentQueryRpcAliasLowerw();
    windowContinuationWarningMessage();
  });
export {
  _appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduC,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduH,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduM,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduO,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduP,
  appInitialAppMainNewThreadPanelPageProjectsIndexPageAppgenLibraryPageHotkeyWGvw9nkduW,
};
