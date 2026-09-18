---
type: file_edit
title: Gateway service restart failed with code 1
description: Error around command execution in Hermes gateway service
resource: agentmemory://observation/obs_mseol2vv_35b6846681fa
tags: ["Asyncio import issue", "MallocStackLogging settings", "file_edit"]
timestamp: 2026-08-04T13:15:36.279226+00:00
source: agentmemory
session_id: 209ee33e5682
importance: 6
confidence: 0.9
---
# Summary

On a recent restart of the Gateway service, log output revealed an error unrelated to service configuration changes.

## Facts
- Execution of command in Hermes gateway service resulted in an unhandled exception.
- The exception had a code 1 and included details about syntax errors in imports.

## Concepts
- Asyncio import issue
- MallocStackLogging settings

## Files
- `/Users/davec/.hermes/logs/webui.error.log`

_Importance: 6 · Confidence: 0.9_
