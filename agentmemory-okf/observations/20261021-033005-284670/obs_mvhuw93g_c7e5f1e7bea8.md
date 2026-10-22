---
type: FileRead
title: TurboQuant model switching for Hermes
description: Switch Hermes to/from local TurboQuant models on :8000.
resource: agentmemory://observation/obs_mvhuw93g_c7e5f1e7bea8
tags: ["local-llm-hermes-serving", "fileread"]
timestamp: 2026-10-21T08:34:40.769241+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 8
confidence: 0.9
---
# Summary

The tool skill_view was used to switch Hermes to/from local TurboQuant models on :8000. We need to follow the steps to switch between models carefully, as this involves editing the global config file.

## Facts
- Tear down any existing TurboQuant serve (unloads the marker-file LaunchAgent).
- Write the chosen model's marker file so `com.turboquant.serve` brings up that model on `:8000`.

## Concepts
- local-llm-hermes-serving

## Files
- `/Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh`

_Importance: 8 · Confidence: 0.9_
