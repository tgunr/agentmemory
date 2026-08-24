---
type: Search
title: Located recordAudit function in audit module
description: Function declaration begins at line 34.
resource: agentmemory://observation/obs_mroq3cyy_e379d2a17fd1
tags: ["audit logging", "TypeScript async functions", "key-value state storage", "search"]
timestamp: 2026-07-17T09:15:48.199411+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 2
confidence: 1
---
# Summary

The search located the exported recordAudit implementation in the audit module. Its declaration and nearby context identify where audit behavior can be inspected or modified.

## Facts
- Found export async function recordAudit at line 34 in /Volumes/AI/agentmemory/src/functions/audit.ts.
- The function accepts kv: StateKV and operation: AuditEntry["operation"] as its first parameters.
- A preceding comment references use before kv.delete(...) and matching one of two shapes.

## Concepts
- audit logging
- TypeScript async functions
- key-value state storage

## Files
- `/Volumes/AI/agentmemory/src/functions/audit.ts`

_Importance: 2 · Confidence: 1_
