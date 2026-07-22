import { n as e, s as t, t as n } from "./rolldown-runtime-BG2f4sTM.js";
import {
  D as r,
  E as i,
  F as a,
  O as o,
  P as s,
  V as c,
  X as l,
  b as u,
  dn as d,
  dt as f,
  un as p,
  x as m,
  xt as h,
  y as g,
} from "./app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~kppdhley-Hrn9ylUK.js";
import {
  Bl as _,
  C as v,
  Fl as ee,
  Fs as y,
  Ls as b,
  S as te,
  a as x,
  b as S,
  ks as C,
  o as w,
  r as ne,
  x as re,
  xl as ie,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~ngwudnyz-DEp-3H1N.js";
import {
  D as ae,
  O as oe,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~l16cgjx9-D06S1Wu0.js";
import {
  i as T,
  n as E,
  ni as se,
  ri as ce,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~g8980z4e-BAIMuvdd.js";
import {
  a as le,
  h as ue,
  m as de,
  s as fe,
} from "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~nssizff1-BrVQD6K6.js";
import {
  A as pe,
  I as D,
  T as me,
  _ as he,
  a as O,
  b as ge,
  bt as k,
  c as A,
  df as _e,
  ff as ve,
  hl as ye,
  i as be,
  jt as xe,
  k as Se,
  l as Ce,
  ml as we,
  nl as j,
  pf as Te,
  pl as Ee,
  r as De,
  t as Oe,
  tl as ke,
  u as M,
  w as Ae,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~oxnpxkxc-BF5nAude.js";
import {
  p as je,
  w as Me,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~mgfw3nls-CnguptXt.js";
import {
  L as Ne,
  Y as Pe,
  d as Fe,
  n as Ie,
  q as Le,
  t as Re,
} from "./app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~djgpmkub-nPChaaQN.js";
var N,
  P,
  F = e(() => {
    (D(),
      ke(),
      E(),
      (N = new WeakMap()),
      (P = class {
        scope;
        constructor(e) {
          this.scope = e;
        }
        addManager(e) {
          let t = e.getHostId(),
            n = this.getImplForHostId(t);
          (n != null &&
            n !== e &&
            (n.historySnapshotHydrationController?.dispose(),
            (n.historySnapshotHydrationController = null),
            j(n)),
            this.scope.set(k, (e) => (e.includes(t) ? e : [...e, t])),
            this.scope.set(be, t, !1),
            this.scope.set(O, t, e),
            this.scope.set(A, t, ge(this.scope, e)),
            this.scope.set(M, (e) => e + 1));
        }
        addRegistryCallback(e) {
          let t = !1;
          return this.scope.watch((n) => {
            (n.get(M), t ? e() : (t = !0));
          });
        }
        deleteManager(e) {
          let t = this.getImplForHostId(e);
          (t != null &&
            (t.historySnapshotHydrationController?.dispose(),
            (t.historySnapshotHydrationController = null),
            j(t)),
            this.scope.set(k, (t) => t.filter((t) => t !== e)),
            this.scope.set(A, e, null),
            this.scope.set(O, e, null),
            xe(this.scope, {
              error: null,
              hostId: e,
              source: `registry_delete_manager`,
              state: `disconnected`,
            }),
            this.scope.set(M, (e) => e + 1));
        }
        getAll() {
          return this.scope.get(Ce);
        }
        getDefault() {
          return this.scope.get(Ae);
        }
        getForHostId(e) {
          return this.scope.get(k).includes(e) ? this.scope.get(A, e) : null;
        }
        waitForManagerForHostId(e) {
          let t = this.getForHostId(e);
          if (t != null) return Promise.resolve(t);
          let n = N.get(this.scope);
          n ?? ((n = new Map()), N.set(this.scope, n));
          let r = n.get(e);
          if (r != null) return r;
          let i = new Promise((t) => {
            let r = this.addRegistryCallback(() => {
              let i = this.getForHostId(e);
              i != null && (r(), n.delete(e), t(i));
            });
          });
          return (n.set(e, i), i);
        }
        getImplForHostId(e) {
          return this.scope.get(k).includes(e) ? this.scope.get(O, e) : null;
        }
        getForHostIdOrThrow(e) {
          let t = this.getForHostId(e);
          if (t != null) return t;
          throw Error(`No AppServerManager registered for hostId: ${e}`);
        }
        getForHostIdOrThrowWhenDefaultHost(e) {
          let t = this.getForHostId(e);
          if (t != null) return t;
          if (e === `local`)
            throw Error(`No AppServerManager registered for hostId: ${e}`);
          return null;
        }
        getMaybeForConversationId(e) {
          return pe(this.scope, e);
        }
      }));
  }),
  I,
  L,
  R = e(() => {
    (m(), u(), (I = h(g, !1)), (L = h(g, `unresolved`)));
  });
function ze() {
  return null;
}
var z,
  Be = e(() => {
    (m(), u(), (z = h(g, ze())));
  }),
  B,
  Ve = e(() => {
    (m(), u(), (B = h(g, !1)));
  });
function He() {
  let e = (0, Ke.c)(3),
    { data: t } = i(Me, o(me)),
    n = fe(`4114442250`);
  if (t?.config[`features.remote_connections`] === !0) return !0;
  let r = t?.config.features;
  if (typeof r != `object` || !r || Array.isArray(r)) return n;
  let a;
  return (
    e[0] !== r || e[1] !== n
      ? ((a =
          Object.getOwnPropertyDescriptor(r, `remote_connections`)?.value ===
            !0 || n),
        (e[0] = r),
        (e[1] = n),
        (e[2] = a))
      : (a = e[2]),
    a
  );
}
function Ue() {
  return fe(`1042620455`);
}
function We() {
  let e = o(Pe) ?? [];
  return {
    remoteConnections: e,
    enabledRemoteHostIdSet: new Set(e.flatMap(Ge)),
  };
}
function Ge(e) {
  return e.autoConnect ? [e.hostId] : [];
}
var Ke,
  V = e(() => {
    ((Ke = p()), m(), D(), je(), le(), Le());
  });
function qe({ appServerRegistry: e, enabledRemoteHostIds: t }) {
  let n = e.getDefault().getHostId();
  return e
    .getAll()
    .filter((e) => (e.getHostId() === n ? !0 : t.has(e.getHostId())));
}
function Je(e, t) {
  let n = t.getDefault().getHostId();
  return t.getAll().filter((t) => {
    let r = t.getHostId();
    if (r === n) return !0;
    let { error: i, state: a } = Se(e, r);
    return a === `connected` || i?.code === `login-required`;
  });
}
function Ye(e, t) {
  return oe(`refresh-recent-conversations-for-host`, {
    hostId: e,
    sortKey: ve(t),
  })
    .then(() => !0)
    .catch(
      (n) => (
        re.warning(`recent_conversations_refresh_failed`, {
          safe: { sortKey: t },
          sensitive: { error: n, hostId: e },
        }),
        !1
      ),
    );
}
function Xe(e) {
  return () => {
    for (let t of e) t();
  };
}
function Ze({ appServerRegistry: e, onStoreChange: t, subscribeToManager: n }) {
  let r = new Map(),
    i = () => {
      let i = e.getAll(),
        a = new Set(i.map((e) => e.getHostId()));
      for (let [e, { unsubscribe: t }] of r) a.has(e) || (t(), r.delete(e));
      for (let e of i) {
        let i = e.getHostId(),
          a = r.get(i);
        a?.manager !== e &&
          (a?.unsubscribe(), r.set(i, { manager: e, unsubscribe: n(e, t) }));
      }
    };
  return (
    i(),
    Xe([
      e.addRegistryCallback(() => {
        (i(), t());
      }),
      () => {
        for (let { unsubscribe: e } of r.values()) e();
      },
    ])
  );
}
function H({ appServerRegistry: e, enabledRemoteHostIds: t, sortKey: n }) {
  return qe({ appServerRegistry: e, enabledRemoteHostIds: t })
    .flatMap((e) => e.getRecentConversations())
    .sort((e, t) => {
      switch (n) {
        case `created_at`:
          return t.createdAt - e.createdAt;
        case `updated_at`:
          return (t.recencyAt ?? t.updatedAt) - (e.recencyAt ?? e.updatedAt);
      }
    });
}
async function Qe({
  scope: e,
  appServerRegistry: t,
  enabledRemoteHostIds: n,
  sortKey: r,
}) {
  if (
    !(await Promise.all(Je(e, t).map((e) => Ye(e.getHostId(), r)))).includes(!0)
  )
    throw Error(`Failed to refresh recent conversations`);
  return H({ appServerRegistry: t, enabledRemoteHostIds: n, sortKey: r });
}
function $e({
  scope: e,
  appServerRegistry: t,
  sortKey: n,
  refreshesInFlightHostIds: r,
}) {
  for (let i of Je(e, t)) {
    let e = i.getHostId();
    i.hasFetchedRecentConversations ||
      r.has(e) ||
      (r.add(e),
      Ye(e, n).finally(() => {
        r.delete(e);
      }));
  }
}
function et(e) {
  return new Set(JSON.parse(e));
}
function tt(e) {
  return JSON.stringify(Array.from(e).sort((e, t) => e.localeCompare(t)));
}
function U() {
  let e = (0, G.c)(5),
    t = r(g),
    n;
  e[0] === t ? (n = e[1]) : ((n = () => new P(t)), (e[0] = t), (e[1] = n));
  let [i] = (0, K.useState)(n),
    a,
    o;
  return (
    e[2] === i
      ? ((a = e[3]), (o = e[4]))
      : ((a = (e) => i.addRegistryCallback(e)),
        (o = () => i),
        (e[2] = i),
        (e[3] = a),
        (e[4] = o)),
    (0, K.useSyncExternalStore)(a, o)
  );
}
function W(e) {
  let t = (0, G.c)(5),
    n = U(),
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (e) => n.addRegistryCallback(e)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== n || t[3] !== e
      ? ((i = () => n.getForHostId(e)), (t[2] = n), (t[3] = e), (t[4] = i))
      : (i = t[4]),
    (0, K.useSyncExternalStore)(r, i)
  );
}
function nt(e) {
  let t = W(e);
  if (t == null) throw Error(`AppServerManager for host ${e} not found`);
  return t;
}
function rt(e) {
  let t = (0, G.c)(3),
    n = i(he, e),
    r = U();
  if (n.status === `ready`) return n.manager;
  let a;
  return (
    t[0] !== r || t[1] !== n.hostId
      ? ((a = r.waitForManagerForHostId(n.hostId)),
        (t[0] = r),
        (t[1] = n.hostId),
        (t[2] = a))
      : (a = t[2]),
    (0, K.use)(a)
  );
}
function it() {
  return ot(`recent-conversations`);
}
function at() {
  return ot(`recent-conversations-meta`);
}
function ot(e) {
  let t = (0, G.c)(28),
    n = r(g),
    a = U(),
    { enabledRemoteHostIdSet: s } = We(),
    c;
  t[0] === s ? (c = t[1]) : ((c = tt(s)), (t[0] = s), (t[1] = c));
  let l = c,
    u = i(ue, `12346831`),
    d = o(Ne),
    f = o(L),
    p = u ? _e : d,
    m = _(),
    h;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = new Set()), (t[2] = h))
    : (h = t[2]);
  let v = (0, K.useRef)(h),
    y = o(lt),
    b,
    x;
  (t[3] !== a ||
  t[4] !== l ||
  t[5] !== f ||
  t[6] !== m ||
  t[7] !== e ||
  t[8] !== n ||
  t[9] !== y ||
  t[10] !== p
    ? ((b = () => {
        if (!y) return;
        let t = () => {
          let t = et(l);
          (m.setQueryData(
            [e, p, l, f],
            H({ appServerRegistry: a, enabledRemoteHostIds: t, sortKey: p }),
          ),
            f === `live` &&
              $e({
                scope: n,
                appServerRegistry: a,
                sortKey: p,
                refreshesInFlightHostIds: v.current,
              }));
        };
        return Xe([
          n.watch((e) => {
            let { get: n } = e;
            for (let e of n(k)) (n(De, e), n(Oe, e));
            t();
          }),
          Ze({
            appServerRegistry: a,
            onStoreChange: t,
            subscribeToManager: (t, n) => {
              switch (e) {
                case `recent-conversations`:
                  return t.addAnyConversationCallback(n);
                case `recent-conversations-meta`:
                  return t.addAnyConversationMetaCallback(n);
              }
            },
          }),
        ]);
      }),
      (x = [a, l, f, m, e, n, y, p]),
      (t[3] = a),
      (t[4] = l),
      (t[5] = f),
      (t[6] = m),
      (t[7] = e),
      (t[8] = n),
      (t[9] = y),
      (t[10] = p),
      (t[11] = b),
      (t[12] = x))
    : ((b = t[11]), (x = t[12])),
    (0, K.useEffect)(b, x));
  let S;
  t[13] !== l || t[14] !== f || t[15] !== e || t[16] !== p
    ? ((S = [e, p, l, f]),
      (t[13] = l),
      (t[14] = f),
      (t[15] = e),
      (t[16] = p),
      (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] !== a || t[19] !== l || t[20] !== f || t[21] !== n || t[22] !== p
    ? ((C = async () => {
        let e = et(l);
        return f === `live`
          ? Qe({
              scope: n,
              appServerRegistry: a,
              enabledRemoteHostIds: e,
              sortKey: p,
            })
          : H({ appServerRegistry: a, enabledRemoteHostIds: e, sortKey: p });
      }),
      (t[18] = a),
      (t[19] = l),
      (t[20] = f),
      (t[21] = n),
      (t[22] = p),
      (t[23] = C))
    : (C = t[23]);
  let w;
  return (
    t[24] !== y || t[25] !== S || t[26] !== C
      ? ((w = {
          enabled: y,
          queryKey: S,
          staleTime: te.INFINITE,
          structuralSharing: st,
          queryFn: C,
        }),
        (t[24] = y),
        (t[25] = S),
        (t[26] = C),
        (t[27] = w))
      : (w = t[27]),
    ee(w)
  );
}
function st(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === t.length &&
    e.every((e, n) => e === t[n])
    ? e
    : t;
}
function ct(e) {
  let t = (0, G.c)(3),
    n = nt(e === void 0 ? T : e),
    r,
    i;
  return (
    t[0] === n
      ? ((r = t[1]), (i = t[2]))
      : ((r = (e) => n.addConfigNoticeCallback(e)),
        (i = () => n.getConfigNotices()),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i)),
    (0, K.useSyncExternalStore)(r, i)
  );
}
var G,
  K,
  lt,
  ut = e(() => {
    ((G = p()),
      ie(),
      m(),
      (K = t(d(), 1)),
      F(),
      D(),
      R(),
      ae(),
      Be(),
      Ve(),
      Ee(),
      V(),
      u(),
      E(),
      Fe(),
      de(),
      Te(),
      S(),
      v(),
      (lt = f(g, ({ get: e }) =>
        !ye() || e(z) === !0 ? !0 : we() && e(B) === !0,
      )));
  });
function dt() {
  let e = (0, pt.c)(2),
    t = _(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = () => {
          t.invalidateQueries({ queryKey: ne(`is-copilot-api-available`) });
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function ft() {
  let { data: e } = o(q);
  return e?.available ?? !1;
}
var pt,
  q,
  mt = e(() => {
    ((pt = p()),
      ie(),
      m(),
      u(),
      v(),
      w(),
      (q = x(g, `is-copilot-api-available`, { staleTime: te.INFINITE })));
  }),
  ht,
  J,
  gt = e(() => {
    ((ht = t(d(), 1)), (J = (0, ht.createContext)(void 0)));
  }),
  _t,
  Y,
  vt = e(() => {
    ((_t = t(d(), 1)), (Y = (0, _t.createContext)(null)));
  });
function yt(e, t) {
  let n = (0, Tt.c)(13),
    {
      isCopilotApiAvailable: r,
      useCopilotAuthIfAvailable: i,
      shouldUseWindowsStartupAuthTimeout: a,
      onLogout: o,
    } = t,
    [s, c] = (0, Z.useState)(e != null),
    [l, u] = (0, Z.useState)(null),
    d,
    f;
  (n[0] === e
    ? ((d = n[1]), (f = n[2]))
    : ((d = () => {
        if (e == null) {
          (u(null), c(!1));
          return;
        }
        (u(null), c(!0));
      }),
      (f = [e]),
      (n[0] = e),
      (n[1] = d),
      (n[2] = f)),
    (0, Z.useEffect)(d, f));
  let p, m;
  (n[3] !== r || n[4] !== e || n[5] !== o || n[6] !== a || n[7] !== i
    ? ((p = () => {
        if (e == null) return;
        let t = !1,
          n = !1,
          s = null,
          l = () => {
            St(e)
              .then((e) => {
                ((n = !0),
                  s != null && clearTimeout(s),
                  !t &&
                    (c(!1),
                    u(
                      wt(e, {
                        isCopilotApiAvailable: r,
                        useCopilotAuthIfAvailable: i,
                      }),
                    )));
              })
              .catch(() => {
                ((n = !0), s != null && clearTimeout(s), t || (c(!1), u(xt)));
              });
          };
        (a &&
          (s = setTimeout(() => {
            t || n || (c(!1), u(bt));
          }, Et)),
          l());
        let d = (e) => {
          (u((t) =>
            e.authMethod == null && t?.authMethod != null
              ? (o?.(), X())
              : t == null
                ? e.authMethod == null
                  ? t
                  : { ...X(), authMethod: e.authMethod }
                : { ...t, authMethod: e.authMethod ?? null },
          ),
            l());
        };
        return (
          e.addAuthStatusCallback(d),
          () => {
            ((t = !0),
              s != null && clearTimeout(s),
              e.removeAuthStatusCallback(d));
          }
        );
      }),
      (m = [e, r, o, a, i]),
      (n[3] = r),
      (n[4] = e),
      (n[5] = o),
      (n[6] = a),
      (n[7] = i),
      (n[8] = p),
      (n[9] = m))
    : ((p = n[8]), (m = n[9])),
    (0, Z.useEffect)(p, m));
  let h;
  return (
    n[10] !== l || n[11] !== s
      ? ((h = { isLoading: s, authState: l }),
        (n[10] = l),
        (n[11] = s),
        (n[12] = h))
      : (h = n[12]),
    h
  );
}
function bt(e) {
  return e ?? X();
}
function xt(e) {
  return e ?? X();
}
function St(e) {
  let t = Q.get(e);
  if (t != null) return t;
  let n = e.getAccount().finally(() => {
    Q.delete(e);
  });
  return (Q.set(e, n), n);
}
function X() {
  return {
    openAIAuth: null,
    authMethod: null,
    requiresAuth: !0,
    email: null,
    planAtLogin: null,
  };
}
function Ct(e) {
  if (e == null) return null;
  switch (e.type) {
    case `apiKey`:
      return `apikey`;
    case `amazonBedrock`:
      return null;
    case `chatgpt`:
      return `chatgpt`;
  }
}
function wt(e, t) {
  let n = Ct(e.account),
    r =
      t.useCopilotAuthIfAvailable && t.isCopilotApiAvailable
        ? `copilot`
        : e.account?.type === `amazonBedrock`
          ? `amazonBedrock`
          : n;
  return {
    openAIAuth: n,
    authMethod: r,
    requiresAuth: r === `copilot` || (e.requiresOpenaiAuth ?? !0),
    email: e.account?.type === `chatgpt` ? e.account.email : null,
    planAtLogin: e.account?.type === `chatgpt` ? e.account.planType : null,
  };
}
var Tt,
  Z,
  Et,
  Q,
  Dt = e(() => {
    ((Tt = p()), (Z = t(d(), 1)), (Et = 2e3), (Q = new WeakMap()));
  });
function Ot() {
  let e = (0, $.useContext)(J);
  if (!e) throw Error(`useAuth must be used within AuthProvider`);
  return e;
}
function kt(e) {
  return At(W(e));
}
function At(e, t) {
  let n = (0, Mt.c)(13),
    r;
  n[0] === e ? (r = n[1]) : ((r = e?.getHostId()), (n[0] = e), (n[1] = r));
  let i = r === T,
    a = ft(),
    { data: o, isLoading: s } = Ie(`use-copilot-auth-if-available`),
    c = i ? a : !1,
    l = i && !s ? (o ?? !1) : !1,
    u = i && document.documentElement.dataset.codexOs === `win32`,
    d = i ? t?.onLogout : void 0,
    f;
  n[2] !== c || n[3] !== l || n[4] !== u || n[5] !== d
    ? ((f = {
        isCopilotApiAvailable: c,
        useCopilotAuthIfAvailable: l,
        shouldUseWindowsStartupAuthTimeout: u,
        onLogout: d,
      }),
      (n[2] = c),
      (n[3] = l),
      (n[4] = u),
      (n[5] = d),
      (n[6] = f))
    : (f = n[6]);
  let { authState: p, isLoading: m } = yt(e, f);
  if (e == null) return null;
  let h;
  n[7] === p
    ? (h = n[8])
    : ((h = p ?? {
        openAIAuth: null,
        authMethod: null,
        requiresAuth: !0,
        email: null,
        planAtLogin: null,
      }),
      (n[7] = p),
      (n[8] = h));
  let g = h,
    _ = i ? a : !1,
    v;
  return (
    n[9] !== m || n[10] !== g || n[11] !== _
      ? ((v = {
          ...g,
          isLoading: m,
          isCopilotApiAvailable: _,
          accountId: null,
          userId: null,
          computeResidency: null,
        }),
        (n[9] = m),
        (n[10] = g),
        (n[11] = _),
        (n[12] = v))
      : (v = n[12]),
    v
  );
}
function jt() {
  let e = (0, $.useContext)(Y);
  if (!e)
    throw Error(`useUpdateAuthNonce must be used within AuthNonceProvider`);
  return e;
}
var Mt,
  $,
  Nt = e(() => {
    ((Mt = p()), ($ = t(d(), 1)), ut(), mt(), Re(), E(), gt(), vt(), Dt());
  }),
  Pt = n((e, t) => {
    function n(e) {
      return function (t, n, r) {
        for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
          var c = o[e ? s : ++i];
          if (n(a[c], c, a) === !1) break;
        }
        return t;
      };
    }
    t.exports = n;
  }),
  Ft = n((e, t) => {
    t.exports = Pt()();
  }),
  It = n((e, t) => {
    var n = Ft(),
      r = s();
    function i(e, t) {
      return e && n(e, t, r);
    }
    t.exports = i;
  }),
  Lt = n((e, t) => {
    var n = a();
    function r(e, t) {
      return function (r, i) {
        if (r == null) return r;
        if (!n(r)) return e(r, i);
        for (
          var a = r.length, o = t ? a : -1, s = Object(r);
          (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;
        );
        return r;
      };
    }
    t.exports = r;
  }),
  Rt = n((e, t) => {
    var n = It();
    t.exports = Lt()(n);
  }),
  zt = n((e, t) => {
    var n = Rt(),
      r = a();
    function i(e, t) {
      var i = -1,
        a = r(e) ? Array(e.length) : [];
      return (
        n(e, function (e, n, r) {
          a[++i] = t(e, n, r);
        }),
        a
      );
    }
    t.exports = i;
  }),
  Bt = n((e, t) => {
    function n(e, t) {
      var n = e.length;
      for (e.sort(t); n--;) e[n] = e[n].value;
      return e;
    }
    t.exports = n;
  }),
  Vt = n((e, t) => {
    var n = b();
    function r(e, t) {
      if (e !== t) {
        var r = e !== void 0,
          i = e === null,
          a = e === e,
          o = n(e),
          s = t !== void 0,
          c = t === null,
          l = t === t,
          u = n(t);
        if (
          (!c && !u && !o && e > t) ||
          (o && s && l && !c && !u) ||
          (i && s && l) ||
          (!r && l) ||
          !a
        )
          return 1;
        if (
          (!i && !o && !u && e < t) ||
          (u && r && a && !i && !o) ||
          (c && r && a) ||
          (!s && a) ||
          !l
        )
          return -1;
      }
      return 0;
    }
    t.exports = r;
  }),
  Ht = n((e, t) => {
    var n = Vt();
    function r(e, t, r) {
      for (
        var i = -1, a = e.criteria, o = t.criteria, s = a.length, c = r.length;
        ++i < s;
      ) {
        var l = n(a[i], o[i]);
        if (l) return i >= c ? l : l * (r[i] == `desc` ? -1 : 1);
      }
      return e.index - t.index;
    }
    t.exports = r;
  }),
  Ut = n((e, t) => {
    var n = y(),
      r = C(),
      i = se(),
      a = zt(),
      o = Bt(),
      s = c(),
      u = Ht(),
      d = ce(),
      f = l();
    function p(e, t, c) {
      t = t.length
        ? n(t, function (e) {
            return f(e)
              ? function (t) {
                  return r(t, e.length === 1 ? e[0] : e);
                }
              : e;
          })
        : [d];
      var l = -1;
      return (
        (t = n(t, s(i))),
        o(
          a(e, function (e, r, i) {
            return {
              criteria: n(t, function (t) {
                return t(e);
              }),
              index: ++l,
              value: e,
            };
          }),
          function (e, t) {
            return u(e, t, c);
          },
        )
      );
    }
    t.exports = p;
  });
function Wt(e) {
  return (
    e === `education` ||
    e === `edu_plus` ||
    e === `edu_pro` ||
    e === `edu` ||
    e === `deprecated_edu` ||
    e === `k12`
  );
}
function Gt(e) {
  return e === `quorum`;
}
function Kt(e) {
  return e === `team` || e === `self_serve_business_usage_based`;
}
function qt(e) {
  return (
    e === `business` ||
    e === `enterprise` ||
    e === `enterprise_cbp_usage_based` ||
    e === `enterprise_cbp_automation` ||
    e === `deprecated_enterprise` ||
    e === `hc` ||
    e === `finserv` ||
    Wt(e) ||
    Gt(e)
  );
}
function Jt(e) {
  return qt(e) && !Gt(e);
}
function Yt(e) {
  return (
    e === `self_serve_business_usage_based` ||
    e === `enterprise_cbp_usage_based` ||
    e === `enterprise_cbp_automation`
  );
}
var Xt,
  Zt = e(() => {
    Xt = (function (e) {
      return (
        (e.FREE = `free`),
        (e.GO = `go`),
        (e.PLUS = `plus`),
        (e.PRO = `pro`),
        (e.PROLITE = `prolite`),
        (e.SELF_SERVE_BUSINESS = `team`),
        (e.ENTERPRISE_CBP = `business`),
        (e.SELF_SERVE_BUSINESS_USAGE_BASED = `self_serve_business_usage_based`),
        (e.ENTERPRISE_CBP_USAGE_BASED = `enterprise_cbp_usage_based`),
        (e.ENTERPRISE_CBP_AUTOMATION = `enterprise_cbp_automation`),
        (e.FINSERV = `finserv`),
        (e.EDUCATION_CBP = `education`),
        (e.EDU_PLUS = `edu_plus`),
        (e.EDU_PRO = `edu_pro`),
        (e.QUORUM = `quorum`),
        (e.DEPRECATED_ENTERPRISE = `enterprise`),
        (e.HC = `hc`),
        (e.DEPRECATED_ENTERPRISE_2 = `deprecated_enterprise`),
        (e.DEPRECATED_EDU = `edu`),
        (e.DEPRECATED_EDU_2 = `deprecated_edu`),
        e
      );
    })({});
  });
function Qt() {
  return window.electronBridge?.getBuildFlavor?.() || `prod`;
}
var $t = e(() => {});
export {
  U as A,
  Be as B,
  ft as C,
  rt as D,
  ct as E,
  He as F,
  F as G,
  I as H,
  Ue as I,
  B as L,
  at as M,
  V as N,
  W as O,
  We as P,
  Ve as R,
  q as S,
  ut as T,
  L as U,
  R as V,
  P as W,
  Y as _,
  Jt as a,
  gt as b,
  Yt as c,
  Ft as d,
  Nt as f,
  jt as g,
  kt as h,
  Zt as i,
  it as j,
  nt as k,
  Ut as l,
  At as m,
  $t as n,
  qt as o,
  Ot as p,
  Xt as r,
  Kt as s,
  Qt as t,
  Rt as u,
  vt as v,
  dt as w,
  mt as x,
  J as y,
  z,
};
//# sourceMappingURL=app-initial~artifact-tab-content.electron~notebook-preview-panel~app-main~business-checkout~k87y25tw-DjPeV3vC.js.map
