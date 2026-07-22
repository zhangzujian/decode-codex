// Restored from ref/webview/assets/button-oF-qgtAS.js
// button-oF-qgtAS chunk restored from the Codex webview bundle.
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Spinner } from "../ui/spinner";
const BUTTON_RADIUS_CLASS_NAMES = {
  default: "rounded-full",
  icon: "rounded-full electron:rounded-md",
  iconMd: "rounded-md",
  "icon-sm": "rounded-md",
  iconSm: "rounded-md",
  large: "rounded-full",
  medium: "rounded-lg",
  composer: "rounded-full",
  composerSm: "rounded-full",
  tabStripAction: "rounded-lg",
  toolbar: "rounded-lg",
  toolbarLabel: "rounded-lg",
} as const;
const BUTTON_COLOR_CLASS_NAMES = {
  accent:
    "bg-token-text-link-foreground enabled:hover:bg-token-text-link-foreground/90 data-[state=open]:bg-token-text-link-foreground/90 text-token-on-accent border-transparent",
  danger:
    "bg-token-charts-red/10 enabled:hover:bg-token-charts-red/20 text-token-charts-red border-transparent",
  ghost:
    "text-token-text-tertiary enabled:hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background border-transparent",
  outlineActive:
    "border-token-border text-token-button-tertiary-foreground bg-token-foreground/10 enabled:hover:bg-token-foreground/15 data-[state=open]:bg-token-foreground/15 border",
  ghostActive:
    "text-token-foreground enabled:hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background border-transparent",
  ghostMuted:
    "text-token-muted-foreground enabled:hover:bg-transparent data-[state=open]:bg-transparent hover:text-token-foreground border-transparent",
  ghostTertiary:
    "text-token-text-tertiary enabled:hover:bg-transparent data-[state=open]:bg-transparent enabled:hover:text-token-foreground border-transparent",
  outline:
    "border-token-border text-token-button-tertiary-foreground bg-token-bg-fog enabled:hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background border",
  primary:
    "bg-token-foreground enabled:hover:bg-token-foreground/80 data-[state=open]:bg-token-foreground/80 text-token-dropdown-background",
  secondary:
    "text-token-foreground bg-token-foreground/5 enabled:hover:bg-token-foreground/10 data-[state=open]:bg-token-foreground/10 border-transparent",
} as const;
const BUTTON_SIZE_CLASS_NAMES = {
  composer: "h-token-button-composer px-2 py-0 text-sm leading-[18px]",
  composerSm: "h-token-button-composer-sm px-1.5 py-0 text-sm leading-[18px]",
  default: "px-2 py-0.5 text-sm leading-[18px]",
  icon: "electron:p-1 electron:[&>svg]:icon-sm flex items-center justify-center p-0.5",
  iconMd: "flex size-5 items-center justify-center p-0.5 [&>svg]:icon-2xs",
  "icon-sm": "flex h-4 w-4 items-center justify-center p-0.5 [&>svg]:icon-2xs",
  iconSm: "flex h-4 w-4 items-center justify-center p-0.5 [&>svg]:icon-2xs",
  large: "px-5 py-2 text-base leading-[18px]",
  medium: "px-4 py-1.5 text-base leading-[18px]",
  tabStripAction:
    "h-[calc(var(--spacing-token-button-composer)+6px)] px-2 py-0 text-base leading-[18px]",
  toolbar: "h-token-button-composer px-2 py-0 text-base leading-[18px]",
  toolbarLabel: "h-token-button-composer px-2.5 py-0 text-sm leading-[18px]",
} as const;
type ButtonSize = keyof typeof BUTTON_SIZE_CLASS_NAMES;
type ButtonColor = keyof typeof BUTTON_COLOR_CLASS_NAMES;
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
  allowShrink?: boolean;
  color?: ButtonColor;
  contentLayout?: "balanced" | "default";
  loading?: boolean;
  radius?: "default" | "large";
  size?: ButtonSize;
  uniform?: boolean;
  variant?: ButtonColor;
};

export function initButtonComponentPrimitives(): void {}

function Button({
  uniform = false,
  allowShrink = false,
  color = "primary",
  contentLayout = "default",
  radius = "default",
  variant,
  size = "default",
  disabled = false,
  className,
  children,
  type = "button",
  loading = false,
  ...buttonProps
}: ButtonProps) {
  const resolvedColor = variant ?? color;

  return (
    <button
      type={type}
      className={clsx(
        "border-token-border no-drag cursor-interaction items-center gap-1 border whitespace-nowrap select-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-40",
        contentLayout === "balanced" ? "grid grid-cols-[1fr_auto_1fr]" : "flex",
        radius === "large" ? "rounded-lg" : BUTTON_RADIUS_CLASS_NAMES[size],
        BUTTON_COLOR_CLASS_NAMES[resolvedColor],
        BUTTON_SIZE_CLASS_NAMES[size],
        allowShrink && "min-w-0",
        uniform && "aspect-square items-center justify-center !px-0",
        className,
      )}
      disabled={disabled || loading}
      {...buttonProps}
    >
      {loading ? <Spinner className="icon-xxs" /> : null}
      {children}
    </button>
  );
}
const buttonRadiusClasses = BUTTON_RADIUS_CLASS_NAMES;
export { BUTTON_RADIUS_CLASS_NAMES, buttonRadiusClasses, Button };
