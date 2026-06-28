// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @dnd-kit/sortable primitives bundled into the commons chunk: arrayMove,
// the SortableContext provider and the useSortable hook.
import * as React from "react";
import {
  useDndContext,
  useUniqueId,
  useDroppable,
  useDraggable,
  useCombinedRefs,
  useIsomorphicLayoutEffect,
  cssTransform,
  isKeyboardEvent,
  getClientRect,
  defaultAnimateLayoutChanges,
  defaultGetNewIndex,
  rectSortingStrategy,
  normalizeSortableDisabled,
  derivedTransformTransition,
} from "../boundaries/onboarding-commons-externals.facade";

const SORTABLE_ID_PREFIX = "Sortable";
const SORTABLE_TRANSITION_PROPERTY = "transform";

const defaultSortableAttributes = {
  roleDescription: "sortable",
};

const defaultSortableTransition = {
  duration: 200,
  easing: "ease",
};

export interface SortableTransition {
  duration: number;
  easing: string;
}

export interface SortableContextValue {
  activeIndex: number;
  containerId: string;
  disabled: { draggable: boolean; droppable: boolean };
  disableTransforms: boolean;
  items: Array<string | number>;
  overIndex: number;
  useDragOverlay: boolean;
  sortedRects: unknown[];
  strategy: (...args: any[]) => unknown;
}

const SortableContextStore = React.createContext<SortableContextValue>({
  activeIndex: -1,
  containerId: SORTABLE_ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: { draggable: false, droppable: false },
});

export function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const next = array.slice();
  next.splice(to < 0 ? next.length + to : to, 0, next.splice(from, 1)[0]);
  return next;
}

function isValidIndex(index: number | null): boolean {
  return index !== null && index >= 0;
}

function arraysEqual(a: unknown[], b: unknown[]): boolean {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] !== b[index]) return false;
  }
  return true;
}

function normalizeDisabled(
  disabled: boolean | { draggable: boolean; droppable: boolean },
) {
  return typeof disabled === "boolean"
    ? { draggable: disabled, droppable: disabled }
    : disabled;
}

function getSortedRects(
  items: Array<string | number>,
  rectsById: Map<string | number, unknown>,
) {
  return items.reduce<unknown[]>((accumulator, current, index) => {
    const rect = rectsById.get(current);
    if (rect) accumulator[index] = rect;
    return accumulator;
  }, Array(items.length));
}

interface DerivedTransform {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
}

function useDerivedTransform(params: {
  disabled: boolean;
  index: number;
  node: React.MutableRefObject<HTMLElement | null>;
  rect: React.MutableRefObject<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>;
}): DerivedTransform | null {
  const { disabled, index, node, rect } = params;
  const [derived, setDerived] = React.useState<DerivedTransform | null>(null);
  const previousIndex = React.useRef(index);

  useIsomorphicLayoutEffect(() => {
    if (!disabled && index !== previousIndex.current && node.current) {
      const previousRect = rect.current;
      if (previousRect) {
        const currentRect = getClientRect(node.current, {
          ignoreTransform: true,
        });
        const next: DerivedTransform = {
          x: previousRect.left - currentRect.left,
          y: previousRect.top - currentRect.top,
          scaleX: previousRect.width / currentRect.width,
          scaleY: previousRect.height / currentRect.height,
        };
        if (next.x || next.y) setDerived(next);
      }
    }
    if (index !== previousIndex.current) previousIndex.current = index;
  }, [disabled, index, node, rect]);

  React.useEffect(() => {
    if (derived) setDerived(null);
  }, [derived]);

  return derived;
}

export interface SortableContextProps {
  children?: React.ReactNode;
  id?: string;
  items: Array<string | number | { id: string | number }>;
  strategy?: (...args: any[]) => unknown;
  disabled?: boolean | { draggable: boolean; droppable: boolean };
}

export function SortableContext(props: SortableContextProps) {
  const {
    children,
    id,
    items,
    strategy = rectSortingStrategy,
    disabled = false,
  } = props;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers,
  } = useDndContext();

  const containerId = useUniqueId(SORTABLE_ID_PREFIX, id);
  const useDragOverlay = dragOverlay.rect !== null;
  const itemIds = React.useMemo(
    () =>
      items.map((item) =>
        typeof item === "object" && "id" in item ? item.id : item,
      ),
    [items],
  );
  const isDragging = active != null;
  const activeIndex = active ? itemIds.indexOf(active.id) : -1;
  const overIndex = over ? itemIds.indexOf(over.id) : -1;
  const previousItemIds = React.useRef(itemIds);
  const itemsHaveChanged = !arraysEqual(itemIds, previousItemIds.current);
  const disableTransforms =
    (overIndex !== -1 && activeIndex === -1) || itemsHaveChanged;
  const normalizedDisabled = normalizeDisabled(disabled);

  useIsomorphicLayoutEffect(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(itemIds);
    }
  }, [itemsHaveChanged, itemIds, isDragging, measureDroppableContainers]);

  React.useEffect(() => {
    previousItemIds.current = itemIds;
  }, [itemIds]);

  const contextValue = React.useMemo<SortableContextValue>(
    () => ({
      activeIndex,
      containerId,
      disabled: normalizedDisabled,
      disableTransforms,
      items: itemIds,
      overIndex,
      useDragOverlay,
      sortedRects: getSortedRects(itemIds, droppableRects),
      strategy,
    }),
    [
      activeIndex,
      containerId,
      normalizedDisabled.draggable,
      normalizedDisabled.droppable,
      disableTransforms,
      itemIds,
      overIndex,
      droppableRects,
      useDragOverlay,
      strategy,
    ],
  );

  return React.createElement(
    SortableContextStore.Provider,
    { value: contextValue },
    children,
  );
}

export interface UseSortableArguments {
  animateLayoutChanges?: (...args: any[]) => boolean;
  attributes?: Record<string, unknown>;
  disabled?: boolean | { draggable: boolean; droppable: boolean };
  data?: Record<string, unknown>;
  getNewIndex?: (...args: any[]) => number;
  id: string | number;
  strategy?: (...args: any[]) => unknown;
  resizeObserverConfig?: Record<string, unknown>;
  transition?: SortableTransition | null;
}

export function useSortable(args: UseSortableArguments) {
  const {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes,
    disabled,
    data,
    getNewIndex = defaultGetNewIndex,
    id,
    strategy,
    resizeObserverConfig,
    transition = defaultSortableTransition,
  } = args;
  const {
    items,
    containerId,
    activeIndex,
    disabled: contextDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: contextStrategy,
  } = React.useContext(SortableContextStore);

  const localDisabled = normalizeSortableDisabled(disabled, contextDisabled);
  const index = items.indexOf(id);
  const sortableData = React.useMemo(
    () => ({
      sortable: { containerId, index, items },
      ...data,
    }),
    [containerId, data, index, items],
  );
  const updateMeasurementsFor = React.useMemo(
    () => items.slice(items.indexOf(id)),
    [items, id],
  );

  const { rect, node, isOver, setNodeRef } = useDroppable({
    id,
    data: sortableData,
    disabled: localDisabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor,
      ...resizeObserverConfig,
    },
  });

  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: draggableAttributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform,
  } = useDraggable({
    id,
    data: sortableData,
    attributes: { ...defaultSortableAttributes, ...attributes },
    disabled: localDisabled.draggable,
  });

  const setCombinedNodeRef = useCombinedRefs(setNodeRef, setDraggableNodeRef);
  const isSorting = !!active;
  const shouldDisplaceTransform =
    isSorting &&
    !disableTransforms &&
    isValidIndex(activeIndex) &&
    isValidIndex(overIndex);
  const isDraggingWithoutOverlay = !useDragOverlay && isDragging;
  const finalTransform = shouldDisplaceTransform
    ? ((isDraggingWithoutOverlay && shouldDisplaceTransform
        ? transform
        : null) ??
      (strategy ?? contextStrategy)({
        rects: sortedRects,
        activeNodeRect,
        activeIndex,
        overIndex,
        index,
      }))
    : null;
  const newIndex =
    isValidIndex(activeIndex) && isValidIndex(overIndex)
      ? getNewIndex({ id, items, activeIndex, overIndex })
      : index;
  const activeId = active?.id;
  const previous = React.useRef({
    activeId,
    items,
    newIndex,
    containerId,
  });
  const itemsChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null,
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index,
    node,
    rect,
  });

  React.useEffect(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }
    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }
    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);

  React.useEffect(() => {
    if (activeId === previous.current.activeId) return;
    if (activeId && !previous.current.activeId) {
      previous.current.activeId = activeId;
      return;
    }
    const timeout = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeout);
  }, [activeId]);

  function computeTransition() {
    if (
      derivedTransform ||
      (itemsChanged && previous.current.newIndex === index)
    ) {
      return derivedTransformTransition;
    }
    if (
      !(
        (isDraggingWithoutOverlay && !isKeyboardEvent(activatorEvent)) ||
        !transition
      ) &&
      (isSorting || shouldAnimateLayoutChanges)
    ) {
      return cssTransform.Transition.toString({
        ...transition,
        property: SORTABLE_TRANSITION_PROPERTY,
      });
    }
  }

  return {
    active,
    activeIndex,
    attributes: draggableAttributes,
    data: sortableData,
    rect,
    index,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef: setCombinedNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef: setNodeRef,
    setDraggableNodeRef: setDraggableNodeRef,
    transform: derivedTransform ?? finalTransform,
    transition: computeTransition(),
  };
}
