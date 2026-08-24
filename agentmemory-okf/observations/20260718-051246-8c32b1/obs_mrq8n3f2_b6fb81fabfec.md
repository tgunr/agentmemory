---
type: CommandRun
title: Examined Hermes memory configuration and session database statistics
description: Diagnostic query of ~/.hermes config.yaml and state.db SQLite databases
resource: agentmemory://observation/obs_mrq8n3f2_b6fb81fabfec
tags: ["Hermes memory management", "SQLite session database", "session cleanup", "commandrun"]
timestamp: 2026-07-18T10:42:48.192159+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Diagnostic shell command inspected Hermes memory system configuration and analyzed session database statistics to understand memory management behavior and session patterns. Found significant number of untitled sessions with minimal messages, suggesting potential cleanup opportunities or session management issues.

## Facts
- Memory config: flush_min_turns=6, memory_char_limit=2200, nudge_interval=10, provider=agentmemory
- Global sessions: 188 total, 50 untitled, 31 with zero/one message
- Most recent session "20260718_0" has 54 messages, titled "Organizing Hermes profiles and sessions"
- Profile queries for ranch and shop were partially executed (truncated output)

## Concepts
- Hermes memory management
- SQLite session database
- session cleanup

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/state.db`

_Importance: 5 · Confidence: 1_
