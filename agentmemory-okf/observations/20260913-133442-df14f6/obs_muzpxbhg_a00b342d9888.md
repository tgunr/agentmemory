---
type: CommandRun
title: Imsg history chat
description: Chat logs
resource: agentmemory://observation/obs_muzpxbhg_a00b342d9888
tags: ["vehicle movement tracking", "commandrun"]
timestamp: 2026-10-08T15:55:41.280151+00:00
source: agentmemory
session_id: 20260913_133442_df14f6
importance: 5
confidence: 0.85
---
# Summary

Message history about truck movement

## Facts
- /usr/bin/imsg history --chat-id 2067 --limit 50 --json 2>&1 | grep -i \"move|truck|trailer|vehicle|block|gator|mower\" | head -30

## Concepts
- vehicle movement tracking

_Importance: 5 · Confidence: 0.85_
