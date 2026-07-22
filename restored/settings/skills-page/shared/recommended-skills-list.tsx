// Restored from ref/webview/assets/skills-page-zCIrhInI.js
// Skills settings page and current-ref export surface.

import React from "react";

import { currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotLowerBLowerU as appInitialAppMainOnboardingPageBu } from "../../../vendor/app-main-current-runtime/index";

import { pluginDetailPageJ } from "../../../runtime/current-app-initial/plugin-detail-page-current-runtime";

import {
  pluginsPageL,
  pluginsPageR,
} from "../../../runtime/current-app-initial/plugins-page-current-runtime";

type RecommendedSkill = {
  id: string;
  name: string;
  description?: string;
  shortDescription?: string | null;
  [key: string]: any;
};

export function RecommendedSkillsList(recommendedSkillsProps: {
  hostId: string;
  isLoading: boolean;
  errorMessage?: string | null;
  skills: RecommendedSkill[];
  searchQuery: string;
  canInstall: boolean;
  repoRoot?: string | null;
  onInstall: (...args: any[]) => unknown;
  installedSkillMatchKeys: unknown;
  installingSkillId?: string | null;
}) {
  let {
      hostId,
      isLoading,
      errorMessage,
      skills,
      searchQuery,
      canInstall,
      repoRoot,
      onInstall,
      installedSkillMatchKeys,
      installingSkillId,
    } = recommendedSkillsProps,
    RecommendedListContainer,
    recommendedRows,
    earlyReturnContent;
  earlyReturnContent = Symbol.for("react.early_return_sentinel");
  bb0: {
    let isSkillNotInstalled = (skill) =>
      !pluginDetailPageJ({
        installedSkillMatchKeys,
        skill: skill,
      });
    let installableSkills = skills.filter(isSkillNotInstalled),
      normalizedRecommendedSearchQuery = searchQuery.trim().toLowerCase(),
      filteredRecommendedSkills = installableSkills.filter((item) =>
        normalizedRecommendedSearchQuery.length === 0
          ? true
          : [item.name, item.description, item.shortDescription ?? ""]
              .join(" ")
              .toLowerCase()
              .includes(normalizedRecommendedSearchQuery),
      );
    if (isLoading) {
      let loadingState;
      loadingState = (
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
      earlyReturnContent = loadingState;
      break bb0;
    }
    if (errorMessage) {
      let errorTitle = React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: "skills.recommended.error",
          defaultMessage: "Unable to load recommended skills",
          description: "Error title when recommended skills fail to load",
        },
      );
      let errorState;
      errorState = (
        <div className="flex min-h-0 flex-1 items-center justify-center">
          {React.createElement(appInitialAppMainOnboardingPageBu, {
            title: errorTitle,
            description: errorMessage,
          })}
        </div>
      );
      earlyReturnContent = errorState;
      break bb0;
    }
    if (installableSkills.length === 0) {
      let emptyState;
      emptyState = (
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
      earlyReturnContent = emptyState;
      break bb0;
    }
    if (filteredRecommendedSkills.length === 0) {
      let filteredEmptyState;
      filteredEmptyState = (
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
      earlyReturnContent = filteredEmptyState;
      break bb0;
    }
    RecommendedListContainer = pluginsPageL;
    let renderRecommendedSkill;
    renderRecommendedSkill = (skill) =>
      React.createElement(pluginsPageR, {
        skill: skill,
        canInstall,
        hostId,
        isInstalled: pluginDetailPageJ({
          installedSkillMatchKeys,
          skill: skill,
        }),
        isInstalling: installingSkillId === skill.id,
        repoRoot,
        onInstall,
        key: skill.id,
      });
    recommendedRows = filteredRecommendedSkills.map(renderRecommendedSkill);
  }
  if (earlyReturnContent !== Symbol.for("react.early_return_sentinel"))
    return earlyReturnContent;
  return React.createElement(RecommendedListContainer, {
    children: recommendedRows,
  });
}
