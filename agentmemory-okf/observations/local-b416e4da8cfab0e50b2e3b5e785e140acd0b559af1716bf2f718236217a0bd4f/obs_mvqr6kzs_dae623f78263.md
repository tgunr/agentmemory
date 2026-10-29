---
type: file_edit
title: Failed to load GPU price monitor script
description: No such file or directory for script directory
resource: agentmemory://observation/obs_mvqr6kzs_dae623f78263
tags: ["Non-existent directory", "file_edit"]
timestamp: 2026-10-27T14:00:39.877738+00:00
source: agentmemory
session_id: local-b416e4da8cfab0e50b2e3b5e785e140acd0b559af1716bf2f718236217a0bd4f
importance: 4
confidence: 0.9
---
# Summary

The GPU price monitor script was attempted to be executed, but the execution was unsuccessful due to a permission error. The script attempted to change directory to a non-existent path.

## Facts
- Script file path: ~/.hermes profiles/ollama/scripts/gpu_price_monitor.sh
- Current working directory: /Users/davec/.joe

## Concepts
- Non-existent directory

## Files
- `~/.hermes/profiles/ollama/scripts/gpu_price_monitor.sh`

_Importance: 4 · Confidence: 0.9_
