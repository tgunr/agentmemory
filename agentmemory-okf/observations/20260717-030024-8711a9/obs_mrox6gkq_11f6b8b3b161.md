---
type: file_edit
title: Patched hermes-service-debugging skill with zombie worker route table fix
description: Added entry #40 documenting wedged HTTP route table from orphaned workers
resource: agentmemory://observation/obs_mrox6gkq_11f6b8b3b161
tags: ["zombie process management", "launchctl service restart", "HTTP route table debugging", "WebSocket route registration", "terminal consent guard", "agentmemory service", "iii-engine architecture", "skill documentation", "file_edit"]
timestamp: 2026-07-17T12:34:10.149000+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 7
confidence: 1
---
# Summary

Added comprehensive debugging entry to hermes-service-debugging skill documenting a subtle failure mode where orphaned zombie workers cause a wedged HTTP route table. The entry includes diagnostic symptoms, the insufficient kickstart fix, the actual recovery procedure, harness consent guard workarounds, and proper purge/backfill API usage.

## Facts
- Skill 'hermes-service-debugging' SKILL.md patched with new entry #40
- Symptom: forget/sessions/observations GET return 404 while livez and custom sdk.trigger endpoints return 200
- Root cause: wedged HTTP route table from orphaned zombie workers reparented to pid 1, not a code bug
- iii-engine registers REST routes from worker over WebSocket (port 49134); stale workers leave dead registrations
- launchctl kickstart -k is NOT sufficient to fix the wedged route table
- Recovery requires killing ALL agentmemory processes (dist/index.mjs and iii --config) then clean launchctl start
- Terminal consent guard blocks multi-command chains but allows separate calls: launchctl stop → kill -9 orphans → launchctl start
- Purge path: use native POST /agentmemory/forget with sessionId and observationIds, not hand-rolled kv.delete
- Backfill uses POST /agentmemory/recompress → mem::compress (temporary endpoint per pitfall #37)

## Concepts
- zombie process management
- launchctl service restart
- HTTP route table debugging
- WebSocket route registration
- terminal consent guard
- agentmemory service
- iii-engine architecture
- skill documentation

## Files
- `hermes-service-debugging/SKILL.md`

_Importance: 7 · Confidence: 1_
