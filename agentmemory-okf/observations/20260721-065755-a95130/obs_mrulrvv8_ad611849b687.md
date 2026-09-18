---
type: file_edit
title: Slack slash command name constraints
description: New code snippets added to Hermes CLI and its test suite
resource: agentmemory://observation/obs_mrulrvv8_ad611849b687
tags: ["Slink slash command constraints", "file_edit"]
timestamp: 2026-07-21T12:01:31.407154+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 7
confidence: 0.9
---
# Summary

This change improves the resilience of Hermes' slack API and ensures its compatibility with other platforms.

## Facts
- Maximum number of Slack slash commands is 50, but high-priority aliases must survive this cap.
- Explicitly routed commands are intentionally not given native Slack slot.

## Concepts
- Slink slash command constraints

## Files
- `/Users/davec/.hermes/hermes-agent/commands.py`

_Importance: 7 · Confidence: 0.9_
