---
type: file_edit
title: Error adding entry to agentmemory KV store
description: Data corruption issue specific to mem::export
resource: agentmemory://observation/obs_msptkpc4_dc7e024a2895
tags: ["iii-engine bug", "Mem::Export", "IiEngine Runtime Registry", "file_edit"]
timestamp: 2026-08-12T08:20:44.737179+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 1
---
# Summary

The agentmemory export HTTP endpoint at 500s returned an error due to a bug in the mem::export function, which is wrapped by the api::export module. The bug prevents the function from being exported correctly, leading to data corruption issues. A test with `~/.local/bin/iii trigger --function-id mem::export --address localhost --port 49134` suggests that there's a registry issue in the engine runtime.

## Facts
- The memory at 19,58 <emphasis>chars</emphasis>, adding this entry would exceed the limit.
- Some stale or less important entries in the current_entries list need consolidation.
- The iii-engine v0.11.2 invocation-routing bug specific to mem::export caused the issue.

## Concepts
- iii-engine bug
- Mem::Export
- IiEngine Runtime Registry

_Importance: 7 · Confidence: 1_
