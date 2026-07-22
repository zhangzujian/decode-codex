// Restored from ref/webview/assets/skills-page-zCIrhInI.js
// Skills settings page and current-ref export surface.

import React from "react";

import { Navigate } from "../../vendor/react-router";

import { worktreeNewThreadQueryCompatSlotUpperYLowerC as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYc } from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { currentAppInitialSharedMember0542 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEm } from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { PluginsPage as pluginsPageT } from "../../runtime/current-app-initial/plugins-page-current-runtime";

export function ManagePluginsPage() {
  const isRemoteHost =
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYc(
      {
        hostId:
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEm,
      },
    );
  return isRemoteHost
    ? React.createElement(pluginsPageT, {
        mode: "manage",
      })
    : React.createElement(Navigate, {
        replace: true,
        to: "/skills",
      });
}
