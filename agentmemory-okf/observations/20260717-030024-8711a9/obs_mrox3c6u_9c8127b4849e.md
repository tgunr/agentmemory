---
type: CommandRun
title: Audit agent memory for observations with missing type/title
description: Diagnostic scan of state store for malformed observation records
resource: agentmemory://observation/obs_mrox3c6u_9c8127b4849e
tags: ["agent memory state store", "observation data validation", "binary file JSON parsing", "post_tool_call hook processing", "data integrity audit", "commandrun"]
timestamp: 2026-07-17T12:31:44.498639+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

A diagnostic Python script was executed to scan the agent memory state store for observation records with missing or empty type/title fields. Two observations from the same session were flagged as having None values for both type and title despite containing tool input data, indicating a potential gap in the observation compression pipeline where post_tool_call events are not being properly typed or titled.

## Facts
- Scanned binary observation files in /Users/davec/data/agentmemory/data/state_store.db
- Found 2 flagged observations: obs_mrox2uwj_0ad1f9170d07 and obs_mrox3572_148f2202ad9e
- Both observations from session 20260717_030024_8711a9 have type=None and title=None
- Both flagged observations have hookType=post_tool_call and contain tool_input data
- Observation files are stored as binary (.bin) with JSON content, null-byte separated
- Script filters for type in (None, "notification") or title in (None, "", "Empty or missing tool call event")

## Concepts
- agent memory state store
- observation data validation
- binary file JSON parsing
- post_tool_call hook processing
- data integrity audit

## Files
- `/Users/davec/data/agentmemory/data/state_store.db`

_Importance: 5 · Confidence: 1_
