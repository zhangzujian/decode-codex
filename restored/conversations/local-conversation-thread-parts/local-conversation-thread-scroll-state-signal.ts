// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Persisted scroll-state signal for local conversation thread layouts.
import { once } from "../../runtime/commonjs-interop";
import {
  createLocalConversationScopedSignal,
  initLocalConversationScopeRuntime,
} from "./local-conversation-scope-runtime";

export let threadScrollStateSignal: unknown;

export const initThreadScrollStateSignal = once(() => {
  initLocalConversationScopeRuntime();
  threadScrollStateSignal = createLocalConversationScopedSignal(
    (_conversationId: string) => null,
  );
});
