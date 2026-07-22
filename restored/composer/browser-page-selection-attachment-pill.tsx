// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Browser selection attachment shown in the composer tray.

import { FaviconImage } from "../conversations/favicon-image";
import { GlobeIcon } from "../icons/globe-icon";
import { useIntl } from "../vendor/react-intl";
import { PopoverAttachmentPill } from "./popover-attachment-pill";
import { SelectedTextTooltip } from "./selected-text-attachment-pill";

export interface BrowserPageSelectionAttachmentPillProps {
  faviconUrl?: string | null;
  selectedText: string;
  onRemove?: () => void;
}

export function BrowserPageSelectionAttachmentPill({
  faviconUrl,
  selectedText,
  onRemove,
}: BrowserPageSelectionAttachmentPillProps) {
  const intl = useIntl();
  const icon =
    faviconUrl == null ? (
      <GlobeIcon className="icon-2xs" />
    ) : (
      <FaviconImage className="icon-2xs" src={faviconUrl} />
    );
  const label = intl.formatMessage({
    id: "composer.chromeExtensionPageSelection.label",
    defaultMessage: "1 selection",
    description:
      "Attachment pill label for selected text included from the active Chrome tab",
  });
  const removeAriaLabel =
    onRemove == null
      ? undefined
      : intl.formatMessage({
          id: "composer.chromeExtensionPageSelection.removeAriaLabel",
          defaultMessage: "Remove selected text attachment",
          description:
            "Aria label for removing selected text attached from the active Chrome tab",
        });

  return (
    <PopoverAttachmentPill
      icon={icon}
      label={label}
      onRemove={onRemove}
      onRemoveAriaLabel={removeAriaLabel}
      popoverClassName="w-fit gap-2 px-2 py-1"
      popoverContent={<SelectedTextTooltip selections={[selectedText]} />}
      popoverStyle={{
        maxWidth:
          "min(20rem, var(--radix-popover-content-available-width), calc(100vw - 16px))",
      }}
    />
  );
}
