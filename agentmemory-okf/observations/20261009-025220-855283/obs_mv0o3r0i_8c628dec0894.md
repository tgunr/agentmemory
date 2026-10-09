---
type: FileRead
title: Quarterly cleanup of Hermes session stores
description: Recurring maintenance for your Hermes session stores.
resource: agentmemory://observation/obs_mv0o3r0i_8c628dec0894
tags: ["SQLite query", "fileread"]
timestamp: 2026-10-09T07:52:28.288139+00:00
source: agentmemory
session_id: 20261009_025220_855283
importance: 7
confidence: 0.9
---
# Summary

The skill executed a script to prune empty stub sessions, batch title-less substantive sessions, and verify profile/session organization. This helps maintain the session store integrity and prevent data loss.

## Facts
- Pruning empty stub sessions, batching title-less substantive sessions, and verifying profile/session organization.
- The tool executed a SQLite query to count messages for each session.

## Concepts
- SQLite query

## Files
- `/home/user/.hermes/state.db`

_Importance: 7 · Confidence: 0.9_
