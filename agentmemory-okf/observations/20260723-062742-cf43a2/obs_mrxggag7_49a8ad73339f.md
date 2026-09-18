---
type: file_edit
title: terminal command failed to start FM server
description: No FM server is running.
resource: agentmemory://observation/obs_mrxggag7_49a8ad73339f
tags: ["file_edit"]
timestamp: 2026-07-23T11:55:50.812714+00:00
source: agentmemory
session_id: 20260723_062742_cf43a2
importance: 6
confidence: 0.75
---
# Summary

The command 'sleep 2 && curl -s --max-time 5 http://127.0.0.1:8001/v1/models > /dev/null && echo "FM server is running" || echo "FM server failed to start"' in the terminal returned an error and was not successful.

## Facts
- Post-hook timestamp: 2026-07-23T11:55:50.812714+00:00 was invalid due to non-existent post_tool_call hook, it should have been set at init, then triggered by terminal command

_Importance: 6 · Confidence: 0.75_
