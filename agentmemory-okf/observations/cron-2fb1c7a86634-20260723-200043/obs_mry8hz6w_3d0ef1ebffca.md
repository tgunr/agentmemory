---
type: file_edit
title: fm server process details
description: 
resource: agentmemory://observation/obs_mry8hz6w_3d0ef1ebffca
tags: ["file_edit"]
timestamp: 2026-07-24T01:00:58.848148+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_200043
importance: 4
confidence: 0.85
---
# Summary

The `ps` command was used to find the process details of ID 21650.
    The output reveals that a new fm server process has started with a running PID.

## Facts
- Query command: ps -p 21650 -o pid,command
- The output is:
- PID COMMAND
21700 /usr/bin/fm serve --host 0.0.0.0 --port 8001

_Importance: 4 · Confidence: 0.85_
