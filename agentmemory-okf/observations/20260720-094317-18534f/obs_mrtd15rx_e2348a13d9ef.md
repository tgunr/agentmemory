---
type: Error
title: Patch failed: duplicate matches in .env config
description: Attempted to disable auto-compression in agentmemory config
resource: agentmemory://observation/obs_mrtd15rx_e2348a13d9ef
tags: ["environment variable configuration", "patch replace uniqueness", "config file management", "error"]
timestamp: 2026-07-20T15:09:01.434571+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

A patch operation tried to update the agentmemory environment config by setting AGENTMEMORY_AUTO_COMPRESS to false, but it failed because the old_string appeared twice in the file.
    The operation needs either a more uniquely matched context or the replace_all=True flag to proceed.

## Facts
- Target file: /Users/davec/.agentmemory/.env
- Attempted replacement: AGENTMEMORY_AUTO_COMPRESS=true changed to false, keeping AGENTMEMORY_INJECT_CONTEXT=true
- Error: "Found 2 matches for old_string. Provide more context to make it unique, or use replace_all=True."
- Tool was patch with mode=replace and success=false

## Concepts
- environment variable configuration
- patch replace uniqueness
- config file management

## Files
- `/Users/davec/.agentmemory/.env`

_Importance: 5 · Confidence: 1_
