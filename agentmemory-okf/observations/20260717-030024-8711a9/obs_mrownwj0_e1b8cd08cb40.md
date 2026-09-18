---
type: CommandRun
title: Test delete endpoint with fake IDs after fix
description: Checking graceful error handling for non-existent observations
resource: agentmemory://observation/obs_mrownwj0_e1b8cd08cb40
tags: ["API endpoint testing", "error handling", "observation deletion", "commandrun"]
timestamp: 2026-07-17T12:19:44.359358+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

Tested the observation delete endpoint fix by sending fake IDs expecting graceful error handling, but the endpoint incorrectly reported success for non-existent observations instead of returning an error.

## Facts
- Two live worker processes found: pid 17256 and 92568, both in /Volumes/AI/agentmemory
- livez endpoint returned status ok with viewerPort 3113
- Delete endpoint with fake IDs returned success=true instead of expected 404/400 error

## Concepts
- API endpoint testing
- error handling
- observation deletion

## Files
- `/Volumes/AI/agentmemory/dist/index.mjs`

_Importance: 6 · Confidence: 1_
