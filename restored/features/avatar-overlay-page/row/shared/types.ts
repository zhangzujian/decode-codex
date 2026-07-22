// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Typed notification-row surfaces shared by the split avatar overlay modules.

import type { RefObject } from "react";

import type {
  CompactWaitingRequest,
  CompactWaitingRequestAction,
} from "../../../avatar-overlay-pill";
import type { AvatarOverlayNotification } from "../../../avatar-overlay-selection";

export type QuestionOption = Extract<
  CompactWaitingRequest,
  { kind: "question" }
>["options"][number];

export type WaitingRequestAction = CompactWaitingRequestAction & {
  questionOption?: QuestionOption;
};

export type RowNotification = AvatarOverlayNotification & {
  usesLiveConversationState?: boolean;
};

export interface AvatarOverlayNotificationRowProps {
  isReplying: boolean;
  notification: RowNotification;
  notificationIndex: number;
  onDismissNotification?: (notification: RowNotification) => void;
  onCloseReply: () => void;
  onOpenReply: () => void;
  onRunNotificationAction?: (
    notification: RowNotification,
    action?: WaitingRequestAction,
  ) => void;
  onSubmitQuestionOption?: (
    notification: RowNotification,
    option: QuestionOption,
  ) => void;
  onSubmitNotificationReply?: (
    notification: RowNotification,
    reply: string,
  ) => Promise<void>;
  prefersReducedMotion: boolean;
  replyInputRef: RefObject<HTMLInputElement | null>;
}

export interface CompactWaitingRequestBodyProps {
  isExpanded: boolean;
  localConversationId: string | null;
  onRunNotificationAction: (action: WaitingRequestAction) => void;
  onSubmitQuestionOption?: (option: QuestionOption) => void;
  request: CompactWaitingRequest;
}

export interface CompactWaitingRequestActionsProps {
  actions: WaitingRequestAction[];
  onRunNotificationAction: (action: WaitingRequestAction) => void;
}

export interface CompactWaitingRequestSummaryProps {
  isExpanded: boolean;
  text: string;
}

export interface CompactPatchRequestSummaryProps {
  additions: number;
  deletions: number;
  fileCount: number;
  files: string[];
  isExpanded: boolean;
  summary: string;
}

export interface CompactPlanRequestProps {
  isExpanded: boolean;
  localConversationId: string | null;
  onRunNotificationAction: (action: WaitingRequestAction) => void;
  request: Extract<CompactWaitingRequest, { kind: "plan" }>;
}
