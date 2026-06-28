// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host message request bridge for webview-to-host commands.
import { YN as sendHostRequestRaw } from "../vendor/appg-thread-shared-runtime";

export type HostRequestParams = Record<string, unknown>;

export function sendHostRequest<TResponse = unknown>(
  method: string,
  params?: HostRequestParams,
): Promise<TResponse> {
  return (
    params === undefined
      ? sendHostRequestRaw(method)
      : sendHostRequestRaw(method, params)
  ) as Promise<TResponse>;
}
