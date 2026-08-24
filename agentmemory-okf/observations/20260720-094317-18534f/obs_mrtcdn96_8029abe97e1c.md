---
type: CommandRun
title: Verify agentmemory .env, install paths, and Hermes MCP config
description: Diagnostic check for agentmemory secret, wrapper script, and Hermes MCP integration
resource: agentmemory://observation/obs_mrtcdn96_8029abe97e1c
tags: ["agentmemory MCP integration", "Hermes MCP config", "wrapper script pattern", "environment secret management", "commandrun"]
timestamp: 2026-07-20T14:50:44.343028+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

A diagnostic command verified the agentmemory setup: the .env file exists with a 64-char secret, the wrapper script and config are in expected locations, and Hermes MCP is configured to invoke the wrapper with localhost:3111 as the backend URL.

## Facts
- ~/.agentmemory/.env exists and is 11906 bytes
- AGENTMEMORY_SECRET extracted from .env is 64 characters long
- agentmemory-wrapper.sh located at /Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh
- iii-config.yaml located at /Users/davec/.agentmemory/iii-config.yaml
- Hermes MCP agentmemory config: command=/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh, enabled=true, env AGENTMEMORY_URL=http://localhost:3111
- Hermes config file at ~/.hermes/profiles/default/config.yaml

## Concepts
- agentmemory MCP integration
- Hermes MCP config
- wrapper script pattern
- environment secret management

## Files
- `/Users/davec/.agentmemory/.env`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`
- `/Users/davec/.agentmemory/iii-config.yaml`
- `/Users/davec/.hermes/profiles/default/config.yaml`

_Importance: 5 · Confidence: 1_
