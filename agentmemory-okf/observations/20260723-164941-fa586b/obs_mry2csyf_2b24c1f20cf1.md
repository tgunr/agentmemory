---
type: Observation
title: Post tool call on memory failed due to high memory usage
description: Memory limit exceeded after applying operations in batch 1
resource: agentmemory://observation/obs_mry2csyf_2b24c1f20cf1
tags: ["observation"]
timestamp: 2026-07-23T22:08:59.790536+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 6
confidence: 0.85
---
# Summary

The post tool call on memory failed due to high memory usage after applying operations in batch 1.

## Facts
- Error: after applying all operations, memory would be over the limit.
- Current entries:
- .hermes/ and .startup/ are git repos. Shared KB: `~/sources/hermes-knowledge/skills` via `skills.external_dirs` in each profile that needs cross-profile skills.

## Files
- `/tmp
      ;;`

_Importance: 6 · Confidence: 0.85_
