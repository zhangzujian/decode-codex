// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public appshot attachment variants, preview items, and component props.

export type AppshotAttachmentVariant = "composer" | "thread";

export interface AppshotPreviewItem {
  alt: string;
  accessibilityText?: string | null;
  src: string;
}

export interface AppshotAttachmentProps {
  appIconSrc?: string | null;
  appName: string;
  accessibilityText?: string | null;
  previewEnabled?: boolean;
  previewIndex?: number;
  previewItems?: AppshotPreviewItem[];
  screenshotAlt?: string | null;
  screenshotSrc: string;
  transitionSnapshotHeight?: number;
  transitionSnapshotSrc?: string | null;
  variant?: AppshotAttachmentVariant;
  windowTitle?: string | null;
  onRemove?: () => void;
}
