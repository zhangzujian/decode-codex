#!/usr/bin/env bash
set -euo pipefail

die() { printf 'error: %s\n' "$*" >&2; exit 1; }
remove_path() {
  if ! rm -rf -- "$1"; then
    die "failed to remove $1"
  fi
}

for required in awk curl find mkdir mktemp mv rm sort stat unzip; do
  command -v "$required" >/dev/null 2>&1 || die "required command not found: $required"
done

(( $# <= 1 )) || die 'usage: update-codex-app.sh [downloads-directory]'

script_dir=$(cd -- "${BASH_SOURCE[0]%/*}" && pwd -P)
repo_root=$(cd -- "$script_dir/../../../.." && pwd -P)
downloads_arg=${1:-"$repo_root/downloads"}
[[ -n "$downloads_arg" && "$downloads_arg" != / ]] || die 'refusing unsafe downloads directory'
mkdir -p -- "$downloads_arg"
downloads_dir=$(cd -- "$downloads_arg" && pwd -P)
home_dir=$(cd -- "${HOME:-/nonexistent}" 2>/dev/null && pwd -P || true)
[[ "$downloads_dir" != / && "$downloads_dir" != "$repo_root" && "$downloads_dir" != "$home_dir" ]] || die 'refusing unsafe downloads directory'

plist_value() {
  awk -v wanted="$2" '
    BEGIN { RS = "<key>" }
    index($0, wanted "</key>") == 1 {
      if (match($0, /<string>[^<]*<\/string>/)) {
        value = substr($0, RSTART, RLENGTH)
        sub(/^<string>/, "", value)
        sub(/<\/string>$/, "", value)
        print value
      }
      exit
    }
  ' "$1"
}

app_is_valid() {
  local app=$1 expected_version=$2 expected_build=${3:-}
  local -a values
  [[ -f "$app/Contents/Info.plist" ]] || return 1
  mapfile -t values < <(
    plist_value "$app/Contents/Info.plist" CFBundleShortVersionString
    plist_value "$app/Contents/Info.plist" CFBundleVersion
  )
  [[ ${#values[@]} -eq 2 && "${values[0]}" =~ ^[0-9]+(\.[0-9]+)+$ && "${values[1]}" =~ ^[0-9]+$ ]] || return 1
  [[ "${values[0]}" == "$expected_version" && ( -z "$expected_build" || "${values[1]}" == "$expected_build" ) ]]
}

temp_dir=$(mktemp -d "$downloads_dir/.update-codex-app.XXXXXX")
trap 'rm -rf -- "$temp_dir"' EXIT
appcast="$temp_dir/appcast.xml"
curl --fail --location --retry 3 --retry-all-errors -o "$appcast" \
  https://persistent.oaistatic.com/codex-app-prod/appcast.xml

mapfile -t feed < <(awk '
  BEGIN { RS = "</item>" }
  index($0, "<item") {
    item = $0
    sub(/^.*<item[^>]*>/, "", item)
    if (match(item, /<sparkle:shortVersionString>[^<]*<\/sparkle:shortVersionString>/)) {
      version = substr(item, RSTART, RLENGTH)
      sub(/^<sparkle:shortVersionString>/, "", version)
      sub(/<\/sparkle:shortVersionString>$/, "", version)
    }
    if (match(item, /<sparkle:version>[^<]*<\/sparkle:version>/)) {
      build = substr(item, RSTART, RLENGTH)
      sub(/^<sparkle:version>/, "", build)
      sub(/<\/sparkle:version>$/, "", build)
    }
    if (match(item, /<sparkle:hardwareRequirements>[^<]*<\/sparkle:hardwareRequirements>/)) {
      hardware = substr(item, RSTART, RLENGTH)
      sub(/^<sparkle:hardwareRequirements>/, "", hardware)
      sub(/<\/sparkle:hardwareRequirements>$/, "", hardware)
    }
    if (match(item, /<enclosure[[:space:]][^>]*>/)) {
      enclosure = substr(item, RSTART, RLENGTH)
      if (match(enclosure, /url="[^"]*"/)) {
        url = substr(enclosure, RSTART, RLENGTH)
        sub(/^url="/, "", url); sub(/"$/, "", url)
      }
      if (match(enclosure, /length="[^"]*"/)) {
        byte_length = substr(enclosure, RSTART, RLENGTH)
        sub(/^length="/, "", byte_length); sub(/"$/, "", byte_length)
      }
    }
    print version; print build; print hardware; print url; print byte_length
    exit
  }
' "$appcast")

[[ ${#feed[@]} -eq 5 ]] || die 'appcast first item is incomplete'
official_version=${feed[0]}
official_build=${feed[1]}
hardware=${feed[2]}
archive_url=${feed[3]}
expected_length=${feed[4]}
[[ "$official_version" =~ ^[0-9]+(\.[0-9]+)+$ ]] || die 'invalid appcast version'
[[ "$official_build" =~ ^[0-9]+$ && "$expected_length" =~ ^[0-9]+$ ]] || die 'invalid appcast build or length'
[[ "$hardware" == arm64 ]] || die 'appcast is not for arm64'
expected_url="https://persistent.oaistatic.com/codex-app-prod/ChatGPT-darwin-arm64-$official_version.zip"
[[ "$archive_url" == "$expected_url" ]] || die 'appcast archive URL does not match its version'

newest_local=
newest_build=
while IFS= read -r -d '' candidate; do
  name=${candidate##*/}
  [[ "$name" =~ ^ChatGPT-darwin-arm64-([0-9]+(\.[0-9]+)+)$ ]] || continue
  local_version=${BASH_REMATCH[1]}
  app_is_valid "$candidate/ChatGPT.app" "$local_version" || continue
  if [[ -z "$newest_local" || "$(printf '%s\n%s\n' "$newest_local" "$local_version" | sort -V | awk 'END { print }')" == "$local_version" ]]; then
    newest_local=$local_version
    newest_build=$(plist_value "$candidate/ChatGPT.app/Contents/Info.plist" CFBundleVersion)
  fi
done < <(find "$downloads_dir" -mindepth 1 -maxdepth 1 -type d -name 'ChatGPT-darwin-arm64-*' -print0)

if [[ -n "$newest_local" && ( "$newest_local" != "$official_version" || "$newest_build" == "$official_build" ) && "$(printf '%s\n%s\n' "$newest_local" "$official_version" | sort -V | awk 'END { print }')" == "$newest_local" ]]; then
  printf 'No update: current version %s (build %s); official version %s (build %s).\n' \
    "$newest_local" "$newest_build" "$official_version" "$official_build"
  exit 0
fi

archive="$downloads_dir/ChatGPT-darwin-arm64-$official_version.zip"
partial="$archive.partial"
curl --fail --location --retry 3 --retry-all-errors -C - -o "$partial" "$archive_url"
[[ $(stat -c %s "$partial") == "$expected_length" ]] || die 'download size does not match appcast'
mv -f -- "$partial" "$archive"
unzip -tq "$archive" >/dev/null

stage="$temp_dir/ChatGPT-darwin-arm64-$official_version"
mkdir -- "$stage"
unzip -q "$archive" -d "$stage" 2>&1 |
  awk '$0 != "lchmod (file attributes) error: Operation not supported"' >&2
app_is_valid "$stage/ChatGPT.app" "$official_version" "$official_build" || die 'staged app version or build does not match appcast'

target="$downloads_dir/ChatGPT-darwin-arm64-$official_version"
backup_parent=
backup=
if [[ -e "$target" || -L "$target" ]]; then
  [[ -d "$target" && ! -L "$target" ]] || die "refusing non-directory target: $target"
  backup_parent=$(mktemp -d "$downloads_dir/.update-codex-app-backup.XXXXXX")
  backup="$backup_parent/${target##*/}"
  mv -- "$target" "$backup" || die "failed to preserve existing target at $target"
fi
if ! mv -- "$stage" "$target"; then
  if [[ -n "$backup" && ! -e "$target" && ! -L "$target" ]] && mv -- "$backup" "$target"; then
    remove_path "$backup_parent"
    die 'promotion failed; previous target restored'
  fi
  [[ -z "$backup" ]] || printf 'error: promotion failed; previous target retained at %s\n' "$backup" >&2
  exit 1
fi
[[ -z "$backup_parent" ]] || remove_path "$backup_parent"

shopt -s nullglob
for candidate in "$downloads_dir"/ChatGPT-darwin-arm64-*; do
  name=${candidate##*/}
  [[ -d "$candidate" && "$name" =~ ^ChatGPT-darwin-arm64-([0-9]+(\.[0-9]+)+)$ && "$candidate" != "$target" ]] || continue
  remove_path "$candidate"
done
for candidate in "$downloads_dir"/ChatGPT-darwin-arm64-*.zip; do
  name=${candidate##*/}
  [[ -f "$candidate" && "$name" =~ ^ChatGPT-darwin-arm64-([0-9]+(\.[0-9]+)+)\.zip$ ]] || continue
  remove_path "$candidate"
done

printf 'Official version: %s\nBuild: %s\nChatGPT.app: %s\n' \
  "$official_version" "$official_build" "$target/ChatGPT.app"
