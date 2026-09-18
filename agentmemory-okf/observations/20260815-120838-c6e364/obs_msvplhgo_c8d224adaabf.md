---
type: file_edit
title: Run command to list and download Huggingface hub snapshot for Qwen3.8-27B
description: No cache, no output files found, insufficient disk space warnings, task error with file reconstruction error.
resource: agentmemory://observation/obs_msvplhgo_c8d224adaabf
tags: ["cache management", "file reconstruction", "disk space utilization", "file_edit"]
timestamp: 2026-08-16T11:15:59.772110+00:00
source: agentmemory
session_id: 20260815_120838_c6e364
importance: 7
confidence: 1
---
# Summary

The command to list and download the Huggingface hub snapshot for Qwen3.8-27B resulted in insufficient disk space warnings, a task error with file reconstruction error, and no output files found.

## Facts
- Qwen3.8-27b-tq4 directory does not exist
- /Users/davec/.cache/huggingface/hub/models--Qwen--Qwen3.8-27B/blobs only has 222.16 MB free disk space
- /Users/davec/MCP_Local/turboquant-mlx-work/qwen3.8-27b-tq4: No such file or directory
- SNAP ERR RuntimeError Task error: File reconstruction error: Internal Writer Error: Background writer channel closed

## Concepts
- cache management
- file reconstruction
- disk space utilization

## Files
- `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3.8-27b-tq4`
- `/Users/davec/.cache/huggingface/hub/models--Qwen--Qwen3.8-27B/blobs`

_Importance: 7 · Confidence: 1_
