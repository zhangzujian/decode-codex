// Restored from ref/webview/assets/product-logger-ibAP2Yp2.js
// Product analytics event descriptors used by restored UI chunks.
export type ProductEventDescriptor = {
  eventName: string;
};
export type ProductLogger = {
  logProductEvent(event: ProductEventDescriptor, payload?: unknown): void;
};
export type ProductLoggerScope = {
  get?(signal: unknown): ProductLogger | null | undefined;
  logProductEvent?(event: ProductEventDescriptor, payload?: unknown): void;
};

function event(eventName: string): ProductEventDescriptor {
  return { eventName };
}

export const __productLoggerR = {
  defaultValue: {
    logProductEvent(): void {},
  } satisfies ProductLogger,
  id: "productLogger",
};
export const _r = __productLoggerR;

export const codexThreadSwitchCompletedEvent = event(
  "codex_thread_switch_completed",
);
export const productLoggerZn = event("codex_prompt_rail_navigation_clicked");
export const _productLoggerVr = event("codex_thread_side_panel_tab_viewed");
export const codexThreadSwitchKind = {
  CODEX_THREAD_SWITCH_KIND_COLD: "CODEX_THREAD_SWITCH_KIND_COLD",
  CODEX_THREAD_SWITCH_KIND_HOT: "CODEX_THREAD_SWITCH_KIND_HOT",
  CODEX_THREAD_SWITCH_KIND_UNSPECIFIED: "CODEX_THREAD_SWITCH_KIND_UNSPECIFIED",
  UNRECOGNIZED: "UNRECOGNIZED",
};
export const _productLoggerUr = codexThreadSwitchKind;
export const codexRemoteSshThreadActionKind = {
  CODEX_REMOTE_SSH_THREAD_ACTION_FORK: "CODEX_REMOTE_SSH_THREAD_ACTION_FORK",
  CODEX_REMOTE_SSH_THREAD_ACTION_START: "CODEX_REMOTE_SSH_THREAD_ACTION_START",
  CODEX_REMOTE_SSH_THREAD_ACTION_UNSPECIFIED:
    "CODEX_REMOTE_SSH_THREAD_ACTION_UNSPECIFIED",
  UNRECOGNIZED: "UNRECOGNIZED",
};

export function logProductEvent(
  scope: ProductLoggerScope,
  productEvent: ProductEventDescriptor,
  payload: unknown = {},
): void {
  const scopedLogger = scope.get?.(__productLoggerR);
  const logger = scopedLogger ?? scope;
  logger.logProductEvent?.(productEvent, payload);
}

export const ___productLoggerT = logProductEvent;
