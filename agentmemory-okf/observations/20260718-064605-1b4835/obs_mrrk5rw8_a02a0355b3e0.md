---
type: Error
title: Memory replace failed: exceeds 2200 char limit
description: BlueBubbles consolidation attempted but exceeded capacity
resource: agentmemory://observation/obs_mrrk5rw8_a02a0355b3e0
tags: ["memory management", "context limits", "skill referencing", "BlueBubbles gateway", "error"]
timestamp: 2026-07-19T08:53:01.669150+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The agent attempted to consolidate detailed BlueBubbles troubleshooting notes into a reference to the `bluebubbles-gateway` skill to save space. The memory update failed because the new text would push total usage to 2,202 characters, exceeding the strict 2,200-character limit. The agent must now remove or shorten other existing memory entries to accommodate the change.

## Facts
- Memory capacity limit is strictly 2,200 characters.
- Pre-operation usage was 2,165 characters across 8 entries.
- Attempted replace operation would result in 2,202 characters.
- Old entry contained BlueBubbles troubleshooting details (pw '!', LAN IPv4 webhook fix, AppleScript fallback).
- New entry intended to reference canonical skill `bluebubbles-gateway` instead of inline details.
- System requires removing or shortening other existing entries in the same batch to proceed.

## Concepts
- memory management
- context limits
- skill referencing
- BlueBubbles gateway

## Files
- `memory`

_Importance: 5 · Confidence: 1_
