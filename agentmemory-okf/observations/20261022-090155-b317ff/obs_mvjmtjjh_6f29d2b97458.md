---
type: file_edit
title: Install webui tools
description: Install markdown-it-py
resource: agentmemory://observation/obs_mvjmtjjh_6f29d2b97458
tags: ["Python package management", "Launch agents", "Watchdog process", "file_edit"]
timestamp: 2026-10-22T14:24:09.740207+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 8
confidence: 0.9
---
# Summary

The tool installed webui tools in the correct environment. It checked the version of markdown-it-py and confirmed it is at version 4.2.0. It created a watchdog launch agent for the webui process and checked its state to confirm it is running under user 501.

## Facts
- Python version is 3.9
- Job is running under user 501

## Concepts
- Python package management
- Launch agents
- Watchdog process

## Files
- `/Users/davec/.venv-webui314/bin/python3`
- `/Users/davec/.hermes/scripts/webui-watchdog.sh`
- `/Users/davec/.hermes/logs/webui-watchdog-stderr.log`
- `/Users/davec/.hermes/logs/webui-watchdog-stdout.log`
- `/Users/davec/Library/LaunchAgents/ai.hermes.webui.plist`
- `/Users/davec/Library/LaunchAgents/ai.hermes.webui-watchdog.plist`

_Importance: 8 · Confidence: 0.9_
