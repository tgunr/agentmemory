---
type: file_edit
title: Document gateway restart requirement after code patches
description: SKILL.md gotcha: patched code not auto-deployed
resource: agentmemory://observation/obs_mrrjuwem_e136c00a21e7
tags: ["LaunchAgent process lifecycle", "gateway restart deployment", "hot-reload absence", "SKILL.md operational gotchas", "file_edit"]
timestamp: 2026-07-19T08:44:34.314902+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Documented a critical operational gotcha: fixes to bluebubbles.py on disk do not affect the live gateway until `hermes gateway restart` because LaunchAgent owns the process. Includes a PID/start-time check command for diagnosing post-patch recurrence. Sibling subagent had also touched this file without a prior read by this agent.

## Facts
- Added gotcha to SKILL.md: patched code in gateway/platforms/bluebubbles.py is NOT auto-deployed
- Running gateway launched by LaunchAgent only loads new code after `hermes gateway restart`
- First check if loop recurs: `ps -o lstart= -p $(pgrep -f 'hermes.*gateway')` for pre-patch PID
- Code patch without restart = no change
- Warning: file modified by sibling subagent '20260719_031412_a3a58a' without this agent reading it first
- Patch succeeded at /Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md

## Concepts
- LaunchAgent process lifecycle
- gateway restart deployment
- hot-reload absence
- SKILL.md operational gotchas

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md`
- `gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
