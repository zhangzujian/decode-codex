# Codex App Reference Deep Restore Design

## Objective

Deep-restore the refreshed ChatGPT/Codex webview bundle from
`ref/webview/assets` into the shared `restored/` source tree. The result must be
typed, semantically named, formatted, acceptance-reviewed, and complete for
every reachable project-local chunk from the current application entry.

The current bundle version is `26.715.52143`, whose discovered entry is
`ref/webview/assets/index-DndM3sjm.js`. The existing restoration manifest targets
the removed entry `index-BloiNxW7`; none of its recorded source paths exist in
the refreshed bundle. Existing public files remain useful as semantic migration
evidence, but their old minified export aliases are not authoritative.

## Chosen Approach

Migrate in place while preserving `restored/` as the semantic baseline:

1. Rebuild the current import graph and symbol ledger from the new entry with no
   line limit.
2. Reuse existing public modules only when current source fingerprints confirm
   their identity and export surface.
3. Re-derive every current alias map from the current bundle; never copy alias
   letters from an older hash.
4. Restore new or changed app code through hidden staging, semantic rewrite,
   organization, and gated promotion.
5. Externalize confirmed stock packages through npm-backed imports or thin
   re-export shims. Preserve proven Codex forks as typed wrappers.
6. Finish only after Stage 3 acceptance and the whole-target quality gate pass.

This avoids duplicating the 133 MB existing restoration while retaining the
deep workflow's correctness guarantees.

## Scope

Included:

- The complete project-local graph reachable from the current `index.html`
  script entry, using `--max-lines 0`.
- Static and literal dynamic imports recorded by the graph builder.
- Current-build alias migration, typed TypeScript/TSX semantic rewrites,
  shared import-map updates, and cross-file import repair.
- Existing restored modules whose identity is confirmed against current source.
- Npm/vendor boundary classification required by reachable consumers.
- Stage 3 acceptance review and final full-tree verification.

Excluded:

- CSS, WASM, fonts, images, locale data, and other non-JavaScript assets except
  as referenced inputs.
- `ref/node_modules/**` and `ref/native-menu-locales/**` as restoration targets.
- Hand-written local replacements for published npm packages.
- A parallel `restored-next/` tree or per-entry restore root.

## Architecture

### Source and graph

`ref/webview/index.html` remains the source of truth for entry discovery.
`build-import-graph.ts` rebuilds the graph into
`restored/.deobfuscate-javascript/_full/manifest.json`. The graph contains every
reachable project-local chunk, terminal npm/data leaves, current imports and
exports, and per-stage status.

The old manifest and ledger are migration evidence only. They must not be
resumed because their entry and every recorded source path belong to the prior
bundle.

### Migration evidence

The shared `restored/IMPORT_MAP.json`, existing semantic files, provenance
headers, strings, prop sets, route names, query keys, and literal constants are
used to fingerprint current bindings. Stable stems may suggest candidates, but
current AST definitions determine identity.

When a current chunk corresponds to an older restored module, the migration
updates provenance, imports, exports, and import-map records without creating a
duplicate semantic module. Changed export sets are reconciled explicitly.

### Staging and restoration

All mechanical output stays under
`restored/.deobfuscate-javascript/_full/`. The batch restore produces checkpoints
only. Public files are created or replaced exclusively through the
organize/promote pipeline after semantic cleanup.

Project modules are rewritten as typed `.ts` or `.tsx` files with semantic
kebab-case paths and identifiers. Large aggregators are split into actual
feature modules; a re-export producer barrel cannot substitute for restoring
the aggregator body.

### Vendor boundaries

Confirmed stock packages become bare imports or npm-backed re-export shims.
Any edit under `restored/vendor/` first passes the vendor npm preflight and an
explicit `npm-shim` or `local-body` intent gate. Known Codex forks such as
entangled `@pierre/*` wrappers remain thin typed wrappers when upstream package
surfaces are insufficient.

Project feature chunks are never hidden behind permanent facades. Runtime
facades are temporary open boundaries and prevent completion until resolved or
classified as genuine terminal runtime boundaries accepted by the quality gate.

## Data Flow

1. Discover and validate the current entry.
2. Check for recoverable sourcemaps.
3. Archive diagnostic summaries of the old graph, then rebuild the current
   manifest and ledger without deleting public semantic files.
4. Generate mechanical checkpoints for current local chunks.
5. Compare each current chunk with the import map and existing restored source.
6. Reuse verified modules; semantically rewrite new or changed modules.
7. Plan semantic domains and paths, then promote producer dependencies before
   consumers.
8. Repair imports and update the single shared import map during promotion.
9. Run TypeScript, formatting, quality-gate, and acceptance checks.
10. Repeat until no promote frontier, unresolved local feature boundary, or
    quality issue remains.

## Failure Handling and Resume

- Existing public source is preserved until a candidate passes its promotion
  gate; failed promotion rolls back the candidate output.
- Manifest, ledger, checkpoints, locks, and reports make the run resumable.
- Stale per-stage locks are investigated before being stolen.
- Unknown packages remain unresolved until identified; they are not replaced by
  guessed local implementations.
- A changed stable stem or migrated hash triggers fresh alias derivation.
- Script defects or missing package classifiers discovered during the run are
  fixed in the deobfuscation skill with tests and committed separately from
  restoration output.

## Verification and Completion

Completion requires all of the following:

- Current graph has zero `oversized-local` chunks.
- Every reachable project-local chunk is promoted and finalized.
- The promote frontier is empty.
- No app-feature chunk is represented only by a facade, placeholder, mechanical
  checkpoint, or re-export-only aggregator barrel.
- Public files are semantic, typed where useful, kebab-cased, hash-free,
  provenance-marked, and Prettier-formatted.
- TypeScript checks pass when the restored target provides a `tsconfig.json`;
  otherwise AST parsing and the full quality gate provide the executable source
  check, and the missing project-level typecheck is reported without inventing
  new build scaffolding.
- The host performs Stage 3 acceptance review on every delivered file and fixes
  every `NEEDS_FIX` result.
- `quality-gate.ts restored --check-format` exits successfully after acceptance.

The final report will include the current entry, graph and promotion counts,
verification commands and outcomes, remaining terminal npm/runtime boundaries
if any, changed paths, and the exact token usage exposed by the active Codex
goal/session tooling. If exact token accounting is unavailable from the runtime,
the report will state that limitation rather than estimate.
