---
name: codex-app-ref-refresh
description: Refresh the local Codex app reference source from the installed macOS Codex.app asar. Use when Codex needs to get the latest installed Codex app code, recreate ./ref from /Applications/Codex.app/Contents/Resources/app.asar, or format extracted JavaScript and CSS while excluding ref/node_modules.
---

# Codex App Ref Refresh

## Workflow

Use this skill from the repository root that should receive `./ref`.

1. Verify the current working directory is the intended workspace.
2. Run the bundled script:

```bash
node .agents/skills/codex-app-ref-refresh/scripts/refresh-codex-ref.mjs
```

The script runs three steps in order:

1. **Sync** — deletes only `<cwd>/ref`, then extracts `/Applications/Codex.app/Contents/Resources/app.asar` into a fresh `ref` directory.
2. **Format** — runs Prettier (`--write`) over every extracted `.js` and `.css` file, skipping any `node_modules` directory under `ref`. This step is **always on** by default; do not skip it unless the user explicitly asks.
3. **Report** — prints the count of formatted files and a completion line.

Formatting the synced JS and CSS with Prettier is a required part of the refresh, not an optional extra. The minified asar output is unreadable until formatted, so always let the Prettier step run. Only pass `--skip-format` when the user explicitly wants raw, unformatted extraction.

## Verify

After the run, confirm formatting actually completed before reporting success:

- The script logs `Formatting N JS/CSS file(s) with Prettier...` followed by `Codex app ref refresh complete.`
- If formatting was skipped, the script logs `Skipping Prettier formatting.` instead — treat that as an incomplete refresh unless `--skip-format` was intentional.
- Spot-check that a known JS or CSS file under `ref` is multi-line (Prettier-formatted), not a single minified line.

## Options

- Set `CODEX_APP_ASAR=/path/to/app.asar` before running when the Codex app bundle lives somewhere else.
- Pass `--skip-format` only when the user explicitly wants extraction without Prettier formatting.
- Pass `--dry-run` to inspect the resolved paths without deleting or extracting anything.

## Safety

- Do not run the script from the wrong directory; it intentionally replaces `./ref`.
- Prefer the script over manually chaining `rm`, `npx @electron/asar`, and `prettier`, because the script guards the target path and consistently excludes `ref/node_modules`.
- After running, report the extracted `ref` path and whether formatting completed.
