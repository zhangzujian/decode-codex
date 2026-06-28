// Restored from ref/webview/assets/git-config-value-query-BKgFljZW.js
// git-config-value-query-BKgFljZW chunk restored from the Codex webview bundle.
import { gitQuerySignal } from "../utils/git-query-signal";
type GitConfigValueParams = {
  key: string;
  operationSource: string;
  refetchOnWindowFocus?: boolean;
  root: string;
  scope?: string;
  staleTime?: number | null;
};
type GitConfigValueResponse = {
  value: unknown;
};
const gitConfigValueQuery = gitQuerySignal({
  method: "config-value",
  getParams: (params: GitConfigValueParams) => ({
    key: params.key,
    operationSource: params.operationSource,
    root: params.root,
    scope: params.scope,
  }),
  getOptions: (params: GitConfigValueParams) => ({
    refetchOnWindowFocus: params.refetchOnWindowFocus,
    select: (response: GitConfigValueResponse) => response.value,
    ...(params.staleTime == null
      ? {}
      : {
          staleTime: params.staleTime,
        }),
  }),
});
export const gitConfigValueQuerySignal = gitConfigValueQuery.fromCwd$;
export const gitConfigValueByMetadataQuerySignal =
  gitConfigValueQuery.queryByMetadata$;
