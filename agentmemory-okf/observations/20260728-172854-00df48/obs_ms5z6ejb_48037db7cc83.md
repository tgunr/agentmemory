---
type: file_edit
title: Audit Desktop GUI profile bug in VoidBreath
description: Check for Hermes Desktop sidebar reads from a different DB under \"develop\" profile
resource: agentmemory://observation/obs_ms5z6ejb_48037db7cc83
tags: ["Hermes Desktop bug", "SQLite database", "file_edit"]
timestamp: 2026-07-29T11:02:11.732524+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 8
confidence: 0.9
---
# Summary

The tool call inspected files for a potential sidebar bug in VoidBreath, checking if the Desktop GUI uses a different DB than expected.

## Facts
- The user checked if the Hermes Desktop sidebar uses a different storage layer than the YAML registry.
- The skills doc mentioned that the Hermes Desktop app shows a Projects sidebar using a SQLite database at ~/.hermes/projects.db.

## Concepts
- Hermes Desktop bug
- SQLite database

## Files
- `/Users/davec/.hermes/projects.db`
- `/Users/davec/.hermes/profiles/develop/state.db`

_Importance: 8 · Confidence: 0.9_
