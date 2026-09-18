---
type: file_edit
title: AgentMemory Reorg / Restart Recovery Process
description: Error encountered during AM reorg/restart recovery
resource: agentmemory://observation/obs_mspcnfcx_7057de31afe2
tags: ["Reorg/Restart Recovery", "file_edit"]
timestamp: 2026-08-12T00:26:58.265927+00:00
source: agentmemory
session_id: 20260811_112343_dffd4c
importance: 8
confidence: 0.9
---
# Summary

During the agent memory reorg and restart recovery process using 'skill_manage', an error occurred. The issue was related to a description exceeding the character limit for skill indexes. The user's attempt to create a new file containing detailed error messages failed due to this limitation.

## Facts
- The tool 'skill_manage' attempted to create a file named 'agentmemory-reorg-recovery' in the contents directory.
- The description of the new skill exceeded 60 characters, causing a truncation issue with the router.

## Concepts
- Reorg/Restart Recovery

## Files
- `/Volumes/AI/agentmemory/iii-exec/spawned-workers`

_Importance: 8 · Confidence: 0.9_
