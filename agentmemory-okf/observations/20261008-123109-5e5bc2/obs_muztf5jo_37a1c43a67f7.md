---
type: FileRead
title: Invalid tool call format
description: Retry required
resource: agentmemory://observation/obs_muztf5jo_37a1c43a67f7
tags: ["tool_call format errors", "fileread"]
timestamp: 2026-10-08T17:33:32.240191+00:00
source: agentmemory
session_id: 20261008_123109_5e5bc2
importance: 4
confidence: 0.9
---
# Summary

Batching tool_call invocations with connector names is allowed, sending more than one call at once is not. Retry with corrected format.

## Facts
- tool_call takes exactly one entry for local tools
- sent 2 calls instead of 1

## Concepts
- tool_call format errors

_Importance: 4 · Confidence: 0.9_
