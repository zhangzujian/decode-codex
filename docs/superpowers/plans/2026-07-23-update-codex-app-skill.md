# Codex App Update Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a repository-local Skill that updates the production macOS arm64 Codex Desktop App and retains only the newest verified extracted release.

**Architecture:** Keep the Skill thin and put the fragile workflow in one Bash script. The script stages downloads and extraction, verifies the official byte length, ZIP integrity, version, and build number, then removes matching old releases and every ZIP only after promotion succeeds.

**Tech Stack:** Bash, curl, awk/sed, unzip, standard Unix utilities, Codex Skill metadata.

---

## File Structure

- Create `.agents/skills/update-codex-app/SKILL.md`: triggers, invocation, safety contract, and reporting requirements.
- Create `.agents/skills/update-codex-app/agents/openai.yaml`: generated UI metadata.
- Create `.agents/skills/update-codex-app/scripts/update-codex-app.sh`: fetch, compare, stage, verify, promote, and clean up.
- Create `.agents/skills/update-codex-app/tests/update-codex-app.test.sh`: one fixture-driven regression check for no-op, failure preservation, and successful cleanup.

### Task 1: Establish Baseline Skill Behavior

**Files:** None.

- [ ] **Step 1: Run a baseline scenario without the new Skill**

Dispatch a fresh subagent with no conversation context and this prompt:

```text
In /home/zhang/decode-codex, check the official Codex Desktop App macOS arm64 production appcast. If a newer version exists, download and extract it under downloads/. After successful verification, delete the downloaded ZIP and every older ChatGPT-darwin-arm64-* release, retaining only the newest extracted directory. Do not use a repository-local update-codex-app skill.
```

- [ ] **Step 2: Record baseline gaps in session notes**

Record whether the agent repeats inline shell, deletes before all checks pass, leaves ZIP files behind, or uses an unsafe cleanup glob. These observations determine the minimal wording needed in `SKILL.md`; do not add a repository narrative file.

### Task 2: Write the Failing Fixture Test

**Files:**
- Create: `.agents/skills/update-codex-app/tests/update-codex-app.test.sh`

- [ ] **Step 1: Initialize the Skill skeleton**

Run:

```bash
python /home/zhang/.codex/skills/.system/skill-creator/scripts/init_skill.py \
  update-codex-app \
  --path .agents/skills \
  --resources scripts \
  --interface 'display_name=Codex App Updater' \
  --interface 'short_description=Download and retain the latest Codex app' \
  --interface 'default_prompt=Use $update-codex-app to update the macOS arm64 Codex Desktop App and clean old downloads.'
mkdir -p .agents/skills/update-codex-app/tests
```

Expected: the Skill directory contains `SKILL.md`, `agents/openai.yaml`, and an empty `scripts/` directory.

- [ ] **Step 2: Add the fixture test before the updater exists**

Create `.agents/skills/update-codex-app/tests/update-codex-app.test.sh` with a small fixture builder and three assertions:

```bash
#!/usr/bin/env bash
set -euo pipefail

skill_root=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd -P)
updater="$skill_root/scripts/update-codex-app.sh"
tmp=$(mktemp -d)
trap 'rm -rf -- "$tmp"' EXIT

fail() { printf 'FAIL: %s\n' "$*" >&2; exit 1; }

make_archive() {
  local root=$1 version=$2 build=$3 archive=$4
  mkdir -p "$root/ChatGPT.app/Contents"
  printf '<plist><dict><key>CFBundleShortVersionString</key><string>%s</string><key>CFBundleVersion</key><string>%s</string></dict></plist>\n' \
    "$version" "$build" >"$root/ChatGPT.app/Contents/Info.plist"
  (cd "$root" && zip -qry "$archive" ChatGPT.app)
}

make_feed() {
  local path=$1 version=$2 build=$3 bytes=$4
  printf '%s\n' \
    '<?xml version="1.0"?>' \
    '<rss xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle"><channel><item>' \
    "<title>$version</title><sparkle:version>$build</sparkle:version>" \
    "<sparkle:shortVersionString>$version</sparkle:shortVersionString>" \
    '<sparkle:hardwareRequirements>arm64</sparkle:hardwareRequirements>' \
    "<enclosure url=\"https://example.test/ChatGPT-darwin-arm64-$version.zip\" length=\"$bytes\" />" \
    '</item></channel></rss>' >"$path"
}

mkdir -p "$tmp/bin"
cat >"$tmp/bin/curl" <<'SH'
#!/usr/bin/env bash
set -euo pipefail
output= url=
while (($#)); do
  case $1 in
    -o) output=$2; shift 2 ;;
    http://*|https://*) url=$1; shift ;;
    *) shift ;;
  esac
done
printf '%s\n' "$url" >>"$TEST_CURL_LOG"
case $url in
  */appcast.xml) cp "$TEST_APPCAST" "$output" ;;
  *.zip) cp "$TEST_ARCHIVE" "$output" ;;
  *) exit 2 ;;
esac
SH
chmod +x "$tmp/bin/curl"

version=26.715.99999
build=9999
fixture="$tmp/fixture"
archive="$tmp/release.zip"
mkdir -p "$fixture"
make_archive "$fixture" "$version" "$build" "$archive"
feed="$tmp/appcast.xml"
make_feed "$feed" "$version" "$build" "$(stat -c%s "$archive")"

downloads="$tmp/downloads"
mkdir -p "$downloads/ChatGPT-darwin-arm64-26.715.1"
: >"$downloads/ChatGPT-darwin-arm64-26.715.1.zip"
export TEST_APPCAST=$feed TEST_ARCHIVE=$archive TEST_CURL_LOG=$tmp/curl.log
PATH="$tmp/bin:$PATH" "$updater" "$downloads"
test -d "$downloads/ChatGPT-darwin-arm64-$version/ChatGPT.app" || fail 'latest app missing'
test ! -e "$downloads/ChatGPT-darwin-arm64-26.715.1" || fail 'old directory retained'
test -z "$(find "$downloads" -maxdepth 1 -name '*.zip' -print -quit)" || fail 'ZIP retained'

: >"$TEST_CURL_LOG"
PATH="$tmp/bin:$PATH" "$updater" "$downloads"
grep -q 'appcast.xml$' "$TEST_CURL_LOG" || fail 'appcast not checked'
grep -q '\.zip$' "$TEST_CURL_LOG" && fail 'up-to-date release downloaded again'

failed="$tmp/failed"
mkdir -p "$failed/ChatGPT-darwin-arm64-26.715.1"
printf 'invalid zip\n' >"$tmp/invalid.zip"
TEST_ARCHIVE=$tmp/invalid.zip PATH="$tmp/bin:$PATH" "$updater" "$failed" && fail 'invalid ZIP accepted'
test -d "$failed/ChatGPT-darwin-arm64-26.715.1" || fail 'old release deleted after failure'
test ! -e "$failed/ChatGPT-darwin-arm64-$version" || fail 'failed release promoted'

printf 'PASS: update-codex-app\n'
```

- [ ] **Step 3: Run the test and verify RED**

Run:

```bash
bash .agents/skills/update-codex-app/tests/update-codex-app.test.sh
```

Expected: FAIL because `scripts/update-codex-app.sh` does not exist.

### Task 3: Implement the Updater Script

**Files:**
- Create: `.agents/skills/update-codex-app/scripts/update-codex-app.sh`
- Test: `.agents/skills/update-codex-app/tests/update-codex-app.test.sh`

- [ ] **Step 1: Implement the minimum staged updater**

Write a Bash script with these exact units:

```bash
#!/usr/bin/env bash
set -euo pipefail

appcast_url=https://persistent.oaistatic.com/codex-app-prod/appcast.xml
prefix=ChatGPT-darwin-arm64-
script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)
repo_root=$(cd -- "$script_dir/../../../.." && pwd -P)
downloads=${1:-"$repo_root/downloads"}

case $downloads in ''|/) printf 'Unsafe downloads directory: %s\n' "$downloads" >&2; exit 2;; esac
mkdir -p -- "$downloads"
downloads=$(cd -- "$downloads" && pwd -P)
[[ $downloads != "$HOME" && $downloads != "$repo_root" ]] || {
  printf 'Unsafe downloads directory: %s\n' "$downloads" >&2
  exit 2
}

for command in curl awk sed sort stat unzip mktemp; do
  command -v "$command" >/dev/null || { printf 'Missing command: %s\n' "$command" >&2; exit 2; }
done

tmp=$(mktemp -d "$downloads/.codex-app-update.XXXXXX")
trap 'rm -rf -- "$tmp"' EXIT
appcast="$tmp/appcast.xml"
item="$tmp/item.xml"
curl --retry 5 --retry-delay 1 --retry-all-errors -fsSL -o "$appcast" "$appcast_url"
awk '/<item>/{copy=1} copy{print} /<\/item>/{exit}' "$appcast" >"$item"

tag() { sed -n "s:.*<$1>\\([^<]*\\)</$1>.*:\\1:p" "$item" | head -1; }
version=$(tag 'sparkle:shortVersionString')
build=$(tag 'sparkle:version')
hardware=$(tag 'sparkle:hardwareRequirements')
enclosure=$(awk '/<enclosure url=/{print; exit}' "$item")
archive_url=$(sed -n 's/.*url="\([^"]*\)".*/\1/p' <<<"$enclosure")
expected_size=$(sed -n 's/.*length="\([0-9]*\)".*/\1/p' <<<"$enclosure")
[[ $version =~ ^[0-9]+(\.[0-9]+)+$ && $build =~ ^[0-9]+$ && $hardware == arm64 ]]
[[ $archive_url == https://persistent.oaistatic.com/codex-app-prod/*.zip && $expected_size =~ ^[0-9]+$ ]]

plist_value() {
  awk -v key="$1" '$0 ~ "<key>" key "</key>" { getline; sub(/^.*<string>/, ""); sub(/<\\/string>.*$/, ""); print; exit }' "$2"
}
verified_dir() {
  local dir=$1 info="$1/ChatGPT.app/Contents/Info.plist"
  [[ -f $info ]] && [[ $(plist_value CFBundleShortVersionString "$info") == "$version" ]] && [[ $(plist_value CFBundleVersion "$info") == "$build" ]]
}

latest_local=
for path in "$downloads"/"$prefix"*; do
  [[ -d $path ]] || continue
  candidate=${path##*/}; candidate=${candidate#"$prefix"}
  [[ $candidate =~ ^[0-9]+(\.[0-9]+)+$ ]] && printf '%s\n' "$candidate"
done | sort -V >"$tmp/local-versions"
[[ -s $tmp/local-versions ]] && latest_local=$(tail -1 "$tmp/local-versions")
if [[ -n $latest_local ]]; then
  local_dir="$downloads/$prefix$latest_local"
  local_info="$local_dir/ChatGPT.app/Contents/Info.plist"
  local_build=
  [[ -f $local_info ]] && local_build=$(plist_value CFBundleVersion "$local_info")
  highest=$(printf '%s\n%s\n' "$version" "$latest_local" | sort -V | tail -1)
  if [[ -f $local_info && $(plist_value CFBundleShortVersionString "$local_info") == "$latest_local" && $local_build =~ ^[0-9]+$ && $highest == "$latest_local" ]]; then
    if [[ $latest_local != "$version" || $local_build == "$build" ]]; then
      printf 'Codex app is current: %s (build %s)\n' "$latest_local" "$local_build"
      exit 0
    fi
  fi
  if [[ $latest_local == "$version" ]] && verified_dir "$local_dir"; then
    printf 'Codex app is current: %s (build %s)\n' "$latest_local" "$local_build"
    exit 0
  fi
fi

archive="$downloads/$prefix$version.zip"
partial="$archive.partial"
curl --retry 20 --retry-delay 1 --retry-all-errors -fL -C - -o "$partial" "$archive_url"
[[ $(stat -c%s "$partial") == "$expected_size" ]] || { printf 'Archive size mismatch\n' >&2; exit 1; }
mv -- "$partial" "$archive"
unzip -tq "$archive"
staged="$tmp/$prefix$version"
mkdir -p -- "$staged"
unzip -q "$archive" -d "$staged"
verified_dir "$staged" || { printf 'Extracted version mismatch\n' >&2; exit 1; }

final="$downloads/$prefix$version"
[[ ! -e $final ]] || rm -rf -- "$final"
mv -- "$staged" "$final"

for path in "$downloads"/"$prefix"*; do
  [[ -e $path ]] || continue
  [[ $path == "$final" ]] && continue
  base=${path##*/}
  if [[ -d $path && $base =~ ^${prefix}[0-9]+(\.[0-9]+)+$ ]]; then
    rm -rf -- "$path"
  elif [[ -f $path && $base =~ ^${prefix}[0-9]+(\.[0-9]+)+\.zip$ ]]; then
    unlink -- "$path"
  fi
done

printf 'Updated Codex app to %s (build %s): %s\n' "$version" "$build" "$final/ChatGPT.app"
```

- [ ] **Step 2: Run syntax and fixture checks**

Run:

```bash
bash -n .agents/skills/update-codex-app/scripts/update-codex-app.sh
bash .agents/skills/update-codex-app/tests/update-codex-app.test.sh
```

Expected: syntax exits 0 and the test prints `PASS: update-codex-app`.

- [ ] **Step 3: Commit the tested script**

```bash
git add .agents/skills/update-codex-app/scripts .agents/skills/update-codex-app/tests
git commit -m "feat: add safe Codex app updater"
```

### Task 4: Write and Validate the Skill

**Files:**
- Modify: `.agents/skills/update-codex-app/SKILL.md`
- Modify: `.agents/skills/update-codex-app/agents/openai.yaml`

- [ ] **Step 1: Replace the generated Skill template**

Keep the body under 250 words and include:

```markdown
---
name: update-codex-app
description: Use when asked to check, download, extract, or update the latest production Codex Desktop App for macOS arm64, including repeated requests such as “再来一遍” and requests to clean old Codex app downloads.
---

# Update Codex App

Run from the repository root:

\`\`\`bash
bash .agents/skills/update-codex-app/scripts/update-codex-app.sh
\`\`\`

Pass a downloads directory only when the user explicitly requests another location.

## Safety

- Use the production appcast selected by the script; do not guess a version URL.
- Do not delete anything before archive integrity, extraction, version, and build checks pass.
- Cleanup is limited to matching `ChatGPT-darwin-arm64-*` entries directly under `downloads/`.
- A successful update leaves only the latest extracted directory and deletes all matching ZIP files and older extracted versions.
- A no-update run makes no filesystem changes.

## Report

Report the official version and build, whether an update occurred, and the final `ChatGPT.app` path.
```

- [ ] **Step 2: Regenerate UI metadata**

Run:

```bash
python /home/zhang/.codex/skills/.system/skill-creator/scripts/generate_openai_yaml.py \
  .agents/skills/update-codex-app \
  --interface 'display_name=Codex App Updater' \
  --interface 'short_description=Download and retain the latest Codex app' \
  --interface 'default_prompt=Use $update-codex-app to update the macOS arm64 Codex Desktop App and clean old downloads.'
```

- [ ] **Step 3: Validate metadata and rerun the regression test**

Run:

```bash
python /home/zhang/.codex/skills/.system/skill-creator/scripts/quick_validate.py \
  .agents/skills/update-codex-app
bash .agents/skills/update-codex-app/tests/update-codex-app.test.sh
wc -w .agents/skills/update-codex-app/SKILL.md
```

Expected: validation succeeds, the test prints `PASS: update-codex-app`, and `SKILL.md` stays under 250 words.

- [ ] **Step 4: Forward-test the Skill**

Dispatch a fresh subagent with this prompt and the new Skill path:

```text
Use $update-codex-app at /home/zhang/decode-codex/.agents/skills/update-codex-app to check the latest Codex Desktop App. Explain which files may be deleted and when deletion is permitted. Do not perform the live update.
```

Expected: the subagent names the bundled command without running it, identifies exact cleanup scope, and refuses to delete before verification.

- [ ] **Step 5: Run final repository checks and commit**

```bash
git diff --check
git status --short
git add .agents/skills/update-codex-app/SKILL.md \
  .agents/skills/update-codex-app/agents/openai.yaml
git commit -m "docs: add Codex app update skill"
```

Expected: only the planned Skill files are changed before the commit, and the commit succeeds.
