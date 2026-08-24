---
type: file_edit
title: Fixed ai profile DB
description: Renamed profiles and removed global DB inserts
resource: agentmemory://observation/obs_ms86k2al_c6d439d9c4e3
tags: ["file_edit"]
timestamp: 2026-07-31T00:04:18.705884+00:00
source: agentmemory
session_id: a9f0b22bda1a
importance: 7
confidence: 0.75
---
# Summary

The terminal was used to rename profiles in the ai profile DB and remove erroneous global-DB inserts.

## Facts
- Executed {num} rename operations for AI/OIllama, AI/Hermes, AI/EXO and AI/MCP to respective project slugs.
- Fetched 6 rows from deleted project folders and 0 rows from deleted projects.

## Files
- `/home/!.hermes/profiles(ai)/projects.db`

_Importance: 7 · Confidence: 0.75_
