// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
import { createQueryKey } from "../app-server-mutation-runtime";
import { sendHostRequest } from "../host-request-runtime";
import { resolveServiceTierObject } from "./options";
import { threadServiceTierByHostSignal } from "./state";
import type { ModelOption, ServiceTier } from "./types";

export function getServiceTierForModel(
  modelOption: ModelOption | null | undefined,
  serviceTier: string | null | undefined,
): ServiceTier | null;
export function getServiceTierForModel(
  scope: { get?: (signal: unknown, key?: unknown) => unknown },
  hostId: string | null | undefined,
  model: string | null | undefined,
): Promise<string | null>;
export function getServiceTierForModel(
  first:
    | ModelOption
    | { get?: (signal: unknown, key?: unknown) => unknown }
    | null
    | undefined,
  second: string | null | undefined,
  third?: string | null,
): ServiceTier | Promise<string | null> | null {
  if (third !== undefined || typeof first?.get === "function") {
    const scope = first as {
      get?: (signal: unknown, key?: unknown) => unknown;
    };
    const hostId = second ?? LOCAL_HOST_ID;
    const model = third ?? null;
    const threadTier = scope.get?.(threadServiceTierByHostSignal, hostId) as
      | { serviceTier?: string | null; type?: string }
      | string
      | null
      | undefined;
    if (typeof threadTier === "string") return Promise.resolve(threadTier);
    if (threadTier?.type === "custom") {
      return Promise.resolve(threadTier.serviceTier ?? null);
    }
    const queryKey = createQueryKey("model-service-tier", { hostId, model });
    return sendHostRequest<{ serviceTier?: string | null }>(
      "resolve-model-service-tier",
      { params: { hostId, model } },
    )
      .then((result) => result.serviceTier ?? null)
      .catch(() => {
        void queryKey;
        return null;
      });
  }
  return resolveServiceTierObject(
    first as ModelOption | null | undefined,
    second,
  );
}
