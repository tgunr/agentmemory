---
type: FileRead
title: Reviewed zero-LLM synthetic observation compression
description: Heuristic compression is the default path as of version 0.8.8
resource: agentmemory://observation/obs_mroq4e5j_aec90c8f9e56
tags: ["heuristic compression", "tool type inference", "observation normalization", "metadata preservation", "zero-LLM processing", "fileread"]
timestamp: 2026-07-17T09:16:36.388615+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

The file implements a deterministic, zero-token compression path using string normalization, keyword classification, truncation, and input-path extraction. It provides inexpensive default summaries while preserving selected multimodal and agent metadata.

## Facts
- buildSyntheticCompression converts RawObservation to CompressedObservation without an LLM, assigning inferred type, truncated title/subtitle/narrative, extracted files, importance 5, and confidence 0.3.
- inferType maps hook types and normalized tool-name keywords to error, conversation, subagent, notification, web_fetch, search, command_run, file_edit, file_write, file_read, or other.
- Files are extracted from file_path, filepath, path, filePath, file, and pattern input fields when values are non-empty strings shorter than 512 characters.
- Narratives combine the user prompt, serialized tool input, and serialized output, then truncate the result to 400 characters.
- Optional modality, imageData, and agentId fields are preserved; richer LLM compression is enabled with AGENTMEMORY_AUTO_COMPRESS=true.

## Concepts
- heuristic compression
- tool type inference
- observation normalization
- metadata preservation
- zero-LLM processing

## Files
- `/Volumes/AI/agentmemory/src/functions/compress-synthetic.ts`

_Importance: 3 · Confidence: 1_
