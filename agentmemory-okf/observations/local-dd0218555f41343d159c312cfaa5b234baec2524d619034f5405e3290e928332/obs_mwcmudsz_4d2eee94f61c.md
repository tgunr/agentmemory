---
type: file_edit
title: DB schema query execution
description: Executing command in terminal
resource: agentmemory://observation/obs_mwcmudsz_4d2eee94f61c
tags: ["sqlite3 query execution", "DB schema query", "file_edit"]
timestamp: 2026-11-11T21:30:08.095134+00:00
source: agentmemory
session_id: local-dd0218555f41343d159c312cfaa5b234baec2524d619034f5405e3290e928332
importance: 8
confidence: 0.9
---
# Summary

Executed a database query in the terminal using the btt_data_store version 6.954 build 2026101902. Retrieved relevant data from the ZBTTBASEENTITY table.

## Facts
- Tool: terminal
- Command: cd ~/Library/Application Support/BetterTouchTool; DB=btt_data_store.version_6_954_build_2026101902\necho \"== assistant rows ==\"; sqlite3 \"$DB\" \"select ZNAME, ZUUID, substr(ZJSON,1,260) from ZBTTBASEENTITY where ZJSON like '%BTTAIChatIdentifier%' or ZJSON like '%BTTAIAPIType%';\" 2>&1 | head -20\necho \"== all tables ==\"; sqlite3 \"$DB\" \"\.tables\" 2>&1 | head

## Concepts
- sqlite3 query execution
- DB schema query

## Files
- `/Users/davec/Library/Application Support/BetterTouchTool/btt_data_store.version_6_954_build_2026101902`

_Importance: 8 · Confidence: 0.9_
