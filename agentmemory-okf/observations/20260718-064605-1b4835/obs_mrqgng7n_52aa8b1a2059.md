---
type: CommandRun
title: Verify BlueBubbles env vars and config
description: Checking for mismatch between .env and config.yaml BlueBubbles settings
resource: agentmemory://observation/obs_mrqgng7n_52aa8b1a2059
tags: ["BlueBubbles integration", "environment variables", "YAML configuration", "configuration mismatch", "plugin toolsets", "commandrun"]
timestamp: 2026-07-18T14:27:01.710316+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Verified BlueBubbles configuration across .env and config.yaml. Found that environment variables are properly set (server URL, password, allow_all_users) but the config.yaml bluebubbles.server_url field is empty, indicating a potential configuration mismatch that needs resolution.

## Facts
- ~/.hermes/.env line 489: BLUEBUBBLES_SERVER_URL=http://localhost:1234
- ~/.hermes/.env line 490: BLUEBUBBLES_PASSWORD is set (redacted)
- ~/.hermes/.env line 491: BLUEBUBBLES_ALLOW_ALL_USERS=true
- ~/.hermes/config.yaml line 707-714: bluebubbles.server_url is empty string ''
- config.yaml has group_sessions_per_user: true
- config.yaml known_plugin_toolsets includes cli:spotify and telegram:spotify
- Mismatch detected: env var sets server URL but config.yaml has empty server_url

## Concepts
- BlueBubbles integration
- environment variables
- YAML configuration
- configuration mismatch
- plugin toolsets

## Files
- `~/.hermes/.env`
- `~/.hermes/config.yaml`

_Importance: 5 · Confidence: 1_
