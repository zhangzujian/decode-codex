// Restored from ref/webview/assets/rolldown-runtime-BG2f4sTM.js
// Builds live-binding module namespace objects from export getters.
type ExportGetter = () => unknown;
type ExportGetters = Record<PropertyKey, ExportGetter>;

export function createModuleNamespace<TGetters extends ExportGetters>(
  getters: TGetters,
  omitModuleTag: boolean = false,
): { readonly [TKey in keyof TGetters]: ReturnType<TGetters[TKey]> } {
  const namespace: Record<PropertyKey, unknown> = {};
  for (const name of Object.keys(getters)) {
    Object.defineProperty(namespace, name, {
      enumerable: true,
      get: getters[name],
    });
  }
  if (!omitModuleTag) {
    Object.defineProperty(namespace, Symbol.toStringTag, { value: "Module" });
  }
  return namespace as {
    readonly [TKey in keyof TGetters]: ReturnType<TGetters[TKey]>;
  };
}
