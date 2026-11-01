---
type: file_edit
title: Terminal terminal logs
description: routinely inspecting logs for errors
resource: agentmemory://observation/obs_mvwor49k_9969bfc8ac47
tags: ["alert logging", "file_edit"]
timestamp: 2026-10-31T17:39:16.181141+00:00
source: agentmemory
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
importance: 4
confidence: 0.9
---
# Summary

Inspection of gateway logs for unknown method errors, and other general log checks.

## Facts
- Running the command: "tail -c 200000 ~/.hermes/logs/gateway.log | grep -n \"unknown method\" | tail -20; echo ---; ls -la ~/.hermes/logs/ | head -20"

## Concepts
- alert logging

## Files
- `~/.hermes/logs/gateway.log`

_Importance: 4 · Confidence: 0.9_
