// Restored from ref/webview/assets/home-ambient-suggestions-content-QPiHWv2t.js
// Home ambient suggestions content restored from the current Codex webview chunk.

import React from "react";

import { once as rolldownRuntimeN } from "../../../runtime/commonjs-interop";

import {
  currentAppInitialSharedCompatSlotUpperD as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wD,
  currentAppInitialSharedCompatSlotUpperE as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
  currentAppInitialSharedCompatSlotUpperKLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo,
  currentAppInitialSharedCompatSlotUpperVLowerO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wVo,
  currentAppInitialSharedCompatSlotLowerGLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc,
  currentAppInitialSharedCompatSlotLowerLLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc,
} from "../../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadQueryCompatSlotUpperCLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwCs,
  worktreeNewThreadQueryCompatSlotUpperDLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDs,
  worktreeNewThreadQueryCompatSlotUpperSLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwSs,
  worktreeNewThreadQueryCompatSlotLowerGLowerL as _appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGl,
  worktreeNewThreadQueryCompatSlotLowerHLowerH as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwHh,
  worktreeNewThreadQueryCompatSlotLowerHLowerL as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwHl,
  worktreeNewThreadQueryCompatSlotLowerKLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKs,
  worktreeNewThreadQueryCompatSlotLowerMLowerH as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh,
  worktreeNewThreadQueryCompatSlotLowerOLowerP as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp,
  worktreeNewThreadQueryCompatSlotLowerSLowerP as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwSp,
  worktreeNewThreadQueryCompatSlotLowerWLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWs,
  worktreeNewThreadQueryCompatSlotLowerXLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwXs,
} from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  imagePickerSchemaCapabilities as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl,
  currentAppInitialSharedMember0166 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dJd,
  remoteControlRefreshSourceEnum as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dKp,
  remoteConnectionRuntime0298 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRl,
  currentAppInitialSharedMember0353 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dUl,
} from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  appMainCurrentCompatSlotUpperLLowerF as AppInitialAppMainOnboardingPageLf,
  initSidebarTaskRowRuntimeChunk as appInitialAppMainOnboardingPagePf,
} from "../../../vendor/app-main-current-runtime/index";

import { HomeAmbientRowsModule } from "../rows";
import type { AmbientSuggestionPluginTilesProps } from "./types";

export function AmbientSuggestionPluginTiles(
  homeAmbientOperand2: AmbientSuggestionPluginTilesProps,
) {
  let {
      composerMode: composerMode,
      suggestions: suggestions,
      leadingCard: leadingCard,
      appByAmbientSuggestionAppId: appByAmbientSuggestionAppId,
      disabled: disabled,
      dismissAction: dismissAction,
      hostId: hostId,
    } = homeAmbientOperand2,
    homeAmbientBinding141 = disabled === void 0 ? !1 : disabled,
    homeAmbientBinding142 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    { openPluginInstall: openPluginInstall } =
      _appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGl(),
    homeAmbientBinding143 = suggestions.length + (leadingCard == null ? 0 : 1),
    homeAmbientBinding144 =
      homeAmbientBinding143 >= 2 &&
      `[@container_(min-width:212px)]:grid-cols-2`,
    homeAmbientBinding145 =
      homeAmbientBinding143 === 3 &&
      `[@container_(min-width:324px)]:grid-cols-3`,
    homeAmbientBinding146 =
      homeAmbientBinding143 >= 4 &&
      `[@container_(min-width:436px)]:grid-cols-4`,
    homeAmbientBinding147 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        `peer/onboarding-plugin-tiles grid grid-cols-1 items-stretch gap-3`,
        homeAmbientBinding144,
        homeAmbientBinding145,
        homeAmbientBinding146,
      );
  let homeAmbientBinding148;
  {
    let homeAmbientBinding174;
    ((homeAmbientBinding174 = (homeAmbientOperand5, homeAmbientOperand6) => {
      let homeAmbientBinding176 =
        homeAmbientOperand5.homeAction.plugin.plugin.installed &&
        homeAmbientOperand5.homeAction.plugin.plugin.enabled;
      return React.createElement(
        `button`,
        {
          type: `button`,
          className:
            appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
              `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
              homeAmbientBinding176 || homeAmbientBinding141
                ? `cursor-default`
                : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
              homeAmbientBinding141 && !homeAmbientBinding176 && `opacity-70`,
              !homeAmbientBinding176 && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
            ),
          disabled: homeAmbientBinding141 || homeAmbientBinding176,
          onClick: () => {
            (appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
              homeAmbientBinding142,
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dJd,
              {
                promptId: homeAmbientOperand5.id,
                promptIndex: homeAmbientOperand6,
                promptType:
                  homeAmbientOperand5.analyticsType ??
                  homeAmbientOperand5.source,
                mode: composerMode,
              },
            ),
              appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
                homeAmbientBinding142,
                appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dUl,
                HomeAmbientRowsModule.getAmbientSuggestionTelemetry(
                  homeAmbientOperand5,
                ),
              ),
              openPluginInstall(hostId, homeAmbientOperand5.homeAction.plugin, {
                postInstallComposerPrefill: homeAmbientOperand5.prompt,
              }));
          },
          key: homeAmbientOperand5.id,
        },
        React.createElement(
          `span`,
          {
            className:
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
                `flex h-5 shrink-0 items-center`,
                homeAmbientBinding176 && `opacity-30`,
              ),
          },
          AmbientSuggestionPluginIcon(
            homeAmbientOperand5,
            appByAmbientSuggestionAppId,
          ),
        ),
        React.createElement(
          `span`,
          {
            className:
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
                `flex w-full min-w-0 flex-col gap-1 text-base`,
                homeAmbientBinding176 && `opacity-30`,
              ),
          },
          React.createElement(
            `span`,
            {
              className: `line-clamp-1 leading-[18px] text-token-text-primary`,
            },
            homeAmbientOperand5.title,
          ),
          React.createElement(
            `span`,
            {
              className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
            },
            homeAmbientOperand5.description,
          ),
        ),
        homeAmbientBinding176
          ? React.createElement(
              appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwXs,
              {
                "aria-hidden": `true`,
                className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
              },
            )
          : null,
      );
    }),
      (homeAmbientBinding148 = suggestions.map(homeAmbientBinding174)));
  }
  let homeAmbientBinding149 = React.createElement(
    `div`,
    {
      className: homeAmbientBinding147,
    },
    leadingCard,
    homeAmbientBinding148,
  );
  let homeAmbientBinding150 = React.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp,
    {
      className: `icon-2xs`,
    },
  );
  let homeAmbientBinding151 = React.createElement(
    `button`,
    {
      type: `button`,
      "aria-label": dismissAction.ariaLabel,
      className: `absolute top-4 right-0 cursor-interaction rounded-xl p-1 text-token-text-tertiary opacity-0 peer-hover/onboarding-plugin-tiles:opacity-100 hover:bg-token-foreground/5 hover:text-token-text-primary hover:opacity-100 focus-visible:opacity-100`,
      disabled: dismissAction.disabled,
      onClick: dismissAction.onClick,
    },
    homeAmbientBinding150,
  );
  return React.createElement(
    `div`,
    {
      className: `@container relative mx-auto w-full max-w-3xl min-w-0 px-8 pt-4 select-none`,
    },
    homeAmbientBinding149,
    homeAmbientBinding151,
  );
}

function AmbientSuggestionPluginIcon(
  homeAmbientOperand16,
  homeAmbientOperand17,
) {
  let homeAmbientBinding232 =
      homeAmbientOperand16.homeAction.plugin.plugin.name,
    homeAmbientBinding233 =
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDs(
        homeAmbientBinding232,
      );
  if (homeAmbientBinding233 != null)
    return React.createElement(homeAmbientBinding233, {
      "aria-hidden": !0,
      className: `size-5 shrink-0 object-contain`,
    });
  let homeAmbientBinding234 = homeAmbientOperand16.homeAction.plugin.logoPath,
    homeAmbientBinding235 = homeAmbientOperand16.homeAction.plugin.logoDarkPath;
  if (homeAmbientBinding234 != null || homeAmbientBinding235 != null)
    return React.createElement(
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwCs,
      {
        alt: ``,
        className: `size-5 shrink-0 object-contain`,
        logoDarkUrl: homeAmbientBinding235,
        logoUrl: homeAmbientBinding234,
        fallback: React.createElement(`span`, {
          className: `size-5 shrink-0 object-contain`,
        }),
      },
    );
  let homeAmbientBinding236 = homeAmbientOperand17?.get(
    appInitialAppMainOnboardingPagePf(homeAmbientBinding232),
  );
  return React.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwCs,
    {
      alt: ``,
      appInfo: homeAmbientBinding236,
      className: `size-5 shrink-0 object-contain`,
      fallback: React.createElement(`span`, {
        className: `block size-5 rounded bg-token-foreground/15`,
      }),
    },
  );
}

var homeAmbientBinding19;

var homeAmbientBinding20;

var homeAmbientBinding21 = rolldownRuntimeN(() => {
  ((homeAmbientBinding19 =
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc()),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dKp(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwHh(),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wVo(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKs(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWs(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwSs(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwSp(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwHl(),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRl(),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wD(),
    AppInitialAppMainOnboardingPageLf(),
    HomeAmbientRowsModule.homeAmbientBinding12(),
    (homeAmbientBinding20 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc()));
});

export function initAmbientSuggestionPluginTilesChunk(): void {
  homeAmbientBinding21();
}
