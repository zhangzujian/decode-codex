// Restored from ref/webview/assets/settings-row-disclosure-ie69IuvM.js
// Expandable settings-row content with the shared row divider layout.
import type { ReactNode } from "react";
const settingsRowDisclosureClassName =
  "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-[0.5px] [&>*:not(:last-child)]:after:bg-token-border [&>*:not(:last-child)]:after:content-['']";
export function initSettingsRowDisclosureChunk(): void {}
export interface SettingsRowDisclosureProps {
  children: ReactNode;
  content: ReactNode;
  contentId: string;
  expanded: boolean;
}
export function SettingsRowDisclosure({
  children,
  content,
  contentId,
  expanded,
}: SettingsRowDisclosureProps) {
  return (
    <div className={settingsRowDisclosureClassName}>
      {children}
      {expanded ? (
        <div id={contentId} className={settingsRowDisclosureClassName}>
          {content}
        </div>
      ) : null}
    </div>
  );
}
