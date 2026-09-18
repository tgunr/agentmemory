---
type: CommandRun
title: mcp-script errors parsing
description: naming server check and grep issue
resource: agentmemory://observation/obs_msrcd3k5_8c5fe6eff19d
tags: ["JSONRPCMessage invalid JSON validation", "naming server issues", "grep server names near banner", "commandrun"]
timestamp: 2026-08-13T09:54:28.798720+00:00
source: agentmemory
session_id: 20260813_045112_d207dc
importance: 7
confidence: 0.9
---
# Summary

The agent encountered an error while executing a script in /Users/davec/.hermes; specifically, parsing was failing with a naming server check issue due to extraneous text being parsed as input.

## Facts
- Heremes logs directory: /Users/davec/.hermes/logs

## Concepts
- JSONRPCMessage invalid JSON validation
- naming server issues
- grep server names near banner

## Files
- `/Users/davec/.hermes/logs/mcp-stderr.log`
- `/Users/davec/.hermes/logs/agent.log`

_Importance: 7 · Confidence: 0.9_
