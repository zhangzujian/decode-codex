// Restored from ref/webview/assets/new-chat-suggestion-source-debug-state-kph85gzM.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
import {
  createLazyEsmInitializer as rolldownRuntimeN,
  toEsm as rolldownRuntimeS,
} from "../rolldown/index";
import {
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleySt as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyFt,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyFt as appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleySt,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX,
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
} from "./shared-react-runtime";
import {
  $i as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzI,
  $o as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzO,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzOc,
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzW,
} from "./shared-query-rpc-runtime";
import {
  clearPersistedAtomPrefix as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6D,
  initPersistedAtomStoreRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6F,
  initPersistedAtomRegistryRuntime as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6I,
  createPersistedAtomRegistryEntry as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6J,
  getPersistedAtomValue as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6M,
} from "./persisted-ui-runtime";
import { currentAppInitialSharedMember0879 as appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eZr } from "../current-ref-aliases/current-app-shared/index";
export function newChatSuggestionSourceDebugStateDState(
  newChatSuggestionSourceDebugStateParam8,
  newChatSuggestionSourceDebugStateParam9,
  newChatSuggestionSourceDebugStateParam10,
  newChatSuggestionSourceDebugStateParam11,
) {
  let newChatSuggestionSourceDebugStateValue7 =
    newChatSuggestionSourceDebugStateHelper2(
      newChatSuggestionSourceDebugStateParam9,
    );
  newChatSuggestionSourceDebugStateParam8.set(
    newChatSuggestionSourceDebugStateValue4,
    (newChatSuggestionSourceDebugStateParam12) => {
      let newChatSuggestionSourceDebugStateValue10 =
          newChatSuggestionSourceDebugStateParam12 ?? {},
        newChatSuggestionSourceDebugStateValue11 =
          newChatSuggestionSourceDebugStateValue10[
            newChatSuggestionSourceDebugStateValue7
          ] ??
          newChatSuggestionSourceDebugStateHelper5(
            newChatSuggestionSourceDebugStateParam9,
          );
      return newChatSuggestionSourceDebugStateValue11?.[
        newChatSuggestionSourceDebugStateParam10
      ] === newChatSuggestionSourceDebugStateParam11
        ? newChatSuggestionSourceDebugStateValue10
        : {
            ...newChatSuggestionSourceDebugStateValue10,
            [newChatSuggestionSourceDebugStateValue7]: {
              ...newChatSuggestionSourceDebugStateValue11,
              [newChatSuggestionSourceDebugStateParam10]:
                newChatSuggestionSourceDebugStateParam11,
            },
          };
    },
  );
}
export function newChatSuggestionSourceDebugStateLState(
  newChatSuggestionSourceDebugStateParam17,
) {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6I(
    `${newChatSuggestionSourceDebugStateValue3}:`,
  );
  newChatSuggestionSourceDebugStateParam17.set(
    newChatSuggestionSourceDebugStateValue4,
    {},
  );
}
export function newChatSuggestionSourceDebugStateUState(
  newChatSuggestionSourceDebugStateParam1,
  newChatSuggestionSourceDebugStateParam2,
  newChatSuggestionSourceDebugStateParam3,
  newChatSuggestionSourceDebugStateParam4,
) {
  newChatSuggestionSourceDebugStateParam1.query
    .snapshot(
      newChatSuggestionSourceDebugStateIState,
      newChatSuggestionSourceDebugStateParam2,
    )
    .setData((newChatSuggestionSourceDebugStateParam5) =>
      newChatSuggestionSourceDebugStateParam5 == null
        ? newChatSuggestionSourceDebugStateParam5
        : {
            file: {
              ...newChatSuggestionSourceDebugStateParam5.file,
              suggestions:
                newChatSuggestionSourceDebugStateParam5.file.suggestions.map(
                  (item) =>
                    item.id === newChatSuggestionSourceDebugStateParam3
                      ? {
                          ...item,
                          status: newChatSuggestionSourceDebugStateParam4,
                        }
                      : item,
                ),
            },
          },
    );
}
function newChatSuggestionSourceDebugStateHelper1(
  newChatSuggestionSourceDebugStateParam16,
) {
  return newChatSuggestionSourceDebugStateParam16 == null
    ? null
    : Object.keys(newChatSuggestionSourceDebugStateParam16);
}
function newChatSuggestionSourceDebugStateHelper2({
  domain,
  hostId,
  projectRoot,
}) {
  return domain == null
    ? `${newChatSuggestionSourceDebugStateValue3}:${hostId}:${newChatSuggestionSourceDebugStateHelper4(projectRoot)}`
    : `${newChatSuggestionSourceDebugStateValue3}:${hostId}:${newChatSuggestionSourceDebugStateHelper4(projectRoot)}:${domain}`;
}
function newChatSuggestionSourceDebugStateHelper3(
  newChatSuggestionSourceDebugStateParam13,
  newChatSuggestionSourceDebugStateParam14,
) {
  let newChatSuggestionSourceDebugStateValue12 =
      newChatSuggestionSourceDebugStateHelper2(
        newChatSuggestionSourceDebugStateParam14,
      ),
    newChatSuggestionSourceDebugStateValue13 =
      newChatSuggestionSourceDebugStateParam13(
        newChatSuggestionSourceDebugStateValue4,
      )?.[newChatSuggestionSourceDebugStateValue12];
  if (newChatSuggestionSourceDebugStateValue13 != null)
    return newChatSuggestionSourceDebugStateValue13;
  if (newChatSuggestionSourceDebugStateParam14.domain == null)
    return newChatSuggestionSourceDebugStateHelper5(
      newChatSuggestionSourceDebugStateParam14,
    );
}
function newChatSuggestionSourceDebugStateHelper4(
  newChatSuggestionSourceDebugStateParam19,
) {
  return newChatSuggestionSourceDebugStateParam19 ?? "";
}
function newChatSuggestionSourceDebugStateHelper5(
  newChatSuggestionSourceDebugStateParam18,
) {
  return appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6J(
    newChatSuggestionSourceDebugStateHelper6(
      newChatSuggestionSourceDebugStateParam18,
    ),
    undefined,
  );
}
function newChatSuggestionSourceDebugStateHelper6({ hostId, projectRoot }) {
  return `${newChatSuggestionSourceDebugStateValue3}:${hostId}:${newChatSuggestionSourceDebugStateHelper4(projectRoot)}`;
}
function newChatSuggestionSourceDebugStateHelper7(
  newChatSuggestionSourceDebugStateParam6,
  newChatSuggestionSourceDebugStateParam7,
) {
  let newChatSuggestionSourceDebugStateValue6 = [];
  for (let newChatSuggestionSourceDebugStateValue8 of newChatSuggestionSourceDebugStateParam6) {
    let newChatSuggestionSourceDebugStateValue9 =
      newChatSuggestionSourceDebugStateValue1.default(
        newChatSuggestionSourceDebugStateParam7,
        ({ id }) => id === newChatSuggestionSourceDebugStateValue8,
      );
    if (
      (newChatSuggestionSourceDebugStateValue9?.status === "pending" &&
        newChatSuggestionSourceDebugStateValue6.push(
          newChatSuggestionSourceDebugStateValue9,
        ),
      newChatSuggestionSourceDebugStateValue6.length ===
        newChatSuggestionSourceDebugStateValue2)
    )
      break;
  }
  return newChatSuggestionSourceDebugStateValue6;
}
var newChatSuggestionSourceDebugStateValue1,
  newChatSuggestionSourceDebugStateValue2,
  newChatSuggestionSourceDebugStateValue3,
  newChatSuggestionSourceDebugStateValue4,
  newChatSuggestionSourceDebugStateIState,
  newChatSuggestionSourceDebugStateOState,
  newChatSuggestionSourceDebugStateRState,
  newChatSuggestionSourceDebugStateCState,
  newChatSuggestionSourceDebugStateAState,
  newChatSuggestionSourceDebugStateFState,
  newChatSuggestionSourceDebugStateNState;
export const newChatSuggestionSourceDebugStateTState = rolldownRuntimeN(() => {
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6D();
  newChatSuggestionSourceDebugStateNState =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6F(
      "electron:new-chat-suggestion-source-debug-override",
      null,
    );
});
export const newChatSuggestionSourceDebugStateSState = rolldownRuntimeN(() => {
  newChatSuggestionSourceDebugStateValue1 = rolldownRuntimeS(
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewG8980z4eZr(),
    1,
  );
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyX();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzW();
  appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyB();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6M();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6D();
  appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzO();
  newChatSuggestionSourceDebugStateValue2 = 3;
  newChatSuggestionSourceDebugStateValue3 =
    "ambient-suggestions:default-statuses";
  newChatSuggestionSourceDebugStateValue4 =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewCc80cam6F(
      newChatSuggestionSourceDebugStateValue3,
      {},
    );
  newChatSuggestionSourceDebugStateIState =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzI(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      "ambient-suggestions",
      ({ projectRoot }) => ({
        enabled: projectRoot != null,
      }),
    );
  newChatSuggestionSourceDebugStateOState =
    appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzI(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      "ambient-suggestions-refresh",
      ({ domain, hostId, plan, projectRoot }) => ({
        enabled: projectRoot != null,
        gcTime:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzOc(
            plan,
          ),
        params: {
          domain,
          hostId,
          projectRoot,
        },
        select: () => true,
        staleTime:
          appInitialAvatarOverlayCompositionSurfaceArtifactTabContentElectronNotebookPreviewNgwudnyzOc(
            plan,
          ),
      }),
    );
  newChatSuggestionSourceDebugStateRState =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleySt(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      (newChatSuggestionSourceDebugStateParam21) => null,
    );
  newChatSuggestionSourceDebugStateCState =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyFt(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      (newChatSuggestionSourceDebugStateParam20, { get }) =>
        newChatSuggestionSourceDebugStateHelper1(
          newChatSuggestionSourceDebugStateHelper3(
            get,
            newChatSuggestionSourceDebugStateParam20,
          ),
        ),
    );
  newChatSuggestionSourceDebugStateAState =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyFt(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      (newChatSuggestionSourceDebugStateParam15, { get }) => {
        let newChatSuggestionSourceDebugStateValue14 = get(
          newChatSuggestionSourceDebugStateIState,
          newChatSuggestionSourceDebugStateParam15,
        );
        return (
          newChatSuggestionSourceDebugStateValue14.data != null ||
          newChatSuggestionSourceDebugStateValue14.isError
        );
      },
    );
  newChatSuggestionSourceDebugStateFState =
    appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyFt(
      appInitialAvatarOverlayCompositionSurfaceIndex9fQ9wihuIndexBFCcxPM5MapboxGlDVWlwqbKppdhleyY,
      ({ domain, hostId, projectRoot }, { get }) => {
        let newChatSuggestionSourceDebugStateValue5 = get(
          newChatSuggestionSourceDebugStateIState,
          {
            domain,
            hostId,
            projectRoot,
          },
        ).data?.file;
        return newChatSuggestionSourceDebugStateHelper7(
          newChatSuggestionSourceDebugStateValue5?.currentSuggestionIds ?? [],
          newChatSuggestionSourceDebugStateValue5?.suggestions ?? [],
        );
      },
    );
});
export {
  newChatSuggestionSourceDebugStateAState,
  newChatSuggestionSourceDebugStateCState,
  newChatSuggestionSourceDebugStateFState,
  newChatSuggestionSourceDebugStateIState,
  newChatSuggestionSourceDebugStateNState,
  newChatSuggestionSourceDebugStateOState,
  newChatSuggestionSourceDebugStateRState,
};
