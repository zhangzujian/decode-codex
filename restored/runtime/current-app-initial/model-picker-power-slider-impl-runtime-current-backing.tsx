// Restored from ref/webview/assets/model-picker-power-slider-impl-CHY-N8op.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// ModelPickerPowerSliderImpl chunk restored from the Codex webview bundle.
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
  AnimatePresence as _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0S,
  useTransform as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0D,
  useMotionValue as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0H,
  animate as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0I,
  useReducedMotion as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0S,
  initFramerMotionCurrentRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0T,
  motion as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0Y,
} from "../package-adapters/framer-motion-current/index";
import {
  quickChatWindowPageChatgRuntimeVariant5Member0003 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1I,
  quickChatWindowPageChatgRuntimeVariant5Member0004 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1N,
  quickChatWindowPageChatgRuntimeVariant5Member0006 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1R,
  quickChatWindowPageChatgRuntimeVariant5Member0008 as appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1T,
} from "../current-ref-aliases/quick-chat-window-page-chatg-runtime-variant-5/index";
function modelPickerPowerSliderImplHelper1(
  modelPickerPowerSliderImplParam26,
  modelPickerPowerSliderImplParam27,
) {
  let modelPickerPowerSliderImplValue243 =
    Math.sin(
      (modelPickerPowerSliderImplParam26 + 1) * 12.9898 +
        modelPickerPowerSliderImplParam27 * 78.233,
    ) * 43758.5453;
  return (
    modelPickerPowerSliderImplValue243 -
    Math.floor(modelPickerPowerSliderImplValue243)
  );
}
var modelPickerPowerSliderImplValue1 = rolldownRuntimeN(() => {}),
  modelPickerPowerSliderImplValue2,
  modelPickerPowerSliderImplValue3,
  modelPickerPowerSliderImplValue4,
  modelPickerPowerSliderImplValue5,
  modelPickerPowerSliderImplValue6,
  modelPickerPowerSliderImplValue7,
  modelPickerPowerSliderImplValue8,
  modelPickerPowerSliderImplValue9,
  modelPickerPowerSliderImplValue10 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue2 = "_FastTrackParticles_1pz9e_1";
    modelPickerPowerSliderImplValue3 = "_FastTrackParticleTravel_1pz9e_1";
    modelPickerPowerSliderImplValue4 = "_FastTrackParticlePath_1pz9e_7";
    modelPickerPowerSliderImplValue5 = "_TrackParticle_1pz9e_22";
    modelPickerPowerSliderImplValue6 = "_TrackParticles_1pz9e_38";
    modelPickerPowerSliderImplValue7 = "_Burst_1pz9e_76";
    modelPickerPowerSliderImplValue8 = "_ParticleBurst_1pz9e_1";
    modelPickerPowerSliderImplValue9 = {
      FastTrackParticles: modelPickerPowerSliderImplValue2,
      FastTrackParticleTravel: modelPickerPowerSliderImplValue3,
      FastTrackParticlePath: modelPickerPowerSliderImplValue4,
      TrackParticle: modelPickerPowerSliderImplValue5,
      TrackParticles: modelPickerPowerSliderImplValue6,
      Burst: modelPickerPowerSliderImplValue7,
      ParticleBurst: modelPickerPowerSliderImplValue8,
    };
  });
function modelPickerPowerSliderImplHelper2(modelPickerPowerSliderImplParam5) {
  let { animationActive, initialStartPercent } =
      modelPickerPowerSliderImplParam5,
    [modelPickerPowerSliderImplValue194] =
      modelPickerPowerSliderImplValue12.useState(initialStartPercent),
    modelPickerPowerSliderImplValue195 =
      1 - Math.min(Math.max(modelPickerPowerSliderImplValue194, 0), 100) / 100,
    modelPickerPowerSliderImplValue196 = Array.from(
      {
        length: 14,
      },
      (modelPickerPowerSliderImplParam9, modelPickerPowerSliderImplParam10) => {
        let modelPickerPowerSliderImplValue209 =
            1 +
            (modelPickerPowerSliderImplHelper1(
              modelPickerPowerSliderImplParam10,
              21,
            ) -
              0.5) *
              2 *
              modelPickerPowerSliderImplValue15,
          modelPickerPowerSliderImplValue210 =
            modelPickerPowerSliderImplValue14 /
            modelPickerPowerSliderImplValue209,
          modelPickerPowerSliderImplValue211 =
            modelPickerPowerSliderImplValue210 *
            modelPickerPowerSliderImplValue195,
          modelPickerPowerSliderImplValue212 =
            0.4 +
            modelPickerPowerSliderImplHelper1(
              modelPickerPowerSliderImplParam10,
              11,
            ) *
              0.6,
          modelPickerPowerSliderImplValue213 =
            0.5 +
            modelPickerPowerSliderImplHelper1(
              modelPickerPowerSliderImplParam10,
              12,
            ) *
              0.45;
        return (
          <span
            key={modelPickerPowerSliderImplParam10}
            className={modelPickerPowerSliderImplValue9.FastTrackParticlePath}
            style={{
              animationDelay: `${modelPickerPowerSliderImplParam10 * modelPickerPowerSliderImplValue16 - modelPickerPowerSliderImplValue211}s`,
              animationDuration: `${modelPickerPowerSliderImplValue210}s`,
              top: `${12 + modelPickerPowerSliderImplHelper1(modelPickerPowerSliderImplParam10, 23) * 76}%`,
            }}
          >
            <span
              className={modelPickerPowerSliderImplValue9.TrackParticle}
              style={{
                opacity: modelPickerPowerSliderImplValue212,
                transform: `translate(-50%, -50%) scale(${modelPickerPowerSliderImplValue213})`,
              }}
            />
          </span>
        );
      },
    );
  return (
    <span
      aria-hidden={true}
      className={modelPickerPowerSliderImplValue9.FastTrackParticles}
      data-animation-active={animationActive}
    >
      {modelPickerPowerSliderImplValue196}
    </span>
  );
}
var modelPickerPowerSliderImplValue11,
  modelPickerPowerSliderImplValue12,
  modelPickerPowerSliderImplValue13,
  modelPickerPowerSliderImplValue14,
  modelPickerPowerSliderImplValue15,
  modelPickerPowerSliderImplValue16,
  modelPickerPowerSliderImplValue17 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue11 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
    modelPickerPowerSliderImplValue12 = rolldownRuntimeS(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn(),
      1,
    );
    modelPickerPowerSliderImplValue1();
    modelPickerPowerSliderImplValue10();
    modelPickerPowerSliderImplValue13 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
    modelPickerPowerSliderImplValue14 = 1.9;
    modelPickerPowerSliderImplValue15 = 0.2;
    modelPickerPowerSliderImplValue16 = modelPickerPowerSliderImplValue14 / 14;
  });
function modelPickerPowerSliderImplHelper3() {
  return (
    <span aria-hidden={true} className={modelPickerPowerSliderImplValue9.Burst}>
      {Array.from(
        {
          length: 16,
        },
        modelPickerPowerSliderImplHelper4,
      )}
    </span>
  );
}
function modelPickerPowerSliderImplHelper4(
  modelPickerPowerSliderImplParam38,
  modelPickerPowerSliderImplParam39,
) {
  return <span key={modelPickerPowerSliderImplParam39} />;
}
var modelPickerPowerSliderImplValue18,
  modelPickerPowerSliderImplValue19,
  modelPickerPowerSliderImplValue20 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue18 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
    modelPickerPowerSliderImplValue10();
    modelPickerPowerSliderImplValue19 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
  }),
  modelPickerPowerSliderImplValue21,
  modelPickerPowerSliderImplValue22,
  modelPickerPowerSliderImplValue23,
  modelPickerPowerSliderImplValue24,
  modelPickerPowerSliderImplValue25,
  modelPickerPowerSliderImplValue26 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue21 = "_Fill_notip_7";
    modelPickerPowerSliderImplValue22 = "_Reveal_notip_1";
    modelPickerPowerSliderImplValue23 = "_Mask_notip_14";
    modelPickerPowerSliderImplValue24 = "_Canvas_notip_61";
    modelPickerPowerSliderImplValue25 = {
      Fill: modelPickerPowerSliderImplValue21,
      Reveal: modelPickerPowerSliderImplValue22,
      Mask: modelPickerPowerSliderImplValue23,
      Canvas: modelPickerPowerSliderImplValue24,
    };
  });
function _e(modelPickerPowerSliderImplParam8) {
  let { active, reveal, shouldReduceMotion } = modelPickerPowerSliderImplParam8,
    modelPickerPowerSliderImplValue204 =
      modelPickerPowerSliderImplValue28.useRef(null),
    modelPickerPowerSliderImplValue205,
    modelPickerPowerSliderImplValue206;
  modelPickerPowerSliderImplValue205 = () => {
    if (!active) return;
    let modelPickerPowerSliderImplValue244 =
      modelPickerPowerSliderImplValue204.current;
    if (modelPickerPowerSliderImplValue244 != null)
      return modelPickerPowerSliderImplHelper5(
        modelPickerPowerSliderImplValue244,
        shouldReduceMotion,
      );
  };
  modelPickerPowerSliderImplValue206 = [active, shouldReduceMotion];
  modelPickerPowerSliderImplValue28.useEffect(
    modelPickerPowerSliderImplValue205,
    modelPickerPowerSliderImplValue206,
  );
  let modelPickerPowerSliderImplValue207 = (
    <span className={modelPickerPowerSliderImplValue25.Mask}>
      <canvas
        className={modelPickerPowerSliderImplValue25.Canvas}
        ref={modelPickerPowerSliderImplValue204}
      />
    </span>
  );
  return (
    <span
      aria-hidden={true}
      className={modelPickerPowerSliderImplValue25.Fill}
      data-reveal={reveal}
    >
      {modelPickerPowerSliderImplValue207}
    </span>
  );
}
function modelPickerPowerSliderImplHelper5(
  modelPickerPowerSliderImplParam2,
  modelPickerPowerSliderImplParam3,
) {
  if (typeof WebGLRenderingContext > "u" || typeof ResizeObserver > "u") return;
  let modelPickerPowerSliderImplValue166 =
    modelPickerPowerSliderImplParam2.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "high-performance",
      stencil: false,
    });
  if (modelPickerPowerSliderImplValue166 == null) return;
  let modelPickerPowerSliderImplValue167 = modelPickerPowerSliderImplHelper6(
    modelPickerPowerSliderImplValue166,
  );
  if (modelPickerPowerSliderImplValue167 == null) return;
  let modelPickerPowerSliderImplValue168 =
    modelPickerPowerSliderImplValue166.createBuffer();
  if (modelPickerPowerSliderImplValue168 == null) {
    modelPickerPowerSliderImplValue166.deleteProgram(
      modelPickerPowerSliderImplValue167,
    );
    return;
  }
  let modelPickerPowerSliderImplValue169 =
      modelPickerPowerSliderImplValue166.getAttribLocation(
        modelPickerPowerSliderImplValue167,
        "aPosition",
      ),
    modelPickerPowerSliderImplValue170 =
      modelPickerPowerSliderImplValue166.getUniformLocation(
        modelPickerPowerSliderImplValue167,
        "uResolution",
      ),
    modelPickerPowerSliderImplValue171 =
      modelPickerPowerSliderImplValue166.getUniformLocation(
        modelPickerPowerSliderImplValue167,
        "uTime",
      ),
    modelPickerPowerSliderImplValue172 = performance.now(),
    modelPickerPowerSliderImplValue173 = 0;
  modelPickerPowerSliderImplValue166.useProgram(
    modelPickerPowerSliderImplValue167,
  );
  modelPickerPowerSliderImplValue166.bindBuffer(
    modelPickerPowerSliderImplValue166.ARRAY_BUFFER,
    modelPickerPowerSliderImplValue168,
  );
  modelPickerPowerSliderImplValue166.bufferData(
    modelPickerPowerSliderImplValue166.ARRAY_BUFFER,
    modelPickerPowerSliderImplValue32,
    modelPickerPowerSliderImplValue166.STATIC_DRAW,
  );
  modelPickerPowerSliderImplValue166.enableVertexAttribArray(
    modelPickerPowerSliderImplValue169,
  );
  modelPickerPowerSliderImplValue166.vertexAttribPointer(
    modelPickerPowerSliderImplValue169,
    2,
    modelPickerPowerSliderImplValue166.FLOAT,
    false,
    0,
    0,
  );
  let modelPickerPowerSliderImplValue174 = (
      modelPickerPowerSliderImplParam32,
    ) => {
      modelPickerPowerSliderImplValue166.uniform1f(
        modelPickerPowerSliderImplValue171,
        modelPickerPowerSliderImplParam32,
      );
      modelPickerPowerSliderImplValue166.drawArrays(
        modelPickerPowerSliderImplValue166.TRIANGLES,
        0,
        6,
      );
    },
    modelPickerPowerSliderImplValue175 = () => {
      let modelPickerPowerSliderImplValue222 = Math.min(
          window.devicePixelRatio,
          2,
        ),
        { height, width } =
          modelPickerPowerSliderImplParam2.getBoundingClientRect(),
        modelPickerPowerSliderImplValue223 = Math.max(Math.round(width), 1),
        modelPickerPowerSliderImplValue224 = Math.max(Math.round(height), 1);
      modelPickerPowerSliderImplParam2.width = Math.round(
        modelPickerPowerSliderImplValue223 * modelPickerPowerSliderImplValue222,
      );
      modelPickerPowerSliderImplParam2.height = Math.round(
        modelPickerPowerSliderImplValue224 * modelPickerPowerSliderImplValue222,
      );
      modelPickerPowerSliderImplValue166.viewport(
        0,
        0,
        modelPickerPowerSliderImplParam2.width,
        modelPickerPowerSliderImplParam2.height,
      );
      modelPickerPowerSliderImplValue166.uniform2f(
        modelPickerPowerSliderImplValue170,
        modelPickerPowerSliderImplValue223,
        modelPickerPowerSliderImplValue224,
      );
      modelPickerPowerSliderImplValue174(
        modelPickerPowerSliderImplParam3
          ? 0
          : (performance.now() - modelPickerPowerSliderImplValue172) / 1e3,
      );
    },
    modelPickerPowerSliderImplValue176 = (
      modelPickerPowerSliderImplParam31,
    ) => {
      modelPickerPowerSliderImplValue173 = 0;
      modelPickerPowerSliderImplValue174(
        (modelPickerPowerSliderImplParam31 -
          modelPickerPowerSliderImplValue172) /
          1e3,
      );
      modelPickerPowerSliderImplValue173 = window.requestAnimationFrame(
        modelPickerPowerSliderImplValue176,
      );
    },
    modelPickerPowerSliderImplValue177 = new ResizeObserver(
      modelPickerPowerSliderImplValue175,
    );
  return (
    modelPickerPowerSliderImplValue175(),
    modelPickerPowerSliderImplValue177.observe(
      modelPickerPowerSliderImplParam2,
    ),
    modelPickerPowerSliderImplParam3 ||
      (modelPickerPowerSliderImplValue173 = window.requestAnimationFrame(
        modelPickerPowerSliderImplValue176,
      )),
    () => {
      modelPickerPowerSliderImplValue173 !== 0 &&
        window.cancelAnimationFrame(modelPickerPowerSliderImplValue173);
      modelPickerPowerSliderImplValue177.disconnect();
      modelPickerPowerSliderImplValue166.deleteBuffer(
        modelPickerPowerSliderImplValue168,
      );
      modelPickerPowerSliderImplValue166.deleteProgram(
        modelPickerPowerSliderImplValue167,
      );
    }
  );
}
function modelPickerPowerSliderImplHelper6(modelPickerPowerSliderImplParam11) {
  let modelPickerPowerSliderImplValue214 = be(
      modelPickerPowerSliderImplParam11,
      modelPickerPowerSliderImplParam11.VERTEX_SHADER,
      modelPickerPowerSliderImplValue30,
    ),
    modelPickerPowerSliderImplValue215 = be(
      modelPickerPowerSliderImplParam11,
      modelPickerPowerSliderImplParam11.FRAGMENT_SHADER,
      modelPickerPowerSliderImplValue31,
    );
  if (
    modelPickerPowerSliderImplValue214 == null ||
    modelPickerPowerSliderImplValue215 == null
  )
    return (
      modelPickerPowerSliderImplValue214 != null &&
        modelPickerPowerSliderImplParam11.deleteShader(
          modelPickerPowerSliderImplValue214,
        ),
      modelPickerPowerSliderImplValue215 != null &&
        modelPickerPowerSliderImplParam11.deleteShader(
          modelPickerPowerSliderImplValue215,
        ),
      null
    );
  let modelPickerPowerSliderImplValue216 =
    modelPickerPowerSliderImplParam11.createProgram();
  return modelPickerPowerSliderImplValue216 == null
    ? (modelPickerPowerSliderImplParam11.deleteShader(
        modelPickerPowerSliderImplValue214,
      ),
      modelPickerPowerSliderImplParam11.deleteShader(
        modelPickerPowerSliderImplValue215,
      ),
      null)
    : (modelPickerPowerSliderImplParam11.attachShader(
        modelPickerPowerSliderImplValue216,
        modelPickerPowerSliderImplValue214,
      ),
      modelPickerPowerSliderImplParam11.attachShader(
        modelPickerPowerSliderImplValue216,
        modelPickerPowerSliderImplValue215,
      ),
      modelPickerPowerSliderImplParam11.linkProgram(
        modelPickerPowerSliderImplValue216,
      ),
      modelPickerPowerSliderImplParam11.deleteShader(
        modelPickerPowerSliderImplValue214,
      ),
      modelPickerPowerSliderImplParam11.deleteShader(
        modelPickerPowerSliderImplValue215,
      ),
      modelPickerPowerSliderImplParam11.getProgramParameter(
        modelPickerPowerSliderImplValue216,
        modelPickerPowerSliderImplParam11.LINK_STATUS,
      )
        ? modelPickerPowerSliderImplValue216
        : (modelPickerPowerSliderImplParam11.deleteProgram(
            modelPickerPowerSliderImplValue216,
          ),
          null));
}
function be(
  modelPickerPowerSliderImplParam16,
  modelPickerPowerSliderImplParam17,
  modelPickerPowerSliderImplParam18,
) {
  let modelPickerPowerSliderImplValue234 =
    modelPickerPowerSliderImplParam16.createShader(
      modelPickerPowerSliderImplParam17,
    );
  return modelPickerPowerSliderImplValue234 == null
    ? null
    : (modelPickerPowerSliderImplParam16.shaderSource(
        modelPickerPowerSliderImplValue234,
        modelPickerPowerSliderImplParam18,
      ),
      modelPickerPowerSliderImplParam16.compileShader(
        modelPickerPowerSliderImplValue234,
      ),
      modelPickerPowerSliderImplParam16.getShaderParameter(
        modelPickerPowerSliderImplValue234,
        modelPickerPowerSliderImplParam16.COMPILE_STATUS,
      )
        ? modelPickerPowerSliderImplValue234
        : (modelPickerPowerSliderImplParam16.deleteShader(
            modelPickerPowerSliderImplValue234,
          ),
          null));
}
var modelPickerPowerSliderImplValue27,
  modelPickerPowerSliderImplValue28,
  modelPickerPowerSliderImplValue29,
  modelPickerPowerSliderImplValue30,
  modelPickerPowerSliderImplValue31,
  modelPickerPowerSliderImplValue32,
  modelPickerPowerSliderImplValue33 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue27 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
    modelPickerPowerSliderImplValue28 = rolldownRuntimeS(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn(),
      1,
    );
    modelPickerPowerSliderImplValue26();
    modelPickerPowerSliderImplValue29 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
    modelPickerPowerSliderImplValue30 =
      "\n  attribute vec2 aPosition;\n  varying vec2 vUv;\n\n  void main() {\n    vUv = aPosition * 0.5 + 0.5;\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n  }\n";
    modelPickerPowerSliderImplValue31 =
      "\n  precision highp float;\n\n  varying vec2 vUv;\n\n  uniform float uTime;\n  uniform vec2 uResolution;\n\n  const vec3 COLOR_1 = vec3(0.592, 0.388, 0.945);\n  const vec3 COLOR_2 = vec3(0.831, 0.710, 0.953);\n  const vec3 COLOR_3 = vec3(0.286, 0.000, 0.404);\n  const vec3 COLOR_4 = vec3(0.145, 0.055, 0.478);\n  const vec3 COLOR_5 = vec3(0.592, 0.000, 0.996);\n  const vec3 COLOR_6 = vec3(0.780, 0.459, 0.914);\n  const vec3 COLOR_7 = vec3(0.725, 0.576, 1.000);\n  const vec3 COLOR_8 = vec3(0.400, 0.212, 0.820);\n  const vec3 COLOR_9 = vec3(0.882, 0.690, 1.000);\n  const vec3 COLOR_10 = vec3(0.498, 0.345, 0.957);\n  const vec3 COLOR_11 = vec3(0.659, 0.275, 0.910);\n  const vec3 COLOR_12 = vec3(0.212, 0.063, 0.400);\n\n  float grain(vec2 uv) {\n    vec2 grainUv = uv * uResolution * 0.5;\n    return fract(sin(dot(grainUv + uTime, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;\n  }\n\n  float fieldWeight(vec2 point, vec2 center) {\n    return exp(-dot(point - center, point - center) * 12.0);\n  }\n\n  vec3 fieldColor(vec2 rawUv) {\n    const float speed = 1.25;\n    vec2 uv = vec2(rawUv.x, 0.40 + rawUv.y * 0.18);\n    vec2 spatialScale = vec2(1.55, 1.0);\n    vec2 point = uv * spatialScale;\n    vec2 center1 = vec2(0.18 + sin(uTime * speed * 0.42) * 0.18, 0.36 + cos(uTime * speed * 0.50) * 0.42) * spatialScale;\n    vec2 center2 = vec2(0.34 + cos(uTime * speed * 0.62) * 0.24, 0.62 + sin(uTime * speed * 0.47) * 0.38) * spatialScale;\n    vec2 center3 = vec2(0.52 + sin(uTime * speed * 0.38) * 0.28, 0.30 + cos(uTime * speed * 0.58) * 0.36) * spatialScale;\n    vec2 center4 = vec2(0.70 + cos(uTime * speed * 0.54) * 0.24, 0.68 + sin(uTime * speed * 0.41) * 0.36) * spatialScale;\n    vec2 center5 = vec2(0.88 + sin(uTime * speed * 0.74) * 0.16, 0.36 + cos(uTime * speed * 0.64) * 0.40) * spatialScale;\n    vec2 center6 = vec2(0.12 + cos(uTime * speed * 0.48) * 0.20, 0.72 + sin(uTime * speed * 0.70) * 0.30) * spatialScale;\n    vec2 center7 = vec2(0.30 + sin(uTime * speed * 0.58) * 0.22, 0.44 + cos(uTime * speed * 0.52) * 0.42) * spatialScale;\n    vec2 center8 = vec2(0.46 + cos(uTime * speed * 0.68) * 0.26, 0.72 + sin(uTime * speed * 0.56) * 0.32) * spatialScale;\n    vec2 center9 = vec2(0.60 + sin(uTime * speed * 0.44) * 0.28, 0.26 + cos(uTime * speed * 0.60) * 0.38) * spatialScale;\n    vec2 center10 = vec2(0.76 + cos(uTime * speed * 0.50) * 0.22, 0.54 + sin(uTime * speed * 0.66) * 0.40) * spatialScale;\n    vec2 center11 = vec2(0.92 + sin(uTime * speed * 0.70) * 0.15, 0.66 + cos(uTime * speed * 0.46) * 0.30) * spatialScale;\n    vec2 center12 = vec2(0.06 + cos(uTime * speed * 0.40) * 0.14, 0.32 + sin(uTime * speed * 0.60) * 0.40) * spatialScale;\n    float weight1 = fieldWeight(point, center1) * (0.7 + 0.3 * sin(uTime * 0.91));\n    float weight2 = fieldWeight(point, center2) * (0.7 + 0.3 * cos(uTime * 1.07));\n    float weight3 = fieldWeight(point, center3) * (0.7 + 0.3 * sin(uTime * 0.76));\n    float weight4 = fieldWeight(point, center4) * (0.7 + 0.3 * cos(uTime * 1.18));\n    float weight5 = fieldWeight(point, center5) * (0.7 + 0.3 * sin(uTime * 1.03));\n    float weight6 = fieldWeight(point, center6) * (0.7 + 0.3 * cos(uTime * 0.83));\n    float weight7 = fieldWeight(point, center7) * (0.7 + 0.3 * sin(uTime * 1.24));\n    float weight8 = fieldWeight(point, center8) * (0.7 + 0.3 * cos(uTime * 0.96));\n    float weight9 = fieldWeight(point, center9) * (0.7 + 0.3 * sin(uTime * 1.11));\n    float weight10 = fieldWeight(point, center10) * (0.7 + 0.3 * cos(uTime * 0.72));\n    float weight11 = fieldWeight(point, center11) * (0.7 + 0.3 * sin(uTime * 1.29));\n    float weight12 = fieldWeight(point, center12) * (0.7 + 0.3 * cos(uTime * 0.88));\n    float totalWeight = max(\n      weight1 + weight2 + weight3 + weight4 + weight5 + weight6 +\n        weight7 + weight8 + weight9 + weight10 + weight11 + weight12,\n      0.0001\n    );\n    vec3 color = (\n      COLOR_1 * weight1 + COLOR_2 * weight2 + COLOR_3 * weight3 +\n      COLOR_4 * weight4 + COLOR_5 * weight5 + COLOR_6 * weight6 +\n      COLOR_7 * weight7 + COLOR_8 * weight8 + COLOR_9 * weight9 +\n      COLOR_10 * weight10 + COLOR_11 * weight11 + COLOR_12 * weight12\n    ) / totalWeight;\n    color = mix(COLOR_4, color, 0.96);\n\n    return pow(clamp(color, vec3(0.0), vec3(1.0)), vec3(0.9));\n  }\n\n  void main() {\n    vec3 color = fieldColor(vUv);\n    color += grain(vUv) * 0.012;\n    color.r += sin(uTime * 0.5) * 0.02;\n    color.g += cos(uTime * 0.7) * 0.02;\n    color.b += sin(uTime * 0.6) * 0.02;\n    color = pow(color, vec3(0.92));\n\n    gl_FragColor = vec4(color, 1.0);\n  }\n";
    modelPickerPowerSliderImplValue32 = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);
  });
function modelPickerPowerSliderImplHelper7(modelPickerPowerSliderImplParam4) {
  let { animationActive, index } = modelPickerPowerSliderImplParam4,
    modelPickerPowerSliderImplValue179 = () =>
      modelPickerPowerSliderImplHelper8(index);
  let [modelPickerPowerSliderImplValue180, modelPickerPowerSliderImplValue181] =
      modelPickerPowerSliderImplValue35.useState(
        modelPickerPowerSliderImplValue179,
      ),
    modelPickerPowerSliderImplValue182 = Math.round(
      4 + modelPickerPowerSliderImplHelper1(index, 14) * 92,
    );
  let modelPickerPowerSliderImplValue183 = modelPickerPowerSliderImplValue182,
    modelPickerPowerSliderImplValue184 =
      modelPickerPowerSliderImplValue37 *
      modelPickerPowerSliderImplValue180.durationScale,
    modelPickerPowerSliderImplValue185 =
      0.4 + modelPickerPowerSliderImplHelper1(index, 11) * 0.6,
    modelPickerPowerSliderImplValue186 =
      0.5 + modelPickerPowerSliderImplHelper1(index, 12) * 0.45,
    modelPickerPowerSliderImplValue187,
    modelPickerPowerSliderImplValue188;
  modelPickerPowerSliderImplValue187 = () => {
    if (!animationActive) return;
    let modelPickerPowerSliderImplValue225 = 0,
      modelPickerPowerSliderImplValue226 = () => {
        let modelPickerPowerSliderImplValue242 =
          modelPickerPowerSliderImplHelper9();
        modelPickerPowerSliderImplValue181(modelPickerPowerSliderImplValue242);
        modelPickerPowerSliderImplValue225 = window.setTimeout(
          modelPickerPowerSliderImplValue226,
          modelPickerPowerSliderImplValue37 *
            modelPickerPowerSliderImplValue242.durationScale *
            1e3,
        );
      },
      modelPickerPowerSliderImplValue227 = window.requestAnimationFrame(
        modelPickerPowerSliderImplValue226,
      );
    return () => {
      window.cancelAnimationFrame(modelPickerPowerSliderImplValue227);
      window.clearTimeout(modelPickerPowerSliderImplValue225);
    };
  };
  modelPickerPowerSliderImplValue188 = [animationActive];
  modelPickerPowerSliderImplValue35.useEffect(
    modelPickerPowerSliderImplValue187,
    modelPickerPowerSliderImplValue188,
  );
  let modelPickerPowerSliderImplValue189 = `calc(${modelPickerPowerSliderImplValue183}% + ${modelPickerPowerSliderImplValue180.horizontalOffset}px)`,
    modelPickerPowerSliderImplValue190 = `translate(-50%, -50%) scale(${modelPickerPowerSliderImplValue186})`,
    modelPickerPowerSliderImplValue191 = `${modelPickerPowerSliderImplValue184}s`;
  return (
    <span
      className={modelPickerPowerSliderImplValue9.TrackParticle}
      style={{
        left: modelPickerPowerSliderImplValue189,
        opacity: modelPickerPowerSliderImplValue185,
        top: modelPickerPowerSliderImplValue180.y,
        transform: modelPickerPowerSliderImplValue190,
        transitionDuration: modelPickerPowerSliderImplValue191,
      }}
    />
  );
}
function modelPickerPowerSliderImplHelper8(modelPickerPowerSliderImplParam28) {
  let modelPickerPowerSliderImplValue245 = 1;
  return modelPickerPowerSliderImplHelper10(() => {
    let modelPickerPowerSliderImplValue249 = modelPickerPowerSliderImplHelper1(
      modelPickerPowerSliderImplParam28,
      modelPickerPowerSliderImplValue245,
    );
    return (
      (modelPickerPowerSliderImplValue245 += 1),
      modelPickerPowerSliderImplValue249
    );
  });
}
function modelPickerPowerSliderImplHelper9() {
  return modelPickerPowerSliderImplHelper10(Math.random);
}
function modelPickerPowerSliderImplHelper10(modelPickerPowerSliderImplParam19) {
  let modelPickerPowerSliderImplValue235 = modelPickerPowerSliderImplParam19(),
    modelPickerPowerSliderImplValue236 = modelPickerPowerSliderImplParam19();
  return {
    durationScale: 0.8 + modelPickerPowerSliderImplParam19() * 1.2,
    horizontalOffset: Math.round(
      (modelPickerPowerSliderImplValue235 - 0.5) * 8,
    ),
    y: Math.round(12 + (modelPickerPowerSliderImplValue236 - 0.5) * 14),
  };
}
var modelPickerPowerSliderImplValue34,
  modelPickerPowerSliderImplValue35,
  modelPickerPowerSliderImplValue36,
  modelPickerPowerSliderImplValue37,
  modelPickerPowerSliderImplValue38 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue34 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
    modelPickerPowerSliderImplValue35 = rolldownRuntimeS(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn(),
      1,
    );
    modelPickerPowerSliderImplValue1();
    modelPickerPowerSliderImplValue10();
    modelPickerPowerSliderImplValue36 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
    modelPickerPowerSliderImplValue37 = 1.6;
  });
function modelPickerPowerSliderImplHelper11(modelPickerPowerSliderImplParam13) {
  let { animationActive } = modelPickerPowerSliderImplParam13;
  return (
    <span
      aria-hidden={true}
      className={modelPickerPowerSliderImplValue9.TrackParticles}
    >
      {Array.from(
        {
          length: 14,
        },
        (
          modelPickerPowerSliderImplParam34,
          modelPickerPowerSliderImplParam35,
        ) =>
          modelPickerPowerSliderImplValue40.jsx(
            modelPickerPowerSliderImplHelper7,
            {
              animationActive,
              index: modelPickerPowerSliderImplParam35,
            },
            modelPickerPowerSliderImplParam35,
          ),
      )}
    </span>
  );
}
var modelPickerPowerSliderImplValue39,
  modelPickerPowerSliderImplValue40,
  modelPickerPowerSliderImplValue41 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue39 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
    modelPickerPowerSliderImplValue38();
    modelPickerPowerSliderImplValue1();
    modelPickerPowerSliderImplValue10();
    modelPickerPowerSliderImplValue40 =
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
  }),
  modelPickerPowerSliderImplValue42,
  modelPickerPowerSliderImplValue43,
  modelPickerPowerSliderImplValue44,
  modelPickerPowerSliderImplValue45,
  modelPickerPowerSliderImplValue46,
  modelPickerPowerSliderImplValue47,
  modelPickerPowerSliderImplValue48,
  modelPickerPowerSliderImplValue49,
  modelPickerPowerSliderImplValue50,
  modelPickerPowerSliderImplValue51,
  modelPickerPowerSliderImplValue52,
  modelPickerPowerSliderImplValue53,
  modelPickerPowerSliderImplValue54,
  modelPickerPowerSliderImplValue55,
  modelPickerPowerSliderImplValue56,
  modelPickerPowerSliderImplValue57,
  modelPickerPowerSliderImplValue58,
  modelPickerPowerSliderImplValue59,
  modelPickerPowerSliderImplValue60,
  modelPickerPowerSliderImplValue61,
  modelPickerPowerSliderImplValue62,
  modelPickerPowerSliderImplValue63,
  modelPickerPowerSliderImplValue64,
  modelPickerPowerSliderImplValue65 = rolldownRuntimeN(() => {
    modelPickerPowerSliderImplValue42 = "_Container_3jngk_1";
    modelPickerPowerSliderImplValue43 = "_Thumb_3jngk_12";
    modelPickerPowerSliderImplValue44 = "_Root_3jngk_19";
    modelPickerPowerSliderImplValue45 =
      "_EnableModelPickerPowerSliderThumbInputMotion_3jngk_1";
    modelPickerPowerSliderImplValue46 = "_FastModeTickScale_3jngk_1";
    modelPickerPowerSliderImplValue47 = "_FastModeTickTranslate_3jngk_1";
    modelPickerPowerSliderImplValue48 = "_FastModeTickFade_3jngk_1";
    modelPickerPowerSliderImplValue49 = "_FastModeTickReturnScale_3jngk_1";
    modelPickerPowerSliderImplValue50 = "_FastModeTickReturnTranslate_3jngk_1";
    modelPickerPowerSliderImplValue51 = "_FastModeTickReturnFade_3jngk_1";
    modelPickerPowerSliderImplValue52 = "_Tick_3jngk_40";
    modelPickerPowerSliderImplValue53 = "_ThumbInput_3jngk_116";
    modelPickerPowerSliderImplValue54 = "_Track_3jngk_212";
    modelPickerPowerSliderImplValue55 = "_Range_3jngk_226";
    modelPickerPowerSliderImplValue56 = "_MaxEffects_3jngk_236";
    modelPickerPowerSliderImplValue57 = "_FastParticleClip_3jngk_242";
    modelPickerPowerSliderImplValue58 = "_ParticleTransition_3jngk_251";
    modelPickerPowerSliderImplValue59 = "_TickRail_3jngk_259";
    modelPickerPowerSliderImplValue60 = "_VisualThumbRail_3jngk_302";
    modelPickerPowerSliderImplValue61 = "_ThumbScale_3jngk_343";
    modelPickerPowerSliderImplValue62 = "_MaxBurst_3jngk_352";
    modelPickerPowerSliderImplValue63 = "_ThumbSpring_3jngk_358";
    modelPickerPowerSliderImplValue64 = {
      Container: modelPickerPowerSliderImplValue42,
      Thumb: modelPickerPowerSliderImplValue43,
      Root: modelPickerPowerSliderImplValue44,
      EnableModelPickerPowerSliderThumbInputMotion:
        modelPickerPowerSliderImplValue45,
      FastModeTickScale: modelPickerPowerSliderImplValue46,
      FastModeTickTranslate: modelPickerPowerSliderImplValue47,
      FastModeTickFade: modelPickerPowerSliderImplValue48,
      FastModeTickReturnScale: modelPickerPowerSliderImplValue49,
      FastModeTickReturnTranslate: modelPickerPowerSliderImplValue50,
      FastModeTickReturnFade: modelPickerPowerSliderImplValue51,
      Tick: modelPickerPowerSliderImplValue52,
      ThumbInput: modelPickerPowerSliderImplValue53,
      Track: modelPickerPowerSliderImplValue54,
      Range: modelPickerPowerSliderImplValue55,
      MaxEffects: modelPickerPowerSliderImplValue56,
      FastParticleClip: modelPickerPowerSliderImplValue57,
      ParticleTransition: modelPickerPowerSliderImplValue58,
      TickRail: modelPickerPowerSliderImplValue59,
      VisualThumbRail: modelPickerPowerSliderImplValue60,
      ThumbScale: modelPickerPowerSliderImplValue61,
      MaxBurst: modelPickerPowerSliderImplValue62,
      ThumbSpring: modelPickerPowerSliderImplValue63,
    };
  });
export function ModelPickerPowerSliderImpl(modelPickerPowerSliderImplParam1) {
  let {
      active,
      disabled = false,
      fastModeEnabled,
      keyboardControlFocused,
      onDragToMax,
      onSelectOption,
      options,
      selectedOptionId,
      shouldReduceMotion,
      transitionsReady = true,
    } = modelPickerPowerSliderImplParam1,
    modelPickerPowerSliderImplValue90 =
      _appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0S(),
    modelPickerPowerSliderImplValue91 =
      shouldReduceMotion ?? modelPickerPowerSliderImplValue90 ?? false,
    modelPickerPowerSliderImplValue92 = fastModeEnabled ? "active" : "inactive",
    modelPickerPowerSliderImplValue93 = {
      enabled: fastModeEnabled,
      phase: modelPickerPowerSliderImplValue92,
      sequence: 0,
    };
  let [modelPickerPowerSliderImplValue94, modelPickerPowerSliderImplValue95] =
      modelPickerPowerSliderImplValue66.useState(
        modelPickerPowerSliderImplValue93,
      ),
    [modelPickerPowerSliderImplValue96, modelPickerPowerSliderImplValue97] =
      modelPickerPowerSliderImplValue66.useReducer(
        modelPickerPowerSliderImplHelper13,
        modelPickerPowerSliderImplValue86,
      ),
    modelPickerPowerSliderImplValue98 =
      modelPickerPowerSliderImplValue66.useRef(null),
    modelPickerPowerSliderImplValue99 =
      modelPickerPowerSliderImplValue66.useRef(false),
    modelPickerPowerSliderImplValue100 =
      modelPickerPowerSliderImplValue66.useRef(false),
    modelPickerPowerSliderImplValue101 = {
      accumulatedDelta: 0,
      lastEventTime: 0,
    };
  let modelPickerPowerSliderImplValue102 =
      modelPickerPowerSliderImplValue66.useRef(
        modelPickerPowerSliderImplValue101,
      ),
    {
      isDragging,
      isPointerDown,
      isThumbHovered,
      maxBurstKey,
      previewBaseOptionId,
      previewIndex,
      previewOptionIds,
    } = modelPickerPowerSliderImplValue96,
    modelPickerPowerSliderImplValue103 = disabled || options.length <= 1,
    modelPickerPowerSliderImplValue104;
  {
    let modelPickerPowerSliderImplValue231;
    modelPickerPowerSliderImplValue231 = (
      modelPickerPowerSliderImplParam33,
    ) => {
      let { id } = modelPickerPowerSliderImplParam33;
      return id === selectedOptionId;
    };
    modelPickerPowerSliderImplValue104 = options.findIndex(
      modelPickerPowerSliderImplValue231,
    );
  }
  let modelPickerPowerSliderImplValue105 = Math.max(
      modelPickerPowerSliderImplValue104,
      0,
    ),
    be = previewIndex == null ? undefined : options[previewIndex],
    modelPickerPowerSliderImplValue106 =
      be != null &&
      be.id !== selectedOptionId &&
      (selectedOptionId === previewBaseOptionId ||
        previewOptionIds
          .slice(0, -1)
          .some((item) => item === selectedOptionId));
  let modelPickerPowerSliderImplValue107 = modelPickerPowerSliderImplValue106;
  previewIndex != null &&
    !modelPickerPowerSliderImplValue107 &&
    modelPickerPowerSliderImplValue97({
      type: "preview_acknowledged",
    });
  let modelPickerPowerSliderImplValue108 = options.length - 1,
    modelPickerPowerSliderImplValue109 = Math.min(
      modelPickerPowerSliderImplValue107 && previewIndex != null
        ? previewIndex
        : modelPickerPowerSliderImplValue105,
      modelPickerPowerSliderImplValue108,
    ),
    modelPickerPowerSliderImplValue110 =
      options[modelPickerPowerSliderImplValue109],
    modelPickerPowerSliderImplValue111 =
      modelPickerPowerSliderImplValue108 <= 0
        ? 0
        : (Math.max(modelPickerPowerSliderImplValue109, 0) /
            modelPickerPowerSliderImplValue108) *
          100,
    modelPickerPowerSliderImplValue112 =
      modelPickerPowerSliderImplValue108 > 0 &&
      modelPickerPowerSliderImplValue110?.isMax === true,
    modelPickerPowerSliderImplValue113 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0H(
        modelPickerPowerSliderImplValue111,
      ),
    modelPickerPowerSliderImplValue114 = (modelPickerPowerSliderImplParam42) =>
      modelPickerPowerSliderImplHelper15(
        modelPickerPowerSliderImplParam42,
        modelPickerPowerSliderImplValue108,
      );
  let modelPickerPowerSliderImplValue115 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0D(
        modelPickerPowerSliderImplValue113,
        modelPickerPowerSliderImplValue114,
      ),
    modelPickerPowerSliderImplValue116 = (modelPickerPowerSliderImplParam43) =>
      modelPickerPowerSliderImplHelper16(
        modelPickerPowerSliderImplParam43,
        modelPickerPowerSliderImplValue108,
      );
  let modelPickerPowerSliderImplValue117 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0D(
        modelPickerPowerSliderImplValue113,
        modelPickerPowerSliderImplValue116,
      ),
    modelPickerPowerSliderImplValue118 = (modelPickerPowerSliderImplParam41) =>
      modelPickerPowerSliderImplHelper15(
        modelPickerPowerSliderImplParam41,
        modelPickerPowerSliderImplValue108,
        -(1 - (fastModeEnabled ? 0 : modelPickerPowerSliderImplValue69)),
      );
  let modelPickerPowerSliderImplValue119 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0D(
        modelPickerPowerSliderImplValue113,
        modelPickerPowerSliderImplValue118,
      ),
    modelPickerPowerSliderImplValue120 =
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0D(
        modelPickerPowerSliderImplValue113,
        modelPickerPowerSliderImplHelper14,
      );
  modelPickerPowerSliderImplValue94.enabled !== fastModeEnabled &&
    modelPickerPowerSliderImplValue95({
      enabled: fastModeEnabled,
      phase: fastModeEnabled ? "entering" : "exiting",
      sequence: modelPickerPowerSliderImplValue94.sequence + 1,
    });
  let modelPickerPowerSliderImplValue121, modelPickerPowerSliderImplValue122;
  modelPickerPowerSliderImplValue121 = () => {
    let modelPickerPowerSliderImplValue228 = window.setTimeout(
      () => {
        modelPickerPowerSliderImplValue95(
          (modelPickerPowerSliderImplParam23) => {
            let modelPickerPowerSliderImplValue239 = fastModeEnabled
              ? "active"
              : "inactive";
            return modelPickerPowerSliderImplParam23.enabled ===
              fastModeEnabled &&
              modelPickerPowerSliderImplParam23.phase !==
                modelPickerPowerSliderImplValue239
              ? {
                  ...modelPickerPowerSliderImplParam23,
                  phase: modelPickerPowerSliderImplValue239,
                }
              : modelPickerPowerSliderImplParam23;
          },
        );
      },
      fastModeEnabled
        ? modelPickerPowerSliderImplValue72
        : modelPickerPowerSliderImplValue73,
    );
    return () => window.clearTimeout(modelPickerPowerSliderImplValue228);
  };
  modelPickerPowerSliderImplValue122 = [fastModeEnabled];
  modelPickerPowerSliderImplValue66.useEffect(
    modelPickerPowerSliderImplValue121,
    modelPickerPowerSliderImplValue122,
  );
  let modelPickerPowerSliderImplValue123 = (
    modelPickerPowerSliderImplParam12,
  ) => {
    let modelPickerPowerSliderImplValue218 =
      options[modelPickerPowerSliderImplParam12];
    if (
      modelPickerPowerSliderImplValue103 ||
      modelPickerPowerSliderImplValue218 == null ||
      modelPickerPowerSliderImplParam12 === modelPickerPowerSliderImplValue109
    )
      return;
    let modelPickerPowerSliderImplValue219 =
      modelPickerPowerSliderImplValue108 > 0 &&
      modelPickerPowerSliderImplValue218.isMax;
    modelPickerPowerSliderImplValue219
      ? modelPickerPowerSliderImplValue100.current ||
        ((modelPickerPowerSliderImplValue100.current = true),
        modelPickerPowerSliderImplValue99.current && onDragToMax())
      : (modelPickerPowerSliderImplValue100.current = false);
    onSelectOption(modelPickerPowerSliderImplValue218);
    modelPickerPowerSliderImplValue97({
      type: "value_preview",
      atMax: modelPickerPowerSliderImplValue219,
      baseOptionId:
        modelPickerPowerSliderImplValue107 && previewBaseOptionId != null
          ? previewBaseOptionId
          : selectedOptionId,
      enteredMax:
        modelPickerPowerSliderImplValue219 &&
        !modelPickerPowerSliderImplValue112,
      index: modelPickerPowerSliderImplParam12,
      optionId: modelPickerPowerSliderImplValue218.id,
    });
  };
  let modelPickerPowerSliderImplValue124 = modelPickerPowerSliderImplValue123,
    modelPickerPowerSliderImplValue125 = () => {
      modelPickerPowerSliderImplValue99.current = false;
      modelPickerPowerSliderImplValue100.current = false;
      modelPickerPowerSliderImplValue97({
        type: "pointer_up",
      });
    };
  let modelPickerPowerSliderImplValue126 = modelPickerPowerSliderImplValue125,
    modelPickerPowerSliderImplValue127 = (event) => {
      if (
        event.ctrlKey ||
        modelPickerPowerSliderImplValue103 ||
        modelPickerPowerSliderImplValue108 <= 0
      )
        return;
      event.preventDefault();
      event.stopPropagation();
      let modelPickerPowerSliderImplValue198 =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : -event.deltaY;
      "webkitDirectionInvertedFromDevice" in event &&
        event.webkitDirectionInvertedFromDevice === true &&
        (modelPickerPowerSliderImplValue198 *= -1);
      let modelPickerPowerSliderImplValue199 =
        event.deltaMode === WheelEvent.DOM_DELTA_PIXEL
          ? modelPickerPowerSliderImplValue198
          : Math.sign(modelPickerPowerSliderImplValue198) * _t;
      if (modelPickerPowerSliderImplValue199 === 0) return;
      let modelPickerPowerSliderImplValue200 =
        modelPickerPowerSliderImplValue102.current;
      if (
        ((event.timeStamp - modelPickerPowerSliderImplValue200.lastEventTime >
          modelPickerPowerSliderImplValue85 ||
          Math.sign(modelPickerPowerSliderImplValue199) !==
            Math.sign(modelPickerPowerSliderImplValue200.accumulatedDelta)) &&
          (modelPickerPowerSliderImplValue200.accumulatedDelta = 0),
        (modelPickerPowerSliderImplValue200.lastEventTime = event.timeStamp),
        (modelPickerPowerSliderImplValue200.accumulatedDelta +=
          modelPickerPowerSliderImplValue199),
        Math.abs(modelPickerPowerSliderImplValue200.accumulatedDelta) < _t)
      )
        return;
      let modelPickerPowerSliderImplValue201 = Math.sign(
        modelPickerPowerSliderImplValue200.accumulatedDelta,
      );
      modelPickerPowerSliderImplValue200.accumulatedDelta -=
        modelPickerPowerSliderImplValue201 * _t;
      let modelPickerPowerSliderImplValue202 = Math.max(
        0,
        Math.min(
          modelPickerPowerSliderImplValue109 +
            modelPickerPowerSliderImplValue201,
          modelPickerPowerSliderImplValue108,
        ),
      );
      if (
        modelPickerPowerSliderImplValue202 ===
        modelPickerPowerSliderImplValue109
      ) {
        modelPickerPowerSliderImplValue200.accumulatedDelta = 0;
        return;
      }
      modelPickerPowerSliderImplValue124(modelPickerPowerSliderImplValue202);
      modelPickerPowerSliderImplValue97({
        type: "pointer_up",
      });
    };
  let modelPickerPowerSliderImplValue128 =
      modelPickerPowerSliderImplValue66.useEffectEvent(
        modelPickerPowerSliderImplValue127,
      ),
    modelPickerPowerSliderImplValue129 = () => {
      let modelPickerPowerSliderImplValue232 =
        modelPickerPowerSliderImplValue98.current;
      if (modelPickerPowerSliderImplValue232 == null) return;
      let modelPickerPowerSliderImplValue233 = (
        modelPickerPowerSliderImplParam44,
      ) =>
        modelPickerPowerSliderImplValue128(modelPickerPowerSliderImplParam44);
      return (
        modelPickerPowerSliderImplValue232.addEventListener(
          "wheel",
          modelPickerPowerSliderImplValue233,
          {
            passive: false,
          },
        ),
        () =>
          modelPickerPowerSliderImplValue232.removeEventListener(
            "wheel",
            modelPickerPowerSliderImplValue233,
          )
      );
    };
  let modelPickerPowerSliderImplValue130;
  modelPickerPowerSliderImplValue130 = [];
  modelPickerPowerSliderImplValue66.useEffect(
    modelPickerPowerSliderImplValue129,
    modelPickerPowerSliderImplValue130,
  );
  let modelPickerPowerSliderImplValue131, modelPickerPowerSliderImplValue132;
  if (
    ((modelPickerPowerSliderImplValue131 = () => {
      if (!active || modelPickerPowerSliderImplValue91) {
        modelPickerPowerSliderImplValue113.jump(
          modelPickerPowerSliderImplValue111,
        );
        return;
      }
      let modelPickerPowerSliderImplValue237 =
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0I(
          modelPickerPowerSliderImplValue113,
          modelPickerPowerSliderImplValue111,
          isDragging ? at : modelPickerPowerSliderImplValue74,
        );
      return () => modelPickerPowerSliderImplValue237.stop();
    }),
    (modelPickerPowerSliderImplValue132 = [
      active,
      modelPickerPowerSliderImplValue113,
      modelPickerPowerSliderImplValue111,
      isDragging,
      modelPickerPowerSliderImplValue91,
    ]),
    modelPickerPowerSliderImplValue66.useEffect(
      modelPickerPowerSliderImplValue131,
      modelPickerPowerSliderImplValue132,
    ),
    modelPickerPowerSliderImplValue110 == null)
  )
    return null;
  let modelPickerPowerSliderImplValue133 =
      !modelPickerPowerSliderImplValue103 && (isThumbHovered || isPointerDown),
    modelPickerPowerSliderImplValue134 =
      !modelPickerPowerSliderImplValue103 && isDragging,
    modelPickerPowerSliderImplValue135 =
      modelPickerPowerSliderImplValue94.phase,
    modelPickerPowerSliderImplValue136 =
      !modelPickerPowerSliderImplValue103 && isPointerDown,
    modelPickerPowerSliderImplValue137 = Math.max(
      modelPickerPowerSliderImplValue108,
      1,
    ),
    modelPickerPowerSliderImplValue138 = (event) => {
      event.stopPropagation();
      modelPickerPowerSliderImplValue126();
    };
  let modelPickerPowerSliderImplValue139 = (event) => {
    event.stopPropagation();
    modelPickerPowerSliderImplValue99.current = false;
    modelPickerPowerSliderImplValue100.current = false;
    modelPickerPowerSliderImplValue103 ||
      modelPickerPowerSliderImplValue97({
        type: "pointer_down",
      });
  };
  let modelPickerPowerSliderImplValue140 = (event) => {
    event.buttons !== 0 && (modelPickerPowerSliderImplValue99.current = true);
  };
  let modelPickerPowerSliderImplValue141 = (event) => {
    event.stopPropagation();
    !modelPickerPowerSliderImplValue103 &&
      event.buttons !== 0 &&
      modelPickerPowerSliderImplValue97({
        type: "pointer_move",
      });
  };
  let modelPickerPowerSliderImplValue142 = (event) => {
    event.stopPropagation();
    modelPickerPowerSliderImplValue126();
  };
  let modelPickerPowerSliderImplValue143 = (
    modelPickerPowerSliderImplParam36,
  ) => {
    let modelPickerPowerSliderImplValue247 =
      modelPickerPowerSliderImplParam36[0];
    modelPickerPowerSliderImplValue247 != null &&
      modelPickerPowerSliderImplValue124(modelPickerPowerSliderImplValue247);
  };
  let modelPickerPowerSliderImplValue144 = [modelPickerPowerSliderImplValue109];
  let modelPickerPowerSliderImplValue145 = {
    transform: modelPickerPowerSliderImplValue115,
  };
  let modelPickerPowerSliderImplValue146 = modelPickerPowerSliderImplValue112
    ? modelPickerPowerSliderImplValue67.jsxs(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0Y.span,
        {
          animate: {
            opacity: 1,
          },
          className: modelPickerPowerSliderImplValue64.MaxEffects,
          exit: {
            opacity: 0,
          },
          initial: {
            opacity: 0,
          },
          style: {
            transform: modelPickerPowerSliderImplValue119,
          },
          transition: modelPickerPowerSliderImplValue91
            ? modelPickerPowerSliderImplValue84
            : modelPickerPowerSliderImplValue74,
          children: [
            modelPickerPowerSliderImplValue67.jsx(_e, {
              active,
              reveal: !modelPickerPowerSliderImplValue91 && maxBurstKey > 0,
              shouldReduceMotion: modelPickerPowerSliderImplValue91,
            }),
            modelPickerPowerSliderImplValue67.jsx(
              appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0S,
              {
                children:
                  !modelPickerPowerSliderImplValue94.enabled &&
                  !modelPickerPowerSliderImplValue91
                    ? modelPickerPowerSliderImplValue67.jsx(
                        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0Y.span,
                        {
                          animate: {
                            opacity: 1,
                            transition:
                              modelPickerPowerSliderImplValue94.phase ===
                              "exiting"
                                ? modelPickerPowerSliderImplValue78
                                : modelPickerPowerSliderImplValue75,
                            x: 0,
                          },
                          className:
                            modelPickerPowerSliderImplValue64.ParticleTransition,
                          exit: {
                            opacity: 0,
                            transition: modelPickerPowerSliderImplValue79,
                            x: -110,
                          },
                          initial: transitionsReady
                            ? {
                                opacity: 0,
                                x:
                                  modelPickerPowerSliderImplValue94.phase ===
                                  "exiting"
                                    ? 28
                                    : 0,
                              }
                            : false,
                          children: modelPickerPowerSliderImplValue67.jsx(
                            modelPickerPowerSliderImplHelper11,
                            {
                              animationActive: active,
                            },
                          ),
                        },
                        `max-particles-${modelPickerPowerSliderImplValue94.sequence}`,
                      )
                    : null,
              },
            ),
          ],
        },
        "max-effects",
      )
    : null;
  let modelPickerPowerSliderImplValue147 =
    modelPickerPowerSliderImplValue67.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0S,
      {
        initial: false,
        children: modelPickerPowerSliderImplValue146,
      },
    );
  let _ModelPickerPowerSliderImpl = modelPickerPowerSliderImplValue67.jsx(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0Y.span,
    {
      "aria-hidden": true,
      className: modelPickerPowerSliderImplValue64.Range,
      style: modelPickerPowerSliderImplValue145,
      children: modelPickerPowerSliderImplValue147,
    },
  );
  let modelPickerPowerSliderImplValue148 =
    modelPickerPowerSliderImplValue94.enabled &&
    !modelPickerPowerSliderImplValue91
      ? modelPickerPowerSliderImplValue67.jsx(
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0Y.span,
          {
            animate: {
              opacity: 1,
            },
            className: modelPickerPowerSliderImplValue64.FastParticleClip,
            exit: {
              opacity: 0,
              transition: modelPickerPowerSliderImplValue112
                ? modelPickerPowerSliderImplValue77
                : modelPickerPowerSliderImplValue81,
            },
            initial: {
              opacity: 0,
            },
            style: {
              clipPath: modelPickerPowerSliderImplValue117,
            },
            transition: modelPickerPowerSliderImplValue112
              ? modelPickerPowerSliderImplValue76
              : modelPickerPowerSliderImplValue80,
            children: modelPickerPowerSliderImplValue67.jsx(
              modelPickerPowerSliderImplHelper2,
              {
                animationActive: active,
                initialStartPercent: transitionsReady
                  ? modelPickerPowerSliderImplValue111
                  : 0,
              },
            ),
          },
          `fast-particles-${modelPickerPowerSliderImplValue94.sequence}`,
        )
      : null;
  let modelPickerPowerSliderImplValue149 =
    modelPickerPowerSliderImplValue67.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0S,
      {
        initial: false,
        children: modelPickerPowerSliderImplValue148,
      },
    );
  let modelPickerPowerSliderImplValue150;
  {
    let modelPickerPowerSliderImplValue217;
    modelPickerPowerSliderImplValue217 = (
      modelPickerPowerSliderImplParam14,
      modelPickerPowerSliderImplParam15,
    ) => (
      <span
        key={modelPickerPowerSliderImplParam14.id}
        className={modelPickerPowerSliderImplValue64.Tick}
        data-selected={
          modelPickerPowerSliderImplParam15 <=
          modelPickerPowerSliderImplValue109
        }
        style={{
          left: modelPickerPowerSliderImplHelper14(
            modelPickerPowerSliderImplValue108 === 0
              ? 0
              : (modelPickerPowerSliderImplParam15 /
                  modelPickerPowerSliderImplValue108) *
                  100,
          ),
        }}
      />
    );
    modelPickerPowerSliderImplValue150 = options.map(
      modelPickerPowerSliderImplValue217,
    );
  }
  let modelPickerPowerSliderImplValue151 = (
    <div className={modelPickerPowerSliderImplValue64.TickRail}>
      {modelPickerPowerSliderImplValue150}
    </div>
  );
  let modelPickerPowerSliderImplValue152 =
    modelPickerPowerSliderImplValue67.jsxs(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1R,
      {
        className: modelPickerPowerSliderImplValue64.Track,
        children: [
          _ModelPickerPowerSliderImpl,
          modelPickerPowerSliderImplValue149,
          modelPickerPowerSliderImplValue151,
        ],
      },
    );
  let $ = {
    left: modelPickerPowerSliderImplValue120,
  };
  let modelPickerPowerSliderImplValue153 =
    modelPickerPowerSliderImplValue112 &&
    maxBurstKey > 0 &&
    !modelPickerPowerSliderImplValue91 ? (
      <span
        className={modelPickerPowerSliderImplValue64.MaxBurst}
        data-model-picker-power-slider-max-burst={true}
      >
        {modelPickerPowerSliderImplValue67.jsx(
          modelPickerPowerSliderImplHelper3,
          {},
          maxBurstKey,
        )}
      </span>
    ) : null;
  let modelPickerPowerSliderImplValue154 =
      !modelPickerPowerSliderImplValue91 && modelPickerPowerSliderImplValue133
        ? modelPickerPowerSliderImplValue68
        : 1,
    modelPickerPowerSliderImplValue155 = {
      scale: modelPickerPowerSliderImplValue154,
    };
  let modelPickerPowerSliderImplValue156 = modelPickerPowerSliderImplValue91
      ? modelPickerPowerSliderImplValue84
      : modelPickerPowerSliderImplValue133
        ? modelPickerPowerSliderImplValue82
        : modelPickerPowerSliderImplValue83,
    modelPickerPowerSliderImplValue157 = (
      <span className={modelPickerPowerSliderImplValue64.Thumb} />
    );
  let modelPickerPowerSliderImplValue158 =
    modelPickerPowerSliderImplValue67.jsx(
      appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0Y.span,
      {
        animate: modelPickerPowerSliderImplValue155,
        className: modelPickerPowerSliderImplValue64.ThumbSpring,
        initial: false,
        transition: modelPickerPowerSliderImplValue156,
        children: modelPickerPowerSliderImplValue157,
      },
    );
  let modelPickerPowerSliderImplValue159 = (
    <div
      aria-hidden={true}
      className={modelPickerPowerSliderImplValue64.VisualThumbRail}
    >
      {modelPickerPowerSliderImplValue67.jsxs(
        appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0Y.span,
        {
          className: modelPickerPowerSliderImplValue64.ThumbScale,
          style: $,
          children: [
            modelPickerPowerSliderImplValue153,
            modelPickerPowerSliderImplValue158,
          ],
        },
      )}
    </div>
  );
  let modelPickerPowerSliderImplValue160 = () => {
    modelPickerPowerSliderImplValue97({
      type: "pointer_up",
    });
  };
  let modelPickerPowerSliderImplValue161 = () => {
    modelPickerPowerSliderImplValue103 ||
      modelPickerPowerSliderImplValue97({
        type: "thumb_hover",
        hovered: true,
      });
  };
  let modelPickerPowerSliderImplValue162 = () => {
    modelPickerPowerSliderImplValue97({
      type: "thumb_hover",
      hovered: false,
    });
  };
  let modelPickerPowerSliderImplValue163 =
    modelPickerPowerSliderImplValue67.jsx(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1N,
      {
        "aria-hidden": true,
        className: modelPickerPowerSliderImplValue64.ThumbInput,
        onBlur: modelPickerPowerSliderImplValue160,
        onPointerEnter: modelPickerPowerSliderImplValue161,
        onPointerLeave: modelPickerPowerSliderImplValue162,
        tabIndex: -1,
      },
    );
  let modelPickerPowerSliderImplValue164 =
    modelPickerPowerSliderImplValue67.jsxs(
      appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1T,
      {
        className: modelPickerPowerSliderImplValue64.Root,
        "data-dragging": modelPickerPowerSliderImplValue134,
        "data-fast-mode": fastModeEnabled,
        "data-fast-mode-dot-transition": modelPickerPowerSliderImplValue135,
        "data-max": modelPickerPowerSliderImplValue112,
        "data-pointer-down": modelPickerPowerSliderImplValue136,
        "data-reduced-motion": modelPickerPowerSliderImplValue91,
        dir: "ltr",
        disabled: modelPickerPowerSliderImplValue103,
        max: modelPickerPowerSliderImplValue137,
        min: 0,
        onClick: modelPickerPowerSliderImplHelper12,
        onLostPointerCapture: modelPickerPowerSliderImplValue126,
        onPointerCancel: modelPickerPowerSliderImplValue138,
        onPointerDown: modelPickerPowerSliderImplValue139,
        onPointerMoveCapture: modelPickerPowerSliderImplValue140,
        onPointerMove: modelPickerPowerSliderImplValue141,
        onPointerUp: modelPickerPowerSliderImplValue142,
        onValueChange: modelPickerPowerSliderImplValue143,
        onValueCommit: modelPickerPowerSliderImplValue126,
        step: 1,
        ref: modelPickerPowerSliderImplValue98,
        value: modelPickerPowerSliderImplValue144,
        children: [
          modelPickerPowerSliderImplValue152,
          modelPickerPowerSliderImplValue159,
          modelPickerPowerSliderImplValue163,
        ],
      },
    );
  return (
    <div
      className={modelPickerPowerSliderImplValue64.Container}
      data-keyboard-focused={keyboardControlFocused}
      data-model-picker-power-slider=""
    >
      {modelPickerPowerSliderImplValue164}
    </div>
  );
}
function modelPickerPowerSliderImplHelper12(event) {
  return event.stopPropagation();
}
function modelPickerPowerSliderImplHelper13(
  modelPickerPowerSliderImplParam6,
  modelPickerPowerSliderImplParam7,
) {
  switch (modelPickerPowerSliderImplParam7.type) {
    case "pointer_down":
      return {
        ...modelPickerPowerSliderImplParam6,
        isDragging: false,
        isPointerDown: true,
      };
    case "pointer_move":
      return modelPickerPowerSliderImplParam6.isPointerDown &&
        !modelPickerPowerSliderImplParam6.isDragging
        ? {
            ...modelPickerPowerSliderImplParam6,
            isDragging: true,
          }
        : modelPickerPowerSliderImplParam6;
    case "pointer_up":
      return {
        ...modelPickerPowerSliderImplParam6,
        isDragging: false,
        isPointerDown: false,
        isThumbHovered: false,
      };
    case "preview_acknowledged":
      return {
        ...modelPickerPowerSliderImplParam6,
        previewBaseOptionId: null,
        previewIndex: null,
        previewOptionIds: [],
      };
    case "thumb_hover":
      return {
        ...modelPickerPowerSliderImplParam6,
        isThumbHovered: modelPickerPowerSliderImplParam7.hovered,
      };
    case "value_preview":
      return {
        ...modelPickerPowerSliderImplParam6,
        maxBurstKey: modelPickerPowerSliderImplParam7.enteredMax
          ? modelPickerPowerSliderImplParam6.maxBurstKey + 1
          : modelPickerPowerSliderImplParam7.atMax
            ? modelPickerPowerSliderImplParam6.maxBurstKey
            : 0,
        previewBaseOptionId: modelPickerPowerSliderImplParam7.baseOptionId,
        previewIndex: modelPickerPowerSliderImplParam7.index,
        previewOptionIds:
          modelPickerPowerSliderImplParam6.previewBaseOptionId == null
            ? [modelPickerPowerSliderImplParam7.optionId]
            : [
                ...modelPickerPowerSliderImplParam6.previewOptionIds,
                modelPickerPowerSliderImplParam7.optionId,
              ],
      };
  }
}
function modelPickerPowerSliderImplHelper14(modelPickerPowerSliderImplParam40) {
  return `calc(${modelPickerPowerSliderImplParam40}% + ${modelPickerPowerSliderImplHelper18(modelPickerPowerSliderImplParam40)}px)`;
}
function modelPickerPowerSliderImplHelper15(
  modelPickerPowerSliderImplParam20,
  modelPickerPowerSliderImplParam21,
  modelPickerPowerSliderImplParam22 = 1,
) {
  if (modelPickerPowerSliderImplParam21 <= 0)
    return `translateX(${-100 * modelPickerPowerSliderImplParam22}%)`;
  let modelPickerPowerSliderImplValue238 = modelPickerPowerSliderImplHelper17(
    modelPickerPowerSliderImplParam20,
    modelPickerPowerSliderImplParam21,
  );
  return `translateX(calc(${(modelPickerPowerSliderImplParam20 - 100) * modelPickerPowerSliderImplParam22}% + ${modelPickerPowerSliderImplValue238 * modelPickerPowerSliderImplParam22}px))`;
}
function modelPickerPowerSliderImplHelper16(
  modelPickerPowerSliderImplParam29,
  modelPickerPowerSliderImplParam30,
) {
  let modelPickerPowerSliderImplValue246 = modelPickerPowerSliderImplHelper17(
    modelPickerPowerSliderImplParam29,
    modelPickerPowerSliderImplParam30,
  );
  return `inset(0 calc(${100 - modelPickerPowerSliderImplParam29}% - ${modelPickerPowerSliderImplValue246}px) 0 0)`;
}
function modelPickerPowerSliderImplHelper17(
  modelPickerPowerSliderImplParam24,
  modelPickerPowerSliderImplParam25,
) {
  if (modelPickerPowerSliderImplParam25 <= 0) return 0;
  let modelPickerPowerSliderImplValue240 =
      100 / modelPickerPowerSliderImplParam25,
    modelPickerPowerSliderImplValue241 = Math.min(
      modelPickerPowerSliderImplParam24 / modelPickerPowerSliderImplValue240,
      (100 - modelPickerPowerSliderImplParam24) /
        modelPickerPowerSliderImplValue240,
      1,
    );
  return (
    modelPickerPowerSliderImplHelper18(modelPickerPowerSliderImplParam24) *
    modelPickerPowerSliderImplValue241
  );
}
function modelPickerPowerSliderImplHelper18(modelPickerPowerSliderImplParam37) {
  let modelPickerPowerSliderImplValue248 =
    modelPickerPowerSliderImplValue70 / 2 - modelPickerPowerSliderImplValue71;
  return (
    modelPickerPowerSliderImplValue248 -
    (modelPickerPowerSliderImplParam37 / 50) *
      modelPickerPowerSliderImplValue248
  );
}
var $e,
  modelPickerPowerSliderImplValue66,
  modelPickerPowerSliderImplValue67,
  modelPickerPowerSliderImplValue68,
  modelPickerPowerSliderImplValue69,
  modelPickerPowerSliderImplValue70,
  modelPickerPowerSliderImplValue71,
  modelPickerPowerSliderImplValue72,
  modelPickerPowerSliderImplValue73,
  modelPickerPowerSliderImplValue74,
  at,
  modelPickerPowerSliderImplValue75,
  modelPickerPowerSliderImplValue76,
  modelPickerPowerSliderImplValue77,
  modelPickerPowerSliderImplValue78,
  modelPickerPowerSliderImplValue79,
  modelPickerPowerSliderImplValue80,
  modelPickerPowerSliderImplValue81,
  modelPickerPowerSliderImplValue82,
  modelPickerPowerSliderImplValue83,
  modelPickerPowerSliderImplValue84,
  modelPickerPowerSliderImplValue85,
  _t,
  modelPickerPowerSliderImplValue86;
rolldownRuntimeN(() => {
  $e =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyUn();
  appInitialAppMainOnboardingPageHotkeyWindowThreadPageQuickChatWindowPageChatgB1ew1ta1I();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewMfl5y5w0T();
  modelPickerPowerSliderImplValue66 = rolldownRuntimeS(
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyDn(),
    1,
  );
  modelPickerPowerSliderImplValue17();
  modelPickerPowerSliderImplValue20();
  modelPickerPowerSliderImplValue33();
  modelPickerPowerSliderImplValue41();
  modelPickerPowerSliderImplValue65();
  modelPickerPowerSliderImplValue67 =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyZt();
  modelPickerPowerSliderImplValue68 = 1.1428571428571428;
  modelPickerPowerSliderImplValue69 = 0.1;
  modelPickerPowerSliderImplValue70 = 28;
  modelPickerPowerSliderImplValue71 = 1;
  modelPickerPowerSliderImplValue72 = 1200;
  modelPickerPowerSliderImplValue73 = 350;
  modelPickerPowerSliderImplValue74 = {
    duration: 0.3,
    ease: [0.23, 1, 0.32, 1],
  };
  at = {
    duration: 0.15,
    ease: [0.23, 1, 0.32, 1],
  };
  modelPickerPowerSliderImplValue75 = {
    delay: 0.15,
    duration: 0.35,
    ease: [0.42, 0, 0.58, 1],
  };
  modelPickerPowerSliderImplValue76 = {
    duration: 0.25,
    ease: [0.42, 0, 1, 1],
  };
  modelPickerPowerSliderImplValue77 = {
    delay: 0.1,
    duration: 0.3,
    ease: "linear",
  };
  modelPickerPowerSliderImplValue78 = {
    opacity: {
      delay: 0.05,
      duration: 0.5,
      ease: "linear",
    },
    x: {
      delay: 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  };
  modelPickerPowerSliderImplValue79 = {
    opacity: {
      delay: 1,
      duration: 0.55,
      ease: [0.42, 0, 1, 1],
    },
    x: {
      delay: 0.2,
      duration: 1.35,
      ease: [0.42, 0, 1, 1],
    },
  };
  modelPickerPowerSliderImplValue80 = {
    duration: 0.08,
    ease: [0.42, 0, 0.58, 1],
  };
  modelPickerPowerSliderImplValue81 = {
    duration: 0.25,
    ease: [0.42, 0, 0.58, 1],
  };
  modelPickerPowerSliderImplValue82 = {
    type: "spring",
    stiffness: 420,
    damping: 38,
    mass: 1,
  };
  modelPickerPowerSliderImplValue83 = {
    type: "spring",
    stiffness: 220,
    damping: 26,
    mass: 1,
  };
  modelPickerPowerSliderImplValue84 = {
    duration: 0,
  };
  modelPickerPowerSliderImplValue85 = 160;
  _t = 30;
  modelPickerPowerSliderImplValue86 = {
    isDragging: false,
    isPointerDown: false,
    isThumbHovered: false,
    maxBurstKey: 0,
    previewBaseOptionId: null,
    previewIndex: null,
    previewOptionIds: [],
  };
})();
