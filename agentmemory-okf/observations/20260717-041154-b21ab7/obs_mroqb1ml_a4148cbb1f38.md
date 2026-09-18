---
type: FileRead
title: Launchd wrapper script for agentmemory dev build
description: Shell script that runs iii-engine directly to avoid double-worker race condition
resource: agentmemory://observation/obs_mroqb1ml_a4148cbb1f38
tags: ["launchd process management", "worker race condition", "iii-engine configuration", "environment variable setup", "foreground process execution", "fileread"]
timestamp: 2026-07-17T09:21:46.741644+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

Read the launchd wrapper script that manages the agentmemory dev build process. The script avoids a double-worker race condition by running the iii-engine directly rather than through dist/cli.mjs, which would import both the CLI and engine-spawned worker. Uses exec to maintain foreground process for launchd restart capability.

## Facts
- Script runs iii-engine directly with dev-repo config instead of dist/cli.mjs to avoid double-worker race
- iii binary located at /Users/davec/.local/bin/iii
- Config file at /Volumes/AI/agentmemory/iii-config.yaml
- Data directory set to /Users/davec/data/agentmemory
- Uses exec to keep engine in foreground so launchd can restart on failure
- Environment variables: AGENTMEMORY_DATA_DIR, AGENTMEMORY_DROP_STALE_INDEX, REDIS_URL (localhost:6379)

## Concepts
- launchd process management
- worker race condition
- iii-engine configuration
- environment variable setup
- foreground process execution

## Files
- `/Users/davec/.agentmemory/launchd-wrapper.sh`

_Importance: 5 · Confidence: 1_
