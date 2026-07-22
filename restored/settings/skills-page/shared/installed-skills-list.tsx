// Restored from ref/webview/assets/skills-page-zCIrhInI.js
// Skills settings page and current-ref export surface.

import React from "react";

import { worktreeNewThreadQueryCompatSlotUpperJLowerU as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJu } from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotLowerBLowerU as appInitialAppMainOnboardingPageBu } from "../../../vendor/app-main-current-runtime/index";

import {
  pluginDetailPageSt,
  _pluginDetailPageV as pluginDetailPageV,
} from "../../../runtime/current-app-initial/plugin-detail-page-current-runtime";

import { pluginsPageL } from "../../../runtime/current-app-initial/plugins-page-current-runtime";

import { ScopeBadgeLabel } from "./scope-badge-label";

type InstalledSkillItem = {
  skill: {
    name: string;
    path: string;
    scope?: string;
    [key: string]: any;
  };
};

export function InstalledSkillsList(installedSkillsProps: {
  hostId: string;
  isLoading: boolean;
  uniqueSkillCount: number;
  filteredSkills: InstalledSkillItem[];
  getScopeBadgeLabel: (input: {
    scope: string;
    skillPath: string;
  }) => React.ReactNode;
  roots: unknown;
  onSkillsUpdated: (...args: any[]) => unknown;
}) {
  let {
    hostId,
    isLoading,
    uniqueSkillCount,
    filteredSkills,
    getScopeBadgeLabel,
    roots,
    onSkillsUpdated,
  } = installedSkillsProps;
  if (isLoading) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {React.createElement(appInitialAppMainOnboardingPageBu, {
          title: React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: "skills.page.loading",
              defaultMessage: "Loading skills...",
              description: "Loading label on the skills page",
            },
          ),
        })}
      </div>
    );
  }
  if (uniqueSkillCount === 0) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {React.createElement(appInitialAppMainOnboardingPageBu, {
          title: React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: "skills.page.empty",
              defaultMessage: "No skills found",
              description: "Empty state on the skills page",
            },
          ),
        })}
      </div>
    );
  }
  if (filteredSkills.length === 0) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {React.createElement(appInitialAppMainOnboardingPageBu, {
          title: React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: "skills.page.filteredEmpty",
              defaultMessage: "No skills match your filters",
              description: "Empty state when filters hide all skills",
            },
          ),
          description: React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: "skills.page.filteredEmptyDescription",
              defaultMessage: "Try adjusting your search or scope filters",
              description: "Description for filtered skills empty state",
            },
          ),
        })}
      </div>
    );
  }
  let installedRows;
  {
    let renderInstalledSkill;
    renderInstalledSkill = (installedSkillItem) => {
      let { skill } = installedSkillItem,
        scopeBadges =
          skill.scope === "repo"
            ? [
                React.createElement(ScopeBadgeLabel, {
                  label: getScopeBadgeLabel({
                    scope: "repo",
                    skillPath: skill.path,
                  }),
                  key: `${skill.path}-repo`,
                }),
              ]
            : [],
        installedSkillRepoRoot =
          skill.scope === "repo"
            ? pluginDetailPageSt({
                skillPath: skill.path,
                roots,
              })
            : null;
      return React.createElement(pluginDetailPageV, {
        skill,
        displayName:
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJu(
            skill,
          ),
        hostId,
        scopeBadges: scopeBadges,
        repoRoot: installedSkillRepoRoot,
        onSkillsUpdated,
        key: skill.path,
      });
    };
    installedRows = filteredSkills.map(renderInstalledSkill);
  }
  return React.createElement(pluginsPageL, {
    children: installedRows,
  });
}
