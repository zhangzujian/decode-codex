// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Current-ref Statsig binding. Bc0ZtIBr imports the shared bundle as
// `Sq = my()` for @statsig/client-core and `Cq = py()` for
// @statsig/js-client + @statsig/react-bindings.
import type { ReactElement, ReactNode } from "react";
import {
  my as loadStatsigCoreModule,
  py as loadStatsigReactBindingsModule,
} from "./remote-projects-app-shared-current-bundle";

type StatsigSessionRecord = {
  data: {
    sessionID: string;
    startTime: number;
    lastUpdate: number;
  };
};

type StableIDModule = {
  get(statsigClientKey: string): string | null;
  setOverride(stableId: string, statsigClientKey: string): void;
};

type StatsigSessionModule = {
  get(statsigClientKey: string, updateLastUsed?: boolean): StatsigSessionRecord;
  overrideInitialSessionID(sessionId: string, statsigClientKey: string): void;
  checkForIdleSession(statsigClientKey: string): void;
};

type StatsigMetadataProviderModule = {
  get(): Record<string, unknown>;
  add(metadata: Record<string, unknown>): void;
};

type StatsigUserCustomValue = string | number | boolean | string[] | number[];

type StatsigUserLike = {
  userID?: string;
  customIDs?: Record<string, string | undefined>;
  email?: string;
  ip?: string;
  userAgent?: string;
  country?: string;
  locale?: string;
  appVersion?: string;
  custom?: Record<string, StatsigUserCustomValue>;
  privateAttributes?: Record<string, StatsigUserCustomValue> | null;
  analyticsOnlyMetadata?: Record<string, string | number | boolean>;
  [key: string]: unknown;
};

type StatsigUpdateUserResult = {
  success?: boolean;
  error?: unknown;
};

type StatsigConfigLike = {
  value: unknown;
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

type StatsigLayerLike = {
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

type StatsigClientLike = {
  loadingStatus?: string;
  dataAdapter: {
    setData(payload: string): void;
    prefetchData(user: unknown): Promise<unknown>;
  };
  getContext(): { user: StatsigUserLike };
  initializeSync(): void;
  updateUserAsync(user: unknown): Promise<StatsigUpdateUserResult>;
  updateUserSync(
    user: unknown,
    options: { disableBackgroundCacheRefresh: boolean },
  ): StatsigUpdateUserResult;
  on(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  off(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  checkGate(name: string, options?: unknown): boolean;
  getFeatureGate(
    name: string,
    options?: unknown,
  ): {
    value: boolean;
    details: { reason?: string };
  };
  getDynamicConfig(name: string, options?: unknown): StatsigConfigLike;
  getLayer(name: string, options?: unknown): StatsigLayerLike;
  logEvent(eventName: string, value?: unknown, metadata?: unknown): void;
  flush(): Promise<void>;
};

type UseStatsigClientResult = {
  client: StatsigClientLike;
  checkGate(gateName: string, options?: unknown): boolean;
  getFeatureGate(
    gateName: string,
    options?: unknown,
  ): {
    value: boolean;
    details: { reason?: string };
  };
  getDynamicConfig(configName: string, options?: unknown): StatsigConfigLike;
  getLayer(layerName: string, options?: unknown): StatsigLayerLike;
  logEvent(eventName: string, value?: unknown, metadata?: unknown): void;
  isLoading: boolean;
};

type StatsigClientConstructor = new (
  statsigClientKey: string,
  initialUser: unknown,
  options?: unknown,
) => StatsigClientLike;

type StatsigProviderComponent = (
  props:
    | {
        client: unknown;
        children?: ReactNode;
        loadingComponent?: ReactNode;
      }
    | {
        sdkKey: string;
        user: unknown;
        options?: unknown;
        children?: ReactNode;
        loadingComponent?: ReactNode;
      },
) => ReactElement | null;

type UseClientAsyncInit = (
  statsigClientKey: string,
  initialUser: unknown,
  options?: unknown,
) => {
  client: StatsigClientLike;
  isLoading: boolean;
};

const statsigCoreModule = loadStatsigCoreModule() as {
  StableID: StableIDModule;
  StatsigSession: StatsigSessionModule;
  StatsigMetadataProvider: StatsigMetadataProviderModule;
};

const statsigReactBindingsModule = loadStatsigReactBindingsModule() as {
  StatsigClient: StatsigClientConstructor;
  StatsigProvider: StatsigProviderComponent;
  useClientAsyncInit: UseClientAsyncInit;
  useDynamicConfig(configName: string, options?: unknown): StatsigConfigLike;
  useGateValue(gateName: string, options?: unknown): boolean;
  useLayer(layerName: string, options?: unknown): StatsigLayerLike;
  useStatsigClient(): UseStatsigClientResult;
};

export const { StableID, StatsigSession, StatsigMetadataProvider } =
  statsigCoreModule;
export const {
  StatsigClient,
  StatsigProvider,
  useClientAsyncInit,
  useDynamicConfig,
  useGateValue,
  useLayer,
  useStatsigClient,
} = statsigReactBindingsModule;
