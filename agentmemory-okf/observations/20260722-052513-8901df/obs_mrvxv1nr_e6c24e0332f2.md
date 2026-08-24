---
type: FileRead
title: okf_mirror.sh script read and execute
description: Mirrors the local AgentMemory service into the OKF bundle submodule.
resource: agentmemory://observation/obs_mrvxv1nr_e6c24e0332f2
tags: ["okf_bridge.py", "fileread"]
timestamp: 2026-07-22T10:27:40.452295+00:00
source: agentmemory
session_id: 20260722_052513_8901df
importance: 9
confidence: 0.9
---
# Summary

An agent uses a tool to read a script named okf_mirror.sh. The tool executes the script, mirroring changes to a submodule, transforming output, and committing updates.

## Facts
- Reads the secret from ~/.agentmemory/.env, exports via native /agentmemory/export endpoint, transforms with okf_bridge.py.

## Concepts
- okf_bridge.py

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/okf_mirror.sh`

_Importance: 9 · Confidence: 0.9_
