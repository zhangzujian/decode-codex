// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @dnd-kit/core primitives bundled into the commons chunk: geometry/scroll
// utilities plus the useSensor(s), getClientRect, useDraggable, useDroppable and
// useDndMonitor hooks. Companion to ./dnd-kit-sortable.tsx.
import * as React from "react";
import {
  addCoordinates,
  ActiveDraggableContext,
  AutoScrollActivator,
  canUseDOM,
  defaultActiveDraggableContext,
  defaultCoordinates,
  defaultDropAnimationConfiguration,
  defaultDroppableRectMap,
  defaultInternalContext,
  defaultMeasuringConfiguration,
  defaultRects,
  defaultResizeObserverConfig,
  defaultScrollableAncestors,
  defaultScrollIntent,
  defaultScrollThreshold,
  DndAction,
  DndMonitorContext,
  DRAGGABLE_ID_PREFIX,
  DROPPABLE_ID_PREFIX,
  DroppableContainersMap,
  findFirstFocusableNode,
  getEventCoordinates,
  getOwnerDocument,
  getWindow,
  InternalContext,
  isDocument,
  isHTMLElement,
  isKeyboardEvent,
  isNode,
  isSvgElement,
  isWindow,
  MeasuringStrategy,
  NullContext,
  Rect,
  ScrollDirection,
  subtractCoordinates,
  TraversalOrder,
  useEvent,
  useInterval,
  useIsomorphicLayoutEffect,
  useLatestValue,
  useLazyMemo,
  useNodeRef,
  usePrevious,
  useUniqueId,
} from "../boundaries/onboarding-commons-externals.facade";

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

const DEFAULT_DRAGGABLE_ROLE = "button";

function noop(): void {}

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
