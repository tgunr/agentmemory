---
type: Observation
title: Full hermes launcher head
description: No Hermes bootstrap directory found
resource: agentmemory://observation/obs_mvjnf0uy_c106605c770f
tags: ["hermes-agent", "Python", "observation"]
timestamp: 2026-10-22T14:40:51.987460+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 8
confidence: 0.9
---
# Summary

The script ran successful, outputting the Python code for the Hermes launcher and some system calls.

## Facts
- Tool: terminal
- Input: ls /Users/davec/.hermes/hermes-agent/hermes_bootstrap* 2>/dev/null; ls -d /Users/davec/.hermes/hermes-agent/hermes_bootstrap 2>/dev/null || echo "no hermes_bootstrap dir"; echo "=== full hermes launcher head ==="; head -c 1200 /Users/davec/.hermes/hermes-agent/.hermes/bin/hermes

## Concepts
- hermes-agent
- Python

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_bootstrap.py`

_Importance: 8 · Confidence: 0.9_
