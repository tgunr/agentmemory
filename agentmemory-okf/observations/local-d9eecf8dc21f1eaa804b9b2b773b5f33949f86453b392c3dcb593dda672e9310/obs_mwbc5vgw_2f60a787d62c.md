---
type: file_edit
title: Launchctl GUI/Process Details
description: prints GUI/Process details for com.vinnov.RadarHelper
resource: agentmemory://observation/obs_mwbc5vgw_2f60a787d62c
tags: ["Launchctl", "file_edit"]
timestamp: 2026-11-10T23:43:22.252511+00:00
source: agentmemory
session_id: local-d9eecf8dc21f1eaa804b9b2b773b5f33949f86453b392c3dcb593dda672e9310
importance: 6
confidence: 0.9
---
# Summary

User ran launchctl command to gather GUI/Process details for com.vinnov.RadarHelper and received output that includes process path, type, and state.

## Facts
- command: launchctl print gui/$(id -u)/com.vinnov.RadarHelper 2>&1 | head -40
- process output: | gui/501/com.vinnov.RadarHelper = {\n\tactive count = 0\n\tpath = (submitted by smd.110)\n\ttype = Submitted\n\tmanaged_by = com.apple.xpc.ServiceManagement\n\tstate = not running\n...\n}

## Concepts
- Launchctl

_Importance: 6 · Confidence: 0.9_
