---
type: CommandRun
title: Error running dev renderer
description: NPM command failed to execute.
resource: agentmemory://observation/obs_mruwemh6_68a8f46208ef
tags: ["commandrun"]
timestamp: 2026-07-21T16:59:08.484526+00:00
source: agentmemory
session_id: 20260721_092550_1df2c6
importance: 5
confidence: 0.75
---
# Summary

The 'dev:renderer' npm command experienced an error due to incorrect usage of the '&' character for background execution. This issue affects the functionality of the Hermes desktop application and should be addressed in a follow-up terminal call with correct configuration using terminal(background=true).

## Facts
- Error occurred with exit code -1.
- No output produced within the specified timeout.

_Importance: 5 · Confidence: 0.75_
