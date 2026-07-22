// Restored from ref/webview/assets/home-composer-mode-toggle-CcQKoq4K.js
// Animated Chat/Work mode toggle for the Home composer.
import React, { type FocusEventHandler } from "react";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { FormattedMessage, useIntl } from "react-intl";
import { MENU_EASING_CURVE } from "../ui/menu-current";
import { Tooltip } from "../ui/tooltip-current";
type HomeComposerMode = "chat" | "work";
type HomeComposerModeToggleProps = {
  autoFocusSelected?: boolean;
  className?: string;
  disabled?: boolean;
  onSelectedAutoFocus?: FocusEventHandler<HTMLButtonElement>;
  onTransitionComplete?: () => void;
  onValueChange: (value: HomeComposerMode) => void;
  value: HomeComposerMode;
};
const MODE_BUTTON_CLASS =
  "cursor-interaction relative z-10 inline-flex h-full min-w-0 items-center justify-center whitespace-nowrap rounded-full px-7.5 text-sm font-medium extension:px-2.5 disabled:cursor-not-allowed disabled:opacity-40";
function HomeComposerModeToggle({
  autoFocusSelected = false,
  className,
  disabled = false,
  onSelectedAutoFocus,
  onTransitionComplete,
  onValueChange,
  value,
}: HomeComposerModeToggleProps) {
  const intl = useIntl();
  const prefersReducedMotion = useReducedMotion();
  const selectedX = value === "chat" ? "0%" : "100%";
  const [initialPosition] = React.useState(() =>
    !autoFocusSelected || prefersReducedMotion
      ? {
          x: selectedX,
        }
      : {
          x: value === "chat" ? "100%" : "0%",
        },
  );
  return (
    <div
      className={clsx(
        "relative isolate inline-grid h-8 shrink-0 grid-cols-2 gap-0 rounded-full p-0.5 select-none extension:h-7",
        className,
      )}
      role="group"
      aria-label={intl.formatMessage({
        id: "composer.home.modeToggle.ariaLabel",
        defaultMessage: "Composer mode",
        description:
          "Accessible label for the toggle that switches the Home composer between Work and Chat modes",
      })}
    >
      <span
        className="pointer-events-none absolute inset-x-0.5 top-1/2 z-0 h-8 -translate-y-1/2 rounded-full bg-token-side-bar-background dark:brightness-75 electron:dark:bg-token-button-foreground electron:dark:brightness-100"
        aria-hidden="true"
      />
      <motion.span
        animate={{
          x: selectedX,
        }}
        className="pointer-events-none relative z-10 col-start-1 row-start-1 -my-[3px] rounded-full bg-token-input-background/90 shadow-md ring-[0.5px] ring-token-border backdrop-blur-lg electron:dark:bg-token-dropdown-background"
        initial={initialPosition}
        transition={
          prefersReducedMotion
            ? {
                duration: 0,
              }
            : {
                duration: 0.3,
                ease: MENU_EASING_CURVE,
              }
        }
        aria-hidden="true"
        onAnimationComplete={onTransitionComplete}
      />
      <ModeButton
        autoFocusSelected={autoFocusSelected}
        disabled={disabled}
        mode="chat"
        onSelectedAutoFocus={onSelectedAutoFocus}
        onValueChange={onValueChange}
        selected={value === "chat"}
        tooltip={
          <FormattedMessage
            id="composer.home.modeToggle.chat.tooltip"
            defaultMessage="Ask questions and explore ideas"
            description="Concise tooltip for the Chat option in the Home composer mode toggle. It explains that Chat is for asking questions and exploring ideas."
          />
        }
      />
      <ModeButton
        autoFocusSelected={autoFocusSelected}
        disabled={disabled}
        mode="work"
        onSelectedAutoFocus={onSelectedAutoFocus}
        onValueChange={onValueChange}
        selected={value === "work"}
        tooltip={
          <FormattedMessage
            id="composer.home.modeToggle.work.tooltip"
            defaultMessage="Get tasks done with your files and apps"
            description="Concise tooltip for the Work option in the Home composer mode toggle. It explains that Work can complete tasks using the user's files and apps."
          />
        }
      />
    </div>
  );
}
function ModeButton({
  autoFocusSelected,
  disabled,
  mode,
  onSelectedAutoFocus,
  onValueChange,
  selected,
  tooltip,
}: {
  autoFocusSelected: boolean;
  disabled: boolean;
  mode: HomeComposerMode;
  onSelectedAutoFocus?: FocusEventHandler<HTMLButtonElement>;
  onValueChange: (value: HomeComposerMode) => void;
  selected: boolean;
  tooltip: React.ReactNode;
}) {
  return (
    <Tooltip disabled={disabled} tooltipContent={tooltip}>
      <button
        autoFocus={autoFocusSelected && selected}
        className={clsx(
          MODE_BUTTON_CLASS,
          mode === "chat" ? "col-start-1" : "col-start-2",
          "row-start-1",
          selected
            ? "text-token-text-primary"
            : "text-token-text-tertiary hover:text-token-text-primary",
        )}
        type="button"
        aria-pressed={selected}
        disabled={disabled}
        onFocus={
          autoFocusSelected && selected ? onSelectedAutoFocus : undefined
        }
        onClick={() => {
          if (!selected) onValueChange(mode);
        }}
      >
        <FormattedMessage
          id={`composer.home.modeToggle.${mode}`}
          defaultMessage={mode === "chat" ? "Chat" : "Work"}
          description={`Label for ${mode === "chat" ? "Chat" : "Work"} mode in the Home composer mode toggle`}
        />
      </button>
    </Tooltip>
  );
}
export { HomeComposerModeToggle };
export type { HomeComposerMode, HomeComposerModeToggleProps };
