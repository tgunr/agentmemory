---
type: file_edit
title: EmbeddingProvider tests failed
description: 
resource: agentmemory://observation/obs_mshiuume_e1ab69d590f9
tags: ["Caching results in PineScript", "Custom models for AI integration", "file_edit"]
timestamp: 2026-08-06T12:58:32.963107+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 8
confidence: 0.9
---
# Summary

The tests for Embedded Provider failed because neither an Open AI API key nor a Gemini API key were set as required.

## Facts
- PineScript version: v0.9.16
- API key test fails due to missing GEMINI or OPENAI_API_KEY environment variable

## Concepts
- Caching results in PineScript
- Custom models for AI integration

## Files
- `/Volumes/AI/agentmemory/vitest/output/embedding-provider.test.ts`

_Importance: 8 · Confidence: 0.9_
