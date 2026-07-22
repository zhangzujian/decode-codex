// Restored from ref/webview/assets/settings-loading-row-CaDgP9HO.js
// Accessible loading state rendered in the standard settings-row layout.
import type { ReactNode } from "react";
import { SettingsControlRow } from "../ui/settings-row";
import { Spinner } from "../ui/spinner";
export function initSettingsLoadingRowChunk(): void {}
export interface SettingsLoadingRowProps {
  children: ReactNode;
}
export function SettingsLoadingRow({ children }: SettingsLoadingRowProps) {
  return (
    <div role="status">
      <SettingsControlRow
        label={
          <span className="flex items-center gap-2 font-normal text-token-text-secondary">
            <Spinner className="icon-xs shrink-0 text-token-text-secondary" />
            <span className="text-balance">{children}</span>
          </span>
        }
        control={null}
      />
    </div>
  );
}
