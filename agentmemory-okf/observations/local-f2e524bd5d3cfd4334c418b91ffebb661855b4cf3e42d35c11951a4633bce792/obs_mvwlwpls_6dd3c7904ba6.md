---
type: CommandRun
title: scheduled patch to address mounting and completion issues
description: fix for external dirs and skill dispatch
resource: agentmemory://observation/obs_mvwlwpls_6dd3c7904ba6
tags: ["mounting and completion issues", "cache delays", "commandrun"]
timestamp: 2026-10-31T16:19:38.268813+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 7
confidence: 1
---
# Summary

The current external dir setup for skills causes delays in skill dispatch and completion. A patch has been applied to fix this issue. A cron job has been added to maintain a local mirror of the external skills.

## Facts
- external skills still resolve after patch
- skill_count is unchanged after patch
- gateway caches external dirs at boot causing RPC probes to be slow

## Concepts
- mounting and completion issues
- cache delays

_Importance: 7 · Confidence: 1_
