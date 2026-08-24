---
type: file_edit
title: Failed env var patch: duplicate matches
description: Attempted to toggle AGENTMEMORY_AUTO_COMPRESS in .env
resource: agentmemory://observation/obs_mrtd109d_10e422ce59ef
tags: ["environment variable configuration", "patch tool ambiguity", "replace_all", "file_edit"]
timestamp: 2026-07-20T15:08:54.287223+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

The agent tried to disable auto-compression by editing the .env config file, but the patch failed because the target string appeared twice. To proceed, the agent must either narrow the context or replace all occurrences.

## Facts
- Tool: patch mode=replace failed on /Users/davec/.agentmemory/.env
- Attempted to replace AGENTMEMORY_AUTO_COMPRESS=true with AGENTMEMORY_AUTO_COMPRESS=false
- Failure reason: old_string had 2 matches, so it was not unique
- Resolution suggested: provide more context or use replace_all=True

## Concepts
- environment variable configuration
- patch tool ambiguity
- replace_all

## Files
- `/Users/davec/.agentmemory/.env`

_Importance: 4 · Confidence: 1_
