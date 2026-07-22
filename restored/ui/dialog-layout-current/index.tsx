// Restored from ref/webview/assets/app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~h49w84u1-C22DF0k3.js
// Current Electron dialog primitives, layout, and form-section components.
import React, { type HTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../button";
import { DialogLayout as Dialog } from "../dialog-layout/dialog-layout-content";
import {
  DIALOG_FOOTER_BUTTON_CLASS,
  DIALOG_OVERLAY_CLASS_NAME,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from "../dialog-layout/primitives";
import {
  DialogBody,
  DialogHeader,
  DialogSection,
  FieldStack,
  FormRow,
} from "../dialog-layout/sections";
type ElectronOnlyProps = {
  browser?: unknown;
  chromeExtension?: unknown;
  children?: ReactNode;
  extension?: unknown;
  electron?: unknown;
};
type DialogFooterProps = HTMLAttributes<HTMLDivElement> & {
  expandSingleButton?: boolean;
};
function ElectronOnly({ children, electron }: ElectronOnlyProps) {
  return electron ? <>{children}</> : null;
}
function DialogFooter({
  children,
  className,
  expandSingleButton = true,
}: DialogFooterProps) {
  const childrenArray = React.Children.toArray(children);
  const buttonCount = childrenArray.reduce(
    (count, child) =>
      React.isValidElement(child) && child.type === Button ? count + 1 : count,
    0,
  );
  const renderedChildren = childrenArray.map((child) => {
    if (!React.isValidElement(child) || child.type !== Button) return child;
    return React.cloneElement(child, {
      size: child.props.size ?? "medium",
      className: clsx(
        child.props.className,
        expandSingleButton && buttonCount === 1 && "w-full justify-center",
      ),
    });
  });
  return (
    <div
      className={clsx("flex w-full items-center justify-end gap-3", className)}
    >
      {renderedChildren}
    </div>
  );
}
function initElectronOnlyRuntime(): void {}
function initDialogLayoutSectionsRuntime(): void {}
function initDialogLayoutRuntime(): void {}
function initDialogPrimitivesRuntime(): void {}
export {
  DialogRoot,
  DialogSection,
  initElectronOnlyRuntime,
  initDialogLayoutSectionsRuntime,
  DialogDescription,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
  DialogHeader,
  DIALOG_OVERLAY_CLASS_NAME,
  DialogContent,
  DialogBody,
  FieldStack,
  initDialogLayoutRuntime,
  DialogFooter,
  FormRow,
  DIALOG_FOOTER_BUTTON_CLASS,
  Dialog,
  initDialogPrimitivesRuntime,
  ElectronOnly,
};
