// Restored from ref/webview/assets/single-value-sCXpwjXj.js
// Focused Framer Motion compatibility layer for restored app-shell motion helpers.
type MotionListener<T> = (latest: T) => void;
type AnimationControls = {
  duration: number;
  finished: Promise<void>;
  iterationDuration: number;
  startTime: number | null;
  state: string;
  time: number;
  speed: number;
  attachTimeline(timeline: unknown): () => void;
  cancel(): void;
  complete(): void;
  pause(): void;
  play(): void;
  stop(): void;
};

const scheduledFrames = new Map<Function, ReturnType<typeof setTimeout> | number>();
export const _singleValueQ: { current?: Array<singleValueK> } = {};

export class singleValueK<T = unknown> {
  private latest: T;
  private listeners = new Map<string, Set<MotionListener<T>>>();

  constructor(initialValue: T) {
    this.latest = initialValue;
  }

  get(): T {
    if (_singleValueQ.current && !_singleValueQ.current.includes(this))
      _singleValueQ.current.push(this);
    return this.latest;
  }

  set(value: T): void {
    this.latest = value;
    this.listeners.get("change")?.forEach((listener) => listener(value));
  }

  on(eventName: string, listener: MotionListener<T>): () => void {
    let listeners = this.listeners.get(eventName);
    if (!listeners) {
      listeners = new Set();
      this.listeners.set(eventName, listeners);
    }
    listeners.add(listener);
    return () => listeners?.delete(listener);
  }
}

export function singleValueJ<T>(initialValue: T) {
  return new singleValueK(initialValue);
}

function createAnimationControls(duration = 0): AnimationControls {
  let controls: AnimationControls = {
    duration,
    finished: Promise.resolve(),
    iterationDuration: duration,
    startTime: null,
    state: "finished",
    time: duration,
    speed: 1,
    attachTimeline: () => () => {},
    cancel: () => {},
    complete: () => {},
    pause: () => {
      controls.state = "paused";
    },
    play: () => {
      controls.state = "running";
    },
    stop: () => {
      controls.state = "stopped";
    },
  };
  return controls;
}

export function __singleValueT(
  value: singleValueK | number | string,
  keyframes: unknown,
  transition?: { duration?: number },
): AnimationControls {
  let latest = Array.isArray(keyframes) ? keyframes.at(-1) : keyframes;
  if (value instanceof singleValueK) value.set(latest);
  return createAnimationControls(transition?.duration ?? 0);
}

export function singleValueN(
  visualElement: { getValue?: (key: string, initial?: unknown) => singleValueK },
  definition: Record<string, unknown>,
): AnimationControls[] {
  let transition = definition.transition as { duration?: number } | undefined;
  for (let [key, value] of Object.entries(definition)) {
    if (key === "transition") continue;
    visualElement.getValue?.(key, Array.isArray(value) ? value[0] : value).set(
      Array.isArray(value) ? value.at(-1) : value,
    );
  }
  return [createAnimationControls(transition?.duration ?? 0)];
}

export class _singleValueU {
  current: unknown;
  latestValues: Record<string, unknown>;
  values = new Map<string, singleValueK>();

  constructor(options: { visualState?: { latestValues?: Record<string, unknown> } } = {}) {
    this.latestValues = options.visualState?.latestValues ?? {};
  }

  mount(instance: unknown): void {
    this.current = instance;
  }

  getValue(key: string, initialValue?: unknown): singleValueK {
    let value = this.values.get(key);
    if (!value) {
      value = new singleValueK(initialValue ?? this.latestValues[key]);
      this.values.set(key, value);
    }
    return value;
  }

  readValueFromInstance(instance: Record<string, unknown>, key: string): unknown {
    return instance?.[key] ?? this.latestValues[key];
  }

  build(): void {}
  render(): void {}
  measureViewportBox() {
    return singleValueF();
  }
}

export class singleValueL extends _singleValueU {}
export class singleValueC extends _singleValueU {}
export const singleValueD = new WeakMap<object, _singleValueU>();
export const singleValueWt = (condition?: unknown, message?: string): void => {
  if (!condition && message) throw new Error(message);
};
export const singleValueH = (value: unknown): value is singleValueK =>
  value instanceof singleValueK ||
  !!(value && typeof value === "object" && "get" in value && "set" in value);
export const singleValueHt = (value: unknown): value is unknown[] =>
  Array.isArray(value) && typeof value[0] !== "number";
export const singleValueU = (value: unknown): boolean =>
  typeof Element !== "undefined" && value instanceof Element;
export const singleValueW = (value: unknown): boolean =>
  typeof HTMLElement !== "undefined" && value instanceof HTMLElement;
export const singleValueZ = (value: unknown): boolean => typeof value === "function";
export const singleValueVt = (seconds: number): number => seconds * 1000;
export const _t = (milliseconds: number): number => milliseconds / 1000;
export const singleValueBt = (from: number, to: number, progress: number): number =>
  from + (to - from) * progress;
export const singleValueIt = singleValueBt;
export const singleValueF = () => ({
  x: { min: 0, max: 0 },
  y: { min: 0, max: 0 },
});
export function singleValueEt(offsets: number[], keyframes: unknown[]): void {
  let count = keyframes.length;
  if (count <= 1) {
    offsets[0] = 0;
    return;
  }
  for (let index = offsets.length; index < count; index++)
    offsets[index] = index / (count - 1);
}
export function $(count: number): number[] {
  return Array.from({ length: count }, (_, index) =>
    count <= 1 ? 0 : index / (count - 1),
  );
}
export function _singleValueTt(
  inputRange: number[] = [0, 1],
  outputRange: unknown[] = [0, 1],
) {
  return (input: number) => {
    let index = 0;
    while (index < inputRange.length - 2 && input > inputRange[index + 1]) index++;
    let start = inputRange[index] ?? 0;
    let end = inputRange[index + 1] ?? start;
    let progress = end === start ? 0 : (input - start) / (end - start);
    let from = outputRange[index];
    let to = outputRange[index + 1] ?? from;
    return typeof from === "number" && typeof to === "number"
      ? singleValueBt(from, to, progress)
      : progress < 1
        ? from
        : to;
  };
}
export const _singleValueDt = {
  preRender(callback: () => void, _keepAlive?: boolean, immediate?: boolean): void {
    if (immediate) callback();
    singleValueUt(callback);
    let handle =
      typeof requestAnimationFrame === "function"
        ? requestAnimationFrame(callback)
        : setTimeout(callback, 16);
    scheduledFrames.set(callback, handle);
  },
};
export function singleValueUt(callback: Function): void {
  let handle = scheduledFrames.get(callback);
  if (handle == null) return;
  typeof cancelAnimationFrame === "function" && typeof handle === "number"
    ? cancelAnimationFrame(handle)
    : clearTimeout(handle as ReturnType<typeof setTimeout>);
  scheduledFrames.delete(callback);
}
export function singleValueY(selector: string, root: ParentNode = document): Element[] {
  return Array.from(root.querySelectorAll(selector));
}
export const singleValueNt = (options: Record<string, unknown>) => options;
export const singleValueRt = (options: Record<string, unknown>) => options;
