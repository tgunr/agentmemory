---
type: FileRead
title: Session summarization with chunking implementation
description: Handles large sessions by splitting into chunks with retry logic
resource: agentmemory://observation/obs_mroxawmn_1dcde8854c75
tags: ["LLM summarization", "chunking strategy", "retry logic", "concurrent processing", "memory compression", "session management", "error handling", "XML parsing", "fileread"]
timestamp: 2026-07-17T12:37:37.572791+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

This file implements a memory compression system that summarizes session observations using LLM calls. For large sessions exceeding the chunk size, it splits observations into manageable chunks and processes them concurrently with retry logic. Failed chunks are tracked and if more than 50% fail, the entire summary is abandoned to prevent unreliable output, ensuring data quality over partial results.

## Facts
- Default chunk size: 400 observations (~50k tokens at ~110 tok/obs)
- Default concurrency: 6 concurrent chunk calls
- Retry logic: 2 attempts per chunk before marking as failed
- Max skip ratio: 0.5 (bailout if >50% chunks fail to parse)
- Environment overrides: SUMMARIZE_CHUNK_SIZE, SUMMARIZE_CHUNK_CONCURRENCY
- Function summarizeChunkWithRetry handles individual chunk processing with error handling
- Uses XML parsing for LLM output validation
- Integrates with eval/quality scoring system

## Concepts
- LLM summarization
- chunking strategy
- retry logic
- concurrent processing
- memory compression
- session management
- error handling
- XML parsing

## Files
- `/Volumes/AI/agentmemory/src/functions/summarize.ts`

_Importance: 7 · Confidence: 1_
