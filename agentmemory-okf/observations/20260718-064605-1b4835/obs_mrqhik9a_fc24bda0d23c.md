---
type: Error
title: Memory update failed due to size limit; BlueBubbles webhook fix documented
description: Hermes gateway IPv4/IPv6 localhost mismatch causes inbound webhook failure
resource: agentmemory://observation/obs_mrqhik9a_fc24bda0d23c
tags: ["IPv4 vs IPv6 localhost resolution", "Environment variable configuration", "Process group management", "BlueBubbles webhook integration", "Memory limit management", "error"]
timestamp: 2026-07-18T14:51:13.291176+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Attempted to update memory with a fix for BlueBubbles inbound webhooks failing due to IPv4/IPv6 localhost resolution mismatch in Hermes gateway. The operation failed because the new content exceeded the 2,200 character memory limit, requiring further consolidation. The documented fix involves setting the BLUEBUBBLES_WEBHOOK_HOST environment variable to a LAN IPv4 address and restarting the gateway outside the chat session.

## Facts
- Memory replace operation failed: 2,770/2,200 chars limit exceeded
- BlueBubbles webhook fix: Hermes binds to 127.0.0.1 (IPv4), BB resolves 'localhost' to ::1 (IPv6)
- Fix requires setting BLUEBUBBLES_WEBHOOK_HOST to LAN IPv4; 0.0.0.0 fails as it rewrites to localhost
- Gateway must be restarted from Terminal.app, not in-chat, due to process group guards
- Tahoe27 iMsg works via AppleScript; Private API requires SIP disabled and specific helper dylib

## Concepts
- IPv4 vs IPv6 localhost resolution
- Environment variable configuration
- Process group management
- BlueBubbles webhook integration
- Memory limit management

## Files
- `config.db`

_Importance: 6 · Confidence: 1_
