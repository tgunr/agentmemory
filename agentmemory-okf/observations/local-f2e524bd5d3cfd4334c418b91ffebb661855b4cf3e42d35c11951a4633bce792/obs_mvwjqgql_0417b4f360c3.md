---
type: Observation
title: Terminal tool error
description: Foreground command uses '&' backgrounding
resource: agentmemory://observation/obs_mvwjqgql_0417b4f360c3
tags: ["backgrounding", "observation"]
timestamp: 2026-10-31T15:18:47.610456+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 4
confidence: 0.9
---
# Summary

The terminal tool encountered an error due to backgrounding using the '&' symbol. The error message suggests resending the command without '&' and adding notify_on_complete=true for bounded jobs.

## Facts
- Tool: terminal
- Command: ls -la ~/sources 2>&1 | head -3; echo \"=== mount? ===\"; mount | grep -iE \"alpha|sources\" ; echo \"=== readdir with timeout ===\"; ( ls ~/sources/hermes-knowledge/skills 2>&1 | head -5 ) & sleep 5; kill %1 2>/dev/null && echo \"READDIR STILL RUNNING AFTER 5s (hang)\ "

## Concepts
- backgrounding

_Importance: 4 · Confidence: 0.9_
