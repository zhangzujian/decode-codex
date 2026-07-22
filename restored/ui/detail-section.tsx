// Restored from ref/webview/assets/detail-section-8pmh4WsR.js
// Detail-page container, section header, and collapsible section primitives.
import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "./menu-current";
const DETAIL_PAGE_CONTENT_CLASS =
  "flex flex-col gap-[var(--detail-page-section-gap)]";
type DetailPageContentProps = {
  children?: ReactNode;
};
type DetailSectionHeaderProps = {
  action?: ReactNode;
  as?: "div" | "summary";
  count?: ReactNode;
  showDivider?: boolean;
  sticky?: boolean;
  title?: ReactNode;
};
type DetailSectionProps = {
  actions?: ReactNode;
  children?: ReactNode;
  collapsible?: boolean;
  count?: ReactNode;
  disableContentInlineInset?: boolean;
  id?: string;
  title?: ReactNode;
};
function DetailPageContent({ children }: DetailPageContentProps) {
  return (
    <div
      className={clsx(
        DETAIL_PAGE_CONTENT_CLASS,
        "@container mx-auto w-full max-w-[var(--thread-content-max-width)] [--detail-page-inline-inset:var(--padding-row-x)] [--detail-page-section-gap:calc(var(--spacing)*6)]",
      )}
    >
      {children}
    </div>
  );
}
function DetailSectionHeader({
  action,
  as = "div",
  count,
  showDivider = true,
  sticky,
  title,
}: DetailSectionHeaderProps) {
  const Component = as;
  const Title = as === "summary" ? "span" : "h2";
  const Action = as === "summary" ? "span" : "div";
  return (
    <Component
      className={clsx(
        "flex items-center justify-between gap-3 pr-0.5 pb-2 text-token-foreground [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
        as === "summary" && "cursor-interaction list-none marker:hidden",
        sticky &&
          "relative sticky top-0 z-10 bg-token-main-surface-primary after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-token-main-surface-primary after:content-['']",
        showDivider && "border-b border-token-border-light",
      )}
      data-slot="section-header"
    >
      <Title className="flex min-h-7 items-center gap-1.5 text-lg leading-6 font-medium">
        {title}
        {count == null ? null : (
          <span className="text-token-input-placeholder-foreground">
            {count}
          </span>
        )}
      </Title>
      {action == null ? null : <Action className="shrink-0">{action}</Action>}
    </Component>
  );
}
function DetailSection({
  actions,
  children,
  collapsible,
  count,
  disableContentInlineInset = false,
  id,
  title,
}: DetailSectionProps) {
  const Component = collapsible ? "details" : "section";
  const HeaderComponent = collapsible ? "summary" : "div";
  const headerActions =
    actions == null ? null : (
      <span
        className="flex items-center gap-2"
        onClick={(event) => {
          if (collapsible) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        onKeyDown={(event) => {
          if (collapsible) event.stopPropagation();
        }}
      >
        {actions}
      </span>
    );
  return (
    <Component
      {...(collapsible
        ? {
            open: true,
          }
        : {})}
      id={id}
      className="group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]"
    >
      <DetailSectionHeader
        action={headerActions}
        as={HeaderComponent}
        count={count}
        title={
          <>
            {title}
            {collapsible ? (
              <ChevronDownIcon className="icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none" />
            ) : null}
          </>
        }
      />
      <div
        className={clsx(
          "flex flex-col gap-1",
          !disableContentInlineInset &&
            "px-[var(--detail-page-inline-inset,0px)]",
        )}
      >
        {children}
      </div>
    </Component>
  );
}
function initDetailSectionHeaderRuntime(): void {}
function initDetailSectionRuntime(): void {}
function initDetailPageContentRuntime(): void {}
export {
  DETAIL_PAGE_CONTENT_CLASS,
  initDetailSectionHeaderRuntime,
  initDetailSectionRuntime,
  DetailPageContent,
  DetailSectionHeader,
  initDetailPageContentRuntime,
  DetailSection,
};
