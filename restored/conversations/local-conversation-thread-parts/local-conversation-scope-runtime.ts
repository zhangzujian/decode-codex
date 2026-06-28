// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Scope runtime helpers shared by local conversation thread state modules.
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  QP as appScope,
  bV as createScopedSignal,
  fV as createScopedSignalFamily,
} from "../../boundaries/current-ref/appg-thread-shared-producer";

type ScopedSignalInitializer<TKey, TValue> = (key: TKey) => TValue;
type ScopedSignalFamilyInitializer<TKey, TValue> = (
  key: TKey,
  context: { get: (signal: unknown, key?: unknown) => any },
) => TValue;

export function initLocalConversationScopeRuntime(): void {
  initScopeRuntime();
  initAppScope();
}

export function createLocalConversationScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createScopedSignal(appScope, initializer);
}

export function createLocalConversationScopedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalFamily(appScope, initializer);
}
