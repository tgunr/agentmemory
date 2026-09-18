---
type: FileRead
title: Reviewed group and user allowlist authorization logic
description: Authorization supports Telegram chat IDs, legacy configuration, and user aliases.
resource: agentmemory://observation/obs_mrqnya20_e5e4813985c0
tags: ["authorization allowlists", "Telegram group authorization", "backward compatibility shim", "environment variable configuration", "WhatsApp LID alias resolution", "fileread"]
timestamp: 2026-07-18T17:51:24.260901+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The authorization mixin separates Telegram group chat-ID authorization from sender user-ID authorization while preserving compatibility with older misconfigured environments. It also supports wildcard access, normalized user identifiers, and platform-specific WhatsApp aliases.

## Facts
- If no allowlists are configured, access depends on GATEWAY_ALLOW_ALL_USERS being true, 1, or yes.
- Group/forum traffic is allowed when the source chat ID or wildcard "*" appears in the group chat allowlist.
- For backward compatibility, negative values in TELEGRAM_GROUP_ALLOWED_USERS are treated as Telegram chat IDs, with a one-time warning directing users to TELEGRAM_GROUP_ALLOWED_CHATS.
- User authorization combines platform, group-user, and global allowlists; wildcard "*" allows everyone.
- User IDs containing "@" are also checked using the portion before "@".
- WhatsApp authorization begins expanding phone-to-LID aliases from bridge session mappings, but the read output was truncated during that logic.

## Concepts
- authorization allowlists
- Telegram group authorization
- backward compatibility shim
- environment variable configuration
- WhatsApp LID alias resolution

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`

_Importance: 3 · Confidence: 1_
