---
type: file_edit
title: Swap LlamaCpp Model Script
description: 
resource: agentmemory://observation/obs_msc0a3vo_323a7f6ce85d
tags: ["GPU memory allocation", "file_edit"]
timestamp: 2026-08-02T16:19:41.217816+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 6
confidence: 0.85
---
# Summary

The script was edited with updated disk guidance.

## Facts
- Unified memory limited to 32GB for Mac M4.
- Note: models >8GB use reduced GPU layers and 40K context to avoid OOM.

## Concepts
- GPU memory allocation

## Files
- `/Users/davec/.hermes/scripts/swap-llamacpp-model.sh`

_Importance: 6 · Confidence: 0.85_
