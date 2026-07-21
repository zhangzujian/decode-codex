import { describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { spawnSync } from "node:child_process";
import { inferSingleExportName } from "./auto-restore-full.ts";

const SCRIPT = path.join(import.meta.dir, "auto-restore-full.ts");

describe("inferSingleExportName", () => {
  test("a plain utility does NOT pascal-case onto a JS global (no _Array)", () => {
    // `array-XXXX` previously became `Array` → underscore-prefixed to `_Array`.
    const name = inferSingleExportName(
      "array-hqvMvHot",
      `export default function (o){return typeof o=="object"&&"length"in o?o:[...o];}`,
    );
    expect(name).toBe("array");
    expect(JS_GLOBAL_LIKE.test(name)).toBe(false);
  });

  test("a component chunk keeps PascalCase", () => {
    const name = inferSingleExportName(
      "tooltip-Ab12Cd34",
      `import {jsx} from "react/jsx-runtime";export default function(props){return jsx("div",{});}`,
    );
    expect(name).toBe("Tooltip");
  });

  test("a class chunk keeps PascalCase", () => {
    const name = inferSingleExportName(
      "event-bus-Ef56Gh78",
      `export default class { on(){} emit(){} }`,
    );
    expect(name).toBe("EventBus");
  });

  test("an icon chunk gets an *Icon name", () => {
    const name = inferSingleExportName(
      "download-Ij90Kl12",
      `export default (p)=>jsx("svg",{viewBox:"0 0 16 16"});`,
    );
    expect(name).toBe("DownloadIcon");
  });

  test("a hook chunk stays camelCase", () => {
    const name = inferSingleExportName("use-resize-Mn34Op56", `export default function(){}`);
    expect(name).toBe("useResize");
  });

  test("a component whose stem collides with a global is suffixed, not prefixed", () => {
    const name = inferSingleExportName(
      "map-Qr78St90",
      `export default function(props){return jsx("div",{});}`,
    );
    expect(name).toBe("MapComponent");
  });
});

test("--resume preserves cached files in the aggregate report", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "auto-restore-resume-"));
  const target = path.join(root, "restored");
  const full = path.join(target, ".deobfuscate-javascript", "_full");
  const checkpoints = path.join(full, "checkpoints");
  fs.mkdirSync(checkpoints, { recursive: true });

  const files = Object.fromEntries(
    ["first", "second"].map((basename) => {
      const workspace = path.join(full, "files", basename);
      fs.mkdirSync(workspace, { recursive: true });
      const original = `export const ${basename}Value = 1;\n`;
      fs.writeFileSync(path.join(workspace, "original.js"), original);
      fs.writeFileSync(path.join(workspace, "auto-polished.tsx"), original);
      fs.writeFileSync(path.join(checkpoints, `${basename}.tsx`), original);
      return [
        basename,
        {
          path: path.join(workspace, "original.js"),
          basename,
          kind: "local",
          imports: [],
          exports: [],
          stages: {},
        },
      ];
    }),
  );
  fs.writeFileSync(
    path.join(full, "manifest.json"),
    JSON.stringify({ targetDir: target, files }),
  );
  fs.writeFileSync(
    path.join(full, "ledger.json"),
    JSON.stringify({ files: { first: { symbols: [] }, second: { symbols: [] } } }),
  );
  fs.writeFileSync(
    path.join(full, "auto-restore-report.json"),
    JSON.stringify({
      target,
      files: [
        {
          basename: "first",
          source: files.first.path,
          checkpointOutput: path.join(checkpoints, "first.tsx"),
          symbols: 0,
          renames: 0,
          smartRenames: 0,
          fallbackRenames: 0,
          importRenames: 0,
          exportRenames: 0,
          ignoredRenames: 0,
          needsAgentRewrite: true,
        },
      ],
    }),
  );

  try {
    const result = spawnSync(
      "bun",
      [SCRIPT, "--target", target, "--resume"],
      { encoding: "utf-8" },
    );
    expect(result.status).toBe(0);
    const report = JSON.parse(
      fs.readFileSync(path.join(full, "auto-restore-report.json"), "utf-8"),
    );
    expect(report.files.map((file: { basename: string }) => file.basename)).toEqual([
      "first",
      "second",
    ]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

const JS_GLOBAL_LIKE = /^_{1,2}[A-Z]/;
