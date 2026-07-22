// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { WeekdayToken } from "../schedule-weekdays";
import type { RRuleOptions, RRuleWeekday } from "./types";

export const FREQ_NAME_BY_VALUE: Record<number, string> = {
  0: "YEARLY",
  1: "MONTHLY",
  2: "WEEKLY",
  3: "DAILY",
  4: "HOURLY",
  5: "MINUTELY",
  6: "SECONDLY",
};

export const FREQ_VALUE_BY_NAME = Object.fromEntries(
  Object.entries(FREQ_NAME_BY_VALUE).map(([value, name]) => [
    name,
    Number(value),
  ]),
);

function createWeekday(weekday: number, token: WeekdayToken): RRuleWeekday {
  return { token, weekday, toString: () => token };
}

function formatNumberList(value: number | number[]): string {
  const values = Array.isArray(value) ? value : [value];
  return values.map(String).join(",");
}

export class RRule {
  static readonly YEARLY = 0;
  static readonly MONTHLY = 1;
  static readonly WEEKLY = 2;
  static readonly DAILY = 3;
  static readonly HOURLY = 4;
  static readonly MINUTELY = 5;
  static readonly SECONDLY = 6;
  static readonly MO = createWeekday(0, "MO");
  static readonly TU = createWeekday(1, "TU");
  static readonly WE = createWeekday(2, "WE");
  static readonly TH = createWeekday(3, "TH");
  static readonly FR = createWeekday(4, "FR");
  static readonly SA = createWeekday(5, "SA");
  static readonly SU = createWeekday(6, "SU");

  constructor(private readonly options: RRuleOptions) {}

  toString(): string {
    const parts = [`FREQ=${FREQ_NAME_BY_VALUE[this.options.freq] ?? "DAILY"}`];
    if (this.options.interval != null) {
      parts.push(`INTERVAL=${this.options.interval}`);
    }
    if (this.options.byhour != null) {
      parts.push(`BYHOUR=${formatNumberList(this.options.byhour)}`);
    }
    if (this.options.byminute != null) {
      parts.push(`BYMINUTE=${formatNumberList(this.options.byminute)}`);
    }
    if (this.options.byweekday != null) {
      const weekdays = Array.isArray(this.options.byweekday)
        ? this.options.byweekday
        : [this.options.byweekday];
      parts.push(`BYDAY=${weekdays.map(String).join(",")}`);
    }
    return `RRULE:${parts.join(";")}`;
  }
}

export const ALL_WEEKDAYS: WeekdayToken[] = [
  "SU",
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
];
export const WEEKDAYS_MONDAY_TO_FRIDAY: WeekdayToken[] = [
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
];
export const DEFAULT_SCHEDULE_TIME = "09:00";
export const MINUTELY_STANDALONE_OPTION_KEYS = new Set(["freq", "interval"]);
export const HOURLY_STANDALONE_OPTION_KEYS = new Set([
  "freq",
  "interval",
  "byminute",
  "byweekday",
]);
export const DAILY_WEEKLY_STANDALONE_OPTION_KEYS = new Set([
  "freq",
  "interval",
  "byhour",
  "byminute",
  "byweekday",
]);
export const RRULE_WEEKDAY_BY_TOKEN = {
  SU: RRule.SU,
  MO: RRule.MO,
  TU: RRule.TU,
  WE: RRule.WE,
  TH: RRule.TH,
  FR: RRule.FR,
  SA: RRule.SA,
} as const;
