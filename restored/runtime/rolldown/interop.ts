// Restored from ref/webview/assets/rolldown-runtime-BG2f4sTM.js
// CommonJS and ESM namespace conversion helpers.
import { copyProperties } from "./copy-properties";

type ModuleRecord = Record<PropertyKey, unknown>;

export function toCommonJs(module: ModuleRecord): unknown {
  if (Object.hasOwn(module, "module.exports")) {
    return module["module.exports"];
  }
  const commonJsModule = Object.defineProperty({}, "__esModule", {
    value: true,
  });
  return copyProperties(commonJsModule, module);
}

export function toEsm(
  module: unknown,
  nodeMode: boolean = false,
): ModuleRecord & { default?: unknown } {
  const namespace =
    module == null ? {} : Object.create(Object.getPrototypeOf(module));
  const moduleRecord = module as ModuleRecord | null | undefined;
  const target =
    nodeMode || !moduleRecord || !moduleRecord.__esModule
      ? Object.defineProperty(namespace, "default", {
          enumerable: true,
          value: module,
        })
      : namespace;
  return moduleRecord ? copyProperties(target, moduleRecord) : target;
}
