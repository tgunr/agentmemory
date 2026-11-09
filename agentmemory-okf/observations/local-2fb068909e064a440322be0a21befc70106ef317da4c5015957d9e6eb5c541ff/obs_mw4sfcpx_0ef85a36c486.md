---
type: FileRead
title: macos-integrations
description: Local macOS services and Apple ecosystem tools
resource: agentmemory://observation/obs_mw4sfcpx_0ef85a36c486
tags: ["Apple ecosystem", "iMessage", "Launchd services", "Bluesbubbles", "fileread"]
timestamp: 2026-11-06T09:44:15.137500+00:00
source: agentmemory
session_id: local-2fb068909e064a440322be0a21befc70106ef317da4c5015957d9e6eb5c541ff
importance: 8
confidence: 0.9
---
# Summary

User successfully accessed Hermes for integration with macOS services, including iMessage, Notes, and Reminders.

## Facts
- Read conversation history, sends messages, manage attachments for iMessage/SMS via the `imsg` CLI.
- BlueBubbles server API access via localhost:1234 for programmatic iMessage access.

## Concepts
- Apple ecosystem
- iMessage
- Launchd services
- Bluesbubbles

## Files
- `references/bluebubbles-troubleshooting.md`
- `/usr/local/share/steipete/tap/imsg`
- `/usr/local/bin/bluebubbles-troubleshooting`
- `/Applications/BlueBubbles.app`
- `/Applications/BlueBubbles/contents/MacOS/BlueBubbles`

_Importance: 8 · Confidence: 0.9_
