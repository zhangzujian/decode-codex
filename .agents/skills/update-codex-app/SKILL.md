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
- On failure or when no update is available, do not clean up existing downloads.
- Do not manually delete or rename files around the script.

Report the version, build, and extracted path from a successful update. Otherwise report the no-update result.
