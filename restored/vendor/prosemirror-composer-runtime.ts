// Restored from ref/webview/assets/use-composer-controller-Bo8TAx0p.js
// Thin Composer glue backed by the ProseMirror npm packages.
import React from "react";
import {
  DOMParser,
  DOMSerializer,
  Fragment,
  Mark,
  ReplaceError,
  Schema,
  Slice,
} from "prosemirror-model";
import {
  AllSelection,
  EditorState,
  NodeSelection,
  Plugin,
  PluginKey,
  Selection,
  TextSelection,
} from "prosemirror-state";
import { Mapping, dropPoint } from "prosemirror-transform";
export * from "prosemirror-model";
export * from "prosemirror-transform";
export * from "prosemirror-state";

export const useComposerControllerX = Schema;
export const useComposerControllerG = DOMParser;
export const useComposerControllerUnderscore = DOMSerializer;
export const useComposerControllerH = dropPoint;
export const useComposerControllerC = EditorState;
export const useComposerControllerB = ReplaceError;
export const useComposerControllerD = PluginKey;
export const useComposerControllerF = Selection;
export const useComposerControllerL = NodeSelection;
export const useComposerControllerM = Mapping;
export const useComposerControllerP = TextSelection;
export const useComposerControllerS = Slice;
export const useComposerControllerU = Plugin;
export const useComposerControllerV = Fragment;
export const useComposerControllerY = Mark;
export const _useComposerControllerS = AllSelection;
export const useComposerControllerA = "prosemirrorDispatchTransaction";

type TransactionEventPluginState = { eventTarget: EventTarget };
const transactionEventPluginKey = new PluginKey<TransactionEventPluginState>(
  "transactionEventPlugin",
);
type ComposerControllerSnapshot = { view: { state: EditorState } };
type ComposerControllerSelector<SelectedValue> = (
  controller: ComposerControllerSnapshot,
) => SelectedValue;

export function useComposerControllerI(
  view: ComposerControllerSnapshot["view"],
  listener: EventListener,
): () => void {
  const { eventTarget } = transactionEventPluginKey.getState(view.state)!;
  eventTarget.addEventListener(useComposerControllerA, listener);
  return () =>
    eventTarget.removeEventListener(useComposerControllerA, listener);
}

export function useComposerControllerO(eventTarget: EventTarget) {
  return new Plugin<TransactionEventPluginState>({
    key: transactionEventPluginKey,
    state: {
      init: () => ({ eventTarget }),
      apply: (_transaction, pluginState) => pluginState,
    },
  });
}

export const ComposerControllerContext = React.createContext<unknown>(null);
export const useComposerControllerT = () => {
  const controller = React.useContext(ComposerControllerContext);
  if (!controller)
    throw new Error(
      "useComposerController must be used within a ComposerControllerScope",
    );
  return controller;
};
export const useComposerControllerN = <SelectedValue>(
  controller: ComposerControllerSnapshot,
  selector: ComposerControllerSelector<SelectedValue>,
): SelectedValue =>
  React.useSyncExternalStore(
    (onStoreChange) => useComposerControllerI(controller.view, onStoreChange),
    () => selector(controller),
    () => selector(controller),
  );
