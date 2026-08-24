---
type: CommandRun
title: Audit ~/.hermes directory structure and database locations
description: Inspecting profiles, agentmemory remnants, and state.db distribution
resource: agentmemory://observation/obs_mrq8jiw7_a0e78e7dcc1f
tags: ["Hermes profiles", "SQLite state management", "Agentmemory integration remnants", "Directory structure auditing", "commandrun"]
timestamp: 2026-07-18T10:40:01.635764+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

Executed a diagnostic command to audit the ~/.hermes directory structure, checking for orphaned directories, leftover agentmemory integration files, and the distribution of SQLite databases across profiles. The output confirms a clean profile list without the 'jo' directory, highlights several agentmemory backup configs still present, and maps out where session, project, and verification state databases are stored.

## Facts
- 9 active profiles found in ~/.hermes/profiles/: ai, cc, default, develop, ollama, personal, pveroot, ranch, shop
- No orphaned 'jo/' directory exists in ~/.hermes
- agentmemory remnants include a plugin, debug log, skill, and 5 config.yaml.bak.agentmemory-fix backups
- state.db exists in the root ~/.hermes/ directory and in all 9 profiles
- projects.db exists in 8 profiles (all except ollama)
- verification_evidence.db exists in pveroot, ai, and cc profiles

## Concepts
- Hermes profiles
- SQLite state management
- Agentmemory integration remnants
- Directory structure auditing

## Files
- `~/.hermes/state.db`
- `~/.hermes/plugins/agentmemory_observer.py`
- `~/.hermes/plugins/agentmemory_observer_debug.log`
- `~/.hermes/profiles/*/state.db`
- `~/.hermes/profiles/*/projects.db`
- `~/.hermes/profiles/*/verification_evidence.db`
- `~/.hermes/profiles/*/config.yaml.bak.agentmemory-fix`

_Importance: 4 · Confidence: 1_
