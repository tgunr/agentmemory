---
type: Observation
title: Swap LLCAMCPP Server
description: 
resource: agentmemory://observation/obs_msc09s7o_3d7378b1b9df
tags: ["observation"]
timestamp: 2026-08-02T16:19:26.095452+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 5
confidence: 0.75
---
# Summary

This shell script swaps the current llama.cpp server on port 8081 to a new one. It stops and kills any active instance, then updates the launchd plist to reboot with the new model.

## Facts
- Calls get_model_path() to determine GPU layers and context for the chosen model.
- -Wall flags included (-Wall)

## Files
- `/.Users/davec/.hermes/scripts/swap-llamacpp-model.sh`

_Importance: 5 · Confidence: 0.75_
