---
type: CommandRun
title: Search for dotenv loading and allowlist config in gateway
description: Investigating how .env files are loaded and how allowed users are configured
resource: agentmemory://observation/obs_mrrog0s3_0719e3ec225a
tags: ["dotenv loading", "environment variables", "allowlist configuration", "startup initialization", "commandrun"]
timestamp: 2026-07-19T10:52:58.224765+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The command investigated how environment variables and .env files are loaded in the hermes-agent project. It revealed that gateway/run.py uses a custom load_hermes_dotenv function at startup, and allowlists for various platforms (Weixin, QQ) are read directly from environment variables using getenv() in gateway/config.py.

## Facts
- gateway/run.py calls load_hermes_dotenv() from hermes_cli.env_loader at startup (lines 1309, 1311, 1336)
- hermes_cli.config provides get_env_value_prefer_dotenv() function for reading env vars
- hermes_cli.auth uses get_env_value_prefer_dotenv() to retrieve sensitive config values
- gateway/config.py reads WEIXIN_ALLOWED_USERS, WEIXIN_GROUP_ALLOWED_USERS, QQ_ALLOWED_USERS, QQ_GROUP_ALLOWED_USERS via getenv()
- Allowlist configuration is handled via environment variables directly, not config files

## Concepts
- dotenv loading
- environment variables
- allowlist configuration
- startup initialization

## Files
- `gateway/run.py`
- `hermes_cli/env_loader.py`
- `hermes_cli/config.py`
- `hermes_cli/auth.py`
- `gateway/config.py`

_Importance: 5 · Confidence: 1_
