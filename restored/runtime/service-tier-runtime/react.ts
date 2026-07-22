// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { useQueryClient } from "../query-client/react-query-context";

export function useInvalidateQueries() {
  const queryClient = useQueryClient();
  return (queryKey: readonly unknown[]) =>
    queryClient.invalidateQueries({ queryKey });
}
