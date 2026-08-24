---
type: CommandRun
title: Verify hermes-session-hygiene scripts with synthetic SQLite DB
description: Ad-hoc verification of prune_stubs.py and audit.py using isolated temp database
resource: agentmemory://observation/obs_mrq91lvt_49501f0d5f75
tags: ["SQLite testing", "session hygiene", "stub pruning", "database auditing", "subprocess testing", "ad-hoc verification", "commandrun"]
timestamp: 2026-07-18T10:54:05.318086+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

An ad-hoc verification script was executed to test the `prune_stubs.py` and `audit.py` scripts from the hermes-session-hygiene skill. It created a synthetic SQLite database with stub and real sessions, ran the scripts via subprocess, and verified correct behavior (stub removal, parent nullification, backup creation, and accurate auditing) without touching the live state database.

## Facts
- Tested scripts located in ~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts
- prune_stubs.py successfully removed stubs, kept real sessions, nulled orphaned parents, and created a .bak.prune backup
- audit.py correctly identified 0 stubs and 1 untitled substantive session candidate
- Synthetic DB used in /tmp; live ~/.hermes/state.db was untouched
- All Python assertions passed, exit code 0

## Concepts
- SQLite testing
- session hygiene
- stub pruning
- database auditing
- subprocess testing
- ad-hoc verification

## Files
- `~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/prune_stubs.py`
- `~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/audit.py`

_Importance: 5 · Confidence: 1_
