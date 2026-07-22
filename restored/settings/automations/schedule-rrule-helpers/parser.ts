// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { FREQ_VALUE_BY_NAME, RRULE_WEEKDAY_BY_TOKEN } from "./constants";
import type { ParsedRRule, ParsedRuleSet, RRuleWeekday } from "./types";
import { isWeekdayToken } from "./weekdays";

export function rrulestr(
  rruleText: string,
  _options?: { forceset?: boolean; tzid?: string },
): ParsedRuleSet {
  const rule = parseRruleLine(rruleText);
  return {
    exdates: () => [],
    exrules: () => [],
    rdates: () => [],
    rrules: () => (rule == null ? [] : [rule]),
  };
}

function parseRruleLine(rruleText: string): ParsedRRule | null {
  const line =
    rruleText
      .split(/\r?\n/)
      .find((item) => item.trim().toUpperCase().startsWith("RRULE:")) ??
    rruleText;
  const rawRule = line.trim().replace(/^RRULE:/i, "");
  const entries = rawRule
    .split(";")
    .map((part) => part.split("=") as [string, string | undefined])
    .filter(([key, value]) => key.length > 0 && value != null);
  const rawOptions = Object.fromEntries(
    entries.map(([key, value]) => [key.toUpperCase(), value ?? ""]),
  );
  const freq = FREQ_VALUE_BY_NAME[String(rawOptions.FREQ ?? "").toUpperCase()];
  if (freq == null) return null;
  const origOptions: Record<string, unknown> = { freq };
  const options: ParsedRRule["options"] = { freq };
  const interval = parsePositiveInteger(rawOptions.INTERVAL);
  if (interval != null) {
    origOptions.interval = interval;
    options.interval = interval;
  } else {
    options.interval = 1;
  }
  const byhour = parseNumberList(rawOptions.BYHOUR);
  if (byhour != null) {
    origOptions.byhour = byhour;
    options.byhour = byhour;
  }
  const byminute = parseNumberList(rawOptions.BYMINUTE);
  if (byminute != null) {
    origOptions.byminute = byminute;
    options.byminute = byminute;
  }
  const byweekday = parseWeekdayList(rawOptions.BYDAY);
  if (byweekday != null) {
    origOptions.byweekday = byweekday;
    options.byweekday = byweekday.map((weekday) => weekday.weekday);
  }
  return { options, origOptions };
}

function parsePositiveInteger(value: string | undefined): number | null {
  if (value == null) return null;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function parseNumberList(value: string | undefined): number | number[] | null {
  if (value == null || value.length === 0) return null;
  const numbers = value
    .split(",")
    .map((item) => Number(item))
    .filter(Number.isFinite)
    .map(Math.round);
  if (numbers.length === 0) return null;
  return numbers.length === 1 ? numbers[0] : numbers;
}

function parseWeekdayList(value: string | undefined): RRuleWeekday[] | null {
  if (value == null || value.length === 0) return null;
  const weekdays = value.split(",").flatMap((item) => {
    const token = item
      .trim()
      .replace(/^[+-]?\d+/, "")
      .toUpperCase();
    return isWeekdayToken(token) ? [RRULE_WEEKDAY_BY_TOKEN[token]] : [];
  });
  return weekdays.length === 0 ? null : weekdays;
}

export function isValidRruleText(rruleText: string): boolean {
  if (rruleText.trim().length === 0) return false;
  try {
    return rrulestr(rruleText).rrules().length > 0;
  } catch {
    return false;
  }
}
