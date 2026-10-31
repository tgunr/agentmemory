---
type: FileRead
title: Find files with 'move' keyword
description: Search for 'move' in Python files in hermes-agent
resource: agentmemory://observation/obs_mvuh5vgl_617024a339a2
tags: ["React hooks", "moveSessionToProject function", "fileread"]
timestamp: 2026-10-30T04:31:15.330761+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 7
confidence: 1
---
# Summary

The tool "terminal" executed a command in the "hermes-agent" directory. The command used a search for 'move' in Python files and also looked for 'moveSessionToProject' in other files. The output suggests the use of 'moveSessionToProject' function in multiple places.

## Facts
- Path: /Users/davec/.hermes/hermes-agent
- Command: 'cd /Users/davec/.hermes/hermes-agent && grep -rn "move" --include=*.py -l hermes/ | head -30 && echo ----'"
- Command: 'grep -rn "def move_session\\|moveSessionToProject" -r apps/desktop/src | head -20'

## Concepts
- React hooks
- moveSessionToProject function

## Files
- `/Users/davec/.hermes/hermes-agent/hermes/`

_Importance: 7 · Confidence: 1_
