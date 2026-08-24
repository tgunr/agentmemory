---
type: FileRead
title: Reviewed platform authorization environment mappings
description: Authorization supports built-in and plugin platform configuration.
resource: agentmemory://observation/obs_mrroegw6_c55500f9bf9d
tags: ["platform authorization", "environment variable configuration", "plugin registry", "allow-all authentication bypass", "Discord role authorization", "fileread"]
timestamp: 2026-07-19T10:51:45.793811+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The authorization mixin centralizes environment-variable mappings for many messaging platforms and dynamically extends them for plugin platforms. It also implements a platform-specific allow-all bypass before proceeding to adapter-verified role checks.

## Facts
- Built-in platforms map to allowed-user and allow-all environment variables, with Telegram-specific group user/chat mappings and a QQ group mapping.
- Unknown platforms are resolved through gateway.platform_registry, using registry entry allowed_users_env and allow_all_env values when available.
- Authorization immediately succeeds when the platform-specific allow-all variable is set to true, 1, or yes, case-insensitively.
- The following section begins adapter-verified role authorization for Discord, requiring a real boolean field rather than a MagicMock-like value.

## Concepts
- platform authorization
- environment variable configuration
- plugin registry
- allow-all authentication bypass
- Discord role authorization

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`

_Importance: 3 · Confidence: 1_
