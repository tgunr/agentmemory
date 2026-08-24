---
type: FileRead
title: Memory compression function with vision model integration
description: Core compression logic for agent observations with image description support
resource: agentmemory://observation/obs_mroq5glk_2af76d7e8c54
tags: ["memory compression", "vision model integration", "XML validation", "retry logic", "BM25 search indexing", "image processing", "quality scoring", "fallback mechanisms", "fileread"]
timestamp: 2026-07-17T09:17:26.212233+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

This is the core compression function that transforms raw tool observations into structured, searchable memory entries. It includes vision model integration for image understanding with graceful degradation, XML-based output validation with retry mechanism, and dual storage in both KV store and search index for retrieval.

## Facts
- Handles image description via vision model with fallback to text-only compression on failure
- Supports multiple image formats: jpg/jpeg, webp, gif with automatic MIME type detection
- Reads images from managed store with path validation to prevent unauthorized access
- Uses XML-based compression output with validation and retry logic (1 retry)
- Stores compressed observations in KV store and BM25 search index
- Calculates quality score and confidence for compressed observations
- Preserves metadata: sessionId, timestamp, modality, agentId, imageRef

## Concepts
- memory compression
- vision model integration
- XML validation
- retry logic
- BM25 search indexing
- image processing
- quality scoring
- fallback mechanisms

## Files
- `/Volumes/AI/agentmemory/src/functions/compress.ts`

_Importance: 6 · Confidence: 1_
