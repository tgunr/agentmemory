---
type: FileRead
title: Read standalone.ts memory handler implementation
description: Lines 230-299 showing local memory operations
resource: agentmemory://observation/obs_mroxbdvf_0082a0148e2d
tags: ["MCP protocol", "in-memory KV store", "memory management", "search implementation", "TypeScript", "fileread"]
timestamp: 2026-07-17T12:37:59.925024+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Read the local memory handler implementation in standalone.ts showing how memories are saved, searched, and managed. The implementation uses an in-memory key-value store with persistence and implements word-based search across memory metadata fields.

## Facts
- File has 501 total lines, 15846 bytes
- handleLocal function processes memory tools: memory_save, memory_recall, memory_smart_search, memory_sessions, memory_governance_delete
- Memory records stored with: id, type, title (max 80 chars), content, concepts, files, timestamps, strength (default 7), version, isLatest, sessionIds
- Search uses word-by-word matching across title, content, files, concepts, sessionIds, and id fields
- Uses InMemoryKV with persist() method for storage
- Audit endpoint: /agentmemory/audit

## Concepts
- MCP protocol
- in-memory KV store
- memory management
- search implementation
- TypeScript

## Files
- `/Volumes/AI/agentmemory/src/mcp/standalone.ts`

_Importance: 4 · Confidence: 1_
