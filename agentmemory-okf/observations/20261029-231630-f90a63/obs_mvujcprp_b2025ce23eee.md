---
type: file_edit
title: Run Hermès Gateway via SSH
description: Launched gateway, checked its status
resource: agentmemory://observation/obs_mvujcprp_b2025ce23eee
tags: ["launchctl", "SSH", "hermes_cli", "file_edit"]
timestamp: 2026-10-30T05:32:33.777453+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 7
confidence: 1
---
# Summary

The gateway is launched via SSH, and its status is checked. The process ID of hermes_cli.main is obtained, as well as the last logged messages in the gateway.log file.

## Facts
- Tail output of launchctl kickstart command
- Process ID of hermes_cli.main
- Last logged messages in gateway.log

## Concepts
- launchctl
- SSH
- hermes_cli

## Files
- `/Users/davec/.hermes/kanban_dispatcher_lock`
- `/Users/davec/.hermes/kanban_lock_file`
- `/Users/davec/.hermes/launchd`
- `/Users/davec/.hermes/logs/gateway.log`
- `/var/folders/dd/38tqvym6x8vd8n2t4/8j/5t/h5t2/0/5/T50000/T50000`

_Importance: 7 · Confidence: 1_
