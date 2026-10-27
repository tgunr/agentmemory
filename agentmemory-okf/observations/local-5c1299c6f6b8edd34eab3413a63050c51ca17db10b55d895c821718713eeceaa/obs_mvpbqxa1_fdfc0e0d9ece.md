---
type: CommandRun
title: Recall past conversations: search or read old Hermes sessions
description: Search or read old Hermes sessions
resource: agentmemory://observation/obs_mvpbqxa1_fdfc0e0d9ece
tags: ["Hermes sessions", "search query", "scroll", "commandrun"]
timestamp: 2026-10-26T14:00:48.886841+00:00
source: agentmemory
session_id: local-5c1299c6f6b8edd34eab3413a63050c51ca17db10b55d895c821718713eeceaa
importance: 8
confidence: 1
---
# Summary

Tool for recalling past conversations. Allows searching or reading old Hermes sessions, using different shapes: discovery, scroll, or read. Discovery shape returns top-ranked result fully hydrated, while scroll shape centers around a message id.

## Facts
- Four shapes, picked by args: query = discovery (top-N matching sessions, top result fully hydrated),
- session_id + around_message_id = scroll (window of messages around an anchor),
- session_id alone = read a whole session — how you resolve an

## Concepts
- Hermes sessions
- search query
- scroll

## Files
- ``

_Importance: 8 · Confidence: 1_
