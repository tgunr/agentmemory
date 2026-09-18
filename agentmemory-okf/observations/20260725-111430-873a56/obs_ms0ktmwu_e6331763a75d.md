---
type: CommandRun
title: Tail API status and plugin output
description: Probe authentication shape and plugin output
resource: agentmemory://observation/obs_ms0ktmwu_e6331763a75d
tags: ["curl", "commandrun"]
timestamp: 2026-07-25T16:21:30.555437+00:00
source: agentmemory
session_id: 20260725_111430_873a56
importance: 4
confidence: 1
---
# Summary

The terminal tool was used to execute a series of commands that probe the authentication shape and plugin output from an API server running on port 9119.

## Facts
- Command executed: echo &quot;=== /api/status (probe auth shape) ===\&quot ;) | curl -s -m 5 &quot;http://127.0.0.1:9119/api/status&quot;
- Command executed: echo &quot;=== /api/plugins?profile=ai with session token ===\&quot; | curl -s -m 5 -H &quot;Authorization: Bearer ${TOKEN}&quot; &quot;http://127.0.0.1:9119/api/plugins?profile=ai&quot;
- Command executed: echo &quot;=== /api/plugins?profile=ai with X-Session-Token ===\&quot; | curl -s -m 5 -H &quot;X-Session-Token: ${TOKEN}&quot; &quot;http://127.0.0.1:9119/api/plugins?profile=ai&quot;
- Output result: API status {&#39;version’: &#39;0.18.2&#39;}
- Output result: Plugin output: No such API endpoint: /api/plugins

## Concepts
- curl

_Importance: 4 · Confidence: 1_
