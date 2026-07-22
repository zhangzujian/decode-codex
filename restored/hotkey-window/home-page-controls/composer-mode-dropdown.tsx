// Restored from ref/webview/assets/hotkey-window-home-page-HuAbYFeH.js
import React, { type ReactNode } from "react";
import { once as runOnce } from "../../runtime/commonjs-interop";
import { currentAppInitialSharedCompatSlotLowerGLowerC } from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerQ,
  worktreeNewThreadOrchestratorCompatSlotUpperB,
  worktreeNewThreadOrchestratorCompatSlotUpperK,
  worktreeNewThreadOrchestratorCompatSlotUpperV,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotLowerELowerO,
  worktreeNewThreadQueryCompatSlotUpperELowerM,
  worktreeNewThreadQueryCompatSlotLowerFLowerH,
  worktreeNewThreadQueryCompatSlotLowerKLowerP,
  worktreeNewThreadQueryCompatSlotLowerNLowerO,
  worktreeNewThreadQueryCompatSlotLowerOLowerO,
  worktreeNewThreadQueryCompatSlotUpperOLowerP,
  worktreeNewThreadQueryCompatSlotLowerPLowerH,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotLowerXLowerP,
  worktreeNewThreadQueryCompatSlotLowerYLowerP,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedFunction0375,
  currentAppInitialSharedMember0924,
  intlFormatDateTimeRuntime,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  appMainCurrentCompatSlotUpperXLowerT,
  appMainCurrentCompatSlotUpperZLowerT,
} from "../../vendor/app-main-current-runtime";

export type ComposerMode = "local" | "cloud" | "worktree";

export type ComposerModeDropdownProps = {
  canUseCloud: boolean;
  composerMode: ComposerMode;
  setComposerMode: (mode: ComposerMode) => void;
  showLabel?: boolean;
  disabledTooltipText?: ReactNode;
  showWorktree: boolean;
};

export function ComposerModeDropdown({
  canUseCloud,
  composerMode,
  setComposerMode,
  showLabel = false,
  disabledTooltipText,
  showWorktree,
}: ComposerModeDropdownProps): ReactNode {
  const intl = currentAppInitialSharedFunction0375();
  const modeIcon =
    composerMode === "cloud"
      ? React.createElement(appMainCurrentCompatSlotUpperXLowerT, {
          className: "icon-2xs",
        })
      : composerMode === "worktree" && showWorktree
        ? React.createElement(worktreeNewThreadOrchestratorCompatSlotUpperK, {
            className: "icon-2xs",
          })
        : React.createElement(worktreeNewThreadOrchestratorCompatSlotUpperB, {
            className: "icon-2xs",
          });
  const modeLabel = showLabel ? (
    <span className="max-w-40 truncate text-left whitespace-nowrap">
      {composerMode === "cloud"
        ? React.createElement(currentAppInitialSharedMember0924, {
            id: "composer.footer.v2.cloudTab",
            defaultMessage: "Cloud",
            description: "Cloud mode label",
          })
        : composerMode === "worktree" && showWorktree
          ? React.createElement(currentAppInitialSharedMember0924, {
              id: "composer.mode.worktreeSegment",
              defaultMessage: "Worktree",
              description: "Worktree mode label for the segmented toggle",
            })
          : React.createElement(currentAppInitialSharedMember0924, {
              id: "composer.hotkeyWindow.modeDropdown.localProject",
              defaultMessage: "Local project",
              description:
                "Hotkey window overflow menu label for local project mode",
            })}
    </span>
  ) : null;
  const triggerChildren = (
    <>
      {modeIcon}
      {modeLabel}
      {React.createElement(worktreeNewThreadQueryCompatSlotLowerFLowerH, {
        className: "icon-2xs text-token-input-placeholder-foreground",
      })}
    </>
  );
  if (disabledTooltipText) {
    return React.createElement(
      worktreeNewThreadQueryCompatSlotLowerYLowerP,
      { tooltipContent: disabledTooltipText },
      <span>
        {React.createElement(
          worktreeNewThreadQueryCompatSlotUpperTLowerM,
          {
            size: "composerSm",
            color: "ghost",
            className: "gap-1 px-1.5",
            disabled: true,
          },
          triggerChildren,
        )}
      </span>,
    );
  }
  const triggerButton = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerYLowerP,
    {
      tooltipContent: React.createElement(currentAppInitialSharedMember0924, {
        id: "composer.hotkeyWindow.modeDropdown.tooltip",
        defaultMessage: "Select where to run the task",
        description: "Tooltip for the hotkey-window mode selector",
      }),
    },
    React.createElement(
      worktreeNewThreadQueryCompatSlotUpperTLowerM,
      { size: "composerSm", color: "ghost", className: "gap-1 px-1.5" },
      triggerChildren,
    ),
  );
  const localItem = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerNLowerO.Item,
    {
      LeftIcon: worktreeNewThreadOrchestratorCompatSlotUpperB,
      RightIcon:
        composerMode === "local"
          ? worktreeNewThreadQueryCompatSlotUpperOLowerP
          : undefined,
      onSelect: () => setComposerMode("local"),
    },
    React.createElement(currentAppInitialSharedMember0924, {
      id: "composer.mode.local",
      defaultMessage: "Work locally",
      description: "Local mode label",
    }),
  );
  const cloudItem = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerNLowerO.Item,
    {
      LeftIcon: appMainCurrentCompatSlotUpperXLowerT,
      RightIcon:
        composerMode === "cloud"
          ? worktreeNewThreadQueryCompatSlotUpperOLowerP
          : undefined,
      disabled: !canUseCloud,
      onSelect: () => setComposerMode("cloud"),
      tooltipText: canUseCloud
        ? undefined
        : intl.formatMessage({
            id: "composer.hotkeyWindow.modeDropdown.cloudUnavailable",
            defaultMessage: "Cloud is unavailable",
            description: "Tooltip for disabled hotkey-window Cloud mode",
          }),
    },
    React.createElement(currentAppInitialSharedMember0924, {
      id: "composer.footer.v2.cloudTab",
      defaultMessage: "Cloud",
      description: "Cloud mode label",
    }),
  );
  const worktreeItem = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerNLowerO.Item,
    {
      LeftIcon: worktreeNewThreadOrchestratorCompatSlotUpperK,
      RightIcon:
        composerMode === "worktree"
          ? worktreeNewThreadQueryCompatSlotUpperOLowerP
          : undefined,
      onSelect: () => setComposerMode("worktree"),
      disabled: !showWorktree,
      tooltipText: showWorktree
        ? undefined
        : intl.formatMessage({
            id: "composer.hotkeyWindow.modeDropdown.localOnly",
            defaultMessage: "Initialize a git repo to run tasks in worktrees",
            description:
              "Tooltip for disabled hotkey-window worktree mode selector",
          }),
    },
    React.createElement(currentAppInitialSharedMember0924, {
      id: "composer.mode.worktreeSegment",
      defaultMessage: "Worktree",
      description: "Worktree mode label for the segmented toggle",
    }),
  );
  return React.createElement(
    worktreeNewThreadQueryCompatSlotLowerELowerO,
    { triggerButton, contentWidth: "menuNarrow" },
    [localItem, cloudItem, worktreeItem],
  );
}

export const initComposerModeDropdownChunk = runOnce(() => {
  currentAppInitialSharedCompatSlotLowerGLowerC();
  intlFormatDateTimeRuntime();
  worktreeNewThreadQueryCompatSlotUpperELowerM();
  worktreeNewThreadQueryCompatSlotLowerOLowerO();
  worktreeNewThreadQueryCompatSlotLowerXLowerP();
  worktreeNewThreadQueryCompatSlotLowerKLowerP();
  worktreeNewThreadQueryCompatSlotLowerPLowerH();
  appMainCurrentCompatSlotUpperZLowerT();
  worktreeNewThreadOrchestratorCompatSlotUpperV();
  worktreeNewThreadOrchestratorCompatSlotLowerQ();
});
