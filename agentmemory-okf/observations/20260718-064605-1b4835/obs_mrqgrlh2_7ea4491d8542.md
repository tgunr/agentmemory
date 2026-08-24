---
type: CommandRun
title: Diagnose process tree and webhook listener on port 8645
description: Verifying hermes-agent process hierarchy and single webhook listener
resource: agentmemory://observation/obs_mrqgrlh2_7ea4491d8542
tags: ["process tree inspection", "MCP stdio watchdog", "webhook listener", "hermes-agent architecture", "port binding verification", "commandrun"]
timestamp: 2026-07-18T14:30:15.152258+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Ran diagnostic commands to inspect process tree under PID 65055 and confirm webhook listener state. PID 66440 has exited. Two watchdog child processes are active under the main Python process (65055), managing an MCP router CLI connection and an agentmemory wrapper script. A single Python process is confirmed listening on port 8645 for webhooks.

## Facts
- PID 66440 no longer exists (no output from ps)
- PID 65055 is a Python process listening on TCP 127.0.0.1:8645 (single webhook listener confirmed)
- Child PID 65172: mcp_stdio_watchdog.py running npx @mcp_router/cli@latest connect
- Child PID 65177: mcp_stdio_watchdog.py running /Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh
- Watchdog processes located at /Users/davec/.hermes/hermes-agent/tools/mcp_stdio_watchdog.py
- Python venv at /Users/davec/.hermes/hermes-agent/venv/bin/python

## Concepts
- process tree inspection
- MCP stdio watchdog
- webhook listener
- hermes-agent architecture
- port binding verification

## Files
- `/Users/davec/.hermes/hermes-agent/tools/mcp_stdio_watchdog.py`
- `/Users/davec/.hermes/hermes-agent/venv/bin/python`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`

_Importance: 5 · Confidence: 1_
