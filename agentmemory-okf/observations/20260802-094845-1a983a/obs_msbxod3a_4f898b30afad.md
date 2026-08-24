---
type: CommandRun
title: Swap LLamaserver model
description: Switch between available models in a running server
resource: agentmemory://observation/obs_msbxod3a_4f898b30afad
tags: ["LLM model swapping", "commandrun"]
timestamp: 2026-08-02T15:06:47.491012+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 5
confidence: 0.9
---
# Summary

The tool write_file is used to run the shell script swap-llamacpp-model.sh.

## Facts
- Script swap-llamacpp-model.sh sets the path for the new model
- The script uses LLMs by the path ${MODEL_MAP[@]}

## Concepts
- LLM model swapping

## Files
- `/Users/davec/.hermes/scripts/swap-llamacpp-model.sh`

_Importance: 5 · Confidence: 0.9_
