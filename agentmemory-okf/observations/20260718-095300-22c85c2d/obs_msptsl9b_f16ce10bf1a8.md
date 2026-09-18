---
type: file_edit
title: Engine bug fix: iii-engine v0.11.2 invocation-routing bug specific to mem::export
description: The skill 'agentmemory-hermes-integration' is user-owned and can't be curated autonomously.
resource: agentmemory://observation/obs_msptsl9b_f16ce10bf1a8
tags: ["iii-engine v0.11.2", "file_edit"]
timestamp: 2026-08-12T08:26:52.697804+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 1
---
# Summary

The tool skill_manage was used to patch the agent memory, revealing an engine bug that affects the 'mem::export' function. This bug causes a specific 500 error response, but fixes are difficult due to its internal nature and cannot be solved through simple edits.

## Facts
- iii-engine v0.11.2 has an invocation-routing bug specific to the 'mem::export' function.
- The bug causes a 500 response for GET /agentmemory/export but not other routes.
- The root cause is engine-internal and can't be solved by editing the agent memory source.

## Concepts
- iii-engine v0.11.2

_Importance: 7 · Confidence: 1_
