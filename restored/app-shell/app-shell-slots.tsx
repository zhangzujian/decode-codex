// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Declarative slot components for the AppShell compound API. Each slot is a
// render-less component that registers its children (or config) into the shared
// app-shell store signals via layout effects, so panels/header regions can be
// described as JSX children of <AppShell.Root>. The root splits its children
// into the recognised panel slots and renders the underlying layout.
import type { ReactElement, ReactNode } from "react";
import { Children, Suspense, isValidElement, useLayoutEffect } from "react";
import { RightPanelTabBar } from "./right-panel-tab-bar";
import { BottomPanelTabBar } from "./bottom-panel-tab-bar";
import { AppShellLayout } from "./app-shell-layout";
import {
  appShellHeaderActionEntriesSignal,
  appShellHeaderContextMenuItemsSignal,
  appShellHeaderContextMenuSurfaceSignal,
  appShellHeaderEndEntriesSignal,
  appShellHeaderStartEntriesSignal,
  appStoreScope,
  bottomPanelAfterListSignal,
  bottomPanelAfterListStickySignal,
  bottomPanelEmptyStateSignal,
  bottomPanelFallbackContentSignal,
  getDefaultRightPanelStorageKey,
  mainContentLayoutSignal,
  rightPanelAfterListSignal,
  rightPanelAfterListStickySignal,
  rightPanelBeforeListSignal,
  rightPanelEmptyStateSignal,
  rightPanelFallbackContentSignal,
  rightPanelWidthConfigSignal,
  Spinner,
  useAppScope,
} from "../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "./app-shell-tab-controller/types";

type HeaderActionPosition = "start" | "center" | "end";

interface HeaderEntrySignalGroup {
  byId: unknown;
  ids$: unknown;
}

const headerActionSlotsByPosition: Record<
  HeaderActionPosition,
  HeaderEntrySignalGroup
> = {
  start: appShellHeaderStartEntriesSignal as HeaderEntrySignalGroup,
  center: appShellHeaderActionEntriesSignal as HeaderEntrySignalGroup,
  end: appShellHeaderEndEntriesSignal as HeaderEntrySignalGroup,
};

function useRegisterSlotSignal(
  store: AppShellStore,
  signal: unknown,
  value: ReactNode,
): void {
  useLayoutEffect(() => {
    store.set(signal, value);
  }, [value, store, signal]);
  useLayoutEffect(
    () => () => {
      store.set(signal, null);
    },
    [store, signal],
  );
}

export interface AppShellSlotProps {
  children?: ReactNode;
}

export function AppShellLeftPanelSlot(_props: AppShellSlotProps): null {
  return null;
}

export function AppShellHeaderSlot({ children }: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    appShellHeaderContextMenuSurfaceSignal,
    children,
  );
  return null;
}

export interface AppShellHeaderActionProps {
  actionId: string;
  align?: "start" | "center" | "end";
  children?: ReactNode;
  order?: number;
  slotPosition?: HeaderActionPosition;
}

export function AppShellHeaderActionSlot({
  actionId,
  align = "start",
  children,
  order = 0,
  slotPosition = "center",
}: AppShellHeaderActionProps): null {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const slot = headerActionSlotsByPosition[slotPosition];
  useLayoutEffect(() => {
    store.set(slot.byId, actionId, { align, node: children, order });
  }, [actionId, align, children, order, slot, store]);
  useLayoutEffect(() => {
    store.set(slot.ids$, (ids: string[]) =>
      ids.includes(actionId) ? ids : [...ids, actionId],
    );
    return () => {
      store.set(slot.ids$, (ids: string[]) =>
        ids.filter((id) => id !== actionId),
      );
      store.set(slot.byId, actionId, null);
    };
  }, [actionId, slot, store]);
  return null;
}

export interface AppShellHeaderContextMenuItem {
  id: string;
  [key: string]: unknown;
}

export function AppShellHeaderContextMenuItemSlot(
  item: AppShellHeaderContextMenuItem,
): null {
  const store = useAppScope(appStoreScope) as AppShellStore;
  useLayoutEffect(() => {
    store.set(appShellHeaderContextMenuItemsSignal.byId, item.id, item);
  }, [item, store]);
  useLayoutEffect(() => {
    store.set(appShellHeaderContextMenuItemsSignal.ids$, (ids: string[]) =>
      ids.includes(item.id) ? ids : [...ids, item.id],
    );
    return () => {
      store.set(appShellHeaderContextMenuItemsSignal.ids$, (ids: string[]) =>
        ids.filter((id) => id !== item.id),
      );
      store.set(appShellHeaderContextMenuItemsSignal.byId, item.id, null);
    };
  }, [item.id, store]);
  return null;
}

export function AppShellRightPanelSlot(_props: AppShellSlotProps): null {
  return null;
}

export function AppShellRightPanelTabsSlot() {
  return <RightPanelTabBar />;
}

export function AppShellRightPanelTabsEmptyStateSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelEmptyStateSignal,
    children,
  );
  return null;
}

export interface AppShellRightPanelOutletProps {
  children?: ReactNode;
  defaultWidth?: number;
  widthStorageKey?: string;
}

export function AppShellRightPanelOutletSlot({
  children,
  defaultWidth = 600,
  widthStorageKey,
}: AppShellRightPanelOutletProps): null {
  const store = useAppScope(appStoreScope) as AppShellStore & {
    value: { routeTemplate: string };
  };
  const storageKey =
    widthStorageKey ??
    getDefaultRightPanelStorageKey(store.value.routeTemplate);
  useRegisterSlotSignal(store, rightPanelFallbackContentSignal, children);
  useLayoutEffect(() => {
    if (defaultWidth === 600 && widthStorageKey == null) return;
    store.set(rightPanelWidthConfigSignal, { defaultWidth, storageKey });
    return () => {
      store.set(rightPanelWidthConfigSignal, null);
    };
  }, [defaultWidth, storageKey, store, widthStorageKey]);
  return null;
}

export function AppShellRightPanelTabListAfterSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelAfterListSignal,
    children,
  );
  return null;
}

export function AppShellRightPanelTabListBeforeSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelBeforeListSignal,
    children,
  );
  return null;
}

export function AppShellRightPanelTabListAfterStickySlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    rightPanelAfterListStickySignal,
    children,
  );
  return null;
}

export function AppShellBottomPanelSlot(_props: AppShellSlotProps): null {
  return null;
}

export function AppShellBottomPanelTabsSlot() {
  return <BottomPanelTabBar />;
}

export function AppShellBottomPanelTabsEmptyStateSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelEmptyStateSignal,
    children,
  );
  return null;
}

export function AppShellBottomPanelTabListAfterSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelAfterListSignal,
    children,
  );
  return null;
}

export function AppShellBottomPanelTabListAfterStickySlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelAfterListStickySignal,
    children,
  );
  return null;
}

export function AppShellBottomPanelOutletSlot({
  children,
}: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    bottomPanelFallbackContentSignal,
    children,
  );
  return null;
}

export function AppShellContent({ children }: AppShellSlotProps) {
  const fallback = (
    <div className="absolute inset-0 flex items-center justify-center">
      <Spinner />
    </div>
  );
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export interface AppShellMainContentLayoutProps {
  layout: string;
}

export function AppShellMainContentLayout({
  layout,
}: AppShellMainContentLayoutProps): null {
  const store = useAppScope(appStoreScope) as AppShellStore;
  useLayoutEffect(() => {
    store.set(mainContentLayoutSignal, layout);
    return () => {
      store.set(mainContentLayoutSignal, "default");
    };
  }, [layout, store]);
  return null;
}

function isLeftPanelSlotElement(node: ReactNode): node is ReactElement {
  return isValidElement(node) && node.type === AppShellLeftPanelSlot;
}

function isRightPanelSlotElement(node: ReactNode): node is ReactElement {
  return isValidElement(node) && node.type === AppShellRightPanelSlot;
}

function isBottomPanelSlotElement(node: ReactNode): node is ReactElement {
  return isValidElement(node) && node.type === AppShellBottomPanelSlot;
}

interface SplitAppShellChildren {
  bottomPanelSlot?: AppShellSlotProps;
  contentChildren: ReactNode[];
  leftPanelSlot?: AppShellSlotProps;
  rightPanelSlot?: AppShellSlotProps;
}

function splitAppShellChildren(children: ReactNode): SplitAppShellChildren {
  const contentChildren: ReactNode[] = [];
  let bottomPanelSlot: AppShellSlotProps | undefined;
  let leftPanelSlot: AppShellSlotProps | undefined;
  let rightPanelSlot: AppShellSlotProps | undefined;
  Children.forEach(children, (child, index) => {
    if (isLeftPanelSlotElement(child)) {
      leftPanelSlot = child.props as AppShellSlotProps;
      return;
    }
    if (isRightPanelSlotElement(child)) {
      rightPanelSlot = child.props as AppShellSlotProps;
      return;
    }
    if (isBottomPanelSlotElement(child)) {
      bottomPanelSlot = child.props as AppShellSlotProps;
      return;
    }
    if (isValidElement(child)) {
      contentChildren.push({ ...child, key: child.key ?? `${index}` });
    } else {
      contentChildren.push(child);
    }
  });
  return { bottomPanelSlot, contentChildren, leftPanelSlot, rightPanelSlot };
}

export function AppShellRoot({ children }: AppShellSlotProps) {
  const { bottomPanelSlot, contentChildren, leftPanelSlot, rightPanelSlot } =
    splitAppShellChildren(children);
  return (
    <AppShellLayout
      bottomPanelSlot={bottomPanelSlot}
      leftPanelSlot={leftPanelSlot}
      rightPanelSlot={rightPanelSlot}
    >
      {contentChildren}
    </AppShellLayout>
  );
}
