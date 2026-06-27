// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Registry for the appgen publication-terms/resource side-panel opener.
import { once } from "../../runtime/commonjs-interop";

export type PublicationTermsNavigationTarget =
  | "artifact"
  | "mcpCapabilityFileViewer"
  | "textFileEditor"
  | string;

export type PublicationTermsSidePanelOptions = {
  artifactNavigationTarget?: unknown;
  endLine?: number | null;
  hostId?: string;
  icon?: unknown;
  isPreview?: boolean;
  line?: number | null;
  title?: string | null;
};

export type PublicationTermsSidePanelHandler = (
  scope: unknown,
  path: string,
  options: PublicationTermsSidePanelOptions,
) => PublicationTermsNavigationTarget | null | undefined;

let publicationTermsSidePanelHandler: PublicationTermsSidePanelHandler | null =
  null;

export const initPublicationTermsHandlerRegistryChunk = once(() => {
  publicationTermsSidePanelHandler = null;
});

export function getPublicationTermsSidePanelHandler() {
  return publicationTermsSidePanelHandler;
}

export function registerPublicationTermsSidePanelHandler(
  handler: PublicationTermsSidePanelHandler,
): void {
  publicationTermsSidePanelHandler = handler;
}

export {
  initPublicationTermsHandlerRegistryChunk as A,
  registerPublicationTermsSidePanelHandler as j,
};
