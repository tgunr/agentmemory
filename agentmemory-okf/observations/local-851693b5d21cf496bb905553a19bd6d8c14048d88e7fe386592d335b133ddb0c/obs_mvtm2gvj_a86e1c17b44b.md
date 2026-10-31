---
type: file_edit
title: Unhandled errors in Calendar application
description: No app is currently running.
resource: agentmemory://observation/obs_mvtm2gvj_a86e1c17b44b
tags: ["error handling", "Commanders Calendar", "file_edit"]
timestamp: 2026-10-29T14:00:48.362941+00:00
source: agentmemory
session_id: local-851693b5d21cf496bb905553a19bd6d8c14048d88e7fe386592d335b133ddb0c
importance: 8
confidence: 0.9
---
# Summary

The agent ran the <code>osascript -e 'tell application "Calendar" to get name of calendars' ; remindctl today --json; remindctl overdue --json'</code> command. However, the Commanders Calendar application was not running, resulting in an error.

## Facts
- Remindctl invoked with reminders for 35 tasks

## Concepts
- error handling
- Commanders Calendar

## Files
- `/Users/davec/.reminders`

_Importance: 8 · Confidence: 0.9_
