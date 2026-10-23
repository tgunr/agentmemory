---
type: file_edit
title: Clean up launch services cache
description: Remove Google Chrome Launch Services handler
resource: agentmemory://observation/obs_mvji6n8g_e4319d536ee2
tags: ["Launch Services", "file_edit"]
timestamp: 2026-10-22T12:14:22.983694+00:00
source: agentmemory
session_id: 20261022_070118_69eb5f
importance: 5
confidence: 1
---
# Summary

The tool (terminal) executes a series of commands to clean up launch services cache and remove the Google Chrome Launch Services handler.

## Facts
- Run killall command to remove lsd process
- Fetch LSHandlers with grep and inspect for Google Chrome
- Use plutil to parse secure plist and output modified handler

## Concepts
- Launch Services

## Files
- `/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister`

_Importance: 5 · Confidence: 1_
