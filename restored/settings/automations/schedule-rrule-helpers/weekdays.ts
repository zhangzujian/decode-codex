// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { WeekdayToken } from "../schedule-weekdays";
import { ALL_WEEKDAYS } from "./constants";

const TOKEN_BY_RRULE_WEEKDAY_INDEX: Record<number, WeekdayToken> = {
  0: "MO",
  1: "TU",
  2: "WE",
  3: "TH",
  4: "FR",
  5: "SA",
  6: "SU",
};
const WEEKDAY_TOKEN_SET = new Set<WeekdayToken>(ALL_WEEKDAYS);
const WEEKDAY_SORT_ORDER = new Map(
  ALL_WEEKDAYS.map((token, index) => [token, index] as const),
);

export function isWeekdayToken(value: string): value is WeekdayToken {
  return WEEKDAY_TOKEN_SET.has(value as WeekdayToken);
}

function sortUniqueWeekdays(weekdays: WeekdayToken[]): WeekdayToken[] {
  return [...new Set(weekdays)].sort(
    (left, right) =>
      (WEEKDAY_SORT_ORDER.get(left) ?? 0) -
      (WEEKDAY_SORT_ORDER.get(right) ?? 0),
  );
}

function weekdayTokenFromValue(value: unknown): WeekdayToken | null {
  if (typeof value === "string") {
    const token = value.replace(/^[+-]?\d+/, "").toUpperCase();
    return isWeekdayToken(token) ? token : null;
  }
  if (typeof value === "number") {
    return TOKEN_BY_RRULE_WEEKDAY_INDEX[value] ?? null;
  }
  if (typeof value === "object" && value != null) {
    const maybeWeekday = (value as { weekday?: unknown }).weekday;
    if (typeof maybeWeekday === "number") {
      return TOKEN_BY_RRULE_WEEKDAY_INDEX[maybeWeekday] ?? null;
    }
    const stringValue = String(value);
    return stringValue === "[object Object]"
      ? null
      : weekdayTokenFromValue(stringValue);
  }
  return null;
}

export function weekdaysFromByweekday(value: unknown): WeekdayToken[] | null {
  const values = Array.isArray(value) ? value : value == null ? [] : [value];
  const weekdays = values.flatMap((item) => {
    const token = weekdayTokenFromValue(item);
    return token == null ? [] : [token];
  });
  return weekdays.length === 0 ? null : sortUniqueWeekdays(weekdays);
}

export function weekdaysFromRruleText(
  rruleText: string,
): WeekdayToken[] | null {
  const match = rruleText.match(/(?:^|[;\n])BYDAY=([^;\n]+)/i);
  if (!match) return null;
  const weekdays = match[1].split(",").flatMap((rawToken) => {
    const token = rawToken
      .trim()
      .replace(/^[+-]?\d+/, "")
      .toUpperCase();
    return isWeekdayToken(token) ? [token] : [];
  });
  return weekdays.length === 0 ? null : sortUniqueWeekdays(weekdays);
}

export function representativeWeekday(
  weekdays: readonly WeekdayToken[],
): WeekdayToken {
  return sortUniqueWeekdays([...weekdays])[0] ?? "MO";
}
