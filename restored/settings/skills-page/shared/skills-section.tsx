// Restored from ref/webview/assets/skills-page-zCIrhInI.js
// Skills settings page and current-ref export surface.

import type { ReactNode } from "react";

export function SkillsSection(sectionProps: {
  title: ReactNode;
  children: ReactNode;
}) {
  let { title, children } = sectionProps,
    sectionHeading = (
      <div className="pr-0.5 pl-2 text-base font-medium text-token-foreground opacity-75">
        {title}
      </div>
    );
  return (
    <section className="flex flex-col gap-4">
      {sectionHeading}
      {children}
    </section>
  );
}
