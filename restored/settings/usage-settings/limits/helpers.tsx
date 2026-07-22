// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Usage settings restored from the current Codex webview chunk.

import React from "react";

import { worktreeNewThreadQueryCompatSlotLowerMLowerH as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh } from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { currentAppInitialSharedFunction0375 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperPLowerS as appInitialAppMainOnboardingPagePs } from "../../../vendor/app-main-current-runtime/index";

import {
  usageSettingsBinding31,
  usageSettingsBinding32,
  usageSettingsBinding33,
} from "./runtime";

function $n(usageSettingsOperand39, usageSettingsOperand40) {
  let usageSettingsBinding343 = appInitialAppMainOnboardingPagePs(
    usageSettingsOperand39,
  );
  return usageSettingsBinding343 == null
    ? null
    : {
        key: `workspace-monthly`,
        usedPercent: usageSettingsBinding343.usedPercent,
        remainingPercent: usageSettingsBinding343.remainingPercent,
        resetAt:
          Number(
            usageSettingsOperand40?.spend_control?.individual_limit?.limit,
          ) === usageSettingsBinding343.limit
            ? (usageSettingsOperand40?.spend_control?.individual_limit
                ?.reset_at ?? null)
            : null,
        usedCredits: String(usageSettingsBinding343.used),
        limitCredits: String(usageSettingsBinding343.limit),
      };
}

function usageSettingsUnit66(usageSettingsOperand69) {
  return (
    usageSettingsOperand69?.items.find(
      (usageSettingsOperand94) =>
        usageSettingsOperand94.status === `pending` &&
        usageSettingsUnit67(usageSettingsOperand94) != null,
    ) ?? null
  );
}

function usageSettingsUnit67(usageSettingsOperand90) {
  return usageSettingsOperand90.payloads.find(usageSettingsUnit68) ?? null;
}

function usageSettingsUnit68(event) {
  return (
    event.kind === `spend_limit` &&
    event.target.source === usageSettingsBinding32 &&
    event.target.source_id === usageSettingsBinding33
  );
}

function usageSettingsUnit69(usageSettingsOperand83) {
  return usageSettingsUnit70(
    usageSettingsOperand83.bucket.windowDurationMins ?? 0,
    usageSettingsBinding31,
  );
}

function usageSettingsUnit70(usageSettingsOperand70, usageSettingsOperand71) {
  return !Number.isFinite(usageSettingsOperand70) || usageSettingsOperand70 <= 0
    ? !1
    : Math.abs(usageSettingsOperand70 - usageSettingsOperand71) <=
        usageSettingsOperand71 * 0.05;
}

function usageSettingsUnit71(usageSettingsOperand54, usageSettingsOperand55) {
  let usageSettingsBinding368 = Number(usageSettingsOperand55);
  return Number.isFinite(usageSettingsBinding368)
    ? usageSettingsOperand54.formatNumber(
        Math.max(usageSettingsBinding368, 0),
        {
          minimumFractionDigits: 0,
          maximumFractionDigits: usageSettingsBinding368 >= 10 ? 0 : 2,
        },
      )
    : usageSettingsOperand55;
}

function or(usageSettingsOperand14) {
  let { remainingPercent: remainingPercent } = usageSettingsOperand14,
    usageSettingsBinding267 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    usageSettingsBinding268 = usageSettingsUnit72(remainingPercent);
  let usageSettingsBinding269 = usageSettingsBinding268,
    usageSettingsBinding270 = usageSettingsBinding267.formatMessage({
      id: `settings.usage.limits.progress.ariaLabel`,
      defaultMessage: `Usage remaining`,
      description: `Aria label for usage remaining progress bars`,
    });
  let usageSettingsBinding271 =
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
      `h-1.5 w-24 overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-token-foreground/10 [&::-webkit-progress-value]:bg-token-foreground [&::-moz-progress-bar]:bg-token-foreground`,
      `[&::-ms-fill]:bg-token-foreground`,
    );
  let usageSettingsBinding272 = React.createElement(`progress`, {
    max: 100,
    value: usageSettingsBinding269,
    "aria-label": usageSettingsBinding270,
    className: usageSettingsBinding271,
  });
  let usageSettingsBinding273 = usageSettingsBinding267.formatMessage(
    {
      id: `settings.usage.limits.progress.remaining`,
      defaultMessage: `{remaining}% left`,
      description: `Remaining percentage shown next to usage progress`,
    },
    {
      remaining: usageSettingsBinding267.formatNumber(usageSettingsBinding269, {
        maximumFractionDigits: 0,
      }),
    },
  );
  let usageSettingsBinding274 = React.createElement(
    `span`,
    {
      className: `w-[72px] text-right text-sm text-token-text-secondary tabular-nums`,
    },
    usageSettingsBinding273,
  );
  return React.createElement(
    `div`,
    {
      className: `flex items-center gap-2`,
    },
    usageSettingsBinding272,
    usageSettingsBinding274,
  );
}

function usageSettingsUnit72(usageSettingsOperand79) {
  return Number.isFinite(usageSettingsOperand79)
    ? Math.max(0, Math.min(100, usageSettingsOperand79))
    : 0;
}

export class UsageLimitsHelpers {
  static buildEnterpriseMonthlyUsageLimit = $n;
  static usageSettingsUnit66 = usageSettingsUnit66;
  static usageSettingsUnit67 = usageSettingsUnit67;
  static usageSettingsUnit68 = usageSettingsUnit68;
  static usageSettingsUnit69 = usageSettingsUnit69;
  static usageSettingsUnit70 = usageSettingsUnit70;
  static usageSettingsUnit71 = usageSettingsUnit71;
  static UsageLimitProgress = or;
  static usageSettingsUnit72 = usageSettingsUnit72;
}
