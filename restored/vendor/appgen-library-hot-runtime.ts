// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CFm41aDU.js
// Synced with ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CFm41aDU.js.
// Current-ref compatibility facade for the appgen-library hot-path aliases
// still consumed by restored app-shell/composer modules.
import {
  createContext,
  type ComponentType,
  type Context,
  type ReactNode,
} from "react";
import {
  n as initRawThreadComposerFooterChunk,
  t as RawThreadComposerFooter,
} from "../../ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CFm41aDU.js";
import { Cr as rawThreadComposerContext } from "./pull-request-thread-actions-runtime";

type ThreadComposerFooterComponent = ComponentType<{
  [propName: string]: unknown;
  children?: ReactNode;
}>;

export const appShellElementContext: Context<HTMLElement | null> =
  createContext<HTMLElement | null>(null);

export const threadComposerContext =
  rawThreadComposerContext as Context<boolean>;

export const ThreadComposerFooter =
  RawThreadComposerFooter as ThreadComposerFooterComponent;

export function initAppShellElementContextChunk(): void {}

export function initThreadComposerContextChunk(): void {}

export function initThreadComposerFooterChunk(): void {
  initRawThreadComposerFooterChunk();
}

export {
  threadComposerContext as $,
  initThreadComposerContextChunk as et,
  initAppShellElementContextChunk as it,
  initThreadComposerFooterChunk as n,
  appShellElementContext as rt,
  ThreadComposerFooter as t,
};
