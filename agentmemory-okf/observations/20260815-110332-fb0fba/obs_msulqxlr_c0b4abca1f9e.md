---
type: file_edit
title: mcp__apple_mcp__notes error search
description: Error accessing notes: ENOENT: no such file or directory, posix_spawn '/usr/bin/osascript'
resource: agentmemory://observation/obs_msulqxlr_c0b4abca1f9e
tags: ["posix_spawn", "file_edit"]
timestamp: 2026-08-15T16:40:29.339422+00:00
source: agentmemory
session_id: 20260815_110332_fb0fba
importance: 7
confidence: 0.9
---
# Summary

The mcp__apple_mcp__notes tool experienced an error while searching for notes containing the text 'hf_'. The error occurred because osascript could not spawn the '/usr/bin/osascript' script.

## Facts
- searched for notes with text 'hf_'
- error was ENOENT: no such file or directory, posix_spawn '/usr/bin/osascript'

## Concepts
- posix_spawn

## Files
- `/usr/bin/osascript`

_Importance: 7 · Confidence: 0.9_
