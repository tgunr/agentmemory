---
type: file_write
title: Cross-profile pulse monitor write
description: Polls Lightweight RPC at `session.cross_profile_status`
resource: agentmemory://observation/obs_ms68ds7j_d2791a30a0ed
tags: ["React hooks", "file_write"]
timestamp: 2026-07-29T15:19:52.583343+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 7
confidence: 0.9
---
# Summary

The hook polls the `session.cross_profile_status` RPC to get latest known running/finished/attention state for every recent session across all profiles. The poll cadence is faster than messaging poll, ensuring backgrounded profiles feel "live".

## Facts
- Hook calls with poll cadence of 10s and response size ~1k
- rails rendered pulse as a diff against previous poll results

## Concepts
- React hooks

_Importance: 7 · Confidence: 0.9_
