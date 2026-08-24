---
type: CommandRun
title: macOS Reminders automation probe timed out
description: osascript blocked by 30s timeout under user 'davec'
resource: agentmemory://observation/obs_mrs12lpz_a03be1adf4d1
tags: ["macOS automation", "osascript", "Apple Reminders", "remindctl", "TCC permissions", "command timeout", "commandrun"]
timestamp: 2026-07-19T16:46:27.184538+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

Attempted to probe macOS Reminders automation capabilities using osascript and remindctl under the 'davec' user context. The osascript command hung and hit the 30-second timeout limit, indicating potential TCC permission, background execution, or UI prompt blocking issues with Apple Reminders.

## Facts
- Current user and GUI session owner is 'davec'
- osascript command to query Apple Reminders lists timed out after 30 seconds
- remindctl add command did not execute due to the script timeout (exit code 124)

## Concepts
- macOS automation
- osascript
- Apple Reminders
- remindctl
- TCC permissions
- command timeout

_Importance: 4 · Confidence: 1_
