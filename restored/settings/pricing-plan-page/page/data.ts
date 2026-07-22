// Restored from ref/webview/assets/pricing-plan-page-CdwnkT4j.js
// Pricing plan page restored from the current Codex webview chunk.

import { once as rolldownRuntimeN } from "../../../runtime/commonjs-interop";

import {
  worktreeNewThreadQueryCompatSlotUpperLLowerD as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd,
  worktreeNewThreadQueryCompatSlotUpperRLowerD as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwRd,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  codexTeamPurchaseUrl as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5D,
  chatGptTeamPurchaseUrl as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5E,
  getConsumerPlanPurchaseUrl as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5N,
  initCodexPlanPurchaseUrlsRuntime as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5P,
  getPlanChangeAction as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5J,
} from "../../../runtime/current-app-initial/appgen-library-hot-current-runtime";

function buildPersonalPlanCards(pricingPlanOperand47, pricingPlanOperand48) {
  let pricingPlanBinding225 = [];
  return (
    pricingPlanOperand47 ===
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.FREE &&
      pricingPlanBinding225.push({
        action: `current`,
        highlighted: !1,
        id: `free`,
        targetPlan:
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.FREE,
      }),
    pricingPlanBinding225.push(
      {
        action:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5J(
            {
              currentPlan: pricingPlanOperand47,
              targetPlan:
                appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.GO,
            },
          ),
        highlighted: !1,
        id: `go`,
        targetPlan:
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.GO,
      },
      {
        action:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5J(
            {
              currentPlan: pricingPlanOperand47,
              targetPlan:
                appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PLUS,
            },
          ),
        highlighted:
          pricingPlanOperand47 ===
            appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.FREE ||
          pricingPlanOperand47 ===
            appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.GO,
        id: `plus`,
        targetPlan:
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PLUS,
      },
      {
        action:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5J(
            {
              currentPlan: pricingPlanOperand47,
              targetPlan: pricingPlanOperand48,
            },
          ),
        highlighted:
          pricingPlanOperand47 ===
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PLUS,
        id: `pro`,
        targetPlan: pricingPlanOperand48,
      },
    ),
    pricingPlanBinding225
  );
}

function getDefaultProPlan(pricingPlanOperand66) {
  return pricingPlanOperand66 ===
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PROLITE ||
    pricingPlanOperand66 ===
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PRO
    ? appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PRO
    : appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PROLITE;
}

function buildCurrentPlanCard(pricingPlanOperand56) {
  let pricingPlanBinding243;
  switch (pricingPlanOperand56) {
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.FREE:
      pricingPlanBinding243 = `free`;
      break;
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.GO:
      pricingPlanBinding243 = `go`;
      break;
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PLUS:
      pricingPlanBinding243 = `plus`;
      break;
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PROLITE:
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PRO:
      pricingPlanBinding243 = `pro`;
      break;
  }
  return {
    action: `current`,
    highlighted: !1,
    id: pricingPlanBinding243,
    targetPlan: pricingPlanOperand56,
  };
}

function getPlanCheckoutUrl(pricingPlanOperand57, pricingPlanOperand58) {
  switch (pricingPlanOperand58) {
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.GO:
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.FREE:
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PLUS:
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PROLITE:
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.PRO:
      return appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5N(
        {
          currentPlan: pricingPlanOperand57,
          targetPlan: pricingPlanOperand58,
        },
      );
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.SELF_SERVE_BUSINESS:
      return appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5E;
    case appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.SELF_SERVE_BUSINESS_USAGE_BASED:
      return appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5D;
  }
}

var businessPlanCards;

var initBusinessPlanCards = rolldownRuntimeN(() => {
  (appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwRd(),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotFjhbmao5P(),
    (businessPlanCards = [
      {
        highlighted: !0,
        id: `business_chatgpt_codex`,
        targetPlan:
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.SELF_SERVE_BUSINESS,
      },
      {
        highlighted: !1,
        id: `business_codex`,
        targetPlan:
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLd.SELF_SERVE_BUSINESS_USAGE_BASED,
      },
    ]));
});

export class PricingPlanData {
  static buildPersonalPlanCards = buildPersonalPlanCards;
  static getDefaultProPlan = getDefaultProPlan;
  static buildCurrentPlanCard = buildCurrentPlanCard;
  static getPlanCheckoutUrl = getPlanCheckoutUrl;
  static initializeBusinessPlanCards = initBusinessPlanCards;
  static get businessPlanCards() {
    return businessPlanCards;
  }
}
