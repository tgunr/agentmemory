---
type: CommandRun
title: Cua-driver and Hermes configuration issue
description: 
resource: agentmemory://observation/obs_msr69anj_03e6b69154c7
tags: ["ssh_host", "ssh_user", "cua-driver", "mcp_router", "terminal.ssh.host/user", "commandrun"]
timestamp: 2026-08-13T07:03:33.675006+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 4
confidence: 1
---
# Summary

The post_tool_call hook for tool memory failed with an error, citing issues with cua-driver and Hermes configuration. The new text provided suggests trying alternative configurations to resolve the issue.

## Facts
- New text:
- min (davec): cua-driver CAN click but type_text into PTYs fails (0/garbled chars) — don't drive shells via GUI. Native SSH backend + execute_code terminal() both fail ('SSH environment requires ssh_host and ssh_user') because they cache ssh settings at worker-process start.
- Old text:
- mini (davec): cua-driver CAN click but type_text into PTYs fails (0/garbled chars) — don't drive shells via GUI. Native SSH backend caches ssh_host/user at process start: `hermes config set terminal.ssh.host/user` needs a Hermes restart to take effect (else 'SSH environment requires ssh_host and ssh_user'). `read_terminal` mirrors the user's own iTerm — not a shell I control. Alt: mcp__mcp_router__start_process.

## Concepts
- ssh_host
- ssh_user
- cua-driver
- mcp_router
- terminal.ssh.host/user

## Files
- `${HOME}/.hermes/logs/gateway.log`
- `${ HOME}/.local/bin/hermes`

_Importance: 4 · Confidence: 1_
