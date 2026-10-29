---
type: file_edit
title: Locate device by SAS addr
description: Search for device identifier in sysfs and sg devices
resource: agentmemory://observation/obs_mvs7cmxi_5202ce2d1df8
tags: ["SAS device identification", "sysfs database", "file_edit"]
timestamp: 2026-10-28T14:21:02.352627+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 8
confidence: 0.9
---
# Summary

Tool 'terminal' executed a command to locate a device by its SAS address. The command output shows the device identifier in sysfs and sg devices databases.

## Facts
- Command used: ssh pve.root 'command')
- Timeout set: 150 seconds

## Concepts
- SAS device identification
- sysfs database

## Files
- `/sys/class/sas_device/ /sys/class/sas_end_device/ /sys/class/scsi_device/ 2>/dev/null`

_Importance: 8 · Confidence: 0.9_
