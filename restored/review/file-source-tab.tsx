// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Top-level workspace "file source" tab: resolves the right preview for a path
// (rich preview, unsupported-type notice, oversized-file notice, MCP resource
// view, or code view), and renders the surrounding tab chrome (breadcrumb,
// header actions, file-tree side panel, empty state).
//
// NOTE: leaf renderers, hooks, atoms and host helpers below are intra-chunk
// modules of the same Rolldown commons chunk, imported from the boundary facade
// with readable aliases until their dedicated modules are promoted into
// restored/. Wiring is provisional.
import {
  Fo as useStore,
  Ms as routeAtom,
  Io as useAtomValue,
  g as useIntl,
  u as useHostQuery,
  Po as useThreadQuery,
  ts as parseWorkspacePath,
  o as DEFAULT_HOST_ID,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
import {
  qie as isPreviewableArtifactKind,
  Mre as resolveImagePreviewKind,
  Lre as resolveRichPreviewMode,
  rre as resolveUnsupportedFileType,
  _ae as resolveFileViewer,
  Gre as richPreviewEnabledAtom,
  jw as workspaceRootAtom,
  rC as fileTreeOpenAtom,
  ze as workspaceRootToCwd,
  BS as setFileTreeOpen,
  se as CONTENT_SAMPLE_BYTE_LIMIT,
  $m as CONTENT_SAMPLE_MAX_FILE_BYTES,
  ea as useFeatureGate,
  $ as classNames,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
// Leaf renderers + chrome components (intra-chunk).
import {
  SL as FileSourceStatus,
  RXe as FileSourceCodeView,
  zXe as FileSourceRichPreview,
  BXe as FileSourceMcpResourceView,
  uXe as UnsupportedFileTypeView,
  KXe as FileTooLargeView,
  EXe as FileSourceSidePanel,
  UYe as FilePathBreadcrumb,
  IXe as FileSourceHeaderActions,
  za as Button,
  UN as FilesIcon,
} from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
import { FormattedMessage } from "../vendor/react-intl";

const MAX_PREVIEWABLE_FILE_BYTES = 10485760;

interface FileTabState {
  scrollLeft?: number;
  scrollTop?: number;
}

export interface FileSourceTabProps {
  cwd?: string | null;
  headerActions?: React.ReactNode;
  hostId?: string;
  initialEndLine?: number | null;
  initialLine?: number | null;
  onSelectFile?: (path: string) => void;
  path: string | null;
  setTabState?: (updater: (prev: FileTabState) => FileTabState) => void;
  tabId?: string;
  tabState?: FileTabState;
  workspaceRoot?: string | null;
}

export function FileSourceTab(props: FileSourceTabProps) {
  const {
    cwd,
    headerActions,
    hostId,
    initialEndLine,
    initialLine,
    onSelectFile,
    path,
    setTabState,
    tabId,
    tabState,
    workspaceRoot,
  } = props;
  const resolvedHostId = hostId === undefined ? DEFAULT_HOST_ID : hostId;

  if (path == null) {
    return (
      <FileSourceTabShell
        cwd={cwd}
        hostId={resolvedHostId}
        onSelectFile={onSelectFile}
        path={null}
        showGitBlameControl={false}
        workspaceRoot={workspaceRoot}
      >
        <FileSourceEmptyState />
      </FileSourceTabShell>
    );
  }

  return (
    <FileSourceTabContent
      cwd={cwd}
      headerActions={headerActions}
      hostId={resolvedHostId}
      initialEndLine={initialEndLine}
      initialLine={initialLine}
      onSelectFile={onSelectFile}
      path={path}
      setTabState={setTabState}
      tabId={tabId}
      tabState={tabState}
      workspaceRoot={workspaceRoot}
    />
  );
}

interface FileSourceTabContentProps extends FileSourceTabProps {
  path: string;
}

function FileSourceTabContent(props: FileSourceTabContentProps) {
  const {
    cwd,
    headerActions,
    hostId,
    initialEndLine,
    initialLine,
    onSelectFile,
    path,
    setTabState,
    tabId,
    tabState,
    workspaceRoot,
  } = props;

  const { data, isError } = useHostQuery("read-file-metadata", {
    params: {
      hostId,
      path,
      contentSampleByteLimit: CONTENT_SAMPLE_BYTE_LIMIT,
      contentSampleMaxFileBytes: CONTENT_SAMPLE_MAX_FILE_BYTES,
    },
  });

  const parsedPath = parseWorkspacePath(path);
  const isArtifactImport =
    parsedPath != null && isPreviewableArtifactKind(parsedPath.importKind);

  const imagePreviewKind = resolveImagePreviewKind(path, data?.contentKind);
  const richPreviewMode = resolveRichPreviewMode(path, data?.contentKind);
  const isRichPreviewEnabled = useAtomValue(richPreviewEnabledAtom);
  const fileViewer = resolveFileViewer(path, useThreadQuery(undefined, hostId));
  const gitBlameFeatureEnabled = useFeatureGate("1420162012");

  const hasFileViewer = fileViewer != null && initialLine == null;
  const shouldAutoRenderRich =
    (richPreviewMode === "toggle" || hasFileViewer) && initialLine == null;
  const unsupportedType = resolveUnsupportedFileType(path, data?.contentKind);

  if (isError || (data && !data.isFile)) {
    return <FileSourceStatus isError={true} isLoading={false} />;
  }
  if (data == null) {
    return <FileSourceStatus isError={false} isLoading={true} />;
  }

  let preview: React.ReactNode;
  let showGitBlameControl = false;
  let showArtifactPreviewControl = false;
  let showRichPreviewControl = false;
  let showWordWrapControl = false;

  if (fileViewer != null && shouldAutoRenderRich && isRichPreviewEnabled) {
    showRichPreviewControl = true;
    preview = (
      <FileSourceMcpResourceView
        fileViewer={fileViewer}
        hostId={hostId}
        path={path}
      />
    );
  } else if (unsupportedType != null) {
    showRichPreviewControl = hasFileViewer;
    preview = <UnsupportedFileTypeView type={unsupportedType} />;
  } else if (
    data.sizeBytes != null &&
    data.sizeBytes > MAX_PREVIEWABLE_FILE_BYTES
  ) {
    preview = <FileTooLargeView sizeBytes={data.sizeBytes} />;
  } else if (
    imagePreviewKind != null &&
    (richPreviewMode === "always" ||
      (shouldAutoRenderRich && isRichPreviewEnabled))
  ) {
    showRichPreviewControl = shouldAutoRenderRich;
    preview = (
      <FileSourceRichPreview
        gitBlameFeatureEnabled={gitBlameFeatureEnabled}
        hostId={hostId}
        path={path}
        previewKind={imagePreviewKind}
      />
    );
  } else {
    showGitBlameControl = gitBlameFeatureEnabled;
    showArtifactPreviewControl = isArtifactImport;
    showRichPreviewControl = shouldAutoRenderRich;
    showWordWrapControl = true;
    preview = (
      <FileSourceCodeView
        gitBlameFeatureEnabled={gitBlameFeatureEnabled}
        hostId={hostId}
        initialEndLine={initialEndLine}
        initialLine={initialLine}
        path={path}
        setTabState={setTabState}
        tabState={tabState}
      />
    );
  }

  return (
    <FileSourceTabShell
      cwd={cwd}
      headerActions={headerActions}
      hostId={hostId}
      onSelectFile={onSelectFile}
      path={path}
      showGitBlameControl={showGitBlameControl}
      showArtifactPreviewControl={showArtifactPreviewControl}
      showRichPreviewControl={showRichPreviewControl}
      showWordWrapControl={showWordWrapControl}
      tabId={tabId}
      workspaceRoot={workspaceRoot}
    >
      {preview}
    </FileSourceTabShell>
  );
}

interface FileSourceTabShellProps {
  children: React.ReactNode;
  cwd?: string | null;
  headerActions?: React.ReactNode;
  hostId: string;
  onSelectFile?: (path: string) => void;
  path: string | null;
  showGitBlameControl: boolean;
  showArtifactPreviewControl?: boolean;
  showRichPreviewControl?: boolean;
  showWordWrapControl?: boolean;
  tabId?: string;
  workspaceRoot?: string | null;
}

function FileSourceTabShell(props: FileSourceTabShellProps) {
  const {
    children,
    cwd,
    headerActions,
    hostId,
    onSelectFile,
    path,
    showGitBlameControl,
    showArtifactPreviewControl = false,
    showRichPreviewControl = false,
    showWordWrapControl = false,
    tabId,
    workspaceRoot,
  } = props;

  const store = useStore(routeAtom);
  const intl = useIntl();
  const workspaceRootValue = useAtomValue(workspaceRootAtom);
  const resolvedCwd =
    cwd ??
    (workspaceRootValue == null
      ? null
      : workspaceRootToCwd(workspaceRootValue));
  const hasOptionsMenu =
    path != null &&
    (showGitBlameControl ||
      showArtifactPreviewControl ||
      showRichPreviewControl ||
      showWordWrapControl);
  const isFileTreeOpen = useAtomValue(fileTreeOpenAtom);

  const headerActionsNode = headerActions == null ? null : <>{headerActions}</>;
  const fileActions =
    path == null ? null : (
      <FileSourceHeaderActions
        key="file-actions"
        cwd={resolvedCwd}
        hasOptionsMenu={hasOptionsMenu}
        hostId={hostId}
        path={path}
        showGitBlameControl={showGitBlameControl}
        showArtifactPreviewControl={showArtifactPreviewControl}
        showRichPreviewControl={showRichPreviewControl}
        showWordWrapControl={showWordWrapControl}
        tabId={tabId}
      />
    );

  const toggleFileTreeLabel = intl.formatMessage({
    id: "review.fileSource.browser.toggleFileTree",
    defaultMessage: "Toggle file tree",
    description:
      "Accessible label for a button that toggles the workspace file tree",
  });
  const toggleFileTreeButton = (
    <Button
      key="open-files-button"
      aria-label={toggleFileTreeLabel}
      className="ms-auto"
      color={isFileTreeOpen ? "secondary" : "ghost"}
      size="toolbar"
      uniform={true}
      onClick={() => {
        setFileTreeOpen(store, !isFileTreeOpen);
      }}
    >
      <FilesIcon aria-hidden={true} className="icon-sm" />
    </Button>
  );

  const breadcrumb = (
    <FilePathBreadcrumb
      cwd={resolvedCwd}
      path={path}
      trailingContent={[headerActionsNode, fileActions, toggleFileTreeButton]}
    />
  );
  const previewKey = `${hostId}:${path}`;
  const previewPane = (
    <div key={previewKey} className="min-w-0 flex-1">
      {children}
    </div>
  );
  const sidePanel =
    onSelectFile == null ? null : (
      <FileSourceSidePanel
        activeFilePath={path}
        autoFocusSearch={path == null}
        hostId={hostId}
        onSelectFile={onSelectFile}
        root={workspaceRoot ?? resolvedCwd}
        type="workspace"
      />
    );

  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      {breadcrumb}
      <div className="flex min-h-0 flex-1">
        {previewPane}
        {sidePanel}
      </div>
    </div>
  );
}

function FileSourceEmptyState() {
  return (
    <div className="flex h-full min-h-0 items-center justify-center p-6 text-center">
      <div className="flex max-w-72 flex-col items-center gap-2">
        <FilesIcon className="icon-lg text-token-text-secondary" />
        <h2 className="text-base font-semibold text-token-text-primary">
          <FormattedMessage
            id="review.fileSource.browser.heading"
            defaultMessage="Open file"
            description="Heading for an empty file tab that lets users choose a workspace file"
          />
        </h2>
        <p className="text-sm text-token-text-secondary">
          <FormattedMessage
            id="review.fileSource.browser.description"
            defaultMessage="Select a file from the workspace tree"
            description="Description for an empty file tab that lets users choose a workspace file"
          />
        </p>
      </div>
    </div>
  );
}
