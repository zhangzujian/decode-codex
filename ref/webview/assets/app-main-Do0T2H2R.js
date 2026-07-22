import { n as e, s as t } from "./rolldown-runtime-BG2f4sTM.js";
import {
  dn as n,
  zt as r,
} from "./app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~kppdhley-Hrn9ylUK.js";
import {
  b as i,
  m as a,
  p as ee,
  x as te,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~ngwudnyz-DEp-3H1N.js";
import { t as o } from "./app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~gsbyx6su-BgGJHe-c.js";
import {
  M as s,
  k as c,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~cc80cam6-Kgm5YNG3.js";
import { t as l } from "./app-DN8cEaiB.js";
import {
  o as u,
  s as d,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~k8lpzggp-ado0mtAV.js";
import {
  _ as f,
  g as p,
} from "./app-initial~avatarOverlayCompositionSurface~app-main~pet-install-modal-host~quick-chat-wind~oieh6gbs-z2swTGK4.js";
import {
  a as m,
  o as ne,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~l16cgjx9-D06S1Wu0.js";
import {
  A as h,
  O as g,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~pull-request-rout~e3eqjujm-ColXhptb.js";
import {
  Mu as _,
  Nu as v,
  hl as y,
  pl as b,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~oxnpxkxc-BF5nAude.js";
import {
  bt as x,
  vt as S,
  yt as C,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~c1u3yp5s-9RGNa6St.js";
import {
  v as w,
  y as T,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~pull-request-rout~efr39kk0-C9rJkKd2.js";
import {
  d as E,
  f as D,
} from "./app-initial~app-main~codex-micro-settings~keyboard-shortcuts-settings~codex-micro-joystick-~oakijxdz-C0mNSDaW.js";
import {
  _ as O,
  g as k,
  n as A,
  t as j,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~appgen-settings-p~jj50pjos-C0KycLnh.js";
import {
  h as M,
  i as N,
  m as re,
  n as P,
  r as F,
  t as I,
} from "./app-initial~app-main~appgen-settings-page~page~appgen-library-page~appgen-page~appgen-setti~ogh9jurw-hQSurq1e.js";
import {
  _ as L,
  v as R,
} from "./app-initial~app-main~settings-command-menu-section-items~settings-page~projects-index-page~~hbq5ge6k-DXmVAc01.js";
import {
  h as z,
  m as B,
  p as V,
} from "./app-initial~app-main~new-thread-panel-page~onboarding-page~plan-summary-page~hotkey-window-~fdec98zn-C4jAFnVL.js";
async function H() {
  (await U(),
    await ne(),
    te.info(`[statsig-refresh-diagnostics] React root render requested`, {
      safe: { windowType: `electron` },
    }),
    $.render(
      (0, K.jsx)(W.StrictMode, {
        children: (0, K.jsx)(j, {
          name: `App`,
          fallback: (0, K.jsx)(re, {}),
          children: (0, K.jsx)(F, {}),
        }),
      }),
    ));
}
async function U() {}
var W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  if (
    ((W = t(n(), 1)),
    (G = o()),
    E(),
    b(),
    A(),
    M(),
    x(),
    w(),
    N(),
    u(),
    ee(),
    z(),
    h(),
    L(),
    _(),
    p(),
    m(),
    O(),
    I(),
    i(),
    s(),
    l(),
    (K = r()),
    (q = y()),
    (J = new URL(window.location.href).searchParams),
    (Y = S()),
    (X = B(d ?? window.location.pathname)),
    X != null &&
      V.start(
        X,
        window.electronBridge?.getPreloadStartedAtMs?.() ??
          performance.timeOrigin,
        !0,
      ),
    window.addEventListener(`pagehide`, () => {
      (c(), V.dispose(), g(), R.dispose(), v.dispose());
    }),
    document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `hidden` && c();
    }),
    T(f),
    D(P),
    (document.documentElement.dataset.codexWindowType = `electron`),
    (document.documentElement.dataset.windowType = `electron`),
    (document.documentElement.dataset.codexOs = Y),
    (document.documentElement.dataset.codexWindowChrome = C(`electron`, Y)),
    J.get(`mcpAppSandboxDevtools`) === `1` &&
      (document.documentElement.dataset.mcpAppSandboxDevtools = `true`),
    q && document.documentElement.classList.add(`compact-window`),
    k(),
    window.addEventListener(`error`, (e) => {
      let t =
        e?.error?.stack ?? e?.error?.message ?? e?.message ?? `Unknown error`;
      a.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][global-error] ${String(t)}`,
      });
    }),
    window.addEventListener(`unhandledrejection`, (e) => {
      let t = e.reason,
        n =
          typeof t == `object` && t
            ? (t.stack ?? t.message ?? JSON.stringify(t))
            : String(t);
      a.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][unhandled-rejection] ${n}`,
      });
    }),
    (Z = document.getElementById(`root`)),
    !Z)
  )
    throw Error(`Root container not found`);
  ((Q = window),
    (Q.__codexRoot ||= (0, G.createRoot)(Z)),
    ($ = Q.__codexRoot),
    H());
})();
//# sourceMappingURL=app-main-Do0T2H2R.js.map
