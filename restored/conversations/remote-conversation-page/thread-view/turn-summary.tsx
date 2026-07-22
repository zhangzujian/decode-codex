// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";

import { worktreeNewThreadQueryCompatSlotUpperVLowerT } from "../../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import { currentAppInitialSharedFunction0375 } from "../../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import { appMainCurrentCompatSlotUpperZLowerT } from "../../../vendor/app-main-current-runtime";

import { remoteConversationPageBinding43 } from "./runtime-bindings-a";

function remoteConversationPageUnit67(remoteConversationPageOperand10) {
  let { asset } = remoteConversationPageOperand10,
    remoteConversationPageBinding256 = currentAppInitialSharedFunction0375(),
    [remoteConversationPageBinding257, remoteConversationPageBinding258] =
      remoteConversationPageBinding43.useState(false),
    remoteConversationPageBinding259 =
      remoteConversationPageBinding256.formatMessage({
        id: "codex.remoteConversation.userImageAttachment",
        defaultMessage: "User attachment",
        description: "Alt text for user image attachment",
      });
  let remoteConversationPageBinding260 = remoteConversationPageBinding259,
    remoteConversationPageBinding261 =
      remoteConversationPageBinding256.formatMessage({
        id: "codex.remoteConversation.closeImagePreview",
        defaultMessage: "Close image preview",
        description:
          "Aria label for closing the image preview dialog in remote conversation",
      });
  let remoteConversationPageBinding262 = remoteConversationPageBinding261,
    { src, isLoading, isError, refetch } = appMainCurrentCompatSlotUpperZLowerT(
      asset.asset_pointer,
    );
  if (isError) return null;
  if (isLoading || !src) {
    let remoteConversationPageBinding450 =
      remoteConversationPageBinding256.formatMessage({
        id: "codex.remoteConversation.loadingImage",
        defaultMessage: "Loading image",
        description: "Aria label for loading image",
      });
    let remoteConversationPageBinding451;
    return (
      <div
        className="flex size-16 items-center justify-center rounded-md border border-token-border bg-token-bg-tertiary text-sm"
        aria-label={remoteConversationPageBinding450}
      >
        {"…"}
      </div>
    );
  }
  let remoteConversationPageBinding263 = (event) => {
    (event.key === "Enter" || event.key === " ") &&
      (event.preventDefault(), remoteConversationPageBinding258(true));
  };
  let remoteConversationPageBinding264 = (
    <img
      src={src}
      width={asset.width}
      height={asset.height}
      className="h-full w-full rounded-md object-contain"
      referrerPolicy="no-referrer"
      onError={refetch}
      alt={remoteConversationPageBinding260}
    />
  );
  let remoteConversationPageBinding265 = (
    <div
      className="size-16 cursor-interaction rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
      role="button"
      tabIndex={0}
      aria-label={remoteConversationPageBinding260}
      onKeyDown={remoteConversationPageBinding263}
    >
      {remoteConversationPageBinding264}
    </div>
  );
  return React.createElement(worktreeNewThreadQueryCompatSlotUpperVLowerT, {
    src,
    alt: remoteConversationPageBinding260,
    open: remoteConversationPageBinding257,
    onOpenChange: remoteConversationPageBinding258,
    closeAriaLabel: remoteConversationPageBinding262,
    imageReferrerPolicy: "no-referrer",
    onImageError: refetch,
    triggerContent: remoteConversationPageBinding265,
  });
}

export class RemoteConversationTurnSummary {
  static remoteConversationPageUnit67 = remoteConversationPageUnit67;
}
