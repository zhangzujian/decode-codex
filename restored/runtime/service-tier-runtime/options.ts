// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { serviceTierMessages } from "./messages";
import type { MessageDescriptor, ModelOption, ServiceTier } from "./types";

const DEFAULT_SERVICE_TIER_ID = "default";

export function normalizeServiceTierId(
  serviceTier: string | null | undefined,
  name?: string | null,
): "fast" | "ultrafast" | null {
  const normalizedName = name?.trim().toLowerCase();
  if (
    serviceTier === "priority" ||
    serviceTier === "fast" ||
    normalizedName === "fast"
  ) {
    return "fast";
  }
  if (serviceTier === "ultrafast" || normalizedName === "ultrafast") {
    return "ultrafast";
  }
  return null;
}

function getServiceTierLabel(
  tier: ServiceTier | null,
): string | MessageDescriptor {
  switch (normalizeServiceTierId(tier?.id ?? null, tier?.name)) {
    case "fast":
      return serviceTierMessages.fastLabel;
    case "ultrafast":
      return serviceTierMessages.ultrafastLabel;
    case null:
      return tier?.name ?? serviceTierMessages.standardLabel;
  }
}

function getServiceTierDescription(
  tier: ServiceTier | null,
): string | MessageDescriptor {
  switch (normalizeServiceTierId(tier?.id ?? null, tier?.name)) {
    case "fast":
      return tier?.description ?? serviceTierMessages.fastDescription;
    case "ultrafast":
      return tier?.description ?? serviceTierMessages.ultrafastDescription;
    case null:
      return tier?.description ?? serviceTierMessages.standardDescription;
  }
}

function findFastServiceTier(modelOption: ModelOption | null | undefined) {
  return (
    modelOption?.serviceTiers?.find(
      (tier) =>
        normalizeServiceTierId(tier.id, tier.name) === "fast" ||
        tier.name.trim().toLowerCase() === "priority",
    ) ?? null
  );
}

export function resolveServiceTierObject(
  modelOption: ModelOption | null | undefined,
  serviceTier: string | null | undefined,
): ServiceTier | null {
  if (serviceTier == null) return null;
  if (serviceTier === "fast") return findFastServiceTier(modelOption);
  return (
    modelOption?.serviceTiers?.find((tier) => tier.id === serviceTier) ?? null
  );
}

export function getAvailableServiceTierOptions(
  modelOption: ModelOption | null | undefined,
) {
  return [
    {
      description: serviceTierMessages.standardDescription,
      iconKind: null,
      label: serviceTierMessages.standardLabel,
      tier: null,
      value: null,
    },
    ...(modelOption?.serviceTiers ?? []).map((tier) => ({
      description: getServiceTierDescription(tier),
      iconKind: normalizeServiceTierId(tier.id, tier.name),
      label: getServiceTierLabel(tier),
      tier,
      value: tier.id,
    })),
  ];
}

export function resolveModelOption(
  models: readonly ModelOption[] | null | undefined,
  model: string | null | undefined,
  serviceTier?: string | null,
): ModelOption | null {
  return (
    models?.find(
      (option) =>
        option.model === model &&
        (serviceTier === undefined ||
          resolveServiceTierObject(option, serviceTier) != null),
    ) ?? null
  );
}

export function resolveActiveServiceTier(
  threadServiceTier: string | null | undefined,
  configServiceTier: string | null | undefined,
): string | null {
  return threadServiceTier ?? configServiceTier ?? null;
}

export function resolveDefaultServiceTier(
  modelOption: ModelOption | null | undefined,
  requestedServiceTier: string | null | undefined,
  isServiceTierAllowed: boolean = true,
): string | null {
  if (!isServiceTierAllowed) return null;
  if (requestedServiceTier == null) {
    const defaultTier = modelOption?.defaultServiceTier ?? null;
    return defaultTier == null
      ? null
      : (resolveServiceTierObject(modelOption, defaultTier)?.id ?? null);
  }
  return requestedServiceTier === DEFAULT_SERVICE_TIER_ID
    ? null
    : requestedServiceTier;
}

export function toServiceTierConfigValue(
  serviceTier: string | null | undefined,
) {
  return serviceTier ?? DEFAULT_SERVICE_TIER_ID;
}

export function toServiceTierThreadOverride(
  serviceTier: string | null | undefined,
) {
  return serviceTier == null
    ? { type: "standard" as const }
    : { serviceTier, type: "custom" as const };
}
