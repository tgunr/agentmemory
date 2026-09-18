---
type: file_edit
title: Patch debugging documentation about service reload with zombie worker warning
description: Updated hermes-service-debugging skill to warn about route table issues with zombie workers
resource: agentmemory://observation/obs_mrox6vkx_364c18899cdf
tags: ["service reloading", "launchctl daemon management", "zombie processes", "route table corruption", "file_edit"]
timestamp: 2026-07-17T12:34:29.596837+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

Updated the service reload debugging instructions to document a critical pitfall where zombie workers from prior starts cause the route table to become wedged, making even new endpoints return 404. The patch provides a more reliable sequence involving explicit kill commands before launchctl start.

## Facts
- Action: patch applied to references/mutating-stored-observations.md
- Skill modified: hermes-service-debugging
- Removed reference to pitfall #33 (STALE code) and added pitfall #40 (zombie workers causing wedged route table)
- Change warns that launchctl kickstart -k is insufficient when zombie workers survive
- New procedure: kill -9 ALL node dist/index.mjs workers + iii --config parent, then launchctl start com.github.agentmemory
- Added terminal guard caveat about stop/unload chain being blocked

## Concepts
- service reloading
- launchctl daemon management
- zombie processes
- route table corruption

## Files
- `references/mutating-stored-observations.md`

_Importance: 6 · Confidence: 1_
