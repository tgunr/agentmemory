---
type: file_edit
title: Hermes Session Recovery Skill Document
description: A class-level skill for investigating session history problems.
resource: agentmemory://observation/obs_mrw6ji31_c8fa87a2fcef
tags: ["file_edit"]
timestamp: 2026-07-22T14:30:38.406207+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 7
confidence: 0.75
---
# Summary

Diagnose and recover missing Hermes sessions across Desktop, CLI, gateway, and multi-profile setups. The SQLite data is not actually gone but may be surfaced in the UI after a WebSocket/gateway reconnect.

## Facts
- The Canonical state.db still has rows but the UI does not show them.
- The profile stores contain real history while one store is empty or very small.

_Importance: 7 · Confidence: 0.75_
