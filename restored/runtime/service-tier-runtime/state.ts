// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { appScopeL, appScopeUnderscore } from "../../boundaries/app-scope";
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
import { sendHostRequest } from "../host-request-runtime";
import { queryDurations } from "../host-query-runtime";
import { appStoreScope } from "../onboarding-scope-runtime";

export const connectedHostIdsSignal = appScopeUnderscore(appStoreScope, () => [
  LOCAL_HOST_ID,
]);
export const threadServiceTierByHostSignal = appScopeUnderscore(
  appStoreScope,
  () => null,
);
export const nextTurnThreadSettingsSignal = appScopeUnderscore(
  appStoreScope,
  () => null,
);
export const threadParamsByIdSignal = appScopeUnderscore(
  appStoreScope,
  () => null,
);

export const hostConfigQueryKey = ["config", "host"] as const;
export const hostConfigQueryOptions = appScopeL(appStoreScope, (input) => {
  const params = (input ?? {}) as { hostId?: string | null };
  const hostId = params.hostId ?? LOCAL_HOST_ID;
  const queryKey = [...hostConfigQueryKey, hostId, null] as const;
  return {
    data: { id: hostId, service_tier: null },
    isError: false,
    isLoading: false,
    isPending: false,
    queryFn: () =>
      sendHostRequest("read-config-for-host", {
        hostId,
        includeLayers: false,
      }),
    queryKey,
    staleTime: queryDurations.FIVE_SECONDS,
  };
});

export const serviceTierChangedEvent = {
  name: "service_tier_changed",
  target: "composer",
} as const;
