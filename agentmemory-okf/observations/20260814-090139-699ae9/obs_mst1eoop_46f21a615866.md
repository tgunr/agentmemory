---
type: file_edit
title: Pip installation failed in Hermes
description: Attempt to install python-telegram-bot using venv
resource: agentmemory://observation/obs_mst1eoop_46f21a615866
tags: ["file_edit"]
timestamp: 2026-08-14T14:23:19.413545+00:00
source: agentmemory
session_id: 20260814_090139_699ae9
importance: 4
confidence: 0.75
---
# Summary

The agent attempted to use hermes-agent with the VENV environment variable set, however, failed to install python-telegram-bot. The output of this function indicates that there was an issue with locating the Python execution.

## Facts
- VENV environment variable used correctly for pip.
- Couldnt find Python executable at $VENV/bin/pip

## Files
- `/Users/davec/.hermes/hermes-agent/.venv`

_Importance: 4 · Confidence: 0.75_
