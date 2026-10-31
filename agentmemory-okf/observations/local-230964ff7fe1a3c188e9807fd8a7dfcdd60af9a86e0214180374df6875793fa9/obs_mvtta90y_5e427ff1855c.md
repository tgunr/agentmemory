---
type: file_edit
title: Restart Hermes gateway when blocked by the lifecycle guard.
description: The tool is the Hermes gateway control.
resource: agentmemory://observation/obs_mvtta90y_5e427ff1855c
tags: ["Restart Hermes gateway", "Lifecycle guard", "TERMINAL_CWD", "launchctl", "file_edit"]
timestamp: 2026-10-29T17:22:48.750382+00:00
source: agentmemory
session_id: local-230964ff7fe1a3c188e9807fd8a7dfcdd60af9a86e0214180374df6875793fa9
importance: 7
confidence: 0.9
---
# Summary

The tool provides a command to restart the Hermes gateway when blocked by the lifecycle guard. This is necessary to fix a cwd leak that lives in the launchd domain.

## Facts
- The Hermes terminal cwd keeps landing in /Volumes/davec

## Concepts
- Restart Hermes gateway
- Lifecycle guard
- TERMINAL_CWD
- launchctl

## Files
- `/~/Library/LaunchAgents/ai.hermes.gateway.plist`
- `/Volumes/davec`

_Importance: 7 · Confidence: 0.9_
