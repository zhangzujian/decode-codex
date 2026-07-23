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
  printf '%s\n' \
    '<plist><dict>' \
    '<key>CFBundleShortVersionString</key>' \
    "<string>$version</string>" \
    '<key>CFBundleVersion</key>' \
    "<string>$build</string>" \
    '</dict></plist>' >"$root/ChatGPT.app/Contents/Info.plist"
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
    "<enclosure url=\"https://persistent.oaistatic.com/codex-app-prod/ChatGPT-darwin-arm64-$version.zip\" length=\"$bytes\" />" \
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

cat >"$tmp/bin/mv" <<'SH'
#!/usr/bin/env bash
set -euo pipefail
source=${@: -2:1}
destination=${@: -1}
if [[ ${TEST_FAIL_PROMOTION:-} == 1 && "$source" == */.update-codex-app.*/ChatGPT-darwin-arm64-* && "$destination" == "$TEST_PROMOTION_TARGET" ]]; then
  exit 1
fi
exec /bin/mv "$@"
SH
chmod +x "$tmp/bin/mv"

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
mkdir -p "$downloads/ChatGPT-darwin-arm64-not-a-version"
printf 'near miss marker\n' >"$downloads/ChatGPT-darwin-arm64-not-a-version/marker"
printf 'unrelated file\n' >"$downloads/keep.zip"
mkdir -p "$downloads/unrelated"
printf 'unrelated directory\n' >"$downloads/unrelated/marker"
export TEST_APPCAST=$feed TEST_ARCHIVE=$archive TEST_CURL_LOG=$tmp/curl.log
PATH="$tmp/bin:$PATH" "$updater" "$downloads"
latest="$downloads/ChatGPT-darwin-arm64-$version"
test -d "$latest/ChatGPT.app" || fail 'latest app missing'
test ! -e "$downloads/ChatGPT-darwin-arm64-26.715.1" || fail 'old directory retained'
test -z "$(find "$downloads" -maxdepth 1 -name 'ChatGPT-darwin-arm64-*.zip' -print -quit)" || fail 'Codex ZIP retained'
test -f "$downloads/keep.zip" || fail 'unrelated file deleted'
[[ $(<"$downloads/keep.zip") == 'unrelated file' ]] || fail 'unrelated file changed'
test -f "$downloads/unrelated/marker" || fail 'unrelated directory deleted'
[[ $(<"$downloads/unrelated/marker") == 'unrelated directory' ]] || fail 'unrelated directory changed'
test -f "$downloads/ChatGPT-darwin-arm64-not-a-version/marker" || fail 'prefix-shaped near-miss deleted'
[[ $(<"$downloads/ChatGPT-darwin-arm64-not-a-version/marker") == 'near miss marker' ]] || fail 'prefix-shaped near-miss changed'

printf 'latest marker\n' >"$latest/fixture-marker"
latest_marker=$(cksum "$latest/fixture-marker")
: >"$TEST_CURL_LOG"
PATH="$tmp/bin:$PATH" "$updater" "$downloads"
grep -q 'appcast.xml$' "$TEST_CURL_LOG" || fail 'appcast not checked'
grep -q '\.zip$' "$TEST_CURL_LOG" && fail 'up-to-date release downloaded again'
test -f "$latest/fixture-marker" || fail 'current release replaced during no-update check'
[[ $(cksum "$latest/fixture-marker") == "$latest_marker" ]] || fail 'current release changed during no-update check'

build_mismatch="$tmp/build-mismatch"
mkdir -p "$build_mismatch/ChatGPT-darwin-arm64-$version"
make_archive "$build_mismatch/ChatGPT-darwin-arm64-$version" "$version" 9998 "$tmp/mismatch.zip"
printf 'old build marker\n' >"$build_mismatch/ChatGPT-darwin-arm64-$version/fixture-marker"
: >"$TEST_CURL_LOG"
PATH="$tmp/bin:$PATH" "$updater" "$build_mismatch"
grep -q '\.zip$' "$TEST_CURL_LOG" || fail 'same-version build mismatch did not request ZIP'
test ! -e "$build_mismatch/ChatGPT-darwin-arm64-$version/fixture-marker" || fail 'same-version build mismatch was not replaced'
grep -A1 '<key>CFBundleVersion</key>' "$build_mismatch/ChatGPT-darwin-arm64-$version/ChatGPT.app/Contents/Info.plist" | grep -qx "<string>$build</string>" || fail 'promoted build does not match appcast'

promotion_failed="$tmp/promotion-failed"
mkdir -p "$promotion_failed/ChatGPT-darwin-arm64-$version"
make_archive "$promotion_failed/ChatGPT-darwin-arm64-$version" "$version" 9998 "$tmp/promotion-failed.zip"
printf 'old target marker\n' >"$promotion_failed/ChatGPT-darwin-arm64-$version/fixture-marker"
TEST_FAIL_PROMOTION=1 TEST_PROMOTION_TARGET="$promotion_failed/ChatGPT-darwin-arm64-$version" PATH="$tmp/bin:$PATH" "$updater" "$promotion_failed" && fail 'promotion failure accepted'
test -f "$promotion_failed/ChatGPT-darwin-arm64-$version/fixture-marker" || fail 'target was not restored after promotion failure'
[[ $(<"$promotion_failed/ChatGPT-darwin-arm64-$version/fixture-marker") == 'old target marker' ]] || fail 'restored target changed after promotion failure'

failed="$tmp/failed"
mkdir -p "$failed/ChatGPT-darwin-arm64-26.715.1"
printf 'old release marker\n' >"$failed/ChatGPT-darwin-arm64-26.715.1/fixture-marker"
printf 'invalid zip\n' >"$tmp/invalid.zip"
invalid_feed="$tmp/invalid.xml"
make_feed "$invalid_feed" "$version" "$build" "$(stat -c%s "$tmp/invalid.zip")"
TEST_APPCAST=$invalid_feed TEST_ARCHIVE=$tmp/invalid.zip PATH="$tmp/bin:$PATH" "$updater" "$failed" && fail 'invalid ZIP accepted'
test -d "$failed/ChatGPT-darwin-arm64-26.715.1" || fail 'old release deleted after failure'
test -f "$failed/ChatGPT-darwin-arm64-26.715.1/fixture-marker" || fail 'old release marker deleted after failure'
[[ $(<"$failed/ChatGPT-darwin-arm64-26.715.1/fixture-marker") == 'old release marker' ]] || fail 'old release changed after failure'
test ! -e "$failed/ChatGPT-darwin-arm64-$version" || fail 'failed release promoted'

bad_plist_root="$tmp/bad-plist-root"
bad_plist_archive="$tmp/bad-plist.zip"
mkdir -p "$bad_plist_root"
make_archive "$bad_plist_root" "$version" 9998 "$bad_plist_archive"
bad_plist_feed="$tmp/bad-plist.xml"
make_feed "$bad_plist_feed" "$version" "$build" "$(stat -c%s "$bad_plist_archive")"
staged_failed="$tmp/staged-failed"
mkdir -p "$staged_failed/ChatGPT-darwin-arm64-26.715.1"
printf 'old release marker\n' >"$staged_failed/ChatGPT-darwin-arm64-26.715.1/fixture-marker"
TEST_APPCAST=$bad_plist_feed TEST_ARCHIVE=$bad_plist_archive PATH="$tmp/bin:$PATH" "$updater" "$staged_failed" && fail 'staged build mismatch accepted'
test -f "$staged_failed/ChatGPT-darwin-arm64-26.715.1/fixture-marker" || fail 'old release deleted after staged plist failure'
test ! -e "$staged_failed/ChatGPT-darwin-arm64-$version" || fail 'staged plist mismatch promoted'

printf 'PASS: update-codex-app\n'
