// Restored from ref/webview/assets/projects-index-page-CJjk7dRY.js
// Projects index page restored from the current Codex webview chunk.

import { currentAppInitialSharedCompatSlotLowerOLowerN as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wOn } from "../../runtime/current-app-initial/current-app-initial-shared-runtime";

import { workspaceFunction0161 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIv } from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";

function buildSortedProjectRows({
  cloudRows = [],
  groups: groups,
  projectWritableRoots: projectWritableRoots,
  query: query,
  sortDirection: sortDirection,
  sortKey: sortKey,
  tasks: tasks,
}) {
  let projectIndexBinding229 = new Map(tasks.map((item) => [item.key, item])),
    projectIndexBinding230 = query.trim().toLocaleLowerCase();
  return [
    ...groups.map((item) =>
      buildCodexProjectIndexRow(
        item,
        projectWritableRoots,
        projectIndexBinding229,
      ),
    ),
    ...cloudRows,
  ]
    .filter((item) =>
      projectIndexBinding230.length === 0
        ? !0
        : `${item.name} ${item.sourceSearchText}`
            .toLocaleLowerCase()
            .includes(projectIndexBinding230),
    )
    .sort((projectIndexOperand35, projectIndexOperand36) => {
      let projectIndexBinding244 = compareProjectIndexRows(
        projectIndexOperand35,
        projectIndexOperand36,
        sortKey,
      );
      return sortDirection === `ascending`
        ? projectIndexBinding244
        : -projectIndexBinding244;
    });
}

function buildCodexProjectIndexRow(
  projectIndexOperand12,
  projectIndexOperand13,
  projectIndexOperand14,
) {
  let projectIndexBinding226 = projectIndexOperand12.threadKeys.flatMap(
      (item) => {
        let projectIndexBinding245 = projectIndexOperand14.get(item);
        return projectIndexBinding245 == null
          ? []
          : [projectIndexBinding245.at];
      },
    ),
    projectIndexBinding227 =
      projectIndexOperand12.projectUpdatedAt == null
        ? projectIndexBinding226
        : [...projectIndexBinding226, projectIndexOperand12.projectUpdatedAt],
    projectIndexBinding228 = buildFolderProjectSources(
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wOn(
        {
          projectId: projectIndexOperand12.projectId,
          projectWritableRoots: projectIndexOperand13,
          legacyRoot: projectIndexOperand12.path ?? null,
        },
      ),
    );
  return {
    group: projectIndexOperand12,
    id: `codex:${projectIndexOperand12.projectId}`,
    kind: `codex`,
    modifiedAt:
      projectIndexBinding227.length === 0
        ? null
        : Math.max(...projectIndexBinding227),
    name: projectIndexOperand12.label,
    projectId: projectIndexOperand12.projectId,
    recentThreadKeys: [...projectIndexOperand12.threadKeys].sort(
      (projectIndexOperand38, projectIndexOperand39) =>
        (projectIndexOperand14.get(projectIndexOperand39)?.at ?? 0) -
        (projectIndexOperand14.get(projectIndexOperand38)?.at ?? 0),
    ),
    sourceCount: projectIndexBinding228.length,
    sources: projectIndexBinding228,
    sourceSearchText: projectIndexBinding228
      .map((item) => item.path ?? item.label)
      .join(` `),
  };
}

function compareProjectIndexRows(
  projectIndexOperand15,
  projectIndexOperand16,
  projectIndexOperand17,
) {
  switch (projectIndexOperand17) {
    case `modified`:
      return (
        (projectIndexOperand15.modifiedAt ?? 0) -
          (projectIndexOperand16.modifiedAt ?? 0) ||
        compareProjectIndexRowsByName(
          projectIndexOperand15,
          projectIndexOperand16,
        )
      );
    case `name`:
      return compareProjectIndexRowsByName(
        projectIndexOperand15,
        projectIndexOperand16,
      );
    case `sources`:
      return (
        projectIndexOperand15.sourceCount - projectIndexOperand16.sourceCount ||
        (projectIndexOperand15.sources[0]?.label ?? ``).localeCompare(
          projectIndexOperand16.sources[0]?.label ?? ``,
          void 0,
          {
            sensitivity: `base`,
          },
        ) ||
        compareProjectIndexRowsByName(
          projectIndexOperand15,
          projectIndexOperand16,
        )
      );
  }
}

function compareProjectIndexRowsByName(
  projectIndexOperand24,
  projectIndexOperand25,
) {
  return (
    projectIndexOperand24.name.localeCompare(
      projectIndexOperand25.name,
      void 0,
      {
        sensitivity: `base`,
      },
    ) || projectIndexOperand24.id.localeCompare(projectIndexOperand25.id)
  );
}

function buildFolderProjectSources(projectIndexOperand34) {
  return projectIndexOperand34.map((item) => ({
    kind: `folder`,
    label:
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIv(
        item,
      ),
    path: item,
  }));
}

function isInteractiveRowTarget(projectIndexOperand26) {
  return (
    projectIndexOperand26 instanceof Element &&
    projectIndexOperand26.closest(
      `button,a,input,textarea,select,[role='button']`,
    ) != null
  );
}

export class ProjectsIndexData {
  static buildSortedProjectRows = buildSortedProjectRows;
  static buildCodexProjectIndexRow = buildCodexProjectIndexRow;
  static compareProjectIndexRows = compareProjectIndexRows;
  static compareProjectIndexRowsByName = compareProjectIndexRowsByName;
  static buildFolderProjectSources = buildFolderProjectSources;
  static isInteractiveRowTarget = isInteractiveRowTarget;
}
