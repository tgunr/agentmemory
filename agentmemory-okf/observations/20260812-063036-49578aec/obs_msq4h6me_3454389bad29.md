---
type: FileRead
title: Parked Session Behavior
description: A tutorial on how to handle scaffolding-only turns in a session
resource: agentmemory://observation/obs_msq4h6me_3454389bad29
tags: ["fileread"]
timestamp: 2026-08-12T13:25:56.290116+00:00
source: agentmemory
session_id: 20260812_063036_49578aec
importance: 4
confidence: 0.75
---
# Summary

This code block explains that if a conversation has turns with only system scaffolding messages and no real user instruction, the session should remain parked with minimal acknowledgments until a real task is given.

## Facts
- The observation describes a specific behavioral pattern in a conversation.
- A turn is considered "parked" when it contains only meta-messages without an actual user instruction or task.

_Importance: 4 · Confidence: 0.75_
