// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// React signal-state hooks used by restored app-scope feature modules.
import {
  Bs as createAtomSignalRaw,
  Ps as initSignalStateRuntimeRaw,
  Is as useSignalStateRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js";

export type SignalStateUpdater<TValue> =
  | TValue
  | ((currentValue: unknown) => unknown);
export type SignalStateSetter<TValue> = (
  nextValue: SignalStateUpdater<TValue>,
) => void;

export function createAtomSignal<TValue>(initialValue: TValue): unknown {
  return createAtomSignalRaw(initialValue);
}

export function initSignalStateRuntime(): void {
  initSignalStateRuntimeRaw();
}

export function useSignalState<TValue>(
  signal: unknown,
  key?: unknown,
): [TValue, SignalStateSetter<TValue>] {
  return (
    arguments.length === 1
      ? useSignalStateRaw(signal)
      : useSignalStateRaw(signal, key)
  ) as [TValue, SignalStateSetter<TValue>];
}
