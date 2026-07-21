# Codex App Reference Deep Restore Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Do not delegate unless the user later authorizes sub-agents. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the existing semantic `restored/` tree to ChatGPT/Codex bundle version `26.715.52143` and complete a deep, typed, acceptance-reviewed restoration of every reachable project-local chunk.

**Architecture:** Rebuild the hidden graph and ledger from the current `index.html` entry while preserving the public `restored/` tree as semantic evidence. Generate mechanical checkpoints only under `.deobfuscate-javascript`, re-derive current alias maps from current AST bindings, reuse public modules only after fingerprint verification, and promote typed semantic candidates through the shared import map. Completion is the full-tree quality gate plus an empty promotion frontier and Stage 3 acceptance for every delivered file.

**Tech Stack:** Bun, TypeScript, Babel AST scripts in `.agents/skills/deobfuscate-javascript`, Prettier, Git.

---

### Task 1: Verify the restoration tooling and current entry

**Files:**

- Read: `ref/webview/index.html`
- Read: `ref/package.json`
- Test: `.agents/skills/deobfuscate-javascript/scripts/*.test.ts`

- [ ] **Step 1: Run the deobfuscation skill test suite**

Run:

```bash
cd /home/zhang/decode-codex/.agents/skills/deobfuscate-javascript
bun test
```

Expected: all tests pass with exit code `0`. If a skill test fails, diagnose and fix the tool before changing restoration state; commit the skill fix separately.

- [ ] **Step 2: Discover and validate the current app entry**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/check-entry.ts --discover --root ref/webview/assets
```

Expected: exit `0`, discovered script root `ref/webview/assets/index-DndM3sjm.js`, and no vendor-leaf warning.

- [ ] **Step 3: Check the entry for recoverable sourcemaps**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/sourcemap-check.ts ref/webview/assets/index-DndM3sjm.js
```

Expected for this formatted production bundle: exit `1` and `no sourcemap`. If a recoverable map exists, stop the rename pipeline and recover originals from the map.

- [ ] **Step 4: Record the verified input version**

Run:

```bash
cd /home/zhang/decode-codex
node -e 'const p=require("./ref/package.json"); console.log(`${p.name} ${p.version}`)'
```

Expected: `openai-codex-electron 26.715.52143`.

### Task 2: Preserve old coordination state and rebuild the current graph

**Files:**

- Preserve: `restored/.deobfuscate-javascript/_full/manifest.json`
- Preserve: `restored/.deobfuscate-javascript/_full/ledger.json`
- Replace: `restored/.deobfuscate-javascript/_full/manifest.json`
- Create/update: `restored/.deobfuscate-javascript/_full/files/**/original.js`

- [ ] **Step 1: Preserve the stale old-entry coordination files**

Run:

```bash
cd /home/zhang/decode-codex
mkdir -p restored/.deobfuscate-javascript/_legacy-index-BloiNxW7
cp restored/.deobfuscate-javascript/_full/manifest.json restored/.deobfuscate-javascript/_legacy-index-BloiNxW7/manifest.json
cp restored/.deobfuscate-javascript/_full/ledger.json restored/.deobfuscate-javascript/_legacy-index-BloiNxW7/ledger.json
```

Expected: the prior 601-local/368-npm-leaf state remains available as hidden migration evidence.

- [ ] **Step 2: Rebuild the import graph from the current entry without a line cap**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/build-import-graph.ts ref/webview/assets/index-DndM3sjm.js --target restored --root ref/webview/assets --max-lines 0 --rebuild
```

Expected: exit `0`; manifest entry is `index-DndM3sjm`; `oversized-local` count is `0`; each reachable local chunk has a hidden workspace.

- [ ] **Step 3: Verify graph invariants**

Run:

```bash
cd /home/zhang/decode-codex
node - <<'NODE'
const fs = require("fs");
const manifest = JSON.parse(fs.readFileSync("restored/.deobfuscate-javascript/_full/manifest.json", "utf8"));
const files = Object.values(manifest.files);
const oversized = files.filter((file) => file.kind === "oversized-local");
const missing = files.filter((file) => file.kind === "local" && !fs.existsSync(file.path));
console.log({ entry: manifest.entry, files: files.length, oversized: oversized.length, missing: missing.length });
if (manifest.entry !== "index-DndM3sjm" || oversized.length || missing.length) process.exit(1);
NODE
```

Expected: entry `index-DndM3sjm`, `oversized: 0`, `missing: 0`.

### Task 3: Build the current symbol ledger and mechanical checkpoints

**Files:**

- Replace: `restored/.deobfuscate-javascript/_full/ledger.json`
- Create/update: `restored/.deobfuscate-javascript/_full/files/**/symbols.json`
- Create/update: `restored/.deobfuscate-javascript/_full/checkpoints/*.tsx`
- Create/update: `restored/.deobfuscate-javascript/_full/auto-restore-report.json`

- [ ] **Step 1: Build the current symbol ledger from scratch**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/build-symbol-ledger.ts --target restored --manifest restored/.deobfuscate-javascript/_full/manifest.json --out restored/.deobfuscate-javascript/_full/ledger.json --rebuild
```

Expected: exit `0`; every `kind: local` file is extracted and has a `symbols.json` workspace file.

- [ ] **Step 2: Generate Stage 2 checkpoints in hidden staging**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/auto-restore-full.ts --target restored --format
```

Expected: exit `0`; checkpoints exist only under `_full/checkpoints/`; no `--write-target-checkpoints` output lands directly in public `restored/`.

- [ ] **Step 3: Inspect checkpoint quality and worklist status**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts status --target restored
node - <<'NODE'
const fs = require("fs");
const report = JSON.parse(fs.readFileSync("restored/.deobfuscate-javascript/_full/auto-restore-report.json", "utf8"));
const rows = Array.isArray(report) ? report : report.files || [];
const rewrite = rows.filter((row) => row.needsAgentRewrite);
console.log({ checkpoints: rows.length, needsAgentRewrite: rewrite.length });
NODE
```

Expected: checkpoint totals match the local graph; `needsAgentRewrite` remains a staging signal, not a completion claim.

### Task 4: Reconcile current chunks with the existing semantic tree

**Files:**

- Read/update: `restored/IMPORT_MAP.json`
- Read: `restored/**/*.ts`
- Read: `restored/**/*.tsx`
- Update: `restored/.deobfuscate-javascript/_full/manifest.json`
- Update: `restored/.deobfuscate-javascript/_full/ledger.json`

- [ ] **Step 1: Produce the exact and stable-stem migration inventory**

Run:

```bash
cd /home/zhang/decode-codex
node - <<'NODE'
const fs = require("fs");
const manifest = JSON.parse(fs.readFileSync("restored/.deobfuscate-javascript/_full/manifest.json", "utf8"));
const chunks = JSON.parse(fs.readFileSync("restored/IMPORT_MAP.json", "utf8")).chunks || {};
const stripHash = (name) => {
  for (let index = name.lastIndexOf("-"); index > 0; index = name.lastIndexOf("-", index - 1)) {
    const suffix = name.slice(index + 1);
    if (/^[A-Za-z0-9_-]{6,12}$/.test(suffix) && /[0-9_]/.test(suffix)) {
      return name.slice(0, index).replace(/-+$/, "");
    }
  }
  return name;
};
const byStem = new Map();
for (const [name, value] of Object.entries(chunks)) {
  const stem = stripHash(name);
  const list = byStem.get(stem) || [];
  list.push({ name, restored: value.restored, status: value.status });
  byStem.set(stem, list);
}
const local = Object.values(manifest.files).filter((file) => file.kind === "local");
const exact = local.filter((file) => chunks[file.basename]);
const stable = local.filter((file) => !chunks[file.basename] && byStem.has(stripHash(file.basename)));
const newChunks = local.filter((file) => !chunks[file.basename] && !byStem.has(stripHash(file.basename)));
console.log(JSON.stringify({ local: local.length, exact: exact.length, stableStemCandidates: stable.length, newChunks: newChunks.length }, null, 2));
NODE
```

Expected: exact matches may be zero after a full hash rotation; stable-stem candidates and genuinely new chunks become the migration worklist.

- [ ] **Step 2: Verify each stable-stem candidate against current bindings**

For each candidate, read its current tail export table, binding definition, checkpoint, old import-map record, and existing semantic file. Use current string literals, prop sets, route/query keys, and call sites as evidence. Do not accept an old alias letter as identity.

Run the direct compatibility resolver when a producer barrel is involved:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/resolve-direct-compat-exports.ts restored/boundaries/current-ref --json
```

Expected: every reused public module has current-definition evidence; added or removed exports are recorded in the current map rather than inherited blindly.

- [ ] **Step 3: Reuse verified semantic paths and mark only real body restorations**

Update the current manifest organization and shared import map so verified prior modules keep their semantic public paths. For current aggregator chunks, keep alias-map reconciliation separate from body restoration; do not mark a re-export-only producer barrel as a restored body.

Run after each batch:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/quality-gate.ts restored --allow-organize-incomplete
```

Expected during migration: failures may remain for incomplete chunks, but no reused module is flagged for stale aliases, missing provenance, mechanical output, or aggregator-body substitution.

### Task 5: Plan semantic organization for new and changed chunks

**Files:**

- Create/update: `restored/.deobfuscate-javascript/_full/organize-plan.json`
- Update: `restored/.deobfuscate-javascript/_full/manifest.json`

- [ ] **Step 1: Generate the organization plan**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/plan-organize.ts --target restored
```

Expected: icon/button/single-export recipes are proposed automatically; app-feature rows remain `needs-review` until assigned a semantic domain and kebab path.

- [ ] **Step 2: Review every `needs-review` and collision row**

Use existing domains in `restored/` first. Assign feature chunks with exact commands of this form after identifying their semantic role:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts set-organization index-DndM3sjm --domain app-shell --semantic-path app-shell/webview-entry.ts --recipe manual --classification app-feature --target restored
```

Expected: no large local app-feature is assigned to `vendor/`; no two chunks claim the same semantic path without a verified reuse decision.

- [ ] **Step 3: Apply approved organization rows**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/plan-organize.ts --target restored --apply
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts status --target restored
```

Expected: every current local chunk is either organized for semantic promotion or explicitly listed as blocked awaiting a typed candidate.

### Task 6: Resolve vendor and runtime boundaries before public edits

**Files:**

- Read/update as required: `restored/vendor/**`
- Read/update as required: `restored/boundaries/**`
- Update as required: `restored/IMPORT_MAP.json`
- Update as required: nearest dependency metadata if one already exists

- [ ] **Step 1: Load the vendor and boundary rules before the first edit**

Read completely:

```bash
cd /home/zhang/decode-codex
sed -n '1,9999p' .agents/skills/deobfuscate-javascript/reference/vendor-npm.md
sed -n '1,9999p' .agents/skills/deobfuscate-javascript/reference/boundaries.md
```

Expected: package shims, forked wrappers, and genuine runtime boundaries are classified using the documented evidence order.

- [ ] **Step 2: Audit the whole vendor directory**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts restored/vendor
```

Expected: exit `0` before any vendor edit. Fix existing npm-shim failures first if the audit fails.

- [ ] **Step 3: Gate each vendor target before editing**

After classifying every current vendor target, write the exact public paths and
their approved intents to
`restored/.deobfuscate-javascript/_full/vendor-decisions.json`. Each row has
`path` and an `intent` of `npm-shim` or `local-body`. Then run every decision:

```bash
cd /home/zhang/decode-codex
node - <<'NODE'
const fs = require("fs");
const { spawnSync } = require("child_process");
const decisions = JSON.parse(fs.readFileSync("restored/.deobfuscate-javascript/_full/vendor-decisions.json", "utf8"));
for (const decision of decisions) {
  const result = spawnSync("bun", [
    ".agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts",
    decision.path,
    "--decision",
    "--intent",
    decision.intent,
  ], { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}
NODE
```

Expected: every intent gate exits `0` before its file is edited; unresolved
targets are absent from the decision file and remain blocked.

### Task 7: Rewrite typed semantic candidates and drain the promote frontier

**Files:**

- Create/update: candidate files under `restored/.deobfuscate-javascript/_full/files/`
- Create/update through promotion: semantic `.ts` and `.tsx` files directly under existing `restored/` domains
- Update through promotion: `restored/IMPORT_MAP.json`

- [ ] **Step 1: List the current blocked and ready work**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts status --target restored
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts frontier --stage promote --target restored
```

Expected: a finite list of ready chunks and blocked chunks lacking candidates.

- [ ] **Step 2: Rewrite each manual or split candidate**

For each blocked chunk, read the current original, checkpoint, symbols, producer/consumer imports, existing semantic siblings, and import-map evidence. Write `candidate.tsx` with semantic names, typed public APIs, current provenance, resolved npm imports, and semantic local imports. Split files with at least three exports, registry exports, or more than 1000 lines using the existing split tools.

Run per candidate:

```bash
cd /home/zhang/decode-codex
restore_basename=$(bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts status --target restored | sed -nE 's#.*files/([^/]+)/candidate\.tsx.*#\1#p' | head -n 1)
test -n "$restore_basename"
restore_candidate="restored/.deobfuscate-javascript/_full/files/$restore_basename/candidate.tsx"
bun .agents/skills/deobfuscate-javascript/scripts/format.ts "$restore_candidate"
bun .agents/skills/deobfuscate-javascript/scripts/quality-gate.ts "$restore_candidate"
```

Expected: exit `0`; no generated fallback names, cryptic public exports,
bundler residue, missing provenance, missing component props types, or unsplit
large surface. Repeat with the next basename printed by `ledger.ts status`.

- [ ] **Step 3: Preview gated promotion**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/promote-organized.ts --target restored --dry-run
```

Expected: passing candidates show their semantic destination; failures name the exact gate issue and do not change public files.

- [ ] **Step 4: Promote passing candidates and repeat**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/promote-organized.ts --target restored
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts status --target restored
```

Expected: producer chunks promote before consumers; public files and the shared import map update atomically; failed candidates roll back. Repeat Steps 1–4 until the blocked list and promote frontier are empty.

- [ ] **Step 5: Commit coherent restoration batches**

Stage only the reviewed public paths, shared import-map update, and any separately tested skill fix. Do not stage hidden checkpoints or unrelated refreshed `ref/` changes in a restoration batch.

Run:

```bash
cd /home/zhang/decode-codex
git diff --check
git status --short
```

Expected: no whitespace errors; each commit contains one coherent semantic domain or one separately tested skill improvement.

### Task 8: Run the deep pre-acceptance gates

**Files:**

- Verify: `restored/**/*.ts`
- Verify: `restored/**/*.tsx`
- Verify: `restored/IMPORT_MAP.json`
- Verify: `restored/.deobfuscate-javascript/_full/manifest.json`

- [ ] **Step 1: Run the whole-target quality gate**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/quality-gate.ts restored
```

Expected: exit `0`. Fix every reported mechanical name, missing body, unresolved npm boundary, facade-only app feature, unpromoted checkpoint, hash-named public file, or missing finalization record before continuing.

- [ ] **Step 2: Run project-level TypeScript only if the target provides it**

Run:

```bash
cd /home/zhang/decode-codex
if test -f restored/tsconfig.json; then bunx tsc -p restored/tsconfig.json --noEmit; else printf '%s\n' 'restored/tsconfig.json absent; using AST parse and quality-gate checks'; fi
```

Expected: TypeScript exit `0` when configured; otherwise the explicit no-config message without adding scaffolding.

- [ ] **Step 3: Verify formatting across the public tree**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/quality-gate.ts restored --check-format
```

Expected: exit `0` before acceptance review starts.

### Task 9: Perform Stage 3 acceptance review

**Files:**

- Read: `.agents/skills/deobfuscate-javascript/scripts/acceptance-checklist.md`
- Create/update: `restored/.deobfuscate-javascript/_stage-e/**`
- Repair as needed: changed public `.ts` and `.tsx` files

- [ ] **Step 1: Read the acceptance checklist and prepare review packets**

Run:

```bash
cd /home/zhang/decode-codex
sed -n '1,9999p' .agents/skills/deobfuscate-javascript/scripts/acceptance-checklist.md
bun .agents/skills/deobfuscate-javascript/scripts/prepare-stage-e-review.ts restored
bun .agents/skills/deobfuscate-javascript/scripts/prepare-stage-e-review.ts restored --verify
```

Expected: packet verification exits `0` and every public source file appears exactly once.

- [ ] **Step 2: Read every packet and record host verdicts**

Review files in batches of 5–10 against E1 naming, E2 typed readability, E3 formatting, and E4 imports/exports. For each `NEEDS_FIX`, repair the upstream candidate or public semantic source, format it, re-run its quality gate, and re-read only the changed file.

Expected completion record: `Stage 3 acceptance complete`, followed by the
exact packet file count, exact clean-pass count, exact after-rewrite count, and
`Blocked/partial: 0`. Use the counts produced during review; do not estimate.

- [ ] **Step 3: Mark accepted current chunks finalized**

Update the manifest through the ledger/finalization workflow so every accepted current app-feature chunk has `stages.finalized = true` and acceptance evidence. Do not edit stage flags to hide an unreviewed file.

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts status --target restored
```

Expected: all current local chunks show finalize, organize, and promote complete.

### Task 10: Prove completion and report usage

**Files:**

- Verify: `restored/`
- Verify: `restored/.deobfuscate-javascript/_full/manifest.json`
- Verify: `restored/IMPORT_MAP.json`

- [ ] **Step 1: Run the final full-target completion gate**

Run:

```bash
cd /home/zhang/decode-codex
bun .agents/skills/deobfuscate-javascript/scripts/quality-gate.ts restored --check-format
bun .agents/skills/deobfuscate-javascript/scripts/ledger.ts frontier --stage promote --target restored
```

Expected: quality gate exits `0` and the promote frontier prints no chunks.

- [ ] **Step 2: Verify manifest completion counts**

Run:

```bash
cd /home/zhang/decode-codex
node - <<'NODE'
const fs = require("fs");
const manifest = JSON.parse(fs.readFileSync("restored/.deobfuscate-javascript/_full/manifest.json", "utf8"));
const local = Object.values(manifest.files).filter((file) => file.kind === "local");
const incomplete = local.filter((file) => !file.stages?.promoted || !file.stages?.finalized);
console.log({ entry: manifest.entry, local: local.length, complete: local.length - incomplete.length, incomplete: incomplete.length });
if (manifest.entry !== "index-DndM3sjm" || incomplete.length) process.exit(1);
NODE
```

Expected: entry `index-DndM3sjm` and `incomplete: 0`.

- [ ] **Step 3: Inspect the final diff and repository state**

Run:

```bash
cd /home/zhang/decode-codex
git diff --check
git status --short
git log -5 --oneline --decorate
```

Expected: no whitespace errors; hidden staging remains ignored; unrelated user changes are preserved.

- [ ] **Step 4: Report exact completion evidence and token usage**

Report the current entry, graph counts, promoted/finalized counts, Stage 3 review counts, final gate commands and exit status, remaining terminal npm/runtime boundaries, public paths changed, commits created, and exact token usage if the active Codex runtime exposes it. If exact token accounting is unavailable, state that explicitly and do not estimate.
