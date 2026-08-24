---
type: file_edit
title: Querying Hermes state database with sqlite3
description: Limited to 2nd command line argument to check working_at column
resource: agentmemory://observation/obs_mry2efv6_687561bb5bad
tags: ["SqLite3 queries", "Database validation", "file_edit"]
timestamp: 2026-07-23T22:10:16.133486+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 5
confidence: 0.9
---
# Summary

The post_tool_call hook executed a sqlite3 query to inspect the Hermes state database. The query failed to parse the 'working_at' column, causing an error.

## Facts
- Sqlite3 query executed on July 23, 2026 at 22:10:16 UTC without errors.
- Parse error occurred due to non-existing working_at column in the database.

## Concepts
- SqLite3 queries
- Database validation

## Files
- `/home/user/.hermes/profiles/ai/state.db`

_Importance: 5 · Confidence: 0.9_
