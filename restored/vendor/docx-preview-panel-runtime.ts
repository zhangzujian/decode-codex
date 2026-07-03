// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
// Flat boundary. Vendored runtime chunk preserved from the Codex webview bundle.
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview"]),
) => i.map((i) => d[i]);
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  D as n,
  E as r,
  Go as i,
  Ko as o,
  O as s,
  Vo as c,
  _ as l,
  _c as u,
  ar as d,
  gc as f,
  ir as p,
  lc as m,
  v as ee,
} from "./current-app-initial-bnlvjk3w-shared-bundle";
import {
  aa as g,
  ac as _,
  bs as v,
  ic as y,
  oc as b,
  sa as useResizeObserverRef,
  ws as te,
} from "./worktree-new-thread-orchestrator-current-bundle";
import {
  $t as S,
  Np as ne,
  Xt as C,
  Yt as w,
  Zt as re,
  an as computeWheelZoomPercent,
  gh as ae,
  hh as oe,
  in as computePinchZoomPercent,
  jp as se,
  mh as ce,
  nn as le,
  on as measureTouchDistance,
  rn as normalizeZoomPercent,
  sn as de,
  tn as fe,
} from "./worktree-new-thread-query-current-bundle";
import {
  Hi as D,
  Iy as O,
  Ri as pe,
  Vi as me,
  ba as k,
  ya as ge,
} from "./remote-projects-app-shared-current-bundle";
import {
  appMainCurrentCompatSlotUpperILowerT as M,
  appMainCurrentCompatSlotUpperOLowerT as Ce,
  appMainCurrentCompatSlotUpperQLowerU as we,
  appMainCurrentCompatSlotLowerRLowerD as I,
} from "./app-main-current-runtime";
import {
  composeRefs as Oe,
  initComposeRefsChunk as R,
} from "../utils/compose-refs";
import { initArtifactAnalyticsChunk as z } from "../features/artifact-analytics";
import {
  getArtifactAnnotationCommentsForPath as B,
  getNextArtifactAnnotationLine as Me,
  initArtifactAnnotationCommentChunk as je,
} from "../ui/artifact-annotation-comment";
import {
  ArtifactPreviewStatus as V,
  initArtifactPreviewStatusChunk as Ne,
} from "../utils/artifact-preview-status";
import {
  createDocxPreviewStyleText,
  DOCX_PREVIEW_SCROLL_CLASS as Kt,
  docxTitleFromPath as It,
  isDocumentArtifactAnnotation as Mt,
  isDocumentArtifactAnnotationForPath as Ht,
  measureDocxPage as Vt,
  DocxPageAnnotationLayer,
  useDocxPageNavigation as zt,
  useDocxPreviewRenderState as X,
  useDocxPreviewZoom as Nt,
} from "../features/documents/docx-preview-panel";
function Tt(e) {
  let {
      comments: n,
      conversationId: i,
      isCommentMode: a,
      nextCommentNumber: s,
      onCommentsChange: c,
      onTouchCancel: l,
      onTouchEnd: u,
      onTouchMove: d,
      onTouchStart: f,
      onWheel: p,
      pageCount: m,
      pageNumber: g,
      pageSize: _,
      path: v,
      tabId: y,
      threadId: b,
      title: x,
      zoomScale: te,
    } = e,
    S = te === void 0 ? 1 : te;
  return (0, Y.jsx)(DocxPageAnnotationLayer, {
    comments: n,
    conversationId: i,
    hostMessageBridge: ee,
    isCommentMode: a,
    nextCommentNumber: s,
    onCommentsChange: c,
    onTouchCancel: l,
    onTouchEnd: u,
    onTouchMove: d,
    onTouchStart: f,
    onWheel: p,
    pageCount: m,
    pageNumber: g,
    pageSize: _,
    path: v,
    productLoggerScope: o(r),
    tabId: y,
    threadId: b,
    title: x,
    zoomScale: S,
  });
}
var Y,
  At = e(() => {
    (f(),
      oe(),
      c(),
      s(),
      u(),
      O(),
      we(),
      I(),
      l(),
      n(),
      z(),
      Ce(),
      M(),
      (Y = m()));
  });
function jt(e) {
  let t = (0, Wt.c)(82),
    {
      bytes: n,
      chromeMode: r,
      disableAnnotations: a,
      disableFileActions: s,
      hostId: c,
      onBeforeOpen: l,
      path: u,
      ref: d,
      tabId: f,
      title: p,
    } = e,
    m = r === void 0 ? `default` : r,
    h = a === void 0 ? !1 : a,
    ee = s === void 0 ? !1 : s,
    g = o(pe),
    _ = (0, Z.use)(Zt),
    v = ne(),
    {
      bodyContainerElementRef: x,
      cancelPageScroll: ae,
      flushPendingPageScroll: T,
      navigateToPage: ke,
    } = zt({ zoomScale: v }),
    se = {
      bodyContainerElementRef: x,
      bytes: n,
      onPagesRendered: T,
      renderAsync: _,
      styleText: qt,
    };
  let {
      bodyContainerElementRef: ce,
      bodyContainerRef: ue,
      loadState: E,
      pageElements: de,
      styleContainerRef: fe,
      totalPages: D,
    } = X(se),
    O;
  t[7] === g.value
    ? (O = t[8])
    : ((O = me(g.value)), (t[7] = g.value), (t[8] = O));
  let he = O,
    k;
  t[9] === he
    ? (k = t[10])
    : ((k = he ?? ge({ entrypoint: `home` })), (t[9] = he), (t[10] = k));
  let _e = k,
    ve = i(y, _e),
    ye;
  t[11] !== _e || t[12] !== g
    ? ((ye = (e) => {
        b(g, _e, e);
      }),
      (t[11] = _e),
      (t[12] = g),
      (t[13] = ye))
    : (ye = t[13]);
  let be = ye,
    A,
    j;
  t[14] !== ve || t[15] !== u
    ? ((A = B(ve, u).filter(Mt)),
      (j = Me(A)),
      (t[14] = ve),
      (t[15] = u),
      (t[16] = A),
      (t[17] = j))
    : ((A = t[16]), (j = t[17]));
  let M = j,
    {
      handleTouchCancel: xe,
      handleTouchEnd: Se,
      handleTouchMove: N,
      handleTouchStart: Ce,
      handleWheel: P,
      fitToWidth: we,
      isZoomToFitSelected: Te,
      previewStyle: F,
      resizeRef: Ee,
      setZoomPercent: De,
      zoomPercent: I,
    } = Nt({
      bodyContainerElementRef: ce,
      computePinchZoomPercent,
      computeWheelZoomPercent,
      measureTouchDistance,
      normalizeZoomPercent,
      useResizeObserverRef,
    }),
    L = E === `ready`,
    Ae,
    z;
  (t[21] === ke
    ? ((Ae = t[22]), (z = t[23]))
    : ((Ae = () => ({ navigateToPage: ke })),
      (z = [ke]),
      (t[21] = ke),
      (t[22] = Ae),
      (t[23] = z)),
    (0, Z.useImperativeHandle)(d, Ae, z));
  let je, Ne;
  (t[24] !== u || t[25] !== be
    ? ((je = () => () => {
        (ae(),
          be((e) => {
            let t = e.filter((e) => !Ht(e, u));
            return t.length === e.length ? e : t;
          }));
      }),
      (Ne = [ae, u, be]),
      (t[24] = u),
      (t[25] = be),
      (t[26] = je),
      (t[27] = Ne))
    : ((je = t[26]), (Ne = t[27])),
    (0, Z.useEffect)(je, Ne));
  let H;
  t[28] === fe
    ? (H = t[29])
    : ((H = (0, Q.jsx)(`div`, {
        ref: fe,
        "aria-hidden": !0,
        className: `hidden`,
      })),
      (t[28] = fe),
      (t[29] = H));
  let Pe;
  t[30] !== m ||
  t[31] !== ee ||
  t[32] !== we ||
  t[33] !== c ||
  t[34] !== L ||
  t[35] !== Te ||
  t[36] !== l ||
  t[37] !== u ||
  t[38] !== De ||
  t[39] !== p ||
  t[40] !== I
    ? ((Pe = L
        ? (0, Q.jsx)(C, {
            artifactType: `DOC`,
            hideMetadata: m === `standalone`,
            title: It(p),
            centerContent: null,
            rightContent: (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, Q.jsx)(S, {
                  triggerTestId: `docx-preview-zoom-trigger`,
                  zoomPercent: I,
                  zoomOptions: le,
                  onZoomPercentChange: De,
                  fitOption: { selected: Te, onSelect: we },
                }),
                m === `default` && !ee
                  ? (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(w, { hostId: c, path: u }),
                        (0, Q.jsx)(re, {
                          hostId: c,
                          onBeforeOpen: l,
                          path: u,
                          showLabel: !0,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[30] = m),
      (t[31] = ee),
      (t[32] = we),
      (t[33] = c),
      (t[34] = L),
      (t[35] = Te),
      (t[36] = l),
      (t[37] = u),
      (t[38] = De),
      (t[39] = p),
      (t[40] = I),
      (t[41] = Pe))
    : (Pe = t[41]);
  let U;
  t[42] !== ue || t[43] !== Ee
    ? ((U = Oe(ue, Ee)), (t[42] = ue), (t[43] = Ee), (t[44] = U))
    : (U = t[44]);
  let Fe = L ? Kt : `hidden`,
    W;
  t[45] !== xe ||
  t[46] !== Se ||
  t[47] !== N ||
  t[48] !== Ce ||
  t[49] !== P ||
  t[50] !== F ||
  t[51] !== U ||
  t[52] !== Fe ||
  t[53] !== p
    ? ((W = (0, Q.jsx)(`div`, {
        ref: U,
        "aria-label": p,
        className: Fe,
        "data-testid": `docx-preview-panel`,
        onTouchCancel: xe,
        onTouchEnd: Se,
        onTouchMove: N,
        onTouchStart: Ce,
        onWheel: P,
        style: F,
      })),
      (t[45] = xe),
      (t[46] = Se),
      (t[47] = N),
      (t[48] = Ce),
      (t[49] = P),
      (t[50] = F),
      (t[51] = U),
      (t[52] = Fe),
      (t[53] = p),
      (t[54] = W))
    : (W = t[54]);
  let Ie;
  t[55] !== _e ||
  t[56] !== h ||
  t[57] !== A ||
  t[58] !== xe ||
  t[59] !== Se ||
  t[60] !== N ||
  t[61] !== Ce ||
  t[62] !== P ||
  t[63] !== L ||
  t[64] !== M ||
  t[65] !== de ||
  t[66] !== u ||
  t[67] !== be ||
  t[68] !== f ||
  t[69] !== he ||
  t[70] !== p ||
  t[71] !== D ||
  t[72] !== I
    ? ((Ie =
        L && !h
          ? de.map((e, t) => {
              let n = t + 1;
              return (0, Gt.createPortal)(
                (0, Q.jsx)(Tt, {
                  comments: A,
                  conversationId: _e,
                  isCommentMode: !1,
                  nextCommentNumber: M,
                  onCommentsChange: be,
                  onTouchCancel: xe,
                  onTouchEnd: Se,
                  onTouchMove: N,
                  onTouchStart: Ce,
                  onWheel: P,
                  pageCount: D,
                  pageNumber: n,
                  pageSize: Vt(e, I),
                  path: u,
                  tabId: f,
                  threadId: he,
                  title: p,
                  zoomScale: I / 100,
                }),
                e,
                `${u}:${n}:browse`,
              );
            })
          : null),
      (t[55] = _e),
      (t[56] = h),
      (t[57] = A),
      (t[58] = xe),
      (t[59] = Se),
      (t[60] = N),
      (t[61] = Ce),
      (t[62] = P),
      (t[63] = L),
      (t[64] = M),
      (t[65] = de),
      (t[66] = u),
      (t[67] = be),
      (t[68] = f),
      (t[69] = he),
      (t[70] = p),
      (t[71] = D),
      (t[72] = I),
      (t[73] = Ie))
    : (Ie = t[73]);
  let G;
  t[74] === E ? (G = t[75]) : ((G = V(E)), (t[74] = E), (t[75] = G));
  let Le;
  return (
    t[76] !== H || t[77] !== Pe || t[78] !== W || t[79] !== Ie || t[80] !== G
      ? ((Le = (0, Q.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
          children: [H, Pe, W, Ie, G],
        })),
        (t[76] = H),
        (t[77] = Pe),
        (t[78] = W),
        (t[79] = Ie),
        (t[80] = G),
        (t[81] = Le))
      : (Le = t[81]),
    Le
  );
}
var Wt, Z, Gt, Q, qt, Zt;
e(() => {
  ((Wt = f()),
    c(),
    s(),
    (Z = t(u(), 1)),
    (Gt = t(ae(), 1)),
    se(),
    _(),
    k(),
    g(),
    D(),
    te(),
    R(),
    je(),
    fe(),
    Ne(),
    de(),
    At(),
    (Q = m()),
    d(),
    (qt = createDocxPreviewStyleText(v)),
    (Zt = p(
      async () => {
        let { renderAsync: e } = await import(`./docx-preview`);
        return { renderAsync: e };
      },
      __vite__mapDeps([0]),
      import.meta.url,
    ).then(
      ({ renderAsync: e }) => e,
      () => null,
    )));
})();
export { jt as DocxPreviewPanel };
