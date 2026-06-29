// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @dnd-kit/utilities helpers bundled into the commons chunk: combining ref
// callbacks, generating stable unique ids, and detecting keyboard events.

import * as React from "react";

type RefCallback<T> = (instance: T | null) => void;

function isWindow(node: unknown): node is Window {
  const stringified = Object.prototype.toString.call(node);
  return stringified === "[object Window]" || stringified === "[object global]";
}

function isNode(node: unknown): node is Node {
  return node != null && "nodeType" in (node as object);
}

function getWindow(
  target: EventTarget | Node | Window | null | undefined,
): Window {
  if (!target) return window;
  if (isWindow(target)) return target;
  if (!isNode(target)) return window;
  return target.ownerDocument?.defaultView ?? window;
}

export function useCombinedRefs<T>(...refs: RefCallback<T>[]): RefCallback<T> {
  return React.useMemo(
    () => (node: T | null) => {
      refs.forEach((ref) => ref(node));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}

const idCounts: Record<string, number> = {};

export function useUniqueId(prefix: string, value?: string): string {
  return React.useMemo(() => {
    if (value) return value;
    const count = idCounts[prefix] == null ? 0 : idCounts[prefix] + 1;
    idCounts[prefix] = count;
    return `${prefix}-${count}`;
  }, [prefix, value]);
}

export function isKeyboardEvent(
  event: Event | null | undefined,
): event is KeyboardEvent {
  if (!event) return false;
  const { KeyboardEvent } = getWindow(event.target);
  return Boolean(KeyboardEvent) && event instanceof KeyboardEvent;
}
