---
type: Error
title: Failed write of session pruning guide to references/session-pruning.md
description: Tool call failed due to incorrect parameter name ('content' instead of 'file_content')
resource: agentmemory://observation/obs_mrq8wog0_6f21b083bc44
tags: ["SQLite database maintenance", "Foreign key integrity", "Hermes state.db", "Session pruning", "Tool parameter validation", "error"]
timestamp: 2026-07-18T10:50:15.358324+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

Attempted to save a guide for pruning empty stub sessions from a Hermes `state.db` database. The write failed because the tool expected the parameter `file_content` but received `content`. The document outlines safe deletion workflows, emphasizing backing up the DB, fixing dangling parent session pointers, and verifying service health before removal.

## Facts
- Attempted to write `references/session-pruning.md` via `skill_manage` tool
- Write failed: tool requires `file_content` parameter, but `content` was provided
- Document details safe pruning of stub sessions (actual messages count &lt;= 1) from Hermes `state.db`
- Critical workflow: NULL `parent_session_id` on non-stubs before deleting stubs to prevent dangling refs in `session_search`
- Warns against deleting single-session profiles and removing integrations without verifying service health (e.g., AgentMemory on `:3111`)

## Concepts
- SQLite database maintenance
- Foreign key integrity
- Hermes state.db
- Session pruning
- Tool parameter validation

## Files
- `references/session-pruning.md`

_Importance: 6 · Confidence: 1_
