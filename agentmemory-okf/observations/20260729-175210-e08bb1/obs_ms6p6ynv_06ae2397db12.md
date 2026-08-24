---
type: file_edit
title: Durable id for pinning
description: Merge a fresh server session page into the in-memory list
resource: agentmemory://observation/obs_ms6p6ynv_06ae2397db12
tags: ["sessionPinId", "pinning", "file_edit"]
timestamp: 2026-07-29T23:10:27.831776+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 6
confidence: 0.9
---
# Summary

During the editing of the store/session.ts file, an auto-generated function for pinning was added.

## Facts
- Auto-compression rotates a conversation's session id to pinned rows
- Pins keyed on the live id, so pins evaporate with the lineage root

## Concepts
- sessionPinId
- pinning

## Files
- `/home/user/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 6 · Confidence: 0.9_
