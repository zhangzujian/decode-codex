// Restored from ref/webview/assets/pricing-plan-page-CdwnkT4j.js
// Pricing plan page restored from the current Codex webview chunk.

import { worktreeNewThreadQueryCompatSlotLowerILowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs } from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  adsHelpUrl,
  billingHelpUrl,
  chatGptProHelpUrl,
  chatGptTeamHelpUrl,
  pricingPlanReactRuntime,
} from "./runtime";

function PersonalPlanTitle(pricingPlanOperand33) {
  let { cardId: cardId } = pricingPlanOperand33;
  switch (cardId) {
    case `free`: {
      let pricingPlanBinding238;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.free.title`,
          defaultMessage: `Free`,
          description: `Free plan card title`,
        },
      );
    }
    case `go`: {
      let pricingPlanBinding241;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.go.title`,
          defaultMessage: `Go`,
          description: `Go plan card title`,
        },
      );
    }
    case `plus`: {
      let pricingPlanBinding239;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.plus.title`,
          defaultMessage: `Plus`,
          description: `Plus plan card title`,
        },
      );
    }
    case `pro`: {
      let pricingPlanBinding240;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.pro.title`,
          defaultMessage: `Pro`,
          description: `Pro plan card title`,
        },
      );
    }
  }
}

function PersonalPlanDescription(pricingPlanOperand26) {
  let { cardId: cardId } = pricingPlanOperand26;
  switch (cardId) {
    case `free`: {
      let pricingPlanBinding237;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.free.description`,
          defaultMessage: `See what AI can do`,
          description: `Free plan card description`,
        },
      );
    }
    case `go`: {
      let pricingPlanBinding236;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.go.description`,
          defaultMessage: `Do more with smarter AI`,
          description: `Go plan card description`,
        },
      );
    }
    case `plus`: {
      let pricingPlanBinding234;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.plus.description`,
          defaultMessage: `Unlock the full experience`,
          description: `Plus plan card description`,
        },
      );
    }
    case `pro`: {
      let pricingPlanBinding235;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.pro.description`,
          defaultMessage: `Maximize your productivity`,
          description: `Pro plan card description`,
        },
      );
    }
  }
}

function PersonalPlanFooter(pricingPlanOperand31) {
  let { cardId: cardId } = pricingPlanOperand31;
  switch (cardId) {
    case `free`: {
      let pricingPlanBinding232;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.free.footer`,
          defaultMessage: `Have an existing plan? See <link>billing help</link>`,
          description: `Footer link to billing help shown on the Free plan card`,
          values: {
            link: BillingHelpLink,
          },
        },
      );
    }
    case `go`: {
      let pricingPlanBinding233;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.go.footer`,
          defaultMessage: `This plan may include ads. <link>Learn more</link>`,
          description: `Footer link to ads help shown on the Go plan card`,
          values: {
            link: AdsHelpLink,
          },
        },
      );
    }
    case `plus`:
      return null;
    case `pro`: {
      let pricingPlanBinding231;
      return pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.personal.pro.footer`,
          defaultMessage: `Unlimited subject to abuse guardrails. <link>Learn more</link>`,
          description: `Footer link to Pro usage guardrails shown on the Pro plan card`,
          values: {
            link: ProUsageGuardrailsLink,
          },
        },
      );
    }
  }
}

function ProUsageGuardrailsLink(pricingPlanOperand69) {
  return pricingPlanReactRuntime.createElement(PricingExternalLink, {
    href: chatGptProHelpUrl,
    children: pricingPlanOperand69,
  });
}

function AdsHelpLink(pricingPlanOperand70) {
  return pricingPlanReactRuntime.createElement(PricingExternalLink, {
    href: adsHelpUrl,
    children: pricingPlanOperand70,
  });
}

function BillingHelpLink(pricingPlanOperand71) {
  return pricingPlanReactRuntime.createElement(PricingExternalLink, {
    href: billingHelpUrl,
    children: pricingPlanOperand71,
  });
}

function PersonalPlanCtaLabel(pricingPlanOperand38) {
  let { action: action, cardId: cardId } = pricingPlanOperand38;
  if (action === `current`) {
    let pricingPlanBinding242;
    return pricingPlanReactRuntime.createElement(
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.usage.pricingPlanPage.current`,
        defaultMessage: `Current plan`,
        description: `Disabled button label for the current plan`,
      },
    );
  }
  return action === `upgrade`
    ? pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.upgradeTo`,
          defaultMessage: `Upgrade to {plan}`,
          description: `Button label for selecting a more capable personal plan`,
          values: {
            plan: pricingPlanReactRuntime.createElement(PersonalPlanTitle, {
              cardId: cardId,
            }),
          },
        },
      )
    : pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.downgradeTo`,
          defaultMessage: `Downgrade to {plan}`,
          description: `Button label for selecting a less capable personal plan`,
          values: {
            plan: pricingPlanReactRuntime.createElement(PersonalPlanTitle, {
              cardId: cardId,
            }),
          },
        },
      );
}

function BusinessPlanFooter(pricingPlanOperand50) {
  let { cardId: cardId } = pricingPlanOperand50;
  if (cardId === `business_codex`) return null;
  return pricingPlanReactRuntime.createElement(
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
    {
      id: `settings.usage.pricingPlanPage.business.team.footer`,
      defaultMessage: `For 2+ seats, billed annually. <link>Learn more</link>`,
      description: `Footer link to Business annual billing details shown on the ChatGPT and Codex Business plan card`,
      values: {
        link: BusinessTeamHelpLink,
      },
    },
  );
}

function BusinessTeamHelpLink(pricingPlanOperand72) {
  return pricingPlanReactRuntime.createElement(PricingExternalLink, {
    href: chatGptTeamHelpUrl,
    children: pricingPlanOperand72,
  });
}

function BusinessPlanTitle(pricingPlanOperand45) {
  let { cardId: cardId } = pricingPlanOperand45;
  return cardId === `business_chatgpt_codex`
    ? pricingPlanReactRuntime.createElement(`span`, {
        children: pricingPlanReactRuntime.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.usage.pricingPlanPage.business.team.title`,
            defaultMessage: `Business <product>ChatGPT & Codex</product>`,
            description: `Business plan title combining ChatGPT and Codex`,
            values: {
              product: BusinessChatGptCodexProductText,
            },
          },
        ),
      })
    : pricingPlanReactRuntime.createElement(`span`, {
        children: pricingPlanReactRuntime.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.usage.pricingPlanPage.business.codex.title`,
            defaultMessage: `Business <product>Codex</product>`,
            description: `Usage-priced Codex Business plan title`,
            values: {
              product: BusinessCodexProductText,
            },
          },
        ),
      });
}

function BusinessCodexProductText(pricingPlanOperand63) {
  return pricingPlanReactRuntime.createElement(`span`, {
    className: `text-token-text-secondary`,
    children: pricingPlanOperand63,
  });
}

function BusinessChatGptCodexProductText(pricingPlanOperand62) {
  return pricingPlanReactRuntime.createElement(`span`, {
    className: `text-[var(--pricing-plan-highlight)]`,
    children: pricingPlanOperand62,
  });
}

function PricingExternalLink(pricingPlanOperand49) {
  let { children: children, href: href } = pricingPlanOperand49,
    pricingPlanBinding227 = (pricingPlanOperand64) => {
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs(
        {
          event: pricingPlanOperand64,
          href: href,
          initiator: `open_in_browser_bridge`,
        },
      );
    };
  return pricingPlanReactRuntime.createElement(`a`, {
    className: `cursor-interaction whitespace-nowrap underline underline-offset-2`,
    href: href,
    target: `_blank`,
    rel: `noreferrer`,
    onClick: pricingPlanBinding227,
    children: children,
  });
}

function BusinessPlanDescription(pricingPlanOperand46) {
  let { cardId: cardId } = pricingPlanOperand46;
  return cardId === `business_chatgpt_codex`
    ? pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.business.team.description`,
          defaultMessage: `Get more work done with AI for teams`,
          description: `Description for Business ChatGPT and Codex`,
        },
      )
    : pricingPlanReactRuntime.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.usage.pricingPlanPage.business.codex.description`,
          defaultMessage: `For software development teams`,
          description: `Description for usage-priced Codex Business`,
        },
      );
}

export class PricingPlanCopy {
  static PersonalPlanTitle = PersonalPlanTitle;
  static PersonalPlanDescription = PersonalPlanDescription;
  static PersonalPlanFooter = PersonalPlanFooter;
  static ProUsageGuardrailsLink = ProUsageGuardrailsLink;
  static AdsHelpLink = AdsHelpLink;
  static BillingHelpLink = BillingHelpLink;
  static PersonalPlanCtaLabel = PersonalPlanCtaLabel;
  static BusinessPlanFooter = BusinessPlanFooter;
  static BusinessTeamHelpLink = BusinessTeamHelpLink;
  static BusinessPlanTitle = BusinessPlanTitle;
  static BusinessCodexProductText = BusinessCodexProductText;
  static BusinessChatGptCodexProductText = BusinessChatGptCodexProductText;
  static PricingExternalLink = PricingExternalLink;
  static BusinessPlanDescription = BusinessPlanDescription;
}
