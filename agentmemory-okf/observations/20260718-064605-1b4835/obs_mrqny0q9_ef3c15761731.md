---
type: Search
title: Search for allowed_users and ALLOW_ALL_USERS patterns
description: Identifying authorization and user allowance mechanisms across gateway and CLI
resource: agentmemory://observation/obs_mrqny0q9_ef3c15761731
tags: ["Authorization middleware", "Environment variable configuration", "Platform registry", "Access control lists", "search"]
timestamp: 2026-07-18T17:51:12.173943+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Searched the codebase to understand how user authorization and "allow all users" flags are implemented. The search revealed a centralized authorization mixin that checks per-platform and global environment variables, alongside CLI and frontend components that configure and display these settings.

## Facts
- Found 50 matches across the codebase for user authorization and allow-all patterns.
- gateway/authz_mixin.py contains core logic mapping platforms to {PLATFORM}_ALLOW_ALL_USERS env vars and a global GATEWAY_ALLOW_ALL_USERS fallback.
- gateway/platform_registry.py defines the allowed_users_env field for platform entries.
- hermes_cli/gateway.py contains CLI commands that save various {PLATFORM}_ALLOW_ALL_USERS environment variables.
- web/src/pages/ChannelsPage.tsx handles allowed_users state in the frontend UI.

## Concepts
- Authorization middleware
- Environment variable configuration
- Platform registry
- Access control lists

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`
- `/Users/davec/.hermes/hermes-agent/gateway/platform_registry.py`
- `/Users/davec/.hermes/hermes-agent/hermes_cli/gateway.py`
- `/Users/davec/.hermes/hermes-agent/web/src/pages/ChannelsPage.tsx`
- `/Users/davec/.hermes/hermes-agent/gateway/pairing.py`
- `/Users/davec/.hermes/hermes-agent/gateway/config.py`
- `/Users/davec/.hermes/hermes-agent/hermes_cli/plugins.py`
- `/Users/davec/.hermes/hermes-agent/scripts/release.py`

_Importance: 6 · Confidence: 1_
