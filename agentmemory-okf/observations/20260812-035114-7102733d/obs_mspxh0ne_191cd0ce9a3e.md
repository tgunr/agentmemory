---
type: FileRead
title: Memory Error in iii-engine v0.11.2
description: No operations were applied due to invocation-routing bug
resource: agentmemory://observation/obs_mspxh0ne_191cd0ce9a3e
tags: ["fileread"]
timestamp: 2026-08-12T10:09:51.236946+00:00
source: agentmemory
session_id: 20260812_035114_7102733d
importance: 9
confidence: 0.5
---
# Summary

The `mem::export` routing was experiencing a bug that prevented the export of memory data. A fix was discovered by directly reading from the KV store or restarting the system.

_Importance: 9 · Confidence: 0.5_
