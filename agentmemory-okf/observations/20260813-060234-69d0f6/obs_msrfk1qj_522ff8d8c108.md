---
type: Observation
title: Try mcp==1.6.0 with mcp-server-git
description: Echo a message and try to run the command.
resource: agentmemory://observation/obs_msrfk1qj_522ff8d8c108
tags: ["observation"]
timestamp: 2026-08-13T11:23:51.596705+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 7
confidence: 0.75
---
# Summary

The user tried to run a command using mcp-server-git, followed by an echo statement and then another command. The output indicates that the import went wrong after trying different versions of the tool. The error is about importing the ToolAnnotations class from the 'mcp.types' module.

## Facts
- User ran command cd /Users/davec\necho "=== try mcp==1.6.0 with mcp-server-git ===\"\ntimeout 70 uvx --with \'mcp==1.6.0\' mcp-server-git 2>&1 | tail -6\n"
        <fact>User ran timeout command.

## Files
- `/Users/davec/.cache/uv/archive-v0/ZK9vHZf-4UBUX9LN/lib/python3.12/site-packages/mcp_server_git/__init__.py`

_Importance: 7 · Confidence: 0.75_
