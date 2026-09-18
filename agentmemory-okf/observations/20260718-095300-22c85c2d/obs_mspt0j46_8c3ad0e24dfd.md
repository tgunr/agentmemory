---
type: file_edit
title: Memory tool usage on macOS
description: Add entry to Memory service
resource: agentmemory://observation/obs_mspt0j46_8c3ad0e24dfd
tags: ["Node version mismatch for native modules", "Worker process issues with REST nodes", "file_edit"]
timestamp: 2026-08-12T08:05:03.553089+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 6
confidence: 0.9
---
# Summary

The Memory service (iii-engine) on macOS had a REST worker node issue, resulting in a 500 error. Adding more information about the problem is necessary to resolve it.

## Facts
- Native modules (better-sqlite3) MUST be rebuilt with the same node version or they fail to load
- Login-shell and native modules have different node versions for worker operations

## Concepts
- Node version mismatch for native modules
- Worker process issues with REST nodes

## Files
- `/Users/davec/...`

_Importance: 6 · Confidence: 0.9_
