// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Artifact summary helpers for the local conversation thread side panel.

const generatedImageFileNamePattern =
  /^ig_[a-f0-9]{32,}\.(?:avif|gif|jpeg|jpg|png|webp)$/i;

interface ArtifactWithType {
  type: string;
}

interface FileArtifact extends ArtifactWithType {
  type: "file";
  path: string;
}

interface GeneratedImageArtifact extends ArtifactWithType {
  type: "generated-image";
  path: string;
}

interface GoogleDriveArtifact extends ArtifactWithType {
  type: "google-drive";
  url: string;
}

interface AppgenAppArtifact extends ArtifactWithType {
  type: "appgen-app";
  projectId: string;
}

interface WebsiteArtifact extends ArtifactWithType {
  type: "website";
  target: string;
}

export type LocalConversationArtifactKeySource =
  | FileArtifact
  | GeneratedImageArtifact
  | GoogleDriveArtifact
  | AppgenAppArtifact
  | WebsiteArtifact;

function hasArtifactPath(
  artifact: ArtifactWithType,
): artifact is FileArtifact | GeneratedImageArtifact {
  return (
    (artifact.type === "file" || artifact.type === "generated-image") &&
    "path" in artifact &&
    typeof artifact.path === "string"
  );
}

export function isGeneratedImageArtifact(artifact: ArtifactWithType): boolean {
  return artifact.type === "generated-image";
}

export function getGeneratedImagePreviewArtifactPaths(
  artifact: ArtifactWithType,
  getBaseName: (path: string) => string,
): string[] {
  if (!hasArtifactPath(artifact)) {
    return [];
  }

  return artifact.type === "generated-image" ||
    generatedImageFileNamePattern.test(getBaseName(artifact.path))
    ? [artifact.path]
    : [];
}

export function getLocalConversationArtifactKey(
  artifact: LocalConversationArtifactKeySource,
): string {
  switch (artifact.type) {
    case "file":
    case "generated-image":
      return artifact.path;
    case "google-drive":
      return `google-drive:${artifact.url}`;
    case "appgen-app":
      return `appgen-app:${artifact.projectId}`;
    case "website":
      return `website:${artifact.target}`;
  }
}

export function formatArtifactTargetLabel(
  target: string,
  isUrlLike: (target: string) => boolean,
  getBaseName: (path: string) => string,
): string | null {
  if (!isUrlLike(target)) {
    let baseName = getBaseName(target);
    return baseName.length > 0 ? baseName : target.length > 0 ? target : null;
  }

  try {
    let url = new URL(target);
    return `${url.host}${url.pathname === "/" ? "" : url.pathname}${url.search}`;
  } catch {
    return target.length > 0 ? target : null;
  }
}
