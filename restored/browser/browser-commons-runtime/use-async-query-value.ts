// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Minimal React hook for consuming optional asynchronous query functions.

import { useEffect, useState } from "react";

export interface AsyncQueryOptions<TData> {
  enabled?: boolean;
  queryFn?: () => Promise<TData>;
}

export interface AsyncQueryValue<TData> {
  data: TData | undefined;
  error: unknown;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export function useAsyncQueryValue<TData>(
  queryOptions: AsyncQueryOptions<TData> | null | undefined,
): AsyncQueryValue<TData> {
  const enabled = queryOptions?.enabled !== false;
  const [state, setState] = useState<AsyncQueryValue<TData>>({
    data: undefined,
    error: null,
    isError: false,
    isLoading: enabled,
    isSuccess: false,
  });

  useEffect(() => {
    if (!enabled || queryOptions?.queryFn == null) {
      setState({
        data: undefined,
        error: null,
        isError: false,
        isLoading: false,
        isSuccess: false,
      });
      return;
    }
    let cancelled = false;
    setState((previous) => ({ ...previous, isLoading: true }));
    void queryOptions
      .queryFn()
      .then((data) => {
        if (!cancelled) {
          setState({
            data,
            error: null,
            isError: false,
            isLoading: false,
            isSuccess: true,
          });
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setState({
            data: undefined,
            error,
            isError: true,
            isLoading: false,
            isSuccess: false,
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [enabled, queryOptions]);

  return state;
}
