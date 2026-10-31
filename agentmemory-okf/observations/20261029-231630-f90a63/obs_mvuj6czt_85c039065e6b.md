---
type: FileRead
title: terminal: ps command
description: No-line context
resource: agentmemory://observation/obs_mvuj6czt_85c039065e6b
tags: ["shell scripting", "ps command", "fileread"]
timestamp: 2026-10-30T05:27:37.285939+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 0.9
---
# Summary

Executed a terminal command that included multiple commands.

## Facts
- Command executed: ps -p 25023 -o pid=,args= | cut -c1-150; echo \“--- children\“; pgrep -P 25023 -fl . 2>/dev/null | head -3; echo \“--- pve hostname\“; ssh -o ConnectTimeout=10 davec@10.1.2.1 ‘hostname; uname -s; ~/.local/bin/hermes —version 2>&1 | tail -2’

## Concepts
- shell scripting
- ps command

## Files
- `/dev/null`

_Importance: 6 · Confidence: 0.9_
