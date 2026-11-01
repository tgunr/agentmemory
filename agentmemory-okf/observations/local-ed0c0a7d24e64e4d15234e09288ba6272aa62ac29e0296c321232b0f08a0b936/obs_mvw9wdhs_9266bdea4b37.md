---
type: CommandRun
title: skill_view - service debugging
description: Debug local daemons with selective endpoint failures.
resource: agentmemory://observation/obs_mvw9wdhs_9266bdea4b37
tags: ["Node/Python debugging", "commandrun"]
timestamp: 2026-10-31T10:43:27.179844+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 8
confidence: 0.9
---
# Summary

This skill covers finding root cause in *code*. A local service responds on its port but specific endpoints fail. You restarted/rebuilt a service and the old symptom is unchanged. A native-module / ABI error appears in the service's stderr.

## Facts
- The service-debugging skill covers finding root cause in *code*.
- This skill covers a different class: a long-running local service (Node/Python daemon under launchd/systemd, or any always-on local server) that is "up" but misbehaving — one endpoint 500s, a rebuild "worked" but the symptom persists, auth "should" be right but calls fail.

## Concepts
- Node/Python debugging

_Importance: 8 · Confidence: 0.9_
