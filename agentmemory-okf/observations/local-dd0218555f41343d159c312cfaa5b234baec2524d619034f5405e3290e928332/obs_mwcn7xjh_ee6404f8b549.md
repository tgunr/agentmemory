---
type: FileRead
title: SQLite query on activity.sqlite
description: Retrieve log data
resource: agentmemory://observation/obs_mwcn7xjh_ee6404f8b549
tags: ["SQLite query", "fileread"]
timestamp: 2026-11-11T21:40:40.201897+00:00
source: agentmemory
session_id: local-dd0218555f41343d159c312cfaa5b234baec2524d619034f5405e3290e928332
importance: 8
confidence: 0.9
---
# Summary

Retrieved SQLite log data, including task completion status and reasoning.

## Facts
- Command executed: \"cd ~/Library/Application\\ Support/BetterTouchTool/AI/Activity; sqlite3 activity.sqlite \"select datetime(started_at,'unixepoch','localtime') t, json_extract(json,'\\$.terminalReason') reason, substr(json_extract(json,'\\$.message'),1,120) msg from attempts order by started_at desc limit 5;\"; echo \"=== tasks ===\"; sqlite3 activity.sqlite \"select datetime(created_at,'unixepoch','localtime'), lifecycle, json_extract(json,'\\$.assistantIdentifier') from tasks order by created_at desc limit 4;\"

## Concepts
- SQLite query

## Files
- `/Users/davec/Library/Application Support/BetterTouchTool/AI/Activity/activity.sqlite`

_Importance: 8 · Confidence: 0.9_
