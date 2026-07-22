// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { DEFAULT_SCHEDULE_TIME } from "./constants";

function firstNumber(value: unknown): number | null {
  const values = Array.isArray(value) ? value : value == null ? [] : [value];
  const first = values[0];
  const numberValue = typeof first === "number" ? first : Number(first);
  return Number.isFinite(numberValue) ? Math.round(numberValue) : null;
}

export function currentTimeZoneId(): string | null {
  return Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
}

export function parseScheduleTime(
  value: string | null | undefined,
): { hour: number; minute: number } | null {
  if (value == null) return null;
  const match = value.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return null;
  }
  return { hour, minute };
}

export function normalizeRruleMinute(value: unknown): number | null {
  const minute = firstNumber(value);
  if (minute == null || minute < 0 || minute > 59) return null;
  return minute;
}

export function formatRruleTime(
  byhour: unknown,
  byminute: unknown,
  options?: Record<string, unknown>,
): string {
  const hour = firstNumber(byhour ?? options?.byhour);
  const minute = firstNumber(byminute ?? options?.byminute);
  const parsed =
    hour == null
      ? parseScheduleTime(DEFAULT_SCHEDULE_TIME)
      : parseScheduleTime(`${hour}:${String(minute ?? 0).padStart(2, "0")}`);
  if (parsed == null) return DEFAULT_SCHEDULE_TIME;
  return `${String(parsed.hour).padStart(2, "0")}:${String(
    parsed.minute,
  ).padStart(2, "0")}`;
}
