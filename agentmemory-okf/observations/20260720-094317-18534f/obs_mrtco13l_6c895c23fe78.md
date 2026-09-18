---
type: discovery
title: AgentMemory Hermes Integration Rules & Troubleshooting
description: Session registration, secret resolution, profile config, and stale state pitfalls
resource: agentmemory://observation/obs_mrtco13l_6c895c23fe78
tags: ["AgentMemory integration", "Hermes Agent", "Environment variable fallback", "Session state management", "YAML configuration parsing", "API endpoint routing", "discovery"]
timestamp: 2026-07-20T14:58:48.844099+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 7
confidence: 1
---
# Summary

Retrieved integration rules for connecting Hermes Agent with AgentMemory. The skill outlines critical troubleshooting steps for secret resolution, session registration, and profile configuration, highlighting pitfalls like stringified YAML lists and stale session state overriding current config.

## Facts
- Secret resolution requires fallback to ~/.agentmemory/.env if AGENTMEMORY_SECRET env var is missing
- Hermes session IDs must be registered via POST /agentmemory/session/start to avoid orphaned observations in UI (port 3113)
- Session titles are read from ~/.hermes/state.db and pushed via POST /agentmemory/session/update
- Hermes agentmemory profile requires kilocode-provider and custom-provider in plugins.enabled
- Provider name must be exactly kilocode, not kilo, to match the credential pool
- hermes config set pitfall: list values may be stored as stringified JSON arrays instead of YAML lists
- Stale sessions in state.db store frozen model_config JSON that overrides config.yaml settings on resume

## Concepts
- AgentMemory integration
- Hermes Agent
- Environment variable fallback
- Session state management
- YAML configuration parsing
- API endpoint routing

## Files
- `~/.agentmemory/.env`
- `~/.hermes/state.db`
- `~/.hermes/profiles/agentmemory/config.yaml`

_Importance: 7 · Confidence: 1_
