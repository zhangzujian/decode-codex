// Restored from ref/webview/assets/automations-page-CXHLOmAw.js
import {
  currentAppInitialSharedMember0459 as automationFailureReasonCodes,
  currentAppInitialSharedMember0690 as automationDeleteStatusCodes,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import type { IntlShape } from "../vendor/react-intl";

type AutomationDraftStatus = "ACTIVE" | "PAUSED" | "DELETED";

type AutomationStatusRecord = {
  status: string;
};

type PreviousAutomationSnapshot = {
  items: unknown[];
};

export type AutomationRestoreSnapshot = {
  previousAutomations?: PreviousAutomationSnapshot;
  previousDraftStatus: AutomationDraftStatus | null;
};

export type AutomationDeleteStatus =
  | "deleted"
  | "not_found"
  | "invalid_id"
  | "store_unavailable"
  | "state_cleanup_failed"
  | "remove_failed";

export type AutomationDeleteAnalyticsMetadata = {
  deleteStatus?: unknown;
  failureReason?: unknown;
};

export type AutomationRelativeTimestampFormatter = Pick<
  IntlShape,
  "formatDate" | "formatMessage"
>;

export function filterDeletedAutomation<
  TAutomation extends AutomationStatusRecord,
>(automation: TAutomation): TAutomation | null {
  return automation.status === "DELETED" ? null : automation;
}

export function parseAutomationRestoreSnapshot(
  value: unknown,
): AutomationRestoreSnapshot | null {
  if (typeof value !== "object" || value == null) return null;

  const record = value as Record<string, unknown>;
  let previousAutomations: PreviousAutomationSnapshot | undefined;
  let previousDraftStatus: AutomationDraftStatus | null = null;

  const previousAutomationsValue = record.previousAutomations;
  if (
    typeof previousAutomationsValue === "object" &&
    previousAutomationsValue != null
  ) {
    const previousAutomationsRecord = previousAutomationsValue as Record<
      string,
      unknown
    >;
    if (Array.isArray(previousAutomationsRecord.items)) {
      previousAutomations = {
        items: previousAutomationsRecord.items,
      };
    }
  }

  if ("previousDraftStatus" in record) {
    previousDraftStatus = parseAutomationDraftStatus(
      record.previousDraftStatus,
    );
  }

  return previousAutomations == null && previousDraftStatus == null
    ? null
    : {
        previousAutomations,
        previousDraftStatus,
      };
}

export function buildAutomationDeleteAnalyticsMetadata({
  status,
  success,
}: {
  status: AutomationDeleteStatus;
  success: boolean;
}): AutomationDeleteAnalyticsMetadata | undefined {
  let deleteStatus: unknown;

  if (status === "deleted") {
    deleteStatus =
      automationDeleteStatusCodes.CODEX_AUTOMATION_DELETE_STATUS_DELETED;
  } else if (status === "not_found") {
    deleteStatus =
      automationDeleteStatusCodes.CODEX_AUTOMATION_DELETE_STATUS_NOT_FOUND;
  }

  if (success || status === "deleted") {
    return deleteStatus == null ? {} : { deleteStatus };
  }

  switch (status) {
    case "not_found":
      return {
        deleteStatus,
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION,
      };
    case "invalid_id":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_INVALID_ID,
      };
    case "store_unavailable":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_STORAGE_UNAVAILABLE,
      };
    case "state_cleanup_failed":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_STATE_CLEANUP_FAILED,
      };
    case "remove_failed":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_REMOVE_FAILED,
      };
  }
}

export function formatAutomationRelativeTimestamp({
  timestamp,
  intl,
}: {
  timestamp: string | number | Date;
  intl: AutomationRelativeTimestampFormatter;
}): string {
  const date = new Date(timestamp);
  const dayOffset = getCalendarDayOffset(date, new Date());
  const time = intl.formatDate(date, {
    timeStyle: "short",
  });

  if (dayOffset === 0) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.pastToday",
        defaultMessage: "Today at {time}",
        description: "Relative last-run label for a time earlier today",
      },
      { time },
    );
  }

  if (dayOffset === -1) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.yesterday",
        defaultMessage: "Yesterday at {time}",
        description: "Relative last-run label for a time yesterday",
      },
      { time },
    );
  }

  if (dayOffset < -1 && dayOffset > -7) {
    return intl.formatMessage(
      {
        id: "inbox.automations.relativeDate.pastWeekday",
        defaultMessage: "{weekday} at {time}",
        description: "Relative last-run label for a day earlier this week",
      },
      {
        weekday: intl.formatDate(date, {
          weekday: "long",
        }),
        time,
      },
    );
  }

  return intl.formatDate(date, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function getCalendarDayOffset(date: Date, referenceDate: Date): number {
  const dateDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const referenceDay = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
  );

  return Math.round((dateDay.getTime() - referenceDay.getTime()) / 86400000);
}

function parseAutomationDraftStatus(
  value: unknown,
): AutomationDraftStatus | null {
  switch (value) {
    case "ACTIVE":
    case "PAUSED":
    case "DELETED":
      return value;
    default:
      return null;
  }
}
