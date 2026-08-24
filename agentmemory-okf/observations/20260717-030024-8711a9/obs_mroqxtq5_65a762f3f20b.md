---
type: decision
title: Awaiting user choice on launchd service restart method for agentmemory
description: Fixed bundle ready but live worker pid 97282 running broken version
resource: agentmemory://observation/obs_mroqxtq5_65a762f3f20b
tags: ["launchd service management", "launchctl stop+start", "launchctl kickstart -k", "bundle deployment", "service restart strategies", "decision"]
timestamp: 2026-07-17T09:39:29.592831+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 8
confidence: 1
---
# Summary

User needs to decide how to restart the agentmemory launchd service to deploy the fixed bundle. The restart is required before backfill/purge operations can proceed, with options ranging from clean restart to deferring the restart.

## Facts
- Fixed bundle has been built and is ready
- Live worker (pid 97282) is running prior broken bundle
- agentmemory launchd service requires restart to load fix
- 138 recoverable items via recompress option

## Concepts
- launchd service management
- launchctl stop+start
- launchctl kickstart -k
- bundle deployment
- service restart strategies

## Files
- `agentmemory`

_Importance: 8 · Confidence: 1_
