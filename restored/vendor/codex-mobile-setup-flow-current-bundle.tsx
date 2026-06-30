// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// Current CodexMobileSetupFlow backing bundle with restored dependency imports.

import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUnderscoreLowerC as _appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC,
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotUpperFLowerS,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperGLowerS,
  currentAppInitialSharedCompatSlotLowerI,
  currentAppInitialSharedCompatSlotUpperILowerS,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotLowerQLowerS,
  currentAppInitialSharedCompatSlotDollarLowerS,
  currentAppInitialSharedCompatSlotLowerTLowerC,
  currentAppInitialSharedCompatSlotUpperVLowerO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerOLowerT,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotLowerILowerS,
  worktreeNewThreadQueryCompatSlotLowerNLowerS,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  remoteConnectionRuntime0472,
  imagePickerSchemaCapabilities,
  localRemoteConnectionDescriptorSchema,
  currentAppInitialSharedMember0542,
  parseWorkspaceRootPathList,
  currentAppInitialSharedControlConnectConnectionRuntime,
  currentAppInitialSharedMember0593,
  intlFormatDateTimeRuntime,
  remoteControlRefreshSourceEnum,
  statsigMountSignal,
  currentAppInitialSharedMember0686,
  currentAppInitialSharedMember0454,
  currentAppInitialSharedFunction0722,
  currentAppInitialSharedMember0740,
  currentAppInitialSharedMember0279,
  currentAppInitialSharedDisplayRuntime,
  remoteConnectionRuntime0298,
  currentAppInitialSharedMember0781,
  localRemoteConnectionKind,
  currentAppInitialSharedRuntime0816,
  currentAppInitialSharedMember0835,
  openAiNativeAppDefinition,
  currentAppInitialSharedMember0432,
  currentAppInitialSharedMember0924,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotLowerBLowerT,
  pullRequestNewThreadCompatSlotUpperDLowerT,
  pullRequestNewThreadCompatSlotLowerKLowerT,
  pullRequestNewThreadCompatSlotUpperSLowerT,
  pullRequestNewThreadCompatSlotUnderscoreLowerT,
  pullRequestNewThreadCompatSlotUpperTLowerT,
  pullRequestNewThreadCompatSlotLowerWLowerT,
  pullRequestNewThreadCompatSlotLowerXLowerT,
  pullRequestNewThreadCompatSlotLowerYLowerT,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  initAppgenProjectHeaderChunk,
  AppgenProjectHeader,
} from "../appgen/project-header";
import {
  setLocalRemoteControlEnabled,
  initLocalRemoteControlEnabledChunk,
  isHandledLocalRemoteControlEnableError,
  initSetRemoteControlEnabledForHostChunk,
  handleLocalRemoteControlEnableError,
  setRemoteControlEnabledForHost,
  initLocalRemoteControlErrorHandlingChunk,
} from "../runtime/current-app-initial/remote-connections-auth-state-runtime";
import {
  codexMobileSetupDialogA,
  codexMobileSetupDialogD,
  codexMobileSetupDialogI,
  codexMobileSetupDialogN,
  codexMobileSetupDialogT,
  codexMobileSetupDialogU,
} from "../runtime/current-app-initial/codex-mobile-setup-dialog-current-runtime";
function codexMobileSetupFlowF(
  codexMobileSetupFlowParam15,
  codexMobileSetupFlowParam16,
) {
  if (codexMobileSetupFlowParam15 != null)
    return codexMobileSetupFlowParam16 == null
      ? codexMobileSetupFlowParam15
      : codexMobileSetupFlowParam15.filter(
          (item) => item.clientId !== codexMobileSetupFlowParam16,
        );
}
function be(codexMobileSetupFlowParam18, codexMobileSetupFlowParam19) {
  return (
    codexMobileSetupFlowParam18?.some(
      (codexMobileSetupFlowParam28) =>
        !codexMobileSetupFlowParam19.has(codexMobileSetupFlowParam28.clientId),
    ) === true
  );
}
function codexMobileSetupFlowHelper1(
  codexMobileSetupFlowParam13,
  codexMobileSetupFlowParam14,
) {
  return codexMobileSetupFlowParam13 == null ||
    !be(codexMobileSetupFlowParam13, codexMobileSetupFlowParam14)
    ? null
    : codexMobileSetupFlowParam14.size === 0 &&
        codexMobileSetupFlowParam13.length === 1
      ? "connected"
      : "dismiss";
}
var codexMobileSetupFlowP = once(() => {});
function codexMobileSetupFlowHelper2({
  existingClientIds,
  hostId,
  localRemoteControlClientId,
  waiting,
}) {
  return JSON.stringify({
    existingClientIds:
      existingClientIds == null ? null : Array.from(existingClientIds).sort(),
    hostId,
    localRemoteControlClientId,
    waiting,
  });
}
var codexMobileSetupFlowValue1,
  codexMobileSetupFlowU,
  codexMobileSetupFlowC,
  codexMobileSetupFlowValue2,
  codexMobileSetupFlowD,
  codexMobileSetupFlowL = once(() => {
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedControlConnectConnectionRuntime();
    currentAppInitialSharedCompatSlotUpperD();
    localRemoteConnectionDescriptorSchema();
    statsigMountSignal();
    pullRequestNewThreadCompatSlotLowerWLowerT();
    codexMobileSetupFlowP();
    codexMobileSetupFlowValue1 = 3e4;
    codexMobileSetupFlowU = currentAppInitialSharedCompatSlotUpperILowerS(
      currentAppInitialSharedCompatSlotUpperE,
      ({ get }) => {
        let codexMobileSetupFlowValue76 =
            localRemoteConnectionKind(
              get,
              "local_remote_control_environment_id",
            ) ?? null,
          codexMobileSetupFlowValue77 = !get(
            currentAppInitialSharedMember0835,
            "2055603567",
          );
        return {
          queryKey: [
            "remote-control-clients",
            codexMobileSetupFlowValue76,
            codexMobileSetupFlowValue77,
          ],
          queryFn: () =>
            pullRequestNewThreadCompatSlotUpperTLowerT(
              codexMobileSetupFlowValue76,
              {
                includeBrowserClients: codexMobileSetupFlowValue77,
              },
            ),
          staleTime: codexMobileSetupFlowValue1,
        };
      },
    );
    codexMobileSetupFlowC = currentAppInitialSharedCompatSlotUpperFLowerS(
      currentAppInitialSharedCompatSlotUpperE,
      (codexMobileSetupFlowParam3, { get }) => {
        let codexMobileSetupFlowValue72 = get(
            currentAppInitialSharedMember0686,
            codexMobileSetupFlowParam3,
          ),
          codexMobileSetupFlowValue73 =
            codexMobileSetupFlowValue72?.environmentId;
        return {
          enabled: codexMobileSetupFlowValue73 != null,
          queryKey: [
            "remote-control-clients",
            "app-server",
            codexMobileSetupFlowParam3,
            codexMobileSetupFlowValue72?.installationId,
          ],
          queryFn: () =>
            codexMobileSetupFlowValue73 == null
              ? Promise.resolve([])
              : pullRequestNewThreadCompatSlotUpperTLowerT(
                  codexMobileSetupFlowValue73,
                  {
                    appServerHostId: codexMobileSetupFlowParam3,
                  },
                ),
          staleTime: codexMobileSetupFlowValue1,
        };
      },
    );
    codexMobileSetupFlowValue2 = currentAppInitialSharedCompatSlotUpperFLowerS(
      currentAppInitialSharedCompatSlotUpperE,
      (codexMobileSetupFlowParam4, { get }) => {
        let codexMobileSetupFlowValue74 =
            localRemoteConnectionKind(
              get,
              "local_remote_control_environment_id",
            ) ?? null,
          codexMobileSetupFlowValue75 = !get(
            currentAppInitialSharedMember0835,
            "2055603567",
          );
        return {
          enabled: codexMobileSetupFlowParam4,
          queryKey: [
            "remote-control-clients",
            codexMobileSetupFlowValue74,
            codexMobileSetupFlowValue75,
          ],
          queryFn: () =>
            pullRequestNewThreadCompatSlotUpperTLowerT(
              codexMobileSetupFlowValue74,
              {
                includeBrowserClients: codexMobileSetupFlowValue75,
              },
            ),
          refetchInterval: codexMobileSetupFlowParam4 ? 1e3 : false,
          staleTime: 0,
        };
      },
    );
    codexMobileSetupFlowD = currentAppInitialSharedCompatSlotUpperFLowerS(
      currentAppInitialSharedCompatSlotUpperE,
      (
        { existingClientIds, hostId, localRemoteControlClientId, waiting },
        { get, queryClient },
      ) => {
        let codexMobileSetupFlowValue62 = null,
          codexMobileSetupFlowValue63 = null,
          codexMobileSetupFlowValue64 = !get(
            currentAppInitialSharedMember0835,
            "2055603567",
          );
        if (waiting && hostId == null)
          codexMobileSetupFlowValue62 =
            localRemoteConnectionKind(
              get,
              "local_remote_control_environment_id",
            ) ?? null;
        else if (waiting) {
          let codexMobileSetupFlowValue81 = get(
            currentAppInitialSharedMember0686,
            hostId,
          );
          codexMobileSetupFlowValue62 =
            codexMobileSetupFlowValue81?.environmentId;
          codexMobileSetupFlowValue63 =
            codexMobileSetupFlowValue81?.installationId;
        }
        let codexMobileSetupFlowValue65 = [
          "remote-control-clients",
          "waiting-for-added",
          hostId,
          codexMobileSetupFlowValue64,
          hostId == null
            ? codexMobileSetupFlowValue62
            : codexMobileSetupFlowValue63,
          existingClientIds == null
            ? null
            : Array.from(existingClientIds).sort(),
          localRemoteControlClientId,
        ];
        return {
          enabled:
            waiting &&
            existingClientIds != null &&
            (hostId == null || codexMobileSetupFlowValue62 != null),
          gcTime: 0,
          queryKey: codexMobileSetupFlowValue65,
          queryFn: async () => {
            let codexMobileSetupFlowValue70 = queryClient.getQueryData(
              codexMobileSetupFlowValue65,
            );
            if (
              codexMobileSetupFlowValue70 != null ||
              existingClientIds == null
            )
              return codexMobileSetupFlowValue70 ?? null;
            let codexMobileSetupFlowValue71 =
              await pullRequestNewThreadCompatSlotUpperTLowerT(
                codexMobileSetupFlowValue62 ?? null,
                {
                  appServerHostId: hostId ?? undefined,
                  includeBrowserClients: codexMobileSetupFlowValue64,
                },
              );
            return (
              hostId != null &&
                queryClient.setQueryData(
                  [
                    "remote-control-clients",
                    "app-server",
                    hostId,
                    codexMobileSetupFlowValue63,
                  ],
                  codexMobileSetupFlowValue71,
                ),
              codexMobileSetupFlowHelper1(
                codexMobileSetupFlowF(
                  codexMobileSetupFlowValue71,
                  localRemoteControlClientId,
                ),
                existingClientIds,
              )
            );
          },
          refetchInterval: (codexMobileSetupFlowParam24) =>
            waiting && codexMobileSetupFlowParam24.state.data == null
              ? 1e3
              : false,
          staleTime: 0,
        };
      },
      {
        key: codexMobileSetupFlowHelper2,
      },
    );
  });
async function codexMobileSetupFlowS(
  codexMobileSetupFlowParam5,
  codexMobileSetupFlowParam6,
  codexMobileSetupFlowParam7,
) {
  if (!codexMobileSetupFlowParam7)
    return codexMobileSetupFlowHelper3(
      codexMobileSetupFlowParam5,
      codexMobileSetupFlowParam6,
      false,
    );
  currentAppInitialSharedMember0593(
    codexMobileSetupFlowParam5,
    codexMobileSetupFlowParam6,
    false,
  );
  let codexMobileSetupFlowValue78 = currentAppInitialSharedMember0454(
    codexMobileSetupFlowParam5,
    codexMobileSetupFlowParam6,
    {
      ignoreCurrentError: true,
    },
  );
  try {
    let codexMobileSetupFlowValue82 = codexMobileSetupFlowHelper3(
      codexMobileSetupFlowParam5,
      codexMobileSetupFlowParam6,
      true,
    );
    return await Promise.race([
      codexMobileSetupFlowValue78,
      codexMobileSetupFlowValue82.then(() => codexMobileSetupFlowValue78),
    ]);
  } catch (codexMobileSetupFlowValue83) {
    throw (
      currentAppInitialSharedMember0593(
        codexMobileSetupFlowParam5,
        codexMobileSetupFlowParam6,
        true,
      ),
      codexMobileSetupFlowValue83
    );
  }
}
async function codexMobileSetupFlowHelper3(
  codexMobileSetupFlowParam9,
  codexMobileSetupFlowParam10,
  codexMobileSetupFlowParam11,
) {
  return codexMobileSetupFlowParam10 === "local"
    ? (await currentAppInitialSharedCompatSlotLowerI(
        "set-local-remote-control-enabled",
        {
          params: {
            enabled: codexMobileSetupFlowParam11,
          },
        },
      ),
      setLocalRemoteControlEnabled(
        codexMobileSetupFlowParam9,
        codexMobileSetupFlowParam11,
        {
          force: true,
        },
      ))
    : setRemoteControlEnabledForHost(
        codexMobileSetupFlowParam9,
        codexMobileSetupFlowParam10,
        codexMobileSetupFlowParam11,
      );
}
var codexMobileSetupFlowO = once(() => {
  initSetRemoteControlEnabledForHostChunk();
  currentAppInitialSharedControlConnectConnectionRuntime();
  currentAppInitialSharedDisplayRuntime();
  _appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC();
  initLocalRemoteControlEnabledChunk();
});
export function codexMobileSetupFlowR({
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus,
}) {
  return codexMobileSetupFlowHelper6(remoteControlStatus) ||
    isMfaSetupRequiredError
    ? "initial"
    : mfaSetupRequired
      ? "mfa-required"
      : undefined;
}
export function codexMobileSetupFlowA({
  initialRemoteControlStatus,
  isMfaSetupRequiredError,
  mfaSetupRequired,
  remoteControlStatus,
  setupStepDebugOverride,
}) {
  return (
    isMfaSetupRequiredError ||
    !!mfaSetupRequired ||
    codexMobileSetupFlowHelper6(remoteControlStatus) ||
    codexMobileSetupFlowHelper6(initialRemoteControlStatus) ||
    setupStepDebugOverride !== "auto"
  );
}
function codexMobileSetupFlowHelper4({
  remoteControlHostEnabled,
  hasEnrolledRemoteControlClient,
}) {
  return remoteControlHostEnabled
    ? hasEnrolledRemoteControlClient
      ? "connected"
      : "waiting"
    : "initial";
}
function codexMobileSetupFlowHelper5(codexMobileSetupFlowParam23) {
  return codexMobileSetupFlowParam23.some(
    (item) => item instanceof pullRequestNewThreadCompatSlotUpperDLowerT,
  );
}
function codexMobileSetupFlowHelper6(codexMobileSetupFlowParam12) {
  switch (codexMobileSetupFlowParam12) {
    case "disabled":
    case "errored":
      return true;
    case "connecting":
    case "connected":
      return false;
  }
}
var codexMobileSetupFlowI = once(() => {
  pullRequestNewThreadCompatSlotLowerKLowerT();
});
export function codexMobileSetupFlowT(codexMobileSetupFlowParam1) {
  let { initialStep, onClose, variant } = codexMobileSetupFlowParam1,
    codexMobileSetupFlowValue6 = currentAppInitialSharedCompatSlotUpperKLowerO(
      currentAppInitialSharedCompatSlotUpperE,
    ),
    codexMobileSetupFlowValue7 = parseWorkspaceRootPathList(),
    codexMobileSetupFlowValue8 = codexMobileSetupFlowValue4.useRef(null),
    codexMobileSetupFlowValue9 = currentAppInitialSharedCompatSlotUpperGLowerO(
      currentAppInitialSharedMember0740,
      currentAppInitialSharedMember0542,
    ),
    [codexMobileSetupFlowValue10] =
      currentAppInitialSharedCompatSlotLowerQLowerS(codexMobileSetupDialogU),
    codexMobileSetupFlowValue11 = currentAppInitialSharedCompatSlotLowerQLowerO(
      pullRequestNewThreadCompatSlotUnderscoreLowerT,
    ),
    [codexMobileSetupFlowValue12, codexMobileSetupFlowValue13] =
      codexMobileSetupFlowValue4.useState(initialStep ?? null),
    [codexMobileSetupFlowValue14, codexMobileSetupFlowValue15] =
      codexMobileSetupFlowValue4.useState(null),
    [codexMobileSetupFlowValue16] = currentAppInitialSharedFunction0722(
      "local_remote_control_client_id",
    ),
    codexMobileSetupFlowValue17 =
      codexMobileSetupFlowValue12 ??
      codexMobileSetupFlowHelper4({
        remoteControlHostEnabled: codexMobileSetupFlowValue9,
        hasEnrolledRemoteControlClient: codexMobileSetupFlowValue11.data,
      });
  let codexMobileSetupFlowValue18 = codexMobileSetupFlowValue17,
    codexMobileSetupFlowValue19 = currentAppInitialSharedCompatSlotUpperGLowerO(
      codexMobileSetupFlowValue2,
      codexMobileSetupFlowValue18 === "waiting",
    ),
    codexMobileSetupFlowValue20 = codexMobileSetupFlowF(
      codexMobileSetupFlowValue19.data,
      codexMobileSetupFlowValue16,
    ),
    codexMobileSetupFlowValue21 = currentAppInitialSharedCompatSlotLowerQLowerO(
      pullRequestNewThreadCompatSlotUpperSLowerT,
    ),
    codexMobileSetupFlowValue22 =
      codexMobileSetupFlowValue18 === "waiting" &&
      (codexMobileSetupFlowValue14 == null
        ? codexMobileSetupFlowValue20?.length
        : be(codexMobileSetupFlowValue20, codexMobileSetupFlowValue14))
        ? "connected"
        : codexMobileSetupFlowValue18,
    codexMobileSetupFlowValue23 = currentAppInitialSharedCompatSlotLowerQLowerO(
      pullRequestNewThreadCompatSlotLowerXLowerT,
    ),
    codexMobileSetupFlowValue24 =
      codexMobileSetupFlowValue10 === "auto"
        ? codexMobileSetupFlowValue18 === "mfa-required" &&
          codexMobileSetupFlowValue23.data
          ? "allow-host"
          : codexMobileSetupFlowValue22
        : codexMobileSetupFlowValue10,
    codexMobileSetupFlowValue25 = (codexMobileSetupFlowParam20) => {
      imagePickerSchemaCapabilities(
        codexMobileSetupFlowValue6,
        currentAppInitialSharedMember0432,
        {
          action: codexMobileSetupFlowParam20,
          step: codexMobileSetupFlowValue24,
          surface: variant,
        },
      );
    };
  let codexMobileSetupFlowValue26 = codexMobileSetupFlowValue25,
    codexMobileSetupFlowValue27,
    codexMobileSetupFlowValue28;
  codexMobileSetupFlowValue27 = () => {
    let codexMobileSetupFlowValue80 = `${variant}:${codexMobileSetupFlowValue24}`;
    codexMobileSetupFlowValue8.current !== codexMobileSetupFlowValue80 &&
      ((codexMobileSetupFlowValue8.current = codexMobileSetupFlowValue80),
      imagePickerSchemaCapabilities(
        codexMobileSetupFlowValue6,
        currentAppInitialSharedMember0279,
        {
          step: codexMobileSetupFlowValue24,
          surface: variant,
        },
      ));
  };
  codexMobileSetupFlowValue28 = [
    codexMobileSetupFlowValue24,
    codexMobileSetupFlowValue6,
    variant,
  ];
  codexMobileSetupFlowValue4.useEffect(
    codexMobileSetupFlowValue27,
    codexMobileSetupFlowValue28,
  );
  let codexMobileSetupFlowValue29 = () =>
    pullRequestNewThreadCompatSlotLowerBLowerT(codexMobileSetupFlowValue6);
  let codexMobileSetupFlowValue30 = (codexMobileSetupFlowParam22) => {
    codexMobileSetupFlowValue13(
      codexMobileSetupFlowParam22 ? "mfa-required" : "allow-host",
    );
  };
  let codexMobileSetupFlowValue31 = {
    mutationFn: codexMobileSetupFlowValue29,
    onSuccess: codexMobileSetupFlowValue30,
  };
  let codexMobileSetupFlowValue32 =
      currentAppInitialSharedCompatSlotLowerTLowerC(
        codexMobileSetupFlowValue31,
      ),
    codexMobileSetupFlowValue33 = async () => {
      await codexMobileSetupFlowS(
        codexMobileSetupFlowValue6,
        currentAppInitialSharedMember0542,
        true,
      );
      let codexMobileSetupFlowValue79 =
        codexMobileSetupFlowValue6.query.snapshot(codexMobileSetupFlowU);
      return (
        await codexMobileSetupFlowValue79.invalidate({
          exact: true,
          refetchType: "none",
        }),
        codexMobileSetupFlowValue79.fetch()
      );
    };
  let codexMobileSetupFlowValue34 = (codexMobileSetupFlowParam21) => {
    codexMobileSetupFlowValue15(
      new Set(
        codexMobileSetupFlowF(
          codexMobileSetupFlowParam21,
          codexMobileSetupFlowValue16,
        )?.map(codexMobileSetupFlowHelper7),
      ),
    );
    codexMobileSetupFlowValue13("waiting");
  };
  let codexMobileSetupFlowValue35 = (codexMobileSetupFlowParam27) => {
    handleLocalRemoteControlEnableError(
      codexMobileSetupFlowValue6,
      codexMobileSetupFlowParam27,
    );
  };
  let codexMobileSetupFlowValue36 = {
    mutationFn: codexMobileSetupFlowValue33,
    onSuccess: codexMobileSetupFlowValue34,
    onError: codexMobileSetupFlowValue35,
  };
  let codexMobileSetupFlowValue37 =
      currentAppInitialSharedCompatSlotLowerTLowerC(
        codexMobileSetupFlowValue36,
      ),
    codexMobileSetupFlowValue38 = () => {
      codexMobileSetupFlowValue26("allow_host");
      codexMobileSetupFlowValue37.mutate();
    };
  let codexMobileSetupFlowValue39 = codexMobileSetupFlowValue38,
    codexMobileSetupFlowValue40 = codexMobileSetupFlowHelper5([
      codexMobileSetupFlowValue11.error,
      codexMobileSetupFlowValue19.error,
      codexMobileSetupFlowValue21.error,
      codexMobileSetupFlowValue32.error,
      codexMobileSetupFlowValue37.error,
    ]);
  let codexMobileSetupFlowValue41 = codexMobileSetupFlowValue40,
    codexMobileSetupFlowValue42,
    codexMobileSetupFlowValue43;
  codexMobileSetupFlowValue42 = () => {
    codexMobileSetupFlowValue41 &&
      codexMobileSetupFlowValue7("/login", {
        replace: true,
      });
  };
  codexMobileSetupFlowValue43 = [
    codexMobileSetupFlowValue7,
    codexMobileSetupFlowValue41,
  ];
  codexMobileSetupFlowValue4.useEffect(
    codexMobileSetupFlowValue42,
    codexMobileSetupFlowValue43,
  );
  let codexMobileSetupFlowValue44 =
      codexMobileSetupFlowValue32.isPending ||
      codexMobileSetupFlowValue37.isPending ||
      (codexMobileSetupFlowValue21.data === "required" &&
        codexMobileSetupFlowValue23.isLoading),
    codexMobileSetupFlowValue45 =
      codexMobileSetupFlowValue37.isError &&
      !isHandledLocalRemoteControlEnableError(
        codexMobileSetupFlowValue37.error,
      );
  let codexMobileSetupFlowValue46 = codexMobileSetupFlowValue45;
  if (
    (codexMobileSetupFlowValue10 === "auto" &&
      codexMobileSetupFlowValue12 == null &&
      codexMobileSetupFlowValue9 &&
      codexMobileSetupFlowValue11.isLoading) ||
    codexMobileSetupFlowValue41
  )
    return null;
  if (variant === "dialog") {
    let codexMobileSetupFlowValue66 = (codexMobileSetupFlowParam26) => {
      codexMobileSetupFlowParam26 || onClose();
    };
    let codexMobileSetupFlowValue67 = () => {
      codexMobileSetupFlowValue26("skip");
      onClose();
    };
    let codexMobileSetupFlowValue68 = () => {
      codexMobileSetupFlowValue26("start_setup");
      codexMobileSetupFlowValue32.mutate();
    };
    let codexMobileSetupFlowValue69;
    return $.jsx(codexMobileSetupDialogT, {
      open: true,
      showAllowHostError: codexMobileSetupFlowValue46,
      showStartSetupError: codexMobileSetupFlowValue32.isError,
      setupInProgress: codexMobileSetupFlowValue44,
      step: codexMobileSetupFlowValue24,
      onAllowHost: codexMobileSetupFlowValue39,
      onOpenChange: codexMobileSetupFlowValue66,
      onSkip: codexMobileSetupFlowValue67,
      onStartSetup: codexMobileSetupFlowValue68,
    });
  }
  let codexMobileSetupFlowValue47 = () => {
    codexMobileSetupFlowValue26("skip");
    onClose();
  };
  let codexMobileSetupFlowValue48 = () => {
    codexMobileSetupFlowValue26("start_setup");
    codexMobileSetupFlowValue32.mutate();
  };
  return $.jsx(codexMobileSetupFlowHelper8, {
    showAllowHostError: codexMobileSetupFlowValue46,
    showStartSetupError: codexMobileSetupFlowValue32.isError,
    setupInProgress: codexMobileSetupFlowValue44,
    step: codexMobileSetupFlowValue24,
    onAllowHost: codexMobileSetupFlowValue39,
    onFinishSetup: onClose,
    onSkip: codexMobileSetupFlowValue47,
    onStartSetup: codexMobileSetupFlowValue48,
  });
}
function codexMobileSetupFlowHelper7(codexMobileSetupFlowParam25) {
  return codexMobileSetupFlowParam25.clientId;
}
function codexMobileSetupFlowHelper8(codexMobileSetupFlowParam2) {
  let {
      onAllowHost,
      onFinishSetup,
      onSkip,
      onStartSetup,
      setupInProgress,
      showAllowHostError,
      showStartSetupError,
      step,
    } = codexMobileSetupFlowParam2,
    codexMobileSetupFlowValue51 = currentAppInitialSharedCompatSlotUpperKLowerO(
      currentAppInitialSharedCompatSlotUpperE,
    ),
    codexMobileSetupFlowValue52 =
      currentAppInitialSharedMember0781("824038554"),
    codexMobileSetupFlowValue53 = parseWorkspaceRootPathList(),
    codexMobileSetupFlowValue54 = (codexMobileSetupFlowParam17) => {
      imagePickerSchemaCapabilities(
        codexMobileSetupFlowValue51,
        currentAppInitialSharedMember0432,
        {
          action: codexMobileSetupFlowParam17,
          step,
          surface: "page",
        },
      );
    };
  let codexMobileSetupFlowValue55 = codexMobileSetupFlowValue54,
    codexMobileSetupFlowValue56 =
      step === "allow-host" || step === "mfa-required" || step === "waiting"
        ? $.jsx(worktreeNewThreadOrchestratorCompatSlotLowerOLowerT.Header, {
            children: $.jsx(AppgenProjectHeader, {
              start: codexMobileSetupFlowValue52
                ? $.jsx(currentAppInitialSharedMember0924, {
                    id: "codexMobile.setupPage.remoteTitle",
                    defaultMessage: "Set up Remote",
                    description: "Toolbar title shown during Remote setup",
                  })
                : $.jsx(currentAppInitialSharedMember0924, {
                    id: "codexMobile.setupPage.title",
                    defaultMessage: "Set up Codex Mobile",
                    description:
                      "Toolbar title shown during Codex mobile setup",
                  }),
            }),
          })
        : null;
  let codexMobileSetupFlowValue57 = (codexMobileSetupFlowParam8) => {
    codexMobileSetupFlowValue55("continue_on_chatgpt");
    worktreeNewThreadQueryCompatSlotLowerILowerS({
      event: codexMobileSetupFlowParam8,
      href: "https://chatgpt.com/#settings/Security",
      initiator: "open_in_browser_bridge",
    });
  };
  let codexMobileSetupFlowValue58 = () => {
    codexMobileSetupFlowValue55("finish_setup");
    onFinishSetup();
  };
  let codexMobileSetupFlowValue59 = () => {
    codexMobileSetupFlowValue55("manage_connections");
    codexMobileSetupFlowValue53("/settings/connections");
  };
  let codexMobileSetupFlowValue60 = $.jsx(codexMobileSetupDialogI, {
    onAllowHost,
    onContinueOnChatGPT: codexMobileSetupFlowValue57,
    onFinishSetup: codexMobileSetupFlowValue58,
    onManageConnections: codexMobileSetupFlowValue59,
    onSkip,
    onStartSetup,
    setupInProgress,
    showAllowHostError,
    showStartSetupError,
    step,
    variant: "page",
  });
  return (
    <>
      {codexMobileSetupFlowValue56}
      {codexMobileSetupFlowValue60}
    </>
  );
}
var codexMobileSetupFlowValue3, codexMobileSetupFlowValue4, $;
export const codexMobileSetupFlowN = once(() => {
  codexMobileSetupFlowValue3 = currentAppInitialSharedCompatSlotLowerGLowerC();
  remoteControlRefreshSourceEnum();
  currentAppInitialSharedCompatSlotDollarLowerS();
  currentAppInitialSharedCompatSlotUpperGLowerS();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  codexMobileSetupFlowValue4 = toEsModule(
    currentAppInitialSharedCompatSlotUnderscoreLowerC(),
    1,
  );
  intlFormatDateTimeRuntime();
  openAiNativeAppDefinition();
  currentAppInitialSharedControlConnectConnectionRuntime();
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT();
  worktreeNewThreadQueryCompatSlotLowerNLowerS();
  remoteConnectionRuntime0298();
  codexMobileSetupFlowL();
  codexMobileSetupFlowP();
  initLocalRemoteControlErrorHandlingChunk();
  codexMobileSetupFlowO();
  currentAppInitialSharedCompatSlotUpperD();
  currentAppInitialSharedDisplayRuntime();
  remoteConnectionRuntime0472();
  currentAppInitialSharedRuntime0816();
  initAppgenProjectHeaderChunk();
  codexMobileSetupDialogD();
  codexMobileSetupDialogN();
  pullRequestNewThreadCompatSlotLowerYLowerT();
  codexMobileSetupFlowI();
  codexMobileSetupDialogA();
  $ = currentAppInitialSharedCompatSlotLowerLLowerC();
});
export {
  codexMobileSetupFlowC,
  codexMobileSetupFlowD,
  codexMobileSetupFlowF,
  codexMobileSetupFlowI,
  codexMobileSetupFlowL,
  codexMobileSetupFlowO,
  codexMobileSetupFlowP,
  codexMobileSetupFlowS,
  codexMobileSetupFlowU,
};
