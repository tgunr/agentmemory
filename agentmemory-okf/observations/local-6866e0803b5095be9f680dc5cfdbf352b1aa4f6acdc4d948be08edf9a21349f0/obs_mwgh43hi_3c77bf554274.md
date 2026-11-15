---
type: file_edit
title: Incorrect Himalaya Usage
description: Error in executing command
resource: agentmemory://observation/obs_mwgh43hi_3c77bf554274
tags: ["Usage guidance", "file_edit"]
timestamp: 2026-11-14T14:00:48.292285+00:00
source: agentmemory
session_id: local-6866e0803b5095be9f680dc5cfdbf352b1aa4f6acdc4d948be08edf9a21349f0
importance: 4
confidence: 0.9
---
# Summary

Tool execution failed due to incorrect usage of 'himalaya account list' command. Incorrect usage resulted in an error message.

## Facts
- Input command: himalaya account list --output json; himalaya envelope list --account default --output json --page-size 40 'after 2026-11-12 order by date desc'
- Actual output: error: unexpected argument '--output' found

## Concepts
- Usage guidance

_Importance: 4 · Confidence: 0.9_
