---
type: FileRead
title: Rebuilding the Hermes app on a remote host
description: No update gate to avoid hangs
resource: agentmemory://observation/obs_mvuinqjx_278024dd96df
tags: ["hermes update gate", "fileread"]
timestamp: 2026-10-30T05:13:08.394085+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 4
confidence: 0.9
---
# Summary

The skill_manage tool patched hermes-desktop with a successful update. This rebuilds the venv/deps and relaunches the app with a new pid. This ensures the app auto-runs hermes update.

## Facts
- Tool: skill_manage
- Command: patch hermes-desktop

## Concepts
- hermes update gate

_Importance: 4 · Confidence: 0.9_
