---
type: CommandRun
title: Diagnostic check of agentmemory service and session database
description: Verifying service health and exploring memory provider configurations
resource: agentmemory://observation/obs_mrq8mctf_9cfd469acda3
tags: ["agentmemory service", "memory provider configuration", "SQLite schema inspection", "session management", "profile-based configuration", "commandrun"]
timestamp: 2026-07-18T10:42:13.724658+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Diagnostic commands were run to verify agentmemory service health and explore the configuration landscape. The service is healthy and responding. Multiple memory providers are configured across different profiles, with 'agentmemory' being the default. An attempt to query sessions for pruning candidates failed because the sessions table schema doesn't include an updated_at column, though the full schema was successfully retrieved showing 44 columns including started_at and ended_at.

## Facts
- agentmemory service is alive on 127.0.0.1:3111 with viewerPort 3113
- memory.provider values vary by profile: auto, nous, agentmemory, ollama-launch, kilocode
- default profile uses agentmemory provider
- state.db sessions table has 44 columns including id, source, user_id, model, title, started_at, ended_at, message_count, tool_call_count, token counts, cost fields, git metadata
- sessions table does NOT have updated_at column (query failed)
- Config files located at ~/.hermes/config.yaml and ~/.hermes/profiles/*/config.yaml

## Concepts
- agentmemory service
- memory provider configuration
- SQLite schema inspection
- session management
- profile-based configuration

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/profiles/ai/config.yaml`
- `~/.hermes/profiles/cc/config.yaml`
- `~/.hermes/profiles/default/config.yaml`
- `~/.hermes/profiles/develop/config.yaml`
- `~/.hermes/profiles/ollama/config.yaml`
- `~/.hermes/profiles/personal/config.yaml`
- `~/.hermes/profiles/pveroot/config.yaml`
- `~/.hermes/profiles/ranch/config.yaml`
- `~/.hermes/profiles/shop/config.yaml`
- `~/.hermes/state.db`

_Importance: 5 · Confidence: 1_
