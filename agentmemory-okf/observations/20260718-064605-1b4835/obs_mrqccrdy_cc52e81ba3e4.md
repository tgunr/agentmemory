---
type: CommandRun
title: Investigating BlueBubbles chat GUID resolution patterns
description: Terminal command to analyze chat identifier formats in server logs
resource: agentmemory://observation/obs_mrqccrdy_cc52e81ba3e4
tags: ["BlueBubbles chat GUID format", "iMessage integration", "log analysis", "commandrun"]
timestamp: 2026-07-18T12:26:44.515449+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

User investigated how BlueBubbles resolves phone numbers to chat GUIDs, discovering the system uses both 'any;-;' and 'iMessage;-;' prefixed identifiers. The fallback mechanism correctly resolved 9364420811 to iMessage format when any;-; format didn't work.

## Facts
- BB resolved phone number 9364420811 to chat id 'iMessage;-;+19364420811'
- Log shows masked format 'any;-;+193****0811' for the same number
- Found multiple 'any;-;[phone]' patterns in logs: any;-;+153****4390, any;-;+172****1367, any;-;+191****2217, any;-;+193****6729, any;-;+193****6937, any;-;+193****2502, any;-;+193****0811
- Found 'iMessage;-;+193****0811' pattern in logs confirming fallback worked

## Concepts
- BlueBubbles chat GUID format
- iMessage integration
- log analysis

## Files
- `~/Library/Logs/bluebubbles-server/main.log`

_Importance: 4 · Confidence: 1_
