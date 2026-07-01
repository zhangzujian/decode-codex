// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// NewThreadComposerBody — the shared composer body rendered inside a composer
// scope provider by HomeComposer and the new-thread panel surfaces.
//
// The body owns everything between the above-composer portals and the external
// footer: the ProseMirror editor, the attachment tray, the @mention/skill
// suggestion overlays, the above-composer banner stack (rate limit, host setup,
// thread goal, background subagents, hooks-needing-review), the approval-request
// surface for follow-ups, and the submit orchestration for local / worktree /
// cloud composer modes. The owning surface supplies collaboration-mode state and
// the submit/stop handlers via props; the body derives the execution target,
// builds the message context, and dispatches to the correct submit handler.
//
// This is a large aggregator component (~2,300 obfuscated lines in the source
// chunk). Its deep internals — the specialised composer hooks and banner/dialog
// sub-components — are imported here under semantic names. Where a concrete
// restored module already exists it is imported directly; the remainder resolve
// through the onboarding-commons externals facade.
import {
  useCallback,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import type {
  ComposerSubmitTarget,
  NewThreadComposerBodyProps,
} from "./new-thread-composer-body-types";
import { AboveComposerPanel } from "./above-composer-panel-row";
import { AboveComposerSuggestions } from "./above-composer-suggestions";
import { ComposerExternalFooter } from "./composer-external-footer";
import { QueuedMessageList } from "./queued-message-list";
import { PendingRequestItemPanel } from "../requests/pending-request-item-panel";
import {
  // --- core scope / editor / atom access ---
  appConnectClaimedFollowUpQuery,
  clsx,
  composerCwdOverrideAtom,
  composerDropTargetPortalContext,
  composerEnterBehaviorFamily,
  composerModeAtom,
  composerModeForScopeAtom,
  composerPrefillCwdAtom,
  composerScope,
  useAtomFamily,
  useAtomValue,
  useComposerController,
  useComposerLog,
  useNavigate,
  useProductLogger,
  useQueryClient,
  useRegisterCommand,
  useScopeStore,
  // --- conversation identity / execution target ---
  buildComposerAnalyticsId,
  composerCommentAttachmentsAtom,
  composerImageCommentDraftAtom,
  composerImageInputsAtom,
  composerMcpAppModelContextAtom,
  composerPastedTextAttachmentsAtom,
  composerSelectedTextAttachmentsAtom,
  extensionPageSelectionAtom,
  composerPullRequestChecksAtom,
  composerPullRequestMergeConflictAtom,
  composerFileAttachmentsAtom,
  composerAddedFilesAtom,
  hostConfigForHostId,
  isBackgroundThreadHydratedAtom,
  isFollowUpHydratedAtom,
  isHotkeyWindow,
  isRemoteConnection,
  localExecutionTargetForScope,
  openHotkeyWindowThread,
  openThreadPath,
  openTaskPath,
  resolveComposerExecutionTarget,
  resolveLocalExecutionRemoteHostId,
  useActiveConversationId,
  useActiveWorkspaceRoots,
  useAgentModeSettings,
  useCloudTaskCreation,
  useCloudTaskFollowUp,
  useFollowUpToConversation,
  useHostConfig,
  useLocation,
  useMcpManagerForHost,
  useRemoteConnections,
  useRemoteConnectivityStates,
  useSelectedRemoteProject,
  // --- attachments / context ---
  buildLocalContextIdeSnapshot,
  useAppshotCaptureTray,
  useComposerAttachmentActions,
  useComposerAttachmentSetters,
  useComposerFileAssetAttachment,
  useComposerMessageEditing,
  usePastedTextAttachmentHandlers,
  usePendingFileAttachments,
  removeAllImageComments,
  splitCommentAttachmentsBySurface,
  // --- suggestions / mentions ---
  ComposerContextFilesWatcher,
  useAtMentionAutocomplete,
  useComposerContextActions,
  useMentionActivationHandler,
  useSkillMentionAutocomplete,
  // --- submit orchestration ---
  buildCloudSubmitTask,
  buildSideChatDisplayTitle,
  clearGoalPromptAtomsRunner,
  formatComposerSubmitError,
  formatWorktreeSubmitError,
  parseGoalSubmit,
  performComposerSubmit,
  reportComposerSubmitError,
  resolveCloudTaskType,
  sendQueuedSteerMessage,
  splitCommentsForSubmit,
  submitDirectComment,
  useComposerPromptHistory,
  useComposerPrompts,
  // --- misc host / analytics ---
  buildContextualLeadingItems,
  hasSeenMultiAgentComposerBannerRunner,
  logComposerMessageSent,
  openComposerReferencedFile,
  requiredHooksFilter,
  saveThreadStartTarget,
  setComposerScopedField,
  showComposerToast,
  // --- rate-limit / banners / status ---
  useComposerRateLimitBanner,
  useMessageLimitEvent,
  // --- worktree / voice / layout ---
  useComposerDictation,
  useComposerLayoutMode,
  useSingleLineComposerMeasure,
  useStopTurnConfirmation,
  useWorktreeGitContext,
  registerComposerEnterKeymap,
  registerComposerEscapeHandler,
  registerComposerKeymap,
  registerSidebarToggleShortcut,
  isComposerDictationTarget,
  hasActiveMentionMenu,
  resolveEscapeAction,
  resolveComposerKeyAction,
  // --- background threads ---
  canStopBackgroundThread,
  collectStoppableBackgroundThreads,
  useBackgroundThreadRows,
  useBackgroundThreadTurnMap,
  currentTurnKeyForConversation,
  useInterruptThread,
  // --- composer mode / availability ---
  buildComposerModeAvailability,
  useComposerMode,
  useImageInputSupport,
  useIsQueueingEnabled,
  useWindowsSandboxSetup,
  useWindowsSandboxRequirement,
  // --- entrypoints / prefill ---
  buildNewThreadClientId,
  resolveComposerCwd,
  resolveComposerWorkspaceRoot,
  useProjectAssignment,
  useResolvedConfigPath,
  useSharedComposerPrefill,
  // --- additional deep internals ---
  cancelThreadGoal,
  dismissMessageLimitBanner,
  hydrateBackgroundThreads,
  isPromptDraftTextValue,
  openSideChat,
  projectAssignmentsQuery,
  resolveComposerMode,
  resolveCurrentRemoteCwd,
  resumeThreadGoal,
  submitFollowUpApproval,
  submitLocalApproval,
  useCloudAccess,
  useCodexHome,
  useComposerIntl,
  useComposerPlaceholder,
  useConversationPending,
  useGitRepoRoot,
  useHasPendingApproval,
  useIsElectronPlatform,
  useIsWorkspaceRequired,
  useIsWorktreePickerEnabled,
  useIsWorktreeSnapshotsEnabled,
  useOpenFileMutation,
  useQueuedFollowUps,
  useResolvedPendingApproval,
  // --- sub-components ---
  Composer,
  AddContextButton,
  AboveComposerSuggestionActions,
  AnnouncementBanner,
  AppshotCaptureControls,
  BackgroundSubagentsPanel,
  BlockedSubmitDialog,
  CloudModeIndicator,
  ComposerAttachmentPills,
  ComposerDropOverlay,
  ComposerFooterControls,
  ComposerInputField,
  ComposerStatusMenuRow,
  FirstBlockRateLimitBanner,
  GoalReplacementConfirmationDialog,
  GoalResumePromptDialog,
  HooksNeedingReviewBanner,
  PluginContextLoader,
  RateLimitBanner,
  SelectedTextAction,
  SelectedTextPortal,
  SideChatPrompt,
  ThreadGoalBanner,
  WindowsSandboxError,
  WindowsSandboxSetupBanner,
} from "../boundaries/onboarding-commons-externals.facade";

const EMPTY_ARRAY: never[] = [];

export function NewThreadComposerBody({
  aboveComposerHeaderContent,
  belowComposerContent,
  activeCollaborationMode,
  browserConversationId,
  collaborationModes,
  serviceTier,
  setSelectedCollaborationMode,
  isResponseInProgress,
  showExternalFooter,
  hideArtifactPluginSuggestions,
  showPlanKeywordSuggestion,
  composerModeAvailability,
  placeholderText,
  composerLayoutMode,
  hotkeyWindowHomeFooterControls,
  homeRunLocationRemoteProject,
  defaultCwd,
  onSubmitLocal,
  onSubmitWorktree,
  onStop,
  isStopping,
  showWorkspaceDropdownInFooter,
  externalFooterVariant,
  surfaceClassName,
  showFooterBranchWhen,
  freeUpsellButton,
  onCreateSideConversation,
  hideRunLocationDropdownOverride,
  projectlessPrewarmReservation,
  localWorkspaceMaterialization,
}: NewThreadComposerBodyProps) {
  // ── scope, loggers, and follow-up identity ──────────────────────────────
  const scope = useScopeStore(composerScope);
  const productLogger = useProductLogger();
  const followUp = useAtomValue(isFollowUpHydratedAtom);
  const queryClient = useQueryClient();
  const dropTargetPortalTarget = useComposerLog(
    composerDropTargetPortalContext,
  );
  const createCloudTask = useCloudTaskCreation();
  const followUpToCloudTask = useCloudTaskFollowUp();
  const isSideConversation =
    scope.value.kind === "local" && scope.value.placement === "side";
  const activeConversationId = useActiveConversationId(scope);
  const mcpManager = useMcpManagerForHost(activeConversationId);
  useComposerLog(activeConversationId);

  const mcpManagerHostId = useAtomFamily(
    hostConfigForHostId,
    activeConversationId,
  );
  const localExecutionTarget =
    localExecutionTargetForScope(activeConversationId);
  const pinnedRemoteHostConfig = useHostConfig(
    homeRunLocationRemoteProject?.hostId ?? localExecutionTarget.hostId,
  );
  const isHomePinnedRemote =
    activeConversationId == null &&
    localExecutionTarget.hostId === "local" &&
    homeRunLocationRemoteProject != null;
  const executionTarget = isHomePinnedRemote
    ? {
        ...localExecutionTarget,
        cwd: homeRunLocationRemoteProject.remotePath,
        hostConfig: pinnedRemoteHostConfig,
        hostId: homeRunLocationRemoteProject.hostId,
      }
    : localExecutionTarget;
  const executionHostConfig = useHostConfig(executionTarget.hostId);

  // ── conversation id, browser bridging, banners ──────────────────────────
  const followUpConversationId = useFollowUpToConversation(followUp);
  const analyticsConversationId =
    followUpConversationId ??
    (() => {
      switch (scope.value.kind) {
        case "new":
          return buildNewThreadClientId({
            entrypoint: scope.value.entrypoint === "panel" ? "panel" : "home",
          });
        case "local":
          return scope.value.conversationId;
        case "cloud":
          return scope.value.taskId;
        case "other":
          return buildNewThreadClientId({ entrypoint: "home" });
      }
    })();
  const directBrowserConversationId =
    browserConversationId ?? followUpConversationId;
  const directBrowserTabId = buildComposerAnalyticsId(
    directBrowserConversationId,
  );

  const selectedModel = activeCollaborationMode?.settings?.model ?? null;
  const {
    isUsageBannerEnabled,
    modelLimitName,
    modelLimitResetAt,
    rateLimit,
    rateLimitWarningThreshold,
    showCoreRateLimitUpsell,
    showModelLimitBanner,
    showWorkspaceUsageLimitBanner,
  } = useComposerRateLimitBanner({ selectedModel });

  const localConversationCwd = useAtomFamily(
    composerCwdOverrideAtom,
    activeConversationId,
  );
  const composerModeSetting = useAtomFamily(
    composerModeForScopeAtom,
    activeConversationId,
  );
  const { isAppConnectCallbackClaimed } = useAtomValue(
    appConnectClaimedFollowUpQuery,
  );
  const pendingApproval = useResolvedPendingApproval();
  const pendingApprovalKey = buildComposerAnalyticsId(pendingApproval);
  const isProjectlessConversation =
    useAtomFamily(composerModeAtom, activeConversationId) === "projectless";
  const isHotkeyWindowSurface = isHotkeyWindow();
  const showFooter =
    (!isHotkeyWindowSurface || externalFooterVariant === "home") &&
    (showExternalFooter || (isSideConversation && isProjectlessConversation));
  const workspaceRootSetting = useAtomFamily(
    composerCwdOverrideAtom,
    activeConversationId,
  );
  const savedWorkspaceRoot =
    workspaceRootSetting === "~" ? null : workspaceRootSetting;

  // ── background threads / approvals ──────────────────────────────────────
  const isBackgroundThreadsEnabled = useIsQueueingEnabled();
  const backgroundTurns =
    useAtomFamily(
      isBackgroundThreadsEnabled ? activeConversationId : null,
      activeConversationId,
    ) ?? EMPTY_ARRAY;
  const conversationForRows = useMemo(
    () =>
      activeConversationId == null || !isBackgroundThreadsEnabled
        ? null
        : { turns: backgroundTurns },
    [activeConversationId, isBackgroundThreadsEnabled, backgroundTurns],
  );
  const { memberships, rows, mentionItems, firstApproval } =
    useBackgroundThreadRows({
      activeConversationId,
      conversation: conversationForRows,
      enabled: isBackgroundThreadsEnabled,
      manager: mcpManager,
    });
  const turnMap = useBackgroundThreadTurnMap({
    conversation: conversationForRows,
    memberships,
  });
  const currentTurnKey = currentTurnKeyForConversation(conversationForRows);
  const backgroundRows = rows.filter(
    (item: { conversationId: string }) =>
      turnMap.get(item.conversationId)?.parentTurnKey === currentTurnKey,
  );
  const hasFirstApproval = firstApproval != null;
  const firstApprovalHostId = useAtomFamily(
    hostConfigForHostId,
    firstApproval?.conversationId ?? null,
  );
  const hasPendingApproval = useHasPendingApproval(pendingApproval);
  const hasApprovalSurface =
    activeConversationId != null && (hasPendingApproval || hasFirstApproval);

  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const isElectronPlatform = useIsElectronPlatform();
  const { isPending: isConversationPending } =
    useConversationPending(mcpManagerHostId);
  const cloudAccess = useCloudAccess();
  const canUseProjectlessThreads = !useIsWorkspaceRequired();
  const intl = useComposerIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const remoteProjectPin = {
    conversationId: activeConversationId,
    hostId: mcpManagerHostId,
  };
  const messageLimitEvent = useMessageLimitEvent(remoteProjectPin);
  const firstBlockBanner = useAtomFamily(
    isFollowUpHydratedAtom,
    activeConversationId,
  );
  const firstBlockRateLimit =
    firstBlockBanner != null && activeConversationId != null
      ? {
          conversationId: activeConversationId,
          domain: firstBlockBanner.domain,
          eventId: -1,
          turnId: firstBlockBanner.turnId,
          variant: "first_block" as const,
        }
      : null;
  const activeMessageLimitBanner =
    messageLimitEvent.event != null &&
    messageLimitEvent.event.eventId !== messageLimitEvent.dismissedEventId
      ? messageLimitEvent.event
      : firstBlockRateLimit;
  const { state: locationState } = location;

  // ── image input support / dialogs ───────────────────────────────────────
  const isWorktreeSnapshotsEnabled = useIsWorktreeSnapshotsEnabled();
  const {
    imageInputUnsupportedReason,
    notifyImageInputUnsupported,
    supportsImageInputs,
  } = useImageInputSupport({
    scope,
    conversationId: activeConversationId,
    intl,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [goalReplacementConfirmation, setGoalReplacementConfirmation] =
    useState<null | {
      draft: unknown;
      focusComposerAfterSubmit: boolean;
      followUpSubmitAction?: string;
    }>(null);
  const [restrictedSessionText, setRestrictedSessionText] = useState<
    string | null
  >(null);
  const { interruptThread } = useInterruptThread();

  const getBackgroundConversation = (conversationId: string) =>
    scope.get(isBackgroundThreadHydratedAtom, conversationId)
      ? {
          turns:
            scope.get(composerModeForScopeAtom, conversationId) ?? EMPTY_ARRAY,
        }
      : null;

  async function openBackgroundThread(conversationId: string) {
    if (
      scope.get(isBackgroundThreadHydratedAtom, conversationId) ||
      (await hydrateBackgroundThreads({
        hostId: executionTarget.hostId,
        threadIds: [conversationId],
      }),
      scope.get(isBackgroundThreadHydratedAtom, conversationId))
    ) {
      if (isHotkeyWindow()) {
        openHotkeyWindowThread({ path: openThreadPath(conversationId) });
        return;
      }
      navigate(openThreadPath(conversationId));
    }
  }

  const rowsByConversationId = new Map(
    rows.map((item: { conversationId: string }) => [item.conversationId, item]),
  );
  const canStopAllBackgroundThreads = memberships.some(
    (item: { conversationId: string }) =>
      canStopBackgroundThread({
        conversationId: item.conversationId,
        rowsByConversationId,
        getConversation: getBackgroundConversation,
      }),
  );
  const stopAllBackgroundThreads = () => {
    for (const conversationId of collectStoppableBackgroundThreads({
      memberships,
      rowsByConversationId,
      getConversation: getBackgroundConversation,
    }))
      interruptThread({ conversationId });
  };

  // ── editor controller, execution mode, remote connections ───────────────
  const { isQueueingEnabled } = useIsQueueingEnabled();
  const enterBehavior = useComposerController(
    useAtomValue(composerEnterBehaviorFamily),
  );
  const threadGoal = useAtomFamily(
    composerModeForScopeAtom,
    activeConversationId,
  );
  const pendingThreadGoal = useAtomFamily(
    composerCwdOverrideAtom,
    activeConversationId,
  );
  const followUpCloudStartingState = useAtomFamily(
    composerModeAtom,
    activeConversationId,
  );
  const queuedFollowUps = useQueuedFollowUps(activeConversationId);
  const { messages, actions } = queuedFollowUps;
  const { data: workspaceRootsData, isLoading: isWorkspaceRootsLoading } =
    useAtomValue(useActiveWorkspaceRoots);
  const openFile = useOpenFileMutation("open-file");
  const activeWorkspaceRoot = workspaceRootsData?.roots?.[0] ?? null;
  const projectAssignments = useAtomValue(projectAssignmentsQuery);
  const { remoteConnections, selectedRemoteHostId } =
    useAtomValue(useRemoteConnections);
  const { selectedRemoteProject, selectedRemoteProjectId } =
    useSelectedRemoteProject();
  const codexHome = useCodexHome();

  const prefillPrompt = locationState?.prefillPrompt;
  const prefillPriorConversation =
    locationState?.prefillPriorConversation ?? null;
  const prefillAddedFiles = locationState?.prefillAddedFiles ?? null;
  const prefillCommentAttachments =
    locationState?.prefillCommentAttachments ?? null;
  const prefillCwd = locationState?.prefillCwd ?? null;
  const sharedPrefillCwd = useAtomValue(composerPrefillCwdAtom);
  const workspaceRoots = workspaceRootsData?.roots ?? EMPTY_ARRAY;

  const resolvedCwd = resolveComposerCwd({
    sharedPrefillCwd,
    locationPrefillCwd: prefillCwd,
    localConversationCwd,
    selectedRemoteProjectPath: selectedRemoteProject?.remotePath ?? null,
    defaultCwd,
    workspaceRoots,
    activeWorkspaceRoot,
    codexHome,
    canUseProjectlessThreads,
  });
  const isProjectlessComposerCwd = resolvedCwd === "~";
  const executionCwd =
    resolvedCwd === "/" || isProjectlessComposerCwd ? null : resolvedCwd;
  const { data: projectlessWorkspaceRootData } = useAtomValue(
    useActiveWorkspaceRoots,
    {
      enabled:
        canUseProjectlessThreads &&
        (isProjectlessComposerCwd || isProjectlessConversation) &&
        savedWorkspaceRoot == null,
    },
  );
  const projectlessWorkspaceRoot =
    savedWorkspaceRoot ?? projectlessWorkspaceRootData;
  const gitRepoRootForCwd =
    resolvedCwd === "/" || isProjectlessComposerCwd
      ? null
      : useGitRepoRoot(resolvedCwd);
  const suggestionRoots = useMemo(
    () =>
      resolveComposerWorkspaceRoot({
        isProjectlessComposerCwd,
        isProjectlessConversation,
        projectlessWorkspaceRoot,
        resolvedCwd,
        workspaceRootPaths: workspaceRoots,
      }),
    [
      isProjectlessComposerCwd,
      isProjectlessConversation,
      projectlessWorkspaceRoot,
      workspaceRoots,
      resolvedCwd,
    ],
  );
  const prompts = useComposerPrompts();
  const composerController = useComposerController(composerScope);
  registerComposerKeymap(composerController, !isSideConversation);
  registerSidebarToggleShortcut(composerController);

  // ── attachments state (scoped atoms) ────────────────────────────────────
  const imageAttachments = useAtomValue(composerImageInputsAtom);
  const commentAttachments = useAtomValue(composerCommentAttachmentsAtom);
  const selectedTextAttachments = useAtomValue(
    composerSelectedTextAttachmentsAtom,
  );
  const extensionPageSelection = useAtomValue(extensionPageSelectionAtom);
  const mcpAppModelContextAttachments = useAtomValue(
    composerMcpAppModelContextAtom,
  );
  const pullRequestChecks = useAtomValue(composerPullRequestChecksAtom);
  const pullRequestMergeConflict = useAtomValue(
    composerPullRequestMergeConflictAtom,
  );
  const imageCommentDraft = useAtomValue(composerImageCommentDraftAtom);
  const imageCommentDraftComments = imageCommentDraft?.comments ?? EMPTY_ARRAY;
  const visibleImageAttachments = imageAttachments.filter(
    (item: { id: string }) => item.id !== imageCommentDraft?.attachmentId,
  );
  const fileAttachments = useAtomValue(composerFileAttachmentsAtom);
  const pastedTextAttachments = useAtomValue(composerPastedTextAttachmentsAtom);
  const addedFiles = useAtomValue(composerAddedFilesAtom);

  const setComposerStateField = useCallback(
    (field: string, value: unknown) => {
      setComposerScopedField(scope, field, value);
    },
    [scope],
  );
  const setComposerMode = useCallback(
    (mode: unknown) =>
      resolveComposerMode(scope, analyticsConversationId, mode),
    [scope, analyticsConversationId],
  );
  const setComments = (comments: unknown) =>
    setComposerScopedField(scope, "commentAttachments", comments);
  const setSelectedTextAttachments = useCallback(
    (attachments: unknown) =>
      setComposerStateField("selectedTextAttachments", attachments),
    [setComposerStateField],
  );

  // ── composer mode availability ──────────────────────────────────────────
  const { access } = cloudAccess;
  const composerMode = useComposerMode({
    ...(composerModeAvailability ??
      buildComposerModeAvailability({
        canCreateBrowserDefaultHostThreads: false,
        hasBrowserLocalExecutionHost: false,
        hasComposerModeGitRepo: gitRepoRootForCwd != null,
        hasFollowUp: followUp != null,
        isBrowser: false,
        isComposerModeGitMetadataLoading: false,
        isResponseInProgress,
        isStatsigLoading: false,
        isWorktreeExecutionTargetLoading:
          executionTarget.cwd == null &&
          executionTarget.isActiveWorkspaceRootLoading,
        isWorktreePickerEnabled: useIsWorktreePickerEnabled(),
      })),
    composerMode: composerModeSetting,
    cloudAccess: access,
  });
  const remoteConnectivityStates =
    useRemoteConnectivityStates(remoteConnections);
  const localExecutionRemoteHostId = resolveLocalExecutionRemoteHostId({
    attachedRemoteHostId:
      followUpConversationId != null && mcpManagerHostId !== "local"
        ? mcpManagerHostId
        : null,
    browserRemoteHostId: null,
    followUpType: followUp?.type,
    forceDefaultHost: false,
    selectedRemoteProjectHostId:
      selectedRemoteProject?.hostId ??
      homeRunLocationRemoteProject?.hostId ??
      null,
  });
  const localExecutionRemoteHostConfig = useHostConfig(
    localExecutionRemoteHostId ?? "",
  );
  const currentRemoteCwd = resolveCurrentRemoteCwd({
    localExecutionRemoteHostId,
    selectedRemoteProject,
    homeRunLocationRemoteProject,
    mcpManagerHostId,
    localConversationCwd,
  });
  const isLocalModeOnRemoteHost =
    composerMode === "local" && localExecutionRemoteHostId != null;
  const isRemoteProjectExecution = localExecutionRemoteHostId != null;
  const currentLocalExecutionHostId =
    isLocalModeOnRemoteHost && localExecutionRemoteHostConfig != null
      ? localExecutionRemoteHostId
      : mcpManagerHostId;
  const currentLocalExecutionHostConfig = useHostConfig(
    currentLocalExecutionHostId,
  );
  const worktreeExecutionHostId =
    localExecutionRemoteHostConfig == null
      ? currentLocalExecutionHostId
      : executionTarget.hostId;
  const executionHostId =
    composerMode === "worktree"
      ? worktreeExecutionHostId
      : currentLocalExecutionHostId;
  const executionHostConfigForMode = useHostConfig(executionHostId);
  const currentLocalExecutionCwd =
    isLocalModeOnRemoteHost && currentRemoteCwd != null
      ? currentRemoteCwd
      : resolvedCwd;
  const worktreeExecutionCwd = executionTarget.cwd ?? resolvedCwd;

  // ── remote analytics context / windows sandbox ──────────────────────────
  const remoteSshMessageAnalyticsContext = {
    productLogger,
    connection:
      worktreeExecutionHostId == null
        ? null
        : (remoteConnections.find(
            (item: { hostId: string }) =>
              item.hostId === worktreeExecutionHostId &&
              isRemoteConnection(item),
          ) ?? null),
    connectionState: null,
    isFollowUp: followUp != null,
    error: null,
    threadId: activeConversationId,
  };
  const [showWindowsSandboxBanner, setShowWindowsSandboxBanner] =
    useWindowsSandboxSetup();
  const {
    hasError,
    isPending: isWindowsSandboxRequirementPending,
    requirement,
    retry,
  } = useWindowsSandboxRequirement({ enabled: false });

  // ── prefill / focus effects ─────────────────────────────────────────────
  const [focusComposerNonce, setFocusComposerNonce] = useState(
    locationState?.focusComposerNonce,
  );
  const [priorConversation, setPriorConversation] = useState(
    prefillPriorConversation,
  );
  const focusComposer = useCallback(() => {
    setFocusComposerNonce((nonce) => (nonce ?? 0) + 1);
  }, []);
  const { addFileDescriptorsAsMentions } = useComposerAttachmentActions({
    scope,
    intl,
    executionHostId,
    supportsImageInputs,
    notifyImageInputUnsupported,
  });
  const setCommentAttachments = (comments: unknown) => setComments(comments);
  const applyPrefill = useEffectEvent(() => {
    if (prefillPriorConversation)
      setPriorConversation(prefillPriorConversation);
    if (locationState?.focusComposerNonce != null)
      setFocusComposerNonce(locationState.focusComposerNonce);
    if (prefillPrompt && prefillPrompt !== composerController.getText())
      composerController.setPromptText(prefillPrompt);
    if (prefillAddedFiles != null && prefillAddedFiles.length > 0)
      addFileDescriptorsAsMentions(prefillAddedFiles);
    if (
      prefillCommentAttachments != null &&
      prefillCommentAttachments.length > 0
    )
      setCommentAttachments(prefillCommentAttachments);
  });
  useEffect(() => {
    applyPrefill();
  }, [
    prefillPrompt,
    prefillPriorConversation,
    prefillAddedFiles,
    prefillCommentAttachments,
    locationState?.focusComposerNonce,
  ]);

  const [sharedPrefill, clearSharedPrefill] =
    useSharedComposerPrefill("composer_prefill");
  const applySharedPrefill = useEffectEvent(() => {
    const comments = sharedPrefill?.commentAttachments;
    const hasText =
      sharedPrefill?.clearText === true ||
      (sharedPrefill?.text.length ?? 0) > 0;
    if (
      sharedPrefill == null ||
      (!hasText && (comments == null || comments.length === 0))
    )
      return;
    if (activeConversationId != null) return;
    if (sharedPrefill.cwd == null) scope.set(composerPrefillCwdAtom, null);
    else scope.set(composerPrefillCwdAtom, sharedPrefill.cwd);
    if (hasText) {
      if (isPromptDraftTextValue(sharedPrefill.text))
        composerController.setPromptText(sharedPrefill.text);
      else composerController.setText(sharedPrefill.text);
    }
    if (comments != null && comments.length > 0)
      setCommentAttachments(comments);
    composerController.focus();
    clearSharedPrefill(undefined);
  });
  useEffect(() => {
    applySharedPrefill();
  }, [sharedPrefill]);

  // ── worktree git context, attachments, editing ──────────────────────────
  const { worktreeGitContextRoot, workspaceRootForSubmit } =
    useWorktreeGitContext({
      worktreeSourceCwd: worktreeExecutionCwd,
      worktreeRepoRoot: null,
    });
  const gitRootForStartingState =
    composerMode === "worktree" ? worktreeGitContextRoot : null;
  const workspaceRootForCurrentSubmit =
    composerMode === "worktree" ? workspaceRootForSubmit : resolvedCwd;
  const workspaceRootsForLocalExecution = useMemo(
    () =>
      isLocalModeOnRemoteHost
        ? [currentLocalExecutionCwd]
        : [workspaceRootForCurrentSubmit],
    [
      currentLocalExecutionCwd,
      isLocalModeOnRemoteHost,
      workspaceRootForCurrentSubmit,
    ],
  );
  const { resolvedConfigPath } = useResolvedConfigPath({
    hostId: executionTarget.hostId,
    workspaceRoot: composerMode === "worktree" ? worktreeExecutionCwd : null,
  });

  const [isDragActive, setIsDragActive] = useState(false);
  const [showDropOverlay, setShowDropOverlay] = useState(false);
  const [showShiftOverlay, setShowShiftOverlay] = useState(false);
  const [emptySubmitTooltipNonce, setEmptySubmitTooltipNonce] = useState(0);
  const {
    clearStopTurnConfirmation,
    confirmStopTurn,
    handleStop,
    isStopTurnConfirmationVisible,
  } = useStopTurnConfirmation({
    onStop,
    turnId:
      followUp?.type === "cloud"
        ? followUp.taskDetails.current_assistant_turn?.id
        : undefined,
  });
  const dragCounterRef = useRef(0);

  const {
    attachmentGenRef,
    canceledPendingFileAttachmentIdsRef,
    handleRemovePendingFileAttachment,
  } = usePendingFileAttachments({
    executionHostId,
    fileAttachments,
    setFileAttachments: (value: unknown) =>
      setComposerStateField("fileAttachments", value),
    setPendingFileAttachments: () => undefined,
    setPendingPastedTextAttachments: () => undefined,
    setPastedTextAttachments: (value: unknown) =>
      setComposerStateField("pastedTextAttachments", value),
  });
  const {
    handleRemoveFile,
    handleRemoveImage,
    handleRemoveAppshotContext,
    setAddedFiles,
    setFileAttachments,
    setPastedTextAttachments,
    setImageAttachments,
    setAppshotContexts,
  } = useComposerAttachmentSetters({ setComposerStateField });
  const {
    attachmentsContainerRef,
    clearPendingCaptures,
    getAnimationDestinationFrame,
    handleCaptureAttached,
    handleCaptureAnimationDuration,
    handleCaptureSettled,
    handleCaptureStarted,
    hasPendingCaptures,
    pendingCaptures,
  } = useAppshotCaptureTray({
    attachmentTrayGrowthDirection: followUp?.type === "local" ? "up" : "down",
    imageAttachmentCount: imageAttachments.length,
    appshotContextCount: 0,
  });
  const [pendingFileAttachments, setPendingFileAttachments] = useState<
    unknown[]
  >([]);
  const [pendingPastedTextAttachments, setPendingPastedTextAttachments] =
    useState<unknown[]>([]);
  const attachmentActions = useComposerAttachmentActions({
    attachmentGeneration: attachmentGenRef,
    canceledPendingFileAttachmentIds:
      canceledPendingFileAttachmentIdsRef.current,
    composerMode,
    executionHostConfig: executionHostConfigForMode,
    executionHostId,
    intl,
    notifyImageInputUnsupported,
    scope,
    setAddedFiles,
    setFileAttachments,
    setImageAttachments,
    setPendingFileAttachments,
    supportsImageInputs,
  });
  const addFileAssetAttachment = useComposerFileAssetAttachment({
    attachmentGenRef,
    canceledPendingFileAttachmentIds:
      canceledPendingFileAttachmentIdsRef.current,
    executionHostId,
    setFileAttachments,
    setPendingFileAttachments,
  });

  // ── prompt history / single-line measure / mentions ─────────────────────
  const editMostRecentMessage = useCallback(() => {
    const last = messages.at(-1);
    if (last == null) return false;
    handleEditMessage(last.id);
    return true;
  }, [messages]);
  const { appendPromptToHistory, resetHistorySelection } =
    useComposerPromptHistory(
      composerController,
      followUpConversationId ?? browserConversationId ?? null,
      editMostRecentMessage,
    );
  const {
    setSingleLineInputMeasureRef,
    setSingleLineTextMeasureRef,
    singleLineInputWidth,
    singleLineTextWidth,
  } = useSingleLineComposerMeasure();
  const [lockedLayout, setLockedLayout] = useState<string | null>(null);
  const atMentionAutocomplete = useAtMentionAutocomplete(composerController);
  const skillMentionAutocomplete =
    useSkillMentionAutocomplete(composerController);
  const contextualLeadingItems = useAtomValue(buildContextualLeadingItems);
  const mentionedThreadIds = useMemo(() => EMPTY_ARRAY as string[], []);
  const showContextSuggestions =
    atMentionAutocomplete.ui?.active === true ||
    skillMentionAutocomplete.ui?.active === true;

  // ── message content / layout flags ──────────────────────────────────────
  const hasText = useComposerController(composerController);
  const isAutoSingleLine = composerLayoutMode === "auto-single-line";
  const hasVisibleAttachments =
    commentAttachments.length > 0 ||
    fileAttachments.length > 0 ||
    imageAttachments.length > 0 ||
    pastedTextAttachments.length > 0 ||
    selectedTextAttachments.length > 0 ||
    pullRequestChecks.length > 0 ||
    imageCommentDraftComments.length > 0 ||
    mcpAppModelContextAttachments.length > 0 ||
    extensionPageSelection != null ||
    pullRequestMergeConflict != null ||
    priorConversation != null;
  const hasMessageContent = hasText || hasVisibleAttachments;
  const hasPendingAttachments =
    hasPendingCaptures ||
    pendingFileAttachments.length > 0 ||
    pendingPastedTextAttachments.length > 0;
  const layoutMode = useComposerLayoutMode({
    composerLayoutMode,
    hasVisibleAttachments,
    isEditorMultiline: isAutoSingleLine,
    isVoiceLayoutActive: false,
    lockedLayout,
    singleLineInputWidth,
    singleLineTextWidth,
  });

  // ── submit orchestration ────────────────────────────────────────────────
  const buildLocalContextForPrompt = async (
    promptRaw: unknown,
    collaborationMode: unknown,
    targetConversationId: string | null = activeConversationId,
    threadGoalDraft?: unknown,
  ) => {
    const ideContext = await buildLocalContextIdeSnapshot(
      true,
      false,
      workspaceRootForCurrentSubmit,
    );
    return {
      addedFiles,
      collaborationMode,
      prompt:
        threadGoalDraft == null
          ? splitCommentsForSubmit({
              comments: imageCommentDraftComments,
              prompt: promptRaw,
            })
          : promptRaw,
      ideContext: ideContext ?? null,
      imageAttachments: threadGoalDraft == null ? imageAttachments : [],
      imageCommentDraft: threadGoalDraft == null ? imageCommentDraft : null,
      appshotContexts: EMPTY_ARRAY,
      fileAttachments,
      pastedTextAttachments,
      inAppBrowserContext:
        submitDirectComment(
          scope,
          targetConversationId,
          directBrowserConversationId,
        ) ??
        (await buildSideChatDisplayTitle({
          conversationId: targetConversationId,
          scope,
        })),
      commentAttachments,
      mcpAppModelContextAttachments,
      selectedTextAttachments,
      pullRequestChecks,
      pullRequestMergeConflict,
      threadGoalDraft,
      priorConversation: priorConversation ?? undefined,
      workspaceRoots: [workspaceRootForCurrentSubmit],
    };
  };

  const clearComposerUi = ({
    discardFileAttachments = false,
    keepMode = false,
  } = {}) => {
    composerController.setText("");
    clearPendingCaptures();
    if (discardFileAttachments)
      clearGoalPromptAtomsRunner(
        executionHostId,
        fileAttachments,
        pastedTextAttachments,
      );
    setPendingFileAttachments([]);
    setPendingPastedTextAttachments([]);
    setComments(EMPTY_ARRAY);
    if (!keepMode) resolveComposerMode(scope, analyticsConversationId, null);
    setPriorConversation(null);
    attachmentGenRef.current += 1;
  };

  const logMessageSent = (messageType: unknown) => {
    logComposerMessageSent(scope, {
      mode: composerMode,
      imageCount: imageAttachments.length,
      commentAttachmentCount: commentAttachments.length,
      selectedTextAttachmentCount: selectedTextAttachments.length,
      hasPriorConversation: priorConversation != null,
      isFollowUp: followUp != null,
      isResponseInProgress,
      inProgressMessageType: messageType,
      serviceTier: serviceTier ?? "standard",
    });
  };

  const buildCloudSubmit = async (context: unknown) => {
    const result = await buildCloudSubmitTask({
      scope,
      context,
      createCloudTask: createCloudTask.mutateAsync,
      followUp,
      followUpToCloudTask: followUpToCloudTask.mutateAsync,
      isWorktreeSnapshotsEnabled,
      mcpManagerHostId,
      queryClient,
      selectedModel,
    });
    if (result.type === "created-task") {
      if (location.pathname === "/") hasSeenMultiAgentComposerBannerRunner();
      if (isHotkeyWindow()) {
        openHotkeyWindowThread({ path: openTaskPath(result.taskId) });
        return;
      }
      navigate(openTaskPath(result.taskId));
    }
  };

  const handleSubmitError = useCallback(
    (error: unknown) => {
      reportComposerSubmitError(error, {
        mode: composerMode,
        followUp: followUp?.type ?? "none",
        cwd: currentLocalExecutionCwd,
      });
      if (composerMode === "worktree") {
        showComposerToast(scope, formatWorktreeSubmitError(error, intl));
        return;
      }
      showComposerToast(
        scope,
        formatComposerSubmitError({ error, composerMode, intl }),
      );
    },
    [composerMode, currentLocalExecutionCwd, followUp?.type, intl, scope],
  );

  const submitTarget: ComposerSubmitTarget = (() => {
    switch (composerMode) {
      case "local":
        return {
          type: "local",
          cwd: currentLocalExecutionCwd,
          executionOptions: isLocalModeOnRemoteHost
            ? {
                hostId: currentLocalExecutionHostId,
                permissions: agentModeSettings,
                workspaceRoots: workspaceRootsForLocalExecution,
              }
            : undefined,
          submit: onSubmitLocal,
        };
      case "worktree":
        return {
          type: "worktree",
          cwd: workspaceRootForCurrentSubmit,
          startingState: followUpCloudStartingState,
          environmentConfigPath: resolvedConfigPath,
          executionOptions: {
            hostId: worktreeExecutionHostId,
            permissions: agentModeSettings,
            workspaceRoots: [worktreeExecutionCwd],
          },
          projectAssignment,
          submit: onSubmitWorktree,
        };
      case "cloud":
        return {
          type: "cloud",
          cloudTaskType: resolveCloudTaskType(
            followUp,
            threadGoal,
            followUpCloudStartingState,
          ),
          repo: null,
          submit: buildCloudSubmit,
        };
      default:
        return {
          type: "local",
          cwd: currentLocalExecutionCwd,
          executionOptions: undefined,
          submit: onSubmitLocal,
        };
    }
  })();

  const { hostId: permissionsHostId, cwdOverride: permissionsCwdOverride } =
    resolveComposerExecutionTarget({
      composerMode,
      followUpType: followUp?.type,
      localExecutionRemoteHostId,
      worktreeExecutionHostId:
        composerMode === "worktree" ? worktreeExecutionHostId : null,
      worktreeExecutionCwd,
      mcpManagerHostId,
      currentRemoteCwd,
    });
  const {
    agentMode,
    permissionProfileId,
    shouldSendPermissionOverrides,
    permissionOverrideThreadSettings,
    shouldUseAppServerPermissionDefault,
  } = useAgentModeSettings({
    conversationId: activeConversationId,
    cwdOverride: permissionsCwdOverride,
    hostId: permissionsHostId,
  });
  const agentModeSettings = {
    agentMode,
    permissionProfileId,
    shouldSendPermissionOverrides,
  };
  const projectAssignment = useProjectAssignment({
    isExistingThread: activeConversationId != null,
    executionHostId: worktreeExecutionHostId,
    activeLocalProjectId: activeWorkspaceRoot,
    existingAssignment:
      activeConversationId == null
        ? undefined
        : projectAssignments?.[activeConversationId],
    homeRemoteProject: homeRunLocationRemoteProject ?? null,
    selectedRemoteProject,
  });

  const prepareGoalSubmit = async (options: {
    confirmedGoalReplacementDraft?: unknown;
    focusComposerAfterSubmit?: boolean;
    followUpSubmitAction?: string;
    promptRaw: unknown;
    skipGoalReplacementConfirmation?: boolean;
  }) => {
    const parsed = await parseGoalSubmit({
      confirmedGoalReplacementDraft: options.confirmedGoalReplacementDraft,
      getImageAttachments: () => imageAttachments,
      getPastedTextAttachments: () =>
        scope.get(composerPastedTextAttachmentsAtom),
      isGoalActionAvailable: false,
      isGoalModeActive: false,
      promptRaw: options.promptRaw,
    });
    if (parsed.status === "not-goal")
      return { status: "continue", draft: null };
    if (parsed.status === "empty") {
      setComposerStateField("pendingThreadGoalObjective", "");
      composerController.setText("");
      if (options.focusComposerAfterSubmit) focusComposer();
      return { status: "handled" };
    }
    return { status: "continue", draft: parsed.draft };
  };

  const submitComposer = async (options: Record<string, unknown> = {}) => {
    await performComposerSubmit({
      appendPromptToHistory,
      buildLocalContextForPrompt,
      clearComposerUi,
      clearStopTurnConfirmation,
      composerController,
      conversationId: activeConversationId,
      focusComposer,
      followUp,
      handleSubmitError,
      hostId: currentLocalExecutionHostId,
      isElectron: isElectronPlatform,
      isLocalModeOnRemoteHost,
      isResponseInProgress,
      isWorkspaceStatusUnavailable:
        localWorkspaceMaterialization === "unavailable",
      logMessageSent,
      mentionedThreadIds,
      prepareGoalSubmit,
      prompts,
      queuedMessageActions: actions,
      remoteSshMessageAnalyticsContext,
      resetHistorySelection,
      resolvedCwd,
      setIsSubmitting,
      submitButtonMode,
      submitTarget,
      options,
    });
  };
  const submit = useCallback(submitComposer, [submitComposer]);
  const submitInitPrompt = useCallback(
    async (promptRaw: unknown) => {
      await submit({
        focusComposerAfterSubmit: true,
        persistedPromptRawOverride: promptRaw,
        promptRawOverride: promptRaw,
        skipGoalSubmit: true,
      });
    },
    [submit],
  );

  const confirmGoalReplacement = useCallback(() => {
    if (goalReplacementConfirmation == null) return;
    const { draft, focusComposerAfterSubmit, followUpSubmitAction } =
      goalReplacementConfirmation;
    setGoalReplacementConfirmation(null);
    void submitComposer({
      confirmedGoalReplacementDraft: draft,
      focusComposerAfterSubmit,
      followUpSubmitAction,
      skipGoalReplacementConfirmation: true,
    });
  }, [goalReplacementConfirmation]);
  const cancelGoalReplacement = useCallback(
    () => setGoalReplacementConfirmation(null),
    [],
  );

  // ── dictation / keymaps ─────────────────────────────────────────────────
  const voiceControls = useComposerDictation({
    conversationId: activeConversationId,
    executionTargetCwd: executionTarget.cwd,
    executionTargetHostId: executionTarget.hostId,
    isComposerInputVisible: !hasApprovalSurface,
    getDictationSurroundingText: () => composerController.getText(),
    shouldHandleDictation: () =>
      isComposerDictationTarget({
        composerInput: composerController.view.dom,
        focusedElement: document.activeElement,
      }),
    onRestrictedSessionTextChange: setRestrictedSessionText,
  });
  const { abortDictation, isDictating } = voiceControls;
  registerComposerEscapeHandler(
    composerController.view.dom,
    (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !document.hasFocus()) return;
      const action = resolveEscapeAction({
        isDictating,
        followUpType: followUp?.type,
        isResponseInProgress,
        isComposerFocused: composerController.view.hasFocus(),
        hasActiveMentionMenu: hasActiveMentionMenu(
          composerController.view.state,
        ),
        isStopTurnConfirmationVisible,
      });
      switch (action) {
        case "abort-dictation":
          event.preventDefault();
          abortDictation();
          return;
        case "focus-composer":
          focusComposer();
          return;
        case "confirm-stop-turn":
          event.preventDefault();
          confirmStopTurn();
          return;
        case "stop-turn":
          event.preventDefault();
          if (event.repeat) return;
          handleStop();
          focusComposer();
          return;
      }
    },
  );

  const maybeSendQueuedSteerMessage = (action?: string) => {
    if (
      followUp?.type !== "local" ||
      !isResponseInProgress ||
      hasMessageContent
    )
      return false;
    const messageId = messages[0]?.id;
    if (!messageId) return false;
    sendQueuedSteerMessage({
      conversationId: activeConversationId,
      executionHostId: currentLocalExecutionHostId,
      messageId,
      queuedMessages: messages,
      removeQueuedMessage: actions.remove,
      updateQueuedMessage: actions.update,
      onSubmitLocal,
    });
    focusComposer();
    return true;
  };
  const onEnterKey = useEffectEvent((event: KeyboardEvent) => {
    const cmd = event.metaKey || event.ctrlKey;
    let matches = false;
    switch (enterBehavior) {
      case "enter":
        matches = cmd && !event.shiftKey && !event.altKey;
        break;
      case "cmdIfMultiline":
      case "cmdAlways":
        matches = cmd && event.shiftKey && !event.altKey;
        break;
    }
    if (!matches || followUp?.type !== "local" || !isResponseInProgress)
      return false;
    event.preventDefault();
    const action = isQueueingEnabled ? "steer" : "queue";
    if (maybeSendQueuedSteerMessage(action)) return true;
    void submit({
      followUpSubmitAction: action,
      focusComposerAfterSubmit: true,
    });
    return true;
  });
  const onOtherKey = useEffectEvent((event: KeyboardEvent) =>
    resolveComposerKeyAction({
      event,
      isComposerFocused: composerController.view.hasFocus(),
      hasActiveMentionMenu: hasActiveMentionMenu(composerController.view.state),
      hasPlanMode: collaborationModes.some(
        (item) => (item as { mode: string }).mode === "plan",
      ),
      hasDefaultMode: collaborationModes.some(
        (item) => (item as { mode: string }).mode === "default",
      ),
      isPlanMode:
        (activeCollaborationMode as { mode?: string })?.mode === "plan",
      setSelectedMode: setSelectedCollaborationMode,
    }),
  );
  useEffect(
    () =>
      registerComposerEnterKeymap(composerController.view, {
        Backspace: onOtherKey,
        Enter: onEnterKey,
        Escape: onOtherKey,
        Tab: onOtherKey,
      }),
    [composerController],
  );

  // ── message editing / pasted text / drops ───────────────────────────────
  const {
    editingMessageId,
    handleDeleteMessage,
    handleEditMessage,
    handleEditedMessageSubmitted,
    handleSendNowMessage,
  } = useComposerMessageEditing({
    conversationId: activeConversationId,
    executionHostId: currentLocalExecutionHostId,
    focusComposer,
    incrementAttachmentGeneration: () => {
      attachmentGenRef.current += 1;
    },
    onSubmitLocal,
    queuedFollowUps,
    remoteSshMessageAnalyticsContext,
    setComments,
    setPriorConversation,
  });
  const {
    handlePastedText,
    handleRemoveFileAttachment,
    handleRemovePendingPastedTextAttachment,
    handleRemovePastedTextAttachment,
    handleShowPastedTextInTextField,
  } = usePastedTextAttachmentHandlers({
    canceledPendingFileAttachmentIds:
      canceledPendingFileAttachmentIdsRef.current,
    executionHostId,
    fileAttachments,
    conversationId: activeConversationId,
    pastedTextAttachments,
    setFileAttachments,
    setPastedTextAttachments,
    setPendingPastedTextAttachments,
  });
  const {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
  } = useComposerContextActions({
    addImages: attachmentActions.addImages,
    directBrowserConversationId,
    dragCounterRef,
    dropTargetPortalTarget,
    isDragActive,
    setIsDragActive,
    setShowShiftOverlay,
  });

  // ── footer / placeholder / submit-button ────────────────────────────────
  const submitButtonMode =
    isResponseInProgress && !hasMessageContent ? "stop" : "submit";
  const showRunLocationDropdownHome =
    externalFooterVariant === "home" && !hideRunLocationDropdownOverride;
  const hideRunLocationDropdown =
    isWorkspaceRootsLoading ||
    isSideConversation ||
    (workspaceRootForCurrentSubmit === "~" && !showRunLocationDropdownHome) ||
    (isProjectlessConversation && !showRunLocationDropdownHome) ||
    (hideRunLocationDropdownOverride && !showRunLocationDropdownHome);
  const externalFooterProps = {
    composerMode,
    setComposerMode,
    isResponseInProgress,
    worktreeEnvironmentHostId: executionTarget.hostId,
    worktreeEnvironmentWorkspaceRoot: worktreeExecutionCwd,
    localRemoteExecutionTarget: executionTarget,
    codexHome,
    variant: externalFooterVariant,
    showRuntimeControls: !isHotkeyWindowSurface,
    hideRunLocationDropdown,
    showWorkspaceDropdown: showWorkspaceDropdownInFooter && !isSideConversation,
    gitRootForStartingState,
    showFooterBranchWhen,
    freeUpsellButton,
    activeProjectIdOverride:
      externalFooterVariant === "home"
        ? (selectedRemoteProjectId ?? activeWorkspaceRoot)
        : undefined,
  };
  const hasQueuedMessages = messages.length > 0;
  const restrictedSessionSuggestion =
    restrictedSessionText != null && restrictedSessionText.length > 0;
  const hookScanCwd = scope.value.kind === "new" ? executionCwd : null;
  const { data: hookScanData } = useAtomFamily(requiredHooksFilter, {
    hostId: currentLocalExecutionHostId,
    cwd: hookScanCwd,
  });
  const hooksNeedingReview = hookScanData?.data
    .find((item: { cwd: string }) => item.cwd === hookScanCwd)
    ?.hooks.filter(requiredHooksFilter);
  const hooksNeedingReviewCount = hooksNeedingReview?.length ?? 0;
  const showHooksNeedingReview =
    scope.value.kind === "new" &&
    hooksNeedingReviewCount > 0 &&
    !hasMessageContent;
  const showAboveComposerTray =
    aboveComposerHeaderContent != null ||
    showWindowsSandboxBanner ||
    hasError ||
    showHooksNeedingReview ||
    restrictedSessionSuggestion ||
    hasQueuedMessages ||
    threadGoal != null;
  const hasAboveComposerTrayBorder =
    !followUp &&
    (showWindowsSandboxBanner || hasError) &&
    !restrictedSessionSuggestion &&
    !hasQueuedMessages &&
    threadGoal == null &&
    aboveComposerHeaderContent == null;
  const hasDropTargetPortal = dropTargetPortalTarget != null;
  const placeholder = useComposerPlaceholder({
    intl,
    followUpType: followUp?.type,
    composerMode,
    cloudStartingState: followUpCloudStartingState,
    isGoalModeActive: false,
    isPlanModeActive:
      (activeCollaborationMode as { mode?: string })?.mode === "plan",
    placeholderText,
  });
  const onSubmitButton = useCallback(() => {
    if (maybeSendQueuedSteerMessage()) return;
    if (submitButtonMode === "submit")
      void submit({ focusComposerAfterSubmit: true });
  }, [submitButtonMode]);
  useRegisterCommand("composer.submit", onSubmitButton, { enabled: true });

  const isSingleLine = layoutMode;
  const inputLayout = isSingleLine ? "single-line" : "multiline";
  const inputSpacing =
    hotkeyWindowHomeFooterControls == null ? "default" : "flush";
  const composerInput = (
    <Composer.Input
      ref={isSingleLine ? setSingleLineInputMeasureRef : null}
      layout={inputLayout}
      spacing={inputSpacing}
    >
      <ComposerInputField
        className={clsx(
          "text-base",
          !isSingleLine && "[&_.ProseMirror]:leading-5",
        )}
        isFocusComposerTarget
        singleLine={isSingleLine}
        minHeight={isSingleLine ? "1.25rem" : "2.75rem"}
        composerController={composerController}
        placeholder={placeholder}
        onMentionActivate={useMentionActivationHandler({
          scope,
          navigate,
          openFile: openFile.mutate,
          hostConfig: currentLocalExecutionHostConfig,
          hostId: currentLocalExecutionHostId,
          cwd: gitRepoRootForCwd,
        })}
        onSubmit={onSubmitButton}
      />
    </Composer.Input>
  );
  const addContextButton = (
    <AddContextButton
      active={atMentionAutocomplete.ui?.active === true}
      onOpen={() => {
        composerController.toggleContextSuggestions();
      }}
    />
  );

  return (
    <>
      {!hasApprovalSurface ? (
        <ComposerStatusMenuRow
          agentMode={agentMode}
          composerMode={composerMode}
          currentLocalExecutionCwd={currentLocalExecutionCwd}
          currentLocalExecutionHostId={currentLocalExecutionHostId}
          onSubmitInitPrompt={submitInitPrompt}
          resolvedCwd={resolvedCwd}
          setIsStatusMenuOpen={setIsStatusMenuOpen}
          skillLookupRoots={suggestionRoots}
        />
      ) : null}
      {!isSideConversation && !hasApprovalSurface ? (
        <SideChatPrompt
          enabled={onCreateSideConversation != null}
          onOpenSideChat={() =>
            void openSideChat({ onCreateSideConversation, scope, intl })
          }
        />
      ) : null}
      <div
        className="relative flex w-full flex-col gap-2"
        onPaste={!hasApprovalSurface ? handlePaste : undefined}
      >
        {!hasApprovalSurface &&
        dropTargetPortalTarget != null &&
        showDropOverlay
          ? createPortal(<ComposerDropOverlay />, dropTargetPortalTarget)
          : null}
        {showAboveComposerTray
          ? createPortal(
              <AboveComposerPanel
                className={clsx(hasAboveComposerTrayBorder && "-mb-px", false)}
                expandedTopTray={hotkeyWindowHomeFooterControls != null}
              >
                {hasQueuedMessages ? (
                  <QueuedMessageList
                    messages={messages}
                    editingMessageId={editingMessageId}
                    hostId={currentLocalExecutionHostId}
                    isQueueingEnabled={isQueueingEnabled}
                    onEditMessage={handleEditMessage}
                    onDeleteMessage={handleDeleteMessage}
                    onSendNowMessage={handleSendNowMessage}
                    onReorderMessages={actions.reorder}
                    onResumeInterruptedQueue={actions.resumeInterruptedSteers}
                  />
                ) : null}
                {activeConversationId != null &&
                threadGoal != null &&
                (threadGoal as { status?: string }).status !== "complete" ? (
                  <ThreadGoalBanner
                    conversationId={activeConversationId}
                    goal={threadGoal}
                    hostId={currentLocalExecutionHostId}
                    permissionOverrideThreadSettings={
                      permissionOverrideThreadSettings
                    }
                  />
                ) : null}
                {showHooksNeedingReview ? (
                  <BackgroundSubagentsPanel
                    canStopAll={canStopAllBackgroundThreads}
                    onOpenThread={(conversationId: string) => {
                      void openBackgroundThread(conversationId);
                    }}
                    onStopAll={stopAllBackgroundThreads}
                    rows={backgroundRows}
                  />
                ) : null}
                {hasError ? <WindowsSandboxError onRetry={retry} /> : null}
                {!hasError && showWindowsSandboxBanner ? (
                  <WindowsSandboxSetupBanner
                    cwd={executionCwd}
                    requirement={requirement ?? "setup"}
                    setShowWindowsSandboxBanner={setShowWindowsSandboxBanner}
                  />
                ) : null}
                {showHooksNeedingReview ? (
                  <HooksNeedingReviewBanner
                    count={hooksNeedingReviewCount}
                    hooksNeedingReview={hooksNeedingReview}
                    hostId={currentLocalExecutionHostId}
                    projectRoot={savedWorkspaceRoot}
                  />
                ) : null}
                {aboveComposerHeaderContent}
              </AboveComposerPanel>,
              dropTargetPortalTarget as Element,
            )
          : null}
        {activeMessageLimitBanner?.variant === "first_block" ? (
          <FirstBlockRateLimitBanner
            domain={activeMessageLimitBanner.domain}
            threadId={activeMessageLimitBanner.conversationId}
            turnId={activeMessageLimitBanner.turnId}
          />
        ) : activeMessageLimitBanner == null ? (
          <RateLimitBanner
            isUsageBannerEnabled={isUsageBannerEnabled}
            modelName={modelLimitName}
            resetAt={modelLimitResetAt}
            rateLimit={rateLimit}
            rateLimitWarningThreshold={rateLimitWarningThreshold}
            showModelLimit={showModelLimitBanner}
            showWorkspaceUsageLimit={showWorkspaceUsageLimitBanner}
            showUpsell={showCoreRateLimitUpsell}
          />
        ) : (
          <AnnouncementBanner
            conversationId={activeMessageLimitBanner.conversationId}
            variant={activeMessageLimitBanner.variant}
            onClose={() => dismissMessageLimitBanner(scope, remoteProjectPin)}
          />
        )}
        {showContextSuggestions ? (
          <PluginContextLoader
            composerController={composerController}
            hostId={currentLocalExecutionHostId}
            roots={suggestionRoots}
          />
        ) : null}
        {composerModeSetting === "cloud" ? <CloudModeIndicator /> : null}
        <div className="relative">
          <AboveComposerSuggestions
            contextualSuggestions={{
              backgroundAgents: mentionItems,
              excludedThreadIds:
                activeConversationId == null
                  ? mentionedThreadIds
                  : [activeConversationId],
              hostId: currentLocalExecutionHostId,
              isHomeMenu: externalFooterVariant === "home",
              leadingItems: buildContextualLeadingItems(contextualLeadingItems),
              onAddContext: atMentionAutocomplete.addMention,
              onRequestClose: atMentionAutocomplete.closeAutocomplete,
              roots: suggestionRoots,
              skillRoots: suggestionRoots,
            }}
            contextualSuggestionUi={atMentionAutocomplete.ui}
            hideSideSlashCommand={isSideConversation}
            isHomeMenu={externalFooterVariant === "home"}
            skillSuggestions={{
              autocomplete: skillMentionAutocomplete,
              cwd: resolvedCwd,
              hostId: currentLocalExecutionHostId,
              roots: suggestionRoots,
            }}
          />
          {isAutoSingleLine ? (
            <span
              ref={setSingleLineTextMeasureRef}
              className="text-size-chat pointer-events-none invisible absolute h-0 w-max max-w-none overflow-hidden whitespace-pre"
              aria-hidden
            >
              {hasText}
            </span>
          ) : null}
          <AboveComposerSuggestionActions
            hideArtifactPluginSuggestions={hideArtifactPluginSuggestions}
            showPlanKeywordSuggestion={showPlanKeywordSuggestion}
          />
          <ComposerContextFilesWatcher
            hostId={currentLocalExecutionHostId}
            roots={suggestionRoots}
          />
          {hasApprovalSurface ? (
            <div
              className={clsx("relative flex flex-col gap-2", surfaceClassName)}
            >
              {hasFirstApproval && firstApproval != null ? (
                <PendingRequestItemPanel
                  key={
                    firstApproval.pendingRequest.item.approvalRequestId ??
                    firstApproval.pendingRequest.item.callId
                  }
                  approvalQuestionActor={
                    <span className="font-medium text-token-foreground">
                      {firstApproval.mentionLabel}
                    </span>
                  }
                  conversationId={firstApproval.conversationId}
                  hostId={firstApprovalHostId}
                  pendingRequest={firstApproval.pendingRequest}
                  onSubmitLocalFollowup={(prompt: unknown, mode: unknown) =>
                    void submitFollowUpApproval(
                      firstApproval.conversationId,
                      prompt,
                      mode,
                    )
                  }
                />
              ) : null}
              {hasPendingApproval && pendingApproval != null ? (
                <PendingRequestItemPanel
                  key={pendingApprovalKey}
                  conversationId={activeConversationId}
                  hostId={mcpManagerHostId}
                  pendingRequest={pendingApproval}
                  onSubmitLocalFollowup={submitLocalApproval}
                />
              ) : null}
            </div>
          ) : (
            <Composer
              className={surfaceClassName}
              externalFooterVariant={externalFooterVariant}
              hasDropTargetPortal={hasDropTargetPortal}
              isDragActive={isDragActive}
              isSubmitting={isSubmitting}
              layout={inputLayout}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              showShiftOverlay={showShiftOverlay}
            >
              <Composer.Body>
                {isSingleLine ? null : (
                  <Composer.Attachments
                    ref={attachmentsContainerRef}
                    hasVisibleAttachments={hasVisibleAttachments}
                    spacing={inputSpacing}
                  >
                    <ComposerAttachmentPills
                      imageAttachments={visibleImageAttachments}
                      imageComments={imageCommentDraftComments}
                      pendingAppshotCaptures={pendingCaptures}
                      fileAttachments={fileAttachments}
                      pastedTextAttachments={pastedTextAttachments}
                      pendingFileAttachments={pendingFileAttachments}
                      pendingPastedTextAttachments={
                        pendingPastedTextAttachments
                      }
                      commentAttachments={commentAttachments}
                      mcpAppModelContextAttachments={
                        mcpAppModelContextAttachments
                      }
                      selectedTextAttachments={selectedTextAttachments}
                      chromeExtensionPageSelection={extensionPageSelection}
                      pullRequestChecks={pullRequestChecks}
                      pullRequestMergeConflict={pullRequestMergeConflict}
                      onRemoveImage={handleRemoveImage}
                      onRemoveAppshotContext={handleRemoveAppshotContext}
                      onRemoveFileAttachment={handleRemoveFileAttachment}
                      onRemovePastedTextAttachment={
                        handleRemovePastedTextAttachment
                      }
                      onShowPastedTextInTextField={(id: unknown) =>
                        void handleShowPastedTextInTextField(id)
                      }
                      onRemovePendingFileAttachment={
                        handleRemovePendingFileAttachment
                      }
                      onRemovePendingPastedTextAttachment={
                        handleRemovePendingPastedTextAttachment
                      }
                      onRemoveFile={handleRemoveFile}
                      onOpenFile={(descriptor: unknown, hostId?: string) =>
                        openComposerReferencedFile(
                          descriptor,
                          hostId ?? executionHostId,
                          {
                            cwd: gitRepoRootForCwd,
                            openFile: openFile.mutate,
                          },
                        )
                      }
                      addedFiles={addedFiles}
                      onRemoveAllPullRequestChecks={() =>
                        setComposerStateField("pullRequestChecks", [])
                      }
                      onRemovePullRequestMergeConflict={() =>
                        setComposerStateField("pullRequestMergeConflict", null)
                      }
                      onRemoveAllBrowserCommentAttachments={() =>
                        setComments(
                          splitCommentAttachmentsBySurface(commentAttachments)
                            .browser,
                        )
                      }
                      onRemoveAllImageComments={() =>
                        removeAllImageComments(scope)
                      }
                      onRemoveAllMcpAppModelContextAttachments={() =>
                        setComposerStateField(
                          "mcpAppModelContextAttachments",
                          [],
                        )
                      }
                      onRemoveAllSelectedTextAttachments={() =>
                        setSelectedTextAttachments([])
                      }
                      priorConversation={priorConversation}
                      onRemovePriorConversation={() =>
                        setPriorConversation(null)
                      }
                      cwd={gitRepoRootForCwd}
                      hostId={currentLocalExecutionHostId}
                      fileAttachmentHostId={executionHostId}
                    />
                  </Composer.Attachments>
                )}
                <ComposerFooterControls
                  addContextButton={addContextButton}
                  composerMode={composerMode}
                  composerInput={composerInput}
                  executionTargetHostId={executionHostId}
                  isSingleLineLayout={isSingleLine}
                  hotkeyWindowHomeFooterControls={
                    hotkeyWindowHomeFooterControls
                  }
                  hasMessageContent={hasMessageContent}
                  permissionsHostId={permissionsHostId}
                  permissionsCwdOverride={permissionsCwdOverride}
                  submitButtonMode={submitButtonMode}
                  isStopTurnConfirmationVisible={isStopTurnConfirmationVisible}
                  isResponseInProgress={isResponseInProgress}
                  isQueueingEnabled={isQueueingEnabled}
                  isSubmitting={isSubmitting}
                  isStopping={isStopping}
                  onStop={handleStop}
                  emptySubmitTooltipNonce={emptySubmitTooltipNonce}
                  handleSubmit={(options: Record<string, unknown>) =>
                    void submit({ ...options, focusComposerAfterSubmit: true })
                  }
                  voiceControls={voiceControls}
                />
                {!hasApprovalSurface ? (
                  <SelectedTextPortal electron>
                    <AppshotCaptureControls
                      executionTargetHostId={executionHostId}
                      getAnimationDestinationFrame={
                        getAnimationDestinationFrame
                      }
                      getAttachmentGen={() => attachmentGenRef.current}
                      onCaptureAnimationDuration={
                        handleCaptureAnimationDuration
                      }
                      onCaptureSettled={handleCaptureSettled}
                      onCaptureStarted={handleCaptureStarted}
                      onAddAppshotContext={(
                        context: unknown,
                        index?: number,
                      ) => {
                        const at = handleCaptureAttached(index ?? null);
                        setAppshotContexts((prev: unknown[]) => [
                          ...prev.slice(0, at),
                          context,
                          ...prev.slice(at),
                        ]);
                      }}
                      composerInput={composerController.view.dom}
                    />
                  </SelectedTextPortal>
                ) : null}
                {scope.value.kind === "new" ? null : (
                  <SelectedTextAction
                    onAddSelectedText={useCallback(
                      (text: string) => {
                        if (text.trim().length !== 0) {
                          saveThreadStartTarget(scope, text);
                          focusComposer();
                        }
                      },
                      [focusComposer, scope],
                    )}
                    onOpenSideChat={
                      onCreateSideConversation != null
                        ? (prompt: unknown) => {
                            void openSideChat({
                              onCreateSideConversation,
                              scope,
                              prompt,
                              intl,
                            });
                          }
                        : undefined
                    }
                  />
                )}
              </Composer.Body>
            </Composer>
          )}
        </div>
        {composerLayoutMode === "multiline" ? (
          <Composer.ExternalFooterSlot
            isVisible={showFooter}
            variant={externalFooterVariant}
          >
            <ComposerExternalFooter {...externalFooterProps} />
          </Composer.ExternalFooterSlot>
        ) : null}
        {belowComposerContent?.({
          canUseTemplateAttachments: composerMode !== "cloud" && !isSubmitting,
          onAddFileAssetAttachment: addFileAssetAttachment,
        })}
        <GoalReplacementConfirmationDialog
          confirmation={goalReplacementConfirmation}
          onClose={cancelGoalReplacement}
          onConfirm={confirmGoalReplacement}
        />
        <GoalResumePromptDialog
          goal={pendingThreadGoal}
          onCancel={() => cancelThreadGoal(scope, activeConversationId)}
          onResume={() => resumeThreadGoal(scope, activeConversationId)}
        />
        <BlockedSubmitDialog
          open={false}
          onOpenChange={setLockedLayout}
          message={undefined}
        />
      </div>
    </>
  );
}
