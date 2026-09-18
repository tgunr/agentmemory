---
type: FileRead
title: View iMessage integration reference document
description: macOS iMessage CLI tool usage via imsg
resource: agentmemory://observation/obs_mrqfd85c_e537650cee3d
tags: ["macOS automation", "iMessage integration", "CLI messaging tools", "BlueBubbles gateway", "Full Disk Access permissions", "fileread"]
timestamp: 2026-07-18T13:51:05.084654+00:00
source: agentmemory
session_id: 20260718_084855_083384
importance: 4
confidence: 1
---
# Summary

Retrieved the iMessage integration reference document which documents the imsg CLI tool for reading and sending iMessages via macOS Messages.app. The document includes prerequisites, usage examples, service options, and operational rules for safe messaging. This is part of the macos-integrations skill set.

## Facts
- Document located at references/imessage.md for macos-integrations skill
- Uses imsg CLI tool installed via brew install steipete/tap/imsg
- Requires Full Disk Access and Automation permissions on macOS
- Supports: listing chats, viewing history, sending messages with attachments, watching for new messages
- Service options: imessage, sms, auto
- References BlueBubbles gateway for programmatic iMessage access (see references/bluebubbles-troubleshooting.md)
- Rules require confirming recipient and message content before sending, never send to unknown numbers without approval

## Concepts
- macOS automation
- iMessage integration
- CLI messaging tools
- BlueBubbles gateway
- Full Disk Access permissions

## Files
- `references/imessage.md`

_Importance: 4 · Confidence: 1_
