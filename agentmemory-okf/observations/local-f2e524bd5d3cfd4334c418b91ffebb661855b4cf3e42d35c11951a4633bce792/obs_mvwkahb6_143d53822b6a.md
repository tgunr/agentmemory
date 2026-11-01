---
type: file_edit
title: fix hot path of slash command dispatch
description: fix slow skill scan on network mount
resource: agentmemory://observation/obs_mvwkahb6_143d53822b6a
tags: ["hot path optimization", "file_edit"]
timestamp: 2026-10-31T15:34:21.470293+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 7
confidence: 0.9
---
# Summary

The hot path of the slash command dispatch was causing a slow skill scan when the command was run on a network mount, which was fixed by applying a patch.

## Facts
- patch applied to hermes-slash-command-dispatch

## Concepts
- hot path optimization

_Importance: 7 · Confidence: 0.9_
