// Restored from ref/webview/assets/dist-BzfmOLQN.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// Dist chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  distParam2,
  distParam3 = __vite__mapDeps,
  distParam4 = distParam3.f ||
    (distParam3.f = [
      "./register-BqqwIOLc-llieL4FY.js",
      "./register-BqqwIOLc-B78Bmrit.js",
      "./rolldown-runtime-BG2f4sTM.js",
      "./app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~kppdhley-CabsBVhy.js",
      "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~ngwudnyz-D_QFwR2V.js",
      "./app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~l16cgjx9-XwSLyHyz.js",
      "./app-initial~avatarOverlayCompositionSurface~index~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-D~ch0na97m-DGJ4C9j8.js",
      "./app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~gsbyx6su-EGL8CaU9.js",
      "./app-initial~avatarOverlayCompositionSurface~index-9fQ9wihu~index-BFCcxPM5~mapbox-gl-DVWlwqb~elr7dp2m-DG_7tMKE.js",
    ]),
) => distParam2.map((item) => distParam4[item]);
import {
  createLazyEsmInitializer as rolldownRuntimeN,
  toEsm as rolldownRuntimeS,
} from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt,
} from "./shared-react-runtime";
import {
  preloadModule as appInitialAvatarOverlayCompositionSurfaceIndexIndex9fQ9wihuIndexBFCcxPM5MapboxGlDCh0na97mO,
  initPreloadRuntime as appInitialAvatarOverlayCompositionSurfaceIndexIndex9fQ9wihuIndexBFCcxPM5MapboxGlDCh0na97mS,
} from "../package-adapters/marked-runtime/index";
export function Dist(distParam1) {
  let {
      widget,
      initialState,
      theme,
      dir,
      mapboxAccessToken,
      streaming: _Dist,
      className,
      customCss,
      onAction,
      onError,
      onLoad: distValue7,
    } = distParam1,
    distValue8 = distValue3.useRef(null),
    distValue9;
  distValue9 = [];
  distValue3.useEffect(distHelper1, distValue9);
  let distValue10, distValue11;
  distValue10 = () => {
    if (!distValue8.current) return;
    let distValue20 = new AbortController();
    return (
      distValue8.current.addEventListener(
        "dil.load",
        (distParam6) => {
          let { detail } = distParam6;
          distValue7?.(detail.imperativeApi);
        },
        {
          signal: distValue20.signal,
        },
      ),
      () => {
        distValue20.abort();
      }
    );
  };
  distValue11 = [distValue7];
  distValue3.useEffect(distValue10, distValue11);
  let distValue12, distValue13;
  distValue12 = () => {
    if (!distValue8.current || !onAction) return;
    let distValue19 = new AbortController();
    return (
      distValue8.current.addEventListener(
        "dil.action",
        (distParam5) => {
          let { detail } = distParam5,
            { action, resolve, reject } = detail;
          onAction(action).then(resolve, reject);
        },
        {
          signal: distValue19.signal,
        },
      ),
      () => {
        distValue19.abort();
      }
    );
  };
  distValue13 = [onAction];
  distValue3.useEffect(distValue12, distValue13);
  let distValue14, distValue15;
  distValue14 = () => {
    if (!distValue8.current || !onError) return;
    let distValue21 = new AbortController();
    return (
      distValue8.current.addEventListener(
        "dil.error",
        (distParam7) => {
          let { error } = distParam7;
          onError(error);
        },
        {
          signal: distValue21.signal,
        },
      ),
      () => {
        distValue21.abort();
      }
    );
  };
  distValue15 = [onError];
  distValue3.useEffect(distValue14, distValue15);
  let distValue16, distValue17;
  distValue16 = () => {
    if (!distValue8.current) return;
    let distValue22 = distValue8.current;
    distValue5().then(() => {
      distValue22.setState({
        widget,
        initialState,
        theme,
        streaming: _Dist,
        mapboxAccessToken,
        dir,
        customCss,
      });
    });
  };
  distValue17 = [
    widget,
    initialState,
    theme,
    _Dist,
    mapboxAccessToken,
    dir,
    customCss,
  ];
  distValue3.useEffect(distValue16, distValue17);
  return distValue1.jsx("dil-renderer", {
    ref: distValue8,
    className,
  });
}
function distHelper1() {
  distValue5();
}
var distValue1, distValue2, distValue3, distValue4, distValue5;
rolldownRuntimeN(() => {
  distValue1 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
  distValue2 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  distValue3 = rolldownRuntimeS(
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn(),
    1,
  );
  appInitialAvatarOverlayCompositionSurfaceIndexIndex9fQ9wihuIndexBFCcxPM5MapboxGlDCh0na97mS();
  distValue4 = null;
  distValue5 = () => (
    (distValue4 ??=
      appInitialAvatarOverlayCompositionSurfaceIndexIndex9fQ9wihuIndexBFCcxPM5MapboxGlDCh0na97mO(
        () =>
          import("../current-ref-aliases/register-bqqw-iolc-runtime/index").then(
            (value) => value.r,
          ),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
        import.meta.url,
      ).then((value) => {
        value.registerTag();
      })),
    distValue4
  );
})();
