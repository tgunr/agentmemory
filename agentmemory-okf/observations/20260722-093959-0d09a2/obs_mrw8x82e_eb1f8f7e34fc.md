---
type: file_write
title: Exporting conversation database from state.db to markdown
description: Nightly mirror of Hermes conversation database, including design decisions and notable features.
resource: agentmemory://observation/obs_mrw8x82e_eb1f8f7e34fc
tags: ["file_write"]
timestamp: 2026-07-22T15:37:17.840460+00:00
source: agentmemory
session_id: 20260722_093959_0d09a2
importance: 8
confidence: 0.75
---
# Summary

In this post_tool_call, the skill manage exported the conversation database from state.db to markdown format using a custom script. This process produces a nightly snapshot of the Hermes conversation database, which is useful for training purposes.

## Facts
- 184 sessions exported, 18,828 messages captured, and 13 MB of markdown was compressed into a 3.3 MB gzip archive.
- The exporter includes design decisions on one doc per session, tool commands, reasoning, scripts, and architectures.

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/agentmemory-hermes-integration/references/hermes-conversation-export.md`

_Importance: 8 · Confidence: 0.75_
