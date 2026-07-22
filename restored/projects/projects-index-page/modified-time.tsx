// Restored from ref/webview/assets/projects-index-page-CJjk7dRY.js
// Projects index page restored from the current Codex webview chunk.

import {
  worktreeNewThreadOrchestratorCompatSlotLowerELowerR as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsEr,
  worktreeNewThreadOrchestratorCompatSlotLowerTLowerR as AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsTr,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

import { currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy } from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { ProjectsIndexCells } from "./cells";

import { projectIndexBinding14 } from "./runtime";

function ProjectModifiedTime(projectIndexOperand11) {
  let { modifiedAt: modifiedAt, now: now } = projectIndexOperand11;
  if (modifiedAt == null) {
    let projectIndexBinding235;
    return projectIndexBinding14.createElement(
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `projectsIndex.modified.never`,
        defaultMessage: `-`,
        description: `Projects index modified value when there are no chats`,
      },
    );
  }
  let projectIndexBinding222 = new Date(
    ProjectsIndexCells.normalizeTimestampMs(modifiedAt),
  ).toISOString();
  let projectIndexBinding223 = projectIndexBinding14.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsEr,
    {
      dateString: projectIndexBinding222,
    },
  );
  return (
    <AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsTr
      nowMs={now}
    >
      {projectIndexBinding223}
    </AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsTr>
  );
}

export class ProjectsIndexModifiedTime {
  static ProjectModifiedTime = ProjectModifiedTime;
}
