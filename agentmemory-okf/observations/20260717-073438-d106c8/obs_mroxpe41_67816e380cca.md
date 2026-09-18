---
type: CommandRun
title: Search for agentmemory-kilo-hooks references in config files
description: Discovering configuration locations for kilo hooks integration
resource: agentmemory://observation/obs_mroxpe41_67816e380cca
tags: ["agentmemory configuration", "kilo hooks integration", "configuration file discovery", "hook references", "commandrun"]
timestamp: 2026-07-17T12:48:53.405941+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Executed a grep and find command to locate all configuration files referencing "agentmemory-kilo-hooks". The search identified the main configuration in kilo.jsonc, the standalone agentmemory config, backup files, and historical session dumps, providing a complete map of where this hook integration is configured.

## Facts
- Found references in /Users/davec/.agentmemory/standalone.json
- Found references in /Users/davec/.agentmemory/backups/kilo-2026-05-24T12-15-30-536Z.json
- Found references in /Users/davec/.config/kilo/kilo.jsonc
- Found references in multiple session dump files under /Users/davec/.hermes/jo/sessions/
- Command searched ~/.agentmemory, ~/.config, and JSON files up to 4 levels deep in home directory

## Concepts
- agentmemory configuration
- kilo hooks integration
- configuration file discovery
- hook references

## Files
- `/Users/davec/.agentmemory/standalone.json`
- `/Users/davec/.agentmemory/backups/kilo-2026-05-24T12-15-30-536Z.json`
- `/Users/davec/.config/kilo/kilo.jsonc`

_Importance: 5 · Confidence: 1_
