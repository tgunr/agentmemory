---
type: FileRead
title: Acknowledging invalid tool call for skill_manage agentmemory.
description: No data could be loaded due to unrecognized action.
resource: agentmemory://observation/obs_msay8068_84f9ac403d1b
tags: ["validation error in agent", "fileread"]
timestamp: 2026-08-01T22:34:17.690056+00:00
source: agentmemory
session_id: 20260801_172632_e506c8
importance: 4
confidence: 0.9
---
# Summary

The call to skill_manage with agentmemory failed due to an invalid action being specified.

## Facts
- Tool name: skill_manage, Invalid action: load, Required actions: create, edit, patch, delete, write_file, remove_file
- Error message: Unknown action 'load'. Use: create, edit, patch, delete, write_file, remove_file

## Concepts
- validation error in agent

_Importance: 4 · Confidence: 0.9_
