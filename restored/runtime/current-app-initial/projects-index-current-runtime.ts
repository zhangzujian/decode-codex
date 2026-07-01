// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page-px21igmO.js
// Current projects-index compatibility surface. Named slots that have stable
// semantic restorations are wired to project helpers; unresolved UI/runtime
// slots still delegate to the exact current-hash bundle.

import {
  applyPendingThreadDropsToContainer,
  createSidebarShortcutLabelMap,
  getProjectGroupCollapseAction,
  parsePullRequestNumberFromUrl,
  resolveProjectCreationFlow,
} from "../../projects/projects-index-current-app-main/helpers";
import {
  getProjectIndexPullRequestStatus,
  getProjectIndexTaskPullRequestStatus,
} from "../../projects/projects-index-current-app-main/current-pull-request-status";
import {
  applyProjectGroupCollapseAction,
  hideAddProjectMenu,
  navigateToAutomationsPage,
  navigateToLibraryPage,
  navigateToPluginDirectoryFromSidebar,
  navigateToPullRequestsPage,
  navigateToSitesPage,
  openAddProjectFlow,
  openLocalProjectCreationDialog,
  openProjectInHomeRoute,
  openRemoteProjectSelection,
  toggleRecentSidebarSection,
} from "../../projects/projects-index-current-app-main/navigation";
import * as projectsIndexCurrentBundle from "../../vendor/projects-index-current-bundle";

export const projectsIndexCurrentCompatSlotDollar =
  projectsIndexCurrentBundle.$;
export const projectsIndexCurrentCompatSlotDollarLowerT =
  projectsIndexCurrentBundle.$t;
export const projectsIndexCurrentCompatSlotUpperA =
  projectsIndexCurrentBundle.A;
export const projectsIndexCurrentCompatSlotUpperALowerT =
  projectsIndexCurrentBundle.At;
export const projectsIndexCurrentCompatSlotUpperB =
  getProjectIndexPullRequestStatus;
export const projectsIndexCurrentCompatSlotUpperBLowerT =
  navigateToPluginDirectoryFromSidebar;
export const projectsIndexCurrentCompatSlotUpperC =
  projectsIndexCurrentBundle.C;
export const projectsIndexCurrentCompatSlotUpperCLowerT =
  projectsIndexCurrentBundle.Ct;
export const projectsIndexCurrentCompatSlotUpperD =
  projectsIndexCurrentBundle.D;
export const projectsIndexCurrentCompatSlotUpperDLowerT =
  projectsIndexCurrentBundle.Dt;
export const projectsIndexCurrentCompatSlotUpperE =
  projectsIndexCurrentBundle.E;
export const projectsIndexCurrentCompatSlotUpperELowerT =
  applyPendingThreadDropsToContainer;
export const projectsIndexCurrentCompatSlotUpperF =
  getProjectIndexTaskPullRequestStatus;
export const projectsIndexCurrentCompatSlotUpperFLowerT =
  projectsIndexCurrentBundle.Ft;
export const projectsIndexCurrentCompatSlotUpperG =
  projectsIndexCurrentBundle.G;
export const projectsIndexCurrentCompatSlotUpperGLowerT =
  projectsIndexCurrentBundle.Gt;
export const projectsIndexCurrentCompatSlotUpperH =
  projectsIndexCurrentBundle.H;
export const projectsIndexCurrentCompatSlotUpperHLowerT =
  openRemoteProjectSelection;
export const projectsIndexCurrentCompatSlotUpperI =
  projectsIndexCurrentBundle.I;
export const projectsIndexCurrentCompatSlotUpperILowerT =
  navigateToAutomationsPage;
export const projectsIndexCurrentCompatSlotUpperJ =
  projectsIndexCurrentBundle.J;
export const projectsIndexCurrentCompatSlotUpperJLowerT =
  projectsIndexCurrentBundle.Jt;
export const projectsIndexCurrentCompatSlotUpperK =
  projectsIndexCurrentBundle.K;
export const projectsIndexCurrentCompatSlotUpperKLowerT =
  getProjectGroupCollapseAction;
export const projectsIndexCurrentCompatSlotUpperL =
  projectsIndexCurrentBundle.L;
export const projectsIndexCurrentCompatSlotUpperLLowerT = navigateToLibraryPage;
export const projectsIndexCurrentCompatSlotUpperM =
  projectsIndexCurrentBundle.M;
export const projectsIndexCurrentCompatSlotUpperMLowerT =
  projectsIndexCurrentBundle.Mt;
export const projectsIndexCurrentCompatSlotUpperN =
  projectsIndexCurrentBundle.N;
export const projectsIndexCurrentCompatSlotUpperNLowerT =
  applyProjectGroupCollapseAction;
export const projectsIndexCurrentCompatSlotUpperO =
  projectsIndexCurrentBundle.O;
export const projectsIndexCurrentCompatSlotUpperOLowerT =
  projectsIndexCurrentBundle.Ot;
export const projectsIndexCurrentCompatSlotUpperP =
  projectsIndexCurrentBundle.P;
export const projectsIndexCurrentCompatSlotUpperPLowerT = hideAddProjectMenu;
export const projectsIndexCurrentCompatSlotUpperQ =
  projectsIndexCurrentBundle.Q;
export const projectsIndexCurrentCompatSlotUpperQLowerT =
  projectsIndexCurrentBundle.Qt;
export const projectsIndexCurrentCompatSlotUpperR =
  projectsIndexCurrentBundle.R;
export const projectsIndexCurrentCompatSlotUpperRLowerT =
  navigateToPullRequestsPage;
export const projectsIndexCurrentCompatSlotUpperS =
  projectsIndexCurrentBundle.S;
export const projectsIndexCurrentCompatSlotUpperSLowerT =
  projectsIndexCurrentBundle.St;
export const projectsIndexCurrentCompatSlotUpperT =
  projectsIndexCurrentBundle.T;
export const projectsIndexCurrentCompatSlotUpperTLowerT =
  projectsIndexCurrentBundle.Tt;
export const projectsIndexCurrentCompatSlotUpperU =
  projectsIndexCurrentBundle.U;
export const projectsIndexCurrentCompatSlotUpperULowerT =
  toggleRecentSidebarSection;
export const projectsIndexCurrentCompatSlotUpperV =
  projectsIndexCurrentBundle.V;
export const projectsIndexCurrentCompatSlotUpperVLowerT =
  openLocalProjectCreationDialog;
export const projectsIndexCurrentCompatSlotUpperW =
  projectsIndexCurrentBundle.W;
export const projectsIndexCurrentCompatSlotUpperWLowerT = openAddProjectFlow;
export const projectsIndexCurrentCompatSlotUpperX =
  projectsIndexCurrentBundle.X;
export const projectsIndexCurrentCompatSlotUpperXLowerT =
  projectsIndexCurrentBundle.Xt;
export const projectsIndexCurrentCompatSlotUpperY =
  projectsIndexCurrentBundle.Y;
export const projectsIndexCurrentCompatSlotUpperYLowerT =
  projectsIndexCurrentBundle.Yt;
export const projectsIndexCurrentCompatSlotUpperZ =
  projectsIndexCurrentBundle.Z;
export const projectsIndexCurrentCompatSlotUpperZLowerT =
  projectsIndexCurrentBundle.Zt;
export const projectsIndexCurrentCompatSlotUnderscore =
  projectsIndexCurrentBundle._;
export const projectsIndexCurrentCompatSlotUnderscoreLowerT =
  projectsIndexCurrentBundle._t;
export const projectsIndexCurrentCompatSlotLowerA =
  projectsIndexCurrentBundle.a;
export const projectsIndexCurrentCompatSlotLowerALowerN =
  projectsIndexCurrentBundle.an;
export const projectsIndexCurrentCompatSlotLowerALowerT =
  projectsIndexCurrentBundle.at;
export const projectsIndexCurrentCompatSlotLowerB =
  projectsIndexCurrentBundle.b;
export const projectsIndexCurrentCompatSlotLowerBLowerT =
  projectsIndexCurrentBundle.bt;
export const projectsIndexCurrentCompatSlotLowerC =
  projectsIndexCurrentBundle.c;
export const projectsIndexCurrentCompatSlotLowerCLowerN =
  projectsIndexCurrentBundle.cn;
export const projectsIndexCurrentCompatSlotLowerCLowerT =
  projectsIndexCurrentBundle.ct;
export const projectsIndexCurrentCompatSlotLowerD = openProjectInHomeRoute;
export const projectsIndexCurrentCompatSlotLowerDLowerN =
  projectsIndexCurrentBundle.dn;
export const projectsIndexCurrentCompatSlotLowerDLowerT =
  projectsIndexCurrentBundle.dt;
export const projectsIndexCurrentCompatSlotLowerELowerN =
  projectsIndexCurrentBundle.en;
export const projectsIndexCurrentCompatSlotLowerELowerT =
  projectsIndexCurrentBundle.et;
export const projectsIndexCurrentCompatSlotLowerF =
  projectsIndexCurrentBundle.f;
export const projectsIndexCurrentCompatSlotLowerFLowerN =
  projectsIndexCurrentBundle.fn;
export const projectsIndexCurrentCompatSlotLowerFLowerT =
  projectsIndexCurrentBundle.ft;
export const projectsIndexCurrentCompatSlotLowerG =
  projectsIndexCurrentBundle.g;
export const projectsIndexCurrentCompatSlotLowerGLowerT =
  projectsIndexCurrentBundle.gt;
export const projectsIndexCurrentCompatSlotLowerH =
  projectsIndexCurrentBundle.h;
export const projectsIndexCurrentCompatSlotLowerHLowerT =
  projectsIndexCurrentBundle.ht;
export const projectsIndexCurrentCompatSlotLowerI =
  projectsIndexCurrentBundle.i;
export const projectsIndexCurrentCompatSlotLowerILowerN =
  projectsIndexCurrentBundle.in;
export const projectsIndexCurrentCompatSlotLowerILowerT =
  projectsIndexCurrentBundle.it;
export const projectsIndexCurrentCompatSlotLowerJ =
  projectsIndexCurrentBundle.j;
export const projectsIndexCurrentCompatSlotLowerJLowerT =
  projectsIndexCurrentBundle.jt;
export const projectsIndexCurrentCompatSlotLowerK =
  projectsIndexCurrentBundle.k;
export const projectsIndexCurrentCompatSlotLowerKLowerT =
  resolveProjectCreationFlow;
export const projectsIndexCurrentCompatSlotLowerL =
  projectsIndexCurrentBundle.l;
export const projectsIndexCurrentCompatSlotLowerLLowerN =
  projectsIndexCurrentBundle.ln;
export const projectsIndexCurrentCompatSlotLowerLLowerT =
  projectsIndexCurrentBundle.lt;
export const projectsIndexCurrentCompatSlotLowerM =
  projectsIndexCurrentBundle.m;
export const projectsIndexCurrentCompatSlotLowerMLowerT =
  projectsIndexCurrentBundle.mt;
export const projectsIndexCurrentCompatSlotLowerN =
  projectsIndexCurrentBundle.n;
export const projectsIndexCurrentCompatSlotLowerNLowerN =
  projectsIndexCurrentBundle.nn;
export const projectsIndexCurrentCompatSlotLowerNLowerT =
  projectsIndexCurrentBundle.nt;
export const projectsIndexCurrentCompatSlotLowerO =
  projectsIndexCurrentBundle.o;
export const projectsIndexCurrentCompatSlotLowerOLowerN =
  projectsIndexCurrentBundle.on;
export const projectsIndexCurrentCompatSlotLowerOLowerT =
  projectsIndexCurrentBundle.ot;
export const projectsIndexCurrentCompatSlotLowerP =
  projectsIndexCurrentBundle.p;
export const projectsIndexCurrentCompatSlotLowerPLowerN =
  projectsIndexCurrentBundle.pn;
export const projectsIndexCurrentCompatSlotLowerPLowerT =
  projectsIndexCurrentBundle.pt;
export const projectsIndexCurrentCompatSlotLowerQ =
  projectsIndexCurrentBundle.q;
export const projectsIndexCurrentCompatSlotLowerQLowerT =
  projectsIndexCurrentBundle.qt;
export const projectsIndexCurrentCompatSlotLowerR =
  projectsIndexCurrentBundle.r;
export const projectsIndexCurrentCompatSlotLowerRLowerN =
  projectsIndexCurrentBundle.rn;
export const projectsIndexCurrentCompatSlotLowerRLowerT =
  projectsIndexCurrentBundle.rt;
export const projectsIndexCurrentCompatSlotLowerS =
  projectsIndexCurrentBundle.s;
export const projectsIndexCurrentCompatSlotLowerSLowerN =
  projectsIndexCurrentBundle.sn;
export const projectsIndexCurrentCompatSlotLowerSLowerT =
  projectsIndexCurrentBundle.st;
export const projectsIndexCurrentCompatSlotLowerT =
  projectsIndexCurrentBundle.t;
export const projectsIndexCurrentCompatSlotLowerTLowerN =
  projectsIndexCurrentBundle.tn;
export const projectsIndexCurrentCompatSlotLowerTLowerT =
  projectsIndexCurrentBundle.tt;
export const projectsIndexCurrentCompatSlotLowerU =
  projectsIndexCurrentBundle.u;
export const projectsIndexCurrentCompatSlotLowerULowerN =
  projectsIndexCurrentBundle.un;
export const projectsIndexCurrentCompatSlotLowerULowerT =
  projectsIndexCurrentBundle.ut;
export const projectsIndexCurrentCompatSlotLowerV =
  projectsIndexCurrentBundle.v;
export const projectsIndexCurrentCompatSlotLowerVLowerT =
  projectsIndexCurrentBundle.vt;
export const projectsIndexCurrentCompatSlotLowerW =
  projectsIndexCurrentBundle.w;
export const projectsIndexCurrentCompatSlotLowerWLowerT =
  projectsIndexCurrentBundle.wt;
export const projectsIndexCurrentCompatSlotLowerX =
  createSidebarShortcutLabelMap;
export const projectsIndexCurrentCompatSlotLowerXLowerT =
  projectsIndexCurrentBundle.xt;
export const projectsIndexCurrentCompatSlotLowerY =
  projectsIndexCurrentBundle.y;
export const projectsIndexCurrentCompatSlotLowerYLowerT =
  projectsIndexCurrentBundle.yt;
export const projectsIndexCurrentCompatSlotLowerZ =
  parsePullRequestNumberFromUrl;
export const projectsIndexCurrentCompatSlotLowerZLowerT = navigateToSitesPage;
