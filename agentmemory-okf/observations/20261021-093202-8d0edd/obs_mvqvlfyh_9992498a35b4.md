---
type: CommandRun
title: Ollama service fix
description: Crash-looping issue resolved with ACLs
resource: agentmemory://observation/obs_mvqvlfyh_9992498a35b4
tags: ["A CLIs uses the same store via ~/.ollama symlink", "commandrun"]
timestamp: 2026-10-27T16:04:11.652248+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

Ollama service was crash-looping due to permission issues. Targeted ACLs were added to resolve the issue.

## Facts
- NRestarts ≈ 1,596,576
- /usr/share/ollama is a symlink to /beta/ai/ollama

## Concepts
- A CLIs uses the same store via ~/.ollama symlink

## Files
- `/Users/davec/.hermes/profiles/systems/workspace/pveroot/AGENTS.md`

_Importance: 7 · Confidence: 0.9_
