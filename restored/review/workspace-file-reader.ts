// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds a reader that loads workspace file contents for a host/path through the
// host bridge, normalising read failures into a single user-facing error.

// Provisional facade import: `hostBridge` (orig `Un`, alias `Ab`) is the host
// request client exposing `workspaceFiles.read`.
import { Un as hostBridge } from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";

export interface WorkspaceFileReaderParams {
  hostId: string;
  path: string;
}

export type WorkspaceFileReader = (representation: unknown) => Promise<unknown>;

export function createWorkspaceFileReader({
  hostId,
  path,
}: WorkspaceFileReaderParams): WorkspaceFileReader {
  return async (representation) => {
    try {
      return await hostBridge.workspaceFiles.read({
        hostId,
        path,
        representation,
      });
    } catch {
      throw new Error("File could not be read.");
    }
  };
}
