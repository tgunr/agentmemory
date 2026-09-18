---
type: FileRead
title: Read AgentMemory–Hermes integration troubleshooting rules
description: Skill version 1.2.0 documents secrets, sessions, titles, and profile setup
resource: agentmemory://observation/obs_mrq8lucy_004386f6c766
tags: ["AgentMemory integration", "Hermes session registration", "secret resolution fallback", "session title synchronization", "YAML configuration", "provider credential matching", "stale session state", "fileread"]
timestamp: 2026-07-18T10:41:49.804617+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 3
confidence: 1
---
# Summary

The skill defines operational requirements for reliable AgentMemory integration with Hermes, including secret fallback, explicit session registration, title synchronization, and correct provider/plugin configuration. It also warns that malformed YAML list values and stale per-session model configuration can silently override profile fixes.

## Facts
- Native plugins must resolve AGENTMEMORY_SECRET from os.environ first, then parse ~/.agentmemory/.env, and fail clearly before API calls if absent.
- Hermes custom session IDs must be registered with POST /agentmemory/session/start before observations are sent, or sessions remain orphaned and absent from the UI.
- Session titles must be read from ~/.hermes/state.db and synchronized through POST /agentmemory/session/update on the next tool call.
- AgentMemory UI uses port 3113; the API endpoint is configured in ~/.agentmemory/.env.
- The agentmemory profile must enable kilocode-provider and custom-provider plugins.
- The Kilo Code provider must be named kilocode rather than kilo to match the credential pool.
- Profile verification uses hermes profile show, auth list, and config check; auth must show kilocode credentials and config check must recognize KILOCODE_API_KEY.
- hermes config set may serialize list values as YAML strings; repair malformed plugins.enabled values using yaml.safe_load and yaml.dump or manual editing.
- Existing sessions persist a model_config JSON blob in state.db that can override corrected config.yaml provider settings when sessions resume or model synchronization runs.
- The observed file output was truncated while beginning to describe stale-provider log symptoms.

## Concepts
- AgentMemory integration
- Hermes session registration
- secret resolution fallback
- session title synchronization
- YAML configuration
- provider credential matching
- stale session state

## Files
- `~/.hermes/skills/autonomous-ai-agents/agentmemory-hermes-integration/SKILL.md`
- `~/.agentmemory/.env`
- `~/.hermes/state.db`
- `~/.hermes/profiles/agentmemory/config.yaml`

_Importance: 3 · Confidence: 1_
