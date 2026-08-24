---
type: FileRead
title: Read Hermes config: MCP, memory, and model settings
description: Lines 380-419 of ~/.hermes/config.yaml
resource: agentmemory://observation/obs_mrq8l4a1_82f536788fdb
tags: ["Hermes configuration", "MCP servers", "agentmemory", "LLM routing", "Kilo AI gateway", "fileread"]
timestamp: 2026-07-18T10:41:16.004384+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Read a section of the Hermes configuration file detailing chat platform integrations, MCP server definitions, memory management parameters, and default LLM model routing. This reveals the core infrastructure setup for the agent's external tool connectivity and model gateway.

## Facts
- File ~/.hermes/config.yaml has 876 total lines and is 21279 bytes.
- Matrix and Mattermost integrations are configured with require_mention: true.
- MCP servers configured include agentmemory (localhost:3111), comfyui, and mcp-router.
- Memory provider is agentmemory, enabled with flush_min_turns: 6 and memory_char_limit: 2200.
- Default model is kilo-auto/balanced routed via Kilo AI gateway (api.kilo.ai).
- Ollama context window is configured to 65536 tokens.

## Concepts
- Hermes configuration
- MCP servers
- agentmemory
- LLM routing
- Kilo AI gateway

## Files
- `~/.hermes/config.yaml`

_Importance: 5 · Confidence: 1_
