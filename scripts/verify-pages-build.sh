#!/usr/bin/env bash
set -euo pipefail

# Validate GitHub Pages artifact contents.
test -f dist/index.html
test -f dist/CNAME
test -d dist/assets
grep -qx "mendietastudio.com" dist/CNAME
grep -Eq 'src="(\./|/)assets/.+\.js"' dist/index.html
grep -Eq 'href="(\./|/)assets/.+\.css"' dist/index.html

if grep -q '/src/main.jsx' dist/index.html; then
  echo "ERROR: dist/index.html must not reference /src/main.jsx"
  exit 1
fi

# Ensure no raw source directory is published in the artifact.
if [ -d dist/src ]; then
  echo "ERROR: dist/src should not exist in the publish artifact"
  exit 1
fi

echo "Pages artifact validation passed."
