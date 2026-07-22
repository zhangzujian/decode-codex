// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Usage settings restored from the current Codex webview chunk.

import React from "react";

import {
  currentAppInitialSharedCompatSlotUpperE as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
  currentAppInitialSharedCompatSlotUpperKLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo,
} from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadQueryCompatSlotUpperTLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
  worktreeNewThreadQueryCompatSlotLowerILowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  currentAppInitialSharedFunction0375 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy,
  currentAppInitialSharedMember0481 as AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dAy,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  getIsCustomCheckoutEnabled as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5K,
  useAutoTopUpPricingQuery as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Nt,
  logCheckoutStarted as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Q,
  useBillingCurrencyQuery as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Tt,
  useCreditPurchaseHandler as _appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Z,
} from "../../../runtime/current-app-initial/appgen-library-hot-current-runtime";

import {
  generalAppearanceCurrentCompatSlotLowerD as appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
  generalAppearanceCurrentCompatSlotLowerQ as appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
} from "../../../runtime/current-app-initial/general-appearance-current-runtime";

import { UsageSettingsAutoTopUpShared } from "../auto-top-up-shared";

import { usageSettingsUnit12 } from "./auto-top-up-dialog";

import { UsageSettingsAutoTopUpRuntime } from "./runtime";
import type { AutoTopUpProps } from "./types";

export function usageSettingsUnit9(usageSettingsOperand5: AutoTopUpProps) {
  let {
      serverState: serverState,
      creditDetails: creditDetails,
      enableAutoTopUpMutation: enableAutoTopUpMutation,
      updateAutoTopUpMutation: updateAutoTopUpMutation,
      disableAutoTopUpMutation: disableAutoTopUpMutation,
    } = usageSettingsOperand5,
    usageSettingsBinding149 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    usageSettingsBinding150 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    usageSettingsBinding151 =
      AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dAy(),
    usageSettingsBinding152 =
      _appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Z(),
    usageSettingsBinding153 = {
      enabled: !0,
    };
  let { data: data } =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Tt(
        usageSettingsBinding153,
      ),
    usageSettingsBinding154 = {
      billingCurrency: data,
      enabled: !0,
    };
  let { data: _data } =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Nt(
        usageSettingsBinding154,
      ),
    [usageSettingsBinding155, usageSettingsBinding156] = (0,
    UsageSettingsAutoTopUpRuntime.react.useState)(!1),
    usageSettingsBinding157 = React.createElement(
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.usage.credit.balance.title`,
        defaultMessage: `Credits balance`,
        description: `Title for the credits balance section`,
      },
    );
  let usageSettingsBinding158 = React.createElement(
    appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Header,
    {
      className: `pb-3 [&>div>div]:!text-sm`,
      title: usageSettingsBinding157,
      subtitle: React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.credit.balance.description`,
          defaultMessage: `Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>`,
          description: `Description for the credits balance section in usage settings`,
          values: {
            link: usageSettingsUnit10,
          },
        },
      ),
    },
  );
  let usageSettingsBinding159 =
    UsageSettingsAutoTopUpShared.usageSettingsUnit29({
      intl: usageSettingsBinding150,
      creditDetails: creditDetails,
      pricingInfo: _data,
    });
  let usageSettingsBinding160 = React.createElement(
    `div`,
    {
      className: `text-sm text-token-text-primary`,
    },
    usageSettingsBinding159,
  );
  let usageSettingsBinding161, usageSettingsBinding162;
  ((usageSettingsBinding161 = React.createElement(
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
    {
      id: `settings.usage.credit.balance.current`,
      defaultMessage: `Current balance`,
      description: `Label below the current credits balance amount`,
    },
  )),
    (usageSettingsBinding162 = React.createElement(`span`, {
      "aria-hidden": !0,
      className: `size-0.5 rounded-full bg-current`,
    })));
  let usageSettingsBinding163 = () => {
    usageSettingsBinding152({
      intent: `auto-reload`,
      isAutoReloadEnabled: serverState.isEnabled,
      source: `usage_settings_auto_reload_cta`,
      openLegacyAutoReload: () => {
        usageSettingsBinding156(!0);
      },
    });
  };
  let usageSettingsBinding164 = serverState.isEnabled
    ? React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.credit.balance.manageAutoReload`,
          defaultMessage: `Manage auto-reload`,
          description: `Button label to manage active auto reload from the credits balance section`,
        },
      )
    : React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.credit.balance.setupAutoReload`,
          defaultMessage: `Set up auto-reload`,
          description: `Button label to set up auto reload from the credits balance section`,
        },
      );
  let usageSettingsBinding165 = React.createElement(
    `div`,
    {
      className: `flex flex-wrap items-center gap-x-1 text-sm text-token-text-secondary`,
    },
    usageSettingsBinding161,
    usageSettingsBinding162,
    React.createElement(
      `button`,
      {
        type: `button`,
        className: `cursor-interaction text-token-text-link-foreground`,
        onClick: usageSettingsBinding163,
      },
      usageSettingsBinding164,
    ),
  );
  let usageSettingsBinding166 = React.createElement(
    `div`,
    {
      className: `flex min-w-0 flex-1 flex-col gap-1`,
    },
    usageSettingsBinding160,
    usageSettingsBinding165,
  );
  let usageSettingsBinding167 = (usageSettingsOperand38) => {
    let usageSettingsBinding342 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5K(
        usageSettingsBinding151,
        `personal`,
      );
    (appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5Q(
      usageSettingsBinding149,
      {
        audience: `personal`,
        checkoutKind: `standalone_credit`,
        entryPoint: `usage_settings_purchase_cta`,
      },
    ),
      usageSettingsBinding152({
        event: usageSettingsOperand38,
        intent: `purchase`,
        isAutoReloadEnabled: serverState.isEnabled,
        isCustomCheckoutEnabled: usageSettingsBinding342,
        legacyUrl: UsageSettingsAutoTopUpRuntime.purchaseUrl,
        source: `usage_settings_purchase_cta`,
      }));
  };
  let usageSettingsBinding168 = React.createElement(
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
    {
      id: `settings.usage.credit.balance.buyCredits`,
      defaultMessage: `Buy credits`,
      description: `Button label to open the credit purchase flow`,
    },
  );
  let usageSettingsBinding169 = React.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
    {
      color: `outline`,
      size: `toolbar`,
      onClick: usageSettingsBinding167,
    },
    usageSettingsBinding168,
  );
  let usageSettingsBinding170 = React.createElement(
    appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
    null,
    usageSettingsBinding158,
    React.createElement(
      appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Content,
      null,
      React.createElement(
        appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
        null,
        React.createElement(
          `div`,
          {
            className: `flex items-center justify-between gap-4 p-4`,
          },
          usageSettingsBinding166,
          usageSettingsBinding169,
        ),
      ),
    ),
  );
  let usageSettingsBinding171 = usageSettingsBinding155
    ? React.createElement(usageSettingsUnit12, {
        open: usageSettingsBinding155,
        serverState: serverState,
        creditDetails: creditDetails,
        enableAutoTopUpMutation: enableAutoTopUpMutation,
        updateAutoTopUpMutation: updateAutoTopUpMutation,
        disableAutoTopUpMutation: disableAutoTopUpMutation,
        onOpenChange: usageSettingsBinding156,
      })
    : null;
  return React.createElement(
    UsageSettingsAutoTopUpRuntime.jsxRuntime.Fragment,
    null,
    usageSettingsBinding170,
    usageSettingsBinding171,
  );
}

function usageSettingsUnit10(usageSettingsOperand52) {
  return React.createElement(
    `a`,
    {
      href: UsageSettingsAutoTopUpRuntime.rateCardUrl,
      target: `_blank`,
      rel: `noopener noreferrer`,
      className: `inline-flex cursor-interaction text-token-text-link-foreground`,
      onClick: usageSettingsUnit11,
    },
    usageSettingsOperand52,
  );
}

function usageSettingsUnit11(usageSettingsOperand77) {
  appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs(
    {
      event: usageSettingsOperand77,
      href: UsageSettingsAutoTopUpRuntime.rateCardUrl,
      initiator: `open_in_browser_bridge`,
    },
  );
}
