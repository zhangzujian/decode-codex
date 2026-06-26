// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// ID generation for queued thread handoff operations.
export function createThreadHandoffOperationId() {
  const randomUUID = globalThis.crypto?.randomUUID;
  if (typeof randomUUID === "function") {
    return randomUUID.call(globalThis.crypto);
  }

  return `thread-handoff-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;
}
