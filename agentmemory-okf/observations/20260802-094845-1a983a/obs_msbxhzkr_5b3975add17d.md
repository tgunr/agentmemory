---
type: Observation
title: Starting llama-server processes
description: nohup wrapper for background execution
resource: agentmemory://observation/obs_msbxhzkr_5b3975add17d
tags: ["observation"]
timestamp: 2026-08-02T15:01:50.037262+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 8
confidence: 0.75
---
# Summary

Starting multiple llama-server processes using nohup wrapper and checking for listening PIDs. However, the command has issues due to foreground usage causing incorrect process tracking by Hermes.

## Facts
- Executing two instances of hmm-server using the nohup wrapper and aliasing to specific port aliases (8082, 8083, 8084)
- The process uses shell-level background wrappers (nohup/disown/setsid) which would not work as expected with Hermes.

## Files
- `/opt/homebrew/bin/llama-server`
- `/Users/davec/.cache/llama/qwen3-coder-18b.gguf`
- `/tmp/llamacpp-coder.out.log`
- `/tmp/llamacpp-devstral.out.log`
- `/tmp/llamacpp-qwen3.out.log`

_Importance: 8 · Confidence: 0.75_
