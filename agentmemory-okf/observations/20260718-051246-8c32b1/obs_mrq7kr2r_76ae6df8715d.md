---
type: CommandRun
title: Explore Hermes home directory structure
description: Listing contents of ~/.hermes/ and profiles to understand layout
resource: agentmemory://observation/obs_mrq7kr2r_76ae6df8715d
tags: ["directory structure", "configuration management", "Hermes CLI", "state management", "commandrun"]
timestamp: 2026-07-18T10:12:59.276523+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 3
confidence: 1
---
# Summary

The command was executed to explore the Hermes home directory structure, revealing a complex layout with configuration files, caches, logs, and profile directories. This provides context on the application's data storage, state management, and configuration layout.

## Facts
- Hermes home directory is located at ~/.hermes/
- Contains core config files: config.yaml, auth.json, .env
- Contains key directories: profiles/, hermes-agent/, cache/, logs/, memories/, mcp-tokens/, plugins/
- Profiles directory contains a 'default' profile
- Includes various cache files: models_dev_cache.json, ollama_cloud_models_cache.json, context_length_cache.yaml

## Concepts
- directory structure
- configuration management
- Hermes CLI
- state management

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/auth.json`
- `~/.hermes/profiles/default`

_Importance: 3 · Confidence: 1_
