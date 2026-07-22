// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Usage settings restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperZLowerS as appInitialAppMainOnboardingPageZs } from "../../../vendor/app-main-current-runtime/index";

import { appgenLibraryHotDjo67r4nCompatSlotLowerX as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nX } from "../../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";

import { findRateLimitEntryByName as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5C } from "../../../runtime/current-app-initial/appgen-library-hot-current-runtime";

import { UsageLimitsHelpers } from "./helpers";

import { usageSettingsBinding30 } from "./runtime";

function usageSettingsUnit63(usageSettingsOperand59, usageSettingsOperand60) {
  let usageSettingsBinding371 =
    usageSettingsOperand60 == null
      ? (usageSettingsOperand59.find((item) => item.limitName == null) ?? null)
      : appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5C(
          usageSettingsOperand59,
          usageSettingsOperand60,
        );
  return usageSettingsBinding371 == null
    ? []
    : appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nX(
        {
          entry: usageSettingsBinding371,
          keyPrefix: usageSettingsOperand60 ?? `core`,
        },
      );
}

function usageSettingsUnit64(usageSettingsOperand20) {
  let usageSettingsBinding304 =
    usageSettingsOperand20.bucket.windowDurationMins ?? 0;
  return UsageLimitsHelpers.usageSettingsUnit69(usageSettingsOperand20)
    ? React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.limits.monthly.label`,
          defaultMessage: `Monthly usage limit`,
          description: `Label for a monthly usage limit row`,
        },
      )
    : UsageLimitsHelpers.usageSettingsUnit70(
          usageSettingsBinding304,
          usageSettingsBinding30,
        )
      ? React.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.usage.limits.fiveHour.label`,
            defaultMessage: `5 hour usage limit`,
            description: `Label for the 5-hour usage limit row`,
          },
        )
      : UsageLimitsHelpers.usageSettingsUnit70(usageSettingsBinding304, 10080)
        ? React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.usage.limits.week.label`,
              defaultMessage: `Weekly usage limit`,
              description: `Label for a weekly usage limit row`,
            },
          )
        : UsageLimitsHelpers.usageSettingsUnit70(usageSettingsBinding304, 1440)
          ? React.createElement(
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `settings.usage.limits.day.label`,
                defaultMessage: `Daily usage limit`,
                description: `Label for a daily usage limit row`,
              },
            )
          : React.createElement(
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `settings.usage.limits.genericWindow.label`,
                defaultMessage: `Usage limit`,
                description: `Generic label for a usage limit row`,
              },
            );
}

function usageSettingsUnit65({
  rateLimitStatus: rateLimitStatus,
  coreUsageLimitRows: coreUsageLimitRows,
}) {
  let usageSettingsBinding331 =
    rateLimitStatus?.spend_control?.individual_limit ?? null;
  if (usageSettingsBinding331 != null)
    return {
      key: `spend-control-monthly`,
      usedPercent: usageSettingsBinding331.used_percent,
      remainingPercent: usageSettingsBinding331.remaining_percent,
      resetAt: usageSettingsBinding331.reset_at,
      usedCredits: usageSettingsBinding331.used,
      limitCredits: usageSettingsBinding331.limit,
    };
  let usageSettingsBinding332 =
    coreUsageLimitRows.find(UsageLimitsHelpers.usageSettingsUnit69) ?? null;
  if (usageSettingsBinding332 == null) return null;
  let usageSettingsBinding333 = usageSettingsBinding332.bucket.usedPercent ?? 0;
  return {
    key: usageSettingsBinding332.key,
    usedPercent: usageSettingsBinding333,
    remainingPercent: appInitialAppMainOnboardingPageZs(
      usageSettingsBinding333,
    ),
    resetAt: usageSettingsBinding332.bucket.resetsAt ?? null,
    usedCredits: null,
    limitCredits: null,
  };
}

export class UsageLimitsFormatting {
  static usageSettingsUnit63 = usageSettingsUnit63;
  static usageSettingsUnit64 = usageSettingsUnit64;
  static usageSettingsUnit65 = usageSettingsUnit65;
}
