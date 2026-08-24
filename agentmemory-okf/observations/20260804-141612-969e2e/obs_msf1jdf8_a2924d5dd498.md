---
type: file_edit
title: LaunchAgent plist and webui-watchdog.sh edits
description: Edit of LaunchAgent plist and restart logic for Hermes WebUI
resource: agentmemory://observation/obs_msf1jdf8_a2924d5dd498
tags: ["LaunchAgent configuration", "Hermes WebUI watch dog mechanism", "file_edit"]
timestamp: 2026-08-04T19:18:11.633138+00:00
source: agentmemory
session_id: 20260804_141612_969e2e
importance: 8
confidence: 0.9
---
# Summary

The agent made changes to two LaunchAgent files. First, edited the ai.hermes.webui.plist file replacing its internal URL. Second, modified the webui-watchdog.sh file (invoked via post_tool_call action).

## Facts
- Hermes Home directory: /Users/davec/.hermes
- HEMES_WEBUI_HOST port: 8787

## Concepts
- LaunchAgent configuration
- Hermes WebUI watch dog mechanism

## Files
- `/Users/davec/.hermes/webui-watchdog.sh`

_Importance: 8 · Confidence: 0.9_
