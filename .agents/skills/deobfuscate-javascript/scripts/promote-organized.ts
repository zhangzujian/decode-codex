import * as fs from "node:fs";
import * as path from "node:path";
import { parseArgs } from "node:util";
import * as parser from "@babel/parser";
import babelTraverse from "@babel/traverse";
import * as t from "@babel/types";
import {
  writeJsonAtomic,
  type Manifest,
  type ManifestFile,
} from "./build-import-graph.ts";
import {
  acquireLock,
  computeFrontier,
  LockHeldError,
  pathsForTarget,
  releaseLock,
} from "./ledger.ts";
import {
  rewriteSemanticImports,
  semanticFinalize,
  type SemanticImportMapping,
} from "./semantic-finalize.ts";
import {
  analyzeSource,
  DEFAULT_OPTIONS,
  type QualityGateOptions,
} from "./quality-gate.ts";
import { formatPaths } from "./format.ts";
import { Progress } from "./progress.ts";

const traverse = ((
  babelTraverse as unknown as { default?: typeof babelTraverse }
).default ?? babelTraverse) as typeof babelTraverse;

const PARSER_PLUGINS: parser.ParserPlugin[] = [
  "jsx",
  "typescript",
  "classProperties",
  "classPrivateProperties",
  "classPrivateMethods",
  "dynamicImport",
  "importMeta",
  "objectRestSpread",
  "topLevelAwait",
];

/**
 * promote-organized.ts — drain the promote frontier: for every organized chunk
 * whose local dependencies are already promoted, produce its typed deliverable
 * (semantic-finalize recipe, or the agent/checkpoint candidate), gate it through
 * the SAME quality gate promote-final uses, copy it to its semantic path, update
 * the shared IMPORT_MAP.json, and rewrite this chunk's imports of already-promoted
 * producers to their semantic names/paths.
 *
 * Resumable + fleet-safe: per-chunk promote lock, skip already-promoted, idempotent
 * IMPORT_MAP upsert, continue-on-gate-fail (one bad chunk never blocks the batch).
 * `--dry-run` previews every move + import-map change + gate verdict with no writes.
 */

type ImportMapEntry = {
  restored?: string;
  exports?: Record<string, string>;
  status?: string;
  [k: string]: unknown;
};
type ImportMap = {
  chunks?: Record<string, ImportMapEntry>;
  [k: string]: unknown;
};

type LedgerSymbol = {
  id: string;
  originalName?: string;
  isExport?: boolean;
  exportedAs?: string;
};

type LedgerFile = {
  totals?: { pending: number; claimed: number; done: number };
  symbols?: LedgerSymbol[];
};

type Ledger = {
  files?: Record<string, LedgerFile>;
  crossFileBindings?: unknown[];
};

export type PromoteResult = {
  basename: string;
  promoted: boolean;
  semanticPath: string;
  reason: string;
  issues?: string[];
};

function readJson<T>(p: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8")) as T;
  } catch {
    return null;
  }
}

/** Relative, extension-less import specifier from one semantic file to another. */
export function relativeImport(
  fromSemanticPath: string,
  toSemanticPath: string,
): string {
  const fromDir = path.dirname(fromSemanticPath);
  const withoutExt = toSemanticPath.replace(/\.[cm]?[jt]sx?$/i, "");
  const toNoExt =
    path.posix.basename(withoutExt) === "index"
      ? path.posix.dirname(withoutExt)
      : withoutExt;
  let rel = path.relative(fromDir, toNoExt);
  if (rel === "") rel = ".";
  rel = rel.split(path.sep).join("/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

/**
 * Build import rewrites for one chunk: (1) imports of already-promoted local
 * producers → their semantic relative path; (2) imports of bundled vendor-data
 * chunks (Shiki grammars/themes, data libs) → the bare npm specifier recorded on
 * the manifest, so a consumer's `./rust-XXXX.js` becomes `@shikijs/langs/rust`
 * instead of a dangling local import into a chunk we deliberately didn't restore.
 */
export function buildImportMappings(
  chunk: ManifestFile,
  semanticPath: string,
  importMap: ImportMap,
  manifest?: Manifest,
  consumerRenames?: Record<string, string>,
): SemanticImportMapping[] {
  const mappings: SemanticImportMapping[] = [];
  for (const imp of chunk.imports ?? []) {
    // Vendor data: redirect to the bare specifier regardless of the (stale)
    // edge kind recorded before the target's content was fingerprinted.
    const target = manifest?.files?.[imp.target];
    if (target?.kind === "npm-leaf" && target.vendorSpecifier) {
      mappings.push({
        source: imp.source,
        to: target.vendorSpecifier,
        exports: {},
      });
      continue;
    }
    if (target?.kind === "npm-leaf" && target.npmPackage) {
      const exports = npmLeafExports(target.npmPackage);
      addRenamedImportAliases(exports, imp, consumerRenames);
      mappings.push({
        source: imp.source,
        to: target.npmPackage,
        exports,
      });
      continue;
    }
    if (imp.kind !== "local") continue;
    const producer = importMap.chunks?.[imp.target];
    if (!producer?.restored || producer.status !== "done") continue;
    const exports = { ...(producer.exports ?? {}) };
    addRenamedImportAliases(exports, imp, consumerRenames);
    mappings.push({
      source: imp.source,
      to: relativeImport(semanticPath, producer.restored),
      exports,
    });
  }
  return mappings;
}

function npmLeafExports(npmPackage: string): Record<string, string> {
  if (npmPackage === "tslib") {
    return {
      a: "__rest",
      i: "__generator",
      n: "__awaiter",
      o: "__spreadArray",
      r: "__extends",
      t: "__assign",
    };
  }
  return {};
}

function addRenamedImportAliases(
  exports: Record<string, string>,
  imp: NonNullable<ManifestFile["imports"]>[number],
  consumerRenames?: Record<string, string>,
): void {
  for (const spec of imp.specifiers ?? []) {
    if (spec.kind !== "named") continue;
    const imported =
      (spec as { imported?: string }).imported ??
      (spec as { local?: string }).local;
    const local = (spec as { local?: string }).local;
    if (!imported || !local) continue;
    const replacement = exports[imported];
    if (!replacement) continue;
    if (!exports[local]) exports[local] = replacement;
    for (const renamed of autoRenamesForLocal(local, consumerRenames)) {
      if (!exports[renamed]) exports[renamed] = replacement;
    }
  }
}

function autoRenamesForLocal(
  local: string,
  consumerRenames?: Record<string, string>,
): string[] {
  const matches: Array<{ offset: number; renamed: string }> = [];
  for (const [key, renamed] of Object.entries(consumerRenames ?? {})) {
    const [name, rawOffset] = key.split("@");
    if (name !== local) continue;
    const offset = Number(rawOffset);
    if (!Number.isFinite(offset)) continue;
    matches.push({ offset, renamed });
  }
  return matches
    .sort((a, b) => a.offset - b.offset)
    .map(({ renamed }) => renamed);
}

type Built = {
  /** Deliverable files, paths relative to the target root. */
  files: Array<{ relPath: string; code: string }>;
  /** The path to remove on rollback (the file, or the chunk's directory). */
  promotionRoot: string;
  /** Actual public entry file recorded in IMPORT_MAP. */
  restoredPath: string;
  exportMap: Record<string, string>;
};

type RollbackSnapshot = {
  promotionRoot: string;
  targetPath: string;
  backupPath: string | null;
};

function toPosixPath(input: string): string {
  return input.split(path.sep).join("/");
}

function stripSourceExtension(input: string): string {
  return input.replace(/\.[cm]?[jt]sx?$/i, "");
}

function repoRelativeSourcePath(
  filePath: string | undefined,
  basename: string,
  rootDir?: string,
): string {
  const fromRoot = rootDir
    ? path.posix.join(toPosixPath(rootDir), `${basename}.js`)
    : `${basename}.js`;
  const raw = toPosixPath(filePath ?? fromRoot);
  const refIndex = raw.indexOf("ref/webview/assets/");
  if (refIndex >= 0) return raw.slice(refIndex);
  if (path.isAbsolute(filePath ?? "")) {
    const relative = toPosixPath(path.relative(process.cwd(), filePath!));
    if (!relative.startsWith("..")) return relative;
  }
  return fromRoot;
}

export function ensureProvenanceHeader(
  code: string,
  sourcePath: string,
  description: string,
): string {
  const normalized = `// Restored from ${sourcePath}`;
  if (code.startsWith("// Restored from ")) {
    return code.replace(/^\/\/ Restored from .*(?:\r?\n|$)/, `${normalized}\n`);
  }
  return `${normalized}\n// ${description}\n${code}`;
}

function exportedName(node: t.ExportSpecifier["exported"]): string {
  return t.isIdentifier(node) ? node.name : node.value;
}

export function inferManualExportMap(
  code: string,
  chunk: ManifestFile,
): Record<string, string> {
  const publicExports: string[] = [];
  try {
    const ast = parser.parse(code, {
      sourceType: "module",
      errorRecovery: true,
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      allowUndeclaredExports: true,
      plugins: PARSER_PLUGINS,
    });
    traverse(ast, {
      ExportNamedDeclaration(exportPath) {
        const declaration = exportPath.node.declaration;
        if (t.isVariableDeclaration(declaration)) {
          for (const declarator of declaration.declarations) {
            if (t.isIdentifier(declarator.id)) {
              publicExports.push(declarator.id.name);
            }
          }
        } else if (
          (t.isFunctionDeclaration(declaration) ||
            t.isClassDeclaration(declaration)) &&
          declaration.id
        ) {
          publicExports.push(declaration.id.name);
        }
        for (const spec of exportPath.node.specifiers) {
          if (t.isExportSpecifier(spec))
            publicExports.push(exportedName(spec.exported));
        }
      },
      ExportDefaultDeclaration() {
        publicExports.push("default");
      },
    });
  } catch {
    return {};
  }

  const uniqueExports = [...new Set(publicExports)];
  const sourceExports = chunk.exports ?? [];
  const out: Record<string, string> = {};
  if (sourceExports.length === 1 && uniqueExports.length === 1) {
    out[sourceExports[0]!.exported] = uniqueExports[0]!;
    return out;
  }

  const available = new Set(uniqueExports);
  for (const sourceExport of sourceExports) {
    const exact = [sourceExport.exported, sourceExport.local].find((name) =>
      available.has(name),
    );
    if (!exact) continue;
    out[sourceExport.exported] = exact;
    available.delete(exact);
  }

  // Semantic candidates often keep a descriptive prefix while preserving the
  // source export noun (`absolutelyDarkFg` for source export `fg`). Match that
  // unique suffix before falling back to positional pairing. Do not suffix-match
  // one-letter bundle aliases: `a` must not accidentally bind to `data`.
  for (const sourceExport of sourceExports) {
    if (out[sourceExport.exported] || sourceExport.exported.length < 3) continue;
    const suffix = sourceExport.exported.toLowerCase();
    const matches = [...available].filter((name) =>
      name.toLowerCase().endsWith(suffix),
    );
    if (matches.length !== 1) continue;
    out[sourceExport.exported] = matches[0]!;
    available.delete(matches[0]!);
  }

  const remainingSources = sourceExports.filter(
    (sourceExport) => !out[sourceExport.exported],
  );
  const remainingExports = uniqueExports.filter((name) => available.has(name));
  if (remainingSources.length === remainingExports.length) {
    for (let index = 0; index < remainingSources.length; index += 1) {
      out[remainingSources[index]!.exported] = remainingExports[index]!;
    }
    return out;
  }

  for (const sourceExport of sourceExports) {
    if (out[sourceExport.exported]) continue;
    if (uniqueExports.includes(sourceExport.exported)) {
      out[sourceExport.exported] = sourceExport.exported;
    } else if (uniqueExports.includes(sourceExport.local)) {
      out[sourceExport.exported] = sourceExport.local;
    }
  }
  return out;
}

export function inferCheckpointExportMap(
  code: string,
  chunk: ManifestFile,
  ledgerFile: LedgerFile | undefined,
  autoRenames: Record<string, string>,
): Record<string, string> {
  const sourceExports = chunk.exports ?? [];
  const symbols = ledgerFile?.symbols ?? [];
  const publicNamesByLocal = new Map<string, string[]>();
  const recordPublicName = (local: string, publicName: string): void => {
    const names = publicNamesByLocal.get(local) ?? [];
    if (!names.includes(publicName)) names.push(publicName);
    publicNamesByLocal.set(local, names);
  };
  const ast = parser.parse(code, {
    sourceType: "module",
    errorRecovery: true,
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    allowUndeclaredExports: true,
    plugins: PARSER_PLUGINS,
  });
  traverse(ast, {
    ExportNamedDeclaration(exportPath) {
      const declaration = exportPath.node.declaration;
      if (t.isVariableDeclaration(declaration)) {
        for (const declarator of declaration.declarations) {
          for (const name of Object.keys(t.getBindingIdentifiers(declarator.id))) {
            recordPublicName(name, name);
          }
        }
      } else if (
        (t.isFunctionDeclaration(declaration) ||
          t.isClassDeclaration(declaration)) &&
        declaration.id
      ) {
        recordPublicName(declaration.id.name, declaration.id.name);
      }
      for (const specifier of exportPath.node.specifiers) {
        if (!t.isExportSpecifier(specifier)) continue;
        const local = t.isIdentifier(specifier.local)
          ? specifier.local.name
          : specifier.local.value;
        recordPublicName(local, exportedName(specifier.exported));
      }
    },
    ExportDefaultDeclaration(exportPath) {
      const declaration = exportPath.node.declaration;
      if (t.isIdentifier(declaration)) {
        recordPublicName(declaration.name, "default");
      } else if (
        (t.isFunctionDeclaration(declaration) ||
          t.isClassDeclaration(declaration)) &&
        declaration.id
      ) {
        recordPublicName(declaration.id.name, "default");
      }
    },
  });
  const out: Record<string, string> = {};
  const usedSymbolIds = new Set<string>();
  const usedRenamedBindings = new Set<string>();
  const usedPublicNames = new Set<string>();

  for (const sourceExport of sourceExports) {
    if (out[sourceExport.exported]) {
      throw new Error(
        `duplicate source export alias ${sourceExport.exported} for ${chunk.basename}`,
      );
    }
    const matches = symbols.filter(
      (symbol) =>
        symbol.isExport === true &&
        symbol.exportedAs === sourceExport.exported &&
        symbol.originalName === sourceExport.local,
    );
    if (matches.length !== 1) {
      throw new Error(
        `expected one ledger symbol for ${chunk.basename}:${sourceExport.local} as ${sourceExport.exported}, found ${matches.length}`,
      );
    }
    const symbol = matches[0]!;
    if (usedSymbolIds.has(symbol.id)) {
      throw new Error(
        `ledger symbol ${symbol.id} maps more than one export in ${chunk.basename}`,
      );
    }
    const renamed = autoRenames[symbol.id];
    if (!renamed) {
      throw new Error(
        `missing auto rename for exported symbol ${symbol.id} in ${chunk.basename}`,
      );
    }
    if (usedRenamedBindings.has(renamed)) {
      throw new Error(
        `checkpoint binding ${renamed} maps more than one export in ${chunk.basename}`,
      );
    }
    const publicNames = publicNamesByLocal.get(renamed) ?? [];
    if (publicNames.length !== 1) {
      throw new Error(
        `expected one checkpoint export for ${renamed} in ${chunk.basename}, found ${publicNames.length}`,
      );
    }
    const publicName = publicNames[0]!;
    if (usedPublicNames.has(publicName)) {
      throw new Error(
        `checkpoint public export ${publicName} maps more than one export in ${chunk.basename}`,
      );
    }
    usedSymbolIds.add(symbol.id);
    usedRenamedBindings.add(renamed);
    usedPublicNames.add(publicName);
    out[sourceExport.exported] = publicName;
  }

  return out;
}

/**
 * Build a chunk's deliverable file set (contents + final relative paths) without
 * touching disk. icon/button use the typed semantic-finalize recipe; manual/split
 * use the agent candidate (files/<basename>/candidate.tsx|.ts or a
 * files/<basename>/candidate/ directory) if present, else the mechanical
 * checkpoint (which the gate rejects unless clean). The caller writes the files
 * at their final locations, gates them there (so relative imports to
 * already-promoted siblings resolve), and rolls back `promotionRoot` on failure.
 */
function buildCandidate(
  chunk: ManifestFile,
  args: {
    basename: string;
    semanticPath: string;
    recipe: string;
    fullDir: string;
    importMap: ImportMap;
    rootDir?: string;
    manifest?: Manifest;
    ledgerFile?: LedgerFile;
  },
): Built {
  const { basename, semanticPath, recipe, fullDir } = args;
  // Provenance must be the repo-relative source path (`ref/webview/assets/<chunk>.js`),
  // not the manifest's absolute path — that's what the gate's header check expects.
  const sourcePath = repoRelativeSourcePath(chunk.path, basename, args.rootDir);
  const description = `${basename} chunk restored from the Codex webview bundle.`;
  const consumerRenames =
    readJson<Record<string, string>>(
      path.join(fullDir, "files", basename, "auto-renames.json"),
    ) ?? {};
  const mappings = buildImportMappings(
    chunk,
    semanticPath,
    args.importMap,
    args.manifest,
    consumerRenames,
  );
  const rewrite = (code: string) =>
    mappings.length > 0 ? rewriteSemanticImports(code, mappings) : code;

  if (recipe === "icon" || recipe === "button") {
    const checkpoint = readCheckpoint(fullDir, basename);
    if (checkpoint == null) {
      throw new Error(`no checkpoint to finalize for ${basename}`);
    }
    const result = semanticFinalize(checkpoint, {
      recipe: recipe === "icon" ? "icon" : "button",
      basename,
      sourcePath,
    });
    let files: Built["files"];
    if (result.layout === "single") {
      // One file lands at the planner's chosen path.
      files = [
        {
          relPath: semanticPath,
          code: ensureProvenanceHeader(
            rewrite(result.files[0]!.code),
            sourcePath,
            description,
          ),
        },
      ];
    } else {
      // Directory layout: place every file under the semanticPath directory,
      // dropping semantic-finalize's own top-level dir segment.
      files = result.files.map((f) => ({
        relPath: path.posix.join(
          semanticPath,
          f.path.split("/").slice(1).join("/"),
        ),
        code: ensureProvenanceHeader(rewrite(f.code), sourcePath, description),
      }));
    }
    return {
      files,
      promotionRoot: semanticPath,
      restoredPath: semanticPath,
      exportMap: result.exportMap,
    };
  }

  // manual / split: prefer an agent-rewritten candidate, else the checkpoint.
  const directoryCandidate = readCandidateDirectory(fullDir, basename);
  if (directoryCandidate) {
    const baseDir =
      path.posix.basename(stripSourceExtension(semanticPath)) === "index"
        ? path.posix.dirname(semanticPath)
        : stripSourceExtension(semanticPath);
    const files = directoryCandidate.files.map((f) => {
      const relPath = path.posix.join(baseDir, f.relPath);
      const perFileMappings = buildImportMappings(
        chunk,
        relPath,
        args.importMap,
        args.manifest,
        consumerRenames,
      );
      const code =
        perFileMappings.length > 0
          ? rewriteSemanticImports(f.code, perFileMappings)
          : f.code;
      return {
        relPath,
        code: ensureProvenanceHeader(code, sourcePath, description),
      };
    });
    const entryRelPath = path.posix.join(baseDir, directoryCandidate.entry);
    return {
      files,
      promotionRoot: baseDir,
      restoredPath: entryRelPath,
      exportMap: inferManualExportMap(directoryCandidate.entrySource, chunk),
    };
  }

  const candidate = readCandidate(fullDir, basename);
  const checkpoint = candidate == null ? readCheckpoint(fullDir, basename) : null;
  const source = candidate ?? checkpoint;
  if (source == null) {
    throw new Error(`no candidate or checkpoint for ${basename}`);
  }
  return {
    files: [
      {
        relPath: semanticPath,
        code: ensureProvenanceHeader(rewrite(source), sourcePath, description),
      },
    ],
    promotionRoot: semanticPath,
    restoredPath: semanticPath,
    exportMap:
      candidate != null
        ? inferManualExportMap(source, chunk)
        : inferCheckpointExportMap(
            source,
            chunk,
            args.ledgerFile,
            consumerRenames,
          ),
  };
}

function readCheckpoint(fullDir: string, basename: string): string | null {
  for (const ext of [".tsx", ".ts", ".jsx", ".js"]) {
    const p = path.join(fullDir, "checkpoints", `${basename}${ext}`);
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf-8");
  }
  return null;
}

function readCandidate(fullDir: string, basename: string): string | null {
  for (const ext of [".tsx", ".ts"]) {
    const p = path.join(fullDir, "files", basename, `candidate${ext}`);
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf-8");
  }
  return null;
}

function readCandidateDirectory(
  fullDir: string,
  basename: string,
): {
  files: Array<{ relPath: string; code: string }>;
  entry: string;
  entrySource: string;
} | null {
  const root = path.join(fullDir, "files", basename, "candidate");
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) return null;

  const files: Array<{ relPath: string; code: string }> = [];
  const visit = (dir: string): void => {
    for (const name of fs.readdirSync(dir).sort()) {
      const abs = path.join(dir, name);
      const stat = fs.statSync(abs);
      if (stat.isDirectory()) {
        visit(abs);
        continue;
      }
      if (!/\.[cm]?[jt]sx?$/i.test(name)) continue;
      files.push({
        relPath: toPosixPath(path.relative(root, abs)),
        code: fs.readFileSync(abs, "utf-8"),
      });
    }
  };
  visit(root);
  if (files.length === 0) return null;

  const entry =
    files.find((f) => /^index\.[cm]?[jt]sx?$/i.test(f.relPath))?.relPath ??
    files[0]!.relPath;
  const entrySource = files.find((f) => f.relPath === entry)!.code;
  return { files, entry, entrySource };
}

function candidateUsesOnlyExternalImports(
  fullDir: string,
  basename: string,
): boolean {
  const directory = readCandidateDirectory(fullDir, basename);
  const sources = directory
    ? directory.files.map((file) => file.code)
    : [readCandidate(fullDir, basename)].filter(
        (source): source is string => source != null,
      );
  return (
    sources.length > 0 &&
    sources.every(
      (source) =>
        !/(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s*)["']\./.test(source),
    )
  );
}

function relativeModuleSpecifiers(source: string): string[] {
  return [
    ...source.matchAll(
      /(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s*)["'](\.{1,2}\/[^"']+)["']/g,
    ),
  ].map((match) => match[1]!);
}

function moduleResolutionPaths(input: string): string[] {
  const extension = path.extname(input);
  const base = extension ? input.slice(0, -extension.length) : input;
  return [
    input,
    ...[".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].map(
      (ext) => `${base}${ext}`,
    ),
    ...[".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].map((ext) =>
      path.join(base, `index${ext}`),
    ),
  ];
}

function candidateDependenciesReady(
  target: string,
  fullDir: string,
  file: ManifestFile,
): boolean {
  const semanticPath = file.organization?.semanticPath;
  if (!semanticPath) return false;
  const directory = readCandidateDirectory(fullDir, file.basename);
  const sources = directory
    ? (() => {
        const baseDir =
          path.posix.basename(stripSourceExtension(semanticPath)) === "index"
            ? path.posix.dirname(semanticPath)
            : stripSourceExtension(semanticPath);
        return directory.files.map((candidate) => ({
          relPath: path.posix.join(baseDir, candidate.relPath),
          code: candidate.code,
        }));
      })()
    : (() => {
        const source = readCandidate(fullDir, file.basename);
        return source ? [{ relPath: semanticPath, code: source }] : [];
      })();
  if (sources.length === 0) return false;

  const targetRoot = path.resolve(target);
  const candidateFiles = new Set(
    sources.map((source) => path.resolve(target, source.relPath)),
  );
  for (const source of sources) {
    const importerDir = path.dirname(path.resolve(target, source.relPath));
    for (const specifier of relativeModuleSpecifiers(source.code)) {
      const resolved = path.resolve(importerDir, specifier);
      const relative = path.relative(targetRoot, resolved);
      if (relative.startsWith("..") || path.isAbsolute(relative)) return false;
      const paths = moduleResolutionPaths(resolved);
      if (
        !paths.some(
          (candidatePath) =>
            candidateFiles.has(candidatePath) || fs.existsSync(candidatePath),
        )
      ) {
        return false;
      }
    }
  }
  return true;
}

function candidateEntrySource(fullDir: string, basename: string): string | null {
  return (
    readCandidateDirectory(fullDir, basename)?.entrySource ??
    readCandidate(fullDir, basename) ??
    readCheckpoint(fullDir, basename)
  );
}

function plannedRestoredPath(
  fullDir: string,
  file: ManifestFile,
): string | null {
  const semanticPath = file.organization?.semanticPath;
  if (!semanticPath) return null;
  const directory = readCandidateDirectory(fullDir, file.basename);
  if (!directory) return semanticPath;
  const baseDir =
    path.posix.basename(stripSourceExtension(semanticPath)) === "index"
      ? path.posix.dirname(semanticPath)
      : stripSourceExtension(semanticPath);
  return path.posix.join(baseDir, directory.entry);
}

function plannedImportMapForWave(
  importMap: ImportMap,
  manifest: Manifest,
  ledger: Ledger,
  fullDir: string,
  wave: FrontierItem[],
): ImportMap {
  const planned: ImportMap = {
    ...importMap,
    chunks: { ...(importMap.chunks ?? {}) },
  };
  for (const item of wave) {
    const file = manifest.files[item.basename];
    const directory = file && readCandidateDirectory(fullDir, item.basename);
    const candidate = file && readCandidate(fullDir, item.basename);
    const checkpoint = file && readCheckpoint(fullDir, item.basename);
    const source = directory?.entrySource ?? candidate ?? checkpoint;
    const restored = file && plannedRestoredPath(fullDir, file);
    if (!file || !source || !restored) continue;
    const autoRenames =
      readJson<Record<string, string>>(
        path.join(fullDir, "files", item.basename, "auto-renames.json"),
      ) ?? {};
    planned.chunks![item.basename] = {
      ...(planned.chunks![item.basename] ?? {}),
      restored,
      exports:
        directory || candidate
          ? inferManualExportMap(source, file)
          : inferCheckpointExportMap(
              source,
              file,
              ledger.files?.[item.basename],
              autoRenames,
            ),
      status: "done",
    };
  }
  return planned;
}

/**
 * Find an organized strongly-connected component whose dependencies outside
 * the component are already promoted. The whole component can be written and
 * gated as one promotion wave, so its relative imports resolve without
 * weakening the normal producer-before-consumer rule.
 */
function promotableCycleWave(
  manifest: Manifest,
  ledger: Ledger,
  fullDir: string,
  target: string,
  attempted: Set<string>,
  only?: Set<string> | null,
): FrontierItem[] {
  const pending = Object.values(manifest.files).filter(
    (file) =>
      file.kind === "local" && !file.stages?.promoted && !file.stages?.faced,
  );
  const pendingNames = new Set(pending.map((file) => file.basename));
  const edges = new Map<string, string[]>();
  for (const file of pending) {
    edges.set(
      file.basename,
      (file.imports ?? [])
        .filter((imp) => imp.kind === "local" && pendingNames.has(imp.target))
        .map((imp) => imp.target),
    );
  }

  let nextIndex = 0;
  const indices = new Map<string, number>();
  const lowLinks = new Map<string, number>();
  const stack: string[] = [];
  const onStack = new Set<string>();
  const components: string[][] = [];
  const visit = (basename: string): void => {
    indices.set(basename, nextIndex);
    lowLinks.set(basename, nextIndex);
    nextIndex += 1;
    stack.push(basename);
    onStack.add(basename);

    for (const dependency of edges.get(basename) ?? []) {
      if (!indices.has(dependency)) {
        visit(dependency);
        lowLinks.set(
          basename,
          Math.min(lowLinks.get(basename)!, lowLinks.get(dependency)!),
        );
      } else if (onStack.has(dependency)) {
        lowLinks.set(
          basename,
          Math.min(lowLinks.get(basename)!, indices.get(dependency)!),
        );
      }
    }

    if (lowLinks.get(basename) !== indices.get(basename)) return;
    const component: string[] = [];
    for (;;) {
      const member = stack.pop()!;
      onStack.delete(member);
      component.push(member);
      if (member === basename) break;
    }
    components.push(component);
  };
  for (const file of pending) {
    if (!indices.has(file.basename)) visit(file.basename);
  }

  const candidates = components.filter((component) => {
    const members = new Set(component);
    const cyclic =
      component.length > 1 ||
      (edges.get(component[0]!) ?? []).includes(component[0]!);
    if (!cyclic) return false;
    return component.every((basename) => {
      const file = manifest.files[basename]!;
      if (!file.organization?.semanticPath || attempted.has(basename)) {
        return false;
      }
      if (only && !only.has(basename)) return false;
      if (!candidateEntrySource(fullDir, basename)) return false;
      const candidateReplacesDependencies =
        candidateUsesOnlyExternalImports(fullDir, basename) ||
        candidateDependenciesReady(target, fullDir, file);
      return (file.imports ?? []).every((imp) => {
        if (imp.kind !== "local") return true;
        const dependency = manifest.files[imp.target];
        if (!dependency || dependency.kind !== "local") return true;
        return (
          dependency.stages?.promoted ||
          dependency.stages?.faced ||
          members.has(imp.target) ||
          candidateReplacesDependencies
        );
      });
    });
  });
  candidates.sort((a, b) => {
    const depthA = Math.max(...a.map((name) => manifest.files[name]!.depth));
    const depthB = Math.max(...b.map((name) => manifest.files[name]!.depth));
    return depthB - depthA || a[0]!.localeCompare(b[0]!);
  });
  const component = candidates[0];
  if (!component) return [];
  return component
    .map((basename) => ({
      basename,
      stage: "promote" as const,
      pending: ledger.files[basename]?.totals.pending ?? 0,
      depth: manifest.files[basename]!.depth,
    }))
    .sort((a, b) => b.depth - a.depth || a.basename.localeCompare(b.basename));
}

function qualityOptionsFor(
  classification: string | undefined,
  tier: "readable" | "deep",
): QualityGateOptions {
  if (classification === "vendor-runtime" || classification === "boundary") {
    return {
      ...DEFAULT_OPTIONS,
      vendored: true,
      allowFlat: true,
      allowMechanicalNames: true,
    };
  }
  if (classification === "data-asset") {
    return {
      ...DEFAULT_OPTIONS,
      allowFlat: true,
    };
  }
  // Readable tier ships organized-but-untyped output; deep tier enforces types.
  return { ...DEFAULT_OPTIONS, allowUntyped: tier === "readable" };
}

export type PromoteOrganizedOptions = {
  target: string;
  dryRun?: boolean;
  owner?: string;
  only?: Set<string> | null;
  limit?: number;
  /** "deep" (default) enforces TS types at promote; "readable" allows untyped. */
  tier?: "readable" | "deep";
  log?: (msg: string) => void;
  /** Emit a throttled progress line as the frontier drains (CLI sets this). */
  progress?: boolean;
};

export function promoteOrganized(
  opts: PromoteOrganizedOptions,
): PromoteResult[] {
  const log = opts.log ?? (() => {});
  const paths = pathsForTarget(opts.target);
  const manifest = readJson<Manifest>(paths.manifestPath);
  if (!manifest) throw new Error(`manifest not found: ${paths.manifestPath}`);
  const ledger = readJson<Ledger>(paths.ledgerPath) ?? {
    files: {},
    crossFileBindings: [],
  };
  const importMapPath = path.join(opts.target, "IMPORT_MAP.json");
  const importMap = readJson<ImportMap>(importMapPath) ?? {};
  if (!importMap.chunks) importMap.chunks = {};

  const owner = opts.owner ?? `agent-${process.pid}`;
  const results: PromoteResult[] = [];
  // In dry-run we still write deliverables to disk (so a consumer's relative
  // imports to already-promoted siblings resolve during gating), then remove
  // them all at the end.
  const dryWritten: RollbackSnapshot[] = [];
  let rollbackCounter = 0;

  const snapshotBeforeWrite = (promotionRoot: string): RollbackSnapshot => {
    const targetPath = path.join(opts.target, promotionRoot);
    if (path.resolve(targetPath) === path.resolve(opts.target)) {
      throw new Error("refusing to snapshot the restore root");
    }
    if (!fs.existsSync(targetPath)) {
      return { promotionRoot, targetPath, backupPath: null };
    }
    const snapshotRoot = path.join(paths.fullDir, "rollback-snapshots");
    fs.mkdirSync(snapshotRoot, { recursive: true });
    const backupPath = path.join(
      snapshotRoot,
      `${process.pid}-${Date.now()}-${rollbackCounter++}`,
    );
    fs.cpSync(targetPath, backupPath, { recursive: true });
    return { promotionRoot, targetPath, backupPath };
  };

  const discardSnapshot = (snapshot: RollbackSnapshot): void => {
    if (snapshot.backupPath) {
      fs.rmSync(snapshot.backupPath, { recursive: true, force: true });
    }
  };

  const FORMAT_EXT = /\.(tsx?|jsx?|mjs|cjs)$/;
  const writeBuilt = (built: Built): void => {
    for (const f of built.files) {
      const dest = path.join(opts.target, f.relPath);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, f.code);
    }
  };
  // Format a whole wave's written deliverables in ONE prettier spawn (instead of
  // one cold-start per file). Runs BEFORE the wave is gated and copied, so
  // promoted files in restored/ are never raw @babel/generator output (no blank
  // lines, 400-char lines, multi-line JSX returns without parens), and the gate
  // reads the formatted output. Degrades gracefully when prettier is unavailable
  // (format.ts probes it) — the files stay as-written and gating proceeds on them.
  const formatWave = (builts: Built[]): void => {
    const targets = builts
      .flatMap((built) => built.files.map((f) => path.join(opts.target, f.relPath)))
      .filter((dest) => FORMAT_EXT.test(dest));
    if (targets.length === 0) return;
    const fmt = formatPaths(targets);
    if (!fmt.ok && fmt.stderr) {
      log(`  prettier skipped for wave (${targets.length} file(s)): ${fmt.stderr.trim()}`);
    }
  };
  const rollback = (snapshot: RollbackSnapshot): void => {
    fs.rmSync(snapshot.targetPath, { recursive: true, force: true });
    if (snapshot.backupPath) {
      fs.cpSync(snapshot.backupPath, snapshot.targetPath, { recursive: true });
      discardSnapshot(snapshot);
    }
    const domain = path.dirname(snapshot.targetPath);
    try {
      if (domain !== opts.target && fs.readdirSync(domain).length === 0) {
        fs.rmSync(domain, { recursive: true, force: true });
      }
    } catch {
      // best-effort
    }
  };

  let processed = 0;
  let promotedCount = 0;
  const pendingTotal = Object.values(manifest.files).filter(
    (f) => f.kind === "local" && f.organization && !f.stages?.promoted,
  ).length;
  const prog = opts.progress
    ? new Progress({ label: "promote", total: pendingTotal })
    : null;
  // Chunks we tried this run but couldn't promote (gate fail / lock / error) —
  // skip them so the loop drains instead of re-picking the same stuck chunk.
  const attempted = new Set<string>();
  const dependencyReadyCache = new Map<string, boolean>();
  // Drain the promote frontier one WAVE at a time. Producers promote before
  // consumers, so every chunk in a frontier snapshot already has its producer
  // deps promoted by earlier waves — the chunks in a wave are independent of
  // each other. That lets us build+write the whole wave, run prettier ONCE over
  // all of it (one spawn instead of one cold-start per file — the batching win),
  // then gate+commit each chunk. Consumers of a chunk promoted this wave surface
  // in the next wave's frontier (in-memory manifest mutation advances it).
  type StagedChunk = {
    basename: string;
    file: (typeof manifest.files)[string];
    built: Built;
    rollbackSnapshot: RollbackSnapshot;
    lockHeld: boolean;
  };
  promotionLoop: for (;;) {
    if (opts.limit !== undefined && processed >= opts.limit) break;
    const frontier = computeFrontier(manifest, ledger as never, paths.fullDir, {
      stage: "promote",
      dependencyReady: (file) => {
        let ready = dependencyReadyCache.get(file.basename);
        if (ready === undefined) {
          ready =
            candidateUsesOnlyExternalImports(paths.fullDir, file.basename) ||
            candidateDependenciesReady(opts.target, paths.fullDir, file);
          dependencyReadyCache.set(file.basename, ready);
        }
        return ready;
      },
    });
    let wave = frontier.filter((item) => {
      const file = manifest.files[item.basename];
      if (!file?.organization?.semanticPath) return false;
      if (opts.only && !opts.only.has(item.basename)) return false;
      if (attempted.has(item.basename)) return false;
      return true;
    });
    let waveImportMap = importMap;
    let atomicWave = false;
    if (wave.length === 0) {
      wave = promotableCycleWave(
        manifest,
        ledger as never,
        paths.fullDir,
        opts.target,
        attempted,
        opts.only,
      );
      if (wave.length > 0) {
        atomicWave = true;
        waveImportMap = plannedImportMapForWave(
          importMap,
          manifest,
          ledger,
          paths.fullDir,
          wave,
        );
      }
    }
    if (opts.limit !== undefined) {
      wave = wave.slice(0, Math.max(0, opts.limit - processed));
    }
    if (wave.length === 0) break;

    // ---- Phase A: build + write every candidate in the wave (unformatted).
    const staged: StagedChunk[] = [];
    for (const item of wave) {
      const basename = item.basename;
      const file = manifest.files[basename]!;
      const org = file.organization!;
      processed++;
      prog?.tick(1, `${promotedCount} promoted · ${attempted.size} blocked`);

      let lockHeld = false;
      let rollbackSnapshot: RollbackSnapshot | null = null;
      try {
        if (!opts.dryRun) {
          acquireLock(paths.fullDir, basename, "promote", owner);
          lockHeld = true;
        }
        const built = buildCandidate(file, {
          basename,
          semanticPath: org.semanticPath,
          recipe: org.recipe ?? "manual",
          fullDir: paths.fullDir,
          importMap: waveImportMap,
          rootDir: manifest.rootDir,
          manifest,
          ledgerFile: ledger.files?.[basename],
        });
        // Write at the FINAL location so relative imports to promoted siblings
        // resolve, gate in place, then keep or roll back.
        rollbackSnapshot = snapshotBeforeWrite(built.promotionRoot);
        writeBuilt(built);
        staged.push({ basename, file, built, rollbackSnapshot, lockHeld });
      } catch (err) {
        if (rollbackSnapshot) rollback(rollbackSnapshot);
        if (lockHeld) {
          try {
            releaseLock(paths.fullDir, basename, "promote", { force: true });
          } catch {
            // best-effort
          }
        }
        if (err instanceof LockHeldError) {
          log(`promote: ${basename} locked by ${err.info.owner}; skipping`);
          attempted.add(basename); // another agent owns it this run
          results.push({
            basename,
            promoted: false,
            semanticPath: org.semanticPath,
            reason: "locked by another agent",
          });
          continue;
        }
        log(`promote: ERROR ${basename} ${(err as Error).message}`);
        results.push({
          basename,
          promoted: false,
          semanticPath: org.semanticPath,
          reason: (err as Error).message,
        });
        attempted.add(basename); // avoid re-picking a hard-failing chunk
      }
    }

    // ---- Phase B: format the whole wave in one prettier spawn (before gating).
    formatWave(staged.map((s) => s.built));

    // A strongly-connected component is one logical unit: every member was
    // written so its peers' relative imports resolve. If any member fails the
    // gate, roll the whole wave back before committing any manifest/import-map
    // state, otherwise a passing member could retain imports to a rolled-back
    // peer.
    if (atomicWave) {
      const issueMap = new Map<string, string[]>();
      for (const s of staged) {
        const qopts = qualityOptionsFor(
          s.file.organization?.classification,
          opts.tier ?? "deep",
        );
        issueMap.set(
          s.basename,
          [
            ...new Set(
              s.built.files.flatMap((f) => {
                const dest = path.join(opts.target, f.relPath);
                const code = fs.existsSync(dest)
                  ? fs.readFileSync(dest, "utf-8")
                  : f.code;
                return analyzeSource(code, dest, qopts).issues.map(
                  (issue) => issue.code,
                );
              }),
            ),
          ],
        );
      }
      if ([...issueMap.values()].some((issues) => issues.length > 0)) {
        for (const s of staged) {
          rollback(s.rollbackSnapshot);
          if (s.lockHeld) {
            try {
              releaseLock(paths.fullDir, s.basename, "promote", {
                force: true,
              });
            } catch {
              // best-effort
            }
          }
          const issues = issueMap.get(s.basename) ?? [];
          log(
            issues.length > 0
              ? `promote: FAIL ${s.basename} (${issues.join(", ")})`
              : `promote: BLOCKED ${s.basename} (cyclic peer gate failed)`,
          );
          results.push({
            basename: s.basename,
            promoted: false,
            semanticPath: s.file.organization!.semanticPath,
            reason:
              issues.length > 0
                ? "gate rejected candidate"
                : "cyclic peer gate failed",
            ...(issues.length > 0 ? { issues } : {}),
          });
          attempted.add(s.basename);
        }
        continue promotionLoop;
      }
    }

    // ---- Phase C: gate the FORMATTED output, then commit or roll back per chunk.
    for (const s of staged) {
      const { basename, file, built } = s;
      const org = file.organization!;
      let rollbackSnapshot: RollbackSnapshot | null = s.rollbackSnapshot;
      try {
        const qopts = qualityOptionsFor(org.classification, opts.tier ?? "deep");
        const issueDetails = built.files.map((f) => {
          const dest = path.join(opts.target, f.relPath);
          // Gate the on-disk (formatted) output; fall back to the built code
          // if the file vanished (never expected — snapshot still rolls back).
          let code = f.code;
          try {
            code = fs.readFileSync(dest, "utf-8");
          } catch {
            // keep built code
          }
          return {
            relPath: f.relPath,
            issues: analyzeSource(code, dest, qopts).issues.map((i) => i.code),
          };
        });
        const issues = [
          ...new Set(issueDetails.flatMap((detail) => detail.issues)),
        ];

        if (issues.length > 0) {
          rollback(rollbackSnapshot);
          rollbackSnapshot = null;
          const detail = issueDetails
            .filter((item) => item.issues.length > 0)
            .map((item) => `${item.relPath}: ${item.issues.join(", ")}`)
            .join("; ");
          log(`promote: FAIL ${basename} (${detail})`);
          results.push({
            basename,
            promoted: false,
            semanticPath: org.semanticPath,
            reason: "gate rejected candidate",
            issues,
          });
          attempted.add(basename);
          continue; // resumable: leave unpromoted, drain the rest
        }

        // Gate passed — record success in-memory (so downstream consumers see it).
        importMap.chunks![basename] = {
          ...(importMap.chunks![basename] ?? {}),
          restored: built.restoredPath,
          ...(Object.keys(built.exportMap).length > 0
            ? { exports: built.exportMap }
            : {}),
          status: "done",
        };
        file.stages.promoted = true;
        file.lastUpdated = new Date().toISOString();
        manifest.updatedAt = new Date().toISOString();

        if (opts.dryRun) {
          dryWritten.push(rollbackSnapshot!);
          rollbackSnapshot = null;
          log(`[dry] ${basename} → ${built.restoredPath}  PASS`);
          results.push({
            basename,
            promoted: false,
            semanticPath: built.restoredPath,
            reason: "would promote",
          });
        } else {
          writeJsonAtomic(importMapPath, importMap);
          writeJsonAtomic(paths.manifestPath, manifest);
          promotedCount++;
          log(`promote: ${basename} → ${built.restoredPath}`);
          results.push({
            basename,
            promoted: true,
            semanticPath: built.restoredPath,
            reason: "promoted",
          });
          if (rollbackSnapshot) {
            discardSnapshot(rollbackSnapshot);
            rollbackSnapshot = null;
          }
        }
      } catch (err) {
        if (rollbackSnapshot) {
          rollback(rollbackSnapshot);
          rollbackSnapshot = null;
        }
        log(`promote: ERROR ${basename} ${(err as Error).message}`);
        results.push({
          basename,
          promoted: false,
          semanticPath: org.semanticPath,
          reason: (err as Error).message,
        });
        attempted.add(basename); // avoid re-picking a hard-failing chunk
      } finally {
        if (s.lockHeld) {
          try {
            releaseLock(paths.fullDir, basename, "promote", { force: true });
          } catch {
            // best-effort
          }
        }
      }
    }
  }

  prog?.done(`${promotedCount} promoted · ${attempted.size} blocked`);
  // A dry run leaves no public files behind (deepest paths first).
  if (opts.dryRun) {
    for (const snapshot of [...dryWritten].reverse()) rollback(snapshot);
  }
  return results;
}

// ---- CLI -------------------------------------------------------------------

const USAGE = `Usage: bun scripts/promote-organized.ts --target <dir> [options]

Drain the promote frontier: build each organized chunk's typed deliverable, gate
it, copy it to its semantic path, update IMPORT_MAP.json, and rewrite imports.

Options:
  --target <dir>     Target restore root whose _full/ to operate on (required).
  --dry-run          Preview every move + gate verdict; write nothing.
  --owner <id>       Lock owner identifier (default: agent-<pid>).
  --only <list>      Comma-separated basenames to restrict promotion to.
  --limit <n>        Promote at most n chunks this run.
  --tier <t>         deep (default, enforces TS types) | readable (allows untyped).

Exit codes: 0 success · 1 I/O · 64 usage.
`;

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      args: process.argv.slice(2),
      options: {
        target: { type: "string" },
        "dry-run": { type: "boolean", default: false },
        owner: { type: "string" },
        only: { type: "string" },
        limit: { type: "string" },
        tier: { type: "string" },
      },
      allowPositionals: true,
    });
  } catch (err) {
    console.error(USAGE);
    console.error((err as Error).message);
    process.exit(64);
  }
  const { values } = parsed;
  if (!values.target) {
    console.error(USAGE);
    process.exit(64);
  }
  const only = values.only
    ? new Set(
        values.only
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      )
    : null;
  const limit = values.limit ? parseInt(values.limit, 10) : undefined;
  const tier = values.tier === "readable" ? "readable" : "deep";

  try {
    const results = promoteOrganized({
      target: values.target,
      dryRun: values["dry-run"],
      owner: values.owner,
      only,
      limit,
      tier,
      progress: true,
      log: (msg) => console.error(msg),
    });
    const promoted = results.filter((r) => r.promoted).length;
    const failed = results.filter((r) => !r.promoted && r.issues).length;
    console.error(
      `promote-organized: ${promoted} promoted · ${failed} gate-failed · ${results.length} considered`,
    );
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
}

if (import.meta.main) {
  await main();
}
