---
type: FileRead
title: Read test file for livez and config/flags API endpoints
description: Vitest tests for liveness and embedding configuration endpoints
resource: agentmemory://observation/obs_mror2bk5_5ba57b97c8b7
tags: ["Vitest testing framework", "API endpoint testing", "Liveness probes", "Vector index", "Embedding provider configuration", "Mock SDK/KV store", "Environment variable stubbing", "fileread"]
timestamp: 2026-07-17T09:42:59.329461+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

Read the test file for the livez and config/flags API endpoints. The file contains 4 test cases covering liveness health checks with vector index size reporting and embedding configuration flag status based on environment variables. Tests use mock SDK/KV store and verify both enabled and disabled embedding provider states.

## Facts
- File is 67 lines, 2789 bytes at /Volumes/AI/agentmemory/test/api-livez-flags.test.ts
- Uses Vitest framework with mockSdk and mockKV helpers
- Tests api::liveness trigger returns status_code 200 with body.status="ok" and body.vector.size
- Tests api::config-flags trigger returns embeddingProvider and embeddingEnabled fields
- VectorIndex class used to test non-zero vector sizes (adds 3 vectors, expects size: 3)
- Tests verify embeddingEnabled=false when EMBEDDING_PROVIDER="" and all API keys empty
- Tests verify embeddingEnabled=true when EMBEDDING_PROVIDER="local", reports provider as "embeddings"
- Uses vi.stubEnv() for environment variable mocking and vi.unstubAllEnvs() in afterEach
- Imports setVectorIndex and setEmbeddingProvider from ../src/functions/search.js

## Concepts
- Vitest testing framework
- API endpoint testing
- Liveness probes
- Vector index
- Embedding provider configuration
- Mock SDK/KV store
- Environment variable stubbing

## Files
- `/Volumes/AI/agentmemory/test/api-livez-flags.test.ts`

_Importance: 3 · Confidence: 1_
