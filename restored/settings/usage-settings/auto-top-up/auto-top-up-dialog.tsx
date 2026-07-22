// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Usage settings restored from the current Codex webview chunk.

import React from "react";

import {
  currentAppInitialSharedCompatSlotUpperE as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
  currentAppInitialSharedCompatSlotUpperKLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo,
  currentAppInitialSharedCompatSlotLowerTLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc,
} from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadQueryCompatSlotUpperELowerO as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
  worktreeNewThreadQueryCompatSlotUnderscoreLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwA,
  worktreeNewThreadQueryCompatSlotLowerBLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
  worktreeNewThreadQueryCompatSlotLowerGLowerP as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
  worktreeNewThreadQueryCompatSlotLowerVLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVa,
  worktreeNewThreadQueryCompatSlotLowerWLowerO as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWo,
  worktreeNewThreadQueryCompatSlotLowerYLowerA as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYa,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  currentAppInitialSharedFunction0375 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy,
  currentAppInitialSharedMember0481 as AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dAy,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  getIsCustomCheckoutEnabled as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5K,
  openCheckoutUrlInBrowser as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Y,
  isAutoTopUpPaymentFailureStatus as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Ft,
  useAutoTopUpPricingQuery as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Nt,
  logCheckoutStarted as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Q,
  useBillingCurrencyQuery as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Tt,
} from "../../../runtime/current-app-initial/appgen-library-hot-current-runtime";

import { useForm as esmN } from "../../../vendor/tanstack-react-form";

import { UsageSettingsAutoTopUpShared } from "../auto-top-up-shared";

import { UsageSettingsAutoTopUpRuntime } from "./runtime";
import type { AutoTopUpDialogProps } from "./types";

export function usageSettingsUnit12(
  usageSettingsOperand1: AutoTopUpDialogProps,
) {
  let {
      open: open,
      serverState: serverState,
      creditDetails: creditDetails,
      enableAutoTopUpMutation: enableAutoTopUpMutation,
      updateAutoTopUpMutation: updateAutoTopUpMutation,
      disableAutoTopUpMutation: disableAutoTopUpMutation,
      onOpenChange: onOpenChange,
    } = usageSettingsOperand1,
    usageSettingsBinding37 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    usageSettingsBinding38 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    usageSettingsBinding39 =
      AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dAy(),
    usageSettingsBinding40 = {
      enabled: open,
    };
  let { data: data, isPending: usageSettingsBinding41 } =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Tt(
        usageSettingsBinding40,
      ),
    usageSettingsBinding42 = {
      billingCurrency: data,
      enabled: open,
    };
  let { data: _data, isPending: isPending } =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Nt(
        usageSettingsBinding42,
      ),
    usageSettingsBinding43 = usageSettingsBinding41 || isPending,
    usageSettingsBinding44 = (0, UsageSettingsAutoTopUpRuntime.react.useId)(),
    usageSettingsBinding45 = (0, UsageSettingsAutoTopUpRuntime.react.useId)(),
    usageSettingsBinding46 = (0, UsageSettingsAutoTopUpRuntime.react.useId)(),
    usageSettingsBinding47 = (0, UsageSettingsAutoTopUpRuntime.react.useId)(),
    usageSettingsBinding48 =
      enableAutoTopUpMutation.isPending || updateAutoTopUpMutation.isPending,
    usageSettingsBinding49 = disableAutoTopUpMutation.isPending,
    usageSettingsBinding50 = usageSettingsBinding48 || usageSettingsBinding49,
    [usageSettingsBinding51, usageSettingsBinding52] = (0,
    UsageSettingsAutoTopUpRuntime.react.useState)(null),
    [usageSettingsBinding53, usageSettingsBinding54] = (0,
    UsageSettingsAutoTopUpRuntime.react.useState)(!1),
    usageSettingsBinding55 = (usageSettingsOperand91) => {
      usageSettingsBinding37
        .get(
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
        )
        .danger(
          UsageSettingsAutoTopUpShared.usageSettingsUnit40(
            usageSettingsOperand91,
            usageSettingsBinding38,
          ),
          UsageSettingsAutoTopUpRuntime.toastOptions,
        );
    };
  let usageSettingsBinding56 = usageSettingsBinding55,
    usageSettingsBinding57 = (usageSettingsOperand88) => {
      usageSettingsBinding37
        .get(
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
        )
        .success(
          UsageSettingsAutoTopUpShared.usageSettingsUnit41(
            usageSettingsOperand88,
            usageSettingsBinding38,
          ),
          UsageSettingsAutoTopUpRuntime.toastOptions,
        );
    };
  let usageSettingsBinding58 = usageSettingsBinding57,
    usageSettingsBinding59 = () => {
      (usageSettingsBinding54(!1), usageSettingsBinding52(null));
    };
  let usageSettingsBinding60 = usageSettingsBinding59,
    usageSettingsBinding61 = (usageSettingsOperand46) => {
      let { draftState: draftState } = usageSettingsOperand46;
      (usageSettingsBinding54(!0),
        usageSettingsBinding52(
          UsageSettingsAutoTopUpShared.usageSettingsUnit32({
            intl: usageSettingsBinding38,
            creditBalance: creditDetails?.balance,
            rechargeThreshold: draftState.rechargeThreshold,
            rechargeTarget: draftState.rechargeTarget,
            pricingInfo: _data,
          })?.amount ?? null,
        ));
    };
  let usageSettingsBinding62 = usageSettingsBinding61,
    usageSettingsBinding63 = [
      `usage-settings`,
      `auto-top-up`,
      `manage-payment`,
    ];
  let usageSettingsBinding64 = {
    mutationKey: usageSettingsBinding63,
    mutationFn: UsageSettingsAutoTopUpShared.usageSettingsUnit19,
    onSuccess: UsageSettingsAutoTopUpShared.usageSettingsUnit18,
    onError: () => {
      usageSettingsBinding37
        .get(
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
        )
        .danger(
          usageSettingsBinding38.formatMessage({
            id: `settings.usage.autoTopUp.managePayment.error`,
            defaultMessage: `Unable to open payment settings right now. Please try again.`,
            description: `Error shown when opening the manage payment flow from the auto top up settings dialog fails`,
          }),
          UsageSettingsAutoTopUpRuntime.toastOptions,
        );
    },
  };
  let usageSettingsBinding65 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        usageSettingsBinding64,
      ),
    usageSettingsBinding66 = () => {
      usageSettingsBinding65.isPending || usageSettingsBinding65.mutate();
    };
  let usageSettingsBinding67 = usageSettingsBinding66,
    usageSettingsBinding68 =
      serverState.rechargeThreshold ??
      UsageSettingsAutoTopUpRuntime.defaultThreshold,
    usageSettingsBinding69 =
      serverState.rechargeTarget ?? UsageSettingsAutoTopUpRuntime.defaultTarget,
    usageSettingsBinding70 = {
      isEnabled: !0,
      rechargeThreshold: usageSettingsBinding68,
      rechargeTarget: usageSettingsBinding69,
    };
  let usageSettingsBinding71 = {
    onChange: UsageSettingsAutoTopUpShared.usageSettingsUnit17,
    onSubmit: UsageSettingsAutoTopUpShared.usageSettingsUnit16,
  };
  let usageSettingsBinding72 = async (usageSettingsOperand22) => {
    let { value: value } = usageSettingsOperand22,
      usageSettingsBinding311 =
        UsageSettingsAutoTopUpShared.getAutoTopUpSaveState({
          draftState: value,
          serverState: serverState,
          isSaving: usageSettingsBinding50,
        });
    if (usageSettingsBinding311.isSaveEnabled)
      switch (usageSettingsBinding311.saveIntent) {
        case `disable`:
        case `none`:
          return;
        case `enable`:
          try {
            if (
              (usageSettingsBinding60(),
              appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Ft(
                (
                  await enableAutoTopUpMutation.mutateAsync(
                    UsageSettingsAutoTopUpShared.on(value),
                  )
                ).immediate_top_up_status,
              ))
            ) {
              usageSettingsBinding62({
                draftState: value,
              });
              return;
            }
            (usageSettingsBinding58(`enable`), onOpenChange(!1));
          } catch {
            usageSettingsBinding56(`enable`);
          }
          return;
        case `update`:
          try {
            if (
              (usageSettingsBinding60(),
              appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Ft(
                (
                  await updateAutoTopUpMutation.mutateAsync(
                    UsageSettingsAutoTopUpShared.on(value),
                  )
                ).immediate_top_up_status,
              ))
            ) {
              usageSettingsBinding62({
                draftState: value,
              });
              return;
            }
            (usageSettingsBinding58(`update`), onOpenChange(!1));
          } catch {
            usageSettingsBinding56(`update`);
          }
          return;
      }
  };
  let usageSettingsBinding73 = {
    defaultValues: usageSettingsBinding70,
    validators: usageSettingsBinding71,
    onSubmit: usageSettingsBinding72,
  };
  let _e = esmN(usageSettingsBinding73),
    usageSettingsBinding74 = (usageSettingsOperand89) => {
      (usageSettingsBinding50 && !usageSettingsOperand89) ||
        (usageSettingsOperand89 || usageSettingsBinding60(),
        onOpenChange(usageSettingsOperand89));
    };
  let usageSettingsBinding75 = usageSettingsBinding74,
    be = async () => {
      if (serverState.isEnabled)
        try {
          (await disableAutoTopUpMutation.mutateAsync(),
            usageSettingsBinding58(`disable`),
            onOpenChange(!1));
        } catch {
          usageSettingsBinding56(`disable`);
        }
    };
  let usageSettingsBinding76 = be,
    usageSettingsBinding77 = (usageSettingsOperand2) => {
      let { values: values, submissionAttempts: submissionAttempts } =
          usageSettingsOperand2,
        usageSettingsBinding79 =
          UsageSettingsAutoTopUpShared.getAutoTopUpSaveState({
            draftState: values,
            serverState: serverState,
            isSaving: usageSettingsBinding50,
          }),
        usageSettingsBinding80 =
          UsageSettingsAutoTopUpShared.usageSettingsUnit32({
            intl: usageSettingsBinding38,
            creditBalance: creditDetails?.balance,
            rechargeThreshold: values.rechargeThreshold,
            rechargeTarget: values.rechargeTarget,
            pricingInfo: _data,
          }),
        usageSettingsBinding81 =
          !usageSettingsBinding53 &&
          usageSettingsBinding80 != null &&
          (usageSettingsBinding79.saveIntent === `enable` ||
            usageSettingsBinding79.saveIntent === `update`)
            ? {
                saveIntent: usageSettingsBinding79.saveIntent,
                amount: usageSettingsBinding80.amount,
                creditCount: usageSettingsBinding80.creditCount,
              }
            : null;
      return React.createElement(
        appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWo,
        {
          open: open,
          size: `default`,
          contentClassName: `w-[536px] max-w-[calc(100vw-2rem)]`,
          contentProps: {
            "aria-describedby": usageSettingsBinding45,
            onOpenAutoFocus: UsageSettingsAutoTopUpShared.usageSettingsUnit14,
          },
          shouldIgnoreClickOutside: usageSettingsBinding50,
          onOpenChange: usageSettingsBinding75,
        },
        React.createElement(
          `form`,
          {
            onSubmit: (event) => {
              (event.preventDefault(), _e.handleSubmit());
            },
          },
          React.createElement(
            appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwA,
            {
              className: `gap-0 px-6 py-6`,
            },
            React.createElement(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
              {
                asChild: !0,
              },
              React.createElement(
                `h2`,
                {
                  id: usageSettingsBinding44,
                  className: `sr-only`,
                },
                usageSettingsBinding38.formatMessage({
                  id: `settings.usage.autoTopUp.dialog.title`,
                  defaultMessage: `Auto-reload credits`,
                  description: `Title for the auto top up settings dialog`,
                }),
              ),
            ),
            React.createElement(
              `p`,
              {
                id: usageSettingsBinding45,
                className: `sr-only`,
              },
              usageSettingsBinding38.formatMessage({
                id: `settings.usage.autoTopUp.dialog.description`,
                defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                description: `Description shown below the inputs in the auto top up settings dialog`,
              }),
            ),
            React.createElement(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
              null,
              React.createElement(
                appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYa,
                {
                  title: React.createElement(
                    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    },
                  ),
                },
              ),
            ),
            React.createElement(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
              {
                className: `gap-5`,
              },
              React.createElement(
                _e.Field,
                {
                  name: `rechargeThreshold`,
                },
                (usageSettingsOperand15) => {
                  let usageSettingsBinding276 =
                    submissionAttempts > 0 ||
                    usageSettingsOperand15.state.meta.isBlurred
                      ? UsageSettingsAutoTopUpShared.usageSettingsUnit34(
                          usageSettingsOperand15.state.meta.errors,
                        )
                      : null;
                  return React.createElement(
                    UsageSettingsAutoTopUpShared.usageSettingsUnit26,
                    {
                      id: usageSettingsBinding46,
                      label: React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.threshold.label`,
                          defaultMessage: `Minimum balance`,
                          description: `Label for the auto top up threshold input in the dialog`,
                        },
                      ),
                      value: usageSettingsOperand15.state.value,
                      placeholder: `125`,
                      disabled: usageSettingsBinding50,
                      hasError: usageSettingsBinding276 != null,
                      helperText: React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.threshold.helper`,
                          defaultMessage: `Auto reload triggers when your credit balance goes below this amount.`,
                          description: `Helper text shown below the minimum balance input in the auto top up dialog`,
                        },
                      ),
                      footerContent:
                        UsageSettingsAutoTopUpShared.usageSettingsUnit37({
                          fieldError: usageSettingsBinding276,
                          fieldName: `threshold`,
                          intl: usageSettingsBinding38,
                        }),
                      footerTone: `error`,
                      ariaLabel: usageSettingsBinding38.formatMessage({
                        id: `settings.usage.autoTopUp.threshold.ariaLabel`,
                        defaultMessage: `Auto-reload minimum balance`,
                        description: `Aria label for the auto top up threshold input`,
                      }),
                      onBlur: usageSettingsOperand15.handleBlur,
                      onChange: (usageSettingsOperand72) => {
                        (usageSettingsBinding60(),
                          usageSettingsOperand15.handleChange(
                            usageSettingsOperand72,
                          ));
                      },
                    },
                  );
                },
              ),
              React.createElement(
                _e.Field,
                {
                  name: `rechargeTarget`,
                },
                (usageSettingsOperand10) => {
                  let usageSettingsBinding240 =
                      submissionAttempts > 0 ||
                      usageSettingsOperand10.state.meta.isBlurred
                        ? UsageSettingsAutoTopUpShared.usageSettingsUnit35(
                            usageSettingsOperand10.state.meta.errors,
                          )
                        : null,
                    usageSettingsBinding241 =
                      UsageSettingsAutoTopUpShared.usageSettingsUnit31({
                        intl: usageSettingsBinding38,
                        rechargeThreshold: values.rechargeThreshold,
                        rechargeTarget: usageSettingsOperand10.state.value,
                        pricingInfo: _data,
                      });
                  return React.createElement(
                    UsageSettingsAutoTopUpShared.usageSettingsUnit26,
                    {
                      id: usageSettingsBinding47,
                      label: React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.target.label`,
                          defaultMessage: `Target balance`,
                          description: `Label for the auto top up target balance input in the dialog`,
                        },
                      ),
                      value: usageSettingsOperand10.state.value,
                      placeholder: `250`,
                      disabled: usageSettingsBinding50,
                      hasError: usageSettingsBinding240 != null,
                      helperText: React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.target.helper`,
                          defaultMessage: `Auto reload brings your credit balance back up to this amount.`,
                          description: `Helper text shown below the target balance input in the auto top up dialog`,
                        },
                      ),
                      footerContent:
                        usageSettingsBinding240 == null
                          ? usageSettingsBinding43
                            ? React.createElement(
                                UsageSettingsAutoTopUpShared.usageSettingsUnit27,
                                {
                                  intl: usageSettingsBinding38,
                                },
                              )
                            : usageSettingsBinding241 == null
                              ? null
                              : React.createElement(
                                  appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                  {
                                    id: `settings.usage.autoTopUp.target.equivalent`,
                                    defaultMessage: `Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>`,
                                    description: `Message shown below the target balance input with the estimated minimum billing amount`,
                                    values: {
                                      creditCount:
                                        usageSettingsBinding241.creditCount,
                                      amount: usageSettingsBinding241.amount,
                                      strong:
                                        UsageSettingsAutoTopUpShared.usageSettingsUnit13,
                                    },
                                  },
                                )
                          : UsageSettingsAutoTopUpShared.usageSettingsUnit37({
                              fieldError: usageSettingsBinding240,
                              fieldName: `target`,
                              intl: usageSettingsBinding38,
                            }),
                      footerTone:
                        usageSettingsBinding240 == null ? `secondary` : `error`,
                      ariaLabel: usageSettingsBinding38.formatMessage({
                        id: `settings.usage.autoTopUp.target.ariaLabel`,
                        defaultMessage: `Auto-reload target balance`,
                        description: `Aria label for the auto top up target balance input`,
                      }),
                      onBlur: usageSettingsOperand10.handleBlur,
                      onChange: (usageSettingsOperand73) => {
                        (usageSettingsBinding60(),
                          usageSettingsOperand10.handleChange(
                            usageSettingsOperand73,
                          ));
                      },
                    },
                  );
                },
              ),
              React.createElement(
                `div`,
                {
                  className: `text-sm leading-5 text-token-text-secondary`,
                },
                React.createElement(
                  appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                  {
                    id: `settings.usage.autoTopUp.dialog.description`,
                    defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                    description: `Description shown below the inputs in the auto top up settings dialog`,
                  },
                ),
              ),
              usageSettingsBinding81 == null
                ? null
                : React.createElement(
                    UsageSettingsAutoTopUpShared.usageSettingsUnit20,
                    {
                      saveIntent: usageSettingsBinding81.saveIntent,
                      amount: usageSettingsBinding81.amount,
                      creditCount: usageSettingsBinding81.creditCount,
                    },
                  ),
              usageSettingsBinding53
                ? React.createElement(
                    UsageSettingsAutoTopUpShared.usageSettingsUnit23,
                    {
                      amount: usageSettingsBinding51,
                      isManagePaymentPending: usageSettingsBinding65.isPending,
                      onManagePaymentClick: usageSettingsBinding67,
                      onPurchaseCreditClick: (usageSettingsOperand44) => {
                        (appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5K(
                          usageSettingsBinding39,
                          `personal`,
                        ),
                          appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Q(
                            usageSettingsBinding37,
                            {
                              audience: `personal`,
                              checkoutKind: `standalone_credit`,
                              entryPoint: `auto_top_up_failure_banner`,
                            },
                          ),
                          appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Y(
                            UsageSettingsAutoTopUpRuntime.purchaseUrl,
                            usageSettingsOperand44,
                          ));
                      },
                    },
                  )
                : null,
            ),
            React.createElement(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
              {
                className: `pt-7`,
              },
              React.createElement(
                appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVa,
                null,
                serverState.isEnabled
                  ? React.createElement(
                      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                      {
                        color: `outline`,
                        className:
                          UsageSettingsAutoTopUpRuntime.actionButtonClassName,
                        loading: usageSettingsBinding49,
                        disabled: usageSettingsBinding50,
                        onClick: () => {
                          usageSettingsBinding76();
                        },
                      },
                      React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.disable`,
                          defaultMessage: `Turn off`,
                          description: `Button label to disable auto top up`,
                        },
                      ),
                    )
                  : React.createElement(
                      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                      {
                        color: `outline`,
                        className:
                          UsageSettingsAutoTopUpRuntime.actionButtonClassName,
                        disabled: usageSettingsBinding50,
                        onClick: () => {
                          onOpenChange(!1);
                        },
                      },
                      React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.cancel`,
                          defaultMessage: `Cancel`,
                          description: `Button label to close the auto top up dialog without saving`,
                        },
                      ),
                    ),
                React.createElement(
                  appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                  {
                    color: `primary`,
                    type: `submit`,
                    className:
                      UsageSettingsAutoTopUpRuntime.actionButtonClassName,
                    loading: usageSettingsBinding48,
                    disabled: !usageSettingsBinding79.isSaveEnabled,
                  },
                  serverState.isEnabled
                    ? React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.save`,
                          defaultMessage: `Save`,
                          description: `Button label to save auto top up settings`,
                        },
                      )
                    : React.createElement(
                        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.usage.autoTopUp.enable`,
                          defaultMessage: `Turn on`,
                          description: `Button label to enable auto top up`,
                        },
                      ),
                ),
              ),
            ),
          ),
        ),
      );
    };
  return React.createElement(
    _e.Subscribe,
    {
      selector: UsageSettingsAutoTopUpShared.usageSettingsUnit15,
    },
    usageSettingsBinding77,
  );
}
