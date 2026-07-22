// Restored from ref/webview/assets/pricing-plan-page-CdwnkT4j.js
// Pricing plan page restored from the current Codex webview chunk.

import {
  worktreeNewThreadQueryCompatSlotUpperLLowerD as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
  worktreeNewThreadQueryCompatSlotLowerMLowerH as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  currentAppInitialSharedFunction0375 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { PlanBillingPeriodSegmentedControl as subscriptionUpdatePlanO } from "../../../settings/subscription-update-plan/index";

import { formatPlanPriceParts as planPricingN } from "../../../utils/plan-pricing";

import {
  getBusinessPlanFeatureItems,
  getPersonalPlanFeatureItems,
} from "../../pricing-plan-page/features";

import { PricingPlanCopy } from "./copy";

import { PricingPlanFormatting } from "./formatting";

import {
  highlightedPlanButtonClassName,
  planButtonClassName,
  pricingPlanReactRuntime,
} from "./runtime";

function PersonalPricingPlanCard(pricingPlanOperand4) {
  let {
      card: card,
      isLoading: isLoading,
      onCtaClick: onCtaClick,
      onSelectProPlan: onSelectProPlan,
      pricingInfo: pricingInfo,
      proPlan: proPlan,
      showProPlanSelector: showProPlanSelector,
    } = pricingPlanOperand4,
    pricingPlanBinding127 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    pricingPlanBinding128 =
      pricingInfo == null
        ? null
        : planPricingN({
            amount: pricingInfo.monthlyAmounts[card.targetPlan],
            currencyCode: pricingInfo.currencyCode,
            intl: pricingPlanBinding127,
            minorUnitExponent: pricingInfo.minorUnitExponent,
          });
  let pricingPlanBinding129 = pricingPlanBinding128,
    pricingPlanBinding130 = card.highlighted,
    pricingPlanBinding131 = pricingPlanReactRuntime.createElement(
      PricingPlanCopy.PersonalPlanTitle,
      {
        cardId: card.id,
      },
    );
  let pricingPlanBinding132 = card.highlighted
    ? pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.popular`,
          defaultMessage: `POPULAR`,
          description: `Badge labeling the emphasized Plus offer on the plan selection page`,
        },
      )
    : null;
  let pricingPlanBinding133 =
    pricingPlanBinding129 == null
      ? null
      : pricingPlanReactRuntime.createElement(`span`, {
          className: `flex h-full flex-col justify-end gap-0.5`,
          children: [
            card.id === `pro`
              ? pricingPlanReactRuntime.createElement(`span`, {
                  className: `text-[10px] leading-none text-token-text-secondary [@container_(min-width:44rem)]:text-[11px]`,
                  children: pricingPlanReactRuntime.createElement(
                    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.usage.pricingPlanPage.personal.pro.from`,
                      defaultMessage: `From`,
                      description: `Label shown above the starting Pro plan price`,
                    },
                  ),
                })
              : null,
            pricingPlanReactRuntime.createElement(
              PricingPlanFormatting.LocalizedPlanPrice,
              {
                price: pricingPlanBinding129,
                cadence: pricingPlanReactRuntime.createElement(
                  appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                  {
                    id: `settings.usage.pricingPlanPage.personal.monthlyCadence`,
                    defaultMessage: `/ month`,
                    description: `Monthly cadence label shown after a localized personal plan price`,
                  },
                ),
              },
            ),
          ],
        });
  let pricingPlanBinding134, pricingPlanBinding135;
  ((pricingPlanBinding134 = pricingPlanReactRuntime.createElement(
    PricingPlanCopy.PersonalPlanDescription,
    {
      cardId: card.id,
    },
  )),
    (pricingPlanBinding135 = pricingPlanReactRuntime.createElement(
      PricingPlanCopy.PersonalPlanFooter,
      {
        cardId: card.id,
      },
    )));
  let pricingPlanBinding136 =
    showProPlanSelector && card.id === `pro`
      ? pricingPlanReactRuntime.createElement(subscriptionUpdatePlanO, {
          ariaLabel: pricingPlanBinding127.formatMessage({
            id: `settings.usage.pricingPlanPage.proUsageSelector`,
            defaultMessage: `Pro usage level`,
            description: `Accessible label for selecting Pro 5x or Pro 20x`,
          }),
          options: [
            {
              id: appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PROLITE,
              label: `5x`,
            },
            {
              id: appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PRO,
              label: `20x`,
            },
          ],
          selectedId: proPlan,
          onSelect: onSelectProPlan,
        })
      : null;
  let pricingPlanBinding137 = getPersonalPlanFeatureItems(card.id);
  let pricingPlanBinding138 =
      card.highlighted && highlightedPlanButtonClassName,
    pricingPlanBinding139 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        planButtonClassName,
        pricingPlanBinding138,
      );
  let pricingPlanBinding140 = card.action === `current` ? `outline` : `primary`,
    pricingPlanBinding141 = card.action === `current`,
    pricingPlanBinding142 = (pricingPlanOperand65) => {
      card.action !== `current` &&
        onCtaClick(card.action, card.targetPlan, pricingPlanOperand65);
    };
  let pricingPlanBinding143 = isLoading
    ? pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.loadingPlanChange`,
          defaultMessage: `Loading…`,
          description: `Label shown in a pricing plan button while loading its confirmation dialog`,
        },
      )
    : pricingPlanReactRuntime.createElement(
        PricingPlanCopy.PersonalPlanCtaLabel,
        {
          action: card.action,
          cardId: card.id,
        },
      );
  let pricingPlanBinding144 = pricingPlanReactRuntime.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
    {
      className: pricingPlanBinding139,
      color: pricingPlanBinding140,
      disabled: pricingPlanBinding141,
      loading: isLoading,
      size: `default`,
      onClick: pricingPlanBinding142,
      children: pricingPlanBinding143,
    },
  );
  return pricingPlanReactRuntime.createElement(
    PricingPlanFormatting.PricingPlanCardShell,
    {
      highlighted: pricingPlanBinding130,
      title: pricingPlanBinding131,
      badge: pricingPlanBinding132,
      price: pricingPlanBinding133,
      description: pricingPlanBinding134,
      footer: pricingPlanBinding135,
      headerControl: pricingPlanBinding136,
      reserveHeaderControlSpace: showProPlanSelector,
      features: pricingPlanBinding137,
      cta: pricingPlanBinding144,
    },
  );
}

function BusinessPricingPlanCard(pricingPlanOperand8) {
  let {
      card: card,
      onCtaClick: onCtaClick,
      pricingInfo: pricingInfo,
    } = pricingPlanOperand8,
    pricingPlanBinding167 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    pricingPlanBinding168 =
      card.id === `business_chatgpt_codex` && pricingInfo != null
        ? planPricingN({
            amount: pricingInfo.monthlyAmounts.business,
            currencyCode: pricingInfo.businessCurrencyCode,
            intl: pricingPlanBinding167,
            minorUnitExponent: pricingInfo.businessMinorUnitExponent,
          })
        : null;
  let pricingPlanBinding169 = pricingPlanBinding168,
    pricingPlanBinding170 = card.highlighted,
    pricingPlanBinding171 = pricingPlanReactRuntime.createElement(
      PricingPlanCopy.BusinessPlanTitle,
      {
        cardId: card.id,
      },
    );
  let pricingPlanBinding172 =
    card.id === `business_codex`
      ? pricingPlanReactRuntime.createElement(`span`, {
          className: `translate-y-1 text-lg font-medium [@container_(min-width:44rem)]:text-[28px]`,
          children: pricingPlanReactRuntime.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.usage.pricingPlanPage.business.usagePricing`,
              defaultMessage: `Usage pricing`,
              description: `Price label for usage-priced Codex Business plan`,
            },
          ),
        })
      : pricingPlanBinding169 == null
        ? null
        : pricingPlanReactRuntime.createElement(
            PricingPlanFormatting.LocalizedPlanPrice,
            {
              price: pricingPlanBinding169,
              cadence: pricingPlanReactRuntime.createElement(
                appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.usage.pricingPlanPage.business.monthlyCadence`,
                  defaultMessage: `/ month per seat`,
                  description: `Monthly per-seat cadence label shown after a localized Business plan price`,
                },
              ),
            },
          );
  let pricingPlanBinding173, pricingPlanBinding174, pricingPlanBinding175;
  ((pricingPlanBinding173 = pricingPlanReactRuntime.createElement(
    PricingPlanCopy.BusinessPlanDescription,
    {
      cardId: card.id,
    },
  )),
    (pricingPlanBinding174 = pricingPlanReactRuntime.createElement(
      PricingPlanCopy.BusinessPlanFooter,
      {
        cardId: card.id,
      },
    )),
    (pricingPlanBinding175 = getBusinessPlanFeatureItems(card.id)));
  let pricingPlanBinding176 =
    card.id === `business_chatgpt_codex`
      ? pricingPlanBinding167.formatMessage({
          id: `settings.usage.pricingPlanPage.business.teamCtaAriaLabel`,
          defaultMessage: `Get started with Business ChatGPT & Codex`,
          description: `Accessible label for purchasing the Business ChatGPT and Codex offer`,
        })
      : pricingPlanBinding167.formatMessage({
          id: `settings.usage.pricingPlanPage.business.codexCtaAriaLabel`,
          defaultMessage: `Get started with Business Codex`,
          description: `Accessible label for purchasing the usage-priced Codex Business offer`,
        });
  let pricingPlanBinding177 =
      card.highlighted && highlightedPlanButtonClassName,
    pricingPlanBinding178 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        planButtonClassName,
        pricingPlanBinding177,
      );
  let pricingPlanBinding179 = (pricingPlanOperand73) => {
    onCtaClick(`upgrade`, card.targetPlan, pricingPlanOperand73);
  };
  let pricingPlanBinding180 = pricingPlanReactRuntime.createElement(
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
    {
      id: `settings.usage.pricingPlanPage.business.codexCta`,
      defaultMessage: `Get started`,
      description: `CTA for purchasing a Business offer from the pricing plan page`,
    },
  );
  let pricingPlanBinding181 = pricingPlanReactRuntime.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
    {
      "aria-label": pricingPlanBinding176,
      className: pricingPlanBinding178,
      color: `primary`,
      size: `default`,
      onClick: pricingPlanBinding179,
      children: pricingPlanBinding180,
    },
  );
  return pricingPlanReactRuntime.createElement(
    PricingPlanFormatting.PricingPlanCardShell,
    {
      highlighted: pricingPlanBinding170,
      title: pricingPlanBinding171,
      price: pricingPlanBinding172,
      description: pricingPlanBinding173,
      footer: pricingPlanBinding174,
      features: pricingPlanBinding175,
      cta: pricingPlanBinding181,
    },
  );
}

export class PricingPlanCards {
  static PersonalPricingPlanCard = PersonalPricingPlanCard;
  static BusinessPricingPlanCard = BusinessPricingPlanCard;
}
