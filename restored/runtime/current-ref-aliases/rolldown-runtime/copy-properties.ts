// Restored from ref/webview/assets/rolldown-runtime-BG2f4sTM.js
// Property-copy helpers used by Rolldown's CommonJS/ESM interop.
export function copyProperties<TTarget extends object, TSource extends object>(
  target: TTarget,
  source: TSource | null | undefined,
  excludedProperty?: PropertyKey,
): TTarget & TSource {
  if (!source || (typeof source !== "object" && typeof source !== "function")) {
    return target as TTarget & TSource;
  }
  for (const name of Object.getOwnPropertyNames(source)) {
    if (name === excludedProperty || Object.hasOwn(target, name)) continue;
    const descriptor = Object.getOwnPropertyDescriptor(source, name);
    Object.defineProperty(target, name, {
      enumerable: descriptor?.enumerable ?? true,
      get: () => source[name as keyof TSource],
    });
  }
  return target as TTarget & TSource;
}

export function copyModuleProperties<
  TPrimary extends object,
  TSource extends object,
  TSecondary extends object,
>(
  primaryTarget: TPrimary,
  source: TSource | null | undefined,
  secondaryTarget?: TSecondary,
): (TSecondary & TSource) | undefined {
  copyProperties(primaryTarget, source, "default");
  return secondaryTarget
    ? copyProperties(secondaryTarget, source, "default")
    : undefined;
}
