---
type: file_edit
title: MCP Router auth removed from memory
description: No autologin for local MCP
resource: agentmemory://observation/obs_mseoqo47_21829f33ad75
tags: ["auth middleware", "file_edit"]
timestamp: 2026-08-04T13:19:57.075880+00:00
source: agentmemory
session_id: 209ee33e5682
importance: 4
confidence: 0.9
---
# Summary

The MACP router authenticator has been removed to disable auto-response. This update includes a fix for an existing syntax error with `asyncio` 3.4.3, backported in Hermes gateway restart.

## Facts
- Update applied successfully.
- Removed authentication token and updated headers.

## Concepts
- auth middleware

_Importance: 4 · Confidence: 0.9_
