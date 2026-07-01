// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Flat boundary. Vendored @dnd-kit/core primitives bundled into the commons chunk: geometry/scroll
// utilities plus the useSensor(s), getClientRect, useDraggable, useDroppable and
// useDndMonitor hooks. Companion to ./dnd-kit-sortable.tsx.
import * as React from "react";
import { unstable_batchedUpdates } from "react-dom";

interface Coordinates {
  x: number;
  y: number;
}

interface ClientRect {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

interface DroppableContainer {
  id: string | number;
  [key: string]: unknown;
}

interface Collision {
  id: string | number;
  data: {
    droppableContainer: DroppableContainer;
    value: number;
  };
}

interface CollisionDetectionArgs {
  collisionRect: ClientRect;
  droppableContainers: DroppableContainer[];
  droppableRects: Map<string | number, ClientRect>;
  pointerCoordinates?: Coordinates | null;
}

const DEFAULT_DRAGGABLE_ROLE = "button";

function noop(): void {}

const DRAGGABLE_ID_PREFIX = "Draggable";
const DROPPABLE_ID_PREFIX = "Droppable";
const FOCUSABLE_ELEMENT_SELECTOR =
  "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";

const canUseDOM =
  typeof window !== "undefined" &&
  window.document !== undefined &&
  window.document.createElement !== undefined;

const useIsomorphicLayoutEffect = canUseDOM
  ? React.useLayoutEffect
  : React.useEffect;

export const DndAction = {
  DragStart: "dragStart",
  DragMove: "dragMove",
  DragEnd: "dragEnd",
  DragCancel: "dragCancel",
  DragOver: "dragOver",
  RegisterDroppable: "registerDroppable",
  SetDroppableDisabled: "setDroppableDisabled",
  UnregisterDroppable: "unregisterDroppable",
} as const;

export const AutoScrollActivator = {
  Pointer: 0,
  DraggableRect: 1,
} as const;

export const ScrollDirection = {
  Forward: 1,
  Backward: -1,
} as const;

export const TraversalOrder = {
  TreeOrder: 0,
  ReversedTreeOrder: 1,
} as const;

export const MeasuringStrategy = {
  Always: 0,
  BeforeDragging: 1,
  WhileDragging: 2,
} as const;

const EventName = {
  Click: "click",
  DragStart: "dragstart",
  Keydown: "keydown",
  ContextMenu: "contextmenu",
  Resize: "resize",
  SelectionChange: "selectionchange",
  VisibilityChange: "visibilitychange",
} as const;

const KeyboardCode = {
  Esc: "Escape",
} as const;

const DndContextStatus = {
  Uninitialized: 0,
  Initializing: 1,
  Initialized: 2,
} as const;

const defaultCoordinates = Object.freeze({ x: 0, y: 0 });
const defaultScaleTransform = Object.freeze({
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
});
const defaultScrollThreshold = { x: 0.2, y: 0.2 };
const defaultScrollIntent = {
  x: {
    [ScrollDirection.Backward]: false,
    [ScrollDirection.Forward]: false,
  },
  y: {
    [ScrollDirection.Backward]: false,
    [ScrollDirection.Forward]: false,
  },
};
const defaultScrollableAncestors: any[] = [];
const defaultRects: any[] = [];
const defaultDroppableRectMap = new Map();
const defaultResizeObserverConfig = { timeout: 25 };
const defaultData = { current: {} };

export const cssTransform = Object.freeze({
  Translate: {
    toString(transform?: Coordinates | null) {
      if (!transform) return undefined;
      const { x, y } = transform;
      return `translate3d(${x ? Math.round(x) : 0}px, ${
        y ? Math.round(y) : 0
      }px, 0)`;
    },
  },
  Scale: {
    toString(transform?: { scaleX: number; scaleY: number } | null) {
      if (!transform) return undefined;
      const { scaleX, scaleY } = transform;
      return `scaleX(${scaleX}) scaleY(${scaleY})`;
    },
  },
  Transform: {
    toString(transform?: any) {
      if (!transform) return undefined;
      return [
        cssTransform.Translate.toString(transform),
        cssTransform.Scale.toString(transform),
      ].join(" ");
    },
  },
  Transition: {
    toString({
      property,
      duration,
      easing,
    }: {
      duration: number;
      easing: string;
      property: string;
    }) {
      return `${property} ${duration}ms ${easing}`;
    },
  },
});

function addCoordinates(
  coordinates: Coordinates,
  ...adjustments: Coordinates[]
): Coordinates {
  return adjustments.reduce(
    (accumulator, adjustment) => ({
      x: accumulator.x + adjustment.x,
      y: accumulator.y + adjustment.y,
    }),
    { ...coordinates },
  );
}

function subtractCoordinates(
  coordinates: Coordinates,
  ...adjustments: Coordinates[]
): Coordinates {
  return adjustments.reduce(
    (accumulator, adjustment) => ({
      x: accumulator.x - adjustment.x,
      y: accumulator.y - adjustment.y,
    }),
    { ...coordinates },
  );
}

function isWindow(target: any): target is Window {
  const tag = Object.prototype.toString.call(target);
  return tag === "[object Window]" || tag === "[object global]";
}

function isNode(target: any): target is Node {
  return target != null && "nodeType" in target;
}

function getWindow(target: any): Window {
  if (!target) return window;
  if (isWindow(target)) return target;
  if (isNode(target)) return target.ownerDocument?.defaultView ?? window;
  return window;
}

function isDocument(target: any): target is Document {
  const { Document } = getWindow(target);
  return target instanceof Document;
}

function isHTMLElement(target: any): target is HTMLElement {
  if (isWindow(target)) return false;
  return target instanceof getWindow(target).HTMLElement;
}

function isSvgElement(target: any): target is SVGElement {
  return target instanceof getWindow(target).SVGElement;
}

function getOwnerDocument(target: any): Document {
  if (!target) return document;
  if (isWindow(target)) return target.document;
  if (isNode(target)) {
    if (isDocument(target)) return target;
    if (isHTMLElement(target) || isSvgElement(target))
      return target.ownerDocument;
  }
  return document;
}

function isTouchEvent(event: any): event is TouchEvent {
  if (!event) return false;
  const { TouchEvent } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}

function isKeyboardEvent(event: any): event is KeyboardEvent {
  if (!event) return false;
  const { KeyboardEvent } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}

function getEventCoordinates(event: Event): Coordinates | null {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const { clientX, clientY } = event.touches[0];
      return { x: clientX, y: clientY };
    }
    if (event.changedTouches && event.changedTouches.length) {
      const { clientX, clientY } = event.changedTouches[0];
      return { x: clientX, y: clientY };
    }
  }
  return "clientX" in event && "clientY" in event
    ? { x: event.clientX, y: event.clientY }
    : null;
}

function findFirstFocusableNode(element: HTMLElement) {
  return element.matches(FOCUSABLE_ELEMENT_SELECTOR)
    ? element
    : element.querySelector<HTMLElement>(FOCUSABLE_ELEMENT_SELECTOR);
}

function useLatestValue<T>(
  value: T,
  dependencies: React.DependencyList = [value],
): React.MutableRefObject<T> {
  const ref = React.useRef(value);
  useIsomorphicLayoutEffect(() => {
    if (ref.current !== value) ref.current = value;
  }, dependencies);
  return ref;
}

function useEvent<T extends (...args: any[]) => any>(handler?: T): T {
  const handlerRef = useLatestValue(handler);
  return React.useCallback(
    ((...args: Parameters<T>) => handlerRef.current?.(...args)) as T,
    [],
  );
}

function useLazyMemo<T>(
  callback: (previousValue: T | undefined) => T,
  dependencies: React.DependencyList,
): T {
  const previousValueRef = React.useRef<T | undefined>(undefined);
  return React.useMemo(() => {
    const value = callback(previousValueRef.current);
    previousValueRef.current = value;
    return value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}

function useNodeRef<TElement extends HTMLElement = HTMLElement>(
  onChange?: (
    element: TElement | null,
    previousElement: TElement | null,
  ) => void,
) {
  const onChangeHandler = useEvent(onChange);
  const node = React.useRef<TElement | null>(null);
  const setNodeRef = React.useCallback((element: TElement | null) => {
    if (element !== node.current) {
      onChangeHandler?.(element, node.current);
      node.current = element;
    }
  }, []);
  return [node, setNodeRef] as const;
}

function usePrevious<T>(value: T): T | undefined {
  const previousValue = React.useRef<T | undefined>(undefined);
  React.useEffect(() => {
    previousValue.current = value;
  }, [value]);
  return previousValue.current;
}

const uniqueIdCounters: Record<string, number> = {};

function useUniqueId(prefix: string, value?: string): string {
  return React.useMemo(() => {
    if (value) return value;
    const id =
      uniqueIdCounters[prefix] == null ? 0 : uniqueIdCounters[prefix] + 1;
    uniqueIdCounters[prefix] = id;
    return `${prefix}-${id}`;
  }, [prefix, value]);
}

function useInterval() {
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  return [
    React.useCallback((callback: () => void, delay: number) => {
      intervalRef.current = setInterval(callback, delay);
    }, []),
    React.useCallback(() => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, []),
  ] as const;
}

export function useCombinedRefs<TElement>(
  ...refs: Array<React.Ref<TElement> | undefined>
) {
  return React.useMemo(
    () => (node: TElement | null) => {
      refs.forEach((ref) => {
        if (!ref) return;
        if (typeof ref === "function") {
          ref(node);
        } else {
          (ref as React.MutableRefObject<TElement | null>).current = node;
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}

class DroppableContainersMap extends Map<any, any> {
  get(id: any) {
    return id == null ? undefined : (super.get(id) ?? undefined);
  }

  toArray() {
    return Array.from(this.values());
  }

  getEnabled() {
    return this.toArray().filter(({ disabled }) => !disabled);
  }

  getNodeFor(id: any) {
    return this.get(id)?.node.current ?? undefined;
  }
}

class Rect {
  rect: ClientRect;
  width: number;
  height: number;

  constructor(rect: ClientRect, element: Element) {
    const scrollableAncestors = getScrollableAncestors(element);
    const initialScrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = { ...rect };
    this.width = rect.width;
    this.height = rect.height;

    for (const [axis, properties, getScroll] of [
      ["x", ["left", "right"], getScrollXOffset],
      ["y", ["top", "bottom"], getScrollYOffset],
    ] as const) {
      for (const property of properties) {
        Object.defineProperty(this, property, {
          get: () => {
            const currentScrollOffsets = getScroll(scrollableAncestors);
            const scrollDelta =
              initialScrollOffsets[axis] - currentScrollOffsets;
            return this.rect[property as keyof ClientRect] + scrollDelta;
          },
          enumerable: true,
        });
      }
    }

    Object.defineProperty(this, "rect", { enumerable: false });
  }

  top!: number;
  bottom!: number;
  left!: number;
  right!: number;
}

const defaultMeasuringConfiguration = {
  draggable: { measure: getTransformAgnosticClientRect },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: "optimized",
  },
  dragOverlay: { measure: getClientRect },
};

function defaultDropAnimationSideEffects({ styles, className }: any) {
  return ({ active, dragOverlay }: any) => {
    const originalStyles: Record<string, string> = {};
    if (styles?.active) {
      for (const [property, value] of Object.entries(styles.active)) {
        if (value !== undefined) {
          originalStyles[property] =
            active.node.style.getPropertyValue(property);
          active.node.style.setProperty(property, value as string);
        }
      }
    }
    if (styles?.dragOverlay) {
      for (const [property, value] of Object.entries(styles.dragOverlay)) {
        if (value !== undefined)
          dragOverlay.node.style.setProperty(property, value as string);
      }
    }
    if (className?.active) active.node.classList.add(className.active);
    if (className?.dragOverlay)
      dragOverlay.node.classList.add(className.dragOverlay);
    return () => {
      for (const [property, value] of Object.entries(originalStyles)) {
        active.node.style.setProperty(property, value);
      }
      if (className?.active) active.node.classList.remove(className.active);
    };
  };
}

function defaultDropAnimationKeyframes({
  transform,
}: {
  transform: { initial: any; final: any };
}) {
  return [
    { transform: cssTransform.Transform.toString(transform.initial) },
    { transform: cssTransform.Transform.toString(transform.final) },
  ];
}

const defaultDropAnimationConfiguration = {
  duration: 250,
  easing: "ease",
  keyframes: defaultDropAnimationKeyframes,
  sideEffects: defaultDropAnimationSideEffects({
    styles: { active: { opacity: "0" } },
  }),
};

const defaultActiveDraggableContext = defaultScaleTransform;
const NullContext = React.createContext(defaultScaleTransform);
const ActiveDraggableContext = React.createContext(
  defaultActiveDraggableContext,
);
const DndMonitorContext = React.createContext<any>(null);

const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: new Map(),
  droppableRects: defaultDroppableRectMap,
  droppableContainers: new DroppableContainersMap(),
  over: null,
  dragOverlay: { nodeRef: { current: null }, rect: null, setRef: noop },
  scrollableAncestors: defaultScrollableAncestors,
  scrollableAncestorRects: defaultRects,
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false,
};

const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: { draggable: "" },
  dispatch: noop,
  draggableNodes: new Map(),
  over: null,
  measureDroppableContainers: noop,
};

const InternalContext = React.createContext<any>(defaultInternalContext);
const DndContextContext = React.createContext<any>(defaultPublicContext);

// ---------------------------------------------------------------------------
// Sensors
// ---------------------------------------------------------------------------

export function useSensor<TSensor>(
  sensor: TSensor,
  options?: Record<string, unknown>,
) {
  return React.useMemo(
    () => ({ sensor, options: options ?? {} }),
    [sensor, options],
  );
}

export function useSensors(...sensors: Array<unknown>) {
  return React.useMemo(
    () => [...sensors].filter((sensor) => sensor != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...sensors],
  );
}

class Listeners {
  private listeners: Array<
    [string, EventListenerOrEventListenerObject, AddEventListenerOptions?]
  > = [];

  constructor(private target: EventTarget | null) {}

  add(
    eventName: string,
    handler: EventListenerOrEventListenerObject,
    options?: AddEventListenerOptions,
  ) {
    this.target?.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }

  removeAll = () => {
    this.listeners.forEach((listener) =>
      this.target?.removeEventListener(...listener),
    );
  };
}

class AbstractPointerSensor {
  autoScrollEnabled = true;
  private activated = false;
  private document: Document;
  private documentListeners: Listeners;
  private events: {
    cancel?: { name: string };
    end: { name: string };
    move: { name: string };
  };
  private initialCoordinates: Coordinates | null;
  private listeners: Listeners;
  private props: any;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private windowListeners: Listeners;

  constructor(
    props: any,
    events: {
      cancel?: { name: string };
      end: { name: string };
      move: { name: string };
    },
    listenerTarget?: EventTarget,
  ) {
    const { event } = props;
    const { target } = event;
    this.props = props;
    this.events = events;
    this.document = getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(
      listenerTarget ?? getEventListenerTarget(target),
    );
    this.windowListeners = new Listeners(getWindow(target));
    this.initialCoordinates = getEventCoordinates(event) ?? defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }

  private attach() {
    const {
      events,
      props: {
        options: { activationConstraint, bypassActivationConstraint },
      },
    } = this;

    this.listeners.add(events.move.name, this.handleMove, { passive: false });
    this.listeners.add(events.end.name, this.handleEnd);
    if (events.cancel)
      this.listeners.add(events.cancel.name, this.handleCancel);

    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

    if (activationConstraint) {
      if (
        bypassActivationConstraint?.({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      ) {
        this.handleStart();
        return;
      }

      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(
          this.handleStart,
          activationConstraint.delay,
        );
        this.handlePending(activationConstraint);
        return;
      }

      if (isDistanceConstraint(activationConstraint)) {
        this.handlePending(activationConstraint);
        return;
      }
    }

    this.handleStart();
  }

  private detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
    setTimeout(this.documentListeners.removeAll, 50);
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  private handlePending(constraint: any, offset?: Coordinates) {
    const { active, onPending } = this.props;
    onPending(active, constraint, this.initialCoordinates, offset);
  }

  private handleStart() {
    const { initialCoordinates } = this;
    const { onStart } = this.props;
    if (!initialCoordinates) return;
    this.activated = true;
    this.documentListeners.add(EventName.Click, stopPropagation, {
      capture: true,
    });
    this.removeTextSelection();
    this.documentListeners.add(
      EventName.SelectionChange,
      this.removeTextSelection,
    );
    onStart(initialCoordinates);
  }

  private handleMove(event: Event) {
    const {
      activated,
      initialCoordinates,
      props: {
        onMove,
        options: { activationConstraint },
      },
    } = this;
    if (!initialCoordinates) return;

    const coordinates = getEventCoordinates(event) ?? defaultCoordinates;
    const delta = subtractCoordinates(initialCoordinates, coordinates);

    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (
          activationConstraint.tolerance != null &&
          hasExceededDistance(delta, activationConstraint.tolerance)
        ) {
          this.handleCancel();
          return;
        }
        if (hasExceededDistance(delta, activationConstraint.distance)) {
          this.handleStart();
          return;
        }
      }

      if (
        isDelayConstraint(activationConstraint) &&
        hasExceededDistance(delta, activationConstraint.tolerance)
      ) {
        this.handleCancel();
        return;
      }

      this.handlePending(activationConstraint, delta);
      return;
    }

    if (event.cancelable) event.preventDefault();
    onMove(coordinates);
  }

  private handleEnd() {
    const { onAbort, onEnd } = this.props;
    this.detach();
    if (!this.activated) onAbort(this.props.active);
    onEnd();
  }

  private handleCancel() {
    const { onAbort, onCancel } = this.props;
    this.detach();
    if (!this.activated) onAbort(this.props.active);
    onCancel();
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.code === KeyboardCode.Esc) this.handleCancel();
  }

  private removeTextSelection() {
    this.document.getSelection()?.removeAllRanges();
  }
}

const pointerSensorEvents = {
  cancel: { name: "pointercancel" },
  move: { name: "pointermove" },
  end: { name: "pointerup" },
};

export class PointerSensor extends AbstractPointerSensor {
  constructor(props: any) {
    const { event } = props;
    const listenerTarget = getOwnerDocument(event.target);
    super(props, pointerSensorEvents, listenerTarget);
  }

  static activators = [
    {
      eventName: "onPointerDown",
      handler: (event: React.PointerEvent, options: any) => {
        const { nativeEvent } = event;
        const { onActivation } = options;
        if (!nativeEvent.isPrimary || nativeEvent.button !== 0) return false;
        onActivation?.({ event: nativeEvent });
        return true;
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Geometry utilities
// ---------------------------------------------------------------------------

function distanceBetween(a: Coordinates, b: Coordinates): number {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function getRelativeTransformOrigin(event: Event, rect: ClientRect): string {
  const coordinates = getEventCoordinates(event);
  if (!coordinates) return "0 0";
  const transformOrigin = {
    x: ((coordinates.x - rect.left) / rect.width) * 100,
    y: ((coordinates.y - rect.top) / rect.height) * 100,
  };
  return `${transformOrigin.x}% ${transformOrigin.y}%`;
}

function sortCollisionsAsc(
  a: { data: { value: number } },
  b: { data: { value: number } },
): number {
  return a.data.value - b.data.value;
}

function sortCollisionsDesc(
  a: { data: { value: number } },
  b: { data: { value: number } },
): number {
  return b.data.value - a.data.value;
}

function cornersOfRectangle({
  left,
  top,
  height,
  width,
}: ClientRect): Coordinates[] {
  return [
    { x: left, y: top },
    { x: left + width, y: top },
    { x: left, y: top + height },
    { x: left + width, y: top + height },
  ];
}

function getFirstCollision(
  collisions: Array<Record<string, unknown>> | null | undefined,
  property?: string,
) {
  if (!collisions || collisions.length === 0) return null;
  const [firstCollision] = collisions;
  return property ? firstCollision[property] : firstCollision;
}

function centerOfRectangle(
  rect: ClientRect,
  left?: number,
  top?: number,
): Coordinates {
  if (left === undefined) left = rect.left;
  if (top === undefined) top = rect.top;
  return { x: left + rect.width * 0.5, y: top + rect.height * 0.5 };
}

function getIntersectionRatio(entry: ClientRect, target: ClientRect): number {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const ratio =
      intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(ratio.toFixed(4));
  }
  return 0;
}

function isPointWithinRect(point: Coordinates, rect: ClientRect): boolean {
  const { top, left, bottom, right } = rect;
  return (
    top <= point.y && point.y <= bottom && left <= point.x && point.x <= right
  );
}

function closestCenter({
  collisionRect,
  droppableRects,
  droppableContainers,
}: CollisionDetectionArgs): Collision[] {
  const collisionCenter = centerOfRectangle(
    collisionRect,
    collisionRect.left,
    collisionRect.top,
  );
  const collisions: Collision[] = [];
  for (const droppableContainer of droppableContainers) {
    const { id } = droppableContainer;
    const rect = droppableRects.get(id);
    if (rect) {
      const distBetween = distanceBetween(
        centerOfRectangle(rect),
        collisionCenter,
      );
      collisions.push({
        id,
        data: { droppableContainer, value: distBetween },
      });
    }
  }
  return collisions.sort(sortCollisionsAsc);
}

function rectIntersection({
  collisionRect,
  droppableRects,
  droppableContainers,
}: CollisionDetectionArgs): Collision[] {
  const collisions: Collision[] = [];
  for (const droppableContainer of droppableContainers) {
    const { id } = droppableContainer;
    const rect = droppableRects.get(id);
    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);
      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: { droppableContainer, value: intersectionRatio },
        });
      }
    }
  }
  return collisions.sort(sortCollisionsDesc);
}

function pointerWithin({
  droppableContainers,
  droppableRects,
  pointerCoordinates,
}: CollisionDetectionArgs): Collision[] {
  if (!pointerCoordinates) return [];
  const collisions: Collision[] = [];
  for (const droppableContainer of droppableContainers) {
    const { id } = droppableContainer;
    const rect = droppableRects.get(id);
    if (rect && isPointWithinRect(pointerCoordinates, rect)) {
      const corners = cornersOfRectangle(rect);
      const distances = corners.reduce(
        (accumulator, corner) =>
          accumulator + distanceBetween(pointerCoordinates, corner),
        0,
      );
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: { droppableContainer, value: effectiveDistance },
      });
    }
  }
  return collisions.sort(sortCollisionsAsc);
}

function adjustScale(
  transform: Record<string, unknown>,
  rect1: ClientRect | null,
  rect2: ClientRect | null,
) {
  return {
    ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1,
  };
}

function getRectDelta(
  rect1: ClientRect | null,
  rect2: ClientRect | null,
): Coordinates {
  return rect1 && rect2
    ? { x: rect1.left - rect2.left, y: rect1.top - rect2.top }
    : defaultCoordinates;
}

function createRectAdjustmentFn(modifier: number) {
  return function adjustRect(rect: ClientRect, ...adjustments: Coordinates[]) {
    return adjustments.reduce(
      (accumulator, adjustment) => ({
        ...accumulator,
        top: accumulator.top + modifier * adjustment.y,
        bottom: accumulator.bottom + modifier * adjustment.y,
        left: accumulator.left + modifier * adjustment.x,
        right: accumulator.right + modifier * adjustment.x,
      }),
      { ...rect },
    );
  };
}

function parseTransform(transform: string) {
  if (transform.startsWith("matrix3d(")) {
    const values = transform.slice(9, -1).split(/, /);
    return {
      x: +values[12],
      y: +values[13],
      scaleX: +values[0],
      scaleY: +values[5],
    };
  } else if (transform.startsWith("matrix(")) {
    const values = transform.slice(7, -1).split(/, /);
    return {
      x: +values[4],
      y: +values[5],
      scaleX: +values[0],
      scaleY: +values[3],
    };
  }
  return null;
}

function inverseTransform(
  rect: ClientRect,
  transform: string,
  transformOrigin: string,
): ClientRect {
  const parsed = parseTransform(transform);
  if (!parsed) return rect;
  const { scaleX, scaleY, x: translateX, y: translateY } = parsed;
  const left =
    rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const top =
    rect.top -
    translateY -
    (1 - scaleY) *
      parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
  const width = scaleX ? rect.width / scaleX : rect.width;
  const height = scaleY ? rect.height / scaleY : rect.height;
  return {
    width,
    height,
    top,
    right: left + width,
    bottom: top + height,
    left,
  };
}

export function getClientRect(
  element: Element,
  options: { ignoreTransform: boolean } = { ignoreTransform: false },
): ClientRect {
  let rect: ClientRect = element.getBoundingClientRect();
  if (options.ignoreTransform) {
    const { transform, transformOrigin } =
      getWindow(element).getComputedStyle(element);
    if (transform) rect = inverseTransform(rect, transform, transformOrigin);
  }
  const { top, left, width, height, bottom, right } = rect;
  return { top, left, width, height, bottom, right };
}

function getTransformAgnosticClientRect(element: Element): ClientRect {
  return getClientRect(element, { ignoreTransform: true });
}

function getWindowClientRect(windowElement: Window): ClientRect {
  const width = windowElement.innerWidth;
  const height = windowElement.innerHeight;
  return { top: 0, left: 0, right: width, bottom: height, width, height };
}

function isFixed(
  element: Element,
  computedStyle: CSSStyleDeclaration = getWindow(element).getComputedStyle(
    element,
  ),
): boolean {
  return computedStyle.position === "fixed";
}

function isScrollable(
  element: Element,
  computedStyle: CSSStyleDeclaration = getWindow(element).getComputedStyle(
    element,
  ),
): boolean {
  const overflowRegex = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((property) => {
    const value = computedStyle[property as keyof CSSStyleDeclaration];
    return typeof value === "string" ? overflowRegex.test(value) : false;
  });
}

// ---------------------------------------------------------------------------
// Scroll utilities
// ---------------------------------------------------------------------------

function getScrollableAncestors(element: Node | null, limit?: number): Node[] {
  const scrollParents: Node[] = [];
  function findScrollableAncestors(node: Node | null): Node[] {
    if ((limit != null && scrollParents.length >= limit) || !node)
      return scrollParents;
    if (
      isDocument(node) &&
      (node as Document).scrollingElement != null &&
      !scrollParents.includes((node as Document).scrollingElement as Node)
    ) {
      scrollParents.push((node as Document).scrollingElement as Node);
      return scrollParents;
    }
    if (
      !isHTMLElement(node) ||
      isSvgElement(node) ||
      scrollParents.includes(node)
    )
      return scrollParents;
    const computedStyle = getWindow(element as Element).getComputedStyle(
      node as Element,
    );
    if (node !== element && isScrollable(node as Element, computedStyle))
      scrollParents.push(node);
    return isFixed(node as Element, computedStyle)
      ? scrollParents
      : findScrollableAncestors(node.parentNode);
  }
  return element ? findScrollableAncestors(element) : scrollParents;
}

function getFirstScrollableAncestor(element: Node | null): Node | null {
  const [firstScrollableAncestor] = getScrollableAncestors(element, 1);
  return firstScrollableAncestor ?? null;
}

function getScrollableElement(target: any): Element | Window | null {
  if (!canUseDOM || !target) return null;
  if (isWindow(target)) return target;
  if (!isNode(target)) return null;
  if (
    isDocument(target) ||
    target === getOwnerDocument(target).scrollingElement
  )
    return window;
  if (isHTMLElement(target)) return target;
  return null;
}

function getScrollXCoordinate(element: any): number {
  return isWindow(element) ? element.scrollX : element.scrollLeft;
}

function getScrollYCoordinate(element: any): number {
  return isWindow(element) ? element.scrollY : element.scrollTop;
}

function getScrollCoordinates(element: any): Coordinates {
  return { x: getScrollXCoordinate(element), y: getScrollYCoordinate(element) };
}

function isDocumentScrollingElement(element: any): boolean {
  return !canUseDOM || !element ? false : element === document.scrollingElement;
}

function getScrollPosition(element: any) {
  const minScroll = { x: 0, y: 0 };
  const dimensions = isDocumentScrollingElement(element)
    ? { height: window.innerHeight, width: window.innerWidth }
    : { height: element.clientHeight, width: element.clientWidth };
  const maxScroll = {
    x: element.scrollWidth - dimensions.width,
    y: element.scrollHeight - dimensions.height,
  };
  return {
    isTop: element.scrollTop <= minScroll.y,
    isLeft: element.scrollLeft <= minScroll.x,
    isBottom: element.scrollTop >= maxScroll.y,
    isRight: element.scrollLeft >= maxScroll.x,
    maxScroll,
    minScroll,
  };
}

function getScrollDirectionAndSpeed(
  scrollContainer: any,
  scrollContainerRect: ClientRect,
  rect: ClientRect,
  acceleration = 10,
  thresholdPercentage: Coordinates = defaultScrollThreshold,
) {
  const { top, left, right, bottom } = rect;
  const { isTop, isBottom, isLeft, isRight } =
    getScrollPosition(scrollContainer);
  const direction = { x: 0, y: 0 };
  const speed = { x: 0, y: 0 };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x,
  };
  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    direction.y = ScrollDirection.Backward;
    speed.y =
      acceleration *
      Math.abs(
        (scrollContainerRect.top + threshold.height - top) / threshold.height,
      );
  } else if (
    !isBottom &&
    bottom >= scrollContainerRect.bottom - threshold.height
  ) {
    direction.y = ScrollDirection.Forward;
    speed.y =
      acceleration *
      Math.abs(
        (scrollContainerRect.bottom - threshold.height - bottom) /
          threshold.height,
      );
  }
  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    direction.x = ScrollDirection.Forward;
    speed.x =
      acceleration *
      Math.abs(
        (scrollContainerRect.right - threshold.width - right) / threshold.width,
      );
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    direction.x = ScrollDirection.Backward;
    speed.x =
      acceleration *
      Math.abs(
        (scrollContainerRect.left + threshold.width - left) / threshold.width,
      );
  }
  return { direction, speed };
}

function getScrollElementRect(element: any): ClientRect {
  if (element === document.scrollingElement) {
    const { innerWidth, innerHeight } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight,
    };
  }
  const { top, left, right, bottom } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight,
  };
}

function getScrollOffsets(scrollableAncestors: any[]): Coordinates {
  return scrollableAncestors.reduce(
    (accumulator, current) =>
      addCoordinates(accumulator, getScrollCoordinates(current)),
    defaultCoordinates,
  );
}

function getScrollXOffset(scrollableAncestors: any[]): number {
  return scrollableAncestors.reduce(
    (accumulator, current) => accumulator + getScrollXCoordinate(current),
    0,
  );
}

function getScrollYOffset(scrollableAncestors: any[]): number {
  return scrollableAncestors.reduce(
    (accumulator, current) => accumulator + getScrollYCoordinate(current),
    0,
  );
}

function scrollIntoViewIfNeeded(
  element: Element | null,
  measure: (element: Element) => ClientRect = getClientRect,
): void {
  if (!element) return;
  const { top, left, bottom, right } = measure(element);
  if (
    getFirstScrollableAncestor(element) &&
    (bottom <= 0 ||
      right <= 0 ||
      top >= window.innerHeight ||
      left >= window.innerWidth)
  )
    element.scrollIntoView({ block: "center", inline: "center" });
}

function getEventListenerTarget(element: any): EventTarget {
  const { EventTarget } = getWindow(element);
  return element instanceof EventTarget ? element : getOwnerDocument(element);
}

function hasExceededDistance(
  delta: Coordinates,
  measurement: number | Partial<Coordinates>,
): boolean {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);
  if (typeof measurement === "number")
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  if ("x" in measurement && "y" in measurement)
    return dx > (measurement.x as number) && dy > (measurement.y as number);
  if ("x" in measurement) return dx > (measurement.x as number);
  if ("y" in measurement) return dy > (measurement.y as number);
  return false;
}

function preventDefault(event: Event): void {
  event.preventDefault();
}

function stopPropagation(event: Event): void {
  event.stopPropagation();
}

function isDistanceConstraint(constraint: any): boolean {
  return !!(constraint && "distance" in constraint);
}

function isDelayConstraint(constraint: any): boolean {
  return !!(constraint && "delay" in constraint);
}

// ---------------------------------------------------------------------------
// Auto-scroll hooks
// ---------------------------------------------------------------------------

function useAutoScroller(props: any): void {
  const {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold,
  } = props;
  const scrollIntent = useScrollIntent({ delta, disabled: !enabled });
  const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
  const scrollSpeed = React.useRef({ x: 0, y: 0 });
  const scrollDirection = React.useRef({ x: 0, y: 0 });
  const rect = React.useMemo(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates
          ? {
              top: pointerCoordinates.y,
              bottom: pointerCoordinates.y,
              left: pointerCoordinates.x,
              right: pointerCoordinates.x,
            }
          : null;
      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = React.useRef<any>(null);
  const autoScroll = React.useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = React.useMemo(
    () =>
      order === TraversalOrder.TreeOrder
        ? [...scrollableAncestors].reverse()
        : scrollableAncestors,
    [order, scrollableAncestors],
  );
  React.useEffect(
    () => {
      if (!enabled || !scrollableAncestors.length || !rect) {
        clearAutoScrollInterval();
        return;
      }
      for (const scrollContainer of sortedScrollableAncestors) {
        if (canScroll?.(scrollContainer) === false) continue;
        const index = scrollableAncestors.indexOf(scrollContainer);
        const scrollContainerRect = scrollableAncestorRects[index];
        if (!scrollContainerRect) continue;
        const { direction, speed } = getScrollDirectionAndSpeed(
          scrollContainer,
          scrollContainerRect,
          rect,
          acceleration,
          threshold,
        );
        for (const axis of ["x", "y"] as const) {
          if (!scrollIntent[axis][direction[axis]]) {
            speed[axis] = 0;
            direction[axis] = 0;
          }
        }
        if (speed.x > 0 || speed.y > 0) {
          clearAutoScrollInterval();
          scrollContainerRef.current = scrollContainer;
          setAutoScrollInterval(autoScroll, interval);
          scrollSpeed.current = speed;
          scrollDirection.current = direction;
          return;
        }
      }
      scrollSpeed.current = { x: 0, y: 0 };
      scrollDirection.current = { x: 0, y: 0 };
      clearAutoScrollInterval();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      acceleration,
      autoScroll,
      canScroll,
      clearAutoScrollInterval,
      enabled,
      interval,
      JSON.stringify(rect),
      JSON.stringify(scrollIntent),
      setAutoScrollInterval,
      scrollableAncestors,
      sortedScrollableAncestors,
      scrollableAncestorRects,
      JSON.stringify(threshold),
    ],
  );
}

function useScrollIntent({ delta, disabled }: any) {
  const previousDelta = usePrevious(delta);
  return useLazyMemo(
    (previousIntent: any) => {
      if (disabled || !previousDelta || !previousIntent)
        return defaultScrollIntent;
      const signedDelta = {
        x: Math.sign(delta.x - previousDelta.x),
        y: Math.sign(delta.y - previousDelta.y),
      };
      return {
        x: {
          [ScrollDirection.Backward]:
            previousIntent.x[ScrollDirection.Backward] || signedDelta.x === -1,
          [ScrollDirection.Forward]:
            previousIntent.x[ScrollDirection.Forward] || signedDelta.x === 1,
        },
        y: {
          [ScrollDirection.Backward]:
            previousIntent.y[ScrollDirection.Backward] || signedDelta.y === -1,
          [ScrollDirection.Forward]:
            previousIntent.y[ScrollDirection.Forward] || signedDelta.y === 1,
        },
      };
    },
    [disabled, delta, previousDelta],
  );
}

// ---------------------------------------------------------------------------
// Measuring hooks
// ---------------------------------------------------------------------------

function useCachedNode(draggableNodes: Map<any, any>, id: any) {
  const draggableNode = id == null ? undefined : draggableNodes.get(id);
  const node = draggableNode ? draggableNode.node.current : null;
  return useLazyMemo(
    (cachedNode: any) => (id == null ? null : (node ?? cachedNode ?? null)),
    [node, id],
  );
}

function useCombineActivators(
  sensors: any[],
  getSyntheticHandler: (handler: any, sensor: any) => any,
) {
  return React.useMemo(
    () =>
      sensors.reduce((accumulator, sensorInstance) => {
        const { sensor } = sensorInstance;
        const sensorActivators = sensor.activators.map((activator: any) => ({
          eventName: activator.eventName,
          handler: getSyntheticHandler(activator.handler, sensorInstance),
        }));
        return [...accumulator, ...sensorActivators];
      }, []),
    [sensors, getSyntheticHandler],
  );
}

function useDroppableMeasuring(
  containers: any[],
  { dragging, dependencies, config }: any,
) {
  const [
    containerIdsScheduledForMeasurement,
    setContainerIdsScheduledForMeasurement,
  ] = React.useState<any>(null);
  const { frequency, measure, strategy } = config;
  const containersRef = React.useRef(containers);
  const disabled = isDisabled();
  const disabledRef = useLatestValue(disabled);
  const measureDroppableContainers = React.useCallback(
    (ids: any[] = []) => {
      if (disabledRef.current) return;
      setContainerIdsScheduledForMeasurement((value: any) =>
        value === null
          ? ids
          : value.concat(ids.filter((id: any) => !value.includes(id))),
      );
    },
    [disabledRef],
  );
  const measuringScheduledRef = React.useRef<any>(null);
  const droppableRects = useLazyMemo(
    (previousValue: any) => {
      if (disabled && !dragging) return defaultDroppableRectMap;
      if (
        !previousValue ||
        previousValue === defaultDroppableRectMap ||
        containersRef.current !== containers ||
        containerIdsScheduledForMeasurement != null
      ) {
        const map = new Map();
        for (const container of containers) {
          if (!container) continue;
          if (
            containerIdsScheduledForMeasurement &&
            containerIdsScheduledForMeasurement.length > 0 &&
            !containerIdsScheduledForMeasurement.includes(container.id) &&
            container.rect.current
          ) {
            map.set(container.id, container.rect.current);
            continue;
          }
          const node = container.node.current;
          const rect = node ? new Rect(measure(node), node) : null;
          container.rect.current = rect;
          if (rect) map.set(container.id, rect);
        }
        return map;
      }
      return previousValue;
    },
    [
      containers,
      containerIdsScheduledForMeasurement,
      dragging,
      disabled,
      measure,
    ],
  );
  React.useEffect(() => {
    containersRef.current = containers;
  }, [containers]);
  React.useEffect(() => {
    if (!disabled) measureDroppableContainers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging, disabled]);
  React.useEffect(() => {
    if (
      containerIdsScheduledForMeasurement &&
      containerIdsScheduledForMeasurement.length > 0
    )
      setContainerIdsScheduledForMeasurement(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(containerIdsScheduledForMeasurement)]);
  React.useEffect(() => {
    if (
      disabled ||
      typeof frequency !== "number" ||
      measuringScheduledRef.current !== null
    )
      return;
    measuringScheduledRef.current = setTimeout(() => {
      measureDroppableContainers();
      measuringScheduledRef.current = null;
    }, frequency);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frequency, disabled, measureDroppableContainers, ...dependencies]);
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: containerIdsScheduledForMeasurement != null,
  };
  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;
      case MeasuringStrategy.BeforeDragging:
        return dragging;
      default:
        return !dragging;
    }
  }
}

function useInitialValue(value: any, computeFn?: (value: any) => any) {
  return useLazyMemo(
    (previousValue: any) =>
      value
        ? previousValue ||
          (typeof computeFn === "function" ? computeFn(value) : value)
        : null,
    [computeFn, value],
  );
}

function useInitialRect(node: any, measure: (node: any) => any) {
  return useInitialValue(node, measure);
}

function useMutationObserver({ callback, disabled }: any) {
  const handleMutations = useEvent(callback);
  const mutationObserver = React.useMemo(() => {
    if (
      disabled ||
      typeof window === "undefined" ||
      window.MutationObserver === undefined
    )
      return undefined;
    const { MutationObserver } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  React.useEffect(
    () => () => mutationObserver?.disconnect(),
    [mutationObserver],
  );
  return mutationObserver;
}

function useResizeObserver({ callback, disabled }: any) {
  const handleResize = useEvent(callback);
  const resizeObserver = React.useMemo(() => {
    if (
      disabled ||
      typeof window === "undefined" ||
      window.ResizeObserver === undefined
    )
      return undefined;
    const { ResizeObserver } = window;
    return new ResizeObserver(handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);
  React.useEffect(() => () => resizeObserver?.disconnect(), [resizeObserver]);
  return resizeObserver;
}

function defaultMeasure(element: Element) {
  return new Rect(getClientRect(element), element);
}

function useRect(
  element: any,
  measure: (element: any) => any = defaultMeasure,
  fallback?: any,
) {
  const [rect, setRect] = React.useState<any>(null);
  function measureRect() {
    setRect((previousRect: any) => {
      if (!element) return null;
      if (element.isConnected === false)
        return previousRect ?? fallback ?? null;
      const nextRect = measure(element);
      return JSON.stringify(previousRect) === JSON.stringify(nextRect)
        ? previousRect
        : nextRect;
    });
  }
  const mutationObserver = useMutationObserver({
    callback(records: MutationRecord[]) {
      if (element)
        for (const record of records) {
          const { type, target } = record;
          if (
            type === "childList" &&
            target instanceof HTMLElement &&
            target.contains(element)
          ) {
            measureRect();
            break;
          }
        }
    },
  });
  const resizeObserver = useResizeObserver({ callback: measureRect });
  useIsomorphicLayoutEffect(() => {
    measureRect();
    if (element) {
      resizeObserver?.observe(element);
      mutationObserver?.observe(document.body, {
        childList: true,
        subtree: true,
      });
    } else {
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element]);
  return rect;
}

function useRectDelta(rect: any) {
  return getRectDelta(rect, useInitialValue(rect));
}

function useScrollableAncestors(node: any) {
  const previousNode = React.useRef(node);
  const ancestors = useLazyMemo(
    (previousValue: any) =>
      node
        ? previousValue &&
          previousValue !== defaultScrollableAncestors &&
          node &&
          previousNode.current &&
          node.parentNode === previousNode.current.parentNode
          ? previousValue
          : getScrollableAncestors(node)
        : defaultScrollableAncestors,
    [node],
  );
  React.useEffect(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}

function useScrollOffsets(elements: any[]) {
  const [scrollCoordinates, setScrollCoordinates] = React.useState<Map<
    any,
    Coordinates
  > | null>(null);
  const previousElements = React.useRef(elements);
  const handleScroll = React.useCallback((event: Event) => {
    const scrollingElement = getScrollableElement(event.target);
    if (scrollingElement)
      setScrollCoordinates((value) =>
        value
          ? (value.set(
              scrollingElement,
              getScrollCoordinates(scrollingElement),
            ),
            new Map(value))
          : null,
      );
  }, []);
  React.useEffect(() => {
    const previousElementsValue = previousElements.current;
    if (elements !== previousElementsValue) {
      removeScrollListeners(previousElementsValue);
      const entries = elements
        .map((element) => {
          const scrollableElement = getScrollableElement(element);
          if (scrollableElement) {
            scrollableElement.addEventListener("scroll", handleScroll, {
              passive: true,
            });
            return [scrollableElement, getScrollCoordinates(scrollableElement)];
          }
          return null;
        })
        .filter((entry): entry is [any, Coordinates] => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      previousElements.current = elements;
    }
    return () => {
      removeScrollListeners(elements);
      removeScrollListeners(previousElementsValue);
    };
    function removeScrollListeners(elementsToClean: any[]) {
      elementsToClean.forEach((element) => {
        getScrollableElement(element)?.removeEventListener(
          "scroll",
          handleScroll,
        );
      });
    }
  }, [handleScroll, elements]);
  return React.useMemo(
    () =>
      elements.length
        ? scrollCoordinates
          ? Array.from(scrollCoordinates.values()).reduce(
              (accumulator, current) => addCoordinates(accumulator, current),
              defaultCoordinates,
            )
          : getScrollOffsets(elements)
        : defaultCoordinates,
    [elements, scrollCoordinates],
  );
}

function useScrollOffsetsDelta(scrollOffsets: any, dependencies: any[] = []) {
  const initialScrollOffsets = React.useRef<any>(null);
  React.useEffect(() => {
    initialScrollOffsets.current = null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  React.useEffect(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
    if (hasScrollOffsets && !initialScrollOffsets.current)
      initialScrollOffsets.current = scrollOffsets;
    if (!hasScrollOffsets && initialScrollOffsets.current)
      initialScrollOffsets.current = null;
  }, [scrollOffsets]);
  return initialScrollOffsets.current
    ? subtractCoordinates(scrollOffsets, initialScrollOffsets.current)
    : defaultCoordinates;
}

function useSensorSetup(sensors: any[]): void {
  React.useEffect(
    () => {
      if (!canUseDOM) return;
      const teardownFns = sensors.map(({ sensor }) =>
        sensor.setup == null ? undefined : sensor.setup(),
      );
      return () => {
        for (const teardown of teardownFns) teardown?.();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sensors.map(({ sensor }) => sensor),
  );
}

function useSyntheticListeners(listeners: any[], id: any) {
  return React.useMemo(
    () =>
      listeners.reduce((accumulator, { eventName, handler }) => {
        accumulator[eventName] = (event: Event) => {
          handler(event, id);
        };
        return accumulator;
      }, {}),
    [listeners, id],
  );
}

function useWindowRect(windowElement: Window | null) {
  return React.useMemo(
    () => (windowElement ? getWindowClientRect(windowElement) : null),
    [windowElement],
  );
}

function useRects(
  elements: any[],
  measure: (element: any) => any = getClientRect,
) {
  const [firstElement] = elements;
  const windowRect = useWindowRect(
    firstElement ? getWindow(firstElement) : null,
  );
  const [rects, setRects] = React.useState<any>(defaultRects);
  function measureRects() {
    setRects(() =>
      elements.length
        ? elements.map((element) =>
            isDocumentScrollingElement(element)
              ? windowRect
              : new Rect(measure(element), element),
          )
        : defaultRects,
    );
  }
  const resizeObserver = useResizeObserver({ callback: measureRects });
  useIsomorphicLayoutEffect(() => {
    resizeObserver?.disconnect();
    measureRects();
    elements.forEach((element) => resizeObserver?.observe(element));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements]);
  return rects;
}

function getMeasurableNode(node: any): any {
  if (!node) return null;
  if (node.children.length > 1) return node;
  const firstChild = node.children[0];
  return isHTMLElement(firstChild) ? firstChild : node;
}

function useDragOverlayMeasuring({ measure }: any) {
  const [rect, setRect] = React.useState<any>(null);
  const resizeObserver = useResizeObserver({
    callback: React.useCallback(
      (entries: ResizeObserverEntry[]) => {
        for (const { target } of entries)
          if (isHTMLElement(target)) {
            setRect((value: any) => {
              const newRect = measure(target);
              return value
                ? { ...value, width: newRect.width, height: newRect.height }
                : newRect;
            });
            break;
          }
      },
      [measure],
    ),
  });
  const [nodeRef, setNodeRef] = useNodeRef(
    React.useCallback(
      (element: any) => {
        const measurableNode = getMeasurableNode(element);
        resizeObserver?.disconnect();
        if (measurableNode) resizeObserver?.observe(measurableNode);
        setRect(measurableNode ? measure(measurableNode) : null);
      },
      [measure, resizeObserver],
    ),
  );
  return React.useMemo(
    () => ({ nodeRef, rect, setRef: setNodeRef }),
    [rect, nodeRef, setNodeRef],
  );
}

// ---------------------------------------------------------------------------
// State + reducer
// ---------------------------------------------------------------------------

function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new DroppableContainersMap() },
  };
}

function reducer(state: any, action: any): any {
  switch (action.type) {
    case DndAction.DragStart:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active,
        },
      };
    case DndAction.DragMove:
      return state.draggable.active == null
        ? state
        : {
            ...state,
            draggable: {
              ...state.draggable,
              translate: {
                x: action.coordinates.x - state.draggable.initialCoordinates.x,
                y: action.coordinates.y - state.draggable.initialCoordinates.y,
              },
            },
          };
    case DndAction.DragEnd:
    case DndAction.DragCancel:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case DndAction.RegisterDroppable: {
      const { element } = action;
      const { id } = element;
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, element);
      return {
        ...state,
        droppable: { ...state.droppable, containers },
      };
    }
    case DndAction.SetDroppableDisabled: {
      const { id, key, disabled } = action;
      const container = state.droppable.containers.get(id);
      if (!container || key !== container.key) return state;
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, { ...container, disabled });
      return {
        ...state,
        droppable: { ...state.droppable, containers },
      };
    }
    case DndAction.UnregisterDroppable: {
      const { id, key } = action;
      const container = state.droppable.containers.get(id);
      if (!container || key !== container.key) return state;
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.delete(id);
      return {
        ...state,
        droppable: { ...state.droppable, containers },
      };
    }
    default:
      return state;
  }
}

function useRestoreFocus({ disabled }: any) {
  const { active, activatorEvent, draggableNodes } =
    React.useContext(InternalContext);
  const previousActivatorEvent = usePrevious(activatorEvent);
  const previousActiveId = usePrevious(active?.id);
  React.useEffect(() => {
    if (
      !disabled &&
      !activatorEvent &&
      previousActivatorEvent &&
      previousActiveId != null
    ) {
      if (
        !isKeyboardEvent(previousActivatorEvent) ||
        document.activeElement === previousActivatorEvent.target
      )
        return;
      const draggableNode = draggableNodes.get(previousActiveId);
      if (!draggableNode) return;
      const { activatorNode, node } = draggableNode;
      if (!activatorNode.current && !node.current) return;
      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) continue;
          const focusableNode = findFirstFocusableNode(element);
          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [
    activatorEvent,
    disabled,
    draggableNodes,
    previousActiveId,
    previousActivatorEvent,
  ]);
  return null;
}

function applyModifiers(modifiers: any[] | null, { transform, ...rest }: any) {
  return modifiers != null && modifiers.length
    ? modifiers.reduce(
        (accumulator, modifier) =>
          modifier({ transform: accumulator, ...rest }),
        transform,
      )
    : transform;
}

function useMeasuringConfiguration(config: any) {
  return React.useMemo(
    () => ({
      draggable: {
        ...defaultMeasuringConfiguration.draggable,
        ...config?.draggable,
      },
      droppable: {
        ...defaultMeasuringConfiguration.droppable,
        ...config?.droppable,
      },
      dragOverlay: {
        ...defaultMeasuringConfiguration.dragOverlay,
        ...config?.dragOverlay,
      },
    }),
    [config?.draggable, config?.droppable, config?.dragOverlay],
  );
}

function useLayoutShiftScrollCompensation({
  activeNode,
  measure,
  initialRect,
  config = true,
}: any) {
  const initialized = React.useRef(false);
  const { x: compensateX, y: compensateY } =
    typeof config === "boolean" ? { x: config, y: config } : config;
  useIsomorphicLayoutEffect(() => {
    if ((!compensateX && !compensateY) || !activeNode) {
      initialized.current = false;
      return;
    }
    if (initialized.current || !initialRect) return;
    const node = activeNode?.node.current;
    if (!node || node.isConnected === false) return;
    const delta = getRectDelta(measure(node), initialRect);
    if (!compensateX) delta.x = 0;
    if (!compensateY) delta.y = 0;
    initialized.current = true;
    if (Math.abs(delta.x) > 0 || Math.abs(delta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);
      if (firstScrollableAncestor)
        (firstScrollableAncestor as Element).scrollBy({
          top: delta.y,
          left: delta.x,
        });
    }
  }, [activeNode, compensateX, compensateY, initialRect, measure]);
}

// ---------------------------------------------------------------------------
// Public hooks
// ---------------------------------------------------------------------------

export function useDraggable(options: any) {
  const { id, data, disabled = false, attributes } = options;
  const key = useUniqueId(DRAGGABLE_ID_PREFIX);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over,
  } = React.useContext(InternalContext);
  const {
    role = DEFAULT_DRAGGABLE_ROLE,
    roleDescription = "draggable",
    tabIndex = 0,
  } = attributes ?? {};
  const isDragging = active?.id === id;
  const transform = React.useContext(
    isDragging ? ActiveDraggableContext : NullContext,
  );
  const [node, setNodeRef] = useNodeRef();
  const [activatorNode, setActivatorNodeRef] = useNodeRef();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = useLatestValue(data);
  useIsomorphicLayoutEffect(() => {
    draggableNodes.set(id, {
      id,
      key,
      node,
      activatorNode,
      data: dataRef,
    });
    return () => {
      const draggableNode = draggableNodes.get(id);
      if (draggableNode && draggableNode.key === key) draggableNodes.delete(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggableNodes, id]);
  const memoizedAttributes = React.useMemo(
    () => ({
      role,
      tabIndex,
      "aria-disabled": disabled,
      "aria-pressed":
        isDragging && role === DEFAULT_DRAGGABLE_ROLE ? true : undefined,
      "aria-roledescription": roleDescription,
      "aria-describedby": ariaDescribedById.draggable,
    }),
    [
      disabled,
      role,
      tabIndex,
      isDragging,
      roleDescription,
      ariaDescribedById.draggable,
    ],
  );
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? undefined : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform,
  };
}

export function useDndMonitorContext() {
  return React.useContext(DndMonitorContext);
}

export function useDroppable(options: any) {
  const { data, disabled = false, id, resizeObserverConfig } = options;
  const key = useUniqueId(DROPPABLE_ID_PREFIX);
  const { active, dispatch, over, measureDroppableContainers } =
    React.useContext(InternalContext);
  const previousDisabled = React.useRef({ disabled });
  const resizeObserverConnected = React.useRef(false);
  const rectRef = React.useRef<any>(null);
  const callbackTimeoutRef = React.useRef<any>(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout,
  } = { ...defaultResizeObserverConfig, ...resizeObserverConfig };
  const updateMeasurementsForRef = useLatestValue(updateMeasurementsFor ?? id);
  const resizeObserver = useResizeObserver({
    callback: React.useCallback(() => {
      if (!resizeObserverConnected.current) {
        resizeObserverConnected.current = true;
        return;
      }
      if (callbackTimeoutRef.current != null)
        clearTimeout(callbackTimeoutRef.current);
      callbackTimeoutRef.current = setTimeout(() => {
        measureDroppableContainers(
          Array.isArray(updateMeasurementsForRef.current)
            ? updateMeasurementsForRef.current
            : [updateMeasurementsForRef.current],
        );
        callbackTimeoutRef.current = null;
      }, resizeObserverTimeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resizeObserverTimeout]),
    disabled: resizeObserverDisabled || !active,
  });
  const [nodeRef, setNodeRef] = useNodeRef(
    React.useCallback(
      (element: any, previousElement: any) => {
        if (!resizeObserver) return;
        if (previousElement) {
          resizeObserver.unobserve(previousElement);
          resizeObserverConnected.current = false;
        }
        if (element) resizeObserver.observe(element);
      },
      [resizeObserver],
    ),
  );
  const dataRef = useLatestValue(data);
  React.useEffect(() => {
    if (!resizeObserver || !nodeRef.current) return;
    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  React.useEffect(() => {
    dispatch({
      type: DndAction.RegisterDroppable,
      element: {
        id,
        key,
        disabled,
        node: nodeRef,
        rect: rectRef,
        data: dataRef,
      },
    });
    return () => dispatch({ type: DndAction.UnregisterDroppable, key, id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  React.useEffect(() => {
    if (disabled !== previousDisabled.current.disabled) {
      dispatch({ type: DndAction.SetDroppableDisabled, id, key, disabled });
      previousDisabled.current.disabled = disabled;
    }
  }, [id, key, disabled, dispatch]);
  return {
    active,
    rect: rectRef,
    isOver: over?.id === id,
    node: nodeRef,
    over,
    setNodeRef,
  };
}

// ---------------------------------------------------------------------------
// Drag overlay + drop animation
// ---------------------------------------------------------------------------

function AnimationManager({ animation, children }: any) {
  const [clonedChildren, setClonedChildren] = React.useState<any>(null);
  const [element, setElement] = React.useState<any>(null);
  const previousChildren = usePrevious(children);
  if (!children && !clonedChildren && previousChildren)
    setClonedChildren(previousChildren);
  useIsomorphicLayoutEffect(() => {
    if (!element) return;
    const key = clonedChildren?.key;
    const id = clonedChildren?.props.id;
    if (key == null || id == null) {
      setClonedChildren(null);
      return;
    }
    Promise.resolve(animation(id, element)).then(() => {
      setClonedChildren(null);
    });
  }, [animation, clonedChildren, element]);
  return (
    <React.Fragment>
      {children}
      {clonedChildren
        ? React.cloneElement(clonedChildren, { ref: setElement })
        : null}
    </React.Fragment>
  );
}

function DefaultDndContextProvider({ children }: any) {
  return (
    <InternalContext.Provider value={defaultInternalContext}>
      <ActiveDraggableContext.Provider value={defaultActiveDraggableContext}>
        {children}
      </ActiveDraggableContext.Provider>
    </InternalContext.Provider>
  );
}

function useDropAnimationHandler({
  config,
  draggableNodes,
  droppableContainers,
  measuringConfiguration,
}: any) {
  return useEvent((draggableId: any, dragOverlayNode: any) => {
    if (config === null) return;
    const draggableNode = draggableNodes.get(draggableId);
    if (!draggableNode) return;
    const draggableElement = draggableNode.node.current;
    if (!draggableElement) return;
    const dragOverlayMeasurableNode = getMeasurableNode(dragOverlayNode);
    if (!dragOverlayMeasurableNode) return;
    const { transform } =
      getWindow(dragOverlayNode).getComputedStyle(dragOverlayNode);
    const parsedTransform = parseTransform(transform);
    if (!parsedTransform) return;
    const animation =
      typeof config === "function"
        ? config
        : createDefaultDropAnimation(config);
    scrollIntoViewIfNeeded(
      draggableElement,
      measuringConfiguration.draggable.measure,
    );
    return animation({
      active: {
        id: draggableId,
        data: draggableNode.data,
        node: draggableElement,
        rect: measuringConfiguration.draggable.measure(draggableElement),
      },
      draggableNodes,
      dragOverlay: {
        node: dragOverlayNode,
        rect: measuringConfiguration.dragOverlay.measure(
          dragOverlayMeasurableNode,
        ),
      },
      droppableContainers,
      measuringConfiguration,
      transform: parsedTransform,
    });
  });
}

function createDefaultDropAnimation(options: any) {
  const { duration, easing, sideEffects, keyframes } = {
    ...defaultDropAnimationConfiguration,
    ...options,
  };
  return ({ active, dragOverlay, transform, ...rest }: any) => {
    if (!duration) return;
    const delta = {
      x: dragOverlay.rect.left - active.rect.left,
      y: dragOverlay.rect.top - active.rect.top,
    };
    const scale = {
      scaleX:
        transform.scaleX === 1
          ? 1
          : (active.rect.width * transform.scaleX) / dragOverlay.rect.width,
      scaleY:
        transform.scaleY === 1
          ? 1
          : (active.rect.height * transform.scaleY) / dragOverlay.rect.height,
    };
    const finalTransform = {
      x: transform.x - delta.x,
      y: transform.y - delta.y,
      ...scale,
    };
    const animationKeyframes = keyframes({
      ...rest,
      active,
      dragOverlay,
      transform: { initial: transform, final: finalTransform },
    });
    const [firstKeyframe] = animationKeyframes;
    const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];
    if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) return;
    const cleanup = sideEffects?.({ active, dragOverlay, ...rest });
    const animation = dragOverlay.node.animate(animationKeyframes, {
      duration,
      easing,
      fill: "forwards",
    });
    return new Promise<void>((resolve) => {
      animation.onfinish = () => {
        cleanup?.();
        resolve();
      };
    });
  };
}

let keyCounter = 0;

function useDerivedKey(value: any): number | undefined {
  return React.useMemo(() => {
    if (value != null) {
      keyCounter++;
      return keyCounter;
    }
  }, [value]);
}

const defaultSensors = [{ sensor: PointerSensor, options: {} }];

function useDndMonitorProvider() {
  const [listeners] = React.useState(() => new Set<any>());
  const registerListener = React.useCallback(
    (listener: any) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    [listeners],
  );
  const dispatch = React.useCallback(
    ({ type, event }: { event: any; type: string }) => {
      listeners.forEach((listener) => listener[type]?.call(listener, event));
    },
    [listeners],
  );
  return [dispatch, registerListener] as const;
}

export function useDndContext() {
  return React.useContext(DndContextContext);
}

export function useDndMonitor(listener: any) {
  const registerListener = React.useContext(DndMonitorContext);
  React.useEffect(() => {
    if (!registerListener)
      throw new Error("useDndMonitor must be used within <DndContext>");
    return registerListener(listener);
  }, [listener, registerListener]);
}

export const DndContext = React.memo(function DndContext({
  id,
  accessibility,
  autoScroll = true,
  children,
  sensors = defaultSensors,
  collisionDetection = rectIntersection,
  measuring,
  modifiers,
  ...listeners
}: any) {
  const [state, dispatch] = React.useReducer(
    reducer,
    undefined,
    getInitialState,
  );
  const [dispatchMonitorEvent, registerMonitorListener] =
    useDndMonitorProvider();
  const [status, setStatus] = React.useState(DndContextStatus.Uninitialized);
  const isInitialized = status === DndContextStatus.Initialized;
  const {
    draggable: { active: activeId, nodes: draggableNodes, translate },
    droppable: { containers: droppableContainers },
  } = state;
  const activeNode = activeId == null ? null : draggableNodes.get(activeId);
  const activeRects = React.useRef({ initial: null, translated: null });
  const active = React.useMemo(
    () =>
      activeId == null
        ? null
        : {
            id: activeId,
            data: activeNode?.data ?? defaultData,
            rect: activeRects,
          },
    [activeId, activeNode],
  );
  const activeRef = React.useRef<any>(null);
  const [activeSensor, setActiveSensor] = React.useState<any>(null);
  const [activatorEvent, setActivatorEvent] = React.useState<Event | null>(
    null,
  );
  const latestListeners = useLatestValue(listeners, Object.values(listeners));
  const ariaDescribedById = useUniqueId("DndDescribedBy", id);
  const enabledDroppableContainers = React.useMemo(
    () => droppableContainers.getEnabled(),
    [droppableContainers],
  );
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const { droppableRects, measureDroppableContainers, measuringScheduled } =
    useDroppableMeasuring(enabledDroppableContainers, {
      dragging: isInitialized,
      dependencies: [translate.x, translate.y],
      config: measuringConfiguration.droppable,
    });
  const activeNodeElement = useCachedNode(draggableNodes, activeId);
  const activatorCoordinates = React.useMemo(
    () => (activatorEvent ? getEventCoordinates(activatorEvent) : null),
    [activatorEvent],
  );
  const autoScrollOptions = React.useMemo(() => {
    const disabledBySensor = activeSensor?.autoScrollEnabled === false;
    const disabledByProp =
      typeof autoScroll === "object"
        ? autoScroll.enabled === false
        : autoScroll === false;
    const enabled = isInitialized && !disabledBySensor && !disabledByProp;
    return typeof autoScroll === "object"
      ? { ...autoScroll, enabled }
      : { enabled };
  }, [activeSensor, autoScroll, isInitialized]);

  const initialActiveNodeRect = useInitialRect(
    activeNodeElement,
    measuringConfiguration.draggable.measure,
  );
  useLayoutShiftScrollCompensation({
    activeNode,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure,
  });
  const activeNodeRect = useRect(
    activeNodeElement,
    measuringConfiguration.draggable.measure,
    initialActiveNodeRect,
  );
  const containerNodeRect = useRect(activeNodeElement?.parentElement ?? null);
  const sensorContext = React.useRef<any>({
    activatorEvent: null,
    active: null,
    activeNode: activeNodeElement,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null,
  });
  const overNode = droppableContainers.getNodeFor(
    sensorContext.current.over?.id,
  );
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure,
  });
  const draggingNode = dragOverlay.nodeRef.current ?? activeNodeElement;
  const draggingNodeRect = isInitialized
    ? (dragOverlay.rect ?? activeNodeRect)
    : null;
  const usesDragOverlay = Boolean(
    dragOverlay.nodeRef.current && dragOverlay.rect,
  );
  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
  const windowRect = useWindowRect(
    draggingNode ? getWindow(draggingNode) : null,
  );
  const scrollableAncestors = useScrollableAncestors(
    isInitialized ? (overNode ?? activeNodeElement) : null,
  );
  const scrollableAncestorRects = useRects(scrollableAncestors);
  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1,
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect,
  });
  const pointerCoordinates = activatorCoordinates
    ? addCoordinates(activatorCoordinates, translate)
    : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors);
  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [
    activeNodeRect,
  ]);
  const scrollAdjustedTranslate = addCoordinates(
    modifiedTranslate,
    scrollAdjustment,
  );
  const collisionRect = draggingNodeRect
    ? createRectAdjustmentFn(1)(draggingNodeRect, modifiedTranslate)
    : null;
  const collisions =
    active && collisionRect
      ? collisionDetection({
          active,
          collisionRect,
          droppableRects,
          droppableContainers: enabledDroppableContainers,
          pointerCoordinates,
        })
      : null;
  const overId = getFirstCollision(collisions, "id");
  const [over, setOver] = React.useState<any>(null);
  const transform = adjustScale(
    usesDragOverlay
      ? modifiedTranslate
      : addCoordinates(modifiedTranslate, activeNodeScrollDelta),
    over?.rect ?? null,
    activeNodeRect,
  );
  const sensorInstanceRef = React.useRef<any>(null);

  const bindActivatorToSensorInstantiator = React.useCallback(
    (event: React.SyntheticEvent, sensorDescriptor: any) => {
      const { sensor: Sensor, options } = sensorDescriptor;
      if (activeRef.current == null) return;
      const activeNode = draggableNodes.get(activeRef.current);
      if (!activeNode) return;
      const nativeEvent = event.nativeEvent;

      sensorInstanceRef.current = new Sensor({
        active: activeRef.current,
        activeNode,
        event: nativeEvent,
        options,
        context: sensorContext,
        onAbort(activeId: any) {
          if (!draggableNodes.get(activeId)) return;
          const { onDragAbort } = latestListeners.current;
          const event = { id: activeId };
          onDragAbort?.(event);
          dispatchMonitorEvent({ type: "onDragAbort", event });
        },
        onPending(
          activeId: any,
          constraint: any,
          initialCoordinates: any,
          offset: any,
        ) {
          if (!draggableNodes.get(activeId)) return;
          const { onDragPending } = latestListeners.current;
          const event = {
            id: activeId,
            constraint,
            initialCoordinates,
            offset,
          };
          onDragPending?.(event);
          dispatchMonitorEvent({ type: "onDragPending", event });
        },
        onStart(initialCoordinates: Coordinates) {
          const activeId = activeRef.current;
          if (activeId == null) return;
          const activeNode = draggableNodes.get(activeId);
          if (!activeNode) return;
          const { onDragStart } = latestListeners.current;
          const event = {
            activatorEvent: nativeEvent,
            active: { id: activeId, data: activeNode.data, rect: activeRects },
          };
          unstable_batchedUpdates(() => {
            onDragStart?.(event);
            setStatus(DndContextStatus.Initializing);
            dispatch({
              type: DndAction.DragStart,
              initialCoordinates,
              active: activeId,
            });
            dispatchMonitorEvent({ type: "onDragStart", event });
            setActiveSensor(sensorInstanceRef.current);
            setActivatorEvent(nativeEvent);
          });
        },
        onMove(coordinates: Coordinates) {
          dispatch({ type: DndAction.DragMove, coordinates });
        },
        onEnd: createHandler(DndAction.DragEnd),
        onCancel: createHandler(DndAction.DragCancel),
      });

      function createHandler(type: string) {
        return async function handleEndOrCancel() {
          let { active, collisions, over, scrollAdjustedTranslate } =
            sensorContext.current;
          let event: any = null;

          if (active && scrollAdjustedTranslate) {
            const { cancelDrop } = latestListeners.current;
            event = {
              activatorEvent: nativeEvent,
              active,
              collisions,
              delta: scrollAdjustedTranslate,
              over,
            };
            if (
              type === DndAction.DragEnd &&
              typeof cancelDrop === "function" &&
              (await Promise.resolve(cancelDrop(event)))
            ) {
              type = DndAction.DragCancel;
            }
          }

          activeRef.current = null;
          unstable_batchedUpdates(() => {
            dispatch({ type });
            setStatus(DndContextStatus.Uninitialized);
            setOver(null);
            setActiveSensor(null);
            setActivatorEvent(null);
            sensorInstanceRef.current = null;
            const eventName =
              type === DndAction.DragEnd ? "onDragEnd" : "onDragCancel";
            if (event) {
              latestListeners.current[eventName]?.(event);
              dispatchMonitorEvent({ type: eventName, event });
            }
          });
        };
      }
    },
    [dispatchMonitorEvent, draggableNodes, latestListeners],
  );

  const activators = useCombineActivators(
    sensors,
    React.useCallback(
      (handler: any, sensorDescriptor: any) =>
        (event: React.SyntheticEvent, id: any) => {
          const nativeEvent = event.nativeEvent as any;
          const activeNode = draggableNodes.get(id);
          if (
            activeRef.current !== null ||
            !activeNode ||
            nativeEvent.dndKit ||
            nativeEvent.defaultPrevented
          )
            return;

          const activationContext = { active: activeNode };
          if (
            handler(event, sensorDescriptor.options, activationContext) === true
          ) {
            nativeEvent.dndKit = { capturedBy: sensorDescriptor.sensor };
            activeRef.current = id;
            bindActivatorToSensorInstantiator(event, sensorDescriptor);
          }
        },
      [bindActivatorToSensorInstantiator, draggableNodes],
    ),
  );

  useSensorSetup(sensors);

  useIsomorphicLayoutEffect(() => {
    if (activeNodeRect && status === DndContextStatus.Initializing)
      setStatus(DndContextStatus.Initialized);
  }, [activeNodeRect, status]);

  React.useEffect(() => {
    const { onDragMove } = latestListeners.current;
    const { active, activatorEvent, collisions, over } = sensorContext.current;
    if (!active || !activatorEvent) return;
    const event = {
      active,
      activatorEvent,
      collisions,
      delta: { x: scrollAdjustedTranslate.x, y: scrollAdjustedTranslate.y },
      over,
    };
    unstable_batchedUpdates(() => {
      onDragMove?.(event);
      dispatchMonitorEvent({ type: "onDragMove", event });
    });
  }, [
    dispatchMonitorEvent,
    latestListeners,
    scrollAdjustedTranslate.x,
    scrollAdjustedTranslate.y,
  ]);

  React.useEffect(() => {
    const {
      active,
      activatorEvent,
      collisions,
      droppableContainers,
      scrollAdjustedTranslate,
    } = sensorContext.current;
    if (
      !active ||
      activeRef.current == null ||
      !activatorEvent ||
      !scrollAdjustedTranslate
    )
      return;

    const { onDragOver } = latestListeners.current;
    const overContainer = droppableContainers.get(overId);
    const over =
      overContainer && overContainer.rect.current
        ? {
            id: overContainer.id,
            rect: overContainer.rect.current,
            data: overContainer.data,
            disabled: overContainer.disabled,
          }
        : null;
    const event = {
      active,
      activatorEvent,
      collisions,
      delta: { x: scrollAdjustedTranslate.x, y: scrollAdjustedTranslate.y },
      over,
    };
    unstable_batchedUpdates(() => {
      setOver(over);
      onDragOver?.(event);
      dispatchMonitorEvent({ type: "onDragOver", event });
    });
  }, [dispatchMonitorEvent, latestListeners, overId]);

  useIsomorphicLayoutEffect(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode: activeNodeElement,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate,
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect,
    };
  }, [
    activatorEvent,
    active,
    activeNodeElement,
    collisionRect,
    collisions,
    droppableRects,
    draggableNodes,
    draggingNode,
    draggingNodeRect,
    droppableContainers,
    over,
    scrollableAncestors,
    scrollAdjustedTranslate,
  ]);

  useAutoScroller({
    ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
  });

  const publicContext = React.useMemo(
    () => ({
      active,
      activeNode: activeNodeElement,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect,
    }),
    [
      active,
      activeNodeElement,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect,
    ],
  );

  const internalContext = React.useMemo(
    () => ({
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: { draggable: ariaDescribedById },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers,
    }),
    [
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById,
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers,
    ],
  );

  return (
    <DndMonitorContext.Provider value={registerMonitorListener}>
      <InternalContext.Provider value={internalContext}>
        <DndContextContext.Provider value={publicContext}>
          <ActiveDraggableContext.Provider value={transform}>
            {children}
          </ActiveDraggableContext.Provider>
        </DndContextContext.Provider>
        {React.createElement(useRestoreFocus, {
          disabled: accessibility?.restoreFocus === false,
        })}
      </InternalContext.Provider>
    </DndMonitorContext.Provider>
  );
});

const overlayBaseStyle: React.CSSProperties = {
  position: "fixed",
  touchAction: "none",
};

const defaultOverlayTransition = (activatorEvent: Event | null) =>
  isKeyboardEvent(activatorEvent) ? "transform 250ms ease" : undefined;

const PositionedOverlay = React.forwardRef<any, any>(function PositionedOverlay(
  {
    as,
    activatorEvent,
    adjustScale,
    children,
    className,
    rect,
    style,
    transform,
    transition = defaultOverlayTransition,
  },
  ref,
) {
  if (!rect) return null;
  const overlayTransform = adjustScale
    ? transform
    : { ...transform, scaleX: 1, scaleY: 1 };
  const overlayStyle = {
    ...overlayBaseStyle,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    transform: cssTransform.Transform.toString(overlayTransform),
    transformOrigin:
      adjustScale && activatorEvent
        ? getRelativeTransformOrigin(activatorEvent, rect)
        : undefined,
    transition:
      typeof transition === "function"
        ? transition(activatorEvent)
        : transition,
    ...style,
  };
  return React.createElement(
    as,
    { className, style: overlayStyle, ref },
    children,
  );
});

export const DragOverlay = React.memo(function DragOverlay({
  adjustScale = false,
  children,
  dropAnimation,
  style,
  transition,
  modifiers,
  wrapperElement = "div",
  className,
  zIndex = 999,
}: any) {
  const {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggableNodes,
    droppableContainers,
    dragOverlay,
    over,
    measuringConfiguration,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect,
  } = useDndContext();
  const transform = React.useContext(ActiveDraggableContext);
  const key = useDerivedKey(active?.id);
  const modifiedTransform = applyModifiers(modifiers, {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform,
    windowRect,
  });
  const initialRect = useInitialValue(activeNodeRect);
  const handleDropAnimation = useDropAnimationHandler({
    config: dropAnimation,
    draggableNodes,
    droppableContainers,
    measuringConfiguration,
  });
  const ref = initialRect ? dragOverlay.setRef : undefined;

  return (
    <DefaultDndContextProvider>
      <AnimationManager animation={handleDropAnimation}>
        {active && key ? (
          <PositionedOverlay
            key={key}
            id={active.id}
            ref={ref}
            as={wrapperElement}
            activatorEvent={activatorEvent}
            adjustScale={adjustScale}
            className={className}
            transition={transition}
            rect={initialRect}
            style={{ zIndex, ...style }}
            transform={modifiedTransform}
          >
            {children}
          </PositionedOverlay>
        ) : null}
      </AnimationManager>
    </DefaultDndContextProvider>
  );
});

export {
  noop,
  distanceBetween,
  getRelativeTransformOrigin,
  sortCollisionsAsc,
  sortCollisionsDesc,
  cornersOfRectangle,
  getFirstCollision,
  centerOfRectangle,
  getIntersectionRatio,
  isPointWithinRect,
  closestCenter,
  rectIntersection,
  pointerWithin,
  adjustScale,
  getRectDelta,
  createRectAdjustmentFn,
  parseTransform,
  inverseTransform,
  getTransformAgnosticClientRect,
  getWindowClientRect,
  isFixed,
  isScrollable,
  getScrollableAncestors,
  getFirstScrollableAncestor,
  getScrollableElement,
  getScrollXCoordinate,
  getScrollYCoordinate,
  getScrollCoordinates,
  isDocumentScrollingElement,
  getScrollPosition,
  getScrollDirectionAndSpeed,
  getScrollElementRect,
  getScrollOffsets,
  getScrollXOffset,
  getScrollYOffset,
  scrollIntoViewIfNeeded,
  getEventListenerTarget,
  hasExceededDistance,
  preventDefault,
  stopPropagation,
  isDistanceConstraint,
  isDelayConstraint,
  useAutoScroller,
  useScrollIntent,
  useCachedNode,
  useCombineActivators,
  useDroppableMeasuring,
  useInitialValue,
  useInitialRect,
  useMutationObserver,
  useResizeObserver,
  defaultMeasure,
  useRect,
  useRectDelta,
  useScrollableAncestors,
  useScrollOffsets,
  useScrollOffsetsDelta,
  useSensorSetup,
  useSyntheticListeners,
  useWindowRect,
  useRects,
  getMeasurableNode,
  useDragOverlayMeasuring,
  useIsomorphicLayoutEffect,
  useUniqueId,
  isKeyboardEvent,
  getInitialState,
  reducer,
  useRestoreFocus,
  applyModifiers,
  useMeasuringConfiguration,
  useLayoutShiftScrollCompensation,
  AnimationManager,
  DefaultDndContextProvider,
  useDropAnimationHandler,
  createDefaultDropAnimation,
  useDerivedKey,
};
