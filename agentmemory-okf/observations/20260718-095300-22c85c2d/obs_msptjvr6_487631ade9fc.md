---
type: file_edit
title: Update AgentMemory export script
description: 
resource: agentmemory://observation/obs_msptjvr6_487631ade9fc
tags: ["iii binary", "auth middleware", "file_edit"]
timestamp: 2026-08-12T08:20:06.398343+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 6
confidence: 0.9
---
# Summary

Fixed hardcoded 'Bearer' auth bug, rebuilt better-sqlite3 and restarted launchd to resolve invocation stopped issues.

## Facts
- LocalAgentMemory(:3111) has export-specific API without engine runtime registry issue
- iii binary error likely from mem::export missing in engine runtime registry

## Concepts
- iii binary
- auth middleware

_Importance: 6 · Confidence: 0.9_
