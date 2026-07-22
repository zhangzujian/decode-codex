// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~nssizff1-CJzQAI5S.js
// Current Statsig bindings plus the Codex gate-store and analytics helpers.
import { createContext } from "react";
import { StatsigMetadataProvider, StatsigSession } from "@statsig/client-core";
import { StatsigClient } from "@statsig/js-client";
import {
  StatsigProvider,
  useDynamicConfig,
  useGateValue,
  useLayer,
  useStatsigClient,
} from "@statsig/react-bindings";
type StatsigClientLike = {
  checkGate(name: string): boolean;
  getContext(): {
    user?: {
      appVersion?: string;
    };
  };
  getDynamicConfig(name: string, options?: unknown): unknown;
  getExperiment?(name: string, options?: unknown): unknown;
  getLayer(name: string, options?: unknown): unknown;
  logEvent(
    name: string,
    value?: unknown,
    metadata?: Record<string, string>,
  ): void;
  on(event: "values_updated", listener: (event?: unknown) => void): void;
  off(event: "values_updated", listener: (event?: unknown) => void): void;
};
type StatsigGateStore = {
  client: StatsigClientLike | null;
  gateNames: Set<string>;
  gateValues: Map<string, boolean>;
};
const statsigGateStore: StatsigGateStore = {
  client: null,
  gateNames: new Set(),
  gateValues: new Map(),
};
const statsigClientStore = {
  current: statsigGateStore.client,
};
const statsigGateValueStore = statsigGateStore.gateValues;
const StatsigReadyContext = createContext(false);
function refreshStatsigGateStore(store: StatsigGateStore): void {
  const client = store.client;
  if (client == null) return;
  for (const gateName of store.gateNames) {
    store.gateValues.set(gateName, client.checkGate(gateName));
  }
}
function bindStatsigClientToGateStore(
  store: StatsigGateStore,
  client: StatsigClientLike,
): () => void {
  const refresh = () => refreshStatsigGateStore(store);
  store.client = client;
  refresh();
  client.on("values_updated", refresh);
  return () => client.off("values_updated", refresh);
}
function initCodexStatsigRuntime(): void {}
function loadStatsigClientRuntime(): typeof StatsigClient {
  return StatsigClient;
}
function useCodexStatsigClient() {
  return useStatsigClient();
}
function useStatsigLayer(name: string, options?: unknown): unknown {
  return useLayer(name, options);
}
function useStatsigLoading(): boolean {
  return useStatsigClient().isLoading;
}
function getStatsigLayer(
  client: StatsigClientLike,
  name: string,
  options?: unknown,
): unknown {
  return client.getLayer(name, options);
}
function getStatsigClient(): StatsigClientLike {
  return useStatsigClient().client;
}
function initStatsigGateStore(): void {}
function checkStatsigGate(client: StatsigClientLike, name: string): boolean {
  return client.checkGate(name);
}
function useStatsigDynamicConfig(name: string, options?: unknown): unknown {
  return useDynamicConfig(name, options);
}
function checkStatsigGateFromStore(
  store: StatsigGateStore,
  name: string,
): boolean {
  return store.client?.checkGate(name) ?? false;
}
function getStatsigExperiment(
  client: StatsigClientLike,
  name: string,
  options?: unknown,
): unknown {
  return client.getExperiment?.(name, options);
}
function useStatsigGateValue(name: string): boolean {
  return useGateValue(name);
}
function serializeStatsigEventMetadata(
  metadata: Record<string, unknown>,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(metadata)
      .filter((entry): entry is [string, string | number | boolean] =>
        ["string", "number", "boolean"].includes(typeof entry[1]),
      )
      .map(([key, value]) => [key, String(value)]),
  );
}
function buildStatsigOriginMetadata(
  client: Pick<StatsigClientLike, "getContext">,
) {
  const appVersion = client.getContext().user?.appVersion;
  return {
    origin: "codex_vscode",
    ...(appVersion
      ? {
          app_version: appVersion,
        }
      : {}),
  };
}
function useStatsigEventLoggers() {
  const { client } = useStatsigClient();
  return {
    logEventWithStatsig(
      name: string,
      metadata?: Record<string, unknown>,
    ): void {
      client.logEvent(
        name,
        undefined,
        serializeStatsigEventMetadata({
          ...buildStatsigOriginMetadata(client),
          ...metadata,
        }),
      );
    },
    logValueEventWithStatsig(
      name: string,
      value?: unknown,
      metadata?: Record<string, unknown>,
    ): void {
      client.logEvent(
        name,
        value,
        serializeStatsigEventMetadata({
          ...buildStatsigOriginMetadata(client),
          ...metadata,
        }),
      );
    },
  };
}
function loadStatsigReactBindings() {
  return {
    StatsigProvider,
    useDynamicConfig,
    useGateValue,
    useLayer,
    useStatsigClient,
  };
}
function loadStatsigCore() {
  return {
    StatsigMetadataProvider,
    StatsigSession,
  };
}
export {
  bindStatsigClientToGateStore,
  initCodexStatsigRuntime,
  loadStatsigClientRuntime,
  useCodexStatsigClient,
  useStatsigLayer,
  useStatsigLoading,
  statsigClientStore,
  statsigGateValueStore,
  getStatsigLayer,
  getStatsigClient,
  initStatsigGateStore,
  checkStatsigGate,
  useStatsigDynamicConfig,
  checkStatsigGateFromStore,
  getStatsigExperiment,
  useStatsigGateValue,
  StatsigReadyContext,
  useStatsigEventLoggers,
  loadStatsigReactBindings,
  loadStatsigCore,
};
