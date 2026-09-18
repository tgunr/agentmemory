---
type: Observation
title: Install python-telegram-bot into local APFS userbase
description: Noise from pip update warning
resource: agentmemory://observation/obs_mst1fgkf_bde81247fefb
tags: ["Python pip installation", "APFS user permissions", "observation"]
timestamp: 2026-08-14T14:23:55.545709+00:00
source: agentmemory
session_id: 20260814_090139_699ae9
importance: 7
confidence: 0.9
---
# Summary

The tool executed successfully, but encountered errors during installation. Specifically, installing python-telegram-bot for Telegram Bot API failed due to permission issues on a specific directory.

## Facts
- PYTHONUSERBASE set to /Users/davec/.local to install.
- /Volumes/AI/Servers/MCP/mcp-ollama-router/src permission denied error during installation.

## Concepts
- Python pip installation
- APFS user permissions

## Files
- `/tmp/pipcache`

_Importance: 7 · Confidence: 0.9_
