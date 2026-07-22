// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import React from "react";

import {
  worktreeNewThreadQueryCompatSlotUpperDLowerM,
  worktreeNewThreadQueryCompatSlotLowerXLowerS,
} from "../../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  appMainCurrentCompatSlotLowerALowerM,
  appMainCurrentCompatSlotLowerRLowerM,
} from "../../../../vendor/app-main-current-runtime/index";

import type { AvatarOverlayActivityStatusConfig } from "../../../avatar-overlay-pill";

export function AvatarOverlayStatusIcon(
  status: AvatarOverlayActivityStatusConfig,
) {
  switch (status.iconType) {
    case "check-circle":
      return React.createElement(worktreeNewThreadQueryCompatSlotLowerXLowerS, {
        className: status.iconClassName,
      });
    case "clock":
      return React.createElement(appMainCurrentCompatSlotLowerALowerM, {
        className: status.iconClassName,
      });
    case "spinner":
      return React.createElement(worktreeNewThreadQueryCompatSlotUpperDLowerM, {
        className: status.iconClassName,
      });
    case "warning":
      return React.createElement(appMainCurrentCompatSlotLowerRLowerM, {
        className: status.iconClassName,
      });
  }
}
