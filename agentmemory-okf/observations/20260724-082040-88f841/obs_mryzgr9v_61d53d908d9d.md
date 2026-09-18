---
type: Observation
title: Terminal command to inspect currentCwd and workspaceCwdForNewSession
description: No one-line context provided
resource: agentmemory://observation/obs_mryzgr9v_61d53d908d9d
tags: ["HerMES Agent usage", "session management in HerMES", "observation"]
timestamp: 2026-07-24T13:35:51.563730+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 5
confidence: 0.9
---
# Summary

The current CWD and workspaceCwdForNewSession are being inspected using the terminal command, highlighting potential configuration or namespace inconsistencies.

## Facts
- Cmd: cd /Users/davec/.hermes/hermes-agent && echo "=== $currentCwd store def + setCurrentCwd ==="; grep -rn "currentCwd|setCurrentCwd|workspaceCwdForNewSession" apps/desktop/src/store/session.ts 2>/dev/null | head; echo "=== find workspaceCwdForNewSession body ==="; grep -rln "workspaceCwdForNewSession" apps/desktop/src --include=.ts --include=.tsx
- Output: 'apps/desktop src store session ts:78...workspaceCwdForNewSession() / apps/desktop/src/store/session.ts:336'; exit_code: 0; error: null

## Concepts
- HerMES Agent usage
- session management in HerMES

## Files
- `/Users/davec/.hermes/hermes-agent`

_Importance: 5 · Confidence: 0.9_
