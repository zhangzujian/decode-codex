# Codex App Update Skill Design

## Objective

Add a repository-local Skill that checks the official Codex Desktop App macOS
arm64 appcast, downloads and extracts a newer release, verifies the result, and
then removes the archive and every older downloaded release. The final
`downloads/` state keeps only the newest verified extracted application.

## Chosen Approach

Create `.agents/skills/update-codex-app/` with:

- A concise `SKILL.md` containing trigger conditions, the required command,
  safety rules, and expected reporting.
- A deterministic `scripts/update-codex-app.sh` that performs the update with
  existing command-line tools. No new package dependency is needed.
- `agents/openai.yaml` generated from the Skill metadata.

The script is preferred over an inline shell recipe because XML parsing,
staging, verification, and destructive cleanup must always happen in the same
order.

## Scope

Included:

- Read `https://persistent.oaistatic.com/codex-app-prod/appcast.xml`.
- Select the first macOS arm64 production item and its version, build number,
  archive URL, and expected byte length.
- Compare it with extracted directories named
  `ChatGPT-darwin-arm64-<version>` under `downloads/`.
- Download only when the official version is newer or the latest extracted
  application is missing.
- Support standard proxy environment variables without hard-coding a proxy.
- Verify the archive, extract through a staging directory, and validate
  `CFBundleShortVersionString` and `CFBundleVersion` from `Info.plist`.
- After all checks pass, delete all matching older archives and extracted
  directories, then delete the newly downloaded ZIP.

Excluded:

- Windows releases, beta/nightly feeds, Intel macOS builds, installation into
  `/Applications`, and automatic modification of `ref/`.
- Deleting any path outside the chosen downloads directory or any entry that
  does not match the exact Codex archive/directory naming pattern.

## Data Flow

1. Resolve the downloads directory and reject an empty, root, or otherwise
   unsafe cleanup target.
2. Fetch the appcast into a temporary file and extract the newest release
   metadata.
3. Find the newest valid local extracted version.
4. If the same verified release already exists, report no update and make no
   filesystem changes.
5. Download the archive to a partial filename with retries and resume support.
6. Confirm the byte length and run `unzip -tq`.
7. Extract into a version-specific staging directory.
8. Check the staged App's version and build number against the appcast.
9. Promote the staging directory to
   `downloads/ChatGPT-darwin-arm64-<version>`.
10. Delete matching older version directories and ZIP files, then delete the
    current ZIP. Keep only the latest extracted directory.

## Failure and Deletion Safety

- Never remove old versions before the new archive and staged application pass
  every check.
- A fetch, parse, size, ZIP, extraction, or version mismatch exits non-zero and
  preserves all previously verified versions.
- Cleanup considers only immediate children of the downloads directory whose
  basenames exactly match `ChatGPT-darwin-arm64-<version>` or the corresponding
  `.zip` name.
- The promoted latest directory is explicitly excluded from old-version
  deletion.
- If cleanup fails, report the remaining paths and exit non-zero instead of
  claiming completion.

## Verification

The Skill implementation will leave one runnable test covering the safety
contract with local fixtures and command stubs:

- No update leaves files unchanged.
- A failed archive or version check preserves the old release.
- A successful update retains only the newest extracted directory and deletes
  both old releases and the new ZIP.
- The generated Skill metadata passes `quick_validate.py`.
- Shell syntax checking and the fixture test both exit successfully.
