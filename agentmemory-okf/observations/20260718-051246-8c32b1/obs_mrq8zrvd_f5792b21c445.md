---
type: file_write
title: Creating audit.py script for Hermes session hygiene analysis
description: Python utility to audit state.db and identify sessions needing titles
resource: agentmemory://observation/obs_mrq8zrvd_f5792b21c445
tags: ["SQLite database auditing", "session hygiene", "Hermes", "file_write"]
timestamp: 2026-07-18T10:52:39.766435+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Created a Python script that audits Hermes state.db database to identify session hygiene issues: zero-message sessions, one-message sessions, and untitled multi-message sessions. The script prints health buckets and first user messages for untitled substantive sessions to enable title authoring.

## Facts
- 1353 bytes written to audit.py
- Directories created: true
- Lint status: ok
- Resolved path: /Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/audit.py

## Concepts
- SQLite database auditing
- session hygiene
- Hermes

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/audit.py`

_Importance: 5 · Confidence: 1_
