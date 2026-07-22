// Restored from ref/webview/assets/rolldown-runtime-BG2f4sTM.js
// Memoized ESM initialization with stable failure replay.
export type EsmInitializer<T> = (resetToken: 0) => T;

export function createLazyEsmInitializer<T>(
  initializer: EsmInitializer<T>,
): () => T {
  let pendingInitializer: EsmInitializer<T> | null = initializer;
  let result!: T;
  let failure: unknown[] | undefined;

  return () => {
    if (failure) throw failure[0];
    try {
      if (pendingInitializer) {
        const initialize = pendingInitializer;
        pendingInitializer = null;
        result = initialize(0);
      }
      return result;
    } catch (error) {
      failure = [error];
      throw error;
    }
  };
}
