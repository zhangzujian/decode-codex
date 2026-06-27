// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Persisted scroll-state signal for local conversation thread layouts.
import { once } from "../../runtime/commonjs-interop";
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  QP as appScope,
  bV as createScopedSignal,
} from "../../boundaries/current-ref/appg-thread-shared-producer";

export let threadScrollStateSignal: unknown;

export const initThreadScrollStateSignal = once(() => {
  initScopeRuntime();
  initAppScope();
  threadScrollStateSignal = createScopedSignal(
    appScope,
    (_conversationId: string) => null,
  );
});
