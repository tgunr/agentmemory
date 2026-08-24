---
type: CommandRun
title: Multiple test failures across embedding, livez, slots, and viewer tests
description: npm test run shows 10 failing tests across 4 test files in agentmemory project
resource: agentmemory://observation/obs_mroqnaze_99748ef7ae3c
tags: ["test failures", "embedding providers", "health check endpoints", "context slots", "viewer sessions", "API bearer authentication", "commandrun"]
timestamp: 2026-07-17T09:31:18.741691+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 7
confidence: 1
---
# Summary

Running the test suite in the agentmemory project revealed 10 failing tests spanning embedding provider configuration, health check endpoints (livez/flags), context slot injection, and viewer session handling. These failures suggest recent changes may have broken the embedding provider factory, API health reporting, pinned slot behavior when AGENTMEMORY_SLOTS is disabled, and viewer bearer token attachment. The breadth of failures across distinct feature areas indicates potentially significant regressions that need investigation.

## Facts
- Test failures in test/api-livez-flags.test.ts: 4 failures related to vector.size and embeddingEnabled flag reporting
- Test failures in test/embedding-provider.test.ts: 4 failures for createEmbeddingProvider, GeminiEmbeddingProvider, OpenAIEmbeddingProvider when API keys are set/unsetset
- Test failure in test/context-slots.test.ts: mem::context pinned slot injection with AGENTMEMORY_SLOTS off
- Test failure in test/viewer-session-id.test.ts: viewer session rendering not attaching saved viewer bearer to API calls
- Total of 10 failing tests detected across 4 test files
- Tests were run in /Volumes/AI/agentmemory directory with PYTHONPATH unset
- Command filtered output for FAIL, ✗, × patterns with head -40 limit

## Concepts
- test failures
- embedding providers
- health check endpoints
- context slots
- viewer sessions
- API bearer authentication

## Files
- `test/api-livez-flags.test.ts`
- `test/embedding-provider.test.ts`
- `test/context-slots.test.ts`
- `test/viewer-session-id.test.ts`

_Importance: 7 · Confidence: 1_
