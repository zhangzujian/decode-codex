// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Home page route wrapper, electron surface, and main page body.
import React, {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  Suspense,
  type ReactNode,
} from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { useAuth } from "../auth/use-auth";
import {
  useNavigate,
  useLocation,
} from "../conversations/local-conversation-route-runtime";
import { useOpenUpgradePlan } from "../settings/upgrade-plan-entry";
import { useFeatureGate } from "../boundaries/statsig.facade";
import { useWorkspaceOnboardingAutoLaunch } from "../runtime/current-app-initial/onboarding-select-workspace-current-runtime";
import { ThreadAppShellChrome } from "../app-shell/thread-app-shell-chrome";
import { HomeArtifactTemplates } from "./artifact-templates";
import { HomeConversationStarters } from "./home-conversation-starters";
import { HomePrefillArtifactPreview } from "./home-prefill-artifact-preview";
import { HomeAnnouncements } from "../app-shell/home-announcements";

// Facade re-exports for symbols not yet in restored/ — each typed `any`
/* TODO: identify source for each binding */
import {
  ScopedContextProvider,
  PlatformGate,
  sidePanelSlots,
  useNullAppShellRef,
  useStore,
  useSignalValue,
  currentRouteSignal,
  diffSourceSignal,
  browserHostInfoSignal,
  browserHostIdSignal,
  workspaceContextSignal,
  workspaceGroupsSignal,
  workspaceRootsSignal,
  isRemoteProjectPendingSignal,
  isPullRequestSyncEnabledSignal,
  isHomeSidePanelExpandedSignal,
  HomeScrollContainerContext,
  ElectronSurface,
  DiffSourceDisplay,
  HomeComposer,
  HomeAmbientSuggestionsContent,
  HomeStartActionsBar,
  HomeHeader,
  LocalConversationStateEffect,
  RemoteConversationStateEffect,
  HomeLogoIcon,
  clsx as cn,
  threadFooterClassName,
  motionTransitionConfig,
  motionLayoutDiv as MotionDiv,
  useRemoteProjects,
  useDetailLevel,
  EVERYDAY_WORK_DETAIL_LEVEL,
  normalizeWorkspaceRoot,
  useAccountsQuery,
  useCurrentUserQuery,
  useAccountInfoQuery,
  useDraftLocation,
  useIsElectron,
  useHomeComposerKeyboardShortcuts,
  getPlanInfo,
  useGetPricingUrl,
  useIsUpgradeEligible,
  initDiffSource,
  openRemoteProjectModal,
  logWorkspaceOnboardingEvent,
  workspaceOnboardingNavigationEvent,
  isWorkspaceOnboardingExperimentArm,
  onboardingDefaultProjectName,
  electronBridgeDispatch,
  useElectronMessageHandler,
  useRegisterSidePanelAction,
  updateDiffComments,
  setDraftConversationId,
  navigateToProject,
  buildDiffCommentsPayload,
  CommandMenuItem,
  CommandMenuGroup,
  useCommandMenuRegistration,
  SparklesIcon,
  ComposerButton,
} from "../boundaries/onboarding-commons-externals.facade";

export interface HomeNewChatPageProps {
  announcementStorybookOverride?: ReactNode;
  routeProjectId?: string | null;
}
export interface HomePageBodyProps {
  announcementStorybookOverride?: ReactNode;
  routeProjectId: string | null;
}

function getProjectKey(g: { projectId: string; label?: string | null }) {
  return `${g.projectId}:${g.label}`;
}
function prefetchUpgradePlanDialog() {
  import("../settings/upgrade-plan-dialog").catch(() => undefined);
}

export interface GetPlusButtonProps {
  onClick: (e: React.MouseEvent) => void;
}
export function GetPlusButton({ onClick }: GetPlusButtonProps) {
  return (
    <ComposerButton
      className="!bg-token-charts-purple/10 !text-token-charts-purple hover:!bg-token-charts-purple/20"
      color="secondary"
      onClick={onClick}
      onFocus={prefetchUpgradePlanDialog}
      onPointerEnter={prefetchUpgradePlanDialog}
      size="composerSm"
    >
      <SparklesIcon className="icon-xxs" />
      <FormattedMessage
        id="home.header.getPlus"
        defaultMessage="Get Plus"
        description="Upsell button label shown in the new thread page header for free users"
      />
    </ComposerButton>
  );
}

export function HomeSwitchWorkspaceCommand() {
  const appScopeStore = useStore(currentRouteSignal);
  const navigate = useNavigate();
  const groups = useSignalValue(workspaceGroupsSignal) as any[];
  const depKey = groups.map(getProjectKey).join("|");
  const render = useCallback(
    (close: () => void) =>
      groups.length === 0 ? null : (
        <CommandMenuGroup
          heading={
            <span className="block px-2 pt-2 text-sm text-token-description-foreground">
              <FormattedMessage
                id="codex.commandMenu.switchWorkspace"
                defaultMessage="Switch project"
                description="Command group label in the command menu for switching the active workspace on the home page"
              />
            </span>
          }
          className="flex flex-col"
          style={{ gap: "var(--spacing)" }}
          key="group-switch-workspace"
        >
          {groups.map((g: any) => (
            <CommandMenuItem
              key={g.projectId}
              value={g.label ?? ""}
              title={g.label ?? ""}
              onSelect={() => {
                navigateToProject(appScopeStore, navigate, g);
                close();
              }}
            />
          ))}
        </CommandMenuGroup>
      ),
    [appScopeStore, navigate, groups],
  );
  useCommandMenuRegistration({
    id: "home-switch-workspace",
    order: 1000,
    enabled: groups.length > 0,
    dependencies: [depKey],
    render,
  });
  return null;
}

export function HomeElectronSurface() {
  const appScopeStore = useStore(currentRouteSignal);
  const diffSource = useSignalValue(diffSourceSignal);
  useEffect(() => {
    initDiffSource(appScopeStore, "diff");
  }, [appScopeStore]);
  return (
    <>
      <ElectronSurface />
      <DiffSourceDisplay diffSource={diffSource} />
    </>
  );
}

export function HomeNewChatPage({
  announcementStorybookOverride,
  routeProjectId = null,
}: HomeNewChatPageProps) {
  const newChatRef = useNullAppShellRef("chatgpt.supportsNewChatKeyShortcut");
  return (
    <ScopedContextProvider>
      <div
        className="flex h-full flex-col"
        data-vscode-context='{"chatgpt.supportsNewChatMenu": true}'
        tabIndex={0}
        ref={newChatRef}
      >
        <HomeElectronSurface />
        <HomePageBody
          announcementStorybookOverride={announcementStorybookOverride}
          routeProjectId={routeProjectId}
        />
      </div>
    </ScopedContextProvider>
  );
}

export function HomePageBody({
  announcementStorybookOverride,
  routeProjectId,
}: HomePageBodyProps) {
  const currentRoute = useStore(currentRouteSignal);
  const intl = useIntl();
  const browserHostInfo = useSignalValue(browserHostInfoSignal) as any;
  const hostId = useSignalValue(browserHostIdSignal) as string;
  const { authMethod, email, planAtLogin } = useAuth();
  const { data: accountsData } = useAccountsQuery() as any;
  const { data: currentUserData } = useCurrentUserQuery() as any;
  const isEverydayWorkMode = useDetailLevel() === EVERYDAY_WORK_DETAIL_LEVEL;
  const navigate = useNavigate();
  const isElectron = useIsElectron() as () => boolean;
  const location = useLocation() as any;
  const locationState = location.state;
  const ctx = useSignalValue(workspaceContextSignal) as any;
  const groups = useSignalValue(workspaceGroupsSignal) as any[];
  const isRemoteProjectPending = useSignalValue(
    isRemoteProjectPendingSignal,
  ) as boolean;
  const rootsData = useSignalValue(workspaceRootsSignal) as any;
  const isPRSyncEnabled = useSignalValue(
    isPullRequestSyncEnabledSignal,
  ) as boolean;
  const isSidePanelExpanded = useSignalValue(
    isHomeSidePanelExpandedSignal,
  ) as boolean;
  const { data: accountInfoData } = useAccountInfoQuery("account-info", {
    queryConfig: { enabled: authMethod === "chatgpt" },
  }) as any;
  const {
    autoLaunchAction,
    isRemoteHost,
    setWorkspaceOnboardingAutoLaunchApplied,
    workspaceOnboardingExperimentArm,
  } = useWorkspaceOnboardingAutoLaunch() as any;
  const autoLaunchAppliedRef = useRef(false);
  const { isLoading, selectedRemoteProject, selectedRemoteProjectId } =
    useRemoteProjects() as any;

  const routeCtx =
    (currentRoute as any).value?.routeKind === "home"
      ? (currentRoute as any).value.projectContext
      : null;
  const pendingId =
    selectedRemoteProjectId ??
    (locationState?.prefillCwd != null &&
    locationState?.pendingLocalProjectPreviousWorkspaceRoot !== undefined &&
    rootsData?.roots?.[0] ===
      locationState.pendingLocalProjectPreviousWorkspaceRoot
      ? locationState.prefillCwd
      : (rootsData?.roots?.[0] ?? null));
  const activeProjectId = routeCtx?.projectId ?? routeProjectId ?? pendingId;
  const isProjectSelectionPending =
    routeCtx == null &&
    routeProjectId == null &&
    (isLoading || (selectedRemoteProjectId == null && isRemoteProjectPending));

  const activeGroup =
    groups.find((g: any) => g.projectId === activeProjectId) ?? null;
  const homeRunLocationRemoteProject =
    activeGroup?.projectKind === "remote" && activeGroup.hostId != null
      ? {
          id: activeGroup.projectId,
          hostId: activeGroup.hostId,
          label: activeGroup.label,
          remotePath: activeGroup.path,
        }
      : selectedRemoteProject?.id === activeProjectId
        ? selectedRemoteProject
        : null;
  const hasRunLocation =
    (activeGroup != null &&
    (activeGroup.projectKind !== "local" || !activeGroup.isLocalProject)
      ? activeGroup.repositoryData != null
      : ctx.kind === "git") || homeRunLocationRemoteProject != null;

  const draftLocationId = useDraftLocation({ entrypoint: "home" }) as string;
  const browserConversationId = (currentRoute as any).value?.clientThreadId as
    | string
    | null;
  const handleLocalConversationCreated = useCallback(
    async (conversationId: string, state: unknown) => {
      updateDiffComments(currentRoute, "diff_comments", (c: unknown) =>
        buildDiffCommentsPayload({
          sourceConversationId: draftLocationId,
          targetConversationId: conversationId,
          diffComments: c,
        }),
      );
      setDraftConversationId(currentRoute, {
        conversationId,
        draftThreadLocationId: draftLocationId,
      });
      if ((isElectron as any)())
        await navigate(`/local/${conversationId}`, { state });
    },
    [currentRoute, draftLocationId, isElectron, navigate],
  );

  const plan =
    currentUserData?.plan_type ?? accountInfoData?.plan ?? planAtLogin;
  const keyboardShortcuts = useHomeComposerKeyboardShortcuts({
    authMethod,
    plan,
    currentAccount: currentUserData,
    accounts: accountsData?.accounts,
  }) as boolean;
  const pricePlan = getPlanInfo(plan)?.pricePlan ?? null;
  const openUpgradePlan = useOpenUpgradePlan();
  const getPricingUrl = useGetPricingUrl({ logExposure: true });
  const showArtifactTemplates =
    useFeatureGate("2425897452") &&
    (useIsUpgradeEligible({
      authMethod,
      email: accountInfoData?.email ?? email,
      plan,
    }) as boolean);
  const showArtifactTemplatesOrV2 =
    useFeatureGate("1857002365") || showArtifactTemplates;

  const workspaceRoot = isRemoteHost
    ? null
    : ((ctx.cwd != null ? normalizeWorkspaceRoot(ctx.cwd) : null) ??
      normalizeWorkspaceRoot("~"));
  const showSuggestions =
    locationState?.sidebarOnboardingChecklistCompletionOnSubmit == null &&
    locationState?.hideHomeSuggestionsForCurrentEntry !== true;

  useEffect(() => {
    if (
      autoLaunchAppliedRef.current ||
      autoLaunchAction !== "home_open_picker_or_create_default"
    )
      return;
    autoLaunchAppliedRef.current = true;
    setWorkspaceOnboardingAutoLaunchApplied(true);
    electronBridgeDispatch(
      "electron-onboarding-pick-workspace-or-create-default",
      { defaultProjectName: onboardingDefaultProjectName },
    );
  }, [autoLaunchAction, setWorkspaceOnboardingAutoLaunchApplied]);

  useElectronMessageHandler(
    "electron-onboarding-pick-workspace-or-create-default-result",
    (result: { success: boolean }) => {
      if (!result.success) return;
      if (
        (isWorkspaceOnboardingExperimentArm as any)(
          workspaceOnboardingExperimentArm,
        )
      ) {
        logWorkspaceOnboardingEvent(
          currentRoute,
          workspaceOnboardingNavigationEvent,
          {
            selectedWorkspacesCount: 1,
            totalWorkspacesCount: 0,
            autoNavigated: true,
            experimentArm: workspaceOnboardingExperimentArm,
          },
        );
      }
    },
  );

  const navigateReplacingState = useEffectEvent((s: unknown) => {
    navigate("/", { replace: true, state: s });
  });
  useEffect(() => {
    if (locationState?.pendingViewAction !== "open-create-remote-project-modal")
      return;
    openRemoteProjectModal({ setActive: true });
    const { pendingViewAction: _v, ...rest } = locationState ?? {};
    navigateReplacingState(rest);
  }, [locationState]);

  useRegisterSidePanelAction((action: unknown) => {
    import("../app-shell/thread-side-panel-tabs").then(
      ({ toggleThreadSidePanel }: any) => {
        toggleThreadSidePanel(currentRoute, action);
      },
    );
  });

  const isSidePanelCollapsed = isPRSyncEnabled && isSidePanelExpanded;
  const upgradeCta = keyboardShortcuts ? (
    <GetPlusButton
      onClick={(e) =>
        openUpgradePlan({
          scope: currentRoute,
          currentPlan: pricePlan,
          defaultTab: "personal",
          event: e,
          getPricingUrl,
          source: "home_upgrade_cta",
        })
      }
    />
  ) : null;
  const announcement = announcementStorybookOverride ?? <HomeAnnouncements />;
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(
    null,
  );
  const placeholder = intl.formatMessage({
    id: "homePage.composer.placeholder.askAnything",
    defaultMessage: "Do anything",
    description: "Initial placeholder for the new home page composer",
  });

  const composerProps = {
    browserConversationId,
    homeRunLocationRemoteProject,
    onLocalConversationCreated: handleLocalConversationCreated,
    hideRunLocationDropdownOverride: !hasRunLocation,
    hideArtifactPluginSuggestions: true,
    showPlanKeywordSuggestion: false,
    placeholderText: placeholder,
  };

  return (
    <>
      <PlatformGate electron>
        <LocalConversationStateEffect />
        <RemoteConversationStateEffect lastTurnCwd={null} lastTurnDiff={null} />
      </PlatformGate>
      <PlatformGate electron>
        {locationState?.prefillArtifactPreviewFiles?.length > 0 && (
          <HomePrefillArtifactPreview
            hostId={hostId}
            locationKey={location.key}
            previewFiles={locationState.prefillArtifactPreviewFiles}
          />
        )}
      </PlatformGate>
      <PlatformGate extension>
        <HomeHeader />
      </PlatformGate>
      <PlatformGate extension>
        <HomeScrollContainerContext value={scrollContainer}>
          <div
            ref={setScrollContainer}
            className="relative flex h-full flex-col"
          >
            <div
              className="[container-type:size] relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden [container-name:home-main-content]"
              role="main"
            >
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-panel">
                <PlatformGate electron>
                  <HomeSwitchWorkspaceCommand />
                </PlatformGate>
                <HomeLogoIcon className="pointer-events-none fixed top-[calc(50%_-_55px)] left-1/2 -z-1 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-token-foreground/20 electron:hidden" />
              </div>
            </div>
            <div
              className={cn(
                threadFooterClassName,
                "relative z-10 -mt-[var(--thread-footer-overlap)] flex flex-col gap-2 pb-2",
              )}
            >
              <div className="home-banners mt-2 flex flex-col gap-2 empty:hidden">
                {announcement}
              </div>
              <PlatformGate extension>
                <HomeComposer
                  className="electron:hidden"
                  hideRunLocationDropdownOverride={ctx.kind !== "git"}
                  placeholderText={placeholder}
                  hideArtifactPluginSuggestions
                  freeUpsellButton={upgradeCta}
                />
              </PlatformGate>
            </div>
          </div>
        </HomeScrollContainerContext>
      </PlatformGate>
      <PlatformGate browser electron>
        <HomeScrollContainerContext value={scrollContainer}>
          <HomeSwitchWorkspaceCommand />
          <div ref={setScrollContainer} className="relative min-h-0 flex-1">
            <sidePanelSlots.Header>
              <HomeStartActionsBar startActions={upgradeCta} />
            </sidePanelSlots.Header>
            <ThreadAppShellChrome
              browserHostDisplayName={browserHostInfo.display_name}
              conversationId={null}
              threadType="new"
            />
            <div className="h-full min-h-0">
              <div className="@container/left-panel relative flex h-full flex-col">
                <div
                  className={cn(
                    "[container-type:size] relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto [container-name:home-main-content]",
                    false,
                    showArtifactTemplatesOrV2 &&
                      "[scrollbar-gutter:stable_both-edges] [&:has([data-home-artifact-templates])_[data-home-ambient-suggestions]]:hidden",
                  )}
                  role="main"
                >
                  <Suspense fallback={null}>
                    <div className="mx-auto flex h-[39%] w-[min(100%,var(--thread-content-max-width))] min-w-0 shrink-0 flex-col justify-end px-panel pb-6">
                      <HomeAmbientSuggestionsContent
                        activeProjectId={activeProjectId}
                        isEverydayWorkMode={isEverydayWorkMode}
                        isProjectSelectionPending={isProjectSelectionPending}
                        workspaceGroups={groups}
                        projectContext={ctx}
                      />
                    </div>
                    <div className="sticky top-0 z-10 mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col gap-2 px-panel pt-5 electron:bg-token-main-surface-primary">
                      {!isSidePanelCollapsed && (
                        <HomeComposer
                          className="w-full"
                          aboveComposerContent={
                            workspaceRoot == null && ctx.cwd != null ? (
                              <HomeConversationStarters
                                activeWorkspaceRoot={ctx.cwd}
                                hostId={hostId}
                                portalTarget={null}
                              />
                            ) : null
                          }
                          belowComposerContent={
                            showArtifactTemplatesOrV2
                              ? () => <HomeArtifactTemplates />
                              : undefined
                          }
                          externalFooterVariant="home"
                          {...composerProps}
                        />
                      )}
                    </div>
                  </Suspense>
                  {showSuggestions && (
                    <PlatformGate electron>
                      <div className="mx-auto w-[min(100%,var(--thread-content-max-width))] min-w-0 px-panel pt-2 pb-6">
                        <MotionDiv
                          data-home-ambient-suggestions
                          layout="position"
                          transition={motionTransitionConfig}
                          className="h-fit min-h-0 min-w-0 pt-2"
                        >
                          <HomeAmbientSuggestionsContent
                            generatedSuggestionsEnabled={showArtifactTemplates}
                            hostId={hostId}
                            onLocalConversationCreated={
                              handleLocalConversationCreated
                            }
                            plan={plan}
                            projectRoot={workspaceRoot}
                            routeEntryKey={location.key}
                          />
                        </MotionDiv>
                      </div>
                    </PlatformGate>
                  )}
                  <PlatformGate electron>
                    <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center">
                      <div className="flex w-[min(100%,var(--thread-content-max-width))] min-w-0 px-panel">
                        <div className="home-banners pointer-events-auto flex w-full min-w-0 flex-col gap-2 empty:hidden">
                          {announcement}
                        </div>
                      </div>
                    </div>
                  </PlatformGate>
                </div>
              </div>
            </div>
            {isSidePanelCollapsed && (
              <sidePanelSlots.Footer>
                <HomeComposer
                  composerLayoutMode="auto-single-line"
                  showWorkspaceDropdownInFooter={false}
                  surfaceClassName="electron:dark:bg-token-side-bar-background"
                  {...composerProps}
                />
              </sidePanelSlots.Footer>
            )}
          </div>
        </HomeScrollContainerContext>
      </PlatformGate>
    </>
  );
}
