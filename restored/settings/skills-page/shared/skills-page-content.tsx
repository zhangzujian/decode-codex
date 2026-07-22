// Restored from ref/webview/assets/skills-page-zCIrhInI.js
// Skills settings page and current-ref export surface.

import React from "react";

import {
  currentAppInitialSharedCompatSlotUpperE as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
  currentAppInitialSharedCompatSlotUpperJLowerS as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wJs,
  currentAppInitialSharedCompatSlotUpperKLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo,
  currentAppInitialSharedCompatSlotUpperYLowerS as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wYs,
  currentAppInitialSharedCompatSlotLowerQLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo,
} from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadOrchestratorCompatSlotUpperSLowerA as AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsSa,
  worktreeNewThreadOrchestratorCompatSlotUnderscoreLowerO as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsO,
  worktreeNewThreadOrchestratorCompatSlotLowerGLowerO as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsGo,
} from "../../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

import {
  worktreeNewThreadQueryCompatSlotUpperJLowerU as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJu,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
  worktreeNewThreadQueryCompatSlotUpperZLowerU as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwZu,
  worktreeNewThreadQueryCompatSlotLowerDLowerP as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDp,
  worktreeNewThreadQueryCompatSlotLowerELowerF as AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEf,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  imagePickerSchemaCapabilities as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl,
  currentAppInitialSharedMember0093 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEp,
  currentAppInitialSharedFunction0375 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy,
  currentAppInitialSharedMember0542 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEm,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { pullRequestNewThreadCompatSlotLowerDLowerT as appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkDt } from "../../../runtime/current-app-initial/pull-request-new-thread-runtime";

import {
  appMainCurrentCompatSlotUpperFLowerU as AppInitialAppMainOnboardingPageFu,
  appMainCurrentCompatSlotUpperPLowerM as appInitialAppMainOnboardingPagePm,
} from "../../../vendor/app-main-current-runtime/index";

import { appgenLibraryHotDjo67r4nCompatSlotLowerILowerR as appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nIr } from "../../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";

import { AppgenProjectHeader as appInitialAppMainAppgenPageRemoteConversationPageProjectsIndexPageAppgenLibrarI4jkvfhyT } from "../../../appgen/project-header";

import { PageSearchInput as pageSearchInputT } from "../../../ui/page-search-input";

import { useElementInView as useElementInViewN } from "../../../utils/use-element-in-view";

import {
  pluginDetailPageB,
  pluginDetailPageL,
  pluginDetailPageR,
  _pluginDetailPageZ as pluginDetailPageZ,
} from "../../../runtime/current-app-initial/plugin-detail-page-current-runtime";

import {
  pluginsPageA,
  pluginsPageC,
  pluginsPageO,
} from "../../../runtime/current-app-initial/plugins-page-current-runtime";

import { SettingsHostDropdown as settingsHostDropdownT } from "../../settings-host-dropdown";

import { RecommendedSkillsList } from "./recommended-skills-list";

import { getRemoteConnectionHostId } from "./get-remote-connection-host-id";

import { hideHeaderDividerEffect } from "./hide-header-divider-effect";

import { InstalledSkillsList } from "./installed-skills-list";

import { renderLearnMoreLink } from "./render-learn-more-link";

import { SkillsSection } from "./skills-section";

export function SkillsPageContent() {
  let appScope =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    intl =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    { data } =
      AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEf(),
    startSkillCreatorConversation =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nIr(),
    remoteConnections =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkDt,
      ),
    availableHostIds =
      AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsSa(
        remoteConnections,
      ),
    remoteConnectionHostIds = remoteConnections?.map(getRemoteConnectionHostId);
  let hostIdsForDropdown = remoteConnectionHostIds,
    [selectedHostId, setSelectedHostId] = React.useState(
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEm,
    ),
    resolvedHostId = AppInitialAppMainOnboardingPageFu(
      selectedHostId,
      availableHostIds,
    );
  let hostId = resolvedHostId,
    [scrollContainer, setScrollContainer] = React.useState(null),
    [headingTarget, setHeadingTarget] = React.useState(null),
    headingVisibilityTargets = {
      container: scrollContainer,
      target: headingTarget,
    };
  let isHeadingInToolbar = useElementInViewN(headingVisibilityTargets),
    [searchQuery, setSearchQuery] = React.useState(""),
    [hasPendingSkillRefresh, setHasPendingSkillRefresh] = React.useState(false),
    hasOpenedSkillCreator =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wJs(
        pluginsPageA,
      ),
    setHasOpenedSkillCreator =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wYs(
        pluginsPageA,
      ),
    {
      forceReloadSkills,
      installedSkillMatchKeys,
      isFetching,
      isLoading,
      markSkillsUpdated,
      standaloneInstalledSkills,
      workspaceRoots,
    } = pluginDetailPageR(hostId),
    {
      canInstallRecommendedSkills,
      defaultRecommendedRepoRoot,
      skillCreatorPath,
    } = pluginDetailPageB(hostId),
    {
      errorMessage,
      isLoading: _isLoading,
      refresh,
      repoRoot,
      skills,
    } = pluginDetailPageZ(defaultRecommendedRepoRoot, hostId),
    handleRecommendedSkillInstalled = () => {
      setHasPendingSkillRefresh(true);
    };
  let installRecommendedSkillOptions = {
    forceReloadSkills,
    hostId: hostId,
    onInstalled: handleRecommendedSkillInstalled,
  };
  let { installRecommendedSkill, installingSkillId } = pluginDetailPageL(
      installRecommendedSkillOptions,
    ),
    repoScopeFallbackLabel =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsGo(
        {
          scope: "repo",
          intl: intl,
        },
      );
  let repoFallbackLabel = repoScopeFallbackLabel,
    adminLabel = data?.name ?? undefined,
    adminScopeFallbackLabel =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsGo(
        {
          scope: "admin",
          intl: intl,
          adminLabel: adminLabel,
        },
      );
  let adminFallbackLabel = adminScopeFallbackLabel,
    resolveScopeBadgeLabel = (scopeDescriptor) => {
      let { scope, skillPath } = scopeDescriptor;
      return appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsGo(
        {
          scope,
          intl: intl,
          repoLabel:
            appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsO(
              {
                skillPath,
                roots: workspaceRoots,
                fallbackLabel: repoFallbackLabel,
              },
            ),
          adminLabel: adminFallbackLabel,
        },
      );
    };
  let getScopeBadgeLabel = resolveScopeBadgeLabel,
    filteredInstalledSkills;
  {
    let normalizedInstalledSearchQuery = searchQuery.trim().toLowerCase();
    filteredInstalledSkills = standaloneInstalledSkills.filter((item) => {
      let { skill } = item;
      if (normalizedInstalledSearchQuery.length === 0) return true;
      let skillSearchText =
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwZu(
            skill,
          ).toLowerCase(),
        skillDisplayName =
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJu(
            skill,
          ).toLowerCase();
      return (
        skill.name.toLowerCase().includes(normalizedInstalledSearchQuery) ||
        skillDisplayName.includes(normalizedInstalledSearchQuery) ||
        skillSearchText.includes(normalizedInstalledSearchQuery)
      );
    });
  }
  let installedSkillsForDisplay = filteredInstalledSkills,
    refreshSkills = async () => {
      markSkillsUpdated();
      await refresh();
      setHasPendingSkillRefresh(false);
    };
  let refreshSkillsNow = refreshSkills,
    hideHeaderDividerDeps;
  hideHeaderDividerDeps = [];
  React.useEffect(hideHeaderDividerEffect, hideHeaderDividerDeps);
  let toolbarTitle = isHeadingInToolbar
    ? null
    : React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: "skills.page.heading",
          defaultMessage: "Skills",
          description: "Header title for the skills page",
        },
      );
  let hostDropdown =
    availableHostIds != null &&
    availableHostIds.length > 0 &&
    hostIdsForDropdown != null
      ? React.createElement(settingsHostDropdownT, {
          connectedRemoteConnections: availableHostIds,
          onSelectHost: setSelectedHostId,
          remoteConnectionHostIds: hostIdsForDropdown,
          selectedHostId: hostId,
        })
      : null;
  let refreshButtonColor = hasPendingSkillRefresh ? "secondary" : "ghost",
    handleRefreshSkillsClick = () => {
      refreshSkillsNow();
    };
  let isRefreshButtonDisabled = isLoading || isFetching,
    refreshIcon = React.createElement(appInitialAppMainOnboardingPagePm, {
      className: "icon-xs",
    });
  let refreshButtonLabel = (
    <span className="hidden lg:inline">
      {hasPendingSkillRefresh
        ? React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: "skills.page.refreshSkillsToUseNew",
              defaultMessage: "Refresh to use new skill(s)",
              description:
                "Button label shown when newly installed skills require a refresh before they can be used in the composer",
            },
          )
        : React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: "skills.page.refreshSkills",
              defaultMessage: "Refresh",
              description: "Button label for reloading skills list",
            },
          )}
    </span>
  );
  let refreshButton = React.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
    {
      color: refreshButtonColor,
      size: "toolbar",
      onClick: handleRefreshSkillsClick,
      disabled: isRefreshButtonDisabled,
      children: [refreshIcon, refreshButtonLabel],
    },
  );
  let searchLabel = intl.formatMessage({
    id: "skills.page.search.label",
    defaultMessage: "Search skills",
    description: "Label for the skills page search input",
  });
  let searchPlaceholder = intl.formatMessage({
    id: "skills.page.search",
    defaultMessage: "Search skills",
    description: "Placeholder for the skills page search input",
  });
  let searchField = (
    <div className="hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none">
      {React.createElement(pageSearchInputT, {
        id: "skills-search",
        label: searchLabel,
        placeholder: searchPlaceholder,
        searchQuery: searchQuery,
        onSearchQueryChange: setSearchQuery,
      })}
    </div>
  );
  let handleCreateSkillClick = () => {
    if (!skillCreatorPath) return;
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
      appScope,
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEp,
      {},
    );
    let createSkillPrompt = pluginsPageO({
      creatorPath: skillCreatorPath,
      isFirstOpen: !hasOpenedSkillCreator,
      kind: "skill",
    });
    hasOpenedSkillCreator || setHasOpenedSkillCreator(true);
    startSkillCreatorConversation({
      prefillPrompt: createSkillPrompt,
      startInSidebar: true,
    });
  };
  let isCreateSkillDisabled = !skillCreatorPath,
    createSkillIcon,
    createSkillLabel;
  createSkillIcon = React.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDp,
    {
      className: "icon-xs",
    },
  );
  createSkillLabel = React.createElement(
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
    {
      id: "skills.page.createSkill",
      defaultMessage: "New skill",
      description: "Button label for creating a new skill",
    },
  );
  let createSkillButton = React.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
    {
      color: "primary",
      size: "toolbar",
      onClick: handleCreateSkillClick,
      disabled: isCreateSkillDisabled,
      children: [createSkillIcon, createSkillLabel],
    },
  );
  let pageToolbarControls = (
    <div className="flex flex-nowrap items-center gap-1.5">
      {hostDropdown}
      {refreshButton}
      {searchField}
      {createSkillButton}
    </div>
  );
  let pageHeader = React.createElement(
    appInitialAppMainAppgenPageRemoteConversationPageProjectsIndexPageAppgenLibrarI4jkvfhyT,
    {
      start: toolbarTitle,
      trailing: pageToolbarControls,
    },
  );
  let setScrollContainerRef = (node) => {
    setScrollContainer(node);
  };
  let setHeadingTargetRef = (node) => {
    setHeadingTarget(node);
  };
  let pageHeading = (
    <div className="heading-xl font-normal text-token-foreground">
      {React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: "skills.page.heading",
          defaultMessage: "Skills",
          description: "Header title for the skills page",
        },
      )}
    </div>
  );
  let pageHero = (
    <div className="flex items-end justify-between gap-4">
      <div className="flex flex-col gap-1" ref={setHeadingTargetRef}>
        {pageHeading}
        <div className="text-lg font-normal text-token-description-foreground">
          {React.createElement(
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: "skills.page.subheading",
              defaultMessage: "Give Codex superpowers. <link>Learn more</link>",
              description: "Subheading shown above the skills sections",
              values: {
                link: renderLearnMoreLink,
              },
            },
          )}
        </div>
      </div>
    </div>
  );
  let installedSectionTitle = React.createElement(
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
    {
      id: "skills.section.installed",
      defaultMessage: "Installed",
      description: "Heading for the installed skills section",
    },
  );
  let installedSection = React.createElement(SkillsSection, {
    title: installedSectionTitle,
    children: React.createElement(InstalledSkillsList, {
      hostId: hostId,
      isLoading,
      uniqueSkillCount: standaloneInstalledSkills.length,
      filteredSkills: installedSkillsForDisplay,
      getScopeBadgeLabel: getScopeBadgeLabel,
      roots: workspaceRoots,
      onSkillsUpdated: markSkillsUpdated,
    }),
  });
  let recommendedSectionTitle = React.createElement(
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
    {
      id: "skills.section.recommended",
      defaultMessage: "Recommended",
      description: "Heading for the recommended skills section",
    },
  );
  let recommendedSection = React.createElement(SkillsSection, {
    title: recommendedSectionTitle,
    children: React.createElement(RecommendedSkillsList, {
      hostId: hostId,
      isLoading: _isLoading,
      errorMessage,
      skills,
      searchQuery: searchQuery,
      canInstall: canInstallRecommendedSkills,
      repoRoot,
      onInstall: installRecommendedSkill,
      installedSkillMatchKeys,
      installingSkillId,
    }),
  });
  let scrollBody = (
    <div className="flex-1 overflow-y-auto p-panel" ref={setScrollContainerRef}>
      {React.createElement(pluginsPageC, {
        className:
          "mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8",
        children: [
          pageHero,
          <div className="flex min-h-0 w-full flex-1">
            <div className="flex min-h-0 flex-1 flex-col gap-9 pb-10">
              {installedSection}
              {recommendedSection}
            </div>
          </div>,
        ],
      })}
    </div>
  );
  return (
    <div className="mr-4 flex h-full flex-col text-base">
      {pageHeader}
      {scrollBody}
    </div>
  );
}
