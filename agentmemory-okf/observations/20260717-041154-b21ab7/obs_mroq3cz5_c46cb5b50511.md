---
type: Search
title: Found AuditEntry interface with operation union type
description: Searching for operation field definitions in types.ts
resource: agentmemory://observation/obs_mroq3cz5_c46cb5b50511
tags: ["TypeScript interfaces", "union types", "audit logging", "type definitions", "search"]
timestamp: 2026-07-17T09:15:48.205008+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

Searched for "operation:" pattern in types.ts to understand the AuditEntry structure. Found the interface definition showing it tracks audit events with three operation types: observe, compress, and remember. This defines the core audit logging mechanism for the agent memory system.

## Facts
- AuditEntry interface defined at lines 562-568 in types.ts
- Interface contains id (string), timestamp (string), and operation fields
- Operation field is a union type: "observe" | "compress" | "remember"
- Search returned 7 total matches across the codebase

## Concepts
- TypeScript interfaces
- union types
- audit logging
- type definitions

## Files
- `/Volumes/AI/agentmemory/src/types.ts`

_Importance: 3 · Confidence: 1_
