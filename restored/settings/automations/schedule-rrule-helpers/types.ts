import type { WeekdayToken } from "../schedule-weekdays";

export type RRuleOptions = {
  byhour?: number | number[];
  byminute?: number | number[];
  byweekday?: RRuleWeekday | RRuleWeekday[];
  freq: number;
  interval?: number;
};

export type ParsedRuleSet = {
  exdates(): unknown[];
  exrules(): unknown[];
  rdates(): unknown[];
  rrules(): ParsedRRule[];
};

export type ParsedRRule = {
  options: {
    byhour?: number | number[];
    byminute?: number | number[];
    byweekday?: number[];
    freq: number;
    interval?: number;
  };
  origOptions: Record<string, unknown>;
};

export type RRuleWeekday = {
  token: WeekdayToken;
  weekday: number;
  toString(): WeekdayToken;
};
