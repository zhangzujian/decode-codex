// Restored from ref/webview/assets/thread-panel-toggle-button-BSghz--1.js
// Shared toolbar toggle button for thread side-panel controls.
import type { MouseEventHandler, ReactNode } from "react";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
export function initThreadPanelToggleButtonChunk(): void {}
export interface ThreadPanelToggleButtonProps {
  children: ReactNode;
  color?: "outline";
  disabled?: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  pressed: boolean;
  shortcut?: ReactNode;
}
export function ThreadPanelToggleButton({
  children,
  color,
  disabled = false,
  label,
  onClick,
  pressed,
  shortcut,
}: ThreadPanelToggleButtonProps) {
  const buttonColor =
    color === "outline"
      ? pressed
        ? "outlineActive"
        : "outline"
      : pressed
        ? "secondary"
        : "ghost";
  return (
    <Tooltip tooltipContent={label} shortcut={shortcut} delayOpen>
      <Button
        size="toolbar"
        color={buttonColor}
        aria-label={label}
        aria-pressed={pressed}
        disabled={disabled}
        onClick={onClick}
        uniform
      >
        {children}
      </Button>
    </Tooltip>
  );
}
