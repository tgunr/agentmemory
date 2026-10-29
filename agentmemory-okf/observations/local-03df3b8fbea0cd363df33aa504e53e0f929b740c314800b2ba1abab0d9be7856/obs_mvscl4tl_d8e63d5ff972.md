---
type: file_write
title: Disabled timers on PVE
description: Stopping and disabling timer apt-daily.timer and apt-daily-upgrade.timer
resource: agentmemory://observation/obs_mvscl4tl_d8e63d5ff972
tags: ["systemd timer management", "file_write"]
timestamp: 2026-10-28T16:47:36.870673+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 5
confidence: 0.9
---
# Summary

Disabled timers on PVE server using a command-line interface.

## Facts
- Command to disable timers: ssh pve.root 'systemctl stop apt-daily.timer apt-daily-upgrade.timer 2>&1; systemctl disable apt-daily.timer apt-daily-upgrade.timer 2>&1 | tail -2;
- Command output:
Removed "/etc/systemd/system/timers.target.wants/apt-daily.timer".
Removed "/etc/systemd/system/timers.target.wants/apt-daily-upgrade.timer".
timers: disabled disabled

## Concepts
- systemd timer management

_Importance: 5 · Confidence: 0.9_
