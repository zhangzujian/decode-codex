// Restored from ref/webview/assets/codex-micro-mini-games-CBXjflUZ.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// CodexMicroMiniGames chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyXt,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
} from "./shared-react-runtime";
import {
  appgenSettingsSharedRuntimeVariant3Member0007 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPGy16mploA,
  appgenSettingsSharedRuntimeVariant3Function0009 as appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPGy16mploC,
} from "../current-ref-aliases/appgen-settings-shared-runtime-variant-3/index";
export function codexMicroMiniGamesD(
  codexMicroMiniGamesParam5,
  codexMicroMiniGamesParam6,
  codexMicroMiniGamesParam7,
) {
  return (
    codexMicroMiniGamesValue11.set(
      codexMicroMiniGamesParam6,
      codexMicroMiniGamesParam5,
    ),
    () => {
      codexMicroMiniGamesValue11.delete(codexMicroMiniGamesParam6);
      queueMicrotask(() => {
        for (let codexMicroMiniGamesValue18 of codexMicroMiniGamesValue11.values())
          if (codexMicroMiniGamesValue18 === codexMicroMiniGamesParam5) return;
        codexMicroMiniGamesParam7?.();
      });
    }
  );
}
export function codexMicroMiniGamesR() {
  for (let [
    codexMicroMiniGamesValue16,
    codexMicroMiniGamesValue17,
  ] of codexMicroMiniGamesValue11)
    if (
      codexMicroMiniGamesValue16.isConnected &&
      appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPGy16mploC(
        codexMicroMiniGamesValue16,
      )
    )
      return codexMicroMiniGamesValue17;
  return null;
}
export function codexMicroMiniGamesO(codexMicroMiniGamesParam12 = Math.random) {
  return (
    codexMicroMiniGamesValue1[
      Math.floor(
        codexMicroMiniGamesParam12() * codexMicroMiniGamesValue1.length,
      )
    ] ?? "brick-breaker"
  );
}
export function codexMicroMiniGamesT(codexMicroMiniGamesParam18) {
  codexMicroMiniGamesParam18.set(codexMicroMiniGamesN, null);
}
function codexMicroMiniGamesL(event) {
  return event.key === codexMicroMiniGamesValue8 && event.act === 1;
}
export function codexMicroMiniGamesU(
  codexMicroMiniGamesParam15,
  codexMicroMiniGamesParam16,
) {
  return (
    codexMicroMiniGamesParam15?.game === "asteroids" &&
    codexMicroMiniGamesL(codexMicroMiniGamesParam16)
  );
}
export function codexMicroMiniGamesA(codexMicroMiniGamesParam4) {
  return codexMicroMiniGamesParam4 == null
    ? null
    : Array.from(
        {
          length: codexMicroMiniGamesValue10,
        },
        (codexMicroMiniGamesParam8, codexMicroMiniGamesParam9) => ({
          id: codexMicroMiniGamesParam9,
          threadKey: null,
          title: null,
          status:
            codexMicroMiniGamesParam4.game === "asteroids" &&
            codexMicroMiniGamesParam9 === codexMicroMiniGamesValue9
              ? "working"
              : "off",
          selected: false,
        }),
      );
}
export function codexMicroMiniGamesI(
  codexMicroMiniGamesParam1,
  codexMicroMiniGamesParam2,
  codexMicroMiniGamesParam3,
) {
  if (codexMicroMiniGamesParam2.distance < codexMicroMiniGamesValue2)
    return {
      activated: false,
      captured: false,
      progress: 0,
      state: codexMicroMiniGamesC,
    };
  if (
    codexMicroMiniGamesParam1.lastAngle == null ||
    codexMicroMiniGamesParam1.lastAt == null ||
    codexMicroMiniGamesParam1.startedAt == null ||
    codexMicroMiniGamesParam3 - codexMicroMiniGamesParam1.lastAt >
      codexMicroMiniGamesValue4 ||
    codexMicroMiniGamesParam3 - codexMicroMiniGamesParam1.startedAt >
      codexMicroMiniGamesValue5
  )
    return {
      activated: false,
      captured: false,
      progress: 0,
      state: codexMicroMiniGamesHelper1(
        codexMicroMiniGamesParam2.angle,
        codexMicroMiniGamesParam3,
      ),
    };
  let codexMicroMiniGamesValue12 = codexMicroMiniGamesHelper3(
    codexMicroMiniGamesParam1.lastAngle,
    codexMicroMiniGamesParam2.angle,
  );
  if (Math.abs(codexMicroMiniGamesValue12) < 0.002)
    return {
      activated: false,
      captured:
        Math.abs(codexMicroMiniGamesParam1.accumulatedTurns) >=
        codexMicroMiniGamesValue3,
      progress: codexMicroMiniGamesHelper2(
        codexMicroMiniGamesParam1.accumulatedTurns,
      ),
      state: {
        ...codexMicroMiniGamesParam1,
        lastAngle: codexMicroMiniGamesParam2.angle,
        lastAt: codexMicroMiniGamesParam3,
      },
    };
  let codexMicroMiniGamesValue13 = codexMicroMiniGamesValue12 > 0 ? 1 : -1;
  if (
    codexMicroMiniGamesParam1.direction !== 0 &&
    codexMicroMiniGamesValue13 !== codexMicroMiniGamesParam1.direction &&
    Math.abs(codexMicroMiniGamesValue12) >= codexMicroMiniGamesValue6
  )
    return {
      activated: false,
      captured: false,
      progress: 0,
      state: codexMicroMiniGamesHelper1(
        codexMicroMiniGamesParam2.angle,
        codexMicroMiniGamesParam3,
      ),
    };
  let codexMicroMiniGamesValue14 =
    codexMicroMiniGamesParam1.accumulatedTurns + codexMicroMiniGamesValue12;
  return Math.abs(codexMicroMiniGamesValue14) >= codexMicroMiniGamesValue7
    ? {
        activated: true,
        captured: true,
        progress: 1,
        state: codexMicroMiniGamesC,
      }
    : {
        activated: false,
        captured:
          Math.abs(codexMicroMiniGamesValue14) >= codexMicroMiniGamesValue3,
        progress: codexMicroMiniGamesHelper2(codexMicroMiniGamesValue14),
        state: {
          accumulatedTurns: codexMicroMiniGamesValue14,
          direction:
            codexMicroMiniGamesParam1.direction === 0
              ? codexMicroMiniGamesValue13
              : codexMicroMiniGamesParam1.direction,
          lastAngle: codexMicroMiniGamesParam2.angle,
          lastAt: codexMicroMiniGamesParam3,
          startedAt: codexMicroMiniGamesParam1.startedAt,
        },
      };
}
function codexMicroMiniGamesHelper1(
  codexMicroMiniGamesParam10,
  codexMicroMiniGamesParam11,
) {
  return {
    accumulatedTurns: 0,
    direction: 0,
    lastAngle: codexMicroMiniGamesParam10,
    lastAt: codexMicroMiniGamesParam11,
    startedAt: codexMicroMiniGamesParam11,
  };
}
function codexMicroMiniGamesHelper2(codexMicroMiniGamesParam17) {
  return Math.min(
    Math.abs(codexMicroMiniGamesParam17) / codexMicroMiniGamesValue7,
    1,
  );
}
function codexMicroMiniGamesHelper3(
  codexMicroMiniGamesParam13,
  codexMicroMiniGamesParam14,
) {
  let codexMicroMiniGamesValue15 =
    codexMicroMiniGamesParam14 - codexMicroMiniGamesParam13;
  return codexMicroMiniGamesValue15 > 0.5
    ? codexMicroMiniGamesValue15 - 1
    : codexMicroMiniGamesValue15 < -0.5
      ? codexMicroMiniGamesValue15 + 1
      : codexMicroMiniGamesValue15;
}
var codexMicroMiniGamesValue1,
  codexMicroMiniGamesValue2,
  codexMicroMiniGamesValue3,
  codexMicroMiniGamesValue4,
  codexMicroMiniGamesValue5,
  codexMicroMiniGamesValue6,
  codexMicroMiniGamesValue7,
  codexMicroMiniGamesValue8,
  codexMicroMiniGamesValue9,
  codexMicroMiniGamesValue10,
  codexMicroMiniGamesValue11,
  codexMicroMiniGamesN,
  codexMicroMiniGamesC;
export const codexMicroMiniGamesS = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX();
  appInitialArtifactTabContentElectronNotebookPreviewPanelAppMainAppgenSettingsPGy16mploA();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB();
  codexMicroMiniGamesValue1 = ["brick-breaker", "asteroids", "snake"];
  codexMicroMiniGamesValue2 = 0.2;
  codexMicroMiniGamesValue3 = 0.04;
  codexMicroMiniGamesValue4 = 1e3;
  codexMicroMiniGamesValue5 = 6e3;
  codexMicroMiniGamesValue6 = 0.02;
  codexMicroMiniGamesValue7 = 1.9;
  codexMicroMiniGamesValue8 = "AG00";
  codexMicroMiniGamesValue9 = 0;
  codexMicroMiniGamesValue10 = 6;
  codexMicroMiniGamesValue11 = new Map();
  codexMicroMiniGamesN =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyXt(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      null,
    );
  codexMicroMiniGamesC = {
    accumulatedTurns: 0,
    direction: 0,
    lastAngle: null,
    lastAt: null,
    startedAt: null,
  };
});
export { codexMicroMiniGamesC, codexMicroMiniGamesL, codexMicroMiniGamesN };
