// Restored from ref/webview/assets/rolldown-runtime-BG2f4sTM.js
// Memoized CommonJS module initialization with mutable module.exports.
export interface CommonJsModule<T> {
  exports: T;
}

export type CommonJsInitializer<T> = (
  exports: T,
  module: CommonJsModule<T>,
) => void;

export function createLazyCommonJsModule<T = Record<string, unknown>>(
  initializer: CommonJsInitializer<T>,
): () => T {
  let pendingInitializer: CommonJsInitializer<T> | null = initializer;
  let module: CommonJsModule<T> | undefined;

  return () => {
    if (!module) {
      module = { exports: {} as T };
      pendingInitializer?.(module.exports, module);
      pendingInitializer = null;
    }
    return module.exports;
  };
}
