// Restored from ref/webview/assets/pets-settings-CeDsTNTI.js
// Current pets settings backing bundle with restored dependency imports.

import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUnderscoreLowerC as _appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC,
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotLowerI,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotLowerU,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotUpperVLowerO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperDLowerM,
  worktreeNewThreadQueryCompatSlotUpperDLowerN,
  worktreeNewThreadQueryCompatSlotUpperELowerM,
  worktreeNewThreadQueryCompatSlotLowerGLowerP,
  worktreeNewThreadQueryCompatSlotLowerHLowerH,
  worktreeNewThreadQueryCompatSlotLowerLLowerS,
  worktreeNewThreadQueryCompatSlotLowerMLowerH,
  worktreeNewThreadQueryCompatSlotLowerMLowerP,
  worktreeNewThreadQueryCompatSlotLowerMLowerR,
  worktreeNewThreadQueryCompatSlotUpperOLowerM,
  worktreeNewThreadQueryCompatSlotUpperOLowerN,
  worktreeNewThreadQueryCompatSlotLowerPLowerR,
  worktreeNewThreadQueryCompatSlotLowerQLowerU,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotLowerULowerS,
  worktreeNewThreadQueryCompatSlotUpperXLowerU,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0542,
  currentAppInitialSharedMember0097,
  analyticsMember0137,
  intlFormatDateTimeRuntime,
  remoteControlRefreshSourceEnum,
  currentAppInitialSharedMember0654,
  currentAppInitialSharedDisplayRuntime,
  remoteConnectionRuntime0298,
  currentAppInitialSharedMember0342,
  currentAppInitialSharedFunction0375,
  currentAppInitialSharedMember0924,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initAvatarOverlayOpenStateChunk,
  avatarOverlayAnalytics,
} from "./automations-page-current-runtime";
import { initCodexAvatarChunk, CodexAvatar } from "../utils/codex-avatar";
import {
  pullRequestNewThreadCompatSlotLowerBLowerN,
  pullRequestNewThreadCompatSlotLowerYLowerN,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotUpperFLowerN,
  appMainCurrentCompatSlotUpperILowerN,
} from "./app-main-current-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotUpperH,
  appgenLibraryHotDjo67r4nCompatSlotLowerILowerR,
  appgenLibraryHotDjo67r4nCompatSlotLowerNLowerR,
  appgenLibraryHotDjo67r4nCompatSlotUpperV,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  initRecommendedSkillStatsigOverridesChunk,
  useRecommendedSkillStatsigOverrides,
  getRecommendedSkillStatsigOverride,
} from "../plugins/recommended-skill-statsig-overrides";
import {
  generalAppearanceCurrentCompatSlotLowerD,
  generalAppearanceCurrentCompatSlotLowerF,
  generalAppearanceCurrentCompatSlotUpperJ,
  generalAppearanceCurrentCompatSlotLowerL,
  generalAppearanceCurrentCompatSlotLowerQ,
  generalAppearanceCurrentCompatSlotLowerU,
} from "../runtime/current-app-initial/general-appearance-current-runtime";
import {
  initSettingsContentLayoutChunk,
  SettingsContentLayout,
} from "../runtime/current-app-initial/settings-section-layout-runtime";
import {
  DEFAULT_AVATARS,
  initDefaultAvatarDefinitionsChunk,
  useSelectedAvatar,
  initAvatarSelectionStateChunk,
} from "../features/custom-avatars-query";
import {
  avatarOverlayOpenSignal,
  initAvatarOverlayOpenStateChunk as appInitialAppMainPetsSettingsT,
} from "../features/avatar-overlay-open-state";
import {
  initCustomAvatarsQueryChunk,
  CUSTOM_AVATARS_QUERY_KEY,
} from "../features/custom-avatars-query";
import {
  initUseAvatarOptionsChunk,
  useAvatarOptions,
} from "../utils/use-avatar-options";
function petsSettingsHelper1(petsSettingsParam5) {
  let { avatar, className, size = "md" } = petsSettingsParam5,
    petsSettingsValue76 = size === "sm" ? "size-8" : "size-16",
    petsSettingsValue77 = worktreeNewThreadQueryCompatSlotLowerMLowerH(
      "flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border bg-token-bg-secondary",
      petsSettingsValue76,
      className,
    );
  let petsSettingsValue78 = avatar?.id ?? "default",
    petsSettingsValue79 = avatar?.assetRef,
    petsSettingsValue80 = size === "sm" ? "scale-[0.42]" : "scale-75",
    petsSettingsValue81 = avatar?.spritesheetUrl,
    petsSettingsValue82 = petsSettingsValue2.jsx(CodexAvatar, {
      assetRef: petsSettingsValue79,
      className: petsSettingsValue80,
      spritesheetUrl: petsSettingsValue81,
    });
  return (
    <div className={petsSettingsValue77} data-avatar-id={petsSettingsValue78}>
      {petsSettingsValue82}
    </div>
  );
}
var petsSettingsValue1,
  petsSettingsValue2,
  petsSettingsValue3 = once(() => {
    petsSettingsValue1 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    initCodexAvatarChunk();
    petsSettingsValue2 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function petsSettingsHelper2(petsSettingsParam2) {
  let { avatarDirectory } = petsSettingsParam2,
    petsSettingsValue51 = currentAppInitialSharedCompatSlotUpperKLowerO(
      currentAppInitialSharedCompatSlotUpperE,
    ),
    petsSettingsValue52 = currentAppInitialSharedFunction0375(),
    petsSettingsValue53 = () => {
      petsSettingsValue51
        .get(worktreeNewThreadQueryCompatSlotLowerGLowerP)
        .danger(
          petsSettingsValue52.formatMessage({
            id: "settings.pets.custom.openFolderError",
            defaultMessage: "Unable to open pet folder",
            description: "Toast shown when opening the custom pet folder fails",
          }),
        );
    };
  let petsSettingsValue54 = petsSettingsValue53,
    petsSettingsValue55 = (petsSettingsParam13) => {
      petsSettingsParam13.success || petsSettingsValue54();
    };
  let petsSettingsValue56 = {
    onSuccess: petsSettingsValue55,
    onError: petsSettingsValue54,
  };
  let { mutate } = currentAppInitialSharedCompatSlotLowerU(
      "open-file",
      petsSettingsValue56,
    ),
    petsSettingsValue57 = petsSettingsValue5.jsx(
      currentAppInitialSharedMember0924,
      {
        id: "settings.pets.custom.title",
        defaultMessage: "Custom pets",
        description: "Heading for custom pet settings",
      },
    );
  let petsSettingsValue58 = (
    <span className="font-mono text-xs break-all">{avatarDirectory}</span>
  );
  let petsSettingsValue59 = () => {
    mutate({
      path: avatarDirectory,
      cwd: null,
      target: "fileManager",
      openMode: "workspace",
    });
  };
  let petsSettingsValue60, petsSettingsValue61;
  petsSettingsValue60 = petsSettingsValue5.jsx(
    currentAppInitialSharedMember0924,
    {
      id: "settings.pets.custom.openFolder",
      defaultMessage: "Open folder",
      description: "Button label to open the local custom pet folder",
    },
  );
  petsSettingsValue61 = petsSettingsValue5.jsx(
    worktreeNewThreadQueryCompatSlotUpperDLowerN,
    {
      className: "icon-2xs",
    },
  );
  let petsSettingsValue62 = petsSettingsValue5.jsxs(
    worktreeNewThreadQueryCompatSlotUpperTLowerM,
    {
      color: "ghost",
      onClick: petsSettingsValue59,
      size: "toolbar",
      children: [petsSettingsValue60, petsSettingsValue61],
    },
  );
  return petsSettingsValue5.jsx(appMainCurrentCompatSlotUpperFLowerN, {
    label: petsSettingsValue57,
    description: petsSettingsValue58,
    control: petsSettingsValue62,
  });
}
var petsSettingsValue4,
  petsSettingsValue5,
  petsSettingsValue6 = once(() => {
    petsSettingsValue4 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotLowerMLowerP();
    worktreeNewThreadQueryCompatSlotUpperOLowerN();
    currentAppInitialSharedCompatSlotUpperD();
    appMainCurrentCompatSlotUpperILowerN();
    _appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC();
    petsSettingsValue5 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function petsSettingsHelper3(petsSettingsParam4) {
  let {
      avatarDirectory,
      avatarOptions,
      isCreatingCustomAvatar = false,
      isCustomAvatarLoadError = false,
      isLoadingCustomAvatars = false,
      onCreateCustomAvatar,
      onRefreshCustomAvatars,
    } = petsSettingsParam4,
    petsSettingsValue69 =
      avatarOptions === undefined ? DEFAULT_AVATARS : avatarOptions;
  return petsSettingsValue8.jsx(worktreeNewThreadQueryCompatSlotLowerLLowerS, {
    electron: true,
    children: petsSettingsValue8.jsx(petsSettingsHelper4, {
      avatarDirectory,
      avatarOptions: petsSettingsValue69,
      isCreatingCustomAvatar: isCreatingCustomAvatar,
      isCustomAvatarLoadError: isCustomAvatarLoadError,
      isLoadingCustomAvatars: isLoadingCustomAvatars,
      onCreateCustomAvatar,
      onRefreshCustomAvatars,
    }),
  });
}
function petsSettingsHelper4(petsSettingsParam1) {
  let {
      avatarDirectory,
      avatarOptions,
      isCreatingCustomAvatar,
      isCustomAvatarLoadError,
      isLoadingCustomAvatars,
      onCreateCustomAvatar,
      onRefreshCustomAvatars,
    } = petsSettingsParam1,
    petsSettingsValue19 = currentAppInitialSharedCompatSlotLowerQLowerO(
      appInitialAppMainPetsSettingsT,
    ),
    petsSettingsValue20 =
      currentAppInitialSharedCompatSlotLowerQLowerO(analyticsMember0137),
    { selectedAvatar, setSelectedAvatarId } = useSelectedAvatar(avatarOptions),
    petsSettingsValue21,
    petsSettingsValue22,
    petsSettingsValue23,
    petsSettingsValue24,
    petsSettingsValue25,
    petsSettingsValue26,
    petsSettingsValue27,
    petsSettingsValue28,
    petsSettingsValue29,
    petsSettingsValue30;
  {
    let petsSettingsValue37 = avatarOptions.filter(petsSettingsHelper6),
      petsSettingsValue38 = avatarOptions.filter(petsSettingsHelper5),
      petsSettingsValue39 = (petsSettingsParam6, petsSettingsParam7) => {
        petsSettingsValue20.logProductEvent(
          currentAppInitialSharedMember0097,
          avatarOverlayAnalytics({
            action: petsSettingsParam6,
            selectedAvatar: petsSettingsParam7,
            source:
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
          }),
        );
      };
    let petsSettingsValue40 = petsSettingsValue39,
      petsSettingsValue41 = (petsSettingsParam10) => {
        setSelectedAvatarId(petsSettingsParam10.id);
        petsSettingsValue40(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED,
          petsSettingsParam10,
        );
      };
    let petsSettingsValue42 = petsSettingsValue41;
    petsSettingsValue30 = "flex flex-col gap-[var(--padding-panel)]";
    petsSettingsValue23 = generalAppearanceCurrentCompatSlotLowerD;
    petsSettingsValue22 = generalAppearanceCurrentCompatSlotLowerD.Content;
    petsSettingsValue21 = generalAppearanceCurrentCompatSlotLowerQ;
    petsSettingsValue24 =
      "flex flex-col divide-y divide-token-border bg-token-bg-secondary/20";
    let petsSettingsValue43 = onCreateCustomAvatar
      ? petsSettingsValue8.jsx(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
          color: "secondary",
          loading: isCreatingCustomAvatar,
          onClick: () => {
            petsSettingsValue40(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED,
              selectedAvatar,
            );
            onCreateCustomAvatar();
          },
          size: "toolbar",
          children: petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
            id: "settings.pets.custom.create.title",
            defaultMessage: "Create your own pet",
            description:
              "Button label for creating a custom Codex pet from settings",
          }),
        })
      : null;
    let petsSettingsValue44 = onRefreshCustomAvatars
      ? petsSettingsValue8.jsx(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
          color: "secondary",
          onClick: onRefreshCustomAvatars,
          size: "toolbar",
          children: petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
            id: "settings.pets.refresh",
            defaultMessage: "Refresh",
            description:
              "Button label to refresh custom pets from local manifests",
          }),
        })
      : null;
    let petsSettingsValue45 = () => {
      petsSettingsValue40(
        petsSettingsValue19
          ? currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
          : currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
        selectedAvatar,
      );
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-open",
        {},
      );
    };
    let petsSettingsValue46 = petsSettingsValue19
      ? petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
          id: "settings.personalization.pets.tuckAwayPet",
          defaultMessage: "Tuck Away Pet",
          description: "Button that closes the floating pet overlay",
        })
      : petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
          id: "settings.personalization.pets.openPet",
          defaultMessage: "Wake Pet",
          description: "Button that opens the floating pet overlay",
        });
    let petsSettingsValue47;
    petsSettingsValue47 = petsSettingsValue8.jsx(
      worktreeNewThreadQueryCompatSlotUpperTLowerM,
      {
        color: "secondary",
        onClick: petsSettingsValue45,
        size: "toolbar",
        children: petsSettingsValue46,
      },
    );
    petsSettingsValue25 = (
      <div className="flex justify-end gap-2 p-3">
        {petsSettingsValue43}
        {petsSettingsValue44}
        {petsSettingsValue47}
      </div>
    );
    petsSettingsValue26 = isLoadingCustomAvatars ? (
      <div className="flex items-center gap-2 p-3 text-sm text-token-text-secondary">
        {petsSettingsValue8.jsx(worktreeNewThreadQueryCompatSlotUpperDLowerM, {
          className: "icon-xs",
        })}
        {petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
          id: "settings.pets.loadingCustom",
          defaultMessage: "Loading custom pets",
          description: "Message shown while loading custom pet manifests",
        })}
      </div>
    ) : null;
    petsSettingsValue27 = isCustomAvatarLoadError ? (
      <div className="p-3 text-sm text-token-text-secondary">
        {petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
          id: "settings.pets.loadCustomError",
          defaultMessage: "Unable to load custom pets",
          description: "Message shown when custom pet manifests fail to load",
        })}
      </div>
    ) : null;
    let petsSettingsValue48;
    petsSettingsValue48 = (petsSettingsParam8) =>
      petsSettingsValue8.jsx(
        petsSettingsHelper7,
        {
          avatar: petsSettingsParam8,
          isSelected: petsSettingsParam8.id === selectedAvatar.id,
          onSelectAvatar: petsSettingsValue42,
        },
        petsSettingsParam8.id,
      );
    petsSettingsValue28 = petsSettingsValue38.map(petsSettingsValue48);
    let petsSettingsValue49;
    petsSettingsValue49 = (petsSettingsParam9) =>
      petsSettingsValue8.jsx(
        petsSettingsHelper7,
        {
          avatar: petsSettingsParam9,
          isSelected: petsSettingsParam9.id === selectedAvatar.id,
          onSelectAvatar: petsSettingsValue42,
        },
        petsSettingsParam9.id,
      );
    petsSettingsValue29 = petsSettingsValue37.map(petsSettingsValue49);
  }
  let petsSettingsValue31 =
    avatarDirectory == null
      ? null
      : petsSettingsValue8.jsx(petsSettingsHelper2, {
          avatarDirectory,
        });
  let petsSettingsValue32 = (
    <div className={petsSettingsValue24}>
      {petsSettingsValue25}
      {petsSettingsValue26}
      {petsSettingsValue27}
      {petsSettingsValue28}
      {petsSettingsValue29}
      {petsSettingsValue31}
    </div>
  );
  let petsSettingsValue33 = petsSettingsValue8.jsx(petsSettingsValue21, {
    children: petsSettingsValue32,
  });
  let petsSettingsValue34 = petsSettingsValue8.jsx(petsSettingsValue22, {
    children: petsSettingsValue33,
  });
  let petsSettingsValue35 = petsSettingsValue8.jsx(petsSettingsValue23, {
    children: petsSettingsValue34,
  });
  return (
    <section className={petsSettingsValue30}>{petsSettingsValue35}</section>
  );
}
function petsSettingsHelper5(petsSettingsParam12) {
  return petsSettingsParam12.id.startsWith("custom:");
}
function petsSettingsHelper6(petsSettingsParam11) {
  return !petsSettingsParam11.id.startsWith("custom:");
}
function petsSettingsHelper7(petsSettingsParam3) {
  let { avatar, isSelected, onSelectAvatar } = petsSettingsParam3,
    petsSettingsValue65 = petsSettingsValue8.jsx(petsSettingsHelper1, {
      avatar,
    });
  let petsSettingsValue66 = isSelected
    ? petsSettingsValue8.jsx(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
        color: "secondary",
        disabled: true,
        size: "toolbar",
        children: petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
          id: "settings.personalization.avatars.selected",
          defaultMessage: "Selected",
          description: "Label for the selected avatar",
        }),
      })
    : petsSettingsValue8.jsx(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
        color: "secondary",
        size: "toolbar",
        onClick: () => {
          onSelectAvatar(avatar);
        },
        children: petsSettingsValue8.jsx(currentAppInitialSharedMember0924, {
          id: "settings.personalization.avatars.select",
          defaultMessage: "Select",
          description: "Button label to select an avatar",
        }),
      });
  return petsSettingsValue8.jsx(appMainCurrentCompatSlotUpperFLowerN, {
    icon: petsSettingsValue65,
    label: avatar.displayName,
    description: avatar.description,
    control: petsSettingsValue66,
  });
}
var petsSettingsValue7,
  petsSettingsValue8,
  petsSettingsValue9 = once(() => {
    petsSettingsValue7 = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteControlRefreshSourceEnum();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    intlFormatDateTimeRuntime();
    petsSettingsValue3();
    initAvatarOverlayOpenStateChunk();
    avatarOverlayOpenSignal();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotUpperOLowerM();
    worktreeNewThreadQueryCompatSlotLowerULowerS();
    currentAppInitialSharedCompatSlotUnderscore();
    remoteConnectionRuntime0298();
    generalAppearanceCurrentCompatSlotLowerF();
    appMainCurrentCompatSlotUpperILowerN();
    generalAppearanceCurrentCompatSlotUpperJ();
    initDefaultAvatarDefinitionsChunk();
    initAvatarSelectionStateChunk();
    petsSettingsValue6();
    petsSettingsValue8 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
async function petsSettingsHelper8({
  forceReloadSkills,
  skillStatsigOverride,
}) {
  let petsSettingsValue91 = await currentAppInitialSharedCompatSlotLowerI(
    "install-recommended-skill",
    {
      params: {
        forceReinstall: true,
        hostId: currentAppInitialSharedMember0542,
        installRoot: null,
        repoPath: petsSettingsValue11,
        skillId: petsSettingsValue10,
        skillStatsigOverride,
        source: "bundled",
      },
    },
  );
  if (!petsSettingsValue91.success || petsSettingsValue91.destination == null)
    throw Error(petsSettingsValue91.error ?? "Unable to install Hatch Pet");
  return (
    await forceReloadSkills(),
    `${worktreeNewThreadQueryCompatSlotLowerQLowerU({
      name: petsSettingsValue10,
      path: generalAppearanceCurrentCompatSlotLowerU(
        petsSettingsValue91.destination,
        "SKILL.md",
      ),
    })} create a pet based on what you know about me`
  );
}
var petsSettingsValue10,
  petsSettingsValue11,
  petsSettingsValue12 = once(() => {
    generalAppearanceCurrentCompatSlotLowerL();
    currentAppInitialSharedDisplayRuntime();
    worktreeNewThreadQueryCompatSlotUpperXLowerU();
    _appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wC();
    petsSettingsValue10 = "hatch-pet";
    petsSettingsValue11 = "skills/.curated/hatch-pet";
  });
function petsSettingsHelper9() {
  return petsSettingsValue15.jsx(worktreeNewThreadQueryCompatSlotLowerLLowerS, {
    electron: true,
    children: petsSettingsValue15.jsx(petsSettingsHelper10, {}),
  });
}
function petsSettingsHelper10() {
  let petsSettingsValue84 = currentAppInitialSharedCompatSlotUpperKLowerO(
      currentAppInitialSharedCompatSlotUpperE,
    ),
    [petsSettingsValue85, petsSettingsValue86] =
      petsSettingsValue14.useState(false),
    { avatarDirectory, avatarOptions, isError, isLoading } =
      initUseAvatarOptionsChunk(),
    petsSettingsValue87 = pullRequestNewThreadCompatSlotLowerBLowerN(),
    petsSettingsValue88 = appgenLibraryHotDjo67r4nCompatSlotLowerILowerR(),
    { forceReload } = worktreeNewThreadQueryCompatSlotLowerMLowerR(
      undefined,
      currentAppInitialSharedMember0542,
    ),
    petsSettingsValue89 = useRecommendedSkillStatsigOverrides(),
    petsSettingsValue90 = async () => {
      petsSettingsValue86(true);
      try {
        petsSettingsValue88({
          prefillPrompt: await petsSettingsHelper8({
            forceReloadSkills: forceReload,
            skillStatsigOverride: getRecommendedSkillStatsigOverride(
              petsSettingsValue89,
              "hatch-pet",
            ),
          }),
        });
      } catch {
        petsSettingsValue84
          .get(worktreeNewThreadQueryCompatSlotLowerGLowerP)
          .danger(
            petsSettingsValue15.jsx(currentAppInitialSharedMember0924, {
              id: "settings.pets.createCustom.error",
              defaultMessage: "Unable to start pet creation",
              description:
                "Toast shown when the Hatch Pet skill cannot be installed",
            }),
          );
      } finally {
        petsSettingsValue86(false);
      }
    };
  return petsSettingsValue15.jsx(petsSettingsHelper3, {
    avatarDirectory,
    avatarOptions,
    isCreatingCustomAvatar: petsSettingsValue85,
    isCustomAvatarLoadError: isError,
    isLoadingCustomAvatars: isLoading,
    onCreateCustomAvatar: () => {
      petsSettingsValue90();
    },
    onRefreshCustomAvatars: () => {
      petsSettingsValue87(CUSTOM_AVATARS_QUERY_KEY);
    },
  });
}
var petsSettingsValue13,
  petsSettingsValue14,
  petsSettingsValue15,
  petsSettingsValue16 = once(() => {
    petsSettingsValue13 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    petsSettingsValue14 = toEsModule(
      currentAppInitialSharedCompatSlotUnderscoreLowerC(),
      1,
    );
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotLowerMLowerP();
    worktreeNewThreadQueryCompatSlotLowerULowerS();
    appgenLibraryHotDjo67r4nCompatSlotLowerNLowerR();
    pullRequestNewThreadCompatSlotLowerYLowerN();
    currentAppInitialSharedCompatSlotUpperD();
    currentAppInitialSharedDisplayRuntime();
    initRecommendedSkillStatsigOverridesChunk();
    worktreeNewThreadQueryCompatSlotLowerPLowerR();
    petsSettingsValue9();
    petsSettingsValue12();
    initCustomAvatarsQueryChunk();
    useAvatarOptions();
    petsSettingsValue15 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
export function PetsSettings() {
  return $.jsx(SettingsContentLayout, {
    title: $.jsx(appgenLibraryHotDjo67r4nCompatSlotUpperV, {
      slug: "pets",
    }),
    children: $.jsx(petsSettingsHelper9, {}),
  });
}
var petsSettingsValue17, $;
once(() => {
  petsSettingsValue17 = currentAppInitialSharedCompatSlotLowerGLowerC();
  petsSettingsValue16();
  initSettingsContentLayoutChunk();
  appgenLibraryHotDjo67r4nCompatSlotUpperH();
  $ = currentAppInitialSharedCompatSlotLowerLLowerC();
})();
