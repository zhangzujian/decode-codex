// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// Vendored Framer Motion animation runtime: createAnimationsFromSequence plus the
// scoped `animate` factory (GroupAnimation, ObjectVisualElement), bundled inline by
// the app rather than imported from the framer-motion package. Kept verbatim as a
// faithful vendored boundary.
import * as motionRuntime from "./framer-motion-single-value";
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
var wrapIndex = (min, max, value) => {
  let rangeLength = max - min;
  return ((((value - min) % rangeLength) + rangeLength) % rangeLength) + min;
};
function resolveIndexedOption(valueOrArray, index) {
  return isMotionArray(valueOrArray)
    ? valueOrArray[wrapIndex(0, valueOrArray.length, index)]
    : valueOrArray;
}
var GroupAnimation = class {
  constructor(animations) {
    ((this.stop = () => this.runAll(`stop`)),
      (this.animations = animations.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((item) => item.finished));
  }
  getAll(propertyName) {
    return this.animations[0][propertyName];
  }
  setAll(propertyName, propertyValue) {
    for (
      let animationIndex = 0;
      animationIndex < this.animations.length;
      animationIndex++
    )
      this.animations[animationIndex][propertyName] = propertyValue;
  }
  attachTimeline(timeline) {
    let timelineDetachHandlers = this.animations.map((item) =>
      item.attachTimeline(timeline),
    );
    return () => {
      timelineDetachHandlers.forEach((item, index) => {
        (item && item(), this.animations[index].stop());
      });
    };
  }
  get time() {
    return this.getAll(`time`);
  }
  set time(time) {
    this.setAll(`time`, time);
  }
  get speed() {
    return this.getAll(`speed`);
  }
  set speed(speed) {
    this.setAll(`speed`, speed);
  }
  get state() {
    return this.getAll(`state`);
  }
  get startTime() {
    return this.getAll(`startTime`);
  }
  get duration() {
    return getMaxAnimationProperty(this.animations, `duration`);
  }
  get iterationDuration() {
    return getMaxAnimationProperty(this.animations, `iterationDuration`);
  }
  runAll(methodName) {
    this.animations.forEach((item) => item[methodName]());
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
function getMaxAnimationProperty(animations, propertyName) {
  let maxValue = 0;
  for (
    let animationIndex = 0;
    animationIndex < animations.length;
    animationIndex++
  ) {
    let animationValue = animations[animationIndex][propertyName];
    animationValue !== null &&
      animationValue > maxValue &&
      (maxValue = animationValue);
  }
  return maxValue;
}
var ThenableGroupAnimation = class extends GroupAnimation {
  then(onResolve, onReject) {
    return this.finished.finally(onResolve).then(() => {});
  }
};
function isPlainObject(value) {
  return typeof value == `object` && !Array.isArray(value);
}
function resolveAnimationSubjects(
  subject,
  keyframesOrOptions,
  scope,
  selectorCache,
) {
  return typeof subject == `string` && isPlainObject(keyframesOrOptions)
    ? resolveMotionElements(subject, scope, selectorCache)
    : subject instanceof NodeList
      ? Array.from(subject)
      : Array.isArray(subject)
        ? subject
        : [subject];
}
function durationWithRepeat(duration, repeatCount, repeatType) {
  return duration * (repeatCount + 1);
}
function resolveTimelinePosition(currentTime, at, previousTime, namedMarkers) {
  return typeof at == `number`
    ? at
    : at.startsWith(`-`) || at.startsWith(`+`)
      ? Math.max(0, currentTime + parseFloat(at))
      : at === `<`
        ? previousTime
        : at.startsWith(`<`)
          ? Math.max(0, previousTime + parseFloat(at.slice(1)))
          : (namedMarkers.get(at) ?? currentTime);
}
function removeTrackEntriesBetween(track, startTime, endTime) {
  for (let trackIndex = 0; trackIndex < track.length; trackIndex++) {
    let trackEntry = track[trackIndex];
    trackEntry.at > startTime &&
      trackEntry.at < endTime &&
      (removeMotionItem(track, trackEntry), trackIndex--);
  }
}
function addKeyframesToTrack(
  track,
  keyframes,
  ease,
  times,
  startTime,
  endTime,
) {
  removeTrackEntriesBetween(track, startTime, endTime);
  for (let keyframeIndex = 0; keyframeIndex < keyframes.length; keyframeIndex++)
    track.push({
      value: keyframes[keyframeIndex],
      at: mixMotionNumber(startTime, endTime, times[keyframeIndex]),
      easing: resolveIndexedOption(ease, keyframeIndex),
    });
}
function normalizeRepeatedTimes(times, repeatCount) {
  for (let timeIndex = 0; timeIndex < times.length; timeIndex++)
    times[timeIndex] = times[timeIndex] / (repeatCount + 1);
}
function compareTrackEntries(leftEntry, rightEntry) {
  return leftEntry.at === rightEntry.at
    ? leftEntry.value === null
      ? 1
      : rightEntry.value === null
        ? -1
        : 0
    : leftEntry.at - rightEntry.at;
}
var defaultSequenceEase = `easeInOut`,
  maxRepeatCount = 20;
function createAnimationsFromSequence(
  sequence,
  { defaultTransition = {}, ...rest } = {},
  scope,
  generatorFactoryByType,
) {
  let defaultDuration = defaultTransition.duration || 0.3,
    animationDefinitions = new Map(),
    tracksBySubject = new Map(),
    selectorCache = {},
    namedTimelineMarkers = new Map(),
    previousTime = 0,
    currentTime = 0,
    totalDuration = 0;
  for (
    let sequenceIndex = 0;
    sequenceIndex < sequence.length;
    sequenceIndex++
  ) {
    let sequenceEntry = sequence[sequenceIndex];
    if (typeof sequenceEntry == `string`) {
      namedTimelineMarkers.set(sequenceEntry, currentTime);
      continue;
    } else if (!Array.isArray(sequenceEntry)) {
      namedTimelineMarkers.set(
        sequenceEntry.name,
        resolveTimelinePosition(
          currentTime,
          sequenceEntry.at,
          previousTime,
          namedTimelineMarkers,
        ),
      );
      continue;
    }
    let [subject, keyframesOrValues, transition = {}] = sequenceEntry;
    transition.at !== void 0 &&
      (currentTime = resolveTimelinePosition(
        currentTime,
        transition.at,
        previousTime,
        namedTimelineMarkers,
      ));
    let segmentDuration = 0,
      addSegment = (
        segmentKeyframes,
        segmentTransition,
        track,
        elementIndex = 0,
        elementCount = 0,
      ) => {
        let keyframes = asKeyframeArray(segmentKeyframes),
          {
            delay = 0,
            times = motionDefaultOffsetTimes(keyframes),
            type = `keyframes`,
            repeat: repeat,
            repeatType: repeatType,
            repeatDelay = 0,
            ..._rest
          } = segmentTransition,
          { ease = defaultTransition.ease || `easeOut`, duration: duration } =
            segmentTransition,
          resolvedDelay =
            typeof delay == `function`
              ? delay(elementIndex, elementCount)
              : delay,
          keyframeCount = keyframes.length,
          generatorFactory = isGeneratorFactory(type)
            ? type
            : generatorFactoryByType?.[type || `keyframes`];
        if (keyframeCount <= 2 && generatorFactory) {
          let generatorTargetDistance = 100;
          if (keyframeCount === 2 && isNumberArray(keyframes)) {
            let valueDelta = keyframes[1] - keyframes[0];
            generatorTargetDistance = Math.abs(valueDelta);
          }
          let generatorTransition = {
            ..._rest,
          };
          duration !== void 0 &&
            (generatorTransition.duration = secondsToMilliseconds(duration));
          let generatorDurationConfig = createGeneratorDurationConfig(
            generatorTransition,
            generatorTargetDistance,
            generatorFactory,
          );
          ((ease = generatorDurationConfig.ease),
            (duration = generatorDurationConfig.duration));
        }
        duration ??= defaultDuration;
        let startTime = currentTime + resolvedDelay;
        times.length === 1 && times[0] === 0 && (times[1] = 1);
        let missingOffsetCount = times.length - keyframes.length;
        if (
          (missingOffsetCount > 0 && fillOffsetTimes(times, missingOffsetCount),
          keyframes.length === 1 && keyframes.unshift(null),
          repeat)
        ) {
          (invariant(
            repeat < maxRepeatCount,
            `Repeat count too high, must getTimelineTrack less than 20`,
            `repeat-count-high`,
          ),
            (duration = durationWithRepeat(duration, repeat)));
          let repeatedKeyframes = [...keyframes],
            repeatedTimes = [...times];
          ease = Array.isArray(ease) ? [...ease] : [ease];
          let repeatedEase = [...ease];
          for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
            keyframes.push(...repeatedKeyframes);
            for (
              let repeatKeyframeIndex = 0;
              repeatKeyframeIndex < repeatedKeyframes.length;
              repeatKeyframeIndex++
            )
              (times.push(
                repeatedTimes[repeatKeyframeIndex] + (repeatIndex + 1),
              ),
                ease.push(
                  repeatKeyframeIndex === 0
                    ? `linear`
                    : resolveIndexedOption(
                        repeatedEase,
                        repeatKeyframeIndex - 1,
                      ),
                ));
          }
          normalizeRepeatedTimes(times, repeat);
        }
        let endTime = startTime + duration;
        (addKeyframesToTrack(track, keyframes, ease, times, startTime, endTime),
          (segmentDuration = Math.max(
            resolvedDelay + duration,
            segmentDuration,
          )),
          (totalDuration = Math.max(endTime, totalDuration)));
      };
    if (isMotionValue(subject)) {
      let motionValueTracks = getOrCreateSubjectTracks(
        subject,
        tracksBySubject,
      );
      addSegment(
        keyframesOrValues,
        transition,
        getTimelineTrack(`default`, motionValueTracks),
      );
    } else {
      let resolvedSubjects = resolveAnimationSubjects(
          subject,
          keyframesOrValues,
          scope,
          selectorCache,
        ),
        subjectCount = resolvedSubjects.length;
      for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
        let resolvedSubject = resolvedSubjects[subjectIndex],
          subjectTracks = getOrCreateSubjectTracks(
            resolvedSubject,
            tracksBySubject,
          );
        for (let valueName in keyframesOrValues)
          addSegment(
            keyframesOrValues[valueName],
            resolveValueTransition(transition, valueName),
            getTimelineTrack(valueName, subjectTracks),
            subjectIndex,
            subjectCount,
          );
      }
    }
    ((previousTime = currentTime), (currentTime += segmentDuration));
  }
  return (
    tracksBySubject.forEach((item, index) => {
      for (let valueName in item) {
        let keyframeTrack = item[valueName];
        keyframeTrack.sort(compareTrackEntries);
        let resolvedKeyframes = [],
          offsetTimes = [],
          easings = [];
        for (
          let trackEntryIndex = 0;
          trackEntryIndex < keyframeTrack.length;
          trackEntryIndex++
        ) {
          let {
            at: at,
            value: value,
            easing: easing,
          } = keyframeTrack[trackEntryIndex];
          (resolvedKeyframes.push(value),
            offsetTimes.push(mixMotionProgress(0, totalDuration, at)),
            easings.push(easing || `easeOut`));
        }
        (offsetTimes[0] !== 0 &&
          (offsetTimes.unshift(0),
          resolvedKeyframes.unshift(resolvedKeyframes[0]),
          easings.unshift(defaultSequenceEase)),
          offsetTimes[offsetTimes.length - 1] !== 1 &&
            (offsetTimes.push(1), resolvedKeyframes.push(null)),
          animationDefinitions.has(index) ||
            animationDefinitions.set(index, {
              keyframes: {},
              transition: {},
            }));
        let animationDefinition = animationDefinitions.get(index);
        ((animationDefinition.keyframes[valueName] = resolvedKeyframes),
          (animationDefinition.transition[valueName] = {
            ...defaultTransition,
            duration: totalDuration,
            ease: easings,
            times: offsetTimes,
            ...rest,
          }));
      }
    }),
    animationDefinitions
  );
}
function getOrCreateSubjectTracks(subject, tracksBySubject) {
  return (
    !tracksBySubject.has(subject) && tracksBySubject.set(subject, {}),
    tracksBySubject.get(subject)
  );
}
function getTimelineTrack(valueName, subjectTracks) {
  return (
    subjectTracks[valueName] || (subjectTracks[valueName] = []),
    subjectTracks[valueName]
  );
}
function asKeyframeArray(value) {
  return Array.isArray(value) ? value : [value];
}
function resolveValueTransition(transition, valueName) {
  return transition && transition[valueName]
    ? {
        ...transition,
        ...transition[valueName],
      }
    : {
        ...transition,
      };
}
var isNumber = (value) => typeof value == `number`,
  isNumberArray = (values) => values.every(isNumber);
function hasOwnPropertyKey(key, object) {
  return key in object;
}
var PlainObjectVisualElement = class extends ObjectVisualElementBase {
  constructor() {
    (super(...arguments), (this.type = `object`));
  }
  readValueFromInstance(instance, key) {
    if (hasOwnPropertyKey(key, instance)) {
      let latestValue = instance[key];
      if (typeof latestValue == `string` || typeof latestValue == `number`)
        return latestValue;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(key, renderState) {
    delete renderState.output[key];
  }
  measureInstanceViewportBox() {
    return createEmptyViewportBox();
  }
  build(renderState, latestValues) {
    Object.assign(renderState.output, latestValues);
  }
  renderInstance(instance, { output: output }) {
    Object.assign(instance, output);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
function mountDomVisualElement(element) {
  let visualStateTemplate = {
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
    visualElement =
      isHtmlElement(element) && !isDomElement(element)
        ? new HtmlVisualElement(visualStateTemplate)
        : new ObjectVisualElement(visualStateTemplate);
  (visualElement.mount(element),
    visualElementStore.set(element, visualElement));
}
function mountObjectVisualElement(objectTarget) {
  let visualElement = new PlainObjectVisualElement({
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {},
      },
      latestValues: {},
    },
  });
  (visualElement.mount(objectTarget),
    visualElementStore.set(objectTarget, visualElement));
}
function isSingleValueSubject(subject, keyframesOrOptions) {
  return (
    isMotionValue(subject) ||
    typeof subject == `number` ||
    (typeof subject == `string` && !isPlainObject(keyframesOrOptions))
  );
}
function animateSubject(subject, keyframesOrOptions, transition, scope) {
  let animations = [];
  if (isSingleValueSubject(subject, keyframesOrOptions))
    animations.push(
      animateSingleMotionValue(
        subject,
        (isPlainObject(keyframesOrOptions) && keyframesOrOptions.default) ||
          keyframesOrOptions,
        transition && (transition.default || transition),
      ),
    );
  else {
    let resolvedSubjects = resolveAnimationSubjects(
        subject,
        keyframesOrOptions,
        scope,
      ),
      subjectCount = resolvedSubjects.length;
    invariant(
      !!subjectCount,
      `No valid elements provided.`,
      `no-valid-elements`,
    );
    for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
      let resolvedSubject = resolvedSubjects[subjectIndex];
      invariant(
        resolvedSubject !== null,
        `You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.`,
        `animate-null`,
      );
      let mountVisualElement =
        resolvedSubject instanceof Element
          ? mountDomVisualElement
          : mountObjectVisualElement;
      visualElementStore.has(resolvedSubject) ||
        mountVisualElement(resolvedSubject);
      let visualElement = visualElementStore.get(resolvedSubject),
        resolvedTransition = {
          ...transition,
        };
      (`delay` in resolvedTransition &&
        typeof resolvedTransition.delay == `function` &&
        (resolvedTransition.delay = resolvedTransition.delay(
          subjectIndex,
          subjectCount,
        )),
        animations.push(
          ...animateVisualElement(
            visualElement,
            {
              ...keyframesOrOptions,
              transition: resolvedTransition,
            },
            {},
          ),
        ));
    }
  }
  return animations;
}
function createSequenceAnimations(sequence, options, scope) {
  let animations = [];
  return (
    createAnimationsFromSequence(sequence, options, scope, {
      spring: createSpringGenerator,
    }).forEach(({ keyframes: keyframes, transition: transition }, index) => {
      animations.push(...animateSubject(index, keyframes, transition));
    }),
    animations
  );
}
function isTimelineSequence(value) {
  return Array.isArray(value) && value.some(Array.isArray);
}
function createScopedAnimate(scope) {
  function scopedAnimate(subjectOrSequence, keyframesOrOptions, options) {
    let animations = [],
      onCompleteCallback;
    if (isTimelineSequence(subjectOrSequence))
      animations = createSequenceAnimations(
        subjectOrSequence,
        keyframesOrOptions,
        scope,
      );
    else {
      let { onComplete: onComplete, ...rest } = options || {};
      (typeof onComplete == `function` && (onCompleteCallback = onComplete),
        (animations = animateSubject(
          subjectOrSequence,
          keyframesOrOptions,
          rest,
          scope,
        )));
    }
    let animation = new ThenableGroupAnimation(animations);
    return (
      onCompleteCallback && animation.finished.then(onCompleteCallback),
      scope &&
        (scope.animations.push(animation),
        animation.finished.then(() => {
          removeMotionItem(scope.animations, animation);
        })),
      animation
    );
  }
  return scopedAnimate;
}
const animateSequence = createScopedAnimate();
export { animateSequence, animateSequence as appShellStateMtState };
