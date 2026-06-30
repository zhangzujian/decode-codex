// Restored from ref/webview/assets/thread-overflow-menu-yh1Ldo2y.js
// Current-ref boundary for thread overflow menu primitives used by the semantic split.
// Raw primitives are re-derived from the current worktree/new-thread query bundle.
import { once } from "../../runtime/commonjs-interop";
import {
  initPlatformContentRuntime,
  PlatformContentGate,
} from "../../runtime/platform-content-runtime";
import { initToastRuntime } from "../../runtime/toast-runtime";
import { Si as initThreadSourceSignal } from "../../vendor/projects-app-shared-runtime";
import {
  Er as initKeyboardModifierStateRaw,
  Ji as registerSideChatThreadAssociationRaw,
  Zi as closeSideChatThreadAssociationRaw,
  jr as initCommandRegistrationStateRaw,
  ma as RenameThreadDialog,
  Mr as useCommandRegistrationRaw,
  Xi as initSideChatThreadAssociationStateRaw,
} from "../../vendor/worktree-new-thread-query-current-bundle";

export type CommandRegistrationOptions = {
  contextHandler?: (context: unknown) => void;
  enabled?: boolean;
  isActive?: (context: unknown) => boolean;
  keyboardHandler?: (event: KeyboardEvent, context: unknown) => boolean | void;
  menuItem?: unknown;
};

type AppScopeStore = {
  get?: (...args: unknown[]) => unknown;
  set?: (...args: unknown[]) => unknown;
};

const initCommandRegistrationState = once(() => {
  initCommandRegistrationStateRaw();
});

const initSideChatThreadAssociationState = once(() => {
  initSideChatThreadAssociationStateRaw();
});

export const initElectronPlatformContent = initPlatformContentRuntime;
export const initToastProducer = initToastRuntime;

export const initKeyboardModifierState = once(() => {
  initKeyboardModifierStateRaw();
  initCommandRegistrationState();
});

export const initThreadOverflowQueryRuntime = once(() => {
  initThreadSourceSignal();
  initSideChatThreadAssociationState();
});

export { PlatformContentGate, RenameThreadDialog };

export function useCommandRegistration(
  commandId: string,
  handler: () => void,
  options?: CommandRegistrationOptions,
): void {
  initCommandRegistrationState();
  useCommandRegistrationRaw(commandId, handler, options);
}

export function registerSideChatThreadAssociation(
  scope: AppScopeStore,
  sourceConversationId: string,
  sideConversationId: string,
): void {
  initSideChatThreadAssociationState();
  registerSideChatThreadAssociationRaw(
    scope,
    sourceConversationId,
    sideConversationId,
  );
}

export function closeSideChatThreadAssociation(
  scope: AppScopeStore,
  sourceConversationId: string,
  sideConversationId: string,
): void {
  initSideChatThreadAssociationState();
  closeSideChatThreadAssociationRaw(
    scope,
    sourceConversationId,
    sideConversationId,
  );
}
