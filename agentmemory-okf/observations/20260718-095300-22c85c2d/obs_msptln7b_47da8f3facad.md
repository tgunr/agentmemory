---
type: file_edit
title: Worker Node Process Memory Corruption Fix
description: An issue occurred with the AgentMemory (`:3111`) tool when trying to export its contents, causing an HTTP 500 error.
resource: agentmemory://observation/obs_msptln7b_47da8f3facad
tags: ["file_edit"]
timestamp: 2026-08-12T08:21:28.625844+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 5
confidence: 0.75
---
# Summary

AgentMemory (`:3111`) experienced a corruption issue due to missing `mem::export` in the engine runtime registry. A fix was implemented by process-killer the Node dist/index.mjs and iii --config.

## Facts
- The new text contains a fixed workaround for a worker register memory change.

_Importance: 5 · Confidence: 0.75_
