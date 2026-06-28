// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// App shell motion sequence helper restored from the bundled motion runtime.
// Semantic implementation for app shell motion sequence helpers.
import * as motionRuntime from "../../vendor/framer-motion-single-value";
const motionDefaultOffsetTimes = motionRuntime["$"];
const ObjectVisualElementBase = motionRuntime["_singleValueU"];
const mixMotionProgress = motionRuntime["singleValueBt"];
const HtmlVisualElement = motionRuntime["singleValueC"];
const visualElementStore = motionRuntime["singleValueD"];
const fillOffsetTimes = motionRuntime["singleValueEt"];
const createEmptyViewportBox = motionRuntime["singleValueF"];
const isMotionValue = motionRuntime["singleValueH"];
const isMotionArray = motionRuntime["singleValueHt"];
const mixMotionNumber = motionRuntime["singleValueIt"];
const MotionValue = motionRuntime["singleValueK"];
const ObjectVisualElement = motionRuntime["singleValueL"];
const animateVisualElement = motionRuntime["singleValueN"];
const removeMotionItem = motionRuntime["singleValueDt"];
const createSpringGenerator = motionRuntime["singleValueNt"];
const createGeneratorDurationConfig = motionRuntime["singleValueRt"];
const animateSingleMotionValue = motionRuntime["__singleValueT"];
const isDomElement = motionRuntime["singleValueU"];
const secondsToMilliseconds = motionRuntime["singleValueVt"];
const isHtmlElement = motionRuntime["singleValueW"];
const invariant = motionRuntime["singleValueWt"];
const resolveMotionElements = motionRuntime["singleValueY"];
const isGeneratorFactory = motionRuntime["singleValueZ"];
var appShellStateState1 = (
  appShellStateInput87,
  appShellStateInput88,
  appShellStateInput89,
) => {
  let appShellStateState113 = appShellStateInput88 - appShellStateInput87;
  return (
    ((((appShellStateInput89 - appShellStateInput87) % appShellStateState113) +
      appShellStateState113) %
      appShellStateState113) +
    appShellStateInput87
  );
};
function appShellStateHelper1(appShellStateInput100, appShellStateInput101) {
  return isMotionArray(appShellStateInput100)
    ? appShellStateInput100[
        appShellStateState1(
          0,
          appShellStateInput100.length,
          appShellStateInput101,
        )
      ]
    : appShellStateInput100;
}
var appShellStateState2 = class {
  constructor(appShellStateInput67) {
    ((this.stop = () => this.runAll(`stop`)),
      (this.animations = appShellStateInput67.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((item) => item.finished));
  }
  getAll(appShellStateInput116) {
    return this.animations[0][appShellStateInput116];
  }
  setAll(appShellStateInput71, appShellStateInput72) {
    for (
      let appShellStateState111 = 0;
      appShellStateState111 < this.animations.length;
      appShellStateState111++
    )
      this.animations[appShellStateState111][appShellStateInput71] =
        appShellStateInput72;
  }
  attachTimeline(appShellStateInput30) {
    let appShellStateState89 = this.animations.map((item) =>
      item.attachTimeline(appShellStateInput30),
    );
    return () => {
      appShellStateState89.forEach((item, index) => {
        (item && item(), this.animations[index].stop());
      });
    };
  }
  get time() {
    return this.getAll(`time`);
  }
  set time(appShellStateInput123) {
    this.setAll(`time`, appShellStateInput123);
  }
  get speed() {
    return this.getAll(`speed`);
  }
  set speed(appShellStateInput119) {
    this.setAll(`speed`, appShellStateInput119);
  }
  get state() {
    return this.getAll(`state`);
  }
  get startTime() {
    return this.getAll(`startTime`);
  }
  get duration() {
    return appShellStateHelper2(this.animations, `duration`);
  }
  get iterationDuration() {
    return appShellStateHelper2(this.animations, `iterationDuration`);
  }
  runAll(appShellStateInput105) {
    this.animations.forEach((item) => item[appShellStateInput105]());
  }
  play() {
    this.runAll(`play`);
  }
  pause() {
    this.runAll(`pause`);
  }
  cancel() {
    this.runAll(`cancel`);
  }
  complete() {
    this.runAll(`complete`);
  }
};
function appShellStateHelper2(appShellStateInput45, appShellStateInput46) {
  let appShellStateState94 = 0;
  for (
    let appShellStateState107 = 0;
    appShellStateState107 < appShellStateInput45.length;
    appShellStateState107++
  ) {
    let appShellStateState116 =
      appShellStateInput45[appShellStateState107][appShellStateInput46];
    appShellStateState116 !== null &&
      appShellStateState116 > appShellStateState94 &&
      (appShellStateState94 = appShellStateState116);
  }
  return appShellStateState94;
}
var appShellStateState3 = class extends appShellStateState2 {
  then(appShellStateInput94, appShellStateInput95) {
    return this.finished.finally(appShellStateInput94).then(() => {});
  }
};
function appShellStateHelper3(appShellStateInput93) {
  return (
    typeof appShellStateInput93 == `object` &&
    !Array.isArray(appShellStateInput93)
  );
}
function appShellStateHelper4(
  appShellStateInput31,
  appShellStateInput32,
  appShellStateInput33,
  appShellStateInput34,
) {
  return typeof appShellStateInput31 == `string` &&
    appShellStateHelper3(appShellStateInput32)
    ? resolveMotionElements(
        appShellStateInput31,
        appShellStateInput33,
        appShellStateInput34,
      )
    : appShellStateInput31 instanceof NodeList
      ? Array.from(appShellStateInput31)
      : Array.isArray(appShellStateInput31)
        ? appShellStateInput31
        : [appShellStateInput31];
}
function appShellStateHelper5(
  appShellStateInput120,
  appShellStateInput121,
  appShellStateInput122,
) {
  return appShellStateInput120 * (appShellStateInput121 + 1);
}
function appShellStateHelper6(
  appShellStateInput23,
  appShellStateInput24,
  appShellStateInput25,
  appShellStateInput26,
) {
  return typeof appShellStateInput24 == `number`
    ? appShellStateInput24
    : appShellStateInput24.startsWith(`-`) ||
        appShellStateInput24.startsWith(`+`)
      ? Math.max(0, appShellStateInput23 + parseFloat(appShellStateInput24))
      : appShellStateInput24 === `<`
        ? appShellStateInput25
        : appShellStateInput24.startsWith(`<`)
          ? Math.max(
              0,
              appShellStateInput25 + parseFloat(appShellStateInput24.slice(1)),
            )
          : (appShellStateInput26.get(appShellStateInput24) ??
            appShellStateInput23);
}
function appShellStateHelper7(
  appShellStateInput61,
  appShellStateInput62,
  appShellStateInput63,
) {
  for (
    let appShellStateState104 = 0;
    appShellStateState104 < appShellStateInput61.length;
    appShellStateState104++
  ) {
    let appShellStateState114 = appShellStateInput61[appShellStateState104];
    appShellStateState114.at > appShellStateInput62 &&
      appShellStateState114.at < appShellStateInput63 &&
      (removeMotionItem(appShellStateInput61, appShellStateState114),
      appShellStateState104--);
  }
}
function appShellStateHelper8(
  appShellStateInput39,
  appShellStateInput40,
  appShellStateInput41,
  appShellStateInput42,
  appShellStateInput43,
  appShellStateInput44,
) {
  appShellStateHelper7(
    appShellStateInput39,
    appShellStateInput43,
    appShellStateInput44,
  );
  for (
    let appShellStateState105 = 0;
    appShellStateState105 < appShellStateInput40.length;
    appShellStateState105++
  )
    appShellStateInput39.push({
      value: appShellStateInput40[appShellStateState105],
      at: mixMotionNumber(
        appShellStateInput43,
        appShellStateInput44,
        appShellStateInput42[appShellStateState105],
      ),
      easing: appShellStateHelper1(appShellStateInput41, appShellStateState105),
    });
}
function appShellStateHelper9(appShellStateInput82, appShellStateInput83) {
  for (
    let appShellStateState117 = 0;
    appShellStateState117 < appShellStateInput82.length;
    appShellStateState117++
  )
    appShellStateInput82[appShellStateState117] =
      appShellStateInput82[appShellStateState117] / (appShellStateInput83 + 1);
}
function appShellStateHelper10(appShellStateInput47, appShellStateInput48) {
  return appShellStateInput47.at === appShellStateInput48.at
    ? appShellStateInput47.value === null
      ? 1
      : appShellStateInput48.value === null
        ? -1
        : 0
    : appShellStateInput47.at - appShellStateInput48.at;
}
var defaultSequenceEase = `easeInOut`,
  appShellStateState4 = 20;
function appShellStateHelper11(
  appShellStateInput1,
  { defaultTransition = {}, ...rest } = {},
  appShellStateInput2,
  appShellStateInput3,
) {
  let appShellStateState22 = defaultTransition.duration || 0.3,
    appShellStateState23 = new Map(),
    appShellStateState24 = new Map(),
    appShellStateState25 = {},
    appShellStateState26 = new Map(),
    appShellStateState27 = 0,
    appShellStateState28 = 0,
    appShellStateState29 = 0;
  for (
    let appShellStateState30 = 0;
    appShellStateState30 < appShellStateInput1.length;
    appShellStateState30++
  ) {
    let appShellStateState31 = appShellStateInput1[appShellStateState30];
    if (typeof appShellStateState31 == `string`) {
      appShellStateState26.set(appShellStateState31, appShellStateState28);
      continue;
    } else if (!Array.isArray(appShellStateState31)) {
      appShellStateState26.set(
        appShellStateState31.name,
        appShellStateHelper6(
          appShellStateState28,
          appShellStateState31.at,
          appShellStateState27,
          appShellStateState26,
        ),
      );
      continue;
    }
    let [
      appShellStateState32,
      appShellStateState33,
      appShellStateState34 = {},
    ] = appShellStateState31;
    appShellStateState34.at !== void 0 &&
      (appShellStateState28 = appShellStateHelper6(
        appShellStateState28,
        appShellStateState34.at,
        appShellStateState27,
        appShellStateState26,
      ));
    let appShellStateState35 = 0,
      appShellStateState36 = (
        appShellStateInput4,
        appShellStateInput5,
        appShellStateInput6,
        appShellStateInput7 = 0,
        appShellStateInput8 = 0,
      ) => {
        let appShellStateState37 = appShellStateHelper13(appShellStateInput4),
          {
            delay = 0,
            times = motionDefaultOffsetTimes(appShellStateState37),
            type = `keyframes`,
            repeat: repeat,
            repeatType: repeatType,
            repeatDelay: appShellStateState38 = 0,
            ..._rest
          } = appShellStateInput5,
          { ease = defaultTransition.ease || `easeOut`, duration: duration } =
            appShellStateInput5,
          appShellStateState39 =
            typeof delay == `function`
              ? delay(appShellStateInput7, appShellStateInput8)
              : delay,
          appShellStateState40 = appShellStateState37.length,
          appShellStateState41 = isGeneratorFactory(type)
            ? type
            : appShellStateInput3?.[type || `keyframes`];
        if (appShellStateState40 <= 2 && appShellStateState41) {
          let appShellStateState79 = 100;
          if (
            appShellStateState40 === 2 &&
            appShellStateState6(appShellStateState37)
          ) {
            let appShellStateState112 =
              appShellStateState37[1] - appShellStateState37[0];
            appShellStateState79 = Math.abs(appShellStateState112);
          }
          let appShellStateState80 = {
            ..._rest,
          };
          duration !== void 0 &&
            (appShellStateState80.duration = secondsToMilliseconds(duration));
          let appShellStateState81 = createGeneratorDurationConfig(
            appShellStateState80,
            appShellStateState79,
            appShellStateState41,
          );
          ((ease = appShellStateState81.ease),
            (duration = appShellStateState81.duration));
        }
        duration ??= appShellStateState22;
        let appShellStateState42 = appShellStateState28 + appShellStateState39;
        times.length === 1 && times[0] === 0 && (times[1] = 1);
        let appShellStateState43 = times.length - appShellStateState37.length;
        if (
          (appShellStateState43 > 0 &&
            fillOffsetTimes(times, appShellStateState43),
          appShellStateState37.length === 1 &&
            appShellStateState37.unshift(null),
          repeat)
        ) {
          (invariant(
            repeat < appShellStateState4,
            `Repeat count too high, must getTimelineTrack less than 20`,
            `repeat-count-high`,
          ),
            (duration = appShellStateHelper5(duration, repeat)));
          let appShellStateState54 = [...appShellStateState37],
            appShellStateState55 = [...times];
          ease = Array.isArray(ease) ? [...ease] : [ease];
          let appShellStateState56 = [...ease];
          for (
            let appShellStateState88 = 0;
            appShellStateState88 < repeat;
            appShellStateState88++
          ) {
            appShellStateState37.push(...appShellStateState54);
            for (
              let appShellStateState102 = 0;
              appShellStateState102 < appShellStateState54.length;
              appShellStateState102++
            )
              (times.push(
                appShellStateState55[appShellStateState102] +
                  (appShellStateState88 + 1),
              ),
                ease.push(
                  appShellStateState102 === 0
                    ? `linear`
                    : appShellStateHelper1(
                        appShellStateState56,
                        appShellStateState102 - 1,
                      ),
                ));
          }
          appShellStateHelper9(times, repeat);
        }
        let appShellStateState44 = appShellStateState42 + duration;
        (appShellStateHelper8(
          appShellStateInput6,
          appShellStateState37,
          ease,
          times,
          appShellStateState42,
          appShellStateState44,
        ),
          (appShellStateState35 = Math.max(
            appShellStateState39 + duration,
            appShellStateState35,
          )),
          (appShellStateState29 = Math.max(
            appShellStateState44,
            appShellStateState29,
          )));
      };
    if (isMotionValue(appShellStateState32)) {
      let appShellStateState115 = appShellStateHelper12(
        appShellStateState32,
        appShellStateState24,
      );
      appShellStateState36(
        appShellStateState33,
        appShellStateState34,
        getTimelineTrack(`default`, appShellStateState115),
      );
    } else {
      let appShellStateState85 = appShellStateHelper4(
          appShellStateState32,
          appShellStateState33,
          appShellStateInput2,
          appShellStateState25,
        ),
        appShellStateState86 = appShellStateState85.length;
      for (
        let appShellStateState92 = 0;
        appShellStateState92 < appShellStateState86;
        appShellStateState92++
      ) {
        ((appShellStateState33 = appShellStateState33),
          (appShellStateState34 = appShellStateState34));
        let appShellStateState97 = appShellStateState85[appShellStateState92],
          appShellStateState98 = appShellStateHelper12(
            appShellStateState97,
            appShellStateState24,
          );
        for (let appShellStateState118 in appShellStateState33)
          appShellStateState36(
            appShellStateState33[appShellStateState118],
            appShellStateHelper14(appShellStateState34, appShellStateState118),
            getTimelineTrack(appShellStateState118, appShellStateState98),
            appShellStateState92,
            appShellStateState86,
          );
      }
    }
    ((appShellStateState27 = appShellStateState28),
      (appShellStateState28 += appShellStateState35));
  }
  return (
    appShellStateState24.forEach((item, index) => {
      for (let appShellStateState48 in item) {
        let appShellStateState49 = item[appShellStateState48];
        appShellStateState49.sort(appShellStateHelper10);
        let appShellStateState50 = [],
          appShellStateState51 = [],
          appShellStateState52 = [];
        for (
          let appShellStateState93 = 0;
          appShellStateState93 < appShellStateState49.length;
          appShellStateState93++
        ) {
          let {
            at: at,
            value: value,
            easing: easing,
          } = appShellStateState49[appShellStateState93];
          (appShellStateState50.push(value),
            appShellStateState51.push(
              mixMotionProgress(0, appShellStateState29, at),
            ),
            appShellStateState52.push(easing || `easeOut`));
        }
        (appShellStateState51[0] !== 0 &&
          (appShellStateState51.unshift(0),
          appShellStateState50.unshift(appShellStateState50[0]),
          appShellStateState52.unshift(defaultSequenceEase)),
          appShellStateState51[appShellStateState51.length - 1] !== 1 &&
            (appShellStateState51.push(1), appShellStateState50.push(null)),
          appShellStateState23.has(index) ||
            appShellStateState23.set(index, {
              keyframes: {},
              transition: {},
            }));
        let appShellStateState53 = appShellStateState23.get(index);
        ((appShellStateState53.keyframes[appShellStateState48] =
          appShellStateState50),
          (appShellStateState53.transition[appShellStateState48] = {
            ...defaultTransition,
            duration: appShellStateState29,
            ease: appShellStateState52,
            times: appShellStateState51,
            ...rest,
          }));
      }
    }),
    appShellStateState23
  );
}
function appShellStateHelper12(appShellStateInput96, appShellStateInput97) {
  return (
    !appShellStateInput97.has(appShellStateInput96) &&
      appShellStateInput97.set(appShellStateInput96, {}),
    appShellStateInput97.get(appShellStateInput96)
  );
}
function getTimelineTrack(appShellStateInput106, appShellStateInput107) {
  return (
    appShellStateInput107[appShellStateInput106] ||
      (appShellStateInput107[appShellStateInput106] = []),
    appShellStateInput107[appShellStateInput106]
  );
}
function appShellStateHelper13(appShellStateInput108) {
  return Array.isArray(appShellStateInput108)
    ? appShellStateInput108
    : [appShellStateInput108];
}
function appShellStateHelper14(appShellStateInput90, appShellStateInput91) {
  return appShellStateInput90 && appShellStateInput90[appShellStateInput91]
    ? {
        ...appShellStateInput90,
        ...appShellStateInput90[appShellStateInput91],
      }
    : {
        ...appShellStateInput90,
      };
}
var appShellStateState5 = (appShellStateInput133) =>
    typeof appShellStateInput133 == `number`,
  appShellStateState6 = (appShellStateInput134) =>
    appShellStateInput134.every(appShellStateState5);
function appShellStateHelper15(appShellStateInput127, appShellStateInput128) {
  return appShellStateInput127 in appShellStateInput128;
}
var appShellStateState7 = class extends ObjectVisualElementBase {
  constructor() {
    (super(...arguments), (this.type = `object`));
  }
  readValueFromInstance(appShellStateInput52, appShellStateInput53) {
    if (appShellStateHelper15(appShellStateInput53, appShellStateInput52)) {
      let appShellStateState108 = appShellStateInput52[appShellStateInput53];
      if (
        typeof appShellStateState108 == `string` ||
        typeof appShellStateState108 == `number`
      )
        return appShellStateState108;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(appShellStateInput103, appShellStateInput104) {
    delete appShellStateInput104.output[appShellStateInput103];
  }
  measureInstanceViewportBox() {
    return createEmptyViewportBox();
  }
  build(appShellStateInput117, appShellStateInput118) {
    Object.assign(appShellStateInput117.output, appShellStateInput118);
  }
  renderInstance(appShellStateInput102, { output: output }) {
    Object.assign(appShellStateInput102, output);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
function appShellStateHelper16(appShellStateInput22) {
  let appShellStateState77 = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    appShellStateState78 =
      isHtmlElement(appShellStateInput22) && !isDomElement(appShellStateInput22)
        ? new HtmlVisualElement(appShellStateState77)
        : new ObjectVisualElement(appShellStateState77);
  (appShellStateState78.mount(appShellStateInput22),
    visualElementStore.set(appShellStateInput22, appShellStateState78));
}
function appShellStateHelper17(appShellStateInput35) {
  let appShellStateState90 = new appShellStateState7({
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {},
      },
      latestValues: {},
    },
  });
  (appShellStateState90.mount(appShellStateInput35),
    visualElementStore.set(appShellStateInput35, appShellStateState90));
}
function appShellStateHelper18(appShellStateInput73, appShellStateInput74) {
  return (
    isMotionValue(appShellStateInput73) ||
    typeof appShellStateInput73 == `number` ||
    (typeof appShellStateInput73 == `string` &&
      !appShellStateHelper3(appShellStateInput74))
  );
}
function appShellStateHelper19(
  appShellStateInput9,
  appShellStateInput10,
  appShellStateInput11,
  appShellStateInput12,
) {
  let appShellStateState45 = [];
  if (appShellStateHelper18(appShellStateInput9, appShellStateInput10))
    appShellStateState45.push(
      animateSingleMotionValue(
        appShellStateInput9,
        (appShellStateHelper3(appShellStateInput10) &&
          appShellStateInput10.default) ||
          appShellStateInput10,
        appShellStateInput11 &&
          (appShellStateInput11.default || appShellStateInput11),
      ),
    );
  else {
    let appShellStateState46 = appShellStateHelper4(
        appShellStateInput9,
        appShellStateInput10,
        appShellStateInput12,
      ),
      appShellStateState47 = appShellStateState46.length;
    invariant(
      !!appShellStateState47,
      `No valid elements provided.`,
      `no-valid-elements`,
    );
    for (
      let appShellStateState57 = 0;
      appShellStateState57 < appShellStateState47;
      appShellStateState57++
    ) {
      let appShellStateState65 = appShellStateState46[appShellStateState57];
      invariant(
        appShellStateState65 !== null,
        `You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.`,
        `animate-null`,
      );
      let appShellStateState66 =
        appShellStateState65 instanceof Element
          ? appShellStateHelper16
          : appShellStateHelper17;
      visualElementStore.has(appShellStateState65) ||
        appShellStateState66(appShellStateState65);
      let appShellStateState67 = visualElementStore.get(appShellStateState65),
        appShellStateState68 = {
          ...appShellStateInput11,
        };
      (`delay` in appShellStateState68 &&
        typeof appShellStateState68.delay == `function` &&
        (appShellStateState68.delay = appShellStateState68.delay(
          appShellStateState57,
          appShellStateState47,
        )),
        appShellStateState45.push(
          ...animateVisualElement(
            appShellStateState67,
            {
              ...appShellStateInput10,
              transition: appShellStateState68,
            },
            {},
          ),
        ));
    }
  }
  return appShellStateState45;
}
function appShellStateHelper20(
  appShellStateInput36,
  appShellStateInput37,
  appShellStateInput38,
) {
  let appShellStateState91 = [];
  return (
    appShellStateHelper11(
      appShellStateInput36,
      appShellStateInput37,
      appShellStateInput38,
      {
        spring: createSpringGenerator,
      },
    ).forEach(({ keyframes: keyframes, transition: transition }, index) => {
      appShellStateState91.push(
        ...appShellStateHelper19(index, keyframes, transition),
      );
    }),
    appShellStateState91
  );
}
function appShellStateHelper21(appShellStateInput92) {
  return (
    Array.isArray(appShellStateInput92) &&
    appShellStateInput92.some(Array.isArray)
  );
}
function appShellStateHelper22(appShellStateInput16) {
  function appShellStateHelper31(
    appShellStateInput19,
    appShellStateInput20,
    appShellStateInput21,
  ) {
    let appShellStateState74 = [],
      appShellStateState75;
    if (appShellStateHelper21(appShellStateInput19))
      appShellStateState74 = appShellStateHelper20(
        appShellStateInput19,
        appShellStateInput20,
        appShellStateInput16,
      );
    else {
      let { onComplete: onComplete, ...rest } = appShellStateInput21 || {};
      (typeof onComplete == `function` && (appShellStateState75 = onComplete),
        (appShellStateState74 = appShellStateHelper19(
          appShellStateInput19,
          appShellStateInput20,
          rest,
          appShellStateInput16,
        )));
    }
    let appShellStateState76 = new appShellStateState3(appShellStateState74);
    return (
      appShellStateState75 &&
        appShellStateState76.finished.then(appShellStateState75),
      appShellStateInput16 &&
        (appShellStateInput16.animations.push(appShellStateState76),
        appShellStateState76.finished.then(() => {
          removeMotionItem(
            appShellStateInput16.animations,
            appShellStateState76,
          );
        })),
      appShellStateState76
    );
  }
  return appShellStateHelper31;
}
export const appShellStateMtState = appShellStateHelper22();
