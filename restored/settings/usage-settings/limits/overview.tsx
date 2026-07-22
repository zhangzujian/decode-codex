// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Usage settings restored from the current Codex webview chunk.

import React from "react";

import {
  worktreeNewThreadQueryCompatSlotUpperTLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
  worktreeNewThreadQueryCompatSlotLowerILowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperFLowerN as appInitialAppMainOnboardingPageFn } from "../../../vendor/app-main-current-runtime/index";

import { getRateLimitEntries as _appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5F } from "../../../runtime/current-app-initial/appgen-library-hot-current-runtime";

import {
  generalAppearanceCurrentCompatSlotLowerD as appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
  generalAppearanceCurrentCompatSlotLowerQ as appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
} from "../../../runtime/current-app-initial/general-appearance-current-runtime";

import { UsageLimitsCards } from "./cards";

import { UsageLimitsEvents } from "./events";

import { UsageLimitsFormatting } from "./formatting";

import { UsageLimitsHelpers } from "./helpers";

import {
  usageSettingsBinding28,
  usageSettingsBinding29,
  usageSettingsBinding34,
} from "./runtime";

function usageSettingsUnit55(usageSettingsOperand6) {
  let {
      rateLimitStatus: rateLimitStatus,
      showEnterpriseMonthlyUsageLimit: showEnterpriseMonthlyUsageLimit,
      canRequestEnterpriseMonthlyUsageLimit:
        canRequestEnterpriseMonthlyUsageLimit,
      workspaceRequestPolicy: workspaceRequestPolicy,
      workspaceMonthlyUsage: workspaceMonthlyUsage,
      workspaceAdminRequests: workspaceAdminRequests,
      isWorkspaceAdminRequestsLoading: isWorkspaceAdminRequestsLoading,
      isSavingWorkspaceAdminRequest: isSavingWorkspaceAdminRequest,
      saveWorkspaceAdminRequest: saveWorkspaceAdminRequest,
    } = usageSettingsOperand6,
    usageSettingsBinding174 =
      showEnterpriseMonthlyUsageLimit === void 0
        ? !1
        : showEnterpriseMonthlyUsageLimit,
    usageSettingsBinding175 =
      canRequestEnterpriseMonthlyUsageLimit === void 0
        ? !1
        : canRequestEnterpriseMonthlyUsageLimit,
    usageSettingsBinding176 =
      workspaceMonthlyUsage === void 0 ? null : workspaceMonthlyUsage,
    usageSettingsBinding177 =
      workspaceAdminRequests === void 0 ? null : workspaceAdminRequests,
    usageSettingsBinding178 =
      isWorkspaceAdminRequestsLoading === void 0
        ? !1
        : isWorkspaceAdminRequestsLoading,
    usageSettingsBinding179 =
      isSavingWorkspaceAdminRequest === void 0
        ? !1
        : isSavingWorkspaceAdminRequest,
    usageSettingsBinding180,
    usageSettingsBinding181,
    usageSettingsBinding182;
  usageSettingsBinding182 = Symbol.for(`react.early_return_sentinel`);
  bb0: {
    let usageSettingsBinding203 =
        _appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5F(
          rateLimitStatus,
        ),
      usageSettingsBinding204 = UsageLimitsFormatting.usageSettingsUnit63(
        usageSettingsBinding203,
        null,
      ),
      usageSettingsBinding205 = usageSettingsBinding174
        ? UsageLimitsHelpers.buildEnterpriseMonthlyUsageLimit(
            usageSettingsBinding176,
            rateLimitStatus,
          )
        : UsageLimitsFormatting.usageSettingsUnit65({
            rateLimitStatus: rateLimitStatus,
            coreUsageLimitRows: usageSettingsBinding204,
          }),
      usageSettingsBinding206 =
        usageSettingsBinding205 == null
          ? usageSettingsBinding204
          : usageSettingsBinding204.filter(
              UsageLimitsEvents.usageSettingsUnit58,
            ),
      usageSettingsBinding207 = UsageLimitsFormatting.usageSettingsUnit63(
        usageSettingsBinding203,
        usageSettingsBinding29,
      ),
      usageSettingsBinding208 =
        usageSettingsBinding174 && usageSettingsBinding175,
      usageSettingsBinding209 =
        workspaceRequestPolicy?.kind === `custom`
          ? workspaceRequestPolicy.request_url
          : null,
      usageSettingsBinding210 =
        usageSettingsBinding174 && usageSettingsBinding205 == null;
    if (
      usageSettingsBinding205 == null &&
      usageSettingsBinding206.length === 0 &&
      usageSettingsBinding207.length === 0 &&
      !usageSettingsBinding210 &&
      !usageSettingsBinding208
    ) {
      usageSettingsBinding182 = null;
      break bb0;
    }
    ((usageSettingsBinding180 =
      usageSettingsBinding205 != null ||
      usageSettingsBinding206.length > 0 ||
      usageSettingsBinding210 ||
      usageSettingsBinding208
        ? React.createElement(
            appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
            null,
            React.createElement(
              appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Header,
              {
                title: React.createElement(
                  appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                  {
                    id: `settings.usage.limits.title`,
                    defaultMessage: `General usage limits`,
                    description: `Title for the usage limits section in usage settings`,
                  },
                ),
              },
            ),
            React.createElement(
              appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Content,
              null,
              usageSettingsBinding210
                ? React.createElement(UsageLimitsEvents.usageSettingsUnit59, {
                    currentMonthUsage:
                      usageSettingsBinding176?.current_month_usage ?? null,
                  })
                : null,
              usageSettingsBinding205 != null ||
                usageSettingsBinding206.length > 0
                ? React.createElement(
                    appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
                    null,
                    usageSettingsBinding205 == null
                      ? null
                      : React.createElement(
                          UsageLimitsCards.usageSettingsUnit61,
                          {
                            usageLimit: usageSettingsBinding205,
                            key: usageSettingsBinding205.key,
                          },
                        ),
                    usageSettingsBinding206.map(
                      UsageLimitsEvents.usageSettingsUnit57,
                    ),
                  )
                : null,
              usageSettingsBinding208 &&
                workspaceRequestPolicy?.kind === `openai_native`
                ? React.createElement(UsageLimitsCards.usageSettingsUnit60, {
                    pendingRequest: UsageLimitsHelpers.usageSettingsUnit66(
                      usageSettingsBinding177,
                    ),
                    isLoading: usageSettingsBinding178,
                    isSaving: usageSettingsBinding179,
                    saveWorkspaceAdminRequest: saveWorkspaceAdminRequest,
                  })
                : null,
              usageSettingsBinding208 &&
                workspaceRequestPolicy?.kind === `custom`
                ? React.createElement(
                    appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
                    {
                      className: `mt-2`,
                    },
                    React.createElement(appInitialAppMainOnboardingPageFn, {
                      label: null,
                      description:
                        workspaceRequestPolicy.instructions == null
                          ? null
                          : React.createElement(
                              `span`,
                              {
                                className: `leading-relaxed whitespace-pre-wrap`,
                              },
                              workspaceRequestPolicy.instructions,
                            ),
                      control:
                        usageSettingsBinding209 == null
                          ? null
                          : React.createElement(
                              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                              {
                                color: `primary`,
                                size: `medium`,
                                className: `rounded-full`,
                                onClick: (usageSettingsOperand47) => {
                                  appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs(
                                    {
                                      event: usageSettingsOperand47,
                                      href: usageSettingsBinding209,
                                      initiator: `open_in_browser_bridge`,
                                    },
                                  );
                                },
                              },
                              React.createElement(
                                appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                {
                                  id: `settings.usage.limits.customRequestIncrease`,
                                  defaultMessage: `Request Increase`,
                                  description: `Member-facing button in Codex usage settings that opens the workspace's custom HTTPS monthly usage-limit-increase request page in the browser.`,
                                },
                              ),
                            ),
                    }),
                  )
                : null,
            ),
          )
        : null),
      (usageSettingsBinding181 =
        usageSettingsBinding207.length > 0
          ? React.createElement(
              appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
              null,
              React.createElement(
                appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Header,
                {
                  title: React.createElement(
                    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.usage.limits.spark.title`,
                      defaultMessage: `GPT-5.3-Codex-Spark usage limits`,
                      description: `Title for the GPT-5.3-Codex-Spark usage limits section`,
                    },
                  ),
                },
              ),
              React.createElement(
                appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Content,
                null,
                React.createElement(
                  appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
                  null,
                  usageSettingsBinding207.map(
                    UsageLimitsEvents.usageSettingsUnit56,
                  ),
                ),
              ),
            )
          : null));
  }
  if (usageSettingsBinding182 !== Symbol.for(`react.early_return_sentinel`))
    return usageSettingsBinding182;
  return React.createElement(
    usageSettingsBinding28.Fragment,
    null,
    usageSettingsBinding180,
    usageSettingsBinding181,
  );
}

export class UsageSettingsLimitsModule {
  static usageSettingsUnit55 = usageSettingsUnit55;
  static get usageSettingsBinding34() {
    return usageSettingsBinding34;
  }
}
