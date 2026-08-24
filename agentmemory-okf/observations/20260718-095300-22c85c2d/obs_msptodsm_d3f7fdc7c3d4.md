---
type: file_edit
title: Note on iii-engine v0.11.2 invocation-routing bug
description: Error handling in memory export
resource: agentmemory://observation/obs_msptodsm_d3f7fdc7c3d4
tags: ["iii-engine v0.11.2", "tddddd", "inversion-routing bug", "file_edit"]
timestamp: 2026-08-12T08:23:36.402386+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

The iii-engine's memory export function experienced an invocation-routing bug, citing an inability to find callers for the invoked API, and a worker registering issue that caused flapping

## Facts
- Prioritized fix for `mem::export` involves bypassing engine return 'Did not find caller for invocation'
- iiiengine v0.11.2 flapping worker issue resolved with KV store direct access workaround

## Concepts
- iii-engine v0.11.2
- tddddd
- inversion-routing bug

## Files
- `/Users/davec/data/agentmemory/data/state_store.db`

_Importance: 7 · Confidence: 0.9_
