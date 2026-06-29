// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// MCP app frame overlay outlet and route-level app-shell frame signals.
import type { ComponentType } from "react";
import {
  AppShellOverlayOutletRaw,
  liveMcpAppFrameSignal,
} from "../boundaries/current-ref/mcp-app-frame-producer";
import { rightPanelFullscreenSignal as rightPanelFullWidthSignal } from "./app-shell-state";
import { AppShellElementContext } from "./app-shell-element-context";

export type AppShellOverlayOutletProps = {
  mcpAppId?: string;
};

export const AppShellOverlayOutlet =
  AppShellOverlayOutletRaw as ComponentType<AppShellOverlayOutletProps>;

export {
  AppShellElementContext,
  liveMcpAppFrameSignal,
  rightPanelFullWidthSignal,
};
