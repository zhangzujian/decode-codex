// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Builds searchable conversation turn units for local conversation search.
import { once, toEsModule } from "../../runtime/commonjs-interop";
import {
  Nv as initConversationArtifactRuntime,
  Pv as formatConversationTurnForSearch,
  Sk as normalizeMarkdownPlainText,
  bA as loadFindLastIndexModule,
  initLocalConversationGitSummary as isRenderableConversationTurn,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  cn as initConversationSearchMatcher,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  createLocalConversationSearchAdapter,
  initConversationSearchHelpers,
  type ConversationSearchScrollAdapter,
  type ConversationSearchUnit,
  type SearchableConversationTurn,
} from "./local-conversation-search";
import { getLocalConversationTurnSearchKey } from "./turn-search-key";

type ConversationTurn = {
  items: ConversationTurnItem[];
  turnId?: string | null;
  [key: string]: unknown;
};

type ConversationTurnItem =
  | {
      message: string;
      type: "user-message";
    }
  | {
      content: string;
      type: "assistant-message";
    }
  | {
      type: string;
      [key: string]: unknown;
    };

type ConversationSearchSourceOptions = {
  getConversationState: () => { turns: ConversationTurn[] } | null | undefined;
  getIsBackgroundSubagentsEnabled: () => boolean;
  routeContextId: string;
  scrollAdapter: ConversationSearchScrollAdapter;
};

let findLastIndexModule: {
  default: <T>(
    items: readonly T[],
    predicate: (item: T, index: number) => boolean,
  ) => number;
};

export function createLocalConversationSearchSource({
  getConversationState,
  getIsBackgroundSubagentsEnabled,
  routeContextId,
  scrollAdapter,
}: ConversationSearchSourceOptions) {
  return createLocalConversationSearchAdapter({
    contextId: routeContextId,
    getTurns: () => {
      let conversationState = getConversationState();
      return conversationState == null
        ? []
        : conversationState.turns
            .map((turn, index) =>
              isRenderableConversationTurn(turn, [], {
                isBackgroundSubagentsEnabled: getIsBackgroundSubagentsEnabled(),
              })
                ? {
                    turnKey: getLocalConversationTurnSearchKey(
                      turn.turnId,
                      index,
                    ),
                    units: extractConversationSearchUnits(
                      formatConversationTurnForSearch(turn, [], {
                        isBackgroundSubagentsEnabled:
                          getIsBackgroundSubagentsEnabled(),
                      }).items,
                    ),
                  }
                : null,
            )
            .filter((turn): turn is SearchableConversationTurn => turn != null);
    },
    scrollAdapter,
  });
}

function extractConversationSearchUnits(
  items: ConversationTurnItem[],
): ConversationSearchUnit[] {
  let units: ConversationSearchUnit[] = [];
  let latestAssistantMessageIndex = findLastIndexModule.default(
    items,
    (item) => item.type === "assistant-message",
  );

  items.forEach((item, index) => {
    if (item.type === "user-message") {
      let messageText = item.message.trim();
      if (messageText.length === 0) return;
      units.push({
        unitId: `${index}:user`,
        text: messageText,
      });
      return;
    }
    if (
      item.type !== "assistant-message" ||
      index !== latestAssistantMessageIndex
    )
      return;

    let assistantText = normalizeMarkdownPlainText(item.content);
    assistantText.length !== 0 &&
      units.push({
        unitId: `${index}:assistant`,
        text: assistantText,
      });
  });

  return units;
}

export const initConversationSearchUnitExtractor = once(() => {
  findLastIndexModule = toEsModule(loadFindLastIndexModule(), 1);
  initConversationSearchHelpers();
  initConversationSearchMatcher();
  initConversationArtifactRuntime();
});
