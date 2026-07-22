// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import React from "react";

import { currentAppInitialSharedFunction0375 } from "../../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { BulletSeparator } from "../../../../runtime/current-app-initial/thread-app-shell-rate-limit-runtime";

import { AvatarOverlaySharedModule } from "../../shared";

import { CompactPatchFileRow } from "./compact-patch-file-row";
import type { CompactPatchRequestSummaryProps } from "./types";

export function CompactPatchRequestSummary(
  avatarOverlayOperand4: CompactPatchRequestSummaryProps,
) {
  let { additions, deletions, fileCount, files, isExpanded, summary } =
      avatarOverlayOperand4,
    avatarOverlayBinding209 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding210 = avatarOverlayBinding209.formatMessage(
      AvatarOverlaySharedModule.avatarOverlayBinding4.compactPatchFileCount,
      {
        count: fileCount,
      },
    );
  let avatarOverlayBinding211 = avatarOverlayBinding210,
    avatarOverlayBinding212 =
      additions > 0
        ? avatarOverlayBinding209.formatMessage(
            AvatarOverlaySharedModule.avatarOverlayBinding4
              .compactPatchAdditions,
            {
              count: additions,
            },
          )
        : null;
  let avatarOverlayBinding213 = avatarOverlayBinding212,
    avatarOverlayBinding214 =
      deletions > 0
        ? avatarOverlayBinding209.formatMessage(
            AvatarOverlaySharedModule.avatarOverlayBinding4
              .compactPatchDeletions,
            {
              count: deletions,
            },
          )
        : null;
  let avatarOverlayBinding215 = avatarOverlayBinding214;
  if (!isExpanded) {
    let avatarOverlayBinding278 = <span>{avatarOverlayBinding211}</span>;
    let avatarOverlayBinding279 =
      avatarOverlayBinding213 == null ? null : (
        <span className="ml-1.5 text-token-charts-green">
          {avatarOverlayBinding213}
        </span>
      );
    let avatarOverlayBinding280 =
      avatarOverlayBinding215 == null ? null : (
        <span className="ml-1.5 text-token-error-foreground">
          {avatarOverlayBinding215}
        </span>
      );
    let avatarOverlayBinding281 = React.createElement(BulletSeparator, {
      className: "mx-1.5 text-token-text-tertiary",
    });
    let avatarOverlayBinding282 = <span>{summary}</span>;
    let avatarOverlayBinding283;
    return (
      <div
        className="min-w-0 truncate whitespace-nowrap text-token-text-secondary"
        data-avatar-overlay-compact-waiting-summary-text="true"
      >
        {avatarOverlayBinding278}
        {avatarOverlayBinding279}
        {avatarOverlayBinding280}
        {avatarOverlayBinding281}
        {avatarOverlayBinding282}
      </div>
    );
  }
  let avatarOverlayBinding216 = (
    <span className="text-[11px] leading-4 text-token-text-secondary">
      {avatarOverlayBinding211}
    </span>
  );
  let avatarOverlayBinding217 =
    avatarOverlayBinding213 == null ? null : (
      <span className="text-[11px] leading-4 text-token-charts-green">
        {avatarOverlayBinding213}
      </span>
    );
  let avatarOverlayBinding218 =
    avatarOverlayBinding215 == null ? null : (
      <span className="text-[11px] leading-4 text-token-error-foreground">
        {avatarOverlayBinding215}
      </span>
    );
  let avatarOverlayBinding219 = (
    <div className="mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
      {avatarOverlayBinding216}
      {avatarOverlayBinding217}
      {avatarOverlayBinding218}
    </div>
  );
  let avatarOverlayBinding220 = files.map(CompactPatchFileRow);
  let avatarOverlayBinding221 = (
    <div className="mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary">
      {avatarOverlayBinding220}
    </div>
  );
  return (
    <div data-avatar-overlay-compact-waiting-summary-text="true">
      {avatarOverlayBinding219}
      {avatarOverlayBinding221}
    </div>
  );
}
