---
type: FileRead
title: Invalid Hermes profile execution
description: Ls command on non-existent profile
resource: agentmemory://observation/obs_muzlufkf_fdb96c40b576
tags: ["file not found", "profile execution", "fileread"]
timestamp: 2026-10-08T14:01:28.140398+00:00
source: agentmemory
session_id: cron_b99b9d2f2fcd_20261008_090030
importance: 5
confidence: 0.9
---
# Summary

The user attempted to execute the 'ls -la' command on a non-existent profile at /Users/davec/.hermes/profiles/. This resulted in an error and a recommendation to execute the file via its interpreter.

## Facts
- Tool used: terminal
- Command executed: ls -la /Users/davec/.hermes/profiles/

## Concepts
- file not found
- profile execution

_Importance: 5 · Confidence: 0.9_
