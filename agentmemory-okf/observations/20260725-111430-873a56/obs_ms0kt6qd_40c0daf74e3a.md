---
type: WebFetch
title: Blocked response from internal plugin
description: No external proxy found for web_extract
resource: agentmemory://observation/obs_ms0kt6qd_40c0daf74e3a
tags: ["private network authentication", "proxy configuration", "webfetch"]
timestamp: 2026-07-25T16:21:09.585805+00:00
source: agentmemory
session_id: 20260725_111430_873a56
importance: 4
confidence: 0.9
---
# Summary

The web_extract tool was unable to make the specified request due to an internal network block, and no external proxy could be configured.

## Facts
- Blocked by URL targets a private or internal network address at http://127.0.0.1:9119/plugins?profile=ai
- No external proxy available in the current environment

## Concepts
- private network authentication
- proxy configuration

_Importance: 4 · Confidence: 0.9_
