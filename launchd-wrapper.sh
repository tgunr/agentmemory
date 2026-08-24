#!/bin/bash
# LaunchAgent wrapper for agentmemory dev build.
# The `agentmemory` CLI spawns the iii-engine and the worker and then exits,
# which causes launchd to consider the service finished. This wrapper keeps the
# service alive so launchd's KeepAlive can restart the whole stack on failure.

set -euo pipefail

# launchd may start us with a stale cwd; move to a safe place first.
cd /Users/davec || true
cd /Volumes/AI/agentmemory

export AGENTMEMORY_DATA_DIR="/Volumes/AI/agentmemory"
export REDIS_URL="redis://localhost:6379"
export HOME="/Users/davec"
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin"

# Start the full stack (iii-engine + worker) in the foreground.
# The CLI exits once both children are spawned, so we keep the wrapper alive.
exec /opt/homebrew/bin/node dist/cli.mjs "$@" &
CLI_PID=$!

# Wait for the CLI to finish spawning.
sleep 3

# If the CLI exited abnormally, propagate the failure.
if ! kill -0 "$CLI_PID" 2>/dev/null; then
  wait "$CLI_PID" || exit $?
fi

# Keep the service alive so launchd doesn't mark it as exited.
while true; do
  # Verify the REST API is still responsive.
  if ! curl -fsS -H "Authorization: Bearer ${AGENTMEMORY_SECRET:-}" \
       http://127.0.0.1:3111/agentmemory/livez >/dev/null 2>&1; then
    echo "[launchd-wrapper] REST API not healthy, exiting so launchd restarts us" >&2
    exit 1
  fi
  sleep 10
done
