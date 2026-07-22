// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~artifact-tab-content.electron~notebook-preview-~dejrazf4-CyNQP50P.js
// Behavior acceptance coverage for current-build npm package adapters.

import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";

const adapterRoot = import.meta.dir;

describe("current package adapters", () => {
  test("react-intl adapter preserves package APIs and tslib helpers", async () => {
    const adapterPath = join(adapterRoot, "react-intl-current", "index.ts");
    expect(existsSync(adapterPath)).toBeTrue();
    const {
      defineMessage,
      defineMessages,
      excludeObjectKeys,
      FormattedMessage,
      IntlErrorCode,
      useIntl,
    } = await import("./react-intl-current");
    const descriptor = { id: "test.message", defaultMessage: "Test" };

    expect(defineMessage(descriptor)).toBe(descriptor);
    expect(defineMessages({ test: descriptor })).toEqual({ test: descriptor });
    expect(excludeObjectKeys({ keep: 1, omit: 2 }, ["omit"])).toEqual({
      keep: 1,
    });
    expect(FormattedMessage).toBeDefined();
    expect(useIntl).toBeFunction();
    expect(IntlErrorCode.MISSING_TRANSLATION).toBe("MISSING_TRANSLATION");
  });

  test("radix adapter composes handlers and refs", async () => {
    const adapterPath = join(
      adapterRoot,
      "react-dom-radix-current",
      "index.ts",
    );
    expect(existsSync(adapterPath)).toBeTrue();
    const { composeEventHandlers, composeRefs, Primitive } =
      await import("./react-dom-radix-current");
    const calls: string[] = [];
    const handler = composeEventHandlers(
      () => calls.push("original"),
      () => calls.push("next"),
    );
    handler({ defaultPrevented: false });
    expect(calls).toEqual(["original", "next"]);

    const first = { current: null as HTMLDivElement | null };
    const second = { current: null as HTMLDivElement | null };
    const setRefs = composeRefs(first, second);
    const element = {} as HTMLDivElement;
    setRefs(element);
    expect(first.current).toBe(element);
    expect(second.current).toBe(element);
    expect(Primitive.div).toBeDefined();
  });

  test("statsig adapter normalizes event metadata", async () => {
    const adapterPath = join(adapterRoot, "statsig-current", "index.ts");
    expect(existsSync(adapterPath)).toBeTrue();
    const { checkStatsigGate, getStatsigLayer } =
      await import("./statsig-current");
    const client = {
      checkGate: (name: string) => name === "enabled",
      getLayer: (name: string) => ({ name }),
    };
    expect(checkStatsigGate(client as never, "enabled")).toBeTrue();
    expect(getStatsigLayer(client as never, "layer")).toEqual({
      name: "layer",
    });
  });
});
