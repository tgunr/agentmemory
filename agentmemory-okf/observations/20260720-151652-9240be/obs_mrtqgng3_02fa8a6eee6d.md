---
type: FileRead
title: Register Actions Function
description: Registers an action function with the system, including parameters and edges.
resource: agentmemory://observation/obs_mrtqgng3_02fa8a6eee6d
tags: ["fileread"]
timestamp: 2026-07-20T21:24:59.150849+00:00
source: agentmemory
session_id: 20260720_151652_9240be
importance: 7
confidence: 0.85
---
# Summary

The registerActionsFunction was called to create or update an action function. The action's properties are set, as well as its status based on the edges present.

## Facts
- "registerActionsFunction" is a registered function in "mem::action-create", "mem::action-update"
- The function takes an object with title, description, priority, createdBy, project, tags, parentId, sourceObservationIds, and sourceMemoryIds
- An action is created with a unique ID, including properties createdAt, updatedAt, createdBy, project, tags, sourceObservationIds, and sourceMemoryIds

_Importance: 7 · Confidence: 0.85_
