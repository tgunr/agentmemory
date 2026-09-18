---
type: file_edit
title: sqlite3 command failed on regex query
description: 
resource: agentmemory://observation/obs_ms7d6t30_abd6add33707
tags: ["sqlite query errors", "file_edit"]
timestamp: 2026-07-30T10:22:11.384768+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 8
confidence: 0.9
---
# Summary

The sqlite3 command in the post-tool call event resulted in a parse error due to an invalid column name.

## Facts
- Parse error in 2nd command line argument: no such column: path
- Select * FROM discovered_repos WHERE path LIKE&#39;%uv%&#39; OR path LIKE&#39;%UV%&#39；; results in an error

## Concepts
- sqlite query errors

_Importance: 8 · Confidence: 0.9_
