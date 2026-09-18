---
type: FileRead
title: Read authz_mixin.py authorization logic lines 435-490
description: Gateway authorization mixin with pairing store and allowlist checks
resource: agentmemory://observation/obs_mrroela3_8201268e322d
tags: ["authorization middleware", "allowlist checking", "pairing store verification", "multiplex gateway routing", "fail-open security", "fileread"]
timestamp: 2026-07-19T10:51:51.478776+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Read authorization mixin code implementing multi-layer authorization checks for gateway messages. The logic validates users through role authorization, pairing store entries, and configurable allowlists while enforcing security invariants against fail-open behavior. Multiplex gateways route to per-profile pairing stores for isolation.

## Facts
- Checked source.role_authorized attribute for explicit True value
- Queried PairingStore for approved users via _pairing_store_for() and is_approved()
- Read platform allowlist from environment variables using platform_env_map
- Loaded group_user_allowlist and group_chat_allowlist for group/forum chat types
- Referenced global GATEWAY_ALLOWED_USERS env var as final allowlist check
- Security logic prevents fail-open when no allowlist configured per SECURITY.md §2.6
- Mentioned issue #23778 regarding original bypass bug and separate gate fix

## Concepts
- authorization middleware
- allowlist checking
- pairing store verification
- multiplex gateway routing
- fail-open security

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`

_Importance: 7 · Confidence: 1_
