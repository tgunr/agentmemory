---
type: discovery
title: AgentMemory and Hermes integration requirements
description: Rules cover secrets, session registration, title sync, and profile routing.
resource: agentmemory://observation/obs_mrqab1y0_94c018e798ac
tags: ["AgentMemory integration", "Hermes session registration", "secret resolution fallback", "session title synchronization", "YAML list serialization", "provider credential routing", "stale session configuration", "discovery"]
timestamp: 2026-07-18T11:29:25.652509+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 8
confidence: 1
---
# Summary

The integration requires explicit secret fallback handling, Hermes session registration, and deferred title synchronization to keep AgentMemory observations visible and correctly named. Provider routing also depends on exact plugin and provider configuration, while stale per-session model configuration can silently override profile fixes.

## Facts
- Native plugins must resolve AGENTMEMORY_SECRET from the environment first, then parse ~/.agentmemory/.env, and fail clearly before API calls if absent.
- Hermes custom session IDs must be registered through POST /agentmemory/session/start before observations are sent, or sessions remain orphaned and absent from the UI.
- Session titles should be read from ~/.hermes/state.db and pushed through POST /agentmemory/session/update on the next tool call.
- The AgentMemory UI uses port 3113; the API location is configured in ~/.agentmemory/.env.
- The agentmemory profile must enable kilocode-provider and custom-provider, and model.provider must be named kilocode rather than kilo.
- hermes config set can incorrectly serialize plugins.enabled as a YAML string; repair it using yaml.safe_load and yaml.dump or manual editing.
- Existing sessions persist a model_config JSON blob in state.db that can override corrected config.yaml provider settings when sessions resume or model synchronization runs.
- Profile verification uses hermes profile show, auth list, and config check; credentials should appear under kilocode and KILOCODE_API_KEY should pass validation.

## Concepts
- AgentMemory integration
- Hermes session registration
- secret resolution fallback
- session title synchronization
- YAML list serialization
- provider credential routing
- stale session configuration

## Files
- `~/.agentmemory/.env`
- `~/.hermes/state.db`
- `~/.hermes/profiles/agentmemory/config.yaml`

_Importance: 8 · Confidence: 1_
