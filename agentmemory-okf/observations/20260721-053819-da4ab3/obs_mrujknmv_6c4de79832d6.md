---
type: file_edit
title: Found valid project skill directories
description: No errors during skill directory search
resource: agentmemory://observation/obs_mrujknmv_6c4de79832d6
tags: ["file system search patterns", "grep utilization", "file_edit"]
timestamp: 2026-07-21T10:59:54.916112+00:00
source: agentmemory
session_id: 20260721_053819_da4ab3
importance: 6
confidence: 0.9
---
# Summary

The tool "terminal" successfully found and listed project directories within skill directories.

## Facts
- Tool: terminal
- Command: find /Users/davec/.hermes/skills -path '*/projects*' -o -path '*/project*' 2>/dev/null | head -20

## Concepts
- file system search patterns
- grep utilization

## Files
- `/Users/davec/.hermes/skills/project-name-master/SKILL.md`

_Importance: 6 · Confidence: 0.9_
