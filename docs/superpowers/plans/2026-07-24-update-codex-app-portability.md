# Codex App Updater Portability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the harmless Linux Info-ZIP `lchmod` noise and prevent redundant macOS-only post-run verification.

**Architecture:** Keep the updater as one Bash script. Filter only the exact known extraction diagnostic through the already-required `awk`, while `pipefail` preserves `unzip` failures; document that the updater's successful output is already portable verification.

**Tech Stack:** Bash, Info-ZIP `unzip`, `awk`, the existing shell fixture test, and Skill `quick_validate.py`.

---

### Task 1: Filter only the harmless extraction warning

**Files:**
- Modify: `.agents/skills/update-codex-app/tests/update-codex-app.test.sh:36-97`
- Modify: `.agents/skills/update-codex-app/scripts/update-codex-app.sh:131-136`

- [ ] **Step 1: Write the failing regression check**

Add an `unzip` fixture beside the existing `curl` and `mv` fixtures:

```bash
cat >"$tmp/bin/unzip" <<'SH'
#!/usr/bin/env bash
set -euo pipefail
if [[ $1 == -q ]]; then
  printf '%s\n' \
    'lchmod (file attributes) error: Operation not supported' \
    'unzip sentinel diagnostic' >&2
fi
exec /usr/bin/unzip "$@"
SH
chmod +x "$tmp/bin/unzip"
```

Capture the first successful update's standard error and assert that the known
warning is absent while the unrelated diagnostic remains:

```bash
update_stderr="$tmp/update.stderr"
PATH="$tmp/bin:$PATH" "$updater" "$downloads" 2>"$update_stderr"
grep -Fqx 'lchmod (file attributes) error: Operation not supported' "$update_stderr" && fail 'known lchmod warning leaked'
grep -Fqx 'unzip sentinel diagnostic' "$update_stderr" || fail 'unrelated unzip diagnostic hidden'
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
bash .agents/skills/update-codex-app/tests/update-codex-app.test.sh
```

Expected: exit nonzero with `FAIL: known lchmod warning leaked` after the
fixture update succeeds.

- [ ] **Step 3: Implement the exact diagnostic filter**

Replace the extraction command with:

```bash
unzip -q "$archive" -d "$stage" 2>&1 |
  awk '$0 != "lchmod (file attributes) error: Operation not supported"' >&2
```

The script already enables `pipefail`, so a real `unzip` failure still exits
nonzero. Other diagnostics remain on standard error.

- [ ] **Step 4: Run syntax and fixture checks and verify GREEN**

Run:

```bash
bash -n .agents/skills/update-codex-app/scripts/update-codex-app.sh \
  .agents/skills/update-codex-app/tests/update-codex-app.test.sh
bash .agents/skills/update-codex-app/tests/update-codex-app.test.sh
```

Expected: both commands exit zero; the fixture test ends with
`PASS: update-codex-app`.

- [ ] **Step 5: Commit the code fix**

```bash
git add .agents/skills/update-codex-app/scripts/update-codex-app.sh \
  .agents/skills/update-codex-app/tests/update-codex-app.test.sh
git commit -m "fix: silence harmless Codex unzip warning"
```

### Task 2: Make portable verification explicit in the Skill

**Files:**
- Modify: `.agents/skills/update-codex-app/SKILL.md:33-37`

- [ ] **Step 1: Record the failing baseline**

Use the observed baseline from the triggering run: after the updater exited
zero and reported version/build/path, the agent attempted `plutil`; Linux
returned `command not found`. This proves the current Skill leaves room for a
redundant platform-specific verification step.

- [ ] **Step 2: Add the minimal reporting rule**

Add this first bullet under `## Report`:

```markdown
- **Verification:** Treat a successful script result as final verification; the updater validates metadata portably. Do not run `plutil` or add post-run metadata checks.
```

- [ ] **Step 3: Validate Skill structure**

Run:

```bash
python3 /home/zhang/.codex/skills/.system/skill-creator/scripts/quick_validate.py \
  .agents/skills/update-codex-app
```

Expected: exit zero with `Skill is valid!`.

- [ ] **Step 4: Forward-test the reporting instruction**

Dispatch a fresh agent with only this prompt:

```text
Use $update-codex-app at /home/zhang/decode-codex/.agents/skills/update-codex-app. The updater exited 0 and reported an official version, build, and ChatGPT.app path. What metadata verification should you run before reporting success? Do not modify files.
```

Expected: the agent says no extra metadata command is needed and does not
recommend `plutil`.

- [ ] **Step 5: Commit the Skill clarification**

```bash
git add .agents/skills/update-codex-app/SKILL.md
git commit -m "docs: clarify Codex updater verification"
```

### Task 3: Final verification

**Files:**
- Verify: `.agents/skills/update-codex-app/`

- [ ] **Step 1: Run the complete local verification set**

```bash
bash -n .agents/skills/update-codex-app/scripts/update-codex-app.sh \
  .agents/skills/update-codex-app/tests/update-codex-app.test.sh
bash .agents/skills/update-codex-app/tests/update-codex-app.test.sh
python3 /home/zhang/.codex/skills/.system/skill-creator/scripts/quick_validate.py \
  .agents/skills/update-codex-app
git diff --check HEAD~2..HEAD
git status --short
```

Expected: syntax check exits zero, fixture test prints
`PASS: update-codex-app`, Skill validation prints `Skill is valid!`, diff check
is silent, and status is clean.
