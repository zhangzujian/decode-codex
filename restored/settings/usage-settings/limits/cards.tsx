// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Usage settings restored from the current Codex webview chunk.

import React from "react";

import {
  currentAppInitialSharedCompatSlotUpperE as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
  currentAppInitialSharedCompatSlotUpperKLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo,
} from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadQueryCompatSlotUpperTLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
  worktreeNewThreadQueryCompatSlotLowerGLowerP as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  currentAppInitialSharedFunction0375 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  appMainCurrentCompatSlotUpperFLowerN as appInitialAppMainOnboardingPageFn,
  useQueries as appInitialAppMainOnboardingPageYs,
  appMainCurrentCompatSlotUpperZLowerS as appInitialAppMainOnboardingPageZs,
  appMainCurrentCompatSlotLowerTLowerC as appInitialAppMainOnboardingPageTc,
} from "../../../vendor/app-main-current-runtime/index";

import { generalAppearanceCurrentCompatSlotLowerQ as appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ } from "../../../runtime/current-app-initial/general-appearance-current-runtime";

import { UsageLimitsFormatting } from "./formatting";

import { UsageLimitsHelpers } from "./helpers";

import { usageSettingsBinding27 } from "./runtime";

function usageSettingsUnit60(usageSettingsOperand3) {
  let {
      pendingRequest: pendingRequest,
      isLoading: isLoading,
      isSaving: isSaving,
      saveWorkspaceAdminRequest: saveWorkspaceAdminRequest,
    } = usageSettingsOperand3,
    usageSettingsBinding112 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    usageSettingsBinding113 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    [usageSettingsBinding114, usageSettingsBinding115] = (0,
    usageSettingsBinding27.useState)(!1),
    [usageSettingsBinding116, usageSettingsBinding117] = (0,
    usageSettingsBinding27.useState)(pendingRequest?.justification ?? ``),
    usageSettingsBinding118 = () => {
      let usageSettingsBinding286 = usageSettingsBinding116.trim();
      if (usageSettingsBinding286.length === 0) {
        usageSettingsBinding112
          .get(
            appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
          )
          .warning(
            usageSettingsBinding113.formatMessage({
              id: `settings.usage.limits.requestMissingJustification`,
              defaultMessage: `Enter a justification to submit your request.`,
              description: `Toast shown when a workspace usage limit request is missing a justification`,
            }),
          );
        return;
      }
      saveWorkspaceAdminRequest?.({
        justification: usageSettingsBinding286,
        requestId: pendingRequest?.id,
      })
        .then(() => {
          (usageSettingsBinding112
            .get(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
            )
            .success(
              usageSettingsBinding113.formatMessage(
                pendingRequest == null
                  ? {
                      id: `settings.usage.limits.requestSaved`,
                      defaultMessage: `Request submitted`,
                      description: `Toast shown when a workspace usage limit request is submitted`,
                    }
                  : {
                      id: `settings.usage.limits.requestUpdated`,
                      defaultMessage: `Request updated`,
                      description: `Toast shown when a workspace usage limit request is updated`,
                    },
              ),
            ),
            usageSettingsBinding115(!1));
        })
        .catch(() => {
          usageSettingsBinding112
            .get(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
            )
            .danger(
              usageSettingsBinding113.formatMessage({
                id: `settings.usage.limits.requestSaveError`,
                defaultMessage: `Could not save your request. Please try again.`,
                description: `Toast shown when a workspace usage limit request cannot be saved`,
              }),
            );
        });
    };
  let usageSettingsBinding119 = usageSettingsBinding118,
    usageSettingsBinding120 =
      pendingRequest == null
        ? null
        : React.createElement(
            `div`,
            {
              className: `text-sm text-token-text-secondary`,
            },
            React.createElement(
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `settings.usage.limits.requestPending`,
                defaultMessage: `Your request is pending admin review.`,
                description: `Status text for a pending workspace usage limit request`,
              },
            ),
          );
  let usageSettingsBinding121 = saveWorkspaceAdminRequest == null,
    usageSettingsBinding122 = () => {
      (usageSettingsBinding117(pendingRequest?.justification ?? ``),
        usageSettingsBinding115(!0));
    };
  let usageSettingsBinding123 =
    pendingRequest == null
      ? React.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.usage.limits.requestIncrease`,
            defaultMessage: `Request limit increase`,
            description: `Button to request a workspace monthly usage limit increase`,
          },
        )
      : React.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.usage.limits.updatePendingRequest`,
            defaultMessage: `Update pending request`,
            description: `Button to update an existing pending workspace usage limit request`,
          },
        );
  let usageSettingsBinding124 = React.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
    {
      color: `primary`,
      size: `medium`,
      className: `self-start rounded-full`,
      loading: isLoading,
      disabled: usageSettingsBinding121,
      onClick: usageSettingsBinding122,
    },
    usageSettingsBinding123,
  );
  let usageSettingsBinding125 = usageSettingsBinding114
    ? React.createElement(
        appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
        {
          className: `mt-1 w-full`,
        },
        React.createElement(
          `div`,
          {
            className: `flex flex-col gap-3 p-3`,
          },
          React.createElement(
            `label`,
            {
              className: `flex flex-col gap-1.5 text-sm font-medium text-token-text-primary`,
            },
            React.createElement(
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `settings.usage.limits.requestJustificationLabel`,
                defaultMessage: `Justification`,
                description: `Label for the workspace usage limit request justification`,
              },
            ),
            React.createElement(`textarea`, {
              value: usageSettingsBinding116,
              rows: 3,
              placeholder: usageSettingsBinding113.formatMessage({
                id: `settings.usage.limits.requestJustificationPlaceholder`,
                defaultMessage: `Tell your admin why you need more credits.`,
                description: `Placeholder for the workspace usage limit request justification`,
              }),
              className: `min-h-20 resize-none rounded-md border border-token-border bg-token-input-background px-3 py-2 text-sm leading-5 text-token-text-primary outline-none placeholder:text-token-text-tertiary focus:border-token-border-heavy`,
              onChange: (event) => {
                usageSettingsBinding117(event.target.value);
              },
            }),
          ),
          React.createElement(
            `div`,
            {
              className: `flex justify-end gap-2`,
            },
            React.createElement(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
              {
                color: `secondary`,
                size: `default`,
                onClick: () => {
                  usageSettingsBinding115(!1);
                },
              },
              React.createElement(
                appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.usage.limits.requestCancel`,
                  defaultMessage: `Cancel`,
                  description: `Cancel button for the workspace usage limit request form`,
                },
              ),
            ),
            React.createElement(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
              {
                color: `primary`,
                size: `default`,
                loading: isSaving,
                onClick: usageSettingsBinding119,
              },
              pendingRequest == null
                ? React.createElement(
                    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.usage.limits.requestSave`,
                      defaultMessage: `Submit request`,
                      description: `Submit button for a workspace usage limit request`,
                    },
                  )
                : React.createElement(
                    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.usage.limits.requestUpdate`,
                      defaultMessage: `Update request`,
                      description: `Submit button for updating a pending workspace usage limit request`,
                    },
                  ),
            ),
          ),
        ),
      )
    : null;
  return React.createElement(
    `div`,
    {
      className: `mt-2 flex flex-col items-start gap-2`,
    },
    usageSettingsBinding120,
    usageSettingsBinding124,
    usageSettingsBinding125,
  );
}

function usageSettingsUnit61(usageSettingsOperand7) {
  let { usageLimit: usageLimit } = usageSettingsOperand7,
    usageSettingsBinding185 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    usageSettingsBinding186 = UsageLimitsHelpers.usageSettingsUnit72(
      usageLimit.usedPercent,
    );
  let usageSettingsBinding187 = usageSettingsBinding186,
    usageSettingsBinding188,
    usageSettingsBinding189,
    usageSettingsBinding190,
    usageSettingsBinding191,
    usageSettingsBinding192,
    usageSettingsBinding193,
    usageSettingsBinding194;
  {
    let usageSettingsBinding242 = UsageLimitsHelpers.usageSettingsUnit72(
        usageLimit.remainingPercent,
      ),
      usageSettingsBinding243;
    {
      let usageSettingsBinding373 = appInitialAppMainOnboardingPageTc(
        usageLimit.resetAt,
      );
      usageSettingsBinding243 =
        usageSettingsBinding373 == null
          ? null
          : appInitialAppMainOnboardingPageYs(usageSettingsBinding373);
    }
    let usageSettingsBinding244 = usageSettingsBinding243,
      usageSettingsBinding245;
    ((usageSettingsBinding245 =
      usageLimit.usedCredits == null || usageLimit.limitCredits == null
        ? null
        : usageSettingsBinding185.formatMessage(
            {
              id: `settings.usage.limits.monthly.creditsUsed`,
              defaultMessage: `{used} of {limit} credits used`,
              description: `Usage summary for monthly usage limit credits that have been used`,
            },
            {
              used: UsageLimitsHelpers.usageSettingsUnit71(
                usageSettingsBinding185,
                usageLimit.usedCredits,
              ),
              limit: UsageLimitsHelpers.usageSettingsUnit71(
                usageSettingsBinding185,
                usageLimit.limitCredits,
              ),
            },
          )),
      (usageSettingsBinding194 = usageSettingsBinding245));
    let usageSettingsBinding246;
    ((usageSettingsBinding246 =
      usageSettingsBinding244 == null
        ? null
        : React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: {
                time: usageSettingsBinding244,
              },
            },
          )),
      (usageSettingsBinding188 = usageSettingsBinding246),
      (usageSettingsBinding193 = `p-4`),
      (usageSettingsBinding191 = `flex items-center justify-between gap-4`),
      (usageSettingsBinding192 = React.createElement(
        `div`,
        {
          className: `text-sm font-semibold text-token-text-primary`,
        },
        React.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.usage.limits.monthly.label`,
            defaultMessage: `Monthly usage limit`,
            description: `Label for a monthly usage limit row`,
          },
        ),
      )),
      (usageSettingsBinding189 = `shrink-0 text-sm text-token-text-secondary tabular-nums`),
      (usageSettingsBinding190 = usageSettingsBinding185.formatMessage(
        {
          id: `settings.usage.limits.monthly.progress.remaining`,
          defaultMessage: `{remaining}% remaining`,
          description: `Remaining percentage shown next to usage progress`,
        },
        {
          remaining: usageSettingsBinding185.formatNumber(
            usageSettingsBinding242,
            {
              maximumFractionDigits: 0,
            },
          ),
        },
      )));
  }
  let usageSettingsBinding195 = React.createElement(
    `div`,
    {
      className: usageSettingsBinding189,
    },
    usageSettingsBinding190,
  );
  let usageSettingsBinding196 = React.createElement(
    `div`,
    {
      className: usageSettingsBinding191,
    },
    usageSettingsBinding192,
    usageSettingsBinding195,
  );
  let usageSettingsBinding197 = usageSettingsBinding185.formatMessage({
    id: `settings.usage.limits.monthly.progress.ariaLabel`,
    defaultMessage: `Monthly usage used`,
    description: `Aria label for monthly usage limit progress`,
  });
  let usageSettingsBinding198 = `${usageSettingsBinding187}%`,
    usageSettingsBinding199 = React.createElement(`div`, {
      className: `bg-[#0285FF]`,
      style: {
        width: usageSettingsBinding198,
      },
    });
  let usageSettingsBinding200 = React.createElement(
    `div`,
    {
      role: `progressbar`,
      "aria-label": usageSettingsBinding197,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": usageSettingsBinding187,
      className: `mt-4 flex h-2 overflow-hidden rounded-full bg-[#DFDFDF]`,
    },
    usageSettingsBinding199,
  );
  let usageSettingsBinding201 =
    usageSettingsBinding194 != null || usageSettingsBinding188 != null
      ? React.createElement(
          `div`,
          {
            className: `mt-5 flex items-center justify-between gap-3`,
          },
          React.createElement(
            `div`,
            {
              className: `text-xs text-token-text-tertiary`,
            },
            usageSettingsBinding194,
          ),
          React.createElement(
            `div`,
            {
              className: `shrink-0 text-end text-xs text-token-text-tertiary`,
            },
            usageSettingsBinding188,
          ),
        )
      : null;
  return React.createElement(
    `div`,
    {
      className: usageSettingsBinding193,
    },
    usageSettingsBinding196,
    usageSettingsBinding200,
    usageSettingsBinding201,
  );
}

function usageSettingsUnit62(usageSettingsOperand19) {
  let { rateLimitRow: rateLimitRow } = usageSettingsOperand19,
    usageSettingsBinding294;
  {
    let usageSettingsBinding372 = appInitialAppMainOnboardingPageTc(
      rateLimitRow.bucket.resetsAt ?? null,
    );
    usageSettingsBinding294 =
      usageSettingsBinding372 == null
        ? null
        : appInitialAppMainOnboardingPageYs(usageSettingsBinding372);
  }
  let usageSettingsBinding295 = usageSettingsBinding294,
    usageSettingsBinding296 =
      usageSettingsBinding295 == null
        ? null
        : React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: {
                time: usageSettingsBinding295,
              },
            },
          );
  let usageSettingsBinding297 = usageSettingsBinding296,
    usageSettingsBinding298 = rateLimitRow.bucket.usedPercent ?? 0,
    usageSettingsBinding299 = appInitialAppMainOnboardingPageZs(
      usageSettingsBinding298,
    );
  let usageSettingsBinding300 = usageSettingsBinding299,
    usageSettingsBinding301 =
      UsageLimitsFormatting.usageSettingsUnit64(rateLimitRow);
  let usageSettingsBinding302 = React.createElement(
    UsageLimitsHelpers.UsageLimitProgress,
    {
      remainingPercent: usageSettingsBinding300,
    },
  );
  return React.createElement(appInitialAppMainOnboardingPageFn, {
    className: `gap-6`,
    label: usageSettingsBinding301,
    description: usageSettingsBinding297,
    control: usageSettingsBinding302,
  });
}

export class UsageLimitsCards {
  static usageSettingsUnit60 = usageSettingsUnit60;
  static usageSettingsUnit61 = usageSettingsUnit61;
  static usageSettingsUnit62 = usageSettingsUnit62;
}
