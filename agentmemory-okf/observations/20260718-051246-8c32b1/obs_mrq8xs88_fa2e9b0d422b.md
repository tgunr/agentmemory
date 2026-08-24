---
type: FileRead
title: AgentMemory Hermes Integration Skill Documentation
description: Viewed skill containing troubleshooting rules for AgentMemory-Hermes integration
resource: agentmemory://observation/obs_mrq8xs88_fa2e9b0d422b
tags: ["AgentMemory integration", "Hermes Agent configuration", "Secret resolution", "Session registration", "Provider naming", "YAML list-value pitfall", "fileread"]
timestamp: 2026-07-18T10:51:06.917956+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 7
confidence: 1
---
# Summary

Accessed skill documentation detailing troubleshooting and configuration rules for integrating AgentMemory with Hermes Agent. Covers secret resolution, session registration flow, title synchronization, and critical profile configuration requirements including plugin and provider naming conventions.

## Facts
- Skill name: agentmemory-hermes-integration, version 1.2.0, author: davec
- AGENTMEMORY_SECRET must be loaded from ~/.agentmemory/.env as fallback to avoid 401 errors
- Hermes TUI session IDs must be registered via POST /agentmemory/session/start before observations
- AgentMemory UI runs on port 3113, API configured in ~/.agentmemory/.env
- plugins.enabled must include kilocode-provider and custom-provider for proper routing
- Provider must be named 'kilocode' not 'kilo' to match credential pool

## Concepts
- AgentMemory integration
- Hermes Agent configuration
- Secret resolution
- Session registration
- Provider naming
- YAML list-value pitfall

## Files
- `agentmemory-hermes-integration`

_Importance: 7 · Confidence: 1_
