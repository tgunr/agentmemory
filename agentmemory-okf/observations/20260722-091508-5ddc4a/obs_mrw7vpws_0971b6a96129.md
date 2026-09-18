---
type: FileRead
title: skill_view tool output
description: Diagnose and recover missing Hermes sessions
resource: agentmemory://observation/obs_mrw7vpws_0971b6a96129
tags: ["hermes-session-recovery", "sqlite data recovery", "fileread"]
timestamp: 2026-07-22T15:08:08.041638+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 4
confidence: 0.9
---
# Summary

A skill view tool output revealed a possible issue with session history recovery. The user restored the state.db backup, but some sessions remained missing or duplicated.

## Facts
- Session recovery script ran successfully on Desktop, CLI, gateway, and multi-profile setups.
- User reported missing or duplicated sessions after restoring `state.db` from Time Machine.

## Concepts
- hermes-session-recovery
- sqlite data recovery

## Files
- `/usr/local/bin/hermes`

_Importance: 4 · Confidence: 0.9_
