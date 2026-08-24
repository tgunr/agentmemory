---
type: CommandRun
title: BlueBubbles server log analysis for message sending failures
description: Investigation of AppleScript chat ID errors and message send timeouts
resource: agentmemory://observation/obs_mrqcclga_1f238bc4b9d3
tags: ["AppleScript error handling", "BlueBubbles messaging API", "iMessage chat ID resolution", "Message send timeout", "commandrun"]
timestamp: 2026-07-18T12:26:36.822971+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Log analysis reveals BlueBubbles server experiencing AppleScript chat ID lookup failures (error -1728) when attempting to send iMessages. The primary AppleScript method fails but a fallback script successfully delivers messages. A subsequent send attempt timed out after ~2 minutes returning HTTP 500, indicating intermittent messaging reliability issues.

## Facts
- AppleScript error: "Can't get chat id iMessage;-;+193****0811. (-1728)"
- Main AppleScript send failed, fallback script succeeded for message delivery
- API /api/v1/message/text returned HTTP 500 after 120009ms timeout
- sendText function in main.js at line 267563 triggered the error
- Messages were successfully delivered via fallback despite initial AppleScript failure

## Concepts
- AppleScript error handling
- BlueBubbles messaging API
- iMessage chat ID resolution
- Message send timeout

## Files
- `~/Library/Logs/bluebubbles-server/main.log`
- `/Applications/BlueBubbles.app/Contents/Resources/app.asar/dist/main.js`

_Importance: 6 · Confidence: 1_
