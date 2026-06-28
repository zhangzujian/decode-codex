// Restored from ref/.vite/build/comment-preload.js
// Browser sidebar comment runtime document-context public surface.

export { BrowserSidebarDocumentContextResolver } from "./document-context-resolver";
export {
  createGoogleDocsDocumentContext,
  isGoogleWorkspaceDocumentUrl,
  parseGoogleDocsDocumentUrl,
  parseGoogleSheetsDocumentId,
} from "./google-workspace-urls";
export { normalizeBrowserSidebarText } from "./text";
export type {
  BrowserSidebarAnchorLike,
  BrowserSidebarDocumentContextInput,
  BrowserSidebarGoogleDocsDocumentContext,
  BrowserSidebarGoogleDocsDocumentLocation,
  BrowserSidebarViewportRect,
} from "./types";
