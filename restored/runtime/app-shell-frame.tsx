// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// App-shell frame context, overlay outlet, and route-level panel signals.
import type { ComponentType } from "react";
import {
  jr as liveMcpAppFrameSignal,
  vn as RawAppShellOverlayOutlet,
} from "../vendor/projects-app-shared-runtime";
import { AppShellElementContext } from "../app-shell/app-shell-element-context";
import { appShellStateExportAAlias as rightPanelFullWidthSignal } from "./app-shell-state";

export const AppShellOverlayOutlet = RawAppShellOverlayOutlet as ComponentType<{
  mcpAppId?: string;
}>;

export {
  AppShellElementContext,
  liveMcpAppFrameSignal,
  rightPanelFullWidthSignal,
};
