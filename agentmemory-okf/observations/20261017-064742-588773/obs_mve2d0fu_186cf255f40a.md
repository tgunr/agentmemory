---
type: file_edit
title: Disable and clean up syncoid timer and runner
description: Stop system service automatically
resource: agentmemory://observation/obs_mve2d0fu_186cf255f40a
tags: ["systemd timers", "smart approval system", "file_edit"]
timestamp: 2026-10-18T16:52:35.304162+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

The syncoid.timer and syncoid-runner.timer were disabled and cleaned up, which may impact system performance.

## Facts
- Command used to run the edit operation: ssh pve.root 'systemctl is-active syncoid.timer syncoid-runner.timer 2>&1; echo \"---\"; systemctl disable syncoid.timer syncoid-runner.timer 2>&1; echo \"disable_exit=$?\"'
- Output of the operation: inactive inactive --- Removed \"/etc/systemd/system/timers.target.wants/syncoid.timer\". Removed \"/etc/systemd/system/timers.target.wants/syncoid-runner.timer\". disable_exit=0

## Concepts
- systemd timers
- smart approval system

## Files
- `/etc/systemd/system/timers.target.wants/syncoid.timer`
- `/etc/systemd/system/timers.target.wants/syncoid-runner.timer`

_Importance: 7 · Confidence: 0.9_
