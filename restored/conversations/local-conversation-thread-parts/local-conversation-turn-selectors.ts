// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Scoped selectors for visible local-conversation turns and subagent response state.
import { once } from "../../runtime/commonjs-interop";
import { isEqualT as createIsEqual } from "../../vendor/lodash-is-equal";
import {
  $j as initStatsigGateSignals,
  $p as modelProviderSignal,
  Em as conversationTurnsSignal,
  Ip as localResponseInProgressSignal,
  Op as initConversationStateSelectors,
  Tp as hasConversationSignal,
  dp as berryDisplayConversationTurnsSignal,
  eM as featureGateSignal,
  sm as conversationRequestsSignal,
  vm as subagentParentThreadIdSignal,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import { initLocalConversationArtifactRuntime } from "./local-conversation-artifact-runtime";
import {
  createLocalConversationScopedSignalFamily,
  initLocalConversationScopeRuntime,
} from "./local-conversation-scope-runtime";
import { getConversationTurnsNotInParent } from "./parent-conversation-turns";
import {
  buildLocalConversationVisibleTurnEntries,
  initLocalConversationVisibleTurnEntriesBuilder,
} from "./local-conversation-visible-turn-entries";
import { initConversationSearchUnitExtractor } from "./local-conversation-search-source";

type DeepEqualModule = {
  default: (left: unknown, right: unknown) => boolean;
};

let areValuesEqual: DeepEqualModule["default"];

const initDeepEqualModule = once(() => {
  areValuesEqual = createIsEqual() as DeepEqualModule["default"];
});

let emptyConversationRequests: readonly unknown[];
let emptyConversationTurns: readonly unknown[];
let emptyVisibleTurnEntries: unknown;

export let localConversationVisibleTurnEntriesSignal: unknown;
export let subagentResponseInProgressSignal: unknown;

export const initLocalConversationTurnSelectors = once(() => {
  initLocalConversationScopeRuntime();
  initConversationStateSelectors();
  initStatsigGateSignals();
  initDeepEqualModule();
  initLocalConversationArtifactRuntime();
  initConversationSearchUnitExtractor();
  initLocalConversationVisibleTurnEntriesBuilder();

  emptyConversationRequests = [];
  emptyConversationTurns = [];
  emptyVisibleTurnEntries = {
    conversationTurns: emptyConversationTurns,
    hasInheritedParentTurns: false,
    hasRenderableTurns: false,
    hasUserMessage: false,
    latestVisibleTurnId: null,
    visibleTurnEntries: [],
  };

  localConversationVisibleTurnEntriesSignal =
    createLocalConversationScopedSignalFamily(
      ({ conversationId, isBackgroundSubagentsEnabled }, { get }) => {
        let hasConversation =
            get(hasConversationSignal, conversationId) ?? false,
          conversationRequests =
            get(conversationRequestsSignal, conversationId) ??
            emptyConversationRequests;
        get(modelProviderSignal, conversationId);

        let subagentParentThreadId = isBackgroundSubagentsEnabled
            ? (get(subagentParentThreadIdSignal, conversationId) ?? null)
            : null,
          isBerryDisplayMergeEnabled = get(featureGateSignal, "209459230"),
          berryDisplayConversationTurns = isBerryDisplayMergeEnabled
            ? get(berryDisplayConversationTurnsSignal, conversationId)
            : null,
          parentBerryDisplayConversationTurns = isBerryDisplayMergeEnabled
            ? subagentParentThreadId == null
              ? emptyConversationTurns
              : get(berryDisplayConversationTurnsSignal, subagentParentThreadId)
            : null,
          shouldUseBerryDisplayTurns =
            berryDisplayConversationTurns != null &&
            parentBerryDisplayConversationTurns != null;

        return buildLocalConversationVisibleTurnEntries({
          areTurnItemsEqual: areValuesEqual,
          conversationRequests,
          mergeBerryDisplayTurnsForPIA: false,
          preserveServerUserMessages: false,
          conversationTurns: shouldUseBerryDisplayTurns
            ? berryDisplayConversationTurns
            : (get(conversationTurnsSignal, conversationId) ??
              emptyConversationTurns),
          emptyConversationRequests,
          emptyVisibleTurnEntries,
          hasConversation,
          isBackgroundSubagentsEnabled,
          parentConversationTurns: shouldUseBerryDisplayTurns
            ? parentBerryDisplayConversationTurns
            : (get(conversationTurnsSignal, subagentParentThreadId) ??
              emptyConversationTurns),
          subagentParentThreadId,
        });
      },
    );

  subagentResponseInProgressSignal = createLocalConversationScopedSignalFamily(
    (conversationId, { get }) => {
      let parentConversationId = get(
        subagentParentThreadIdSignal,
        conversationId,
      );
      if (parentConversationId == null)
        return get(localResponseInProgressSignal, conversationId) ?? false;

      let conversationTurns =
          get(conversationTurnsSignal, conversationId) ??
          emptyConversationTurns,
        parentConversationTurns =
          get(conversationTurnsSignal, parentConversationId) ??
          emptyConversationTurns;

      return (
        getConversationTurnsNotInParent({
          areTurnItemsEqual: areValuesEqual,
          conversation: {
            turns: conversationTurns,
          },
          parentConversation: {
            turns: parentConversationTurns,
          },
        }).at(-1)?.status === "inProgress"
      );
    },
  );
});
