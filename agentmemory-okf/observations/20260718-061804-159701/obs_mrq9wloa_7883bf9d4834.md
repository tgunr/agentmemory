---
type: FileRead
title: AgentMemory-Hermes Integration Skill Documentation
description: Troubleshooting rules for session registration, title sync, and secret resolution
resource: agentmemory://observation/obs_mrq9wloa_7883bf9d4834
tags: ["AgentMemory integration", "Hermes Agent", "session registration", "secret resolution", "environment variable fallback", "profile configuration", "YAML list serialization", "state database", "fileread"]
timestamp: 2026-07-18T11:18:11.382193+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 7
confidence: 1
---
# Summary

Viewed the agentmemory-hermes-integration skill which documents critical integration rules between AgentMemory and Hermes Agent. The skill covers secret resolution fallbacks, mandatory session registration flow, title synchronization from Hermes state database, and profile configuration requirements including a pitfall where list values get stored as strings and stale session data can override config changes.

## Facts
- Native plugins must load AGENTMEMORY_SECRET from ~/.agentmemory/.env as fallback when env var is missing
- Hermes TUI session IDs (format: YYYYMMDD_HHMMSS_hash) must be registered via POST /agentmemory/session/start before sending observations
- Session titles must be read from ~/.hermes/state.db and pushed via POST /agentmemory/session/update
- AgentMemory UI runs on port 3113
- agentmemory profile requires kilocode-provider and custom-provider in plugins.enabled
- Kilo Code provider must be named 'kilocode' not 'kilo' in model.provider config
- hermes config set may store list values as YAML strings instead of actual lists
- Existing sessions in state.db store model_config JSON blob that overrides config.yaml provider settings

## Concepts
- AgentMemory integration
- Hermes Agent
- session registration
- secret resolution
- environment variable fallback
- profile configuration
- YAML list serialization
- state database
- API gateway routing

## Files
- `~/.agentmemory/.env`
- `~/.hermes/state.db`
- `~/.hermes/profiles/agentmemory/config.yaml`

_Importance: 7 · Confidence: 1_
