---
type: file_write
title: Created hermes-session-hygiene skill for quarterly session store cleanup
description: Skill for pruning empty stub sessions and batch-titling untitled sessions in Hermes state.db SQLite stores
resource: agentmemory://observation/obs_mrq8zpr0_94d9944acf64
tags: ["Hermes session hygiene", "SQLite session pruning", "state.db maintenance", "dangling reference cleanup", "file_write"]
timestamp: 2026-07-18T10:52:37.017114+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

Created a new skill for maintaining Hermes session store hygiene. The skill provides production-proven SQLite queries and safety procedures to periodically clean up accidental tap sessions and untitled substantive sessions. It includes audit-first workflow, backup procedures, and parental reference cleanup to prevent orphaned sessions.

## Facts
- Skill created at path: autonomous-ai-agents/hermes-session-hygiene
- SKILL.md written to /Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/SKILL.md
- Skill version: 1.0.0, author: davec
- Target database: ~/.hermes/state.db (global) or ~/.hermes/profiles/{profile}/state.db (per-profile)
- Prune logic: deletes sessions with 0-1 real messages (not cached message_count)
- Includes safety checks: backup creation, dangling-parent cleanup, AgentMemory liveness verification

## Concepts
- Hermes session hygiene
- SQLite session pruning
- state.db maintenance
- dangling reference cleanup

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/SKILL.md`

_Importance: 6 · Confidence: 1_
