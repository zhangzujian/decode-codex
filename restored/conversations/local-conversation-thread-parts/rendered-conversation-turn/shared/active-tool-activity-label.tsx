// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).

import { type ReactNode } from "react";

import { FormattedMessage } from "../../../../vendor/react-intl";

import {
  ToolActivityIcon,
  FileReferenceLink,
  FaviconImage,
  DiffLineStats,
  ShimmerText,
  basename,
  buildFileReference,
} from "../../../../boundaries/onboarding-commons-externals.facade";

import { renderActiveLabelActionShimmer } from "./render-active-label-action-shimmer";

import { renderActiveLabelAction } from "./render-active-label-action";
import type { ActiveCommandLabel } from "../types";

export function ActiveToolActivityLabel({
  label,
  cwd,
  hostId,
}: {
  label: ActiveCommandLabel;
  cwd: string | null;
  hostId: string;
}): ReactNode {
  const patchFile = label.patchFile;
  const renderDetail = (detail: ReactNode) =>
    patchFile == null ? (
      <span key="detail" className="min-w-0 truncate">
        {detail}
      </span>
    ) : (
      <span
        key="detail"
        className="ml-1.5 inline-flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden align-bottom whitespace-nowrap"
      >
        <FileReferenceLink
          reference={buildFileReference(patchFile.path)}
          className="min-w-0 flex-1 cursor-interaction truncate text-start text-token-text-link-foreground select-text hover:underline [&>span]:block [&>span]:truncate [&>span]:whitespace-nowrap"
          cwd={patchFile.grantRoot ?? cwd}
          hostId={hostId}
        >
          {basename(patchFile.path)}
        </FileReferenceLink>
        {patchFile.diffStats == null ? null : (
          <DiffLineStats
            className="shrink-0"
            linesAdded={patchFile.diffStats.linesAdded}
            linesRemoved={patchFile.diffStats.linesRemoved}
          />
        )}
      </span>
    );
  const labelMessage =
    patchFile == null ? (
      <ShimmerText className="min-w-0 flex-1 truncate">
        <FormattedMessage
          {...label.message}
          values={{
            ...label.values,
            action: renderActiveLabelActionShimmer,
            detail: renderDetail,
          }}
        />
      </ShimmerText>
    ) : (
      <span className="inline-flex min-w-0 flex-1 items-center overflow-hidden">
        <FormattedMessage
          {...label.message}
          values={{
            ...label.values,
            action: renderActiveLabelAction,
            detail: renderDetail,
          }}
        />
      </span>
    );
  const labelIcon =
    label.faviconUrl == null ? (
      <ToolActivityIcon icon={label.icon} />
    ) : (
      <FaviconImage
        src={label.faviconUrl}
        className="icon-xs text-token-input-placeholder-foreground"
        showFallbackWhileLoading={false}
      />
    );
  return (
    <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 overflow-hidden">
      {labelIcon}
      {labelMessage}
    </span>
  );
}
