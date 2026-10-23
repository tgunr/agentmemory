---
type: file_edit
title: Background process started
description: silent execution without notify_on_complete=true
resource: agentmemory://observation/obs_mvjn6yd8_7a3a5683c6ec
tags: ["React hooks", "file_edit"]
timestamp: 2026-10-22T14:34:35.511071+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 5
confidence: 1
---
# Summary

The HERMES webUI server was started in background mode without notify_on_complete=true, which means the execution is silent. This might be intended for bounded tasks, and the user should re-launch with notify_on_complete=true or call process(action='wait') to learn the outcome.

## Facts
- Process id: 96461
- Exit code: 0
- Session id: proc_c727ff0c2bc7

## Concepts
- React hooks

_Importance: 5 · Confidence: 1_
