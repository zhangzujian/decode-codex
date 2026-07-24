# Codex App Updater Portability Fix

## Problem

On Linux, Info-ZIP successfully extracts macOS symlinks but emits
`lchmod (file attributes) error: Operation not supported` for each one. The
noise makes a verified update look broken. Separately, the Skill does not say
that the updater's successful output is already the verification record, which
led to a redundant macOS-only `plutil` check.

## Design

- During extraction, discard only the exact known `lchmod` diagnostic. Preserve
  every other diagnostic and `unzip`'s exit status.
- Keep the existing portable `awk` metadata validation; add no dependency or
  second verification script.
- Tell Skill users to trust successful updater output and not add `plutil` or
  ad hoc post-run metadata checks.

## Verification

- Extend the existing fixture test with a fake `unzip` that emits the known
  warning plus an unrelated diagnostic. Assert that only the known warning is
  removed.
- Run the shell syntax check, fixture test, and Skill `quick_validate.py`.

No cleanup, promotion, or failure-preservation behavior changes.
