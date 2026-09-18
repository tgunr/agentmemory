---
type: file_edit
title: Gateway environment check
description: Verifying TERMINAL_CWD in gateway and desktop app
resource: agentmemory://observation/obs_mssuk4iu_b365a55d3440
tags: ["terminal_cwd handling", "file_edit"]
timestamp: 2026-08-14T11:11:35.906867+00:00
source: agentmemory
session_id: 20260814_055249_05a0a4
importance: 5
confidence: 0.9
---
# Summary

The code emits the current TERMINAL_CWD when starting the application and asks the parent chain to pass it back down. It then checks this value in the system's snap

## Facts
- A shell is launched to get a value for TERMINAL_CWD.
- The environment variables of the gateway process are checked for TERMINAL_CWD using proc snapshots on darwin.

## Concepts
- terminal_cwd handling

_Importance: 5 · Confidence: 0.9_
