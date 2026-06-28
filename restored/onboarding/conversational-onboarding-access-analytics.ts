// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Product-analytics emitter for the "app access denied" step of the Electron
// conversational-onboarding flow.
import { logProductEvent } from "../generated/product-logger";
import type { ProductLoggerScope } from "../generated/product-logger";
// Generated protobuf enums + event descriptor for conversational-onboarding
// access events (aliases `Hu`, `Tr`, `pi`, `eo` in the source chunk). These live
// in a generated module owned by a sibling chunk that has not been restored yet;
// imported here by role.
import {
  ConversationalOnboardingAccessAction,
  ConversationalOnboardingAccessType,
  ConversationalOnboardingTaskType,
  conversationalOnboardingAccessEvent,
} from "../generated/conversational-onboarding-product-events";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";

export function trackConversationalOnboardingAccessDenied(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  logProductEvent(scope, conversationalOnboardingAccessEvent, {
    accessType: mapAccessType(task),
    action: ConversationalOnboardingAccessAction.DENIED,
    taskType: mapTaskType(task),
  });
}

function mapAccessType(task: ConversationalOnboardingTaskId): unknown {
  switch (task) {
    case "desktop_note":
      return ConversationalOnboardingAccessType.DESKTOP;
    case "csv_chart":
      return ConversationalOnboardingAccessType.CSV_PICKER;
    case "hold_next_free_hour":
      return ConversationalOnboardingAccessType.CALENDAR_APP;
    case "send_message_to_self":
      return ConversationalOnboardingAccessType.MESSAGING_APP;
  }
}

function mapTaskType(task: ConversationalOnboardingTaskId): unknown {
  switch (task) {
    case "desktop_note":
      return ConversationalOnboardingTaskType.DESKTOP_NOTE;
    case "csv_chart":
      return ConversationalOnboardingTaskType.CSV_CHART;
    case "hold_next_free_hour":
      return ConversationalOnboardingTaskType.HOLD_NEXT_FREE_HOUR;
    case "send_message_to_self":
      return ConversationalOnboardingTaskType.SEND_MESSAGE_TO_SELF;
  }
}
