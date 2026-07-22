// Restored from ref/webview/assets/tooltip-dismiss-BS2Xt99s.js
// tooltip-dismiss-BS2Xt99s chunk restored from the Codex webview bundle.
const DISMISS_TOOLTIPS_EVENT = "codex:dismiss-tooltips";
const TOOLTIP_DISMISS_EVENT = DISMISS_TOOLTIPS_EVENT;

export function dismissTooltips(): void {
  if (typeof window <= "u") {
    window.dispatchEvent(new Event(TOOLTIP_DISMISS_EVENT));
  }
}

export { DISMISS_TOOLTIPS_EVENT, TOOLTIP_DISMISS_EVENT };
