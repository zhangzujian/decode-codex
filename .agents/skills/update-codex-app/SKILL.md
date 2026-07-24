---
name: update-codex-app
description: Use when asked to check for, download, extract, or update the production macOS arm64 Codex Desktop App, including requests such as “再来一遍”, “下载解压”, or cleaning up old Codex app downloads.
---

# Update Codex App

Use the bundled updater instead of recreating the feed, verification, or cleanup logic.

## Run

From the repository root, run:

```bash
bash .agents/skills/update-codex-app/scripts/update-codex-app.sh
```

Only when the user explicitly specifies another downloads directory, pass it as the sole argument:

```bash
bash .agents/skills/update-codex-app/scripts/update-codex-app.sh /absolute/downloads/path
```

The script checks the official production appcast, downloads a newer release, verifies the ZIP plus the extracted version and build, then promotes it.

## Preserve cleanup semantics

- After a successful update, keep only the latest verified extracted directory and delete every matching ZIP and older matching release directory.
- When no update is available, do not clean up existing downloads.
- If fetching, parsing, downloading, verification, extraction, or promotion fails before cleanup begins, keep all old releases. A partial download or ZIP may remain for resuming or diagnosis; do not delete it manually.
- If cleanup itself fails, the script exits nonzero and reports the path it could not remove. Do not continue cleanup manually.

## Report

- **Verification:** Treat a successful script result as final verification; the updater validates metadata portably. Do not run `plutil` or add post-run metadata checks.
- **Success:** Report the version, build, and extracted path.
- **No update:** Report no update only when the script says so.
- **Failure:** Report the actual error and any preserved or remaining path named by the script. Never report failure as no update or perform cleanup yourself.
