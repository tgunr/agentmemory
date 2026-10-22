---
type: file_edit
title: Running hermes agent
description: Checking agent status and getting one-shot CLI options
resource: agentmemory://observation/obs_mvhv505n_ad4c41dc36a1
tags: ["hermes agent", "file_edit"]
timestamp: 2026-10-21T08:41:29.090596+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 6
confidence: 0.9
---
# Summary

Checked the status of a hermes agent and retrieved one-shot CLI options.

## Facts
- Running hermes agent
- Using command: cd ~; H=~/.hermes/hermes-agent/.hermes/bin/hermes; $H status 2>&1 | grep -i -E 'model|provider|gateway'; echo \"=== one-shot CLI options ===\"; $H --help 2>&1 | grep -i -E '^\\s+(run|ask|-p|exec|chat|prompt)' | head

## Concepts
- hermes agent

## Files
- `/Users/davec`
- `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4`

_Importance: 6 · Confidence: 0.9_
