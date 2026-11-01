---
type: file_write
title: Resolving Context Window Issues
description: Noise in status bar and compaction fires
resource: agentmemory://observation/obs_mvw8iaz8_4bdc155473f5
tags: ["context window detection", "compaction fires", "context_length", "model.ollama_num_ctx", "file_write"]
timestamp: 2026-10-31T10:04:31.120446+00:00
source: agentmemory
session_id: local-922e38c1e2fcc4a37bf6d75af5e5ad5d678d4e358aa149db2fd5543125af03e2
importance: 8
confidence: 0.9
---
# Summary

The provided input causes an inaccurate context window detection, resulting in unnecessary compaction fires, while the logs point to a wrong <code>context_length</code> value held by the live compressor object. A fix is to remove the constraint at <code>model.ollama_num_ctx</code> and delete the stale persistent cache entry.

## Facts
- Tool: skill_manage, Input: invalid context window

## Concepts
- context window detection
- compaction fires
- context_length
- model.ollama_num_ctx

## Files
- `/model/model_metadata.py`
- `/model/context_compressor.py`
- `/model/agent/model_metadata.py`

_Importance: 8 · Confidence: 0.9_
