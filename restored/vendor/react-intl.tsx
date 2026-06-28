// Restored from ref/webview/assets/lib-BWT6A3Q0.js
// Minimal React Intl compatibility layer for restored UI modules.
export type PrimitiveType = string | number | boolean | null | undefined;
export type MessageDescriptor = {
  defaultMessage?: string;
  description?: string;
  id?: string;
};
export type IntlShape = {
  formatDate(value: unknown, options?: Intl.DateTimeFormatOptions): string;
  formatMessage(
    descriptor: MessageDescriptor,
    values?: Record<string, PrimitiveType>,
  ): string;
  formatNumber(value: number, options?: Intl.NumberFormatOptions): string;
};
export type ResolvedIntlConfig = Record<string, unknown>;

type ProviderProps = {
  children?: unknown;
};
type FormattedMessageProps = MessageDescriptor & {
  values?: Record<string, PrimitiveType>;
};

function interpolateMessage(
  message: string,
  values?: Record<string, PrimitiveType>,
) {
  if (!values) return message;
  return message.replace(/\{([^}]+)\}/g, (match, key) =>
    values[key] == null ? match : String(values[key]),
  );
}

export function defineMessage<TMessage extends MessageDescriptor>(
  message: TMessage,
): TMessage {
  return message;
}

export function defineMessages<
  TMessages extends Record<string, MessageDescriptor>,
>(messages: TMessages): TMessages {
  return messages;
}

export function createIntl(): IntlShape {
  return {
    formatDate: (value, options) =>
      value instanceof Date || typeof value === "number"
        ? new Intl.DateTimeFormat(undefined, options).format(value)
        : String(value ?? ""),
    formatMessage: (descriptor, values) =>
      interpolateMessage(
        descriptor.defaultMessage ?? descriptor.id ?? "",
        values,
      ),
    formatNumber: (value, options) =>
      new Intl.NumberFormat(undefined, options).format(value),
  };
}

export function createIntlCache(): Record<string, never> {
  return {};
}

export function useIntl(): IntlShape {
  return createIntl();
}

export function initIntlRuntime(): void {}

export function FormattedMessage({
  defaultMessage,
  id,
  values,
}: FormattedMessageProps): string {
  return interpolateMessage(defaultMessage ?? id ?? "", values);
}

export function FormattedDate({
  value,
  ...options
}: { value: unknown } & Intl.DateTimeFormatOptions): string {
  return createIntl().formatDate(value, options);
}

export function FormattedNumber({
  value,
  ...options
}: { value: number } & Intl.NumberFormatOptions): string {
  return createIntl().formatNumber(value, options);
}

export function IntlProvider({ children }: ProviderProps): unknown {
  return children;
}

export const RawIntlProvider = IntlProvider;
export const libI = defineMessages;
export const libL = useIntl;
export const libS = FormattedMessage;
