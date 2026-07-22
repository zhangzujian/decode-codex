// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Stable handler registry consumed by the app-main compatibility layer.

import { handleCreateThread, handleForkThread } from "./create-handlers";
import {
  handleSendMessageToThread,
  handleSetThreadArchived,
  handleSetThreadPinned,
  handleSetThreadTitle,
} from "./mutation-handlers";
import {
  handleListProjects,
  handleListThreads,
  handleReadThread,
} from "./query-handlers";

export function getThreadManagementToolHandlers() {
  return {
    handleCreateThread,
    handleListProjects,
    handleListThreads,
    handleReadThread,
    handleSendMessageToThread,
    handleSetThreadPinned,
    handleSetThreadArchived,
    handleSetThreadTitle,
  };
}

export const threadManagementToolHandlers = {
  handleForkThread,
  ...getThreadManagementToolHandlers(),
};
