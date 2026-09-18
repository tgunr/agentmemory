---
type: CommandRun
title: Verify modules installed in plist venv and log crash traceback
description: 
resource: agentmemory://observation/obs_msfze8yc_d2362be84b64
tags: ["MCP server", "commandrun"]
timestamp: 2026-08-05T11:05:59.496508+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 4
confidence: 0.9
---
# Summary

The tool executed successfully, but it found a crashed MCP server with an error in the logs. The output includes the last few lines of the log and the overall exit code was 0.

## Facts
- MCP server 'agentmemory' is down with a cancelled error
- The actual crash traceback contains multiple exit pids with threads

## Concepts
- MCP server

## Files
- `/Users/davec/.venv/bin/python3`
- `/Users/davec/hermes-webui/server.py`
- `/Users/davec/.hermes/logs/webui.error.log`

_Importance: 4 · Confidence: 0.9_
