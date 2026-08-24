---
type: file_edit
title: Find desktop directories and trim results
description: 
resource: agentmemory://observation/obs_mruugmym_2c2b2feacccf
tags: ["terminal commands, file search patterns, bash scripting", "file_edit"]
timestamp: 2026-07-21T16:04:43.193881+00:00
source: agentmemory
session_id: 20260721_092550_1df2c6
importance: 4
confidence: 0.9
---
# Summary

The command was executed and output found. The context of the finding is that we're searching for desktop directories in /Users/davec using a bash shell.

## Facts
- Command to find desktop subdirectories using bash
- /Users/davec -maxdepth 4 -type d -name desktop 2 >/dev/null | head -20

## Concepts
- terminal commands, file search patterns, bash scripting

## Files
- `/Users/davec/.local/hermes-agent-source/apps/desktop`

_Importance: 4 · Confidence: 0.9_
