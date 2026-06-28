// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Utilities for review comments: extracting plain text from a comment's content
// blocks, and tallying comments per workspace file path.

// Provisional facade import: `pathsMatch` (orig `Wa`, alias `Rv`) compares a
// comment's stored path against a workspace file path, accounting for the
// workspace root.
import { Wa as pathsMatch } from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";

interface CommentContentBlock {
  content_type: string;
  text?: string;
}

interface CommentWithContent {
  content: CommentContentBlock[];
}

export function getCommentText(comment: CommentWithContent): string {
  return comment.content
    .flatMap((block) =>
      block.content_type === "text" ? [block.text ?? ""] : [],
    )
    .join("\n\n")
    .trim();
}

interface CommentWithPosition {
  position: { path: string };
}

export interface CountCommentsByFilePathParams {
  comments: CommentWithPosition[];
  filePaths: string[];
  workspaceRoot?: string | null;
}

export function countCommentsByFilePath({
  comments,
  filePaths,
  workspaceRoot,
}: CountCommentsByFilePathParams): Map<string, number> {
  const counts = new Map<string, number>();
  for (const comment of comments) {
    const matchedPath = filePaths.find((filePath) =>
      pathsMatch(comment.position.path, filePath, workspaceRoot ?? undefined),
    );
    if (matchedPath != null) {
      counts.set(matchedPath, (counts.get(matchedPath) ?? 0) + 1);
    }
  }
  return counts;
}
