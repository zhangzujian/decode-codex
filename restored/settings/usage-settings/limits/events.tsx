// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Usage settings restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperFLowerN as appInitialAppMainOnboardingPageFn } from "../../../vendor/app-main-current-runtime/index";

import { InfoCircleIcon as appInitialAppMainWorktreeInitV2PageAppgenSettingsPagePageAppgenPageRemoteConDi269h6jY } from "../../../runtime/renderer-error-boundary-runtime";

import { generalAppearanceCurrentCompatSlotLowerQ as appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ } from "../../../runtime/current-app-initial/general-appearance-current-runtime";

import { UsageLimitsCards } from "./cards";

import { UsageLimitsHelpers } from "./helpers";

function usageSettingsUnit56(event) {
  return React.createElement(UsageLimitsCards.usageSettingsUnit62, {
    rateLimitRow: event,
    key: event.key,
  });
}

function usageSettingsUnit57(event) {
  return React.createElement(UsageLimitsCards.usageSettingsUnit62, {
    rateLimitRow: event,
    key: event.key,
  });
}

function usageSettingsUnit58(usageSettingsOperand95) {
  return !UsageLimitsHelpers.usageSettingsUnit69(usageSettingsOperand95);
}

function usageSettingsUnit59(usageSettingsOperand11) {
  let { currentMonthUsage: currentMonthUsage } = usageSettingsOperand11,
    usageSettingsBinding248 = React.createElement(
      appInitialAppMainWorktreeInitV2PageAppgenSettingsPagePageAppgenPageRemoteConDi269h6jY,
      {
        "aria-hidden": !0,
        className: `icon-sm text-token-text-tertiary`,
      },
    );
  let usageSettingsBinding249 = React.createElement(
    appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
    null,
    React.createElement(appInitialAppMainOnboardingPageFn, {
      icon: usageSettingsBinding248,
      label: React.createElement(
        `span`,
        {
          className: `text-xs text-token-text-tertiary`,
        },
        React.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.usage.limits.monthly.none`,
            defaultMessage: `Your administrator hasn’t set a usage limit`,
            description: `Informational message shown when the administrator has not set a monthly usage limit for the current user.`,
          },
        ),
      ),
      control: null,
    }),
  );
  let usageSettingsBinding250 =
    currentMonthUsage == null
      ? null
      : React.createElement(
          appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
          null,
          React.createElement(
            `div`,
            {
              className: `p-3`,
            },
            React.createElement(
              `div`,
              {
                className: `text-xs text-token-text-tertiary`,
              },
              React.createElement(
                appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.usage.limits.monthly.currentUsage`,
                  defaultMessage: `Your usage this month`,
                  description: `Label for the current user's monthly credit usage when no monthly usage limit is set.`,
                },
              ),
            ),
            React.createElement(
              `div`,
              {
                className: `text-lg font-semibold text-token-text-primary tabular-nums`,
              },
              React.createElement(
                appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.usage.limits.monthly.currentUsageCredits`,
                  defaultMessage: `{credits, plural, one {# credit} other {# credits}}`,
                  description: `Credit amount used by the current user this month when no monthly usage limit is set.`,
                  values: {
                    credits: Math.max(currentMonthUsage, 0),
                  },
                },
              ),
            ),
          ),
        );
  return React.createElement(
    `div`,
    {
      className: `flex flex-col gap-2`,
    },
    usageSettingsBinding249,
    usageSettingsBinding250,
  );
}

export class UsageLimitsEvents {
  static usageSettingsUnit56 = usageSettingsUnit56;
  static usageSettingsUnit57 = usageSettingsUnit57;
  static usageSettingsUnit58 = usageSettingsUnit58;
  static usageSettingsUnit59 = usageSettingsUnit59;
}
