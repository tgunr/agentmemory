---
type: FileRead
title: Read compress-synthetic.ts showing buildSyntheticCompression function
description: Displays TypeScript function that compresses raw observations into structured format
resource: agentmemory://observation/obs_mroqajeg_0a0690d7d2a2
tags: ["TypeScript compression function", "observation serialization", "memory compression system", "fileread"]
timestamp: 2026-07-17T09:21:23.125112+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

The read_file operation displayed a TypeScript compression function that transforms raw observations into a structured compressed format. This function is part of an observation memory system, handling text narrative construction and optional field management for compressed observations.

## Facts
- File has 106 total lines and 3406 bytes
- buildSyntheticCompression creates CompressedObservation with fields: id, sessionId, timestamp, type, title, subtitle, facts, narrative, concepts, files, importance (default 5), confidence (default 0.3)
- Narrative is built by joining promptStr, inputStr, and outputStr with " | " separator and truncating to 400 chars
- Optional fields modality, imageData, and agentId are conditionally added to result
- Type inference uses inferType(toolName, raw.hookType) helper

## Concepts
- TypeScript compression function
- observation serialization
- memory compression system

## Files
- `/Volumes/AI/agentmemory/src/functions/compress-synthetic.ts`

_Importance: 4 · Confidence: 1_
