---
type: file_write
title: Hermes Skills Manager Skill "hermes-session-recovery" Creation
description: Created skill for diagnosing and recovering missing Hermes sessions.
resource: agentmemory://observation/obs_mrw4ayz7_8b05786241be
tags: ["SQLite Data Analysis", "Hermes Session Recovery", "file_write"]
timestamp: 2026-07-22T13:28:01.167793+00:00
source: agentmemory
session_id: 20260722_082139_2ee6a2
importance: 6
confidence: 0.9
---
# Summary

Created 'hermes-session-recovery' skill for analyzing SQLite data at `~/.hermes/state.db` to identify previous sessions before new ones appear. This helps diagnose the root cause of missing Hermes sessions across different platforms.

## Facts
- Built skill to aid in Hermes session recovery, involving auditing of state.db backups.
- Purpose of rebuild: Diagnose and recover missing Hermes sessions across desktop, CLI, gateway, and multi-profile setups.

## Concepts
- SQLite Data Analysis
- Hermes Session Recovery

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-recovery/SKILL.md`
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-recovery/references/example.md`

_Importance: 6 · Confidence: 0.9_
