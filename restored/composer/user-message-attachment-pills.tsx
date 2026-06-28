// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Composer attachment pill primitives: the base pill/button surface, a popover
// variant, file attachments, comment/annotation chips, and selected-text chips.
import {
  type ButtonHTMLAttributes,
  type ComponentType,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
  type Ref,
  type SVGProps,
  useEffect,
  useRef,
  useState,
} from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { XIcon } from "../icons/x-icon";
import { ImagesIcon } from "../icons/images-icon";
import { PencilIcon } from "../icons/pencil-icon";
import {
  formatCommentAttachmentKindCount,
  formatRemoveCommentAttachmentLabel,
} from "../ui/comment-attachment-labels";
import { vscodeApiU as TimeConstants } from "../boundaries/vscode-api";
// Producer imports still being restored from sibling chunks.
import {
  resolveFileIcon,
  codexHostRequest,
  AttachmentCardTile,
  AttachmentCardSurface,
  RemoveAttachmentCardButton,
} from "../boundaries/user-message-attachments.facade";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type AttachmentLayout = "pill" | "card";
type CommentAttachmentKind = "annotation" | "comment";

const POPOVER_CLOSE_DELAY_MS = 100;

export function MessageSquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.2379 7.69907C17.2379 6.95248 17.237 6.43448 17.2041 6.03179C17.1799 5.73568 17.1402 5.53676 17.0862 5.38579L17.0277 5.24941C16.866 4.93211 16.6201 4.66653 16.3181 4.4814L16.1859 4.40757C16.02 4.32306 15.7978 4.26345 15.4035 4.2312C15.0009 4.19831 14.4826 4.19736 13.7362 4.19736H7.26086C6.51427 4.19736 5.99627 4.1983 5.59357 4.2312C5.29763 4.25539 5.09852 4.29409 4.94758 4.3481L4.8112 4.40757C4.49383 4.56929 4.22831 4.81512 4.04318 5.11714L3.96936 5.24941C3.88482 5.41532 3.82523 5.6373 3.79299 6.03179C3.76009 6.43448 3.75915 6.95248 3.75915 7.69907V12.8732C3.75915 13.548 3.76318 13.7789 3.80017 13.956L3.834 14.0944C4.03021 14.777 4.58934 15.3012 5.29211 15.448L5.44079 15.4695C5.61188 15.4861 5.86792 15.4879 6.3739 15.4879C6.58107 15.4879 6.7238 15.4877 6.86506 15.4992L7.05373 15.5197C7.49382 15.5811 7.91814 15.7309 8.30061 15.9596L8.48518 16.0796C8.55028 16.1245 8.62134 16.1752 8.70564 16.2355L10.0909 17.225L10.3996 17.4382C10.4603 17.4756 10.4695 17.4737 10.455 17.47L10.498 17.4751C10.5127 17.4752 10.5278 17.4737 10.5421 17.47L10.5965 17.4382C10.6645 17.3964 10.7522 17.3349 10.9061 17.225L12.2914 16.2355L12.5109 16.0796C12.576 16.0346 12.6356 15.996 12.6965 15.9596L12.8626 15.8663C13.2563 15.6605 13.6879 15.5354 14.132 15.4992L14.3525 15.49C14.4315 15.4887 14.5187 15.4879 14.6221 15.4879C15.2969 15.4879 15.5279 15.4849 15.705 15.448L15.8434 15.4131C16.5259 15.217 17.05 14.6586 17.1969 13.956L17.2184 13.8063C17.2351 13.6352 17.2379 13.379 17.2379 12.8732V7.69907ZM10.6785 10.6758C11.0641 10.6758 11.3768 10.9884 11.3768 11.3741C11.3768 11.7597 11.0641 12.0724 10.6785 12.0724H7.69665C7.31102 12.0724 6.99836 11.7597 6.99836 11.3741C6.99836 10.9884 7.31102 10.6758 7.69665 10.6758H10.6785ZM13.3035 7.17612L13.444 7.19048C13.7623 7.2555 14.0018 7.5369 14.0018 7.87442C14.0016 8.21182 13.7622 8.49341 13.444 8.55835L13.3035 8.57271H7.69665C7.31113 8.57271 6.99854 8.25989 6.99836 7.87442C6.99836 7.48878 7.31102 7.17612 7.69665 7.17612H13.3035ZM18.6345 12.8732C18.6345 13.3267 18.6359 13.6704 18.6058 13.9632L18.5637 14.2411C18.3105 15.4535 17.4066 16.4171 16.2289 16.7553L15.99 16.8148C15.6362 16.8886 15.2264 16.8845 14.6221 16.8845L14.2458 16.8917C14.0252 16.9097 13.8098 16.9651 13.6091 17.0558L13.4132 17.1583L13.1025 17.3716L11.7182 18.3611C11.504 18.5141 11.2697 18.6916 11.0015 18.7876L10.8846 18.8235C10.6945 18.8717 10.4977 18.8845 10.3042 18.8605L10.1125 18.8235C9.87394 18.7631 9.66181 18.6313 9.4675 18.4954L9.27883 18.3611L7.89353 17.3716L7.58386 17.1583C7.39381 17.0447 7.18578 16.9643 6.96965 16.9214L6.75124 16.8917C6.67965 16.8859 6.60316 16.8845 6.3739 16.8845C5.92038 16.8845 5.57673 16.887 5.28391 16.8568L5.00603 16.8148C3.79382 16.5615 2.82999 15.6574 2.49177 14.48L2.43332 14.2411C2.3594 13.8871 2.36257 13.4777 2.36257 12.8732V7.69907C2.36257 6.97553 2.36188 6.39072 2.40051 5.91797C2.43979 5.43729 2.52314 5.01117 2.72453 4.61572L2.85271 4.38604C3.172 3.86554 3.63042 3.4415 4.17751 3.16274L4.32722 3.09302C4.68032 2.94157 5.05908 2.8731 5.47976 2.83872C5.95251 2.8001 6.53731 2.80078 7.26086 2.80078H13.7362C14.4596 2.80078 15.0446 2.8001 15.5173 2.83872C15.998 2.87802 16.4241 2.9613 16.8196 3.16274L17.0482 3.29092C17.5689 3.61023 17.9927 4.06846 18.2715 4.61572L18.3423 4.76543C18.4937 5.11849 18.5612 5.49736 18.5955 5.91797C18.6342 6.39072 18.6345 6.97553 18.6345 7.69907V12.8732Z"
        fill="currentColor"
      />
    </svg>
  );
}

export interface AttachmentPillProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  Icon?: IconComponent;
  icon?: ReactNode;
  children?: ReactNode;
  onRemove?: () => void;
  onRemoveAriaLabel?: string;
  onClick?: () => void;
  layout?: AttachmentLayout;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
}

export function AttachmentPill({
  Icon,
  icon,
  children,
  onRemove,
  onRemoveAriaLabel,
  onClick,
  layout = "pill",
  className,
  ref,
  ...rest
}: AttachmentPillProps) {
  const isCard = layout === "card";
  const handleRemoveKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      onRemove?.();
    }
  };

  const surfaceClassName = clsx(
    "composer-attachment-surface text-token-foreground group relative transition-colors duration-200 focus:outline-none",
    isCard
      ? "border-token-border inline-flex w-fit max-w-64 flex-shrink-0 items-center gap-2.5 overflow-visible rounded-lg border bg-token-input-background p-3 pr-8 text-left shadow-sm"
      : "bg-token-dropdown-background border-token-border hover:bg-token-menu-background inline-flex max-w-[320px] items-center gap-1 rounded-full border px-2 py-1.5 text-sm",
    onClick && "cursor-interaction",
    !onClick && "cursor-default",
    className,
  );

  const iconWrapperClassName = clsx(
    "flex-shrink-0",
    isCard
      ? "flex size-10 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary"
      : "text-token-input-placeholder-foreground",
  );
  const iconNode =
    icon ??
    (Icon == null ? null : (
      <Icon className={clsx(isCard ? "size-6" : "icon-2xs")} />
    ));

  const labelClassName = clsx(
    "relative min-w-0 flex-1",
    isCard
      ? "text-size-chat truncate font-medium text-token-foreground"
      : "truncate pr-1 text-sm font-medium",
  );

  const removeNode = onRemove && (
    <div
      role="button"
      tabIndex={0}
      onClick={(event) => {
        event.stopPropagation();
        onRemove();
      }}
      onKeyDown={handleRemoveKeyDown}
      className={clsx(
        "group/remove flex cursor-interaction items-center justify-center",
        isCard
          ? "absolute top-2 right-2 size-4 rounded-full"
          : "pointer-events-none absolute top-1/2 right-1 size-5 -translate-y-1/2 rounded-full opacity-0 before:pointer-events-none before:absolute before:inset-y-0 before:-left-8 before:right-0 before:bg-linear-to-r before:from-transparent before:via-token-dropdown-background before:to-token-dropdown-background before:content-[''] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:before:via-token-menu-background group-hover:before:to-token-menu-background focus-visible:pointer-events-auto focus-visible:opacity-100",
      )}
      aria-label={onRemoveAriaLabel}
    >
      <span
        className={clsx(
          "relative flex items-center justify-center rounded-full",
          isCard
            ? "size-4 bg-token-foreground text-token-dropdown-background shadow-sm"
            : "size-5 border border-token-border bg-token-menu-background group-hover/remove:bg-[color-mix(in_srgb,var(--color-token-menu-background)_88%,var(--color-token-foreground))] group-focus-visible/remove:bg-[color-mix(in_srgb,var(--color-token-menu-background)_88%,var(--color-token-foreground))]",
        )}
      >
        <XIcon
          className={isCard ? "icon-xxs" : "icon-2xs text-token-foreground"}
        />
      </span>
    </div>
  );

  return (
    <button
      ref={ref}
      data-composer-attachment-pill={true}
      type="button"
      className={surfaceClassName}
      onClick={onClick}
      {...rest}
    >
      <div className={iconWrapperClassName}>{iconNode}</div>
      <div className={labelClassName}>{children}</div>
      {removeNode}
    </button>
  );
}

export interface PopoverAttachmentPillProps {
  Icon?: IconComponent;
  icon?: ReactNode;
  label: ReactNode;
  onRemove?: () => void;
  onRemoveAriaLabel?: string;
  popoverClassName?: string;
  popoverContent: ReactNode;
  popoverStyle?: CSSProperties;
}

export function PopoverAttachmentPill({
  Icon,
  icon,
  label,
  onRemove,
  onRemoveAriaLabel,
  popoverClassName = "w-96 gap-2",
  popoverContent,
  popoverStyle,
}: PopoverAttachmentPillProps) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current != null) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    },
    [],
  );

  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current != null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };
  const openPopover = () => {
    cancelScheduledClose();
    setOpen(true);
  };
  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null;
      setOpen(false);
    }, POPOVER_CLOSE_DELAY_MS);
  };

  const iconProps = Icon == null ? { icon } : { Icon };
  const labelNode = (
    <span className="flex max-w-full min-w-0 items-center gap-1">
      <span className="truncate">{label}</span>
    </span>
  );
  const trigger = (
    <div
      className="group relative inline-flex"
      onMouseEnter={openPopover}
      onMouseLeave={scheduleClose}
    >
      <PopoverTrigger asChild>
        <AttachmentPill
          {...iconProps}
          onRemove={onRemove}
          onRemoveAriaLabel={onRemoveAriaLabel}
        >
          {labelNode}
        </AttachmentPill>
      </PopoverTrigger>
    </div>
  );
  const content = (
    <PopoverContent
      align="start"
      side="top"
      sideOffset={4}
      className={popoverClassName}
      style={{
        maxHeight:
          "min(20rem, var(--radix-popover-content-available-height), calc(100vh - 16px))",
        ...popoverStyle,
      }}
      onMouseEnter={openPopover}
      onMouseLeave={scheduleClose}
      onOpenAutoFocus={preventPopoverAutoFocus}
    >
      {popoverContent}
    </PopoverContent>
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      {trigger}
      {content}
    </Popover>
  );
}

function preventPopoverAutoFocus(event: Event) {
  event.preventDefault();
}

function useFolderFileCountQuery(
  folderPath: string,
  hostId: string,
  enabled: boolean,
) {
  return useQuery({
    enabled,
    queryKey: ["folder-file-count", hostId, folderPath],
    queryFn: () =>
      codexHostRequest.fileAttachments.countFolderFiles({ folderPath, hostId }),
    staleTime: TimeConstants.THIRTY_SECONDS,
  });
}

export interface FileAttachmentPillProps {
  filename: string;
  resourcePath?: string;
  folderPath?: string | null;
  folderHostId?: string | null;
  onRemove?: () => void;
  onRemoveAriaLabel?: string;
  onClick?: () => void;
  lineInfo?: string;
  Icon?: IconComponent;
  layout?: AttachmentLayout;
  subtitle?: ReactNode;
}

export function FileAttachmentPill({
  filename,
  resourcePath,
  folderPath,
  folderHostId,
  onRemove,
  onRemoveAriaLabel,
  onClick,
  lineInfo,
  Icon,
  layout = "pill",
  subtitle,
}: FileAttachmentPillProps) {
  const displayPath = resourcePath ?? filename;
  const intl = useIntl();
  const FileIcon: IconComponent = Icon ?? resolveFileIcon(displayPath);
  const isFolder = /[\\/]$/.test(displayPath);

  const removeAriaLabel =
    onRemoveAriaLabel ??
    (onRemove
      ? intl.formatMessage(
          {
            id: "fileAttachment.removeAriaLabel",
            defaultMessage: "Remove {filename}",
            description: "Aria label for the remove file attachment button",
          },
          { filename },
        )
      : undefined);

  if (layout === "card") {
    const extension = getUppercaseExtension(filename);
    const clickOverlay = onClick ? (
      <button
        type="button"
        className="absolute inset-0 cursor-interaction bg-transparent group-hover/file-attachment:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
        onClick={onClick}
        aria-label={filename}
      />
    ) : null;
    const iconNode = (
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
        <FileIcon className="size-6" />
      </span>
    );
    const titleNode = (
      <span className="block max-w-32 truncate">{filename}</span>
    );
    const subtitleNode =
      subtitle ??
      (isFolder ? (
        <FormattedMessage
          id="fileAttachment.folderSubtitle"
          defaultMessage="Folder"
          description="Attachment card subtitle identifying an attached folder"
        />
      ) : (
        formatFileAttachmentSubtitle(extension, lineInfo, intl)
      ));
    const tile = (
      <AttachmentCardTile
        className="pointer-events-none relative z-10 h-full"
        icon={iconNode}
        padding="compact"
        reserveTrailingSpace={onRemove != null}
        title={titleNode}
        subtitle={subtitleNode}
      />
    );
    const removeButton = onRemove ? (
      <RemoveAttachmentCardButton
        className="top-1 right-1 z-20"
        ariaLabel={removeAriaLabel}
        onRemove={onRemove}
      />
    ) : null;
    const card = (
      <AttachmentCardSurface
        as="span"
        className="composer-attachment-surface group/file-attachment relative w-fit max-w-64 flex-shrink-0 bg-token-input-background"
      >
        {clickOverlay}
        {tile}
        {removeButton}
      </AttachmentCardSurface>
    );
    if (!isFolder || folderPath == null || folderHostId == null) return card;
    return (
      <FolderFileCountTooltip folderPath={folderPath} hostId={folderHostId}>
        {card}
      </FolderFileCountTooltip>
    );
  }

  const lineInfoNode = lineInfo ? (
    <span className="shrink-0 font-normal text-token-input-placeholder-foreground">
      <FormattedMessage
        id="fileAttachment.lineInfo"
        defaultMessage="{lineInfo}"
        description="Line range or number for a file attachment, no surrounding punctuation"
        values={{ lineInfo }}
      />
    </span>
  ) : null;
  return (
    <AttachmentPill
      Icon={FileIcon}
      onClick={onClick}
      onRemove={onRemove}
      layout={layout}
      onRemoveAriaLabel={removeAriaLabel}
    >
      <span className="flex max-w-full min-w-0 items-center gap-1">
        <span className="truncate">{filename}</span>
        {lineInfoNode}
      </span>
    </AttachmentPill>
  );
}

interface FolderFileCountTooltipProps {
  children: ReactNode;
  folderPath: string;
  hostId: string;
}

function FolderFileCountTooltip({
  children,
  folderPath,
  hostId,
}: FolderFileCountTooltipProps) {
  const [enabled, setEnabled] = useState(false);
  const queryOptions = useFolderFileCountQuery(folderPath, hostId, enabled);
  const { data } = useSuspenseQuery(queryOptions);
  return (
    <span
      className="contents"
      onBlur={() => setEnabled(false)}
      onFocus={() => setEnabled(true)}
      onPointerEnter={() => setEnabled(true)}
      onPointerLeave={() => setEnabled(false)}
    >
      <Tooltip
        defaultOpen={enabled}
        tooltipContent={
          data == null ? null : <FolderFileCountMessage count={data} />
        }
      >
        {children}
      </Tooltip>
    </span>
  );
}

function FolderFileCountMessage({ count }: { count: number }) {
  if (count === 1000) {
    return (
      <FormattedMessage
        id="fileAttachment.folderFileCountCapped"
        defaultMessage="{count, number}+ files"
        description="Tooltip text showing that an attached folder contains at least the displayed number of files"
        values={{ count }}
      />
    );
  }
  return (
    <FormattedMessage
      id="fileAttachment.folderFileCount"
      defaultMessage="{count, plural, one {# file} other {# files}}"
      description="Tooltip text showing the recursive file count inside an attached folder"
      values={{ count }}
    />
  );
}

function getUppercaseExtension(filename: string): string | null {
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex <= 0 || dotIndex === filename.length - 1
    ? null
    : filename.slice(dotIndex + 1).toUpperCase();
}

function formatFileAttachmentSubtitle(
  extension: string | null,
  lineInfo: string | undefined,
  intl: ReturnType<typeof useIntl>,
): ReactNode {
  if (extension == null) return lineInfo ?? null;
  if (lineInfo == null) return extension;
  return intl.formatMessage(
    {
      id: "fileAttachment.cardSubtitle",
      defaultMessage: "{extension} · {lineInfo}",
      description:
        "File attachment subtitle showing file extension and attached line range",
    },
    { extension, lineInfo },
  );
}

export interface CommentAttachmentPillProps {
  count: number;
  attachmentKind: CommentAttachmentKind;
  icon?: "design-tweak" | "image-comment";
  onRemove?: () => void;
  tooltipContent?: ReactNode;
}

export function CommentAttachmentPill({
  count,
  attachmentKind,
  icon,
  onRemove,
  tooltipContent,
}: CommentAttachmentPillProps) {
  const intl = useIntl();
  const label = formatCommentAttachmentKindCount(intl, attachmentKind, count);
  let pillIcon: IconComponent = MessageSquareIcon;
  switch (icon) {
    case "design-tweak":
      pillIcon = PencilIcon;
      break;
    case "image-comment":
      pillIcon = ImagesIcon;
      break;
  }
  const removeAriaLabel =
    onRemove == null
      ? undefined
      : formatRemoveCommentAttachmentLabel(intl, attachmentKind);

  if (tooltipContent == null) {
    return (
      <FileAttachmentPill
        filename={label}
        Icon={pillIcon}
        onRemove={onRemove}
        onRemoveAriaLabel={removeAriaLabel}
      />
    );
  }
  return (
    <PopoverAttachmentPill
      Icon={pillIcon}
      label={label}
      onRemove={onRemove}
      onRemoveAriaLabel={removeAriaLabel}
      popoverContent={tooltipContent}
    />
  );
}

export interface SelectedTextAttachmentPillProps {
  selections: string[];
  onRemove?: () => void;
}

export function SelectedTextAttachmentPill({
  selections,
  onRemove,
}: SelectedTextAttachmentPillProps) {
  const intl = useIntl();
  if (selections.length === 0) return null;
  const label = intl.formatMessage(
    {
      id: "selectedTextAttachments.numSelections",
      defaultMessage: "{count, plural, one {# selection} other {# selections}}",
      description: "Number of selected text snippets attached to the message",
    },
    { count: selections.length },
  );
  const removeAriaLabel =
    onRemove == null
      ? undefined
      : intl.formatMessage({
          id: "selectedTextAttachments.removeAriaLabel",
          defaultMessage: "Remove selected text attachment",
          description: "Aria label for removing the selected text attachment",
        });
  return (
    <PopoverAttachmentPill
      Icon={MessageSquareIcon}
      label={label}
      onRemove={onRemove}
      onRemoveAriaLabel={removeAriaLabel}
      popoverClassName="w-fit gap-2 px-2 py-1"
      popoverContent={<SelectedTextTooltip selections={selections} />}
      popoverStyle={{
        maxWidth:
          "min(20rem, var(--radix-popover-content-available-width), calc(100vw - 16px))",
      }}
    />
  );
}

export interface SelectedTextTooltipProps {
  selections: string[];
}

export function SelectedTextTooltip({ selections }: SelectedTextTooltipProps) {
  return (
    <div className="flex max-h-56 flex-col gap-1 overflow-y-auto text-left text-sm">
      {selections.map((snippet, index) => (
        <span key={`${index}-${snippet}`} className="line-clamp-3 break-words">
          <FormattedMessage
            id="selectedTextAttachments.tooltipSnippet"
            defaultMessage={"“{text}”"}
            description="Selected text snippet shown inside the selected text attachment tooltip"
            values={{ text: snippet }}
          />
        </span>
      ))}
    </div>
  );
}
