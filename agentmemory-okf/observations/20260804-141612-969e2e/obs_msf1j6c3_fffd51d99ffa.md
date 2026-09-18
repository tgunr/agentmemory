---
type: file_edit
title: webui-watchdog launch location
description: dir does webui-watchdog launch?
resource: agentmemory://observation/obs_msf1j6c3_fffd51d99ffa
tags: ["Launch Agents", "file_edit"]
timestamp: 2026-08-04T19:18:02.447624+00:00
source: agentmemory
session_id: 20260804_141612_969e2e
importance: 7
confidence: 1
---
# Summary

The command searched for the launch location of webui-watchdog.

## Facts
- Runs every 5 minutes via ai.hermes.webui-watchdog.plist.
- LABEL=\"ai.hermes.webui\"
- LOG=\"$HOME/.hermes/logs/webui-watchdog.log\">
- launchctl bootstrap gui/$(id -u) \"${HOME}/Library/LaunchAgents/${LABEL}.plist\"">

## Concepts
- Launch Agents

_Importance: 7 · Confidence: 1_
