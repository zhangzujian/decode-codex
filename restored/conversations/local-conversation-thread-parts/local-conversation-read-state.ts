// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Mark local conversations as read when visible and their read marker changes.
import { once, toEsModule } from "../../runtime/commonjs-interop";
import {
  Ep as conversationUnreadSignal,
  IB as useSignalValue,
  JV as loadReactModule,
  Kp as conversationReadStateSignal,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  Xp as latestConversationTurnSignal,
  ak as initAppServerRequestBridge,
  bM as initKeyboardShortcutLabel,
  ok as sendAppServerRequest,
  xM as useStableCallback,
  AB as initScopeRuntime,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  G as initWindowVisibilitySignal,
  W as windowVisibleSignal,
} from "../../boundaries/current-ref/automations-page-producer";

type ReactRuntime = {
  useEffect(effect: () => void, deps: readonly unknown[]): void;
  useEffectEvent<TCallback extends (...args: never[]) => unknown>(
    callback: TCallback,
  ): TCallback;
  useRef<TValue>(initialValue: TValue): {
    current: TValue;
  };
};

let markConversationReadReactRuntime: ReactRuntime;

export function useMarkConversationReadOnVisibility(
  conversationId: string,
  hasConversation: boolean,
) {
  let isUnread =
      useScopedValue(conversationUnreadSignal, conversationId) ?? false,
    isWindowVisible = useSignalValue(windowVisibleSignal),
    conversationReadMarker = useScopedValue(
      latestConversationTurnSignal,
      conversationId,
    ),
    conversationReadState = useScopedValue(
      conversationReadStateSignal,
      conversationId,
    ),
    lastMarkedConversationIdRef = markConversationReadReactRuntime.useRef<
      string | null
    >(null),
    lastConversationReadStateRef =
      markConversationReadReactRuntime.useRef<unknown>(null),
    lastConversationReadMarkerRef =
      markConversationReadReactRuntime.useRef<unknown>(null),
    markConversationRead = () => {
      lastMarkedConversationIdRef.current = conversationId;
      lastConversationReadStateRef.current = conversationReadState;
      lastConversationReadMarkerRef.current = conversationReadMarker;
      if (hasConversation && isUnread) {
        sendAppServerRequest("mark-conversation-as-read", {
          conversationId,
        });
      }
    };

  let markConversationReadEvent = useStableCallback(markConversationRead),
    markConversationReadHandler = () => {
      markConversationReadEvent();
    },
    markConversationReadEffectEvent =
      markConversationReadReactRuntime.useEffectEvent(
        markConversationReadHandler,
      ),
    markVisibleConversationReadEffect = () => {
      if (!hasConversation || isWindowVisible !== true) return;
      if (lastMarkedConversationIdRef.current !== conversationId) {
        markConversationReadEffectEvent();
        return;
      }
      if (
        lastConversationReadStateRef.current !== conversationReadState ||
        lastConversationReadMarkerRef.current !== conversationReadMarker
      ) {
        markConversationReadEffectEvent();
      }
    },
    markReadEffectDeps = [
      conversationId,
      hasConversation,
      isUnread,
      isWindowVisible,
      conversationReadState,
      conversationReadMarker,
    ];

  markConversationReadReactRuntime.useEffect(
    markVisibleConversationReadEffect,
    markReadEffectDeps,
  );

  return markConversationReadEvent;
}

export const initMarkConversationReadEffect = once(() => {
  initScopeRuntime();
  markConversationReadReactRuntime = toEsModule(loadReactModule(), 1);
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initWindowVisibilitySignal();
  initKeyboardShortcutLabel();
});
