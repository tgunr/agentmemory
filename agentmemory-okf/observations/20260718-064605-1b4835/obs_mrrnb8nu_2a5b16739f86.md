---
type: CommandRun
title: Verify Python import paths for gateway and bluebubbles in venv
description: Confirms editable install resolves to local source directory
resource: agentmemory://observation/obs_mrrnb8nu_2a5b16739f86
tags: ["Python module resolution", "Editable pip install", "Python virtual environment", "pth files and import finders", "commandrun"]
timestamp: 2026-07-19T10:21:15.542517+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Executed diagnostic commands to trace Python module resolution for the gateway and bluebubbles packages within the hermes-agent virtual environment. Confirmed that the environment uses an editable pip install (v0.16.0) via a custom .pth finder, correctly resolving imports directly to the local source directory.

## Facts
- gateway package loads from /Users/davec/.hermes/hermes-agent/gateway
- bluebubbles module loads from /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- hermes-agent v0.16.0 is installed as an editable package via a custom .pth finder
- Editable install configured via /Users/davec/.hermes/hermes-agent/venv/lib/python3.11/site-packages/__editable__.hermes_agent-0.16.0.pth

## Concepts
- Python module resolution
- Editable pip install
- Python virtual environment
- pth files and import finders

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`
- `/Users/davec/.hermes/hermes-agent/venv/lib/python3.11/site-packages/__editable__.hermes_agent-0.16.0.pth`

_Importance: 5 · Confidence: 1_
