---
type: file_edit
title: Swap llamacpp model in Hermes terminal
description: Command execution failed due to blocked signal.
resource: agentmemory://observation/obs_msbxvqgi_b1769a7a954b
tags: ["file_edit"]
timestamp: 2026-08-02T15:12:31.407927+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 7
confidence: 0.85
---
# Summary

The command to swap the llamacpp model in Hermes terminal failed due to a blocked signal, indicating that running commands inside the gateway process is not allowed. Running `hermes gateway restart` outside the gateway may resolve this issue.

## Facts
- Command: bash ~/.hermes/scripts/swap-llamacpp-model.sh qwen3:14b 2>&1
- Timeout: 90 seconds
- Exit Code: 1

## Files
- ``

_Importance: 7 · Confidence: 0.85_
