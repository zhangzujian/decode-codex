// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~jolrh1c9-UBdbdM9i.js
// Vendored current exact-hash bundle with imports rewritten to restored local boundaries.
import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntimeChunk,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotUpperFLowerS as createQuerySignalFamily,
  currentAppInitialSharedCompatSlotUpperVLowerO as initReactQueryRuntimeChunk,
  currentAppInitialSharedCompatSlotLowerJLowerS as createComputedSignalFamily,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  conversationResumeStateSchema as gitRepositoryWatcherSignal,
  reactRouterGitMetadataAlwaysQuery as createGitQueryOptions,
  currentAppInitialSharedMember0284 as pendingGitQueryResult,
  automationIdleFetchFetchingQuery as disabledGitQueryResult,
  workspaceFunction0476 as normalizeHostConfigForWorktreeKey,
  normalizeThreadRuntimeStatus as gitStableMetadataQuery,
  workspaceWatchRepoUnwatchSignal as initWorkspaceRepoWatcherRuntimeChunk,
  workspaceRuntime0726 as initWorkspaceRuntimeChunk,
  gitUpstreamBranchBaseRuntime as initGitUpstreamBranchBaseRuntimeChunk,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};

type GitQueryMetadata = {
  commonDir: string;
  enabled: boolean;
  hostConfig: unknown;
  operationSource: string;
  root: string;
};

type GitQueryFromCwdParams<TMetadata extends GitQueryMetadata> = Omit<
  TMetadata,
  "commonDir" | "root"
> & {
  cwd?: string | null;
};

type GitStableMetadata = {
  commonDir: string;
  root: string;
};

type QueryResultLike<TData> = {
  data?: TData | null;
};

type GitQueryFactoryConfig<TMetadata extends GitQueryMetadata> = {
  getOptions?: (metadata: TMetadata) => Record<string, unknown> | undefined;
  getParams: (metadata: TMetadata) => unknown;
  method: string;
};

type CurrentGitQuerySignals<TMetadata extends GitQueryMetadata> = {
  fromCwd$: unknown;
  fromMetadata$: unknown;
  queryByMetadata$: unknown;
};

type GitConfigValueMetadata = GitQueryMetadata & {
  key: string;
  refetchOnWindowFocus?: boolean;
  scope?: string;
  staleTime?: number | null;
};

type GitConfigValueResponse = {
  value: unknown;
};

function createCurrentGitQuerySignal<TMetadata extends GitQueryMetadata>({
  getOptions,
  getParams,
  method,
}: GitQueryFactoryConfig<TMetadata>): CurrentGitQuerySignals<TMetadata> {
  const queryByMetadata$ = createQuerySignalFamily(
    appScopeRoot,
    (metadata: TMetadata) =>
      createGitQueryOptions(
        method,
        {
          commonDir: metadata.commonDir,
          root: metadata.root,
        },
        getParams(metadata),
        normalizeHostConfigForWorktreeKey(metadata.hostConfig),
        metadata.hostConfig,
        {
          enabled: metadata.enabled,
          ...getOptions?.(metadata),
        },
      ),
    {
      excludeFieldsFromKey: ["operationSource"],
    },
  );
  const fromMetadata$ = createComputedSignalFamily(
    appScopeRoot,
    (metadata: TMetadata, { get }: AppScopeGetter) => {
      get(
        get(gitRepositoryWatcherSignal, {
          commonDir: metadata.commonDir,
          enabled: metadata.enabled,
          hostConfig: metadata.hostConfig,
          operationSource: metadata.operationSource,
          root: metadata.root,
        }),
      );
      return get(queryByMetadata$, metadata);
    },
    {
      excludeFieldsFromKey: ["operationSource"],
    },
  );
  return {
    fromCwd$: createComputedSignalFamily(
      appScopeRoot,
      (params: GitQueryFromCwdParams<TMetadata>, { get }: AppScopeGetter) => {
        if (!params.enabled || params.cwd == null)
          return disabledGitQueryResult();
        const metadataQuery = get<QueryResultLike<GitStableMetadata>>(
          gitStableMetadataQuery,
          {
            cwd: params.cwd,
            enabled: params.enabled,
            hostConfig: params.hostConfig,
            operationSource: params.operationSource,
            watchForGitInit: false,
          },
        );
        const metadata = metadataQuery.data ?? null;
        if (metadata == null) return pendingGitQueryResult(metadataQuery);
        const { cwd: _cwd, ...metadataParams } = params;
        return get(fromMetadata$, {
          ...metadataParams,
          commonDir: metadata.commonDir,
          root: metadata.root,
        } as TMetadata);
      },
      {
        excludeFieldsFromKey: ["operationSource"],
      },
    ),
    fromMetadata$,
    queryByMetadata$,
  };
}

const initGitConfigValueCurrentRuntimeDependencies = once(() => {
  initReactQueryRuntimeChunk();
  initAppScopeRuntimeChunk();
  initGitUpstreamBranchBaseRuntimeChunk();
  initWorkspaceRepoWatcherRuntimeChunk();
  initWorkspaceRuntimeChunk();
});

let gitConfigValueSignals:
  | CurrentGitQuerySignals<GitConfigValueMetadata>
  | undefined;
let gitConfigValueFromCwdSignal: unknown;
let gitConfigValueByMetadataQuerySignal: unknown;

const initGitConfigValueCurrentChunk = once(() => {
  initGitConfigValueCurrentRuntimeDependencies();
  gitConfigValueSignals = createCurrentGitQuerySignal<GitConfigValueMetadata>({
    method: "config-value",
    getParams: (metadata) => ({
      key: metadata.key,
      operationSource: metadata.operationSource,
      root: metadata.root,
      scope: metadata.scope,
    }),
    getOptions: (metadata) => ({
      refetchOnWindowFocus: metadata.refetchOnWindowFocus,
      select: (response: GitConfigValueResponse) => response.value,
      ...(metadata.staleTime == null
        ? {}
        : {
            staleTime: metadata.staleTime,
          }),
    }),
  });
  gitConfigValueFromCwdSignal = gitConfigValueSignals.fromCwd$;
  gitConfigValueByMetadataQuerySignal = gitConfigValueSignals.queryByMetadata$;
});

export {
  createCurrentGitQuerySignal,
  gitConfigValueByMetadataQuerySignal,
  gitConfigValueFromCwdSignal,
  initGitConfigValueCurrentChunk,
  initGitConfigValueCurrentRuntimeDependencies,
};
