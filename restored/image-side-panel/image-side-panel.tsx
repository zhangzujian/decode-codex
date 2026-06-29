// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// The image side panel: toolbar (comment / resize / download), the image surface
// or comment-editing surface, a generated-image viewer with a thumbnail strip,
// and the right-panel tab content wrapper.
import { useRef, useState } from "react";
import type {
  HTMLAttributeReferrerPolicy,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent,
  UIEvent,
} from "react";
import { FormattedMessage, useIntl, defineMessage } from "../vendor/react-intl";
import {
  AspectRatioSquareIcon,
  AspectRatioPortraitIcon,
  AspectRatioStoryIcon,
  AspectRatioLandscapeIcon,
  AspectRatioWidescreenIcon,
  ResizeImageIcon,
} from "./aspect-ratio-icons";
import { ImageCommentSurface } from "./image-comment-surface";
import {
  startImageCommentDraft,
  cancelImageCommentDraft,
  commitImageCommentDraft,
  type ImageComment,
} from "./image-comment-draft-store";
import { downloadImage } from "./download-image";
import { startComposerTurn } from "./start-composer-turn";
import { getWorktreeSubmitToastMessage } from "./submit-toast-messages";
import {
  useScope,
  appScopeAtom,
  composerScopeAtom,
  useComposerStateValue,
  imageCommentDraftAtom,
  composerModeAtom,
  useActiveConversationId,
  useQueryClient,
  useConversationAtomValue,
  conversationHostIdAtom,
  useHost,
  useConversationMeta,
  useActiveCollaborationMode,
  usePermissionSettings,
  useServiceTierSettings,
  generateId,
  getAbsoluteImageFilePath,
  toastControllerAtom,
  loadImageFileDataUrl,
  useImagePreviewSources,
  getConversationManager,
  conversationManagerAtom,
  DownloadIcon,
  CommentIcon,
  Button,
  Dropdown,
  DropdownMenu,
  PlatformGate,
  OpenImageInButton,
  MotionButton,
  getPreviewTabPanel,
  findPreviewTabPanelSide,
} from "../boundaries/onboarding-commons-externals.facade";

const THUMBNAIL_SIZE = 46;
const THUMBNAIL_SLOT_SIZE = 54;
const THUMBNAIL_MASK =
  "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)";

const ASPECT_RATIO_OPTIONS = [
  {
    icon: AspectRatioSquareIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.square",
      defaultMessage: "Square",
      description: "Label for the 1:1 image resize option.",
    }),
    ratio: "1:1",
  },
  {
    icon: AspectRatioPortraitIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.portrait",
      defaultMessage: "Portrait",
      description: "Label for the 3:4 image resize option.",
    }),
    ratio: "3:4",
  },
  {
    icon: AspectRatioStoryIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.story",
      defaultMessage: "Story",
      description: "Label for the 9:16 image resize option.",
    }),
    ratio: "9:16",
  },
  {
    icon: AspectRatioLandscapeIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.landscape",
      defaultMessage: "Landscape",
      description: "Label for the 4:3 image resize option.",
    }),
    ratio: "4:3",
  },
  {
    icon: AspectRatioWidescreenIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.widescreen",
      defaultMessage: "Widescreen",
      description: "Label for the 16:9 image resize option.",
    }),
    ratio: "16:9",
  },
];

function getFileNameFromUrl(url: string): string | null {
  if (url.startsWith("data:")) return null;
  const lastSegment = url.split(/[?#]/, 1)[0].split(/[\\/]/).at(-1);
  if (lastSegment == null || lastSegment.length === 0) return null;
  try {
    return decodeURIComponent(lastSegment);
  } catch {
    return lastSegment;
  }
}

function getFileExtension(value: string): string | null {
  const extension =
    value.match(/\.([a-z0-9]+)$/i)?.[1] ??
    /^data:image\/([a-z0-9.+-]+)[;,]/i.exec(value)?.[1];
  if (extension == null) return null;
  return extension.toLowerCase() === "jpeg" ? "jpg" : extension.toLowerCase();
}

function deriveDownloadFileName(src: string, alt: string): string {
  const fileName = getFileNameFromUrl(src);
  const baseName = alt.trim().length > 0 ? alt.trim() : (fileName ?? "image");
  return getFileExtension(baseName) == null
    ? `${baseName}.${getFileExtension(fileName ?? src) ?? "png"}`
    : baseName;
}

function buildResizeContext({
  attachmentSrc,
  prompt,
}: {
  attachmentSrc: string;
  prompt: string;
}) {
  return {
    prompt,
    addedFiles: [],
    fileAttachments: [],
    ideContext: null,
    inAppBrowserContext: null,
    imageAttachments: [{ id: generateId(), src: attachmentSrc }],
    selectedTextAttachments: [],
    pullRequestChecks: [],
    pullRequestMergeConflict: null,
  };
}

interface SendResizePromptArgs {
  scope: any;
  conversationId: string;
  hostId: string;
  attachmentSrc: string;
  cwd: string;
  agentMode: unknown;
  permissionProfileId: string | null;
  serviceTier: unknown;
  shouldSendPermissionOverrides: boolean;
  activeCollaborationMode: unknown;
  prompt: string;
}

async function sendResizePrompt({
  scope,
  conversationId,
  hostId,
  attachmentSrc,
  cwd,
  agentMode,
  permissionProfileId,
  serviceTier,
  shouldSendPermissionOverrides,
  activeCollaborationMode,
  prompt,
}: SendResizePromptArgs): Promise<void> {
  await startComposerTurn({
    scope,
    manager:
      getConversationManager(scope, conversationId) ??
      scope.get(conversationManagerAtom),
    hostId,
    context: buildResizeContext({ attachmentSrc, prompt }),
    targetConversationId: conversationId,
    cwd,
    agentMode,
    permissionProfileId,
    serviceTier,
    shouldSendPermissionOverrides,
    activeCollaborationMode,
  });
}

export interface ImageSidePanelProps {
  alt: string;
  attachmentSrc: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  src: string;
  downloadSrc?: string;
}

export function ImageSidePanel({
  alt,
  attachmentSrc,
  referrerPolicy,
  src,
  downloadSrc = src,
}: ImageSidePanelProps) {
  const appScope = useScope(appScopeAtom);
  const composerScope = useScope(composerScopeAtom);
  const imageCommentDraft = useComposerStateValue(imageCommentDraftAtom);
  const composerMode = useComposerStateValue(composerModeAtom);
  const conversationId = useActiveConversationId(appScope.value);
  const queryClient = useQueryClient();
  const intl = useIntl();
  const hostId =
    useConversationAtomValue(conversationHostIdAtom, conversationId) ?? "local";
  const host = useHost(hostId);
  const conversation = useConversationMeta(conversationId);
  const { activeMode } = useActiveCollaborationMode(conversationId);
  const { agentMode, permissionProfileId, shouldSendPermissionOverrides } =
    usePermissionSettings({ conversationId, hostId: conversation.hostId });
  const { serviceTierSettings } = useServiceTierSettings(conversationId);
  const [isResizing, setIsResizing] = useState(false);
  const [commentAttachmentId, setCommentAttachmentId] = useState(() =>
    generateId(),
  );

  const canResize =
    attachmentSrc.trim().length > 0 &&
    conversationId != null &&
    conversation.cwd != null;
  const downloadFileName = deriveDownloadFileName(src, alt);
  const absoluteImageFilePath = getAbsoluteImageFilePath(attachmentSrc);
  const showOpenInButton =
    host.kind === "local" &&
    host.id === hostId &&
    absoluteImageFilePath != null;
  const isCloudComposer = composerMode === "cloud";
  const comments: ImageComment[] = imageCommentDraft?.comments ?? [];
  const isCommentMode =
    imageCommentDraft != null &&
    imageCommentDraft.attachmentSrc === attachmentSrc;
  const attachmentId = isCommentMode
    ? imageCommentDraft.attachmentId
    : commentAttachmentId;

  const onUploadFailure = () => {
    appScope.get(toastControllerAtom).danger(
      intl.formatMessage({
        id: "imageSidePanel.commentUploadFailure",
        defaultMessage: "Failed to add image comment",
        description:
          "Error shown when the image required for a comment could not be attached to the composer.",
      }),
    );
    commitComments([]);
  };

  const commitComments = (nextComments: ImageComment[]) => {
    commitImageCommentDraft(
      {
        absoluteImageFilePath,
        attachmentId,
        attachmentSrc,
        composerScope,
        downloadFileName,
        downloadSrc,
        hostId,
        isCloudComposer,
        onUploadFailure,
        queryClient,
        src,
      },
      nextComments,
    );
  };

  const applyResize = async (aspectRatio: string) => {
    if (!canResize || conversationId == null || conversation.cwd == null)
      return;
    setIsResizing(true);
    try {
      await sendResizePrompt({
        scope: appScope,
        conversationId,
        hostId: conversation.hostId,
        attachmentSrc,
        cwd: conversation.cwd,
        agentMode,
        permissionProfileId,
        serviceTier: serviceTierSettings.serviceTierForRequest,
        shouldSendPermissionOverrides,
        activeCollaborationMode: activeMode,
        prompt: intl.formatMessage(
          {
            id: "imageSidePanel.resizePrompt",
            defaultMessage: "Make the aspect ratio {aspectRatio}",
            description:
              "Instruction sent when the user resizes an image from the image side panel.",
          },
          { aspectRatio },
        ),
      });
    } catch (error) {
      appScope
        .get(toastControllerAtom)
        .danger(getWorktreeSubmitToastMessage(error, intl));
    } finally {
      setIsResizing(false);
    }
  };

  const onDownloadFailure = () => {
    appScope.get(toastControllerAtom).danger(
      intl.formatMessage({
        id: "imageSidePanel.downloadFailure",
        defaultMessage: "Could not download image",
        description: "Error shown when the image toolbar download fails.",
      }),
    );
  };

  const handleDownload = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (absoluteImageFilePath == null) {
      if (
        await downloadImage({
          downloadSrc,
          suggestedFilename: downloadFileName,
        })
      )
        return;
      onDownloadFailure();
      return;
    }
    const dataUrl = await loadImageFileDataUrl(
      absoluteImageFilePath,
      hostId,
      queryClient,
    );
    if (dataUrl == null) {
      onDownloadFailure();
      return;
    }
    if (
      !(await downloadImage({
        downloadSrc: dataUrl,
        suggestedFilename: downloadFileName,
      }))
    ) {
      onDownloadFailure();
    }
  };

  const downloadLink = (
    <a
      className="no-drag flex aspect-square h-token-button-composer-sm cursor-interaction items-center justify-center gap-1 rounded-full border border-token-border border-transparent p-0 whitespace-nowrap !text-token-foreground select-none visited:!text-token-foreground hover:bg-token-list-hover-background hover:!text-token-foreground focus:!text-token-foreground focus:outline-none"
      href={downloadSrc}
      download={downloadFileName}
      aria-label={intl.formatMessage({
        id: "imageSidePanel.download",
        defaultMessage: "Download",
        description: "Toolbar action that downloads the current image.",
      })}
      onClick={handleDownload}
    >
      <DownloadIcon className="icon-xs" />
    </a>
  );

  return (
    <div className="flex h-full min-h-0 flex-col bg-token-bg-primary pb-[var(--right-panel-composer-overlay-reserve,0px)]">
      {isCommentMode ? (
        <div className="flex shrink-0 flex-col items-center gap-2 px-4 pt-4">
          <div className="flex w-fit items-center gap-0.5 rounded-full bg-token-editor-background/95 p-0.5 shadow-md ring-1 ring-token-border-light backdrop-blur-sm">
            <span className="px-1.5 text-base leading-[18px] text-token-charts-blue">
              <FormattedMessage
                id="imageSidePanel.commentCount"
                defaultMessage="{count, plural, one {# comment} other {# comments}}"
                description="Count of comments attached to the image while image comment mode is active."
                values={{ count: comments.length }}
              />
            </span>
            <Button
              className="!text-base"
              color="ghostActive"
              size="composerSm"
              onClick={() => {
                cancelImageCommentDraft(composerScope, attachmentSrc);
              }}
            >
              <FormattedMessage
                id="imageSidePanel.cancelCommentMode"
                defaultMessage="Cancel"
                description="Toolbar action that exits image comment mode."
              />
            </Button>
          </div>
          {comments.length === 0 ? (
            <p className="text-center text-sm text-token-text-tertiary">
              <FormattedMessage
                id="imageSidePanel.commentHelperDesktop"
                defaultMessage="Click on the image to add comments"
                description="Helper text shown in image comment mode before the user has added any comments on desktop."
              />
            </p>
          ) : null}
        </div>
      ) : (
        <div className="@container relative flex shrink-0 justify-center gap-2 px-4 pt-4">
          <div className="flex w-fit items-center gap-0.5 rounded-full bg-token-editor-background/95 p-0.5 shadow-md ring-1 ring-token-border-light backdrop-blur-sm">
            <Button
              className="!text-base"
              color="ghostActive"
              size="composerSm"
              onClick={() => {
                setCommentAttachmentId(generateId());
                startImageCommentDraft(
                  composerScope,
                  commentAttachmentId,
                  attachmentSrc,
                );
              }}
            >
              <CommentIcon className="icon-xs" />
              <FormattedMessage
                id="imageSidePanel.comment"
                defaultMessage="Comment"
                description="Toolbar action that enters image comment mode."
              />
            </Button>
            <Dropdown
              align="center"
              contentWidth="xs"
              side="bottom"
              triggerButton={
                <Button
                  className="!text-base"
                  color="ghostActive"
                  disabled={!canResize}
                  loading={isResizing}
                  size="composerSm"
                >
                  <ResizeImageIcon className="icon-xs" />
                  <FormattedMessage
                    id="imageSidePanel.resize"
                    defaultMessage="Resize"
                    description="Toolbar action that resizes the current image."
                  />
                </Button>
              }
            >
              {ASPECT_RATIO_OPTIONS.map(({ icon, label, ratio }) => (
                <DropdownMenu.Item
                  key={ratio}
                  LeftIcon={icon}
                  onSelect={() => {
                    applyResize(ratio);
                  }}
                >
                  <span className="flex w-full items-center justify-between gap-4">
                    <FormattedMessage {...label} />
                    <span className="text-token-text-tertiary">{ratio}</span>
                  </span>
                </DropdownMenu.Item>
              ))}
            </Dropdown>
            {downloadLink}
          </div>
          <PlatformGate electron>
            {showOpenInButton ? (
              <div className="absolute right-4 [@container_(max-width:360px)]:static">
                <OpenImageInButton
                  hostId={hostId}
                  path={absoluteImageFilePath}
                  showLabel
                />
              </div>
            ) : null}
          </PlatformGate>
        </div>
      )}
      {isCommentMode ? (
        <ImageCommentSurface
          alt={alt}
          comments={comments}
          referrerPolicy={referrerPolicy}
          src={src}
          onDeleteComment={(commentId) => {
            commitComments(
              comments.filter((comment) => comment.id !== commentId),
            );
          }}
          onSubmitComment={(comment) => {
            const nextComment = { ...comment, id: comment.id ?? generateId() };
            commitComments(
              comment.id == null
                ? [...comments, nextComment]
                : comments.map((existing) =>
                    existing.id === comment.id ? nextComment : existing,
                  ),
            );
          }}
        />
      ) : (
        <div className="flex min-h-0 flex-1 items-center justify-center p-4">
          <img
            alt={alt}
            className="max-h-full max-w-full rounded-xl object-contain"
            referrerPolicy={referrerPolicy}
            src={src}
          />
        </div>
      )}
    </div>
  );
}

export interface GeneratedImage {
  id: string;
  alt: string;
  src: string;
  previewSrc: string;
  tabTitle?: string;
}

export interface ImageSidePanelViewerProps {
  fallbackImage: ImageSidePanelProps;
  images: GeneratedImage[];
  imageAssetResolver: unknown;
  initialImageId: string;
  onActiveImageChange?: (image: GeneratedImage) => void;
}

export function ImageSidePanelViewer({
  fallbackImage,
  images,
  imageAssetResolver,
  initialImageId,
  onActiveImageChange,
}: ImageSidePanelViewerProps) {
  const appScope = useScope(appScopeAtom);
  const conversationId = useActiveConversationId(appScope.value);
  const [activeImageId, setActiveImageId] = useState(initialImageId);
  const activeImage =
    images.find((image) => image.id === activeImageId) ?? images[0];

  if (conversationId == null || activeImage == null) {
    return <ImageSidePanel {...fallbackImage} />;
  }

  const selectImage = (image: GeneratedImage) => {
    if (image.id !== activeImage.id) {
      setActiveImageId(image.id);
      onActiveImageChange?.(image);
    }
  };

  const thumbnailStrip =
    images.length > 1 ? (
      <ImageThumbnailStrip
        activeId={activeImage.id}
        images={images}
        conversationId={conversationId}
        imageAssetResolver={imageAssetResolver}
        onSelect={selectImage}
      />
    ) : null;

  return (
    <div className="flex h-full min-h-0 bg-token-bg-primary">
      {thumbnailStrip}
      <div className="min-w-0 flex-1">
        <ActiveGeneratedImage
          key={activeImage.id}
          activeImage={activeImage}
          conversationId={conversationId}
          imageAssetResolver={imageAssetResolver}
        />
      </div>
    </div>
  );
}

interface ImageThumbnailStripProps {
  activeId: string;
  images: GeneratedImage[];
  conversationId: string;
  imageAssetResolver: unknown;
  onSelect: (image: GeneratedImage) => void;
}

function ImageThumbnailStrip({
  activeId,
  images,
  conversationId,
  imageAssetResolver,
  onSelect,
}: ImageThumbnailStripProps) {
  const activeIndex = Math.max(
    images.findIndex((image) => image.id === activeId),
    0,
  );
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (index: number) => {
    const image = images[index];
    if (image != null) {
      onSelect(image);
      scrollContainerRef.current?.scrollTo({
        top: index * THUMBNAIL_SLOT_SIZE,
      });
    }
  };

  const containerRefCallback = (element: HTMLDivElement | null) => {
    if (element == null || scrollContainerRef.current != null) return;
    element.scrollTop = activeIndex * THUMBNAIL_SLOT_SIZE;
    scrollContainerRef.current = element;
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const image =
      images[Math.round(event.currentTarget.scrollTop / THUMBNAIL_SLOT_SIZE)];
    if (image != null && image.id !== activeId) onSelect(image);
  };

  const spacerStyle = { height: `calc(50% - ${THUMBNAIL_SIZE / 2}px)` };

  return (
    <div
      ref={containerRefCallback}
      className="h-full w-24 shrink-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ maskImage: THUMBNAIL_MASK, WebkitMaskImage: THUMBNAIL_MASK }}
      onScroll={handleScroll}
    >
      <div style={spacerStyle} />
      {images.map((image, index) => {
        const isActive = image.id === activeId;
        return (
          <MotionButton
            key={image.id}
            type="button"
            animate={{
              opacity: isActive ? 1 : 0.34,
              scale: isActive ? 1.2 : 0.95,
            }}
            aria-current={isActive ? "true" : undefined}
            aria-label={image.alt}
            className="mx-auto mb-2 flex cursor-interaction overflow-hidden rounded-lg border border-black/10 bg-token-bg-tertiary focus:outline-none focus-visible:ring-1 focus-visible:ring-token-foreground focus-visible:ring-offset-1 dark:border-white/10"
            style={{ height: THUMBNAIL_SIZE, width: THUMBNAIL_SIZE }}
            transition={{ duration: 0.12 }}
            onClick={() => {
              scrollToIndex(index);
            }}
            onKeyDown={(event: ReactKeyboardEvent<HTMLButtonElement>) => {
              const delta =
                event.key === "ArrowUp" || event.key === "ArrowLeft"
                  ? -1
                  : event.key === "ArrowDown" || event.key === "ArrowRight"
                    ? 1
                    : 0;
              if (delta !== 0) {
                event.preventDefault();
                scrollToIndex(
                  Math.min(Math.max(activeIndex + delta, 0), images.length - 1),
                );
              }
            }}
          >
            <ImageThumbnail
              image={image}
              conversationId={conversationId}
              imageAssetResolver={imageAssetResolver}
            />
          </MotionButton>
        );
      })}
      <div style={spacerStyle} />
    </div>
  );
}

interface ActiveGeneratedImageProps {
  activeImage: GeneratedImage;
  conversationId: string;
  imageAssetResolver: unknown;
}

function ActiveGeneratedImage({
  activeImage,
  conversationId,
  imageAssetResolver,
}: ActiveGeneratedImageProps) {
  const { downloadSrc, previewSrc } = useImagePreviewSources({
    src: activeImage.src,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });
  const resolvedDownloadSrc = downloadSrc ?? previewSrc ?? activeImage.src;
  const resolvedSrc = previewSrc ?? activeImage.src;

  return (
    <ImageSidePanel
      alt={activeImage.alt}
      attachmentSrc={activeImage.src}
      downloadSrc={resolvedDownloadSrc}
      referrerPolicy="no-referrer"
      src={resolvedSrc}
    />
  );
}

interface ImageThumbnailProps {
  image: GeneratedImage;
  conversationId: string;
  imageAssetResolver: unknown;
}

function ImageThumbnail({
  image,
  conversationId,
  imageAssetResolver,
}: ImageThumbnailProps) {
  const { previewSrc } = useImagePreviewSources({
    src: image.previewSrc,
    conversationId,
    imageAssetResolver,
    shouldLoadFileDataUrl: false,
  });
  return (
    <img
      alt=""
      className="size-full rounded-lg object-cover"
      decoding="async"
      loading="lazy"
      referrerPolicy="no-referrer"
      src={previewSrc ?? image.previewSrc}
    />
  );
}

export interface ImagePreviewTabContentProps extends ImageSidePanelProps {
  generatedImages?: GeneratedImage[];
  imageAssetResolver?: unknown;
  initialImageId?: string;
  tabId: string;
}

export function ImagePreviewTabContent({
  alt,
  attachmentSrc,
  downloadSrc,
  generatedImages,
  imageAssetResolver,
  initialImageId,
  referrerPolicy,
  src,
  tabId,
}: ImagePreviewTabContentProps) {
  const appScope = useScope(appScopeAtom);

  if (generatedImages != null && initialImageId != null) {
    return (
      <ImageSidePanelViewer
        fallbackImage={{ alt, attachmentSrc, downloadSrc, referrerPolicy, src }}
        images={generatedImages}
        imageAssetResolver={imageAssetResolver}
        initialImageId={initialImageId}
        onActiveImageChange={(image) => {
          getPreviewTabPanel(
            findPreviewTabPanelSide(appScope, tabId) ?? "right",
          ).updateTab(appScope, tabId, {
            title: image.tabTitle,
            tooltip: image.tabTitle,
          });
        }}
      />
    );
  }

  return (
    <ImageSidePanel
      alt={alt}
      attachmentSrc={attachmentSrc}
      downloadSrc={downloadSrc}
      referrerPolicy={referrerPolicy}
      src={src}
    />
  );
}
