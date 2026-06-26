// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js
// Composer project selector and footer project controls.
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  $P as n,
  AB as r,
  AN as i,
  BP as a,
  BV as o,
  Bt as s,
  CS as c,
  Cu as l,
  DN as u,
  FB as d,
  FS as f,
  Ga as p,
  Gi as m,
  Gj as h,
  Gn as g,
  Gu as _,
  IB as v,
  IS as y,
  JV as b,
  Ji as x,
  Jn as S,
  Kn as C,
  Ku as w,
  Ld as T,
  Lj as E,
  MA as D,
  NA as O,
  ON as k,
  QP as A,
  RP as j,
  Rd as ee,
  Rf as te,
  Rj as ne,
  Rr as re,
  TM as M,
  TS as N,
  Tu as ie,
  UI as ae,
  Uf as oe,
  Ui as se,
  Un as P,
  VP as F,
  Vt as ce,
  Wa as I,
  Wi as le,
  Wn as ue,
  XR as de,
  Yi as fe,
  Yn as pe,
  Zi as me,
  ai as he,
  bF as ge,
  bi as _e,
  dV as ve,
  da as ye,
  hM as be,
  iF as xe,
  kE as Se,
  kN as Ce,
  kr as we,
  lF as Te,
  li as Ee,
  na as De,
  oi as Oe,
  or as ke,
  pM as Ae,
  qV as L,
  qi as R,
  qj as je,
  ra as Me,
  sF as z,
  sr as Ne,
  ua as Pe,
  ui as Fe,
  wM as B,
  wj as V,
  yi as H,
  yj as U,
  zP as Ie,
  zd as Le,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
import {
  Ct as Re,
  Hi as ze,
  J as Be,
  Vi as W,
  Y as G,
  xt as Ve,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js";
import {
  Bm as He,
  Hm as Ue,
  Vm as K,
  zm as We,
} from "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js";
import {
  Or as Ge,
  kr as Ke,
  nn as qe,
  rn as Je,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js";
import {
  initResizeObserverHooksChunk as Ye,
  useResizeObserverRef as q,
} from "../utils/use-resize-observer";
var J,
  Xe,
  Ze = e(() => {
    t(b());
    J = o();
    Xe = (e) => (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...e}
      >
        <path
          d="M6.33325 1.88379C6.58178 1.88379 6.78345 2.08546 6.78345 2.33398C6.78328 2.58237 6.58168 2.78418 6.33325 2.78418H4.66626C3.62638 2.78435 2.78362 3.62711 2.78345 4.66699V11.334C2.78361 12.3739 3.62637 13.2176 4.66626 13.2178H11.3333C12.3733 13.2178 13.2169 12.374 13.217 11.334V9.66699C13.2172 9.41872 13.418 9.21795 13.6663 9.21777C13.9147 9.21777 14.1163 9.41861 14.1165 9.66699V11.334C14.1163 12.871 12.8703 14.1172 11.3333 14.1172H4.66626C3.12932 14.117 1.88322 12.8709 1.88306 11.334V4.66699C1.88323 3.13006 3.12933 1.88396 4.66626 1.88379H6.33325Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8948 2.375C11.6494 1.63227 12.8628 1.63698 13.6116 2.38574C14.362 3.13643 14.3637 4.35266 13.6165 5.10644L9.36353 9.39355C9.01402 9.74579 8.56977 9.98985 8.08521 10.0967L6.17603 10.5166C5.74813 10.6107 5.36686 10.2296 5.46118 9.80176L5.88208 7.89746C5.98978 7.4105 6.23578 6.96428 6.59106 6.61426L10.8948 2.375ZM12.9749 3.02148C12.5756 2.62258 11.9289 2.62086 11.5266 3.0166L7.2229 7.25586C6.99148 7.4839 6.83116 7.77457 6.76099 8.0918L6.44165 9.53711L7.89185 9.21777C8.20744 9.14811 8.49721 8.98919 8.72485 8.75976L12.9778 4.47266C13.3759 4.07066 13.375 3.42164 12.9749 3.02148Z"
          fill="currentColor"
        />
      </svg>
    );
  }),
  Qe,
  $e = e(() => {
    Qe = "12346831";
  });
function Y(e) {
  let { className, isRemoteProject = false } = e;
  return isRemoteProject ? (
    tt.jsx(qe, {
      className,
    })
  ) : (
    <H className={className} />
  );
}
var et,
  tt,
  nt = e(() => {
    et = L();
    Je();
    _e();
    tt = o();
  });
function rt(e) {
  let {
      children,
      groups,
      projectAppearances,
      selectedProjectIds,
      onSelectProjectId,
      keepOpenOnSelect = false,
      projectlessActionLabel,
      onSelectProjectless,
      footerItems,
      onAddLocalProject,
      onAddRemoteProject,
      emptyMessage,
    } = e,
    h = Te(),
    g = onSelectProjectless != null && projectlessActionLabel != null,
    [_, v] = at.useState(""),
    y,
    b,
    S,
    C,
    w,
    T;
  {
    let e = _.trim().toLowerCase();
    b = groups.filter((item) => {
      if (!e) return true;
      let n = item.repositoryData?.rootFolder ?? "";
      return [item.label, n, item.path ?? "", item.hostDisplayName ?? ""].some(
        (_item) => _item.toLowerCase().includes(e),
      );
    });
    let n = new Map();
    groups.forEach((item) => {
      if (item.path == null) return;
      let t = n.get(item.label);
      if (t == null) {
        n.set(item.label, [item.path]);
        return;
      }
      t.push(item.path);
    });
    S =
      g ||
      footerItems != null ||
      onAddLocalProject != null ||
      onAddRemoteProject != null;
    let s = (event) => {
      v(event.target.value);
    };
    let c;
    c = h.formatMessage({
      id: "composer.localCwdDropdown.searchPlaceholder",
      defaultMessage: "Search projects",
      description: "Placeholder for searching the workspace root dropdown",
    });
    T = X.jsx(fe, {
      value: _,
      onChange: s,
      placeholder: c,
      className: "mb-1",
    });
    y = R.Section;
    C =
      "flex max-h-[calc((1lh+var(--padding-row-y)*2)*5)] flex-col overflow-y-auto text-sm [--edge-fade-distance:1.5rem]";
    w = b.map((item) => {
      let t = projectAppearances[item.projectId] ?? null,
        r = (
          <Y
            className="icon-xs"
            isRemoteProject={item.projectKind === "remote"}
          />
        ),
        s = item.repositoryData?.rootFolder,
        c = s != null && s !== item.label,
        l = n.get(item.label) ?? [],
        u = l.length > 1 && item.path != null ? U(item.path, l) : null;
      return (
        <div key={item.projectId} className="flex flex-col">
          {X.jsxs(x, {
            RightIcon: selectedProjectIds.includes(item.projectId)
              ? B
              : undefined,
            tooltipText: u ?? undefined,
            tooltipAlign: "center",
            onSelect: (event) => {
              keepOpenOnSelect && event.preventDefault();
              onSelectProjectId(item.projectId);
            },
            children: [
              <R.ItemIcon size="xs">
                {t == null ? (
                  r
                ) : (
                  <Ee appearance={t} className="size-4" fallbackIcon={r} />
                )}
              </R.ItemIcon>,
              <div className="flex min-w-0 items-center gap-1">
                <span className="truncate">{item.label}</span>
                {item.hostDisplayName == null ? null : (
                  <span className="truncate text-sm text-token-description-foreground">
                    {item.hostDisplayName}
                  </span>
                )}
                {c ? (
                  <span className="truncate text-sm text-token-description-foreground">
                    {s}
                  </span>
                ) : null}
              </div>,
            ],
          })}
        </div>
      );
    });
  }
  let O =
    b.length === 0 ? (
      <div className="px-3 py-2 text-sm text-token-description-foreground">
        {emptyMessage ??
          X.jsx(z, {
            id: "composer.localCwdDropdown.noProjectsFound",
            defaultMessage: "No projects found",
            description: "Shown when searching for projects returns no results",
          })}
      </div>
    ) : null;
  let k = X.jsxs(y, {
    className: C,
    children: [w, O],
  });
  let A = S ? (
    <>
      <R.Separator />
      <R.Section className="flex flex-col">
        <I electron={true} browser={true}>
          {onAddRemoteProject
            ? X.jsx(x, {
                LeftIcon: De,
                onSelect: onAddRemoteProject,
                children: X.jsx(z, {
                  id: "composer.localCwdDropdown.newRemoteProject",
                  defaultMessage: "New remote project",
                  description:
                    "Menu item that opens the remote project setup dialog",
                }),
              })
            : null}
        </I>
        <I electron={true}>
          <>
            {footerItems}
            {onAddLocalProject
              ? X.jsx(x, {
                  LeftIcon: E,
                  onSelect: onAddLocalProject,
                  children: onAddRemoteProject
                    ? X.jsx(z, {
                        id: "composer.localCwdDropdown.addLocalWorkspaceRoot",
                        defaultMessage: "Add local project",
                        description:
                          "Menu item that opens the local folder picker in the electron app when a remote project can also be added",
                      })
                    : X.jsx(z, {
                        id: "composer.localCwdDropdown.addWorkspaceRoot",
                        defaultMessage: "Add new project",
                        description:
                          "Menu item that opens the project picker in the electron app when only local projects can be added",
                      }),
                })
              : null}
            {g
              ? X.jsx(x, {
                  LeftIcon: D,
                  onSelect: onSelectProjectless,
                  children: projectlessActionLabel,
                })
              : null}
          </>
        </I>
      </R.Section>
    </>
  ) : null;
  return (
    <>
      {T}
      {k}
      {children}
      {A}
    </>
  );
}
var it,
  at,
  X,
  ot = e(() => {
    it = L();
    at = t(b(), 1);
    xe();
    me();
    p();
    M();
    Me();
    ne();
    O();
    Fe();
    nt();
    V();
    X = o();
  }),
  st,
  ct = e(() => {
    r();
    n();
    Ve();
    pe();
    we();
    Be();
    st = ve(A, ({ get }) => {
      let t = get(re),
        n = get(ke, {
          threadKeys: t,
          enabled: true,
        }).groups,
        r = new Map(get(G, t).map((item) => [item.task.key, item]));
      return Re(get(Ne), n, r);
    });
  }),
  lt,
  ut,
  dt = e(() => {
    t(b());
    lt = o();
    ut = (e) => (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...e}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM10.0918 5.9082C9.88683 5.70329 9.55463 5.7024 9.34961 5.90723L8 7.25684L6.65039 5.90723C6.44535 5.70239 6.11219 5.70227 5.90723 5.90723C5.70232 6.11219 5.70241 6.44537 5.90723 6.65039L7.25684 8L5.90723 9.34961C5.70241 9.55463 5.70232 9.88781 5.90723 10.0928C6.11219 10.2977 6.44535 10.2976 6.65039 10.0928L8 8.74316L9.34961 10.0928C9.55463 10.2976 9.88683 10.2967 10.0918 10.0918C10.2968 9.88683 10.2976 9.55465 10.0928 9.34961L8.74316 8L10.0928 6.65039C10.2976 6.44535 10.2968 6.11317 10.0918 5.9082Z"
          fill="currentColor"
        />
      </svg>
    );
  });
function ft(e) {
  let { children, disabled = false, menuOpen, onClearProject } = e,
    c = Te(),
    [l, u] = mt.useState(false),
    d = !disabled && !menuOpen && !l,
    f = c.formatMessage({
      id: "composer.localCwdDropdown.clearProject",
      defaultMessage: "Don't work in a project",
      description:
        "Menu item that clears the selected project and starts projectless chats",
    });
  let p = f,
    m = d && K.projectClearAvailable,
    h = d && "hover:bg-token-list-hover-background",
    g = a(
      "group/project-selector relative inline-flex shrink-0 rounded-full",
      m,
      h,
    );
  let _, v, y;
  _ = () => {
    u(false);
  };
  v = () => {
    u(false);
  };
  y = (event) => {
    (event.target instanceof Element &&
      event.target.closest("[data-clear-project-button]") != null) ||
      u(true);
  };
  let b = !d,
    x =
      d &&
      "group-hover/project-selector:pointer-events-auto group-hover/project-selector:opacity-100 group-focus-within/project-selector:pointer-events-auto group-focus-within/project-selector:opacity-100",
    S = a(
      K.projectClearButton,
      "no-drag pointer-events-none absolute inset-y-0 left-0 z-10 flex aspect-square cursor-interaction items-center justify-center rounded-full text-token-text-tertiary opacity-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border hover:text-token-foreground",
      x,
    );
  let C = !d,
    w = () => {
      u(true);
      onClearProject();
    };
  let T = Z.jsx(ut, {
    "aria-hidden": true,
    className: "size-4",
  });
  let E = (
    <button
      className={S}
      type="button"
      aria-label={p}
      data-clear-project-button={true}
      disabled={C}
      onClick={w}
    >
      {T}
    </button>
  );
  let D = (
    <Ae disabled={b} tooltipContent={p}>
      {E}
    </Ae>
  );
  return (
    <div
      className={g}
      onPointerEnter={_}
      onPointerLeave={v}
      onPointerDownCapture={y}
    >
      {children}
      {D}
    </div>
  );
}
var pt,
  mt,
  Z,
  ht = e(() => {
    pt = L();
    F();
    mt = t(b(), 1);
    xe();
    be();
    dt();
    Ue();
    Z = o();
  });
function gt(e) {
  let {
    categoryLabel,
    className,
    collapse,
    icon,
    indicator,
    value,
    valueClassName,
    ...rest
  } = e;
  let f = a(K.externalFooterItem, "min-w-0", className);
  let p = Q.jsx(vt, {
    categoryLabel,
    collapse,
    icon,
    indicator,
    value,
    valueClassName,
  });
  return Q.jsx(u, {
    className: f,
    color: "ghost",
    size: "composerSm",
    ...rest,
    children: p,
  });
}
function _t(e) {
  let { categoryLabel, className, collapse, icon, value, valueClassName } = e,
    l = a(K.externalFooterItem, "flex min-w-0 items-center gap-1", className);
  let u = Q.jsx(vt, {
    categoryLabel,
    collapse,
    icon,
    indicator: "none",
    value,
    valueClassName,
  });
  return <div className={l}>{u}</div>;
}
function vt(e) {
  let { categoryLabel, collapse, icon, indicator, value, valueClassName } = e,
    l = je("2700454473") ? "icon-xs" : "icon-2xs",
    [u, d] = bt.useState(null),
    [f, p] = bt.useState(null),
    m = (e, t) => {
      d(t.clientWidth);
    };
  let h = q(m),
    g = (e, t) => {
      p(t.scrollWidth);
    };
  let _ = q(g),
    v = u != null && f != null && f > u,
    y;
  bb0: switch (indicator) {
    case "none":
      y = null;
      break bb0;
    case "pending": {
      let e;
      e = (
        <Ce className="icon-xs shrink-0 text-token-input-placeholder-foreground" />
      );
      y = e;
      break bb0;
    }
    case "chevron": {
      let e = a(
        K.externalFooterItemChevron,
        l,
        "shrink-0 text-token-input-placeholder-foreground",
      );
      let n;
      n = Q.jsx(j, {
        className: e,
      });
      y = n;
      break bb0;
    }
    case "collapsible-chevron": {
      let e = a(K.secondaryChevron, K.externalFooterItemChevron, "inline-flex");
      let n = a(l, "shrink-0 text-token-input-placeholder-foreground");
      let r;
      r = (
        <span className={e}>
          {Q.jsx(j, {
            className: n,
          })}
        </span>
      );
      y = r;
    }
  }
  let b =
    icon == null ? null : <span className="inline-flex shrink-0">{icon}</span>;
  let x =
    categoryLabel != null || value != null ? (
      <span
        className={a(
          K.externalFooterItemText,
          categoryLabel != null && K.externalFooterItemTextWithCategoryLabel,
          "inline-flex min-w-0 items-baseline gap-1 text-left",
        )}
      >
        {categoryLabel == null ? null : (
          <span
            className={a(
              K.externalFooterItemCategoryLabel,
              "hidden shrink-0 font-medium text-token-foreground",
            )}
          >
            {categoryLabel}
          </span>
        )}
        <We
          ref={h}
          className={a(
            K.externalFooterItemValue,
            "min-w-0 truncate font-normal whitespace-nowrap",
            valueClassName,
          )}
          collapse={collapse}
        >
          <span
            ref={_}
            className={a(
              K.externalFooterItemValueContent,
              "block max-w-full min-w-0 truncate",
              v && K.externalFooterItemValueOverflowing,
            )}
            data-tooltip-overflow-target={true}
          >
            {value}
          </span>
        </We>
      </span>
    ) : null;
  return (
    <>
      {b}
      {x}
      {y}
    </>
  );
}
var yt,
  bt,
  Q,
  xt = e(() => {
    yt = L();
    F();
    bt = t(b(), 1);
    k();
    i();
    Ie();
    Ye();
    h();
    He();
    Ue();
    Q = o();
  });
function St({
  activeProjectIdOverride,
  allowLocalProjects = true,
  allowLocalProjectActions = allowLocalProjects,
  allowRemoteProjects = true,
  disabled = false,
  hideLabel = false,
  onWorkspaceRootSelected,
  variant = "default",
  isOpen,
  onOpenChange,
  triggerButton,
}) {
  let _ = d(A),
    b = Te(),
    [x, T] = wt.useState(false),
    [D, O] = wt.useState(false),
    k = je(Qe),
    ne = je("2700454473"),
    re = ne,
    M = ne ? "icon-xs" : "icon-2xs",
    oe = wt.useRef(false),
    P = v(st).filter((item) =>
      item.projectKind === "local" ? allowLocalProjects : allowRemoteProjects,
    ),
    F = Ke(),
    I = k && !F,
    le = Le(),
    fe = activeProjectIdOverride !== undefined,
    pe = !F,
    { selectedRemoteProject, selectedRemoteProjectId } = ie(),
    { remoteConnections } = ee(),
    _e = ze(remoteConnections),
    { data, isLoading } = v(te),
    { data: _data } = w(de.PROJECT_APPEARANCES),
    Se = ae(_data),
    Ce = allowRemoteProjects && le && !F && _e.length > 0,
    we = (e) => {
      N(_, y, {});
      let t = P.find((item) => item.projectId === e);
      if (t == null) return;
      if ((ce(_, t), t.projectKind === "remote")) {
        Oe(_, {
          projectId: t.projectId,
          projectKind: "remote",
        });
        return;
      }
      let n = ye.select(_, t);
      onWorkspaceRootSelected?.(n);
    },
    ke = () => {
      if ((N(_, f, {}), I)) {
        g(_);
        return;
      }
      S();
    },
    L = () => {
      if ((N(_, f, {}), I)) {
        g(_);
        return;
      }
      ue(_);
    },
    Me = () => {
      oe.current = true;
    },
    Ne = (event) => {
      oe.current && ((oe.current = false), event.preventDefault(), L());
    },
    Pe = () => {
      N(_, f, {});
      C({
        setActive: true,
      });
    },
    Fe = () => {
      N(_, y, {});
      ce(_, null);
      Oe(_, null);
      onWorkspaceRootSelected?.(null);
    },
    B = data?.roots?.[0] ?? null;
  fe
    ? (B = activeProjectIdOverride)
    : allowRemoteProjects && (B = selectedRemoteProjectId ?? B);
  let V = B == null ? null : (Se[B] ?? null),
    H = B == null && pe && true,
    U = pe && B != null,
    Ie = isOpen ?? x,
    Re = (e) => {
      e && O(false);
      T(e);
      onOpenChange?.(e);
    },
    Be = allowLocalProjectActions && variant === "home" && P.length === 0 && !F;
  if (
    !fe &&
    isLoading &&
    data == null &&
    !Be &&
    selectedRemoteProjectId == null
  )
    return null;
  let W =
      B == null
        ? null
        : Ct({
            activeProjectId: B,
            groups: P,
            remoteConnections,
            selectedRemoteProject,
          }),
    G =
      W?.hostDisplayName == null
        ? (W?.label ?? W?.path ?? null)
        : `${W.label} · ${W.hostDisplayName}`,
    Ve =
      W?.label ??
      (H
        ? $.jsx(z, {
            id: "composer.localCwdDropdown.chooseProject",
            defaultMessage: "Choose project",
            description:
              "Home page button label shown when no project is selected",
          })
        : $.jsx(z, {
            id: "composer.localCwdDropdown.noActiveRoot",
            defaultMessage: "Select your project",
            description: "Shown when no active root is selected",
          })),
    He =
      W == null
        ? b.formatMessage({
            id: "composer.localCwdDropdown.chooseProjectTooltip",
            defaultMessage: "Choose project",
            description:
              "Tooltip for the home page project selector when no project is selected",
          })
        : b.formatMessage({
            id: "composer.localCwdDropdown.changeProjectTooltip",
            defaultMessage: "Change project",
            description:
              "Tooltip for the home page project selector when a project is selected",
          }),
    Ue =
      G == null
        ? He
        : b.formatMessage(
            {
              id: "composer.localCwdDropdown.changeProjectAccessibleLabel",
              defaultMessage: "Change project: {projectName}",
              description:
                "Accessible label for the home page project selector when a project is selected",
            },
            {
              projectName: G,
            },
          ),
    We =
      G ??
      (H
        ? $.jsx(z, {
            id: "composer.localCwdDropdown.newChat",
            defaultMessage: "New chat",
            description:
              "Label shown when no project is selected in the electron app",
          })
        : $.jsx(z, {
            id: "composer.localCwdDropdown.noActiveRoot",
            defaultMessage: "Select your project",
            description: "Shown when no active root is selected",
          })),
    Ge = $.jsx(z, {
      id: "composer.localCwdDropdown.newProject",
      defaultMessage: "New project",
      description:
        "Menu item that opens the local project creation flow from the composer project picker",
    }),
    qe = I ? (
      <R.Item LeftIcon={E} onSelect={Me}>
        {Ge}
      </R.Item>
    ) : (
      <R.FlyoutSubmenuItem LeftIcon={E} label={Ge}>
        <R.Item LeftIcon={E} onSelect={Me}>
          {$.jsx(z, {
            id: "projectSetup.addProjectMenu.startFromScratch",
            defaultMessage: "Start from scratch",
            description: "Menu item that creates a new local project folder",
          })}
        </R.Item>
        <R.Item LeftIcon={se} onSelect={ke}>
          {$.jsx(z, {
            id: "projectSetup.addProjectMenu.useExistingFolder",
            defaultMessage: "Use an existing folder",
            description: "Menu item that opens the existing folder picker",
          })}
        </R.Item>
      </R.FlyoutSubmenuItem>
    ),
    Je = () => (
      <Ae
        tooltipContent={$.jsx(z, {
          id: "composer.localCwdDropdown.tooltip",
          defaultMessage: "Select project",
          description:
            "Tooltip for the active project selector in the composer footer",
        })}
      >
        {$.jsxs(u, {
          size: "composerSm",
          color: "ghost",
          className: "min-w-0",
          children: [
            <span
              className="inline-flex shrink-0"
              data-project-selector-icon={U || undefined}
            >
              {H ? (
                <Xe className={a(M, "shrink-0")} />
              ) : V == null ? (
                <Y
                  className={a(M, "shrink-0")}
                  isRemoteProject={W?.projectKind === "remote"}
                />
              ) : (
                <Ee
                  appearance={V}
                  className="size-4"
                  fallbackIcon={
                    <Y
                      className={a(M, "shrink-0")}
                      isRemoteProject={W?.projectKind === "remote"}
                    />
                  }
                />
              )}
            </span>,
            hideLabel ? null : (
              <span className="max-w-[240px] truncate text-left">{We}</span>
            ),
            $.jsx(j, {
              className: a(
                M,
                "shrink-0 text-token-input-placeholder-foreground",
              ),
            }),
          ],
        })}
      </Ae>
    ),
    q = "always";
  re && W != null
    ? (q = "trigger-overflows")
    : !re && W == null && (q = "visibility-target-hidden");
  let Ye = re ? (G ?? He) : He,
    J = () => (
      <Ae open={!Ie && D} onOpenChange={O} openWhen={q} tooltipContent={Ye}>
        {$.jsx(gt, {
          categoryLabel: $.jsx(z, {
            id: "composer.localCwdDropdown.footerCategory",
            defaultMessage: "Project",
            description:
              "Category label for the project control in the composer footer",
          }),
          className: a(K.homeProjectButton, "min-w-0 gap-2"),
          collapse: "xs",
          icon: (
            <span
              className="inline-flex shrink-0"
              data-project-selector-icon={U || undefined}
            >
              {H || W == null ? (
                <Y className="icon-xs shrink-0" />
              ) : V == null ? (
                <Y
                  className="icon-xs shrink-0"
                  isRemoteProject={W?.projectKind === "remote"}
                />
              ) : (
                <Ee
                  appearance={V}
                  className="size-4"
                  fallbackIcon={
                    <Y
                      className="icon-xs shrink-0"
                      isRemoteProject={W.projectKind === "remote"}
                    />
                  }
                />
              )}
            </span>
          ),
          indicator: "none",
          value: <span data-tooltip-visibility-target={true}>{Ve}</span>,
          valueClassName: "!max-w-60 text-token-foreground",
          "aria-label": Ue,
          disabled,
        })}
      </Ae>
    ),
    Ze = () => (
      <button
        className={a(
          "heading-xl text-token-text-tertiary ml-2 -mt-1 flex min-w-0 items-center gap-1 font-normal transition-colors transition-background-colors duration-100 hover:text-token-foreground select-none",
          disabled ? "cursor-default opacity-60" : "cursor-interaction",
        )}
        type="button"
        disabled={disabled}
      >
        <span className="inline-flex max-w-[420px] min-w-0 items-center">
          <span className="min-w-0 truncate">{We}</span>
        </span>
        {$.jsx(j, {
          className:
            "icon-sm mt-1 shrink-0 self-center text-token-input-placeholder-foreground",
        })}
      </button>
    );
  if (Be)
    return $.jsxs(m, {
      open: isOpen,
      onOpenChange: Re,
      onCloseAutoFocus: Ne,
      side: "top",
      triggerButton: triggerButton ?? J(),
      contentWidth: "menu",
      children: [
        Ce ? (
          <R.Item LeftIcon={De} onSelect={Pe}>
            {$.jsx(z, {
              id: "composer.localCwdDropdown.newRemoteProject",
              defaultMessage: "New remote project",
              description:
                "Menu item that opens the remote project setup dialog",
            })}
          </R.Item>
        ) : null,
        qe,
      ],
    });
  let $e = $.jsx(m, {
    open: isOpen,
    onOpenChange: Re,
    onCloseAutoFocus: Ne,
    side: "top",
    align: variant === "hero" ? "center" : "start",
    disabled,
    triggerButton:
      triggerButton ??
      (variant === "hero" ? Ze() : variant === "home" ? J() : Je()),
    contentWidth: "workspace",
    contentMaxHeight: "tall",
    children: $.jsx(rt, {
      groups: P,
      projectAppearances: Se,
      selectedProjectIds: B ? [B] : [],
      onSelectProjectId: we,
      projectlessActionLabel: $.jsx(z, {
        id: "composer.localCwdDropdown.clearProject",
        defaultMessage: "Don't work in a project",
        description:
          "Menu item that clears the selected project and starts projectless chats",
      }),
      onSelectProjectless: U ? Fe : undefined,
      footerItems: allowLocalProjectActions ? qe : null,
      onAddRemoteProject: Ce ? Pe : undefined,
      children: null,
    }),
  });
  return variant !== "hero" && U && triggerButton == null
    ? $.jsx(ft, {
        disabled,
        menuOpen: Ie,
        onClearProject: Fe,
        children: $e,
      })
    : $e;
}
function Ct({
  activeProjectId,
  groups,
  remoteConnections,
  selectedRemoteProject,
}) {
  let i = groups.find((item) => item.projectId === activeProjectId) ?? null;
  if (i != null) return i;
  if (
    selectedRemoteProject == null ||
    selectedRemoteProject.id !== activeProjectId
  )
    return null;
  let a =
    remoteConnections.find(
      (item) => item.hostId === selectedRemoteProject.hostId,
    ) ?? null;
  return {
    projectId: selectedRemoteProject.id,
    projectKind: "remote",
    hostId: selectedRemoteProject.hostId,
    hostDisplayName: a?.displayName ?? null,
    label: selectedRemoteProject.label,
    path: selectedRemoteProject.remotePath,
    repositoryData: null,
    isCodexWorktree: false,
    threadKeys: [],
  };
}
var wt, $;
const Tt = e(() => {
  Se();
  F();
  r();
  ge();
  wt = t(b(), 1);
  xe();
  W();
  k();
  me();
  be();
  ot();
  s();
  _();
  Ge();
  Ie();
  Ze();
  le();
  Me();
  ne();
  Pe();
  c();
  Fe();
  nt();
  he();
  $e();
  P();
  T();
  l();
  n();
  oe();
  ct();
  h();
  ht();
  xt();
  Ue();
  $ = o();
});
const initComposerProjectFooterControls = xt;
const ProjectIcon = Y;
const initProjectSelectorFeatureFlags = $e;
const AddProjectIcon = Xe;
const ComposerFooterProjectButton = gt;
const initProjectIconChunk = nt;
const initComposerProjectSelectorChunk = Tt;
const ClearProjectIcon = ut;
const initAddProjectIconChunk = Ze;
const ComposerFooterStaticProjectControl = _t;
const initClearProjectIconChunk = dt;
const composerProjectSelectorFeatureFlagId = Qe;
const ComposerProjectSelector = St;

export {
  AddProjectIcon,
  ClearProjectIcon,
  ComposerFooterProjectButton,
  ComposerFooterStaticProjectControl,
  ComposerProjectSelector,
  composerProjectSelectorFeatureFlagId,
  initAddProjectIconChunk,
  initClearProjectIconChunk,
  initComposerProjectFooterControls,
  initComposerProjectSelectorChunk,
  initProjectIconChunk,
  initProjectSelectorFeatureFlags,
  ProjectIcon,
};
