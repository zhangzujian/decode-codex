// Restored from ref/webview/assets/pricing-plan-page-CdwnkT4j.js
// Pricing plan page restored from the current Codex webview chunk.

import { worktreeNewThreadQueryCompatSlotLowerMLowerH as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh } from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { pricingPlanElementFactory, pricingPlanReactRuntime } from "./runtime";

function LocalizedPlanPrice(pricingPlanOperand34) {
  let { cadence: cadence, price: price } = pricingPlanOperand34,
    pricingPlanBinding210 = pricingPlanReactRuntime.createElement(`span`, {
      className: `sr-only`,
      children: price.formatted,
    });
  let pricingPlanBinding211 = price.parts.map(renderPricePart);
  let pricingPlanBinding212 = pricingPlanReactRuntime.createElement(`span`, {
    "aria-hidden": `true`,
    className: `leading-none whitespace-nowrap`,
    children: pricingPlanBinding211,
  });
  let pricingPlanBinding213 =
    price.currencyCodeLabel == null
      ? null
      : pricingPlanReactRuntime.createElement(
          pricingPlanElementFactory.Fragment,
          {
            children: [price.currencyCodeLabel, ` `],
          },
        );
  let pricingPlanBinding214 = pricingPlanReactRuntime.createElement(`span`, {
    className: `mb-0.5 text-[10px] text-token-text-secondary [@container_(min-width:44rem)]:text-[11px]`,
    children: [pricingPlanBinding213, cadence],
  });
  return pricingPlanReactRuntime.createElement(`span`, {
    className: `flex items-end gap-1.5`,
    children: [
      pricingPlanBinding210,
      pricingPlanBinding212,
      pricingPlanBinding214,
    ],
  });
}

function renderPricePart(pricingPlanOperand52, pricingPlanOperand53) {
  return pricingPlanOperand52.type === `currency`
    ? pricingPlanReactRuntime.createElement(`span`, {
        key: pricingPlanOperand53,
        className: `relative top-1 align-top text-[10px] text-token-text-secondary [@container_(min-width:44rem)]:top-1.5 [@container_(min-width:44rem)]:text-xs`,
        children: pricingPlanOperand52.value,
      })
    : pricingPlanReactRuntime.createElement(`span`, {
        key: pricingPlanOperand53,
        className: `text-xl font-medium [@container_(min-width:44rem)]:text-[32px]`,
        children: pricingPlanOperand52.value,
      });
}

function PricingPlanCardShell(pricingPlanOperand9) {
  let {
      badge: badge,
      cta: cta,
      description: description,
      features: features,
      footer: footer,
      headerControl: headerControl,
      highlighted: highlighted,
      price: price,
      reserveHeaderControlSpace: reserveHeaderControlSpace,
      title: title,
    } = pricingPlanOperand9,
    pricingPlanBinding184 =
      reserveHeaderControlSpace === void 0 ? !1 : reserveHeaderControlSpace,
    pricingPlanBinding185 = highlighted
      ? `border-[color-mix(in_srgb,var(--pricing-plan-highlight)_30%,transparent)] bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_6%,transparent)]`
      : `border-token-border bg-token-bg-primary`,
    pricingPlanBinding186 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        `flex min-h-[360px] flex-col rounded-xl border p-4 [@container_(min-width:44rem)]:min-h-[30rem] [@container_(min-width:44rem)]:p-5 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:p-6 [@container_(min-width:84rem)]:min-h-[clamp(38rem,calc(100dvh-26rem),45rem)]`,
        pricingPlanBinding185,
      );
  let pricingPlanBinding187 = pricingPlanBinding184 ? `min-h-10` : `min-h-6`,
    pricingPlanBinding188 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        `flex items-start justify-between gap-2 text-[19px] font-medium [@container_(min-width:44rem)]:text-[24px]`,
        pricingPlanBinding187,
      );
  let pricingPlanBinding189 =
    headerControl ??
    (badge == null
      ? null
      : pricingPlanReactRuntime.createElement(`span`, {
          className: `rounded-full bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_15%,transparent)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--pricing-plan-highlight)]`,
          children: badge,
        }));
  let pricingPlanBinding190 = pricingPlanReactRuntime.createElement(`div`, {
    className: pricingPlanBinding188,
    children: [title, pricingPlanBinding189],
  });
  let pricingPlanBinding191 = pricingPlanReactRuntime.createElement(`div`, {
    className: `mt-3 flex h-12 items-center`,
    children: price,
  });
  let pricingPlanBinding192 = pricingPlanReactRuntime.createElement(`div`, {
    className: `mt-1 min-h-8 text-xs text-token-text-secondary [@container_(min-width:44rem)]:mt-2 [@container_(min-width:44rem)]:text-base [@container_(min-width:44rem)]:font-medium [@container_(min-width:44rem)]:text-token-text-primary`,
    children: description,
  });
  let pricingPlanBinding193 = pricingPlanReactRuntime.createElement(`div`, {
    className: `[@container_(min-width:44rem)]:min-h-36`,
    children: [
      pricingPlanBinding190,
      pricingPlanBinding191,
      pricingPlanBinding192,
    ],
  });
  let pricingPlanBinding194 = pricingPlanReactRuntime.createElement(`div`, {
    className: `mt-3 [@container_(min-width:44rem)]:mb-2 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:mt-4 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:mb-2.5`,
    children: cta,
  });
  let pricingPlanBinding195 = features.map(PricingPlanFeatureRow);
  let pricingPlanBinding196 = pricingPlanReactRuntime.createElement(`div`, {
    className: `mt-4 flex flex-col gap-2 [@container_(min-width:44rem)]:gap-4 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:gap-5`,
    children: pricingPlanBinding195,
  });
  let pricingPlanBinding197 = pricingPlanReactRuntime.createElement(`div`, {
    className: `mt-auto min-h-4 pt-5 text-[10px] leading-4 text-token-text-tertiary [@container_(min-width:44rem)]:text-xs [@container_(min-width:44rem)]:[@media(min-height:72rem)]:pt-6`,
    children: footer,
  });
  return pricingPlanReactRuntime.createElement(`article`, {
    className: pricingPlanBinding186,
    children: [
      pricingPlanBinding193,
      pricingPlanBinding194,
      pricingPlanBinding196,
      pricingPlanBinding197,
    ],
  });
}

function PricingPlanFeatureRow(pricingPlanOperand54, pricingPlanOperand55) {
  return pricingPlanReactRuntime.createElement(`div`, {
    key: pricingPlanOperand55,
    className: `flex items-center gap-1.5 text-xs leading-[18px] [@container_(min-width:44rem)]:gap-3.5 [@container_(min-width:44rem)]:text-sm [@container_(min-width:44rem)]:leading-5`,
    children: [
      (0, pricingPlanReactRuntime.createElement)(pricingPlanOperand54.icon, {
        className: `size-4 shrink-0 [@container_(min-width:44rem)]:size-5`,
      }),
      pricingPlanReactRuntime.createElement(`span`, {
        children: pricingPlanOperand54.label,
      }),
    ],
  });
}

export class PricingPlanFormatting {
  static LocalizedPlanPrice = LocalizedPlanPrice;
  static renderPricePart = renderPricePart;
  static PricingPlanCardShell = PricingPlanCardShell;
  static PricingPlanFeatureRow = PricingPlanFeatureRow;
}
