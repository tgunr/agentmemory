---
type: Search
title: Search for kv.delete patterns across source directory
description: Found 220 deletions related to key-value operations across multiple files
resource: agentmemory://observation/obs_mroq1mge_93a5e75c0ed2
tags: ["key-value deletion patterns", "auto-forget implementation", "working memory cleanup", "audit trail requirements", "sketch garbage collection", "search"]
timestamp: 2026-07-17T09:14:27.179311+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 0.9
---
# Summary

Search identified deletion patterns used throughout the codebase including signal deletion, auto-forget memory cleanup, working memory management, sketches actions cleanup, and audit logging. The audit.ts file contains explicit guidance on deletion patterns requiring recordAudit calls before kv.delete operations.

## Facts
- 220 total matches found for kv.delete and delete( patterns
- Files searched: /Volumes/AI/agentmemory/src

## Concepts
- key-value deletion patterns
- auto-forget implementation
- working memory cleanup
- audit trail requirements
- sketch garbage collection

## Files
- `/Volumes/AI/agentmemory/src/functions/signals.ts`
- `/Volumes/AI/agentmemory/src/functions/auto-forget.ts`
- `/Volumes/AI/agentmemory/src/functions/working-memory.ts`
- `/Volumes/AI/agentmemory/src/functions/audit.ts`
- `/Volumes/AI/agentmemory/src/functions/sketches.ts`

_Importance: 5 · Confidence: 0.9_
