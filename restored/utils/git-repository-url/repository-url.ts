// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~settings-command-~jxrd5329-BVfs8R0W.js
// Parse Git remote URLs into repository owner and name coordinates.

export type RepositoryCoordinates = {
  owner: string;
  repoName: string;
};
export function parseGitRepositoryUrl(
  value: string,
): RepositoryCoordinates | null {
  try {
    let normalized = value.trim();
    const scpMatch = /^(?<user>[^@]+)@(?<host>[^:]+):(?<path>.+)$/.exec(
      normalized,
    );
    let host: string | null = null;
    if (scpMatch?.groups?.path && scpMatch.groups.host) {
      host = scpMatch.groups.host;
      normalized = `${host}/${scpMatch.groups.path}`;
    }
    if (host == null) {
      const protocolMatch = /^(?<protocol>[a-z]+):\/\/(?<rest>.+)$/i.exec(
        normalized,
      );
      if (protocolMatch?.groups?.rest) normalized = protocolMatch.groups.rest;
    } else {
      normalized = normalized.replace(/^[a-z]+:\/\//i, "");
    }
    normalized = normalized
      .replace(/^[^@]+@/, "")
      .replace(/[?#].*$/, "")
      .replace(/\.git$/i, "");
    const segments = normalized.split("/").filter(Boolean);
    if (host == null && segments.length > 0) host = segments[0] ?? null;
    const repositorySegments = host == null ? segments : segments.slice(1);
    if (repositorySegments.length < 2) return null;
    const repoName = repositorySegments.at(-1);
    const owner = repositorySegments.at(-2);
    return owner && repoName
      ? {
          owner,
          repoName,
        }
      : null;
  } catch {
    return null;
  }
}
export function parseGitHubRepositoryUrl(
  value: string,
): RepositoryCoordinates | null {
  try {
    const normalized = value.trim();
    if (!normalized) return null;
    const withoutQuery = normalized.replace(/[?#].*$/, "");
    const scpPath = /^(?:[^@]+)@github\.com:(?<path>.+)$/i.exec(withoutQuery)
      ?.groups?.path;
    let segments: string[];
    if (scpPath) {
      segments = scpPath.split("/").filter(Boolean);
    } else {
      const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(withoutQuery);
      if (!hasProtocol && !/^github\.com\//i.test(withoutQuery)) return null;
      const url = new URL(
        hasProtocol ? withoutQuery : `https://${withoutQuery}`,
      );
      if (url.hostname.toLowerCase() !== "github.com") return null;
      segments = url.pathname.split("/").filter(Boolean);
    }
    return segments.length === 2
      ? parseGitRepositoryUrl(withoutQuery.replace(/\/+$/, ""))
      : null;
  } catch {
    return null;
  }
}
export function initGitRepositoryUrlParserChunk(): void {}
