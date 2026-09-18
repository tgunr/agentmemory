---
type: CommandRun
title: Dry-run audit of hermes session hygiene skill against global state.db
description: Checked skill tree structure and ran read-only database audit
resource: agentmemory://observation/obs_mrq8zwms_526a1e66fba9
tags: ["hermes session hygiene", "state database audit", "read-only database query", "commandrun"]
timestamp: 2026-07-18T10:52:45.937707+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 2
confidence: 1
---
# Summary

Executed a maintenance check on the hermes-session-hygiene skill by listing its contents and running the audit.py script against the live state database. The audit found no untitled substantive entries, zero-message conversations, or one-message conversations requiring attention, indicating clean session state.

## Facts
- Skill directory contains 3 files: scripts/audit.py, scripts/prune_stubs.py, SKILL.md
- Audit ran against /Users/davec/.hermes/state.db with zero issues found
- Total entries in state.db: 157, with zero_msg=0, one_msg=0, untitled_substantive=0
- Command was read-only dry-run, no modifications made to state.db

## Concepts
- hermes session hygiene
- state database audit
- read-only database query

## Files
- `~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/audit.py`
- `~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/prune_stubs.py`
- `~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/SKILL.md`
- `~/.hermes/state.db`

_Importance: 2 · Confidence: 1_
