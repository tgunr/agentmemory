---
type: file_edit
title: Standalone / cron BlueBubbles SEND collides with gateway's webhook port issues
description: [Errno 48] - even though BB server is UP and live adapter is connected
resource: agentmemory://observation/obs_msgfzo0n_a309b8c59e96
tags: ["file_edit"]
timestamp: 2026-08-05T18:50:32.658542+00:00
source: agentmemory
session_id: 20260805_131611_e325ef
importance: 7
confidence: 0.75
---
# Summary

The bug occurs when the standalone send path is used and the endpoint collides with the active webhook on the server. This can lead to issues due to poor error handling. 
  Adding a webhook_enabled flag allows skip of listener and `_register_webhook` is better.

## Facts
- The standalone send path builds a fresh BlueBubblesAdapter, which starts its own inbound webhook listener on the gateway's port.
- Outbound send only needs the REST API - no listener required.

_Importance: 7 · Confidence: 0.75_
