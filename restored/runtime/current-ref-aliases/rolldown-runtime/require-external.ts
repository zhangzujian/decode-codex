// Restored from ref/webview/assets/rolldown-runtime-BG2f4sTM.js
// Resolves external CommonJS modules when the host exposes require.
type CommonJsRequire = (specifier: string) => unknown;

declare const require: CommonJsRequire | undefined;

function unavailableRequire(specifier: string): never {
  throw new Error(
    `Calling require for "${specifier}" in an environment that does not expose the require function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.`,
  );
}

const fallbackRequire = Object.assign(unavailableRequire, {});

export const requireExternal: CommonJsRequire =
  typeof require !== "undefined"
    ? require
    : typeof Proxy !== "undefined"
      ? new Proxy(fallbackRequire, {
          get(target, property) {
            return typeof require !== "undefined"
              ? Reflect.get(require, property)
              : Reflect.get(target, property);
          },
        })
      : fallbackRequire;
