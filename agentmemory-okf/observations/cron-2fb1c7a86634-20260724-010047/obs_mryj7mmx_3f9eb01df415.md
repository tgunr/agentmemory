---
type: file_edit
title: ss command not found in terminal
description: No port in use detected for vcom-tunnel
resource: agentmemory://observation/obs_mryj7mmx_3f9eb01df415
tags: ["bash scripting", "file_edit"]
timestamp: 2026-07-24T06:00:51.797775+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_010047
importance: 7
confidence: 0.9
---
# Summary

The tool used the 'ss' command within a bash script to find out if port 8001 was in use, but encountered an error due to missing system call, leading to no results being obtained.

## Facts
- a bash error occurred while running an ss command to fetch the status of a process listening on a specific port.

## Concepts
- bash scripting

_Importance: 7 · Confidence: 0.9_
