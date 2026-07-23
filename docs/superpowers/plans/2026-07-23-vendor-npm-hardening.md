# Vendor npm hardening implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the deobfuscation gates reject the missed third-party package bodies, then replace those bodies with npm-backed boundaries without mixing skill and restoration commits.

**Architecture:** Extend the existing `quality-gate.ts` package identity tables and preflight path instead of adding another scanner. Package-family and exact-file rules identify the missed bodies; a small maximum-size rule prevents a nominal re-export from hiding a large retained implementation. Restoration changes then reuse installed packages and existing package adapters.

**Tech Stack:** Bun, TypeScript, Bun test, existing deobfuscation quality gate and vendor preflight.

---

### Task 1: Reproduce the gate misses

**Files:**
- Modify: `.agents/skills/deobfuscate-javascript/scripts/quality-gate.test.ts`
- Modify: `.agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.test.ts`

- [ ] **Step 1: Write failing tests**

Add table-driven fixtures for Iconify, Khroma, Stylis under a misleading filename, Mermaid common chunks, D3 selection/transition, Unist/Markdown, ProseMirror, Radix, Lodash, and Segment. Assert that local bodies produce `third-party-npm-shim-not-reexport`; assert that an oversized file cannot pass merely by adding a bare re-export.

- [ ] **Step 2: Verify RED**

Run:

```bash
bun test ./.agents/skills/deobfuscate-javascript/scripts/quality-gate.test.ts \
  ./.agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.test.ts
```

Expected: the new fixtures fail because the current registry returns no npm identity, and the Segment mixed body is accepted.

### Task 2: Harden package identity and thin-shim checks

**Files:**
- Modify: `.agents/skills/deobfuscate-javascript/scripts/quality-gate.ts`
- Modify: `.agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts`
- Modify: `.agents/skills/deobfuscate-javascript/reference/codex-ref.md`
- Modify: `.agents/skills/deobfuscate-javascript/reference/vendor-npm.md`

- [ ] **Step 1: Implement minimal package mappings**

Add exact mappings for misleading files and small family rules for Lodash, Segment, and Mermaid, with explicit Mermaid wrapper exemptions and parser-version mappings.

- [ ] **Step 2: Reject retained oversized bodies**

Treat a known npm vendor surface over the 300-line thin-shim ceiling as a body even when it contains a token bare re-export. Keep existing typed legacy shims under the ceiling green.

- [ ] **Step 3: Verify GREEN**

Run the two focused test files, the full skill test suite, and:

```bash
bun .agents/skills/deobfuscate-javascript/scripts/vendor-npm-preflight.ts restored/vendor
```

Expected: focused and full tests pass; the real restored vendor audit now fails on the known package bodies.

- [ ] **Step 4: Commit skill changes separately**

```bash
git add .agents/skills/deobfuscate-javascript docs/superpowers/plans/2026-07-23-vendor-npm-hardening.md
git commit -m "skill(deobfuscate-javascript): detect retained npm package bodies"
```

### Task 3: Replace third-party bodies in restored output

**Files:**
- Modify: `package.json`
- Modify: `bun.lock`
- Modify: `restored/vendor/*`
- Modify: affected consumers under `restored/runtime`, `restored/markdown`, and `restored/composer`

- [ ] **Step 1: Run the npm-shim intent gates**

Run `vendor-npm-preflight.ts <target> --decision --intent npm-shim` for each package family. Add missing direct dependencies first and rerun until green.

- [ ] **Step 2: Replace in small package groups**

Use package exports or existing `runtime/package-adapters` for Iconify/Khroma/Stylis, D3/Lodash/Unist/Radix/Segment, ProseMirror, then Mermaid. Preserve only documented app/runtime wrappers.

- [ ] **Step 3: Verify each group**

Run the focused TypeScript check, package preflight, and quality gate after every group. Do not continue while the vendor audit is red for an already-touched package family.

- [ ] **Step 4: Run final verification and commit**

Run the project typecheck/test commands, full vendor preflight, full quality gate, and `git diff --check`, then commit restoration changes separately and push both commits.
