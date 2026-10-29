---
type: file_edit
title: Failed to launch Calendar app and get calendar data
description: Error executing AppleScript command
resource: agentmemory://observation/obs_mvswcuwh_c6c72630108b
tags: ["AppleScript", "file_edit"]
timestamp: 2026-10-29T02:01:03.084920+00:00
source: agentmemory
session_id: local-9a7e82eea8af49579a1ddbcca83f6578a1c73e7768c7f4d653eab8bf1fd75b17
importance: 6
confidence: 1
---
# Summary

The AppleScript command to launch the Calendar app and retrieve calendar data failed due to the app not being running.

## Facts
- Elapsed time: 4 seconds
- Terminal command:
- osascript -e 'tell application "Calendar" to launch' 2>&1;
- osascript -e 'tell application "Calendar" to get name of every calendar' 2>&1 | head -3
- Output error: Calendar got an error: Application isn’t running. (-600)

## Concepts
- AppleScript

## Files
- `/dev/null`

_Importance: 6 · Confidence: 1_
