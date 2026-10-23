---
type: Observation
title: Session search tool failed
description: Around message ID not found in session ID
resource: agentmemory://observation/obs_mvjm0an9_6d4b896fca47
tags: ["tool invocation error", "observation"]
timestamp: 2026-10-22T14:01:25.211158+00:00
source: agentmemory
session_id: cron_d83aeb5238b5_20261022_090030
importance: 5
confidence: 0.9
---
# Summary

The post_tool_call hook triggered a session_search tool, but it failed to retrieve the session ID due to an incorrect around message ID.

## Facts
- Session ID: 20261022_083459_a05ab0
- Around message ID: 999999999

## Concepts
- tool invocation error

_Importance: 5 · Confidence: 0.9_
