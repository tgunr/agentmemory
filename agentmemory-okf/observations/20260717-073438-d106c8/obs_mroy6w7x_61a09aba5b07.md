---
type: CommandRun
title: Git diff showing agentmemory-wrapper.sh session management changes
description: Reviewing local modifications to kilo-hooks wrapper script
resource: agentmemory://observation/obs_mroy6w7x_61a09aba5b07
tags: ["session management", "session reuse", "PID-based session tracking", "time-based expiry", "MCP server wrapper", "proxy mode", "Redis integration", "commandrun"]
timestamp: 2026-07-17T13:02:30.039794+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

The agentmemory-wrapper.sh script was modified to handle session lifecycle automatically instead of relying on a separate plugin. It now implements session reuse based on parent PID matching and 2-hour TTL, stores session state in a file, and loads secrets from .env. The iii-engine health check was changed from PID file validation to port-based detection.

## Facts
- AGENTMEMORY_DIR changed from /opt/homebrew/lib/node_modules/@agentmemory/agentmemory to /Volumes/AI/agentmemory
- Added session reuse logic with SESSION_FILE at $HOME/.agentmemory/current-session
- Session TTL set to 7200 seconds (2 hours)
- reuse_session() function validates stored PID matches PPID and checks time-based expiry
- Session registration calls /Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh
- Session file stores: PID (line 1), timestamp (line 2), session ID (line 3)
- Added AGENTMEMORY_SECRET loading from $HOME/.agentmemory/.env
- Added REDIS_URL export (defaults to redis://localhost:6379)
- Changed iii-engine running check from PID file to port check (lsof TCP:3111)
- Session lifecycle moved from agentmemory-kilo-bridge.js plugin to automatic wrapper-based registration

## Concepts
- session management
- session reuse
- PID-based session tracking
- time-based expiry
- MCP server wrapper
- proxy mode
- Redis integration

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`

_Importance: 7 · Confidence: 1_
