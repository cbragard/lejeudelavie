#!/usr/bin/env bash
# Stop hook: run ESLint and block task completion if it fails.
set -uo pipefail

cat >/dev/null 2>&1 || true

output="$(npm run lint 2>&1)"
status=$?

if [ "$status" -ne 0 ]; then
    reason="ESLint failed (npm run lint). Fix the violations before finishing:

${output}"
    if command -v jq >/dev/null 2>&1; then
        jq -nc --arg r "$reason" '{decision:"block", reason:$r}'
    else
        printf '%s\n' "$reason" >&2
        exit 2
    fi
fi

exit 0
