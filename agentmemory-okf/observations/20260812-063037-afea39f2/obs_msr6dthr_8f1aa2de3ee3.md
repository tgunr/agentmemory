---
type: file_write
title: No Skill Added During Tool Call
description: Description is too long.
resource: agentmemory://observation/obs_msr6dthr_8f1aa2de3ee3
tags: ["file_write"]
timestamp: 2026-08-13T07:07:04.714730+00:00
source: agentmemory
session_id: 20260812_063037_afea39f2
importance: 4
confidence: 0.75
---
# Summary

The skill index failed to truncate the description of a new skill due to its length, resulting in a failure to route the tool call correctly.

## Facts
- Description exceeds maximum allowed character limit for new skills and triggers first

_Importance: 4 · Confidence: 0.75_
