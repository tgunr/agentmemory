---
type: CommandRun
title: Restart Hermes gateway when blocked by lifecycle guard
description: Error while running hermes gateway restart
resource: agentmemory://observation/obs_mvhuw93c_1af30a355b5a
tags: ["Lifecycle guard blocking gateway restart", "commandrun"]
timestamp: 2026-10-21T08:34:40.754648+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 8
confidence: 0.9
---
# Summary

The post_tool_call hook executed successfully, but the hermes gateway restart command failed due to the lifecycle guard.

## Facts
- The lifecycle guard prevents the hermes gateway restart command from running

## Concepts
- Lifecycle guard blocking gateway restart

## Files
- `/tmp/ai.hermes.gateway.plist`

_Importance: 8 · Confidence: 0.9_
