---
type: FileRead
title: hermes_state_compression.py
description: read file
resource: agentmemory://observation/obs_mv0t1p46_c846df7b8b45
tags: ["Mixin bound onto `SessionDB` via the MRO", "SessionDB", "hermes_state_compression.py", "Compression lineage", "fileread"]
timestamp: 2026-10-09T10:10:50.592040+00:00
source: agentmemory
session_id: 20261009_030534_37b4eb
importance: 7
confidence: 0.9
---
# Summary

The code reads a file named `hermes_state_compression.py` to load the compression configuration, mixin, and related utility functions.

## Facts
- Compression lineage, cooldown/streak counters, locks and turn leases for SessionDB.
- Mixin bound onto `SessionDB` via the MRO, built on its `_read_ctx` / `_execute_write` / `_write_sql` / `_read_one` primitives.

## Concepts
- Mixin bound onto `SessionDB` via the MRO
- SessionDB
- hermes_state_compression.py
- Compression lineage

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_state_compression.py`

_Importance: 7 · Confidence: 0.9_
