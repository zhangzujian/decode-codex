// Restored from ref/webview/assets/projects-index-page-CJjk7dRY.js
// Projects index page restored from the current Codex webview chunk.

import { once as rolldownRuntimeN } from "../../runtime/commonjs-interop";

import {
  currentAppInitialSharedCompatSlotUpperO as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wO,
  currentAppInitialSharedCompatSlotLowerC as _appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC,
  currentAppInitialSharedCompatSlotLowerGLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc,
  currentAppInitialSharedCompatSlotLowerLLowerC as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc,
  currentAppInitialSharedCompatSlotLowerTLowerR as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTr,
  currentAppInitialSharedCompatSlotLowerU as appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wU,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";

import {
  worktreeNewThreadOrchestratorCompatSlotUpperALowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsAm,
  worktreeNewThreadOrchestratorCompatSlotLowerJLowerM as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsJm,
  worktreeNewThreadOrchestratorCompatSlotLowerRLowerR as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsRr,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

import {
  worktreeNewThreadQueryCompatSlotUnderscoreLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwS,
  worktreeNewThreadQueryCompatSlotLowerVLowerS as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVs,
  worktreeNewThreadQueryCompatSlotLowerXLowerP as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwXp,
  worktreeNewThreadQueryCompatSlotLowerYLowerP as appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYp,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";

import {
  intlFormatDateTimeRuntime as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIy,
  currentAppInitialSharedRuntime0307 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRv,
  currentAppInitialSharedFunction0375 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy,
  currentAppInitialSharedMember0924 as appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";

import {
  appMainCurrentCompatSlotUpperXLowerD as appInitialAppMainOnboardingPageXd,
  appMainCurrentCompatSlotUpperZLowerD as appInitialAppMainOnboardingPageZd,
} from "../../vendor/app-main-current-runtime/index";

import {
  projectHoverCardCurrentCompatSlotLowerC as appInitialAppMainProjectsIndexPageLocalConversationPageC,
  projectHoverCardCurrentCompatSlotLowerL as appInitialAppMainProjectsIndexPageLocalConversationPageL,
  projectHoverCardCurrentCompatSlotLowerO as appInitialAppMainProjectsIndexPageLocalConversationPageO,
  projectHoverCardCurrentCompatSlotLowerS as appInitialAppMainProjectsIndexPageLocalConversationPageS,
} from "../../runtime/current-app-initial/project-hover-card-current-runtime";

import {
  projectsIndexCurrentCompatSlotLowerNLowerT as appInitialAppMainRemoteConversationPageProjectsIndexPageNt,
  projectsIndexCurrentCompatSlotLowerTLowerT as appInitialAppMainRemoteConversationPageProjectsIndexPageTt,
} from "../../runtime/current-app-initial/projects-index-current-runtime";

import { projectIndexBinding14 } from "./runtime";

var $t = rolldownRuntimeN(() => {
  (appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wO(),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRv());
});

function ProjectSourcesCell(projectIndexOperand7) {
  let {
    hostId: hostId,
    hostLabel: hostLabel,
    isRemote: isRemote,
    sources: sources,
  } = projectIndexOperand7;
  if (sources.length === 0) {
    let projectIndexBinding231;
    return (
      <span className={`text-token-description-foreground`}>
        {projectIndexBinding14.createElement(
          appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `projectsIndex.sources.empty`,
            defaultMessage: `No sources`,
            description: `Empty source label in the projects index`,
          },
        )}
      </span>
    );
  }
  let projectIndexBinding190;
  {
    let projectIndexBinding232;
    ((projectIndexBinding232 = (
      projectIndexOperand21,
      projectIndexOperand22,
    ) => (
      <ProjectSourcePill
        key={`${projectIndexOperand21.path ?? projectIndexOperand21.label}-${projectIndexOperand22}`}
        hostId={hostId}
        hostLabel={hostLabel}
        isRemote={isRemote}
        source={projectIndexOperand21}
      />
    )),
      (projectIndexBinding190 = sources.map(projectIndexBinding232)));
  }
  return (
    <div className={`-ml-3 min-w-0 flex-1 overflow-visible`}>
      <div
        className={`flex min-w-0 gap-1.5 overflow-x-auto [mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] py-0.5 pr-5 pl-3 [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {projectIndexBinding190}
      </div>
    </div>
  );
}

function ProjectSourcePill(projectIndexOperand4) {
  let {
      hostId: hostId,
      hostLabel: hostLabel,
      isRemote: isRemote,
      source: source,
    } = projectIndexOperand4,
    projectIndexBinding164 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wU(
        `open-file`,
      ),
    projectIndexBinding165 =
      appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    projectIndexBinding166 = source.path,
    projectIndexBinding167 =
      isRemote && projectIndexBinding166 != null
        ? `${hostLabel ?? ``}${hostLabel == null ? `` : `: `}${projectIndexBinding166}`
        : projectIndexBinding166 == null
          ? source.label
          : appInitialAppMainProjectsIndexPageLocalConversationPageO(
              projectIndexBinding166,
            );
  let projectIndexBinding168 = projectIndexBinding167,
    projectIndexBinding169 = projectIndexBinding166 != null && !isRemote,
    projectIndexBinding170;
  if (isRemote && hostId != null) {
    let projectIndexBinding237;
    ((projectIndexBinding237 = projectIndexBinding14.createElement(
      appInitialAppMainRemoteConversationPageProjectsIndexPageTt,
      {
        className: `icon-xs shrink-0`,
        disableTooltip: !0,
        envType: `remote`,
        hostId: hostId,
      },
    )),
      (projectIndexBinding170 = projectIndexBinding237));
  } else if (source.kind === `file`) {
    let projectIndexBinding240;
    ((projectIndexBinding240 = projectIndexBinding14.createElement(
      appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwS,
      {
        className: `icon-xs shrink-0 text-token-description-foreground`,
      },
    )),
      (projectIndexBinding170 = projectIndexBinding240));
  } else {
    let projectIndexBinding218 = projectIndexBinding14.createElement(
      appInitialAppMainProjectsIndexPageLocalConversationPageC,
      {
        className: `icon-xs group-hover/source-pill:opacity-0 group-focus-visible/source-pill:opacity-0`,
      },
    );
    let projectIndexBinding219 = projectIndexBinding169
      ? projectIndexBinding14.createElement(appInitialAppMainOnboardingPageXd, {
          className: `icon-2xs absolute opacity-0 group-hover/source-pill:opacity-100 group-focus-visible/source-pill:opacity-100`,
          "aria-hidden": !0,
        })
      : null;
    let projectIndexBinding220;
    ((projectIndexBinding220 = (
      <span
        className={`relative flex h-4 w-4 shrink-0 items-center justify-center text-token-description-foreground`}
      >
        {projectIndexBinding218}
        {projectIndexBinding219}
      </span>
    )),
      (projectIndexBinding170 = projectIndexBinding220));
  }
  let projectIndexBinding171 = (
    <span className={`min-w-0 truncate`}>{source.label}</span>
  );
  let projectIndexBinding172 = (
    <>
      {projectIndexBinding170}
      {projectIndexBinding171}
    </>
  );
  let projectIndexBinding173 = projectIndexBinding172,
    projectIndexBinding174 = projectIndexBinding169 ? (
      <button
        type={`button`}
        className={`group/source-pill inline-flex max-w-56 shrink-0 cursor-interaction items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary hover:border-token-border-heavy focus-visible:border-token-focus-border focus-visible:outline-none`}
        aria-label={projectIndexBinding165.formatMessage(
          {
            id: `projectsIndex.sources.openSource`,
            defaultMessage: `Reveal {source}`,
            description: `Accessible label for revealing a project source folder in the system file manager`,
          },
          {
            source: source.label,
          },
        )}
        onClick={() => {
          appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsJm(
            {
              path: projectIndexBinding166,
              cwd: appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTr(
                projectIndexBinding166,
              ),
              target: `fileManager`,
              openFile: projectIndexBinding164.mutate,
            },
          );
        }}
      >
        {projectIndexBinding173}
      </button>
    ) : (
      <div
        className={`flex max-w-56 shrink-0 items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary`}
      >
        {projectIndexBinding173}
      </div>
    );
  return projectIndexBinding14.createElement(
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYp,
    {
      tooltipContent: projectIndexBinding168,
      children: projectIndexBinding174,
    },
  );
}

function normalizeTimestampMs(projectIndexOperand37) {
  return projectIndexOperand37 < 0xe8d4a51000
    ? projectIndexOperand37 * 1e3
    : projectIndexOperand37;
}

var projectIndexBinding1;

var projectIndexBinding2;

export var projectGridColumnsClassName;

export var projectIndexBinding3;

export var projectIndexBinding4;

export var projectIndexBinding5;

export var projectIndexBinding6;

export var projectIndexBinding7;

var projectIndexBinding8 = rolldownRuntimeN(() => {
  ((projectIndexBinding1 =
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGc()),
    appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wO(),
    appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dIy(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsRr(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwXp(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsAm(),
    appInitialAppMainRemoteConversationPageProjectsIndexPageNt(),
    appInitialAppMainOnboardingPageZd(),
    appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVs(),
    appInitialAppMainProjectsIndexPageLocalConversationPageL(),
    appInitialAppMainProjectsIndexPageLocalConversationPageS(),
    _appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC(),
    (projectIndexBinding2 =
      appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLc()),
    (projectGridColumnsClassName = `grid grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)_4rem_8rem] gap-x-4 max-[920px]:grid-cols-[minmax(0,1fr)_4rem_8rem] max-[680px]:grid-cols-[minmax(0,1fr)_8rem]`),
    (projectIndexBinding3 = `relative before:pointer-events-none before:absolute before:-inset-x-3 before:rounded-lg before:bg-token-list-hover-background before:opacity-0 hover:before:opacity-100`),
    (projectIndexBinding4 = `after:pointer-events-none after:absolute after:-top-px after:-inset-x-3 after:h-px after:bg-token-main-surface-primary after:opacity-0 hover:after:opacity-100`),
    (projectIndexBinding5 = `border-b border-token-border [&:has(+_[data-project-row-wrapper]:has(>_[data-project-row]:hover))]:border-b-transparent`),
    (projectIndexBinding6 = `relative z-10`),
    (projectIndexBinding7 = `h-8 w-8 shrink-0 rounded-lg !p-1 text-token-text-secondary hover:text-token-foreground focus-visible:text-token-foreground data-[state=open]:text-token-foreground`));
});

export class ProjectsIndexCells {
  static initialize = $t;
  static ProjectSourcesCell = ProjectSourcesCell;
  static ProjectSourcePill = ProjectSourcePill;
  static normalizeTimestampMs = normalizeTimestampMs;
  static getBinding(index: number) {
    return [
      projectIndexBinding1,
      projectIndexBinding2,
      projectIndexBinding3,
      projectIndexBinding4,
      projectIndexBinding5,
      projectIndexBinding6,
      projectIndexBinding7,
      projectIndexBinding8,
    ][index - 1];
  }
}
