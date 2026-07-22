// Restored from ref/webview/assets/home-ambient-suggestions-content-QPiHWv2t.js
// Home ambient suggestions content restored from the current Codex webview chunk.

import React from "react";

import {
  worktreeNewThreadQueryCompatSlotUpperKLowerU as AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKu,
  worktreeNewThreadQueryCompatSlotLowerBLowerL as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBl,
  worktreeNewThreadQueryCompatSlotLowerKLowerC as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKc,
  worktreeNewThreadQueryCompatSlotLowerQLowerU as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwQu,
  worktreeNewThreadQueryCompatSlotLowerVLowerL as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVl,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  schemaFunction0521 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dDc,
  currentAppInitialSharedFunction0895 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  appMainCurrentCompatSlotUpperCLowerP as appInitialAppMainOnboardingPageCp,
  initSidebarTaskRowRuntimeChunk as appInitialAppMainOnboardingPagePf,
} from "../../../vendor/app-main-current-runtime/index";

import { CONNECT_APPS_ROW_MESSAGE as onboardingPluginSuggestionsR } from "../../../onboarding/onboarding-plugin-suggestions/index";

import { AppgenPlugIcon as appInitialAppMainWorktreeInitV2PageAppgenPublicationTermsRouteRemoteConversatiCldi24d6T } from "../../../icons/appgen-plug-icon";
import type {
  AmbientSuggestionAnalyticsSource,
  AppendSkillMentionOptions,
  ConnectAppsLeadingCardOptions,
  FindInstallablePluginOptions,
  InstallAmbientSuggestionPluginOptions,
  InstallablePlugin,
  StartAmbientSuggestionConversationOptions,
} from "./types";

export function createConnectAppsLeadingCard({
  dismissAction: dismissAction,
  label: label,
  navigate: navigate,
}: ConnectAppsLeadingCardOptions) {
  return {
    dismissAction: dismissAction,
    icon: React.createElement(
      appInitialAppMainWorktreeInitV2PageAppgenPublicationTermsRouteRemoteConversatiCldi24d6T,
      {
        className: `icon-xs shrink-0`,
      },
    ),
    label:
      label ??
      React.createElement(
        appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          ...onboardingPluginSuggestionsR,
        },
      ),
    onClick: () => {
      navigate(`/skills`);
    },
  };
}

export async function findInstallablePluginByName({
  pluginName: pluginName,
  plugins: plugins,
  refetchPlugins: refetchPlugins,
}: FindInstallablePluginOptions) {
  return pluginName == null
    ? null
    : (findMatchingInstallablePlugin(plugins, pluginName) ??
        findMatchingInstallablePlugin(
          (await refetchPlugins()).availablePlugins,
          pluginName,
        ));
}

export function findMatchingInstallablePlugin(
  plugins: InstallablePlugin[],
  normalizedPluginName: string,
) {
  let homeAmbientBinding244 = plugins.filter(
    (item) =>
      !(item.plugin.installed && item.plugin.enabled) &&
      [
        item.plugin.id,
        item.plugin.name,
        item.displayName,
        item.marketplaceDisplayName,
      ].some((_item) => {
        let homeAmbientBinding254 = appInitialAppMainOnboardingPagePf(
          _item ?? ``,
        );
        return (
          homeAmbientBinding254 === normalizedPluginName ||
          homeAmbientBinding254.startsWith(normalizedPluginName + `-`)
        );
      }),
  );
  return (
    homeAmbientBinding244.find((item) =>
      appInitialAppMainOnboardingPagePf(item.marketplaceName).startsWith(
        `openai`,
      ),
    ) ??
    homeAmbientBinding244[0] ??
    null
  );
}

export async function installAmbientSuggestionPlugin({
  forceReloadPlugins: forceReloadPlugins,
  hostId: hostId,
  invalidateSkills: invalidateSkills,
  plugin: plugin,
}: InstallAmbientSuggestionPluginOptions) {
  if (plugin == null) return null;
  await appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
    `install-plugin`,
    {
      hostId: hostId,
      ...appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKc(
        plugin,
      ),
    },
  );
  let [, homeAmbientBinding246] = await Promise.all([
    forceReloadPlugins(),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
      `list-skills-for-host`,
      {
        forceReload: !0,
        hostId: hostId,
      },
    ),
  ]);
  return (invalidateSkills(), homeAmbientBinding246);
}

export async function appendSkillMentionToPrompt({
  hostId: hostId,
  prompt: prompt,
  skillName: skillName,
  skillsResponse: skillsResponse,
}: AppendSkillMentionOptions) {
  if (skillName == null) return prompt;
  let homeAmbientBinding251 =
    AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKu(
      skillsResponse ??
        (await appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
          `list-skills-for-host`,
          {
            forceReload: !0,
            hostId: hostId,
          },
        )),
      skillName,
    );
  return homeAmbientBinding251 == null
    ? prompt
    : `${prompt} ${appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwQu(
        {
          name: skillName,
          path: homeAmbientBinding251.path,
        },
      )}`;
}

export async function startAmbientSuggestionConversation({
  agentMode: agentMode,
  collaborationMode: collaborationMode,
  hostId: hostId,
  onLocalConversationCreated: onLocalConversationCreated,
  permissionProfileId: permissionProfileId,
  projectRoot: projectRoot,
  serviceTier: serviceTier,
  shouldSendPermissionOverrides: shouldSendPermissionOverrides,
  prompt: prompt,
}: StartAmbientSuggestionConversationOptions) {
  let homeAmbientBinding202 = [projectRoot],
    homeAmbientBinding203 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBl(
        homeAmbientBinding202,
      ),
    homeAmbientBinding204 = [
      {
        type: `text`,
        text: prompt,
        text_elements: [],
      },
    ],
    homeAmbientBinding205 =
      await appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVl(
        homeAmbientBinding202,
        {
          prompt: prompt,
        },
      ),
    homeAmbientBinding206 = homeAmbientBinding205.cwd ?? projectRoot;
  if (
    homeAmbientBinding203 &&
    homeAmbientBinding205.projectlessOutputDirectory == null
  )
    throw Error(`No projectless output directory found`);
  let { config: config } =
    await appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
      `read-config-for-host`,
      {
        hostId: hostId,
        includeLayers: !1,
        cwd: homeAmbientBinding206,
      },
    );
  await onLocalConversationCreated(
    await appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
      `start-conversation`,
      {
        hostId: hostId,
        ...appInitialAppMainOnboardingPageCp({
          input: homeAmbientBinding204,
          workspaceRoots: homeAmbientBinding205.workspaceRoots,
          cwd: homeAmbientBinding206,
          fileAttachments: [],
          addedFiles: [],
          agentMode: agentMode,
          permissionProfileId: permissionProfileId,
          shouldSendPermissionOverrides: shouldSendPermissionOverrides,
          model: null,
          serviceTier: serviceTier,
          reasoningEffort: null,
          collaborationMode: collaborationMode,
          config:
            appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dDc(
              config,
            ),
          ...(homeAmbientBinding203
            ? {
                workspaceKind: `projectless`,
                projectlessOutputDirectory:
                  homeAmbientBinding205.projectlessOutputDirectory,
              }
            : {
                workspaceKind: `project`,
              }),
        }),
      },
    ),
  );
}

export function getAmbientSuggestionAnalyticsType(
  suggestion: AmbientSuggestionAnalyticsSource,
): string {
  return suggestion.analyticsType ?? suggestion.source;
}
