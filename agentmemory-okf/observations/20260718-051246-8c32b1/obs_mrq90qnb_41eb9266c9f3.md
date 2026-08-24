---
type: CommandRun
title: Verification test for hermes-session-hygiene prune and audit scripts
description: Synthetic DB test passes prune_stubs but fails audit assertion on untitled count
resource: agentmemory://observation/obs_mrq90qnb_41eb9266c9f3
tags: ["SQLite testing", "session hygiene", "data pruning", "test assertions", "audit reporting", "commandrun"]
timestamp: 2026-07-18T10:53:24.836260+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

An ad-hoc verification script tested the prune_stubs.py and audit.py scripts using a synthetic SQLite database. While prune_stubs.py correctly removed stub sessions and reparented the real session, the subsequent audit.py run reported 1 untitled substantive session. This caused the test to fail because it incorrectly asserted that untitled_substantive should be 0 after pruning.

## Facts
- Executed Python verification script for ~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene
- Created synthetic SQLite DB with 3 stub sessions and 1 real session (5 messages, parent=stub1)
- prune_stubs.py successfully removed 3 stubs, reparented real child, nulled parent, created backup
- audit.py reported untitled_substantive=1 for the remaining real session (realDDDD, 5 msgs, untitled)
- Test failed at assertion: assert "untitled_substantive=0" in r2.stdout because count was 1

## Concepts
- SQLite testing
- session hygiene
- data pruning
- test assertions
- audit reporting

## Files
- `~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/prune_stubs.py`
- `~/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/audit.py`

_Importance: 6 · Confidence: 1_
