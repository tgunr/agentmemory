---
type: file_edit
title: npm test fails with OpenAI embedding model issue
description: Noise in API timeouts and viewer session issue
resource: agentmemory://observation/obs_mruhtcpb_5c829c851c49
tags: ["OpenAI embeddings", "API timeouts", "file_edit"]
timestamp: 2026-07-21T10:10:41.419318+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 8
confidence: 0.9
---
# Summary

NPM test failed due to issues with the OpenAI embedding model. The error indicates that the timeout was not correctly set and the viewer session is being rendered incorrectly.

## Facts
- Command to execute: `cd /Volumes/AI/agentmemory && npm test 2>&1 | tail -80`
- Environment variables: `OPENAI_EMBEDDING_MODEL = "text-embedding-ada-002"`

## Concepts
- OpenAI embeddings
- API timeouts

## Files
- `/Volumes/AI/agentmemory/test/embedding-provider.test.ts`
- `/Volumes/AI/agentmemory/fetch-timeout.test.ts`
- `/Volumes/AI/agentmemory/viewer-session-id.test.ts`

_Importance: 8 · Confidence: 0.9_
