---
type: CommandRun
title: Failed skill patch: hermes-session-hygiene
description: Attempted to add unfinished session audit section but rejected by read-before-write safety
resource: agentmemory://observation/obs_mrs1a2ve_696a12788d5d
tags: ["skill management", "read-before-write safety", "SQLite database scanning", "session audit", "profile enumeration", "commandrun"]
timestamp: 2026-07-19T16:52:16.005887+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The agent attempted to patch the hermes-session-hygiene skill to add functionality for finding unfinished sessions across multiple profiles. The operation failed because the system enforces a read-before-write safety mechanism, requiring the current SKILL.md content to be loaded via skill_view() before any modifications. This prevents blind edits to skill documentation.

## Facts
- Tool skill_manage attempted to patch skill 'hermes-session-hygiene'
- Patch rejected with error: "Refusing background curator patch... current SKILL.md content has not been loaded"
- System requires calling skill_view(name) before patching to prevent blind edits
- New content would add section 7: "Find unfinished / hanging sessions (read-only audit)"
- Audit scans SQLite state.db files across multiple profiles in ~/.hermes/
- Code enumerates profiles: default, ai, cc, develop, ollama, personal, pveroot, ranch, shop
- Filters out noise messages and sessions older than 30 days
- Production scanner exists at ~/.hermes/scripts/unfinished_session_audit.py

## Concepts
- skill management
- read-before-write safety
- SQLite database scanning
- session audit
- profile enumeration

## Files
- `~/.hermes/state.db`
- `~/.hermes/profiles/*/state.db`
- `~/.hermes/scripts/unfinished_session_audit.py`

_Importance: 4 · Confidence: 1_
