// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// React signal-state hooks used by restored app-scope feature modules.
import {
  OV as createAtomSignalRaw,
  SV as initSignalStateRuntimeRaw,
  wV as useSignalStateRaw,
} from "../boundaries/current-ref/appg-thread-shared-producer";

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
  return (arguments.length === 1
    ? useSignalStateRaw(signal)
    : useSignalStateRaw(signal, key)) as [TValue, SignalStateSetter<TValue>];
}
