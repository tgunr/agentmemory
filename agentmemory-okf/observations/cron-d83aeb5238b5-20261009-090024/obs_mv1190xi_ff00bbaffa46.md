---
type: file_edit
title: Running shell command
description: Excuting iCalBuddy and Calendar
resource: agentmemory://observation/obs_mv1190xi_ff00bbaffa46
tags: ["osascript", "icalBuddy", "file_edit"]
timestamp: 2026-10-09T14:00:29.429441+00:00
source: agentmemory
session_id: cron_d83aeb5238b5_20261009_090024
importance: 6
confidence: 0.9
---
# Summary

In the terminal, we execute a complex shell command using `which` and `icalBuddy` that outputs the number of daily and monthly calendars in iCal.

## Facts
- tool: terminal
- command: which icalBuddy && icalBuddy -n eventsToday 2>&1 | head -20; osascript -e 'tell application \"Calendar\" to count calendars' 2>&1 | head -2

## Concepts
- osascript
- icalBuddy

## Files
- `None`

_Importance: 6 · Confidence: 0.9_
