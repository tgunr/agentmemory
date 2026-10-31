---
type: file_edit
title: Error parsing Hermes profile channels
description: Messaging-channel settings a profile clone must NOT inherit
resource: agentmemory://observation/obs_mvttpfur_995ec65b7866
tags: ["profile inheritance", "bot tokens", "allowlists", "platform state", "file_edit"]
timestamp: 2026-10-29T17:34:37.439004+00:00
source: agentmemory
session_id: local-230964ff7fe1a3c188e9807fd8a7dfcdd60af9a86e0214180374df6875793fa9
importance: 4
confidence: 0.9
---
# Summary

The Hermes profile channels were parsed, but an error occurred while processing the output.
    The error message suggests that inheriting a profile clone with bot tokens, allowlists, and platform state can cause gateway conflicts.

## Facts
- Bot tokens, allowlists and platform state cause gateway conflicts
- Inheritance creates multiple credentials

## Concepts
- profile inheritance
- bot tokens
- allowlists
- platform state

## Files
- `~/.hermes/hermes-agent/hermes_cli/profile_channels.py`

_Importance: 4 · Confidence: 0.9_
