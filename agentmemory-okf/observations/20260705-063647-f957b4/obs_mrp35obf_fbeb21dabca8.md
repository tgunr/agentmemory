---
type: Search
title: Search for active project management functions
description: Pattern search in hermes_cli directory for project activation logic
resource: agentmemory://observation/obs_mrp35obf_fbeb21dabca8
tags: ["active project management", "sqlite database schema", "CLI command integration", "search"]
timestamp: 2026-07-17T15:21:31.222809+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Search uncovered the active project management implementation across the codebase, identifying the core database key for tracking active projects and the CLI integration points. The get_active_id function in projects_db.py appears central to the active project feature.

## Facts
- 6 total matches found across 3 files
- _ACTIVE_META_KEY = "active_id" defined in projects_db.py line 598
- get_active_id function in projects_db.py line 614
- projects_cmd.py references active project at line 221
- active_sessions.py contains session management functions at lines 73 and 351

## Concepts
- active project management
- sqlite database schema
- CLI command integration

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/projects_db.py`
- `/Users/davec/.hermes/hermes-agent/hermes_cli/projects_cmd.py`
- `/Users/davec/.hermes/hermes-agent/hermes_cli/active_sessions.py`

_Importance: 5 · Confidence: 1_
