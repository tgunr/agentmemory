---
type: FileRead
title: Authz mixin: platform allowlist env var maps and authorization flow
description: Multi-platform gateway authorization logic with allowlists, role auth, and pairing
resource: agentmemory://observation/obs_mrqny7j7_dff8d1318d64
tags: ["platform authorization allowlist", "environment variable based access control", "multi-platform messaging gateway", "role-based authorization", "pairing code approval flow", "plugin platform registry", "fileread"]
timestamp: 2026-07-18T17:51:20.988478+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Read the authorization mixin for the Hermes gateway, which implements a multi-layered auth flow across 18+ messaging platforms. The logic checks platform-specific allow-all env vars, adapter-verified role authorization, and operator-approved pairing codes as a union with allowlists. Plugin platforms are dynamically resolved via a platform registry.

## Facts
- File defines platform_env_map, platform_group_user_env_map, platform_group_chat_env_map, and platform_allow_all_map dictionaries mapping Platform enums to environment variable names
- Supported platforms: TELEGRAM, DISCORD, WHATSAPP, WHATSAPP_CLOUD, SLACK, SIGNAL, EMAIL, SMS, MATTERMOST, MATRIX, DINGTALK, FEISHU, WECOM, WECOM_CALLBACK, WEIXIN, BLUEBUBBLES, QQBOT, YUANBAO
- Plugin platforms handled dynamically via gateway.platform_registry.platform_registry lookup (lines 414-424)
- Authorization flow: (1) per-platform allow-all env var check (e.g. DISCORD_ALLOW_ALL_USERS=true), (2) adapter-verified role_authorized attribute check (line 436), (3) pairing store check for operator-approved pairing codes
- role_authorized uses "is True" comparison to prevent MagicMock from test fixtures passing authorization (pitfall #13 reference)
- Pairing store authorization is a UNION with allowlist — paired users authorized regardless of allowlist configuration

## Concepts
- platform authorization allowlist
- environment variable based access control
- multi-platform messaging gateway
- role-based authorization
- pairing code approval flow
- plugin platform registry

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`

_Importance: 6 · Confidence: 1_
