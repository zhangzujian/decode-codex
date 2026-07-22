// Restored from ref/webview/assets/hotkey-window-home-page-HuAbYFeH.js
import React, { type ReactNode } from "react";
import { currentAppInitialSharedMember0924 } from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";

export function PermissionsDropdownRow({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <TaskSettingsRow
      label={React.createElement(currentAppInitialSharedMember0924, {
        id: "hotkeyWindow.home.taskMenu.permissions",
        defaultMessage: "Permissions",
        description: "Label for the hotkey window permissions row",
      })}
      control={children}
    />
  );
}

export function TaskSettingsRow({
  label,
  control,
}: {
  label: ReactNode;
  control: ReactNode;
}): ReactNode {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="shrink-0 text-sm font-medium text-token-foreground">
        {label}
      </div>
      <div className="min-w-0">{control}</div>
    </div>
  );
}
