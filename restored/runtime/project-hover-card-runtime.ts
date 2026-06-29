// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Boundary facade for project hover card parts and remote connection rows.
import {
  globalSettingKeys,
  normalizeWorkspacePath,
} from "../boundaries/src-l0hb-mz-p";
import {
  Xt as parseProjectWritableRootsRaw,
  Yt as getProjectWritableRootsForDisplayRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";
import { defineMessages } from "./intl-define-messages-runtime";
import { getPathBasename as normalizeTextForCompare } from "./path-basename-runtime";
import { initStringNormalizeRuntime } from "./string-normalize-runtime";

import { initIntlMessageRuntime } from "./intl-message-runtime";

import { initModalRuntime } from "./modal-runtime";

import { useHostConfigById } from "./host-config-runtime";
import { toastSignal as toastControllerSignal } from "./toast-runtime";
import { initGlobalStateQueryRuntime } from "./global-state-runtime";

import {
  initPersistentSignalRuntime,
  initReactRuntime,
  createPersistentSignal,
  getChunkModuleExports,
} from "./shared-utility-runtime";

import { initVscodeBridgeRuntime as initVscodeApiBridge } from "./platform-content-runtime";

import {
  initReactQueryRuntime,
  useAppServerMutation,
  useQueryClient,
} from "./app-server-mutation-runtime";
import {
  bi as initButtonRuntime,
  ci as initNotificationRuntime,
  da as initLocalProjectActionsRuntime,
  jr as threadAttentionCountsSignal,
  kr as initClassNamesRuntime,
  qn as openLocalProjectEditModal,
  si as ProjectAvatar,
  ua as initPanelRuntime,
  Un as initSvgIconRuntime,
  vi as updateWorkspaceRootLabel,
  yi as LocalProjectFallbackIcon,
  _i as initDialogRuntime,
} from "../vendor/pull-request-thread-actions-runtime";
import {
  classNames,
  FormattedMessage,
  GlobeIcon,
  initClassNameRuntime as initInlinePopoverRuntime,
  initGlobeIcon as initSignalHooksRuntime,
  initIntlRuntime as initReactIntlRuntime,
  initSettingsGearIcon as initWorkspaceRootLabelRuntime,
  initSpinnerComponent,
  SettingsGearIcon as EditProjectIcon,
  Spinner as ActivityIcon,
  useIntl,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  initRemoteConnectionStateChunk,
  initRemoteProjectIconChunk,
  initWaitingStatusIconChunk,
  RemoteProjectIcon,
  useRemoteConnectionState,
  WaitingStatusIcon,
} from "../remote/remote-connection-runtime";
import {
  Gd as initProfileIconsChunk,
  Wd as RowActionChevronIcon,
} from "../vendor/profile-page-runtime";
import {
  Cx as getGlobalSettingValue,
  Ex as setGlobalSettingValue,
  Gu as initCodexAppFrameRuntime,
  Ku as useGlobalStateQuery,
  Tx as initGlobalSettingsRuntime,
} from "../vendor/projects-app-shared-runtime";
import { useScope, useSignalValue, useScopedValue } from "./app-scope-hooks";
import { initAppScope, initScopeRuntime, appScope } from "./app-scope-runtime";
import { useRemoteHostConfigs as useSharedObjectRemoteHostConfigs } from "./shared-object-host-runtime";

export type ProjectWritableRoot = {
  kind?: "local";
  label?: string;
  path: string;
};

export type ProjectWritableRootsByProject = Record<
  string,
  ProjectWritableRoot[] | undefined
>;

export type ProjectWritableRootsDisplayOptions = {
  legacyRoot: string | null;
  projectId: string;
  projectWritableRoots: ProjectWritableRootsByProject;
};

export function parseProjectWritableRoots(
  value: unknown,
): ProjectWritableRootsByProject {
  return parseProjectWritableRootsRaw(value) as ProjectWritableRootsByProject;
}

export function getProjectWritableRootsForDisplay(
  options: ProjectWritableRootsDisplayOptions,
): string[] {
  return getProjectWritableRootsForDisplayRaw(options) as string[];
}

export function useRemoteHostConfigs(): unknown[] {
  return (useSharedObjectRemoteHostConfigs() ?? []) as unknown[];
}

export function initKeyboardShortcutRuntime(): void {
  // Current ProjectHoverCard no longer initializes the old keyboard-shortcut runtime.
}

export {
  ActivityIcon,
  appScope,
  classNames,
  createPersistentSignal,
  defineMessages,
  EditProjectIcon,
  FormattedMessage,
  getChunkModuleExports,
  getGlobalSettingValue,
  getProjectWritableRootsForDisplay,
  globalSettingKeys,
  GlobeIcon,
  initAppScope,
  initButtonRuntime,
  initClassNamesRuntime,
  initCodexAppFrameRuntime,
  initDialogRuntime,
  initGlobalSettingsRuntime,
  initGlobalStateQueryRuntime,
  initInlinePopoverRuntime,
  initIntlMessageRuntime,
  initKeyboardShortcutRuntime,
  initLocalProjectActionsRuntime,
  initModalRuntime,
  initNotificationRuntime,
  initPanelRuntime,
  initPersistentSignalRuntime,
  initProfileIconsChunk,
  initReactIntlRuntime,
  initReactQueryRuntime,
  initReactRuntime,
  initRemoteProjectIconChunk as initRemoteConnectionActionsChunk,
  initRemoteConnectionStateChunk,
  initWaitingStatusIconChunk as initRemoteProjectIconChunk,
  initScopeRuntime,
  initSignalHooksRuntime,
  initSpinnerComponent,
  initStringNormalizeRuntime,
  initSvgIconRuntime,
  initVscodeApiBridge,
  initWorkspaceRootLabelRuntime,
  LocalProjectFallbackIcon,
  normalizeTextForCompare,
  normalizeWorkspacePath,
  openLocalProjectEditModal,
  parseProjectWritableRoots,
  ProjectAvatar,
  RemoteProjectIcon,
  RowActionChevronIcon,
  setGlobalSettingValue,
  threadAttentionCountsSignal,
  toastControllerSignal,
  updateWorkspaceRootLabel,
  useAppServerMutation,
  useGlobalStateQuery,
  useHostConfigById,
  useIntl,
  useQueryClient,
  useRemoteConnectionState,
  useRemoteHostConfigs,
  useScope,
  useScopedValue,
  useSignalValue,
  WaitingStatusIcon,
};
