---
type: FileRead
title: Launchctl and Hermes relaunch
description: Run one-shot Hermes relaunch command
resource: agentmemory://observation/obs_mvujiksu_e52b5e9ddf7f
tags: ["launchctl and Hermes relaunch", "fileread"]
timestamp: 2026-10-30T05:37:07.275511+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 5
confidence: 1
---
# Summary

Run a one-shot Hermes relaunch command using launchctl.

## Facts
- Tool: terminal
- Command: launchctl submit -l hermes.oneshot.relaunch -- /bin/sh -c 'sleep 60; /bin/launchctl kickstart -k gui/501/ai.hermes.gateway; sleep 20; /usr/bin/open -a /Applications/Hermes.app'
- Output: submitted
- Exit code: 0
- Exit reason: Command was flagged (stop/restart hermes launchd service (kills running agents)) and auto-approved by smart approval.

## Concepts
- launchctl and Hermes relaunch

_Importance: 5 · Confidence: 1_
