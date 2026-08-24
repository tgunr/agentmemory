---
type: file_edit
title: skill_view edit behavior
description: Parked session behavior for skill edit
resource: agentmemory://observation/obs_msq4bhsr_98dc632f1b75
tags: ["React hooks", "file_edit"]
timestamp: 2026-08-12T13:21:30.839395+00:00
source: agentmemory
session_id: 20260812_063036_49578aec
importance: 8
confidence: 0.9
---
# Summary

The skill_view tool edited the 'parked-session-behavior' skill to include recognition of non-instruction markers and behavior for parked session behavior. This decision ensures that users can test for proper behavior in scaffolding-only turns.

## Facts
- Non-instruction markers for parked session behavior are recognized, including redirect wrappers, interrupt notices, and gateway status messages.
- A turn is considered parked if it contains no verb, question, deliverable, file path, URL, command, or explicit "do X" marker.

## Concepts
- React hooks

## Files
- `SKILL.md`

_Importance: 8 · Confidence: 0.9_
